"use strict";
n.d(t, { A: () => el, D: () => B }), n(205816);
var i = n(735438),
    r = n.n(i),
    s = n(61090),
    a = n(17928),
    o = n(228366),
    l = n(723176),
    u = n(154049),
    c = n(531743),
    d = n(453001),
    _ = n(736400),
    f = n(311016),
    h = n(626584),
    p = n(181079),
    E = n(95701),
    m = n(403362),
    g = n(935208),
    A = n(495544),
    I = n(71393),
    T = n(287809),
    S = n(652215);
let N = new h.A("ChannelStore"),
    y = {},
    C = {},
    v = {},
    O = {},
    R = null,
    b = {},
    D = {},
    L = {},
    w = 0,
    M = {},
    P = {},
    x = new Set(),
    U = {},
    k = 0,
    G = {},
    F = 0,
    V = 0;
class B {
    static loadAllMissingChannels() {
        let e = I.A.getGuildIds().filter((e) => !x.has(e));
        return this.loadGuildIds(e);
    }
    static loadGuildFromChannelId(e) {
        return null == e ? null : B.loadGuildIds([W(e)?.guild_id]);
    }
    static loadGuildIds(e) {
        let t = e.filter(m.Vq);
        if (0 === t.length) return null;
        let n = l.A.database();
        if (null == n || !t.some((e) => !x.has(e))) return null;
        let i = k;
        return (0, u.ES)("loadChannels", async () => {
            let e = t
                    .map((e) => {
                        if (x.has(e)) return null;
                        if (null != U[e]) return N.fileOnly(`Skipping loading ${e} because a load is pending`), null;
                        let t = c.A.getAsync(n, e).then(
                            (t) => (
                                N.fileOnly(`Lazy loaded channels for ${e} #:${t.length}`), { guildId: e, channels: t }
                            ),
                        );
                        return (U[e] = t), { guildId: e, promise: t };
                    })
                    .filter(m.Vq),
                r = e.map((e) => e.promise);
            try {
                let t = await Promise.all(r);
                if (k !== i)
                    return N.fileOnly("lastResetTime has changed, skipping loads for " + e.map((e) => e.guildId)), null;
                let n = t.filter((e) => !x.has(e.guildId));
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
    if (null == e || "null" === e || x.has(e) || (0 === t && d.A.hasGuild(e))) return;
    let i = l.A.database();
    if (null == i) return;
    N.verbose(`hydrating guild (guild: ${e}, trace: ${n})`);
    let r = (0, u.Ek)(`ensureGuildLoaded(${e})`, () => c.A.getSync(i, e), "ensureGuildLoaded");
    if (null == r) {
        x.add(e), d.A.restored(e), N.log(`load returned null; early returning (guild: ${e}, database: ${i})`);
        return;
    }
    let [a, o] = r;
    for (let n of ((0, _.Ay)(a),
    0 !== t && (V += 1),
    x.add(e),
    d.A.restored(e),
    s.A.mark("\u2757", `loaded guild channels (guild: ${e})`, o),
    a))
        Object.hasOwn(C, n.id) || Z((0, E.oh)(n));
    N.verbose(`hydration complete (guild: ${e}, channels: ${a.length}, guilds_loaded: ${V})`);
}
function j(e, t, n) {
    if (!Object.hasOwn(C, e) && !Object.hasOwn(O, e) && !Object.hasOwn(b, e) && !Object.hasOwn(P, e) && 1 === t) {
        let i = d.A.getBasicChannel(e);
        i?.guild_id != null && H(i.guild_id, t, n);
    }
}
function Y(e) {
    if ((N.fileOnly(`Deleting guild channels for ${e}`), null != v[e])) {
        for (let t of g.default.keys(v[e])) delete C[t];
        delete v[e];
    }
    null != D[e] && delete D[e];
}
function W(e) {
    return j(e, 0, "getBasicChannel"), C[e] ?? O[e] ?? b[e] ?? P[e] ?? d.A.getBasicChannel(e);
}
function K(e) {
    return j(e, 1, "getChannel"), C[e] ?? O[e] ?? b[e] ?? P[e] ?? G[e];
}
function z(e) {
    e.isPrivate() ? (delete G[e.id], $(e)) : e.isThread() ? q(e) : E.uL.has(e.type) && Z(e);
}
function $(e) {
    if (null != e.recipients.find((e) => (0, f.A)(e))) return !1;
    (O[e.id] = e), e.type === S.rbe.DM && (L[e.getRecipientId()] = e.id), (w += 1);
}
function q(e) {
    let t = C[e.parent_id];
    (b[e.id] = e.merge({ nsfw: t?.nsfw === !0, parentChannelThreadType: t?.type })),
        e.isScheduledForDeletion() && o.h.dispatch({ type: "THREAD_DELETE", channel: e });
}
function Z(e) {
    let { id: t, guild_id: n } = e;
    (C[t] = e),
        (v[n] = v[n] ?? {}),
        (v[n][t] = e),
        (M[n] = (M[n] ?? 0) + 1),
        null != e.linkedLobby ? ((D[n] = D[n] ?? {}), (D[n][t] = e)) : delete D[n]?.[t];
}
function X(e) {
    let { id: t, channels: n, threads: i } = e;
    switch (n.op) {
        case "full_sync":
            for (let e of (N.fileOnly(`ConnectionOpen contained full channels for ${t} #:${n.items.length}`),
            Y(t),
            x.add(t),
            d.A.restored(t),
            n.items))
                Z(e);
            break;
        case "update":
            for (let e of ((n.writes.length > 0 || n.deletes.length > 0) && d.A.invalidate(t), n.deletes)) ee(C[e]);
            for (let e of n.writes) Z(e);
    }
    if (null != i) for (let e of i) q(e);
}
function Q(e) {
    if (!E.A_.has(e.channel.type)) return !1;
    let t = K(e.channel.id);
    z((t = null == t ? e.channel : t.merge({ ...e.channel.toJS(), bitrate: e.channel.bitrate ?? t.bitrate })));
}
function J(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        E.A_.has(e.type) && z((0, E.UE)(e));
    });
}
function ee(e) {
    if (null == e) return;
    let t = e.guild_id;
    e.id in O && delete O[e.id],
        e.id in C && delete C[e.id],
        e.id in b && delete b[e.id],
        null != t &&
            (null != v[t] && e.id in v[t] && delete v[t][e.id], null != D[t] && e.id in D[t] && delete D[t][e.id]),
        null == e.guild_id || E.Le.has(e.type)
            ? (0, E.Gw)(e.type) && (w += 1)
            : (M[e.guild_id] = (M[e.guild_id] ?? 0) + 1);
}
function et(e) {
    let { channel: t } = e,
        n = C[t.id] ?? O[t.id] ?? b[t.id];
    if (null == n) return !1;
    ee(n),
        (function (e) {
            if ("basicPermissions" in e || e.type !== S.rbe.DM) return;
            let t = e.getRecipientId();
            L[t] === e.id && delete L[t];
        })(n);
}
function en(e) {
    let { messages: t } = e;
    for (let e of t) null != e.thread && !(e.thread.id in b) && E.A_.has(e.thread.type) && q((0, E.UE)(e.thread));
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
                let t = (0, E.UE)(e),
                    n = null != K(e.id),
                    i = null != G[e.id];
                t.isPrivate() && (!n || i) ? (G[t.id] = t) : n || z(t);
            });
    });
}
function er(e) {
    null != e && !(e.id in b) && E.A_.has(e.type) && q((0, E.UE)(e));
}
function es() {
    for (let e in ((P = {}), p.A.getFavoriteChannels())) {
        let t = p.A.getCategoryRecord(e);
        null != t && (P[e] = t);
    }
}
class ea extends a.Ay.Store {
    static displayName = "ChannelStore";
    initialize() {
        this.waitFor(A.default, d.A, p.A, I.A, T.default), this.syncWith([p.A], es);
    }
    hasChannel(e) {
        return null != W(e);
    }
    getBasicChannel(e) {
        if (null != e) return W(e);
    }
    getChannel(e) {
        if (null != e) return K(e);
    }
    loadAllGuildAndPrivateChannelsFromDisk() {
        for (let e of I.A.getGuildIds()) H(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
        return { ...C, ...O };
    }
    getChannelIds(e) {
        return (H(e, 0, "getChannelIds"), null == e)
            ? g.default.keys(O)
            : g.default.keys(d.A.getGuildBasicChannels(e) ?? v[e] ?? y);
    }
    getMutablePrivateChannels() {
        return O;
    }
    getMutableBasicGuildChannelsForGuild(e) {
        return H(e, 0, "getMutableBasicGuildChannelsForGuild"), d.A.getGuildBasicChannels(e) ?? v[e] ?? y;
    }
    getMutableGuildChannelsForGuild(e) {
        return H(e, 1, "getMutableGuildChannelsForGuild"), v[e] ?? y;
    }
    getSortedLinkedChannelsForGuild(e) {
        return r()
            .values(D[e] ?? y)
            .sort((e, t) => g.default.compare(e.id, t.id));
    }
    getSortedPrivateChannels() {
        return r()(O)
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
        return r()
            .values(b)
            .filter((t) => t.parent_id === e);
    }
    getAllThreadsForGuild(e) {
        return r()
            .values(b)
            .filter((t) => t.guild_id === e);
    }
    getInitialOverlayState() {
        return { ...C, ...O, ...b };
    }
    getDebugInfo() {
        return {
            loadedGuildIds: Array.from(x).sort(g.default.compare),
            pendingGuildLoads: Object.keys(U).sort(g.default.compare),
            guildSizes: Object.keys(v)
                .sort(g.default.compare)
                .map((e) => `${e}: ${eo(e)}`),
        };
    }
}
function eo(e) {
    return null == v[e] ? null : Object.keys(v[e]).length;
}
let el = new ea(o.h, {
    BACKGROUND_SYNC: function (e) {
        let { guilds: t } = e,
            n = v;
        (C = {}),
            (v = {}),
            (M = {}),
            (D = {}),
            t.forEach((e) => {
                if ("unavailable" === e.data_mode)
                    N.fileOnly(`Restoring guild channels b/c unavailable in bg sync, for ${e.id} #:${eo(e.id)}`),
                        r().forEach(n[e.id], Z);
                else if ("partial" === e.data_mode) {
                    N.fileOnly(`Restoring guild channels b/c partial in bg sync, for ${e.id} #:${eo(e.id)}`),
                        r().forEach(n[e.id], Z);
                    let t = e.partial_updates.deleted_channel_ids ?? [];
                    t.length > 0 && (H(e.id, 1, "handleBackgroundSync"), t.forEach((e) => ee(C[e]))),
                        e.partial_updates.channels?.forEach((t) => Z((0, E.UE)(t, e.id)));
                } else
                    N.fileOnly(`BG sync contained full channels for ${e.id} #:${e.channels.length}`),
                        Y(e.id),
                        x.add(e.id),
                        d.A.restored(e.id),
                        e.channels.forEach((t) => Z((0, E.UE)(t, e.id)));
            });
    },
    CACHE_LOADED_LAZY: function (e) {
        for (let [t, n] of ((F = Math.max(F, e.guilds.length)), e.guildChannels))
            for (let e of (N.fileOnly(`Lazy cache contained full guild channels for ${t} #:${n.length}`), x.add(t), n))
                z((0, E.oh)(e));
    },
    CACHE_LOADED: function (e) {
        F = Math.max(F, e.guilds.length);
        let { privateChannels: t, initialGuildChannels: n } = e;
        for (let e of [t, n]) for (let t of e) z((0, _.n2)((0, E.oh)(t)));
        let i = n[0]?.guild_id;
        null != i && (N.fileOnly(`Early cache contained full guild channels for ${i}`), x.add(i));
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
        t && Object.values(b).forEach((e) => z(e));
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { lazyPrivateChannels: t } = e;
        null != R && ((O = {}), R.forEach($)), t.forEach($);
    },
    CONNECTION_OPEN: function (e) {
        let t = v;
        for (let n of ((L = {}),
        (C = {}),
        (v = {}),
        (D = {}),
        (b = {}),
        (M = {}),
        (G = {}),
        (U = {}),
        (k = Date.now()),
        (R = e.initialPrivateChannels),
        e.initialPrivateChannels.forEach($),
        e.guilds))
            "partial" === n.dataMode &&
                (r().forEach(t[n.id], Z), N.fileOnly(`Restoring guild channels for ${n.id} #:${eo(n.id)}`)),
                X(n);
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
        X(e.guild);
    },
    GUILD_DELETE: function (e) {
        N.fileOnly(`GuildDelete of ${e.guild.id}`), Y(e.guild.id), x.delete(e.guild.id), d.A.invalidate(e.guild.id);
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: J,
    LOAD_CHANNELS: function (e) {
        for (let { guildId: t, channels: n } of e.channels)
            for (let e of (N.fileOnly(`Lazy loaded guild channels for ${t}`),
            (0, _.Ay)(n),
            x.add(t),
            d.A.restored(t),
            n))
                Object.hasOwn(C, e.id) || Z((0, E.oh)(e));
        return !1;
    },
    LOAD_MESSAGES_AROUND_SUCCESS: en,
    LOAD_MESSAGES_SUCCESS: en,
    LOAD_THREADS_SUCCESS: J,
    LOGOUT: function () {
        N.fileOnly("initializeClear()"),
            (L = {}),
            (C = {}),
            (v = {}),
            (M = {}),
            (D = {}),
            (O = {}),
            (G = {}),
            (b = {}),
            (x = new Set()),
            (U = {}),
            (k = Date.now());
    },
    OVERLAY_INITIALIZE: function (e) {
        for (let t of e.channels) z((0, _.n2)((0, E.oh)(t)));
    },
    SEARCH_MESSAGES_SUCCESS: ei,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: ei,
    THREAD_CREATE: Q,
    THREAD_DELETE: et,
    THREAD_LIST_SYNC: function (e) {
        let { threads: t } = e;
        t.forEach((e) => {
            E.A_.has(e.type) && z(e);
        });
    },
    THREAD_UPDATE: Q,
});
