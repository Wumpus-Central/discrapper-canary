n.d(t, {
    Z: () => eM,
    o: () => K,
}),
    n(388685),
    n(825670),
    n(415506),
    n(642613),
    n(583741);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(135273),
    s = n(442837),
    l = n(570140),
    c = n(287328),
    u = n(86670),
    d = n(591526),
    f = n(458772),
    _ = n(38217),
    p = n(580552),
    h = n(710845),
    m = n(853856),
    g = n(131704),
    E = n(823379),
    b = n(709054),
    y = n(314897),
    O = n(430824),
    v = n(594174),
    I = n(981631);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = new h.Z("ChannelStore"),
    R = {},
    P = {},
    D = {},
    w = {},
    x = null,
    L = {},
    M = {},
    j = {},
    k = 0,
    U = {},
    G = {},
    B = new Set(),
    Z = {},
    F = 0,
    V = {},
    H = 0,
    Y = 0,
    W = !1;
class K {
    static loadAllMissingChannels() {
        let e = O.Z.getGuildIds().filter((e) => !B.has(e));
        return this.loadGuildIds(e);
    }
    static loadGuildFromChannelId(e) {
        var t;
        return null == e ? null : K.loadGuildIds([null == (t = Q(e)) ? void 0 : t.guild_id]);
    }
    static loadGuildIds(e) {
        let t = e.filter(E.lm);
        if (0 === t.length) return null;
        let n = c.Z.database();
        if (null == n || !t.some((e) => !B.has(e))) return null;
        let r = F;
        return (0, u.gs)("loadChannels", async () => {
            let e = t
                    .map((e) => {
                        if (B.has(e)) return null;
                        if (null != Z[e])
                            return N.fileOnly("Skipping loading ".concat(e, " because a load is pending")), null;
                        let t = d.Z.getAsync(n, e).then(
                            (t) => (
                                N.fileOnly("Lazy loaded channels for ".concat(e, " #:").concat(t.length)),
                                {
                                    guildId: e,
                                    channels: t,
                                }
                            ),
                        );
                        return (
                            (Z[e] = t),
                            {
                                guildId: e,
                                promise: t,
                            }
                        );
                    })
                    .filter(E.lm),
                i = e.map((e) => e.promise);
            try {
                let t = await Promise.all(i);
                if (F !== r)
                    return N.fileOnly("lastResetTime has changed, skipping loads for " + e.map((e) => e.guildId)), null;
                let n = t.filter((e) => !B.has(e.guildId));
                await l.Z.dispatch({
                    type: "LOAD_CHANNELS",
                    channels: n,
                });
            } catch (t) {
                for (let n of (N.error("Failed to load channels from disk for " + e.map((e) => e.guildId), t), e))
                    delete Z[n.guildId];
                throw t;
            }
            return null;
        });
    }
}
function z(e, t, n) {
    if (null == e || "null" === e || B.has(e) || (0 === t && f.Z.hasGuild(e))) return;
    let r = c.Z.database();
    if (null == r) return;
    N.verbose("hydrating guild (guild: ".concat(e, ", trace: ").concat(n, ")"));
    let i = (0, u.Pv)("ensureGuildLoaded(".concat(e, ")"), () => d.Z.getSync(r, e), "ensureGuildLoaded");
    if (null == i) {
        B.add(e),
            f.Z.restored(e),
            N.log("load returned null; early returning (guild: ".concat(e, ", database: ").concat(r, ")"));
        return;
    }
    let [a, s] = i;
    for (let n of ((0, _.ZP)(a),
    0 !== t && (Y += 1),
    B.add(e),
    f.Z.restored(e),
    o.Z.mark("\u2757", "loaded guild channels (guild: ".concat(e, ")"), s),
    a))
        Object.hasOwn(P, n.id) || en((0, g._H)(n));
    N.verbose(
        "hydration complete (guild: ".concat(e, ", channels: ").concat(a.length, ", guilds_loaded: ").concat(Y, ")"),
    );
}
function q(e, t, n) {
    if (!Object.hasOwn(P, e) && !Object.hasOwn(w, e) && !Object.hasOwn(L, e) && !Object.hasOwn(G, e) && 1 === t) {
        let r = f.Z.getBasicChannel(e);
        (null == r ? void 0 : r.guild_id) != null && z(r.guild_id, t, n);
    }
}
function X(e) {
    if ((N.fileOnly("Deleting guild channels for ".concat(e)), null != D[e])) {
        for (let t of b.default.keys(D[e])) delete P[t];
        delete D[e];
    }
    null != M[e] && delete M[e];
}
function Q(e) {
    var t, n, r, i;
    return (
        q(e, 0, "getBasicChannel"),
        null != (i = null != (r = null != (n = null != (t = P[e]) ? t : w[e]) ? n : L[e]) ? r : G[e])
            ? i
            : f.Z.getBasicChannel(e)
    );
}
function J(e) {
    var t, n, r, i;
    return (
        q(e, 1, "getChannel"),
        null != (i = null != (r = null != (n = null != (t = P[e]) ? t : w[e]) ? n : L[e]) ? r : G[e]) ? i : V[e]
    );
}
function $(e) {
    e.isPrivate() ? (delete V[e.id], ee(e)) : e.isThread() ? et(e) : g.oj.has(e.type) && er(e);
}
function ee(e) {
    if (null != e.recipients.find((e) => (0, p.Z)(e))) return !1;
    (w[e.id] = e), e.type === I.d4z.DM && (j[e.getRecipientId()] = e.id), (k += 1);
}
function et(e) {
    let t = P[e.parent_id];
    (L[e.id] = e.merge({
        nsfw: (null == t ? void 0 : t.nsfw) === !0,
        parentChannelThreadType: null == t ? void 0 : t.type,
    })),
        e.isScheduledForDeletion() &&
            l.Z.dispatch({
                type: "THREAD_DELETE",
                channel: e,
            });
}
function en(e) {
    var t, n, r, i;
    let { id: a, guild_id: o } = e;
    (P[a] = e),
        (D[o] = null != (t = D[o]) ? t : {}),
        (D[o][a] = e),
        (U[o] = (null != (n = U[o]) ? n : 0) + 1),
        null != e.linkedLobby
            ? ((M[o] = null != (r = M[o]) ? r : {}), (M[o][a] = e))
            : null == (i = M[o]) || delete i[a];
}
function er(e) {
    en(e);
}
function ei(e) {
    if (null == e.guild_id || g.Ec.has(e.type)) (0, g.hv)(e.type) && (k += 1);
    else {
        var t;
        U[e.guild_id] = (null != (t = U[e.guild_id]) ? t : 0) + 1;
    }
}
function ea(e) {
    let t = D;
    for (let n of ((j = {}),
    (P = {}),
    (D = {}),
    (M = {}),
    (L = {}),
    (U = {}),
    (V = {}),
    (Z = {}),
    (F = Date.now()),
    (x = e.initialPrivateChannels),
    e.initialPrivateChannels.forEach(ee),
    e.guilds))
        "partial" === n.dataMode &&
            (a().forEach(t[n.id], en),
            N.fileOnly("Restoring guild channels for ".concat(n.id, " #:").concat(eL(n.id)))),
            eo(n);
    eD();
}
function eo(e) {
    let { id: t, channels: n, threads: r } = e;
    switch (n.op) {
        case "full_sync":
            for (let e of (N.fileOnly(
                "ConnectionOpen contained full channels for ".concat(t, " #:").concat(n.items.length),
            ),
            X(t),
            B.add(t),
            f.Z.restored(t),
            n.items))
                en(e);
            break;
        case "update":
            for (let e of ((n.writes.length > 0 || n.deletes.length > 0) && f.Z.invalidate(t), n.deletes)) ev(P[e]);
            for (let e of n.writes) en(e);
    }
    if (null != r) for (let e of r) et(e);
}
function es(e) {
    let { lazyPrivateChannels: t } = e;
    null != x && ((w = {}), x.forEach(ee)), t.forEach(ee);
}
function el(e) {
    let { guilds: t } = e,
        n = D;
    (P = {}),
        (D = {}),
        (U = {}),
        (M = {}),
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
                let i = null != (r = e.partial_updates.deleted_channel_ids) ? r : [];
                i.length > 0 && (z(e.id, 1, "handleBackgroundSync"), i.forEach((e) => ev(P[e]))),
                    null == (t = e.partial_updates.channels) || t.forEach((t) => en((0, g.q_)(t, e.id)));
            } else
                N.fileOnly("BG sync contained full channels for ".concat(e.id, " #:").concat(e.channels.length)),
                    X(e.id),
                    B.add(e.id),
                    f.Z.restored(e.id),
                    e.channels.forEach((t) => en((0, g.q_)(t, e.id)));
        });
}
function ec(e) {
    for (let { guildId: t, channels: n } of e.channels)
        for (let e of (N.fileOnly("Lazy loaded guild channels for ".concat(t)),
        (0, _.ZP)(n),
        B.add(t),
        f.Z.restored(t),
        n))
            Object.hasOwn(P, e.id) || en((0, g._H)(e));
    return !1;
}
function eu() {
    N.fileOnly("initializeClear()"),
        (j = {}),
        (P = {}),
        (D = {}),
        (U = {}),
        (M = {}),
        (w = {}),
        (V = {}),
        (L = {}),
        (B = new Set()),
        (Z = {}),
        (F = Date.now());
}
function ed(e) {
    var t;
    H = e.guilds.length;
    let { privateChannels: n, initialGuildChannels: r } = e;
    for (let e of [n, r]) for (let t of e) $((0, _.d7)((0, g._H)(t)));
    let i = null == (t = r[0]) ? void 0 : t.guild_id;
    null != i && (N.fileOnly("Early cache contained full guild channels for ".concat(i)), B.add(i));
}
function ef(e) {
    for (let t of ((H = e.guilds.length), e.channels)) $((0, _.d7)((0, g._H)(t)));
}
function e_(e) {
    for (let [t, n] of ((W = !0), e.guildChannels))
        for (let e of (N.fileOnly("Lazy cache contained full guild channels for ".concat(t, " #:").concat(n.length)),
        B.add(t),
        n))
            $((0, g._H)(e));
}
function ep(e) {
    $(e.channel);
}
function eh(e) {
    if (!g.AW.has(e.channel.type)) return !1;
    let t = J(e.channel.id);
    if (null == t) t = e.channel;
    else {
        var n;
        t = t.merge(C(S({}, e.channel.toJS()), { bitrate: null != (n = e.channel.bitrate) ? n : t.bitrate }));
    }
    $(t);
}
function em(e) {
    let { channelId: t, overwrite: n } = e,
        r = J(t);
    if (null == r) return !1;
    $(r.set("permissionOverwrites", C(S({}, r.permissionOverwrites), { [n.id]: n })));
}
function eg(e) {
    let { channelId: t, overwriteId: n } = e,
        r = J(t);
    if (null == r) return !1;
    let i = S({}, r.permissionOverwrites);
    delete i[n], $(r.set("permissionOverwrites", i));
}
function eE(e) {
    let t = e.channels.some((e) => {
        let t = e,
            n = J(e.id);
        return t.nsfw !== (null == n ? void 0 : n.nsfw) || t.type !== (null == n ? void 0 : n.type);
    });
    for (let t of e.channels) $(t);
    t && Object.values(L).forEach((e) => $(e));
}
function eb(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        g.AW.has(e.type) && $(e);
    });
}
function ey(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        g.AW.has(e.type) && $((0, g.q_)(e));
    });
}
function eO(e) {
    if ("basicPermissions" in e || e.type !== I.d4z.DM) return;
    let t = e.getRecipientId();
    j[t] === e.id && delete j[t];
}
function ev(e) {
    if (null == e) return;
    let t = e.guild_id;
    e.id in w && delete w[e.id],
        e.id in P && delete P[e.id],
        e.id in L && delete L[e.id],
        null != t &&
            (null != D[t] && e.id in D[t] && delete D[t][e.id], null != M[t] && e.id in M[t] && delete M[t][e.id]),
        ei(e);
}
function eI(e) {
    var t, n;
    let { channel: r } = e,
        i = null != (n = null != (t = P[r.id]) ? t : w[r.id]) ? n : L[r.id];
    if (null == i) return !1;
    ev(i), eO(i);
}
function eT(e) {
    eo(e.guild);
}
function eS(e) {
    N.fileOnly("GuildDelete of ".concat(e.guild.id)), X(e.guild.id), B.delete(e.guild.id), f.Z.invalidate(e.guild.id);
}
function eA(e) {
    let t = J(e.channelId),
        n = y.default.getId();
    return null != t && !!t.isPrivate() && ($(t.addRecipient(e.user.id, e.nick, n)), !0);
}
function eC(e) {
    let t = J(e.channelId);
    return null != t && !!t.isPrivate() && ($(t.removeRecipient(e.user.id)), !0);
}
function eN(e) {
    let { messages: t } = e;
    for (let e of t) null != e.thread && !(e.thread.id in L) && g.AW.has(e.thread.type) && et((0, g.q_)(e.thread));
}
function eR(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n, channels: r } = e;
        t.forEach((e) => {
            e.forEach((e) => {
                eP(e.thread);
            });
        }),
            n.forEach(eP),
            r.forEach((e) => {
                let t = (0, g.q_)(e),
                    n = null != J(e.id),
                    r = null != V[e.id];
                t.isPrivate() && (!n || r) ? (V[t.id] = t) : n || $(t);
            });
    });
}
function eP(e) {
    null != e && !(e.id in L) && g.AW.has(e.type) && et((0, g.q_)(e));
}
function eD() {
    for (let e in ((G = {}), m.Z.getFavoriteChannels())) {
        let t = m.Z.getCategoryRecord(e);
        null != t && (G[e] = t);
    }
}
function ew() {
    eu();
}
class ex extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(y.default, f.Z, m.Z, O.Z, v.default), this.syncWith([m.Z], eD);
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
        for (let e of O.Z.getGuildIds()) z(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
        return S({}, P, w);
    }
    getChannelIds(e) {
        var t, n;
        return (z(e, 0, "getChannelIds"), null == e)
            ? b.default.keys(w)
            : b.default.keys(null != (n = null != (t = f.Z.getGuildBasicChannels(e)) ? t : D[e]) ? n : R);
    }
    getMutablePrivateChannels() {
        return w;
    }
    getMutableBasicGuildChannelsForGuild(e) {
        var t, n;
        return (
            z(e, 0, "getMutableBasicGuildChannelsForGuild"),
            null != (n = null != (t = f.Z.getGuildBasicChannels(e)) ? t : D[e]) ? n : R
        );
    }
    getMutableGuildChannelsForGuild(e) {
        var t;
        return z(e, 1, "getMutableGuildChannelsForGuild"), null != (t = D[e]) ? t : R;
    }
    getSortedLinkedChannelsForGuild(e) {
        var t;
        return a()
            .values(null != (t = M[e]) ? t : R)
            .sort((e, t) => b.default.compare(e.id, t.id));
    }
    getSortedPrivateChannels() {
        return a()(w)
            .values()
            .sort((e, t) => b.default.compare(e.lastMessageId, t.lastMessageId))
            .reverse()
            .value();
    }
    getDMFromUserId(e) {
        if (null != e) return j[e];
    }
    getDMChannelFromUserId(e) {
        if (null != e) return this.getChannel(j[e]);
    }
    getMutableDMsByUserIds() {
        return j;
    }
    getDMUserIds() {
        return b.default.keys(j);
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
        return S({}, P, w, L);
    }
    getDebugInfo() {
        return {
            loadedGuildIds: Array.from(B).sort(b.default.compare),
            pendingGuildLoads: Object.keys(Z).sort(b.default.compare),
            guildSizes: Object.keys(D)
                .sort(b.default.compare)
                .map((e) => "".concat(e, ": ").concat(eL(e))),
        };
    }
}
function eL(e) {
    return null == D[e] ? null : Object.keys(D[e]).length;
}
T(ex, "displayName", "ChannelStore");
let eM = new ex(l.Z, {
    BACKGROUND_SYNC: el,
    CACHE_LOADED_LAZY: e_,
    CACHE_LOADED: ed,
    CHANNEL_CREATE: ep,
    CHANNEL_DELETE: eI,
    CHANNEL_RECIPIENT_ADD: eA,
    CHANNEL_RECIPIENT_REMOVE: eC,
    CHANNEL_UPDATES: eE,
    CONNECTION_OPEN_SUPPLEMENTAL: es,
    CONNECTION_OPEN: ea,
    CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: em,
    CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: eg,
    GUILD_CREATE: eT,
    GUILD_DELETE: eS,
    LOAD_ARCHIVED_THREADS_SUCCESS: ey,
    LOAD_CHANNELS: ec,
    LOAD_MESSAGES_AROUND_SUCCESS: eN,
    LOAD_MESSAGES_SUCCESS: eN,
    LOAD_THREADS_SUCCESS: ey,
    LOGOUT: ew,
    OVERLAY_INITIALIZE: ef,
    SEARCH_MESSAGES_SUCCESS: eR,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: eR,
    THREAD_CREATE: eh,
    THREAD_DELETE: eI,
    THREAD_LIST_SYNC: eb,
    THREAD_UPDATE: eh,
});
