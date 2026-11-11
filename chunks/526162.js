var i = n(855986),
    s = n(73153),
    r = n(793943),
    l = n(145359),
    a = n(773527),
    c = n(287809),
    o = n(129230),
    u = n(448645),
    d = n(350972),
    m = n(652215),
    h = n(49999),
    g = n(211824),
    f = n(682901);
let p = { client: { desktop: d.LW.DEFAULT, coachmarkImpressions: 0 } },
    A = !0;
function x(e) {
    return (0, a.z9)(e) && !(0, l.$X)(g.vB.APP_ICON);
}
function v(e) {
    return (0, a.z9)(e) && (0, l.$X)(g.vB.APP_ICON);
}
function y() {
    (A = !u.Ay.canUsePremiumAppIcons(c.default.getCurrentUser())) && !x(p.client.desktop) && S(b());
}
function S(e) {
    ((p.client.desktop = e),
        A ||
            v(e) ||
            o.default.track(m.HAw.APP_ICON_UPDATED, {
                icon_id: e,
                user_premium_tier: c.default.getCurrentUser()?.premiumType,
                icon_premium_tier: e !== d.LW.DEFAULT ? f.PremiumTypes.TIER_2 : null,
            }));
}
function b() {
    let e = p.client.committedDesktop ?? p.client.desktop;
    return x(e) ? e : d.LW.DEFAULT;
}
function j() {
    if (!A) {
        let e = p.client.committedDesktop ?? p.client.desktop;
        return p.client.desktop !== e && void (p.client.desktop = e);
    }
    let e = b();
    p.client = { desktop: e, committedDesktop: e, coachmarkImpressions: 2 };
}
class N extends i.Ay.PersistedStore {
    static displayName = "AppIconPersistedStoreState";
    static persistKey = "AppIconPersistedStoreState";
    initialize(e) {
        (null != e && (p = e), this.waitFor(c.default), this.syncWith([c.default], y));
    }
    get isUpsellPreview() {
        return A;
    }
    getState() {
        return p;
    }
    getCurrentDesktopIcon() {
        return p?.client?.desktop;
    }
    getCommittedDesktopIcon() {
        return A ? b() : (p.client.committedDesktop ?? p.client.desktop);
    }
    canKeepDesktopIconWithoutPremium(e) {
        return x(e);
    }
}
let E = new N(s.h, {
    APP_ICON_UPDATED: function (e) {
        let { id: t } = e;
        if (null == t) return !1;
        (A || null != p.client.committedDesktop || (p.client.committedDesktop = p.client.desktop),
            S(t),
            ((!A && !v(t)) || t === d.LW.DEFAULT || x(t)) && (p.client.committedDesktop = t));
    },
    APP_ICON_EDITOR_RESET: j,
    APP_ICON_TRACK_IMPRESSION: function (e) {
        let { markAsDismissed: t } = e;
        ((p.client.coachmarkImpressions += 1),
            p.client.coachmarkImpressions >= 2 && (t?.(h.i.UNKNOWN), j(), (0, r.Jp)()));
    },
    LOGOUT: function () {
        if (!A) return !1;
        p.client = { desktop: d.LW.DEFAULT, coachmarkImpressions: 2 };
    },
});
n.d(t, {}, { A: E });
