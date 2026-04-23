n.d(t, { $o: () => _, Ay: () => c, eg: () => l });
var i,
    r = n(17928),
    a = n(228366),
    s = n(652215),
    _ =
        (((i = {}).STARTED = "started"),
        (i.READY = "ready"),
        (i.COMPLETED = "completed"),
        (i.NOT_APPLICABLE = "not_applicable"),
        i);
function l(e) {
    return null != e && ["started", "ready"].includes(e);
}
let o = {},
    E = {};
class d extends r.Ay.Store {
    static displayName = "GuildOnboardingStore";
    shouldShowOnboarding(e) {
        return e !== s.ME && e !== s.YYv && !!l(o[e]);
    }
    getOnboardingStatus(e) {
        return o[e];
    }
    resetOnboardingStatus(e) {
        (o[e] = "started"), (E[e] = "cover");
    }
    getCurrentOnboardingStep(e) {
        return E[e] ?? "cover";
    }
}
let c = new d(a.h, {
    LOGOUT: function () {
        (o = {}), (E = {});
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete o[t.id], delete E[t.id];
    },
    GUILD_ONBOARDING_START: function (e) {
        let { guildId: t } = e;
        o[t] = "started";
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, enabled: n } = e;
        if ("started" !== o[t]) return !1;
        n ? (o[t] = "ready") : (o[t] = "not_applicable");
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        o[t] = "not_applicable";
    },
    GUILD_ONBOARDING_COMPLETE: function (e) {
        let { guildId: t } = e;
        o[t] = "completed";
    },
    GUILD_ONBOARDING_SET_STEP: function (e) {
        let { guildId: t, step: n } = e;
        E[t] = n;
    },
    CONNECTION_OPEN: function () {
        E = {};
    },
});
