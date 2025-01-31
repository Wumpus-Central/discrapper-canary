t.d(n, { Z: () => _ });
var l,
    i,
    s,
    r = t(392711),
    a = t.n(r),
    o = t(442837),
    d = t(570140),
    c = t(45966),
    u = t(999382),
    m = t(981631),
    I = t(290511);
let h = !1,
    N = null,
    g = [],
    x = !1,
    E = [];
function T() {
    (h = !1), (N = null), (E = []), (x = !1), null != (N = u.Z.getGuildId()) && u.Z.getSection() === m.pNK.ONBOARDING && ((g = c.Z.getOnboardingPrompts(N)), (x = c.Z.isAdvancedMode(N)));
}
class S extends (s = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, c.Z);
    }
    hasChanges() {
        return null != N && !a().isEqual(c.Z.getOnboardingPrompts(N), g);
    }
    get guildId() {
        return N;
    }
    get submitting() {
        return h;
    }
    get errors() {
        return E;
    }
    get editedOnboardingPrompts() {
        return g;
    }
    get advancedMode() {
        return x;
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
let _ = new S(d.Z, {
    GUILD_SETTINGS_INIT: T,
    GUILD_SETTINGS_SET_SECTION: T,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: T,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: T,
    GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: T,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: T,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function (e) {
        var n;
        (E = null !== (n = e.errors) && void 0 !== n ? n : []), (h = !1);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function (e) {
        let { prompts: n } = e;
        g = n;
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function () {
        (h = !0), (E = []);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function (e) {
        var n;
        E = null !== (n = e.errors) && void 0 !== n ? n : [];
    },
    GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
        let { mode: n } = e;
        x = n === I.Un.ONBOARDING_ADVANCED;
    }
});
