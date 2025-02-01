n.d(t, { Z: () => N });
var i,
    r = n(442837),
    a = n(570140),
    s = n(594174),
    o = n(626135),
    l = n(74538),
    u = n(997945),
    c = n(981631),
    d = n(921944),
    f = n(474936);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let p = 2,
    h = {
        client: {
            desktop: u.aH.DEFAULT,
            coachmarkImpressions: 0
        }
    },
    m = !1,
    g = !0,
    E = () => {
        g = !l.ZP.canUsePremiumAppIcons(s.default.getCurrentUser());
    },
    v = (e) => {
        if (((h.client.desktop = e), !g)) {
            var t;
            o.default.track(c.rMx.APP_ICON_UPDATED, {
                icon_id: e,
                user_premium_tier: null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : t.premiumType,
                icon_premium_tier: e !== u.aH.DEFAULT ? f.p9.TIER_2 : null
            });
        }
    };
function y(e) {
    let { id: t } = e;
    null != t && v(t);
}
function I() {
    m = !0;
}
function T() {
    b(), (m = !1);
}
function b() {
    g &&
        (h.client = {
            desktop: u.aH.DEFAULT,
            coachmarkImpressions: p
        });
}
function S(e) {
    let { markAsDismissed: t } = e;
    (h.client.coachmarkImpressions += 1), h.client.coachmarkImpressions >= p && (null == t || t(d.L.UNKNOWN), T());
}
class A extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        null != e && (h = e), this.waitFor(s.default), this.syncWith([s.default], E);
    }
    get isEditorOpen() {
        return m;
    }
    get isUpsellPreview() {
        return g;
    }
    getState() {
        return h;
    }
    getCurrentDesktopIcon() {
        var e;
        return null == h ? void 0 : null === (e = h.client) || void 0 === e ? void 0 : e.desktop;
    }
}
_(A, 'displayName', 'AppIconPersistedStoreState'), _(A, 'persistKey', 'AppIconPersistedStoreState');
let N = new A(a.Z, {
    APP_ICON_UPDATED: y,
    APP_ICON_EDITOR_OPEN: I,
    APP_ICON_EDITOR_CLOSE: T,
    APP_ICON_EDITOR_RESET: b,
    APP_ICON_TRACK_IMPRESSION: S,
    LOGOUT: T
});
