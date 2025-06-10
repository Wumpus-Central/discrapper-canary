let r, i;
n.d(t, { Z: () => j }), n(388685);
var a,
    o = n(442837),
    s = n(704215),
    l = n(570140),
    c = n(605236),
    u = n(238514),
    d = n(781391),
    f = n(210887),
    _ = n(740492),
    p = n(695346),
    h = n(581883),
    m = n(131704),
    g = n(592125),
    E = n(594174),
    b = n(74538),
    y = n(51144),
    O = n(47760),
    v = n(866419),
    I = n(469115),
    S = n(874893);
function T(e, t, n) {
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
let A = !0,
    N = !1,
    C = (e) => {
        let { presetId: t } = e;
        if (null == t) {
            r = void 0;
            return;
        }
        r = I.qt[t];
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
        r = void 0;
    },
    w = (e) => {
        let { channelId: t, guildId: n } = e,
            r = E.default.getCurrentUser();
        if (null == t || null == n || (0, c.un)(s.z.CLIENT_THEMES_COACHMARK) || !(0, y.Fc)(r)) return;
        let i = g.Z.getChannel(t);
        null != i && (0, m.zi)(i.type) && (N = !0);
    };
function D() {
    A && (r = void 0), (N = !1);
}
let L = () => {
        let e = !b.ZP.canUseClientThemes(E.default.getCurrentUser());
        if (e === A) return !1;
        A = e;
    },
    x = () => {
        if (!u.Z.shouldSync('appearance')) return !1;
        let e = p.L1.getSetting().backgroundGradientPresetId;
        if (null == e) {
            if (null == r) return !1;
            r = void 0;
        } else {
            let t = I.qt[e];
            if (t === r) return !1;
            r = t;
        }
    },
    k = () => {
        if (!u.Z.shouldSync('appearance') || (0, v.z)()) return !1;
        let e = p.L1.getSetting().backgroundGradientPresetId;
        if ((_.ZP.useSystemTheme === S.KW.ON && null != e && (0, d.hi)(S.KW.OFF), null == e)) {
            null != r && (r = void 0);
            return;
        }
        let t = I.qt[e],
            n = (null == r ? void 0 : r.id) === (null == t ? void 0 : t.id);
        null == t || n || (r = t);
    };
class M extends (a = o.ZP.PersistedStore) {
    initialize(e) {
        null != e && (r = (null == e ? void 0 : e.gradientPresetId) != null ? I.qt[e.gradientPresetId] : void 0), this.waitFor(E.default, f.Z, g.Z, u.Z, h.Z), this.syncWith([E.default], L), this.syncWith([u.Z], x), this.syncWith([h.Z], k);
    }
    getState() {
        return A ? {} : { gradientPresetId: null == r ? void 0 : r.id };
    }
    get gradientPreset() {
        return r;
    }
    getLinearGradient() {
        return null == this.gradientPreset ? null : (0, O.VK)(this.gradientPreset);
    }
    get isPreview() {
        return A;
    }
    get isCoachmark() {
        return N;
    }
    get mobilePendingThemeIndex() {
        return i;
    }
    constructor(...e) {
        super(...e),
            T(this, 'migrations', [
                (e) => {
                    var t;
                    return { gradientPresetId: null == e || null == (t = e.gradientPreset) ? void 0 : t.id };
                }
            ]);
    }
}
T(M, 'displayName', 'ClientThemesBackgroundStore'), T(M, 'persistKey', 'ClientThemesBackgroundStore');
let j = new M(l.Z, {
    UPDATE_BACKGROUND_GRADIENT_PRESET: C,
    UPDATE_MOBILE_PENDING_THEME_INDEX: R,
    RESET_PREVIEW_CLIENT_THEME: P,
    CLIENT_THEMES_EDITOR_CLOSE: D,
    CHANNEL_SELECT: w,
    LOGOUT: D
});
