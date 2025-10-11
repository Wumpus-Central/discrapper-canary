n.d(t, { Z: () => _ }), n(388685);
var r,
    i = n(442837),
    l = n(570140),
    a = n(975984),
    s = n(75666);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = Object.freeze({}),
    h = !1,
    p = {},
    f = {},
    g = {},
    m = {},
    b = {};
class y extends (r = i.ZP.Store) {
    isFetching() {
        return h;
    }
    getCurrentCategoryId(e) {
        var t;
        return null != (t = f[e]) ? t : s.AR.ALL;
    }
    getDirectoryEntries(e, t) {
        var n;
        return null != t ? (null == (n = g[e]) ? void 0 : n[t]) : p[e];
    }
    getDirectoryEntry(e, t) {
        var n;
        return null == (n = p[e]) ? void 0 : n[t];
    }
    getDirectoryAllEntriesCount(e) {
        var t;
        return Object.keys(null != (t = p[e]) ? t : {}).length;
    }
    getDirectoryCategoryCounts(e) {
        var t;
        return null != (t = m[e]) ? t : u;
    }
    getAdminGuildEntryIds(e) {
        return b[e];
    }
}
o(y, "displayName", "GuildDirectoryStore");
let _ = new y(l.Z, {
    GUILD_DIRECTORY_FETCH_START: function () {
        h = !0;
    },
    GUILD_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { channelId: t, entries: n } = e;
        h = !1;
        let r = {},
            i = {};
        n.forEach((e) => {
            let t = (0, a.MQ)(e);
            (r[t.guildId] = t),
                null != i[t.primaryCategoryId]
                    ? (i[t.primaryCategoryId][t.guildId] = t)
                    : (i[t.primaryCategoryId] = { [t.guildId]: t });
        }),
            (p[t] = r),
            (g[t] = i);
    },
    GUILD_DIRECTORY_FETCH_FAILURE: function () {
        h = !1;
    },
    GUILD_DIRECTORY_ENTRY_CREATE: function (e) {
        var t, n, r, i, l;
        let { channelId: o, entry: u } = e,
            h = (0, a.MQ)(u);
        if (null == h || (null == (t = p[o]) ? void 0 : t[h.guildId]) != null) return;
        p[o] = d(c({}, p[o]), { [h.guildId]: h });
        let f = null != (r = h.primaryCategoryId) ? r : s.AR.UNCATEGORIZED;
        if (
            ((g[o] = d(c({}, g[o]), { [f]: d(c({}, null == (n = g[o]) ? void 0 : n[f]), { [h.guildId]: h }) })),
            null != m[o])
        ) {
            let e = null != (l = null == (i = m[o]) ? void 0 : i[f]) ? l : 0;
            m[o] = d(c({}, m[o]), { [f]: e + 1 });
        }
    },
    GUILD_DIRECTORY_ENTRY_DELETE: function (e) {
        var t, n;
        let { channelId: r, guildId: i } = e,
            l = null == (t = p[r]) ? void 0 : t[i];
        if (null == l) return;
        let a = l.primaryCategoryId,
            s = Object.assign({}, p[r]);
        delete s[i], null == (n = b[r]) || n.delete(i), (b[r] = new Set(b[r])), (p[r] = s);
        let o = Object.assign({}, g[r][a]);
        if ((delete o[i], (g[r] = d(c({}, g[r]), { [a]: o })), null != m[r])) {
            let e = m[r][a] - 1;
            m[r] = d(c({}, m[r]), { [a]: e >= 0 ? e : 0 });
        }
    },
    GUILD_DIRECTORY_ENTRY_UPDATE: function (e) {
        var t, n, r, i, l, o, u, h, f;
        let { channelId: b, entry: y } = e,
            _ = (0, a.MQ)(y),
            j = null == (t = p[b]) ? void 0 : t[_.guildId];
        p[b] = d(c({}, p[b]), { [_.guildId]: c({}, j, _) });
        let O = null != (i = null == j ? void 0 : j.primaryCategoryId) ? i : s.AR.UNCATEGORIZED,
            x = null != (l = _.primaryCategoryId) ? l : s.AR.UNCATEGORIZED,
            v = Object.assign({}, null == (n = g[b]) ? void 0 : n[O]);
        null != j && O !== x && delete v[_.guildId],
            (g[b] = d(c({}, g[b]), {
                [O]: v,
                [x]: d(c({}, null == (r = g[b]) ? void 0 : r[x]), { [_.guildId]: c({}, j, _) }),
            })),
            x !== O &&
                null != m[b] &&
                (m[b] = d(c({}, m[b]), {
                    [O]: (null == (o = m[b]) ? void 0 : o[O]) > 0 ? (null == (u = m[b]) ? void 0 : u[O]) - 1 : 0,
                    [x]: (null != (f = null == (h = m[b]) ? void 0 : h[x]) ? f : 0) + 1,
                }));
    },
    GUILD_DIRECTORY_CATEGORY_SELECT: function (e) {
        let { channelId: t, categoryId: n } = e;
        f[t] = n;
    },
    GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS: function (e) {
        let { channelId: t, counts: n } = e;
        m[t] = n;
    },
    GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS: function (e) {
        let { channelId: t, entries: n } = e,
            r = new Set();
        n.forEach((e) => {
            let t = (0, a.MQ)(e);
            r.add(t.guildId);
        }),
            (b[t] = r);
    },
});
