"use strict";
n.d(t, { A: () => y });
var r = n(311907),
    i = n(73153),
    a = n(793943),
    s = n(287809),
    o = n(954571),
    l = n(927578),
    u = n(350972),
    c = n(652215),
    d = n(49999),
    _ = n(788868);
let f = 2,
    p = { client: { desktop: u.LW.DEFAULT, coachmarkImpressions: 0 } },
    h = !0,
    m = () => {
        (h = !l.Ay.canUsePremiumAppIcons(s.default.getCurrentUser())) && g(u.LW.DEFAULT);
    },
    g = (e) => {
        (p.client.desktop = e),
            h ||
                o.default.track(c.HAw.APP_ICON_UPDATED, {
                    icon_id: e,
                    user_premium_tier: s.default.getCurrentUser()?.premiumType,
                    icon_premium_tier: e !== u.LW.DEFAULT ? _.PremiumTypes.TIER_2 : null,
                });
    };
function E(e) {
    let { id: t } = e;
    null != t && g(t);
}
function A() {
    h && (p.client = { desktop: u.LW.DEFAULT, coachmarkImpressions: f });
}
function I(e) {
    let { markAsDismissed: t } = e;
    (p.client.coachmarkImpressions += 1), p.client.coachmarkImpressions >= f && (t?.(d.i.UNKNOWN), A(), (0, a.Jp)());
}
class T extends r.Ay.PersistedStore {
    static displayName = "AppIconPersistedStoreState";
    static persistKey = "AppIconPersistedStoreState";
    initialize(e) {
        null != e && (p = e), this.waitFor(s.default), this.syncWith([s.default], m);
    }
    get isUpsellPreview() {
        return h;
    }
    getState() {
        return p;
    }
    getCurrentDesktopIcon() {
        return p?.client?.desktop;
    }
}
let y = new T(i.h, { APP_ICON_UPDATED: E, APP_ICON_EDITOR_RESET: A, APP_ICON_TRACK_IMPRESSION: I, LOGOUT: A });
