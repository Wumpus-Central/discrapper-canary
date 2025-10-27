n.d(t, { Z: () => E });
var l,
    r,
    i = n(392711),
    a = n.n(i),
    s = n(442837),
    o = n(570140),
    c = n(45966),
    d = n(999382),
    u = n(981631),
    m = n(290511);
let g = !1,
    h = null,
    f = [],
    I = !1,
    p = [];
function N() {
    (g = !1),
        (h = null),
        (p = []),
        (I = !1),
        null != (h = d.Z.getGuildId()) &&
            d.Z.getSection() === u.pNK.ONBOARDING &&
            ((f = c.Z.getOnboardingPrompts(h)), (I = c.Z.isAdvancedMode(h)));
}
class O extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, c.Z);
    }
    hasChanges() {
        return null != h && !a().isEqual(c.Z.getOnboardingPrompts(h), f);
    }
    getChangedPrompts() {
        if (null == h) return [];
        let e = c.Z.getOnboardingPrompts(h);
        return f.filter((t) => {
            let n = e.find((e) => e.id === t.id);
            return null == n || !a().isEqual(t, n);
        });
    }
    get guildId() {
        return h;
    }
    get submitting() {
        return g;
    }
    get errors() {
        return p;
    }
    get editedOnboardingPrompts() {
        return f;
    }
    get advancedMode() {
        return I;
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
    GUILD_SETTINGS_INIT: N,
    GUILD_SETTINGS_SET_SECTION: N,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: N,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: N,
    GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: N,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: N,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function (e) {
        var t;
        (p = null != (t = e.errors) ? t : []), (g = !1);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function (e) {
        let { prompts: t } = e;
        f = t;
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function () {
        (g = !0), (p = []);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function (e) {
        var t;
        p = null != (t = e.errors) ? t : [];
    },
    GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
        let { mode: t } = e;
        I = t === m.Un.ONBOARDING_ADVANCED;
    },
});
