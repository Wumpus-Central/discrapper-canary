let o, r;
n.d(t, { A: () => L });
var a = n(17928),
    i = n(554146),
    l = n(228366),
    u = n(826673),
    s = n(284016),
    _ = n(973654),
    d = n(363195),
    C = n(964404),
    E = n(253932),
    p = n(617617),
    h = n(95701),
    c = n(734057),
    A = n(287809),
    y = n(927578),
    I = n(427262),
    m = n(644235),
    T = n(385803),
    S = n(185928);
let R = !0,
    N = !1;
function g() {
    R && (o = void 0), (N = !1);
}
let O = () => {
        let e = !y.Ay.canUseClientThemes(A.default.getCurrentUser());
        if (e === R) return !1;
        R = e;
    },
    P = () => {
        if (!s.A.shouldSync("appearance")) return !1;
        let e = E.eh.getSetting().backgroundGradientPresetId;
        if (null == e) {
            if (null == o) return !1;
            o = void 0;
        } else {
            let t = T.ag[e];
            if (t === o) return !1;
            o = t;
        }
    },
    M = () => {
        if (!s.A.shouldSync("appearance")) return !1;
        let e = E.eh.getSetting().backgroundGradientPresetId;
        if ((C.Ay.useSystemTheme === S.Q_.ON && null != e && (0, _.k7)(S.Q_.OFF), null == e)) {
            null != o && (o = void 0);
            return;
        }
        let t = T.ag[e],
            n = o?.id === t?.id;
        null == t || n || (o = t);
    };
class f extends a.Ay.PersistedStore {
    static displayName = "ClientThemesBackgroundStore";
    static persistKey = "ClientThemesBackgroundStore";
    migrations = [(e) => ({ gradientPresetId: e?.gradientPreset?.id })];
    initialize(e) {
        null != e && (o = e?.gradientPresetId != null ? T.ag[e.gradientPresetId] : void 0),
            this.waitFor(c.A, s.A, d.A, C.Ay, p.A, A.default),
            this.syncWith([A.default], O),
            this.syncWith([s.A], P);
    }
    getState() {
        return R ? {} : { gradientPresetId: o?.id };
    }
    get gradientPreset() {
        return o;
    }
    getLinearGradient() {
        return null == this.gradientPreset ? null : (0, m.FK)(this.gradientPreset);
    }
    get isPreview() {
        return R;
    }
    get isCoachmark() {
        return N;
    }
    get mobilePendingThemeIndex() {
        return r;
    }
}
let L = new f(l.h, {
    UPDATE_BACKGROUND_GRADIENT_PRESET: (e) => {
        let { presetId: t } = e;
        if (null == t) {
            o = void 0;
            return;
        }
        o = T.ag[t];
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
        o = void 0;
    },
    CLIENT_THEMES_EDITOR_CLOSE: g,
    CHANNEL_SELECT: (e) => {
        let { channelId: t, guildId: n } = e,
            o = A.default.getCurrentUser();
        if (null == t || null == n || (0, u.k8)(i.M.CLIENT_THEMES_COACHMARK) || !(0, I.G2)(o)) return;
        let r = c.A.getChannel(t);
        null != r && (0, h.ke)(r.type) && (N = !0);
    },
    LOGOUT: g,
    CACHE_LOADED: M,
    CONNECTION_OPEN: M,
    OVERLAY_INITIALIZE: M,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: M,
    UNSYNCED_USER_SETTINGS_UPDATE: M,
    USER_SETTINGS_PROTO_UPDATE: M,
});
