let r, i;
n.d(t, { Z: () => Z }), n(47120);
var o,
    a = n(442837),
    s = n(704215),
    l = n(570140),
    c = n(605236),
    u = n(238514),
    d = n(781391),
    f = n(210887),
    p = n(740492),
    _ = n(695346),
    h = n(581883),
    m = n(131704),
    g = n(592125),
    E = n(594174),
    v = n(74538),
    b = n(51144),
    y = n(47760),
    O = n(469115),
    S = n(874893);
function I(e, t, n) {
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
let T = !1,
    N = !0,
    A = !1,
    C = (e) => {
        let { presetId: t } = e;
        if (null == t) {
            r = void 0;
            return;
        }
        r = O.qt[t];
    },
    R = (e) => {
        let { mobileThemesIndex: t } = e;
        if (null == t) {
            i = void 0;
            return;
        }
        i = t;
    },
    P = (e) => {
        M();
    },
    w = (e) => {
        k();
    },
    D = (e) => {
        r = void 0;
    },
    x = (e) => {
        let { channelId: t, guildId: n } = e,
            r = E.default.getCurrentUser();
        if (null == t || null == n || (0, c.un)(s.z.CLIENT_THEMES_COACHMARK) || !(0, b.Fc)(r)) return;
        let i = g.Z.getChannel(t);
        null != i && (0, m.zi)(i.type) && (A = !0);
    };
function L() {
    k();
}
function M() {
    T = !0;
}
function k() {
    N && (r = void 0), (A = !1), (T = !1);
}
let j = () => {
        let e = !v.ZP.canUseClientThemes(E.default.getCurrentUser());
        if (e === N) return !1;
        N = e;
    },
    U = () => {
        if (!u.Z.shouldSync('appearance')) return !1;
        let e = _.L1.getSetting().backgroundGradientPresetId;
        if (null == e) {
            if (null == r) return !1;
            r = void 0;
        } else {
            let t = O.qt[e];
            if (t === r) return !1;
            r = t;
        }
    },
    G = () => {
        if (!u.Z.shouldSync('appearance')) return !1;
        let e = _.L1.getSetting().backgroundGradientPresetId;
        if ((p.ZP.useSystemTheme === S.K.ON && null != e && (0, d.hi)(S.K.OFF), null == e)) {
            null != r && (r = void 0);
            return;
        }
        let t = O.qt[e],
            n = (null == r ? void 0 : r.id) === (null == t ? void 0 : t.id);
        null != t && !n && (r = t);
    };
class B extends (o = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (r = (null == e ? void 0 : e.gradientPresetId) != null ? O.qt[e.gradientPresetId] : void 0), this.waitFor(E.default, f.Z, g.Z, u.Z, h.Z), this.syncWith([E.default], j), this.syncWith([u.Z], U), this.syncWith([h.Z], G);
    }
    getState() {
        return N ? {} : { gradientPresetId: null == r ? void 0 : r.id };
    }
    get gradientPreset() {
        return r;
    }
    getLinearGradient() {
        return null == this.gradientPreset ? null : (0, y.VK)(this.gradientPreset);
    }
    get isEditorOpen() {
        return T;
    }
    get isPreview() {
        return N;
    }
    get isCoachmark() {
        return A;
    }
    get mobilePendingThemeIndex() {
        return i;
    }
    constructor(...e) {
        super(...e),
            I(this, 'migrations', [
                (e) => {
                    var t;
                    return { gradientPresetId: null == e ? void 0 : null === (t = e.gradientPreset) || void 0 === t ? void 0 : t.id };
                }
            ]);
    }
}
I(B, 'displayName', 'ClientThemesBackgroundStore'), I(B, 'persistKey', 'ClientThemesBackgroundStore');
let Z = new B(l.Z, {
    UPDATE_BACKGROUND_GRADIENT_PRESET: C,
    UPDATE_MOBILE_PENDING_THEME_INDEX: R,
    CLIENT_THEMES_EDITOR_OPEN: P,
    CLIENT_THEMES_EDITOR_CLOSE: w,
    RESET_PREVIEW_CLIENT_THEME: D,
    CHANNEL_SELECT: x,
    LOGOUT: L
});
