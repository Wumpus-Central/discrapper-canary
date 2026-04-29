n(539895), n(933958);
var l = n(17928),
    i = n(228366);
let s = !1;
function a() {
    s = !1;
}
class r extends l.Ay.Store {
    isTogglesDisabled() {
        return s;
    }
}
new r(i.h, {
    AD_PERSONALIZATION_TOGGLES_RESTRICTED: function (e) {
        s = e.disabled ?? !1;
    },
    CONNECTION_OPEN: a,
    LOGOUT: a,
}),
    n(787301),
    n(240525);
var u = n(453001);
n(753027), n(989837), n(166862), n(264322), n(861382), n(587895), n(715314);
var d = n(61090);
n(237751);
var o = n(506774),
    c = n(154049);
n(321073);
var h = n(136722),
    g = n(937724),
    A = n(626584),
    C = n(446458),
    _ = n(95701),
    m = n(495544),
    f = n(734057),
    p = n(317525),
    S = n(71393),
    E = n(576705),
    y = n(799422),
    I = n(723176);
let T = new A.A("GuildBasicChannels");
function v(e, t) {
    return (
        null == e ||
        e.type !== t.type ||
        e.parent_id !== t.parent_id ||
        E.A.computeBasicPermissions(e) !== E.A.computeBasicPermissions(t)
    );
}
let N = new (class {
    synced = null;
    async getAsync(e) {
        let t = performance.now(),
            [n, l] = await Promise.all([
                I.A.basicChannels(e).getKvEntries(),
                I.A.syncedBasicChannels(e).getKvEntries(),
            ]),
            i = performance.now() - t,
            [s, a] = (function (e) {
                let t = [],
                    n = [];
                for (let [l, i] of e) (i ? t : n).push(l);
                return [t, n];
            })(l),
            r = new Set(s);
        return (
            (this.synced = r),
            T.verbose(`loaded in ${i}ms (guilds: ${n.length}, synced: ${r.size} unsynced: ${a.length})`),
            {
                all: n,
                stale: a,
                channels: n.filter((e) => {
                    let [t, n] = e;
                    return r.has(t);
                }),
            }
        );
    }
    actions = {
        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
        CHANNEL_CREATE: (e, t) => this.handleChannelCreate(e, t),
        CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
        CHANNEL_UPDATES: (e, t) => this.handleChannelUpdates(e, t),
        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
        GUILD_MEMBER_UPDATE: (e, t) => this.handleGuildMemberUpdate(e, t),
        GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleUpdate(e, t),
        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t),
        POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
        WRITE_CACHES: (e, t) => this.handleWriteCaches(e, t),
    };
    handleChannelCreate(e, t) {
        null != e.channel.guild_id && this.unsync(e.channel.guild_id, t);
    }
    handleChannelDelete(e, t) {
        null != e.channel.guild_id && this.unsync(e.channel.guild_id, t);
    }
    handleChannelUpdates(e, t) {
        for (let n of e.channels.filter((e) => null != e.guild_id))
            v(f.A.getBasicChannel(n.id), n) && this.unsync(n.guild_id, t);
    }
    handleBackgroundSync(e, t) {
        for (let n of e.guilds)
            switch (n.data_mode) {
                case "unavailable":
                    break;
                case "partial":
                    let e = (e) => (0, _.UE)(e, n.id);
                    this.onGuildUpdate(
                        n.id,
                        n.partial_updates.channels?.map(e) ?? [],
                        n.partial_updates.deleted_channel_ids ?? [],
                        t,
                    );
                    break;
                default:
                    this.onGuildSync(n.id, t);
            }
    }
    handleConnectionOpen(e, t) {
        for (let n of e.guilds) this.handleOneGuildCreate(n, t);
    }
    async handlePostConnectionOpen() {
        let e = C.A.lastTimeConnectedChanged(),
            t = I.A.database();
        if (null == this.synced || null == t || !(0, g.O)()) return;
        let n = S.A.getGuildIds(),
            l = n.filter((e) => !this.synced.has(e));
        for (let i of (T.verbose(`scheduling basic_channel optimstic writes (guilds: ${l.length})`), n)) {
            if (null == this.synced || t !== I.A.database() || e !== C.A.lastTimeConnectedChanged()) break;
            if (!this.synced.has(i)) {
                T.verbose(`optimstically writing basic_channels (guild: ${i})`);
                try {
                    await f.D.loadGuildIds([i]),
                        await t.transaction((e) => this.syncOne(i, e), "handlePostConnectionOpen");
                } catch (e) {
                    T.warn("couldn't optimstically write basic_channel:", e);
                    return;
                }
                await new Promise((e) => setTimeout(e, 1e3));
            }
        }
    }
    handleGuildCreate(e, t) {
        this.handleOneGuildCreate(e.guild, t);
    }
    handleOneGuildCreate(e, t) {
        let { id: n, channels: l } = e;
        switch (l.op) {
            case "full_sync":
                this.onGuildSync(n, t);
                break;
            case "update":
                this.onGuildUpdate(n, l.writes, l.deletes, t);
        }
    }
    handleGuildUpdate(e, t) {
        this.unsync(e.guild.id, t);
    }
    handleGuildDelete(e, t) {
        !0 !== e.guild.unavailable && this.delete(e.guild.id, t);
    }
    handleGuildRoleUpdate(e, t) {
        let n = e.role,
            l = p.A.getRole(e.guildId, n.id);
        (null != l && h.aI(h.iu(n.permissions), l.permissions)) || this.unsync(e.guildId, t);
    }
    handleGuildMemberUpdate(e, t) {
        e.user.id === m.default.getId() && this.unsync(e.guildId, t);
    }
    handleWriteCaches(e, t) {
        this.sync(t);
    }
    resetInMemoryState() {
        this.synced = null;
    }
    onGuildUpdate(e, t, n, l) {
        (n.length > 0 || t.some((e) => v(f.A.getBasicChannel(e.id), e))) && this.unsync(e, l);
    }
    onGuildSync(e, t) {
        this.unsync(e, t);
    }
    delete(e, t) {
        this.unsync(e, t), I.A.basicChannelsTransaction(t).delete(e), I.A.syncedBasicChannelsTransaction(t).delete(e);
    }
    unsync(e, t) {
        this.synced?.delete(e),
            I.A.basicChannelsTransaction(t).delete(e),
            I.A.syncedBasicChannelsTransaction(t).put(e, !1),
            u.A.invalidate(e);
    }
    sync(e) {
        T.verbose("Starting to write all basic channels");
        let t = performance.now(),
            n = { written: 0, skipped: 0 };
        for (let t of S.A.getGuildIds()) this.syncOne(t, e) ? n.written++ : n.skipped++;
        let l = performance.now() - t;
        T.verbose(`${n.written} basic_channel guilds submitted (took: ${l}ms, skipped: ${n.skipped} guilds)`);
    }
    syncOne(e, t) {
        var n;
        return (
            !(null == S.A.getGuild(e) || this.synced?.has(e)) &&
            (this.synced?.add(e),
            I.A.basicChannelsTransaction(t).put(
                e,
                ((n = e),
                Object.values(f.A.getMutableGuildChannelsForGuild(n)).map((e) => ({
                    id: e.id,
                    type: e.type,
                    guild_id: e.guild_id,
                    parent_id: e.parent_id,
                    basicPermissions: y.A.asBasicFlag(E.A.computePermissions(e)),
                }))),
            ),
            I.A.syncedBasicChannelsTransaction(t).put(e, !0),
            !0)
        );
    }
})();
var D = n(260509),
    b = n(696451),
    O = n(860689),
    w = n(9865),
    G = n(7864),
    L = n(38405);
let U = new A.A("Guilds"),
    R = new (class {
        async getAsync(e) {
            let t = performance.now(),
                n = await I.A.guilds(e).getMany(),
                l = performance.now();
            return U.verbose(`loaded in ${l - t}ms (guilds: ${n.length})`), n;
        }
        async getOneAsync(e, t) {
            return await I.A.guilds(e).get(t);
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
                let e = S.A.getGuild(n.id);
                if (null != e) {
                    let l = p.A.getUnsafeMutableRoles(n.id),
                        i =
                            "partial" === n.data_mode
                                ? G.ly(n.id, l, n.partial_updates.roles, n.partial_updates.deleted_role_ids)
                                : w.hd(n.id, n.roles);
                    this.put(O.Me(O.kI(n, e), w.cH(i), b.Ay.getSelfMember(n.id)), t);
                }
            }
        }
        handleConnectionOpen(e, t) {
            let n = [...e.guilds.map((e) => e.id), ...e.unavailableGuilds];
            for (let l of (I.A.guildsTransaction(t).deleteAllExcept(n), e.guilds)) this.putOne(l, t);
        }
        handleGuildCreate(e, t) {
            this.putOne(e.guild, t);
        }
        handleGuildUpdate(e, t) {
            let n = S.A.getGuild(e.guild.id),
                l = O.Y1(e.guild, n);
            this.put(O.Me(l, w.cH(w.hd(e.guild.id, e.guild.roles)), b.Ay.getSelfMember(e.guild.id)), t);
        }
        handleGuildDelete(e, t) {
            this.delete(e.guild.id, t);
        }
        handleGuildRoleChange(e, t) {
            let n = S.A.getGuild(e.guildId),
                l = p.A.getUnsafeMutableRoles(e.guildId);
            null != n &&
                this.put(
                    O.Me(n, w.cH({ ...l, [e.role.id]: w.Wj(e.guildId, e.role) }), b.Ay.getSelfMember(e.guildId)),
                    t,
                );
        }
        handleGuildRoleDelete(e, t) {
            let n = S.A.getGuild(e.guildId);
            if (null != n) {
                let l = { ...p.A.getUnsafeMutableRoles(e.guildId) };
                delete l[e.roleId];
                let i = b.Ay.getSelfMember(e.guildId);
                null != i && (i = { ...i, roles: i.roles.filter((t) => t !== e.roleId) }),
                    this.put(O.Me(n, w.cH(l), i), t);
            }
        }
        handleGuildMemberAdd(e, t) {
            if (null != e.joinedAt && e.user.id === m.default.getId()) {
                let n = S.A.getGuild(e.guildId);
                null != n &&
                    this.put(
                        O.Me((0, D.kn)(n, e.joinedAt), w.cH(p.A.getUnsafeMutableRoles(n.id)), b.Ay.getSelfMember(n.id)),
                        t,
                    );
            }
        }
        handleGuildMemberUpdate(e, t) {
            if (e.user.id !== m.default.getId()) return;
            let n = S.A.getGuild(e.guildId);
            null != n &&
                this.put(O.Me(n, w.cH(p.A.getUnsafeMutableRoles(n.id)), { roles: e.roles, userId: e.user.id }), t);
        }
        resetInMemoryState() {}
        putOne(e, t) {
            let n = e.members.find((e) => e.user.id === m.default.getId()),
                l = S.A.getGuild(e.id);
            if (null == e.properties && null == l)
                return void L.A.captureMessage(
                    "AppDatabase Guilds.putOne skipped: partial payload without cached record",
                );
            let i = w.j_(e.id, e.roles, p.A.getUnsafeMutableRoles(e.id)),
                s = O.Me(O.Wj(e, l), w.cH(i), null != n ? { userId: n.user.id, roles: n.roles } : null);
            this.put(s, t);
        }
        put(e, t) {
            I.A.guildsTransaction(t).put(e);
        }
        delete(e, t) {
            I.A.guildsTransaction(t).delete(e);
        }
    })();
var P = n(314732),
    k = n(586660),
    M = n(214771),
    j = n(735438),
    x = n.n(j),
    H = n(222823),
    V = n(935208);
let $ = new A.A("ReadStates"),
    F = new (class {
        readStateVersion = null;
        async getAll(e) {
            let t = performance.now(),
                n = await I.A.readStates(e).getMany(),
                l = performance.now();
            return $.log(`asynchronously loaded in ${l - t}ms (readStates: ${n.length})`), n;
        }
        actions = {
            CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
            CHANNEL_PINS_ACK: (e) => this.handleReadStateAction(e),
            MESSAGE_ACK: (e) => this.handleReadStateAction(e),
            BACKGROUND_SYNC_FINISHED: (e, t) => {
                e.messagesOnly || this.handleWriteCaches(t, !1);
            },
            WRITE_CACHES: (e, t) => this.handleWriteCaches(t, !0),
        };
        resetInMemoryState() {
            this.readStateVersion = null;
        }
        handleConnectionOpen(e) {
            this.readStateVersion = e.readState.version;
        }
        handleReadStateAction(e) {
            null != this.readStateVersion &&
                (null != e.version
                    ? (this.readStateVersion = e.version)
                    : $.log("Received null read states version", e));
        }
        handleWriteCaches(e, t) {
            let n = H.Ay.getAllReadStates(!1);
            if (t) {
                if (null == this.readStateVersion) return;
                let t = "0",
                    l = "0",
                    i = Object.keys(f.A.getMutablePrivateChannels()),
                    s = new Set(i);
                for (let e of ((l = x()(i).sort(V.default.compare).reverse().value()[0] ?? "0"), n))
                    null != e._lastMessageId &&
                        (1 === V.default.compare(e._lastMessageId, t) && (t = e._lastMessageId),
                        s.has(e.channelId) && 1 === V.default.compare(e._lastMessageId, l) && (l = e._lastMessageId));
                I.A.nonGuildVersionsTransaction(e).putAll([
                    { id: "highest_last_message_id", versionString: t },
                    { id: "private_channels_version", versionString: l },
                    { id: "read_state_version", version: this.readStateVersion },
                ]);
            }
            let l = I.A.readStatesTransaction(e);
            l.delete(), n.forEach((e) => l.put(`${e.type}-${e.channelId}`, e));
        }
    })();
var z = n(543465);
let B = new A.A("ReadStates"),
    Y = new (class {
        async getAll(e) {
            let t = performance.now(),
                n = await I.A.userGuildSettings(e).getMany(),
                l = performance.now();
            return B.log(`asynchronously loaded in ${l - t}ms (userGuildSettings: ${n.length})`), n;
        }
        actions = {
            CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
            USER_GUILD_SETTINGS_FULL_UPDATE: (e, t) => this.handleUserGuildSettingsUpdate(e, t),
        };
        resetInMemoryState() {}
        handleConnectionOpen(e, t) {
            e.userGuildSettings.partial || I.A.userGuildSettingsTransaction(t).delete(),
                this.write(e.userGuildSettings.entries, e.userGuildSettings.version, t);
        }
        handleUserGuildSettingsUpdate(e, t) {
            let n = x().max(e.userGuildSettings.map((e) => e.version ?? -1));
            null != n && this.write(e.userGuildSettings, n, t);
        }
        write(e, t, n) {
            let l = I.A.userGuildSettingsTransaction(n);
            for (let t of e) {
                let e = { ...(0, z.wn)(t.guild_id), ...t, channel_overrides: (0, z.b5)(t.channel_overrides) };
                l.put(t.guild_id ?? "dm-sentinel", e);
            }
            I.A.nonGuildVersionsTransaction(n).put({ id: "user_guild_settings_version", version: t });
        }
    })();
var K = n(617617),
    W = n(45773);
let q = new A.A("UserSettingsProto");
class Q {
    actions = {
        CONNECTION_OPEN: () => this.throttledOnChange(),
        USER_SETTINGS_PROTO_UPDATE: () => this.throttledOnChange(),
        USER_SETTINGS_PROTO_ENQUEUE_UPDATE: () => this.throttledOnChange(),
        USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: () => this.throttledOnChange(),
    };
    async getAll(e) {
        let t = performance.now(),
            n = await I.A.userSettings(e).getMany(),
            l = performance.now();
        q.verbose(`loaded in ${l - t}ms (settings: ${n.length})`);
        let i = {};
        for (let e of n) i[e.id] = e.value;
        return i;
    }
    handleUserSettingsProtoChange = () => {
        let e = m.default.getId(),
            t = W.A.database(e);
        t?.transaction((e) => {
            let t = K.A.computeState(),
                n = I.A.userSettingsTransaction(e);
            for (let e in t) n.put({ id: Number(e), value: t[e] });
            let l = K.A.settings.versions?.dataVersion ?? -1;
            I.A.nonGuildVersionsTransaction(e).put({ id: "user_settings_version", version: l });
        }, "handleUserSettingsProtoChange");
    };
    throttledOnChange = x().debounce(this.handleUserSettingsProtoChange, 0);
    resetInMemoryState() {}
}
let Z = new Q();
var X = n(531743),
    J = n(548965),
    ee = n(917878),
    et = n(464578),
    en = n(309010),
    el = n(967198),
    ei = n(612181),
    es = n(723702),
    ea = n(736400),
    er = n(652215);
let eu = new A.A("CacheStore"),
    ed = !1,
    eo = "initializing",
    ec = 0;
async function eh(e, t, n) {
    let l = performance.now();
    if (null == e || null == n)
        return (
            eu.verbose(`skipped loaded messages (channel: ${n}, database: ${e}).`),
            [performance.now() - l, { guildId: null, channelId: null, users: [], members: [], messages: [] }]
        );
    {
        let i = await k.Ay.startupLoad(e, t, n, er.EMb);
        eu.verbose(`loaded ${i.messages.length} messages (guild: ${t}, channel: ${n}).`);
        let s = { guildId: t, channelId: n, users: i.users, members: i.members, messages: i.messages };
        return ee.A.recordChannelFetchedLocal(n, ee.a, null, null, er.EMb, i.messages), [performance.now() - l, s];
    }
}
async function eg(e, t, n) {
    eu.verbose("loading early cache");
    let s = C.A.getSocket();
    s.connect();
    let a = el.A.getGuildId() ?? null,
        r = en.A.getChannelId() ?? null,
        u = performance.now(),
        o = et.A.loadCachedMessages.measureAsyncWithoutNesting(() => eh(e, a, r)),
        c = et.A.fetchGuildCache.measureAsync(() => eC(e, n)),
        h = et.A.fetchGuildCache.measureAsync(() => e_(e, n)),
        g =
            null != e
                ? d.A.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => X.A.getAsync(e, null))
                : Promise.resolve([]),
        A = null == e ? Promise.resolve({}) : d.A.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => Z.getAll(e)),
        _ = null == e ? Promise.resolve([]) : d.A.timeAsync("\uD83D\uDCBE", "cache: read_states", () => F.getAll(e)),
        m =
            null == e
                ? Promise.resolve([])
                : d.A.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => Y.getAll(e)),
        [[f, p], S, E, y, I, T, v] = await Promise.all([o, c, h, g, A, _, m]),
        N = performance.now() - u;
    if ((eu.verbose(`cache loaded in ${N}ms (channel_history ${f}ms)`), null == p))
        return eu.verbose("finished without dispatching CACHE_LOADED"), [!1, null, 0];
    let D = Object.fromEntries(p.members.map((e) => [e.userId, e])),
        b = null != E.guildId && null != E.channels,
        O = E.guildId;
    return (
        await new Promise((e, t) =>
            l.Ay.Emitter.batched(() => {
                d.A.time("\uD83D\uDCBE", "Dispatch Mini Cache", () =>
                    i.h
                        .dispatch({
                            type: "CACHE_LOADED",
                            guilds: S,
                            privateChannels: y,
                            initialGuildChannels: E.channels ?? [],
                            users: [...p.users],
                            messages: null == p.channelId ? {} : { [p.channelId]: p.messages },
                            guildMembers: null == p.guildId ? {} : { [p.guildId]: D },
                            userSettings: I,
                            userGuildSettings: v,
                            readStates: T,
                        })
                        .then(e, t),
                ),
                    d.A.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () =>
                        s.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])),
                    );
            }),
        ),
        eu.verbose(`early_cache_summary: (
        ok: true
        meta:
          auth_user_id: ${t}
          selected_guild: ${a}
          selected_channel: ${r}
          navigation_state: ${JSON.stringify(n)}
          database: ${null != e}
            name: ${e?.name}
        data:
          database:
            private_channels: ${y.length}
            channel_history:
              guild: ${p.guildId}
              channel: ${p.channelId}
              messages: ${p.messages.length}
                members: ${p.members.length}
                users: ${p.users.length}
            initial_guild:
              id: ${O}
              channels: ${E.channels?.length}
            user_settings: ${Object.keys(I).length}
            read_states: ${T.length}
            user_guild_settings: ${v.length}
      )`),
        et.A.setEarlyCacheInfo({ guilds: S.length }),
        eu.verbose("finished dispatching CACHE_LOADED"),
        [!0, b ? (O ?? null) : null, y.length]
    );
}
let eA = !1;
async function eC(e, t) {
    if (null == e) return [];
    switch (t.page) {
        case "private-channels":
        case "guild-channels":
            eA = !0;
            break;
        case "other":
            "@me" === t.guildId && (eA = !0);
    }
    if (eA) return (await (0, c.kk)(() => d.A.timeAsync("\uD83D\uDCBE", "cache: guilds", () => R.getAsync(e)))) ?? [];
    let n = (await M.A.getCommittedVersions()).initial_guild_id ?? t.guildId;
    if (null == n || "@me" === n) return [];
    let l = await (0, c.kk)(() => R.getOneAsync(e, n));
    return null != l ? [l] : [];
}
async function e_(e, t) {
    if (null == e) return Promise.resolve({ channels: null, guildId: null });
    let n = (await M.A.getCommittedVersions()).initial_guild_id;
    if ((null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n))
        return (
            eu.verbose(`skipped loading initial guild (guild: ${n}, database: ${e})`),
            Promise.resolve({ channels: null, guildId: null })
        );
    let l = n;
    return { channels: await (0, c.kk)(() => X.A.getAsync(e, l)), guildId: n };
}
async function em(e, t, n, l) {
    eu.verbose("loading late lazy cache");
    let [s, a, r] = await et.A.fetchLazyCache.measureAsync(() =>
            Promise.all([
                (0, c.kk)(() =>
                    null != e
                        ? d.A.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => P.A.okAsync(e))
                        : Promise.resolve(!0),
                ),
                (0, c.kk)(() =>
                    null == e || eA
                        ? Promise.resolve([])
                        : d.A.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => R.getAsync(e)),
                ),
                (0, c.kk)(() =>
                    null != e
                        ? d.A.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => N.getAsync(e))
                        : Promise.resolve({ all: [], stale: [], channels: [] }),
                ),
            ]),
        ),
        u = await et.A.fetchStaleChannels.measureAsync(() =>
            null != e && null != r && r.stale.length > 0
                ? (0, c.kk)(() => {
                      var t;
                      return (
                          (t = r.stale),
                          eu.verbose(`loading stale guild channels (count: ${t.length}, ids: ${t.join(", ")})`),
                          Promise.all(t.map((t) => X.A.getAsync(e, t).then((e) => [t, e])))
                      );
                  })
                : Promise.resolve([]),
        );
    J.iQ.getCachedEnabled()
        ? eu.verbose("loadLateLazyCache: not yielding to react")
        : (eu.verbose("loadLateLazyCache: yielding to react"),
          await (function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4e3;
              return new Promise((t) => {
                  clearTimeout(
                      setTimeout(() => {
                          t();
                      }, e),
                  ),
                      t();
              });
          })((0, es.isIOS)() ? 0 : void 0)),
        et.A.loadLazyCache.recordStart();
    let o = C.A.getSocket();
    ef(() => {
        let d = performance.now();
        if (!1 === s) {
            i.h.dispatch({ type: "CLEAR_CACHES", reason: "database:not_ok" }),
                i.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (null == a || null == r || null == u) {
            eu.log(`couldn't load database item (
          database: ${null != e}
          basic_channels: ${null != r}
          guild_channels: ${null != u}
          guilds: ${null != a}
        )`),
                i.h.dispatch({ type: "CLEAR_CACHES", reason: "database:load_failed" }),
                i.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (null == s && (a.length > 0 || r.all.length > 0)) {
            eu.log("kv_cache was not ok (null version with values)"),
                i.h.dispatch({ type: "CLEAR_CACHES", reason: "database:versionless" }),
                i.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        0;
        o.addAnalytics({ hadCacheAtStartup: !0 });
        let c = {
            type: "CACHE_LOADED_LAZY",
            guilds: a,
            guildChannels: u,
            basicGuildChannels: r.channels,
            initialGuildId: n,
        };
        et.A.deserializeCache.measure(() => {
            null != c.channels && (0, ea.Ay)(c.channels),
                null != c.privateChannels && (0, ea.Ay)(c.privateChannels),
                null != c.guildChannels && (0, ea.X3)(c.guildChannels);
        }),
            et.A.dispatchLazyCache.measure(() => i.h.dispatch(c)),
            eu.verbose(`late lazy cache loaded (ok: true, took: ${performance.now() - d}ms)`),
            o.addAnalytics({ usedCacheAtStartup: !0 });
        let h = u.reduce((e, t) => {
                let [n, l] = t;
                return e + l.length;
            }, 0),
            g = u.length,
            A = r.all.reduce((e, t) => {
                let [n, l] = t;
                return e + l.length;
            }, 0),
            C = r.channels.reduce((e, t) => {
                let [n, l] = t;
                return e + l.length;
            }, 0),
            _ = A - C,
            m = 0 === r.stale.length ? "" : ` \xb7 ${r.stale.join(", ")}`;
        eu.verbose(`lazy_cache_summary: (
        ok: true
        meta:
          auth_user_id: ${t}
          initial_guild: ${n}
          database: ${null != e}
            ok: ${s}
            name: ${e?.name}
        data:
          database:
            guilds: ${a.length}
            basic_channels:
              total: ${A} (${r.channels.length} guilds)
              stale: ${_} (${r.stale.length} guilds${m})
              unstale: ${C}
            full_channels (guilds_with_stale_basic_channels):
              total: ${h} (${u.length} guilds)
      )`),
            et.A.setLazyCacheInfo({
                guilds: a.length,
                privateChannels: l,
                basicChannels: A,
                basicChannelsStale: _,
                fullChannels: h,
                fullChannelGuilds: g,
            });
    });
}
function ef(e) {
    let t = C.A.getSocket(),
        n = !1;
    l.Ay.Emitter.batched(() => {
        try {
            if ((e(), !t.dispatcher.hasStuffToDispatchNow())) {
                eu.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                return;
            }
            (n = !0),
                et.A.loadLazyCache.recordEnd(),
                eu.verbose("Processing First Queued Dispatch"),
                t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])),
                setTimeout(() => {
                    eu.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                }, 100);
        } catch (e) {
            eu.warn("Lazy cache has encountered error", e),
                i.h.dispatch({ type: "RESET_SOCKET", args: { error: e, action: "LazyCache" } });
        }
    }),
        n || et.A.loadLazyCache.recordEnd();
}
class ep extends l.Ay.Store {
    static displayName = "CacheStore";
    initialize() {
        this.waitFor(m.default, C.A, en.A, el.A), C.A.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !0;
    }
    getLazyCacheStatus() {
        return "no-cache";
    }
    get lastWriteTime() {
        return ec;
    }
    canWriteCaches(e) {
        return (0, ei.wR)()
            ? ed
                ? (eu.log("Not writing cache because caches cleared"), !1)
                : !!e || (eu.log("Not writing cache because never connected"), !1)
            : (eu.log("Not writing cache because not authenticated"), !1);
    }
    async loadCacheAsync(e, t) {
        let n,
            l,
            s =
                ((l = !1),
                function () {
                    for (var e = arguments.length, i = Array(e), s = 0; s < e; s++) i[s] = arguments[s];
                    return l || ((l = !0), (n = t(...i))), n;
                });
        et.A.setInitialPage(e.page);
        let a = e.guildId;
        if ((et.A.setInitialGuildId(null != a && "@me" !== a ? a : null), "initializing" !== eo)) {
            s(), setTimeout(() => C.A.getSocket()?.dispatcher?.unpauseDispatchQueue(), 0);
            return;
        }
        try {
            let t = m.default.getId(),
                n = W.A.carefullyOpenDatabase(t),
                [l, a, r] = await et.A.loadMiniCache.measureAsync(() => eg(n, t, e));
            l
                ? (s(), await em(n, t, a, r))
                : (s(), await (ef(() => i.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" })), Promise.resolve()));
        } catch (e) {
            eu.error("clearing cache. exception encountered while loading cache.", e, e.stack),
                s(),
                i.h.dispatch({ type: "RESET_SOCKET", args: { error: e, action: "loadCacheAsync" } });
        }
    }
}
new ep(i.h, {}), n(313961);
let eS = Object.freeze({ online: null, total: null }),
    eE = {},
    ey = {},
    eI = null;
class eT extends l.Ay.PersistedStore {
    static displayName = "ChannelMemberCountStore";
    static persistKey = "channelMemberCounts";
    initialize(e) {
        this.waitFor(C.A, f.A), (ey = e ?? eE);
    }
    getState() {
        return ey;
    }
    getMemberCount(e) {
        return ey[e] ?? eS;
    }
    requestCount(e, t) {
        (eI = { guildId: e, channelId: t }), C.A.getSocket().requestChannelMemberCount(e, t);
    }
}
new eT(i.h, {
    CONNECTION_OPEN: function () {
        null != eI && C.A.getSocket().requestChannelMemberCount(eI.guildId, eI.channelId),
            V.default.keys(ey).forEach((e) => {
                null == f.A.getChannel(e) && delete ey[e];
            });
    },
    CHANNEL_MEMBER_COUNT_UPDATE: function (e) {
        let { channelId: t, online: n, total: l } = e;
        return (null != n || null != l) && (ey[t] = { online: n, total: l }), !0;
    },
}),
    n(309698),
    n(717125),
    n(25639),
    n(725613),
    n(47671),
    n(352139),
    n(517164),
    n(99753),
    n(697627),
    n(771781),
    n(159273),
    n(608960),
    n(736056),
    n(639841),
    n(710195),
    n(457699),
    n(900019),
    n(207777),
    n(969043),
    n(246943),
    n(474399),
    n(768953),
    n(870391),
    n(586774);
var ev = n(328153);
n(800828), n(507263), n(823448), n(499118), n(351022), n(610136), n(93474);
var eN = n(746080);
let eD = {},
    eb = {},
    eO = {},
    ew = {};
function eG(e) {
    let t = eb[e];
    if (null == t) return;
    let n = V.default.fromTimestamp(Date.now() - 9e5),
        l = x().findIndex(t, (e) => V.default.compare(e.id, n) > 0);
    if (-1 === l) eb[e] = [];
    else {
        let n = Math.max(l, t.length - 26);
        eb[e] = x().slice(t, n);
    }
    eO[e] = Date.now();
}
function eL(e, t, n, l) {
    eD[e].add(t);
    let i = eO[t];
    (null == i || i + 3e5 > Date.now()) && eG(t), null == eb[t] && (eb[t] = []), eb[t].push({ id: n, userId: l });
}
function eU(e) {
    let { channel: t } = e;
    delete eb[t.id], delete eO[t.id];
}
class eR extends l.Ay.Store {
    initialize() {
        this.waitFor(f.A, el.A);
    }
    static displayName = "ActiveChannelsStore";
    getActiveChannelsFetchStatus(e) {
        return ew[e];
    }
    getActiveChannelIds(e) {
        return eD[e];
    }
    getChannelMessageData(e) {
        return eb[e];
    }
    shouldFetch(e) {
        return null == eD[e] && !ew[e]?.loading;
    }
}
new eR(i.h, {
    CHANNEL_SELECT: function (e) {
        let { channelId: t, guildId: n } = e;
        if (!(0, eN.mP)(t) || null == n) return !1;
        let l = eD[n];
        if (null == l) return !1;
        l.forEach((e) => {
            eG(e), eb[e]?.length === 0 && delete eb[e];
        });
        let i = x()
            .chain(Array.from(l))
            .filter((e) => e in eb)
            .sortBy((e) => -(eb[e]?.length ?? 0))
            .value();
        eD[n] = new Set(i);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: l, isPushNotification: i } = e;
        if (l || i) return !1;
        let s = f.A.getChannel(t);
        if (null == s) return !1;
        let a = s.guild_id;
        if (null == a || null == eD[a]) return !1;
        eL(a, t, n.id, n.author?.id);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete eD[t.id];
    },
    CHANNEL_DELETE: eU,
    THREAD_DELETE: eU,
    ACTIVE_CHANNELS_FETCH_START: function (e) {
        let { guildId: t } = e;
        ew[t] = { loading: !0, error: null, fetchedAt: Date.now() };
    },
    ACTIVE_CHANNELS_FETCH_SUCCESS: function (e) {
        let { guildId: t, channels: n } = e;
        (ew[t] = { loading: !1, error: null, fetchedAt: Date.now() }),
            (eD[t] = new Set()),
            n.forEach((e) => {
                let { channel_id: n, messages: l } = e;
                l.forEach((e) => {
                    eL(t, n, e.message_id, e.user_id);
                });
            });
    },
    ACTIVE_CHANNELS_FETCH_FAILURE: function (e) {
        let { guildId: t, error: n } = e;
        ew[t] = { loading: !1, error: n, fetchedAt: null };
    },
    CONNECTION_OPEN: function () {},
}),
    n(212455),
    n(879408),
    n(151781),
    n(591552),
    n(713125),
    n(871109);
var eP = n(936649);
let ek = {};
function eM(e, t) {
    let n = ek[e];
    return !(null == n || n.has(t)) && ((ek[e] = new Set(n.add(t))), !0);
}
class ej extends l.Ay.PersistedStore {
    static displayName = "GuildProgressStore";
    static persistKey = "GuildProgressStore";
    initialize(e) {
        this.waitFor(m.default, f.A, S.A),
            (ek = {}),
            null != e &&
                V.default.keys(e).forEach((t) => {
                    let n = e[t];
                    null != n && "function" == typeof n[Symbol.iterator] && (ek[t] = new Set(n));
                });
    }
    getProgress(e) {
        return ek[e];
    }
    hasProgress(e) {
        let t = ek[e];
        return null != t && !t.has(eP.gj.DISMISSED);
    }
    getState() {
        return ek;
    }
}
new ej(i.h, {
    CONNECTION_OPEN: function () {
        let e = [];
        V.default.keys(ek).forEach((t) => {
            ek[t].has(eP.gj.COMPLETED) && e.push(t);
        }),
            e.forEach((e) => eM(e, eP.gj.DISMISSED));
    },
    GUILD_PROGRESS_INITIALIZE: function (e) {
        let { guildId: t } = e;
        null == ek[t] && (ek[t] = new Set()), ek[t].has(eP.gj.COMPLETED) || ek[t].delete(eP.gj.DISMISSED);
    },
    GUILD_PROGRESS_COMPLETED_SEEN: function (e) {
        let { guildId: t } = e;
        if (null == ek[t]) return !1;
        ek[t] = new Set(ek[t].add(eP.gj.COMPLETED));
    },
    GUILD_PROGRESS_DISMISS: function (e) {
        let { guildId: t } = e;
        return eM(t, eP.gj.DISMISSED);
    },
    GUILD_CREATE: function (e) {
        let {
                guild: { id: t, member_count: n },
            } = e,
            l = S.A.getGuild(t);
        if (null == l) return !1;
        l.ownerId === m.default.getId() &&
            null != ek[l.id] &&
            (null != l.icon && ek[l.id].add(eP.gj.AVATAR), n > 1 && ek[l.id].add(eP.gj.INVITE));
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        return null != t && null != t.guild_id && null != ek[t.guild_id] && eM(t.guild_id, eP.gj.CHANNEL);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let e of t)
            null != e &&
                null != e.guild_id &&
                null != ek[e.guild_id] &&
                !1 !== eM(e.guild_id, eP.gj.CHANNEL) &&
                (n = !0);
        return n;
    },
    GUILD_SETTINGS_SUBMIT_SUCCESS: function (e) {
        let { guild: t } = e;
        return null != t && null != t.id && null != ek[t.id] && null != t.icon && eM(t.id, eP.gj.AVATAR);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e,
            l = f.A.getChannel(t);
        return (
            n.author?.id === m.default.getId() && null != l && null != ek[l.guild_id] && eM(l.guild_id, eP.gj.MESSAGE)
        );
    },
    GUILD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, memberCount: n } = e;
        return null != ek[t] && n > 1 && eM(t, eP.gj.INVITE);
    },
}),
    n(636194),
    n(384684),
    n(698441),
    n(960755),
    n(121780),
    n(857071),
    n(752755),
    n(578623),
    n(973153),
    n(401565),
    n(380335),
    n(157550),
    n(274303),
    n(252431);
var ex = n(253932),
    eH = n(461213),
    eV = n(927813);
let e$ = [],
    eF = !1;
function ez() {
    return e$.length >= 4 && e$.some((e) => e < Date.now() - 3 * eV.A.Millis.DAY);
}
class eB extends l.Ay.PersistedStore {
    static displayName = "HabitualDNDStore";
    static persistKey = "habitualDND";
    initialize(e) {
        this.waitFor(eH.A), null != e && Array.isArray(e.sessionStartsWithDND) && (e$ = e.sessionStartsWithDND);
    }
    showNagBar() {
        return eF;
    }
    getState() {
        return { sessionStartsWithDND: e$ };
    }
    getTemp() {
        return { x: ex.CY.getSetting() };
    }
}
new eB(i.h, {
    POST_CONNECTION_OPEN: function () {
        eH.A.getStatus() === er.clD.DND && "0" === ex.CY.getSetting()
            ? (e$.push(Date.now()),
              (e$ = e$.filter((e) => e > Date.now() - 5 * eV.A.Millis.DAY)),
              ez() &&
                  setTimeout(() => {
                      i.h.dispatch({ type: "HABITUAL_DND_CLEAR" });
                  }, 15 * eV.A.Millis.SECOND))
            : (e$ = []);
    },
    HABITUAL_DND_CLEAR: function () {
        (eF = !!ez()), (e$ = []);
    },
}),
    n(535586),
    n(517092),
    n(310031),
    n(833551),
    n(680243),
    n(648427),
    n(185657),
    n(91868),
    n(406595),
    n(695515),
    n(148864),
    n(683760),
    n(275759),
    n(911411),
    n(174768),
    n(135978),
    n(923495),
    n(542986),
    n(853145),
    n(9842),
    n(532309),
    n(707890),
    n(440976),
    n(85109),
    n(199160),
    n(517381),
    n(268988),
    n(349435),
    n(741812),
    n(49431),
    n(832163),
    n(889979),
    n(655116),
    n(63995),
    n(312006),
    n(732755),
    n(446600),
    n(41237),
    n(750385),
    n(822074),
    n(695633),
    n(970278),
    n(45494),
    n(152007),
    n(219065),
    n(802958),
    n(456874),
    n(79858),
    n(279263),
    n(975648),
    n(878460),
    n(773669),
    n(363195),
    n(769022);
var eY = n(451988),
    eK = n(308368),
    eW = n(973522),
    eq = n(674378),
    eQ = n(760751),
    eZ = n(189081),
    eX = n(763827);
let eJ = "ActivityTrackingStore",
    e0 = 30 * eV.A.Millis.MINUTE,
    e1 = 5 * eV.A.Millis.MINUTE,
    e7 = o.w.get(eJ) ?? {},
    e5 = {},
    e6 = !1;
function e9(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && e3(e, !0);
    let n = e5[e.applicationId];
    null != n && (n.stop(), delete e5[e.applicationId]), delete e7[e.applicationId], o.w.set(eJ, e7);
}
function e3(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Date.now(),
        l = null != e.updatedAt ? n - e.updatedAt : 0;
    l > e0 + e1 && (l = 0);
    let i = (0, eq.kv)(e.applicationId, eZ.A),
        s = en.A.getVoiceChannelId(),
        a = m.default.getSessionId(),
        r = eX.A.getMediaSessionId();
    eK.A.updateActivity({
        applicationId: e.applicationId,
        distributor: e.isDiscordApplication ? er.d3x.DISCORD : e.distributor,
        shareActivity: i,
        token: e.token,
        duration: Math.floor(l / 1e3),
        closed: t,
        exePath: e.exePath,
        voiceChannelId: s,
        sessionId: a,
        mediaSessionId: r,
    }),
        (e.updatedAt = n);
    let u = e5[e.applicationId];
    null == u && (u = e5[e.applicationId] = new eY.IX()).start(e0, () => e3(e)),
        t || ((e7[e.applicationId] = e), o.w.set(eJ, e7));
}
function e8() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = ev.Ay.getVisibleRunningGames(),
        n = new Set();
    for (let e of t) {
        let t = eQ.A.findGame(e);
        null != t &&
            (n.add(t.id),
            t.id in e7 ||
                e3({
                    applicationId: t.id,
                    updatedAt: Date.now(),
                    distributor: e.distributor,
                    exePath: (0, eW.Ic)(e.exePath ?? ""),
                }));
    }
    for (let t of Object.keys(e7)) n.has(t) || e9(e7[t], e);
}
function e4() {
    for (let e of Object.keys(e7)) e9(e7[e]);
    e6 = !1;
}
class e2 extends l.Ay.Store {
    static displayName = "ActivityTrackingStore";
    initialize() {
        this.waitFor(m.default, eQ.A, eZ.A, eX.A, ev.Ay, en.A, K.A), this.syncWith([K.A], e8);
    }
    getActivities() {
        return e7;
    }
}
new e2(i.h, {
    RUNNING_GAMES_CHANGE: () => e8(),
    CONNECTION_OPEN: function () {
        if (e6) return !1;
        for (let e of Object.keys(e7)) e3(e7[e]);
        e8(!1), (e6 = !0);
    },
    CONNECTION_CLOSED: function (e) {
        let { code: t } = e;
        4004 === t && e4();
    },
    LOGOUT: e4,
    ACTIVITY_UPDATE_SUCCESS: function (e) {
        let { applicationId: t, token: n } = e,
            l = e7[t];
        if (null == l) return !1;
        (l.token = n), o.w.set(eJ, e7);
    },
    ACTIVITY_UPDATE_FAIL: function (e) {
        let { applicationId: t } = e,
            n = e7[t];
        if (null == n) return !1;
        (n.token = null), (n.updatedAt = null), o.w.set(eJ, e7);
    },
}),
    n(930839),
    n(384200),
    n(616356),
    n(470710),
    n(924985),
    n(560010),
    n(963307),
    n(966833);
let te = {};
class tt extends l.Ay.Store {
    static displayName = "ChannelSKUStore";
    getSkuIdForChannel(e) {
        return te[e];
    }
}
new tt(i.h, {
    CONNECTION_OPEN: function () {
        te = {};
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { channelId: t, storeListing: n } = e;
        null != t && (te[t] = n.sku.id);
    },
}),
    n(945886),
    n(30370),
    n(153488),
    n(540999),
    n(111162),
    n(31717),
    n(629016),
    n(543897),
    n(30793),
    n(776096),
    n(919638),
    n(769765),
    n(808728),
    n(498642),
    n(860071),
    n(184989),
    n(458294),
    n(82057),
    n(834942),
    n(958590),
    n(670492),
    n(51760),
    n(956703),
    n(232835),
    n(783592),
    n(737613),
    n(362790),
    n(290863),
    n(131677),
    n(584777),
    n(584569),
    n(994500),
    n(528767),
    n(711014),
    n(485296),
    n(437959),
    n(116956),
    n(274184),
    n(741961),
    n(399263),
    n(870570),
    n(287809),
    n(803301),
    n(977997),
    n(615405),
    n(992250),
    n(731667),
    n(568004),
    n(567761),
    n(607567),
    n(595623),
    n(340829),
    n(966846),
    n(532624),
    n(530789),
    n(773371),
    n(256415);
