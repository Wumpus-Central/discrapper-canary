n.d(t, { q: () => y }), n(47120), n(724458);
var i,
    s,
    r,
    l = n(956067);
n(724522);
var a = n(149765),
    o = n(442837),
    c = n(433517),
    d = n(570140),
    u = n(86670),
    m = n(261375),
    h = n(17567),
    g = n(795513),
    _ = n(685736),
    x = n(266750),
    p = n(768910),
    E = n(632093),
    C = n(347994),
    f = n(591526),
    T = n(261875),
    N = n(710845),
    I = n(38618),
    S = n(218543),
    b = n(314897),
    v = n(944486),
    j = n(914010),
    A = n(449934),
    O = n(576376),
    R = n(38217),
    P = n(864631),
    D = n(981631);
let Z = new N.Z('CacheStore'),
    y = !1,
    k = !1,
    L = 'initializing',
    B = 0,
    M = !1,
    w = !1,
    V = !1;
function U(e) {
    Z.log('Clearing cache store'), (B = Date.now()), c.K.remove(D.FsG), c.K.remove(D.ihW), c.K.remove(D.O42), (L = 'no-cache'), 'CLEAR_CACHES' === e.type && e.preventWritingCachesAgainThisSession && (k = !0);
}
async function G(e, t, n) {
    let i = performance.now();
    if (null == e || null == n)
        return (
            Z.verbose('skipped loaded messages (channel: '.concat(n, ', database: ').concat(e, ').')),
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
        let s = await _.ZP.startupLoad(e, t, n, D.AQB);
        Z.verbose('loaded '.concat(s.messages.length, ' messages (guild: ').concat(t, ', channel: ').concat(n, ').'));
        let r = {
            guildId: t,
            channelId: n,
            users: s.users,
            members: s.members,
            messages: s.messages
        };
        return [performance.now() - i, r];
    }
}
async function F(e, t, n) {
    var i, s, r;
    Z.verbose('loading early cache');
    let a = I.Z.getSocket();
    a.connect();
    let c = null !== (i = j.Z.getGuildId()) && void 0 !== i ? i : null,
        u = null !== (s = v.Z.getChannelId()) && void 0 !== s ? s : null,
        m = performance.now(),
        h = S.Z.loadCachedMessages.measureAsyncWithoutNesting(() => G(e, c, u)),
        g = S.Z.fetchGuildCache.measureAsync(() => z(e, n)),
        _ = S.Z.fetchGuildCache.measureAsync(() => Y(e, n)),
        x = null != e ? l.Z.timeAsync('\uD83D\uDCBE', 'cache: private_channels', () => f.Z.getAsync(e, null)) : Promise.resolve([]),
        T = null == e ? Promise.resolve({}) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: user_settings', () => C.Z.getAll(e)),
        N = null == e ? Promise.resolve([]) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: read_states', () => p.Z.getAll(e)),
        b = null == e ? Promise.resolve([]) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: user_guild_settings', () => E.Z.getAll(e)),
        [[A, O], R, D, y, k, L, B] = await Promise.all([h, g, _, x, T, N, b]),
        M = performance.now() - m;
    if ((Z.verbose('cache loaded in '.concat(M, 'ms (channel_history ').concat(A, 'ms)')), null == O)) return (0, P.Z)('database:history_cache_null'), Z.verbose('finished without dispatching CACHE_LOADED'), [!1, null, 0];
    {
        let i = Object.fromEntries(O.members.map((e) => [e.userId, e])),
            s = null != D.guildId && null != D.channels,
            m = D.guildId;
        return (
            o.ZP.Emitter.batched(() => {
                l.Z.time('\uD83D\uDCBE', 'Dispatch Mini Cache', () => {
                    var e;
                    return d.Z.dispatch({
                        type: 'CACHE_LOADED',
                        guilds: R,
                        privateChannels: y,
                        initialGuildChannels: null !== (e = D.channels) && void 0 !== e ? e : [],
                        users: [...O.users],
                        messages: null == O.channelId ? {} : { [O.channelId]: O.messages },
                        guildMembers: null == O.guildId ? {} : { [O.guildId]: i },
                        userSettings: k,
                        userGuildSettings: B,
                        readStates: L
                    });
                }),
                    l.Z.time('\uD83D\uDCBE', 'socket.processFirstQueuedDispatch()', () => a.dispatcher.processFirstQueuedDispatch(new Set(['INITIAL_GUILD'])));
            }),
            Z.verbose(
                'early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: '
                    .concat(t, '\n          selected_guild: ')
                    .concat(c, '\n          selected_channel: ')
                    .concat(u, '\n          navigation_state: ')
                    .concat(JSON.stringify(n), '\n          database: ')
                    .concat(null != e, '\n            name: ')
                    .concat(null == e ? void 0 : e.name, '\n        data:\n          database:\n            private_channels: ')
                    .concat(y.length, '\n            channel_history:\n              guild: ')
                    .concat(O.guildId, '\n              channel: ')
                    .concat(O.channelId, '\n              messages: ')
                    .concat(O.messages.length, '\n                members: ')
                    .concat(O.members.length, '\n                users: ')
                    .concat(O.users.length, '\n            initial_guild:\n              id: ')
                    .concat(m, '\n              channels: ')
                    .concat(null === (r = D.channels) || void 0 === r ? void 0 : r.length, '\n            user_settings: ')
                    .concat(Object.keys(k).length, '\n            read_states: ')
                    .concat(L.length, '\n            user_guild_settings: ')
                    .concat(B.length, '\n      )')
            ),
            Z.verbose('finished dispatching CACHE_LOADED'),
            [!0, s && null != m ? m : null, y.length]
        );
    }
}
let H = !1;
async function z(e, t) {
    var n, i;
    if (null == e) return [];
    switch (t.page) {
        case 'private-channels':
        case 'guild-channels':
            H = !0;
            break;
        case 'other':
            '@me' === t.guildId && (H = !0);
    }
    if (H) return null !== (n = await (0, u.dI)(() => l.Z.timeAsync('\uD83D\uDCBE', 'cache: guilds', () => h.Z.getAsync(e)))) && void 0 !== n ? n : [];
    let s = null !== (i = (await x.Z.getCommittedVersions()).initial_guild_id) && void 0 !== i ? i : t.guildId;
    if (null == s || '@me' === s) return [];
    let r = await (0, u.dI)(() => h.Z.getOneAsync(e, s));
    return null != r ? [r] : [];
}
async function Y(e, t) {
    if (null == e)
        return Promise.resolve({
            channels: null,
            guildId: null
        });
    let n = (await x.Z.getCommittedVersions()).initial_guild_id;
    if ((null == n && 'guild-channels' === t.page && (n = t.guildId), null == e || null == n))
        return (
            Z.verbose('skipped loading initial guild (guild: '.concat(n, ', database: ').concat(e, ')')),
            Promise.resolve({
                channels: null,
                guildId: null
            })
        );
    let i = n;
    return {
        channels: await (0, u.dI)(() => f.Z.getAsync(e, i)),
        guildId: n
    };
}
async function W(e, t, n, i) {
    Z.verbose('loading late lazy cache');
    let [s, r, o] = await S.Z.fetchLazyCache.measureAsync(() =>
            Promise.all([
                (0, u.dI)(() => (null != e ? l.Z.timeAsync('\uD83D\uDCBE', 'cache: cache_version', () => g.Z.okAsync(e)) : Promise.resolve(!0))),
                (0, u.dI)(() => (null == e || H ? Promise.resolve([]) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: lazy guilds', () => h.Z.getAsync(e)))),
                (0, u.dI)(() =>
                    null != e
                        ? l.Z.timeAsync('\uD83D\uDCBE', 'cache: basic_channels', () => m.Z.getAsync(e))
                        : Promise.resolve({
                              all: [],
                              stale: [],
                              channels: []
                          })
                )
            ])
        ),
        c = await S.Z.fetchStaleChannels.measureAsync(() =>
            null != e && null != o && o.stale.length > 0
                ? (0, u.dI)(() => {
                      var t;
                      return (t = o.stale), Z.verbose('loading stale guild channels (count: '.concat(t.length, ', ids: ').concat(t.join(', '), ')')), Promise.all(t.map((t) => f.Z.getAsync(e, t).then((e) => [t, e])));
                  })
                : Promise.resolve([])
        );
    await new Promise((e) => setTimeout(e, 0)), S.Z.loadLazyCache.recordStart();
    let _ = I.Z.getSocket();
    K(() => {
        let l = performance.now();
        if (!1 === s) {
            (0, P.Z)('database:not_ok'),
                d.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'database:not_ok'
                }),
                d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        if (null == r || null == o || null == c) {
            (0, P.Z)('database:load_failed'),
                Z.log(
                    "couldn't load database item (\n          database: "
                        .concat(null != e, '\n          basic_channels: ')
                        .concat(null != o, '\n          guild_channels: ')
                        .concat(null != c, '\n          guilds: ')
                        .concat(null != r, '\n        )')
                ),
                d.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'database:load_failed'
                }),
                d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        if (null == s && (r.length > 0 || o.all.length > 0)) {
            (0, P.Z)('database:versionless'),
                Z.log('kv_cache was not ok (null version with values)'),
                d.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'database:versionless'
                }),
                d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        if (w) {
            (0, P.Z)('already_connected'), Z.log('Skipping lazy cache; already connected.'), d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        _.addAnalytics({ hadCacheAtStartup: !0 });
        let u = {
            type: 'CACHE_LOADED_LAZY',
            guilds: r,
            guildChannels: c,
            basicGuildChannels: o.channels,
            initialGuildId: n
        };
        S.Z.deserializeCache.measure(() =>
            (function (e) {
                if (null != e.guilds) {
                    for (let { roles: t } of e.guilds)
                        if (null != t)
                            for (let e in t) {
                                let n = t[e];
                                n.permissions = a.vB(n.permissions);
                            }
                }
                null != e.channels && (0, R.ZP)(e.channels), null != e.privateChannels && (0, R.ZP)(e.privateChannels), null != e.guildChannels && (0, R._$)(e.guildChannels);
            })(u)
        ),
            S.Z.dispatchLazyCache.measure(() => d.Z.dispatch(u)),
            Z.verbose('late lazy cache loaded (ok: true, took: '.concat(performance.now() - l, 'ms)')),
            _.addAnalytics({ usedCacheAtStartup: !0 });
        let m = c.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            h = c.length,
            g = o.all.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            x = o.channels.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            p = g - x,
            E = 0 === o.stale.length ? '' : ' \xB7 '.concat(o.stale.join(', '));
        Z.verbose(
            'lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: '
                .concat(t, '\n          initial_guild: ')
                .concat(n, '\n          database: ')
                .concat(null != e, '\n            ok: ')
                .concat(s, '\n            name: ')
                .concat(null == e ? void 0 : e.name, '\n        data:\n          database:\n            guilds: ')
                .concat(r.length, '\n            basic_channels:\n              total: ')
                .concat(g, ' (')
                .concat(o.channels.length, ' guilds)\n              stale: ')
                .concat(p, ' (')
                .concat(o.stale.length, ' guilds')
                .concat(E, ')\n              unstale: ')
                .concat(x, '\n            full_channels (guilds_with_stale_basic_channels):\n              total: ')
                .concat(m, ' (')
                .concat(c.length, ' guilds)\n      )')
        ),
            S.Z.setCacheInfo({
                guilds: r.length,
                privateChannels: i,
                basicChannels: g,
                basicChannelsStale: p,
                fullChannels: m,
                fullChannelGuilds: h
            });
    });
}
function K(e) {
    let t = I.Z.getSocket(),
        n = !1;
    o.ZP.Emitter.batched(() => {
        try {
            if ((e(), !t.dispatcher.hasStuffToDispatchNow())) {
                Z.verbose('Unpausing Dispatch Queue'), t.dispatcher.unpauseDispatchQueue();
                return;
            }
            (n = !0),
                S.Z.loadLazyCache.recordEnd(),
                Z.verbose('Processing First Queued Dispatch'),
                t.dispatcher.processFirstQueuedDispatch(new Set(['READY', 'INITIAL_GUILD'])),
                setTimeout(() => {
                    Z.verbose('Unpausing Dispatch Queue'), t.dispatcher.unpauseDispatchQueue();
                }, 100);
        } catch (e) {
            Z.warn('Lazy cache has encountered error', e),
                d.Z.dispatch({
                    type: 'RESET_SOCKET',
                    args: {
                        error: e,
                        action: 'LazyCache'
                    }
                });
        }
    }),
        n || S.Z.loadLazyCache.recordEnd();
}
class X extends (i = o.ZP.Store) {
    initialize() {
        y || I.Z.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !y || M;
    }
    getLazyCacheStatus() {
        return y ? L : 'no-cache';
    }
    get lastWriteTime() {
        return B;
    }
    canWriteCaches(e) {
        return (0, A.$8)() ? (k ? (Z.log('Not writing cache because caches cleared'), !1) : !!e || !!V || (Z.log('Not writing cache because never connected'), !1)) : (Z.log('Not writing cache because not authenticated'), !1);
    }
    async loadCacheAsync(e, t) {
        let n = (0, O.h)(t);
        if ('initializing' !== L) {
            (0, P.Z)('cache:lazy_cache_not_initializing'),
                n(),
                setTimeout(() => {
                    var e, t;
                    return null === (t = I.Z.getSocket()) || void 0 === t ? void 0 : null === (e = t.dispatcher) || void 0 === e ? void 0 : e.unpauseDispatchQueue();
                }, 0);
            return;
        }
        try {
            let t = b.default.getId(),
                i = T.Z.carefullyOpenDatabase(t),
                [s, r, l] = await S.Z.loadMiniCache.measureAsync(() => F(i, t, e));
            s ? (n(), await W(i, t, r, l)) : (n(), await (K(() => d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' })), Promise.resolve()));
        } catch (e) {
            Z.error('clearing cache. exception encountered while loading cache.', e, e.stack),
                (0, P.Z)('cache:exception'),
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
(r = 'CacheStore'),
    (s = 'displayName') in X
        ? Object.defineProperty(X, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (X[s] = r),
    new X(
        d.Z,
        y
            ? {
                  CONNECTION_OPEN: function () {
                      return (w = !0), (V = !0), !1;
                  },
                  LOGOUT: U,
                  CONNECTION_CLOSED: function () {
                      return (w = !1), (V = !0), !1;
                  },
                  CACHE_LOADED: function () {
                      M = !0;
                  },
                  CACHE_LOADED_LAZY: function () {
                      (M = !0), (L = 'cache-loaded');
                  },
                  CACHE_LOADED_LAZY_NO_CACHE: function () {
                      L = 'no-cache';
                  },
                  CLEAR_CACHES: U,
                  WRITE_CACHES: function () {
                      Z.verbose('Writing cache now'), (B = Date.now()), (M = !0), c.K.remove(D.FsG), c.K.remove(D.O42), c.K.remove(D.ihW);
                  }
              }
            : {}
    );
