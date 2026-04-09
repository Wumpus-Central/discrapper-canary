var i = n(61090);
n(237751);
var r = n(311907),
    a = n(506774),
    l = n(73153),
    s = n(154049),
    o = n(273867),
    d = n(773686),
    c = n(324827),
    u = n(348802),
    A = n(214771),
    h = n(925948),
    _ = n(980001),
    m = n(476196),
    p = n(531743),
    g = n(989950),
    E = n(264392),
    I = n(626584),
    f = n(142120),
    C = n(548965),
    T = n(917878),
    N = n(614792),
    S = n(961350),
    x = n(309010),
    v = n(967198),
    b = n(612181),
    y = n(723702),
    O = n(837367),
    L = n(736400),
    R = n(424234),
    P = n(652215);
let D = new I.A("CacheStore"),
    M = !1,
    j = "initializing",
    w = 0;
async function U(e, t, n) {
    let i = performance.now();
    if (null == e || null == n)
        return (
            D.verbose(`skipped loaded messages (channel: ${n}, database: ${e}).`),
            [performance.now() - i, { guildId: null, channelId: null, users: [], members: [], messages: [] }]
        );
    {
        let r = await u.Ay.startupLoad(e, t, n, P.EMb);
        D.verbose(`loaded ${r.messages.length} messages (guild: ${t}, channel: ${n}).`);
        let a = { guildId: t, channelId: n, users: r.users, members: r.members, messages: r.messages };
        return T.A.recordChannelFetchedLocal(n, T.a, null, null, P.EMb, r.messages), [performance.now() - i, a];
    }
}
async function G(e, t, n) {
    D.verbose("loading early cache");
    let a = f.A.getSocket();
    a.connect();
    let s = v.A.getGuildId() ?? null,
        o = x.A.getChannelId() ?? null,
        d = performance.now(),
        c = N.A.loadCachedMessages.measureAsyncWithoutNesting(() => U(e, s, o)),
        u = N.A.fetchGuildCache.measureAsync(() => V(e, n)),
        A = N.A.fetchGuildCache.measureAsync(() => B(e, n)),
        g =
            null != e
                ? i.A.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => p.A.getAsync(e, null))
                : Promise.resolve([]),
        E =
            null == e
                ? Promise.resolve({})
                : i.A.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => m.A.getAll(e)),
        I = null == e ? Promise.resolve([]) : i.A.timeAsync("\uD83D\uDCBE", "cache: read_states", () => h.A.getAll(e)),
        C =
            null == e
                ? Promise.resolve([])
                : i.A.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => _.A.getAll(e)),
        [[T, S], b, y, O, L, P, M] = await Promise.all([c, u, A, g, E, I, C]),
        j = performance.now() - d;
    if ((D.verbose(`cache loaded in ${j}ms (channel_history ${T}ms)`), null == S))
        return (
            (0, R.A)("database:history_cache_null"),
            D.verbose("finished without dispatching CACHE_LOADED"),
            [!1, null, 0]
        );
    let w = Object.fromEntries(S.members.map((e) => [e.userId, e])),
        G = null != y.guildId && null != y.channels,
        k = y.guildId;
    return (
        await new Promise((e, t) =>
            r.Ay.Emitter.batched(() => {
                i.A.time("\uD83D\uDCBE", "Dispatch Mini Cache", () =>
                    l.h
                        .dispatch({
                            type: "CACHE_LOADED",
                            guilds: b,
                            privateChannels: O,
                            initialGuildChannels: y.channels ?? [],
                            users: [...S.users],
                            messages: null == S.channelId ? {} : { [S.channelId]: S.messages },
                            guildMembers: null == S.guildId ? {} : { [S.guildId]: w },
                            userSettings: L,
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
        D.verbose(`early_cache_summary: (
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
            private_channels: ${O.length}
            channel_history:
              guild: ${S.guildId}
              channel: ${S.channelId}
              messages: ${S.messages.length}
                members: ${S.members.length}
                users: ${S.users.length}
            initial_guild:
              id: ${k}
              channels: ${y.channels?.length}
            user_settings: ${Object.keys(L).length}
            read_states: ${P.length}
            user_guild_settings: ${M.length}
      )`),
        N.A.setEarlyCacheInfo({ guilds: b.length }),
        D.verbose("finished dispatching CACHE_LOADED"),
        [!0, G ? (k ?? null) : null, O.length]
    );
}
let k = !1;
async function V(e, t) {
    if (null == e) return [];
    switch (t.page) {
        case "private-channels":
        case "guild-channels":
            k = !0;
            break;
        case "other":
            "@me" === t.guildId && (k = !0);
    }
    if (k) return (await (0, s.kk)(() => i.A.timeAsync("\uD83D\uDCBE", "cache: guilds", () => d.A.getAsync(e)))) ?? [];
    let n = (await A.A.getCommittedVersions()).initial_guild_id ?? t.guildId;
    if (null == n || "@me" === n) return [];
    let r = await (0, s.kk)(() => d.A.getOneAsync(e, n));
    return null != r ? [r] : [];
}
async function B(e, t) {
    if (null == e) return Promise.resolve({ channels: null, guildId: null });
    let n = (await A.A.getCommittedVersions()).initial_guild_id;
    if ((null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n))
        return (
            D.verbose(`skipped loading initial guild (guild: ${n}, database: ${e})`),
            Promise.resolve({ channels: null, guildId: null })
        );
    let i = n;
    return { channels: await (0, s.kk)(() => p.A.getAsync(e, i)), guildId: n };
}
async function H(e, t, n, r) {
    D.verbose("loading late lazy cache");
    let [a, u, A] = await N.A.fetchLazyCache.measureAsync(() =>
            Promise.all([
                (0, s.kk)(() =>
                    null != e
                        ? i.A.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => c.A.okAsync(e))
                        : Promise.resolve(!0),
                ),
                (0, s.kk)(() =>
                    null == e || k
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
        h = await N.A.fetchStaleChannels.measureAsync(() =>
            null != e && null != A && A.stale.length > 0
                ? (0, s.kk)(() => {
                      var t;
                      return (
                          (t = A.stale),
                          D.verbose(`loading stale guild channels (count: ${t.length}, ids: ${t.join(", ")})`),
                          Promise.all(t.map((t) => p.A.getAsync(e, t).then((e) => [t, e])))
                      );
                  })
                : Promise.resolve([]),
        );
    C.iQ.getCachedEnabled()
        ? D.verbose("loadLateLazyCache: not yielding to react")
        : (D.verbose("loadLateLazyCache: yielding to react"), await (0, E.i)((0, y.isIOS)() ? 0 : void 0)),
        N.A.loadLazyCache.recordStart();
    let _ = f.A.getSocket();
    F(() => {
        let i = performance.now();
        if (!1 === a) {
            (0, R.A)("database:not_ok"),
                l.h.dispatch({ type: "CLEAR_CACHES", reason: "database:not_ok" }),
                l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (null == u || null == A || null == h) {
            (0, R.A)("database:load_failed"),
                D.log(`couldn't load database item (
          database: ${null != e}
          basic_channels: ${null != A}
          guild_channels: ${null != h}
          guilds: ${null != u}
        )`),
                l.h.dispatch({ type: "CLEAR_CACHES", reason: "database:load_failed" }),
                l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (null == a && (u.length > 0 || A.all.length > 0)) {
            (0, R.A)("database:versionless"),
                D.log("kv_cache was not ok (null version with values)"),
                l.h.dispatch({ type: "CLEAR_CACHES", reason: "database:versionless" }),
                l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        0;
        _.addAnalytics({ hadCacheAtStartup: !0 });
        let s = {
            type: "CACHE_LOADED_LAZY",
            guilds: u,
            guildChannels: h,
            basicGuildChannels: A.channels,
            initialGuildId: n,
        };
        N.A.deserializeCache.measure(() => {
            null != s.channels && (0, L.Ay)(s.channels),
                null != s.privateChannels && (0, L.Ay)(s.privateChannels),
                null != s.guildChannels && (0, L.X3)(s.guildChannels);
        }),
            N.A.dispatchLazyCache.measure(() => l.h.dispatch(s)),
            D.verbose(`late lazy cache loaded (ok: true, took: ${performance.now() - i}ms)`),
            _.addAnalytics({ usedCacheAtStartup: !0 });
        let o = h.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            d = h.length,
            c = A.all.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            m = A.channels.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            p = c - m,
            g = 0 === A.stale.length ? "" : ` \xb7 ${A.stale.join(", ")}`;
        D.verbose(`lazy_cache_summary: (
        ok: true
        meta:
          auth_user_id: ${t}
          initial_guild: ${n}
          database: ${null != e}
            ok: ${a}
            name: ${e?.name}
        data:
          database:
            guilds: ${u.length}
            basic_channels:
              total: ${c} (${A.channels.length} guilds)
              stale: ${p} (${A.stale.length} guilds${g})
              unstale: ${m}
            full_channels (guilds_with_stale_basic_channels):
              total: ${o} (${h.length} guilds)
      )`),
            N.A.setLazyCacheInfo({
                guilds: u.length,
                privateChannels: r,
                basicChannels: c,
                basicChannelsStale: p,
                fullChannels: o,
                fullChannelGuilds: d,
            });
    });
}
function F(e) {
    let t = f.A.getSocket(),
        n = !1;
    r.Ay.Emitter.batched(() => {
        try {
            if ((e(), !t.dispatcher.hasStuffToDispatchNow())) {
                D.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                return;
            }
            (n = !0),
                N.A.loadLazyCache.recordEnd(),
                D.verbose("Processing First Queued Dispatch"),
                t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])),
                setTimeout(() => {
                    D.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                }, 100);
        } catch (e) {
            D.warn("Lazy cache has encountered error", e),
                l.h.dispatch({ type: "RESET_SOCKET", args: { error: e, action: "LazyCache" } });
        }
    }),
        n || N.A.loadLazyCache.recordEnd();
}
class Y extends r.Ay.Store {
    static displayName = "CacheStore";
    initialize() {
        this.waitFor(S.default, f.A, x.A, v.A), f.A.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !0;
    }
    getLazyCacheStatus() {
        return "no-cache";
    }
    get lastWriteTime() {
        return w;
    }
    canWriteCaches(e) {
        return (0, b.wR)()
            ? M
                ? (D.log("Not writing cache because caches cleared"), !1)
                : !!e || (D.log("Not writing cache because never connected"), !1)
            : (D.log("Not writing cache because not authenticated"), !1);
    }
    async loadCacheAsync(e, t) {
        let n = (0, O.q)(t);
        N.A.setInitialPage(e.page);
        let i = e.guildId;
        if ((N.A.setInitialGuildId(null != i && "@me" !== i ? i : null), "initializing" !== j)) {
            (0, R.A)("cache:lazy_cache_not_initializing"),
                n(),
                setTimeout(() => f.A.getSocket()?.dispatcher?.unpauseDispatchQueue(), 0);
            return;
        }
        try {
            let t = S.default.getId(),
                i = g.A.carefullyOpenDatabase(t),
                [r, a, s] = await N.A.loadMiniCache.measureAsync(() => G(i, t, e));
            r
                ? (n(), await H(i, t, a, s))
                : (n(), await (F(() => l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" })), Promise.resolve()));
        } catch (e) {
            D.error("clearing cache. exception encountered while loading cache.", e, e.stack),
                (0, R.A)("cache:exception", e),
                n(),
                l.h.dispatch({ type: "RESET_SOCKET", args: { error: e, action: "loadCacheAsync" } });
        }
    }
}
new Y(l.h, {});
