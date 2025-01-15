n(47120);
var i = n(710845),
    r = n(314897),
    s = n(271383),
    a = n(430824),
    l = n(411198),
    o = n(625137),
    c = n(287328);
let d = new i.Z('Guilds');
t.Z = new (class e {
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
            let e = a.Z.getGuild(n.id);
            if (null != e) {
                let i = a.Z.getRoles(n.id),
                    r = 'partial' === n.data_mode ? l.EO(n.id, i, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : (0, o.C5)(n.id, n.roles);
                this.put(
                    l.rk(l.sp(n, e), {
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
            i = l.di(e.guild, n);
        this.put(
            l.rk(i, {
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
            i = a.Z.getRoles(e.guildId);
        null != n &&
            this.put(
                l.rk(n, {
                    roles: {
                        ...i,
                        [e.role.id]: e.role
                    },
                    member: s.ZP.getSelfMember(e.guildId)
                }),
                t
            );
    }
    handleGuildRoleDelete(e, t) {
        let n = a.Z.getGuild(e.guildId);
        if (null != n) {
            let i = { ...a.Z.getRoles(e.guildId) };
            delete i[e.roleId];
            let r = s.ZP.getSelfMember(e.guildId);
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
        if (e.user.id !== r.default.getId()) return;
        let n = a.Z.getGuild(e.guildId);
        if (null != n)
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
        let n = e.members.find((e) => e.user.id === r.default.getId()),
            i = a.Z.getGuild(e.id),
            s = l.rk(l.wD(e, i), {
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
        var e, t, n;
        (e = this),
            (t = 'actions'),
            (n = {
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
            t in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[t] = n);
    }
})();
