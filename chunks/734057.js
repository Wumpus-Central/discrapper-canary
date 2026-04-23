"use strict";
n.d(t, { A: () => el, D: () => B }), n(205816);
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
    E = n(95701),
    m = n(403362),
    g = n(661191),
    A = n(961350),
    I = n(71393),
    T = n(287809),
    S = n(652215);
let y = new p.A("ChannelStore"),
    N = {},
    v = {},
    C = {},
    O = {},
    R = null,
    b = {},
    D = {},
    L = {},
    w = 0,
    M = {},
    P = {},
    x = new Set(),
    k = {},
    U = 0,
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
        let r = U;
        return (0, u.ES)("loadChannels", async () => {
            let e = t
                    .map((e) => {
                        if (x.has(e)) return null;
                        if (null != k[e]) return y.fileOnly(`Skipping loading ${e} because a load is pending`), null;
                        let t = c.A.getAsync(n, e).then(
                            (t) => (
                                y.fileOnly(`Lazy loaded channels for ${e} #:${t.length}`), { guildId: e, channels: t }
                            ),
                        );
                        return (k[e] = t), { guildId: e, promise: t };
                    })
                    .filter(m.Vq),
                i = e.map((e) => e.promise);
            try {
                let t = await Promise.all(i);
                if (U !== r)
                    return y.fileOnly("lastResetTime has changed, skipping loads for " + e.map((e) => e.guildId)), null;
                let n = t.filter((e) => !x.has(e.guildId));
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
function H(e, t, n) {
    if (null == e || "null" === e || x.has(e) || (0 === t && d.A.hasGuild(e))) return;
    let r = l.A.database();
    if (null == r) return;
    y.verbose(`hydrating guild (guild: ${e}, trace: ${n})`);
    let i = (0, u.Ek)(`ensureGuildLoaded(${e})`, () => c.A.getSync(r, e), "ensureGuildLoaded");
    if (null == i) {
        x.add(e), d.A.restored(e), y.log(`load returned null; early returning (guild: ${e}, database: ${r})`);
        return;
    }
    let [a, o] = i;
    for (let n of ((0, _.Ay)(a),
    0 !== t && (V += 1),
    x.add(e),
    d.A.restored(e),
    s.A.mark("❗", `loaded guild channels (guild: ${e})`, o),
    a))
        Object.hasOwn(v, n.id) || X((0, E.oh)(n));
    y.verbose(`hydration complete (guild: ${e}, channels: ${a.length}, guilds_loaded: ${V})`);
}
function j(e, t, n) {
    if (!Object.hasOwn(v, e) && !Object.hasOwn(O, e) && !Object.hasOwn(b, e) && !Object.hasOwn(P, e) && 1 === t) {
        let r = d.A.getBasicChannel(e);
        r?.guild_id != null && H(r.guild_id, t, n);
    }
}
function Y(e) {
    if ((y.fileOnly(`Deleting guild channels for ${e}`), null != C[e])) {
        for (let t of g.default.keys(C[e])) delete v[t];
        delete C[e];
    }
    null != D[e] && delete D[e];
}
function W(e) {
    return j(e, 0, "getBasicChannel"), v[e] ?? O[e] ?? b[e] ?? P[e] ?? d.A.getBasicChannel(e);
}
function K(e) {
    return j(e, 1, "getChannel"), v[e] ?? O[e] ?? b[e] ?? P[e] ?? G[e];
}
function $(e) {
    e.isPrivate() ? (delete G[e.id], z(e)) : e.isThread() ? q(e) : E.uL.has(e.type) && X(e);
}
function z(e) {
    if (null != e.recipients.find((e) => (0, f.A)(e))) return !1;
    (O[e.id] = e), e.type === S.rbe.DM && (L[e.getRecipientId()] = e.id), (w += 1);
}
function q(e) {
    let t = v[e.parent_id];
    (b[e.id] = e.merge({ nsfw: t?.nsfw === !0, parentChannelThreadType: t?.type })),
        e.isScheduledForDeletion() && o.h.dispatch({ type: "THREAD_DELETE", channel: e });
}
function X(e) {
    let { id: t, guild_id: n } = e;
    (v[t] = e),
        (C[n] = C[n] ?? {}),
        (C[n][t] = e),
        (M[n] = (M[n] ?? 0) + 1),
        null != e.linkedLobby ? ((D[n] = D[n] ?? {}), (D[n][t] = e)) : delete D[n]?.[t];
}
function Q(e) {
    let { id: t, channels: n, threads: r } = e;
    switch (n.op) {
        case "full_sync":
            for (let e of (y.fileOnly(`ConnectionOpen contained full channels for ${t} #:${n.items.length}`),
            Y(t),
            x.add(t),
            d.A.restored(t),
            n.items))
                X(e);
            break;
        case "update":
            for (let e of ((n.writes.length > 0 || n.deletes.length > 0) && d.A.invalidate(t), n.deletes)) ee(v[e]);
            for (let e of n.writes) X(e);
    }
    if (null != r) for (let e of r) q(e);
}
function Z(e) {
    if (!E.A_.has(e.channel.type)) return !1;
    let t = K(e.channel.id);
    $((t = null == t ? e.channel : t.merge({ ...e.channel.toJS(), bitrate: e.channel.bitrate ?? t.bitrate })));
}
function J(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        E.A_.has(e.type) && $((0, E.UE)(e));
    });
}
function ee(e) {
    if (null == e) return;
    let t = e.guild_id;
    e.id in O && delete O[e.id],
        e.id in v && delete v[e.id],
        e.id in b && delete b[e.id],
        null != t &&
            (null != C[t] && e.id in C[t] && delete C[t][e.id], null != D[t] && e.id in D[t] && delete D[t][e.id]),
        null == e.guild_id || E.Le.has(e.type)
            ? (0, E.Gw)(e.type) && (w += 1)
            : (M[e.guild_id] = (M[e.guild_id] ?? 0) + 1);
}
function et(e) {
    let { channel: t } = e,
        n = v[t.id] ?? O[t.id] ?? b[t.id];
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
function er(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n, channels: r } = e;
        t.forEach((e) => {
            e.forEach((e) => {
                ei(e.thread);
            });
        }),
            n.forEach(ei),
            r.forEach((e) => {
                let t = (0, E.UE)(e),
                    n = null != K(e.id),
                    r = null != G[e.id];
                t.isPrivate() && (!n || r) ? (G[t.id] = t) : n || $(t);
            });
    });
}
function ei(e) {
    null != e && !(e.id in b) && E.A_.has(e.type) && q((0, E.UE)(e));
}
function es() {
    for (let e in ((P = {}), h.A.getFavoriteChannels())) {
        let t = h.A.getCategoryRecord(e);
        null != t && (P[e] = t);
    }
}
class ea extends a.Ay.Store {
    static displayName = "ChannelStore";
    initialize() {
        this.waitFor(A.default, d.A, h.A, I.A, T.default), this.syncWith([h.A], es);
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
        return { ...v, ...O };
    }
    getChannelIds(e) {
        return (H(e, 0, "getChannelIds"), null == e)
            ? g.default.keys(O)
            : g.default.keys(d.A.getGuildBasicChannels(e) ?? C[e] ?? N);
    }
    getMutablePrivateChannels() {
        return O;
    }
    getMutableBasicGuildChannelsForGuild(e) {
        return H(e, 0, "getMutableBasicGuildChannelsForGuild"), d.A.getGuildBasicChannels(e) ?? C[e] ?? N;
    }
    getMutableGuildChannelsForGuild(e) {
        return H(e, 1, "getMutableGuildChannelsForGuild"), C[e] ?? N;
    }
    getSortedLinkedChannelsForGuild(e) {
        return i()
            .values(D[e] ?? N)
            .sort((e, t) => g.default.compare(e.id, t.id));
    }
    getSortedPrivateChannels() {
        return i()(O)
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
        return { ...v, ...O, ...b };
    }
    getDebugInfo() {
        return {
            loadedGuildIds: Array.from(x).sort(g.default.compare),
            pendingGuildLoads: Object.keys(k).sort(g.default.compare),
            guildSizes: Object.keys(C)
                .sort(g.default.compare)
                .map((e) => `${e}: ${eo(e)}`),
        };
    }
}
function eo(e) {
    return null == C[e] ? null : Object.keys(C[e]).length;
}
let el = new ea(o.h, {
    BACKGROUND_SYNC: function (e) {
        let { guilds: t } = e,
            n = C;
        (v = {}),
            (C = {}),
            (M = {}),
            (D = {}),
            t.forEach((e) => {
                if ("unavailable" === e.data_mode)
                    y.fileOnly(`Restoring guild channels b/c unavailable in bg sync, for ${e.id} #:${eo(e.id)}`),
                        i().forEach(n[e.id], X);
                else if ("partial" === e.data_mode) {
                    y.fileOnly(`Restoring guild channels b/c partial in bg sync, for ${e.id} #:${eo(e.id)}`),
                        i().forEach(n[e.id], X);
                    let t = e.partial_updates.deleted_channel_ids ?? [];
                    t.length > 0 && (H(e.id, 1, "handleBackgroundSync"), t.forEach((e) => ee(v[e]))),
                        e.partial_updates.channels?.forEach((t) => X((0, E.UE)(t, e.id)));
                } else
                    y.fileOnly(`BG sync contained full channels for ${e.id} #:${e.channels.length}`),
                        Y(e.id),
                        x.add(e.id),
                        d.A.restored(e.id),
                        e.channels.forEach((t) => X((0, E.UE)(t, e.id)));
            });
    },
    CACHE_LOADED_LAZY: function (e) {
        for (let [t, n] of ((F = Math.max(F, e.guilds.length)), e.guildChannels))
            for (let e of (y.fileOnly(`Lazy cache contained full guild channels for ${t} #:${n.length}`), x.add(t), n))
                $((0, E.oh)(e));
    },
    CACHE_LOADED: function (e) {
        F = Math.max(F, e.guilds.length);
        let { privateChannels: t, initialGuildChannels: n } = e;
        for (let e of [t, n]) for (let t of e) $((0, _.n2)((0, E.oh)(t)));
        let r = n[0]?.guild_id;
        null != r && (y.fileOnly(`Early cache contained full guild channels for ${r}`), x.add(r));
    },
    CHANNEL_CREATE: function (e) {
        $(e.channel);
    },
    CHANNEL_DELETE: et,
    CHANNEL_RECIPIENT_ADD: function (e) {
        let t = K(e.channelId),
            n = A.default.getId();
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
        t && Object.values(b).forEach((e) => $(e));
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { lazyPrivateChannels: t } = e;
        null != R && ((O = {}), R.forEach(z)), t.forEach(z);
    },
    CONNECTION_OPEN: function (e) {
        let t = C;
        for (let n of ((L = {}),
        (v = {}),
        (C = {}),
        (D = {}),
        (b = {}),
        (M = {}),
        (G = {}),
        (k = {}),
        (U = Date.now()),
        (R = e.initialPrivateChannels),
        e.initialPrivateChannels.forEach(z),
        e.guilds))
            "partial" === n.dataMode &&
                (i().forEach(t[n.id], X), y.fileOnly(`Restoring guild channels for ${n.id} #:${eo(n.id)}`)),
                Q(n);
        es();
    },
    CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: function (e) {
        let { channelId: t, overwrite: n } = e,
            r = K(t);
        if (null == r) return !1;
        $(r.set("permissionOverwrites", { ...r.permissionOverwrites, [n.id]: n }));
    },
    CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: function (e) {
        let { channelId: t, overwriteId: n } = e,
            r = K(t);
        if (null == r) return !1;
        let i = { ...r.permissionOverwrites };
        delete i[n], $(r.set("permissionOverwrites", i));
    },
    GUILD_CREATE: function (e) {
        Q(e.guild);
    },
    GUILD_DELETE: function (e) {
        y.fileOnly(`GuildDelete of ${e.guild.id}`), Y(e.guild.id), x.delete(e.guild.id), d.A.invalidate(e.guild.id);
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: J,
    LOAD_CHANNELS: function (e) {
        for (let { guildId: t, channels: n } of e.channels)
            for (let e of (y.fileOnly(`Lazy loaded guild channels for ${t}`),
            (0, _.Ay)(n),
            x.add(t),
            d.A.restored(t),
            n))
                Object.hasOwn(v, e.id) || X((0, E.oh)(e));
        return !1;
    },
    LOAD_MESSAGES_AROUND_SUCCESS: en,
    LOAD_MESSAGES_SUCCESS: en,
    LOAD_THREADS_SUCCESS: J,
    LOGOUT: function () {
        y.fileOnly("initializeClear()"),
            (L = {}),
            (v = {}),
            (C = {}),
            (M = {}),
            (D = {}),
            (O = {}),
            (G = {}),
            (b = {}),
            (x = new Set()),
            (k = {}),
            (U = Date.now());
    },
    OVERLAY_INITIALIZE: function (e) {
        for (let t of e.channels) $((0, _.n2)((0, E.oh)(t)));
    },
    SEARCH_MESSAGES_SUCCESS: er,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: er,
    THREAD_CREATE: Z,
    THREAD_DELETE: et,
    THREAD_LIST_SYNC: function (e) {
        let { threads: t } = e;
        t.forEach((e) => {
            E.A_.has(e.type) && $(e);
        });
    },
    THREAD_UPDATE: Z,
});
