r.d(n, {
    o: function () {
        return K;
    }
});
var i,
    a = r(47120);
var s = r(51350);
var o = r(411104);
var l = r(392711),
    u = r.n(l),
    c = r(956067),
    d = r(442837),
    f = r(570140),
    _ = r(287328),
    h = r(86670),
    p = r(591526),
    m = r(458772),
    g = r(38217),
    E = r(580552),
    v = r(710845),
    I = r(853856),
    T = r(131704),
    b = r(823379),
    y = r(709054),
    S = r(314897),
    A = r(430824),
    N = r(594174),
    C = r(981631);
function R(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let O = new v.Z('ChannelStore'),
    D = {},
    L = {},
    x = {},
    w = {},
    P = null,
    M = {},
    k = {},
    U = 0,
    B = {},
    G = {},
    Z = new Set(),
    F = {},
    V = 0,
    j = {},
    H = 0,
    Y = 0,
    W = !1;
class K {
    static loadAllMissingChannels() {
        let e = A.Z.getGuildIds().filter((e) => !Z.has(e));
        return this.loadGuildIds(e);
    }
    static loadGuildFromChannelId(e) {
        var n;
        return null == e ? null : K.loadGuildIds([null === (n = X(e)) || void 0 === n ? void 0 : n.guild_id]);
    }
    static loadGuildIds(e) {
        let n = e.filter(b.lm);
        if (0 === n.length) return null;
        let r = _.Z.database();
        if (null == r || !n.some((e) => !Z.has(e))) return null;
        let i = V;
        return (0, h.gs)('loadChannels', async () => {
            let e = n
                    .map((e) => {
                        if (Z.has(e)) return null;
                        if (null != F[e]) return O.fileOnly('Skipping loading '.concat(e, ' because a load is pending')), null;
                        let n = p.Z.getAsync(r, e).then(
                            (n) => (
                                O.fileOnly('Lazy loaded channels for '.concat(e, ' #:').concat(n.length)),
                                {
                                    guildId: e,
                                    channels: n
                                }
                            )
                        );
                        return (
                            (F[e] = n),
                            {
                                guildId: e,
                                promise: n
                            }
                        );
                    })
                    .filter(b.lm),
                a = e.map((e) => e.promise);
            try {
                let n = await Promise.all(a);
                if (V !== i) return O.fileOnly('lastResetTime has changed, skipping loads for ' + e.map((e) => e.guildId)), null;
                let r = n.filter((e) => !Z.has(e.guildId));
                await f.Z.dispatch({
                    type: 'LOAD_CHANNELS',
                    channels: r
                });
            } catch (n) {
                for (let r of (O.error('Failed to load channels from disk for ' + e.map((e) => e.guildId), n), e)) delete F[r.guildId];
                throw n;
            }
            return null;
        });
    }
}
function z(e, n, r) {
    if (null == e || 'null' === e || Z.has(e) || (0 === n && m.Z.hasGuild(e))) return;
    let i = _.Z.database();
    if (null == i) return;
    O.verbose('hydrating guild (guild: '.concat(e, ', trace: ').concat(r, ')'));
    let a = (0, h.Pv)('ensureGuildLoaded('.concat(e, ')'), () => p.Z.getSync(i, e), 'ensureGuildLoaded');
    if (null == a) {
        Z.add(e), m.Z.restored(e), O.log('load returned null; early returning (guild: '.concat(e, ', database: ').concat(i, ')'));
        return;
    }
    let [s, o] = a;
    for (let r of ((0, g.ZP)(s), 0 !== n && (Y += 1), Z.add(e), m.Z.restored(e), c.Z.mark('\u2757', 'loaded guild channels (guild: '.concat(e, ')'), o), s)) !Object.hasOwn(L, r.id) && en((0, T._H)(r));
    O.verbose('hydration complete (guild: '.concat(e, ', channels: ').concat(s.length, ', guilds_loaded: ').concat(Y, ')'));
}
function q(e, n, r) {
    if (!Object.hasOwn(L, e) && !Object.hasOwn(w, e) && !Object.hasOwn(M, e) && !Object.hasOwn(G, e) && 1 === n) {
        let i = m.Z.getBasicChannel(e);
        (null == i ? void 0 : i.guild_id) != null && z(i.guild_id, n, r);
    }
}
function Q(e) {
    if ((O.fileOnly('Deleting guild channels for '.concat(e)), null != x[e])) {
        for (let n of y.default.keys(x[e])) delete L[n];
        delete x[e];
    }
}
function X(e) {
    var n, r, i, a;
    return q(e, 0, 'getBasicChannel'), null !== (a = null !== (i = null !== (r = null !== (n = L[e]) && void 0 !== n ? n : w[e]) && void 0 !== r ? r : M[e]) && void 0 !== i ? i : G[e]) && void 0 !== a ? a : m.Z.getBasicChannel(e);
}
function J(e) {
    var n, r, i, a;
    return q(e, 1, 'getChannel'), null !== (a = null !== (i = null !== (r = null !== (n = L[e]) && void 0 !== n ? n : w[e]) && void 0 !== r ? r : M[e]) && void 0 !== i ? i : G[e]) && void 0 !== a ? a : j[e];
}
function $(e) {
    e.isPrivate() ? (delete j[e.id], ee(e)) : e.isThread() ? et(e) : T.oj.has(e.type) && er(e);
}
function ee(e) {
    if (null != e.recipients.find((e) => (0, E.Z)(e))) return !1;
    (w[e.id] = e), e.type === C.d4z.DM && (k[e.getRecipientId()] = e.id), (U += 1);
}
function et(e) {
    let n = L[e.parent_id];
    (M[e.id] = e.merge({
        nsfw: (null == n ? void 0 : n.nsfw) === !0,
        parentChannelThreadType: null == n ? void 0 : n.type
    })),
        e.isScheduledForDeletion() &&
            f.Z.dispatch({
                type: 'THREAD_DELETE',
                channel: e
            });
}
function en(e) {
    var n, r;
    let { id: i, guild_id: a } = e;
    (L[i] = e), (x[a] = null !== (n = x[a]) && void 0 !== n ? n : {}), (x[a][i] = e), (B[a] = (null !== (r = B[a]) && void 0 !== r ? r : 0) + 1);
}
function er(e) {
    en(e);
}
function ei(e) {
    if (null == e.guild_id || T.Ec.has(e.type)) (0, T.hv)(e.type) && (U += 1);
    else {
        var n;
        B[e.guild_id] = (null !== (n = B[e.guild_id]) && void 0 !== n ? n : 0) + 1;
    }
}
function ea(e) {
    let n = x;
    for (let r of ((k = {}), (L = {}), (x = {}), (M = {}), (B = {}), (j = {}), (F = {}), (V = Date.now()), (P = e.initialPrivateChannels), e.initialPrivateChannels.forEach(ee), e.guilds)) 'partial' === r.dataMode && (u().forEach(n[r.id], en), O.fileOnly('Restoring guild channels for '.concat(r.id, ' #:').concat(eP(r.id)))), es(r);
    eL();
}
function es(e) {
    if (null != e.channels) for (let n of (O.fileOnly('GuildCreate contained full channels for '.concat(e.id, ' #:').concat(e.channels.length)), Q(e.id), Z.add(e.id), m.Z.restored(e.id), e.channels)) en(n);
    if (null != e.channelUpdates) {
        let n = e.channelUpdates;
        for (let r of ((n.writes.length > 0 || n.deletes.length > 0) && m.Z.invalidate(e.id), n.deletes)) eb(L[r]);
        for (let e of n.writes) en(e);
    }
    if (null != e.threads) for (let n of e.threads) et(n);
}
function eo(e) {
    let { lazyPrivateChannels: n } = e;
    null != P && ((w = {}), P.forEach(ee)), n.forEach(ee);
}
function el(e) {
    let { guilds: n } = e,
        r = x;
    (L = {}),
        (x = {}),
        (B = {}),
        n.forEach((e) => {
            if ('unavailable' === e.data_mode) O.fileOnly('Restoring guild channels b/c unavailable in bg sync, for '.concat(e.id, ' #:').concat(eP(e.id))), u().forEach(r[e.id], en);
            else if ('partial' === e.data_mode) {
                var n, i;
                O.fileOnly('Restoring guild channels b/c partial in bg sync, for '.concat(e.id, ' #:').concat(eP(e.id))), u().forEach(r[e.id], en);
                let a = null !== (i = e.partial_updates.deleted_channel_ids) && void 0 !== i ? i : [];
                a.length > 0 && (z(e.id, 1, 'handleBackgroundSync'), a.forEach((e) => eb(L[e]))), null === (n = e.partial_updates.channels) || void 0 === n || n.forEach((n) => en((0, T.q_)(n, e.id)));
            } else O.fileOnly('BG sync contained full channels for '.concat(e.id, ' #:').concat(e.channels.length)), Q(e.id), Z.add(e.id), m.Z.restored(e.id), e.channels.forEach((n) => en((0, T.q_)(n, e.id)));
        });
}
function eu(e) {
    for (let { guildId: n, channels: r } of e.channels) for (let e of (O.fileOnly('Lazy loaded guild channels for '.concat(n)), (0, g.ZP)(r), Z.add(n), m.Z.restored(n), r)) !Object.hasOwn(L, e.id) && en((0, T._H)(e));
    return !1;
}
function ec() {
    O.fileOnly('initializeClear()'), (k = {}), (L = {}), (x = {}), (B = {}), (w = {}), (j = {}), (M = {}), (Z = new Set()), (F = {}), (V = Date.now());
}
function ed(e) {
    var n;
    H = e.guilds.length;
    let { privateChannels: r, initialGuildChannels: i } = e;
    for (let e of [r, i]) for (let n of e) $((0, g.d7)((0, T._H)(n)));
    let a = null === (n = i[0]) || void 0 === n ? void 0 : n.guild_id;
    null != a && (O.fileOnly('Early cache contained full guild channels for '.concat(a)), Z.add(a));
}
function ef(e) {
    for (let n of ((H = e.guilds.length), e.channels)) $((0, g.d7)((0, T._H)(n)));
}
function e_(e) {
    for (let [n, r] of ((W = !0), e.guildChannels)) for (let e of (O.fileOnly('Lazy cache contained full guild channels for '.concat(n, ' #:').concat(r.length)), Z.add(n), r)) $((0, T._H)(e));
}
function eh(e) {
    $(e.channel);
}
function ep(e) {
    if (!T.AW.has(e.channel.type)) return !1;
    let n = J(e.channel.id);
    if (null == n) n = e.channel;
    else {
        var r;
        n = n.merge({
            ...e.channel.toJS(),
            bitrate: null !== (r = e.channel.bitrate) && void 0 !== r ? r : n.bitrate
        });
    }
    $(n);
}
function em(e) {
    let { channelId: n, overwrite: r } = e,
        i = J(n);
    if (null == i) return !1;
    $(
        i.set('permissionOverwrites', {
            ...i.permissionOverwrites,
            [r.id]: r
        })
    );
}
function eg(e) {
    let { channelId: n, overwriteId: r } = e,
        i = J(n);
    if (null == i) return !1;
    let a = { ...i.permissionOverwrites };
    delete a[r], $(i.set('permissionOverwrites', a));
}
function eE(e) {
    let n = e.channels.some((e) => {
        let n = e,
            r = J(e.id);
        return n.nsfw !== (null == r ? void 0 : r.nsfw) || n.type !== (null == r ? void 0 : r.type);
    });
    for (let n of e.channels) $(n);
    n && Object.values(M).forEach((e) => $(e));
}
function ev(e) {
    let { threads: n } = e;
    n.forEach((e) => {
        T.AW.has(e.type) && $(e);
    });
}
function eI(e) {
    let { threads: n } = e;
    n.forEach((e) => {
        T.AW.has(e.type) && $((0, T.q_)(e));
    });
}
function eT(e) {
    if ('basicPermissions' in e || e.type !== C.d4z.DM) return;
    let n = e.getRecipientId();
    if (k[n] === e.id) delete k[n];
}
function eb(e) {
    if (null == e) return;
    let n = e.guild_id;
    e.id in w && delete w[e.id], e.id in L && delete L[e.id], e.id in M && delete M[e.id], null != n && null != x[n] && e.id in x[n] && delete x[n][e.id], ei(e);
}
function ey(e) {
    var n, r;
    let { channel: i } = e,
        a = null !== (r = null !== (n = L[i.id]) && void 0 !== n ? n : w[i.id]) && void 0 !== r ? r : M[i.id];
    if (null == a) return !1;
    eb(a), eT(a);
}
function eS(e) {
    es(e.guild);
}
function eA(e) {
    O.fileOnly('GuildDelete of '.concat(e.guild.id)), Q(e.guild.id), Z.delete(e.guild.id), m.Z.invalidate(e.guild.id);
}
function eN(e) {
    let n = J(e.channelId),
        r = S.default.getId();
    return (null == n ? !!void 0 : !!n.isPrivate()) && ($(n.addRecipient(e.user.id, e.nick, r)), !0);
}
function eC(e) {
    let n = J(e.channelId);
    return (null == n ? !!void 0 : !!n.isPrivate()) && ($(n.removeRecipient(e.user.id)), !0);
}
function eR(e) {
    let { messages: n } = e;
    for (let e of n) null != e.thread && !(e.thread.id in M) && T.AW.has(e.thread.type) && et((0, T.q_)(e.thread));
}
function eO(e) {
    let { messages: n, threads: r, channels: i } = e;
    for (let e of n) for (let n of e) eD(n.thread);
    r.forEach(eD),
        null == i ||
            i.forEach((e) => {
                let n = (0, T.q_)(e),
                    r = null != J(e.id),
                    i = null != j[e.id];
                n.isPrivate() && (!r || i) ? (j[n.id] = n) : !r && $(n);
            });
}
function eD(e) {
    null != e && !(e.id in M) && T.AW.has(e.type) && et((0, T.q_)(e));
}
function eL() {
    for (let e in ((G = {}), I.Z.getFavoriteChannels())) {
        let n = I.Z.getCategoryRecord(e);
        null != n && (G[e] = n);
    }
}
function ex() {
    ec();
}
class ew extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, N.default, A.Z, I.Z), this.syncWith([I.Z], eL);
    }
    hasChannel(e) {
        return null != X(e);
    }
    getBasicChannel(e) {
        if (null != e) return X(e);
    }
    getChannel(e) {
        if (null != e) return J(e);
    }
    loadAllGuildAndPrivateChannelsFromDisk() {
        for (let e of A.Z.getGuildIds()) z(e, 1, 'loadAllGuildAndPrivateChannelsFromDisk');
        return {
            ...L,
            ...w
        };
    }
    getChannelIds(e) {
        var n, r;
        return (z(e, 0, 'getChannelIds'), null == e) ? y.default.keys(w) : y.default.keys(null !== (r = null !== (n = m.Z.getGuildBasicChannels(e)) && void 0 !== n ? n : x[e]) && void 0 !== r ? r : D);
    }
    getMutablePrivateChannels() {
        return w;
    }
    getMutableBasicGuildChannelsForGuild(e) {
        var n, r;
        return z(e, 0, 'getMutableBasicGuildChannelsForGuild'), null !== (r = null !== (n = m.Z.getGuildBasicChannels(e)) && void 0 !== n ? n : x[e]) && void 0 !== r ? r : D;
    }
    getMutableGuildChannelsForGuild(e) {
        var n;
        return z(e, 1, 'getMutableGuildChannelsForGuild'), null !== (n = x[e]) && void 0 !== n ? n : D;
    }
    getSortedPrivateChannels() {
        return u()(w)
            .values()
            .sort((e, n) => y.default.compare(e.lastMessageId, n.lastMessageId))
            .reverse()
            .value();
    }
    getDMFromUserId(e) {
        if (null != e) return k[e];
    }
    getDMChannelFromUserId(e) {
        if (null != e) return this.getChannel(k[e]);
    }
    getMutableDMsByUserIds() {
        return k;
    }
    getDMUserIds() {
        return y.default.keys(k);
    }
    getPrivateChannelsVersion() {
        return U;
    }
    getGuildChannelsVersion(e) {
        var n;
        return null !== (n = B[e]) && void 0 !== n ? n : 0;
    }
    getAllThreadsForParent(e) {
        return u()
            .values(M)
            .filter((n) => n.parent_id === e);
    }
    getInitialOverlayState() {
        return {
            ...L,
            ...w,
            ...M
        };
    }
    getDebugInfo() {
        return {
            loadedGuildIds: Array.from(Z).sort(y.default.compare),
            pendingGuildLoads: Object.keys(F).sort(y.default.compare),
            guildSizes: Object.keys(x)
                .sort(y.default.compare)
                .map((e) => ''.concat(e, ': ').concat(eP(e)))
        };
    }
}
function eP(e) {
    return null == x[e] ? null : Object.keys(x[e]).length;
}
R(ew, 'displayName', 'ChannelStore'),
    (n.Z = new ew(f.Z, {
        BACKGROUND_SYNC: el,
        CACHE_LOADED_LAZY: e_,
        CACHE_LOADED: ed,
        CHANNEL_CREATE: eh,
        CHANNEL_DELETE: ey,
        CHANNEL_RECIPIENT_ADD: eN,
        CHANNEL_RECIPIENT_REMOVE: eC,
        CHANNEL_UPDATES: eE,
        CONNECTION_OPEN_SUPPLEMENTAL: eo,
        CONNECTION_OPEN: ea,
        CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: em,
        CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: eg,
        GUILD_CREATE: eS,
        GUILD_DELETE: eA,
        LOAD_ARCHIVED_THREADS_SUCCESS: eI,
        LOAD_CHANNELS: eu,
        LOAD_MESSAGES_AROUND_SUCCESS: eR,
        LOAD_MESSAGES_SUCCESS: eR,
        LOAD_THREADS_SUCCESS: eI,
        LOGOUT: ex,
        OVERLAY_INITIALIZE: ef,
        SEARCH_FINISH: eO,
        MOD_VIEW_SEARCH_FINISH: eO,
        THREAD_CREATE: ep,
        THREAD_DELETE: ey,
        THREAD_LIST_SYNC: ev,
        THREAD_UPDATE: ep
    }));
