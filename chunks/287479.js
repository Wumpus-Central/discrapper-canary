n.d(t, { A: () => A });
var i = n(17928),
    l = n(228366),
    s = n(591552),
    a = n(374084),
    r = n(555337),
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
    E = h.Hy.LANDING,
    f = null;
function j(e) {
    let { subsection: t } = e;
    if (r.A.getGuildId() === f) return !1;
    (E = t === _.nd0.SERVER_GUIDE ? h.Hy.HOME_SETTINGS : h.Hy.LANDING), (f = r.A.getGuildId());
}
class N extends i.Ay.Store {
    static displayName = "GuildSettingsOnboardingStore";
    initialize() {
        this.waitFor(s.A, c.A, g.A, m.A, u.A, o.A, r.A), this.syncWith([s.A, c.A, g.A, m.A, u.A, o.A], () => !0);
    }
    isEducationUpsellDismissed(e) {
        return p.has(e);
    }
    getCurrentPage() {
        return E;
    }
    hasChanges() {
        if (null == f) return !1;
        let e = s.A.isAdvancedMode(f);
        if (E === h.Hy.DEFAULT_CHANNELS)
            if (e) return c.A.hasChanges() || g.A.hasChanges();
            else return c.A.hasChanges();
        return E === h.Hy.CUSTOMIZATION_QUESTIONS
            ? g.A.hasChanges() || u.A.hasChanges()
            : E === h.Hy.HOME_SETTINGS
              ? m.A.hasChanges()
              : E === h.Hy.CONNECTIONS && u.A.hasChanges();
    }
    hasConfiguredAnythingForCurrentStep() {
        if (null == f) return !1;
        if (E === h.Hy.SAFETY_CHECK) return !0;
        if (E === h.Hy.DEFAULT_CHANNELS) return c.A.editedDefaultChannelIds.size > 0;
        if (E === h.Hy.CUSTOMIZATION_QUESTIONS)
            return g.A.editedOnboardingPrompts.length > 0 || u.A.getEditedConnections().length > 0;
        if (E === h.Hy.HOME_SETTINGS) return !(0, a.jJ)(m.A.getSettings());
        if (E === h.Hy.CONNECTIONS) return u.A.getEditedConnections().length > 0;
        return !1;
    }
    hasErrors() {
        return E === h.Hy.CUSTOMIZATION_QUESTIONS && null != g.A.errors.find((e) => null != e);
    }
    showNotice() {
        if (null == f) return !1;
        if ((0, x.o)(f)) return this.hasChanges();
        let e = o.A.getCurrentPage();
        return (E !== h.Hy.SAFETY_CHECK || e === d.C.OVERVIEW) && null != E && E !== h.Hy.LANDING;
    }
    canCloseEarly() {
        return null == f || (!this.hasErrors() && (!(0, x.o)(f) || !this.hasChanges()));
    }
}
let A = new N(l.h, {
    GUILD_SETTINGS_INIT: j,
    GUILD_SETTINGS_SET_SECTION: j,
    GUILD_SETTINGS_ONBOARDING_STEP: function (e) {
        let { step: t } = e;
        E = t;
    },
    GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function (e) {
        let { upsellType: t } = e;
        p.add(t);
    },
});
