"use strict";
n.d(t, { A: () => T });
var i = n(17928),
    r = n(228366),
    a = n(793943),
    s = n(287809),
    l = n(174459),
    o = n(428262),
    d = n(350972),
    c = n(652215),
    u = n(49999),
    _ = n(202541);
let E = { client: { desktop: d.LW.DEFAULT, coachmarkImpressions: 0 } },
    A = !0;
function h() {
    (A = !o.Ay.canUsePremiumAppIcons(s.default.getCurrentUser())) && I(d.LW.DEFAULT);
}
function I(e) {
    (E.client.desktop = e),
        A ||
            l.default.track(c.HAw.APP_ICON_UPDATED, {
                icon_id: e,
                user_premium_tier: s.default.getCurrentUser()?.premiumType,
                icon_premium_tier: e !== d.LW.DEFAULT ? _.PremiumTypes.TIER_2 : null,
            });
}
function f() {
    A && (E.client = { desktop: d.LW.DEFAULT, coachmarkImpressions: 2 });
}
class p extends i.Ay.PersistedStore {
    static displayName = "AppIconPersistedStoreState";
    static persistKey = "AppIconPersistedStoreState";
    initialize(e) {
        null != e && (E = e), this.waitFor(s.default), this.syncWith([s.default], h);
    }
    get isUpsellPreview() {
        return A;
    }
    getState() {
        return E;
    }
    getCurrentDesktopIcon() {
        return E?.client?.desktop;
    }
}
let T = new p(r.h, {
    APP_ICON_UPDATED: function (e) {
        let { id: t } = e;
        null != t && I(t);
    },
    APP_ICON_EDITOR_RESET: f,
    APP_ICON_TRACK_IMPRESSION: function (e) {
        let { markAsDismissed: t } = e;
        (E.client.coachmarkImpressions += 1),
            E.client.coachmarkImpressions >= 2 && (t?.(u.i.UNKNOWN), f(), (0, a.Jp)());
    },
    LOGOUT: f,
});
