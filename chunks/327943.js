n.d(t, { Z: () => N });
var r,
    i = n(442837),
    o = n(570140),
    a = n(594174),
    s = n(626135),
    l = n(74538),
    c = n(997945),
    u = n(981631),
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
            desktop: c.aH.DEFAULT,
            coachmarkImpressions: 0
        }
    },
    m = !1,
    g = !0,
    E = () => {
        g = !l.ZP.canUsePremiumAppIcons(a.default.getCurrentUser());
    },
    b = (e) => {
        if (((h.client.desktop = e), !g)) {
            var t;
            s.default.track(u.rMx.APP_ICON_UPDATED, {
                icon_id: e,
                user_premium_tier: null == (t = a.default.getCurrentUser()) ? void 0 : t.premiumType,
                icon_premium_tier: e !== c.aH.DEFAULT ? f.p9.TIER_2 : null
            });
        }
    };
function y(e) {
    let { id: t } = e;
    null != t && b(t);
}
function v() {
    m = !0;
}
function O() {
    I(), (m = !1);
}
function I() {
    g &&
        (h.client = {
            desktop: c.aH.DEFAULT,
            coachmarkImpressions: p
        });
}
function S(e) {
    let { markAsDismissed: t } = e;
    (h.client.coachmarkImpressions += 1), h.client.coachmarkImpressions >= p && (null == t || t(d.L.UNKNOWN), O());
}
class T extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (h = e), this.waitFor(a.default), this.syncWith([a.default], E);
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
        return null == h || null == (e = h.client) ? void 0 : e.desktop;
    }
}
_(T, 'displayName', 'AppIconPersistedStoreState'), _(T, 'persistKey', 'AppIconPersistedStoreState');
let N = new T(o.Z, {
    APP_ICON_UPDATED: y,
    APP_ICON_EDITOR_OPEN: v,
    APP_ICON_EDITOR_CLOSE: O,
    APP_ICON_EDITOR_RESET: I,
    APP_ICON_TRACK_IMPRESSION: S,
    LOGOUT: O
});
