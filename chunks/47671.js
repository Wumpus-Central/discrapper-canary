"use strict";
let i, r;
n.d(t, { A: () => D });
var s = n(17928),
    a = n(554146),
    o = n(228366),
    l = n(826673),
    u = n(284016),
    c = n(973654),
    d = n(363195),
    _ = n(964404),
    f = n(885386),
    h = n(617617),
    p = n(95701),
    E = n(734057),
    m = n(287809),
    g = n(927578),
    A = n(427262),
    I = n(644235),
    T = n(385803),
    S = n(185928);
let N = !0,
    y = !1;
function C() {
    N && (i = void 0), (y = !1);
}
let v = () => {
        let e = !g.Ay.canUseClientThemes(m.default.getCurrentUser());
        if (e === N) return !1;
        N = e;
    },
    O = () => {
        if (!u.A.shouldSync("appearance")) return !1;
        let e = f.eh.getSetting().backgroundGradientPresetId;
        if (null == e) {
            if (null == i) return !1;
            i = void 0;
        } else {
            let t = T.ag[e];
            if (t === i) return !1;
            i = t;
        }
    },
    R = () => {
        if (!u.A.shouldSync("appearance")) return !1;
        let e = f.eh.getSetting().backgroundGradientPresetId;
        if ((_.Ay.useSystemTheme === S.Q_.ON && null != e && (0, c.k7)(S.Q_.OFF), null == e)) {
            null != i && (i = void 0);
            return;
        }
        let t = T.ag[e],
            n = i?.id === t?.id;
        null == t || n || (i = t);
    };
class b extends s.Ay.PersistedStore {
    static displayName = "ClientThemesBackgroundStore";
    static persistKey = "ClientThemesBackgroundStore";
    migrations = [(e) => ({ gradientPresetId: e?.gradientPreset?.id })];
    initialize(e) {
        null != e && (i = e?.gradientPresetId != null ? T.ag[e.gradientPresetId] : void 0),
            this.waitFor(E.A, u.A, d.A, _.Ay, h.A, m.default),
            this.syncWith([m.default], v),
            this.syncWith([u.A], O);
    }
    getState() {
        return N ? {} : { gradientPresetId: i?.id };
    }
    get gradientPreset() {
        return i;
    }
    getLinearGradient() {
        return null == this.gradientPreset ? null : (0, I.FK)(this.gradientPreset);
    }
    get isPreview() {
        return N;
    }
    get isCoachmark() {
        return y;
    }
    get mobilePendingThemeIndex() {
        return r;
    }
}
let D = new b(o.h, {
    UPDATE_BACKGROUND_GRADIENT_PRESET: (e) => {
        let { presetId: t } = e;
        if (null == t) {
            i = void 0;
            return;
        }
        i = T.ag[t];
    },
    UPDATE_MOBILE_PENDING_THEME_INDEX: (e) => {
        let { mobileThemesIndex: t } = e;
        if (null == t) {
            r = void 0;
            return;
        }
        r = t;
    },
    RESET_PREVIEW_CLIENT_THEME: (e) => {
        i = void 0;
    },
    CLIENT_THEMES_EDITOR_CLOSE: C,
    CHANNEL_SELECT: (e) => {
        let { channelId: t, guildId: n } = e,
            i = m.default.getCurrentUser();
        if (null == t || null == n || (0, l.k8)(a.M.CLIENT_THEMES_COACHMARK) || !(0, A.G2)(i)) return;
        let r = E.A.getChannel(t);
        null != r && (0, p.ke)(r.type) && (y = !0);
    },
    LOGOUT: C,
    CACHE_LOADED: R,
    CONNECTION_OPEN: R,
    OVERLAY_INITIALIZE: R,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: R,
    UNSYNCED_USER_SETTINGS_UPDATE: R,
    USER_SETTINGS_PROTO_UPDATE: R,
});
