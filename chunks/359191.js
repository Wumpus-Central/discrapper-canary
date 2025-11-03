n.d(t, { Z: () => y }), n(388685);
var r,
    i,
    l = n(442837),
    a = n(570140),
    s = n(45966),
    o = n(734893),
    c = n(999382),
    d = n(392885),
    u = n(740903),
    g = n(889369),
    m = n(926958),
    p = n(969632),
    f = n(208665),
    h = n(84658),
    b = n(142961),
    x = n(981631);
let j = new Set(),
    v = h.PG.LANDING,
    _ = null;
function O(e) {
    let { subsection: t } = e;
    if (c.Z.getGuildId() === _) return !1;
    (v = t === x.KsC.SERVER_GUIDE ? h.PG.HOME_SETTINGS : h.PG.LANDING), (_ = c.Z.getGuildId());
}
class C extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, g.Z, f.Z, p.Z, m.Z, d.Z, c.Z), this.syncWith([s.Z, g.Z, f.Z, p.Z, m.Z, d.Z], () => !0);
    }
    isEducationUpsellDismissed(e) {
        return j.has(e);
    }
    getCurrentPage() {
        return v;
    }
    hasChanges() {
        if (null == _) return !1;
        let e = s.Z.isAdvancedMode(_);
        if (v === h.PG.DEFAULT_CHANNELS)
            if (e) return g.Z.hasChanges() || f.Z.hasChanges();
            else return g.Z.hasChanges();
        return v === h.PG.CUSTOMIZATION_QUESTIONS
            ? f.Z.hasChanges() || m.Z.hasChanges()
            : v === h.PG.HOME_SETTINGS
              ? p.Z.hasChanges()
              : v === h.PG.CONNECTIONS && m.Z.hasChanges();
    }
    hasConfiguredAnythingForCurrentStep() {
        if (null == _) return !1;
        if (v === h.PG.SAFETY_CHECK) return !0;
        if (v === h.PG.DEFAULT_CHANNELS) return g.Z.editedDefaultChannelIds.size > 0;
        if (v === h.PG.CUSTOMIZATION_QUESTIONS)
            return f.Z.editedOnboardingPrompts.length > 0 || m.Z.getEditedConnections().length > 0;
        if (v === h.PG.HOME_SETTINGS) return !(0, o.av)(p.Z.getSettings());
        if (v === h.PG.CONNECTIONS) return m.Z.getEditedConnections().length > 0;
        return !1;
    }
    hasErrors() {
        return v === h.PG.CUSTOMIZATION_QUESTIONS && null != f.Z.errors.find((e) => null != e);
    }
    showNotice() {
        if (null == _) return !1;
        if ((0, b.C)(_)) return this.hasChanges();
        let e = d.Z.getCurrentPage();
        return (v !== h.PG.SAFETY_CHECK || e === u.u.OVERVIEW) && null != v && v !== h.PG.LANDING;
    }
    canCloseEarly() {
        return null == _ || (!this.hasErrors() && (!(0, b.C)(_) || !this.hasChanges()));
    }
}
(i = "displayName") in C
    ? Object.defineProperty(C, i, {
          value: "GuildSettingsOnboardingStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (C[i] = "GuildSettingsOnboardingStore");
let y = new C(a.Z, {
    GUILD_SETTINGS_INIT: O,
    GUILD_SETTINGS_SET_SECTION: O,
    GUILD_SETTINGS_ONBOARDING_STEP: function (e) {
        let { step: t } = e;
        v = t;
    },
    GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function (e) {
        let { upsellType: t } = e;
        j.add(t);
    },
});
