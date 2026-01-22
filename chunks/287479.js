n.d(t, {
    A: () => E,
}),
    n(896048);
var r,
    i,
    l = n(311907),
    s = n(73153),
    a = n(591552),
    c = n(374084),
    o = n(555337),
    d = n(982832),
    u = n(660496),
    f = n(863694),
    g = n(352821),
    b = n(132514),
    m = n(655943),
    p = n(400812),
    x = n(72533),
    h = n(652215);
let j = new Set(),
    O = p.Hy.LANDING,
    y = null;

function v(e) {
    let { subsection: t } = e;
    if (o.A.getGuildId() === y) return !1;
    (O = t === h.nd0.SERVER_GUIDE ? p.Hy.HOME_SETTINGS : p.Hy.LANDING), (y = o.A.getGuildId());
}
class A extends (r = l.Ay.Store) {
    initialize() {
        this.waitFor(a.A, f.A, m.A, b.A, g.A, d.A, o.A), this.syncWith([a.A, f.A, m.A, b.A, g.A, d.A], () => !0);
    }
    isEducationUpsellDismissed(e) {
        return j.has(e);
    }
    getCurrentPage() {
        return O;
    }
    hasChanges() {
        if (null == y) return !1;
        let e = a.A.isAdvancedMode(y);
        if (O === p.Hy.DEFAULT_CHANNELS)
            if (e) return f.A.hasChanges() || m.A.hasChanges();
            else return f.A.hasChanges();
        return O === p.Hy.CUSTOMIZATION_QUESTIONS
            ? m.A.hasChanges() || g.A.hasChanges()
            : O === p.Hy.HOME_SETTINGS
              ? b.A.hasChanges()
              : O === p.Hy.CONNECTIONS && g.A.hasChanges();
    }
    hasConfiguredAnythingForCurrentStep() {
        if (null == y) return !1;
        if (O === p.Hy.SAFETY_CHECK) return !0;
        if (O === p.Hy.DEFAULT_CHANNELS) return f.A.editedDefaultChannelIds.size > 0;
        if (O === p.Hy.CUSTOMIZATION_QUESTIONS)
            return m.A.editedOnboardingPrompts.length > 0 || g.A.getEditedConnections().length > 0;
        if (O === p.Hy.HOME_SETTINGS) return !(0, c.jJ)(b.A.getSettings());
        if (O === p.Hy.CONNECTIONS) return g.A.getEditedConnections().length > 0;
        return !1;
    }
    hasErrors() {
        return O === p.Hy.CUSTOMIZATION_QUESTIONS && null != m.A.errors.find((e) => null != e);
    }
    showNotice() {
        if (null == y) return !1;
        if ((0, x.o)(y)) return this.hasChanges();
        let e = d.A.getCurrentPage();
        return (O !== p.Hy.SAFETY_CHECK || e === u.C.OVERVIEW) && null != O && O !== p.Hy.LANDING;
    }
    canCloseEarly() {
        return null == y || (!this.hasErrors() && (!(0, x.o)(y) || !this.hasChanges()));
    }
}
(i = "displayName") in A
    ? Object.defineProperty(A, i, {
          value: "GuildSettingsOnboardingStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (A[i] = "GuildSettingsOnboardingStore");
let E = new A(s.h, {
    GUILD_SETTINGS_INIT: v,
    GUILD_SETTINGS_SET_SECTION: v,
    GUILD_SETTINGS_ONBOARDING_STEP: function (e) {
        let { step: t } = e;
        O = t;
    },
    GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function (e) {
        let { upsellType: t } = e;
        j.add(t);
    },
});
