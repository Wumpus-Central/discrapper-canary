r.d(t, { Z: () => f });
var n,
    i,
    a,
    o = r(31775),
    s = r.n(o),
    l = r(442837),
    c = r(570140),
    u = r(70956);
let d = {
        taken: null,
        error: void 0,
        rateLimited: !0
    },
    m = {
        validations: new (s())({
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
class g extends (a = l.ZP.Store) {
    isRateLimited() {
        return null != m.retryAfterTime && Date.now() < m.retryAfterTime;
    }
    validate(e) {
        let t = m.validations.get(e);
        return this.isRateLimited() && (null == t || t.rateLimited) ? d : this.isRateLimited() || null == t || !t.rateLimited ? t : void 0;
    }
    registrationUsernameSuggestion() {
        return m.suggestions.registration.suggestion.username;
    }
    usernameSuggestion() {
        return m.suggestions.migration.suggestion.username;
    }
    usernameSuggestionLoading() {
        return m.suggestions.migration.usernameSuggestionLoading;
    }
    isCurrentUsernameInvalid() {
        return m.currentUsernameInvalid;
    }
    wasRegistrationSuggestionFetched(e) {
        return m.suggestions.registration.source === e && m.suggestions.registration.fetched;
    }
    wasSuggestionsFetched() {
        return m.suggestions.migration.fetched;
    }
}
((i = 'PomeloStore'),
    (n = 'displayName') in g
        ? Object.defineProperty(g, n, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (g[n] = i));
let f = new g(c.Z, {
    POMELO_ATTEMPT_SUCCESS: function (e) {
        let { username: t, taken: r } = e;
        m.validations.set(t, { taken: r });
    },
    POMELO_ATTEMPT_FAILURE: function (e) {
        let { username: t, error: r, statusCode: n, retryAfter: i } = e;
        (429 === n
            ? m.validations.set(
                  t,
                  {
                      taken: null,
                      error: r,
                      rateLimited: !0
                  },
                  (null != i ? i : 7) * u.Z.Millis.SECOND
              )
            : m.validations.set(t, {
                  taken: null,
                  error: r
              }),
            null != i && (m.retryAfterTime = Date.now() + i * u.Z.Millis.SECOND));
    },
    POMELO_SUGGESTIONS_RESET: function () {
        ((m.suggestions.migration = {
            suggestion: { username: void 0 },
            fetched: !1,
            usernameSuggestionLoading: !1
        }),
            (m.suggestions.registration = {
                suggestion: { username: void 0 },
                source: void 0,
                fetched: !1
            }));
    },
    POMELO_SUGGESTIONS_SUCCESS: function (e) {
        let { suggestion: t } = e;
        ((m.suggestions.migration = {
            suggestion: t,
            fetched: !0,
            usernameSuggestionLoading: !1
        }),
            (null == t ? void 0 : t.invalid_current_username) === !0 && (m.currentUsernameInvalid = !0));
    },
    POMELO_SUGGESTIONS_FETCH: function (e) {
        let { usernameSuggestionLoading: t } = e;
        m.suggestions.migration.usernameSuggestionLoading = t;
    },
    POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function (e) {
        let { suggestion: t, source: r } = e;
        ((m.suggestions.registration = {
            suggestion: t,
            source: r,
            fetched: !0
        }),
            (null == t ? void 0 : t.username) != null && m.validations.set(t.username, { taken: !1 }));
    }
});
