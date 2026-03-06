n.d(t, { T: () => L });
var i = n(61090);
n(237751);
var s = n(311907),
    l = n(506774),
    a = n(73153),
    r = n(154049),
    o = n(273867),
    d = n(773686),
    c = n(324827),
    u = n(348802),
    _ = n(214771),
    g = n(925948),
    m = n(980001),
    A = n(476196),
    h = n(531743),
    p = n(989950),
    x = n(264392),
    E = n(626584),
    T = n(142120),
    S = n(548965),
    C = n(917878),
    f = n(614792),
    I = n(961350),
    b = n(309010),
    N = n(967198),
    v = n(612181),
    j = n(723702),
    O = n(837367),
    R = n(736400),
    y = n(424234),
    P = n(652215);
let D = new E.A("CacheStore"),
    L = !1,
    G = !1,
    M = "initializing",
    U = 0,
    k = !1,
    V = !1,
    w = !1;
function H(e) {
    D.log("Clearing cache store"),
        (U = Date.now()),
        l.w.remove(P.j_2),
        l.w.remove(P.CT4),
        l.w.remove(P.XYq),
        (M = "no-cache"),
        "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (G = !0);
}
async function B(e, t, n) {
    let i = performance.now();
    if (null == e || null == n)
        return (
            D.verbose(`skipped loaded messages (channel: ${n}, database: ${e}).`),
            [performance.now() - i, { guildId: null, channelId: null, users: [], members: [], messages: [] }]
        );
    {
        let s = await u.Ay.startupLoad(e, t, n, P.EMb);
        D.verbose(`loaded ${s.messages.length} messages (guild: ${t}, channel: ${n}).`);
        let l = { guildId: t, channelId: n, users: s.users, members: s.members, messages: s.messages };
        return C.A.recordChannelFetchedLocal(n, C.a, null, null, P.EMb, s.messages), [performance.now() - i, l];
    }
}
async function F(e, t, n) {
    D.verbose("loading early cache");
    let l = T.A.getSocket();
    l.connect();
    let r = N.A.getGuildId() ?? null,
        o = b.A.getChannelId() ?? null,
        d = performance.now(),
        c = f.A.loadCachedMessages.measureAsyncWithoutNesting(() => B(e, r, o)),
        u = f.A.fetchGuildCache.measureAsync(() => z(e, n)),
        _ = f.A.fetchGuildCache.measureAsync(() => X(e, n)),
        p =
            null != e
                ? i.A.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => h.A.getAsync(e, null))
                : Promise.resolve([]),
        x =
            null == e
                ? Promise.resolve({})
                : i.A.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => A.A.getAll(e)),
        E = null == e ? Promise.resolve([]) : i.A.timeAsync("\uD83D\uDCBE", "cache: read_states", () => g.A.getAll(e)),
        S =
            null == e
                ? Promise.resolve([])
                : i.A.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => m.A.getAll(e)),
        [[C, I], v, j, O, R, P, L] = await Promise.all([c, u, _, p, x, E, S]),
        G = performance.now() - d;
    if ((D.verbose(`cache loaded in ${G}ms (channel_history ${C}ms)`), null == I))
        return (
            (0, y.A)("database:history_cache_null"),
            D.verbose("finished without dispatching CACHE_LOADED"),
            [!1, null, 0]
        );
    let M = Object.fromEntries(I.members.map((e) => [e.userId, e])),
        U = null != j.guildId && null != j.channels,
        k = j.guildId;
    return (
        s.Ay.Emitter.batched(() => {
            i.A.time("\uD83D\uDCBE", "Dispatch Mini Cache", () =>
                a.h.dispatch({
                    type: "CACHE_LOADED",
                    guilds: v,
                    privateChannels: O,
                    initialGuildChannels: j.channels ?? [],
                    users: [...I.users],
                    messages: null == I.channelId ? {} : { [I.channelId]: I.messages },
                    guildMembers: null == I.guildId ? {} : { [I.guildId]: M },
                    userSettings: R,
                    userGuildSettings: L,
                    readStates: P,
                }),
            ),
                i.A.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () =>
                    l.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])),
                );
        }),
        D.verbose(`early_cache_summary: (
        ok: true
        meta:
          auth_user_id: ${t}
          selected_guild: ${r}
          selected_channel: ${o}
          navigation_state: ${JSON.stringify(n)}
          database: ${null != e}
            name: ${e?.name}
        data:
          database:
            private_channels: ${O.length}
            channel_history:
              guild: ${I.guildId}
              channel: ${I.channelId}
              messages: ${I.messages.length}
                members: ${I.members.length}
                users: ${I.users.length}
            initial_guild:
              id: ${k}
              channels: ${j.channels?.length}
            user_settings: ${Object.keys(R).length}
            read_states: ${P.length}
            user_guild_settings: ${L.length}
      )`),
        f.A.setEarlyCacheInfo({ guilds: v.length }),
        D.verbose("finished dispatching CACHE_LOADED"),
        [!0, U ? (k ?? null) : null, O.length]
    );
}
let Y = !1;
async function z(e, t) {
    if (null == e) return [];
    switch (t.page) {
        case "private-channels":
        case "guild-channels":
            Y = !0;
            break;
        case "other":
            "@me" === t.guildId && (Y = !0);
    }
    if (Y) return (await (0, r.kk)(() => i.A.timeAsync("\uD83D\uDCBE", "cache: guilds", () => d.A.getAsync(e)))) ?? [];
    let n = (await _.A.getCommittedVersions()).initial_guild_id ?? t.guildId;
    if (null == n || "@me" === n) return [];
    let s = await (0, r.kk)(() => d.A.getOneAsync(e, n));
    return null != s ? [s] : [];
}
async function X(e, t) {
    if (null == e) return Promise.resolve({ channels: null, guildId: null });
    let n = (await _.A.getCommittedVersions()).initial_guild_id;
    if ((null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n))
        return (
            D.verbose(`skipped loading initial guild (guild: ${n}, database: ${e})`),
            Promise.resolve({ channels: null, guildId: null })
        );
    let i = n;
    return { channels: await (0, r.kk)(() => h.A.getAsync(e, i)), guildId: n };
}
async function W(e, t, n, s) {
    D.verbose("loading late lazy cache");
    let [l, u, _] = await f.A.fetchLazyCache.measureAsync(() =>
            Promise.all([
                (0, r.kk)(() =>
                    null != e
                        ? i.A.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => c.A.okAsync(e))
                        : Promise.resolve(!0),
                ),
                (0, r.kk)(() =>
                    null == e || Y
                        ? Promise.resolve([])
                        : i.A.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => d.A.getAsync(e)),
                ),
                (0, r.kk)(() =>
                    null != e
                        ? i.A.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => o.A.getAsync(e))
                        : Promise.resolve({ all: [], stale: [], channels: [] }),
                ),
            ]),
        ),
        g = await f.A.fetchStaleChannels.measureAsync(() =>
            null != e && null != _ && _.stale.length > 0
                ? (0, r.kk)(() => {
                      var t;
                      return (
                          (t = _.stale),
                          D.verbose(`loading stale guild channels (count: ${t.length}, ids: ${t.join(", ")})`),
                          Promise.all(t.map((t) => h.A.getAsync(e, t).then((e) => [t, e])))
                      );
                  })
                : Promise.resolve([]),
        );
    S.iQ.getCachedEnabled()
        ? D.verbose("loadLateLazyCache: not yielding to react")
        : (D.verbose("loadLateLazyCache: yielding to react"), await (0, x.i)((0, j.isIOS)() ? 0 : void 0)),
        f.A.loadLazyCache.recordStart();
    let m = T.A.getSocket();
    K(() => {
        let i = performance.now();
        if (!1 === l) {
            (0, y.A)("database:not_ok"),
                a.h.dispatch({ type: "CLEAR_CACHES", reason: "database:not_ok" }),
                a.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (null == u || null == _ || null == g) {
            (0, y.A)("database:load_failed"),
                D.log(`couldn't load database item (
          database: ${null != e}
          basic_channels: ${null != _}
          guild_channels: ${null != g}
          guilds: ${null != u}
        )`),
                a.h.dispatch({ type: "CLEAR_CACHES", reason: "database:load_failed" }),
                a.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (null == l && (u.length > 0 || _.all.length > 0)) {
            (0, y.A)("database:versionless"),
                D.log("kv_cache was not ok (null version with values)"),
                a.h.dispatch({ type: "CLEAR_CACHES", reason: "database:versionless" }),
                a.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (V) {
            (0, y.A)("already_connected"),
                D.log("Skipping lazy cache; already connected."),
                a.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        m.addAnalytics({ hadCacheAtStartup: !0 });
        let r = {
            type: "CACHE_LOADED_LAZY",
            guilds: u,
            guildChannels: g,
            basicGuildChannels: _.channels,
            initialGuildId: n,
        };
        f.A.deserializeCache.measure(() => {
            null != r.channels && (0, R.Ay)(r.channels),
                null != r.privateChannels && (0, R.Ay)(r.privateChannels),
                null != r.guildChannels && (0, R.X3)(r.guildChannels);
        }),
            f.A.dispatchLazyCache.measure(() => a.h.dispatch(r)),
            D.verbose(`late lazy cache loaded (ok: true, took: ${performance.now() - i}ms)`),
            m.addAnalytics({ usedCacheAtStartup: !0 });
        let o = g.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            d = g.length,
            c = _.all.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            A = _.channels.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            h = c - A,
            p = 0 === _.stale.length ? "" : ` \xb7 ${_.stale.join(", ")}`;
        D.verbose(`lazy_cache_summary: (
        ok: true
        meta:
          auth_user_id: ${t}
          initial_guild: ${n}
          database: ${null != e}
            ok: ${l}
            name: ${e?.name}
        data:
          database:
            guilds: ${u.length}
            basic_channels:
              total: ${c} (${_.channels.length} guilds)
              stale: ${h} (${_.stale.length} guilds${p})
              unstale: ${A}
            full_channels (guilds_with_stale_basic_channels):
              total: ${o} (${g.length} guilds)
      )`),
            f.A.setLazyCacheInfo({
                guilds: u.length,
                privateChannels: s,
                basicChannels: c,
                basicChannelsStale: h,
                fullChannels: o,
                fullChannelGuilds: d,
            });
    });
}
function K(e) {
    let t = T.A.getSocket(),
        n = !1;
    s.Ay.Emitter.batched(() => {
        try {
            if ((e(), !t.dispatcher.hasStuffToDispatchNow())) {
                D.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                return;
            }
            (n = !0),
                f.A.loadLazyCache.recordEnd(),
                D.verbose("Processing First Queued Dispatch"),
                t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])),
                setTimeout(() => {
                    D.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                }, 100);
        } catch (e) {
            D.warn("Lazy cache has encountered error", e),
                a.h.dispatch({ type: "RESET_SOCKET", args: { error: e, action: "LazyCache" } });
        }
    }),
        n || f.A.loadLazyCache.recordEnd();
}
class Z extends s.Ay.Store {
    static displayName = "CacheStore";
    initialize() {
        this.waitFor(I.default, T.A, b.A, N.A), L || T.A.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !L || k;
    }
    getLazyCacheStatus() {
        return L ? M : "no-cache";
    }
    get lastWriteTime() {
        return U;
    }
    canWriteCaches(e) {
        return (0, v.wR)()
            ? G
                ? (D.log("Not writing cache because caches cleared"), !1)
                : !!e || !!w || (D.log("Not writing cache because never connected"), !1)
            : (D.log("Not writing cache because not authenticated"), !1);
    }
    async loadCacheAsync(e, t) {
        let n = (0, O.q)(t);
        if ((f.A.setInitialPage(e.page), "initializing" !== M)) {
            (0, y.A)("cache:lazy_cache_not_initializing"),
                n(),
                setTimeout(() => T.A.getSocket()?.dispatcher?.unpauseDispatchQueue(), 0);
            return;
        }
        try {
            let t = I.default.getId(),
                i = p.A.carefullyOpenDatabase(t),
                [s, l, r] = await f.A.loadMiniCache.measureAsync(() => F(i, t, e));
            s
                ? (n(), await W(i, t, l, r))
                : (n(), await (K(() => a.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" })), Promise.resolve()));
        } catch (e) {
            D.error("clearing cache. exception encountered while loading cache.", e, e.stack),
                (0, y.A)("cache:exception"),
                n(),
                a.h.dispatch({ type: "RESET_SOCKET", args: { error: e, action: "loadCacheAsync" } });
        }
    }
}
new Z(
    a.h,
    L
        ? {
              CONNECTION_OPEN: function () {
                  return (V = !0), (w = !0), !1;
              },
              LOGOUT: H,
              CONNECTION_CLOSED: function () {
                  return (V = !1), (w = !0), !1;
              },
              CACHE_LOADED: function () {
                  k = !0;
              },
              CACHE_LOADED_LAZY: function () {
                  (k = !0), (M = "cache-loaded");
              },
              CACHE_LOADED_LAZY_NO_CACHE: function () {
                  M = "no-cache";
              },
              CLEAR_CACHES: H,
              WRITE_CACHES: function () {
                  D.verbose("Writing cache now"),
                      (U = Date.now()),
                      (k = !0),
                      l.w.remove(P.j_2),
                      l.w.remove(P.XYq),
                      l.w.remove(P.CT4);
              },
          }
        : {},
);
