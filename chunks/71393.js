n.d(t, { A: () => p }), n(896048);
var r = n(23974),
    i = n(260509),
    a = n(860689),
    s = n(661191),
    o = n(961350),
    l = n(652215),
    c = n(349828);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
class f extends r.f {
    getGuildCount() {
        return this.length();
    }
    constructor(...e) {
        super(...e),
            u(this, "getGuild", (e) => {
                if (null != e) return e === l.YYv ? c._ : this.get(e);
            }),
            u(
                this,
                "getGuilds",
                this.memoized((e) => d({}, e)),
            ),
            u(
                this,
                "getGuildsArray",
                this.memoized((e) => Object.values(e)),
            ),
            u(
                this,
                "getGuildIds",
                this.memoized((e) => s.default.keys(e)),
            );
    }
}
u(f, "displayName", "GuildStore");
let p = new f(
    {
        BACKGROUND_SYNC: (e, t) => {
            let { guilds: n } = e;
            for (let e of n) {
                let n = t.get(e.id);
                null != n && "unavailable" !== e.data_mode && t.set(e.id, a.kI(e, n));
            }
        },
        CONNECTION_OPEN: (e, t) => {
            let { guilds: n } = e;
            t.reset((e, t) => {
                for (let r of n) e[r.id] = a.Wj(r, t[r.id]);
            });
        },
        OVERLAY_INITIALIZE: (e, t) => {
            let { guilds: n } = e;
            t.reset((e) => {
                if (null != n)
                    for (let { properties: t, additionalFields: r } of n)
                        e[t.id] = a.zT(t, {
                            joinedAt: null != r.joinedAt ? new Date(r.joinedAt) : null,
                            premiumSubscriberCount: r.premiumSubscriberCount,
                        });
            });
        },
        CACHE_LOADED: (e, t) => {
            let { guilds: n } = e;
            t.reset((e) => {
                for (let t of n) e[t.id] = a.$O(t);
            });
        },
        CACHE_LOADED_LAZY: (e, t) => {
            let { guilds: n } = e;
            0 !== n.length &&
                t.reset((e) => {
                    for (let t of n) e[t.id] = a.$O(t);
                });
        },
        GUILD_CREATE: (e, t) => {
            let { guild: n } = e;
            t.set(n.id, (e) => a.Wj(n, e));
        },
        GUILD_UPDATE: (e, t) => {
            let { guild: n } = e;
            t.set(n.id, (e) => a.Y1(n, e));
        },
        GUILD_DELETE: (e, t) => {
            let { guild: n } = e;
            n.unavailable || t.remove(n.id);
        },
        GUILD_MEMBER_ADD: (e, t) => {
            let { guildId: n, joinedAt: r, user: a } = e,
                s = o.default.getId(),
                l = t.get(n);
            if (s !== a.id || null == l) return;
            let c = "string" == typeof r ? new Date(r) : r;
            c !== l.joinedAt && null != c && t.set(n, (0, i.kn)(l, c));
        },
    },
    "libdiscore",
);
