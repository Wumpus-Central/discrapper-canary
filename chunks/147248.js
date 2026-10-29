let i, r;
n.d(t, { A: () => V });
var a = n(17928),
    s = n(554146),
    l = n(73153),
    o = n(826673),
    d = n(88858),
    c = n(189916),
    u = n(836714),
    _ = n(284016),
    E = n(973654),
    A = n(363195),
    h = n(964404),
    f = n(253932),
    I = n(617617),
    p = n(185928);
function T() {
    return h.Ay.useSystemTheme === p.Q_.ON && A.A.isSameAsDeviceThemeEnabled();
}
var m = n(95701),
    g = n(734057),
    S = n(287809),
    N = n(24482),
    C = n(427262),
    O = n(644235),
    R = n(385803),
    L = n(652329);
let y = !0,
    D = !1,
    v = !1;
function b(e) {
    return !(0, c.oB)(e.id) || null == S.default.getCurrentUser() || !(0, d.$X)(L.vB.CLIENT_THEME);
}
function M(e) {
    if (null == e) return;
    let t = R.ag[e];
    return null != t && b(t) ? t : void 0;
}
function P() {
    let e = f.eh.getSetting().backgroundGradientPresetId;
    return (0, c.oB)(e) ? M(e) : void 0;
}
function U() {
    (y && (i = P()), (v = !1), (D = !1));
}
function w() {
    var e;
    let t = !1;
    if (null == i || b(i)) {
        if (null == i) {
            let e = P();
            null != e && ((i = e), (t = !0));
        }
    } else ((i = void 0), (t = !0));
    let n =
        ((e = S.default.getCurrentUser()),
        (0, c.j5)(e, L.vB.CLIENT_THEME) ? !u.zL.getFeatureValue(e) : !N.Ay.canUseClientThemes(e));
    if (n === y) return t;
    ((y = n), (v = !1));
}
function G() {
    let e = f.eh.getSetting().backgroundGradientPresetId;
    if (null == e) {
        if (null == i) return !1;
        i = void 0;
    } else {
        let t = M(e);
        if (t === i) return !1;
        i = t;
    }
}
function x() {
    return T();
}
function k() {
    return !0;
}
function F() {
    let e = f.eh.getSetting().backgroundGradientPresetId;
    if ((h.Ay.useSystemTheme !== p.Q_.ON || null == e || T() || (0, E.k7)(p.Q_.OFF), null == e)) {
        null != i && (i = void 0);
        return;
    }
    let t = R.ag[e];
    if (null != t) {
        if (!b(t)) {
            i = void 0;
            return;
        }
        i?.id !== t.id && (i = t);
    }
}
class B extends a.Ay.PersistedStore {
    static displayName = "ClientThemesBackgroundStore";
    static persistKey = "ClientThemesBackgroundStore";
    migrations = [(e) => ({ gradientPresetId: e?.gradientPreset?.id })];
    initialize(e) {
        ((v = !1),
            null != e && ((i = M(e.gradientPresetId)), (y = !0 !== e.canUseClientThemes)),
            this.waitFor(g.A, _.A, A.A, h.Ay, I.A, S.default),
            this.syncWith([S.default], w),
            this.syncWith([_.A], G));
    }
    getState() {
        return y
            ? !v && null != i && (0, c.oB)(i.id)
                ? { gradientPresetId: i.id }
                : {}
            : { gradientPresetId: i?.id, canUseClientThemes: !0 };
    }
    get gradientPreset() {
        if (T()) {
            let e = M(A.A.getSyncedClientTheme(A.A.systemTheme)?.backgroundGradientPresetId);
            return y ? (v ? i : null != e && (0, c.oB)(e.id) ? e : void 0) : e;
        }
        return null != i && b(i) ? i : void 0;
    }
    getLinearGradient() {
        return null == this.gradientPreset ? null : (0, O.FK)(this.gradientPreset);
    }
    get hasHiddenHexagonCampaignPreset() {
        let e = f.eh.getSetting().backgroundGradientPresetId;
        return (0, c.oB)(e) && null == this.gradientPreset;
    }
    get isPreview() {
        return y;
    }
    get isCoachmark() {
        return D;
    }
    get mobilePendingThemeIndex() {
        return r;
    }
}
let V = new B(l.h, {
    UPDATE_BACKGROUND_GRADIENT_PRESET: function (e) {
        let { presetId: t } = e;
        if (((v = y && null != t && !(0, c.oB)(t)), null == t)) {
            i = void 0;
            return;
        }
        i = R.ag[t];
    },
    UPDATE_MOBILE_PENDING_THEME_INDEX: function (e) {
        let { mobileThemesIndex: t } = e;
        if (null == t) {
            r = void 0;
            return;
        }
        r = t;
    },
    RESET_PREVIEW_CLIENT_THEME: function (e) {
        ((i = y ? P() : void 0), (v = !1));
    },
    CLIENT_THEMES_EDITOR_CLOSE: U,
    CHANNEL_SELECT: function (e) {
        let { channelId: t, guildId: n } = e,
            i = S.default.getCurrentUser();
        if (null == t || null == n || (0, o.k8)(s.M.CLIENT_THEMES_COACHMARK) || !(0, C.G2)(i)) return;
        let r = g.A.getChannel(t);
        null != r && (0, m.ke)(r.type) && (D = !0);
    },
    LOGOUT: U,
    CACHE_LOADED: F,
    CONNECTION_OPEN: F,
    OVERLAY_INITIALIZE: F,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: F,
    UNSYNCED_USER_SETTINGS_UPDATE: F,
    USER_SETTINGS_PROTO_UPDATE: F,
    SYSTEM_THEME_CHANGE: x,
    UPDATE_SYNCED_CLIENT_THEME: x,
    SET_SAME_AS_DEVICE_THEME_ENABLED: k,
    CLEAR_SYNCED_CLIENT_THEMES: k,
});
