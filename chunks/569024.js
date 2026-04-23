var i = n(61090);
n(237751);
var r = n(311907),
    a = n(506774),
    l = n(73153),
    s = n(154049),
    o = n(273867),
    d = n(773686),
    u = n(324827),
    c = n(348802),
    A = n(214771),
    h = n(925948),
    _ = n(980001),
    E = n(476196),
    p = n(531743),
    m = n(989950),
    g = n(264392),
    I = n(626584),
    C = n(142120),
    f = n(548965),
    T = n(917878),
    S = n(614792),
    N = n(961350),
    O = n(309010),
    L = n(967198),
    y = n(612181),
    v = n(723702),
    b = n(837367),
    D = n(736400),
    R = n(424234),
    P = n(652215);
let w = new I.A("CacheStore"),
    M = !1,
    U = "initializing",
    x = 0;
async function G(e, t, n) {
    let i = performance.now();
    if (null == e || null == n)
        return (
            w.verbose(`skipped loaded messages (channel: ${n}, database: ${e}).`),
            [performance.now() - i, { guildId: null, channelId: null, users: [], members: [], messages: [] }]
        );
    {
        let r = await c.Ay.startupLoad(e, t, n, P.EMb);
        w.verbose(`loaded ${r.messages.length} messages (guild: ${t}, channel: ${n}).`);
        let a = { guildId: t, channelId: n, users: r.users, members: r.members, messages: r.messages };
        return T.A.recordChannelFetchedLocal(n, T.a, null, null, P.EMb, r.messages), [performance.now() - i, a];
    }
}
async function k(e, t, n) {
    w.verbose("loading early cache");
    let a = C.A.getSocket();
    a.connect();
    let s = L.A.getGuildId() ?? null,
        o = O.A.getChannelId() ?? null,
        d = performance.now(),
        u = S.A.loadCachedMessages.measureAsyncWithoutNesting(() => G(e, s, o)),
        c = S.A.fetchGuildCache.measureAsync(() => V(e, n)),
        A = S.A.fetchGuildCache.measureAsync(() => H(e, n)),
        m =
            null != e
                ? i.A.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => p.A.getAsync(e, null))
                : Promise.resolve([]),
        g =
            null == e
                ? Promise.resolve({})
                : i.A.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => E.A.getAll(e)),
        I = null == e ? Promise.resolve([]) : i.A.timeAsync("\uD83D\uDCBE", "cache: read_states", () => h.A.getAll(e)),
        f =
            null == e
                ? Promise.resolve([])
                : i.A.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => _.A.getAll(e)),
        [[T, N], y, v, b, D, P, M] = await Promise.all([u, c, A, m, g, I, f]),
        U = performance.now() - d;
    if ((w.verbose(`cache loaded in ${U}ms (channel_history ${T}ms)`), null == N))
        return (
            (0, R.A)("database:history_cache_null"),
            w.verbose("finished without dispatching CACHE_LOADED"),
            [!1, null, 0]
        );
    let x = Object.fromEntries(N.members.map((e) => [e.userId, e])),
        k = null != v.guildId && null != v.channels,
        j = v.guildId;
    return (
        await new Promise((e, t) =>
            r.Ay.Emitter.batched(() => {
                i.A.time("\uD83D\uDCBE", "Dispatch Mini Cache", () =>
                    l.h
                        .dispatch({
                            type: "CACHE_LOADED",
                            guilds: y,
                            privateChannels: b,
                            initialGuildChannels: v.channels ?? [],
                            users: [...N.users],
                            messages: null == N.channelId ? {} : { [N.channelId]: N.messages },
                            guildMembers: null == N.guildId ? {} : { [N.guildId]: x },
                            userSettings: D,
                            userGuildSettings: M,
                            readStates: P,
                        })
                        .then(e, t),
                ),
                    i.A.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () =>
                        a.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])),
                    );
            }),
        ),
        w.verbose(`early_cache_summary: (
        ok: true
        meta:
          auth_user_id: ${t}
          selected_guild: ${s}
          selected_channel: ${o}
          navigation_state: ${JSON.stringify(n)}
          database: ${null != e}
            name: ${e?.name}
        data:
          database:
            private_channels: ${b.length}
            channel_history:
              guild: ${N.guildId}
              channel: ${N.channelId}
              messages: ${N.messages.length}
                members: ${N.members.length}
                users: ${N.users.length}
            initial_guild:
              id: ${j}
              channels: ${v.channels?.length}
            user_settings: ${Object.keys(D).length}
            read_states: ${P.length}
            user_guild_settings: ${M.length}
      )`),
        S.A.setEarlyCacheInfo({ guilds: y.length }),
        w.verbose("finished dispatching CACHE_LOADED"),
        [!0, k ? (j ?? null) : null, b.length]
    );
}
let j = !1;
async function V(e, t) {
    if (null == e) return [];
    switch (t.page) {
        case "private-channels":
        case "guild-channels":
            j = !0;
            break;
        case "other":
            "@me" === t.guildId && (j = !0);
    }
    if (j) return (await (0, s.kk)(() => i.A.timeAsync("\uD83D\uDCBE", "cache: guilds", () => d.A.getAsync(e)))) ?? [];
    let n = (await A.A.getCommittedVersions()).initial_guild_id ?? t.guildId;
    if (null == n || "@me" === n) return [];
    let r = await (0, s.kk)(() => d.A.getOneAsync(e, n));
    return null != r ? [r] : [];
}
async function H(e, t) {
    if (null == e) return Promise.resolve({ channels: null, guildId: null });
    let n = (await A.A.getCommittedVersions()).initial_guild_id;
    if ((null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n))
        return (
            w.verbose(`skipped loading initial guild (guild: ${n}, database: ${e})`),
            Promise.resolve({ channels: null, guildId: null })
        );
    let i = n;
    return { channels: await (0, s.kk)(() => p.A.getAsync(e, i)), guildId: n };
}
async function B(e, t, n, r) {
    w.verbose("loading late lazy cache");
    let [a, c, A] = await S.A.fetchLazyCache.measureAsync(() =>
            Promise.all([
                (0, s.kk)(() =>
                    null != e
                        ? i.A.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => u.A.okAsync(e))
                        : Promise.resolve(!0),
                ),
                (0, s.kk)(() =>
                    null == e || j
                        ? Promise.resolve([])
                        : i.A.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => d.A.getAsync(e)),
                ),
                (0, s.kk)(() =>
                    null != e
                        ? i.A.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => o.A.getAsync(e))
                        : Promise.resolve({ all: [], stale: [], channels: [] }),
                ),
            ]),
        ),
        h = await S.A.fetchStaleChannels.measureAsync(() =>
            null != e && null != A && A.stale.length > 0
                ? (0, s.kk)(() => {
                      var t;
                      return (
                          (t = A.stale),
                          w.verbose(`loading stale guild channels (count: ${t.length}, ids: ${t.join(", ")})`),
                          Promise.all(t.map((t) => p.A.getAsync(e, t).then((e) => [t, e])))
                      );
                  })
                : Promise.resolve([]),
        );
    f.iQ.getCachedEnabled()
        ? w.verbose("loadLateLazyCache: not yielding to react")
        : (w.verbose("loadLateLazyCache: yielding to react"), await (0, g.i)((0, v.isIOS)() ? 0 : void 0)),
        S.A.loadLazyCache.recordStart();
    let _ = C.A.getSocket();
    F(() => {
        let i = performance.now();
        if (!1 === a) {
            (0, R.A)("database:not_ok"),
                l.h.dispatch({ type: "CLEAR_CACHES", reason: "database:not_ok" }),
                l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (null == c || null == A || null == h) {
            (0, R.A)("database:load_failed"),
                w.log(`couldn't load database item (
          database: ${null != e}
          basic_channels: ${null != A}
          guild_channels: ${null != h}
          guilds: ${null != c}
        )`),
                l.h.dispatch({ type: "CLEAR_CACHES", reason: "database:load_failed" }),
                l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (null == a && (c.length > 0 || A.all.length > 0)) {
            (0, R.A)("database:versionless"),
                w.log("kv_cache was not ok (null version with values)"),
                l.h.dispatch({ type: "CLEAR_CACHES", reason: "database:versionless" }),
                l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        0;
        _.addAnalytics({ hadCacheAtStartup: !0 });
        let s = {
            type: "CACHE_LOADED_LAZY",
            guilds: c,
            guildChannels: h,
            basicGuildChannels: A.channels,
            initialGuildId: n,
        };
        S.A.deserializeCache.measure(() => {
            null != s.channels && (0, D.Ay)(s.channels),
                null != s.privateChannels && (0, D.Ay)(s.privateChannels),
                null != s.guildChannels && (0, D.X3)(s.guildChannels);
        }),
            S.A.dispatchLazyCache.measure(() => l.h.dispatch(s)),
            w.verbose(`late lazy cache loaded (ok: true, took: ${performance.now() - i}ms)`),
            _.addAnalytics({ usedCacheAtStartup: !0 });
        let o = h.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            d = h.length,
            u = A.all.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            E = A.channels.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            p = u - E,
            m = 0 === A.stale.length ? "" : ` \xb7 ${A.stale.join(", ")}`;
        w.verbose(`lazy_cache_summary: (
        ok: true
        meta:
          auth_user_id: ${t}
          initial_guild: ${n}
          database: ${null != e}
            ok: ${a}
            name: ${e?.name}
        data:
          database:
            guilds: ${c.length}
            basic_channels:
              total: ${u} (${A.channels.length} guilds)
              stale: ${p} (${A.stale.length} guilds${m})
              unstale: ${E}
            full_channels (guilds_with_stale_basic_channels):
              total: ${o} (${h.length} guilds)
      )`),
            S.A.setLazyCacheInfo({
                guilds: c.length,
                privateChannels: r,
                basicChannels: u,
                basicChannelsStale: p,
                fullChannels: o,
                fullChannelGuilds: d,
            });
    });
}
function F(e) {
    let t = C.A.getSocket(),
        n = !1;
    r.Ay.Emitter.batched(() => {
        try {
            if ((e(), !t.dispatcher.hasStuffToDispatchNow())) {
                w.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                return;
            }
            (n = !0),
                S.A.loadLazyCache.recordEnd(),
                w.verbose("Processing First Queued Dispatch"),
                t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])),
                setTimeout(() => {
                    w.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                }, 100);
        } catch (e) {
            w.warn("Lazy cache has encountered error", e),
                l.h.dispatch({ type: "RESET_SOCKET", args: { error: e, action: "LazyCache" } });
        }
    }),
        n || S.A.loadLazyCache.recordEnd();
}
class Y extends r.Ay.Store {
    static displayName = "CacheStore";
    initialize() {
        this.waitFor(N.default, C.A, O.A, L.A), C.A.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !0;
    }
    getLazyCacheStatus() {
        return "no-cache";
    }
    get lastWriteTime() {
        return x;
    }
    canWriteCaches(e) {
        return (0, y.wR)()
            ? M
                ? (w.log("Not writing cache because caches cleared"), !1)
                : !!e || (w.log("Not writing cache because never connected"), !1)
            : (w.log("Not writing cache because not authenticated"), !1);
    }
    async loadCacheAsync(e, t) {
        let n = (0, b.q)(t);
        S.A.setInitialPage(e.page);
        let i = e.guildId;
        if ((S.A.setInitialGuildId(null != i && "@me" !== i ? i : null), "initializing" !== U)) {
            (0, R.A)("cache:lazy_cache_not_initializing"),
                n(),
                setTimeout(() => C.A.getSocket()?.dispatcher?.unpauseDispatchQueue(), 0);
            return;
        }
        try {
            let t = N.default.getId(),
                i = m.A.carefullyOpenDatabase(t),
                [r, a, s] = await S.A.loadMiniCache.measureAsync(() => k(i, t, e));
            r
                ? (n(), await B(i, t, a, s))
                : (n(), await (F(() => l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" })), Promise.resolve()));
        } catch (e) {
            w.error("clearing cache. exception encountered while loading cache.", e, e.stack),
                (0, R.A)("cache:exception", e),
                n(),
                l.h.dispatch({ type: "RESET_SOCKET", args: { error: e, action: "loadCacheAsync" } });
        }
    }
}
new Y(l.h, {});
