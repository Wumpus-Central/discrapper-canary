n.d(t, { A: () => d });
var i = n(635377),
    s = n.n(i),
    r = n(17928),
    a = n(228366),
    o = n(927813);
let l = { taken: null, error: void 0, rateLimited: !0 },
    u = {
        validations: new (s())({ max: 100, maxAge: 6e4 }),
        currentUsernameInvalid: !1,
        retryAfterTime: null,
        suggestions: {
            migration: { suggestion: { username: void 0 }, fetched: !1, usernameSuggestionLoading: !1 },
            registration: { suggestion: { username: void 0 }, source: void 0, fetched: !1 },
        },
    };
class g extends r.Ay.Store {
    static displayName = "UniqueUsernamesStore";
    isRateLimited() {
        return null != u.retryAfterTime && Date.now() < u.retryAfterTime;
    }
    validate(e) {
        let t = u.validations.get(e);
        return this.isRateLimited() && (null == t || t.rateLimited)
            ? l
            : this.isRateLimited() || null == t || !t.rateLimited
              ? t
              : void 0;
    }
    registrationUsernameSuggestion() {
        return u.suggestions.registration.suggestion.username;
    }
    usernameSuggestion() {
        return u.suggestions.migration.suggestion.username;
    }
    usernameSuggestionLoading() {
        return u.suggestions.migration.usernameSuggestionLoading;
    }
    isCurrentUsernameInvalid() {
        return u.currentUsernameInvalid;
    }
    wasRegistrationSuggestionFetched(e) {
        return u.suggestions.registration.source === e && u.suggestions.registration.fetched;
    }
    wasSuggestionsFetched() {
        return u.suggestions.migration.fetched;
    }
}
let d = new g(a.h, {
    UNIQUE_USERNAME_ATTEMPT_SUCCESS: function (e) {
        let { username: t, taken: n } = e;
        u.validations.set(t, { taken: n });
    },
    UNIQUE_USERNAME_ATTEMPT_FAILURE: function (e) {
        let { username: t, error: n, statusCode: i, retryAfter: s } = e;
        429 === i
            ? u.validations.set(t, { taken: null, error: n, rateLimited: !0 }, (s ?? 7) * o.A.Millis.SECOND)
            : u.validations.set(t, { taken: null, error: n }),
            null != s && (u.retryAfterTime = Date.now() + s * o.A.Millis.SECOND);
    },
    UNIQUE_USERNAME_SUGGESTIONS_RESET: function () {
        (u.suggestions.migration = { suggestion: { username: void 0 }, fetched: !1, usernameSuggestionLoading: !1 }),
            (u.suggestions.registration = { suggestion: { username: void 0 }, source: void 0, fetched: !1 });
    },
    UNIQUE_USERNAME_SUGGESTIONS_SUCCESS: function (e) {
        let { suggestion: t } = e;
        (u.suggestions.migration = { suggestion: t, fetched: !0, usernameSuggestionLoading: !1 }),
            t?.invalid_current_username === !0 && (u.currentUsernameInvalid = !0);
    },
    UNIQUE_USERNAME_REGISTRATION_SUGGESTIONS_SUCCESS: function (e) {
        let { suggestion: t, source: n } = e;
        (u.suggestions.registration = { suggestion: t, source: n, fetched: !0 }),
            t?.username != null && u.validations.set(t.username, { taken: !1 });
    },
});
