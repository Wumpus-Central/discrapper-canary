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
    I = null,
    g = [],
    N = !1,
    S = [];
function f() {
    (h = !1),
        (I = null),
        (S = []),
        (N = !1),
        null != (I = d.Z.getGuildId()) &&
            d.Z.getSection() === u.pNK.ONBOARDING &&
            ((g = c.Z.getOnboardingPrompts(I)), (N = c.Z.isAdvancedMode(I)));
}
class p extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, c.Z);
    }
    hasChanges() {
        return null != I && !s().isEqual(c.Z.getOnboardingPrompts(I), g);
    }
    get guildId() {
        return I;
    }
    get submitting() {
        return h;
    }
    get errors() {
        return S;
    }
    get editedOnboardingPrompts() {
        return g;
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
    GUILD_SETTINGS_INIT: f,
    GUILD_SETTINGS_SET_SECTION: f,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: f,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: f,
    GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: f,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: f,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function (e) {
        var t;
        (S = null != (t = e.errors) ? t : []), (h = !1);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function (e) {
        let { prompts: t } = e;
        g = t;
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function () {
        (h = !0), (S = []);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function (e) {
        var t;
        S = null != (t = e.errors) ? t : [];
    },
    GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
        let { mode: t } = e;
        N = t === m.Un.ONBOARDING_ADVANCED;
    },
});
