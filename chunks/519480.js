n.d(t, { A: () => m });
var i = n(311907),
    l = n(73153),
    s = n(370876),
    a = n(946116);
let r = Object.freeze({}),
    o = !1,
    d = {},
    c = {},
    u = {},
    h = {},
    A = {};
class _ extends i.Ay.Store {
    static displayName = "GuildDirectoryStore";
    isFetching() {
        return o;
    }
    getCurrentCategoryId(e) {
        return c[e] ?? a.mU.ALL;
    }
    getDirectoryEntries(e, t) {
        return null != t ? u[e]?.[t] : d[e];
    }
    getDirectoryEntry(e, t) {
        return d[e]?.[t];
    }
    getDirectoryAllEntriesCount(e) {
        return Object.keys(d[e] ?? {}).length;
    }
    getDirectoryCategoryCounts(e) {
        return h[e] ?? r;
    }
    getAdminGuildEntryIds(e) {
        return A[e];
    }
}
let m = new _(l.h, {
    GUILD_DIRECTORY_FETCH_START: function () {
        o = !0;
    },
    GUILD_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { channelId: t, entries: n } = e;
        o = !1;
        let i = {},
            l = {};
        n.forEach((e) => {
            let t = (0, s.mR)(e);
            (i[t.guildId] = t),
                null != l[t.primaryCategoryId]
                    ? (l[t.primaryCategoryId][t.guildId] = t)
                    : (l[t.primaryCategoryId] = { [t.guildId]: t });
        }),
            (d[t] = i),
            (u[t] = l);
    },
    GUILD_DIRECTORY_FETCH_FAILURE: function () {
        o = !1;
    },
    GUILD_DIRECTORY_ENTRY_CREATE: function (e) {
        let { channelId: t, entry: n } = e,
            i = (0, s.mR)(n);
        if (null == i || d[t]?.[i.guildId] != null) return;
        d[t] = { ...d[t], [i.guildId]: i };
        let l = i.primaryCategoryId ?? a.mU.UNCATEGORIZED;
        if (((u[t] = { ...u[t], [l]: { ...u[t]?.[l], [i.guildId]: i } }), null != h[t])) {
            let e = h[t]?.[l] ?? 0;
            h[t] = { ...h[t], [l]: e + 1 };
        }
    },
    GUILD_DIRECTORY_ENTRY_DELETE: function (e) {
        let { channelId: t, guildId: n } = e,
            i = d[t]?.[n];
        if (null == i) return;
        let l = i.primaryCategoryId,
            s = Object.assign({}, d[t]);
        delete s[n], A[t]?.delete(n), (A[t] = new Set(A[t])), (d[t] = s);
        let a = Object.assign({}, u[t][l]);
        if ((delete a[n], (u[t] = { ...u[t], [l]: a }), null != h[t])) {
            let e = h[t][l] - 1;
            h[t] = { ...h[t], [l]: e >= 0 ? e : 0 };
        }
    },
    GUILD_DIRECTORY_ENTRY_UPDATE: function (e) {
        let { channelId: t, entry: n } = e,
            i = (0, s.mR)(n),
            l = d[t]?.[i.guildId];
        d[t] = { ...d[t], [i.guildId]: { ...l, ...i } };
        let r = l?.primaryCategoryId ?? a.mU.UNCATEGORIZED,
            o = i.primaryCategoryId ?? a.mU.UNCATEGORIZED,
            c = Object.assign({}, u[t]?.[r]);
        null != l && r !== o && delete c[i.guildId],
            (u[t] = { ...u[t], [r]: c, [o]: { ...u[t]?.[o], [i.guildId]: { ...l, ...i } } }),
            o !== r &&
                null != h[t] &&
                (h[t] = { ...h[t], [r]: h[t]?.[r] > 0 ? h[t]?.[r] - 1 : 0, [o]: (h[t]?.[o] ?? 0) + 1 });
    },
    GUILD_DIRECTORY_CATEGORY_SELECT: function (e) {
        let { channelId: t, categoryId: n } = e;
        c[t] = n;
    },
    GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS: function (e) {
        let { channelId: t, counts: n } = e;
        h[t] = n;
    },
    GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS: function (e) {
        let { channelId: t, entries: n } = e,
            i = new Set();
        n.forEach((e) => {
            let t = (0, s.mR)(e);
            i.add(t.guildId);
        }),
            (A[t] = i);
    },
});
