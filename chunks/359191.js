n.d(t, { Z: () => O }), n(47120);
var r,
    i,
    s,
    a = n(442837),
    l = n(570140),
    o = n(45966),
    c = n(734893),
    d = n(999382),
    u = n(392885),
    m = n(740903),
    g = n(889369),
    p = n(969632),
    h = n(208665),
    f = n(84658),
    b = n(142961),
    x = n(981631);
let j = new Set(),
    N = f.PG.LANDING,
    _ = null;
function v(e) {
    let { subsection: t } = e;
    if (d.Z.getGuildId() === _) return !1;
    (N = t === x.KsC.SERVER_GUIDE ? f.PG.HOME_SETTINGS : f.PG.LANDING), (_ = d.Z.getGuildId());
}
class C extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(o.Z, g.Z, h.Z, p.Z, u.Z), this.syncWith([o.Z, g.Z, h.Z, p.Z, u.Z], () => !0);
    }
    isEducationUpsellDismissed(e) {
        return j.has(e);
    }
    getCurrentPage() {
        return N;
    }
    hasChanges() {
        if (null == _) return !1;
        let e = o.Z.isAdvancedMode(_);
        if (N === f.PG.DEFAULT_CHANNELS)
            if (e) return g.Z.hasChanges() || h.Z.hasChanges();
            else return g.Z.hasChanges();
        return N === f.PG.CUSTOMIZATION_QUESTIONS ? h.Z.hasChanges() : N === f.PG.HOME_SETTINGS && p.Z.hasChanges();
    }
    hasConfiguredAnythingForCurrentStep() {
        return null != _ && (N === f.PG.SAFETY_CHECK || (N === f.PG.DEFAULT_CHANNELS ? g.Z.editedDefaultChannelIds.size > 0 : N === f.PG.CUSTOMIZATION_QUESTIONS ? h.Z.editedOnboardingPrompts.length > 0 : N === f.PG.HOME_SETTINGS && !(0, c.av)(p.Z.getSettings())));
    }
    hasErrors() {
        return N === f.PG.CUSTOMIZATION_QUESTIONS && null != h.Z.errors.find((e) => null != e);
    }
    showNotice() {
        if (null == _) return !1;
        if ((0, b.C)(_)) return this.hasChanges();
        let e = u.Z.getCurrentPage();
        return (N !== f.PG.SAFETY_CHECK || e === m.u.OVERVIEW) && null != N && N !== f.PG.LANDING;
    }
    canCloseEarly() {
        return null == _ || (!this.hasErrors() && (!(0, b.C)(_) || !this.hasChanges()));
    }
}
(s = 'GuildSettingsOnboardingStore'),
    (i = 'displayName') in C
        ? Object.defineProperty(C, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[i] = s);
let O = new C(l.Z, {
    GUILD_SETTINGS_INIT: v,
    GUILD_SETTINGS_SET_SECTION: v,
    GUILD_SETTINGS_ONBOARDING_STEP: function (e) {
        let { step: t } = e;
        N = t;
    },
    GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function (e) {
        let { upsellType: t } = e;
        j.add(t);
    }
});
