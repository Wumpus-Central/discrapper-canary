n.d(t, { Z: () => C }), n(47120);
var r,
    i = n(442837),
    l = n(570140),
    o = n(975984),
    a = n(75666);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
let d = Object.freeze({}),
    p = !1,
    h = {},
    f = {},
    m = {},
    g = {},
    b = {};
class _ extends (r = i.ZP.Store) {
    isFetching() {
        return p;
    }
    getCurrentCategoryId(e) {
        var t;
        return null != (t = f[e]) ? t : a.AR.ALL;
    }
    getDirectoryEntries(e, t) {
        var n;
        return null != t ? (null == (n = m[e]) ? void 0 : n[t]) : h[e];
    }
    getDirectoryEntry(e, t) {
        var n;
        return null == (n = h[e]) ? void 0 : n[t];
    }
    getDirectoryAllEntriesCount(e) {
        var t;
        return Object.keys(null != (t = h[e]) ? t : {}).length;
    }
    getDirectoryCategoryCounts(e) {
        var t;
        return null != (t = g[e]) ? t : d;
    }
    getAdminGuildEntryIds(e) {
        return b[e];
    }
}
s(_, 'displayName', 'GuildDirectoryStore');
let C = new _(l.Z, {
    GUILD_DIRECTORY_FETCH_START: function () {
        p = !0;
    },
    GUILD_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { channelId: t, entries: n } = e;
        p = !1;
        let r = {},
            i = {};
        n.forEach((e) => {
            let t = (0, o.MQ)(e);
            (r[t.guildId] = t), null != i[t.primaryCategoryId] ? (i[t.primaryCategoryId][t.guildId] = t) : (i[t.primaryCategoryId] = { [t.guildId]: t });
        }),
            (h[t] = r),
            (m[t] = i);
    },
    GUILD_DIRECTORY_FETCH_FAILURE: function () {
        p = !1;
    },
    GUILD_DIRECTORY_ENTRY_CREATE: function (e) {
        var t, n, r, i, l;
        let { channelId: s, entry: d } = e,
            p = (0, o.MQ)(d);
        if (null == p || (null == (t = h[s]) ? void 0 : t[p.guildId]) != null) return;
        h[s] = u(c({}, h[s]), { [p.guildId]: p });
        let f = null != (r = p.primaryCategoryId) ? r : a.AR.UNCATEGORIZED;
        if (((m[s] = u(c({}, m[s]), { [f]: u(c({}, null == (n = m[s]) ? void 0 : n[f]), { [p.guildId]: p }) })), null != g[s])) {
            let e = null != (l = null == (i = g[s]) ? void 0 : i[f]) ? l : 0;
            g[s] = u(c({}, g[s]), { [f]: e + 1 });
        }
    },
    GUILD_DIRECTORY_ENTRY_DELETE: function (e) {
        var t, n;
        let { channelId: r, guildId: i } = e,
            l = null == (t = h[r]) ? void 0 : t[i];
        if (null == l) return;
        let o = l.primaryCategoryId,
            a = Object.assign({}, h[r]);
        delete a[i], null == (n = b[r]) || n.delete(i), (b[r] = new Set(b[r])), (h[r] = a);
        let s = Object.assign({}, m[r][o]);
        if ((delete s[i], (m[r] = u(c({}, m[r]), { [o]: s })), null != g[r])) {
            let e = g[r][o] - 1;
            g[r] = u(c({}, g[r]), { [o]: e >= 0 ? e : 0 });
        }
    },
    GUILD_DIRECTORY_ENTRY_UPDATE: function (e) {
        var t, n, r, i, l, s, d, p, f;
        let { channelId: b, entry: _ } = e,
            C = (0, o.MQ)(_),
            y = null == (t = h[b]) ? void 0 : t[C.guildId];
        h[b] = u(c({}, h[b]), { [C.guildId]: c({}, y, C) });
        let x = null != (i = null == y ? void 0 : y.primaryCategoryId) ? i : a.AR.UNCATEGORIZED,
            v = null != (l = C.primaryCategoryId) ? l : a.AR.UNCATEGORIZED,
            j = Object.assign({}, null == (n = m[b]) ? void 0 : n[x]);
        null != y && x !== v && delete j[C.guildId],
            (m[b] = u(c({}, m[b]), {
                [x]: j,
                [v]: u(c({}, null == (r = m[b]) ? void 0 : r[v]), { [C.guildId]: c({}, y, C) })
            })),
            v !== x &&
                null != g[b] &&
                (g[b] = u(c({}, g[b]), {
                    [x]: (null == (s = g[b]) ? void 0 : s[x]) > 0 ? (null == (d = g[b]) ? void 0 : d[x]) - 1 : 0,
                    [v]: (null != (f = null == (p = g[b]) ? void 0 : p[v]) ? f : 0) + 1
                }));
    },
    GUILD_DIRECTORY_CATEGORY_SELECT: function (e) {
        let { channelId: t, categoryId: n } = e;
        f[t] = n;
    },
    GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS: function (e) {
        let { channelId: t, counts: n } = e;
        g[t] = n;
    },
    GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS: function (e) {
        let { channelId: t, entries: n } = e,
            r = new Set();
        n.forEach((e) => {
            let t = (0, o.MQ)(e);
            r.add(t.guildId);
        }),
            (b[t] = r);
    }
});
