n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(626584),
    i = n(260509),
    l = n(961350),
    s = n(696451),
    a = n(317525),
    o = n(71393),
    c = n(860689),
    d = n(9865),
    u = n(7864),
    _ = n(723176);

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

function m(e) {
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

function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = new r.A("Guilds"),
    f = new (class {
        async getAsync(e) {
            let t = performance.now(),
                n = await _.A.guilds(e).getMany(),
                r = performance.now();
            return A.verbose("loaded in ".concat(r - t, "ms (guilds: ").concat(n.length, ")")), n;
        }
        async getOneAsync(e, t) {
            return await _.A.guilds(e).get(t);
        }
        handleBackgroundSync(e, t) {
            for (let n of e.guilds) {
                if ("unavailable" === n.data_mode) return;
                let e = o.A.getGuild(n.id);
                if (null != e) {
                    let r = a.A.getUnsafeMutableRoles(n.id),
                        i =
                            "partial" === n.data_mode
                                ? u.ly(n.id, r, n.partial_updates.roles, n.partial_updates.deleted_role_ids)
                                : d.hd(n.id, n.roles);
                    this.put(c.Me(c.kI(n, e), d.cH(i), s.Ay.getSelfMember(n.id)), t);
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
            let n = o.A.getGuild(e.guild.id),
                r = c.Y1(e.guild, n);
            this.put(c.Me(r, d.cH(d.hd(e.guild.id, e.guild.roles)), s.Ay.getSelfMember(e.guild.id)), t);
        }
        handleGuildDelete(e, t) {
            this.delete(e.guild.id, t);
        }
        handleGuildRoleChange(e, t) {
            let n = o.A.getGuild(e.guildId),
                r = a.A.getUnsafeMutableRoles(e.guildId);
            null != n &&
                this.put(
                    c.Me(
                        n,
                        d.cH(
                            g(m({}, r), {
                                [e.role.id]: d.Wj(e.guildId, e.role),
                            }),
                        ),
                        s.Ay.getSelfMember(e.guildId),
                    ),
                    t,
                );
        }
        handleGuildRoleDelete(e, t) {
            let n = o.A.getGuild(e.guildId);
            if (null != n) {
                let r = m({}, a.A.getUnsafeMutableRoles(e.guildId));
                delete r[e.roleId];
                let i = s.Ay.getSelfMember(e.guildId);
                null != i &&
                    (i = g(m({}, i), {
                        roles: i.roles.filter((t) => t !== e.roleId),
                    })),
                    this.put(c.Me(n, d.cH(r), i), t);
            }
        }
        handleGuildMemberAdd(e, t) {
            if (null != e.joinedAt && e.user.id === l.default.getId()) {
                let n = o.A.getGuild(e.guildId);
                null != n &&
                    this.put(
                        c.Me((0, i.kn)(n, e.joinedAt), d.cH(a.A.getUnsafeMutableRoles(n.id)), s.Ay.getSelfMember(n.id)),
                        t,
                    );
            }
        }
        handleGuildMemberUpdate(e, t) {
            if (e.user.id !== l.default.getId()) return;
            let n = o.A.getGuild(e.guildId);
            null != n &&
                this.put(
                    c.Me(n, d.cH(a.A.getUnsafeMutableRoles(n.id)), {
                        roles: e.roles,
                        userId: e.user.id,
                    }),
                    t,
                );
        }
        resetInMemoryState() {}
        putOne(e, t) {
            let n = e.members.find((e) => e.user.id === l.default.getId()),
                r = o.A.getGuild(e.id),
                i = c.Me(
                    c.Wj(e, r),
                    d.cH(e.roles instanceof Array ? d.hd(e.id, e.roles) : e.roles),
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
            _.A.guildsTransaction(t).put(e);
        }
        delete(e, t) {
            _.A.guildsTransaction(t).delete(e);
        }
        clear(e) {
            _.A.guildsTransaction(e).delete();
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
    })();
