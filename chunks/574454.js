n.d(t, {
    A: () => f,
});
var r,
    i,
    s = n(635377),
    l = n.n(s),
    a = n(311907),
    o = n(73153),
    c = n(927813);
let u = {
        taken: null,
        error: void 0,
        rateLimited: !0,
    },
    d = {
        validations: new (l())({
            max: 100,
            maxAge: 6e4,
        }),
        currentUsernameInvalid: !1,
        retryAfterTime: null,
        suggestions: {
            migration: {
                suggestion: {
                    username: void 0,
                },
                fetched: !1,
                usernameSuggestionLoading: !1,
            },
            registration: {
                suggestion: {
                    username: void 0,
                },
                source: void 0,
                fetched: !1,
            },
        },
    };
class h extends (i = a.Ay.Store) {
    isRateLimited() {
        return null != d.retryAfterTime && Date.now() < d.retryAfterTime;
    }
    validate(e) {
        let t = d.validations.get(e);
        return this.isRateLimited() && (null == t || t.rateLimited)
            ? u
            : this.isRateLimited() || null == t || !t.rateLimited
              ? t
              : void 0;
    }
    registrationUsernameSuggestion() {
        return d.suggestions.registration.suggestion.username;
    }
    usernameSuggestion() {
        return d.suggestions.migration.suggestion.username;
    }
    usernameSuggestionLoading() {
        return d.suggestions.migration.usernameSuggestionLoading;
    }
    isCurrentUsernameInvalid() {
        return d.currentUsernameInvalid;
    }
    wasRegistrationSuggestionFetched(e) {
        return d.suggestions.registration.source === e && d.suggestions.registration.fetched;
    }
    wasSuggestionsFetched() {
        return d.suggestions.migration.fetched;
    }
}
(r = "displayName") in h
    ? Object.defineProperty(h, r, {
          value: "PomeloStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (h[r] = "PomeloStore");
let f = new h(o.h, {
    POMELO_ATTEMPT_SUCCESS: function (e) {
        let { username: t, taken: n } = e;
        d.validations.set(t, {
            taken: n,
        });
    },
    POMELO_ATTEMPT_FAILURE: function (e) {
        let { username: t, error: n, statusCode: r, retryAfter: i } = e;
        429 === r
            ? d.validations.set(
                  t,
                  {
                      taken: null,
                      error: n,
                      rateLimited: !0,
                  },
                  (null != i ? i : 7) * c.A.Millis.SECOND,
              )
            : d.validations.set(t, {
                  taken: null,
                  error: n,
              }),
            null != i && (d.retryAfterTime = Date.now() + i * c.A.Millis.SECOND);
    },
    POMELO_SUGGESTIONS_RESET: function () {
        (d.suggestions.migration = {
            suggestion: {
                username: void 0,
            },
            fetched: !1,
            usernameSuggestionLoading: !1,
        }),
            (d.suggestions.registration = {
                suggestion: {
                    username: void 0,
                },
                source: void 0,
                fetched: !1,
            });
    },
    POMELO_SUGGESTIONS_SUCCESS: function (e) {
        let { suggestion: t } = e;
        (d.suggestions.migration = {
            suggestion: t,
            fetched: !0,
            usernameSuggestionLoading: !1,
        }),
            (null == t ? void 0 : t.invalid_current_username) === !0 && (d.currentUsernameInvalid = !0);
    },
    POMELO_SUGGESTIONS_FETCH: function (e) {
        let { usernameSuggestionLoading: t } = e;
        d.suggestions.migration.usernameSuggestionLoading = t;
    },
    POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function (e) {
        let { suggestion: t, source: n } = e;
        (d.suggestions.registration = {
            suggestion: t,
            source: n,
            fetched: !0,
        }),
            (null == t ? void 0 : t.username) != null &&
                d.validations.set(t.username, {
                    taken: !1,
                });
    },
});
