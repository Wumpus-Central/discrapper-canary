n.d(t, { Z: () => u }), n(47120);
var i = n(710845),
    r = n(314897),
    a = n(271383),
    s = n(430824),
    l = n(411198),
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
                let e = s.Z.getGuild(n.id);
                if (null != e) {
                    let i = s.Z.getRoles(n.id),
                        r = 'partial' === n.data_mode ? l.EO(n.id, i, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : (0, o.C5)(n.id, n.roles);
                    this.put(
                        l.rk(l.sp(n, e), {
                            roles: r,
                            member: a.ZP.getSelfMember(n.id)
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
            let n = s.Z.getGuild(e.guild.id),
                i = l.di(e.guild, n);
            this.put(
                l.rk(i, {
                    roles: (0, o.C5)(e.guild.id, e.guild.roles),
                    member: a.ZP.getSelfMember(e.guild.id)
                }),
                t
            );
        }
        handleGuildDelete(e, t) {
            this.delete(e.guild.id, t);
        }
        handleGuildRoleChange(e, t) {
            let n = s.Z.getGuild(e.guildId),
                i = s.Z.getRoles(e.guildId);
            null != n &&
                this.put(
                    l.rk(n, {
                        roles: {
                            ...i,
                            [e.role.id]: e.role
                        },
                        member: a.ZP.getSelfMember(e.guildId)
                    }),
                    t
                );
        }
        handleGuildRoleDelete(e, t) {
            let n = s.Z.getGuild(e.guildId);
            if (null != n) {
                let i = { ...s.Z.getRoles(e.guildId) };
                delete i[e.roleId];
                let r = a.ZP.getSelfMember(e.guildId);
                null != r &&
                    (r = {
                        ...r,
                        roles: r.roles.filter((t) => t !== e.roleId)
                    }),
                    this.put(
                        l.rk(n, {
                            roles: i,
                            member: r
                        }),
                        t
                    );
            }
        }
        handleGuildMemberAdd(e, t) {
            if (null != e.joinedAt && e.user.id === r.default.getId()) {
                let n = s.Z.getGuild(e.guildId);
                null != n &&
                    this.put(
                        l.rk(n.updateJoinedAt(e.joinedAt), {
                            roles: s.Z.getRoles(n.id),
                            member: a.ZP.getSelfMember(n.id)
                        }),
                        t
                    );
            }
        }
        handleGuildMemberUpdate(e, t) {
            if (e.user.id !== r.default.getId()) return;
            let n = s.Z.getGuild(e.guildId);
            null != n &&
                this.put(
                    l.rk(n, {
                        member: {
                            roles: e.roles,
                            userId: e.user.id
                        },
                        roles: s.Z.getRoles(n.id)
                    }),
                    t
                );
        }
        resetInMemoryState() {}
        putOne(e, t) {
            let n = e.members.find((e) => e.user.id === r.default.getId()),
                i = s.Z.getGuild(e.id),
                a = l.rk(l.wD(e, i), {
                    roles: e.roles instanceof Array ? (0, o.C5)(e.id, e.roles) : e.roles,
                    member:
                        null != n
                            ? {
                                  userId: n.user.id,
                                  roles: n.roles
                              }
                            : void 0
                });
            this.put(a, t);
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
