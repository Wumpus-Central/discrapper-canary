n.d(t, { q: () => j }), n(388685), n(467055), n(49124);
var r,
    i = n(135273);
n(724522);
var a = n(442837),
    o = n(433517),
    s = n(570140),
    l = n(86670),
    c = n(261375),
    u = n(17567),
    d = n(795513),
    f = n(685736),
    p = n(266750),
    _ = n(768910),
    m = n(632093),
    h = n(347994),
    g = n(591526),
    E = n(261875),
    b = n(439482),
    y = n(710845),
    O = n(38618),
    v = n(894276),
    S = n(218543),
    I = n(314897),
    T = n(944486),
    A = n(914010),
    C = n(449934),
    N = n(358085),
    P = n(576376),
    R = n(38217),
    w = n(864631),
    D = n(981631);
function x(e, t, n) {
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
let L = new y.Z("CacheStore"),
    j = !1,
    M = 0,
    k = !1,
    U = "initializing",
    G = 0,
    Z = !1,
    B = !1,
    F = !1;
function V() {
    return (B = !0), (F = !0), !1;
}
function H() {
    return (B = !1), (F = !0), !1;
}
function Y() {
    Z = !0;
}
function W() {
    (Z = !0), (U = "cache-loaded");
}
function K() {
    U = "no-cache";
}
function z(e) {
    L.log("Clearing cache store"),
        (G = Date.now()),
        o.K.remove(D.FsG),
        o.K.remove(D.ihW),
        o.K.remove(D.O42),
        (U = "no-cache"),
        "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (k = !0);
}
function q() {
    L.verbose("Writing cache now"), (G = Date.now()), (Z = !0), o.K.remove(D.FsG), o.K.remove(D.O42), o.K.remove(D.ihW);
}
function Q(e) {
    null != e.channels && (0, R.ZP)(e.channels),
        null != e.privateChannels && (0, R.ZP)(e.privateChannels),
        null != e.guildChannels && (0, R._$)(e.guildChannels);
}
async function X(e, t, n) {
    let r = performance.now();
    if (null != e && null != n) {
        let i = await f.ZP.startupLoad(e, t, n, D.AQB);
        L.verbose("loaded ".concat(i.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
        let a = {
            guildId: t,
            channelId: n,
            users: i.users,
            members: i.members,
            messages: i.messages,
        };
        return [performance.now() - r, a];
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
            L.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")),
            [performance.now() - r, t]
        );
    }
}
async function J(e, t, n) {
    var r, o, l;
    L.verbose("loading early cache");
    let c = O.Z.getSocket();
    c.connect();
    let u = null != (r = A.Z.getGuildId()) ? r : null,
        d = null != (o = T.Z.getChannelId()) ? o : null,
        f = performance.now(),
        p = S.Z.loadCachedMessages.measureAsyncWithoutNesting(() => X(e, u, d)),
        E = S.Z.fetchGuildCache.measureAsync(() => et(e, n)),
        b = S.Z.fetchGuildCache.measureAsync(() => en(e, n)),
        y =
            null != e
                ? i.Z.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => g.Z.getAsync(e, null))
                : Promise.resolve([]),
        v =
            null == e
                ? Promise.resolve({})
                : i.Z.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => h.Z.getAll(e)),
        I = null == e ? Promise.resolve([]) : i.Z.timeAsync("\uD83D\uDCBE", "cache: read_states", () => _.Z.getAll(e)),
        C =
            null == e
                ? Promise.resolve([])
                : i.Z.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => m.Z.getAll(e)),
        [[N, P], R, D, x, j, M, k] = await Promise.all([p, E, b, y, v, I, C]),
        U = performance.now() - f;
    if ((L.verbose("cache loaded in ".concat(U, "ms (channel_history ").concat(N, "ms)")), null == P))
        return (
            (0, w.Z)("database:history_cache_null"),
            L.verbose("finished without dispatching CACHE_LOADED"),
            [!1, null, 0]
        );
    {
        let r = Object.fromEntries(P.members.map((e) => [e.userId, e])),
            o = null != D.guildId && null != D.channels,
            f = D.guildId;
        return (
            a.ZP.Emitter.batched(() => {
                i.Z.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
                    var e;
                    return s.Z.dispatch({
                        type: "CACHE_LOADED",
                        guilds: R,
                        privateChannels: x,
                        initialGuildChannels: null != (e = D.channels) ? e : [],
                        users: [...P.users],
                        messages: null == P.channelId ? {} : { [P.channelId]: P.messages },
                        guildMembers: null == P.guildId ? {} : { [P.guildId]: r },
                        userSettings: j,
                        userGuildSettings: k,
                        readStates: M,
                    });
                }),
                    i.Z.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () =>
                        c.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])),
                    );
            }),
            L.verbose(
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
                    .concat(P.guildId, "\n              channel: ")
                    .concat(P.channelId, "\n              messages: ")
                    .concat(P.messages.length, "\n                members: ")
                    .concat(P.members.length, "\n                users: ")
                    .concat(P.users.length, "\n            initial_guild:\n              id: ")
                    .concat(f, "\n              channels: ")
                    .concat(null == (l = D.channels) ? void 0 : l.length, "\n            user_settings: ")
                    .concat(Object.keys(j).length, "\n            read_states: ")
                    .concat(M.length, "\n            user_guild_settings: ")
                    .concat(k.length, "\n      )"),
            ),
            L.verbose("finished dispatching CACHE_LOADED"),
            [!0, o && null != f ? f : null, x.length]
        );
    }
}
function $() {
    return ea(() => s.Z.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" })), Promise.resolve();
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
            (n = await (0, l.dI)(() => i.Z.timeAsync("\uD83D\uDCBE", "cache: guilds", () => u.Z.getAsync(e))))
            ? n
            : [];
    let a = null != (r = (await p.Z.getCommittedVersions()).initial_guild_id) ? r : t.guildId;
    if (null == a || "@me" === a) return [];
    let o = await (0, l.dI)(() => u.Z.getOneAsync(e, a));
    return null != o ? [o] : [];
}
async function en(e, t) {
    if (null == e)
        return Promise.resolve({
            channels: null,
            guildId: null,
        });
    let n = (await p.Z.getCommittedVersions()).initial_guild_id;
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
        channels: await (0, l.dI)(() => g.Z.getAsync(e, r)),
        guildId: n,
    };
}
function er(e, t) {
    return (
        L.verbose("loading stale guild channels (count: ".concat(t.length, ", ids: ").concat(t.join(", "), ")")),
        Promise.all(t.map((t) => g.Z.getAsync(e, t).then((e) => [t, e])))
    );
}
async function ei(e, t, n, r) {
    L.verbose("loading late lazy cache");
    let [a, o, f] = await S.Z.fetchLazyCache.measureAsync(() =>
            Promise.all([
                (0, l.dI)(() =>
                    null != e
                        ? i.Z.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => d.Z.okAsync(e))
                        : Promise.resolve(!0),
                ),
                (0, l.dI)(() =>
                    null == e || ee
                        ? Promise.resolve([])
                        : i.Z.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => u.Z.getAsync(e)),
                ),
                (0, l.dI)(() =>
                    null != e
                        ? i.Z.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => c.Z.getAsync(e))
                        : Promise.resolve({
                              all: [],
                              stale: [],
                              channels: [],
                          }),
                ),
            ]),
        ),
        p = await S.Z.fetchStaleChannels.measureAsync(() =>
            null != e && null != f && f.stale.length > 0 ? (0, l.dI)(() => er(e, f.stale)) : Promise.resolve([]),
        );
    v.E3.getCachedEnabled()
        ? L.verbose("loadLateLazyCache: not yielding to react")
        : (L.verbose("loadLateLazyCache: yielding to react"), await (0, b.f)((0, N.isIOS)() ? M : void 0)),
        S.Z.loadLazyCache.recordStart();
    let _ = O.Z.getSocket();
    ea(() => {
        let i = performance.now();
        if (!1 === a) {
            (0, w.Z)("database:not_ok"),
                s.Z.dispatch({
                    type: "CLEAR_CACHES",
                    reason: "database:not_ok",
                }),
                s.Z.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (null == o || null == f || null == p) {
            (0, w.Z)("database:load_failed"),
                L.log(
                    "couldn't load database item (\n          database: "
                        .concat(null != e, "\n          basic_channels: ")
                        .concat(null != f, "\n          guild_channels: ")
                        .concat(null != p, "\n          guilds: ")
                        .concat(null != o, "\n        )"),
                ),
                s.Z.dispatch({
                    type: "CLEAR_CACHES",
                    reason: "database:load_failed",
                }),
                s.Z.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (null == a && (o.length > 0 || f.all.length > 0)) {
            (0, w.Z)("database:versionless"),
                L.log("kv_cache was not ok (null version with values)"),
                s.Z.dispatch({
                    type: "CLEAR_CACHES",
                    reason: "database:versionless",
                }),
                s.Z.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (B) {
            (0, w.Z)("already_connected"),
                L.log("Skipping lazy cache; already connected."),
                s.Z.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        _.addAnalytics({ hadCacheAtStartup: !0 });
        let l = {
            type: "CACHE_LOADED_LAZY",
            guilds: o,
            guildChannels: p,
            basicGuildChannels: f.channels,
            initialGuildId: n,
        };
        S.Z.deserializeCache.measure(() => Q(l)),
            S.Z.dispatchLazyCache.measure(() => s.Z.dispatch(l)),
            L.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - i, "ms)")),
            _.addAnalytics({ usedCacheAtStartup: !0 });
        let c = p.reduce((e, t) => {
                let [n, r] = t;
                return e + r.length;
            }, 0),
            u = p.length,
            d = f.all.reduce((e, t) => {
                let [n, r] = t;
                return e + r.length;
            }, 0),
            m = f.channels.reduce((e, t) => {
                let [n, r] = t;
                return e + r.length;
            }, 0),
            h = d - m,
            g = 0 === f.stale.length ? "" : " \xB7 ".concat(f.stale.join(", "));
        L.verbose(
            "lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: "
                .concat(t, "\n          initial_guild: ")
                .concat(n, "\n          database: ")
                .concat(null != e, "\n            ok: ")
                .concat(a, "\n            name: ")
                .concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            guilds: ")
                .concat(o.length, "\n            basic_channels:\n              total: ")
                .concat(d, " (")
                .concat(f.channels.length, " guilds)\n              stale: ")
                .concat(h, " (")
                .concat(f.stale.length, " guilds")
                .concat(g, ")\n              unstale: ")
                .concat(m, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ")
                .concat(c, " (")
                .concat(p.length, " guilds)\n      )"),
        ),
            S.Z.setCacheInfo({
                guilds: o.length,
                privateChannels: r,
                basicChannels: d,
                basicChannelsStale: h,
                fullChannels: c,
                fullChannelGuilds: u,
            });
    });
}
function ea(e) {
    let t = O.Z.getSocket(),
        n = !1;
    a.ZP.Emitter.batched(() => {
        try {
            if ((e(), !t.dispatcher.hasStuffToDispatchNow())) {
                L.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                return;
            }
            (n = !0),
                S.Z.loadLazyCache.recordEnd(),
                L.verbose("Processing First Queued Dispatch"),
                t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])),
                setTimeout(() => {
                    L.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                }, 100);
        } catch (e) {
            L.warn("Lazy cache has encountered error", e),
                s.Z.dispatch({
                    type: "RESET_SOCKET",
                    args: {
                        error: e,
                        action: "LazyCache",
                    },
                });
        }
    }),
        n || S.Z.loadLazyCache.recordEnd();
}
class eo extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(I.default, O.Z, T.Z, A.Z), j || O.Z.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !j || Z;
    }
    getLazyCacheStatus() {
        return j ? U : "no-cache";
    }
    get lastWriteTime() {
        return G;
    }
    canWriteCaches(e) {
        return (0, C.$8)()
            ? k
                ? (L.log("Not writing cache because caches cleared"), !1)
                : !!e || !!F || (L.log("Not writing cache because never connected"), !1)
            : (L.log("Not writing cache because not authenticated"), !1);
    }
    async loadCacheAsync(e, t) {
        let n = (0, P.h)(t);
        if ("initializing" !== U) {
            (0, w.Z)("cache:lazy_cache_not_initializing"),
                n(),
                setTimeout(() => {
                    var e, t;
                    return null == (t = O.Z.getSocket()) || null == (e = t.dispatcher)
                        ? void 0
                        : e.unpauseDispatchQueue();
                }, 0);
            return;
        }
        try {
            let t = I.default.getId(),
                r = E.Z.carefullyOpenDatabase(t),
                [i, a, o] = await S.Z.loadMiniCache.measureAsync(() => J(r, t, e));
            i ? (n(), await ei(r, t, a, o)) : (n(), await $());
        } catch (e) {
            L.error("clearing cache. exception encountered while loading cache.", e, e.stack),
                (0, w.Z)("cache:exception"),
                n(),
                s.Z.dispatch({
                    type: "RESET_SOCKET",
                    args: {
                        error: e,
                        action: "loadCacheAsync",
                    },
                });
        }
    }
}
x(eo, "displayName", "CacheStore"),
    new eo(
        s.Z,
        j
            ? {
                  CONNECTION_OPEN: V,
                  LOGOUT: z,
                  CONNECTION_CLOSED: H,
                  CACHE_LOADED: Y,
                  CACHE_LOADED_LAZY: W,
                  CACHE_LOADED_LAZY_NO_CACHE: K,
                  CLEAR_CACHES: z,
                  WRITE_CACHES: q,
              }
            : {},
    );
