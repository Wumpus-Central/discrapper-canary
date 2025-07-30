(n.d(t, { Z: () => p }), n(388685));
var r = n(894276),
    i = n(516888),
    a = n(601964),
    o = n(411198),
    s = n(709054),
    l = n(314897),
    c = n(981631),
    u = n(647086);
function d(e, t, n) {
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
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            }));
    }
    return e;
}
class _ extends i.fE {
    getGuildCount() {
        return this.length();
    }
    constructor(...e) {
        (super(...e),
            d(this, 'getGuild', (e) => {
                if (null != e) return e === c.I_8 ? u.g : this.get(e);
            }),
            d(
                this,
                'getGuilds',
                this.memoized((e) => f({}, e))
            ),
            d(
                this,
                'getGuildsArray',
                this.memoized((e) => Object.values(e))
            ),
            d(
                this,
                'getGuildIds',
                this.memoized((e) => s.default.keys(e))
            ));
    }
}
d(_, 'displayName', 'GuildStore');
let p = new _(
    {
        BACKGROUND_SYNC: (e, t) => {
            let { guilds: n } = e;
            for (let e of n) {
                let n = t.get(e.id);
                null != n && 'unavailable' !== e.data_mode && t.set(e.id, o.sp(e, n));
            }
        },
        CONNECTION_OPEN: (e, t) => {
            let { guilds: n } = e;
            t.reset((e, t) => {
                for (let r of n) e[r.id] = o.wD(r, t[r.id]);
            });
        },
        OVERLAY_INITIALIZE: (e, t) => {
            let { guilds: n } = e;
            t.reset((e) => {
                if (null != n)
                    for (let { properties: t, additionalFields: r } of n)
                        e[t.id] = o.Ee(t, {
                            joinedAt: null != r.joinedAt ? new Date(r.joinedAt) : null,
                            premiumSubscriberCount: r.premiumSubscriberCount
                        });
            });
        },
        CACHE_LOADED: (e, t) => {
            let { guilds: n } = e;
            t.reset((e) => {
                for (let t of n) e[t.id] = o.cL(t);
            });
        },
        CACHE_LOADED_LAZY: (e, t) => {
            let { guilds: n } = e;
            0 !== n.length &&
                t.reset((e) => {
                    for (let t of n) e[t.id] = o.cL(t);
                });
        },
        GUILD_CREATE: (e, t) => {
            let { guild: n } = e;
            t.set(n.id, (e) => o.wD(n, e));
        },
        GUILD_UPDATE: (e, t) => {
            let { guild: n } = e;
            t.set(n.id, (e) => o.R(n, e));
        },
        GUILD_DELETE: (e, t) => {
            let { guild: n } = e;
            n.unavailable || t.remove(n.id);
        },
        GUILD_MEMBER_ADD: (e, t) => {
            let { guildId: n, joinedAt: r, user: i } = e,
                o = l.default.getId(),
                s = t.get(n);
            if (o !== i.id || null == s) return;
            let c = 'string' == typeof r ? new Date(r) : r;
            c !== s.joinedAt && null != c && t.set(n, (0, a.kH)(s, c));
        }
    },
    r.j_.getCachedKvStoreMode()
);
