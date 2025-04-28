n.d(t, { q: () => Z }), n(388685), n(467055), n(49124);
var i,
    r,
    s,
    l = n(956067);
n(724522);
var a = n(149765),
    o = n(442837),
    c = n(433517),
    d = n(570140),
    u = n(86670),
    m = n(261375),
    p = n(17567),
    g = n(795513),
    h = n(685736),
    f = n(266750),
    b = n(768910),
    _ = n(632093),
    x = n(347994),
    E = n(591526),
    j = n(261875),
    C = n(710845),
    O = n(38618),
    S = n(218543),
    v = n(314897),
    T = n(944486),
    N = n(914010),
    I = n(449934),
    y = n(576376),
    A = n(38217),
    P = n(864631),
    R = n(981631);
let D = new C.Z('CacheStore'),
    Z = !1,
    w = !1,
    k = 'initializing',
    L = 0,
    M = !1,
    B = !1,
    U = !1;
function V(e) {
    D.log('Clearing cache store'), (L = Date.now()), c.K.remove(R.FsG), c.K.remove(R.ihW), c.K.remove(R.O42), (k = 'no-cache'), 'CLEAR_CACHES' === e.type && e.preventWritingCachesAgainThisSession && (w = !0);
}
async function G(e, t, n) {
    let i = performance.now();
    if (null == e || null == n)
        return (
            D.verbose('skipped loaded messages (channel: '.concat(n, ', database: ').concat(e, ').')),
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
        let r = await h.ZP.startupLoad(e, t, n, R.AQB);
        D.verbose('loaded '.concat(r.messages.length, ' messages (guild: ').concat(t, ', channel: ').concat(n, ').'));
        let s = {
            guildId: t,
            channelId: n,
            users: r.users,
            members: r.members,
            messages: r.messages
        };
        return [performance.now() - i, s];
    }
}
async function F(e, t, n) {
    var i, r, s;
    D.verbose('loading early cache');
    let a = O.Z.getSocket();
    a.connect();
    let c = null != (i = N.Z.getGuildId()) ? i : null,
        u = null != (r = T.Z.getChannelId()) ? r : null,
        m = performance.now(),
        p = S.Z.loadCachedMessages.measureAsyncWithoutNesting(() => G(e, c, u)),
        g = S.Z.fetchGuildCache.measureAsync(() => z(e, n)),
        h = S.Z.fetchGuildCache.measureAsync(() => W(e, n)),
        f = null != e ? l.Z.timeAsync('\uD83D\uDCBE', 'cache: private_channels', () => E.Z.getAsync(e, null)) : Promise.resolve([]),
        j = null == e ? Promise.resolve({}) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: user_settings', () => x.Z.getAll(e)),
        C = null == e ? Promise.resolve([]) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: read_states', () => b.Z.getAll(e)),
        v = null == e ? Promise.resolve([]) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: user_guild_settings', () => _.Z.getAll(e)),
        [[I, y], A, R, Z, w, k, L] = await Promise.all([p, g, h, f, j, C, v]),
        M = performance.now() - m;
    if ((D.verbose('cache loaded in '.concat(M, 'ms (channel_history ').concat(I, 'ms)')), null == y)) return (0, P.Z)('database:history_cache_null'), D.verbose('finished without dispatching CACHE_LOADED'), [!1, null, 0];
    {
        let i = Object.fromEntries(y.members.map((e) => [e.userId, e])),
            r = null != R.guildId && null != R.channels,
            m = R.guildId;
        return (
            o.ZP.Emitter.batched(() => {
                l.Z.time('\uD83D\uDCBE', 'Dispatch Mini Cache', () => {
                    var e;
                    return d.Z.dispatch({
                        type: 'CACHE_LOADED',
                        guilds: A,
                        privateChannels: Z,
                        initialGuildChannels: null != (e = R.channels) ? e : [],
                        users: [...y.users],
                        messages: null == y.channelId ? {} : { [y.channelId]: y.messages },
                        guildMembers: null == y.guildId ? {} : { [y.guildId]: i },
                        userSettings: w,
                        userGuildSettings: L,
                        readStates: k
                    });
                }),
                    l.Z.time('\uD83D\uDCBE', 'socket.processFirstQueuedDispatch()', () => a.dispatcher.processFirstQueuedDispatch(new Set(['INITIAL_GUILD'])));
            }),
            D.verbose(
                'early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: '
                    .concat(t, '\n          selected_guild: ')
                    .concat(c, '\n          selected_channel: ')
                    .concat(u, '\n          navigation_state: ')
                    .concat(JSON.stringify(n), '\n          database: ')
                    .concat(null != e, '\n            name: ')
                    .concat(null == e ? void 0 : e.name, '\n        data:\n          database:\n            private_channels: ')
                    .concat(Z.length, '\n            channel_history:\n              guild: ')
                    .concat(y.guildId, '\n              channel: ')
                    .concat(y.channelId, '\n              messages: ')
                    .concat(y.messages.length, '\n                members: ')
                    .concat(y.members.length, '\n                users: ')
                    .concat(y.users.length, '\n            initial_guild:\n              id: ')
                    .concat(m, '\n              channels: ')
                    .concat(null == (s = R.channels) ? void 0 : s.length, '\n            user_settings: ')
                    .concat(Object.keys(w).length, '\n            read_states: ')
                    .concat(k.length, '\n            user_guild_settings: ')
                    .concat(L.length, '\n      )')
            ),
            D.verbose('finished dispatching CACHE_LOADED'),
            [!0, r && null != m ? m : null, Z.length]
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
    if (H) return null != (n = await (0, u.dI)(() => l.Z.timeAsync('\uD83D\uDCBE', 'cache: guilds', () => p.Z.getAsync(e)))) ? n : [];
    let r = null != (i = (await f.Z.getCommittedVersions()).initial_guild_id) ? i : t.guildId;
    if (null == r || '@me' === r) return [];
    let s = await (0, u.dI)(() => p.Z.getOneAsync(e, r));
    return null != s ? [s] : [];
}
async function W(e, t) {
    if (null == e)
        return Promise.resolve({
            channels: null,
            guildId: null
        });
    let n = (await f.Z.getCommittedVersions()).initial_guild_id;
    if ((null == n && 'guild-channels' === t.page && (n = t.guildId), null == e || null == n))
        return (
            D.verbose('skipped loading initial guild (guild: '.concat(n, ', database: ').concat(e, ')')),
            Promise.resolve({
                channels: null,
                guildId: null
            })
        );
    let i = n;
    return {
        channels: await (0, u.dI)(() => E.Z.getAsync(e, i)),
        guildId: n
    };
}
async function Y(e, t, n, i) {
    D.verbose('loading late lazy cache');
    let [r, s, o] = await S.Z.fetchLazyCache.measureAsync(() =>
            Promise.all([
                (0, u.dI)(() => (null != e ? l.Z.timeAsync('\uD83D\uDCBE', 'cache: cache_version', () => g.Z.okAsync(e)) : Promise.resolve(!0))),
                (0, u.dI)(() => (null == e || H ? Promise.resolve([]) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: lazy guilds', () => p.Z.getAsync(e)))),
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
                      return (t = o.stale), D.verbose('loading stale guild channels (count: '.concat(t.length, ', ids: ').concat(t.join(', '), ')')), Promise.all(t.map((t) => E.Z.getAsync(e, t).then((e) => [t, e])));
                  })
                : Promise.resolve([])
        );
    await new Promise((e) => setTimeout(e, 0)), S.Z.loadLazyCache.recordStart();
    let h = O.Z.getSocket();
    K(() => {
        let l = performance.now();
        if (!1 === r) {
            (0, P.Z)('database:not_ok'),
                d.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'database:not_ok'
                }),
                d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        if (null == s || null == o || null == c) {
            (0, P.Z)('database:load_failed'),
                D.log(
                    "couldn't load database item (\n          database: "
                        .concat(null != e, '\n          basic_channels: ')
                        .concat(null != o, '\n          guild_channels: ')
                        .concat(null != c, '\n          guilds: ')
                        .concat(null != s, '\n        )')
                ),
                d.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'database:load_failed'
                }),
                d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        if (null == r && (s.length > 0 || o.all.length > 0)) {
            (0, P.Z)('database:versionless'),
                D.log('kv_cache was not ok (null version with values)'),
                d.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'database:versionless'
                }),
                d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        if (B) {
            (0, P.Z)('already_connected'), D.log('Skipping lazy cache; already connected.'), d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        h.addAnalytics({ hadCacheAtStartup: !0 });
        let u = {
            type: 'CACHE_LOADED_LAZY',
            guilds: s,
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
                null != e.channels && (0, A.ZP)(e.channels), null != e.privateChannels && (0, A.ZP)(e.privateChannels), null != e.guildChannels && (0, A._$)(e.guildChannels);
            })(u)
        ),
            S.Z.dispatchLazyCache.measure(() => d.Z.dispatch(u)),
            D.verbose('late lazy cache loaded (ok: true, took: '.concat(performance.now() - l, 'ms)')),
            h.addAnalytics({ usedCacheAtStartup: !0 });
        let m = c.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            p = c.length,
            g = o.all.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            f = o.channels.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            b = g - f,
            _ = 0 === o.stale.length ? '' : ' \xB7 '.concat(o.stale.join(', '));
        D.verbose(
            'lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: '
                .concat(t, '\n          initial_guild: ')
                .concat(n, '\n          database: ')
                .concat(null != e, '\n            ok: ')
                .concat(r, '\n            name: ')
                .concat(null == e ? void 0 : e.name, '\n        data:\n          database:\n            guilds: ')
                .concat(s.length, '\n            basic_channels:\n              total: ')
                .concat(g, ' (')
                .concat(o.channels.length, ' guilds)\n              stale: ')
                .concat(b, ' (')
                .concat(o.stale.length, ' guilds')
                .concat(_, ')\n              unstale: ')
                .concat(f, '\n            full_channels (guilds_with_stale_basic_channels):\n              total: ')
                .concat(m, ' (')
                .concat(c.length, ' guilds)\n      )')
        ),
            S.Z.setCacheInfo({
                guilds: s.length,
                privateChannels: i,
                basicChannels: g,
                basicChannelsStale: b,
                fullChannels: m,
                fullChannelGuilds: p
            });
    });
}
function K(e) {
    let t = O.Z.getSocket(),
        n = !1;
    o.ZP.Emitter.batched(() => {
        try {
            if ((e(), !t.dispatcher.hasStuffToDispatchNow())) {
                D.verbose('Unpausing Dispatch Queue'), t.dispatcher.unpauseDispatchQueue();
                return;
            }
            (n = !0),
                S.Z.loadLazyCache.recordEnd(),
                D.verbose('Processing First Queued Dispatch'),
                t.dispatcher.processFirstQueuedDispatch(new Set(['READY', 'INITIAL_GUILD'])),
                setTimeout(() => {
                    D.verbose('Unpausing Dispatch Queue'), t.dispatcher.unpauseDispatchQueue();
                }, 100);
        } catch (e) {
            D.warn('Lazy cache has encountered error', e),
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
class q extends (i = o.ZP.Store) {
    initialize() {
        Z || O.Z.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !Z || M;
    }
    getLazyCacheStatus() {
        return Z ? k : 'no-cache';
    }
    get lastWriteTime() {
        return L;
    }
    canWriteCaches(e) {
        return (0, I.$8)() ? (w ? (D.log('Not writing cache because caches cleared'), !1) : !!e || !!U || (D.log('Not writing cache because never connected'), !1)) : (D.log('Not writing cache because not authenticated'), !1);
    }
    async loadCacheAsync(e, t) {
        let n = (0, y.h)(t);
        if ('initializing' !== k) {
            (0, P.Z)('cache:lazy_cache_not_initializing'),
                n(),
                setTimeout(() => {
                    var e, t;
                    return null == (t = O.Z.getSocket()) || null == (e = t.dispatcher) ? void 0 : e.unpauseDispatchQueue();
                }, 0);
            return;
        }
        try {
            let t = v.default.getId(),
                i = j.Z.carefullyOpenDatabase(t),
                [r, s, l] = await S.Z.loadMiniCache.measureAsync(() => F(i, t, e));
            r ? (n(), await Y(i, t, s, l)) : (n(), await (K(() => d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' })), Promise.resolve()));
        } catch (e) {
            D.error('clearing cache. exception encountered while loading cache.', e, e.stack),
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
(s = 'CacheStore'),
    (r = 'displayName') in q
        ? Object.defineProperty(q, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (q[r] = s),
    new q(
        d.Z,
        Z
            ? {
                  CONNECTION_OPEN: function () {
                      return (B = !0), (U = !0), !1;
                  },
                  LOGOUT: V,
                  CONNECTION_CLOSED: function () {
                      return (B = !1), (U = !0), !1;
                  },
                  CACHE_LOADED: function () {
                      M = !0;
                  },
                  CACHE_LOADED_LAZY: function () {
                      (M = !0), (k = 'cache-loaded');
                  },
                  CACHE_LOADED_LAZY_NO_CACHE: function () {
                      k = 'no-cache';
                  },
                  CLEAR_CACHES: V,
                  WRITE_CACHES: function () {
                      D.verbose('Writing cache now'), (L = Date.now()), (M = !0), c.K.remove(R.FsG), c.K.remove(R.O42), c.K.remove(R.ihW);
                  }
              }
            : {}
    );
