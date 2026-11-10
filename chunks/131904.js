var l = t(855986),
    i = t(73153),
    a = t(555337),
    r = t(210470),
    s = t(22464);
let d = {},
    u = {},
    c = {},
    o = !1,
    h = !1,
    f = null,
    m = null;
function g(e) {
    let n = {};
    for (let t of s.P) n[t] = (0, r.O9)(e[t]);
    return n;
}
class x extends l.Ay.Store {
    static displayName = "PinotStore";
    initialize() {
        this.waitFor(a.A);
    }
    getFeatures(e) {
        return d[e] ?? null;
    }
    getDraft(e, n) {
        return u[e]?.[n] ?? null;
    }
    hasChanges(e) {
        let n = d[e],
            t = u[e];
        return (
            null != n &&
            null != t &&
            s.P.some((e) => {
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
        return c[e] ?? !1;
    }
    getOpenFeatureKey() {
        return f;
    }
    getFocusReturnFeatureKey() {
        return m;
    }
}
let p = new x(i.h, {
    PINOT_FETCH_SUCCESS: function (e) {
        let { guildId: n, features: t } = e;
        if (a.A.getGuild()?.id !== n || null != d[n]) return !1;
        ((d[n] = t), (c[n] = !1), (u[n] = g(t)));
    },
    PINOT_FETCH_FAILURE: function (e) {
        let { guildId: n } = e;
        if (a.A.getGuild()?.id !== n || null != d[n]) return !1;
        c[n] = !0;
    },
    PINOT_DRAFT_UPDATE: function (e) {
        let { guildId: n, featureKey: t, draft: l } = e,
            i = u[n]?.[t];
        if (null == i) return !1;
        ((h = !1), (u[n] = { ...u[n], [t]: { ...i, ...l } }));
    },
    PINOT_SAVE_SUCCESS: function (e) {
        let { guildId: n, features: t } = e;
        ((o = !1), null != d[n] && ((d[n] = t), (u[n] = g(t))));
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
        ((m = null == n ? f : null), (f = n));
    },
    GUILD_SETTINGS_INIT: function (e) {
        let { guildId: n } = e,
            t = d[n];
        if (null == t && null == f && null == m && !h) return !1;
        ((f = null), (m = null), (h = !1), null != t && (u[n] = g(t)));
    },
    GUILD_SETTINGS_SET_SECTION: function () {
        if (null == f && null == m) return !1;
        ((f = null), (m = null));
    },
    GUILD_SETTINGS_CLOSE: function () {
        ((d = {}), (u = {}), (c = {}), (h = !1), (f = null), (m = null));
    },
});
t.d(n, {}, { A: p });
