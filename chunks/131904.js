t.d(n, { A: () => A });
var l = t(17928),
    i = t(73153),
    a = t(555337),
    r = t(210470),
    u = t(22464);
let s = {},
    c = {},
    d = {},
    o = !1,
    h = !1,
    f = null,
    g = null;
function E(e) {
    let n = {};
    for (let t of u.P) n[t] = (0, r.O9)(e[t]);
    return n;
}
class m extends l.Ay.Store {
    static displayName = "PinotStore";
    initialize() {
        this.waitFor(a.A);
    }
    getFeatures(e) {
        return s[e] ?? null;
    }
    getDraft(e, n) {
        return c[e]?.[n] ?? null;
    }
    hasChanges(e) {
        let n = s[e],
            t = c[e];
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
        return h;
    }
    fetchFailed(e) {
        return d[e] ?? !1;
    }
    getOpenFeatureKey() {
        return f;
    }
    getFocusReturnFeatureKey() {
        return g;
    }
}
let A = new m(i.h, {
    PINOT_FETCH_SUCCESS: function (e) {
        let { guildId: n, features: t } = e;
        if (a.A.getGuild()?.id !== n || null != s[n]) return !1;
        ((s[n] = t), (d[n] = !1), (c[n] = E(t)));
    },
    PINOT_FETCH_FAILURE: function (e) {
        let { guildId: n } = e;
        if (a.A.getGuild()?.id !== n || null != s[n]) return !1;
        d[n] = !0;
    },
    PINOT_DRAFT_UPDATE: function (e) {
        let { guildId: n, featureKey: t, draft: l } = e,
            i = c[n]?.[t];
        if (null == i) return !1;
        ((h = !1), (c[n] = { ...c[n], [t]: { ...i, ...l } }));
    },
    PINOT_SAVE_SUCCESS: function (e) {
        let { guildId: n, features: t } = e;
        ((o = !1), null != s[n] && ((s[n] = t), (c[n] = E(t))));
    },
    PINOT_SAVE_START: function (e) {
        ((o = !0), (h = !1));
    },
    PINOT_SAVE_FAILURE: function (e) {
        ((o = !1), (h = !0));
    },
    PINOT_OPEN_FEATURE: function (e) {
        let { featureKey: n } = e;
        if (n === f) return !1;
        ((g = null == n ? f : null), (f = n));
    },
    GUILD_SETTINGS_INIT: function (e) {
        let { guildId: n } = e,
            t = s[n];
        if (null == t && null == f && null == g && !h) return !1;
        ((f = null), (g = null), (h = !1), null != t && (c[n] = E(t)));
    },
    GUILD_SETTINGS_SET_SECTION: function () {
        if (null == f && null == g) return !1;
        ((f = null), (g = null));
    },
    GUILD_SETTINGS_CLOSE: function () {
        ((s = {}), (c = {}), (d = {}), (h = !1), (f = null), (g = null));
    },
});
