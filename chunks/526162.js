n.d(t, { A: () => N });
var i = n(17928),
    a = n(228366),
    r = n(793943),
    s = n(287809),
    l = n(954571),
    o = n(927578),
    d = n(350972),
    c = n(652215),
    _ = n(49999),
    E = n(788868);
let u = { client: { desktop: d.LW.DEFAULT, coachmarkImpressions: 0 } },
    A = !0,
    I = () => {
        (A = !o.Ay.canUsePremiumAppIcons(s.default.getCurrentUser())) && T(d.LW.DEFAULT);
    },
    T = (e) => {
        (u.client.desktop = e),
            A ||
                l.default.track(c.HAw.APP_ICON_UPDATED, {
                    icon_id: e,
                    user_premium_tier: s.default.getCurrentUser()?.premiumType,
                    icon_premium_tier: e !== d.LW.DEFAULT ? E.PremiumTypes.TIER_2 : null,
                });
    };
function h() {
    A && (u.client = { desktop: d.LW.DEFAULT, coachmarkImpressions: 2 });
}
class S extends i.Ay.PersistedStore {
    static displayName = "AppIconPersistedStoreState";
    static persistKey = "AppIconPersistedStoreState";
    initialize(e) {
        null != e && (u = e), this.waitFor(s.default), this.syncWith([s.default], I);
    }
    get isUpsellPreview() {
        return A;
    }
    getState() {
        return u;
    }
    getCurrentDesktopIcon() {
        return u?.client?.desktop;
    }
}
let N = new S(a.h, {
    APP_ICON_UPDATED: function (e) {
        let { id: t } = e;
        null != t && T(t);
    },
    APP_ICON_EDITOR_RESET: h,
    APP_ICON_TRACK_IMPRESSION: function (e) {
        let { markAsDismissed: t } = e;
        (u.client.coachmarkImpressions += 1),
            u.client.coachmarkImpressions >= 2 && (t?.(_.i.UNKNOWN), h(), (0, r.Jp)());
    },
    LOGOUT: h,
});
