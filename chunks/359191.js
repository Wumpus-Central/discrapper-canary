n.d(t, { Z: () => E }), n(47120);
var i,
    r,
    l,
    s = n(442837),
    a = n(570140),
    o = n(45966),
    c = n(734893),
    d = n(999382),
    u = n(392885),
    m = n(740903),
    h = n(889369),
    g = n(969632),
    x = n(208665),
    p = n(84658),
    _ = n(142961),
    C = n(981631);
let f = new Set(),
    v = p.PG.LANDING,
    N = null;
function j(e) {
    let { subsection: t } = e;
    if (d.Z.getGuildId() === N) return !1;
    (v = t === C.KsC.SERVER_GUIDE ? p.PG.HOME_SETTINGS : p.PG.LANDING), (N = d.Z.getGuildId());
}
class I extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(o.Z, h.Z, x.Z, g.Z, u.Z), this.syncWith([o.Z, h.Z, x.Z, g.Z, u.Z], () => !0);
    }
    isEducationUpsellDismissed(e) {
        return f.has(e);
    }
    getCurrentPage() {
        return v;
    }
    hasChanges() {
        if (null == N) return !1;
        let e = o.Z.isAdvancedMode(N);
        return v === p.PG.DEFAULT_CHANNELS ? (e ? h.Z.hasChanges() || x.Z.hasChanges() : h.Z.hasChanges()) : v === p.PG.CUSTOMIZATION_QUESTIONS ? x.Z.hasChanges() : v === p.PG.HOME_SETTINGS && g.Z.hasChanges();
    }
    hasConfiguredAnythingForCurrentStep() {
        return null != N && (v === p.PG.SAFETY_CHECK || (v === p.PG.DEFAULT_CHANNELS ? h.Z.editedDefaultChannelIds.size > 0 : v === p.PG.CUSTOMIZATION_QUESTIONS ? x.Z.editedOnboardingPrompts.length > 0 : v === p.PG.HOME_SETTINGS && !(0, c.av)(g.Z.getSettings())));
    }
    hasErrors() {
        return v === p.PG.CUSTOMIZATION_QUESTIONS && null != x.Z.errors.find((e) => null != e);
    }
    showNotice() {
        if (null == N) return !1;
        if ((0, _.C)(N)) return this.hasChanges();
        let e = u.Z.getCurrentPage();
        return (v !== p.PG.SAFETY_CHECK || e === m.u.OVERVIEW) && null != v && v !== p.PG.LANDING;
    }
    canCloseEarly() {
        return null == N || (!this.hasErrors() && (!(0, _.C)(N) || !this.hasChanges()));
    }
}
(l = 'GuildSettingsOnboardingStore'),
    (r = 'displayName') in I
        ? Object.defineProperty(I, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (I[r] = l);
let E = new I(a.Z, {
    GUILD_SETTINGS_INIT: j,
    GUILD_SETTINGS_SET_SECTION: j,
    GUILD_SETTINGS_ONBOARDING_STEP: function (e) {
        let { step: t } = e;
        v = t;
    },
    GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function (e) {
        let { upsellType: t } = e;
        f.add(t);
    }
});
