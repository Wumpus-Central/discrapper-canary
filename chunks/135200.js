r.d(t, { Z: () => f });
var n,
    i,
    s,
    o = r(31775),
    a = r.n(o),
    l = r(442837),
    c = r(570140),
    u = r(70956);
let d = {
        taken: null,
        error: void 0,
        rateLimited: !0
    },
    g = {
        validations: new (a())({
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
class m extends (s = l.ZP.Store) {
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
    (n = 'displayName') in m
        ? Object.defineProperty(m, n, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[n] = i);
let f = new m(c.Z, {
    POMELO_ATTEMPT_SUCCESS: function (e) {
        let { username: t, taken: r } = e;
        g.validations.set(t, { taken: r });
    },
    POMELO_ATTEMPT_FAILURE: function (e) {
        let { username: t, error: r, statusCode: n, retryAfter: i } = e;
        429 === n
            ? g.validations.set(
                  t,
                  {
                      taken: null,
                      error: r,
                      rateLimited: !0
                  },
                  (null != i ? i : 7) * u.Z.Millis.SECOND
              )
            : g.validations.set(t, {
                  taken: null,
                  error: r
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
        let { suggestion: t, source: r } = e;
        (g.suggestions.registration = {
            suggestion: t,
            source: r,
            fetched: !0
        }),
            (null == t ? void 0 : t.username) != null && g.validations.set(t.username, { taken: !1 });
    }
});
