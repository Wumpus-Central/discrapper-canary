n.d(t, { Z: () => N }), n(388685);
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
    f = n(926958),
    m = n(969632),
    b = n(208665),
    p = n(84658),
    h = n(142961),
    x = n(981631);
let j = new Set(),
    v = p.PG.LANDING,
    O = null;
function C(e) {
    let { subsection: t } = e;
    if (c.Z.getGuildId() === O) return !1;
    (v = t === x.KsC.SERVER_GUIDE ? p.PG.HOME_SETTINGS : p.PG.LANDING), (O = c.Z.getGuildId());
}
class y extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, g.Z, b.Z, m.Z, f.Z, d.Z, c.Z), this.syncWith([s.Z, g.Z, b.Z, m.Z, f.Z, d.Z], () => !0);
    }
    isEducationUpsellDismissed(e) {
        return j.has(e);
    }
    getCurrentPage() {
        return v;
    }
    hasChanges() {
        if (null == O) return !1;
        let e = s.Z.isAdvancedMode(O);
        if (v === p.PG.DEFAULT_CHANNELS)
            if (e) return g.Z.hasChanges() || b.Z.hasChanges();
            else return g.Z.hasChanges();
        return v === p.PG.CUSTOMIZATION_QUESTIONS
            ? b.Z.hasChanges() || f.Z.hasChanges()
            : v === p.PG.HOME_SETTINGS
              ? m.Z.hasChanges()
              : v === p.PG.CONNECTIONS && f.Z.hasChanges();
    }
    hasConfiguredAnythingForCurrentStep() {
        if (null == O) return !1;
        if (v === p.PG.SAFETY_CHECK) return !0;
        if (v === p.PG.DEFAULT_CHANNELS) return g.Z.editedDefaultChannelIds.size > 0;
        if (v === p.PG.CUSTOMIZATION_QUESTIONS)
            return b.Z.editedOnboardingPrompts.length > 0 || f.Z.getEditedConnections().length > 0;
        if (v === p.PG.HOME_SETTINGS) return !(0, o.av)(m.Z.getSettings());
        if (v === p.PG.CONNECTIONS) return f.Z.getEditedConnections().length > 0;
        return !1;
    }
    hasErrors() {
        return v === p.PG.CUSTOMIZATION_QUESTIONS && null != b.Z.errors.find((e) => null != e);
    }
    showNotice() {
        if (null == O) return !1;
        if ((0, h.C)(O)) return this.hasChanges();
        let e = d.Z.getCurrentPage();
        return (v !== p.PG.SAFETY_CHECK || e === u.u.OVERVIEW) && null != v && v !== p.PG.LANDING;
    }
    canCloseEarly() {
        return null == O || (!this.hasErrors() && (!(0, h.C)(O) || !this.hasChanges()));
    }
}
(i = "displayName") in y
    ? Object.defineProperty(y, i, {
          value: "GuildSettingsOnboardingStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (y[i] = "GuildSettingsOnboardingStore");
let N = new y(a.Z, {
    GUILD_SETTINGS_INIT: C,
    GUILD_SETTINGS_SET_SECTION: C,
    GUILD_SETTINGS_ONBOARDING_STEP: function (e) {
        let { step: t } = e;
        v = t;
    },
    GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function (e) {
        let { upsellType: t } = e;
        j.add(t);
    },
});
