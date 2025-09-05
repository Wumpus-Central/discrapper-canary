n.d(t, { Z: () => E });
var l,
    i,
    r = n(392711),
    s = n.n(r),
    a = n(442837),
    o = n(570140),
    c = n(45966),
    d = n(999382),
    u = n(981631),
    m = n(290511);
let h = !1,
    g = null,
    I = [],
    N = !1,
    f = [];
function S() {
    (h = !1),
        (g = null),
        (f = []),
        (N = !1),
        null != (g = d.Z.getGuildId()) &&
            d.Z.getSection() === u.pNK.ONBOARDING &&
            ((I = c.Z.getOnboardingPrompts(g)), (N = c.Z.isAdvancedMode(g)));
}
class p extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, c.Z);
    }
    hasChanges() {
        return null != g && !s().isEqual(c.Z.getOnboardingPrompts(g), I);
    }
    getChangedPrompts() {
        if (null == g) return [];
        let e = c.Z.getOnboardingPrompts(g);
        return I.filter((t) => {
            let n = e.find((e) => e.id === t.id);
            return null == n || !s().isEqual(t, n);
        });
    }
    get guildId() {
        return g;
    }
    get submitting() {
        return h;
    }
    get errors() {
        return f;
    }
    get editedOnboardingPrompts() {
        return I;
    }
    get advancedMode() {
        return N;
    }
}
(l = "displayName") in p
    ? Object.defineProperty(p, l, {
          value: "GuildSettingsOnboardingPromptsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (p[l] = "GuildSettingsOnboardingPromptsStore");
let E = new p(o.Z, {
    GUILD_SETTINGS_INIT: S,
    GUILD_SETTINGS_SET_SECTION: S,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: S,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: S,
    GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: S,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: S,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function (e) {
        var t;
        (f = null != (t = e.errors) ? t : []), (h = !1);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function (e) {
        let { prompts: t } = e;
        I = t;
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function () {
        (h = !0), (f = []);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function (e) {
        var t;
        f = null != (t = e.errors) ? t : [];
    },
    GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
        let { mode: t } = e;
        N = t === m.Un.ONBOARDING_ADVANCED;
    },
});
