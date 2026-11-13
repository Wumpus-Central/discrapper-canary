let i, r;
var a = n(855986),
    s = n(554146),
    l = n(73153),
    o = n(826673),
    d = n(145359),
    c = n(773527),
    u = n(284016),
    _ = n(973654),
    E = n(413599),
    A = n(964404),
    f = n(253932),
    h = n(617617),
    I = n(859034),
    p = n(95701),
    m = n(734057),
    T = n(287809),
    g = n(448645),
    S = n(427262),
    N = n(644235),
    C = n(385803),
    O = n(211824),
    R = n(185928);
let L = !0,
    y = !1,
    D = !1;
function b(e) {
    return !(0, c.oB)(e.id) || null == T.default.getCurrentUser() || !(0, d.$X)(O.vB.CLIENT_THEME);
}
function v(e) {
    if (null == e) return;
    let t = C.ag[e];
    return null != t && b(t) ? t : void 0;
}
function P() {
    let e = f.eh.getSetting().backgroundGradientPresetId;
    return (0, c.oB)(e) ? v(e) : void 0;
}
function M() {
    (L && (i = P()), (D = !1), (y = !1));
}
function U() {
    let e = !1;
    if (null == i || D || b(i)) {
        if (null == i) {
            let t = P();
            null != t && ((i = t), (e = !0));
        }
    } else ((i = void 0), (e = !0));
    let t = !g.Ay.canUseClientThemes(T.default.getCurrentUser());
    if (t === L) return e;
    ((L = t), (D = !1));
}
function w() {
    let e = f.eh.getSetting().backgroundGradientPresetId;
    if (null == e) {
        if (null == i) return !1;
        i = void 0;
    } else {
        let t = v(e);
        if (t === i) return !1;
        i = t;
    }
}
function G() {
    return (0, I.v)();
}
function x() {
    return !0;
}
function k() {
    let e = f.eh.getSetting().backgroundGradientPresetId;
    if ((A.Ay.useSystemTheme !== R.Q_.ON || null == e || (0, I.v)() || (0, _.k7)(R.Q_.OFF), null == e)) {
        null != i && (i = void 0);
        return;
    }
    let t = C.ag[e];
    if (null != t) {
        if (!b(t)) {
            i = void 0;
            return;
        }
        i?.id !== t.id && (i = t);
    }
}
class F extends a.Ay.PersistedStore {
    static displayName = "ClientThemesBackgroundStore";
    static persistKey = "ClientThemesBackgroundStore";
    migrations = [(e) => ({ gradientPresetId: e?.gradientPreset?.id })];
    initialize(e) {
        ((D = !1),
            null != e && ((i = v(e.gradientPresetId)), (L = !0 !== e.canUseClientThemes)),
            this.waitFor(m.A, u.A, E.A, A.Ay, h.A, T.default),
            this.syncWith([T.default], U),
            this.syncWith([u.A], w));
    }
    getState() {
        return L
            ? !D && null != i && (0, c.oB)(i.id)
                ? { gradientPresetId: i.id }
                : {}
            : { gradientPresetId: i?.id, canUseClientThemes: !0 };
    }
    get gradientPreset() {
        if ((0, I.v)()) {
            let e = v(E.A.getSyncedClientTheme(E.A.systemTheme)?.backgroundGradientPresetId);
            return L ? (D ? i : null != e && (0, c.oB)(e.id) ? e : void 0) : e;
        }
        return null != i && (D || b(i)) ? i : void 0;
    }
    getLinearGradient() {
        return null == this.gradientPreset ? null : (0, N.FK)(this.gradientPreset);
    }
    get hasHiddenHexagonCampaignPreset() {
        let e = f.eh.getSetting().backgroundGradientPresetId;
        return (0, c.oB)(e) && null == this.gradientPreset;
    }
    get isPreview() {
        return L;
    }
    get isUpsellGradientPreview() {
        return D;
    }
    get isCoachmark() {
        return y;
    }
    get mobilePendingThemeIndex() {
        return r;
    }
}
let B = new F(l.h, {
    UPDATE_BACKGROUND_GRADIENT_PRESET: function (e) {
        let { presetId: t } = e;
        if (((D = L && null != t && (!(0, c.oB)(t) || !!(0, d.$X)(O.vB.CLIENT_THEME))), null == t)) {
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
        ((i = L ? P() : void 0), (D = !1));
    },
    CLIENT_THEMES_EDITOR_CLOSE: M,
    CHANNEL_SELECT: function (e) {
        let { channelId: t, guildId: n } = e,
            i = T.default.getCurrentUser();
        if (null == t || null == n || (0, o.k8)(s.M.CLIENT_THEMES_COACHMARK) || !(0, S.G2)(i)) return;
        let r = m.A.getChannel(t);
        null != r && (0, p.ke)(r.type) && (y = !0);
    },
    LOGOUT: M,
    CACHE_LOADED: k,
    CONNECTION_OPEN: k,
    OVERLAY_INITIALIZE: k,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: k,
    UNSYNCED_USER_SETTINGS_UPDATE: k,
    USER_SETTINGS_PROTO_UPDATE: k,
    SYSTEM_THEME_CHANGE: G,
    UPDATE_SYNCED_CLIENT_THEME: G,
    SET_SAME_AS_DEVICE_THEME_ENABLED: x,
    CLEAR_SYNCED_CLIENT_THEMES: x,
});
n.d(t, {}, { A: B });
