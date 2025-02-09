n.d(t, { q: () => B }), n(47120), n(724458);
var i,
    r,
    a,
    s = n(956067);
n(724522);
var l = n(149765),
    o = n(442837),
    c = n(433517),
    d = n(570140),
    u = n(86670),
    m = n(261375),
    g = n(17567),
    _ = n(795513),
    p = n(685736),
    f = n(266750),
    h = n(768910),
    x = n(632093),
    E = n(347994),
    C = n(591526),
    b = n(261875),
    v = n(710845),
    T = n(38618),
    N = n(218543),
    I = n(314897),
    R = n(944486),
    j = n(914010),
    S = n(449934),
    A = n(576376),
    P = n(38217),
    Z = n(864631),
    w = n(981631);
let M = new v.Z('CacheStore'),
    B = !1,
    y = !1,
    k = 'initializing',
    O = 0,
    L = !1,
    D = !1,
    U = !1;
function G(e) {
    M.log('Clearing cache store'), (O = Date.now()), c.K.remove(w.FsG), c.K.remove(w.ihW), c.K.remove(w.O42), (k = 'no-cache'), 'CLEAR_CACHES' === e.type && e.preventWritingCachesAgainThisSession && (y = !0);
}
async function V(e, t, n) {
    let i = performance.now();
    if (null == e || null == n)
        return (
            M.verbose('skipped loaded messages (channel: '.concat(n, ', database: ').concat(e, ').')),
            [
                performance.now() - i,
                {
                    guildId: null,
                    channelId: null,
                    users: [],
                    members: [],
                    messages: []
                }
            ]
        );
    {
        let r = await p.ZP.startupLoad(e, t, n, w.AQB);
        M.verbose('loaded '.concat(r.messages.length, ' messages (guild: ').concat(t, ', channel: ').concat(n, ').'));
        let a = {
            guildId: t,
            channelId: n,
            users: r.users,
            members: r.members,
            messages: r.messages
        };
        return [performance.now() - i, a];
    }
}
async function H(e, t, n) {
    var i, r, a;
    M.verbose('loading early cache');
    let l = T.Z.getSocket();
    l.connect();
    let c = null !== (i = j.Z.getGuildId()) && void 0 !== i ? i : null,
        u = null !== (r = R.Z.getChannelId()) && void 0 !== r ? r : null,
        m = performance.now(),
        g = N.Z.loadCachedMessages.measureAsyncWithoutNesting(() => V(e, c, u)),
        _ = N.Z.fetchGuildCache.measureAsync(() => W(e, n)),
        p = N.Z.fetchGuildCache.measureAsync(() => z(e, n)),
        f = null != e ? s.Z.timeAsync('\uD83D\uDCBE', 'cache: private_channels', () => C.Z.getAsync(e, null)) : Promise.resolve([]),
        b = null == e ? Promise.resolve({}) : s.Z.timeAsync('\uD83D\uDCBE', 'cache: user_settings', () => E.Z.getAll(e)),
        v = null == e ? Promise.resolve([]) : s.Z.timeAsync('\uD83D\uDCBE', 'cache: read_states', () => h.Z.getAll(e)),
        I = null == e ? Promise.resolve([]) : s.Z.timeAsync('\uD83D\uDCBE', 'cache: user_guild_settings', () => x.Z.getAll(e)),
        [[S, A], P, w, B, y, k, O] = await Promise.all([g, _, p, f, b, v, I]),
        L = performance.now() - m;
    if ((M.verbose('cache loaded in '.concat(L, 'ms (channel_history ').concat(S, 'ms)')), null == A)) return (0, Z.Z)('database:history_cache_null'), M.verbose('finished without dispatching CACHE_LOADED'), [!1, null, 0];
    {
        let i = Object.fromEntries(A.members.map((e) => [e.userId, e])),
            r = null != w.guildId && null != w.channels,
            m = w.guildId;
        return (
            o.ZP.Emitter.batched(() => {
                s.Z.time('\uD83D\uDCBE', 'Dispatch Mini Cache', () => {
                    var e;
                    return d.Z.dispatch({
                        type: 'CACHE_LOADED',
                        guilds: P,
                        privateChannels: B,
                        initialGuildChannels: null !== (e = w.channels) && void 0 !== e ? e : [],
                        users: [...A.users],
                        messages: null == A.channelId ? {} : { [A.channelId]: A.messages },
                        guildMembers: null == A.guildId ? {} : { [A.guildId]: i },
                        userSettings: y,
                        userGuildSettings: O,
                        readStates: k
                    });
                }),
                    s.Z.time('\uD83D\uDCBE', 'socket.processFirstQueuedDispatch()', () => l.dispatcher.processFirstQueuedDispatch(new Set(['INITIAL_GUILD'])));
            }),
            M.verbose(
                'early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: '
                    .concat(t, '\n          selected_guild: ')
                    .concat(c, '\n          selected_channel: ')
                    .concat(u, '\n          navigation_state: ')
                    .concat(JSON.stringify(n), '\n          database: ')
                    .concat(null != e, '\n            name: ')
                    .concat(null == e ? void 0 : e.name, '\n        data:\n          database:\n            private_channels: ')
                    .concat(B.length, '\n            channel_history:\n              guild: ')
                    .concat(A.guildId, '\n              channel: ')
                    .concat(A.channelId, '\n              messages: ')
                    .concat(A.messages.length, '\n                members: ')
                    .concat(A.members.length, '\n                users: ')
                    .concat(A.users.length, '\n            initial_guild:\n              id: ')
                    .concat(m, '\n              channels: ')
                    .concat(null === (a = w.channels) || void 0 === a ? void 0 : a.length, '\n            user_settings: ')
                    .concat(Object.keys(y).length, '\n            read_states: ')
                    .concat(k.length, '\n            user_guild_settings: ')
                    .concat(O.length, '\n      )')
            ),
            M.verbose('finished dispatching CACHE_LOADED'),
            [!0, r && null != m ? m : null, B.length]
        );
    }
}
let F = !1;
async function W(e, t) {
    var n, i;
    if (null == e) return [];
    switch (t.page) {
        case 'private-channels':
        case 'guild-channels':
            F = !0;
            break;
        case 'other':
            '@me' === t.guildId && (F = !0);
    }
    if (F) return null !== (n = await (0, u.dI)(() => s.Z.timeAsync('\uD83D\uDCBE', 'cache: guilds', () => g.Z.getAsync(e)))) && void 0 !== n ? n : [];
    let r = null !== (i = (await f.Z.getCommittedVersions()).initial_guild_id) && void 0 !== i ? i : t.guildId;
    if (null == r || '@me' === r) return [];
    let a = await (0, u.dI)(() => g.Z.getOneAsync(e, r));
    return null != a ? [a] : [];
}
async function z(e, t) {
    if (null == e)
        return Promise.resolve({
            channels: null,
            guildId: null
        });
    let n = (await f.Z.getCommittedVersions()).initial_guild_id;
    if ((null == n && 'guild-channels' === t.page && (n = t.guildId), null == e || null == n))
        return (
            M.verbose('skipped loading initial guild (guild: '.concat(n, ', database: ').concat(e, ')')),
            Promise.resolve({
                channels: null,
                guildId: null
            })
        );
    let i = n;
    return {
        channels: await (0, u.dI)(() => C.Z.getAsync(e, i)),
        guildId: n
    };
}
async function Y(e, t, n, i) {
    M.verbose('loading late lazy cache');
    let [r, a, o] = await N.Z.fetchLazyCache.measureAsync(() =>
            Promise.all([
                (0, u.dI)(() => (null != e ? s.Z.timeAsync('\uD83D\uDCBE', 'cache: cache_version', () => _.Z.okAsync(e)) : Promise.resolve(!0))),
                (0, u.dI)(() => (null == e || F ? Promise.resolve([]) : s.Z.timeAsync('\uD83D\uDCBE', 'cache: lazy guilds', () => g.Z.getAsync(e)))),
                (0, u.dI)(() =>
                    null != e
                        ? s.Z.timeAsync('\uD83D\uDCBE', 'cache: basic_channels', () => m.Z.getAsync(e))
                        : Promise.resolve({
                              all: [],
                              stale: [],
                              channels: []
                          })
                )
            ])
        ),
        c = await N.Z.fetchStaleChannels.measureAsync(() =>
            null != e && null != o && o.stale.length > 0
                ? (0, u.dI)(() => {
                      var t;
                      return (t = o.stale), M.verbose('loading stale guild channels (count: '.concat(t.length, ', ids: ').concat(t.join(', '), ')')), Promise.all(t.map((t) => C.Z.getAsync(e, t).then((e) => [t, e])));
                  })
                : Promise.resolve([])
        );
    await new Promise((e) => setTimeout(e, 0)), N.Z.loadLazyCache.recordStart();
    let p = T.Z.getSocket();
    q(() => {
        let s = performance.now();
        if (!1 === r) {
            (0, Z.Z)('database:not_ok'),
                d.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'database:not_ok'
                }),
                d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        if (null == a || null == o || null == c) {
            (0, Z.Z)('database:load_failed'),
                M.log(
                    "couldn't load database item (\n          database: "
                        .concat(null != e, '\n          basic_channels: ')
                        .concat(null != o, '\n          guild_channels: ')
                        .concat(null != c, '\n          guilds: ')
                        .concat(null != a, '\n        )')
                ),
                d.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'database:load_failed'
                }),
                d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        if (null == r && (a.length > 0 || o.all.length > 0)) {
            (0, Z.Z)('database:versionless'),
                M.log('kv_cache was not ok (null version with values)'),
                d.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'database:versionless'
                }),
                d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        if (D) {
            (0, Z.Z)('already_connected'), M.log('Skipping lazy cache; already connected.'), d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        p.addAnalytics({ hadCacheAtStartup: !0 });
        let u = {
            type: 'CACHE_LOADED_LAZY',
            guilds: a,
            guildChannels: c,
            basicGuildChannels: o.channels,
            initialGuildId: n
        };
        N.Z.deserializeCache.measure(() =>
            (function (e) {
                if (null != e.guilds) {
                    for (let { roles: t } of e.guilds)
                        if (null != t)
                            for (let e in t) {
                                let n = t[e];
                                n.permissions = l.vB(n.permissions);
                            }
                }
                null != e.channels && (0, P.ZP)(e.channels), null != e.privateChannels && (0, P.ZP)(e.privateChannels), null != e.guildChannels && (0, P._$)(e.guildChannels);
            })(u)
        ),
            N.Z.dispatchLazyCache.measure(() => d.Z.dispatch(u)),
            M.verbose('late lazy cache loaded (ok: true, took: '.concat(performance.now() - s, 'ms)')),
            p.addAnalytics({ usedCacheAtStartup: !0 });
        let m = c.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            g = c.length,
            _ = o.all.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            f = o.channels.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            h = _ - f,
            x = 0 === o.stale.length ? '' : ' \xB7 '.concat(o.stale.join(', '));
        M.verbose(
            'lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: '
                .concat(t, '\n          initial_guild: ')
                .concat(n, '\n          database: ')
                .concat(null != e, '\n            ok: ')
                .concat(r, '\n            name: ')
                .concat(null == e ? void 0 : e.name, '\n        data:\n          database:\n            guilds: ')
                .concat(a.length, '\n            basic_channels:\n              total: ')
                .concat(_, ' (')
                .concat(o.channels.length, ' guilds)\n              stale: ')
                .concat(h, ' (')
                .concat(o.stale.length, ' guilds')
                .concat(x, ')\n              unstale: ')
                .concat(f, '\n            full_channels (guilds_with_stale_basic_channels):\n              total: ')
                .concat(m, ' (')
                .concat(c.length, ' guilds)\n      )')
        ),
            N.Z.setCacheInfo({
                guilds: a.length,
                privateChannels: i,
                basicChannels: _,
                basicChannelsStale: h,
                fullChannels: m,
                fullChannelGuilds: g
            });
    });
}
function q(e) {
    let t = T.Z.getSocket(),
        n = !1;
    o.ZP.Emitter.batched(() => {
        try {
            if ((e(), !t.dispatcher.hasStuffToDispatchNow())) {
                M.verbose('Unpausing Dispatch Queue'), t.dispatcher.unpauseDispatchQueue();
                return;
            }
            (n = !0),
                N.Z.loadLazyCache.recordEnd(),
                M.verbose('Processing First Queued Dispatch'),
                t.dispatcher.processFirstQueuedDispatch(new Set(['READY', 'INITIAL_GUILD'])),
                setTimeout(() => {
                    M.verbose('Unpausing Dispatch Queue'), t.dispatcher.unpauseDispatchQueue();
                }, 100);
        } catch (e) {
            M.warn('Lazy cache has encountered error', e),
                d.Z.dispatch({
                    type: 'RESET_SOCKET',
                    args: {
                        error: e,
                        action: 'LazyCache'
                    }
                });
        }
    }),
        n || N.Z.loadLazyCache.recordEnd();
}
class Q extends (i = o.ZP.Store) {
    initialize() {
        B || T.Z.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !B || L;
    }
    getLazyCacheStatus() {
        return B ? k : 'no-cache';
    }
    get lastWriteTime() {
        return O;
    }
    canWriteCaches(e) {
        return (0, S.$8)() ? (y ? (M.log('Not writing cache because caches cleared'), !1) : !!e || !!U || (M.log('Not writing cache because never connected'), !1)) : (M.log('Not writing cache because not authenticated'), !1);
    }
    async loadCacheAsync(e, t) {
        let n = (0, A.h)(t);
        if ('initializing' !== k) {
            (0, Z.Z)('cache:lazy_cache_not_initializing'),
                n(),
                setTimeout(() => {
                    var e, t;
                    return null === (t = T.Z.getSocket()) || void 0 === t ? void 0 : null === (e = t.dispatcher) || void 0 === e ? void 0 : e.unpauseDispatchQueue();
                }, 0);
            return;
        }
        try {
            let t = I.default.getId(),
                i = b.Z.carefullyOpenDatabase(t),
                [r, a, s] = await N.Z.loadMiniCache.measureAsync(() => H(i, t, e));
            r ? (n(), await Y(i, t, a, s)) : (n(), await (q(() => d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' })), Promise.resolve()));
        } catch (e) {
            M.error('clearing cache. exception encountered while loading cache.', e, e.stack),
                (0, Z.Z)('cache:exception'),
                n(),
                d.Z.dispatch({
                    type: 'RESET_SOCKET',
                    args: {
                        error: e,
                        action: 'loadCacheAsync'
                    }
                });
        }
    }
}
(a = 'CacheStore'),
    (r = 'displayName') in Q
        ? Object.defineProperty(Q, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (Q[r] = a),
    new Q(
        d.Z,
        B
            ? {
                  CONNECTION_OPEN: function () {
                      return (D = !0), (U = !0), !1;
                  },
                  LOGOUT: G,
                  CONNECTION_CLOSED: function () {
                      return (D = !1), (U = !0), !1;
                  },
                  CACHE_LOADED: function () {
                      L = !0;
                  },
                  CACHE_LOADED_LAZY: function () {
                      (L = !0), (k = 'cache-loaded');
                  },
                  CACHE_LOADED_LAZY_NO_CACHE: function () {
                      k = 'no-cache';
                  },
                  CLEAR_CACHES: G,
                  WRITE_CACHES: function () {
                      M.verbose('Writing cache now'), (O = Date.now()), (L = !0), c.K.remove(w.FsG), c.K.remove(w.O42), c.K.remove(w.ihW);
                  }
              }
            : {}
    );
