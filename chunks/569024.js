n.d(t, {
    T: () => M,
}),
    n(896048),
    n(446912),
    n(457529);
var r,
    i = n(61090);
n(237751);
var a = n(311907),
    s = n(506774),
    o = n(73153),
    l = n(154049),
    c = n(273867),
    u = n(773686),
    d = n(324827),
    f = n(348802),
    p = n(214771),
    _ = n(925948),
    h = n(980001),
    m = n(476196),
    g = n(531743),
    E = n(989950),
    b = n(264392),
    y = n(626584),
    O = n(142120),
    A = n(548965),
    v = n(917878),
    S = n(614792),
    I = n(778920),
    T = n(961350),
    C = n(309010),
    N = n(967198),
    R = n(612181),
    w = n(837367),
    P = n(736400),
    D = n(424234),
    x = n(652215);

function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let j = new y.A("CacheStore"),
    M = !1,
    k = !1,
    U = "initializing",
    G = 0,
    V = !1,
    F = !1,
    B = !1;

function H() {
    return (F = !0), (B = !0), !1;
}

function Y() {
    return (F = !1), (B = !0), !1;
}

function W() {
    V = !0;
}

function K() {
    (V = !0), (U = "cache-loaded");
}

function z() {
    U = "no-cache";
}

function q(e) {
    j.log("Clearing cache store"),
        (G = Date.now()),
        s.w.remove(x.j_2),
        s.w.remove(x.CT4),
        s.w.remove(x.XYq),
        (U = "no-cache"),
        "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (k = !0);
}

function X() {
    j.verbose("Writing cache now"), (G = Date.now()), (V = !0), s.w.remove(x.j_2), s.w.remove(x.XYq), s.w.remove(x.CT4);
}

function Z(e) {
    null != e.channels && (0, P.Ay)(e.channels),
        null != e.privateChannels && (0, P.Ay)(e.privateChannels),
        null != e.guildChannels && (0, P.X3)(e.guildChannels);
}
async function Q(e, t, n) {
    let r = performance.now();
    if (null != e && null != n) {
        let i = await f.Ay.startupLoad(e, t, n, x.EMb);
        j.verbose("loaded ".concat(i.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
        let a = {
            guildId: t,
            channelId: n,
            users: i.users,
            members: i.members,
            messages: i.messages,
        };
        return v.A.recordChannelFetchedLocal(n, v.a, null, null, x.EMb, i.messages), [performance.now() - r, a];
    }
    {
        let t = {
            guildId: null,
            channelId: null,
            users: [],
            members: [],
            messages: [],
        };
        return (
            j.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")),
            [performance.now() - r, t]
        );
    }
}
async function $(e, t, n) {
    var r, s, l;
    j.verbose("loading early cache");
    let c = O.A.getSocket();
    c.connect();
    let u = null != (r = N.A.getGuildId()) ? r : null,
        d = null != (s = C.A.getChannelId()) ? s : null,
        f = performance.now(),
        p = S.A.loadCachedMessages.measureAsyncWithoutNesting(() => Q(e, u, d)),
        E = S.A.fetchGuildCache.measureAsync(() => et(e, n)),
        b = S.A.fetchGuildCache.measureAsync(() => en(e, n)),
        y =
            null != e
                ? i.A.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => g.A.getAsync(e, null))
                : Promise.resolve([]),
        A =
            null == e
                ? Promise.resolve({})
                : i.A.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => m.A.getAll(e)),
        v = null == e ? Promise.resolve([]) : i.A.timeAsync("\uD83D\uDCBE", "cache: read_states", () => _.A.getAll(e)),
        I =
            null == e
                ? Promise.resolve([])
                : i.A.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => h.A.getAll(e)),
        [[T, R], w, P, x, L, M, k] = await Promise.all([p, E, b, y, A, v, I]),
        U = performance.now() - f;
    if ((j.verbose("cache loaded in ".concat(U, "ms (channel_history ").concat(T, "ms)")), null == R))
        return (
            (0, D.A)("database:history_cache_null"),
            j.verbose("finished without dispatching CACHE_LOADED"),
            [!1, null, 0]
        );
    {
        let r = Object.fromEntries(R.members.map((e) => [e.userId, e])),
            s = null != P.guildId && null != P.channels,
            f = P.guildId;
        return (
            a.Ay.Emitter.batched(() => {
                i.A.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
                    var e;
                    return o.h.dispatch({
                        type: "CACHE_LOADED",
                        guilds: w,
                        privateChannels: x,
                        initialGuildChannels: null != (e = P.channels) ? e : [],
                        users: [...R.users],
                        messages:
                            null == R.channelId
                                ? {}
                                : {
                                      [R.channelId]: R.messages,
                                  },
                        guildMembers:
                            null == R.guildId
                                ? {}
                                : {
                                      [R.guildId]: r,
                                  },
                        userSettings: L,
                        userGuildSettings: k,
                        readStates: M,
                    });
                }),
                    i.A.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () =>
                        c.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])),
                    );
            }),
            j.verbose(
                "early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: "
                    .concat(t, "\n          selected_guild: ")
                    .concat(u, "\n          selected_channel: ")
                    .concat(d, "\n          navigation_state: ")
                    .concat(JSON.stringify(n), "\n          database: ")
                    .concat(null != e, "\n            name: ")
                    .concat(
                        null == e ? void 0 : e.name,
                        "\n        data:\n          database:\n            private_channels: ",
                    )
                    .concat(x.length, "\n            channel_history:\n              guild: ")
                    .concat(R.guildId, "\n              channel: ")
                    .concat(R.channelId, "\n              messages: ")
                    .concat(R.messages.length, "\n                members: ")
                    .concat(R.members.length, "\n                users: ")
                    .concat(R.users.length, "\n            initial_guild:\n              id: ")
                    .concat(f, "\n              channels: ")
                    .concat(null == (l = P.channels) ? void 0 : l.length, "\n            user_settings: ")
                    .concat(Object.keys(L).length, "\n            read_states: ")
                    .concat(M.length, "\n            user_guild_settings: ")
                    .concat(k.length, "\n      )"),
            ),
            j.verbose("finished dispatching CACHE_LOADED"),
            [!0, s && null != f ? f : null, x.length]
        );
    }
}

function J() {
    return (
        ea(() =>
            o.h.dispatch({
                type: "CACHE_LOADED_LAZY_NO_CACHE",
            }),
        ),
        Promise.resolve()
    );
}
let ee = !1;
async function et(e, t) {
    var n, r;
    if (null == e) return [];
    switch (t.page) {
        case "private-channels":
        case "guild-channels":
            ee = !0;
            break;
        case "other":
            "@me" === t.guildId && (ee = !0);
    }
    if (ee)
        return null !=
            (r = await (0, l.kk)(() => i.A.timeAsync("\uD83D\uDCBE", "cache: guilds", () => u.A.getAsync(e))))
            ? r
            : [];
    let a = null != (n = (await p.A.getCommittedVersions()).initial_guild_id) ? n : t.guildId;
    if (null == a || "@me" === a) return [];
    let s = await (0, l.kk)(() => u.A.getOneAsync(e, a));
    return null != s ? [s] : [];
}
async function en(e, t) {
    if (null == e)
        return Promise.resolve({
            channels: null,
            guildId: null,
        });
    let n = (await p.A.getCommittedVersions()).initial_guild_id;
    if ((null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n))
        return (
            j.verbose("skipped loading initial guild (guild: ".concat(n, ", database: ").concat(e, ")")),
            Promise.resolve({
                channels: null,
                guildId: null,
            })
        );
    let r = n;
    return {
        channels: await (0, l.kk)(() => g.A.getAsync(e, r)),
        guildId: n,
    };
}

function er(e, t) {
    return (
        j.verbose("loading stale guild channels (count: ".concat(t.length, ", ids: ").concat(t.join(", "), ")")),
        Promise.all(t.map((t) => g.A.getAsync(e, t).then((e) => [t, e])))
    );
}
async function ei(e, t, n, r) {
    j.verbose("loading late lazy cache");
    let [a, s, f] = await S.A.fetchLazyCache.measureAsync(() =>
            Promise.all([
                (0, l.kk)(() =>
                    null != e
                        ? i.A.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => d.A.okAsync(e))
                        : Promise.resolve(!0),
                ),
                (0, l.kk)(() =>
                    null == e || ee
                        ? Promise.resolve([])
                        : i.A.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => u.A.getAsync(e)),
                ),
                (0, l.kk)(() =>
                    null != e
                        ? i.A.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => c.A.getAsync(e))
                        : Promise.resolve({
                              all: [],
                              stale: [],
                              channels: [],
                          }),
                ),
            ]),
        ),
        p = await S.A.fetchStaleChannels.measureAsync(() =>
            null != e && null != f && f.stale.length > 0 ? (0, l.kk)(() => er(e, f.stale)) : Promise.resolve([]),
        );
    if ((0, I.O)()) {
        var _;
        null != n &&
        ((null == s ? void 0 : s.some((e) => e.id === n)) ||
            (null == f || null == (_ = f.all)
                ? void 0
                : _.some((e) => {
                      let [t] = e;
                      return t === n;
                  })))
            ? (j.verbose("loadLateLazyCache: waiting for TTI (TTI automation with cached initial guild)"),
              await (0, b.i)())
            : j.verbose(
                  "loadLateLazyCache: not waiting for TTI or yielding to react (TTI automation with no cached initial guild)",
              );
    } else
        A.iQ.getCachedEnabled()
            ? j.verbose("loadLateLazyCache: not yielding to react")
            : (j.verbose("loadLateLazyCache: yielding to react"), await new Promise((e) => setTimeout(e, 0)));
    S.A.loadLazyCache.recordStart();
    let h = O.A.getSocket();
    ea(() => {
        let i = performance.now();
        if (!1 === a) {
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
        if (null == s || null == f || null == p) {
            (0, D.A)("database:load_failed"),
                j.log(
                    "couldn't load database item (\n          database: "
                        .concat(null != e, "\n          basic_channels: ")
                        .concat(null != f, "\n          guild_channels: ")
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
        if (null == a && (s.length > 0 || f.all.length > 0)) {
            (0, D.A)("database:versionless"),
                j.log("kv_cache was not ok (null version with values)"),
                o.h.dispatch({
                    type: "CLEAR_CACHES",
                    reason: "database:versionless",
                }),
                o.h.dispatch({
                    type: "CACHE_LOADED_LAZY_NO_CACHE",
                });
            return;
        }
        if (F) {
            (0, D.A)("already_connected"),
                j.log("Skipping lazy cache; already connected."),
                o.h.dispatch({
                    type: "CACHE_LOADED_LAZY_NO_CACHE",
                });
            return;
        }
        h.addAnalytics({
            hadCacheAtStartup: !0,
        });
        let l = {
            type: "CACHE_LOADED_LAZY",
            guilds: s,
            guildChannels: p,
            basicGuildChannels: f.channels,
            initialGuildId: n,
        };
        S.A.deserializeCache.measure(() => Z(l)),
            S.A.dispatchLazyCache.measure(() => o.h.dispatch(l)),
            j.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - i, "ms)")),
            h.addAnalytics({
                usedCacheAtStartup: !0,
            });
        let c = p.reduce((e, t) => {
                let [n, r] = t;
                return e + r.length;
            }, 0),
            u = p.length,
            d = f.all.reduce((e, t) => {
                let [n, r] = t;
                return e + r.length;
            }, 0),
            _ = f.channels.reduce((e, t) => {
                let [n, r] = t;
                return e + r.length;
            }, 0),
            m = d - _,
            g = 0 === f.stale.length ? "" : " \xb7 ".concat(f.stale.join(", "));
        j.verbose(
            "lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: "
                .concat(t, "\n          initial_guild: ")
                .concat(n, "\n          database: ")
                .concat(null != e, "\n            ok: ")
                .concat(a, "\n            name: ")
                .concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            guilds: ")
                .concat(s.length, "\n            basic_channels:\n              total: ")
                .concat(d, " (")
                .concat(f.channels.length, " guilds)\n              stale: ")
                .concat(m, " (")
                .concat(f.stale.length, " guilds")
                .concat(g, ")\n              unstale: ")
                .concat(_, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ")
                .concat(c, " (")
                .concat(p.length, " guilds)\n      )"),
        ),
            S.A.setCacheInfo({
                guilds: s.length,
                privateChannels: r,
                basicChannels: d,
                basicChannelsStale: m,
                fullChannels: c,
                fullChannelGuilds: u,
            });
    });
}

function ea(e) {
    let t = O.A.getSocket(),
        n = !1;
    a.Ay.Emitter.batched(() => {
        try {
            if ((e(), !t.dispatcher.hasStuffToDispatchNow())) {
                j.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                return;
            }
            (n = !0),
                S.A.loadLazyCache.recordEnd(),
                j.verbose("Processing First Queued Dispatch"),
                t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])),
                setTimeout(() => {
                    j.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                }, 100);
        } catch (e) {
            j.warn("Lazy cache has encountered error", e),
                o.h.dispatch({
                    type: "RESET_SOCKET",
                    args: {
                        error: e,
                        action: "LazyCache",
                    },
                });
        }
    }),
        n || S.A.loadLazyCache.recordEnd();
}
class es extends (r = a.Ay.Store) {
    initialize() {
        this.waitFor(T.default, O.A, C.A, N.A), M || O.A.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !M || V;
    }
    getLazyCacheStatus() {
        return M ? U : "no-cache";
    }
    get lastWriteTime() {
        return G;
    }
    canWriteCaches(e) {
        return (0, R.wR)()
            ? k
                ? (j.log("Not writing cache because caches cleared"), !1)
                : !!e || !!B || (j.log("Not writing cache because never connected"), !1)
            : (j.log("Not writing cache because not authenticated"), !1);
    }
    async loadCacheAsync(e, t) {
        let n = (0, w.q)(t);
        if ("initializing" !== U) {
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
            let t = T.default.getId(),
                r = E.A.carefullyOpenDatabase(t),
                [i, a, s] = await S.A.loadMiniCache.measureAsync(() => $(r, t, e));
            i ? (n(), await ei(r, t, a, s)) : (n(), await J());
        } catch (e) {
            j.error("clearing cache. exception encountered while loading cache.", e, e.stack),
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
L(es, "displayName", "CacheStore"),
    new es(
        o.h,
        M
            ? {
                  CONNECTION_OPEN: H,
                  LOGOUT: q,
                  CONNECTION_CLOSED: Y,
                  CACHE_LOADED: W,
                  CACHE_LOADED_LAZY: K,
                  CACHE_LOADED_LAZY_NO_CACHE: z,
                  CLEAR_CACHES: q,
                  WRITE_CACHES: X,
              }
            : {},
    );
