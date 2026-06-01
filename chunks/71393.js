"use strict";
n.d(t, { A: () => E });
var i = n(357758),
    r = n(867051),
    s = n(892842),
    a = n(137903),
    o = n(260509),
    l = n(860689),
    u = n(935208),
    c = n(495544),
    d = n(652215),
    _ = n(349828);
function h(e) {
    return (0, r.yE)(o.vI, {
        ...e,
        features: (0, i.y)(e.features),
        joinedAt: null != e.joinedAt ? new Date(e.joinedAt) : null,
        premiumProgressBarEnabledUserUpdatedAt:
            null != e.premiumProgressBarEnabledUserUpdatedAt
                ? new Date(e.premiumProgressBarEnabledUserUpdatedAt)
                : null,
    });
}
function f(e, t, n) {
    let i = e.get(t);
    null != i && e.set(t, (0, r.hZ)(i, "guildTheme", n));
}
class p extends a.yW {
    static displayName = "GuildStore";
    database = this.addKVDatabase("guilds", h);
    stateWrapper() {
        return this.database;
    }
    getGuild = (e) => {
        if (null != e) return e === d.YYv ? _._z : this.database.get(e);
    };
    getGuilds = this.database.memoized((e) => ({ ...e }));
    getGuildsArray = this.database.memoized((e) => Object.values(e));
    getGuildIds = this.database.memoized((e) => u.default.keys(e));
    getGuildCount() {
        return this.database.length();
    }
}
let E = new p(
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
            let { guilds: n, unavailableGuilds: i } = e,
                r = t.getAllRecords(),
                s = new Set(Object.keys(r));
            for (let e of n) {
                if ((s.delete(e.id), null == e.properties && null == r[e.id]))
                    throw Error("Guild data was missing from store, but hash was still available.");
                t.set(e.id, l.Wj(e, r[e.id]));
            }
            for (let e of i) s.delete(e);
            for (let e of s) t.remove(e);
        },
        OVERLAY_INITIALIZE: (e, t) => {
            let { guilds: n } = e;
            if ((t.clear(), null != n))
                for (let { properties: e, additionalFields: i } of n)
                    t.set(
                        e.id,
                        l.zT(e, {
                            joinedAt: null != i.joinedAt ? new Date(i.joinedAt) : null,
                            premiumSubscriberCount: i.premiumSubscriberCount,
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
                i = t.get(n.id);
            if (null == n.properties && null == i)
                throw Error("Guild data was missing from store, but hash was still available.");
            t.set(n.id, l.Wj(n, i));
        },
        GUILD_UPDATE: (e, t) => {
            let { guild: n } = e,
                i = t.get(n.id);
            t.set(n.id, l.Y1(n, i));
        },
        GUILD_THEME_PREVIEW_SAVE_SUCCESS: (e, t) => {
            let { guildId: n, guildTheme: i } = e;
            f(t, n, i);
        },
        GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS: (e, t) => {
            let { guildId: n, guildTheme: i } = e;
            f(t, n, i);
        },
        GUILD_DELETE: (e, t) => {
            let { guild: n } = e;
            n.unavailable || t.remove(n.id);
        },
        GUILD_MEMBER_ADD: (e, t) => {
            let { guildId: n, joinedAt: i, user: r } = e,
                s = c.default.getId(),
                a = t.get(n);
            if (s !== r.id || null == a) return;
            let l = "string" == typeof i ? new Date(i) : i;
            l !== a.joinedAt && null != l && t.set(n, (0, o.kn)(a, l));
        },
        GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE: (e, t) => {
            let { guildId: n, gameApplicationIds: i } = e,
                r = t.get(n);
            null != r && t.set(n, (0, o.Fy)(r, i));
        },
    },
    s.P4.getCachedBridgedStoreMode(),
);
