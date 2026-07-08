"use strict";
let i, r;
n.d(t, { A: () => U });
var a = n(17928),
    s = n(554146),
    l = n(228366),
    o = n(826673);
n(458024);
var d = n(284016),
    c = n(973654),
    u = n(363195),
    _ = n(742023),
    E = n(885386),
    A = n(617617),
    h = n(185928);
function I(e) {
    return _.Ay.useSystemTheme === h.Q_.ON && u.A.isSameAsDeviceThemeEnabled() && e();
}
var f = n(95701),
    p = n(734057),
    T = n(287809),
    m = n(428262),
    g = n(427262),
    S = n(644235),
    N = n(385803);
let C = !0,
    R = !1;
function O() {
    return !1;
}
function L() {
    C && (i = void 0), (R = !1);
}
function D() {
    let e = !m.Ay.canUseClientThemes(T.default.getCurrentUser());
    if (e === C) return !1;
    C = e;
}
function y() {
    if (!d.A.shouldSync("appearance")) return !1;
    let e = E.eh.getSetting().backgroundGradientPresetId;
    if (null == e) {
        if (null == i) return !1;
        i = void 0;
    } else {
        let t = N.ag[e];
        if (t === i) return !1;
        i = t;
    }
}
function v() {
    return I(O);
}
function b() {
    return O();
}
function M() {
    if (!d.A.shouldSync("appearance")) return !1;
    let e = E.eh.getSetting().backgroundGradientPresetId;
    if (
        (_.Ay.useSystemTheme !== h.Q_.ON || null == e || u.A.isSameAsDeviceThemeEnabled() || (0, c.k7)(h.Q_.OFF),
        null == e)
    ) {
        null != i && (i = void 0);
        return;
    }
    let t = N.ag[e],
        n = i?.id === t?.id;
    null == t || n || (i = t);
}
class P extends a.Ay.PersistedStore {
    static displayName = "ClientThemesBackgroundStore";
    static persistKey = "ClientThemesBackgroundStore";
    migrations = [(e) => ({ gradientPresetId: e?.gradientPreset?.id })];
    initialize(e) {
        null != e && (i = e?.gradientPresetId != null ? N.ag[e.gradientPresetId] : void 0),
            this.waitFor(p.A, d.A, u.A, _.Ay, A.A, T.default),
            this.syncWith([T.default], D),
            this.syncWith([d.A], y);
    }
    getState() {
        return C ? {} : { gradientPresetId: i?.id };
    }
    get gradientPreset() {
        if (I(O)) {
            let e = u.A.getSyncedClientTheme(u.A.systemTheme)?.backgroundGradientPresetId;
            return null != e ? N.ag[e] : void 0;
        }
        return i;
    }
    getLinearGradient() {
        return null == this.gradientPreset ? null : (0, S.FK)(this.gradientPreset);
    }
    get isPreview() {
        return C;
    }
    get isCoachmark() {
        return R;
    }
    get mobilePendingThemeIndex() {
        return r;
    }
}
let U = new P(l.h, {
    UPDATE_BACKGROUND_GRADIENT_PRESET: function (e) {
        let { presetId: t } = e;
        if (null == t) {
            i = void 0;
            return;
        }
        i = N.ag[t];
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
        i = void 0;
    },
    CLIENT_THEMES_EDITOR_CLOSE: L,
    CHANNEL_SELECT: function (e) {
        let { channelId: t, guildId: n } = e,
            i = T.default.getCurrentUser();
        if (null == t || null == n || (0, o.k8)(s.M.CLIENT_THEMES_COACHMARK) || !(0, g.G2)(i)) return;
        let r = p.A.getChannel(t);
        null != r && (0, f.ke)(r.type) && (R = !0);
    },
    LOGOUT: L,
    CACHE_LOADED: M,
    CONNECTION_OPEN: M,
    OVERLAY_INITIALIZE: M,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: M,
    UNSYNCED_USER_SETTINGS_UPDATE: M,
    USER_SETTINGS_PROTO_UPDATE: M,
    SYSTEM_THEME_CHANGE: v,
    UPDATE_SYNCED_CLIENT_THEME: v,
    SET_SAME_AS_DEVICE_THEME_ENABLED: b,
    CLEAR_SYNCED_CLIENT_THEMES: b,
});
