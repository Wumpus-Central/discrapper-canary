n.d(e, { A: () => g });
var i = n(435558),
    l = n.n(i),
    s = n(17928),
    r = n(228366),
    a = n(591552),
    d = n(555337),
    o = n(652215),
    c = n(539916);
let I = !1,
    u = null,
    E = [],
    N = !1,
    S = [];
function m() {
    (I = !1),
        (u = null),
        (S = []),
        (N = !1),
        null != (u = d.A.getGuildId()) &&
            d.A.getSection() === o.BEX.ONBOARDING &&
            ((E = a.A.getOnboardingPrompts(u)), (N = a.A.isAdvancedMode(u)));
}
class _ extends s.Ay.Store {
    static displayName = "GuildSettingsOnboardingPromptsStore";
    initialize() {
        this.waitFor(d.A, a.A);
    }
    hasChanges() {
        return null != u && !l().isEqual(a.A.getOnboardingPrompts(u), E);
    }
    getChangedPrompts() {
        if (null == u) return [];
        let t = a.A.getOnboardingPrompts(u);
        return E.filter((e) => {
            let n = t.find((t) => t.id === e.id);
            return null == n || !l().isEqual(e, n);
        });
    }
    get guildId() {
        return u;
    }
    get submitting() {
        return I;
    }
    get errors() {
        return S;
    }
    get editedOnboardingPrompts() {
        return E;
    }
    get advancedMode() {
        return N;
    }
}
let g = new _(r.h, {
    GUILD_SETTINGS_INIT: m,
    GUILD_SETTINGS_SET_SECTION: m,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: m,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: m,
    GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: m,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: m,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function (t) {
        (S = t.errors ?? []), (I = !1);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function (t) {
        let { prompts: e } = t;
        E = e;
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function () {
        (I = !0), (S = []);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function (t) {
        S = t.errors ?? [];
    },
    GUILD_SETTINGS_ONBOARDING_SET_MODE: function (t) {
        let { mode: e } = t;
        N = e === c.SD.ONBOARDING_ADVANCED;
    },
});
