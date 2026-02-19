n.d(t, { A: () => A });
var i = n(626584),
    s = n(260509),
    a = n(961350),
    l = n(696451),
    r = n(317525),
    o = n(71393),
    c = n(860689),
    d = n(9865),
    u = n(7864),
    _ = n(723176);
let m = new i.A("Guilds"),
    A = new (class {
        async getAsync(e) {
            let t = performance.now(),
                n = await _.A.guilds(e).getMany(),
                i = performance.now();
            return m.verbose(`loaded in ${i - t}ms (guilds: ${n.length})`), n;
        }
        async getOneAsync(e, t) {
            return await _.A.guilds(e).get(t);
        }
        actions = {
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
        };
        handleBackgroundSync(e, t) {
            for (let n of e.guilds) {
                if ("unavailable" === n.data_mode) return;
                let e = o.A.getGuild(n.id);
                if (null != e) {
                    let i = r.A.getUnsafeMutableRoles(n.id),
                        s =
                            "partial" === n.data_mode
                                ? u.ly(n.id, i, n.partial_updates.roles, n.partial_updates.deleted_role_ids)
                                : d.hd(n.id, n.roles);
                    this.put(c.Me(c.kI(n, e), d.cH(s), l.Ay.getSelfMember(n.id)), t);
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
                i = c.Y1(e.guild, n);
            this.put(c.Me(i, d.cH(d.hd(e.guild.id, e.guild.roles)), l.Ay.getSelfMember(e.guild.id)), t);
        }
        handleGuildDelete(e, t) {
            this.delete(e.guild.id, t);
        }
        handleGuildRoleChange(e, t) {
            let n = o.A.getGuild(e.guildId),
                i = r.A.getUnsafeMutableRoles(e.guildId);
            null != n &&
                this.put(
                    c.Me(n, d.cH({ ...i, [e.role.id]: d.Wj(e.guildId, e.role) }), l.Ay.getSelfMember(e.guildId)),
                    t,
                );
        }
        handleGuildRoleDelete(e, t) {
            let n = o.A.getGuild(e.guildId);
            if (null != n) {
                let i = { ...r.A.getUnsafeMutableRoles(e.guildId) };
                delete i[e.roleId];
                let s = l.Ay.getSelfMember(e.guildId);
                null != s && (s = { ...s, roles: s.roles.filter((t) => t !== e.roleId) }),
                    this.put(c.Me(n, d.cH(i), s), t);
            }
        }
        handleGuildMemberAdd(e, t) {
            if (null != e.joinedAt && e.user.id === a.default.getId()) {
                let n = o.A.getGuild(e.guildId);
                null != n &&
                    this.put(
                        c.Me((0, s.kn)(n, e.joinedAt), d.cH(r.A.getUnsafeMutableRoles(n.id)), l.Ay.getSelfMember(n.id)),
                        t,
                    );
            }
        }
        handleGuildMemberUpdate(e, t) {
            if (e.user.id !== a.default.getId()) return;
            let n = o.A.getGuild(e.guildId);
            null != n &&
                this.put(c.Me(n, d.cH(r.A.getUnsafeMutableRoles(n.id)), { roles: e.roles, userId: e.user.id }), t);
        }
        resetInMemoryState() {}
        putOne(e, t) {
            let n = e.members.find((e) => e.user.id === a.default.getId()),
                i = o.A.getGuild(e.id),
                s = d.j_(e.id, e.roles, r.A.getUnsafeMutableRoles(e.id)),
                l = c.Me(c.Wj(e, i), d.cH(s), null != n ? { userId: n.user.id, roles: n.roles } : null);
            this.put(l, t);
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
    })();
