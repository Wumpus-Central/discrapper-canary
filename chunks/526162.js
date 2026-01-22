n.d(t, {
    A: () => S,
});
var r,
    i = n(311907),
    a = n(73153),
    s = n(793943),
    o = n(287809),
    l = n(954571),
    c = n(927578),
    u = n(350972),
    d = n(652215),
    f = n(49999),
    p = n(788868);

function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let h = 2,
    m = {
        client: {
            desktop: u.LW.DEFAULT,
            coachmarkImpressions: 0,
        },
    },
    g = !0,
    E = () => {
        (g = !c.Ay.canUsePremiumAppIcons(o.default.getCurrentUser())) && b(u.LW.DEFAULT);
    },
    b = (e) => {
        if (((m.client.desktop = e), !g)) {
            var t;
            l.default.track(d.HAw.APP_ICON_UPDATED, {
                icon_id: e,
                user_premium_tier: null == (t = o.default.getCurrentUser()) ? void 0 : t.premiumType,
                icon_premium_tier: e !== u.LW.DEFAULT ? p.PremiumTypes.TIER_2 : null,
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
            desktop: u.LW.DEFAULT,
            coachmarkImpressions: h,
        });
}

function A(e) {
    let { markAsDismissed: t } = e;
    (m.client.coachmarkImpressions += 1),
        m.client.coachmarkImpressions >= h && (null == t || t(f.i.UNKNOWN), O(), (0, s.Jp)());
}
class v extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        null != e && (m = e), this.waitFor(o.default), this.syncWith([o.default], E);
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
_(v, "displayName", "AppIconPersistedStoreState"), _(v, "persistKey", "AppIconPersistedStoreState");
let S = new v(a.h, {
    APP_ICON_UPDATED: y,
    APP_ICON_EDITOR_RESET: O,
    APP_ICON_TRACK_IMPRESSION: A,
    LOGOUT: O,
});
