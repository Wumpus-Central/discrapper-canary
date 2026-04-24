n(539895), n(933958);
var i = n(17928),
    l = n(228366);
let s = !1;
function a() {
    s = !1;
}
class r extends i.Ay.Store {
    isTogglesDisabled() {
        return s;
    }
}
new r(l.h, {
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
    A = n(937724),
    g = n(626584),
    m = n(366853),
    C = n(95701),
    p = n(495544),
    _ = n(734057),
    f = n(317525),
    E = n(71393),
    S = n(576705),
    y = n(799422),
    I = n(723176);
let N = new g.A("GuildBasicChannels");
function T(e, t) {
    return (
        null == e ||
        e.type !== t.type ||
        e.parent_id !== t.parent_id ||
        S.A.computeBasicPermissions(e) !== S.A.computeBasicPermissions(t)
    );
}
let v = new (class {
    synced = null;
    async getAsync(e) {
        let t = performance.now(),
            [n, i] = await Promise.all([
                I.A.basicChannels(e).getKvEntries(),
                I.A.syncedBasicChannels(e).getKvEntries(),
            ]),
            l = performance.now() - t,
            [s, a] = (function (e) {
                let t = [],
                    n = [];
                for (let [i, l] of e) (l ? t : n).push(i);
                return [t, n];
            })(i),
            r = new Set(s);
        return (
            (this.synced = r),
            N.verbose(`loaded in ${l}ms (guilds: ${n.length}, synced: ${r.size} unsynced: ${a.length})`),
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
            T(_.A.getBasicChannel(n.id), n) && this.unsync(n.guild_id, t);
    }
    handleBackgroundSync(e, t) {
        for (let n of e.guilds)
            switch (n.data_mode) {
                case "unavailable":
                    break;
                case "partial":
                    let e = (e) => (0, C.UE)(e, n.id);
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
        let e = m.A.lastTimeConnectedChanged(),
            t = I.A.database();
        if (null == this.synced || null == t || !(0, A.O)()) return;
        let n = E.A.getGuildIds(),
            i = n.filter((e) => !this.synced.has(e));
        for (let l of (N.verbose(`scheduling basic_channel optimstic writes (guilds: ${i.length})`), n)) {
            if (null == this.synced || t !== I.A.database() || e !== m.A.lastTimeConnectedChanged()) break;
            if (!this.synced.has(l)) {
                N.verbose(`optimstically writing basic_channels (guild: ${l})`);
                try {
                    await _.D.loadGuildIds([l]),
                        await t.transaction((e) => this.syncOne(l, e), "handlePostConnectionOpen");
                } catch (e) {
                    N.warn("couldn't optimstically write basic_channel:", e);
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
        let { id: n, channels: i } = e;
        switch (i.op) {
            case "full_sync":
                this.onGuildSync(n, t);
                break;
            case "update":
                this.onGuildUpdate(n, i.writes, i.deletes, t);
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
            i = f.A.getRole(e.guildId, n.id);
        (null != i && h.aI(h.iu(n.permissions), i.permissions)) || this.unsync(e.guildId, t);
    }
    handleGuildMemberUpdate(e, t) {
        e.user.id === p.default.getId() && this.unsync(e.guildId, t);
    }
    handleWriteCaches(e, t) {
        this.sync(t);
    }
    resetInMemoryState() {
        this.synced = null;
    }
    onGuildUpdate(e, t, n, i) {
        (n.length > 0 || t.some((e) => T(_.A.getBasicChannel(e.id), e))) && this.unsync(e, i);
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
        N.verbose("Starting to write all basic channels");
        let t = performance.now(),
            n = { written: 0, skipped: 0 };
        for (let t of E.A.getGuildIds()) this.syncOne(t, e) ? n.written++ : n.skipped++;
        let i = performance.now() - t;
        N.verbose(`${n.written} basic_channel guilds submitted (took: ${i}ms, skipped: ${n.skipped} guilds)`);
    }
    syncOne(e, t) {
        var n;
        return (
            !(null == E.A.getGuild(e) || this.synced?.has(e)) &&
            (this.synced?.add(e),
            I.A.basicChannelsTransaction(t).put(
                e,
                ((n = e),
                Object.values(_.A.getMutableGuildChannelsForGuild(n)).map((e) => ({
                    id: e.id,
                    type: e.type,
                    guild_id: e.guild_id,
                    parent_id: e.parent_id,
                    basicPermissions: y.A.asBasicFlag(S.A.computePermissions(e)),
                }))),
            ),
            I.A.syncedBasicChannelsTransaction(t).put(e, !0),
            !0)
        );
    }
})();
var D = n(260509),
    O = n(696451),
    w = n(860689),
    b = n(9865),
    G = n(7864);
let L = new g.A("Guilds"),
    R = new (class {
        async getAsync(e) {
            let t = performance.now(),
                n = await I.A.guilds(e).getMany(),
                i = performance.now();
            return L.verbose(`loaded in ${i - t}ms (guilds: ${n.length})`), n;
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
                let e = E.A.getGuild(n.id);
                if (null != e) {
                    let i = f.A.getUnsafeMutableRoles(n.id),
                        l =
                            "partial" === n.data_mode
                                ? G.ly(n.id, i, n.partial_updates.roles, n.partial_updates.deleted_role_ids)
                                : b.hd(n.id, n.roles);
                    this.put(w.Me(w.kI(n, e), b.cH(l), O.Ay.getSelfMember(n.id)), t);
                }
            }
        }
        handleConnectionOpen(e, t) {
            let n = [...e.guilds.map((e) => e.id), ...e.unavailableGuilds];
            for (let i of (I.A.guildsTransaction(t).deleteAllExcept(n), e.guilds)) this.putOne(i, t);
        }
        handleGuildCreate(e, t) {
            this.putOne(e.guild, t);
        }
        handleGuildUpdate(e, t) {
            let n = E.A.getGuild(e.guild.id),
                i = w.Y1(e.guild, n);
            this.put(w.Me(i, b.cH(b.hd(e.guild.id, e.guild.roles)), O.Ay.getSelfMember(e.guild.id)), t);
        }
        handleGuildDelete(e, t) {
            this.delete(e.guild.id, t);
        }
        handleGuildRoleChange(e, t) {
            let n = E.A.getGuild(e.guildId),
                i = f.A.getUnsafeMutableRoles(e.guildId);
            null != n &&
                this.put(
                    w.Me(n, b.cH({ ...i, [e.role.id]: b.Wj(e.guildId, e.role) }), O.Ay.getSelfMember(e.guildId)),
                    t,
                );
        }
        handleGuildRoleDelete(e, t) {
            let n = E.A.getGuild(e.guildId);
            if (null != n) {
                let i = { ...f.A.getUnsafeMutableRoles(e.guildId) };
                delete i[e.roleId];
                let l = O.Ay.getSelfMember(e.guildId);
                null != l && (l = { ...l, roles: l.roles.filter((t) => t !== e.roleId) }),
                    this.put(w.Me(n, b.cH(i), l), t);
            }
        }
        handleGuildMemberAdd(e, t) {
            if (null != e.joinedAt && e.user.id === p.default.getId()) {
                let n = E.A.getGuild(e.guildId);
                null != n &&
                    this.put(
                        w.Me((0, D.kn)(n, e.joinedAt), b.cH(f.A.getUnsafeMutableRoles(n.id)), O.Ay.getSelfMember(n.id)),
                        t,
                    );
            }
        }
        handleGuildMemberUpdate(e, t) {
            if (e.user.id !== p.default.getId()) return;
            let n = E.A.getGuild(e.guildId);
            null != n &&
                this.put(w.Me(n, b.cH(f.A.getUnsafeMutableRoles(n.id)), { roles: e.roles, userId: e.user.id }), t);
        }
        resetInMemoryState() {}
        putOne(e, t) {
            let n = e.members.find((e) => e.user.id === p.default.getId()),
                i = E.A.getGuild(e.id),
                l = b.j_(e.id, e.roles, f.A.getUnsafeMutableRoles(e.id)),
                s = w.Me(w.Wj(e, i), b.cH(l), null != n ? { userId: n.user.id, roles: n.roles } : null);
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
    U = n(586660),
    k = n(214771),
    M = n(735438),
    $ = n.n(M),
    F = n(222823),
    V = n(935208);
let x = new g.A("ReadStates"),
    H = new (class {
        readStateVersion = null;
        async getAll(e) {
            let t = performance.now(),
                n = await I.A.readStates(e).getMany(),
                i = performance.now();
            return x.log(`asynchronously loaded in ${i - t}ms (readStates: ${n.length})`), n;
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
                    : x.log("Received null read states version", e));
        }
        handleWriteCaches(e, t) {
            let n = F.Ay.getAllReadStates(!1);
            if (t) {
                if (null == this.readStateVersion) return;
                let t = "0",
                    i = "0",
                    l = Object.keys(_.A.getMutablePrivateChannels()),
                    s = new Set(l);
                for (let e of ((i = $()(l).sort(V.default.compare).reverse().value()[0] ?? "0"), n))
                    null != e._lastMessageId &&
                        (1 === V.default.compare(e._lastMessageId, t) && (t = e._lastMessageId),
                        s.has(e.channelId) && 1 === V.default.compare(e._lastMessageId, i) && (i = e._lastMessageId));
                I.A.nonGuildVersionsTransaction(e).putAll([
                    { id: "highest_last_message_id", versionString: t },
                    { id: "private_channels_version", versionString: i },
                    { id: "read_state_version", version: this.readStateVersion },
                ]);
            }
            let i = I.A.readStatesTransaction(e);
            i.delete(), n.forEach((e) => i.put(`${e.type}-${e.channelId}`, e));
        }
    })();
var j = n(543465);
let z = new g.A("ReadStates"),
    B = new (class {
        async getAll(e) {
            let t = performance.now(),
                n = await I.A.userGuildSettings(e).getMany(),
                i = performance.now();
            return z.log(`asynchronously loaded in ${i - t}ms (userGuildSettings: ${n.length})`), n;
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
            let n = $().max(e.userGuildSettings.map((e) => e.version ?? -1));
            null != n && this.write(e.userGuildSettings, n, t);
        }
        write(e, t, n) {
            let i = I.A.userGuildSettingsTransaction(n);
            for (let t of e) {
                let e = { ...(0, j.wn)(t.guild_id), ...t, channel_overrides: (0, j.b5)(t.channel_overrides) };
                i.put(t.guild_id ?? "dm-sentinel", e);
            }
            I.A.nonGuildVersionsTransaction(n).put({ id: "user_guild_settings_version", version: t });
        }
    })();
var Y = n(617617),
    W = n(45773);
let K = new g.A("UserSettingsProto");
class q {
    actions = {
        CONNECTION_OPEN: () => this.throttledOnChange(),
        USER_SETTINGS_PROTO_UPDATE: () => this.throttledOnChange(),
        USER_SETTINGS_PROTO_ENQUEUE_UPDATE: () => this.throttledOnChange(),
        USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: () => this.throttledOnChange(),
    };
    async getAll(e) {
        let t = performance.now(),
            n = await I.A.userSettings(e).getMany(),
            i = performance.now();
        K.verbose(`loaded in ${i - t}ms (settings: ${n.length})`);
        let l = {};
        for (let e of n) l[e.id] = e.value;
        return l;
    }
    handleUserSettingsProtoChange = () => {
        let e = p.default.getId(),
            t = W.A.database(e);
        t?.transaction((e) => {
            let t = Y.A.computeState(),
                n = I.A.userSettingsTransaction(e);
            for (let e in t) n.put({ id: Number(e), value: t[e] });
            let i = Y.A.settings.versions?.dataVersion ?? -1;
            I.A.nonGuildVersionsTransaction(e).put({ id: "user_settings_version", version: i });
        }, "handleUserSettingsProtoChange");
    };
    throttledOnChange = $().debounce(this.handleUserSettingsProtoChange, 0);
    resetInMemoryState() {}
}
let Q = new q();
var Z = n(531743),
    X = n(548965),
    J = n(917878),
    ee = n(464578),
    et = n(309010),
    en = n(967198),
    ei = n(612181),
    el = n(723702),
    es = n(736400),
    ea = n(652215);
let er = new g.A("CacheStore"),
    eu = !1,
    ed = "initializing",
    eo = 0;
async function ec(e, t, n) {
    let i = performance.now();
    if (null == e || null == n)
        return (
            er.verbose(`skipped loaded messages (channel: ${n}, database: ${e}).`),
            [performance.now() - i, { guildId: null, channelId: null, users: [], members: [], messages: [] }]
        );
    {
        let l = await U.Ay.startupLoad(e, t, n, ea.EMb);
        er.verbose(`loaded ${l.messages.length} messages (guild: ${t}, channel: ${n}).`);
        let s = { guildId: t, channelId: n, users: l.users, members: l.members, messages: l.messages };
        return J.A.recordChannelFetchedLocal(n, J.a, null, null, ea.EMb, l.messages), [performance.now() - i, s];
    }
}
async function eh(e, t, n) {
    er.verbose("loading early cache");
    let s = m.A.getSocket();
    s.connect();
    let a = en.A.getGuildId() ?? null,
        r = et.A.getChannelId() ?? null,
        u = performance.now(),
        o = ee.A.loadCachedMessages.measureAsyncWithoutNesting(() => ec(e, a, r)),
        c = ee.A.fetchGuildCache.measureAsync(() => eg(e, n)),
        h = ee.A.fetchGuildCache.measureAsync(() => em(e, n)),
        A =
            null != e
                ? d.A.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => Z.A.getAsync(e, null))
                : Promise.resolve([]),
        g = null == e ? Promise.resolve({}) : d.A.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => Q.getAll(e)),
        C = null == e ? Promise.resolve([]) : d.A.timeAsync("\uD83D\uDCBE", "cache: read_states", () => H.getAll(e)),
        p =
            null == e
                ? Promise.resolve([])
                : d.A.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => B.getAll(e)),
        [[_, f], E, S, y, I, N, T] = await Promise.all([o, c, h, A, g, C, p]),
        v = performance.now() - u;
    if ((er.verbose(`cache loaded in ${v}ms (channel_history ${_}ms)`), null == f))
        return er.verbose("finished without dispatching CACHE_LOADED"), [!1, null, 0];
    let D = Object.fromEntries(f.members.map((e) => [e.userId, e])),
        O = null != S.guildId && null != S.channels,
        w = S.guildId;
    return (
        await new Promise((e, t) =>
            i.Ay.Emitter.batched(() => {
                d.A.time("\uD83D\uDCBE", "Dispatch Mini Cache", () =>
                    l.h
                        .dispatch({
                            type: "CACHE_LOADED",
                            guilds: E,
                            privateChannels: y,
                            initialGuildChannels: S.channels ?? [],
                            users: [...f.users],
                            messages: null == f.channelId ? {} : { [f.channelId]: f.messages },
                            guildMembers: null == f.guildId ? {} : { [f.guildId]: D },
                            userSettings: I,
                            userGuildSettings: T,
                            readStates: N,
                        })
                        .then(e, t),
                ),
                    d.A.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () =>
                        s.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])),
                    );
            }),
        ),
        er.verbose(`early_cache_summary: (
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
              guild: ${f.guildId}
              channel: ${f.channelId}
              messages: ${f.messages.length}
                members: ${f.members.length}
                users: ${f.users.length}
            initial_guild:
              id: ${w}
              channels: ${S.channels?.length}
            user_settings: ${Object.keys(I).length}
            read_states: ${N.length}
            user_guild_settings: ${T.length}
      )`),
        ee.A.setEarlyCacheInfo({ guilds: E.length }),
        er.verbose("finished dispatching CACHE_LOADED"),
        [!0, O ? (w ?? null) : null, y.length]
    );
}
let eA = !1;
async function eg(e, t) {
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
    let n = (await k.A.getCommittedVersions()).initial_guild_id ?? t.guildId;
    if (null == n || "@me" === n) return [];
    let i = await (0, c.kk)(() => R.getOneAsync(e, n));
    return null != i ? [i] : [];
}
async function em(e, t) {
    if (null == e) return Promise.resolve({ channels: null, guildId: null });
    let n = (await k.A.getCommittedVersions()).initial_guild_id;
    if ((null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n))
        return (
            er.verbose(`skipped loading initial guild (guild: ${n}, database: ${e})`),
            Promise.resolve({ channels: null, guildId: null })
        );
    let i = n;
    return { channels: await (0, c.kk)(() => Z.A.getAsync(e, i)), guildId: n };
}
async function eC(e, t, n, i) {
    er.verbose("loading late lazy cache");
    let [s, a, r] = await ee.A.fetchLazyCache.measureAsync(() =>
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
                        ? d.A.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => v.getAsync(e))
                        : Promise.resolve({ all: [], stale: [], channels: [] }),
                ),
            ]),
        ),
        u = await ee.A.fetchStaleChannels.measureAsync(() =>
            null != e && null != r && r.stale.length > 0
                ? (0, c.kk)(() => {
                      var t;
                      return (
                          (t = r.stale),
                          er.verbose(`loading stale guild channels (count: ${t.length}, ids: ${t.join(", ")})`),
                          Promise.all(t.map((t) => Z.A.getAsync(e, t).then((e) => [t, e])))
                      );
                  })
                : Promise.resolve([]),
        );
    X.iQ.getCachedEnabled()
        ? er.verbose("loadLateLazyCache: not yielding to react")
        : (er.verbose("loadLateLazyCache: yielding to react"),
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
          })((0, el.isIOS)() ? 0 : void 0)),
        ee.A.loadLazyCache.recordStart();
    let o = m.A.getSocket();
    ep(() => {
        let d = performance.now();
        if (!1 === s) {
            l.h.dispatch({ type: "CLEAR_CACHES", reason: "database:not_ok" }),
                l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (null == a || null == r || null == u) {
            er.log(`couldn't load database item (
          database: ${null != e}
          basic_channels: ${null != r}
          guild_channels: ${null != u}
          guilds: ${null != a}
        )`),
                l.h.dispatch({ type: "CLEAR_CACHES", reason: "database:load_failed" }),
                l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (null == s && (a.length > 0 || r.all.length > 0)) {
            er.log("kv_cache was not ok (null version with values)"),
                l.h.dispatch({ type: "CLEAR_CACHES", reason: "database:versionless" }),
                l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
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
        ee.A.deserializeCache.measure(() => {
            null != c.channels && (0, es.Ay)(c.channels),
                null != c.privateChannels && (0, es.Ay)(c.privateChannels),
                null != c.guildChannels && (0, es.X3)(c.guildChannels);
        }),
            ee.A.dispatchLazyCache.measure(() => l.h.dispatch(c)),
            er.verbose(`late lazy cache loaded (ok: true, took: ${performance.now() - d}ms)`),
            o.addAnalytics({ usedCacheAtStartup: !0 });
        let h = u.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            A = u.length,
            g = r.all.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            m = r.channels.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            C = g - m,
            p = 0 === r.stale.length ? "" : ` \xb7 ${r.stale.join(", ")}`;
        er.verbose(`lazy_cache_summary: (
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
              total: ${g} (${r.channels.length} guilds)
              stale: ${C} (${r.stale.length} guilds${p})
              unstale: ${m}
            full_channels (guilds_with_stale_basic_channels):
              total: ${h} (${u.length} guilds)
      )`),
            ee.A.setLazyCacheInfo({
                guilds: a.length,
                privateChannels: i,
                basicChannels: g,
                basicChannelsStale: C,
                fullChannels: h,
                fullChannelGuilds: A,
            });
    });
}
function ep(e) {
    let t = m.A.getSocket(),
        n = !1;
    i.Ay.Emitter.batched(() => {
        try {
            if ((e(), !t.dispatcher.hasStuffToDispatchNow())) {
                er.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                return;
            }
            (n = !0),
                ee.A.loadLazyCache.recordEnd(),
                er.verbose("Processing First Queued Dispatch"),
                t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])),
                setTimeout(() => {
                    er.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                }, 100);
        } catch (e) {
            er.warn("Lazy cache has encountered error", e),
                l.h.dispatch({ type: "RESET_SOCKET", args: { error: e, action: "LazyCache" } });
        }
    }),
        n || ee.A.loadLazyCache.recordEnd();
}
class e_ extends i.Ay.Store {
    static displayName = "CacheStore";
    initialize() {
        this.waitFor(p.default, m.A, et.A, en.A), m.A.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !0;
    }
    getLazyCacheStatus() {
        return "no-cache";
    }
    get lastWriteTime() {
        return eo;
    }
    canWriteCaches(e) {
        return (0, ei.wR)()
            ? eu
                ? (er.log("Not writing cache because caches cleared"), !1)
                : !!e || (er.log("Not writing cache because never connected"), !1)
            : (er.log("Not writing cache because not authenticated"), !1);
    }
    async loadCacheAsync(e, t) {
        let n,
            i,
            s =
                ((i = !1),
                function () {
                    for (var e = arguments.length, l = Array(e), s = 0; s < e; s++) l[s] = arguments[s];
                    return i || ((i = !0), (n = t(...l))), n;
                });
        ee.A.setInitialPage(e.page);
        let a = e.guildId;
        if ((ee.A.setInitialGuildId(null != a && "@me" !== a ? a : null), "initializing" !== ed)) {
            s(), setTimeout(() => m.A.getSocket()?.dispatcher?.unpauseDispatchQueue(), 0);
            return;
        }
        try {
            let t = p.default.getId(),
                n = W.A.carefullyOpenDatabase(t),
                [i, a, r] = await ee.A.loadMiniCache.measureAsync(() => eh(n, t, e));
            i
                ? (s(), await eC(n, t, a, r))
                : (s(), await (ep(() => l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" })), Promise.resolve()));
        } catch (e) {
            er.error("clearing cache. exception encountered while loading cache.", e, e.stack),
                s(),
                l.h.dispatch({ type: "RESET_SOCKET", args: { error: e, action: "loadCacheAsync" } });
        }
    }
}
new e_(l.h, {}), n(313961);
let ef = Object.freeze({ online: null, total: null }),
    eE = {},
    eS = {},
    ey = null;
class eI extends i.Ay.PersistedStore {
    static displayName = "ChannelMemberCountStore";
    static persistKey = "channelMemberCounts";
    initialize(e) {
        this.waitFor(m.A, _.A), (eS = e ?? eE);
    }
    getState() {
        return eS;
    }
    getMemberCount(e) {
        return eS[e] ?? ef;
    }
    requestCount(e, t) {
        (ey = { guildId: e, channelId: t }), m.A.getSocket().requestChannelMemberCount(e, t);
    }
}
new eI(l.h, {
    CONNECTION_OPEN: function () {
        null != ey && m.A.getSocket().requestChannelMemberCount(ey.guildId, ey.channelId),
            V.default.keys(eS).forEach((e) => {
                null == _.A.getChannel(e) && delete eS[e];
            });
    },
    CHANNEL_MEMBER_COUNT_UPDATE: function (e) {
        let { channelId: t, online: n, total: i } = e;
        return (null != n || null != i) && (eS[t] = { online: n, total: i }), !0;
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
var eN = n(328153);
n(800828), n(507263), n(823448), n(499118), n(351022), n(610136), n(93474);
var eT = n(746080);
let ev = {},
    eD = {},
    eO = {},
    ew = {};
function eb(e) {
    let t = eD[e];
    if (null == t) return;
    let n = V.default.fromTimestamp(Date.now() - 9e5),
        i = $().findIndex(t, (e) => V.default.compare(e.id, n) > 0);
    if (-1 === i) eD[e] = [];
    else {
        let n = Math.max(i, t.length - 26);
        eD[e] = $().slice(t, n);
    }
    eO[e] = Date.now();
}
function eG(e, t, n, i) {
    ev[e].add(t);
    let l = eO[t];
    (null == l || l + 3e5 > Date.now()) && eb(t), null == eD[t] && (eD[t] = []), eD[t].push({ id: n, userId: i });
}
function eL(e) {
    let { channel: t } = e;
    delete eD[t.id], delete eO[t.id];
}
class eR extends i.Ay.Store {
    initialize() {
        this.waitFor(_.A, en.A);
    }
    static displayName = "ActiveChannelsStore";
    getActiveChannelsFetchStatus(e) {
        return ew[e];
    }
    getActiveChannelIds(e) {
        return ev[e];
    }
    getChannelMessageData(e) {
        return eD[e];
    }
    shouldFetch(e) {
        return null == ev[e] && !ew[e]?.loading;
    }
}
new eR(l.h, {
    CHANNEL_SELECT: function (e) {
        let { channelId: t, guildId: n } = e;
        if (!(0, eT.mP)(t) || null == n) return !1;
        let i = ev[n];
        if (null == i) return !1;
        i.forEach((e) => {
            eb(e), eD[e]?.length === 0 && delete eD[e];
        });
        let l = $()
            .chain(Array.from(i))
            .filter((e) => e in eD)
            .sortBy((e) => -(eD[e]?.length ?? 0))
            .value();
        ev[n] = new Set(l);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i, isPushNotification: l } = e;
        if (i || l) return !1;
        let s = _.A.getChannel(t);
        if (null == s) return !1;
        let a = s.guild_id;
        if (null == a || null == ev[a]) return !1;
        eG(a, t, n.id, n.author?.id);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete ev[t.id];
    },
    CHANNEL_DELETE: eL,
    THREAD_DELETE: eL,
    ACTIVE_CHANNELS_FETCH_START: function (e) {
        let { guildId: t } = e;
        ew[t] = { loading: !0, error: null, fetchedAt: Date.now() };
    },
    ACTIVE_CHANNELS_FETCH_SUCCESS: function (e) {
        let { guildId: t, channels: n } = e;
        (ew[t] = { loading: !1, error: null, fetchedAt: Date.now() }),
            (ev[t] = new Set()),
            n.forEach((e) => {
                let { channel_id: n, messages: i } = e;
                i.forEach((e) => {
                    eG(t, n, e.message_id, e.user_id);
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
let eU = {};
function ek(e, t) {
    let n = eU[e];
    return !(null == n || n.has(t)) && ((eU[e] = new Set(n.add(t))), !0);
}
class eM extends i.Ay.PersistedStore {
    static displayName = "GuildProgressStore";
    static persistKey = "GuildProgressStore";
    initialize(e) {
        this.waitFor(p.default, _.A, E.A),
            (eU = {}),
            null != e &&
                V.default.keys(e).forEach((t) => {
                    let n = e[t];
                    null != n && "function" == typeof n[Symbol.iterator] && (eU[t] = new Set(n));
                });
    }
    getProgress(e) {
        return eU[e];
    }
    hasProgress(e) {
        let t = eU[e];
        return null != t && !t.has(eP.gj.DISMISSED);
    }
    getState() {
        return eU;
    }
}
new eM(l.h, {
    CONNECTION_OPEN: function () {
        let e = [];
        V.default.keys(eU).forEach((t) => {
            eU[t].has(eP.gj.COMPLETED) && e.push(t);
        }),
            e.forEach((e) => ek(e, eP.gj.DISMISSED));
    },
    GUILD_PROGRESS_INITIALIZE: function (e) {
        let { guildId: t } = e;
        null == eU[t] && (eU[t] = new Set()), eU[t].has(eP.gj.COMPLETED) || eU[t].delete(eP.gj.DISMISSED);
    },
    GUILD_PROGRESS_COMPLETED_SEEN: function (e) {
        let { guildId: t } = e;
        if (null == eU[t]) return !1;
        eU[t] = new Set(eU[t].add(eP.gj.COMPLETED));
    },
    GUILD_PROGRESS_DISMISS: function (e) {
        let { guildId: t } = e;
        return ek(t, eP.gj.DISMISSED);
    },
    GUILD_CREATE: function (e) {
        let {
                guild: { id: t, member_count: n },
            } = e,
            i = E.A.getGuild(t);
        if (null == i) return !1;
        i.ownerId === p.default.getId() &&
            null != eU[i.id] &&
            (null != i.icon && eU[i.id].add(eP.gj.AVATAR), n > 1 && eU[i.id].add(eP.gj.INVITE));
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        return null != t && null != t.guild_id && null != eU[t.guild_id] && ek(t.guild_id, eP.gj.CHANNEL);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let e of t)
            null != e &&
                null != e.guild_id &&
                null != eU[e.guild_id] &&
                !1 !== ek(e.guild_id, eP.gj.CHANNEL) &&
                (n = !0);
        return n;
    },
    GUILD_SETTINGS_SUBMIT_SUCCESS: function (e) {
        let { guild: t } = e;
        return null != t && null != t.id && null != eU[t.id] && null != t.icon && ek(t.id, eP.gj.AVATAR);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e,
            i = _.A.getChannel(t);
        return (
            n.author?.id === p.default.getId() && null != i && null != eU[i.guild_id] && ek(i.guild_id, eP.gj.MESSAGE)
        );
    },
    GUILD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, memberCount: n } = e;
        return null != eU[t] && n > 1 && ek(t, eP.gj.INVITE);
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
var e$ = n(253932),
    eF = n(461213),
    eV = n(927813);
let ex = [],
    eH = !1;
function ej() {
    return ex.length >= 4 && ex.some((e) => e < Date.now() - 3 * eV.A.Millis.DAY);
}
class ez extends i.Ay.PersistedStore {
    static displayName = "HabitualDNDStore";
    static persistKey = "habitualDND";
    initialize(e) {
        this.waitFor(eF.A), null != e && Array.isArray(e.sessionStartsWithDND) && (ex = e.sessionStartsWithDND);
    }
    showNagBar() {
        return eH;
    }
    getState() {
        return { sessionStartsWithDND: ex };
    }
    getTemp() {
        return { x: e$.CY.getSetting() };
    }
}
new ez(l.h, {
    POST_CONNECTION_OPEN: function () {
        eF.A.getStatus() === ea.clD.DND && "0" === e$.CY.getSetting()
            ? (ex.push(Date.now()),
              (ex = ex.filter((e) => e > Date.now() - 5 * eV.A.Millis.DAY)),
              ej() &&
                  setTimeout(() => {
                      l.h.dispatch({ type: "HABITUAL_DND_CLEAR" });
                  }, 15 * eV.A.Millis.SECOND))
            : (ex = []);
    },
    HABITUAL_DND_CLEAR: function () {
        (eH = !!ej()), (ex = []);
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
var eB = n(451988),
    eY = n(308368),
    eW = n(973522),
    eK = n(674378),
    eq = n(760751),
    eQ = n(189081),
    eZ = n(763827);
let eX = "ActivityTrackingStore",
    eJ = 30 * eV.A.Millis.MINUTE,
    e0 = 5 * eV.A.Millis.MINUTE,
    e1 = o.w.get(eX) ?? {},
    e7 = {},
    e5 = !1;
function e3(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && e9(e, !0);
    let n = e7[e.applicationId];
    null != n && (n.stop(), delete e7[e.applicationId]), delete e1[e.applicationId], o.w.set(eX, e1);
}
function e9(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Date.now(),
        i = null != e.updatedAt ? n - e.updatedAt : 0;
    i > eJ + e0 && (i = 0);
    let l = (0, eK.kv)(e.applicationId, eQ.A),
        s = et.A.getVoiceChannelId(),
        a = p.default.getSessionId(),
        r = eZ.A.getMediaSessionId();
    eY.A.updateActivity({
        applicationId: e.applicationId,
        distributor: e.isDiscordApplication ? ea.d3x.DISCORD : e.distributor,
        shareActivity: l,
        token: e.token,
        duration: Math.floor(i / 1e3),
        closed: t,
        exePath: e.exePath,
        voiceChannelId: s,
        sessionId: a,
        mediaSessionId: r,
    }),
        (e.updatedAt = n);
    let u = e7[e.applicationId];
    null == u && (u = e7[e.applicationId] = new eB.IX()).start(eJ, () => e9(e)),
        t || ((e1[e.applicationId] = e), o.w.set(eX, e1));
}
function e6() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = eN.Ay.getVisibleRunningGames(),
        n = new Set();
    for (let e of t) {
        let t = eq.A.findGame(e);
        null != t &&
            (n.add(t.id),
            t.id in e1 ||
                e9({
                    applicationId: t.id,
                    updatedAt: Date.now(),
                    distributor: e.distributor,
                    exePath: (0, eW.Ic)(e.exePath ?? ""),
                }));
    }
    for (let t of Object.keys(e1)) n.has(t) || e3(e1[t], e);
}
function e8() {
    for (let e of Object.keys(e1)) e3(e1[e]);
    e5 = !1;
}
class e2 extends i.Ay.Store {
    static displayName = "ActivityTrackingStore";
    initialize() {
        this.waitFor(p.default, eq.A, eQ.A, eZ.A, eN.Ay, et.A, Y.A), this.syncWith([Y.A], e6);
    }
    getActivities() {
        return e1;
    }
}
new e2(l.h, {
    RUNNING_GAMES_CHANGE: () => e6(),
    CONNECTION_OPEN: function () {
        if (e5) return !1;
        for (let e of Object.keys(e1)) e9(e1[e]);
        e6(!1), (e5 = !0);
    },
    CONNECTION_CLOSED: function (e) {
        let { code: t } = e;
        4004 === t && e8();
    },
    LOGOUT: e8,
    ACTIVITY_UPDATE_SUCCESS: function (e) {
        let { applicationId: t, token: n } = e,
            i = e1[t];
        if (null == i) return !1;
        (i.token = n), o.w.set(eX, e1);
    },
    ACTIVITY_UPDATE_FAIL: function (e) {
        let { applicationId: t } = e,
            n = e1[t];
        if (null == n) return !1;
        (n.token = null), (n.updatedAt = null), o.w.set(eX, e1);
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
let e4 = {};
class te extends i.Ay.Store {
    static displayName = "ChannelSKUStore";
    getSkuIdForChannel(e) {
        return e4[e];
    }
}
new te(l.h, {
    CONNECTION_OPEN: function () {
        e4 = {};
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { channelId: t, storeListing: n } = e;
        null != t && (e4[t] = n.sku.id);
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
    n(969341),
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
