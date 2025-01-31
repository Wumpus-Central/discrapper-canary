n.d(t, { Z: () => E });
var i,
    s,
    a,
    l = n(31775),
    r = n.n(l),
    o = n(442837),
    u = n(570140),
    d = n(70956);
let c = {
        taken: null,
        error: void 0,
        rateLimited: !0
    },
    m = {
        validations: new (r())({
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
class g extends (a = o.ZP.Store) {
    isRateLimited() {
        return null != m.retryAfterTime && Date.now() < m.retryAfterTime;
    }
    validate(e) {
        let t = m.validations.get(e);
        return this.isRateLimited() && (null == t || t.rateLimited) ? c : this.isRateLimited() || null == t || !t.rateLimited ? t : void 0;
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
(s = 'PomeloStore'),
    (i = 'displayName') in g
        ? Object.defineProperty(g, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (g[i] = s);
let E = new g(u.Z, {
    POMELO_ATTEMPT_SUCCESS: function (e) {
        let { username: t, taken: n } = e;
        m.validations.set(t, { taken: n });
    },
    POMELO_ATTEMPT_FAILURE: function (e) {
        let { username: t, error: n, statusCode: i, retryAfter: s } = e;
        429 === i
            ? m.validations.set(
                  t,
                  {
                      taken: null,
                      error: n,
                      rateLimited: !0
                  },
                  (null != s ? s : 7) * d.Z.Millis.SECOND
              )
            : m.validations.set(t, {
                  taken: null,
                  error: n
              }),
            null != s && (m.retryAfterTime = Date.now() + s * d.Z.Millis.SECOND);
    },
    POMELO_SUGGESTIONS_RESET: function () {
        (m.suggestions.migration = {
            suggestion: { username: void 0 },
            fetched: !1,
            usernameSuggestionLoading: !1
        }),
            (m.suggestions.registration = {
                suggestion: { username: void 0 },
                source: void 0,
                fetched: !1
            });
    },
    POMELO_SUGGESTIONS_SUCCESS: function (e) {
        let { suggestion: t } = e;
        (m.suggestions.migration = {
            suggestion: t,
            fetched: !0,
            usernameSuggestionLoading: !1
        }),
            (null == t ? void 0 : t.invalid_current_username) === !0 && (m.currentUsernameInvalid = !0);
    },
    POMELO_SUGGESTIONS_FETCH: function (e) {
        let { usernameSuggestionLoading: t } = e;
        m.suggestions.migration.usernameSuggestionLoading = t;
    },
    POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function (e) {
        let { suggestion: t, source: n } = e;
        (m.suggestions.registration = {
            suggestion: t,
            source: n,
            fetched: !0
        }),
            (null == t ? void 0 : t.username) != null && m.validations.set(t.username, { taken: !1 });
    }
});
