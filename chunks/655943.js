n.d(t, { A: () => A });
var i = n(735438),
    l = n.n(i),
    s = n(17928),
    r = n(228366),
    a = n(591552),
    d = n(555337),
    o = n(652215),
    c = n(539916);
let u = !1,
    m = null,
    N = [],
    h = !1,
    I = [];
function E() {
    (u = !1),
        (m = null),
        (I = []),
        (h = !1),
        null != (m = d.A.getGuildId()) &&
            d.A.getSection() === o.BEX.ONBOARDING &&
            ((N = a.A.getOnboardingPrompts(m)), (h = a.A.isAdvancedMode(m)));
}
class g extends s.Ay.Store {
    static displayName = "GuildSettingsOnboardingPromptsStore";
    initialize() {
        this.waitFor(d.A, a.A);
    }
    hasChanges() {
        return null != m && !l().isEqual(a.A.getOnboardingPrompts(m), N);
    }
    getChangedPrompts() {
        if (null == m) return [];
        let e = a.A.getOnboardingPrompts(m);
        return N.filter((t) => {
            let n = e.find((e) => e.id === t.id);
            return null == n || !l().isEqual(t, n);
        });
    }
    get guildId() {
        return m;
    }
    get submitting() {
        return u;
    }
    get errors() {
        return I;
    }
    get editedOnboardingPrompts() {
        return N;
    }
    get advancedMode() {
        return h;
    }
}
let A = new g(r.h, {
    GUILD_SETTINGS_INIT: E,
    GUILD_SETTINGS_SET_SECTION: E,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: E,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: E,
    GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: E,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: E,
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function (e) {
        (I = e.errors ?? []), (u = !1);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function (e) {
        let { prompts: t } = e;
        N = t;
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function () {
        (u = !0), (I = []);
    },
    GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function (e) {
        I = e.errors ?? [];
    },
    GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
        let { mode: t } = e;
        h = t === c.SD.ONBOARDING_ADVANCED;
    },
});
