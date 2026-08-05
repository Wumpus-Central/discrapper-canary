"use strict";
let i, r;
n.d(t, { A: () => G });
var a = n(17928),
    s = n(554146),
    l = n(228366),
    o = n(826673),
    d = n(458024),
    c = n(284016),
    u = n(973654),
    _ = n(363195),
    E = n(742023),
    A = n(885386),
    h = n(617617),
    I = n(185928);
function f(e) {
    return E.Ay.useSystemTheme === I.Q_.ON && _.A.isSameAsDeviceThemeEnabled() && e();
}
var p = n(95701),
    T = n(734057),
    m = n(287809),
    g = n(158045),
    S = n(427262),
    N = n(644235),
    C = n(385803);
let O = !0,
    R = !1,
    L = !1;
function D() {
    return (0, d.$Y)("ClientThemesBackgroundStore");
}
function y() {
    O && (i = void 0), (L = !1), (R = !1);
}
function v() {
    let e = !g.Ay.canUseClientThemes(m.default.getCurrentUser());
    if (e === O) return !1;
    (O = e), (L = !1);
}
function b() {
    if (!c.A.shouldSync("appearance")) return !1;
    let e = A.eh.getSetting().backgroundGradientPresetId;
    if (null == e) {
        if (null == i) return !1;
        i = void 0;
    } else {
        let t = C.ag[e];
        if (t === i) return !1;
        i = t;
    }
}
function M() {
    return f(D);
}
function P() {
    return D();
}
function U() {
    if (!c.A.shouldSync("appearance")) return !1;
    let e = A.eh.getSetting().backgroundGradientPresetId;
    if ((E.Ay.useSystemTheme !== I.Q_.ON || null == e || f(D) || (0, u.k7)(I.Q_.OFF), null == e)) {
        null != i && (i = void 0);
        return;
    }
    let t = C.ag[e],
        n = i?.id === t?.id;
    null == t || n || (i = t);
}
class w extends a.Ay.PersistedStore {
    static displayName = "ClientThemesBackgroundStore";
    static persistKey = "ClientThemesBackgroundStore";
    migrations = [(e) => ({ gradientPresetId: e?.gradientPreset?.id })];
    initialize(e) {
        (L = !1),
            null != e &&
                ((i = null != e.gradientPresetId ? C.ag[e.gradientPresetId] : void 0),
                (O = !0 !== e.canUseClientThemes)),
            this.waitFor(T.A, c.A, _.A, E.Ay, h.A, m.default),
            this.syncWith([m.default], v),
            this.syncWith([c.A], b);
    }
    getState() {
        return O ? {} : { gradientPresetId: i?.id, canUseClientThemes: !0 };
    }
    get gradientPreset() {
        if (f(D)) {
            if (O) return L ? i : void 0;
            let e = _.A.getSyncedClientTheme(_.A.systemTheme)?.backgroundGradientPresetId;
            return null != e ? C.ag[e] : void 0;
        }
        return i;
    }
    getLinearGradient() {
        return null == this.gradientPreset ? null : (0, N.FK)(this.gradientPreset);
    }
    get isPreview() {
        return O;
    }
    get isCoachmark() {
        return R;
    }
    get mobilePendingThemeIndex() {
        return r;
    }
}
let G = new w(l.h, {
    UPDATE_BACKGROUND_GRADIENT_PRESET: function (e) {
        let { presetId: t } = e;
        if (((L = O), null == t)) {
            i = void 0;
            return;
        }
        i = C.ag[t];
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
        (i = void 0), (L = !1);
    },
    CLIENT_THEMES_EDITOR_CLOSE: y,
    CHANNEL_SELECT: function (e) {
        let { channelId: t, guildId: n } = e,
            i = m.default.getCurrentUser();
        if (null == t || null == n || (0, o.k8)(s.M.CLIENT_THEMES_COACHMARK) || !(0, S.G2)(i)) return;
        let r = T.A.getChannel(t);
        null != r && (0, p.ke)(r.type) && (R = !0);
    },
    LOGOUT: y,
    CACHE_LOADED: U,
    CONNECTION_OPEN: U,
    OVERLAY_INITIALIZE: U,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: U,
    UNSYNCED_USER_SETTINGS_UPDATE: U,
    USER_SETTINGS_PROTO_UPDATE: U,
    SYSTEM_THEME_CHANGE: M,
    UPDATE_SYNCED_CLIENT_THEME: M,
    SET_SAME_AS_DEVICE_THEME_ENABLED: P,
    CLEAR_SYNCED_CLIENT_THEMES: P,
});
