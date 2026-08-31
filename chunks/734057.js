"use strict";
n.d(t, { A: () => eo, D: () => B }), n(205816);
var i = n(435558),
    r = n.n(i),
    a = n(61090),
    s = n(17928),
    l = n(228366),
    o = n(723176),
    d = n(154049),
    c = n(531743),
    u = n(453001),
    _ = n(736400),
    E = n(311016),
    A = n(626584),
    h = n(181079),
    I = n(95701),
    f = n(403362),
    p = n(935208),
    T = n(280450),
    m = n(71393),
    g = n(287809),
    S = n(652215);
let N = new A.A("ChannelStore"),
    C = {},
    O = {},
    R = {},
    L = {},
    y = null,
    D = {},
    v = {},
    b = {},
    M = 0,
    P = {},
    U = {},
    w = new Set(),
    G = {},
    x = 0,
    k = {},
    F = 0,
    V = 0;
class B {
    static loadAllMissingChannels() {
        let e = m.A.getGuildIds().filter((e) => !w.has(e));
        return this.loadGuildIds(e);
    }
    static loadGuildFromChannelId(e) {
        return null == e ? null : B.loadGuildIds([Y(e)?.guild_id]);
    }
    static loadGuildIds(e) {
        let t = e.filter(f.Vq);
        if (0 === t.length) return null;
        let n = o.A.database();
        if (null == n || !t.some((e) => !w.has(e))) return null;
        let i = x;
        return (0, d.ES)("loadChannels", async () => {
            let e = t
                    .map((e) => {
                        if (w.has(e)) return null;
                        if (null != G[e]) return N.fileOnly(`Skipping loading ${e} because a load is pending`), null;
                        let t = c.A.getAsync(n, e).then(
                            (t) => (
                                N.fileOnly(`Lazy loaded channels for ${e} #:${t.length}`), { guildId: e, channels: t }
                            ),
                        );
                        return (G[e] = t), { guildId: e, promise: t };
                    })
                    .filter(f.Vq),
                r = e.map((e) => e.promise);
            try {
                let t = await Promise.all(r);
                if (x !== i)
                    return N.fileOnly("lastResetTime has changed, skipping loads for " + e.map((e) => e.guildId)), null;
                let n = t.filter((e) => !w.has(e.guildId));
                await l.h.dispatch({ type: "LOAD_CHANNELS", channels: n });
            } catch (t) {
                for (let n of (N.error("Failed to load channels from disk for " + e.map((e) => e.guildId), t), e))
                    delete G[n.guildId];
                throw t;
            }
            return null;
        });
    }
}
function H(e, t, n) {
    if (null == e || "null" === e || w.has(e) || (0 === t && u.A.hasGuild(e))) return;
    let i = o.A.database();
    if (null == i) return;
    N.verbose(`hydrating guild (guild: ${e}, trace: ${n})`);
    let r = (0, d.Ek)(`ensureGuildLoaded(${e})`, () => c.A.getSync(i, e), "ensureGuildLoaded");
    if (null == r) {
        w.add(e), u.A.restored(e), N.log(`load returned null; early returning (guild: ${e}, database: ${i})`);
        return;
    }
    let [s, l] = r;
    for (let n of ((0, _.Ay)(s),
    0 !== t && (V += 1),
    w.add(e),
    u.A.restored(e),
    a.A.mark("\u2757", `loaded guild channels (guild: ${e})`, l),
    s))
        Object.hasOwn(O, n.id) || Z((0, I.oh)(n));
    N.verbose(`hydration complete (guild: ${e}, channels: ${s.length}, guilds_loaded: ${V})`);
}
function j(e, t, n) {
    if (!Object.hasOwn(O, e) && !Object.hasOwn(L, e) && !Object.hasOwn(D, e) && !Object.hasOwn(U, e) && 1 === t) {
        let i = u.A.getBasicChannel(e);
        i?.guild_id != null && H(i.guild_id, t, n);
    }
}
function W(e) {
    if ((N.fileOnly(`Deleting guild channels for ${e}`), null != R[e])) {
        for (let t of p.default.keys(R[e])) delete O[t];
        delete R[e];
    }
    null != v[e] && delete v[e];
}
function Y(e) {
    return j(e, 0, "getBasicChannel"), O[e] ?? L[e] ?? D[e] ?? U[e] ?? u.A.getBasicChannel(e);
}
function K(e) {
    return j(e, 1, "getChannel"), O[e] ?? L[e] ?? D[e] ?? U[e] ?? k[e];
}
function $(e) {
    e.isPrivate() ? (delete k[e.id], z(e)) : e.isThread() ? q(e) : I.uL.has(e.type) && Z(e);
}
function z(e) {
    if (null != e.recipients.find((e) => (0, E.A)(e))) return !1;
    (L[e.id] = e), e.type === S.rbe.DM && (b[e.getRecipientId()] = e.id), (M += 1);
}
function q(e) {
    let t = O[e.parent_id];
    (D[e.id] = e.merge({ nsfw: t?.nsfw === !0, parentChannelThreadType: t?.type })),
        e.isScheduledForDeletion() && l.h.dispatch({ type: "THREAD_DELETE", channel: e });
}
function Z(e) {
    let { id: t, guild_id: n } = e;
    (O[t] = e),
        (R[n] = R[n] ?? {}),
        (R[n][t] = e),
        (P[n] = (P[n] ?? 0) + 1),
        null != e.linkedLobby ? ((v[n] = v[n] ?? {}), (v[n][t] = e)) : delete v[n]?.[t];
}
function X(e) {
    let { id: t, channels: n, threads: i } = e;
    switch (n.op) {
        case "full_sync":
            for (let e of (N.fileOnly(`ConnectionOpen contained full channels for ${t} #:${n.items.length}`),
            W(t),
            w.add(t),
            u.A.restored(t),
            n.items))
                Z(e);
            break;
        case "update":
            for (let e of ((n.writes.length > 0 || n.deletes.length > 0) && u.A.invalidate(t), n.deletes)) ee(O[e]);
            for (let e of n.writes) Z(e);
    }
    if (null != i) for (let e of i) q(e);
}
function Q(e) {
    if (!I.A_.has(e.channel.type)) return !1;
    let t = K(e.channel.id);
    $((t = null == t ? e.channel : t.merge({ ...e.channel.toJS(), bitrate: e.channel.bitrate ?? t.bitrate })));
}
function J(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        I.A_.has(e.type) && $((0, I.UE)(e));
    });
}
function ee(e) {
    if (null == e) return;
    let t = e.guild_id;
    e.id in L && delete L[e.id],
        e.id in O && delete O[e.id],
        e.id in D && delete D[e.id],
        null != t &&
            (null != R[t] && e.id in R[t] && delete R[t][e.id], null != v[t] && e.id in v[t] && delete v[t][e.id]),
        null == e.guild_id || I.Le.has(e.type)
            ? (0, I.Gw)(e.type) && (M += 1)
            : (P[e.guild_id] = (P[e.guild_id] ?? 0) + 1);
}
function et(e) {
    let { channel: t } = e,
        n = O[t.id] ?? L[t.id] ?? D[t.id];
    if (null == n) return !1;
    ee(n),
        (function (e) {
            if ("basicPermissions" in e || e.type !== S.rbe.DM) return;
            let t = e.getRecipientId();
            b[t] === e.id && delete b[t];
        })(n);
}
function en(e) {
    let { messages: t } = e;
    for (let e of t) null != e.thread && !(e.thread.id in D) && I.A_.has(e.thread.type) && q((0, I.UE)(e.thread));
}
function ei(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n, channels: i } = e;
        t.forEach((e) => {
            e.forEach((e) => {
                er(e.thread);
            });
        }),
            n.forEach(er),
            i.forEach((e) => {
                let t = (0, I.UE)(e),
                    n = null != K(e.id),
                    i = null != k[e.id];
                t.isPrivate() && (!n || i) ? (k[t.id] = t) : n || $(t);
            });
    });
}
function er(e) {
    null != e && !(e.id in D) && I.A_.has(e.type) && q((0, I.UE)(e));
}
function ea() {
    for (let e in ((U = {}), h.A.getFavoriteChannels())) {
        let t = h.A.getCategoryRecord(e);
        null != t && (U[e] = t);
    }
}
class es extends s.Ay.Store {
    static displayName = "ChannelStore";
    initialize() {
        this.waitFor(T.default, u.A, h.A, m.A, g.default), this.syncWith([h.A], ea);
    }
    hasChannel(e) {
        return null != Y(e);
    }
    getBasicChannel(e) {
        if (null != e) return Y(e);
    }
    getChannel(e) {
        if (null != e) return K(e);
    }
    loadAllGuildAndPrivateChannelsFromDisk() {
        for (let e of m.A.getGuildIds()) H(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
        return { ...O, ...L };
    }
    getChannelIds(e) {
        return (H(e, 0, "getChannelIds"), null == e)
            ? p.default.keys(L)
            : p.default.keys(u.A.getGuildBasicChannels(e) ?? R[e] ?? C);
    }
    getMutablePrivateChannels() {
        return L;
    }
    getMutableBasicGuildChannelsForGuild(e) {
        return H(e, 0, "getMutableBasicGuildChannelsForGuild"), u.A.getGuildBasicChannels(e) ?? R[e] ?? C;
    }
    getMutableGuildChannelsForGuild(e) {
        return H(e, 1, "getMutableGuildChannelsForGuild"), R[e] ?? C;
    }
    getSortedLinkedChannelsForGuild(e) {
        return r()
            .values(v[e] ?? C)
            .sort((e, t) => p.default.compare(e.id, t.id));
    }
    getSortedPrivateChannels() {
        return r()(L)
            .values()
            .sort((e, t) => p.default.compare(e.lastMessageId, t.lastMessageId))
            .reverse()
            .value();
    }
    getDMFromUserId(e) {
        if (null != e) return b[e];
    }
    getDMChannelFromUserId(e) {
        if (null != e) return this.getChannel(b[e]);
    }
    getMutableDMsByUserIds() {
        return b;
    }
    getDMUserIds() {
        return p.default.keys(b);
    }
    getPrivateChannelsVersion() {
        return M;
    }
    getGuildChannelsVersion(e) {
        return P[e] ?? 0;
    }
    getAllThreadsForParent(e) {
        return r()
            .values(D)
            .filter((t) => t.parent_id === e);
    }
    getAllThreadsForGuild(e) {
        return r()
            .values(D)
            .filter((t) => t.guild_id === e);
    }
    getInitialOverlayState() {
        return { ...O, ...L, ...D };
    }
    getDebugInfo() {
        return {
            loadedGuildIds: Array.from(w).sort(p.default.compare),
            pendingGuildLoads: Object.keys(G).sort(p.default.compare),
            guildSizes: Object.keys(R)
                .sort(p.default.compare)
                .map((e) => `${e}: ${el(e)}`),
        };
    }
}
function el(e) {
    return null == R[e] ? null : Object.keys(R[e]).length;
}
let eo = new es(l.h, {
    BACKGROUND_SYNC: function (e) {
        let { guilds: t } = e,
            n = R;
        (O = {}),
            (R = {}),
            (P = {}),
            (v = {}),
            t.forEach((e) => {
                if ("unavailable" === e.data_mode)
                    N.fileOnly(`Restoring guild channels b/c unavailable in bg sync, for ${e.id} #:${el(e.id)}`),
                        r().forEach(n[e.id], Z);
                else if ("partial" === e.data_mode) {
                    N.fileOnly(`Restoring guild channels b/c partial in bg sync, for ${e.id} #:${el(e.id)}`),
                        r().forEach(n[e.id], Z);
                    let t = e.partial_updates.deleted_channel_ids ?? [];
                    t.length > 0 && (H(e.id, 1, "handleBackgroundSync"), t.forEach((e) => ee(O[e]))),
                        e.partial_updates.channels?.forEach((t) => Z((0, I.UE)(t, e.id)));
                } else
                    N.fileOnly(`BG sync contained full channels for ${e.id} #:${e.channels.length}`),
                        W(e.id),
                        w.add(e.id),
                        u.A.restored(e.id),
                        e.channels.forEach((t) => Z((0, I.UE)(t, e.id)));
            });
    },
    CACHE_LOADED_LAZY: function (e) {
        for (let [t, n] of ((F = Math.max(F, e.guilds.length)), e.guildChannels))
            for (let e of (N.fileOnly(`Lazy cache contained full guild channels for ${t} #:${n.length}`), w.add(t), n))
                $((0, I.oh)(e));
    },
    CACHE_LOADED: function (e) {
        F = Math.max(F, e.guilds.length);
        let { privateChannels: t, initialGuildChannels: n } = e;
        for (let e of [t, n]) for (let t of e) $((0, _.n2)((0, I.oh)(t)));
        let i = n[0]?.guild_id;
        null != i && (N.fileOnly(`Early cache contained full guild channels for ${i}`), w.add(i));
    },
    CHANNEL_CREATE: function (e) {
        $(e.channel);
    },
    CHANNEL_DELETE: et,
    CHANNEL_RECIPIENT_ADD: function (e) {
        let t = K(e.channelId),
            n = T.default.getId();
        return !!t?.isPrivate() && ($(t.addRecipient(e.user.id, e.nick, n)), !0);
    },
    CHANNEL_RECIPIENT_REMOVE: function (e) {
        let t = K(e.channelId);
        return !!t?.isPrivate() && ($(t.removeRecipient(e.user.id)), !0);
    },
    CHANNEL_UPDATES: function (e) {
        let t = e.channels.some((e) => {
            let t = K(e.id);
            return e.nsfw !== t?.nsfw || e.type !== t?.type;
        });
        for (let t of e.channels) $(t);
        t && Object.values(D).forEach((e) => $(e));
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { lazyPrivateChannels: t } = e;
        null != y && ((L = {}), y.forEach(z)), t.forEach(z);
    },
    CONNECTION_OPEN: function (e) {
        let t = R;
        for (let n of ((b = {}),
        (O = {}),
        (R = {}),
        (v = {}),
        (D = {}),
        (P = {}),
        (k = {}),
        (G = {}),
        (x = Date.now()),
        (y = e.initialPrivateChannels),
        e.initialPrivateChannels.forEach(z),
        e.guilds))
            "partial" === n.dataMode &&
                (r().forEach(t[n.id], Z), N.fileOnly(`Restoring guild channels for ${n.id} #:${el(n.id)}`)),
                X(n);
        ea();
    },
    CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: function (e) {
        let { channelId: t, overwrite: n } = e,
            i = K(t);
        if (null == i) return !1;
        $(i.set("permissionOverwrites", { ...i.permissionOverwrites, [n.id]: n }));
    },
    CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: function (e) {
        let { channelId: t, overwriteId: n } = e,
            i = K(t);
        if (null == i) return !1;
        let r = { ...i.permissionOverwrites };
        delete r[n], $(i.set("permissionOverwrites", r));
    },
    GUILD_CREATE: function (e) {
        X(e.guild);
    },
    GUILD_DELETE: function (e) {
        N.fileOnly(`GuildDelete of ${e.guild.id}`), W(e.guild.id), w.delete(e.guild.id), u.A.invalidate(e.guild.id);
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: J,
    LOAD_CHANNELS: function (e) {
        for (let { guildId: t, channels: n } of e.channels)
            for (let e of (N.fileOnly(`Lazy loaded guild channels for ${t}`),
            (0, _.Ay)(n),
            w.add(t),
            u.A.restored(t),
            n))
                Object.hasOwn(O, e.id) || Z((0, I.oh)(e));
        return !1;
    },
    LOAD_MESSAGES_AROUND_SUCCESS: en,
    LOAD_MESSAGES_SUCCESS: en,
    LOAD_THREADS_SUCCESS: J,
    LOGOUT: function () {
        N.fileOnly("initializeClear()"),
            (b = {}),
            (O = {}),
            (R = {}),
            (P = {}),
            (v = {}),
            (L = {}),
            (k = {}),
            (D = {}),
            (w = new Set()),
            (G = {}),
            (x = Date.now());
    },
    OVERLAY_INITIALIZE: function (e) {
        for (let t of e.channels) $((0, _.n2)((0, I.oh)(t)));
    },
    SEARCH_MESSAGES_SUCCESS: ei,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: ei,
    THREAD_CREATE: Q,
    THREAD_DELETE: et,
    THREAD_LIST_SYNC: function (e) {
        let { threads: t } = e;
        t.forEach((e) => {
            I.A_.has(e.type) && $(e);
        });
    },
    THREAD_UPDATE: Q,
});
