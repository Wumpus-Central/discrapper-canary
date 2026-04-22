"use strict";
let r, i;
n.d(t, { A: () => D });
var s = n(311907),
    a = n(554146),
    o = n(73153),
    l = n(826673),
    u = n(284016),
    d = n(973654),
    c = n(544028),
    _ = n(964404),
    f = n(253932),
    E = n(617617),
    h = n(95701),
    p = n(734057),
    m = n(287809),
    g = n(927578),
    A = n(427262),
    I = n(644235),
    T = n(385803),
    S = n(185928);
let y = !0,
    N = !1;
function O() {
    y && (r = void 0), (N = !1);
}
let R = () => {
        let e = !g.Ay.canUseClientThemes(m.default.getCurrentUser());
        if (e === y) return !1;
        y = e;
    },
    v = () => {
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
    C = () => {
        if (!u.A.shouldSync("appearance")) return !1;
        let e = f.eh.getSetting().backgroundGradientPresetId;
        if ((_.Ay.useSystemTheme === S.Q_.ON && null != e && (0, d.k7)(S.Q_.OFF), null == e)) {
            null != r && (r = void 0);
            return;
        }
        let t = T.ag[e],
            n = r?.id === t?.id;
        null == t || n || (r = t);
    };
class b extends s.Ay.PersistedStore {
    static displayName = "ClientThemesBackgroundStore";
    static persistKey = "ClientThemesBackgroundStore";
    migrations = [(e) => ({ gradientPresetId: e?.gradientPreset?.id })];
    initialize(e) {
        null != e && (r = e?.gradientPresetId != null ? T.ag[e.gradientPresetId] : void 0),
            this.waitFor(p.A, u.A, c.A, _.Ay, E.A, m.default),
            this.syncWith([m.default], R),
            this.syncWith([u.A], v);
    }
    getState() {
        return y ? {} : { gradientPresetId: r?.id };
    }
    get gradientPreset() {
        return r;
    }
    getLinearGradient() {
        return null == this.gradientPreset ? null : (0, I.FK)(this.gradientPreset);
    }
    get isPreview() {
        return y;
    }
    get isCoachmark() {
        return N;
    }
    get mobilePendingThemeIndex() {
        return i;
    }
}
let D = new b(o.h, {
    UPDATE_BACKGROUND_GRADIENT_PRESET: (e) => {
        let { presetId: t } = e;
        if (null == t) {
            r = void 0;
            return;
        }
        r = T.ag[t];
    },
    UPDATE_MOBILE_PENDING_THEME_INDEX: (e) => {
        let { mobileThemesIndex: t } = e;
        if (null == t) {
            i = void 0;
            return;
        }
        i = t;
    },
    RESET_PREVIEW_CLIENT_THEME: (e) => {
        r = void 0;
    },
    CLIENT_THEMES_EDITOR_CLOSE: O,
    CHANNEL_SELECT: (e) => {
        let { channelId: t, guildId: n } = e,
            r = m.default.getCurrentUser();
        if (null == t || null == n || (0, l.k8)(a.M.CLIENT_THEMES_COACHMARK) || !(0, A.G2)(r)) return;
        let i = p.A.getChannel(t);
        null != i && (0, h.ke)(i.type) && (N = !0);
    },
    LOGOUT: O,
    CACHE_LOADED: C,
    CONNECTION_OPEN: C,
    OVERLAY_INITIALIZE: C,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: C,
    UNSYNCED_USER_SETTINGS_UPDATE: C,
    USER_SETTINGS_PROTO_UPDATE: C,
});
