n.d(t, { A: () => y });
var i = n(17928),
    s = n(228366),
    r = n(793943),
    l = n(287809),
    a = n(174459),
    c = n(428262),
    o = n(350972),
    u = n(652215),
    d = n(49999),
    m = n(202541);
let h = { client: { desktop: o.LW.DEFAULT, coachmarkImpressions: 0 } },
    g = !0;
function x() {
    (g = !c.Ay.canUsePremiumAppIcons(l.default.getCurrentUser())) && f(o.LW.DEFAULT);
}
function f(e) {
    (h.client.desktop = e),
        g ||
            a.default.track(u.HAw.APP_ICON_UPDATED, {
                icon_id: e,
                user_premium_tier: l.default.getCurrentUser()?.premiumType,
                icon_premium_tier: e !== o.LW.DEFAULT ? m.PremiumTypes.TIER_2 : null,
            });
}
function p() {
    g && (h.client = { desktop: o.LW.DEFAULT, coachmarkImpressions: 2 });
}
class A extends i.Ay.PersistedStore {
    static displayName = "AppIconPersistedStoreState";
    static persistKey = "AppIconPersistedStoreState";
    initialize(e) {
        null != e && (h = e), this.waitFor(l.default), this.syncWith([l.default], x);
    }
    get isUpsellPreview() {
        return g;
    }
    getState() {
        return h;
    }
    getCurrentDesktopIcon() {
        return h?.client?.desktop;
    }
}
let y = new A(s.h, {
    APP_ICON_UPDATED: function (e) {
        let { id: t } = e;
        null != t && f(t);
    },
    APP_ICON_EDITOR_RESET: p,
    APP_ICON_TRACK_IMPRESSION: function (e) {
        let { markAsDismissed: t } = e;
        (h.client.coachmarkImpressions += 1),
            h.client.coachmarkImpressions >= 2 && (t?.(d.i.UNKNOWN), p(), (0, r.Jp)());
    },
    LOGOUT: p,
});
