n.d(t, {
    A: () => b,
}),
    n(896048);
var r = n(626584),
    i = n(260509),
    a = n(961350),
    s = n(696451),
    o = n(317525),
    l = n(71393),
    c = n(860689),
    u = n(9865),
    d = n(7864),
    f = n(723176);

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
let g = new r.A("Guilds");
class E {
    async getAsync(e) {
        let t = performance.now(),
            n = await f.A.guilds(e).getMany(),
            r = performance.now();
        return g.verbose("loaded in ".concat(r - t, "ms (guilds: ").concat(n.length, ")")), n;
    }
    async getOneAsync(e, t) {
        return await f.A.guilds(e).get(t);
    }
    handleBackgroundSync(e, t) {
        for (let n of e.guilds) {
            if ("unavailable" === n.data_mode) return;
            let e = l.A.getGuild(n.id);
            if (null != e) {
                let r = o.A.getUnsafeMutableRoles(n.id),
                    i =
                        "partial" === n.data_mode
                            ? d.ly(n.id, r, n.partial_updates.roles, n.partial_updates.deleted_role_ids)
                            : u.hd(n.id, n.roles);
                this.put(c.Me(c.kI(n, e), u.cH(i), s.Ay.getSelfMember(n.id)), t);
            }
        }
    }
    handleConnectionOpen(e, t) {
        for (let n of (this.clear(t), e.guilds)) this.putOne(n, t);
    }
    handleGuildCreate(e, t) {
        this.putOne(e.guild, t);
    }
    handleGuildUpdate(e, t) {
        let n = l.A.getGuild(e.guild.id),
            r = c.Y1(e.guild, n);
        this.put(c.Me(r, u.cH(u.hd(e.guild.id, e.guild.roles)), s.Ay.getSelfMember(e.guild.id)), t);
    }
    handleGuildDelete(e, t) {
        this.delete(e.guild.id, t);
    }
    handleGuildRoleChange(e, t) {
        let n = l.A.getGuild(e.guildId),
            r = o.A.getUnsafeMutableRoles(e.guildId);
        null != n &&
            this.put(
                c.Me(
                    n,
                    u.cH(
                        m(_({}, r), {
                            [e.role.id]: u.Wj(e.guildId, e.role),
                        }),
                    ),
                    s.Ay.getSelfMember(e.guildId),
                ),
                t,
            );
    }
    handleGuildRoleDelete(e, t) {
        let n = l.A.getGuild(e.guildId);
        if (null != n) {
            let r = _({}, o.A.getUnsafeMutableRoles(e.guildId));
            delete r[e.roleId];
            let i = s.Ay.getSelfMember(e.guildId);
            null != i &&
                (i = m(_({}, i), {
                    roles: i.roles.filter((t) => t !== e.roleId),
                })),
                this.put(c.Me(n, u.cH(r), i), t);
        }
    }
    handleGuildMemberAdd(e, t) {
        if (null != e.joinedAt && e.user.id === a.default.getId()) {
            let n = l.A.getGuild(e.guildId);
            null != n &&
                this.put(
                    c.Me((0, i.kn)(n, e.joinedAt), u.cH(o.A.getUnsafeMutableRoles(n.id)), s.Ay.getSelfMember(n.id)),
                    t,
                );
        }
    }
    handleGuildMemberUpdate(e, t) {
        if (e.user.id !== a.default.getId()) return;
        let n = l.A.getGuild(e.guildId);
        null != n &&
            this.put(
                c.Me(n, u.cH(o.A.getUnsafeMutableRoles(n.id)), {
                    roles: e.roles,
                    userId: e.user.id,
                }),
                t,
            );
    }
    resetInMemoryState() {}
    putOne(e, t) {
        let n = e.members.find((e) => e.user.id === a.default.getId()),
            r = l.A.getGuild(e.id),
            i = c.Me(
                c.Wj(e, r),
                u.cH(e.roles instanceof Array ? u.hd(e.id, e.roles) : e.roles),
                null != n
                    ? {
                          userId: n.user.id,
                          roles: n.roles,
                      }
                    : null,
            );
        this.put(i, t);
    }
    put(e, t) {
        f.A.guildsTransaction(t).put(e);
    }
    delete(e, t) {
        f.A.guildsTransaction(t).delete(e);
    }
    clear(e) {
        f.A.guildsTransaction(e).delete();
    }
    constructor() {
        p(this, "actions", {
            BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
            CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
            GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
            GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
            GUILD_MEMBER_ADD: (e, t) => this.handleGuildMemberAdd(e, t),
            GUILD_MEMBER_UPDATE: (e, t) => this.handleGuildMemberUpdate(e, t),
            GUILD_ROLE_CREATE: (e, t) => this.handleGuildRoleChange(e, t),
            GUILD_ROLE_DELETE: (e, t) => this.handleGuildRoleDelete(e, t),
            GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleChange(e, t),
            GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t),
        });
    }
}
let b = new E();
