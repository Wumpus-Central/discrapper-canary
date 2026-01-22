let r, i;
n.d(t, {
    A: () => M,
}),
    n(896048);
var a,
    s = n(311907),
    o = n(554146),
    l = n(73153),
    c = n(826673),
    u = n(284016),
    d = n(973654),
    f = n(544028),
    p = n(964404),
    _ = n(253932),
    h = n(617617),
    m = n(95701),
    g = n(734057),
    E = n(287809),
    b = n(927578),
    y = n(427262),
    O = n(644235),
    A = n(385803),
    v = n(185928);

function S(e, t, n) {
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
let I = !0,
    T = !1,
    C = (e) => {
        let { presetId: t } = e;
        if (null == t) {
            r = void 0;
            return;
        }
        r = A.ag[t];
    },
    N = (e) => {
        let { mobileThemesIndex: t } = e;
        if (null == t) {
            i = void 0;
            return;
        }
        i = t;
    },
    R = (e) => {
        r = void 0;
    },
    w = (e) => {
        let { channelId: t, guildId: n } = e,
            r = E.default.getCurrentUser();
        if (null == t || null == n || (0, c.k8)(o.M.CLIENT_THEMES_COACHMARK) || !(0, y.G2)(r)) return;
        let i = g.A.getChannel(t);
        null != i && (0, m.ke)(i.type) && (T = !0);
    };

function P() {
    I && (r = void 0), (T = !1);
}
let D = () => {
        let e = !b.Ay.canUseClientThemes(E.default.getCurrentUser());
        if (e === I) return !1;
        I = e;
    },
    x = () => {
        if (!u.A.shouldSync("appearance")) return !1;
        let e = _.eh.getSetting().backgroundGradientPresetId;
        if (null == e) {
            if (null == r) return !1;
            r = void 0;
        } else {
            let t = A.ag[e];
            if (t === r) return !1;
            r = t;
        }
    },
    L = () => {
        if (!u.A.shouldSync("appearance")) return !1;
        let e = _.eh.getSetting().backgroundGradientPresetId;
        if ((p.Ay.useSystemTheme === v.Q_.ON && null != e && (0, d.k7)(v.Q_.OFF), null == e)) {
            null != r && (r = void 0);
            return;
        }
        let t = A.ag[e],
            n = (null == r ? void 0 : r.id) === (null == t ? void 0 : t.id);
        null == t || n || (r = t);
    };
class j extends (a = s.Ay.PersistedStore) {
    initialize(e) {
        null != e && (r = (null == e ? void 0 : e.gradientPresetId) != null ? A.ag[e.gradientPresetId] : void 0),
            this.waitFor(g.A, u.A, f.A, p.Ay, h.A, E.default),
            this.syncWith([E.default], D),
            this.syncWith([u.A], x);
    }
    getState() {
        return I
            ? {}
            : {
                  gradientPresetId: null == r ? void 0 : r.id,
              };
    }
    get gradientPreset() {
        return r;
    }
    getLinearGradient() {
        return null == this.gradientPreset ? null : (0, O.FK)(this.gradientPreset);
    }
    get isPreview() {
        return I;
    }
    get isCoachmark() {
        return T;
    }
    get mobilePendingThemeIndex() {
        return i;
    }
    constructor(...e) {
        super(...e),
            S(this, "migrations", [
                (e) => {
                    var t;
                    return {
                        gradientPresetId: null == e || null == (t = e.gradientPreset) ? void 0 : t.id,
                    };
                },
            ]);
    }
}
S(j, "displayName", "ClientThemesBackgroundStore"), S(j, "persistKey", "ClientThemesBackgroundStore");
let M = new j(l.h, {
    UPDATE_BACKGROUND_GRADIENT_PRESET: C,
    UPDATE_MOBILE_PENDING_THEME_INDEX: N,
    RESET_PREVIEW_CLIENT_THEME: R,
    CLIENT_THEMES_EDITOR_CLOSE: P,
    CHANNEL_SELECT: w,
    LOGOUT: P,
    CACHE_LOADED: L,
    CONNECTION_OPEN: L,
    OVERLAY_INITIALIZE: L,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: L,
    UNSYNCED_USER_SETTINGS_UPDATE: L,
    USER_SETTINGS_PROTO_UPDATE: L,
});
