n.d(t, { A: () => _ });
var i = n(626584),
    r = n(260509),
    a = n(961350),
    l = n(696451),
    s = n(317525),
    o = n(71393),
    d = n(860689),
    u = n(9865),
    c = n(7864),
    A = n(723176);
let h = new i.A("Guilds"),
    _ = new (class {
        async getAsync(e) {
            let t = performance.now(),
                n = await A.A.guilds(e).getMany(),
                i = performance.now();
            return h.verbose(`loaded in ${i - t}ms (guilds: ${n.length})`), n;
        }
        async getOneAsync(e, t) {
            return await A.A.guilds(e).get(t);
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
                if ("unavailable" === n.data_mode) continue;
                let e = o.A.getGuild(n.id);
                if (null != e) {
                    let i = s.A.getUnsafeMutableRoles(n.id),
                        r =
                            "partial" === n.data_mode
                                ? c.ly(n.id, i, n.partial_updates.roles, n.partial_updates.deleted_role_ids)
                                : u.hd(n.id, n.roles);
                    this.put(d.Me(d.kI(n, e), u.cH(r), l.Ay.getSelfMember(n.id)), t);
                }
            }
        }
        handleConnectionOpen(e, t) {
            let n = [...e.guilds.map((e) => e.id), ...e.unavailableGuilds];
            for (let i of (A.A.guildsTransaction(t).deleteAllExcept(n), e.guilds)) this.putOne(i, t);
        }
        handleGuildCreate(e, t) {
            this.putOne(e.guild, t);
        }
        handleGuildUpdate(e, t) {
            let n = o.A.getGuild(e.guild.id),
                i = d.Y1(e.guild, n);
            this.put(d.Me(i, u.cH(u.hd(e.guild.id, e.guild.roles)), l.Ay.getSelfMember(e.guild.id)), t);
        }
        handleGuildDelete(e, t) {
            this.delete(e.guild.id, t);
        }
        handleGuildRoleChange(e, t) {
            let n = o.A.getGuild(e.guildId),
                i = s.A.getUnsafeMutableRoles(e.guildId);
            null != n &&
                this.put(
                    d.Me(n, u.cH({ ...i, [e.role.id]: u.Wj(e.guildId, e.role) }), l.Ay.getSelfMember(e.guildId)),
                    t,
                );
        }
        handleGuildRoleDelete(e, t) {
            let n = o.A.getGuild(e.guildId);
            if (null != n) {
                let i = { ...s.A.getUnsafeMutableRoles(e.guildId) };
                delete i[e.roleId];
                let r = l.Ay.getSelfMember(e.guildId);
                null != r && (r = { ...r, roles: r.roles.filter((t) => t !== e.roleId) }),
                    this.put(d.Me(n, u.cH(i), r), t);
            }
        }
        handleGuildMemberAdd(e, t) {
            if (null != e.joinedAt && e.user.id === a.default.getId()) {
                let n = o.A.getGuild(e.guildId);
                null != n &&
                    this.put(
                        d.Me((0, r.kn)(n, e.joinedAt), u.cH(s.A.getUnsafeMutableRoles(n.id)), l.Ay.getSelfMember(n.id)),
                        t,
                    );
            }
        }
        handleGuildMemberUpdate(e, t) {
            if (e.user.id !== a.default.getId()) return;
            let n = o.A.getGuild(e.guildId);
            null != n &&
                this.put(d.Me(n, u.cH(s.A.getUnsafeMutableRoles(n.id)), { roles: e.roles, userId: e.user.id }), t);
        }
        resetInMemoryState() {}
        putOne(e, t) {
            let n = e.members.find((e) => e.user.id === a.default.getId()),
                i = o.A.getGuild(e.id),
                r = u.j_(e.id, e.roles, s.A.getUnsafeMutableRoles(e.id)),
                l = d.Me(d.Wj(e, i), u.cH(r), null != n ? { userId: n.user.id, roles: n.roles } : null);
            this.put(l, t);
        }
        put(e, t) {
            A.A.guildsTransaction(t).put(e);
        }
        delete(e, t) {
            A.A.guildsTransaction(t).delete(e);
        }
    })();
