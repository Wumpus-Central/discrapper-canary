"use strict";
n.d(t, { A: () => el, D: () => B }), n(205816);
var i = n(735438),
    r = n.n(i),
    s = n(61090),
    a = n(17928),
    o = n(228366),
    l = n(723176),
    d = n(154049),
    _ = n(531743),
    u = n(453001),
    c = n(736400),
    E = n(311016),
    h = n(626584),
    m = n(181079),
    f = n(95701),
    g = n(403362),
    p = n(935208),
    A = n(495544),
    I = n(71393),
    T = n(287809),
    S = n(652215);
let N = new h.A("ChannelStore"),
    C = {},
    R = {},
    O = {},
    y = {},
    v = null,
    D = {},
    L = {},
    b = {},
    w = 0,
    P = {},
    k = {},
    M = new Set(),
    U = {},
    x = 0,
    G = {},
    V = 0,
    F = 0;
class B {
    static loadAllMissingChannels() {
        let e = I.A.getGuildIds().filter((e) => !M.has(e));
        return this.loadGuildIds(e);
    }
    static loadGuildFromChannelId(e) {
        return null == e ? null : B.loadGuildIds([Y(e)?.guild_id]);
    }
    static loadGuildIds(e) {
        let t = e.filter(g.Vq);
        if (0 === t.length) return null;
        let n = l.A.database();
        if (null == n || !t.some((e) => !M.has(e))) return null;
        let i = x;
        return (0, d.ES)("loadChannels", async () => {
            let e = t
                    .map((e) => {
                        if (M.has(e)) return null;
                        if (null != U[e]) return N.fileOnly(`Skipping loading ${e} because a load is pending`), null;
                        let t = _.A.getAsync(n, e).then(
                            (t) => (
                                N.fileOnly(`Lazy loaded channels for ${e} #:${t.length}`), { guildId: e, channels: t }
                            ),
                        );
                        return (U[e] = t), { guildId: e, promise: t };
                    })
                    .filter(g.Vq),
                r = e.map((e) => e.promise);
            try {
                let t = await Promise.all(r);
                if (x !== i)
                    return N.fileOnly("lastResetTime has changed, skipping loads for " + e.map((e) => e.guildId)), null;
                let n = t.filter((e) => !M.has(e.guildId));
                await o.h.dispatch({ type: "LOAD_CHANNELS", channels: n });
            } catch (t) {
                for (let n of (N.error("Failed to load channels from disk for " + e.map((e) => e.guildId), t), e))
                    delete U[n.guildId];
                throw t;
            }
            return null;
        });
    }
}
function H(e, t, n) {
    if (null == e || "null" === e || M.has(e) || (0 === t && u.A.hasGuild(e))) return;
    let i = l.A.database();
    if (null == i) return;
    N.verbose(`hydrating guild (guild: ${e}, trace: ${n})`);
    let r = (0, d.Ek)(`ensureGuildLoaded(${e})`, () => _.A.getSync(i, e), "ensureGuildLoaded");
    if (null == r) {
        M.add(e), u.A.restored(e), N.log(`load returned null; early returning (guild: ${e}, database: ${i})`);
        return;
    }
    let [a, o] = r;
    for (let n of ((0, c.Ay)(a),
    0 !== t && (F += 1),
    M.add(e),
    u.A.restored(e),
    s.A.mark("❗", `loaded guild channels (guild: ${e})`, o),
    a))
        Object.hasOwn(R, n.id) || X((0, f.oh)(n));
    N.verbose(`hydration complete (guild: ${e}, channels: ${a.length}, guilds_loaded: ${F})`);
}
function j(e, t, n) {
    if (!Object.hasOwn(R, e) && !Object.hasOwn(y, e) && !Object.hasOwn(D, e) && !Object.hasOwn(k, e) && 1 === t) {
        let i = u.A.getBasicChannel(e);
        i?.guild_id != null && H(i.guild_id, t, n);
    }
}
function W(e) {
    if ((N.fileOnly(`Deleting guild channels for ${e}`), null != O[e])) {
        for (let t of p.default.keys(O[e])) delete R[t];
        delete O[e];
    }
    null != L[e] && delete L[e];
}
function Y(e) {
    return j(e, 0, "getBasicChannel"), R[e] ?? y[e] ?? D[e] ?? k[e] ?? u.A.getBasicChannel(e);
}
function K(e) {
    return j(e, 1, "getChannel"), R[e] ?? y[e] ?? D[e] ?? k[e] ?? G[e];
}
function z(e) {
    e.isPrivate() ? (delete G[e.id], $(e)) : e.isThread() ? q(e) : f.uL.has(e.type) && X(e);
}
function $(e) {
    if (null != e.recipients.find((e) => (0, E.A)(e))) return !1;
    (y[e.id] = e), e.type === S.rbe.DM && (b[e.getRecipientId()] = e.id), (w += 1);
}
function q(e) {
    let t = R[e.parent_id];
    (D[e.id] = e.merge({ nsfw: t?.nsfw === !0, parentChannelThreadType: t?.type })),
        e.isScheduledForDeletion() && o.h.dispatch({ type: "THREAD_DELETE", channel: e });
}
function X(e) {
    let { id: t, guild_id: n } = e;
    (R[t] = e),
        (O[n] = O[n] ?? {}),
        (O[n][t] = e),
        (P[n] = (P[n] ?? 0) + 1),
        null != e.linkedLobby ? ((L[n] = L[n] ?? {}), (L[n][t] = e)) : delete L[n]?.[t];
}
function Z(e) {
    let { id: t, channels: n, threads: i } = e;
    switch (n.op) {
        case "full_sync":
            for (let e of (N.fileOnly(`ConnectionOpen contained full channels for ${t} #:${n.items.length}`),
            W(t),
            M.add(t),
            u.A.restored(t),
            n.items))
                X(e);
            break;
        case "update":
            for (let e of ((n.writes.length > 0 || n.deletes.length > 0) && u.A.invalidate(t), n.deletes)) ee(R[e]);
            for (let e of n.writes) X(e);
    }
    if (null != i) for (let e of i) q(e);
}
function Q(e) {
    if (!f.A_.has(e.channel.type)) return !1;
    let t = K(e.channel.id);
    z((t = null == t ? e.channel : t.merge({ ...e.channel.toJS(), bitrate: e.channel.bitrate ?? t.bitrate })));
}
function J(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        f.A_.has(e.type) && z((0, f.UE)(e));
    });
}
function ee(e) {
    if (null == e) return;
    let t = e.guild_id;
    e.id in y && delete y[e.id],
        e.id in R && delete R[e.id],
        e.id in D && delete D[e.id],
        null != t &&
            (null != O[t] && e.id in O[t] && delete O[t][e.id], null != L[t] && e.id in L[t] && delete L[t][e.id]),
        null == e.guild_id || f.Le.has(e.type)
            ? (0, f.Gw)(e.type) && (w += 1)
            : (P[e.guild_id] = (P[e.guild_id] ?? 0) + 1);
}
function et(e) {
    let { channel: t } = e,
        n = R[t.id] ?? y[t.id] ?? D[t.id];
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
    for (let e of t) null != e.thread && !(e.thread.id in D) && f.A_.has(e.thread.type) && q((0, f.UE)(e.thread));
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
                let t = (0, f.UE)(e),
                    n = null != K(e.id),
                    i = null != G[e.id];
                t.isPrivate() && (!n || i) ? (G[t.id] = t) : n || z(t);
            });
    });
}
function er(e) {
    null != e && !(e.id in D) && f.A_.has(e.type) && q((0, f.UE)(e));
}
function es() {
    for (let e in ((k = {}), m.A.getFavoriteChannels())) {
        let t = m.A.getCategoryRecord(e);
        null != t && (k[e] = t);
    }
}
class ea extends a.Ay.Store {
    static displayName = "ChannelStore";
    initialize() {
        this.waitFor(A.default, u.A, m.A, I.A, T.default), this.syncWith([m.A], es);
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
        for (let e of I.A.getGuildIds()) H(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
        return { ...R, ...y };
    }
    getChannelIds(e) {
        return (H(e, 0, "getChannelIds"), null == e)
            ? p.default.keys(y)
            : p.default.keys(u.A.getGuildBasicChannels(e) ?? O[e] ?? C);
    }
    getMutablePrivateChannels() {
        return y;
    }
    getMutableBasicGuildChannelsForGuild(e) {
        return H(e, 0, "getMutableBasicGuildChannelsForGuild"), u.A.getGuildBasicChannels(e) ?? O[e] ?? C;
    }
    getMutableGuildChannelsForGuild(e) {
        return H(e, 1, "getMutableGuildChannelsForGuild"), O[e] ?? C;
    }
    getSortedLinkedChannelsForGuild(e) {
        return r()
            .values(L[e] ?? C)
            .sort((e, t) => p.default.compare(e.id, t.id));
    }
    getSortedPrivateChannels() {
        return r()(y)
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
        return w;
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
        return { ...R, ...y, ...D };
    }
    getDebugInfo() {
        return {
            loadedGuildIds: Array.from(M).sort(p.default.compare),
            pendingGuildLoads: Object.keys(U).sort(p.default.compare),
            guildSizes: Object.keys(O)
                .sort(p.default.compare)
                .map((e) => `${e}: ${eo(e)}`),
        };
    }
}
function eo(e) {
    return null == O[e] ? null : Object.keys(O[e]).length;
}
let el = new ea(o.h, {
    BACKGROUND_SYNC: function (e) {
        let { guilds: t } = e,
            n = O;
        (R = {}),
            (O = {}),
            (P = {}),
            (L = {}),
            t.forEach((e) => {
                if ("unavailable" === e.data_mode)
                    N.fileOnly(`Restoring guild channels b/c unavailable in bg sync, for ${e.id} #:${eo(e.id)}`),
                        r().forEach(n[e.id], X);
                else if ("partial" === e.data_mode) {
                    N.fileOnly(`Restoring guild channels b/c partial in bg sync, for ${e.id} #:${eo(e.id)}`),
                        r().forEach(n[e.id], X);
                    let t = e.partial_updates.deleted_channel_ids ?? [];
                    t.length > 0 && (H(e.id, 1, "handleBackgroundSync"), t.forEach((e) => ee(R[e]))),
                        e.partial_updates.channels?.forEach((t) => X((0, f.UE)(t, e.id)));
                } else
                    N.fileOnly(`BG sync contained full channels for ${e.id} #:${e.channels.length}`),
                        W(e.id),
                        M.add(e.id),
                        u.A.restored(e.id),
                        e.channels.forEach((t) => X((0, f.UE)(t, e.id)));
            });
    },
    CACHE_LOADED_LAZY: function (e) {
        for (let [t, n] of ((V = Math.max(V, e.guilds.length)), e.guildChannels))
            for (let e of (N.fileOnly(`Lazy cache contained full guild channels for ${t} #:${n.length}`), M.add(t), n))
                z((0, f.oh)(e));
    },
    CACHE_LOADED: function (e) {
        V = Math.max(V, e.guilds.length);
        let { privateChannels: t, initialGuildChannels: n } = e;
        for (let e of [t, n]) for (let t of e) z((0, c.n2)((0, f.oh)(t)));
        let i = n[0]?.guild_id;
        null != i && (N.fileOnly(`Early cache contained full guild channels for ${i}`), M.add(i));
    },
    CHANNEL_CREATE: function (e) {
        z(e.channel);
    },
    CHANNEL_DELETE: et,
    CHANNEL_RECIPIENT_ADD: function (e) {
        let t = K(e.channelId),
            n = A.default.getId();
        return !!t?.isPrivate() && (z(t.addRecipient(e.user.id, e.nick, n)), !0);
    },
    CHANNEL_RECIPIENT_REMOVE: function (e) {
        let t = K(e.channelId);
        return !!t?.isPrivate() && (z(t.removeRecipient(e.user.id)), !0);
    },
    CHANNEL_UPDATES: function (e) {
        let t = e.channels.some((e) => {
            let t = K(e.id);
            return e.nsfw !== t?.nsfw || e.type !== t?.type;
        });
        for (let t of e.channels) z(t);
        t && Object.values(D).forEach((e) => z(e));
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { lazyPrivateChannels: t } = e;
        null != v && ((y = {}), v.forEach($)), t.forEach($);
    },
    CONNECTION_OPEN: function (e) {
        let t = O;
        for (let n of ((b = {}),
        (R = {}),
        (O = {}),
        (L = {}),
        (D = {}),
        (P = {}),
        (G = {}),
        (U = {}),
        (x = Date.now()),
        (v = e.initialPrivateChannels),
        e.initialPrivateChannels.forEach($),
        e.guilds))
            "partial" === n.dataMode &&
                (r().forEach(t[n.id], X), N.fileOnly(`Restoring guild channels for ${n.id} #:${eo(n.id)}`)),
                Z(n);
        es();
    },
    CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: function (e) {
        let { channelId: t, overwrite: n } = e,
            i = K(t);
        if (null == i) return !1;
        z(i.set("permissionOverwrites", { ...i.permissionOverwrites, [n.id]: n }));
    },
    CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: function (e) {
        let { channelId: t, overwriteId: n } = e,
            i = K(t);
        if (null == i) return !1;
        let r = { ...i.permissionOverwrites };
        delete r[n], z(i.set("permissionOverwrites", r));
    },
    GUILD_CREATE: function (e) {
        Z(e.guild);
    },
    GUILD_DELETE: function (e) {
        N.fileOnly(`GuildDelete of ${e.guild.id}`), W(e.guild.id), M.delete(e.guild.id), u.A.invalidate(e.guild.id);
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: J,
    LOAD_CHANNELS: function (e) {
        for (let { guildId: t, channels: n } of e.channels)
            for (let e of (N.fileOnly(`Lazy loaded guild channels for ${t}`),
            (0, c.Ay)(n),
            M.add(t),
            u.A.restored(t),
            n))
                Object.hasOwn(R, e.id) || X((0, f.oh)(e));
        return !1;
    },
    LOAD_MESSAGES_AROUND_SUCCESS: en,
    LOAD_MESSAGES_SUCCESS: en,
    LOAD_THREADS_SUCCESS: J,
    LOGOUT: function () {
        N.fileOnly("initializeClear()"),
            (b = {}),
            (R = {}),
            (O = {}),
            (P = {}),
            (L = {}),
            (y = {}),
            (G = {}),
            (D = {}),
            (M = new Set()),
            (U = {}),
            (x = Date.now());
    },
    OVERLAY_INITIALIZE: function (e) {
        for (let t of e.channels) z((0, c.n2)((0, f.oh)(t)));
    },
    SEARCH_MESSAGES_SUCCESS: ei,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: ei,
    THREAD_CREATE: Q,
    THREAD_DELETE: et,
    THREAD_LIST_SYNC: function (e) {
        let { threads: t } = e;
        t.forEach((e) => {
            f.A_.has(e.type) && z(e);
        });
    },
    THREAD_UPDATE: Q,
});
