let r, a;
n.d(t, { A: () => b });
var i = n(17928),
    o = n(554146),
    l = n(228366),
    s = n(826673),
    d = n(284016),
    u = n(973654),
    c = n(363195),
    _ = n(964404),
    p = n(253932),
    C = n(617617),
    E = n(95701),
    h = n(734057),
    m = n(287809),
    A = n(927578),
    T = n(427262),
    I = n(644235),
    g = n(385803),
    y = n(185928);
let S = !0,
    N = !1;
function f() {
    S && (r = void 0), (N = !1);
}
let R = () => {
        let e = !A.Ay.canUseClientThemes(m.default.getCurrentUser());
        if (e === S) return !1;
        S = e;
    },
    L = () => {
        if (!d.A.shouldSync("appearance")) return !1;
        let e = p.eh.getSetting().backgroundGradientPresetId;
        if (null == e) {
            if (null == r) return !1;
            r = void 0;
        } else {
            let t = g.ag[e];
            if (t === r) return !1;
            r = t;
        }
    },
    O = () => {
        if (!d.A.shouldSync("appearance")) return !1;
        let e = p.eh.getSetting().backgroundGradientPresetId;
        if ((_.Ay.useSystemTheme === y.Q_.ON && null != e && (0, u.k7)(y.Q_.OFF), null == e)) {
            null != r && (r = void 0);
            return;
        }
        let t = g.ag[e],
            n = r?.id === t?.id;
        null == t || n || (r = t);
    };
class P extends i.Ay.PersistedStore {
    static displayName = "ClientThemesBackgroundStore";
    static persistKey = "ClientThemesBackgroundStore";
    migrations = [(e) => ({ gradientPresetId: e?.gradientPreset?.id })];
    initialize(e) {
        null != e && (r = e?.gradientPresetId != null ? g.ag[e.gradientPresetId] : void 0),
            this.waitFor(h.A, d.A, c.A, _.Ay, C.A, m.default),
            this.syncWith([m.default], R),
            this.syncWith([d.A], L);
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
        return N;
    }
    get mobilePendingThemeIndex() {
        return a;
    }
}
let b = new P(l.h, {
    UPDATE_BACKGROUND_GRADIENT_PRESET: (e) => {
        let { presetId: t } = e;
        if (null == t) {
            r = void 0;
            return;
        }
        r = g.ag[t];
    },
    UPDATE_MOBILE_PENDING_THEME_INDEX: (e) => {
        let { mobileThemesIndex: t } = e;
        if (null == t) {
            a = void 0;
            return;
        }
        a = t;
    },
    RESET_PREVIEW_CLIENT_THEME: (e) => {
        r = void 0;
    },
    CLIENT_THEMES_EDITOR_CLOSE: f,
    CHANNEL_SELECT: (e) => {
        let { channelId: t, guildId: n } = e,
            r = m.default.getCurrentUser();
        if (null == t || null == n || (0, s.k8)(o.M.CLIENT_THEMES_COACHMARK) || !(0, T.G2)(r)) return;
        let a = h.A.getChannel(t);
        null != a && (0, E.ke)(a.type) && (N = !0);
    },
    LOGOUT: f,
    CACHE_LOADED: O,
    CONNECTION_OPEN: O,
    OVERLAY_INITIALIZE: O,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: O,
    UNSYNCED_USER_SETTINGS_UPDATE: O,
    USER_SETTINGS_PROTO_UPDATE: O,
});
