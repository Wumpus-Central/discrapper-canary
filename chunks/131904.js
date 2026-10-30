t.d(n, { A: () => m });
var l = t(17928),
    i = t(73153),
    a = t(555337),
    r = t(210470),
    u = t(22464);
let s = {},
    d = {},
    c = {},
    o = !1,
    f = !1,
    h = null,
    g = null;
function E(e) {
    let n = {};
    for (let t of u.P) n[t] = (0, r.O9)(e[t]);
    return n;
}
class A extends l.Ay.Store {
    static displayName = "PinotStore";
    initialize() {
        this.waitFor(a.A);
    }
    getFeatures(e) {
        return s[e] ?? null;
    }
    getDraft(e, n) {
        return d[e]?.[n] ?? null;
    }
    hasChanges(e) {
        let n = s[e],
            t = d[e];
        return (
            null != n &&
            null != t &&
            u.P.some((e) => {
                let l = t[e];
                return null != l && (0, r.wX)(n[e], l);
            })
        );
    }
    showNotice() {
        let e = a.A.getGuild()?.id;
        return null != e && this.hasChanges(e);
    }
    isSaving() {
        return o;
    }
    saveFailed() {
        return f;
    }
    fetchFailed(e) {
        return c[e] ?? !1;
    }
    getOpenFeatureKey() {
        return h;
    }
    getFocusReturnFeatureKey() {
        return g;
    }
}
let m = new A(i.h, {
    PINOT_FETCH_SUCCESS: function (e) {
        let { guildId: n, features: t } = e;
        if (a.A.getGuild()?.id !== n || null != s[n]) return !1;
        ((s[n] = t), (c[n] = !1), (d[n] = E(t)));
    },
    PINOT_FETCH_FAILURE: function (e) {
        let { guildId: n } = e;
        if (a.A.getGuild()?.id !== n || null != s[n]) return !1;
        c[n] = !0;
    },
    PINOT_DRAFT_UPDATE: function (e) {
        let { guildId: n, featureKey: t, draft: l } = e,
            i = d[n]?.[t];
        if (null == i) return !1;
        ((f = !1), (d[n] = { ...d[n], [t]: { ...i, ...l } }));
    },
    PINOT_SAVE_SUCCESS: function (e) {
        let { guildId: n, features: t } = e;
        ((o = !1), null != s[n] && ((s[n] = t), (d[n] = E(t))));
    },
    PINOT_SAVE_START: function (e) {
        ((o = !0), (f = !1));
    },
    PINOT_SAVE_FAILURE: function (e) {
        ((o = !1), (f = !0));
    },
    PINOT_OPEN_FEATURE: function (e) {
        let { featureKey: n } = e;
        if (n === h) return !1;
        ((g = null == n ? h : null), (h = n));
    },
    GUILD_SETTINGS_INIT: function (e) {
        let { guildId: n } = e,
            t = s[n];
        if (null == t && null == h && null == g && !f) return !1;
        ((h = null), (g = null), (f = !1), null != t && (d[n] = E(t)));
    },
    GUILD_SETTINGS_SET_SECTION: function () {
        if (null == h && null == g) return !1;
        ((h = null), (g = null));
    },
    GUILD_SETTINGS_CLOSE: function () {
        ((s = {}), (d = {}), (c = {}), (f = !1), (h = null), (g = null));
    },
});
