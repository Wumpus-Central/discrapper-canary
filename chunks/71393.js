"use strict";
n.d(t, { A: () => h });
var r = n(357758),
    i = n(867051),
    s = n(548965),
    a = n(942269),
    o = n(260509),
    l = n(860689),
    u = n(661191),
    d = n(961350),
    c = n(652215),
    _ = n(349828);
function f(e) {
    return (0, i.yE)(o.vI, {
        ...e,
        features: (0, r.y)(e.features),
        joinedAt: null != e.joinedAt ? new Date(e.joinedAt) : null,
        premiumProgressBarEnabledUserUpdatedAt:
            null != e.premiumProgressBarEnabledUserUpdatedAt
                ? new Date(e.premiumProgressBarEnabledUserUpdatedAt)
                : null,
    });
}
class E extends a.yW {
    static displayName = "GuildStore";
    database = this.addKVDatabase("guilds", f);
    stateWrapper() {
        return this.database;
    }
    getGuild = (e) => {
        if (null != e) return e === c.YYv ? _._z : this.database.get(e);
    };
    getGuilds = this.database.memoized((e) => ({ ...e }));
    getGuildsArray = this.database.memoized((e) => Object.values(e));
    getGuildIds = this.database.memoized((e) => u.default.keys(e));
    getGuildCount() {
        return this.database.length();
    }
}
let h = new E(
    {
        BACKGROUND_SYNC: (e, t) => {
            let { guilds: n } = e;
            for (let e of n) {
                let n = t.get(e.id);
                null != n && "unavailable" !== e.data_mode && t.set(e.id, l.kI(e, n));
            }
        },
        LOGOUT: (e, t) => {
            t.clear();
        },
        RESET_SOCKET: (e, t) => {
            t.clear();
        },
        CONNECTION_OPEN: (e, t) => {
            let { guilds: n, unavailableGuilds: r } = e,
                i = t.getAllRecords(),
                s = new Set(Object.keys(i));
            for (let e of n) {
                if ((s.delete(e.id), null == e.properties && null == i[e.id]))
                    throw Error("Guild data was missing from store, but hash was still available.");
                t.set(e.id, l.Wj(e, i[e.id]));
            }
            for (let e of r) s.delete(e);
            for (let e of s) t.remove(e);
        },
        OVERLAY_INITIALIZE: (e, t) => {
            let { guilds: n } = e;
            if ((t.clear(), null != n))
                for (let { properties: e, additionalFields: r } of n)
                    t.set(
                        e.id,
                        l.zT(e, {
                            joinedAt: null != r.joinedAt ? new Date(r.joinedAt) : null,
                            premiumSubscriberCount: r.premiumSubscriberCount,
                        }),
                    );
        },
        CACHE_LOADED: (e, t) => {
            let { guilds: n } = e;
            for (let e of (t.clear(), n)) t.set(e.id, l.$O(e));
        },
        CACHE_LOADED_LAZY: (e, t) => {
            let { guilds: n } = e;
            if (0 !== n.length) for (let e of (t.clear(), n)) t.set(e.id, l.$O(e));
        },
        GUILD_CREATE: (e, t) => {
            let { guild: n } = e,
                r = t.get(n.id);
            if (null == n.properties && null == r)
                throw Error("Guild data was missing from store, but hash was still available.");
            t.set(n.id, l.Wj(n, r));
        },
        GUILD_UPDATE: (e, t) => {
            let { guild: n } = e,
                r = t.get(n.id);
            t.set(n.id, l.Y1(n, r));
        },
        GUILD_DELETE: (e, t) => {
            let { guild: n } = e;
            n.unavailable || t.remove(n.id);
        },
        GUILD_MEMBER_ADD: (e, t) => {
            let { guildId: n, joinedAt: r, user: i } = e,
                s = d.default.getId(),
                a = t.get(n);
            if (s !== i.id || null == a) return;
            let l = "string" == typeof r ? new Date(r) : r;
            l !== a.joinedAt && null != l && t.set(n, (0, o.kn)(a, l));
        },
        GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE: (e, t) => {
            let { guildId: n, gameApplicationIds: r } = e,
                i = t.get(n);
            null != i && t.set(n, (0, o.Fy)(i, r));
        },
    },
    s.P4.getCachedBridgedStoreMode(),
);
