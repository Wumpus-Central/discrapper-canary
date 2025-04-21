n.d(t, { Z: () => f });
var r,
    i,
    s,
    o = n(31775),
    l = n.n(o),
    a = n(442837),
    c = n(570140),
    u = n(70956);
let d = {
        taken: null,
        error: void 0,
        rateLimited: !0
    },
    g = {
        validations: new (l())({
            max: 100,
            maxAge: 60000
        }),
        currentUsernameInvalid: !1,
        retryAfterTime: null,
        suggestions: {
            migration: {
                suggestion: { username: void 0 },
                fetched: !1,
                usernameSuggestionLoading: !1
            },
            registration: {
                suggestion: { username: void 0 },
                source: void 0,
                fetched: !1
            }
        }
    };
class m extends (s = a.ZP.Store) {
    isRateLimited() {
        return null != g.retryAfterTime && Date.now() < g.retryAfterTime;
    }
    validate(e) {
        let t = g.validations.get(e);
        return this.isRateLimited() && (null == t || t.rateLimited) ? d : this.isRateLimited() || null == t || !t.rateLimited ? t : void 0;
    }
    registrationUsernameSuggestion() {
        return g.suggestions.registration.suggestion.username;
    }
    usernameSuggestion() {
        return g.suggestions.migration.suggestion.username;
    }
    usernameSuggestionLoading() {
        return g.suggestions.migration.usernameSuggestionLoading;
    }
    isCurrentUsernameInvalid() {
        return g.currentUsernameInvalid;
    }
    wasRegistrationSuggestionFetched(e) {
        return g.suggestions.registration.source === e && g.suggestions.registration.fetched;
    }
    wasSuggestionsFetched() {
        return g.suggestions.migration.fetched;
    }
}
(i = 'PomeloStore'),
    (r = 'displayName') in m
        ? Object.defineProperty(m, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[r] = i);
let f = new m(c.Z, {
    POMELO_ATTEMPT_SUCCESS: function (e) {
        let { username: t, taken: n } = e;
        g.validations.set(t, { taken: n });
    },
    POMELO_ATTEMPT_FAILURE: function (e) {
        let { username: t, error: n, statusCode: r, retryAfter: i } = e;
        429 === r
            ? g.validations.set(
                  t,
                  {
                      taken: null,
                      error: n,
                      rateLimited: !0
                  },
                  (null != i ? i : 7) * u.Z.Millis.SECOND
              )
            : g.validations.set(t, {
                  taken: null,
                  error: n
              }),
            null != i && (g.retryAfterTime = Date.now() + i * u.Z.Millis.SECOND);
    },
    POMELO_SUGGESTIONS_RESET: function () {
        (g.suggestions.migration = {
            suggestion: { username: void 0 },
            fetched: !1,
            usernameSuggestionLoading: !1
        }),
            (g.suggestions.registration = {
                suggestion: { username: void 0 },
                source: void 0,
                fetched: !1
            });
    },
    POMELO_SUGGESTIONS_SUCCESS: function (e) {
        let { suggestion: t } = e;
        (g.suggestions.migration = {
            suggestion: t,
            fetched: !0,
            usernameSuggestionLoading: !1
        }),
            (null == t ? void 0 : t.invalid_current_username) === !0 && (g.currentUsernameInvalid = !0);
    },
    POMELO_SUGGESTIONS_FETCH: function (e) {
        let { usernameSuggestionLoading: t } = e;
        g.suggestions.migration.usernameSuggestionLoading = t;
    },
    POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function (e) {
        let { suggestion: t, source: n } = e;
        (g.suggestions.registration = {
            suggestion: t,
            source: n,
            fetched: !0
        }),
            (null == t ? void 0 : t.username) != null && g.validations.set(t.username, { taken: !1 });
    }
});
