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
    m = n(889369),
    g = n(969632),
    p = n(208665),
    h = n(84658),
    f = n(142961),
    b = n(981631);
let x = new Set(),
    j = h.PG.LANDING,
    v = null;
function _(e) {
    let { subsection: t } = e;
    if (c.Z.getGuildId() === v) return !1;
    (j = t === b.KsC.SERVER_GUIDE ? h.PG.HOME_SETTINGS : h.PG.LANDING), (v = c.Z.getGuildId());
}
class O extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, m.Z, p.Z, g.Z, d.Z), this.syncWith([s.Z, m.Z, p.Z, g.Z, d.Z], () => !0);
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
        if (j === h.PG.DEFAULT_CHANNELS)
            if (e) return m.Z.hasChanges() || p.Z.hasChanges();
            else return m.Z.hasChanges();
        return j === h.PG.CUSTOMIZATION_QUESTIONS ? p.Z.hasChanges() : j === h.PG.HOME_SETTINGS && g.Z.hasChanges();
    }
    hasConfiguredAnythingForCurrentStep() {
        return (
            null != v &&
            (j === h.PG.SAFETY_CHECK ||
                (j === h.PG.DEFAULT_CHANNELS
                    ? m.Z.editedDefaultChannelIds.size > 0
                    : j === h.PG.CUSTOMIZATION_QUESTIONS
                      ? p.Z.editedOnboardingPrompts.length > 0
                      : j === h.PG.HOME_SETTINGS && !(0, o.av)(g.Z.getSettings())))
        );
    }
    hasErrors() {
        return j === h.PG.CUSTOMIZATION_QUESTIONS && null != p.Z.errors.find((e) => null != e);
    }
    showNotice() {
        if (null == v) return !1;
        if ((0, f.C)(v)) return this.hasChanges();
        let e = d.Z.getCurrentPage();
        return (j !== h.PG.SAFETY_CHECK || e === u.u.OVERVIEW) && null != j && j !== h.PG.LANDING;
    }
    canCloseEarly() {
        return null == v || (!this.hasErrors() && (!(0, f.C)(v) || !this.hasChanges()));
    }
}
(i = "displayName") in O
    ? Object.defineProperty(O, i, {
          value: "GuildSettingsOnboardingStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (O[i] = "GuildSettingsOnboardingStore");
let y = new O(a.Z, {
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
