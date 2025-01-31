n.d(t, { Z: () => u }), n(47120);
var i = n(710845),
    s = n(314897),
    r = n(271383),
    l = n(430824),
    a = n(411198),
    o = n(625137),
    c = n(287328);
let d = new i.Z('Guilds'),
    u = new (class {
        async getAsync(e) {
            let t = performance.now(),
                n = await c.Z.guilds(e).getMany(),
                i = performance.now();
            return d.verbose('loaded in '.concat(i - t, 'ms (guilds: ').concat(n.length, ')')), n;
        }
        async getOneAsync(e, t) {
            return await c.Z.guilds(e).get(t);
        }
        handleBackgroundSync(e, t) {
            for (let n of e.guilds) {
                if ('unavailable' === n.data_mode) return;
                let e = l.Z.getGuild(n.id);
                if (null != e) {
                    let i = l.Z.getRoles(n.id),
                        s = 'partial' === n.data_mode ? a.EO(n.id, i, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : (0, o.C5)(n.id, n.roles);
                    this.put(
                        a.rk(a.sp(n, e), {
                            roles: s,
                            member: r.ZP.getSelfMember(n.id)
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
            let n = l.Z.getGuild(e.guild.id),
                i = a.di(e.guild, n);
            this.put(
                a.rk(i, {
                    roles: (0, o.C5)(e.guild.id, e.guild.roles),
                    member: r.ZP.getSelfMember(e.guild.id)
                }),
                t
            );
        }
        handleGuildDelete(e, t) {
            this.delete(e.guild.id, t);
        }
        handleGuildRoleChange(e, t) {
            let n = l.Z.getGuild(e.guildId),
                i = l.Z.getRoles(e.guildId);
            null != n &&
                this.put(
                    a.rk(n, {
                        roles: {
                            ...i,
                            [e.role.id]: e.role
                        },
                        member: r.ZP.getSelfMember(e.guildId)
                    }),
                    t
                );
        }
        handleGuildRoleDelete(e, t) {
            let n = l.Z.getGuild(e.guildId);
            if (null != n) {
                let i = { ...l.Z.getRoles(e.guildId) };
                delete i[e.roleId];
                let s = r.ZP.getSelfMember(e.guildId);
                null != s &&
                    (s = {
                        ...s,
                        roles: s.roles.filter((t) => t !== e.roleId)
                    }),
                    this.put(
                        a.rk(n, {
                            roles: i,
                            member: s
                        }),
                        t
                    );
            }
        }
        handleGuildMemberAdd(e, t) {
            if (null != e.joinedAt && e.user.id === s.default.getId()) {
                let n = l.Z.getGuild(e.guildId);
                null != n &&
                    this.put(
                        a.rk(n.updateJoinedAt(e.joinedAt), {
                            roles: l.Z.getRoles(n.id),
                            member: r.ZP.getSelfMember(n.id)
                        }),
                        t
                    );
            }
        }
        handleGuildMemberUpdate(e, t) {
            if (e.user.id !== s.default.getId()) return;
            let n = l.Z.getGuild(e.guildId);
            null != n &&
                this.put(
                    a.rk(n, {
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
            let n = e.members.find((e) => e.user.id === s.default.getId()),
                i = l.Z.getGuild(e.id),
                r = a.rk(a.wD(e, i), {
                    roles: e.roles instanceof Array ? (0, o.C5)(e.id, e.roles) : e.roles,
                    member:
                        null != n
                            ? {
                                  userId: n.user.id,
                                  roles: n.roles
                              }
                            : void 0
                });
            this.put(r, t);
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
            var e, t;
            (e = 'actions'),
                (t = {
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
                }),
                e in this
                    ? Object.defineProperty(this, e, {
                          value: t,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      })
                    : (this[e] = t);
        }
    })();
