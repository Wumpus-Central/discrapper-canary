var i = n(855986),
    s = n(73153),
    r = n(793943),
    l = n(576254),
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
    x = !0;
function v(e) {
    return (0, a.z9)(e) && !(0, l.$X)(g.vB.APP_ICON);
}
function A(e) {
    return (0, a.z9)(e) && (0, l.$X)(g.vB.APP_ICON);
}
function y() {
    (x = !u.Ay.canUsePremiumAppIcons(c.default.getCurrentUser())) && !v(p.client.desktop) && b(j());
}
function b(e) {
    ((p.client.desktop = e),
        x ||
            A(e) ||
            o.default.track(m.HAw.APP_ICON_UPDATED, {
                icon_id: e,
                user_premium_tier: c.default.getCurrentUser()?.premiumType,
                icon_premium_tier: e !== d.LW.DEFAULT ? f.PremiumTypes.TIER_2 : null,
            }));
}
function j() {
    let e = p.client.committedDesktop ?? p.client.desktop;
    return v(e) ? e : d.LW.DEFAULT;
}
function S() {
    if (!x) {
        let e = p.client.committedDesktop ?? p.client.desktop;
        return p.client.desktop !== e && void (p.client.desktop = e);
    }
    let e = j();
    p.client = { desktop: e, committedDesktop: e, coachmarkImpressions: 2 };
}
class N extends i.Ay.PersistedStore {
    static displayName = "AppIconPersistedStoreState";
    static persistKey = "AppIconPersistedStoreState";
    initialize(e) {
        (null != e && (p = e), this.waitFor(c.default), this.syncWith([c.default], y));
    }
    get isUpsellPreview() {
        return x;
    }
    getState() {
        return p;
    }
    getCurrentDesktopIcon() {
        return p?.client?.desktop;
    }
}
let E = new N(s.h, {
    APP_ICON_UPDATED: function (e) {
        let { id: t } = e;
        if (null == t) return !1;
        (x || null != p.client.committedDesktop || (p.client.committedDesktop = p.client.desktop),
            b(t),
            ((!x && !A(t)) || t === d.LW.DEFAULT || v(t)) && (p.client.committedDesktop = t));
    },
    APP_ICON_EDITOR_RESET: S,
    APP_ICON_TRACK_IMPRESSION: function (e) {
        let { markAsDismissed: t } = e;
        ((p.client.coachmarkImpressions += 1),
            p.client.coachmarkImpressions >= 2 && (t?.(h.i.UNKNOWN), S(), (0, r.Jp)()));
    },
    LOGOUT: function () {
        if (!x) return !1;
        p.client = { desktop: d.LW.DEFAULT, coachmarkImpressions: 2 };
    },
});
n.d(t, {}, { A: E });
