"use strict";
n.d(t, { A: () => eC, D: () => V }), n(205816);
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
    h = n(95701),
    m = n(403362),
    E = n(661191),
    g = n(961350),
    A = n(71393),
    I = n(287809),
    T = n(652215);
let S = new p.A("ChannelStore"),
    y = {},
    v = {},
    N = {},
    C = {},
    R = null,
    O = {},
    b = {},
    D = {},
    L = 0,
    w = {},
    M = new Set(),
    x = {},
    P = 0,
    k = {},
    U = 0,
    G = 0,
    F = !1;
class V {
    static loadAllMissingChannels() {
        let e = A.A.getGuildIds().filter((e) => !M.has(e));
        return this.loadGuildIds(e);
    }
    static loadGuildFromChannelId(e) {
        return null == e ? null : V.loadGuildIds([Y(e)?.guild_id]);
    }
    static loadGuildIds(e) {
        let t = e.filter(m.Vq);
        if (0 === t.length) return null;
        let n = l.A.database();
        if (null == n || !t.some((e) => !M.has(e))) return null;
        let r = P;
        return (0, u.ES)("loadChannels", async () => {
            let e = t
                    .map((e) => {
                        if (M.has(e)) return null;
                        if (null != x[e]) return S.fileOnly(`Skipping loading ${e} because a load is pending`), null;
                        let t = c.A.getAsync(n, e).then(
                            (t) => (
                                S.fileOnly(`Lazy loaded channels for ${e} #:${t.length}`), { guildId: e, channels: t }
                            ),
                        );
                        return (x[e] = t), { guildId: e, promise: t };
                    })
                    .filter(m.Vq),
                i = e.map((e) => e.promise);
            try {
                let t = await Promise.all(i);
                if (P !== r)
                    return S.fileOnly("lastResetTime has changed, skipping loads for " + e.map((e) => e.guildId)), null;
                let n = t.filter((e) => !M.has(e.guildId));
                await o.h.dispatch({ type: "LOAD_CHANNELS", channels: n });
            } catch (t) {
                for (let n of (S.error("Failed to load channels from disk for " + e.map((e) => e.guildId), t), e))
                    delete x[n.guildId];
                throw t;
            }
            return null;
        });
    }
}
function B(e, t, n) {
    if (null == e || "null" === e || M.has(e) || (0 === t && d.A.hasGuild(e))) return;
    let r = l.A.database();
    if (null == r) return;
    S.verbose(`hydrating guild (guild: ${e}, trace: ${n})`);
    let i = (0, u.Ek)(`ensureGuildLoaded(${e})`, () => c.A.getSync(r, e), "ensureGuildLoaded");
    if (null == i) {
        M.add(e), d.A.restored(e), S.log(`load returned null; early returning (guild: ${e}, database: ${r})`);
        return;
    }
    let [a, o] = i;
    for (let n of ((0, _.Ay)(a),
    0 !== t && (G += 1),
    M.add(e),
    d.A.restored(e),
    s.A.mark("❗", `loaded guild channels (guild: ${e})`, o),
    a))
        Object.hasOwn(v, n.id) || q((0, h.oh)(n));
    S.verbose(`hydration complete (guild: ${e}, channels: ${a.length}, guilds_loaded: ${G})`);
}
function H(e, t, n) {
    if (!Object.hasOwn(v, e) && !Object.hasOwn(C, e) && !Object.hasOwn(O, e) && 1 === t) {
        let r = d.A.getBasicChannel(e);
        r?.guild_id != null && B(r.guild_id, t, n);
    }
}
function j(e) {
    if ((S.fileOnly(`Deleting guild channels for ${e}`), null != N[e])) {
        for (let t of E.default.keys(N[e])) delete v[t];
        delete N[e];
    }
    null != b[e] && delete b[e];
}
function Y(e) {
    return H(e, 0, "getBasicChannel"), v[e] ?? C[e] ?? O[e] ?? d.A.getBasicChannel(e);
}
function W(e) {
    return H(e, 1, "getChannel"), v[e] ?? C[e] ?? O[e] ?? k[e];
}
function K(e) {
    e.isPrivate() ? (delete k[e.id], $(e)) : e.isThread() ? z(e) : h.uL.has(e.type) && q(e);
}
function $(e) {
    if (null != e.recipients.find((e) => (0, f.A)(e))) return !1;
    (C[e.id] = e), e.type === T.rbe.DM && (D[e.getRecipientId()] = e.id), (L += 1);
}
function z(e) {
    let t = v[e.parent_id];
    (O[e.id] = e.merge({ nsfw: t?.nsfw === !0, parentChannelThreadType: t?.type })),
        e.isScheduledForDeletion() && o.h.dispatch({ type: "THREAD_DELETE", channel: e });
}
function q(e) {
    let { id: t, guild_id: n } = e;
    (v[t] = e),
        (N[n] = N[n] ?? {}),
        (N[n][t] = e),
        (w[n] = (w[n] ?? 0) + 1),
        null != e.linkedLobby ? ((b[n] = b[n] ?? {}), (b[n][t] = e)) : delete b[n]?.[t];
}
function Z(e) {
    null == e.guild_id || h.Le.has(e.type) ? (0, h.Gw)(e.type) && (L += 1) : (w[e.guild_id] = (w[e.guild_id] ?? 0) + 1);
}
function X(e) {
    let t = N;
    for (let n of ((D = {}),
    (v = {}),
    (N = {}),
    (b = {}),
    (O = {}),
    (w = {}),
    (k = {}),
    (x = {}),
    (P = Date.now()),
    (R = e.initialPrivateChannels),
    e.initialPrivateChannels.forEach($),
    e.guilds))
        "partial" === n.dataMode &&
            (i().forEach(t[n.id], q), S.fileOnly(`Restoring guild channels for ${n.id} #:${eN(n.id)}`)),
            Q(n);
}
function Q(e) {
    let { id: t, channels: n, threads: r } = e;
    switch (n.op) {
        case "full_sync":
            for (let e of (S.fileOnly(`ConnectionOpen contained full channels for ${t} #:${n.items.length}`),
            j(t),
            M.add(t),
            d.A.restored(t),
            n.items))
                q(e);
            break;
        case "update":
            for (let e of ((n.writes.length > 0 || n.deletes.length > 0) && d.A.invalidate(t), n.deletes)) ep(v[e]);
            for (let e of n.writes) q(e);
    }
    if (null != r) for (let e of r) z(e);
}
function J(e) {
    let { lazyPrivateChannels: t } = e;
    null != R && ((C = {}), R.forEach($)), t.forEach($);
}
function ee(e) {
    let { guilds: t } = e,
        n = N;
    (v = {}),
        (N = {}),
        (w = {}),
        (b = {}),
        t.forEach((e) => {
            if ("unavailable" === e.data_mode)
                S.fileOnly(`Restoring guild channels b/c unavailable in bg sync, for ${e.id} #:${eN(e.id)}`),
                    i().forEach(n[e.id], q);
            else if ("partial" === e.data_mode) {
                S.fileOnly(`Restoring guild channels b/c partial in bg sync, for ${e.id} #:${eN(e.id)}`),
                    i().forEach(n[e.id], q);
                let t = e.partial_updates.deleted_channel_ids ?? [];
                t.length > 0 && (B(e.id, 1, "handleBackgroundSync"), t.forEach((e) => ep(v[e]))),
                    e.partial_updates.channels?.forEach((t) => q((0, h.UE)(t, e.id)));
            } else
                S.fileOnly(`BG sync contained full channels for ${e.id} #:${e.channels.length}`),
                    j(e.id),
                    M.add(e.id),
                    d.A.restored(e.id),
                    e.channels.forEach((t) => q((0, h.UE)(t, e.id)));
        });
}
function et(e) {
    for (let { guildId: t, channels: n } of e.channels)
        for (let e of (S.fileOnly(`Lazy loaded guild channels for ${t}`), (0, _.Ay)(n), M.add(t), d.A.restored(t), n))
            Object.hasOwn(v, e.id) || q((0, h.oh)(e));
    return !1;
}
function en() {
    S.fileOnly("initializeClear()"),
        (D = {}),
        (v = {}),
        (N = {}),
        (w = {}),
        (b = {}),
        (C = {}),
        (k = {}),
        (O = {}),
        (M = new Set()),
        (x = {}),
        (P = Date.now());
}
function er(e) {
    U = Math.max(U, e.guilds.length);
    let { privateChannels: t, initialGuildChannels: n } = e;
    for (let e of [t, n]) for (let t of e) K((0, _.n2)((0, h.oh)(t)));
    let r = n[0]?.guild_id;
    null != r && (S.fileOnly(`Early cache contained full guild channels for ${r}`), M.add(r));
}
function ei(e) {
    for (let t of e.channels) K((0, _.n2)((0, h.oh)(t)));
}
function es(e) {
    for (let [t, n] of ((U = Math.max(U, e.guilds.length)), (F = !0), e.guildChannels))
        for (let e of (S.fileOnly(`Lazy cache contained full guild channels for ${t} #:${n.length}`), M.add(t), n))
            K((0, h.oh)(e));
}
function ea(e) {
    K(e.channel);
}
function eo(e) {
    if (!h.A_.has(e.channel.type)) return !1;
    let t = W(e.channel.id);
    K((t = null == t ? e.channel : t.merge({ ...e.channel.toJS(), bitrate: e.channel.bitrate ?? t.bitrate })));
}
function el(e) {
    let { channelId: t, overwrite: n } = e,
        r = W(t);
    if (null == r) return !1;
    K(r.set("permissionOverwrites", { ...r.permissionOverwrites, [n.id]: n }));
}
function eu(e) {
    let { channelId: t, overwriteId: n } = e,
        r = W(t);
    if (null == r) return !1;
    let i = { ...r.permissionOverwrites };
    delete i[n], K(r.set("permissionOverwrites", i));
}
function ec(e) {
    let t = e.channels.some((e) => {
        let t = e,
            n = W(e.id);
        return t.nsfw !== n?.nsfw || t.type !== n?.type;
    });
    for (let t of e.channels) K(t);
    t && Object.values(O).forEach((e) => K(e));
}
function ed(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        h.A_.has(e.type) && K(e);
    });
}
function e_(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        h.A_.has(e.type) && K((0, h.UE)(e));
    });
}
function ef(e) {
    if ("basicPermissions" in e || e.type !== T.rbe.DM) return;
    let t = e.getRecipientId();
    D[t] === e.id && delete D[t];
}
function ep(e) {
    if (null == e) return;
    let t = e.guild_id;
    e.id in C && delete C[e.id],
        e.id in v && delete v[e.id],
        e.id in O && delete O[e.id],
        null != t &&
            (null != N[t] && e.id in N[t] && delete N[t][e.id], null != b[t] && e.id in b[t] && delete b[t][e.id]),
        Z(e);
}
function eh(e) {
    let { channel: t } = e,
        n = v[t.id] ?? C[t.id] ?? O[t.id];
    if (null == n) return !1;
    ep(n), ef(n);
}
function em(e) {
    Q(e.guild);
}
function eE(e) {
    S.fileOnly(`GuildDelete of ${e.guild.id}`), j(e.guild.id), M.delete(e.guild.id), d.A.invalidate(e.guild.id);
}
function eg(e) {
    let t = W(e.channelId),
        n = g.default.getId();
    return !!t?.isPrivate() && (K(t.addRecipient(e.user.id, e.nick, n)), !0);
}
function eA(e) {
    let t = W(e.channelId);
    return !!t?.isPrivate() && (K(t.removeRecipient(e.user.id)), !0);
}
function eI(e) {
    let { messages: t } = e;
    for (let e of t) null != e.thread && !(e.thread.id in O) && h.A_.has(e.thread.type) && z((0, h.UE)(e.thread));
}
function eT(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n, channels: r } = e;
        t.forEach((e) => {
            e.forEach((e) => {
                eS(e.thread);
            });
        }),
            n.forEach(eS),
            r.forEach((e) => {
                let t = (0, h.UE)(e),
                    n = null != W(e.id),
                    r = null != k[e.id];
                t.isPrivate() && (!n || r) ? (k[t.id] = t) : n || K(t);
            });
    });
}
function eS(e) {
    null != e && !(e.id in O) && h.A_.has(e.type) && z((0, h.UE)(e));
}
function ey() {
    en();
}
class ev extends a.Ay.Store {
    static displayName = "ChannelStore";
    initialize() {
        this.waitFor(g.default, d.A, A.A, I.default);
    }
    hasChannel(e) {
        return null != Y(e);
    }
    getBasicChannel(e) {
        if (null != e) return Y(e);
    }
    getChannel(e) {
        if (null != e) return W(e);
    }
    loadAllGuildAndPrivateChannelsFromDisk() {
        for (let e of A.A.getGuildIds()) B(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
        return { ...v, ...C };
    }
    getChannelIds(e) {
        return (B(e, 0, "getChannelIds"), null == e)
            ? E.default.keys(C)
            : E.default.keys(d.A.getGuildBasicChannels(e) ?? N[e] ?? y);
    }
    getMutablePrivateChannels() {
        return C;
    }
    getMutableBasicGuildChannelsForGuild(e) {
        return B(e, 0, "getMutableBasicGuildChannelsForGuild"), d.A.getGuildBasicChannels(e) ?? N[e] ?? y;
    }
    getMutableGuildChannelsForGuild(e) {
        return B(e, 1, "getMutableGuildChannelsForGuild"), N[e] ?? y;
    }
    getSortedLinkedChannelsForGuild(e) {
        return i()
            .values(b[e] ?? y)
            .sort((e, t) => E.default.compare(e.id, t.id));
    }
    getSortedPrivateChannels() {
        return i()(C)
            .values()
            .sort((e, t) => E.default.compare(e.lastMessageId, t.lastMessageId))
            .reverse()
            .value();
    }
    getDMFromUserId(e) {
        if (null != e) return D[e];
    }
    getDMChannelFromUserId(e) {
        if (null != e) return this.getChannel(D[e]);
    }
    getMutableDMsByUserIds() {
        return D;
    }
    getDMUserIds() {
        return E.default.keys(D);
    }
    getPrivateChannelsVersion() {
        return L;
    }
    getGuildChannelsVersion(e) {
        return w[e] ?? 0;
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
        return { ...v, ...C, ...O };
    }
    getDebugInfo() {
        return {
            loadedGuildIds: Array.from(M).sort(E.default.compare),
            pendingGuildLoads: Object.keys(x).sort(E.default.compare),
            guildSizes: Object.keys(N)
                .sort(E.default.compare)
                .map((e) => `${e}: ${eN(e)}`),
        };
    }
}
function eN(e) {
    return null == N[e] ? null : Object.keys(N[e]).length;
}
let eC = new ev(o.h, {
    BACKGROUND_SYNC: ee,
    CACHE_LOADED_LAZY: es,
    CACHE_LOADED: er,
    CHANNEL_CREATE: ea,
    CHANNEL_DELETE: eh,
    CHANNEL_RECIPIENT_ADD: eg,
    CHANNEL_RECIPIENT_REMOVE: eA,
    CHANNEL_UPDATES: ec,
    CONNECTION_OPEN_SUPPLEMENTAL: J,
    CONNECTION_OPEN: X,
    CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: el,
    CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: eu,
    GUILD_CREATE: em,
    GUILD_DELETE: eE,
    LOAD_ARCHIVED_THREADS_SUCCESS: e_,
    LOAD_CHANNELS: et,
    LOAD_MESSAGES_AROUND_SUCCESS: eI,
    LOAD_MESSAGES_SUCCESS: eI,
    LOAD_THREADS_SUCCESS: e_,
    LOGOUT: ey,
    OVERLAY_INITIALIZE: ei,
    SEARCH_MESSAGES_SUCCESS: eT,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: eT,
    THREAD_CREATE: eo,
    THREAD_DELETE: eh,
    THREAD_LIST_SYNC: ed,
    THREAD_UPDATE: eo,
});
