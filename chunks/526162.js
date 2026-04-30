"use strict";
n.d(t, { A: () => A });
var i = n(17928),
    r = n(228366),
    s = n(793943),
    a = n(287809),
    o = n(174459),
    l = n(927578),
    u = n(350972),
    c = n(652215),
    d = n(49999),
    _ = n(788868);
let f = { client: { desktop: u.LW.DEFAULT, coachmarkImpressions: 0 } },
    h = !0,
    p = () => {
        (h = !l.Ay.canUsePremiumAppIcons(a.default.getCurrentUser())) && E(u.LW.DEFAULT);
    },
    E = (e) => {
        (f.client.desktop = e),
            h ||
                o.default.track(c.HAw.APP_ICON_UPDATED, {
                    icon_id: e,
                    user_premium_tier: a.default.getCurrentUser()?.premiumType,
                    icon_premium_tier: e !== u.LW.DEFAULT ? _.PremiumTypes.TIER_2 : null,
                });
    };
function m() {
    h && (f.client = { desktop: u.LW.DEFAULT, coachmarkImpressions: 2 });
}
class g extends i.Ay.PersistedStore {
    static displayName = "AppIconPersistedStoreState";
    static persistKey = "AppIconPersistedStoreState";
    initialize(e) {
        null != e && (f = e), this.waitFor(a.default), this.syncWith([a.default], p);
    }
    get isUpsellPreview() {
        return h;
    }
    getState() {
        return f;
    }
    getCurrentDesktopIcon() {
        return f?.client?.desktop;
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
        (f.client.coachmarkImpressions += 1),
            f.client.coachmarkImpressions >= 2 && (t?.(d.i.UNKNOWN), m(), (0, s.Jp)());
    },
    LOGOUT: m,
});
