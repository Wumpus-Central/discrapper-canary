"use strict";
n.d(t, { A: () => A });
var r = n(311907),
    i = n(73153),
    s = n(793943),
    a = n(287809),
    o = n(954571),
    l = n(927578),
    u = n(350972),
    d = n(652215),
    c = n(49999),
    _ = n(788868);
let f = { client: { desktop: u.LW.DEFAULT, coachmarkImpressions: 0 } },
    E = !0,
    h = () => {
        (E = !l.Ay.canUsePremiumAppIcons(a.default.getCurrentUser())) && p(u.LW.DEFAULT);
    },
    p = (e) => {
        (f.client.desktop = e),
            E ||
                o.default.track(d.HAw.APP_ICON_UPDATED, {
                    icon_id: e,
                    user_premium_tier: a.default.getCurrentUser()?.premiumType,
                    icon_premium_tier: e !== u.LW.DEFAULT ? _.PremiumTypes.TIER_2 : null,
                });
    };
function m() {
    E && (f.client = { desktop: u.LW.DEFAULT, coachmarkImpressions: 2 });
}
class g extends r.Ay.PersistedStore {
    static displayName = "AppIconPersistedStoreState";
    static persistKey = "AppIconPersistedStoreState";
    initialize(e) {
        null != e && (f = e), this.waitFor(a.default), this.syncWith([a.default], h);
    }
    get isUpsellPreview() {
        return E;
    }
    getState() {
        return f;
    }
    getCurrentDesktopIcon() {
        return f?.client?.desktop;
    }
}
let A = new g(i.h, {
    APP_ICON_UPDATED: function (e) {
        let { id: t } = e;
        null != t && p(t);
    },
    APP_ICON_EDITOR_RESET: m,
    APP_ICON_TRACK_IMPRESSION: function (e) {
        let { markAsDismissed: t } = e;
        (f.client.coachmarkImpressions += 1),
            f.client.coachmarkImpressions >= 2 && (t?.(c.i.UNKNOWN), m(), (0, s.Jp)());
    },
    LOGOUT: m,
});
