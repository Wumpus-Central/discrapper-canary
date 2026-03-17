"use strict";
n.d(t, { A: () => eb, D: () => H }), n(205816);
var r = n(735438),
    i = n.n(r),
    s = n(61090),
    a = n(311907),
    o = n(73153),
    l = n(723176),
    u = n(154049),
    c = n(531743),
    d = n(453001),
    _ = n(736400),
    f = n(311016),
    p = n(626584),
    h = n(181079),
    m = n(95701),
    E = n(403362),
    g = n(661191),
    A = n(961350),
    I = n(71393),
    T = n(287809),
    S = n(652215);
let y = new p.A("ChannelStore"),
    v = {},
    N = {},
    C = {},
    R = {},
    O = null,
    b = {},
    D = {},
    L = {},
    w = 0,
    M = {},
    x = {},
    P = new Set(),
    k = {},
    U = 0,
    G = {},
    F = 0,
    V = 0,
    B = !1;
class H {
    static loadAllMissingChannels() {
        let e = I.A.getGuildIds().filter((e) => !P.has(e));
        return this.loadGuildIds(e);
    }
    static loadGuildFromChannelId(e) {
        return null == e ? null : H.loadGuildIds([K(e)?.guild_id]);
    }
    static loadGuildIds(e) {
        let t = e.filter(E.Vq);
        if (0 === t.length) return null;
        let n = l.A.database();
        if (null == n || !t.some((e) => !P.has(e))) return null;
        let r = U;
        return (0, u.ES)("loadChannels", async () => {
            let e = t
                    .map((e) => {
                        if (P.has(e)) return null;
                        if (null != k[e]) return y.fileOnly(`Skipping loading ${e} because a load is pending`), null;
                        let t = c.A.getAsync(n, e).then(
                            (t) => (
                                y.fileOnly(`Lazy loaded channels for ${e} #:${t.length}`), { guildId: e, channels: t }
                            ),
                        );
                        return (k[e] = t), { guildId: e, promise: t };
                    })
                    .filter(E.Vq),
                i = e.map((e) => e.promise);
            try {
                let t = await Promise.all(i);
                if (U !== r)
                    return y.fileOnly("lastResetTime has changed, skipping loads for " + e.map((e) => e.guildId)), null;
                let n = t.filter((e) => !P.has(e.guildId));
                await o.h.dispatch({ type: "LOAD_CHANNELS", channels: n });
            } catch (t) {
                for (let n of (y.error("Failed to load channels from disk for " + e.map((e) => e.guildId), t), e))
                    delete k[n.guildId];
                throw t;
            }
            return null;
        });
    }
}
function j(e, t, n) {
    if (null == e || "null" === e || P.has(e) || (0 === t && d.A.hasGuild(e))) return;
    let r = l.A.database();
    if (null == r) return;
    y.verbose(`hydrating guild (guild: ${e}, trace: ${n})`);
    let i = (0, u.Ek)(`ensureGuildLoaded(${e})`, () => c.A.getSync(r, e), "ensureGuildLoaded");
    if (null == i) {
        P.add(e), d.A.restored(e), y.log(`load returned null; early returning (guild: ${e}, database: ${r})`);
        return;
    }
    let [a, o] = i;
    for (let n of ((0, _.Ay)(a),
    0 !== t && (V += 1),
    P.add(e),
    d.A.restored(e),
    s.A.mark("❗", `loaded guild channels (guild: ${e})`, o),
    a))
        Object.hasOwn(N, n.id) || X((0, m.oh)(n));
    y.verbose(`hydration complete (guild: ${e}, channels: ${a.length}, guilds_loaded: ${V})`);
}
function Y(e, t, n) {
    if (!Object.hasOwn(N, e) && !Object.hasOwn(R, e) && !Object.hasOwn(b, e) && !Object.hasOwn(x, e) && 1 === t) {
        let r = d.A.getBasicChannel(e);
        r?.guild_id != null && j(r.guild_id, t, n);
    }
}
function W(e) {
    if ((y.fileOnly(`Deleting guild channels for ${e}`), null != C[e])) {
        for (let t of g.default.keys(C[e])) delete N[t];
        delete C[e];
    }
    null != D[e] && delete D[e];
}
function K(e) {
    return Y(e, 0, "getBasicChannel"), N[e] ?? R[e] ?? b[e] ?? x[e] ?? d.A.getBasicChannel(e);
}
function $(e) {
    return Y(e, 1, "getChannel"), N[e] ?? R[e] ?? b[e] ?? x[e] ?? G[e];
}
function z(e) {
    e.isPrivate() ? (delete G[e.id], q(e)) : e.isThread() ? Z(e) : m.uL.has(e.type) && X(e);
}
function q(e) {
    if (null != e.recipients.find((e) => (0, f.A)(e))) return !1;
    (R[e.id] = e), e.type === S.rbe.DM && (L[e.getRecipientId()] = e.id), (w += 1);
}
function Z(e) {
    let t = N[e.parent_id];
    (b[e.id] = e.merge({ nsfw: t?.nsfw === !0, parentChannelThreadType: t?.type })),
        e.isScheduledForDeletion() && o.h.dispatch({ type: "THREAD_DELETE", channel: e });
}
function X(e) {
    let { id: t, guild_id: n } = e;
    (N[t] = e),
        (C[n] = C[n] ?? {}),
        (C[n][t] = e),
        (M[n] = (M[n] ?? 0) + 1),
        null != e.linkedLobby ? ((D[n] = D[n] ?? {}), (D[n][t] = e)) : delete D[n]?.[t];
}
function Q(e) {
    null == e.guild_id || m.Le.has(e.type) ? (0, m.Gw)(e.type) && (w += 1) : (M[e.guild_id] = (M[e.guild_id] ?? 0) + 1);
}
function J(e) {
    let t = C;
    for (let n of ((L = {}),
    (N = {}),
    (C = {}),
    (D = {}),
    (b = {}),
    (M = {}),
    (G = {}),
    (k = {}),
    (U = Date.now()),
    (O = e.initialPrivateChannels),
    e.initialPrivateChannels.forEach(q),
    e.guilds))
        "partial" === n.dataMode &&
            (i().forEach(t[n.id], X), y.fileOnly(`Restoring guild channels for ${n.id} #:${eO(n.id)}`)),
            ee(n);
    eN();
}
function ee(e) {
    let { id: t, channels: n, threads: r } = e;
    switch (n.op) {
        case "full_sync":
            for (let e of (y.fileOnly(`ConnectionOpen contained full channels for ${t} #:${n.items.length}`),
            W(t),
            P.add(t),
            d.A.restored(t),
            n.items))
                X(e);
            break;
        case "update":
            for (let e of ((n.writes.length > 0 || n.deletes.length > 0) && d.A.invalidate(t), n.deletes)) em(N[e]);
            for (let e of n.writes) X(e);
    }
    if (null != r) for (let e of r) Z(e);
}
function et(e) {
    let { lazyPrivateChannels: t } = e;
    null != O && ((R = {}), O.forEach(q)), t.forEach(q);
}
function en(e) {
    let { guilds: t } = e,
        n = C;
    (N = {}),
        (C = {}),
        (M = {}),
        (D = {}),
        t.forEach((e) => {
            if ("unavailable" === e.data_mode)
                y.fileOnly(`Restoring guild channels b/c unavailable in bg sync, for ${e.id} #:${eO(e.id)}`),
                    i().forEach(n[e.id], X);
            else if ("partial" === e.data_mode) {
                y.fileOnly(`Restoring guild channels b/c partial in bg sync, for ${e.id} #:${eO(e.id)}`),
                    i().forEach(n[e.id], X);
                let t = e.partial_updates.deleted_channel_ids ?? [];
                t.length > 0 && (j(e.id, 1, "handleBackgroundSync"), t.forEach((e) => em(N[e]))),
                    e.partial_updates.channels?.forEach((t) => X((0, m.UE)(t, e.id)));
            } else
                y.fileOnly(`BG sync contained full channels for ${e.id} #:${e.channels.length}`),
                    W(e.id),
                    P.add(e.id),
                    d.A.restored(e.id),
                    e.channels.forEach((t) => X((0, m.UE)(t, e.id)));
        });
}
function er(e) {
    for (let { guildId: t, channels: n } of e.channels)
        for (let e of (y.fileOnly(`Lazy loaded guild channels for ${t}`), (0, _.Ay)(n), P.add(t), d.A.restored(t), n))
            Object.hasOwn(N, e.id) || X((0, m.oh)(e));
    return !1;
}
function ei() {
    y.fileOnly("initializeClear()"),
        (L = {}),
        (N = {}),
        (C = {}),
        (M = {}),
        (D = {}),
        (R = {}),
        (G = {}),
        (b = {}),
        (P = new Set()),
        (k = {}),
        (U = Date.now());
}
function es(e) {
    F = Math.max(F, e.guilds.length);
    let { privateChannels: t, initialGuildChannels: n } = e;
    for (let e of [t, n]) for (let t of e) z((0, _.n2)((0, m.oh)(t)));
    let r = n[0]?.guild_id;
    null != r && (y.fileOnly(`Early cache contained full guild channels for ${r}`), P.add(r));
}
function ea(e) {
    for (let t of e.channels) z((0, _.n2)((0, m.oh)(t)));
}
function eo(e) {
    for (let [t, n] of ((F = Math.max(F, e.guilds.length)), (B = !0), e.guildChannels))
        for (let e of (y.fileOnly(`Lazy cache contained full guild channels for ${t} #:${n.length}`), P.add(t), n))
            z((0, m.oh)(e));
}
function el(e) {
    z(e.channel);
}
function eu(e) {
    if (!m.A_.has(e.channel.type)) return !1;
    let t = $(e.channel.id);
    z((t = null == t ? e.channel : t.merge({ ...e.channel.toJS(), bitrate: e.channel.bitrate ?? t.bitrate })));
}
function ec(e) {
    let { channelId: t, overwrite: n } = e,
        r = $(t);
    if (null == r) return !1;
    z(r.set("permissionOverwrites", { ...r.permissionOverwrites, [n.id]: n }));
}
function ed(e) {
    let { channelId: t, overwriteId: n } = e,
        r = $(t);
    if (null == r) return !1;
    let i = { ...r.permissionOverwrites };
    delete i[n], z(r.set("permissionOverwrites", i));
}
function e_(e) {
    let t = e.channels.some((e) => {
        let t = e,
            n = $(e.id);
        return t.nsfw !== n?.nsfw || t.type !== n?.type;
    });
    for (let t of e.channels) z(t);
    t && Object.values(b).forEach((e) => z(e));
}
function ef(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        m.A_.has(e.type) && z(e);
    });
}
function ep(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        m.A_.has(e.type) && z((0, m.UE)(e));
    });
}
function eh(e) {
    if ("basicPermissions" in e || e.type !== S.rbe.DM) return;
    let t = e.getRecipientId();
    L[t] === e.id && delete L[t];
}
function em(e) {
    if (null == e) return;
    let t = e.guild_id;
    e.id in R && delete R[e.id],
        e.id in N && delete N[e.id],
        e.id in b && delete b[e.id],
        null != t &&
            (null != C[t] && e.id in C[t] && delete C[t][e.id], null != D[t] && e.id in D[t] && delete D[t][e.id]),
        Q(e);
}
function eE(e) {
    let { channel: t } = e,
        n = N[t.id] ?? R[t.id] ?? b[t.id];
    if (null == n) return !1;
    em(n), eh(n);
}
function eg(e) {
    ee(e.guild);
}
function eA(e) {
    y.fileOnly(`GuildDelete of ${e.guild.id}`), W(e.guild.id), P.delete(e.guild.id), d.A.invalidate(e.guild.id);
}
function eI(e) {
    let t = $(e.channelId),
        n = A.default.getId();
    return !!t?.isPrivate() && (z(t.addRecipient(e.user.id, e.nick, n)), !0);
}
function eT(e) {
    let t = $(e.channelId);
    return !!t?.isPrivate() && (z(t.removeRecipient(e.user.id)), !0);
}
function eS(e) {
    let { messages: t } = e;
    for (let e of t) null != e.thread && !(e.thread.id in b) && m.A_.has(e.thread.type) && Z((0, m.UE)(e.thread));
}
function ey(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n, channels: r } = e;
        t.forEach((e) => {
            e.forEach((e) => {
                ev(e.thread);
            });
        }),
            n.forEach(ev),
            r.forEach((e) => {
                let t = (0, m.UE)(e),
                    n = null != $(e.id),
                    r = null != G[e.id];
                t.isPrivate() && (!n || r) ? (G[t.id] = t) : n || z(t);
            });
    });
}
function ev(e) {
    null != e && !(e.id in b) && m.A_.has(e.type) && Z((0, m.UE)(e));
}
function eN() {
    for (let e in ((x = {}), h.A.getFavoriteChannels())) {
        let t = h.A.getCategoryRecord(e);
        null != t && (x[e] = t);
    }
}
function eC() {
    ei();
}
class eR extends a.Ay.Store {
    static displayName = "ChannelStore";
    initialize() {
        this.waitFor(A.default, d.A, h.A, I.A, T.default), this.syncWith([h.A], eN);
    }
    hasChannel(e) {
        return null != K(e);
    }
    getBasicChannel(e) {
        if (null != e) return K(e);
    }
    getChannel(e) {
        if (null != e) return $(e);
    }
    loadAllGuildAndPrivateChannelsFromDisk() {
        for (let e of I.A.getGuildIds()) j(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
        return { ...N, ...R };
    }
    getChannelIds(e) {
        return (j(e, 0, "getChannelIds"), null == e)
            ? g.default.keys(R)
            : g.default.keys(d.A.getGuildBasicChannels(e) ?? C[e] ?? v);
    }
    getMutablePrivateChannels() {
        return R;
    }
    getMutableBasicGuildChannelsForGuild(e) {
        return j(e, 0, "getMutableBasicGuildChannelsForGuild"), d.A.getGuildBasicChannels(e) ?? C[e] ?? v;
    }
    getMutableGuildChannelsForGuild(e) {
        return j(e, 1, "getMutableGuildChannelsForGuild"), C[e] ?? v;
    }
    getSortedLinkedChannelsForGuild(e) {
        return i()
            .values(D[e] ?? v)
            .sort((e, t) => g.default.compare(e.id, t.id));
    }
    getSortedPrivateChannels() {
        return i()(R)
            .values()
            .sort((e, t) => g.default.compare(e.lastMessageId, t.lastMessageId))
            .reverse()
            .value();
    }
    getDMFromUserId(e) {
        if (null != e) return L[e];
    }
    getDMChannelFromUserId(e) {
        if (null != e) return this.getChannel(L[e]);
    }
    getMutableDMsByUserIds() {
        return L;
    }
    getDMUserIds() {
        return g.default.keys(L);
    }
    getPrivateChannelsVersion() {
        return w;
    }
    getGuildChannelsVersion(e) {
        return M[e] ?? 0;
    }
    getAllThreadsForParent(e) {
        return i()
            .values(b)
            .filter((t) => t.parent_id === e);
    }
    getAllThreadsForGuild(e) {
        return i()
            .values(b)
            .filter((t) => t.guild_id === e);
    }
    getInitialOverlayState() {
        return { ...N, ...R, ...b };
    }
    getDebugInfo() {
        return {
            loadedGuildIds: Array.from(P).sort(g.default.compare),
            pendingGuildLoads: Object.keys(k).sort(g.default.compare),
            guildSizes: Object.keys(C)
                .sort(g.default.compare)
                .map((e) => `${e}: ${eO(e)}`),
        };
    }
}
function eO(e) {
    return null == C[e] ? null : Object.keys(C[e]).length;
}
let eb = new eR(o.h, {
    BACKGROUND_SYNC: en,
    CACHE_LOADED_LAZY: eo,
    CACHE_LOADED: es,
    CHANNEL_CREATE: el,
    CHANNEL_DELETE: eE,
    CHANNEL_RECIPIENT_ADD: eI,
    CHANNEL_RECIPIENT_REMOVE: eT,
    CHANNEL_UPDATES: e_,
    CONNECTION_OPEN_SUPPLEMENTAL: et,
    CONNECTION_OPEN: J,
    CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: ec,
    CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: ed,
    GUILD_CREATE: eg,
    GUILD_DELETE: eA,
    LOAD_ARCHIVED_THREADS_SUCCESS: ep,
    LOAD_CHANNELS: er,
    LOAD_MESSAGES_AROUND_SUCCESS: eS,
    LOAD_MESSAGES_SUCCESS: eS,
    LOAD_THREADS_SUCCESS: ep,
    LOGOUT: eC,
    OVERLAY_INITIALIZE: ea,
    SEARCH_MESSAGES_SUCCESS: ey,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: ey,
    THREAD_CREATE: eu,
    THREAD_DELETE: eE,
    THREAD_LIST_SYNC: ef,
    THREAD_UPDATE: eu,
});
