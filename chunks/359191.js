n.d(t, { Z: () => y }), n(388685);
var r,
    i,
    l,
    s = n(442837),
    a = n(570140),
    o = n(45966),
    c = n(734893),
    u = n(999382),
    d = n(392885),
    m = n(740903),
    g = n(889369),
    p = n(969632),
    h = n(208665),
    f = n(84658),
    x = n(142961),
    b = n(981631);
let j = new Set(),
    _ = f.PG.LANDING,
    v = null;
function O(e) {
    let { subsection: t } = e;
    if (u.Z.getGuildId() === v) return !1;
    (_ = t === b.KsC.SERVER_GUIDE ? f.PG.HOME_SETTINGS : f.PG.LANDING), (v = u.Z.getGuildId());
}
class C extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(o.Z, g.Z, h.Z, p.Z, d.Z), this.syncWith([o.Z, g.Z, h.Z, p.Z, d.Z], () => !0);
    }
    isEducationUpsellDismissed(e) {
        return j.has(e);
    }
    getCurrentPage() {
        return _;
    }
    hasChanges() {
        if (null == v) return !1;
        let e = o.Z.isAdvancedMode(v);
        if (_ === f.PG.DEFAULT_CHANNELS)
            if (e) return g.Z.hasChanges() || h.Z.hasChanges();
            else return g.Z.hasChanges();
        return _ === f.PG.CUSTOMIZATION_QUESTIONS ? h.Z.hasChanges() : _ === f.PG.HOME_SETTINGS && p.Z.hasChanges();
    }
    hasConfiguredAnythingForCurrentStep() {
        return null != v && (_ === f.PG.SAFETY_CHECK || (_ === f.PG.DEFAULT_CHANNELS ? g.Z.editedDefaultChannelIds.size > 0 : _ === f.PG.CUSTOMIZATION_QUESTIONS ? h.Z.editedOnboardingPrompts.length > 0 : _ === f.PG.HOME_SETTINGS && !(0, c.av)(p.Z.getSettings())));
    }
    hasErrors() {
        return _ === f.PG.CUSTOMIZATION_QUESTIONS && null != h.Z.errors.find((e) => null != e);
    }
    showNotice() {
        if (null == v) return !1;
        if ((0, x.C)(v)) return this.hasChanges();
        let e = d.Z.getCurrentPage();
        return (_ !== f.PG.SAFETY_CHECK || e === m.u.OVERVIEW) && null != _ && _ !== f.PG.LANDING;
    }
    canCloseEarly() {
        return null == v || (!this.hasErrors() && (!(0, x.C)(v) || !this.hasChanges()));
    }
}
(l = 'GuildSettingsOnboardingStore'),
    (i = 'displayName') in C
        ? Object.defineProperty(C, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[i] = l);
let y = new C(a.Z, {
    GUILD_SETTINGS_INIT: O,
    GUILD_SETTINGS_SET_SECTION: O,
    GUILD_SETTINGS_ONBOARDING_STEP: function (e) {
        let { step: t } = e;
        _ = t;
    },
    GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function (e) {
        let { upsellType: t } = e;
        j.add(t);
    }
});
