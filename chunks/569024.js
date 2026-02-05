n.d(t, { T: () => D });
var i = n(61090);
n(237751);
var s = n(311907),
    r = n(506774),
    a = n(73153),
    l = n(154049),
    o = n(273867),
    c = n(773686),
    d = n(324827),
    u = n(348802),
    _ = n(214771),
    m = n(925948),
    A = n(980001),
    g = n(476196),
    E = n(531743),
    h = n(989950),
    p = n(264392),
    C = n(626584),
    x = n(142120),
    T = n(548965),
    I = n(917878),
    S = n(614792),
    f = n(961350),
    N = n(309010),
    b = n(967198),
    R = n(612181),
    v = n(723702),
    O = n(837367),
    j = n(736400),
    P = n(424234),
    y = n(652215);
let L = new C.A("CacheStore"),
    D = !1,
    M = !1,
    G = "initializing",
    U = 0,
    k = !1,
    B = !1,
    w = !1;
function H(e) {
    L.log("Clearing cache store"),
        (U = Date.now()),
        r.w.remove(y.j_2),
        r.w.remove(y.CT4),
        r.w.remove(y.XYq),
        (G = "no-cache"),
        "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (M = !0);
}
async function V(e, t, n) {
    let i = performance.now();
    if (null == e || null == n)
        return (
            L.verbose(`skipped loaded messages (channel: ${n}, database: ${e}).`),
            [performance.now() - i, { guildId: null, channelId: null, users: [], members: [], messages: [] }]
        );
    {
        let s = await u.Ay.startupLoad(e, t, n, y.EMb);
        L.verbose(`loaded ${s.messages.length} messages (guild: ${t}, channel: ${n}).`);
        let r = { guildId: t, channelId: n, users: s.users, members: s.members, messages: s.messages };
        return I.A.recordChannelFetchedLocal(n, I.a, null, null, y.EMb, s.messages), [performance.now() - i, r];
    }
}
async function F(e, t, n) {
    L.verbose("loading early cache");
    let r = x.A.getSocket();
    r.connect();
    let l = b.A.getGuildId() ?? null,
        o = N.A.getChannelId() ?? null,
        c = performance.now(),
        d = S.A.loadCachedMessages.measureAsyncWithoutNesting(() => V(e, l, o)),
        u = S.A.fetchGuildCache.measureAsync(() => W(e, n)),
        _ = S.A.fetchGuildCache.measureAsync(() => z(e, n)),
        h =
            null != e
                ? i.A.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => E.A.getAsync(e, null))
                : Promise.resolve([]),
        p =
            null == e
                ? Promise.resolve({})
                : i.A.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => g.A.getAll(e)),
        C = null == e ? Promise.resolve([]) : i.A.timeAsync("\uD83D\uDCBE", "cache: read_states", () => m.A.getAll(e)),
        T =
            null == e
                ? Promise.resolve([])
                : i.A.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => A.A.getAll(e)),
        [[I, f], R, v, O, j, y, D] = await Promise.all([d, u, _, h, p, C, T]),
        M = performance.now() - c;
    if ((L.verbose(`cache loaded in ${M}ms (channel_history ${I}ms)`), null == f))
        return (
            (0, P.A)("database:history_cache_null"),
            L.verbose("finished without dispatching CACHE_LOADED"),
            [!1, null, 0]
        );
    {
        let c = Object.fromEntries(f.members.map((e) => [e.userId, e])),
            d = null != v.guildId && null != v.channels,
            u = v.guildId;
        return (
            s.Ay.Emitter.batched(() => {
                i.A.time("\uD83D\uDCBE", "Dispatch Mini Cache", () =>
                    a.h.dispatch({
                        type: "CACHE_LOADED",
                        guilds: R,
                        privateChannels: O,
                        initialGuildChannels: v.channels ?? [],
                        users: [...f.users],
                        messages: null == f.channelId ? {} : { [f.channelId]: f.messages },
                        guildMembers: null == f.guildId ? {} : { [f.guildId]: c },
                        userSettings: j,
                        userGuildSettings: D,
                        readStates: y,
                    }),
                ),
                    i.A.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () =>
                        r.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])),
                    );
            }),
            L.verbose(`early_cache_summary: (
        ok: true
        meta:
          auth_user_id: ${t}
          selected_guild: ${l}
          selected_channel: ${o}
          navigation_state: ${JSON.stringify(n)}
          database: ${null != e}
            name: ${e?.name}
        data:
          database:
            private_channels: ${O.length}
            channel_history:
              guild: ${f.guildId}
              channel: ${f.channelId}
              messages: ${f.messages.length}
                members: ${f.members.length}
                users: ${f.users.length}
            initial_guild:
              id: ${u}
              channels: ${v.channels?.length}
            user_settings: ${Object.keys(j).length}
            read_states: ${y.length}
            user_guild_settings: ${D.length}
      )`),
            L.verbose("finished dispatching CACHE_LOADED"),
            [!0, d ? (u ?? null) : null, O.length]
        );
    }
}
let Y = !1;
async function W(e, t) {
    if (null == e) return [];
    switch (t.page) {
        case "private-channels":
        case "guild-channels":
            Y = !0;
            break;
        case "other":
            "@me" === t.guildId && (Y = !0);
    }
    if (Y) return (await (0, l.kk)(() => i.A.timeAsync("\uD83D\uDCBE", "cache: guilds", () => c.A.getAsync(e)))) ?? [];
    let n = (await _.A.getCommittedVersions()).initial_guild_id ?? t.guildId;
    if (null == n || "@me" === n) return [];
    let s = await (0, l.kk)(() => c.A.getOneAsync(e, n));
    return null != s ? [s] : [];
}
async function z(e, t) {
    if (null == e) return Promise.resolve({ channels: null, guildId: null });
    let n = (await _.A.getCommittedVersions()).initial_guild_id;
    if ((null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n))
        return (
            L.verbose(`skipped loading initial guild (guild: ${n}, database: ${e})`),
            Promise.resolve({ channels: null, guildId: null })
        );
    let i = n;
    return { channels: await (0, l.kk)(() => E.A.getAsync(e, i)), guildId: n };
}
async function K(e, t, n, s) {
    L.verbose("loading late lazy cache");
    let [r, u, _] = await S.A.fetchLazyCache.measureAsync(() =>
            Promise.all([
                (0, l.kk)(() =>
                    null != e
                        ? i.A.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => d.A.okAsync(e))
                        : Promise.resolve(!0),
                ),
                (0, l.kk)(() =>
                    null == e || Y
                        ? Promise.resolve([])
                        : i.A.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => c.A.getAsync(e)),
                ),
                (0, l.kk)(() =>
                    null != e
                        ? i.A.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => o.A.getAsync(e))
                        : Promise.resolve({ all: [], stale: [], channels: [] }),
                ),
            ]),
        ),
        m = await S.A.fetchStaleChannels.measureAsync(() =>
            null != e && null != _ && _.stale.length > 0
                ? (0, l.kk)(() => {
                      var t;
                      return (
                          (t = _.stale),
                          L.verbose(`loading stale guild channels (count: ${t.length}, ids: ${t.join(", ")})`),
                          Promise.all(t.map((t) => E.A.getAsync(e, t).then((e) => [t, e])))
                      );
                  })
                : Promise.resolve([]),
        );
    T.iQ.getCachedEnabled()
        ? L.verbose("loadLateLazyCache: not yielding to react")
        : (L.verbose("loadLateLazyCache: yielding to react"), await (0, p.i)((0, v.isIOS)() ? 0 : void 0)),
        S.A.loadLazyCache.recordStart();
    let A = x.A.getSocket();
    Z(() => {
        let i = performance.now();
        if (!1 === r) {
            (0, P.A)("database:not_ok"),
                a.h.dispatch({ type: "CLEAR_CACHES", reason: "database:not_ok" }),
                a.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (null == u || null == _ || null == m) {
            (0, P.A)("database:load_failed"),
                L.log(`couldn't load database item (
          database: ${null != e}
          basic_channels: ${null != _}
          guild_channels: ${null != m}
          guilds: ${null != u}
        )`),
                a.h.dispatch({ type: "CLEAR_CACHES", reason: "database:load_failed" }),
                a.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (null == r && (u.length > 0 || _.all.length > 0)) {
            (0, P.A)("database:versionless"),
                L.log("kv_cache was not ok (null version with values)"),
                a.h.dispatch({ type: "CLEAR_CACHES", reason: "database:versionless" }),
                a.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (B) {
            (0, P.A)("already_connected"),
                L.log("Skipping lazy cache; already connected."),
                a.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        A.addAnalytics({ hadCacheAtStartup: !0 });
        let l = {
            type: "CACHE_LOADED_LAZY",
            guilds: u,
            guildChannels: m,
            basicGuildChannels: _.channels,
            initialGuildId: n,
        };
        S.A.deserializeCache.measure(() => {
            null != l.channels && (0, j.Ay)(l.channels),
                null != l.privateChannels && (0, j.Ay)(l.privateChannels),
                null != l.guildChannels && (0, j.X3)(l.guildChannels);
        }),
            S.A.dispatchLazyCache.measure(() => a.h.dispatch(l)),
            L.verbose(`late lazy cache loaded (ok: true, took: ${performance.now() - i}ms)`),
            A.addAnalytics({ usedCacheAtStartup: !0 });
        let o = m.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            c = m.length,
            d = _.all.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            g = _.channels.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            E = d - g,
            h = 0 === _.stale.length ? "" : ` \xb7 ${_.stale.join(", ")}`;
        L.verbose(`lazy_cache_summary: (
        ok: true
        meta:
          auth_user_id: ${t}
          initial_guild: ${n}
          database: ${null != e}
            ok: ${r}
            name: ${e?.name}
        data:
          database:
            guilds: ${u.length}
            basic_channels:
              total: ${d} (${_.channels.length} guilds)
              stale: ${E} (${_.stale.length} guilds${h})
              unstale: ${g}
            full_channels (guilds_with_stale_basic_channels):
              total: ${o} (${m.length} guilds)
      )`),
            S.A.setCacheInfo({
                guilds: u.length,
                privateChannels: s,
                basicChannels: d,
                basicChannelsStale: E,
                fullChannels: o,
                fullChannelGuilds: c,
            });
    });
}
function Z(e) {
    let t = x.A.getSocket(),
        n = !1;
    s.Ay.Emitter.batched(() => {
        try {
            if ((e(), !t.dispatcher.hasStuffToDispatchNow())) {
                L.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                return;
            }
            (n = !0),
                S.A.loadLazyCache.recordEnd(),
                L.verbose("Processing First Queued Dispatch"),
                t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])),
                setTimeout(() => {
                    L.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                }, 100);
        } catch (e) {
            L.warn("Lazy cache has encountered error", e),
                a.h.dispatch({ type: "RESET_SOCKET", args: { error: e, action: "LazyCache" } });
        }
    }),
        n || S.A.loadLazyCache.recordEnd();
}
class X extends s.Ay.Store {
    static displayName = "CacheStore";
    initialize() {
        this.waitFor(f.default, x.A, N.A, b.A), D || x.A.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !D || k;
    }
    getLazyCacheStatus() {
        return D ? G : "no-cache";
    }
    get lastWriteTime() {
        return U;
    }
    canWriteCaches(e) {
        return (0, R.wR)()
            ? M
                ? (L.log("Not writing cache because caches cleared"), !1)
                : !!e || !!w || (L.log("Not writing cache because never connected"), !1)
            : (L.log("Not writing cache because not authenticated"), !1);
    }
    async loadCacheAsync(e, t) {
        let n = (0, O.q)(t);
        if ("initializing" !== G) {
            (0, P.A)("cache:lazy_cache_not_initializing"),
                n(),
                setTimeout(() => x.A.getSocket()?.dispatcher?.unpauseDispatchQueue(), 0);
            return;
        }
        try {
            let t = f.default.getId(),
                i = h.A.carefullyOpenDatabase(t),
                [s, r, l] = await S.A.loadMiniCache.measureAsync(() => F(i, t, e));
            s
                ? (n(), await K(i, t, r, l))
                : (n(), await (Z(() => a.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" })), Promise.resolve()));
        } catch (e) {
            L.error("clearing cache. exception encountered while loading cache.", e, e.stack),
                (0, P.A)("cache:exception"),
                n(),
                a.h.dispatch({ type: "RESET_SOCKET", args: { error: e, action: "loadCacheAsync" } });
        }
    }
}
new X(
    a.h,
    D
        ? {
              CONNECTION_OPEN: function () {
                  return (B = !0), (w = !0), !1;
              },
              LOGOUT: H,
              CONNECTION_CLOSED: function () {
                  return (B = !1), (w = !0), !1;
              },
              CACHE_LOADED: function () {
                  k = !0;
              },
              CACHE_LOADED_LAZY: function () {
                  (k = !0), (G = "cache-loaded");
              },
              CACHE_LOADED_LAZY_NO_CACHE: function () {
                  G = "no-cache";
              },
              CLEAR_CACHES: H,
              WRITE_CACHES: function () {
                  L.verbose("Writing cache now"),
                      (U = Date.now()),
                      (k = !0),
                      r.w.remove(y.j_2),
                      r.w.remove(y.XYq),
                      r.w.remove(y.CT4);
              },
          }
        : {},
);
