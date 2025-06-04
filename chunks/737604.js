n.d(t, { Z: () => S });
var r,
    i = n(442837),
    a = n(570140),
    o = n(550385),
    s = n(594174),
    l = n(626135),
    c = n(74538),
    u = n(997945),
    d = n(981631),
    f = n(921944),
    _ = n(474936);
function p(e, t, n) {
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
let h = 2,
    m = {
        client: {
            desktop: u.aH.DEFAULT,
            coachmarkImpressions: 0
        }
    },
    g = !0,
    E = () => {
        g = !c.ZP.canUsePremiumAppIcons(s.default.getCurrentUser());
    },
    b = (e) => {
        if (((m.client.desktop = e), !g)) {
            var t;
            l.default.track(d.rMx.APP_ICON_UPDATED, {
                icon_id: e,
                user_premium_tier: null == (t = s.default.getCurrentUser()) ? void 0 : t.premiumType,
                icon_premium_tier: e !== u.aH.DEFAULT ? _.p9.TIER_2 : null
            });
        }
    };
function y(e) {
    let { id: t } = e;
    null != t && b(t);
}
function O() {
    g &&
        (m.client = {
            desktop: u.aH.DEFAULT,
            coachmarkImpressions: h
        });
}
function v(e) {
    let { markAsDismissed: t } = e;
    (m.client.coachmarkImpressions += 1), m.client.coachmarkImpressions >= h && (null == t || t(f.L.UNKNOWN), O(), (0, o.Ll)());
}
class I extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (m = e), this.waitFor(s.default), this.syncWith([s.default], E);
    }
    get isUpsellPreview() {
        return g;
    }
    getState() {
        return m;
    }
    getCurrentDesktopIcon() {
        var e;
        return null == m || null == (e = m.client) ? void 0 : e.desktop;
    }
}
p(I, 'displayName', 'AppIconPersistedStoreState'), p(I, 'persistKey', 'AppIconPersistedStoreState');
let S = new I(a.Z, {
    APP_ICON_UPDATED: y,
    APP_ICON_EDITOR_RESET: O,
    APP_ICON_TRACK_IMPRESSION: v,
    LOGOUT: O
});
