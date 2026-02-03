n.d(t, {
    A: () => y,
}),
    n(896048);
var r = n(357758),
    i = n(867051),
    a = n(548965),
    o = n(942269),
    s = n(260509),
    l = n(860689),
    c = n(661191),
    u = n(961350),
    d = n(652215),
    f = n(349828);

function p(e, t, n) {
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

function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}

function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function g(e) {
    let t = e;
    return (0, i.yE)(
        s.vI,
        m(_({}, t), {
            features: (0, r.y)(t.features),
            joinedAt: null != t.joinedAt ? new Date(t.joinedAt) : null,
            premiumProgressBarEnabledUserUpdatedAt:
                null != t.premiumProgressBarEnabledUserUpdatedAt
                    ? new Date(t.premiumProgressBarEnabledUserUpdatedAt)
                    : null,
        }),
    );
}
class E extends o.yW {
    stateWrapper() {
        return this.database;
    }
    getGuildCount() {
        return this.database.length();
    }
    constructor(...e) {
        super(...e),
            p(this, "database", this.addKVDatabase("guilds", g)),
            p(this, "getGuild", (e) => {
                if (null != e) return e === d.YYv ? f._ : this.database.get(e);
            }),
            p(
                this,
                "getGuilds",
                this.database.memoized((e) => _({}, e)),
            ),
            p(
                this,
                "getGuildsArray",
                this.database.memoized((e) => Object.values(e)),
            ),
            p(
                this,
                "getGuildIds",
                this.database.memoized((e) => c.default.keys(e)),
            );
    }
}
p(E, "displayName", "GuildStore");
let y = new E(
    {
        BACKGROUND_SYNC: (e, t) => {
            let { guilds: n } = e;
            for (let e of n) {
                let n = t.get(e.id);
                null != n && "unavailable" !== e.data_mode && t.set(e.id, l.kI(e, n));
            }
        },
        CONNECTION_OPEN: (e, t) => {
            let { guilds: n } = e,
                r = {};
            for (let e of n) {
                let n = t.get(e.id);
                null != n && (r[e.id] = n);
            }
            for (let e of (t.clear(), n)) t.set(e.id, l.Wj(e, r[e.id]));
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
                a = u.default.getId(),
                o = t.get(n);
            if (a !== i.id || null == o) return;
            let l = "string" == typeof r ? new Date(r) : r;
            l !== o.joinedAt && null != l && t.set(n, (0, s.kn)(o, l));
        },
    },
    a.P4.getCachedBridgedStoreMode(),
);
