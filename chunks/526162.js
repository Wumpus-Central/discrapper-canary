var i = n(855986),
    r = n(73153),
    a = n(793943),
    s = n(145359),
    l = n(773527),
    o = n(287809),
    d = n(129230),
    c = n(448645),
    u = n(350972),
    _ = n(652215),
    E = n(49999),
    A = n(211824),
    f = n(682901);
let h = { client: { desktop: u.LW.DEFAULT, coachmarkImpressions: 0 } },
    I = !0;
function p(e) {
    return (0, l.z9)(e) && !(0, s.$X)(A.vB.APP_ICON);
}
function m(e) {
    return (0, l.z9)(e) && (0, s.$X)(A.vB.APP_ICON);
}
function T() {
    (I = !c.Ay.canUsePremiumAppIcons(o.default.getCurrentUser())) && !p(h.client.desktop) && g(S());
}
function g(e) {
    ((h.client.desktop = e),
        I ||
            m(e) ||
            d.default.track(_.HAw.APP_ICON_UPDATED, {
                icon_id: e,
                user_premium_tier: o.default.getCurrentUser()?.premiumType,
                icon_premium_tier: e !== u.LW.DEFAULT ? f.PremiumTypes.TIER_2 : null,
            }));
}
function S() {
    let e = h.client.committedDesktop ?? h.client.desktop;
    return p(e) ? e : u.LW.DEFAULT;
}
function N() {
    if (!I) {
        let e = h.client.committedDesktop ?? h.client.desktop;
        return h.client.desktop !== e && void (h.client.desktop = e);
    }
    let e = S();
    h.client = { desktop: e, committedDesktop: e, coachmarkImpressions: 2 };
}
class C extends i.Ay.PersistedStore {
    static displayName = "AppIconPersistedStoreState";
    static persistKey = "AppIconPersistedStoreState";
    initialize(e) {
        (null != e && (h = e), this.waitFor(o.default), this.syncWith([o.default], T));
    }
    get isUpsellPreview() {
        return I;
    }
    getState() {
        return h;
    }
    getCurrentDesktopIcon() {
        return h?.client?.desktop;
    }
    getCommittedDesktopIcon() {
        return I ? S() : (h.client.committedDesktop ?? h.client.desktop);
    }
    canKeepDesktopIconWithoutPremium(e) {
        return p(e);
    }
}
let O = new C(r.h, {
    APP_ICON_UPDATED: function (e) {
        let { id: t } = e;
        if (null == t) return !1;
        (I || null != h.client.committedDesktop || (h.client.committedDesktop = h.client.desktop),
            g(t),
            ((!I && !m(t)) || t === u.LW.DEFAULT || p(t)) && (h.client.committedDesktop = t));
    },
    APP_ICON_EDITOR_RESET: N,
    APP_ICON_TRACK_IMPRESSION: function (e) {
        let { markAsDismissed: t } = e;
        ((h.client.coachmarkImpressions += 1),
            h.client.coachmarkImpressions >= 2 && (t?.(E.i.UNKNOWN), N(), (0, a.Jp)()));
    },
    LOGOUT: function () {
        if (!I) return !1;
        h.client = { desktop: u.LW.DEFAULT, coachmarkImpressions: 2 };
    },
});
n.d(t, {}, { A: O });
