"use strict";
n.d(t, { A: () => E });
var i = n(311907),
    s = n(73153),
    l = n(591552),
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
    _ = n(652215);
let A = new Set(),
    p = x.Hy.LANDING,
    f = null;
function j(e) {
    let { subsection: t } = e;
    if (a.A.getGuildId() === f) return !1;
    (p = t === _.nd0.SERVER_GUIDE ? x.Hy.HOME_SETTINGS : x.Hy.LANDING), (f = a.A.getGuildId());
}
class N extends i.Ay.Store {
    static displayName = "GuildSettingsOnboardingStore";
    initialize() {
        this.waitFor(l.A, c.A, g.A, m.A, u.A, o.A, a.A), this.syncWith([l.A, c.A, g.A, m.A, u.A, o.A], () => !0);
    }
    isEducationUpsellDismissed(e) {
        return A.has(e);
    }
    getCurrentPage() {
        return p;
    }
    hasChanges() {
        if (null == f) return !1;
        let e = l.A.isAdvancedMode(f);
        if (p === x.Hy.DEFAULT_CHANNELS)
            if (e) return c.A.hasChanges() || g.A.hasChanges();
            else return c.A.hasChanges();
        return p === x.Hy.CUSTOMIZATION_QUESTIONS
            ? g.A.hasChanges() || u.A.hasChanges()
            : p === x.Hy.HOME_SETTINGS
              ? m.A.hasChanges()
              : p === x.Hy.CONNECTIONS && u.A.hasChanges();
    }
    hasConfiguredAnythingForCurrentStep() {
        if (null == f) return !1;
        if (p === x.Hy.SAFETY_CHECK) return !0;
        if (p === x.Hy.DEFAULT_CHANNELS) return c.A.editedDefaultChannelIds.size > 0;
        if (p === x.Hy.CUSTOMIZATION_QUESTIONS)
            return g.A.editedOnboardingPrompts.length > 0 || u.A.getEditedConnections().length > 0;
        if (p === x.Hy.HOME_SETTINGS) return !(0, r.jJ)(m.A.getSettings());
        if (p === x.Hy.CONNECTIONS) return u.A.getEditedConnections().length > 0;
        return !1;
    }
    hasErrors() {
        return p === x.Hy.CUSTOMIZATION_QUESTIONS && null != g.A.errors.find((e) => null != e);
    }
    showNotice() {
        if (null == f) return !1;
        if ((0, h.o)(f)) return this.hasChanges();
        let e = o.A.getCurrentPage();
        return (p !== x.Hy.SAFETY_CHECK || e === d.C.OVERVIEW) && null != p && p !== x.Hy.LANDING;
    }
    canCloseEarly() {
        return null == f || (!this.hasErrors() && (!(0, h.o)(f) || !this.hasChanges()));
    }
}
let E = new N(s.h, {
    GUILD_SETTINGS_INIT: j,
    GUILD_SETTINGS_SET_SECTION: j,
    GUILD_SETTINGS_ONBOARDING_STEP: function (e) {
        let { step: t } = e;
        p = t;
    },
    GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function (e) {
        let { upsellType: t } = e;
        A.add(t);
    },
});
