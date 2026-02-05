"use strict";
n.d(t, { A: () => eD, D: () => j }), n(205816);
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
    p = n(626584),
    h = n(181079),
    m = n(95701),
    g = n(403362),
    E = n(661191),
    A = n(961350),
    I = n(71393),
    T = n(287809),
    y = n(652215);
let S = new p.A("ChannelStore"),
    v = {},
    C = {},
    b = {},
    N = {},
    R = null,
    O = {},
    D = {},
    L = {},
    w = 0,
    x = {},
    P = {},
    M = new Set(),
    k = {},
    U = 0,
    G = {},
    V = 0,
    F = 0,
    B = !1;
class j {
    static loadAllMissingChannels() {
        let e = I.A.getGuildIds().filter((e) => !M.has(e));
        return this.loadGuildIds(e);
    }
    static loadGuildFromChannelId(e) {
        return null == e ? null : j.loadGuildIds([K(e)?.guild_id]);
    }
    static loadGuildIds(e) {
        let t = e.filter(g.Vq);
        if (0 === t.length) return null;
        let n = l.A.database();
        if (null == n || !t.some((e) => !M.has(e))) return null;
        let r = U;
        return (0, u.ES)("loadChannels", async () => {
            let e = t
                    .map((e) => {
                        if (M.has(e)) return null;
                        if (null != k[e]) return S.fileOnly(`Skipping loading ${e} because a load is pending`), null;
                        let t = c.A.getAsync(n, e).then(
                            (t) => (
                                S.fileOnly(`Lazy loaded channels for ${e} #:${t.length}`), { guildId: e, channels: t }
                            ),
                        );
                        return (k[e] = t), { guildId: e, promise: t };
                    })
                    .filter(g.Vq),
                i = e.map((e) => e.promise);
            try {
                let t = await Promise.all(i);
                if (U !== r)
                    return S.fileOnly("lastResetTime has changed, skipping loads for " + e.map((e) => e.guildId)), null;
                let n = t.filter((e) => !M.has(e.guildId));
                await o.h.dispatch({ type: "LOAD_CHANNELS", channels: n });
            } catch (t) {
                for (let n of (S.error("Failed to load channels from disk for " + e.map((e) => e.guildId), t), e))
                    delete k[n.guildId];
                throw t;
            }
            return null;
        });
    }
}
function H(e, t, n) {
    if (null == e || "null" === e || M.has(e) || (0 === t && d.A.hasGuild(e))) return;
    let r = l.A.database();
    if (null == r) return;
    S.verbose(`hydrating guild (guild: ${e}, trace: ${n})`);
    let i = (0, u.Ek)(`ensureGuildLoaded(${e})`, () => c.A.getSync(r, e), "ensureGuildLoaded");
    if (null == i) {
        M.add(e), d.A.restored(e), S.log(`load returned null; early returning (guild: ${e}, database: ${r})`);
        return;
    }
    let [s, o] = i;
    for (let n of ((0, _.Ay)(s),
    0 !== t && (F += 1),
    M.add(e),
    d.A.restored(e),
    a.A.mark("❗", `loaded guild channels (guild: ${e})`, o),
    s))
        Object.hasOwn(C, n.id) || Q((0, m.oh)(n));
    S.verbose(`hydration complete (guild: ${e}, channels: ${s.length}, guilds_loaded: ${F})`);
}
function Y(e, t, n) {
    if (!Object.hasOwn(C, e) && !Object.hasOwn(N, e) && !Object.hasOwn(O, e) && !Object.hasOwn(P, e) && 1 === t) {
        let r = d.A.getBasicChannel(e);
        r?.guild_id != null && H(r.guild_id, t, n);
    }
}
function W(e) {
    if ((S.fileOnly(`Deleting guild channels for ${e}`), null != b[e])) {
        for (let t of E.default.keys(b[e])) delete C[t];
        delete b[e];
    }
    null != D[e] && delete D[e];
}
function K(e) {
    return Y(e, 0, "getBasicChannel"), C[e] ?? N[e] ?? O[e] ?? P[e] ?? d.A.getBasicChannel(e);
}
function z(e) {
    return Y(e, 1, "getChannel"), C[e] ?? N[e] ?? O[e] ?? P[e] ?? G[e];
}
function $(e) {
    e.isPrivate() ? (delete G[e.id], q(e)) : e.isThread() ? Z(e) : m.uL.has(e.type) && X(e);
}
function q(e) {
    if (null != e.recipients.find((e) => (0, f.A)(e))) return !1;
    (N[e.id] = e), e.type === y.rbe.DM && (L[e.getRecipientId()] = e.id), (w += 1);
}
function Z(e) {
    let t = C[e.parent_id];
    (O[e.id] = e.merge({ nsfw: t?.nsfw === !0, parentChannelThreadType: t?.type })),
        e.isScheduledForDeletion() && o.h.dispatch({ type: "THREAD_DELETE", channel: e });
}
function Q(e) {
    let { id: t, guild_id: n } = e;
    (C[t] = e),
        (b[n] = b[n] ?? {}),
        (b[n][t] = e),
        (x[n] = (x[n] ?? 0) + 1),
        null != e.linkedLobby ? ((D[n] = D[n] ?? {}), (D[n][t] = e)) : delete D[n]?.[t];
}
function X(e) {
    Q(e);
}
function J(e) {
    null == e.guild_id || m.Le.has(e.type) ? (0, m.Gw)(e.type) && (w += 1) : (x[e.guild_id] = (x[e.guild_id] ?? 0) + 1);
}
function ee(e) {
    let t = b;
    for (let n of ((L = {}),
    (C = {}),
    (b = {}),
    (D = {}),
    (O = {}),
    (x = {}),
    (G = {}),
    (k = {}),
    (U = Date.now()),
    (R = e.initialPrivateChannels),
    e.initialPrivateChannels.forEach(q),
    e.guilds))
        "partial" === n.dataMode &&
            (i().forEach(t[n.id], Q), S.fileOnly(`Restoring guild channels for ${n.id} #:${eO(n.id)}`)),
            et(n);
    eb();
}
function et(e) {
    let { id: t, channels: n, threads: r } = e;
    switch (n.op) {
        case "full_sync":
            for (let e of (S.fileOnly(`ConnectionOpen contained full channels for ${t} #:${n.items.length}`),
            W(t),
            M.add(t),
            d.A.restored(t),
            n.items))
                Q(e);
            break;
        case "update":
            for (let e of ((n.writes.length > 0 || n.deletes.length > 0) && d.A.invalidate(t), n.deletes)) eg(C[e]);
            for (let e of n.writes) Q(e);
    }
    if (null != r) for (let e of r) Z(e);
}
function en(e) {
    let { lazyPrivateChannels: t } = e;
    null != R && ((N = {}), R.forEach(q)), t.forEach(q);
}
function er(e) {
    let { guilds: t } = e,
        n = b;
    (C = {}),
        (b = {}),
        (x = {}),
        (D = {}),
        t.forEach((e) => {
            if ("unavailable" === e.data_mode)
                S.fileOnly(`Restoring guild channels b/c unavailable in bg sync, for ${e.id} #:${eO(e.id)}`),
                    i().forEach(n[e.id], Q);
            else if ("partial" === e.data_mode) {
                S.fileOnly(`Restoring guild channels b/c partial in bg sync, for ${e.id} #:${eO(e.id)}`),
                    i().forEach(n[e.id], Q);
                let t = e.partial_updates.deleted_channel_ids ?? [];
                t.length > 0 && (H(e.id, 1, "handleBackgroundSync"), t.forEach((e) => eg(C[e]))),
                    e.partial_updates.channels?.forEach((t) => Q((0, m.UE)(t, e.id)));
            } else
                S.fileOnly(`BG sync contained full channels for ${e.id} #:${e.channels.length}`),
                    W(e.id),
                    M.add(e.id),
                    d.A.restored(e.id),
                    e.channels.forEach((t) => Q((0, m.UE)(t, e.id)));
        });
}
function ei(e) {
    for (let { guildId: t, channels: n } of e.channels)
        for (let e of (S.fileOnly(`Lazy loaded guild channels for ${t}`), (0, _.Ay)(n), M.add(t), d.A.restored(t), n))
            Object.hasOwn(C, e.id) || Q((0, m.oh)(e));
    return !1;
}
function ea() {
    S.fileOnly("initializeClear()"),
        (L = {}),
        (C = {}),
        (b = {}),
        (x = {}),
        (D = {}),
        (N = {}),
        (G = {}),
        (O = {}),
        (M = new Set()),
        (k = {}),
        (U = Date.now());
}
function es(e) {
    V = e.guilds.length;
    let { privateChannels: t, initialGuildChannels: n } = e;
    for (let e of [t, n]) for (let t of e) $((0, _.n2)((0, m.oh)(t)));
    let r = n[0]?.guild_id;
    null != r && (S.fileOnly(`Early cache contained full guild channels for ${r}`), M.add(r));
}
function eo(e) {
    for (let t of ((V = e.guilds.length), e.channels)) $((0, _.n2)((0, m.oh)(t)));
}
function el(e) {
    for (let [t, n] of ((B = !0), e.guildChannels))
        for (let e of (S.fileOnly(`Lazy cache contained full guild channels for ${t} #:${n.length}`), M.add(t), n))
            $((0, m.oh)(e));
}
function eu(e) {
    $(e.channel);
}
function ec(e) {
    if (!m.A_.has(e.channel.type)) return !1;
    let t = z(e.channel.id);
    $((t = null == t ? e.channel : t.merge({ ...e.channel.toJS(), bitrate: e.channel.bitrate ?? t.bitrate })));
}
function ed(e) {
    let { channelId: t, overwrite: n } = e,
        r = z(t);
    if (null == r) return !1;
    $(r.set("permissionOverwrites", { ...r.permissionOverwrites, [n.id]: n }));
}
function e_(e) {
    let { channelId: t, overwriteId: n } = e,
        r = z(t);
    if (null == r) return !1;
    let i = { ...r.permissionOverwrites };
    delete i[n], $(r.set("permissionOverwrites", i));
}
function ef(e) {
    let t = e.channels.some((e) => {
        let t = e,
            n = z(e.id);
        return t.nsfw !== n?.nsfw || t.type !== n?.type;
    });
    for (let t of e.channels) $(t);
    t && Object.values(O).forEach((e) => $(e));
}
function ep(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        m.A_.has(e.type) && $(e);
    });
}
function eh(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        m.A_.has(e.type) && $((0, m.UE)(e));
    });
}
function em(e) {
    if ("basicPermissions" in e || e.type !== y.rbe.DM) return;
    let t = e.getRecipientId();
    L[t] === e.id && delete L[t];
}
function eg(e) {
    if (null == e) return;
    let t = e.guild_id;
    e.id in N && delete N[e.id],
        e.id in C && delete C[e.id],
        e.id in O && delete O[e.id],
        null != t &&
            (null != b[t] && e.id in b[t] && delete b[t][e.id], null != D[t] && e.id in D[t] && delete D[t][e.id]),
        J(e);
}
function eE(e) {
    let { channel: t } = e,
        n = C[t.id] ?? N[t.id] ?? O[t.id];
    if (null == n) return !1;
    eg(n), em(n);
}
function eA(e) {
    et(e.guild);
}
function eI(e) {
    S.fileOnly(`GuildDelete of ${e.guild.id}`), W(e.guild.id), M.delete(e.guild.id), d.A.invalidate(e.guild.id);
}
function eT(e) {
    let t = z(e.channelId),
        n = A.default.getId();
    return !!t?.isPrivate() && ($(t.addRecipient(e.user.id, e.nick, n)), !0);
}
function ey(e) {
    let t = z(e.channelId);
    return !!t?.isPrivate() && ($(t.removeRecipient(e.user.id)), !0);
}
function eS(e) {
    let { messages: t } = e;
    for (let e of t) null != e.thread && !(e.thread.id in O) && m.A_.has(e.thread.type) && Z((0, m.UE)(e.thread));
}
function ev(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n, channels: r } = e;
        t.forEach((e) => {
            e.forEach((e) => {
                eC(e.thread);
            });
        }),
            n.forEach(eC),
            r.forEach((e) => {
                let t = (0, m.UE)(e),
                    n = null != z(e.id),
                    r = null != G[e.id];
                t.isPrivate() && (!n || r) ? (G[t.id] = t) : n || $(t);
            });
    });
}
function eC(e) {
    null != e && !(e.id in O) && m.A_.has(e.type) && Z((0, m.UE)(e));
}
function eb() {
    for (let e in ((P = {}), h.A.getFavoriteChannels())) {
        let t = h.A.getCategoryRecord(e);
        null != t && (P[e] = t);
    }
}
function eN() {
    ea();
}
class eR extends s.Ay.Store {
    static displayName = "ChannelStore";
    initialize() {
        this.waitFor(A.default, d.A, h.A, I.A, T.default), this.syncWith([h.A], eb);
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
        for (let e of I.A.getGuildIds()) H(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
        return { ...C, ...N };
    }
    getChannelIds(e) {
        return (H(e, 0, "getChannelIds"), null == e)
            ? E.default.keys(N)
            : E.default.keys(d.A.getGuildBasicChannels(e) ?? b[e] ?? v);
    }
    getMutablePrivateChannels() {
        return N;
    }
    getMutableBasicGuildChannelsForGuild(e) {
        return H(e, 0, "getMutableBasicGuildChannelsForGuild"), d.A.getGuildBasicChannels(e) ?? b[e] ?? v;
    }
    getMutableGuildChannelsForGuild(e) {
        return H(e, 1, "getMutableGuildChannelsForGuild"), b[e] ?? v;
    }
    getSortedLinkedChannelsForGuild(e) {
        return i()
            .values(D[e] ?? v)
            .sort((e, t) => E.default.compare(e.id, t.id));
    }
    getSortedPrivateChannels() {
        return i()(N)
            .values()
            .sort((e, t) => E.default.compare(e.lastMessageId, t.lastMessageId))
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
        return E.default.keys(L);
    }
    getPrivateChannelsVersion() {
        return w;
    }
    getGuildChannelsVersion(e) {
        return x[e] ?? 0;
    }
    getAllThreadsForParent(e) {
        return i()
            .values(O)
            .filter((t) => t.parent_id === e);
    }
    getAllThreadsForGuild(e) {
        return i()
            .values(O)
            .filter((t) => t.guild_id === e);
    }
    getInitialOverlayState() {
        return { ...C, ...N, ...O };
    }
    getDebugInfo() {
        return {
            loadedGuildIds: Array.from(M).sort(E.default.compare),
            pendingGuildLoads: Object.keys(k).sort(E.default.compare),
            guildSizes: Object.keys(b)
                .sort(E.default.compare)
                .map((e) => `${e}: ${eO(e)}`),
        };
    }
}
function eO(e) {
    return null == b[e] ? null : Object.keys(b[e]).length;
}
let eD = new eR(o.h, {
    BACKGROUND_SYNC: er,
    CACHE_LOADED_LAZY: el,
    CACHE_LOADED: es,
    CHANNEL_CREATE: eu,
    CHANNEL_DELETE: eE,
    CHANNEL_RECIPIENT_ADD: eT,
    CHANNEL_RECIPIENT_REMOVE: ey,
    CHANNEL_UPDATES: ef,
    CONNECTION_OPEN_SUPPLEMENTAL: en,
    CONNECTION_OPEN: ee,
    CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: ed,
    CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: e_,
    GUILD_CREATE: eA,
    GUILD_DELETE: eI,
    LOAD_ARCHIVED_THREADS_SUCCESS: eh,
    LOAD_CHANNELS: ei,
    LOAD_MESSAGES_AROUND_SUCCESS: eS,
    LOAD_MESSAGES_SUCCESS: eS,
    LOAD_THREADS_SUCCESS: eh,
    LOGOUT: eN,
    OVERLAY_INITIALIZE: eo,
    SEARCH_MESSAGES_SUCCESS: ev,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: ev,
    THREAD_CREATE: ec,
    THREAD_DELETE: eE,
    THREAD_LIST_SYNC: ep,
    THREAD_UPDATE: ec,
});
