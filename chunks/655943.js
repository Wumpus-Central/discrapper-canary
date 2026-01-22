n.d(t, { A: () => S });
var l,
    r,
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(73153),
    c = n(591552),
    d = n(555337),
    u = n(652215),
    m = n(539916);
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
        null != (f = d.A.getGuildId()) &&
            d.A.getSection() === u.BEX.ONBOARDING &&
            ((h = c.A.getOnboardingPrompts(f)), (N = c.A.isAdvancedMode(f)));
}
class O extends (r = a.Ay.Store) {
    initialize() {
        this.waitFor(d.A, c.A);
    }
    hasChanges() {
        return null != f && !s().isEqual(c.A.getOnboardingPrompts(f), h);
    }
    getChangedPrompts() {
        if (null == f) return [];
        let e = c.A.getOnboardingPrompts(f);
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
let S = new O(o.h, {
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
        N = t === m.SD.ONBOARDING_ADVANCED;
    },
});
