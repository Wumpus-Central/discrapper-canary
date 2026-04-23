"use strict";
n.d(t, { A: () => u });
var i = n(635377),
    s = n.n(i),
    r = n(311907),
    l = n(73153),
    a = n(927813);
let o = { taken: null, error: void 0, rateLimited: !0 },
    c = {
        validations: new (s())({ max: 100, maxAge: 6e4 }),
        currentUsernameInvalid: !1,
        retryAfterTime: null,
        suggestions: {
            migration: { suggestion: { username: void 0 }, fetched: !1, usernameSuggestionLoading: !1 },
            registration: { suggestion: { username: void 0 }, source: void 0, fetched: !1 },
        },
    };
class d extends r.Ay.Store {
    static displayName = "UniqueUsernamesStore";
    isRateLimited() {
        return null != c.retryAfterTime && Date.now() < c.retryAfterTime;
    }
    validate(e) {
        let t = c.validations.get(e);
        return this.isRateLimited() && (null == t || t.rateLimited)
            ? o
            : this.isRateLimited() || null == t || !t.rateLimited
              ? t
              : void 0;
    }
    registrationUsernameSuggestion() {
        return c.suggestions.registration.suggestion.username;
    }
    usernameSuggestion() {
        return c.suggestions.migration.suggestion.username;
    }
    usernameSuggestionLoading() {
        return c.suggestions.migration.usernameSuggestionLoading;
    }
    isCurrentUsernameInvalid() {
        return c.currentUsernameInvalid;
    }
    wasRegistrationSuggestionFetched(e) {
        return c.suggestions.registration.source === e && c.suggestions.registration.fetched;
    }
    wasSuggestionsFetched() {
        return c.suggestions.migration.fetched;
    }
}
let u = new d(l.h, {
    UNIQUE_USERNAME_ATTEMPT_SUCCESS: function (e) {
        let { username: t, taken: n } = e;
        c.validations.set(t, { taken: n });
    },
    UNIQUE_USERNAME_ATTEMPT_FAILURE: function (e) {
        let { username: t, error: n, statusCode: i, retryAfter: s } = e;
        429 === i
            ? c.validations.set(t, { taken: null, error: n, rateLimited: !0 }, (s ?? 7) * a.A.Millis.SECOND)
            : c.validations.set(t, { taken: null, error: n }),
            null != s && (c.retryAfterTime = Date.now() + s * a.A.Millis.SECOND);
    },
    UNIQUE_USERNAME_SUGGESTIONS_RESET: function () {
        (c.suggestions.migration = { suggestion: { username: void 0 }, fetched: !1, usernameSuggestionLoading: !1 }),
            (c.suggestions.registration = { suggestion: { username: void 0 }, source: void 0, fetched: !1 });
    },
    UNIQUE_USERNAME_SUGGESTIONS_SUCCESS: function (e) {
        let { suggestion: t } = e;
        (c.suggestions.migration = { suggestion: t, fetched: !0, usernameSuggestionLoading: !1 }),
            t?.invalid_current_username === !0 && (c.currentUsernameInvalid = !0);
    },
    UNIQUE_USERNAME_REGISTRATION_SUGGESTIONS_SUCCESS: function (e) {
        let { suggestion: t, source: n } = e;
        (c.suggestions.registration = { suggestion: t, source: n, fetched: !0 }),
            t?.username != null && c.validations.set(t.username, { taken: !1 });
    },
});
