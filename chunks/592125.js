n.d(t, {
    Z: () => eL,
    o: () => j
}),
    n(47120),
    n(51350),
    n(411104);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(956067),
    o = n(442837),
    l = n(570140),
    u = n(287328),
    c = n(86670),
    d = n(591526),
    f = n(458772),
    _ = n(38217),
    p = n(580552),
    h = n(710845),
    m = n(853856),
    g = n(131704),
    E = n(823379),
    v = n(709054),
    y = n(314897),
    I = n(430824),
    T = n(594174),
    b = n(981631);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let A = new h.Z('ChannelStore'),
    N = {},
    C = {},
    R = {},
    O = {},
    D = null,
    L = {},
    x = {},
    w = 0,
    P = {},
    M = {},
    k = new Set(),
    U = {},
    G = 0,
    B = {},
    Z = 0,
    F = 0,
    V = !1;
class j {
    static loadAllMissingChannels() {
        let e = I.Z.getGuildIds().filter((e) => !k.has(e));
        return this.loadGuildIds(e);
    }
    static loadGuildFromChannelId(e) {
        var t;
        return null == e ? null : j.loadGuildIds([null === (t = K(e)) || void 0 === t ? void 0 : t.guild_id]);
    }
    static loadGuildIds(e) {
        let t = e.filter(E.lm);
        if (0 === t.length) return null;
        let n = u.Z.database();
        if (null == n || !t.some((e) => !k.has(e))) return null;
        let i = G;
        return (0, c.gs)('loadChannels', async () => {
            let e = t
                    .map((e) => {
                        if (k.has(e)) return null;
                        if (null != U[e]) return A.fileOnly('Skipping loading '.concat(e, ' because a load is pending')), null;
                        let t = d.Z.getAsync(n, e).then(
                            (t) => (
                                A.fileOnly('Lazy loaded channels for '.concat(e, ' #:').concat(t.length)),
                                {
                                    guildId: e,
                                    channels: t
                                }
                            )
                        );
                        return (
                            (U[e] = t),
                            {
                                guildId: e,
                                promise: t
                            }
                        );
                    })
                    .filter(E.lm),
                r = e.map((e) => e.promise);
            try {
                let t = await Promise.all(r);
                if (G !== i) return A.fileOnly('lastResetTime has changed, skipping loads for ' + e.map((e) => e.guildId)), null;
                let n = t.filter((e) => !k.has(e.guildId));
                await l.Z.dispatch({
                    type: 'LOAD_CHANNELS',
                    channels: n
                });
            } catch (t) {
                for (let n of (A.error('Failed to load channels from disk for ' + e.map((e) => e.guildId), t), e)) delete U[n.guildId];
                throw t;
            }
            return null;
        });
    }
}
function H(e, t, n) {
    if (null == e || 'null' === e || k.has(e) || (0 === t && f.Z.hasGuild(e))) return;
    let i = u.Z.database();
    if (null == i) return;
    A.verbose('hydrating guild (guild: '.concat(e, ', trace: ').concat(n, ')'));
    let r = (0, c.Pv)('ensureGuildLoaded('.concat(e, ')'), () => d.Z.getSync(i, e), 'ensureGuildLoaded');
    if (null == r) {
        k.add(e), f.Z.restored(e), A.log('load returned null; early returning (guild: '.concat(e, ', database: ').concat(i, ')'));
        return;
    }
    let [a, o] = r;
    for (let n of ((0, _.ZP)(a), 0 !== t && (F += 1), k.add(e), f.Z.restored(e), s.Z.mark('\u2757', 'loaded guild channels (guild: '.concat(e, ')'), o), a)) Object.hasOwn(C, n.id) || J((0, g._H)(n));
    A.verbose('hydration complete (guild: '.concat(e, ', channels: ').concat(a.length, ', guilds_loaded: ').concat(F, ')'));
}
function Y(e, t, n) {
    if (!Object.hasOwn(C, e) && !Object.hasOwn(O, e) && !Object.hasOwn(L, e) && !Object.hasOwn(M, e) && 1 === t) {
        let i = f.Z.getBasicChannel(e);
        (null == i ? void 0 : i.guild_id) != null && H(i.guild_id, t, n);
    }
}
function W(e) {
    if ((A.fileOnly('Deleting guild channels for '.concat(e)), null != R[e])) {
        for (let t of v.default.keys(R[e])) delete C[t];
        delete R[e];
    }
}
function K(e) {
    var t, n, i, r;
    return Y(e, 0, 'getBasicChannel'), null !== (r = null !== (i = null !== (n = null !== (t = C[e]) && void 0 !== t ? t : O[e]) && void 0 !== n ? n : L[e]) && void 0 !== i ? i : M[e]) && void 0 !== r ? r : f.Z.getBasicChannel(e);
}
function z(e) {
    var t, n, i, r;
    return Y(e, 1, 'getChannel'), null !== (r = null !== (i = null !== (n = null !== (t = C[e]) && void 0 !== t ? t : O[e]) && void 0 !== n ? n : L[e]) && void 0 !== i ? i : M[e]) && void 0 !== r ? r : B[e];
}
function q(e) {
    e.isPrivate() ? (delete B[e.id], Q(e)) : e.isThread() ? X(e) : g.oj.has(e.type) && $(e);
}
function Q(e) {
    if (null != e.recipients.find((e) => (0, p.Z)(e))) return !1;
    (O[e.id] = e), e.type === b.d4z.DM && (x[e.getRecipientId()] = e.id), (w += 1);
}
function X(e) {
    let t = C[e.parent_id];
    (L[e.id] = e.merge({
        nsfw: (null == t ? void 0 : t.nsfw) === !0,
        parentChannelThreadType: null == t ? void 0 : t.type
    })),
        e.isScheduledForDeletion() &&
            l.Z.dispatch({
                type: 'THREAD_DELETE',
                channel: e
            });
}
function J(e) {
    var t, n;
    let { id: i, guild_id: r } = e;
    (C[i] = e), (R[r] = null !== (t = R[r]) && void 0 !== t ? t : {}), (R[r][i] = e), (P[r] = (null !== (n = P[r]) && void 0 !== n ? n : 0) + 1);
}
function $(e) {
    J(e);
}
function ee(e) {
    if (null == e.guild_id || g.Ec.has(e.type)) (0, g.hv)(e.type) && (w += 1);
    else {
        var t;
        P[e.guild_id] = (null !== (t = P[e.guild_id]) && void 0 !== t ? t : 0) + 1;
    }
}
function et(e) {
    let t = R;
    for (let n of ((x = {}), (C = {}), (R = {}), (L = {}), (P = {}), (B = {}), (U = {}), (G = Date.now()), (D = e.initialPrivateChannels), e.initialPrivateChannels.forEach(Q), e.guilds)) 'partial' === n.dataMode && (a().forEach(t[n.id], J), A.fileOnly('Restoring guild channels for '.concat(n.id, ' #:').concat(eD(n.id)))), en(n);
    eC();
}
function en(e) {
    if (null != e.channels) for (let t of (A.fileOnly('GuildCreate contained full channels for '.concat(e.id, ' #:').concat(e.channels.length)), W(e.id), k.add(e.id), f.Z.restored(e.id), e.channels)) J(t);
    if (null != e.channelUpdates) {
        let t = e.channelUpdates;
        for (let n of ((t.writes.length > 0 || t.deletes.length > 0) && f.Z.invalidate(e.id), t.deletes)) eE(C[n]);
        for (let e of t.writes) J(e);
    }
    if (null != e.threads) for (let t of e.threads) X(t);
}
function ei(e) {
    let { lazyPrivateChannels: t } = e;
    null != D && ((O = {}), D.forEach(Q)), t.forEach(Q);
}
function er(e) {
    let { guilds: t } = e,
        n = R;
    (C = {}),
        (R = {}),
        (P = {}),
        t.forEach((e) => {
            if ('unavailable' === e.data_mode) A.fileOnly('Restoring guild channels b/c unavailable in bg sync, for '.concat(e.id, ' #:').concat(eD(e.id))), a().forEach(n[e.id], J);
            else if ('partial' === e.data_mode) {
                var t, i;
                A.fileOnly('Restoring guild channels b/c partial in bg sync, for '.concat(e.id, ' #:').concat(eD(e.id))), a().forEach(n[e.id], J);
                let r = null !== (i = e.partial_updates.deleted_channel_ids) && void 0 !== i ? i : [];
                r.length > 0 && (H(e.id, 1, 'handleBackgroundSync'), r.forEach((e) => eE(C[e]))), null === (t = e.partial_updates.channels) || void 0 === t || t.forEach((t) => J((0, g.q_)(t, e.id)));
            } else A.fileOnly('BG sync contained full channels for '.concat(e.id, ' #:').concat(e.channels.length)), W(e.id), k.add(e.id), f.Z.restored(e.id), e.channels.forEach((t) => J((0, g.q_)(t, e.id)));
        });
}
function ea(e) {
    for (let { guildId: t, channels: n } of e.channels) for (let e of (A.fileOnly('Lazy loaded guild channels for '.concat(t)), (0, _.ZP)(n), k.add(t), f.Z.restored(t), n)) Object.hasOwn(C, e.id) || J((0, g._H)(e));
    return !1;
}
function es() {
    A.fileOnly('initializeClear()'), (x = {}), (C = {}), (R = {}), (P = {}), (O = {}), (B = {}), (L = {}), (k = new Set()), (U = {}), (G = Date.now());
}
function eo(e) {
    var t;
    Z = e.guilds.length;
    let { privateChannels: n, initialGuildChannels: i } = e;
    for (let e of [n, i]) for (let t of e) q((0, _.d7)((0, g._H)(t)));
    let r = null === (t = i[0]) || void 0 === t ? void 0 : t.guild_id;
    null != r && (A.fileOnly('Early cache contained full guild channels for '.concat(r)), k.add(r));
}
function el(e) {
    for (let t of ((Z = e.guilds.length), e.channels)) q((0, _.d7)((0, g._H)(t)));
}
function eu(e) {
    for (let [t, n] of ((V = !0), e.guildChannels)) for (let e of (A.fileOnly('Lazy cache contained full guild channels for '.concat(t, ' #:').concat(n.length)), k.add(t), n)) q((0, g._H)(e));
}
function ec(e) {
    q(e.channel);
}
function ed(e) {
    if (!g.AW.has(e.channel.type)) return !1;
    let t = z(e.channel.id);
    if (null == t) t = e.channel;
    else {
        var n;
        t = t.merge({
            ...e.channel.toJS(),
            bitrate: null !== (n = e.channel.bitrate) && void 0 !== n ? n : t.bitrate
        });
    }
    q(t);
}
function ef(e) {
    let { channelId: t, overwrite: n } = e,
        i = z(t);
    if (null == i) return !1;
    q(
        i.set('permissionOverwrites', {
            ...i.permissionOverwrites,
            [n.id]: n
        })
    );
}
function e_(e) {
    let { channelId: t, overwriteId: n } = e,
        i = z(t);
    if (null == i) return !1;
    let r = { ...i.permissionOverwrites };
    delete r[n], q(i.set('permissionOverwrites', r));
}
function ep(e) {
    let t = e.channels.some((e) => {
        let t = e,
            n = z(e.id);
        return t.nsfw !== (null == n ? void 0 : n.nsfw) || t.type !== (null == n ? void 0 : n.type);
    });
    for (let t of e.channels) q(t);
    t && Object.values(L).forEach((e) => q(e));
}
function eh(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        g.AW.has(e.type) && q(e);
    });
}
function em(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        g.AW.has(e.type) && q((0, g.q_)(e));
    });
}
function eg(e) {
    if ('basicPermissions' in e || e.type !== b.d4z.DM) return;
    let t = e.getRecipientId();
    x[t] === e.id && delete x[t];
}
function eE(e) {
    if (null == e) return;
    let t = e.guild_id;
    e.id in O && delete O[e.id], e.id in C && delete C[e.id], e.id in L && delete L[e.id], null != t && null != R[t] && e.id in R[t] && delete R[t][e.id], ee(e);
}
function ev(e) {
    var t, n;
    let { channel: i } = e,
        r = null !== (n = null !== (t = C[i.id]) && void 0 !== t ? t : O[i.id]) && void 0 !== n ? n : L[i.id];
    if (null == r) return !1;
    eE(r), eg(r);
}
function ey(e) {
    en(e.guild);
}
function eI(e) {
    A.fileOnly('GuildDelete of '.concat(e.guild.id)), W(e.guild.id), k.delete(e.guild.id), f.Z.invalidate(e.guild.id);
}
function eT(e) {
    let t = z(e.channelId),
        n = y.default.getId();
    return null != t && !!t.isPrivate() && (q(t.addRecipient(e.user.id, e.nick, n)), !0);
}
function eb(e) {
    let t = z(e.channelId);
    return null != t && !!t.isPrivate() && (q(t.removeRecipient(e.user.id)), !0);
}
function eS(e) {
    let { messages: t } = e;
    for (let e of t) null != e.thread && !(e.thread.id in L) && g.AW.has(e.thread.type) && X((0, g.q_)(e.thread));
}
function eA(e) {
    let { messages: t, threads: n, channels: i } = e;
    for (let e of t) for (let t of e) eN(t.thread);
    n.forEach(eN),
        null == i ||
            i.forEach((e) => {
                let t = (0, g.q_)(e),
                    n = null != z(e.id),
                    i = null != B[e.id];
                t.isPrivate() && (!n || i) ? (B[t.id] = t) : n || q(t);
            });
}
function eN(e) {
    null != e && !(e.id in L) && g.AW.has(e.type) && X((0, g.q_)(e));
}
function eC() {
    for (let e in ((M = {}), m.Z.getFavoriteChannels())) {
        let t = m.Z.getCategoryRecord(e);
        null != t && (M[e] = t);
    }
}
function eR() {
    es();
}
class eO extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, T.default, I.Z, m.Z), this.syncWith([m.Z], eC);
    }
    hasChannel(e) {
        return null != K(e);
    }
    getBasicChannel(e) {
        if (null != e) return K(e);
    }
    getChannel(e) {
        if (null != e) return z(e);
    }
    loadAllGuildAndPrivateChannelsFromDisk() {
        for (let e of I.Z.getGuildIds()) H(e, 1, 'loadAllGuildAndPrivateChannelsFromDisk');
        return {
            ...C,
            ...O
        };
    }
    getChannelIds(e) {
        var t, n;
        return (H(e, 0, 'getChannelIds'), null == e) ? v.default.keys(O) : v.default.keys(null !== (n = null !== (t = f.Z.getGuildBasicChannels(e)) && void 0 !== t ? t : R[e]) && void 0 !== n ? n : N);
    }
    getMutablePrivateChannels() {
        return O;
    }
    getMutableBasicGuildChannelsForGuild(e) {
        var t, n;
        return H(e, 0, 'getMutableBasicGuildChannelsForGuild'), null !== (n = null !== (t = f.Z.getGuildBasicChannels(e)) && void 0 !== t ? t : R[e]) && void 0 !== n ? n : N;
    }
    getMutableGuildChannelsForGuild(e) {
        var t;
        return H(e, 1, 'getMutableGuildChannelsForGuild'), null !== (t = R[e]) && void 0 !== t ? t : N;
    }
    getSortedPrivateChannels() {
        return a()(O)
            .values()
            .sort((e, t) => v.default.compare(e.lastMessageId, t.lastMessageId))
            .reverse()
            .value();
    }
    getDMFromUserId(e) {
        if (null != e) return x[e];
    }
    getDMChannelFromUserId(e) {
        if (null != e) return this.getChannel(x[e]);
    }
    getMutableDMsByUserIds() {
        return x;
    }
    getDMUserIds() {
        return v.default.keys(x);
    }
    getPrivateChannelsVersion() {
        return w;
    }
    getGuildChannelsVersion(e) {
        var t;
        return null !== (t = P[e]) && void 0 !== t ? t : 0;
    }
    getAllThreadsForParent(e) {
        return a()
            .values(L)
            .filter((t) => t.parent_id === e);
    }
    getInitialOverlayState() {
        return {
            ...C,
            ...O,
            ...L
        };
    }
    getDebugInfo() {
        return {
            loadedGuildIds: Array.from(k).sort(v.default.compare),
            pendingGuildLoads: Object.keys(U).sort(v.default.compare),
            guildSizes: Object.keys(R)
                .sort(v.default.compare)
                .map((e) => ''.concat(e, ': ').concat(eD(e)))
        };
    }
}
function eD(e) {
    return null == R[e] ? null : Object.keys(R[e]).length;
}
S(eO, 'displayName', 'ChannelStore');
let eL = new eO(l.Z, {
    BACKGROUND_SYNC: er,
    CACHE_LOADED_LAZY: eu,
    CACHE_LOADED: eo,
    CHANNEL_CREATE: ec,
    CHANNEL_DELETE: ev,
    CHANNEL_RECIPIENT_ADD: eT,
    CHANNEL_RECIPIENT_REMOVE: eb,
    CHANNEL_UPDATES: ep,
    CONNECTION_OPEN_SUPPLEMENTAL: ei,
    CONNECTION_OPEN: et,
    CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: ef,
    CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: e_,
    GUILD_CREATE: ey,
    GUILD_DELETE: eI,
    LOAD_ARCHIVED_THREADS_SUCCESS: em,
    LOAD_CHANNELS: ea,
    LOAD_MESSAGES_AROUND_SUCCESS: eS,
    LOAD_MESSAGES_SUCCESS: eS,
    LOAD_THREADS_SUCCESS: em,
    LOGOUT: eR,
    OVERLAY_INITIALIZE: el,
    SEARCH_FINISH: eA,
    MOD_VIEW_SEARCH_FINISH: eA,
    THREAD_CREATE: ed,
    THREAD_DELETE: ev,
    THREAD_LIST_SYNC: eh,
    THREAD_UPDATE: ed
});
