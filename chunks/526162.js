"use strict";
n.d(t, { A: () => A });
var i = n(17928),
    r = n(228366),
    s = n(793943),
    a = n(287809),
    o = n(174459),
    l = n(428262),
    u = n(350972),
    c = n(652215),
    d = n(49999),
    _ = n(788868);
let h = { client: { desktop: u.LW.DEFAULT, coachmarkImpressions: 0 } },
    f = !0;
function p() {
    (f = !l.Ay.canUsePremiumAppIcons(a.default.getCurrentUser())) && E(u.LW.DEFAULT);
}
function E(e) {
    (h.client.desktop = e),
        f ||
            o.default.track(c.HAw.APP_ICON_UPDATED, {
                icon_id: e,
                user_premium_tier: a.default.getCurrentUser()?.premiumType,
                icon_premium_tier: e !== u.LW.DEFAULT ? _.PremiumTypes.TIER_2 : null,
            });
}
function m() {
    f && (h.client = { desktop: u.LW.DEFAULT, coachmarkImpressions: 2 });
}
class g extends i.Ay.PersistedStore {
    static displayName = "AppIconPersistedStoreState";
    static persistKey = "AppIconPersistedStoreState";
    initialize(e) {
        null != e && (h = e), this.waitFor(a.default), this.syncWith([a.default], p);
    }
    get isUpsellPreview() {
        return f;
    }
    getState() {
        return h;
    }
    getCurrentDesktopIcon() {
        return h?.client?.desktop;
    }
}
let A = new g(r.h, {
    APP_ICON_UPDATED: function (e) {
        let { id: t } = e;
        null != t && E(t);
    },
    APP_ICON_EDITOR_RESET: m,
    APP_ICON_TRACK_IMPRESSION: function (e) {
        let { markAsDismissed: t } = e;
        (h.client.coachmarkImpressions += 1),
            h.client.coachmarkImpressions >= 2 && (t?.(d.i.UNKNOWN), m(), (0, s.Jp)());
    },
    LOGOUT: m,
});
