"use strict";
let r, i;
n.d(t, { A: () => P });
var a = n(311907),
    s = n(554146),
    o = n(73153),
    l = n(826673),
    u = n(284016),
    c = n(973654),
    d = n(544028),
    _ = n(964404),
    f = n(253932),
    p = n(617617),
    h = n(95701),
    m = n(734057),
    g = n(287809),
    E = n(927578),
    A = n(427262),
    I = n(644235),
    T = n(385803),
    y = n(185928);
let S = !0,
    v = !1,
    C = (e) => {
        let { presetId: t } = e;
        if (null == t) {
            r = void 0;
            return;
        }
        r = T.ag[t];
    },
    b = (e) => {
        let { mobileThemesIndex: t } = e;
        if (null == t) {
            i = void 0;
            return;
        }
        i = t;
    },
    N = (e) => {
        r = void 0;
    },
    R = (e) => {
        let { channelId: t, guildId: n } = e,
            r = g.default.getCurrentUser();
        if (null == t || null == n || (0, l.k8)(s.M.CLIENT_THEMES_COACHMARK) || !(0, A.G2)(r)) return;
        let i = m.A.getChannel(t);
        null != i && (0, h.ke)(i.type) && (v = !0);
    };
function O() {
    S && (r = void 0), (v = !1);
}
let D = () => {
        let e = !E.Ay.canUseClientThemes(g.default.getCurrentUser());
        if (e === S) return !1;
        S = e;
    },
    L = () => {
        if (!u.A.shouldSync("appearance")) return !1;
        let e = f.eh.getSetting().backgroundGradientPresetId;
        if (null == e) {
            if (null == r) return !1;
            r = void 0;
        } else {
            let t = T.ag[e];
            if (t === r) return !1;
            r = t;
        }
    },
    w = () => {
        if (!u.A.shouldSync("appearance")) return !1;
        let e = f.eh.getSetting().backgroundGradientPresetId;
        if ((_.Ay.useSystemTheme === y.Q_.ON && null != e && (0, c.k7)(y.Q_.OFF), null == e)) {
            null != r && (r = void 0);
            return;
        }
        let t = T.ag[e],
            n = r?.id === t?.id;
        null == t || n || (r = t);
    };
class x extends a.Ay.PersistedStore {
    static displayName = "ClientThemesBackgroundStore";
    static persistKey = "ClientThemesBackgroundStore";
    migrations = [(e) => ({ gradientPresetId: e?.gradientPreset?.id })];
    initialize(e) {
        null != e && (r = e?.gradientPresetId != null ? T.ag[e.gradientPresetId] : void 0),
            this.waitFor(m.A, u.A, d.A, _.Ay, p.A, g.default),
            this.syncWith([g.default], D),
            this.syncWith([u.A], L);
    }
    getState() {
        return S ? {} : { gradientPresetId: r?.id };
    }
    get gradientPreset() {
        return r;
    }
    getLinearGradient() {
        return null == this.gradientPreset ? null : (0, I.FK)(this.gradientPreset);
    }
    get isPreview() {
        return S;
    }
    get isCoachmark() {
        return v;
    }
    get mobilePendingThemeIndex() {
        return i;
    }
}
let P = new x(o.h, {
    UPDATE_BACKGROUND_GRADIENT_PRESET: C,
    UPDATE_MOBILE_PENDING_THEME_INDEX: b,
    RESET_PREVIEW_CLIENT_THEME: N,
    CLIENT_THEMES_EDITOR_CLOSE: O,
    CHANNEL_SELECT: R,
    LOGOUT: O,
    CACHE_LOADED: w,
    CONNECTION_OPEN: w,
    OVERLAY_INITIALIZE: w,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: w,
    UNSYNCED_USER_SETTINGS_UPDATE: w,
    USER_SETTINGS_PROTO_UPDATE: w,
});
