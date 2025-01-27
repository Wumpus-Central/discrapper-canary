n.d(t, {
    q: function () {
        return Z;
    }
}),
    n(47120),
    n(724458);
var i,
    r,
    s,
    a,
    l = n(956067);
n(724522);
var o = n(149765),
    c = n(442837),
    d = n(433517),
    u = n(570140),
    m = n(86670),
    g = n(261375),
    h = n(17567),
    p = n(795513),
    x = n(685736),
    f = n(266750),
    E = n(768910),
    _ = n(632093),
    C = n(347994),
    T = n(591526),
    S = n(261875),
    b = n(710845),
    I = n(38618),
    N = n(218543),
    v = n(314897),
    A = n(944486),
    j = n(914010),
    O = n(449934),
    R = n(576376),
    P = n(38217),
    D = n(864631),
    y = n(981631);
let B = new b.Z('CacheStore'),
    Z = !1,
    L = !1,
    M = 'initializing',
    k = 0,
    w = !1,
    F = !1,
    U = !1;
function V(e) {
    B.log('Clearing cache store'), (k = Date.now()), d.K.remove(y.FsG), d.K.remove(y.ihW), d.K.remove(y.O42), (M = 'no-cache'), 'CLEAR_CACHES' === e.type && e.preventWritingCachesAgainThisSession && (L = !0);
}
async function G(e, t, n) {
    let i = performance.now();
    if (null == e || null == n)
        return (
            B.verbose('skipped loaded messages (channel: '.concat(n, ', database: ').concat(e, ').')),
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
        let r = await x.ZP.startupLoad(e, t, n, y.AQB);
        B.verbose('loaded '.concat(r.messages.length, ' messages (guild: ').concat(t, ', channel: ').concat(n, ').'));
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
async function H(e, t, n) {
    var i, r, s;
    B.verbose('loading early cache');
    let a = I.Z.getSocket();
    a.connect();
    let o = null !== (i = j.Z.getGuildId()) && void 0 !== i ? i : null,
        d = null !== (r = A.Z.getChannelId()) && void 0 !== r ? r : null,
        m = performance.now(),
        g = N.Z.loadCachedMessages.measureAsyncWithoutNesting(() => G(e, o, d)),
        h = N.Z.fetchGuildCache.measureAsync(() => W(e, n)),
        p = N.Z.fetchGuildCache.measureAsync(() => z(e, n)),
        x = null != e ? l.Z.timeAsync('\uD83D\uDCBE', 'cache: private_channels', () => T.Z.getAsync(e, null)) : Promise.resolve([]),
        f = null == e ? Promise.resolve({}) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: user_settings', () => C.Z.getAll(e)),
        S = null == e ? Promise.resolve([]) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: read_states', () => E.Z.getAll(e)),
        b = null == e ? Promise.resolve([]) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: user_guild_settings', () => _.Z.getAll(e)),
        [[v, O], R, P, y, Z, L, M] = await Promise.all([g, h, p, x, f, S, b]),
        k = performance.now() - m;
    if ((B.verbose('cache loaded in '.concat(k, 'ms (channel_history ').concat(v, 'ms)')), null == O)) return (0, D.Z)('database:history_cache_null'), B.verbose('finished without dispatching CACHE_LOADED'), [!1, null, 0];
    {
        let i = Object.fromEntries(O.members.map((e) => [e.userId, e])),
            r = null != P.guildId && null != P.channels,
            m = P.guildId;
        return (
            c.ZP.Emitter.batched(() => {
                l.Z.time('\uD83D\uDCBE', 'Dispatch Mini Cache', () => {
                    var e;
                    return u.Z.dispatch({
                        type: 'CACHE_LOADED',
                        guilds: R,
                        privateChannels: y,
                        initialGuildChannels: null !== (e = P.channels) && void 0 !== e ? e : [],
                        users: [...O.users],
                        messages: null == O.channelId ? {} : { [O.channelId]: O.messages },
                        guildMembers: null == O.guildId ? {} : { [O.guildId]: i },
                        userSettings: Z,
                        userGuildSettings: M,
                        readStates: L
                    });
                }),
                    l.Z.time('\uD83D\uDCBE', 'socket.processFirstQueuedDispatch()', () => a.dispatcher.processFirstQueuedDispatch(new Set(['INITIAL_GUILD'])));
            }),
            B.verbose(
                'early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: '
                    .concat(t, '\n          selected_guild: ')
                    .concat(o, '\n          selected_channel: ')
                    .concat(d, '\n          navigation_state: ')
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
                    .concat(null === (s = P.channels) || void 0 === s ? void 0 : s.length, '\n            user_settings: ')
                    .concat(Object.keys(Z).length, '\n            read_states: ')
                    .concat(L.length, '\n            user_guild_settings: ')
                    .concat(M.length, '\n      )')
            ),
            B.verbose('finished dispatching CACHE_LOADED'),
            [!0, r && null != m ? m : null, y.length]
        );
    }
}
let Y = !1;
async function W(e, t) {
    var n, i;
    if (null == e) return [];
    switch (t.page) {
        case 'private-channels':
        case 'guild-channels':
            Y = !0;
            break;
        case 'other':
            '@me' === t.guildId && (Y = !0);
    }
    if (Y) return null !== (n = await (0, m.dI)(() => l.Z.timeAsync('\uD83D\uDCBE', 'cache: guilds', () => h.Z.getAsync(e)))) && void 0 !== n ? n : [];
    let r = null !== (i = (await f.Z.getCommittedVersions()).initial_guild_id) && void 0 !== i ? i : t.guildId;
    if (null == r || '@me' === r) return [];
    let s = await (0, m.dI)(() => h.Z.getOneAsync(e, r));
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
            B.verbose('skipped loading initial guild (guild: '.concat(n, ', database: ').concat(e, ')')),
            Promise.resolve({
                channels: null,
                guildId: null
            })
        );
    let i = n;
    return {
        channels: await (0, m.dI)(() => T.Z.getAsync(e, i)),
        guildId: n
    };
}
async function K(e, t, n, i) {
    B.verbose('loading late lazy cache');
    let [r, s, a] = await N.Z.fetchLazyCache.measureAsync(() =>
            Promise.all([
                (0, m.dI)(() => (null != e ? l.Z.timeAsync('\uD83D\uDCBE', 'cache: cache_version', () => p.Z.okAsync(e)) : Promise.resolve(!0))),
                (0, m.dI)(() => (null == e || Y ? Promise.resolve([]) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: lazy guilds', () => h.Z.getAsync(e)))),
                (0, m.dI)(() =>
                    null != e
                        ? l.Z.timeAsync('\uD83D\uDCBE', 'cache: basic_channels', () => g.Z.getAsync(e))
                        : Promise.resolve({
                              all: [],
                              stale: [],
                              channels: []
                          })
                )
            ])
        ),
        c = await N.Z.fetchStaleChannels.measureAsync(() =>
            null != e && null != a && a.stale.length > 0
                ? (0, m.dI)(() => {
                      var t, n;
                      return (t = e), (n = a.stale), B.verbose('loading stale guild channels (count: '.concat(n.length, ', ids: ').concat(n.join(', '), ')')), Promise.all(n.map((e) => T.Z.getAsync(t, e).then((t) => [e, t])));
                  })
                : Promise.resolve([])
        );
    await new Promise((e) => setTimeout(e, 0)), N.Z.loadLazyCache.recordStart();
    let d = I.Z.getSocket();
    q(() => {
        let l = performance.now();
        if (!1 === r) {
            (0, D.Z)('database:not_ok'),
                u.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'database:not_ok'
                }),
                u.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        if (null == s || null == a || null == c) {
            (0, D.Z)('database:load_failed'),
                B.log(
                    "couldn't load database item (\n          database: "
                        .concat(null != e, '\n          basic_channels: ')
                        .concat(null != a, '\n          guild_channels: ')
                        .concat(null != c, '\n          guilds: ')
                        .concat(null != s, '\n        )')
                ),
                u.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'database:load_failed'
                }),
                u.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        if (null == r && (s.length > 0 || a.all.length > 0)) {
            (0, D.Z)('database:versionless'),
                B.log('kv_cache was not ok (null version with values)'),
                u.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'database:versionless'
                }),
                u.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        if (F) {
            (0, D.Z)('already_connected'), B.log('Skipping lazy cache; already connected.'), u.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        d.addAnalytics({ hadCacheAtStartup: !0 });
        let m = {
            type: 'CACHE_LOADED_LAZY',
            guilds: s,
            guildChannels: c,
            basicGuildChannels: a.channels,
            initialGuildId: n
        };
        N.Z.deserializeCache.measure(() =>
            (function (e) {
                if (null != e.guilds) {
                    for (let { roles: t } of e.guilds)
                        if (null != t)
                            for (let e in t) {
                                let n = t[e];
                                n.permissions = o.vB(n.permissions);
                            }
                }
                null != e.channels && (0, P.ZP)(e.channels), null != e.privateChannels && (0, P.ZP)(e.privateChannels), null != e.guildChannels && (0, P._$)(e.guildChannels);
            })(m)
        ),
            N.Z.dispatchLazyCache.measure(() => u.Z.dispatch(m)),
            B.verbose('late lazy cache loaded (ok: true, took: '.concat(performance.now() - l, 'ms)')),
            d.addAnalytics({ usedCacheAtStartup: !0 });
        let g = c.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            h = c.length,
            p = a.all.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            x = a.channels.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            f = p - x,
            E = 0 === a.stale.length ? '' : ' \xB7 '.concat(a.stale.join(', '));
        B.verbose(
            'lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: '
                .concat(t, '\n          initial_guild: ')
                .concat(n, '\n          database: ')
                .concat(null != e, '\n            ok: ')
                .concat(r, '\n            name: ')
                .concat(null == e ? void 0 : e.name, '\n        data:\n          database:\n            guilds: ')
                .concat(s.length, '\n            basic_channels:\n              total: ')
                .concat(p, ' (')
                .concat(a.channels.length, ' guilds)\n              stale: ')
                .concat(f, ' (')
                .concat(a.stale.length, ' guilds')
                .concat(E, ')\n              unstale: ')
                .concat(x, '\n            full_channels (guilds_with_stale_basic_channels):\n              total: ')
                .concat(g, ' (')
                .concat(c.length, ' guilds)\n      )')
        ),
            N.Z.setCacheInfo({
                guilds: s.length,
                privateChannels: i,
                basicChannels: p,
                basicChannelsStale: f,
                fullChannels: g,
                fullChannelGuilds: h
            });
    });
}
function q(e) {
    let t = I.Z.getSocket(),
        n = !1;
    c.ZP.Emitter.batched(() => {
        try {
            if ((e(), !t.dispatcher.hasStuffToDispatchNow())) {
                B.verbose('Unpausing Dispatch Queue'), t.dispatcher.unpauseDispatchQueue();
                return;
            }
            (n = !0),
                N.Z.loadLazyCache.recordEnd(),
                B.verbose('Processing First Queued Dispatch'),
                t.dispatcher.processFirstQueuedDispatch(new Set(['READY', 'INITIAL_GUILD'])),
                setTimeout(() => {
                    B.verbose('Unpausing Dispatch Queue'), t.dispatcher.unpauseDispatchQueue();
                }, 100);
        } catch (e) {
            B.warn('Lazy cache has encountered error', e),
                u.Z.dispatch({
                    type: 'RESET_SOCKET',
                    args: {
                        error: e,
                        action: 'LazyCache'
                    }
                });
        }
    }),
        !n && N.Z.loadLazyCache.recordEnd();
}
class X extends (i = c.ZP.Store) {
    initialize() {
        !Z && I.Z.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !Z || w;
    }
    getLazyCacheStatus() {
        return Z ? M : 'no-cache';
    }
    get lastWriteTime() {
        return k;
    }
    canWriteCaches(e) {
        return (0, O.$8)() ? (L ? (B.log('Not writing cache because caches cleared'), !1) : !!e || !!U || (B.log('Not writing cache because never connected'), !1)) : (B.log('Not writing cache because not authenticated'), !1);
    }
    async loadCacheAsync(e, t) {
        let n = (0, R.h)(t);
        if ('initializing' !== M) {
            (0, D.Z)('cache:lazy_cache_not_initializing'),
                n(),
                setTimeout(() => {
                    var e, t;
                    return null === (t = I.Z.getSocket()) || void 0 === t ? void 0 : null === (e = t.dispatcher) || void 0 === e ? void 0 : e.unpauseDispatchQueue();
                }, 0);
            return;
        }
        try {
            let t = v.default.getId(),
                i = S.Z.carefullyOpenDatabase(t),
                [r, s, a] = await N.Z.loadMiniCache.measureAsync(() => H(i, t, e));
            r ? (n(), await K(i, t, s, a)) : (n(), await (q(() => u.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' })), Promise.resolve()));
        } catch (e) {
            B.error('clearing cache. exception encountered while loading cache.', e, e.stack),
                (0, D.Z)('cache:exception'),
                n(),
                u.Z.dispatch({
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
    (s = 'displayName') in (r = X)
        ? Object.defineProperty(r, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[s] = a),
    new X(
        u.Z,
        Z
            ? {
                  CONNECTION_OPEN: function () {
                      return (F = !0), (U = !0), !1;
                  },
                  LOGOUT: V,
                  CONNECTION_CLOSED: function () {
                      return (F = !1), (U = !0), !1;
                  },
                  CACHE_LOADED: function () {
                      w = !0;
                  },
                  CACHE_LOADED_LAZY: function () {
                      (w = !0), (M = 'cache-loaded');
                  },
                  CACHE_LOADED_LAZY_NO_CACHE: function () {
                      M = 'no-cache';
                  },
                  CLEAR_CACHES: V,
                  WRITE_CACHES: function () {
                      B.verbose('Writing cache now'), (k = Date.now()), (w = !0), d.K.remove(y.FsG), d.K.remove(y.O42), d.K.remove(y.ihW);
                  }
              }
            : {}
    );
