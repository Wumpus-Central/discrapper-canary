n.d(t, { q: () => M }), n(388685), n(467055), n(49124);
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
    S = n(880175),
    I = n(218543),
    T = n(314897),
    C = n(944486),
    A = n(914010),
    N = n(449934),
    P = n(358085),
    R = n(576376),
    w = n(38217),
    D = n(864631),
    x = n(981631);
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
let j = new y.Z("CacheStore"),
    M = !1,
    k = 0,
    U = !1,
    G = "initializing",
    Z = 0,
    F = !1,
    B = !1,
    V = !1;
function H() {
    return (B = !0), (V = !0), !1;
}
function Y() {
    return (B = !1), (V = !0), !1;
}
function W() {
    F = !0;
}
function K() {
    (F = !0), (G = "cache-loaded");
}
function z() {
    G = "no-cache";
}
function q(e) {
    j.log("Clearing cache store"),
        (Z = Date.now()),
        o.K.remove(x.FsG),
        o.K.remove(x.ihW),
        o.K.remove(x.O42),
        (G = "no-cache"),
        "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (U = !0);
}
function Q() {
    j.verbose("Writing cache now"), (Z = Date.now()), (F = !0), o.K.remove(x.FsG), o.K.remove(x.O42), o.K.remove(x.ihW);
}
function X(e) {
    null != e.channels && (0, w.ZP)(e.channels),
        null != e.privateChannels && (0, w.ZP)(e.privateChannels),
        null != e.guildChannels && (0, w._$)(e.guildChannels);
}
async function J(e, t, n) {
    let r = performance.now();
    if (null != e && null != n) {
        let i = await f.ZP.startupLoad(e, t, n, x.AQB);
        j.verbose("loaded ".concat(i.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
        let a = {
            guildId: t,
            channelId: n,
            users: i.users,
            members: i.members,
            messages: i.messages,
        };
        return S.Z.recordChannelFetchedLocal(n, S._, null, null, x.AQB, i.messages), [performance.now() - r, a];
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
    var r, o, l;
    j.verbose("loading early cache");
    let c = O.Z.getSocket();
    c.connect();
    let u = null != (r = A.Z.getGuildId()) ? r : null,
        d = null != (o = C.Z.getChannelId()) ? o : null,
        f = performance.now(),
        p = I.Z.loadCachedMessages.measureAsyncWithoutNesting(() => J(e, u, d)),
        E = I.Z.fetchGuildCache.measureAsync(() => en(e, n)),
        b = I.Z.fetchGuildCache.measureAsync(() => er(e, n)),
        y =
            null != e
                ? i.Z.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => g.Z.getAsync(e, null))
                : Promise.resolve([]),
        v =
            null == e
                ? Promise.resolve({})
                : i.Z.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => h.Z.getAll(e)),
        S = null == e ? Promise.resolve([]) : i.Z.timeAsync("\uD83D\uDCBE", "cache: read_states", () => _.Z.getAll(e)),
        T =
            null == e
                ? Promise.resolve([])
                : i.Z.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => m.Z.getAll(e)),
        [[N, P], R, w, x, L, M, k] = await Promise.all([p, E, b, y, v, S, T]),
        U = performance.now() - f;
    if ((j.verbose("cache loaded in ".concat(U, "ms (channel_history ").concat(N, "ms)")), null == P))
        return (
            (0, D.Z)("database:history_cache_null"),
            j.verbose("finished without dispatching CACHE_LOADED"),
            [!1, null, 0]
        );
    {
        let r = Object.fromEntries(P.members.map((e) => [e.userId, e])),
            o = null != w.guildId && null != w.channels,
            f = w.guildId;
        return (
            a.ZP.Emitter.batched(() => {
                i.Z.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
                    var e;
                    return s.Z.dispatch({
                        type: "CACHE_LOADED",
                        guilds: R,
                        privateChannels: x,
                        initialGuildChannels: null != (e = w.channels) ? e : [],
                        users: [...P.users],
                        messages: null == P.channelId ? {} : { [P.channelId]: P.messages },
                        guildMembers: null == P.guildId ? {} : { [P.guildId]: r },
                        userSettings: L,
                        userGuildSettings: k,
                        readStates: M,
                    });
                }),
                    i.Z.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () =>
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
                    .concat(P.guildId, "\n              channel: ")
                    .concat(P.channelId, "\n              messages: ")
                    .concat(P.messages.length, "\n                members: ")
                    .concat(P.members.length, "\n                users: ")
                    .concat(P.users.length, "\n            initial_guild:\n              id: ")
                    .concat(f, "\n              channels: ")
                    .concat(null == (l = w.channels) ? void 0 : l.length, "\n            user_settings: ")
                    .concat(Object.keys(L).length, "\n            read_states: ")
                    .concat(M.length, "\n            user_guild_settings: ")
                    .concat(k.length, "\n      )"),
            ),
            j.verbose("finished dispatching CACHE_LOADED"),
            [!0, o && null != f ? f : null, x.length]
        );
    }
}
function ee() {
    return eo(() => s.Z.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" })), Promise.resolve();
}
let et = !1;
async function en(e, t) {
    var n, r;
    if (null == e) return [];
    switch (t.page) {
        case "private-channels":
        case "guild-channels":
            et = !0;
            break;
        case "other":
            "@me" === t.guildId && (et = !0);
    }
    if (et)
        return null !=
            (n = await (0, l.dI)(() => i.Z.timeAsync("\uD83D\uDCBE", "cache: guilds", () => u.Z.getAsync(e))))
            ? n
            : [];
    let a = null != (r = (await p.Z.getCommittedVersions()).initial_guild_id) ? r : t.guildId;
    if (null == a || "@me" === a) return [];
    let o = await (0, l.dI)(() => u.Z.getOneAsync(e, a));
    return null != o ? [o] : [];
}
async function er(e, t) {
    if (null == e)
        return Promise.resolve({
            channels: null,
            guildId: null,
        });
    let n = (await p.Z.getCommittedVersions()).initial_guild_id;
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
        channels: await (0, l.dI)(() => g.Z.getAsync(e, r)),
        guildId: n,
    };
}
function ei(e, t) {
    return (
        j.verbose("loading stale guild channels (count: ".concat(t.length, ", ids: ").concat(t.join(", "), ")")),
        Promise.all(t.map((t) => g.Z.getAsync(e, t).then((e) => [t, e])))
    );
}
async function ea(e, t, n, r) {
    j.verbose("loading late lazy cache");
    let [a, o, f] = await I.Z.fetchLazyCache.measureAsync(() =>
            Promise.all([
                (0, l.dI)(() =>
                    null != e
                        ? i.Z.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => d.Z.okAsync(e))
                        : Promise.resolve(!0),
                ),
                (0, l.dI)(() =>
                    null == e || et
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
        p = await I.Z.fetchStaleChannels.measureAsync(() =>
            null != e && null != f && f.stale.length > 0 ? (0, l.dI)(() => ei(e, f.stale)) : Promise.resolve([]),
        );
    v.E3.getCachedEnabled()
        ? j.verbose("loadLateLazyCache: not yielding to react")
        : (j.verbose("loadLateLazyCache: yielding to react"), await (0, b.f)((0, P.isIOS)() ? k : void 0)),
        I.Z.loadLazyCache.recordStart();
    let _ = O.Z.getSocket();
    eo(() => {
        let i = performance.now();
        if (!1 === a) {
            (0, D.Z)("database:not_ok"),
                s.Z.dispatch({
                    type: "CLEAR_CACHES",
                    reason: "database:not_ok",
                }),
                s.Z.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (null == o || null == f || null == p) {
            (0, D.Z)("database:load_failed"),
                j.log(
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
            (0, D.Z)("database:versionless"),
                j.log("kv_cache was not ok (null version with values)"),
                s.Z.dispatch({
                    type: "CLEAR_CACHES",
                    reason: "database:versionless",
                }),
                s.Z.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (B) {
            (0, D.Z)("already_connected"),
                j.log("Skipping lazy cache; already connected."),
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
        I.Z.deserializeCache.measure(() => X(l)),
            I.Z.dispatchLazyCache.measure(() => s.Z.dispatch(l)),
            j.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - i, "ms)")),
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
        j.verbose(
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
            I.Z.setCacheInfo({
                guilds: o.length,
                privateChannels: r,
                basicChannels: d,
                basicChannelsStale: h,
                fullChannels: c,
                fullChannelGuilds: u,
            });
    });
}
function eo(e) {
    let t = O.Z.getSocket(),
        n = !1;
    a.ZP.Emitter.batched(() => {
        try {
            if ((e(), !t.dispatcher.hasStuffToDispatchNow())) {
                j.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                return;
            }
            (n = !0),
                I.Z.loadLazyCache.recordEnd(),
                j.verbose("Processing First Queued Dispatch"),
                t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])),
                setTimeout(() => {
                    j.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                }, 100);
        } catch (e) {
            j.warn("Lazy cache has encountered error", e),
                s.Z.dispatch({
                    type: "RESET_SOCKET",
                    args: {
                        error: e,
                        action: "LazyCache",
                    },
                });
        }
    }),
        n || I.Z.loadLazyCache.recordEnd();
}
class es extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(T.default, O.Z, C.Z, A.Z), M || O.Z.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !M || F;
    }
    getLazyCacheStatus() {
        return M ? G : "no-cache";
    }
    get lastWriteTime() {
        return Z;
    }
    canWriteCaches(e) {
        return (0, N.$8)()
            ? U
                ? (j.log("Not writing cache because caches cleared"), !1)
                : !!e || !!V || (j.log("Not writing cache because never connected"), !1)
            : (j.log("Not writing cache because not authenticated"), !1);
    }
    async loadCacheAsync(e, t) {
        let n = (0, R.h)(t);
        if ("initializing" !== G) {
            (0, D.Z)("cache:lazy_cache_not_initializing"),
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
            let t = T.default.getId(),
                r = E.Z.carefullyOpenDatabase(t),
                [i, a, o] = await I.Z.loadMiniCache.measureAsync(() => $(r, t, e));
            i ? (n(), await ea(r, t, a, o)) : (n(), await ee());
        } catch (e) {
            j.error("clearing cache. exception encountered while loading cache.", e, e.stack),
                (0, D.Z)("cache:exception"),
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
L(es, "displayName", "CacheStore"),
    new es(
        s.Z,
        M
            ? {
                  CONNECTION_OPEN: H,
                  LOGOUT: q,
                  CONNECTION_CLOSED: Y,
                  CACHE_LOADED: W,
                  CACHE_LOADED_LAZY: K,
                  CACHE_LOADED_LAZY_NO_CACHE: z,
                  CLEAR_CACHES: q,
                  WRITE_CACHES: Q,
              }
            : {},
    );
