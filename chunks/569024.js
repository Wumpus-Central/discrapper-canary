n.d(t, {
    T: () => M,
}),
    n(896048),
    n(446912),
    n(457529);
var r,
    i,
    l = n(61090);
n(237751);
var s = n(311907),
    a = n(506774),
    o = n(73153),
    c = n(154049),
    d = n(273867),
    u = n(773686),
    _ = n(324827),
    p = n(348802),
    m = n(214771),
    g = n(925948),
    A = n(980001),
    f = n(476196),
    h = n(531743),
    b = n(989950),
    E = n(264392),
    x = n(626584),
    O = n(142120),
    C = n(548965),
    I = n(917878),
    T = n(614792),
    S = n(778920),
    j = n(961350),
    v = n(309010),
    N = n(967198),
    y = n(612181),
    P = n(837367),
    R = n(736400),
    D = n(424234),
    w = n(652215);
let L = new x.A("CacheStore"),
    M = !1,
    U = !1,
    G = "initializing",
    k = 0,
    V = !1,
    H = !1,
    B = !1;

function F(e) {
    L.log("Clearing cache store"),
        (k = Date.now()),
        a.w.remove(w.j_2),
        a.w.remove(w.CT4),
        a.w.remove(w.XYq),
        (G = "no-cache"),
        "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (U = !0);
}
async function Y(e, t, n) {
    let r = performance.now();
    if (null == e || null == n)
        return (
            L.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")),
            [
                performance.now() - r,
                {
                    guildId: null,
                    channelId: null,
                    users: [],
                    members: [],
                    messages: [],
                },
            ]
        );
    {
        let i = await p.Ay.startupLoad(e, t, n, w.EMb);
        L.verbose("loaded ".concat(i.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
        let l = {
            guildId: t,
            channelId: n,
            users: i.users,
            members: i.members,
            messages: i.messages,
        };
        return I.A.recordChannelFetchedLocal(n, I.a, null, null, w.EMb, i.messages), [performance.now() - r, l];
    }
}
async function W(e, t, n) {
    var r, i, a;
    L.verbose("loading early cache");
    let c = O.A.getSocket();
    c.connect();
    let d = null != (r = N.A.getGuildId()) ? r : null,
        u = null != (i = v.A.getChannelId()) ? i : null,
        _ = performance.now(),
        p = T.A.loadCachedMessages.measureAsyncWithoutNesting(() => Y(e, d, u)),
        m = T.A.fetchGuildCache.measureAsync(() => K(e, n)),
        b = T.A.fetchGuildCache.measureAsync(() => Z(e, n)),
        E =
            null != e
                ? l.A.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => h.A.getAsync(e, null))
                : Promise.resolve([]),
        x =
            null == e
                ? Promise.resolve({})
                : l.A.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => f.A.getAll(e)),
        C = null == e ? Promise.resolve([]) : l.A.timeAsync("\uD83D\uDCBE", "cache: read_states", () => g.A.getAll(e)),
        I =
            null == e
                ? Promise.resolve([])
                : l.A.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => A.A.getAll(e)),
        [[S, j], y, P, R, w, M, U] = await Promise.all([p, m, b, E, x, C, I]),
        G = performance.now() - _;
    if ((L.verbose("cache loaded in ".concat(G, "ms (channel_history ").concat(S, "ms)")), null == j))
        return (
            (0, D.A)("database:history_cache_null"),
            L.verbose("finished without dispatching CACHE_LOADED"),
            [!1, null, 0]
        );
    {
        let r = Object.fromEntries(j.members.map((e) => [e.userId, e])),
            i = null != P.guildId && null != P.channels,
            _ = P.guildId;
        return (
            s.Ay.Emitter.batched(() => {
                l.A.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
                    var e;
                    return o.h.dispatch({
                        type: "CACHE_LOADED",
                        guilds: y,
                        privateChannels: R,
                        initialGuildChannels: null != (e = P.channels) ? e : [],
                        users: [...j.users],
                        messages:
                            null == j.channelId
                                ? {}
                                : {
                                      [j.channelId]: j.messages,
                                  },
                        guildMembers:
                            null == j.guildId
                                ? {}
                                : {
                                      [j.guildId]: r,
                                  },
                        userSettings: w,
                        userGuildSettings: U,
                        readStates: M,
                    });
                }),
                    l.A.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () =>
                        c.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])),
                    );
            }),
            L.verbose(
                "early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: "
                    .concat(t, "\n          selected_guild: ")
                    .concat(d, "\n          selected_channel: ")
                    .concat(u, "\n          navigation_state: ")
                    .concat(JSON.stringify(n), "\n          database: ")
                    .concat(null != e, "\n            name: ")
                    .concat(
                        null == e ? void 0 : e.name,
                        "\n        data:\n          database:\n            private_channels: ",
                    )
                    .concat(R.length, "\n            channel_history:\n              guild: ")
                    .concat(j.guildId, "\n              channel: ")
                    .concat(j.channelId, "\n              messages: ")
                    .concat(j.messages.length, "\n                members: ")
                    .concat(j.members.length, "\n                users: ")
                    .concat(j.users.length, "\n            initial_guild:\n              id: ")
                    .concat(_, "\n              channels: ")
                    .concat(null == (a = P.channels) ? void 0 : a.length, "\n            user_settings: ")
                    .concat(Object.keys(w).length, "\n            read_states: ")
                    .concat(M.length, "\n            user_guild_settings: ")
                    .concat(U.length, "\n      )"),
            ),
            L.verbose("finished dispatching CACHE_LOADED"),
            [!0, i && null != _ ? _ : null, R.length]
        );
    }
}
let z = !1;
async function K(e, t) {
    var n, r;
    if (null == e) return [];
    switch (t.page) {
        case "private-channels":
        case "guild-channels":
            z = !0;
            break;
        case "other":
            "@me" === t.guildId && (z = !0);
    }
    if (z)
        return null !=
            (r = await (0, c.kk)(() => l.A.timeAsync("\uD83D\uDCBE", "cache: guilds", () => u.A.getAsync(e))))
            ? r
            : [];
    let i = null != (n = (await m.A.getCommittedVersions()).initial_guild_id) ? n : t.guildId;
    if (null == i || "@me" === i) return [];
    let s = await (0, c.kk)(() => u.A.getOneAsync(e, i));
    return null != s ? [s] : [];
}
async function Z(e, t) {
    if (null == e)
        return Promise.resolve({
            channels: null,
            guildId: null,
        });
    let n = (await m.A.getCommittedVersions()).initial_guild_id;
    if ((null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n))
        return (
            L.verbose("skipped loading initial guild (guild: ".concat(n, ", database: ").concat(e, ")")),
            Promise.resolve({
                channels: null,
                guildId: null,
            })
        );
    let r = n;
    return {
        channels: await (0, c.kk)(() => h.A.getAsync(e, r)),
        guildId: n,
    };
}
async function X(e, t, n, r) {
    L.verbose("loading late lazy cache");
    let [i, s, a] = await T.A.fetchLazyCache.measureAsync(() =>
            Promise.all([
                (0, c.kk)(() =>
                    null != e
                        ? l.A.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => _.A.okAsync(e))
                        : Promise.resolve(!0),
                ),
                (0, c.kk)(() =>
                    null == e || z
                        ? Promise.resolve([])
                        : l.A.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => u.A.getAsync(e)),
                ),
                (0, c.kk)(() =>
                    null != e
                        ? l.A.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => d.A.getAsync(e))
                        : Promise.resolve({
                              all: [],
                              stale: [],
                              channels: [],
                          }),
                ),
            ]),
        ),
        p = await T.A.fetchStaleChannels.measureAsync(() =>
            null != e && null != a && a.stale.length > 0
                ? (0, c.kk)(() => {
                      var t;
                      return (
                          (t = a.stale),
                          L.verbose(
                              "loading stale guild channels (count: "
                                  .concat(t.length, ", ids: ")
                                  .concat(t.join(", "), ")"),
                          ),
                          Promise.all(t.map((t) => h.A.getAsync(e, t).then((e) => [t, e])))
                      );
                  })
                : Promise.resolve([]),
        );
    if ((0, S.O)()) {
        var m;
        null != n &&
        ((null == s ? void 0 : s.some((e) => e.id === n)) ||
            (null == a || null == (m = a.all)
                ? void 0
                : m.some((e) => {
                      let [t] = e;
                      return t === n;
                  })))
            ? (L.verbose("loadLateLazyCache: waiting for TTI (TTI automation with cached initial guild)"),
              await (0, E.i)())
            : L.verbose(
                  "loadLateLazyCache: not waiting for TTI or yielding to react (TTI automation with no cached initial guild)",
              );
    } else
        C.iQ.getCachedEnabled()
            ? L.verbose("loadLateLazyCache: not yielding to react")
            : (L.verbose("loadLateLazyCache: yielding to react"), await new Promise((e) => setTimeout(e, 0)));
    T.A.loadLazyCache.recordStart();
    let g = O.A.getSocket();
    q(() => {
        let l = performance.now();
        if (!1 === i) {
            (0, D.A)("database:not_ok"),
                o.h.dispatch({
                    type: "CLEAR_CACHES",
                    reason: "database:not_ok",
                }),
                o.h.dispatch({
                    type: "CACHE_LOADED_LAZY_NO_CACHE",
                });
            return;
        }
        if (null == s || null == a || null == p) {
            (0, D.A)("database:load_failed"),
                L.log(
                    "couldn't load database item (\n          database: "
                        .concat(null != e, "\n          basic_channels: ")
                        .concat(null != a, "\n          guild_channels: ")
                        .concat(null != p, "\n          guilds: ")
                        .concat(null != s, "\n        )"),
                ),
                o.h.dispatch({
                    type: "CLEAR_CACHES",
                    reason: "database:load_failed",
                }),
                o.h.dispatch({
                    type: "CACHE_LOADED_LAZY_NO_CACHE",
                });
            return;
        }
        if (null == i && (s.length > 0 || a.all.length > 0)) {
            (0, D.A)("database:versionless"),
                L.log("kv_cache was not ok (null version with values)"),
                o.h.dispatch({
                    type: "CLEAR_CACHES",
                    reason: "database:versionless",
                }),
                o.h.dispatch({
                    type: "CACHE_LOADED_LAZY_NO_CACHE",
                });
            return;
        }
        if (H) {
            (0, D.A)("already_connected"),
                L.log("Skipping lazy cache; already connected."),
                o.h.dispatch({
                    type: "CACHE_LOADED_LAZY_NO_CACHE",
                });
            return;
        }
        g.addAnalytics({
            hadCacheAtStartup: !0,
        });
        let c = {
            type: "CACHE_LOADED_LAZY",
            guilds: s,
            guildChannels: p,
            basicGuildChannels: a.channels,
            initialGuildId: n,
        };
        T.A.deserializeCache.measure(() => {
            null != c.channels && (0, R.Ay)(c.channels),
                null != c.privateChannels && (0, R.Ay)(c.privateChannels),
                null != c.guildChannels && (0, R.X3)(c.guildChannels);
        }),
            T.A.dispatchLazyCache.measure(() => o.h.dispatch(c)),
            L.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - l, "ms)")),
            g.addAnalytics({
                usedCacheAtStartup: !0,
            });
        let d = p.reduce((e, t) => {
                let [n, r] = t;
                return e + r.length;
            }, 0),
            u = p.length,
            _ = a.all.reduce((e, t) => {
                let [n, r] = t;
                return e + r.length;
            }, 0),
            m = a.channels.reduce((e, t) => {
                let [n, r] = t;
                return e + r.length;
            }, 0),
            A = _ - m,
            f = 0 === a.stale.length ? "" : " \xb7 ".concat(a.stale.join(", "));
        L.verbose(
            "lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: "
                .concat(t, "\n          initial_guild: ")
                .concat(n, "\n          database: ")
                .concat(null != e, "\n            ok: ")
                .concat(i, "\n            name: ")
                .concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            guilds: ")
                .concat(s.length, "\n            basic_channels:\n              total: ")
                .concat(_, " (")
                .concat(a.channels.length, " guilds)\n              stale: ")
                .concat(A, " (")
                .concat(a.stale.length, " guilds")
                .concat(f, ")\n              unstale: ")
                .concat(m, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ")
                .concat(d, " (")
                .concat(p.length, " guilds)\n      )"),
        ),
            T.A.setCacheInfo({
                guilds: s.length,
                privateChannels: r,
                basicChannels: _,
                basicChannelsStale: A,
                fullChannels: d,
                fullChannelGuilds: u,
            });
    });
}

function q(e) {
    let t = O.A.getSocket(),
        n = !1;
    s.Ay.Emitter.batched(() => {
        try {
            if ((e(), !t.dispatcher.hasStuffToDispatchNow())) {
                L.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                return;
            }
            (n = !0),
                T.A.loadLazyCache.recordEnd(),
                L.verbose("Processing First Queued Dispatch"),
                t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])),
                setTimeout(() => {
                    L.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                }, 100);
        } catch (e) {
            L.warn("Lazy cache has encountered error", e),
                o.h.dispatch({
                    type: "RESET_SOCKET",
                    args: {
                        error: e,
                        action: "LazyCache",
                    },
                });
        }
    }),
        n || T.A.loadLazyCache.recordEnd();
}
class J extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(j.default, O.A, v.A, N.A), M || O.A.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !M || V;
    }
    getLazyCacheStatus() {
        return M ? G : "no-cache";
    }
    get lastWriteTime() {
        return k;
    }
    canWriteCaches(e) {
        return (0, y.wR)()
            ? U
                ? (L.log("Not writing cache because caches cleared"), !1)
                : !!e || !!B || (L.log("Not writing cache because never connected"), !1)
            : (L.log("Not writing cache because not authenticated"), !1);
    }
    async loadCacheAsync(e, t) {
        let n = (0, P.q)(t);
        if ("initializing" !== G) {
            (0, D.A)("cache:lazy_cache_not_initializing"),
                n(),
                setTimeout(() => {
                    var e, t;
                    return null == (t = O.A.getSocket()) || null == (e = t.dispatcher)
                        ? void 0
                        : e.unpauseDispatchQueue();
                }, 0);
            return;
        }
        try {
            let t = j.default.getId(),
                r = b.A.carefullyOpenDatabase(t),
                [i, l, s] = await T.A.loadMiniCache.measureAsync(() => W(r, t, e));
            i
                ? (n(), await X(r, t, l, s))
                : (n(),
                  await (q(() =>
                      o.h.dispatch({
                          type: "CACHE_LOADED_LAZY_NO_CACHE",
                      }),
                  ),
                  Promise.resolve()));
        } catch (e) {
            L.error("clearing cache. exception encountered while loading cache.", e, e.stack),
                (0, D.A)("cache:exception"),
                n(),
                o.h.dispatch({
                    type: "RESET_SOCKET",
                    args: {
                        error: e,
                        action: "loadCacheAsync",
                    },
                });
        }
    }
}
(i = "displayName") in J
    ? Object.defineProperty(J, i, {
          value: "CacheStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (J[i] = "CacheStore"),
    new J(
        o.h,
        M
            ? {
                  CONNECTION_OPEN: function () {
                      return (H = !0), (B = !0), !1;
                  },
                  LOGOUT: F,
                  CONNECTION_CLOSED: function () {
                      return (H = !1), (B = !0), !1;
                  },
                  CACHE_LOADED: function () {
                      V = !0;
                  },
                  CACHE_LOADED_LAZY: function () {
                      (V = !0), (G = "cache-loaded");
                  },
                  CACHE_LOADED_LAZY_NO_CACHE: function () {
                      G = "no-cache";
                  },
                  CLEAR_CACHES: F,
                  WRITE_CACHES: function () {
                      L.verbose("Writing cache now"),
                          (k = Date.now()),
                          (V = !0),
                          a.w.remove(w.j_2),
                          a.w.remove(w.XYq),
                          a.w.remove(w.CT4);
                  },
              }
            : {},
    );
