var i = n(855986),
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
    E = n(652215);
let j = new Set(),
    f = h.Hy.LANDING,
    N = null;
function p(e) {
    let { subsection: t } = e;
    if (a.A.getGuildId() === N) return !1;
    ((f = t === E.nd0.SERVER_GUIDE ? h.Hy.HOME_SETTINGS : h.Hy.LANDING), (N = a.A.getGuildId()));
}
class A extends i.Ay.Store {
    static displayName = "GuildSettingsOnboardingStore";
    initialize() {
        (this.waitFor(s.A, c.A, g.A, m.A, u.A, o.A, a.A), this.syncWith([s.A, c.A, g.A, m.A, u.A, o.A], () => !0));
    }
    isEducationUpsellDismissed(e) {
        return j.has(e);
    }
    getCurrentPage() {
        return f;
    }
    hasChanges() {
        if (null == N) return !1;
        let e = s.A.isAdvancedMode(N);
        if (f === h.Hy.DEFAULT_CHANNELS)
            if (e) return c.A.hasChanges() || g.A.hasChanges();
            else return c.A.hasChanges();
        return f === h.Hy.CUSTOMIZATION_QUESTIONS
            ? g.A.hasChanges() || u.A.hasChanges()
            : f === h.Hy.HOME_SETTINGS
              ? m.A.hasChanges()
              : f === h.Hy.CONNECTIONS && u.A.hasChanges();
    }
    hasConfiguredAnythingForCurrentStep() {
        if (null == N) return !1;
        if (f === h.Hy.SAFETY_CHECK) return !0;
        if (f === h.Hy.DEFAULT_CHANNELS) return c.A.editedDefaultChannelIds.size > 0;
        if (f === h.Hy.CUSTOMIZATION_QUESTIONS)
            return g.A.editedOnboardingPrompts.length > 0 || u.A.getEditedConnections().length > 0;
        if (f === h.Hy.HOME_SETTINGS) return !(0, r.jJ)(m.A.getSettings());
        if (f === h.Hy.CONNECTIONS) return u.A.getEditedConnections().length > 0;
        return !1;
    }
    hasErrors() {
        return f === h.Hy.CUSTOMIZATION_QUESTIONS && null != g.A.errors.find((e) => null != e);
    }
    showNotice() {
        if (null == N) return !1;
        if ((0, x.o)(N)) return this.hasChanges();
        let e = o.A.getCurrentPage();
        return (f !== h.Hy.SAFETY_CHECK || e === d.C.OVERVIEW) && null != f && f !== h.Hy.LANDING;
    }
    canCloseEarly() {
        return null == N || (!this.hasErrors() && (!(0, x.o)(N) || !this.hasChanges()));
    }
}
let I = new A(l.h, {
    GUILD_SETTINGS_INIT: p,
    GUILD_SETTINGS_SET_SECTION: p,
    GUILD_SETTINGS_ONBOARDING_STEP: function (e) {
        let { step: t } = e;
        f = t;
    },
    GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function (e) {
        let { upsellType: t } = e;
        j.add(t);
    },
});
n.d(t, {}, { A: I });
