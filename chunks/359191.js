n.d(t, { Z: () => O }), n(388685);
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
    m = n(969632),
    p = n(208665),
    f = n(84658),
    h = n(142961),
    b = n(981631);
let x = new Set(),
    j = f.PG.LANDING,
    v = null;
function _(e) {
    let { subsection: t } = e;
    if (c.Z.getGuildId() === v) return !1;
    (j = t === b.KsC.SERVER_GUIDE ? f.PG.HOME_SETTINGS : f.PG.LANDING), (v = c.Z.getGuildId());
}
class C extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, g.Z, m.Z, p.Z, d.Z, c.Z), this.syncWith([s.Z, g.Z, p.Z, m.Z, d.Z], () => !0);
    }
    isEducationUpsellDismissed(e) {
        return x.has(e);
    }
    getCurrentPage() {
        return j;
    }
    hasChanges() {
        if (null == v) return !1;
        let e = s.Z.isAdvancedMode(v);
        if (j === f.PG.DEFAULT_CHANNELS)
            if (e) return g.Z.hasChanges() || p.Z.hasChanges();
            else return g.Z.hasChanges();
        return j === f.PG.CUSTOMIZATION_QUESTIONS ? p.Z.hasChanges() : j === f.PG.HOME_SETTINGS && m.Z.hasChanges();
    }
    hasConfiguredAnythingForCurrentStep() {
        return (
            null != v &&
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
        if (null == v) return !1;
        if ((0, h.C)(v)) return this.hasChanges();
        let e = d.Z.getCurrentPage();
        return (j !== f.PG.SAFETY_CHECK || e === u.u.OVERVIEW) && null != j && j !== f.PG.LANDING;
    }
    canCloseEarly() {
        return null == v || (!this.hasErrors() && (!(0, h.C)(v) || !this.hasChanges()));
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
let O = new C(a.Z, {
    GUILD_SETTINGS_INIT: _,
    GUILD_SETTINGS_SET_SECTION: _,
    GUILD_SETTINGS_ONBOARDING_STEP: function (e) {
        let { step: t } = e;
        j = t;
    },
    GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function (e) {
        let { upsellType: t } = e;
        x.add(t);
    },
});
