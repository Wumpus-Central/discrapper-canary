n.d(t, { Z: () => T });
var l,
    r,
    i,
    s = n(392711),
    a = n.n(s),
    o = n(442837),
    c = n(570140),
    d = n(45966),
    u = n(999382),
    m = n(981631),
    N = n(290511);
let I = !1,
    h = null,
    g = [],
    f = !1,
    p = [];
function E() {
    (I = !1), (h = null), (p = []), (f = !1), null != (h = u.Z.getGuildId()) && u.Z.getSection() === m.pNK.ONBOARDING && ((g = d.Z.getOnboardingPrompts(h)), (f = d.Z.isAdvancedMode(h)));
}
class S extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, d.Z);
    }
    hasChanges() {
        return null != h && !a().isEqual(d.Z.getOnboardingPrompts(h), g);
    }
    get guildId() {
        return h;
    }
    get submitting() {
        return I;
    }
    get errors() {
        return p;
    }
    get editedOnboardingPrompts() {
        return g;
    }
    get advancedMode() {
        return f;
    }
}
(r = 'GuildSettingsOnboardingPromptsStore'),
    (l = 'displayName') in S
        ? Object.defineProperty(S, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (S[l] = r);
let T = new S(c.Z, {
    GUILD_SETTINGS_INIT: E,
    GUILD_SETTINGS_SET_SECTION: E,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: E,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: E,
    GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: E,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: E,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function (e) {
        var t;
        (p = null != (t = e.errors) ? t : []), (I = !1);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function (e) {
        let { prompts: t } = e;
        g = t;
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function () {
        (I = !0), (p = []);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function (e) {
        var t;
        p = null != (t = e.errors) ? t : [];
    },
    GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
        let { mode: t } = e;
        f = t === N.Un.ONBOARDING_ADVANCED;
    }
});
