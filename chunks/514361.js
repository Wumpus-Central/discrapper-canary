let r, i;
n.d(t, { Z: () => k }), n(388685);
var a,
    o = n(442837),
    s = n(704215),
    l = n(570140),
    c = n(266454),
    u = n(238514),
    d = n(781391),
    f = n(210887),
    p = n(740492),
    _ = n(695346),
    m = n(581883),
    h = n(131704),
    g = n(592125),
    E = n(594174),
    b = n(74538),
    y = n(51144),
    O = n(47760),
    v = n(866419),
    S = n(469115),
    I = n(874893);
function T(e, t, n) {
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
let C = !0,
    A = !1,
    N = (e) => {
        let { presetId: t } = e;
        if (null == t) {
            r = void 0;
            return;
        }
        r = S.qt[t];
    },
    P = (e) => {
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
    D = (e) => {
        let { channelId: t, guildId: n } = e,
            r = E.default.getCurrentUser();
        if (null == t || null == n || (0, c.zu)(s.z.CLIENT_THEMES_COACHMARK) || !(0, y.Fc)(r)) return;
        let i = g.Z.getChannel(t);
        null != i && (0, h.zi)(i.type) && (A = !0);
    };
function w() {
    C && (r = void 0), (A = !1);
}
let x = () => {
        let e = !b.ZP.canUseClientThemes(E.default.getCurrentUser());
        if (e === C) return !1;
        C = e;
    },
    L = () => {
        if (!u.Z.shouldSync("appearance")) return !1;
        let e = _.L1.getSetting().backgroundGradientPresetId;
        if (null == e) {
            if (null == r) return !1;
            r = void 0;
        } else {
            let t = S.qt[e];
            if (t === r) return !1;
            r = t;
        }
    },
    j = () => {
        if (!u.Z.shouldSync("appearance") || (0, v.zu)()) return !1;
        let e = _.L1.getSetting().backgroundGradientPresetId;
        if ((p.ZP.useSystemTheme === I.KW.ON && null != e && (0, d.hi)(I.KW.OFF), null == e)) {
            null != r && (r = void 0);
            return;
        }
        let t = S.qt[e],
            n = (null == r ? void 0 : r.id) === (null == t ? void 0 : t.id);
        null == t || n || (r = t);
    };
class M extends (a = o.ZP.PersistedStore) {
    initialize(e) {
        null != e && (r = (null == e ? void 0 : e.gradientPresetId) != null ? S.qt[e.gradientPresetId] : void 0),
            this.waitFor(g.Z, u.Z, f.Z, p.ZP, m.Z, E.default),
            this.syncWith([E.default], x),
            this.syncWith([u.Z], L);
    }
    getState() {
        return C ? {} : { gradientPresetId: null == r ? void 0 : r.id };
    }
    get gradientPreset() {
        return r;
    }
    getLinearGradient() {
        return null == this.gradientPreset ? null : (0, O.VK)(this.gradientPreset);
    }
    get isPreview() {
        return C;
    }
    get isCoachmark() {
        return A;
    }
    get mobilePendingThemeIndex() {
        return i;
    }
    constructor(...e) {
        super(...e),
            T(this, "migrations", [
                (e) => {
                    var t;
                    return { gradientPresetId: null == e || null == (t = e.gradientPreset) ? void 0 : t.id };
                },
            ]);
    }
}
T(M, "displayName", "ClientThemesBackgroundStore"), T(M, "persistKey", "ClientThemesBackgroundStore");
let k = new M(l.Z, {
    UPDATE_BACKGROUND_GRADIENT_PRESET: N,
    UPDATE_MOBILE_PENDING_THEME_INDEX: P,
    RESET_PREVIEW_CLIENT_THEME: R,
    CLIENT_THEMES_EDITOR_CLOSE: w,
    CHANNEL_SELECT: D,
    LOGOUT: w,
    CACHE_LOADED: j,
    CONNECTION_OPEN: j,
    OVERLAY_INITIALIZE: j,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: j,
    UNSYNCED_USER_SETTINGS_UPDATE: j,
    USER_SETTINGS_PROTO_UPDATE: j,
});
