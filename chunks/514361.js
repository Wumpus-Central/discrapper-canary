let i, a;
var o,
    s = r(47120);
var l = r(442837),
    u = r(704215),
    c = r(570140),
    d = r(605236),
    f = r(238514),
    p = r(781391),
    h = r(210887),
    _ = r(740492),
    m = r(695346),
    g = r(581883),
    E = r(131704),
    v = r(592125),
    y = r(594174),
    b = r(74538),
    I = r(51144),
    T = r(47760),
    S = r(469115),
    A = r(874893);
function C(e, n, r) {
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
let N = !1,
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
            i = y.default.getCurrentUser();
        if (null == n || null == r || (0, d.un)(u.z.CLIENT_THEMES_COACHMARK) || !(0, I.Fc)(i)) return;
        let a = v.Z.getChannel(n);
        null != a && (0, E.zi)(a.type) && ((O = !0), U());
    };
function k() {
    B();
}
function U() {
    N = !0;
}
function B() {
    R && (i = void 0), (O = !1), (N = !1);
}
let G = () => {
        let e = !b.ZP.canUseClientThemes(y.default.getCurrentUser());
        if (e === R) return !1;
        R = e;
    },
    Z = () => {
        if (!f.Z.shouldSync('appearance')) return !1;
        let e = m.L1.getSetting().backgroundGradientPresetId;
        if (null == e) {
            if (null == i) return !1;
            i = void 0;
        } else {
            let n = S.qt[e];
            if (n === i) return !1;
            i = n;
        }
    },
    F = () => {
        if (!f.Z.shouldSync('appearance')) return !1;
        let e = m.L1.getSetting().backgroundGradientPresetId;
        if ((_.ZP.useSystemTheme === A.K.ON && null != e && (0, p.hi)(A.K.OFF), null == e)) {
            null != i && (i = void 0);
            return;
        }
        let n = S.qt[e],
            r = (null == i ? void 0 : i.id) === (null == n ? void 0 : n.id);
        if (null != n && !r) i = n;
    };
class V extends (o = l.ZP.PersistedStore) {
    initialize(e) {
        null != e && (i = (null == e ? void 0 : e.gradientPresetId) != null ? S.qt[e.gradientPresetId] : void 0), this.waitFor(y.default, h.Z, v.Z, f.Z, g.Z), this.syncWith([y.default], G), this.syncWith([f.Z], Z), this.syncWith([g.Z], F);
    }
    getState() {
        return R ? {} : { gradientPresetId: null == i ? void 0 : i.id };
    }
    get gradientPreset() {
        return i;
    }
    getLinearGradient() {
        return null == this.gradientPreset ? null : (0, T.VK)(this.gradientPreset);
    }
    get isEditorOpen() {
        return N;
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
            C(this, 'migrations', [
                (e) => {
                    var n;
                    return { gradientPresetId: null == e ? void 0 : null === (n = e.gradientPreset) || void 0 === n ? void 0 : n.id };
                }
            ]);
    }
}
C(V, 'displayName', 'ClientThemesBackgroundStore'),
    C(V, 'persistKey', 'ClientThemesBackgroundStore'),
    (n.Z = new V(c.Z, {
        UPDATE_BACKGROUND_GRADIENT_PRESET: D,
        UPDATE_MOBILE_PENDING_THEME_INDEX: L,
        CLIENT_THEMES_EDITOR_OPEN: x,
        CLIENT_THEMES_EDITOR_CLOSE: w,
        RESET_PREVIEW_CLIENT_THEME: P,
        CHANNEL_SELECT: M,
        LOGOUT: k
    }));
