n.d(t, {
    Z: () => eM,
    o: () => K
}),
    n(388685),
    n(825670),
    n(415506),
    n(642613),
    n(583741);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(956067),
    s = n(442837),
    l = n(570140),
    c = n(287328),
    u = n(86670),
    d = n(591526),
    _ = n(458772),
    f = n(38217),
    p = n(580552),
    h = n(710845),
    m = n(853856),
    g = n(610484),
    E = n(131704),
    b = n(823379),
    y = n(709054),
    O = n(314897),
    v = n(430824),
    I = n(594174),
    T = n(981631);
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
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = new h.Z('ChannelStore'),
    P = {},
    w = {},
    D = {},
    L = {},
    x = null,
    M = {},
    k = {},
    j = 0,
    U = {},
    G = {},
    B = new Set(),
    V = {},
    F = 0,
    Z = {},
    H = 0,
    Y = 0,
    W = !1;
class K {
    static loadAllMissingChannels() {
        let e = v.Z.getGuildIds().filter((e) => !B.has(e));
        return this.loadGuildIds(e);
    }
    static loadGuildFromChannelId(e) {
        var t;
        return null == e ? null : K.loadGuildIds([null == (t = Q(e)) ? void 0 : t.guild_id]);
    }
    static loadGuildIds(e) {
        let t = e.filter(b.lm);
        if (0 === t.length) return null;
        let n = c.Z.database();
        if (null == n || !t.some((e) => !B.has(e))) return null;
        let r = F;
        return (0, u.gs)('loadChannels', async () => {
            let e = t
                    .map((e) => {
                        if (B.has(e)) return null;
                        if (null != V[e]) return R.fileOnly('Skipping loading '.concat(e, ' because a load is pending')), null;
                        let t = d.Z.getAsync(n, e).then(
                            (t) => (
                                R.fileOnly('Lazy loaded channels for '.concat(e, ' #:').concat(t.length)),
                                {
                                    guildId: e,
                                    channels: t
                                }
                            )
                        );
                        return (
                            (V[e] = t),
                            {
                                guildId: e,
                                promise: t
                            }
                        );
                    })
                    .filter(b.lm),
                i = e.map((e) => e.promise);
            try {
                let t = await Promise.all(i);
                if (F !== r) return R.fileOnly('lastResetTime has changed, skipping loads for ' + e.map((e) => e.guildId)), null;
                let n = t.filter((e) => !B.has(e.guildId));
                await l.Z.dispatch({
                    type: 'LOAD_CHANNELS',
                    channels: n
                });
            } catch (t) {
                for (let n of (R.error('Failed to load channels from disk for ' + e.map((e) => e.guildId), t), e)) delete V[n.guildId];
                throw t;
            }
            return null;
        });
    }
}
function z(e, t, n) {
    if (null == e || 'null' === e || B.has(e) || (0 === t && _.Z.hasGuild(e))) return;
    let r = c.Z.database();
    if (null == r) return;
    R.verbose('hydrating guild (guild: '.concat(e, ', trace: ').concat(n, ')'));
    let i = (0, u.Pv)('ensureGuildLoaded('.concat(e, ')'), () => d.Z.getSync(r, e), 'ensureGuildLoaded');
    if (null == i) {
        B.add(e), _.Z.restored(e), R.log('load returned null; early returning (guild: '.concat(e, ', database: ').concat(r, ')'));
        return;
    }
    let [a, s] = i;
    for (let n of ((0, f.ZP)(a), 0 !== t && (Y += 1), B.add(e), _.Z.restored(e), o.Z.mark('\u2757', 'loaded guild channels (guild: '.concat(e, ')'), s), a)) Object.hasOwn(w, n.id) || en((0, E._H)(n));
    R.verbose('hydration complete (guild: '.concat(e, ', channels: ').concat(a.length, ', guilds_loaded: ').concat(Y, ')'));
}
function q(e, t, n) {
    if (!Object.hasOwn(w, e) && !Object.hasOwn(L, e) && !Object.hasOwn(M, e) && !Object.hasOwn(G, e) && 1 === t) {
        let r = _.Z.getBasicChannel(e);
        (null == r ? void 0 : r.guild_id) != null && z(r.guild_id, t, n);
    }
}
function X(e) {
    if ((R.fileOnly('Deleting guild channels for '.concat(e)), null != D[e])) {
        for (let t of y.default.keys(D[e])) delete w[t];
        delete D[e];
    }
}
function Q(e) {
    var t, n, r, i;
    return q(e, 0, 'getBasicChannel'), null != (i = null != (r = null != (n = null != (t = w[e]) ? t : L[e]) ? n : M[e]) ? r : G[e]) ? i : _.Z.getBasicChannel(e);
}
function J(e) {
    var t, n, r, i;
    return q(e, 1, 'getChannel'), null != (i = null != (r = null != (n = null != (t = w[e]) ? t : L[e]) ? n : M[e]) ? r : G[e]) ? i : Z[e];
}
function $(e) {
    e.isPrivate() ? (delete Z[e.id], ee(e)) : e.isThread() ? et(e) : E.oj.has(e.type) && er(e);
}
function ee(e) {
    if (null != e.recipients.find((e) => (0, p.Z)(e))) return !1;
    (L[e.id] = e), e.type === T.d4z.DM && (k[e.getRecipientId()] = e.id), (j += 1);
}
function et(e) {
    let t = w[e.parent_id];
    (M[e.id] = e.merge({
        nsfw: (null == t ? void 0 : t.nsfw) === !0,
        parentChannelThreadType: null == t ? void 0 : t.type
    })),
        e.isScheduledForDeletion() &&
            l.Z.dispatch({
                type: 'THREAD_DELETE',
                channel: e
            });
}
function en(e) {
    var t, n;
    let { id: r, guild_id: i } = e;
    (w[r] = e), (D[i] = null != (t = D[i]) ? t : {}), (D[i][r] = e), (U[i] = (null != (n = U[i]) ? n : 0) + 1);
}
function er(e) {
    en(e);
}
function ei(e) {
    if (null == e.guild_id || E.Ec.has(e.type)) (0, E.hv)(e.type) && (j += 1);
    else {
        var t;
        U[e.guild_id] = (null != (t = U[e.guild_id]) ? t : 0) + 1;
    }
}
function ea(e) {
    let t = D;
    for (let n of ((k = {}), (w = {}), (D = {}), (M = {}), (U = {}), (Z = {}), (V = {}), (F = Date.now()), (x = e.initialPrivateChannels), e.initialPrivateChannels.forEach(ee), e.guilds)) 'partial' === n.dataMode && (a().forEach(t[n.id], en), R.fileOnly('Restoring guild channels for '.concat(n.id, ' #:').concat(ex(n.id)))), eo(n);
    ew(), (0, g.qN)(e);
}
function eo(e) {
    if (null != e.channels) for (let t of (R.fileOnly('GuildCreate contained full channels for '.concat(e.id, ' #:').concat(e.channels.length)), X(e.id), B.add(e.id), _.Z.restored(e.id), e.channels)) en(t);
    if (null != e.channelUpdates) {
        let t = e.channelUpdates;
        for (let n of ((t.writes.length > 0 || t.deletes.length > 0) && _.Z.invalidate(e.id), t.deletes)) ev(w[n]);
        for (let e of t.writes) en(e);
    }
    if (null != e.threads) for (let t of e.threads) et(t);
}
function es(e) {
    let { lazyPrivateChannels: t } = e;
    null != x && ((L = {}), x.forEach(ee)), t.forEach(ee), (0, g.Iy)(t);
}
function el(e) {
    let { guilds: t } = e,
        n = D;
    (w = {}),
        (D = {}),
        (U = {}),
        t.forEach((e) => {
            if ('unavailable' === e.data_mode) R.fileOnly('Restoring guild channels b/c unavailable in bg sync, for '.concat(e.id, ' #:').concat(ex(e.id))), a().forEach(n[e.id], en);
            else if ('partial' === e.data_mode) {
                var t, r;
                R.fileOnly('Restoring guild channels b/c partial in bg sync, for '.concat(e.id, ' #:').concat(ex(e.id))), a().forEach(n[e.id], en);
                let i = null != (r = e.partial_updates.deleted_channel_ids) ? r : [];
                i.length > 0 && (z(e.id, 1, 'handleBackgroundSync'), i.forEach((e) => ev(w[e]))), null == (t = e.partial_updates.channels) || t.forEach((t) => en((0, E.q_)(t, e.id)));
            } else R.fileOnly('BG sync contained full channels for '.concat(e.id, ' #:').concat(e.channels.length)), X(e.id), B.add(e.id), _.Z.restored(e.id), e.channels.forEach((t) => en((0, E.q_)(t, e.id)));
        });
}
function ec(e) {
    for (let { guildId: t, channels: n } of e.channels) for (let e of (R.fileOnly('Lazy loaded guild channels for '.concat(t)), (0, f.ZP)(n), B.add(t), _.Z.restored(t), n)) Object.hasOwn(w, e.id) || en((0, E._H)(e));
    return !1;
}
function eu() {
    R.fileOnly('initializeClear()'), (k = {}), (w = {}), (D = {}), (U = {}), (L = {}), (Z = {}), (M = {}), (B = new Set()), (V = {}), (F = Date.now());
}
function ed(e) {
    var t;
    H = e.guilds.length;
    let { privateChannels: n, initialGuildChannels: r } = e;
    for (let e of [n, r]) for (let t of e) $((0, f.d7)((0, E._H)(t)));
    let i = null == (t = r[0]) ? void 0 : t.guild_id;
    null != i && (R.fileOnly('Early cache contained full guild channels for '.concat(i)), B.add(i));
}
function e_(e) {
    for (let t of ((H = e.guilds.length), e.channels)) $((0, f.d7)((0, E._H)(t)));
}
function ef(e) {
    for (let [t, n] of ((W = !0), e.guildChannels)) for (let e of (R.fileOnly('Lazy cache contained full guild channels for '.concat(t, ' #:').concat(n.length)), B.add(t), n)) $((0, E._H)(e));
}
function ep(e) {
    $(e.channel);
}
function eh(e) {
    if (!E.AW.has(e.channel.type)) return !1;
    let t = J(e.channel.id);
    if (null == t) t = e.channel;
    else {
        var n;
        t = t.merge(C(A({}, e.channel.toJS()), { bitrate: null != (n = e.channel.bitrate) ? n : t.bitrate }));
    }
    $(t);
}
function em(e) {
    let { channelId: t, overwrite: n } = e,
        r = J(t);
    if (null == r) return !1;
    $(r.set('permissionOverwrites', C(A({}, r.permissionOverwrites), { [n.id]: n })));
}
function eg(e) {
    let { channelId: t, overwriteId: n } = e,
        r = J(t);
    if (null == r) return !1;
    let i = A({}, r.permissionOverwrites);
    delete i[n], $(r.set('permissionOverwrites', i));
}
function eE(e) {
    let t = e.channels.some((e) => {
        let t = e,
            n = J(e.id);
        return t.nsfw !== (null == n ? void 0 : n.nsfw) || t.type !== (null == n ? void 0 : n.type);
    });
    for (let t of e.channels) $(t);
    t && Object.values(M).forEach((e) => $(e));
}
function eb(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        E.AW.has(e.type) && $(e);
    });
}
function ey(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        E.AW.has(e.type) && $((0, E.q_)(e));
    });
}
function eO(e) {
    if ('basicPermissions' in e || e.type !== T.d4z.DM) return;
    let t = e.getRecipientId();
    k[t] === e.id && delete k[t];
}
function ev(e) {
    if (null == e) return;
    let t = e.guild_id;
    e.id in L && delete L[e.id], e.id in w && delete w[e.id], e.id in M && delete M[e.id], null != t && null != D[t] && e.id in D[t] && delete D[t][e.id], ei(e);
}
function eI(e) {
    var t, n;
    let { channel: r } = e,
        i = null != (n = null != (t = w[r.id]) ? t : L[r.id]) ? n : M[r.id];
    if (null == i) return !1;
    ev(i), eO(i);
}
function eT(e) {
    eo(e.guild);
}
function eS(e) {
    R.fileOnly('GuildDelete of '.concat(e.guild.id)), X(e.guild.id), B.delete(e.guild.id), _.Z.invalidate(e.guild.id);
}
function eA(e) {
    let t = J(e.channelId),
        n = O.default.getId();
    return null != t && !!t.isPrivate() && ($(t.addRecipient(e.user.id, e.nick, n)), !0);
}
function eN(e) {
    let t = J(e.channelId);
    return null != t && !!t.isPrivate() && ($(t.removeRecipient(e.user.id)), !0);
}
function eC(e) {
    let { messages: t } = e;
    for (let e of t) null != e.thread && !(e.thread.id in M) && E.AW.has(e.thread.type) && et((0, E.q_)(e.thread));
}
function eR(e) {
    let { messages: t, threads: n, channels: r } = e;
    for (let e of t) for (let t of e) eP(t.thread);
    n.forEach(eP),
        null == r ||
            r.forEach((e) => {
                let t = (0, E.q_)(e),
                    n = null != J(e.id),
                    r = null != Z[e.id];
                t.isPrivate() && (!n || r) ? (Z[t.id] = t) : n || $(t);
            });
}
function eP(e) {
    null != e && !(e.id in M) && E.AW.has(e.type) && et((0, E.q_)(e));
}
function ew() {
    for (let e in ((G = {}), m.Z.getFavoriteChannels())) {
        let t = m.Z.getCategoryRecord(e);
        null != t && (G[e] = t);
    }
}
function eD() {
    eu();
}
class eL extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, I.default, v.Z, m.Z), this.syncWith([m.Z], ew);
    }
    hasChannel(e) {
        return null != Q(e);
    }
    getBasicChannel(e) {
        if (null != e) return Q(e);
    }
    getChannel(e) {
        if (null != e) return J(e);
    }
    loadAllGuildAndPrivateChannelsFromDisk() {
        for (let e of v.Z.getGuildIds()) z(e, 1, 'loadAllGuildAndPrivateChannelsFromDisk');
        return A({}, w, L);
    }
    getChannelIds(e) {
        var t, n;
        return (z(e, 0, 'getChannelIds'), null == e) ? y.default.keys(L) : y.default.keys(null != (n = null != (t = _.Z.getGuildBasicChannels(e)) ? t : D[e]) ? n : P);
    }
    getMutablePrivateChannels() {
        return L;
    }
    getMutableBasicGuildChannelsForGuild(e) {
        var t, n;
        return z(e, 0, 'getMutableBasicGuildChannelsForGuild'), null != (n = null != (t = _.Z.getGuildBasicChannels(e)) ? t : D[e]) ? n : P;
    }
    getMutableGuildChannelsForGuild(e) {
        var t;
        return z(e, 1, 'getMutableGuildChannelsForGuild'), null != (t = D[e]) ? t : P;
    }
    getSortedPrivateChannels() {
        return a()(L)
            .values()
            .sort((e, t) => y.default.compare(e.lastMessageId, t.lastMessageId))
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
        return j;
    }
    getGuildChannelsVersion(e) {
        var t;
        return null != (t = U[e]) ? t : 0;
    }
    getAllThreadsForParent(e) {
        return a()
            .values(M)
            .filter((t) => t.parent_id === e);
    }
    getAllThreadsForGuild(e) {
        return a()
            .values(M)
            .filter((t) => t.guild_id === e);
    }
    getInitialOverlayState() {
        return A({}, w, L, M);
    }
    getDebugInfo() {
        return {
            loadedGuildIds: Array.from(B).sort(y.default.compare),
            pendingGuildLoads: Object.keys(V).sort(y.default.compare),
            guildSizes: Object.keys(D)
                .sort(y.default.compare)
                .map((e) => ''.concat(e, ': ').concat(ex(e)))
        };
    }
}
function ex(e) {
    return null == D[e] ? null : Object.keys(D[e]).length;
}
S(eL, 'displayName', 'ChannelStore');
let eM = new eL(l.Z, {
    BACKGROUND_SYNC: el,
    CACHE_LOADED_LAZY: ef,
    CACHE_LOADED: ed,
    CHANNEL_CREATE: ep,
    CHANNEL_DELETE: eI,
    CHANNEL_RECIPIENT_ADD: eA,
    CHANNEL_RECIPIENT_REMOVE: eN,
    CHANNEL_UPDATES: eE,
    CONNECTION_OPEN_SUPPLEMENTAL: es,
    CONNECTION_OPEN: ea,
    CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: em,
    CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: eg,
    GUILD_CREATE: eT,
    GUILD_DELETE: eS,
    LOAD_ARCHIVED_THREADS_SUCCESS: ey,
    LOAD_CHANNELS: ec,
    LOAD_MESSAGES_AROUND_SUCCESS: eC,
    LOAD_MESSAGES_SUCCESS: eC,
    LOAD_THREADS_SUCCESS: ey,
    LOGOUT: eD,
    OVERLAY_INITIALIZE: e_,
    SEARCH_FINISH: eR,
    MOD_VIEW_SEARCH_FINISH: eR,
    THREAD_CREATE: eh,
    THREAD_DELETE: eI,
    THREAD_LIST_SYNC: eb,
    THREAD_UPDATE: eh
});
