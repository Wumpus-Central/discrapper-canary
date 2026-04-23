"use strict";
n.d(t, { $o: () => o, Ay: () => _, eg: () => l });
var r,
    i = n(311907),
    s = n(73153),
    a = n(652215),
    o =
        (((r = {}).STARTED = "started"),
        (r.READY = "ready"),
        (r.COMPLETED = "completed"),
        (r.NOT_APPLICABLE = "not_applicable"),
        r);
function l(e) {
    return null != e && ["started", "ready"].includes(e);
}
let u = {},
    c = {};
class d extends i.Ay.Store {
    static displayName = "GuildOnboardingStore";
    shouldShowOnboarding(e) {
        return e !== a.ME && e !== a.YYv && !!l(u[e]);
    }
    getOnboardingStatus(e) {
        return u[e];
    }
    resetOnboardingStatus(e) {
        (u[e] = "started"), (c[e] = "cover");
    }
    getCurrentOnboardingStep(e) {
        return c[e] ?? "cover";
    }
}
let _ = new d(s.h, {
    LOGOUT: function () {
        (u = {}), (c = {});
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete u[t.id], delete c[t.id];
    },
    GUILD_ONBOARDING_START: function (e) {
        let { guildId: t } = e;
        u[t] = "started";
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, enabled: n } = e;
        if ("started" !== u[t]) return !1;
        n ? (u[t] = "ready") : (u[t] = "not_applicable");
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        u[t] = "not_applicable";
    },
    GUILD_ONBOARDING_COMPLETE: function (e) {
        let { guildId: t } = e;
        u[t] = "completed";
    },
    GUILD_ONBOARDING_SET_STEP: function (e) {
        let { guildId: t, step: n } = e;
        c[t] = n;
    },
    CONNECTION_OPEN: function () {
        c = {};
    },
});
