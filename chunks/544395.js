i.d(t, { A: () => E });
var n = i(635377),
    s = i.n(n),
    r = i(17928),
    a = i(228366),
    o = i(927813);
let u = { taken: null, error: void 0, rateLimited: !0 },
    l = {
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
        return null != l.retryAfterTime && Date.now() < l.retryAfterTime;
    }
    validate(e) {
        let t = l.validations.get(e);
        return this.isRateLimited() && (null == t || t.rateLimited)
            ? u
            : this.isRateLimited() || null == t || !t.rateLimited
              ? t
              : void 0;
    }
    registrationUsernameSuggestion() {
        return l.suggestions.registration.suggestion.username;
    }
    usernameSuggestion() {
        return l.suggestions.migration.suggestion.username;
    }
    usernameSuggestionLoading() {
        return l.suggestions.migration.usernameSuggestionLoading;
    }
    isCurrentUsernameInvalid() {
        return l.currentUsernameInvalid;
    }
    wasRegistrationSuggestionFetched(e) {
        return l.suggestions.registration.source === e && l.suggestions.registration.fetched;
    }
    wasSuggestionsFetched() {
        return l.suggestions.migration.fetched;
    }
}
let E = new g(a.h, {
    UNIQUE_USERNAME_ATTEMPT_SUCCESS: function (e) {
        let { username: t, taken: i } = e;
        l.validations.set(t, { taken: i });
    },
    UNIQUE_USERNAME_ATTEMPT_FAILURE: function (e) {
        let { username: t, error: i, statusCode: n, retryAfter: s } = e;
        429 === n
            ? l.validations.set(t, { taken: null, error: i, rateLimited: !0 }, (s ?? 7) * o.A.Millis.SECOND)
            : l.validations.set(t, { taken: null, error: i }),
            null != s && (l.retryAfterTime = Date.now() + s * o.A.Millis.SECOND);
    },
    UNIQUE_USERNAME_SUGGESTIONS_RESET: function () {
        (l.suggestions.migration = { suggestion: { username: void 0 }, fetched: !1, usernameSuggestionLoading: !1 }),
            (l.suggestions.registration = { suggestion: { username: void 0 }, source: void 0, fetched: !1 });
    },
    UNIQUE_USERNAME_SUGGESTIONS_SUCCESS: function (e) {
        let { suggestion: t } = e;
        (l.suggestions.migration = { suggestion: t, fetched: !0, usernameSuggestionLoading: !1 }),
            t?.invalid_current_username === !0 && (l.currentUsernameInvalid = !0);
    },
    UNIQUE_USERNAME_REGISTRATION_SUGGESTIONS_SUCCESS: function (e) {
        let { suggestion: t, source: i } = e;
        (l.suggestions.registration = { suggestion: t, source: i, fetched: !0 }),
            t?.username != null && l.validations.set(t.username, { taken: !1 });
    },
});
