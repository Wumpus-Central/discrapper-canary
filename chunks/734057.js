"use strict";
n.d(t, { A: () => eL, D: () => H }), n(205816);
var r = n(735438),
    i = n.n(r),
    a = n(61090),
    s = n(311907),
    o = n(73153),
    l = n(723176),
    u = n(154049),
    c = n(531743),
    d = n(453001),
    _ = n(736400),
    f = n(311016),
    h = n(626584),
    p = n(181079),
    g = n(95701),
    E = n(403362),
    A = n(661191),
    I = n(961350),
    T = n(71393),
    y = n(287809),
    S = n(652215);
let v = new h.A("ChannelStore"),
    C = {},
    b = {},
    N = {},
    R = {},
    O = null,
    D = {},
    L = {},
    w = {},
    x = 0,
    P = {},
    M = {},
    k = new Set(),
    U = {},
    G = 0,
    F = {},
    V = 0,
    B = 0,
    j = !1;
class H {
    static loadAllMissingChannels() {
        let e = T.A.getGuildIds().filter((e) => !k.has(e));
        return this.loadGuildIds(e);
    }
    static loadGuildFromChannelId(e) {
        return null == e ? null : H.loadGuildIds([$(e)?.guild_id]);
    }
    static loadGuildIds(e) {
        let t = e.filter(E.Vq);
        if (0 === t.length) return null;
        let n = l.A.database();
        if (null == n || !t.some((e) => !k.has(e))) return null;
        let r = G;
        return (0, u.ES)("loadChannels", async () => {
            let e = t
                    .map((e) => {
                        if (k.has(e)) return null;
                        if (null != U[e]) return v.fileOnly(`Skipping loading ${e} because a load is pending`), null;
                        let t = c.A.getAsync(n, e).then(
                            (t) => (
                                v.fileOnly(`Lazy loaded channels for ${e} #:${t.length}`), { guildId: e, channels: t }
                            ),
                        );
                        return (U[e] = t), { guildId: e, promise: t };
                    })
                    .filter(E.Vq),
                i = e.map((e) => e.promise);
            try {
                let t = await Promise.all(i);
                if (G !== r)
                    return v.fileOnly("lastResetTime has changed, skipping loads for " + e.map((e) => e.guildId)), null;
                let n = t.filter((e) => !k.has(e.guildId));
                await o.h.dispatch({ type: "LOAD_CHANNELS", channels: n });
            } catch (t) {
                for (let n of (v.error("Failed to load channels from disk for " + e.map((e) => e.guildId), t), e))
                    delete U[n.guildId];
                throw t;
            }
            return null;
        });
    }
}
function Y(e, t, n) {
    if (null == e || "null" === e || k.has(e) || (0 === t && d.A.hasGuild(e))) return;
    let r = l.A.database();
    if (null == r) return;
    v.verbose(`hydrating guild (guild: ${e}, trace: ${n})`);
    let i = (0, u.Ek)(`ensureGuildLoaded(${e})`, () => c.A.getSync(r, e), "ensureGuildLoaded");
    if (null == i) {
        k.add(e), d.A.restored(e), v.log(`load returned null; early returning (guild: ${e}, database: ${r})`);
        return;
    }
    let [s, o] = i;
    for (let n of ((0, _.Ay)(s),
    0 !== t && (B += 1),
    k.add(e),
    d.A.restored(e),
    a.A.mark("❗", `loaded guild channels (guild: ${e})`, o),
    s))
        Object.hasOwn(b, n.id) || Q((0, g.oh)(n));
    v.verbose(`hydration complete (guild: ${e}, channels: ${s.length}, guilds_loaded: ${B})`);
}
function W(e, t, n) {
    if (!Object.hasOwn(b, e) && !Object.hasOwn(R, e) && !Object.hasOwn(D, e) && !Object.hasOwn(M, e) && 1 === t) {
        let r = d.A.getBasicChannel(e);
        r?.guild_id != null && Y(r.guild_id, t, n);
    }
}
function K(e) {
    if ((v.fileOnly(`Deleting guild channels for ${e}`), null != N[e])) {
        for (let t of A.default.keys(N[e])) delete b[t];
        delete N[e];
    }
    null != L[e] && delete L[e];
}
function $(e) {
    return W(e, 0, "getBasicChannel"), b[e] ?? R[e] ?? D[e] ?? M[e] ?? d.A.getBasicChannel(e);
}
function z(e) {
    return W(e, 1, "getChannel"), b[e] ?? R[e] ?? D[e] ?? M[e] ?? F[e];
}
function q(e) {
    e.isPrivate() ? (delete F[e.id], X(e)) : e.isThread() ? Z(e) : g.uL.has(e.type) && J(e);
}
function X(e) {
    if (null != e.recipients.find((e) => (0, f.A)(e))) return !1;
    (R[e.id] = e), e.type === S.rbe.DM && (w[e.getRecipientId()] = e.id), (x += 1);
}
function Z(e) {
    let t = b[e.parent_id];
    (D[e.id] = e.merge({ nsfw: t?.nsfw === !0, parentChannelThreadType: t?.type })),
        e.isScheduledForDeletion() && o.h.dispatch({ type: "THREAD_DELETE", channel: e });
}
function Q(e) {
    let { id: t, guild_id: n } = e;
    (b[t] = e),
        (N[n] = N[n] ?? {}),
        (N[n][t] = e),
        (P[n] = (P[n] ?? 0) + 1),
        null != e.linkedLobby ? ((L[n] = L[n] ?? {}), (L[n][t] = e)) : delete L[n]?.[t];
}
function J(e) {
    Q(e);
}
function ee(e) {
    null == e.guild_id || g.Le.has(e.type) ? (0, g.Gw)(e.type) && (x += 1) : (P[e.guild_id] = (P[e.guild_id] ?? 0) + 1);
}
function et(e) {
    let t = N;
    for (let n of ((w = {}),
    (b = {}),
    (N = {}),
    (L = {}),
    (D = {}),
    (P = {}),
    (F = {}),
    (U = {}),
    (G = Date.now()),
    (O = e.initialPrivateChannels),
    e.initialPrivateChannels.forEach(X),
    e.guilds))
        "partial" === n.dataMode &&
            (i().forEach(t[n.id], Q), v.fileOnly(`Restoring guild channels for ${n.id} #:${eD(n.id)}`)),
            en(n);
    eN();
}
function en(e) {
    let { id: t, channels: n, threads: r } = e;
    switch (n.op) {
        case "full_sync":
            for (let e of (v.fileOnly(`ConnectionOpen contained full channels for ${t} #:${n.items.length}`),
            K(t),
            k.add(t),
            d.A.restored(t),
            n.items))
                Q(e);
            break;
        case "update":
            for (let e of ((n.writes.length > 0 || n.deletes.length > 0) && d.A.invalidate(t), n.deletes)) eE(b[e]);
            for (let e of n.writes) Q(e);
    }
    if (null != r) for (let e of r) Z(e);
}
function er(e) {
    let { lazyPrivateChannels: t } = e;
    null != O && ((R = {}), O.forEach(X)), t.forEach(X);
}
function ei(e) {
    let { guilds: t } = e,
        n = N;
    (b = {}),
        (N = {}),
        (P = {}),
        (L = {}),
        t.forEach((e) => {
            if ("unavailable" === e.data_mode)
                v.fileOnly(`Restoring guild channels b/c unavailable in bg sync, for ${e.id} #:${eD(e.id)}`),
                    i().forEach(n[e.id], Q);
            else if ("partial" === e.data_mode) {
                v.fileOnly(`Restoring guild channels b/c partial in bg sync, for ${e.id} #:${eD(e.id)}`),
                    i().forEach(n[e.id], Q);
                let t = e.partial_updates.deleted_channel_ids ?? [];
                t.length > 0 && (Y(e.id, 1, "handleBackgroundSync"), t.forEach((e) => eE(b[e]))),
                    e.partial_updates.channels?.forEach((t) => Q((0, g.UE)(t, e.id)));
            } else
                v.fileOnly(`BG sync contained full channels for ${e.id} #:${e.channels.length}`),
                    K(e.id),
                    k.add(e.id),
                    d.A.restored(e.id),
                    e.channels.forEach((t) => Q((0, g.UE)(t, e.id)));
        });
}
function ea(e) {
    for (let { guildId: t, channels: n } of e.channels)
        for (let e of (v.fileOnly(`Lazy loaded guild channels for ${t}`), (0, _.Ay)(n), k.add(t), d.A.restored(t), n))
            Object.hasOwn(b, e.id) || Q((0, g.oh)(e));
    return !1;
}
function es() {
    v.fileOnly("initializeClear()"),
        (w = {}),
        (b = {}),
        (N = {}),
        (P = {}),
        (L = {}),
        (R = {}),
        (F = {}),
        (D = {}),
        (k = new Set()),
        (U = {}),
        (G = Date.now());
}
function eo(e) {
    V = e.guilds.length;
    let { privateChannels: t, initialGuildChannels: n } = e;
    for (let e of [t, n]) for (let t of e) q((0, _.n2)((0, g.oh)(t)));
    let r = n[0]?.guild_id;
    null != r && (v.fileOnly(`Early cache contained full guild channels for ${r}`), k.add(r));
}
function el(e) {
    for (let t of ((V = e.guilds.length), e.channels)) q((0, _.n2)((0, g.oh)(t)));
}
function eu(e) {
    for (let [t, n] of ((j = !0), e.guildChannels))
        for (let e of (v.fileOnly(`Lazy cache contained full guild channels for ${t} #:${n.length}`), k.add(t), n))
            q((0, g.oh)(e));
}
function ec(e) {
    q(e.channel);
}
function ed(e) {
    if (!g.A_.has(e.channel.type)) return !1;
    let t = z(e.channel.id);
    q((t = null == t ? e.channel : t.merge({ ...e.channel.toJS(), bitrate: e.channel.bitrate ?? t.bitrate })));
}
function e_(e) {
    let { channelId: t, overwrite: n } = e,
        r = z(t);
    if (null == r) return !1;
    q(r.set("permissionOverwrites", { ...r.permissionOverwrites, [n.id]: n }));
}
function ef(e) {
    let { channelId: t, overwriteId: n } = e,
        r = z(t);
    if (null == r) return !1;
    let i = { ...r.permissionOverwrites };
    delete i[n], q(r.set("permissionOverwrites", i));
}
function eh(e) {
    let t = e.channels.some((e) => {
        let t = e,
            n = z(e.id);
        return t.nsfw !== n?.nsfw || t.type !== n?.type;
    });
    for (let t of e.channels) q(t);
    t && Object.values(D).forEach((e) => q(e));
}
function ep(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        g.A_.has(e.type) && q(e);
    });
}
function em(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        g.A_.has(e.type) && q((0, g.UE)(e));
    });
}
function eg(e) {
    if ("basicPermissions" in e || e.type !== S.rbe.DM) return;
    let t = e.getRecipientId();
    w[t] === e.id && delete w[t];
}
function eE(e) {
    if (null == e) return;
    let t = e.guild_id;
    e.id in R && delete R[e.id],
        e.id in b && delete b[e.id],
        e.id in D && delete D[e.id],
        null != t &&
            (null != N[t] && e.id in N[t] && delete N[t][e.id], null != L[t] && e.id in L[t] && delete L[t][e.id]),
        ee(e);
}
function eA(e) {
    let { channel: t } = e,
        n = b[t.id] ?? R[t.id] ?? D[t.id];
    if (null == n) return !1;
    eE(n), eg(n);
}
function eI(e) {
    en(e.guild);
}
function eT(e) {
    v.fileOnly(`GuildDelete of ${e.guild.id}`), K(e.guild.id), k.delete(e.guild.id), d.A.invalidate(e.guild.id);
}
function ey(e) {
    let t = z(e.channelId),
        n = I.default.getId();
    return !!t?.isPrivate() && (q(t.addRecipient(e.user.id, e.nick, n)), !0);
}
function eS(e) {
    let t = z(e.channelId);
    return !!t?.isPrivate() && (q(t.removeRecipient(e.user.id)), !0);
}
function ev(e) {
    let { messages: t } = e;
    for (let e of t) null != e.thread && !(e.thread.id in D) && g.A_.has(e.thread.type) && Z((0, g.UE)(e.thread));
}
function eC(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n, channels: r } = e;
        t.forEach((e) => {
            e.forEach((e) => {
                eb(e.thread);
            });
        }),
            n.forEach(eb),
            r.forEach((e) => {
                let t = (0, g.UE)(e),
                    n = null != z(e.id),
                    r = null != F[e.id];
                t.isPrivate() && (!n || r) ? (F[t.id] = t) : n || q(t);
            });
    });
}
function eb(e) {
    null != e && !(e.id in D) && g.A_.has(e.type) && Z((0, g.UE)(e));
}
function eN() {
    for (let e in ((M = {}), p.A.getFavoriteChannels())) {
        let t = p.A.getCategoryRecord(e);
        null != t && (M[e] = t);
    }
}
function eR() {
    es();
}
class eO extends s.Ay.Store {
    static displayName = "ChannelStore";
    initialize() {
        this.waitFor(I.default, d.A, p.A, T.A, y.default), this.syncWith([p.A], eN);
    }
    hasChannel(e) {
        return null != $(e);
    }
    getBasicChannel(e) {
        if (null != e) return $(e);
    }
    getChannel(e) {
        if (null != e) return z(e);
    }
    loadAllGuildAndPrivateChannelsFromDisk() {
        for (let e of T.A.getGuildIds()) Y(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
        return { ...b, ...R };
    }
    getChannelIds(e) {
        return (Y(e, 0, "getChannelIds"), null == e)
            ? A.default.keys(R)
            : A.default.keys(d.A.getGuildBasicChannels(e) ?? N[e] ?? C);
    }
    getMutablePrivateChannels() {
        return R;
    }
    getMutableBasicGuildChannelsForGuild(e) {
        return Y(e, 0, "getMutableBasicGuildChannelsForGuild"), d.A.getGuildBasicChannels(e) ?? N[e] ?? C;
    }
    getMutableGuildChannelsForGuild(e) {
        return Y(e, 1, "getMutableGuildChannelsForGuild"), N[e] ?? C;
    }
    getSortedLinkedChannelsForGuild(e) {
        return i()
            .values(L[e] ?? C)
            .sort((e, t) => A.default.compare(e.id, t.id));
    }
    getSortedPrivateChannels() {
        return i()(R)
            .values()
            .sort((e, t) => A.default.compare(e.lastMessageId, t.lastMessageId))
            .reverse()
            .value();
    }
    getDMFromUserId(e) {
        if (null != e) return w[e];
    }
    getDMChannelFromUserId(e) {
        if (null != e) return this.getChannel(w[e]);
    }
    getMutableDMsByUserIds() {
        return w;
    }
    getDMUserIds() {
        return A.default.keys(w);
    }
    getPrivateChannelsVersion() {
        return x;
    }
    getGuildChannelsVersion(e) {
        return P[e] ?? 0;
    }
    getAllThreadsForParent(e) {
        return i()
            .values(D)
            .filter((t) => t.parent_id === e);
    }
    getAllThreadsForGuild(e) {
        return i()
            .values(D)
            .filter((t) => t.guild_id === e);
    }
    getInitialOverlayState() {
        return { ...b, ...R, ...D };
    }
    getDebugInfo() {
        return {
            loadedGuildIds: Array.from(k).sort(A.default.compare),
            pendingGuildLoads: Object.keys(U).sort(A.default.compare),
            guildSizes: Object.keys(N)
                .sort(A.default.compare)
                .map((e) => `${e}: ${eD(e)}`),
        };
    }
}
function eD(e) {
    return null == N[e] ? null : Object.keys(N[e]).length;
}
let eL = new eO(o.h, {
    BACKGROUND_SYNC: ei,
    CACHE_LOADED_LAZY: eu,
    CACHE_LOADED: eo,
    CHANNEL_CREATE: ec,
    CHANNEL_DELETE: eA,
    CHANNEL_RECIPIENT_ADD: ey,
    CHANNEL_RECIPIENT_REMOVE: eS,
    CHANNEL_UPDATES: eh,
    CONNECTION_OPEN_SUPPLEMENTAL: er,
    CONNECTION_OPEN: et,
    CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: e_,
    CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: ef,
    GUILD_CREATE: eI,
    GUILD_DELETE: eT,
    LOAD_ARCHIVED_THREADS_SUCCESS: em,
    LOAD_CHANNELS: ea,
    LOAD_MESSAGES_AROUND_SUCCESS: ev,
    LOAD_MESSAGES_SUCCESS: ev,
    LOAD_THREADS_SUCCESS: em,
    LOGOUT: eR,
    OVERLAY_INITIALIZE: el,
    SEARCH_MESSAGES_SUCCESS: eC,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: eC,
    THREAD_CREATE: ed,
    THREAD_DELETE: eA,
    THREAD_LIST_SYNC: ep,
    THREAD_UPDATE: ed,
});
