"use strict";
n.d(t, { $o: () => s, Ay: () => A, eg: () => o });
var r = n(311907),
    i = n(73153),
    a = n(652215),
    s = (function (e) {
        return (
            (e.STARTED = "started"),
            (e.READY = "ready"),
            (e.COMPLETED = "completed"),
            (e.NOT_APPLICABLE = "not_applicable"),
            e
        );
    })({});
function o(e) {
    return null != e && ["started", "ready"].includes(e);
}
let l = {},
    u = {};
function c() {
    (l = {}), (u = {});
}
function d(e) {
    let { guildId: t } = e;
    l[t] = "started";
}
function _(e) {
    let { guildId: t, enabled: n } = e;
    if ("started" !== l[t]) return !1;
    n ? (l[t] = "ready") : (l[t] = "not_applicable");
}
function f(e) {
    let { guildId: t } = e;
    l[t] = "not_applicable";
}
function p(e) {
    let { guildId: t } = e;
    l[t] = "completed";
}
function h(e) {
    let { guild: t } = e;
    delete l[t.id], delete u[t.id];
}
function m(e) {
    let { guildId: t, step: n } = e;
    u[t] = n;
}
function g() {
    u = {};
}
class E extends r.Ay.Store {
    static displayName = "GuildOnboardingStore";
    shouldShowOnboarding(e) {
        return e !== a.ME && e !== a.YYv && !!o(l[e]);
    }
    getOnboardingStatus(e) {
        return l[e];
    }
    resetOnboardingStatus(e) {
        (l[e] = "started"), (u[e] = "cover");
    }
    getCurrentOnboardingStep(e) {
        return u[e] ?? "cover";
    }
}
let A = new E(i.h, {
    LOGOUT: c,
    GUILD_DELETE: h,
    GUILD_ONBOARDING_START: d,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: _,
    GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: f,
    GUILD_ONBOARDING_COMPLETE: p,
    GUILD_ONBOARDING_SET_STEP: m,
    CONNECTION_OPEN: g,
});
