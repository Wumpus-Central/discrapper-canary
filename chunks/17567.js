n.d(t, { Z: () => h }), n(388685);
var i = n(710845),
    r = n(314897),
    s = n(271383),
    l = n(485386),
    a = n(430824),
    o = n(411198),
    c = n(625137),
    d = n(287328);
function u(e, t, n) {
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
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                u(e, t, n[t]);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = new i.Z('Guilds'),
    h = new (class {
        async getAsync(e) {
            let t = performance.now(),
                n = await d.Z.guilds(e).getMany(),
                i = performance.now();
            return p.verbose('loaded in '.concat(i - t, 'ms (guilds: ').concat(n.length, ')')), n;
        }
        async getOneAsync(e, t) {
            return await d.Z.guilds(e).get(t);
        }
        handleBackgroundSync(e, t) {
            for (let n of e.guilds) {
                if ('unavailable' === n.data_mode) return;
                let e = a.Z.getGuild(n.id);
                if (null != e) {
                    let i = l.Z.getRoles(n.id),
                        r = 'partial' === n.data_mode ? o.EO(n.id, i, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : (0, c.C5)(n.id, n.roles);
                    this.put(
                        o.rk(o.sp(n, e), {
                            roles: r,
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
                i = o.di(e.guild, n);
            this.put(
                o.rk(i, {
                    roles: (0, c.C5)(e.guild.id, e.guild.roles),
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
                i = l.Z.getRoles(e.guildId);
            null != n &&
                this.put(
                    o.rk(n, {
                        roles: g(m({}, i), { [e.role.id]: e.role }),
                        member: s.ZP.getSelfMember(e.guildId)
                    }),
                    t
                );
        }
        handleGuildRoleDelete(e, t) {
            let n = a.Z.getGuild(e.guildId);
            if (null != n) {
                let i = m({}, l.Z.getRoles(e.guildId));
                delete i[e.roleId];
                let r = s.ZP.getSelfMember(e.guildId);
                null != r && (r = g(m({}, r), { roles: r.roles.filter((t) => t !== e.roleId) })),
                    this.put(
                        o.rk(n, {
                            roles: i,
                            member: r
                        }),
                        t
                    );
            }
        }
        handleGuildMemberAdd(e, t) {
            if (null != e.joinedAt && e.user.id === r.default.getId()) {
                let n = a.Z.getGuild(e.guildId);
                null != n &&
                    this.put(
                        o.rk(n.updateJoinedAt(e.joinedAt), {
                            roles: l.Z.getRoles(n.id),
                            member: s.ZP.getSelfMember(n.id)
                        }),
                        t
                    );
            }
        }
        handleGuildMemberUpdate(e, t) {
            if (e.user.id !== r.default.getId()) return;
            let n = a.Z.getGuild(e.guildId);
            null != n &&
                this.put(
                    o.rk(n, {
                        member: {
                            roles: e.roles,
                            userId: e.user.id
                        },
                        roles: l.Z.getRoles(n.id)
                    }),
                    t
                );
        }
        resetInMemoryState() {}
        putOne(e, t) {
            let n = e.members.find((e) => e.user.id === r.default.getId()),
                i = a.Z.getGuild(e.id),
                s = o.rk(o.wD(e, i), {
                    roles: e.roles instanceof Array ? (0, c.C5)(e.id, e.roles) : e.roles,
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
            d.Z.guildsTransaction(t).put(e);
        }
        delete(e, t) {
            d.Z.guildsTransaction(t).delete(e);
        }
        clear(e) {
            d.Z.guildsTransaction(e).delete();
        }
        constructor() {
            u(this, 'actions', {
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
