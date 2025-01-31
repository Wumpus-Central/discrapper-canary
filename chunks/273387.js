n.d(t, { Z: () => C }), n(47120);
var i,
    l,
    a,
    r = n(442837),
    s = n(570140),
    o = n(975984),
    c = n(486527);
let d = Object.freeze({}),
    u = !1,
    h = {},
    p = {},
    m = {},
    f = {},
    g = {};
class _ extends (i = r.ZP.Store) {
    isFetching() {
        return u;
    }
    getCurrentCategoryId(e) {
        var t;
        return null !== (t = p[e]) && void 0 !== t ? t : c.AR.ALL;
    }
    getDirectoryEntries(e, t) {
        var n;
        return null != t ? (null === (n = m[e]) || void 0 === n ? void 0 : n[t]) : h[e];
    }
    getDirectoryEntry(e, t) {
        var n;
        return null === (n = h[e]) || void 0 === n ? void 0 : n[t];
    }
    getDirectoryAllEntriesCount(e) {
        var t;
        return Object.keys(null !== (t = h[e]) && void 0 !== t ? t : {}).length;
    }
    getDirectoryCategoryCounts(e) {
        var t;
        return null !== (t = f[e]) && void 0 !== t ? t : d;
    }
    getAdminGuildEntryIds(e) {
        return g[e];
    }
}
(a = 'GuildDirectoryStore'),
    (l = 'displayName') in _
        ? Object.defineProperty(_, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (_[l] = a);
let C = new _(s.Z, {
    GUILD_DIRECTORY_FETCH_START: function () {
        u = !0;
    },
    GUILD_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { channelId: t, entries: n } = e;
        u = !1;
        let i = {},
            l = {};
        n.forEach((e) => {
            let t = (0, o.MQ)(e);
            (i[t.guildId] = t), null != l[t.primaryCategoryId] ? (l[t.primaryCategoryId][t.guildId] = t) : (l[t.primaryCategoryId] = { [t.guildId]: t });
        }),
            (h[t] = i),
            (m[t] = l);
    },
    GUILD_DIRECTORY_FETCH_FAILURE: function () {
        u = !1;
    },
    GUILD_DIRECTORY_ENTRY_CREATE: function (e) {
        var t, n, i, l, a;
        let { channelId: r, entry: s } = e,
            d = (0, o.MQ)(s);
        if (null == d || (null === (t = h[r]) || void 0 === t ? void 0 : t[d.guildId]) != null) return;
        h[r] = {
            ...h[r],
            [d.guildId]: d
        };
        let u = null !== (i = d.primaryCategoryId) && void 0 !== i ? i : c.AR.UNCATEGORIZED;
        if (
            ((m[r] = {
                ...m[r],
                [u]: {
                    ...(null === (n = m[r]) || void 0 === n ? void 0 : n[u]),
                    [d.guildId]: d
                }
            }),
            null != f[r])
        ) {
            let e = null !== (a = null === (l = f[r]) || void 0 === l ? void 0 : l[u]) && void 0 !== a ? a : 0;
            f[r] = {
                ...f[r],
                [u]: e + 1
            };
        }
    },
    GUILD_DIRECTORY_ENTRY_DELETE: function (e) {
        var t, n;
        let { channelId: i, guildId: l } = e,
            a = null === (t = h[i]) || void 0 === t ? void 0 : t[l];
        if (null == a) return;
        let r = a.primaryCategoryId,
            s = Object.assign({}, h[i]);
        delete s[l], null === (n = g[i]) || void 0 === n || n.delete(l), (g[i] = new Set(g[i])), (h[i] = s);
        let o = Object.assign({}, m[i][r]);
        if (
            (delete o[l],
            (m[i] = {
                ...m[i],
                [r]: o
            }),
            null != f[i])
        ) {
            let e = f[i][r] - 1;
            f[i] = {
                ...f[i],
                [r]: e >= 0 ? e : 0
            };
        }
    },
    GUILD_DIRECTORY_ENTRY_UPDATE: function (e) {
        var t, n, i, l, a, r, s, d, u;
        let { channelId: p, entry: g } = e,
            _ = (0, o.MQ)(g),
            C = null === (t = h[p]) || void 0 === t ? void 0 : t[_.guildId];
        h[p] = {
            ...h[p],
            [_.guildId]: {
                ...C,
                ..._
            }
        };
        let x = null !== (l = null == C ? void 0 : C.primaryCategoryId) && void 0 !== l ? l : c.AR.UNCATEGORIZED,
            v = null !== (a = _.primaryCategoryId) && void 0 !== a ? a : c.AR.UNCATEGORIZED,
            E = Object.assign({}, null === (n = m[p]) || void 0 === n ? void 0 : n[x]);
        null != C && x !== v && delete E[_.guildId],
            (m[p] = {
                ...m[p],
                [x]: E,
                [v]: {
                    ...(null === (i = m[p]) || void 0 === i ? void 0 : i[v]),
                    [_.guildId]: {
                        ...C,
                        ..._
                    }
                }
            }),
            v !== x &&
                null != f[p] &&
                (f[p] = {
                    ...f[p],
                    [x]: (null === (r = f[p]) || void 0 === r ? void 0 : r[x]) > 0 ? (null === (s = f[p]) || void 0 === s ? void 0 : s[x]) - 1 : 0,
                    [v]: (null !== (u = null === (d = f[p]) || void 0 === d ? void 0 : d[v]) && void 0 !== u ? u : 0) + 1
                });
    },
    GUILD_DIRECTORY_CATEGORY_SELECT: function (e) {
        let { channelId: t, categoryId: n } = e;
        p[t] = n;
    },
    GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS: function (e) {
        let { channelId: t, counts: n } = e;
        f[t] = n;
    },
    GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS: function (e) {
        let { channelId: t, entries: n } = e,
            i = new Set();
        n.forEach((e) => {
            let t = (0, o.MQ)(e);
            i.add(t.guildId);
        }),
            (g[t] = i);
    }
});
