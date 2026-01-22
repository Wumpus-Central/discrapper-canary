n.d(t, {
    A: () => ej,
    D: () => z,
}),
    n(896048),
    n(205816),
    n(65821),
    n(638769),
    n(264879);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(61090),
    o = n(311907),
    l = n(73153),
    c = n(723176),
    u = n(154049),
    d = n(531743),
    f = n(453001),
    p = n(736400),
    _ = n(311016),
    h = n(626584),
    m = n(181079),
    g = n(95701),
    E = n(403362),
    b = n(661191),
    y = n(961350),
    O = n(71393),
    A = n(287809),
    v = n(652215);
function S(e, t, n) {
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
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = new h.A("ChannelStore"),
    R = {},
    w = {},
    P = {},
    D = {},
    x = null,
    L = {},
    j = {},
    M = {},
    k = 0,
    U = {},
    G = {},
    V = new Set(),
    F = {},
    B = 0,
    H = {},
    Y = 0,
    W = 0,
    K = !1;
class z {
    static loadAllMissingChannels() {
        let e = O.A.getGuildIds().filter((e) => !V.has(e));
        return this.loadGuildIds(e);
    }
    static loadGuildFromChannelId(e) {
        var t;
        return null == e ? null : z.loadGuildIds([null == (t = Q(e)) ? void 0 : t.guild_id]);
    }
    static loadGuildIds(e) {
        let t = e.filter(E.Vq);
        if (0 === t.length) return null;
        let n = c.A.database();
        if (null == n || !t.some((e) => !V.has(e))) return null;
        let r = B;
        return (0, u.ES)("loadChannels", async () => {
            let e = t
                    .map((e) => {
                        if (V.has(e)) return null;
                        if (null != F[e])
                            return N.fileOnly("Skipping loading ".concat(e, " because a load is pending")), null;
                        let t = d.A.getAsync(n, e).then(
                            (t) => (
                                N.fileOnly("Lazy loaded channels for ".concat(e, " #:").concat(t.length)),
                                {
                                    guildId: e,
                                    channels: t,
                                }
                            ),
                        );
                        return (
                            (F[e] = t),
                            {
                                guildId: e,
                                promise: t,
                            }
                        );
                    })
                    .filter(E.Vq),
                i = e.map((e) => e.promise);
            try {
                let t = await Promise.all(i);
                if (B !== r)
                    return N.fileOnly("lastResetTime has changed, skipping loads for " + e.map((e) => e.guildId)), null;
                let n = t.filter((e) => !V.has(e.guildId));
                await l.h.dispatch({
                    type: "LOAD_CHANNELS",
                    channels: n,
                });
            } catch (t) {
                for (let n of (N.error("Failed to load channels from disk for " + e.map((e) => e.guildId), t), e))
                    delete F[n.guildId];
                throw t;
            }
            return null;
        });
    }
}
function q(e, t, n) {
    if (null == e || "null" === e || V.has(e) || (0 === t && f.A.hasGuild(e))) return;
    let r = c.A.database();
    if (null == r) return;
    N.verbose("hydrating guild (guild: ".concat(e, ", trace: ").concat(n, ")"));
    let i = (0, u.Ek)("ensureGuildLoaded(".concat(e, ")"), () => d.A.getSync(r, e), "ensureGuildLoaded");
    if (null == i) {
        V.add(e),
            f.A.restored(e),
            N.log("load returned null; early returning (guild: ".concat(e, ", database: ").concat(r, ")"));
        return;
    }
    let [a, o] = i;
    for (let n of ((0, p.Ay)(a),
    0 !== t && (W += 1),
    V.add(e),
    f.A.restored(e),
    s.A.mark("\u2757", "loaded guild channels (guild: ".concat(e, ")"), o),
    a))
        Object.hasOwn(w, n.id) || en((0, g.oh)(n));
    N.verbose(
        "hydration complete (guild: ".concat(e, ", channels: ").concat(a.length, ", guilds_loaded: ").concat(W, ")"),
    );
}
function X(e, t, n) {
    if (!Object.hasOwn(w, e) && !Object.hasOwn(D, e) && !Object.hasOwn(L, e) && !Object.hasOwn(G, e) && 1 === t) {
        let r = f.A.getBasicChannel(e);
        (null == r ? void 0 : r.guild_id) != null && q(r.guild_id, t, n);
    }
}
function Z(e) {
    if ((N.fileOnly("Deleting guild channels for ".concat(e)), null != P[e])) {
        for (let t of b.default.keys(P[e])) delete w[t];
        delete P[e];
    }
    null != j[e] && delete j[e];
}
function Q(e) {
    var t, n, r, i;
    return (
        X(e, 0, "getBasicChannel"),
        null != (t = null != (n = null != (r = null != (i = w[e]) ? i : D[e]) ? r : L[e]) ? n : G[e])
            ? t
            : f.A.getBasicChannel(e)
    );
}
function $(e) {
    var t, n, r, i;
    return (
        X(e, 1, "getChannel"),
        null != (t = null != (n = null != (r = null != (i = w[e]) ? i : D[e]) ? r : L[e]) ? n : G[e]) ? t : H[e]
    );
}
function J(e) {
    e.isPrivate() ? (delete H[e.id], ee(e)) : e.isThread() ? et(e) : g.uL.has(e.type) && er(e);
}
function ee(e) {
    if (null != e.recipients.find((e) => (0, _.A)(e))) return !1;
    (D[e.id] = e), e.type === v.rbe.DM && (M[e.getRecipientId()] = e.id), (k += 1);
}
function et(e) {
    let t = w[e.parent_id];
    (L[e.id] = e.merge({
        nsfw: (null == t ? void 0 : t.nsfw) === !0,
        parentChannelThreadType: null == t ? void 0 : t.type,
    })),
        e.isScheduledForDeletion() &&
            l.h.dispatch({
                type: "THREAD_DELETE",
                channel: e,
            });
}
function en(e) {
    var t, n, r, i;
    let { id: a, guild_id: s } = e;
    (w[a] = e),
        (P[s] = null != (t = P[s]) ? t : {}),
        (P[s][a] = e),
        (U[s] = (null != (n = U[s]) ? n : 0) + 1),
        null != e.linkedLobby
            ? ((j[s] = null != (r = j[s]) ? r : {}), (j[s][a] = e))
            : null == (i = j[s]) || delete i[a];
}
function er(e) {
    en(e);
}
function ei(e) {
    if (null == e.guild_id || g.Le.has(e.type)) (0, g.Gw)(e.type) && (k += 1);
    else {
        var t;
        U[e.guild_id] = (null != (t = U[e.guild_id]) ? t : 0) + 1;
    }
}
function ea(e) {
    let t = P;
    for (let n of ((M = {}),
    (w = {}),
    (P = {}),
    (j = {}),
    (L = {}),
    (U = {}),
    (H = {}),
    (F = {}),
    (B = Date.now()),
    (x = e.initialPrivateChannels),
    e.initialPrivateChannels.forEach(ee),
    e.guilds))
        "partial" === n.dataMode &&
            (a().forEach(t[n.id], en),
            N.fileOnly("Restoring guild channels for ".concat(n.id, " #:").concat(eL(n.id)))),
            es(n);
    eP();
}
function es(e) {
    let { id: t, channels: n, threads: r } = e;
    switch (n.op) {
        case "full_sync":
            for (let e of (N.fileOnly(
                "ConnectionOpen contained full channels for ".concat(t, " #:").concat(n.items.length),
            ),
            Z(t),
            V.add(t),
            f.A.restored(t),
            n.items))
                en(e);
            break;
        case "update":
            for (let e of ((n.writes.length > 0 || n.deletes.length > 0) && f.A.invalidate(t), n.deletes)) eA(w[e]);
            for (let e of n.writes) en(e);
    }
    if (null != r) for (let e of r) et(e);
}
function eo(e) {
    let { lazyPrivateChannels: t } = e;
    null != x && ((D = {}), x.forEach(ee)), t.forEach(ee);
}
function el(e) {
    let { guilds: t } = e,
        n = P;
    (w = {}),
        (P = {}),
        (U = {}),
        (j = {}),
        t.forEach((e) => {
            if ("unavailable" === e.data_mode)
                N.fileOnly(
                    "Restoring guild channels b/c unavailable in bg sync, for ".concat(e.id, " #:").concat(eL(e.id)),
                ),
                    a().forEach(n[e.id], en);
            else if ("partial" === e.data_mode) {
                var t, r;
                N.fileOnly(
                    "Restoring guild channels b/c partial in bg sync, for ".concat(e.id, " #:").concat(eL(e.id)),
                ),
                    a().forEach(n[e.id], en);
                let i = null != (t = e.partial_updates.deleted_channel_ids) ? t : [];
                i.length > 0 && (q(e.id, 1, "handleBackgroundSync"), i.forEach((e) => eA(w[e]))),
                    null == (r = e.partial_updates.channels) || r.forEach((t) => en((0, g.UE)(t, e.id)));
            } else
                N.fileOnly("BG sync contained full channels for ".concat(e.id, " #:").concat(e.channels.length)),
                    Z(e.id),
                    V.add(e.id),
                    f.A.restored(e.id),
                    e.channels.forEach((t) => en((0, g.UE)(t, e.id)));
        });
}
function ec(e) {
    for (let { guildId: t, channels: n } of e.channels)
        for (let e of (N.fileOnly("Lazy loaded guild channels for ".concat(t)),
        (0, p.Ay)(n),
        V.add(t),
        f.A.restored(t),
        n))
            Object.hasOwn(w, e.id) || en((0, g.oh)(e));
    return !1;
}
function eu() {
    N.fileOnly("initializeClear()"),
        (M = {}),
        (w = {}),
        (P = {}),
        (U = {}),
        (j = {}),
        (D = {}),
        (H = {}),
        (L = {}),
        (V = new Set()),
        (F = {}),
        (B = Date.now());
}
function ed(e) {
    var t;
    Y = e.guilds.length;
    let { privateChannels: n, initialGuildChannels: r } = e;
    for (let e of [n, r]) for (let t of e) J((0, p.n2)((0, g.oh)(t)));
    let i = null == (t = r[0]) ? void 0 : t.guild_id;
    null != i && (N.fileOnly("Early cache contained full guild channels for ".concat(i)), V.add(i));
}
function ef(e) {
    for (let t of ((Y = e.guilds.length), e.channels)) J((0, p.n2)((0, g.oh)(t)));
}
function ep(e) {
    for (let [t, n] of ((K = !0), e.guildChannels))
        for (let e of (N.fileOnly("Lazy cache contained full guild channels for ".concat(t, " #:").concat(n.length)),
        V.add(t),
        n))
            J((0, g.oh)(e));
}
function e_(e) {
    J(e.channel);
}
function eh(e) {
    if (!g.A_.has(e.channel.type)) return !1;
    let t = $(e.channel.id);
    if (null == t) t = e.channel;
    else {
        var n;
        t = t.merge(C(I({}, e.channel.toJS()), { bitrate: null != (n = e.channel.bitrate) ? n : t.bitrate }));
    }
    J(t);
}
function em(e) {
    let { channelId: t, overwrite: n } = e,
        r = $(t);
    if (null == r) return !1;
    J(r.set("permissionOverwrites", C(I({}, r.permissionOverwrites), { [n.id]: n })));
}
function eg(e) {
    let { channelId: t, overwriteId: n } = e,
        r = $(t);
    if (null == r) return !1;
    let i = I({}, r.permissionOverwrites);
    delete i[n], J(r.set("permissionOverwrites", i));
}
function eE(e) {
    let t = e.channels.some((e) => {
        let t = e,
            n = $(e.id);
        return t.nsfw !== (null == n ? void 0 : n.nsfw) || t.type !== (null == n ? void 0 : n.type);
    });
    for (let t of e.channels) J(t);
    t && Object.values(L).forEach((e) => J(e));
}
function eb(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        g.A_.has(e.type) && J(e);
    });
}
function ey(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        g.A_.has(e.type) && J((0, g.UE)(e));
    });
}
function eO(e) {
    if ("basicPermissions" in e || e.type !== v.rbe.DM) return;
    let t = e.getRecipientId();
    M[t] === e.id && delete M[t];
}
function eA(e) {
    if (null == e) return;
    let t = e.guild_id;
    e.id in D && delete D[e.id],
        e.id in w && delete w[e.id],
        e.id in L && delete L[e.id],
        null != t &&
            (null != P[t] && e.id in P[t] && delete P[t][e.id], null != j[t] && e.id in j[t] && delete j[t][e.id]),
        ei(e);
}
function ev(e) {
    var t, n;
    let { channel: r } = e,
        i = null != (t = null != (n = w[r.id]) ? n : D[r.id]) ? t : L[r.id];
    if (null == i) return !1;
    eA(i), eO(i);
}
function eS(e) {
    es(e.guild);
}
function eI(e) {
    N.fileOnly("GuildDelete of ".concat(e.guild.id)), Z(e.guild.id), V.delete(e.guild.id), f.A.invalidate(e.guild.id);
}
function eT(e) {
    let t = $(e.channelId),
        n = y.default.getId();
    return null != t && !!t.isPrivate() && (J(t.addRecipient(e.user.id, e.nick, n)), !0);
}
function eC(e) {
    let t = $(e.channelId);
    return null != t && !!t.isPrivate() && (J(t.removeRecipient(e.user.id)), !0);
}
function eN(e) {
    let { messages: t } = e;
    for (let e of t) null != e.thread && !(e.thread.id in L) && g.A_.has(e.thread.type) && et((0, g.UE)(e.thread));
}
function eR(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n, channels: r } = e;
        t.forEach((e) => {
            e.forEach((e) => {
                ew(e.thread);
            });
        }),
            n.forEach(ew),
            r.forEach((e) => {
                let t = (0, g.UE)(e),
                    n = null != $(e.id),
                    r = null != H[e.id];
                t.isPrivate() && (!n || r) ? (H[t.id] = t) : n || J(t);
            });
    });
}
function ew(e) {
    null != e && !(e.id in L) && g.A_.has(e.type) && et((0, g.UE)(e));
}
function eP() {
    for (let e in ((G = {}), m.A.getFavoriteChannels())) {
        let t = m.A.getCategoryRecord(e);
        null != t && (G[e] = t);
    }
}
function eD() {
    eu();
}
class ex extends (r = o.Ay.Store) {
    initialize() {
        this.waitFor(y.default, f.A, m.A, O.A, A.default), this.syncWith([m.A], eP);
    }
    hasChannel(e) {
        return null != Q(e);
    }
    getBasicChannel(e) {
        if (null != e) return Q(e);
    }
    getChannel(e) {
        if (null != e) return $(e);
    }
    loadAllGuildAndPrivateChannelsFromDisk() {
        for (let e of O.A.getGuildIds()) q(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
        return I({}, w, D);
    }
    getChannelIds(e) {
        var t, n;
        return (q(e, 0, "getChannelIds"), null == e)
            ? b.default.keys(D)
            : b.default.keys(null != (t = null != (n = f.A.getGuildBasicChannels(e)) ? n : P[e]) ? t : R);
    }
    getMutablePrivateChannels() {
        return D;
    }
    getMutableBasicGuildChannelsForGuild(e) {
        var t, n;
        return (
            q(e, 0, "getMutableBasicGuildChannelsForGuild"),
            null != (t = null != (n = f.A.getGuildBasicChannels(e)) ? n : P[e]) ? t : R
        );
    }
    getMutableGuildChannelsForGuild(e) {
        var t;
        return q(e, 1, "getMutableGuildChannelsForGuild"), null != (t = P[e]) ? t : R;
    }
    getSortedLinkedChannelsForGuild(e) {
        var t;
        return a()
            .values(null != (t = j[e]) ? t : R)
            .sort((e, t) => b.default.compare(e.id, t.id));
    }
    getSortedPrivateChannels() {
        return a()(D)
            .values()
            .sort((e, t) => b.default.compare(e.lastMessageId, t.lastMessageId))
            .reverse()
            .value();
    }
    getDMFromUserId(e) {
        if (null != e) return M[e];
    }
    getDMChannelFromUserId(e) {
        if (null != e) return this.getChannel(M[e]);
    }
    getMutableDMsByUserIds() {
        return M;
    }
    getDMUserIds() {
        return b.default.keys(M);
    }
    getPrivateChannelsVersion() {
        return k;
    }
    getGuildChannelsVersion(e) {
        var t;
        return null != (t = U[e]) ? t : 0;
    }
    getAllThreadsForParent(e) {
        return a()
            .values(L)
            .filter((t) => t.parent_id === e);
    }
    getAllThreadsForGuild(e) {
        return a()
            .values(L)
            .filter((t) => t.guild_id === e);
    }
    getInitialOverlayState() {
        return I({}, w, D, L);
    }
    getDebugInfo() {
        return {
            loadedGuildIds: Array.from(V).sort(b.default.compare),
            pendingGuildLoads: Object.keys(F).sort(b.default.compare),
            guildSizes: Object.keys(P)
                .sort(b.default.compare)
                .map((e) => "".concat(e, ": ").concat(eL(e))),
        };
    }
}
function eL(e) {
    return null == P[e] ? null : Object.keys(P[e]).length;
}
S(ex, "displayName", "ChannelStore");
let ej = new ex(l.h, {
    BACKGROUND_SYNC: el,
    CACHE_LOADED_LAZY: ep,
    CACHE_LOADED: ed,
    CHANNEL_CREATE: e_,
    CHANNEL_DELETE: ev,
    CHANNEL_RECIPIENT_ADD: eT,
    CHANNEL_RECIPIENT_REMOVE: eC,
    CHANNEL_UPDATES: eE,
    CONNECTION_OPEN_SUPPLEMENTAL: eo,
    CONNECTION_OPEN: ea,
    CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: em,
    CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: eg,
    GUILD_CREATE: eS,
    GUILD_DELETE: eI,
    LOAD_ARCHIVED_THREADS_SUCCESS: ey,
    LOAD_CHANNELS: ec,
    LOAD_MESSAGES_AROUND_SUCCESS: eN,
    LOAD_MESSAGES_SUCCESS: eN,
    LOAD_THREADS_SUCCESS: ey,
    LOGOUT: eD,
    OVERLAY_INITIALIZE: ef,
    SEARCH_MESSAGES_SUCCESS: eR,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: eR,
    THREAD_CREATE: eh,
    THREAD_DELETE: ev,
    THREAD_LIST_SYNC: eb,
    THREAD_UPDATE: eh,
});
