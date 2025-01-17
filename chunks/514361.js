let i, a;
var s,
    o = r(47120);
var l = r(442837),
    u = r(704215),
    c = r(570140),
    d = r(605236),
    f = r(238514),
    _ = r(781391),
    h = r(210887),
    p = r(740492),
    m = r(695346),
    g = r(581883),
    E = r(131704),
    v = r(592125),
    I = r(594174),
    T = r(74538),
    b = r(51144),
    y = r(47760),
    S = r(469115),
    A = r(874893);
function N(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let C = !1,
    R = !0,
    O = !1,
    D = (e) => {
        let { presetId: n } = e;
        if (null == n) {
            i = void 0;
            return;
        }
        i = S.qt[n];
    },
    L = (e) => {
        let { mobileThemesIndex: n } = e;
        if (null == n) {
            a = void 0;
            return;
        }
        a = n;
    },
    x = (e) => {
        U();
    },
    w = (e) => {
        B();
    },
    P = (e) => {
        i = void 0;
    },
    M = (e) => {
        let { channelId: n, guildId: r } = e,
            i = I.default.getCurrentUser();
        if (null == n || null == r || (0, d.un)(u.z.CLIENT_THEMES_COACHMARK) || !(0, b.Fc)(i)) return;
        let a = v.Z.getChannel(n);
        null != a && (0, E.zi)(a.type) && ((O = !0), U());
    };
function k() {
    B();
}
function U() {
    C = !0;
}
function B() {
    R && (i = void 0), (O = !1), (C = !1);
}
let G = () => {
        R = !T.ZP.canUseClientThemes(I.default.getCurrentUser());
    },
    Z = () => {
        let e = m.L1.getSetting().backgroundGradientPresetId;
        if (f.Z.shouldSync('appearance')) {
            if (null == e) {
                null != i && (i = void 0);
                return;
            }
            i = S.qt[e];
        }
    },
    F = () => {
        if (!f.Z.shouldSync('appearance')) return;
        let e = m.L1.getSetting().backgroundGradientPresetId;
        if ((p.ZP.useSystemTheme === A.K.ON && null != e && (0, _.hi)(A.K.OFF), null == e)) {
            null != i && (i = void 0);
            return;
        }
        let n = S.qt[e],
            r = (null == i ? void 0 : i.id) === (null == n ? void 0 : n.id);
        if (null != n && !r) i = n;
    };
class V extends (s = l.ZP.PersistedStore) {
    initialize(e) {
        null != e && (i = (null == e ? void 0 : e.gradientPresetId) != null ? S.qt[e.gradientPresetId] : void 0), this.waitFor(I.default, h.Z, v.Z, f.Z, g.Z), this.syncWith([I.default], G), this.syncWith([f.Z], Z), this.syncWith([g.Z], F);
    }
    getState() {
        return R ? {} : { gradientPresetId: null == i ? void 0 : i.id };
    }
    get gradientPreset() {
        return i;
    }
    getLinearGradient() {
        return null == this.gradientPreset ? null : (0, y.VK)(this.gradientPreset);
    }
    get isEditorOpen() {
        return C;
    }
    get isPreview() {
        return R;
    }
    get isCoachmark() {
        return O;
    }
    get mobilePendingThemeIndex() {
        return a;
    }
    constructor(...e) {
        super(...e),
            N(this, 'migrations', [
                (e) => {
                    var n;
                    return { gradientPresetId: null == e ? void 0 : null === (n = e.gradientPreset) || void 0 === n ? void 0 : n.id };
                }
            ]);
    }
}
N(V, 'displayName', 'ClientThemesBackgroundStore'),
    N(V, 'persistKey', 'ClientThemesBackgroundStore'),
    (n.Z = new V(c.Z, {
        UPDATE_BACKGROUND_GRADIENT_PRESET: D,
        UPDATE_MOBILE_PENDING_THEME_INDEX: L,
        CLIENT_THEMES_EDITOR_OPEN: x,
        CLIENT_THEMES_EDITOR_CLOSE: w,
        RESET_PREVIEW_CLIENT_THEME: P,
        CHANNEL_SELECT: M,
        LOGOUT: k
    }));
