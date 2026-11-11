var s = i(855986),
    n = i(73153),
    c = i(793943),
    r = i(145359),
    m = i(773527),
    o = i(287809),
    a = i(129230),
    u = i(448645),
    d = i(350972),
    l = i(652215),
    p = i(49999),
    P = i(211824),
    I = i(682901);
let A = { client: { desktop: d.LW.DEFAULT, coachmarkImpressions: 0 } },
    b = !0;
function S(e) {
    return (0, m.z9)(e) && !(0, r.$X)(P.vB.APP_ICON);
}
function f(e) {
    return (0, m.z9)(e) && (0, r.$X)(P.vB.APP_ICON);
}
function h() {
    (b = !u.Ay.canUsePremiumAppIcons(o.default.getCurrentUser())) && !S(A.client.desktop) && g(_());
}
function g(e) {
    ((A.client.desktop = e),
        b ||
            f(e) ||
            a.default.track(l.HAw.APP_ICON_UPDATED, {
                icon_id: e,
                user_premium_tier: o.default.getCurrentUser()?.premiumType,
                icon_premium_tier: e !== d.LW.DEFAULT ? I.PremiumTypes.TIER_2 : null,
            }));
}
function _() {
    let e = A.client.committedDesktop ?? A.client.desktop;
    return S(e) ? e : d.LW.DEFAULT;
}
function T() {
    if (!b) {
        let e = A.client.committedDesktop ?? A.client.desktop;
        return A.client.desktop !== e && void (A.client.desktop = e);
    }
    let e = _();
    A.client = { desktop: e, committedDesktop: e, coachmarkImpressions: 2 };
}
class E extends s.Ay.PersistedStore {
    static displayName = "AppIconPersistedStoreState";
    static persistKey = "AppIconPersistedStoreState";
    initialize(e) {
        (null != e && (A = e), this.waitFor(o.default), this.syncWith([o.default], h));
    }
    get isUpsellPreview() {
        return b;
    }
    getState() {
        return A;
    }
    getCurrentDesktopIcon() {
        return A?.client?.desktop;
    }
    getCommittedDesktopIcon() {
        return b ? _() : (A.client.committedDesktop ?? A.client.desktop);
    }
    canKeepDesktopIconWithoutPremium(e) {
        return S(e);
    }
}
let k = new E(n.h, {
    APP_ICON_UPDATED: function (e) {
        let { id: t } = e;
        if (null == t) return !1;
        (b || null != A.client.committedDesktop || (A.client.committedDesktop = A.client.desktop),
            g(t),
            ((!b && !f(t)) || t === d.LW.DEFAULT || S(t)) && (A.client.committedDesktop = t));
    },
    APP_ICON_EDITOR_RESET: T,
    APP_ICON_TRACK_IMPRESSION: function (e) {
        let { markAsDismissed: t } = e;
        ((A.client.coachmarkImpressions += 1),
            A.client.coachmarkImpressions >= 2 && (t?.(p.i.UNKNOWN), T(), (0, c.Jp)()));
    },
    LOGOUT: function () {
        if (!b) return !1;
        A.client = { desktop: d.LW.DEFAULT, coachmarkImpressions: 2 };
    },
});
i.d(t, {}, { A: k });
