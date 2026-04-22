n.d(t, { A: () => N });
var i = n(311907),
    l = n(73153),
    s = n(591552),
    r = n(374084),
    a = n(555337),
    o = n(982832),
    d = n(660496),
    c = n(863694),
    u = n(352821),
    m = n(132514),
    g = n(655943),
    h = n(400812),
    x = n(72533),
    _ = n(652215);
let p = new Set(),
    A = h.Hy.LANDING,
    E = null;
function f(e) {
    let { subsection: t } = e;
    if (a.A.getGuildId() === E) return !1;
    (A = t === _.nd0.SERVER_GUIDE ? h.Hy.HOME_SETTINGS : h.Hy.LANDING), (E = a.A.getGuildId());
}
class j extends i.Ay.Store {
    static displayName = "GuildSettingsOnboardingStore";
    initialize() {
        this.waitFor(s.A, c.A, g.A, m.A, u.A, o.A, a.A), this.syncWith([s.A, c.A, g.A, m.A, u.A, o.A], () => !0);
    }
    isEducationUpsellDismissed(e) {
        return p.has(e);
    }
    getCurrentPage() {
        return A;
    }
    hasChanges() {
        if (null == E) return !1;
        let e = s.A.isAdvancedMode(E);
        if (A === h.Hy.DEFAULT_CHANNELS)
            if (e) return c.A.hasChanges() || g.A.hasChanges();
            else return c.A.hasChanges();
        return A === h.Hy.CUSTOMIZATION_QUESTIONS
            ? g.A.hasChanges() || u.A.hasChanges()
            : A === h.Hy.HOME_SETTINGS
              ? m.A.hasChanges()
              : A === h.Hy.CONNECTIONS && u.A.hasChanges();
    }
    hasConfiguredAnythingForCurrentStep() {
        if (null == E) return !1;
        if (A === h.Hy.SAFETY_CHECK) return !0;
        if (A === h.Hy.DEFAULT_CHANNELS) return c.A.editedDefaultChannelIds.size > 0;
        if (A === h.Hy.CUSTOMIZATION_QUESTIONS)
            return g.A.editedOnboardingPrompts.length > 0 || u.A.getEditedConnections().length > 0;
        if (A === h.Hy.HOME_SETTINGS) return !(0, r.jJ)(m.A.getSettings());
        if (A === h.Hy.CONNECTIONS) return u.A.getEditedConnections().length > 0;
        return !1;
    }
    hasErrors() {
        return A === h.Hy.CUSTOMIZATION_QUESTIONS && null != g.A.errors.find((e) => null != e);
    }
    showNotice() {
        if (null == E) return !1;
        if ((0, x.o)(E)) return this.hasChanges();
        let e = o.A.getCurrentPage();
        return (A !== h.Hy.SAFETY_CHECK || e === d.C.OVERVIEW) && null != A && A !== h.Hy.LANDING;
    }
    canCloseEarly() {
        return null == E || (!this.hasErrors() && (!(0, x.o)(E) || !this.hasChanges()));
    }
}
let N = new j(l.h, {
    GUILD_SETTINGS_INIT: f,
    GUILD_SETTINGS_SET_SECTION: f,
    GUILD_SETTINGS_ONBOARDING_STEP: function (e) {
        let { step: t } = e;
        A = t;
    },
    GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function (e) {
        let { upsellType: t } = e;
        p.add(t);
    },
});
