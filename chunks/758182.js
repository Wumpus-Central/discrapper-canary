n.d(t, { q: () => x }), n(388685), n(467055), n(49124);
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
    b = n(710845),
    y = n(38618),
    O = n(894276),
    v = n(218543),
    S = n(314897),
    I = n(944486),
    T = n(914010),
    A = n(449934),
    C = n(576376),
    N = n(38217),
    P = n(864631),
    R = n(981631);
function w(e, t, n) {
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
let D = new b.Z("CacheStore"),
    x = !1,
    L = !1,
    j = "initializing",
    M = 0,
    k = !1,
    U = !1,
    G = !1;
function Z() {
    return (U = !0), (G = !0), !1;
}
function B() {
    return (U = !1), (G = !0), !1;
}
function F() {
    k = !0;
}
function V() {
    (k = !0), (j = "cache-loaded");
}
function H() {
    j = "no-cache";
}
function Y(e) {
    D.log("Clearing cache store"),
        (M = Date.now()),
        o.K.remove(R.FsG),
        o.K.remove(R.ihW),
        o.K.remove(R.O42),
        (j = "no-cache"),
        "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (L = !0);
}
function W() {
    D.verbose("Writing cache now"), (M = Date.now()), (k = !0), o.K.remove(R.FsG), o.K.remove(R.O42), o.K.remove(R.ihW);
}
function K(e) {
    null != e.channels && (0, N.ZP)(e.channels),
        null != e.privateChannels && (0, N.ZP)(e.privateChannels),
        null != e.guildChannels && (0, N._$)(e.guildChannels);
}
async function z(e, t, n) {
    let r = performance.now();
    if (null != e && null != n) {
        let i = await f.ZP.startupLoad(e, t, n, R.AQB);
        D.verbose("loaded ".concat(i.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
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
            D.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")),
            [performance.now() - r, t]
        );
    }
}
async function q(e, t, n) {
    var r, o, l;
    D.verbose("loading early cache");
    let c = y.Z.getSocket();
    c.connect();
    let u = null != (r = T.Z.getGuildId()) ? r : null,
        d = null != (o = I.Z.getChannelId()) ? o : null,
        f = performance.now(),
        p = v.Z.loadCachedMessages.measureAsyncWithoutNesting(() => z(e, u, d)),
        E = v.Z.fetchGuildCache.measureAsync(() => J(e, n)),
        b = v.Z.fetchGuildCache.measureAsync(() => $(e, n)),
        O =
            null != e
                ? i.Z.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => g.Z.getAsync(e, null))
                : Promise.resolve([]),
        S =
            null == e
                ? Promise.resolve({})
                : i.Z.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => h.Z.getAll(e)),
        A = null == e ? Promise.resolve([]) : i.Z.timeAsync("\uD83D\uDCBE", "cache: read_states", () => _.Z.getAll(e)),
        C =
            null == e
                ? Promise.resolve([])
                : i.Z.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => m.Z.getAll(e)),
        [[N, R], w, x, L, j, M, k] = await Promise.all([p, E, b, O, S, A, C]),
        U = performance.now() - f;
    if ((D.verbose("cache loaded in ".concat(U, "ms (channel_history ").concat(N, "ms)")), null == R))
        return (
            (0, P.Z)("database:history_cache_null"),
            D.verbose("finished without dispatching CACHE_LOADED"),
            [!1, null, 0]
        );
    {
        let r = Object.fromEntries(R.members.map((e) => [e.userId, e])),
            o = null != x.guildId && null != x.channels,
            f = x.guildId;
        return (
            a.ZP.Emitter.batched(() => {
                i.Z.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
                    var e;
                    return s.Z.dispatch({
                        type: "CACHE_LOADED",
                        guilds: w,
                        privateChannels: L,
                        initialGuildChannels: null != (e = x.channels) ? e : [],
                        users: [...R.users],
                        messages: null == R.channelId ? {} : { [R.channelId]: R.messages },
                        guildMembers: null == R.guildId ? {} : { [R.guildId]: r },
                        userSettings: j,
                        userGuildSettings: k,
                        readStates: M,
                    });
                }),
                    i.Z.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () =>
                        c.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])),
                    );
            }),
            D.verbose(
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
                    .concat(L.length, "\n            channel_history:\n              guild: ")
                    .concat(R.guildId, "\n              channel: ")
                    .concat(R.channelId, "\n              messages: ")
                    .concat(R.messages.length, "\n                members: ")
                    .concat(R.members.length, "\n                users: ")
                    .concat(R.users.length, "\n            initial_guild:\n              id: ")
                    .concat(f, "\n              channels: ")
                    .concat(null == (l = x.channels) ? void 0 : l.length, "\n            user_settings: ")
                    .concat(Object.keys(j).length, "\n            read_states: ")
                    .concat(M.length, "\n            user_guild_settings: ")
                    .concat(k.length, "\n      )"),
            ),
            D.verbose("finished dispatching CACHE_LOADED"),
            [!0, o && null != f ? f : null, L.length]
        );
    }
}
function X() {
    return en(() => s.Z.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" })), Promise.resolve();
}
let Q = !1;
async function J(e, t) {
    var n, r;
    if (null == e) return [];
    switch (t.page) {
        case "private-channels":
        case "guild-channels":
            Q = !0;
            break;
        case "other":
            "@me" === t.guildId && (Q = !0);
    }
    if (Q)
        return null !=
            (n = await (0, l.dI)(() => i.Z.timeAsync("\uD83D\uDCBE", "cache: guilds", () => u.Z.getAsync(e))))
            ? n
            : [];
    let a = null != (r = (await p.Z.getCommittedVersions()).initial_guild_id) ? r : t.guildId;
    if (null == a || "@me" === a) return [];
    let o = await (0, l.dI)(() => u.Z.getOneAsync(e, a));
    return null != o ? [o] : [];
}
async function $(e, t) {
    if (null == e)
        return Promise.resolve({
            channels: null,
            guildId: null,
        });
    let n = (await p.Z.getCommittedVersions()).initial_guild_id;
    if ((null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n))
        return (
            D.verbose("skipped loading initial guild (guild: ".concat(n, ", database: ").concat(e, ")")),
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
function ee(e, t) {
    return (
        D.verbose("loading stale guild channels (count: ".concat(t.length, ", ids: ").concat(t.join(", "), ")")),
        Promise.all(t.map((t) => g.Z.getAsync(e, t).then((e) => [t, e])))
    );
}
async function et(e, t, n, r) {
    D.verbose("loading late lazy cache");
    let [a, o, f] = await v.Z.fetchLazyCache.measureAsync(() =>
            Promise.all([
                (0, l.dI)(() =>
                    null != e
                        ? i.Z.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => d.Z.okAsync(e))
                        : Promise.resolve(!0),
                ),
                (0, l.dI)(() =>
                    null == e || Q
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
        p = await v.Z.fetchStaleChannels.measureAsync(() =>
            null != e && null != f && f.stale.length > 0 ? (0, l.dI)(() => ee(e, f.stale)) : Promise.resolve([]),
        );
    O.E3.getCachedEnabled()
        ? D.verbose("loadLateLazyCache: not yielding to react")
        : (D.verbose("loadLateLazyCache: yielding to react"), await new Promise((e) => setTimeout(e, 0))),
        v.Z.loadLazyCache.recordStart();
    let _ = y.Z.getSocket();
    en(() => {
        let i = performance.now();
        if (!1 === a) {
            (0, P.Z)("database:not_ok"),
                s.Z.dispatch({
                    type: "CLEAR_CACHES",
                    reason: "database:not_ok",
                }),
                s.Z.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (null == o || null == f || null == p) {
            (0, P.Z)("database:load_failed"),
                D.log(
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
            (0, P.Z)("database:versionless"),
                D.log("kv_cache was not ok (null version with values)"),
                s.Z.dispatch({
                    type: "CLEAR_CACHES",
                    reason: "database:versionless",
                }),
                s.Z.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (U) {
            (0, P.Z)("already_connected"),
                D.log("Skipping lazy cache; already connected."),
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
        v.Z.deserializeCache.measure(() => K(l)),
            v.Z.dispatchLazyCache.measure(() => s.Z.dispatch(l)),
            D.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - i, "ms)")),
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
        D.verbose(
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
            v.Z.setCacheInfo({
                guilds: o.length,
                privateChannels: r,
                basicChannels: d,
                basicChannelsStale: h,
                fullChannels: c,
                fullChannelGuilds: u,
            });
    });
}
function en(e) {
    let t = y.Z.getSocket(),
        n = !1;
    a.ZP.Emitter.batched(() => {
        try {
            if ((e(), !t.dispatcher.hasStuffToDispatchNow())) {
                D.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                return;
            }
            (n = !0),
                v.Z.loadLazyCache.recordEnd(),
                D.verbose("Processing First Queued Dispatch"),
                t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])),
                setTimeout(() => {
                    D.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                }, 100);
        } catch (e) {
            D.warn("Lazy cache has encountered error", e),
                s.Z.dispatch({
                    type: "RESET_SOCKET",
                    args: {
                        error: e,
                        action: "LazyCache",
                    },
                });
        }
    }),
        n || v.Z.loadLazyCache.recordEnd();
}
class er extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(S.default, y.Z, I.Z, T.Z), x || y.Z.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !x || k;
    }
    getLazyCacheStatus() {
        return x ? j : "no-cache";
    }
    get lastWriteTime() {
        return M;
    }
    canWriteCaches(e) {
        return (0, A.$8)()
            ? L
                ? (D.log("Not writing cache because caches cleared"), !1)
                : !!e || !!G || (D.log("Not writing cache because never connected"), !1)
            : (D.log("Not writing cache because not authenticated"), !1);
    }
    async loadCacheAsync(e, t) {
        let n = (0, C.h)(t);
        if ("initializing" !== j) {
            (0, P.Z)("cache:lazy_cache_not_initializing"),
                n(),
                setTimeout(() => {
                    var e, t;
                    return null == (t = y.Z.getSocket()) || null == (e = t.dispatcher)
                        ? void 0
                        : e.unpauseDispatchQueue();
                }, 0);
            return;
        }
        try {
            let t = S.default.getId(),
                r = E.Z.carefullyOpenDatabase(t),
                [i, a, o] = await v.Z.loadMiniCache.measureAsync(() => q(r, t, e));
            i ? (n(), await et(r, t, a, o)) : (n(), await X());
        } catch (e) {
            D.error("clearing cache. exception encountered while loading cache.", e, e.stack),
                (0, P.Z)("cache:exception"),
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
w(er, "displayName", "CacheStore"),
    new er(
        s.Z,
        x
            ? {
                  CONNECTION_OPEN: Z,
                  LOGOUT: Y,
                  CONNECTION_CLOSED: B,
                  CACHE_LOADED: F,
                  CACHE_LOADED_LAZY: V,
                  CACHE_LOADED_LAZY_NO_CACHE: H,
                  CLEAR_CACHES: Y,
                  WRITE_CACHES: W,
              }
            : {},
    );
