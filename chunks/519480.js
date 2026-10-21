n.d(e, { A: () => T });
var i = n(17928),
    r = n(73153),
    a = n(370876),
    l = n(946116);
let d = Object.freeze({}),
    _ = !1,
    I = {},
    p = {},
    s = {},
    E = {},
    U = {};
class g extends i.Ay.Store {
    static displayName = "GuildDirectoryStore";
    isFetching() {
        return _;
    }
    getCurrentCategoryId(t) {
        return p[t] ?? l.mU.ALL;
    }
    getDirectoryEntries(t, e) {
        return null != e ? s[t]?.[e] : I[t];
    }
    getDirectoryEntry(t, e) {
        return I[t]?.[e];
    }
    getDirectoryAllEntriesCount(t) {
        return Object.keys(I[t] ?? {}).length;
    }
    getDirectoryCategoryCounts(t) {
        return E[t] ?? d;
    }
    getAdminGuildEntryIds(t) {
        return U[t];
    }
}
let T = new g(r.h, {
    GUILD_DIRECTORY_FETCH_START: function () {
        _ = !0;
    },
    GUILD_DIRECTORY_FETCH_SUCCESS: function (t) {
        let { channelId: e, entries: n } = t;
        _ = !1;
        let i = {},
            r = {};
        (n.forEach((t) => {
            let e = (0, a.mR)(t);
            ((i[e.guildId] = e),
                null != r[e.primaryCategoryId]
                    ? (r[e.primaryCategoryId][e.guildId] = e)
                    : (r[e.primaryCategoryId] = { [e.guildId]: e }));
        }),
            (I[e] = i),
            (s[e] = r));
    },
    GUILD_DIRECTORY_FETCH_FAILURE: function () {
        _ = !1;
    },
    GUILD_DIRECTORY_ENTRY_CREATE: function (t) {
        let { channelId: e, entry: n } = t,
            i = (0, a.mR)(n);
        if (null == i || I[e]?.[i.guildId] != null) return;
        I[e] = { ...I[e], [i.guildId]: i };
        let r = i.primaryCategoryId ?? l.mU.UNCATEGORIZED;
        if (((s[e] = { ...s[e], [r]: { ...s[e]?.[r], [i.guildId]: i } }), null != E[e])) {
            let t = E[e]?.[r] ?? 0;
            E[e] = { ...E[e], [r]: t + 1 };
        }
    },
    GUILD_DIRECTORY_ENTRY_DELETE: function (t) {
        let { channelId: e, guildId: n } = t,
            i = I[e]?.[n];
        if (null == i) return;
        let r = i.primaryCategoryId,
            a = Object.assign({}, I[e]);
        (delete a[n], U[e]?.delete(n), (U[e] = new Set(U[e])), (I[e] = a));
        let l = Object.assign({}, s[e][r]);
        if ((delete l[n], (s[e] = { ...s[e], [r]: l }), null != E[e])) {
            let t = E[e][r] - 1;
            E[e] = { ...E[e], [r]: t >= 0 ? t : 0 };
        }
    },
    GUILD_DIRECTORY_ENTRY_UPDATE: function (t) {
        let { channelId: e, entry: n } = t,
            i = (0, a.mR)(n),
            r = I[e]?.[i.guildId];
        I[e] = { ...I[e], [i.guildId]: { ...r, ...i } };
        let d = r?.primaryCategoryId ?? l.mU.UNCATEGORIZED,
            _ = i.primaryCategoryId ?? l.mU.UNCATEGORIZED,
            p = Object.assign({}, s[e]?.[d]);
        (null != r && d !== _ && delete p[i.guildId],
            (s[e] = { ...s[e], [d]: p, [_]: { ...s[e]?.[_], [i.guildId]: { ...r, ...i } } }),
            _ !== d &&
                null != E[e] &&
                (E[e] = { ...E[e], [d]: E[e]?.[d] > 0 ? E[e]?.[d] - 1 : 0, [_]: (E[e]?.[_] ?? 0) + 1 }));
    },
    GUILD_DIRECTORY_CATEGORY_SELECT: function (t) {
        let { channelId: e, categoryId: n } = t;
        p[e] = n;
    },
    GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS: function (t) {
        let { channelId: e, counts: n } = t;
        E[e] = n;
    },
    GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS: function (t) {
        let { channelId: e, entries: n } = t,
            i = new Set();
        (n.forEach((t) => {
            let e = (0, a.mR)(t);
            i.add(e.guildId);
        }),
            (U[e] = i));
    },
});
