"use strict";
n.d(t, { A: () => I });
var i = n(357758),
    r = n(867051),
    a = n(5180),
    s = n(892842),
    l = n(137903),
    o = n(260509),
    d = n(149790),
    c = n(935208),
    u = n(280450),
    _ = n(349828);
function E(e) {
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
function A(e, t, n) {
    let i = e.get(t);
    null != i && e.set(t, (0, r.hZ)(i, "guildTheme", n));
}
class h extends l.yW {
    static displayName = "GuildStore";
    database = this.addKVDatabase("guilds", E);
    stateWrapper() {
        return this.database;
    }
    getGuild = (e) => {
        if (null != e) return (0, a.ai)(e) ? _._z : this.database.get(e);
    };
    getGuilds = this.database.memoized((e) => ({ ...e }));
    getGuildsArray = this.database.memoized((e) => Object.values(e));
    getGuildIds = this.database.memoized((e) => c.default.keys(e));
    getGuildCount() {
        return this.database.length();
    }
}
let I = new h(
    {
        BACKGROUND_SYNC: (e, t) => {
            let { guilds: n } = e;
            for (let e of n) {
                let n = t.get(e.id);
                null != n && "unavailable" !== e.data_mode && t.set(e.id, d.kI(e, n));
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
                a = new Set(Object.keys(r));
            for (let e of n) {
                if ((a.delete(e.id), null == e.properties && null == r[e.id]))
                    throw Error("Guild data was missing from store, but hash was still available.");
                t.set(e.id, d.Wj(e, r[e.id]));
            }
            for (let e of i) a.delete(e);
            for (let e of a) t.remove(e);
        },
        OVERLAY_INITIALIZE: (e, t) => {
            let { guilds: n } = e;
            if ((t.clear(), null != n))
                for (let { properties: e, additionalFields: i } of n)
                    t.set(
                        e.id,
                        d.zT(e, {
                            joinedAt: null != i.joinedAt ? new Date(i.joinedAt) : null,
                            premiumSubscriberCount: i.premiumSubscriberCount,
                        }),
                    );
        },
        CACHE_LOADED: (e, t) => {
            let { guilds: n } = e;
            for (let e of (t.clear(), n)) t.set(e.id, d.$O(e));
        },
        CACHE_LOADED_LAZY: (e, t) => {
            let { guilds: n } = e;
            if (0 !== n.length) for (let e of (t.clear(), n)) t.set(e.id, d.$O(e));
        },
        GUILD_CREATE: (e, t) => {
            let { guild: n } = e,
                i = t.get(n.id);
            if (null == n.properties && null == i)
                throw Error("Guild data was missing from store, but hash was still available.");
            t.set(n.id, d.Wj(n, i));
        },
        GUILD_UPDATE: (e, t) => {
            let { guild: n } = e,
                i = t.get(n.id);
            t.set(n.id, d.Y1(n, i));
        },
        GUILD_THEME_PREVIEW_SAVE_SUCCESS: (e, t) => {
            let { guildId: n, guildTheme: i } = e;
            A(t, n, i);
        },
        GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS: (e, t) => {
            let { guildId: n, guildTheme: i } = e;
            A(t, n, i);
        },
        GUILD_DELETE: (e, t) => {
            let { guild: n } = e;
            n.unavailable || t.remove(n.id);
        },
        GUILD_MEMBER_ADD: (e, t) => {
            let { guildId: n, joinedAt: i, user: r } = e,
                a = u.default.getId(),
                s = t.get(n);
            if (a !== r.id || null == s) return;
            let l = "string" == typeof i ? new Date(i) : i;
            l !== s.joinedAt && null != l && t.set(n, (0, o.kn)(s, l));
        },
        GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE: (e, t) => {
            let { guildId: n, gameApplicationIds: i } = e,
                r = t.get(n);
            null != r && t.set(n, (0, o.Fy)(r, i));
        },
    },
    s.P4.getCachedBridgedStoreMode(),
);
