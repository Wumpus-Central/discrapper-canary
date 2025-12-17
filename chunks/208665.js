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
let g = !1,
    f = null,
    h = [],
    N = !1,
    I = [];
function p() {
    (g = !1),
        (f = null),
        (I = []),
        (N = !1),
        null != (f = d.Z.getGuildId()) &&
            d.Z.getSection() === u.pNK.ONBOARDING &&
            ((h = c.Z.getOnboardingPrompts(f)), (N = c.Z.isAdvancedMode(f)));
}
class O extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, c.Z);
    }
    hasChanges() {
        return null != f && !s().isEqual(c.Z.getOnboardingPrompts(f), h);
    }
    getChangedPrompts() {
        if (null == f) return [];
        let e = c.Z.getOnboardingPrompts(f);
        return h.filter((t) => {
            let n = e.find((e) => e.id === t.id);
            return null == n || !s().isEqual(t, n);
        });
    }
    get guildId() {
        return f;
    }
    get submitting() {
        return g;
    }
    get errors() {
        return I;
    }
    get editedOnboardingPrompts() {
        return h;
    }
    get advancedMode() {
        return N;
    }
}
(l = "displayName") in O
    ? Object.defineProperty(O, l, {
          value: "GuildSettingsOnboardingPromptsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (O[l] = "GuildSettingsOnboardingPromptsStore");
let E = new O(o.Z, {
    GUILD_SETTINGS_INIT: p,
    GUILD_SETTINGS_SET_SECTION: p,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: p,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: p,
    GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: p,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: p,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function (e) {
        var t;
        (I = null != (t = e.errors) ? t : []), (g = !1);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function (e) {
        let { prompts: t } = e;
        h = t;
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function () {
        (g = !0), (I = []);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function (e) {
        var t;
        I = null != (t = e.errors) ? t : [];
    },
    GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
        let { mode: t } = e;
        N = t === m.Un.ONBOARDING_ADVANCED;
    },
});
