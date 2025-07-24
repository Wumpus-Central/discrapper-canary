(n.d(t, { Z: () => y }), n(388685));
var r,
    i,
    l,
    s = n(442837),
    a = n(570140),
    o = n(45966),
    c = n(734893),
    d = n(999382),
    u = n(392885),
    m = n(740903),
    g = n(889369),
    p = n(969632),
    f = n(208665),
    h = n(84658),
    x = n(142961),
    b = n(981631);
let j = new Set(),
    v = h.PG.LANDING,
    _ = null;
function O(e) {
    let { subsection: t } = e;
    if (d.Z.getGuildId() === _) return !1;
    ((v = t === b.KsC.SERVER_GUIDE ? h.PG.HOME_SETTINGS : h.PG.LANDING), (_ = d.Z.getGuildId()));
}
class C extends (r = s.ZP.Store) {
    initialize() {
        (this.waitFor(o.Z, g.Z, f.Z, p.Z, u.Z), this.syncWith([o.Z, g.Z, f.Z, p.Z, u.Z], () => !0));
    }
    isEducationUpsellDismissed(e) {
        return j.has(e);
    }
    getCurrentPage() {
        return v;
    }
    hasChanges() {
        if (null == _) return !1;
        let e = o.Z.isAdvancedMode(_);
        if (v === h.PG.DEFAULT_CHANNELS)
            if (e) return g.Z.hasChanges() || f.Z.hasChanges();
            else return g.Z.hasChanges();
        return v === h.PG.CUSTOMIZATION_QUESTIONS ? f.Z.hasChanges() : v === h.PG.HOME_SETTINGS && p.Z.hasChanges();
    }
    hasConfiguredAnythingForCurrentStep() {
        return null != _ && (v === h.PG.SAFETY_CHECK || (v === h.PG.DEFAULT_CHANNELS ? g.Z.editedDefaultChannelIds.size > 0 : v === h.PG.CUSTOMIZATION_QUESTIONS ? f.Z.editedOnboardingPrompts.length > 0 : v === h.PG.HOME_SETTINGS && !(0, c.av)(p.Z.getSettings())));
    }
    hasErrors() {
        return v === h.PG.CUSTOMIZATION_QUESTIONS && null != f.Z.errors.find((e) => null != e);
    }
    showNotice() {
        if (null == _) return !1;
        if ((0, x.C)(_)) return this.hasChanges();
        let e = u.Z.getCurrentPage();
        return (v !== h.PG.SAFETY_CHECK || e === m.u.OVERVIEW) && null != v && v !== h.PG.LANDING;
    }
    canCloseEarly() {
        return null == _ || (!this.hasErrors() && (!(0, x.C)(_) || !this.hasChanges()));
    }
}
((l = 'GuildSettingsOnboardingStore'),
    (i = 'displayName') in C
        ? Object.defineProperty(C, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[i] = l));
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
    }
});
