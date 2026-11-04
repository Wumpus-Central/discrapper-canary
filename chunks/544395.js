var n = i(635377),
    s = i.n(n),
    r = i(855986),
    a = i(73153),
    o = i(927813);
let u = { taken: null, error: void 0, rateLimited: !0 },
    g = {
        validations: new (s())({ max: 100, maxAge: 6e4 }),
        currentUsernameInvalid: !1,
        retryAfterTime: null,
        suggestions: {
            migration: { suggestion: { username: void 0 }, fetched: !1, usernameSuggestionLoading: !1 },
            registration: { suggestion: { username: void 0 }, source: void 0, fetched: !1 },
        },
    };
class l extends r.Ay.Store {
    static displayName = "UniqueUsernamesStore";
    isRateLimited() {
        return null != g.retryAfterTime && Date.now() < g.retryAfterTime;
    }
    validate(e) {
        let t = g.validations.get(e);
        return this.isRateLimited() && (null == t || t.rateLimited)
            ? u
            : this.isRateLimited() || null == t || !t.rateLimited
              ? t
              : void 0;
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
let E = new l(a.h, {
    UNIQUE_USERNAME_ATTEMPT_SUCCESS: function (e) {
        let { username: t, taken: i } = e;
        g.validations.set(t, { taken: i });
    },
    UNIQUE_USERNAME_ATTEMPT_FAILURE: function (e) {
        let { username: t, error: i, statusCode: n, retryAfter: s } = e;
        (429 === n
            ? g.validations.set(t, { taken: null, error: i, rateLimited: !0 }, (s ?? 7) * o.A.Millis.SECOND)
            : g.validations.set(t, { taken: null, error: i }),
            null != s && (g.retryAfterTime = Date.now() + s * o.A.Millis.SECOND));
    },
    UNIQUE_USERNAME_SUGGESTIONS_RESET: function () {
        ((g.suggestions.migration = { suggestion: { username: void 0 }, fetched: !1, usernameSuggestionLoading: !1 }),
            (g.suggestions.registration = { suggestion: { username: void 0 }, source: void 0, fetched: !1 }));
    },
    UNIQUE_USERNAME_SUGGESTIONS_SUCCESS: function (e) {
        let { suggestion: t } = e;
        ((g.suggestions.migration = { suggestion: t, fetched: !0, usernameSuggestionLoading: !1 }),
            t?.invalid_current_username === !0 && (g.currentUsernameInvalid = !0));
    },
    UNIQUE_USERNAME_REGISTRATION_SUGGESTIONS_SUCCESS: function (e) {
        let { suggestion: t, source: i } = e;
        ((g.suggestions.registration = { suggestion: t, source: i, fetched: !0 }),
            t?.username != null && g.validations.set(t.username, { taken: !1 }));
    },
});
i.d(t, {}, { A: E });
