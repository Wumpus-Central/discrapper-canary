"use strict";
let i, r;
n.d(t, { A: () => L });
var s = n(17928),
    a = n(554146),
    o = n(228366),
    l = n(826673),
    d = n(284016),
    _ = n(973654),
    u = n(363195),
    c = n(964404),
    E = n(253932),
    h = n(617617),
    m = n(95701),
    f = n(734057),
    g = n(287809),
    p = n(927578),
    A = n(427262),
    I = n(644235),
    T = n(385803),
    S = n(185928);
let N = !0,
    C = !1;
function R() {
    N && (i = void 0), (C = !1);
}
let O = () => {
        let e = !p.Ay.canUseClientThemes(g.default.getCurrentUser());
        if (e === N) return !1;
        N = e;
    },
    y = () => {
        if (!d.A.shouldSync("appearance")) return !1;
        let e = E.eh.getSetting().backgroundGradientPresetId;
        if (null == e) {
            if (null == i) return !1;
            i = void 0;
        } else {
            let t = T.ag[e];
            if (t === i) return !1;
            i = t;
        }
    },
    v = () => {
        if (!d.A.shouldSync("appearance")) return !1;
        let e = E.eh.getSetting().backgroundGradientPresetId;
        if ((c.Ay.useSystemTheme === S.Q_.ON && null != e && (0, _.k7)(S.Q_.OFF), null == e)) {
            null != i && (i = void 0);
            return;
        }
        let t = T.ag[e],
            n = i?.id === t?.id;
        null == t || n || (i = t);
    };
class D extends s.Ay.PersistedStore {
    static displayName = "ClientThemesBackgroundStore";
    static persistKey = "ClientThemesBackgroundStore";
    migrations = [(e) => ({ gradientPresetId: e?.gradientPreset?.id })];
    initialize(e) {
        null != e && (i = e?.gradientPresetId != null ? T.ag[e.gradientPresetId] : void 0),
            this.waitFor(f.A, d.A, u.A, c.Ay, h.A, g.default),
            this.syncWith([g.default], O),
            this.syncWith([d.A], y);
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
        return C;
    }
    get mobilePendingThemeIndex() {
        return r;
    }
}
let L = new D(o.h, {
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
    CLIENT_THEMES_EDITOR_CLOSE: R,
    CHANNEL_SELECT: (e) => {
        let { channelId: t, guildId: n } = e,
            i = g.default.getCurrentUser();
        if (null == t || null == n || (0, l.k8)(a.M.CLIENT_THEMES_COACHMARK) || !(0, A.G2)(i)) return;
        let r = f.A.getChannel(t);
        null != r && (0, m.ke)(r.type) && (C = !0);
    },
    LOGOUT: R,
    CACHE_LOADED: v,
    CONNECTION_OPEN: v,
    OVERLAY_INITIALIZE: v,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: v,
    UNSYNCED_USER_SETTINGS_UPDATE: v,
    USER_SETTINGS_PROTO_UPDATE: v,
});
