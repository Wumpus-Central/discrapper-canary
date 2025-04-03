n.d(t, { q: () => Z }), n(47120), n(977457), n(26686);
var r,
    i,
    s,
    a = n(956067);
n(724522);
var l = n(149765),
    o = n(442837),
    c = n(433517),
    d = n(570140),
    u = n(86670),
    m = n(261375),
    g = n(17567),
    p = n(795513),
    h = n(685736),
    f = n(266750),
    b = n(768910),
    N = n(632093),
    x = n(347994),
    _ = n(591526),
    E = n(261875),
    j = n(710845),
    O = n(38618),
    C = n(218543),
    S = n(314897),
    v = n(944486),
    T = n(914010),
    I = n(449934),
    y = n(576376),
    A = n(38217),
    P = n(864631),
    R = n(981631);
let D = new j.Z('CacheStore'),
    Z = !1,
    w = !1,
    k = 'initializing',
    W = 0,
    L = !1,
    B = !1,
    M = !1;
function U(e) {
    D.log('Clearing cache store'), (W = Date.now()), c.K.remove(R.FsG), c.K.remove(R.ihW), c.K.remove(R.O42), (k = 'no-cache'), 'CLEAR_CACHES' === e.type && e.preventWritingCachesAgainThisSession && (w = !0);
}
async function V(e, t, n) {
    let r = performance.now();
    if (null == e || null == n)
        return (
            D.verbose('skipped loaded messages (channel: '.concat(n, ', database: ').concat(e, ').')),
            [
                performance.now() - r,
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
        let i = await h.ZP.startupLoad(e, t, n, R.AQB);
        D.verbose('loaded '.concat(i.messages.length, ' messages (guild: ').concat(t, ', channel: ').concat(n, ').'));
        let s = {
            guildId: t,
            channelId: n,
            users: i.users,
            members: i.members,
            messages: i.messages
        };
        return [performance.now() - r, s];
    }
}
async function G(e, t, n) {
    var r, i, s;
    D.verbose('loading early cache');
    let l = O.Z.getSocket();
    l.connect();
    let c = null != (r = T.Z.getGuildId()) ? r : null,
        u = null != (i = v.Z.getChannelId()) ? i : null,
        m = performance.now(),
        g = C.Z.loadCachedMessages.measureAsyncWithoutNesting(() => V(e, c, u)),
        p = C.Z.fetchGuildCache.measureAsync(() => H(e, n)),
        h = C.Z.fetchGuildCache.measureAsync(() => z(e, n)),
        f = null != e ? a.Z.timeAsync('\uD83D\uDCBE', 'cache: private_channels', () => _.Z.getAsync(e, null)) : Promise.resolve([]),
        E = null == e ? Promise.resolve({}) : a.Z.timeAsync('\uD83D\uDCBE', 'cache: user_settings', () => x.Z.getAll(e)),
        j = null == e ? Promise.resolve([]) : a.Z.timeAsync('\uD83D\uDCBE', 'cache: read_states', () => b.Z.getAll(e)),
        S = null == e ? Promise.resolve([]) : a.Z.timeAsync('\uD83D\uDCBE', 'cache: user_guild_settings', () => N.Z.getAll(e)),
        [[I, y], A, R, Z, w, k, W] = await Promise.all([g, p, h, f, E, j, S]),
        L = performance.now() - m;
    if ((D.verbose('cache loaded in '.concat(L, 'ms (channel_history ').concat(I, 'ms)')), null == y)) return (0, P.Z)('database:history_cache_null'), D.verbose('finished without dispatching CACHE_LOADED'), [!1, null, 0];
    {
        let r = Object.fromEntries(y.members.map((e) => [e.userId, e])),
            i = null != R.guildId && null != R.channels,
            m = R.guildId;
        return (
            o.ZP.Emitter.batched(() => {
                a.Z.time('\uD83D\uDCBE', 'Dispatch Mini Cache', () => {
                    var e;
                    return d.Z.dispatch({
                        type: 'CACHE_LOADED',
                        guilds: A,
                        privateChannels: Z,
                        initialGuildChannels: null != (e = R.channels) ? e : [],
                        users: [...y.users],
                        messages: null == y.channelId ? {} : { [y.channelId]: y.messages },
                        guildMembers: null == y.guildId ? {} : { [y.guildId]: r },
                        userSettings: w,
                        userGuildSettings: W,
                        readStates: k
                    });
                }),
                    a.Z.time('\uD83D\uDCBE', 'socket.processFirstQueuedDispatch()', () => l.dispatcher.processFirstQueuedDispatch(new Set(['INITIAL_GUILD'])));
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
                    .concat(W.length, '\n      )')
            ),
            D.verbose('finished dispatching CACHE_LOADED'),
            [!0, i && null != m ? m : null, Z.length]
        );
    }
}
let F = !1;
async function H(e, t) {
    var n, r;
    if (null == e) return [];
    switch (t.page) {
        case 'private-channels':
        case 'guild-channels':
            F = !0;
            break;
        case 'other':
            '@me' === t.guildId && (F = !0);
    }
    if (F) return null != (n = await (0, u.dI)(() => a.Z.timeAsync('\uD83D\uDCBE', 'cache: guilds', () => g.Z.getAsync(e)))) ? n : [];
    let i = null != (r = (await f.Z.getCommittedVersions()).initial_guild_id) ? r : t.guildId;
    if (null == i || '@me' === i) return [];
    let s = await (0, u.dI)(() => g.Z.getOneAsync(e, i));
    return null != s ? [s] : [];
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
            D.verbose('skipped loading initial guild (guild: '.concat(n, ', database: ').concat(e, ')')),
            Promise.resolve({
                channels: null,
                guildId: null
            })
        );
    let r = n;
    return {
        channels: await (0, u.dI)(() => _.Z.getAsync(e, r)),
        guildId: n
    };
}
async function Y(e, t, n, r) {
    D.verbose('loading late lazy cache');
    let [i, s, o] = await C.Z.fetchLazyCache.measureAsync(() =>
            Promise.all([
                (0, u.dI)(() => (null != e ? a.Z.timeAsync('\uD83D\uDCBE', 'cache: cache_version', () => p.Z.okAsync(e)) : Promise.resolve(!0))),
                (0, u.dI)(() => (null == e || F ? Promise.resolve([]) : a.Z.timeAsync('\uD83D\uDCBE', 'cache: lazy guilds', () => g.Z.getAsync(e)))),
                (0, u.dI)(() =>
                    null != e
                        ? a.Z.timeAsync('\uD83D\uDCBE', 'cache: basic_channels', () => m.Z.getAsync(e))
                        : Promise.resolve({
                              all: [],
                              stale: [],
                              channels: []
                          })
                )
            ])
        ),
        c = await C.Z.fetchStaleChannels.measureAsync(() =>
            null != e && null != o && o.stale.length > 0
                ? (0, u.dI)(() => {
                      var t;
                      return (t = o.stale), D.verbose('loading stale guild channels (count: '.concat(t.length, ', ids: ').concat(t.join(', '), ')')), Promise.all(t.map((t) => _.Z.getAsync(e, t).then((e) => [t, e])));
                  })
                : Promise.resolve([])
        );
    await new Promise((e) => setTimeout(e, 0)), C.Z.loadLazyCache.recordStart();
    let h = O.Z.getSocket();
    K(() => {
        let a = performance.now();
        if (!1 === i) {
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
        if (null == i && (s.length > 0 || o.all.length > 0)) {
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
        C.Z.deserializeCache.measure(() =>
            (function (e) {
                if (null != e.guilds) {
                    for (let { roles: t } of e.guilds)
                        if (null != t)
                            for (let e in t) {
                                let n = t[e];
                                n.permissions = l.vB(n.permissions);
                            }
                }
                null != e.channels && (0, A.ZP)(e.channels), null != e.privateChannels && (0, A.ZP)(e.privateChannels), null != e.guildChannels && (0, A._$)(e.guildChannels);
            })(u)
        ),
            C.Z.dispatchLazyCache.measure(() => d.Z.dispatch(u)),
            D.verbose('late lazy cache loaded (ok: true, took: '.concat(performance.now() - a, 'ms)')),
            h.addAnalytics({ usedCacheAtStartup: !0 });
        let m = c.reduce((e, t) => {
                let [n, r] = t;
                return e + r.length;
            }, 0),
            g = c.length,
            p = o.all.reduce((e, t) => {
                let [n, r] = t;
                return e + r.length;
            }, 0),
            f = o.channels.reduce((e, t) => {
                let [n, r] = t;
                return e + r.length;
            }, 0),
            b = p - f,
            N = 0 === o.stale.length ? '' : ' \xB7 '.concat(o.stale.join(', '));
        D.verbose(
            'lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: '
                .concat(t, '\n          initial_guild: ')
                .concat(n, '\n          database: ')
                .concat(null != e, '\n            ok: ')
                .concat(i, '\n            name: ')
                .concat(null == e ? void 0 : e.name, '\n        data:\n          database:\n            guilds: ')
                .concat(s.length, '\n            basic_channels:\n              total: ')
                .concat(p, ' (')
                .concat(o.channels.length, ' guilds)\n              stale: ')
                .concat(b, ' (')
                .concat(o.stale.length, ' guilds')
                .concat(N, ')\n              unstale: ')
                .concat(f, '\n            full_channels (guilds_with_stale_basic_channels):\n              total: ')
                .concat(m, ' (')
                .concat(c.length, ' guilds)\n      )')
        ),
            C.Z.setCacheInfo({
                guilds: s.length,
                privateChannels: r,
                basicChannels: p,
                basicChannelsStale: b,
                fullChannels: m,
                fullChannelGuilds: g
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
                C.Z.loadLazyCache.recordEnd(),
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
        n || C.Z.loadLazyCache.recordEnd();
}
class q extends (r = o.ZP.Store) {
    initialize() {
        Z || O.Z.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !Z || L;
    }
    getLazyCacheStatus() {
        return Z ? k : 'no-cache';
    }
    get lastWriteTime() {
        return W;
    }
    canWriteCaches(e) {
        return (0, I.$8)() ? (w ? (D.log('Not writing cache because caches cleared'), !1) : !!e || !!M || (D.log('Not writing cache because never connected'), !1)) : (D.log('Not writing cache because not authenticated'), !1);
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
            let t = S.default.getId(),
                r = E.Z.carefullyOpenDatabase(t),
                [i, s, a] = await C.Z.loadMiniCache.measureAsync(() => G(r, t, e));
            i ? (n(), await Y(r, t, s, a)) : (n(), await (K(() => d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' })), Promise.resolve()));
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
    (i = 'displayName') in q
        ? Object.defineProperty(q, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (q[i] = s),
    new q(
        d.Z,
        Z
            ? {
                  CONNECTION_OPEN: function () {
                      return (B = !0), (M = !0), !1;
                  },
                  LOGOUT: U,
                  CONNECTION_CLOSED: function () {
                      return (B = !1), (M = !0), !1;
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
                  CLEAR_CACHES: U,
                  WRITE_CACHES: function () {
                      D.verbose('Writing cache now'), (W = Date.now()), (L = !0), c.K.remove(R.FsG), c.K.remove(R.O42), c.K.remove(R.ihW);
                  }
              }
            : {}
    );
