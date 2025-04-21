n.d(t, { Z: () => T });
var l,
    i,
    r,
    s = n(392711),
    a = n.n(s),
    o = n(442837),
    c = n(570140),
    d = n(45966),
    u = n(999382),
    m = n(981631),
    I = n(290511);
let h = !1,
    g = null,
    N = [],
    f = !1,
    p = [];
function E() {
    (h = !1), (g = null), (p = []), (f = !1), null != (g = u.Z.getGuildId()) && u.Z.getSection() === m.pNK.ONBOARDING && ((N = d.Z.getOnboardingPrompts(g)), (f = d.Z.isAdvancedMode(g)));
}
class S extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, d.Z);
    }
    hasChanges() {
        return null != g && !a().isEqual(d.Z.getOnboardingPrompts(g), N);
    }
    get guildId() {
        return g;
    }
    get submitting() {
        return h;
    }
    get errors() {
        return p;
    }
    get editedOnboardingPrompts() {
        return N;
    }
    get advancedMode() {
        return f;
    }
}
(i = 'GuildSettingsOnboardingPromptsStore'),
    (l = 'displayName') in S
        ? Object.defineProperty(S, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (S[l] = i);
let T = new S(c.Z, {
    GUILD_SETTINGS_INIT: E,
    GUILD_SETTINGS_SET_SECTION: E,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: E,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: E,
    GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: E,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: E,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function (e) {
        var t;
        (p = null != (t = e.errors) ? t : []), (h = !1);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function (e) {
        let { prompts: t } = e;
        N = t;
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function () {
        (h = !0), (p = []);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function (e) {
        var t;
        p = null != (t = e.errors) ? t : [];
    },
    GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
        let { mode: t } = e;
        f = t === I.Un.ONBOARDING_ADVANCED;
    }
});
