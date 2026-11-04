var t = l(855986),
    i = l(73153),
    a = l(555337),
    r = l(210470),
    u = l(22464);
let s = {},
    d = {},
    c = {},
    o = !1,
    h = !1,
    f = null,
    g = null;
function E(e) {
    let n = {};
    for (let l of u.P) n[l] = (0, r.O9)(e[l]);
    return n;
}
class m extends t.Ay.Store {
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
            l = d[e];
        return (
            null != n &&
            null != l &&
            u.P.some((e) => {
                let t = l[e];
                return null != t && (0, r.wX)(n[e], t);
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
        return c[e] ?? !1;
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
        let { guildId: n, features: l } = e;
        if (a.A.getGuild()?.id !== n || null != s[n]) return !1;
        ((s[n] = l), (c[n] = !1), (d[n] = E(l)));
    },
    PINOT_FETCH_FAILURE: function (e) {
        let { guildId: n } = e;
        if (a.A.getGuild()?.id !== n || null != s[n]) return !1;
        c[n] = !0;
    },
    PINOT_DRAFT_UPDATE: function (e) {
        let { guildId: n, featureKey: l, draft: t } = e,
            i = d[n]?.[l];
        if (null == i) return !1;
        ((h = !1), (d[n] = { ...d[n], [l]: { ...i, ...t } }));
    },
    PINOT_SAVE_SUCCESS: function (e) {
        let { guildId: n, features: l } = e;
        ((o = !1), null != s[n] && ((s[n] = l), (d[n] = E(l))));
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
            l = s[n];
        if (null == l && null == f && null == g && !h) return !1;
        ((f = null), (g = null), (h = !1), null != l && (d[n] = E(l)));
    },
    GUILD_SETTINGS_SET_SECTION: function () {
        if (null == f && null == g) return !1;
        ((f = null), (g = null));
    },
    GUILD_SETTINGS_CLOSE: function () {
        ((s = {}), (d = {}), (c = {}), (h = !1), (f = null), (g = null));
    },
});
l.d(n, {}, { A: A });
