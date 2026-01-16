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
    h = n(632093),
    m = n(347994),
    g = n(591526),
    E = n(261875),
    b = n(439482),
    y = n(710845),
    O = n(38618),
    v = n(894276),
    S = n(880175),
    I = n(218543),
    T = n(66653),
    C = n(314897),
    A = n(944486),
    N = n(914010),
    P = n(449934),
    w = n(576376),
    R = n(38217),
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
    k = !1,
    U = "initializing",
    G = 0,
    Z = !1,
    F = !1,
    B = !1;
function V() {
    return (F = !0), (B = !0), !1;
}
function H() {
    return (F = !1), (B = !0), !1;
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
    j.log("Clearing cache store"),
        (G = Date.now()),
        o.K.remove(x.FsG),
        o.K.remove(x.ihW),
        o.K.remove(x.O42),
        (U = "no-cache"),
        "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (k = !0);
}
function q() {
    j.verbose("Writing cache now"), (G = Date.now()), (Z = !0), o.K.remove(x.FsG), o.K.remove(x.O42), o.K.remove(x.ihW);
}
function Q(e) {
    null != e.channels && (0, R.ZP)(e.channels),
        null != e.privateChannels && (0, R.ZP)(e.privateChannels),
        null != e.guildChannels && (0, R._$)(e.guildChannels);
}
async function X(e, t, n) {
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
async function J(e, t, n) {
    var r, o, l;
    j.verbose("loading early cache");
    let c = O.Z.getSocket();
    c.connect();
    let u = null != (r = N.Z.getGuildId()) ? r : null,
        d = null != (o = A.Z.getChannelId()) ? o : null,
        f = performance.now(),
        p = I.Z.loadCachedMessages.measureAsyncWithoutNesting(() => X(e, u, d)),
        E = I.Z.fetchGuildCache.measureAsync(() => et(e, n)),
        b = I.Z.fetchGuildCache.measureAsync(() => en(e, n)),
        y =
            null != e
                ? i.Z.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => g.Z.getAsync(e, null))
                : Promise.resolve([]),
        v =
            null == e
                ? Promise.resolve({})
                : i.Z.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => m.Z.getAll(e)),
        S = null == e ? Promise.resolve([]) : i.Z.timeAsync("\uD83D\uDCBE", "cache: read_states", () => _.Z.getAll(e)),
        T =
            null == e
                ? Promise.resolve([])
                : i.Z.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => h.Z.getAll(e)),
        [[C, P], w, R, x, L, M, k] = await Promise.all([p, E, b, y, v, S, T]),
        U = performance.now() - f;
    if ((j.verbose("cache loaded in ".concat(U, "ms (channel_history ").concat(C, "ms)")), null == P))
        return (
            (0, D.Z)("database:history_cache_null"),
            j.verbose("finished without dispatching CACHE_LOADED"),
            [!1, null, 0]
        );
    {
        let r = Object.fromEntries(P.members.map((e) => [e.userId, e])),
            o = null != R.guildId && null != R.channels,
            f = R.guildId;
        return (
            a.ZP.Emitter.batched(() => {
                i.Z.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
                    var e;
                    return s.Z.dispatch({
                        type: "CACHE_LOADED",
                        guilds: w,
                        privateChannels: x,
                        initialGuildChannels: null != (e = R.channels) ? e : [],
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
                    .concat(null == (l = R.channels) ? void 0 : l.length, "\n            user_settings: ")
                    .concat(Object.keys(L).length, "\n            read_states: ")
                    .concat(M.length, "\n            user_guild_settings: ")
                    .concat(k.length, "\n      )"),
            ),
            j.verbose("finished dispatching CACHE_LOADED"),
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
function er(e, t) {
    return (
        j.verbose("loading stale guild channels (count: ".concat(t.length, ", ids: ").concat(t.join(", "), ")")),
        Promise.all(t.map((t) => g.Z.getAsync(e, t).then((e) => [t, e])))
    );
}
async function ei(e, t, n, r) {
    j.verbose("loading late lazy cache");
    let [a, o, f] = await I.Z.fetchLazyCache.measureAsync(() =>
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
        p = await I.Z.fetchStaleChannels.measureAsync(() =>
            null != e && null != f && f.stale.length > 0 ? (0, l.dI)(() => er(e, f.stale)) : Promise.resolve([]),
        );
    if ((0, T.q)()) {
        var _;
        null != n &&
        ((null == o ? void 0 : o.some((e) => e.id === n)) ||
            (null == f || null == (_ = f.all)
                ? void 0
                : _.some((e) => {
                      let [t] = e;
                      return t === n;
                  })))
            ? (j.verbose("loadLateLazyCache: waiting for TTI (TTI automation with cached initial guild)"),
              await (0, b.f)())
            : j.verbose(
                  "loadLateLazyCache: not waiting for TTI or yielding to react (TTI automation with no cached initial guild)",
              );
    } else
        v.E3.getCachedEnabled()
            ? j.verbose("loadLateLazyCache: not yielding to react")
            : (j.verbose("loadLateLazyCache: yielding to react"), await new Promise((e) => setTimeout(e, 0)));
    I.Z.loadLazyCache.recordStart();
    let h = O.Z.getSocket();
    ea(() => {
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
        if (F) {
            (0, D.Z)("already_connected"),
                j.log("Skipping lazy cache; already connected."),
                s.Z.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        h.addAnalytics({ hadCacheAtStartup: !0 });
        let l = {
            type: "CACHE_LOADED_LAZY",
            guilds: o,
            guildChannels: p,
            basicGuildChannels: f.channels,
            initialGuildId: n,
        };
        I.Z.deserializeCache.measure(() => Q(l)),
            I.Z.dispatchLazyCache.measure(() => s.Z.dispatch(l)),
            j.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - i, "ms)")),
            h.addAnalytics({ usedCacheAtStartup: !0 });
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
                .concat(m, " (")
                .concat(f.stale.length, " guilds")
                .concat(g, ")\n              unstale: ")
                .concat(_, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ")
                .concat(c, " (")
                .concat(p.length, " guilds)\n      )"),
        ),
            I.Z.setCacheInfo({
                guilds: o.length,
                privateChannels: r,
                basicChannels: d,
                basicChannelsStale: m,
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
class eo extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(C.default, O.Z, A.Z, N.Z), M || O.Z.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !M || Z;
    }
    getLazyCacheStatus() {
        return M ? U : "no-cache";
    }
    get lastWriteTime() {
        return G;
    }
    canWriteCaches(e) {
        return (0, P.$8)()
            ? k
                ? (j.log("Not writing cache because caches cleared"), !1)
                : !!e || !!B || (j.log("Not writing cache because never connected"), !1)
            : (j.log("Not writing cache because not authenticated"), !1);
    }
    async loadCacheAsync(e, t) {
        let n = (0, w.h)(t);
        if ("initializing" !== U) {
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
            let t = C.default.getId(),
                r = E.Z.carefullyOpenDatabase(t),
                [i, a, o] = await I.Z.loadMiniCache.measureAsync(() => J(r, t, e));
            i ? (n(), await ei(r, t, a, o)) : (n(), await $());
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
L(eo, "displayName", "CacheStore"),
    new eo(
        s.Z,
        M
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
