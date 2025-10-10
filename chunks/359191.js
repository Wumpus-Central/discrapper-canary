n.d(t, { Z: () => O }), n(388685);
var r,
    i,
    l = n(442837),
    s = n(570140),
    a = n(45966),
    o = n(734893),
    c = n(999382),
    d = n(392885),
    u = n(740903),
    g = n(889369),
    m = n(969632),
    p = n(208665),
    f = n(84658),
    h = n(142961),
    x = n(981631);
let b = new Set(),
    j = f.PG.LANDING,
    _ = null;
function v(e) {
    let { subsection: t } = e;
    if (c.Z.getGuildId() === _) return !1;
    (j = t === x.KsC.SERVER_GUIDE ? f.PG.HOME_SETTINGS : f.PG.LANDING), (_ = c.Z.getGuildId());
}
class C extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(a.Z, g.Z, p.Z, m.Z, d.Z), this.syncWith([a.Z, g.Z, p.Z, m.Z, d.Z], () => !0);
    }
    isEducationUpsellDismissed(e) {
        return b.has(e);
    }
    getCurrentPage() {
        return j;
    }
    hasChanges() {
        if (null == _) return !1;
        let e = a.Z.isAdvancedMode(_);
        if (j === f.PG.DEFAULT_CHANNELS)
            if (e) return g.Z.hasChanges() || p.Z.hasChanges();
            else return g.Z.hasChanges();
        return j === f.PG.CUSTOMIZATION_QUESTIONS ? p.Z.hasChanges() : j === f.PG.HOME_SETTINGS && m.Z.hasChanges();
    }
    hasConfiguredAnythingForCurrentStep() {
        return (
            null != _ &&
            (j === f.PG.SAFETY_CHECK ||
                (j === f.PG.DEFAULT_CHANNELS
                    ? g.Z.editedDefaultChannelIds.size > 0
                    : j === f.PG.CUSTOMIZATION_QUESTIONS
                      ? p.Z.editedOnboardingPrompts.length > 0
                      : j === f.PG.HOME_SETTINGS && !(0, o.av)(m.Z.getSettings())))
        );
    }
    hasErrors() {
        return j === f.PG.CUSTOMIZATION_QUESTIONS && null != p.Z.errors.find((e) => null != e);
    }
    showNotice() {
        if (null == _) return !1;
        if ((0, h.C)(_)) return this.hasChanges();
        let e = d.Z.getCurrentPage();
        return (j !== f.PG.SAFETY_CHECK || e === u.u.OVERVIEW) && null != j && j !== f.PG.LANDING;
    }
    canCloseEarly() {
        return null == _ || (!this.hasErrors() && (!(0, h.C)(_) || !this.hasChanges()));
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
let O = new C(s.Z, {
    GUILD_SETTINGS_INIT: v,
    GUILD_SETTINGS_SET_SECTION: v,
    GUILD_SETTINGS_ONBOARDING_STEP: function (e) {
        let { step: t } = e;
        j = t;
    },
    GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function (e) {
        let { upsellType: t } = e;
        b.add(t);
    },
});
