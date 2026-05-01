n.d(t, { $o: () => l, Ay: () => E, eg: () => o });
var i,
    a = n(17928),
    r = n(228366),
    s = n(652215),
    l =
        (((i = {}).STARTED = "started"),
        (i.READY = "ready"),
        (i.COMPLETED = "completed"),
        (i.NOT_APPLICABLE = "not_applicable"),
        i);
function o(e) {
    return null != e && ["started", "ready"].includes(e);
}
let d = {},
    c = {};
class _ extends a.Ay.Store {
    static displayName = "GuildOnboardingStore";
    shouldShowOnboarding(e) {
        return e !== s.ME && e !== s.YYv && !!o(d[e]);
    }
    getOnboardingStatus(e) {
        return d[e];
    }
    resetOnboardingStatus(e) {
        (d[e] = "started"), (c[e] = "cover");
    }
    getCurrentOnboardingStep(e) {
        return c[e] ?? "cover";
    }
}
let E = new _(r.h, {
    LOGOUT: function () {
        (d = {}), (c = {});
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete d[t.id], delete c[t.id];
    },
    GUILD_ONBOARDING_START: function (e) {
        let { guildId: t } = e;
        d[t] = "started";
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, enabled: n } = e;
        if ("started" !== d[t]) return !1;
        n ? (d[t] = "ready") : (d[t] = "not_applicable");
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        d[t] = "not_applicable";
    },
    GUILD_ONBOARDING_COMPLETE: function (e) {
        let { guildId: t } = e;
        d[t] = "completed";
    },
    GUILD_ONBOARDING_SET_STEP: function (e) {
        let { guildId: t, step: n } = e;
        c[t] = n;
    },
    CONNECTION_OPEN: function () {
        c = {};
    },
});
