n.d(t, { A: () => I });
var i = n(17928),
    l = n(228366),
    s = n(591552),
    r = n(374084),
    a = n(555337),
    o = n(982832),
    d = n(660496),
    c = n(863694),
    u = n(352821),
    m = n(132514),
    g = n(655943),
    x = n(400812),
    h = n(72533),
    E = n(652215);
let j = new Set(),
    f = x.Hy.LANDING,
    N = null;
function p(e) {
    let { subsection: t } = e;
    if (a.A.getGuildId() === N) return !1;
    (f = t === E.nd0.SERVER_GUIDE ? x.Hy.HOME_SETTINGS : x.Hy.LANDING), (N = a.A.getGuildId());
}
class A extends i.Ay.Store {
    static displayName = "GuildSettingsOnboardingStore";
    initialize() {
        this.waitFor(s.A, c.A, g.A, m.A, u.A, o.A, a.A), this.syncWith([s.A, c.A, g.A, m.A, u.A, o.A], () => !0);
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
        if (f === x.Hy.DEFAULT_CHANNELS)
            if (e) return c.A.hasChanges() || g.A.hasChanges();
            else return c.A.hasChanges();
        return f === x.Hy.CUSTOMIZATION_QUESTIONS
            ? g.A.hasChanges() || u.A.hasChanges()
            : f === x.Hy.HOME_SETTINGS
              ? m.A.hasChanges()
              : f === x.Hy.CONNECTIONS && u.A.hasChanges();
    }
    hasConfiguredAnythingForCurrentStep() {
        if (null == N) return !1;
        if (f === x.Hy.SAFETY_CHECK) return !0;
        if (f === x.Hy.DEFAULT_CHANNELS) return c.A.editedDefaultChannelIds.size > 0;
        if (f === x.Hy.CUSTOMIZATION_QUESTIONS)
            return g.A.editedOnboardingPrompts.length > 0 || u.A.getEditedConnections().length > 0;
        if (f === x.Hy.HOME_SETTINGS) return !(0, r.jJ)(m.A.getSettings());
        if (f === x.Hy.CONNECTIONS) return u.A.getEditedConnections().length > 0;
        return !1;
    }
    hasErrors() {
        return f === x.Hy.CUSTOMIZATION_QUESTIONS && null != g.A.errors.find((e) => null != e);
    }
    showNotice() {
        if (null == N) return !1;
        if ((0, h.o)(N)) return this.hasChanges();
        let e = o.A.getCurrentPage();
        return (f !== x.Hy.SAFETY_CHECK || e === d.C.OVERVIEW) && null != f && f !== x.Hy.LANDING;
    }
    canCloseEarly() {
        return null == N || (!this.hasErrors() && (!(0, h.o)(N) || !this.hasChanges()));
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
