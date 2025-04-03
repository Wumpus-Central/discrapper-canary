n.d(t, { Z: () => p }), n(47120);
var r = n(710845),
    i = n(314897),
    s = n(271383),
    a = n(430824),
    l = n(411198),
    o = n(625137),
    c = n(287328);
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
let g = new r.Z('Guilds'),
    p = new (class {
        async getAsync(e) {
            let t = performance.now(),
                n = await c.Z.guilds(e).getMany(),
                r = performance.now();
            return g.verbose('loaded in '.concat(r - t, 'ms (guilds: ').concat(n.length, ')')), n;
        }
        async getOneAsync(e, t) {
            return await c.Z.guilds(e).get(t);
        }
        handleBackgroundSync(e, t) {
            for (let n of e.guilds) {
                if ('unavailable' === n.data_mode) return;
                let e = a.Z.getGuild(n.id);
                if (null != e) {
                    let r = a.Z.getRoles(n.id),
                        i = 'partial' === n.data_mode ? l.EO(n.id, r, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : (0, o.C5)(n.id, n.roles);
                    this.put(
                        l.rk(l.sp(n, e), {
                            roles: i,
                            member: s.ZP.getSelfMember(n.id)
                        }),
                        t
                    );
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
            let n = a.Z.getGuild(e.guild.id),
                r = l.di(e.guild, n);
            this.put(
                l.rk(r, {
                    roles: (0, o.C5)(e.guild.id, e.guild.roles),
                    member: s.ZP.getSelfMember(e.guild.id)
                }),
                t
            );
        }
        handleGuildDelete(e, t) {
            this.delete(e.guild.id, t);
        }
        handleGuildRoleChange(e, t) {
            let n = a.Z.getGuild(e.guildId),
                r = a.Z.getRoles(e.guildId);
            null != n &&
                this.put(
                    l.rk(n, {
                        roles: m(u({}, r), { [e.role.id]: e.role }),
                        member: s.ZP.getSelfMember(e.guildId)
                    }),
                    t
                );
        }
        handleGuildRoleDelete(e, t) {
            let n = a.Z.getGuild(e.guildId);
            if (null != n) {
                let r = u({}, a.Z.getRoles(e.guildId));
                delete r[e.roleId];
                let i = s.ZP.getSelfMember(e.guildId);
                null != i && (i = m(u({}, i), { roles: i.roles.filter((t) => t !== e.roleId) })),
                    this.put(
                        l.rk(n, {
                            roles: r,
                            member: i
                        }),
                        t
                    );
            }
        }
        handleGuildMemberAdd(e, t) {
            if (null != e.joinedAt && e.user.id === i.default.getId()) {
                let n = a.Z.getGuild(e.guildId);
                null != n &&
                    this.put(
                        l.rk(n.updateJoinedAt(e.joinedAt), {
                            roles: a.Z.getRoles(n.id),
                            member: s.ZP.getSelfMember(n.id)
                        }),
                        t
                    );
            }
        }
        handleGuildMemberUpdate(e, t) {
            if (e.user.id !== i.default.getId()) return;
            let n = a.Z.getGuild(e.guildId);
            null != n &&
                this.put(
                    l.rk(n, {
                        member: {
                            roles: e.roles,
                            userId: e.user.id
                        },
                        roles: a.Z.getRoles(n.id)
                    }),
                    t
                );
        }
        resetInMemoryState() {}
        putOne(e, t) {
            let n = e.members.find((e) => e.user.id === i.default.getId()),
                r = a.Z.getGuild(e.id),
                s = l.rk(l.wD(e, r), {
                    roles: e.roles instanceof Array ? (0, o.C5)(e.id, e.roles) : e.roles,
                    member:
                        null != n
                            ? {
                                  userId: n.user.id,
                                  roles: n.roles
                              }
                            : void 0
                });
            this.put(s, t);
        }
        put(e, t) {
            c.Z.guildsTransaction(t).put(e);
        }
        delete(e, t) {
            c.Z.guildsTransaction(t).delete(e);
        }
        clear(e) {
            c.Z.guildsTransaction(e).delete();
        }
        constructor() {
            d(this, 'actions', {
                BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                GUILD_MEMBER_ADD: (e, t) => this.handleGuildMemberAdd(e, t),
                GUILD_MEMBER_UPDATE: (e, t) => this.handleGuildMemberUpdate(e, t),
                GUILD_ROLE_CREATE: (e, t) => this.handleGuildRoleChange(e, t),
                GUILD_ROLE_DELETE: (e, t) => this.handleGuildRoleDelete(e, t),
                GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleChange(e, t),
                GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
            });
        }
    })();
