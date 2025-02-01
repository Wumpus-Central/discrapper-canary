let i, r;
n.d(t, { Z: () => F }), n(47120);
var a,
    s = n(442837),
    o = n(704215),
    l = n(570140),
    u = n(605236),
    c = n(238514),
    d = n(781391),
    f = n(210887),
    _ = n(740492),
    p = n(695346),
    h = n(581883),
    m = n(131704),
    g = n(592125),
    E = n(594174),
    v = n(74538),
    y = n(51144),
    I = n(47760),
    T = n(469115),
    b = n(874893);
function S(e, t, n) {
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
let A = !1,
    N = !0,
    C = !1,
    R = (e) => {
        let { presetId: t } = e;
        if (null == t) {
            i = void 0;
            return;
        }
        i = T.qt[t];
    },
    O = (e) => {
        let { mobileThemesIndex: t } = e;
        if (null == t) {
            r = void 0;
            return;
        }
        r = t;
    },
    D = (e) => {
        M();
    },
    x = (e) => {
        k();
    },
    L = (e) => {
        i = void 0;
    },
    P = (e) => {
        let { channelId: t, guildId: n } = e,
            i = E.default.getCurrentUser();
        if (null == t || null == n || (0, u.un)(o.z.CLIENT_THEMES_COACHMARK) || !(0, y.Fc)(i)) return;
        let r = g.Z.getChannel(t);
        null != r && (0, m.zi)(r.type) && ((C = !0), M());
    };
function w() {
    k();
}
function M() {
    A = !0;
}
function k() {
    N && (i = void 0), (C = !1), (A = !1);
}
let U = () => {
        let e = !v.ZP.canUseClientThemes(E.default.getCurrentUser());
        if (e === N) return !1;
        N = e;
    },
    G = () => {
        if (!c.Z.shouldSync('appearance')) return !1;
        let e = p.L1.getSetting().backgroundGradientPresetId;
        if (null == e) {
            if (null == i) return !1;
            i = void 0;
        } else {
            let t = T.qt[e];
            if (t === i) return !1;
            i = t;
        }
    },
    B = () => {
        if (!c.Z.shouldSync('appearance')) return !1;
        let e = p.L1.getSetting().backgroundGradientPresetId;
        if ((_.ZP.useSystemTheme === b.K.ON && null != e && (0, d.hi)(b.K.OFF), null == e)) {
            null != i && (i = void 0);
            return;
        }
        let t = T.qt[e],
            n = (null == i ? void 0 : i.id) === (null == t ? void 0 : t.id);
        null != t && !n && (i = t);
    };
class Z extends (a = s.ZP.PersistedStore) {
    initialize(e) {
        null != e && (i = (null == e ? void 0 : e.gradientPresetId) != null ? T.qt[e.gradientPresetId] : void 0), this.waitFor(E.default, f.Z, g.Z, c.Z, h.Z), this.syncWith([E.default], U), this.syncWith([c.Z], G), this.syncWith([h.Z], B);
    }
    getState() {
        return N ? {} : { gradientPresetId: null == i ? void 0 : i.id };
    }
    get gradientPreset() {
        return i;
    }
    getLinearGradient() {
        return null == this.gradientPreset ? null : (0, I.VK)(this.gradientPreset);
    }
    get isEditorOpen() {
        return A;
    }
    get isPreview() {
        return N;
    }
    get isCoachmark() {
        return C;
    }
    get mobilePendingThemeIndex() {
        return r;
    }
    constructor(...e) {
        super(...e),
            S(this, 'migrations', [
                (e) => {
                    var t;
                    return { gradientPresetId: null == e ? void 0 : null === (t = e.gradientPreset) || void 0 === t ? void 0 : t.id };
                }
            ]);
    }
}
S(Z, 'displayName', 'ClientThemesBackgroundStore'), S(Z, 'persistKey', 'ClientThemesBackgroundStore');
let F = new Z(l.Z, {
    UPDATE_BACKGROUND_GRADIENT_PRESET: R,
    UPDATE_MOBILE_PENDING_THEME_INDEX: O,
    CLIENT_THEMES_EDITOR_OPEN: D,
    CLIENT_THEMES_EDITOR_CLOSE: x,
    RESET_PREVIEW_CLIENT_THEME: L,
    CHANNEL_SELECT: P,
    LOGOUT: w
});
