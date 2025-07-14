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
    h = n(290511);
let I = !1,
    g = null,
    N = [],
    f = !1,
    S = [];
function p() {
    ((I = !1), (g = null), (S = []), (f = !1), null != (g = u.Z.getGuildId()) && u.Z.getSection() === m.pNK.ONBOARDING && ((N = d.Z.getOnboardingPrompts(g)), (f = d.Z.isAdvancedMode(g))));
}
class E extends (r = o.ZP.Store) {
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
        return I;
    }
    get errors() {
        return S;
    }
    get editedOnboardingPrompts() {
        return N;
    }
    get advancedMode() {
        return f;
    }
}
((i = 'GuildSettingsOnboardingPromptsStore'),
    (l = 'displayName') in E
        ? Object.defineProperty(E, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (E[l] = i));
let T = new E(c.Z, {
    GUILD_SETTINGS_INIT: p,
    GUILD_SETTINGS_SET_SECTION: p,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: p,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: p,
    GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: p,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: p,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function (e) {
        var t;
        ((S = null != (t = e.errors) ? t : []), (I = !1));
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function (e) {
        let { prompts: t } = e;
        N = t;
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function () {
        ((I = !0), (S = []));
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function (e) {
        var t;
        S = null != (t = e.errors) ? t : [];
    },
    GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
        let { mode: t } = e;
        f = t === h.Un.ONBOARDING_ADVANCED;
    }
});
