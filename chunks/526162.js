n.d(t, { A: () => O });
var i = n(17928),
    r = n(228366),
    a = n(793943),
    s = n(287809),
    _ = n(954571),
    l = n(927578),
    o = n(350972),
    E = n(652215),
    d = n(49999),
    c = n(788868);
let u = { client: { desktop: o.LW.DEFAULT, coachmarkImpressions: 0 } },
    I = !0,
    A = () => {
        (I = !l.Ay.canUsePremiumAppIcons(s.default.getCurrentUser())) && T(o.LW.DEFAULT);
    },
    T = (e) => {
        (u.client.desktop = e),
            I ||
                _.default.track(E.HAw.APP_ICON_UPDATED, {
                    icon_id: e,
                    user_premium_tier: s.default.getCurrentUser()?.premiumType,
                    icon_premium_tier: e !== o.LW.DEFAULT ? c.PremiumTypes.TIER_2 : null,
                });
    };
function S() {
    I && (u.client = { desktop: o.LW.DEFAULT, coachmarkImpressions: 2 });
}
class N extends i.Ay.PersistedStore {
    static displayName = "AppIconPersistedStoreState";
    static persistKey = "AppIconPersistedStoreState";
    initialize(e) {
        null != e && (u = e), this.waitFor(s.default), this.syncWith([s.default], A);
    }
    get isUpsellPreview() {
        return I;
    }
    getState() {
        return u;
    }
    getCurrentDesktopIcon() {
        return u?.client?.desktop;
    }
}
let O = new N(r.h, {
    APP_ICON_UPDATED: function (e) {
        let { id: t } = e;
        null != t && T(t);
    },
    APP_ICON_EDITOR_RESET: S,
    APP_ICON_TRACK_IMPRESSION: function (e) {
        let { markAsDismissed: t } = e;
        (u.client.coachmarkImpressions += 1),
            u.client.coachmarkImpressions >= 2 && (t?.(d.i.UNKNOWN), S(), (0, a.Jp)());
    },
    LOGOUT: S,
});
