n.d(t, { Z: () => O }), n(388685);
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
    f = n(208665),
    h = n(84658),
    b = n(142961),
    x = n(981631);
let j = new Set(),
    N = h.PG.LANDING,
    v = null;
function _(e) {
    let { subsection: t } = e;
    if (d.Z.getGuildId() === v) return !1;
    (N = t === x.KsC.SERVER_GUIDE ? h.PG.HOME_SETTINGS : h.PG.LANDING), (v = d.Z.getGuildId());
}
class y extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(o.Z, g.Z, f.Z, p.Z, u.Z), this.syncWith([o.Z, g.Z, f.Z, p.Z, u.Z], () => !0);
    }
    isEducationUpsellDismissed(e) {
        return j.has(e);
    }
    getCurrentPage() {
        return N;
    }
    hasChanges() {
        if (null == v) return !1;
        let e = o.Z.isAdvancedMode(v);
        if (N === h.PG.DEFAULT_CHANNELS)
            if (e) return g.Z.hasChanges() || f.Z.hasChanges();
            else return g.Z.hasChanges();
        return N === h.PG.CUSTOMIZATION_QUESTIONS ? f.Z.hasChanges() : N === h.PG.HOME_SETTINGS && p.Z.hasChanges();
    }
    hasConfiguredAnythingForCurrentStep() {
        return null != v && (N === h.PG.SAFETY_CHECK || (N === h.PG.DEFAULT_CHANNELS ? g.Z.editedDefaultChannelIds.size > 0 : N === h.PG.CUSTOMIZATION_QUESTIONS ? f.Z.editedOnboardingPrompts.length > 0 : N === h.PG.HOME_SETTINGS && !(0, c.av)(p.Z.getSettings())));
    }
    hasErrors() {
        return N === h.PG.CUSTOMIZATION_QUESTIONS && null != f.Z.errors.find((e) => null != e);
    }
    showNotice() {
        if (null == v) return !1;
        if ((0, b.C)(v)) return this.hasChanges();
        let e = u.Z.getCurrentPage();
        return (N !== h.PG.SAFETY_CHECK || e === m.u.OVERVIEW) && null != N && N !== h.PG.LANDING;
    }
    canCloseEarly() {
        return null == v || (!this.hasErrors() && (!(0, b.C)(v) || !this.hasChanges()));
    }
}
(s = 'GuildSettingsOnboardingStore'),
    (i = 'displayName') in y
        ? Object.defineProperty(y, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (y[i] = s);
let O = new y(l.Z, {
    GUILD_SETTINGS_INIT: _,
    GUILD_SETTINGS_SET_SECTION: _,
    GUILD_SETTINGS_ONBOARDING_STEP: function (e) {
        let { step: t } = e;
        N = t;
    },
    GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function (e) {
        let { upsellType: t } = e;
        j.add(t);
    }
});
