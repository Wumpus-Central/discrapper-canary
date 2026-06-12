n.d(e, { A: () => g });
var i = n(735438),
    l = n.n(i),
    s = n(17928),
    r = n(228366),
    a = n(591552),
    d = n(555337),
    o = n(652215),
    c = n(539916);
let u = !1,
    E = null,
    I = [],
    N = !1,
    S = [];
function m() {
    (u = !1),
        (E = null),
        (S = []),
        (N = !1),
        null != (E = d.A.getGuildId()) &&
            d.A.getSection() === o.BEX.ONBOARDING &&
            ((I = a.A.getOnboardingPrompts(E)), (N = a.A.isAdvancedMode(E)));
}
class _ extends s.Ay.Store {
    static displayName = "GuildSettingsOnboardingPromptsStore";
    initialize() {
        this.waitFor(d.A, a.A);
    }
    hasChanges() {
        return null != E && !l().isEqual(a.A.getOnboardingPrompts(E), I);
    }
    getChangedPrompts() {
        if (null == E) return [];
        let t = a.A.getOnboardingPrompts(E);
        return I.filter((e) => {
            let n = t.find((t) => t.id === e.id);
            return null == n || !l().isEqual(e, n);
        });
    }
    get guildId() {
        return E;
    }
    get submitting() {
        return u;
    }
    get errors() {
        return S;
    }
    get editedOnboardingPrompts() {
        return I;
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
        (S = t.errors ?? []), (u = !1);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function (t) {
        let { prompts: e } = t;
        I = e;
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function () {
        (u = !0), (S = []);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function (t) {
        S = t.errors ?? [];
    },
    GUILD_SETTINGS_ONBOARDING_SET_MODE: function (t) {
        let { mode: e } = t;
        N = e === c.SD.ONBOARDING_ADVANCED;
    },
});
