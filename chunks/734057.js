(n.d(t, { A: () => ed, D: () => H }), n(205816));
var i = n(435558),
    r = n.n(i),
    a = n(61090),
    s = n(17928),
    l = n(73153),
    o = n(723176),
    d = n(154049),
    c = n(531743),
    u = n(453001),
    _ = n(736400),
    E = n(311016),
    A = n(626584),
    h = n(181079),
    f = n(95701),
    I = n(403362),
    p = n(935208),
    T = n(280450),
    m = n(71393),
    g = n(287809),
    S = n(652215),
    N = n(746080);
let C = new A.A("ChannelStore"),
    O = {},
    R = {},
    L = {},
    y = {},
    D = null,
    v = {},
    b = {},
    P = {},
    M = 0,
    U = {},
    w = {},
    G = new Set(),
    x = {},
    k = 0,
    F = {},
    B = 0,
    V = 0;
class H {
    static loadAllMissingChannels() {
        let e = m.A.getGuildIds().filter((e) => !G.has(e));
        return this.loadGuildIds(e);
    }
    static loadGuildFromChannelId(e) {
        return null == e ? null : H.loadGuildIds([K(e)?.guild_id]);
    }
    static loadGuildIds(e) {
        let t = e.filter(I.Vq);
        if (0 === t.length) return null;
        let n = o.A.database();
        if (null == n || !t.some((e) => !G.has(e))) return null;
        let i = k;
        return (0, d.ES)("loadChannels", async () => {
            let e = t
                    .map((e) => {
                        if (G.has(e)) return null;
                        if (null != x[e]) return (C.fileOnly(`Skipping loading ${e} because a load is pending`), null);
                        let t = c.A.getAsync(n, e).then(
                            (t) => (
                                C.fileOnly(`Lazy loaded channels for ${e} #:${t.length}`),
                                { guildId: e, channels: t }
                            ),
                        );
                        return ((x[e] = t), { guildId: e, promise: t });
                    })
                    .filter(I.Vq),
                r = e.map((e) => e.promise);
            try {
                let t = await Promise.all(r);
                if (k !== i)
                    return (
                        C.fileOnly("lastResetTime has changed, skipping loads for " + e.map((e) => e.guildId)), null
                    );
                let n = t.filter((e) => !G.has(e.guildId));
                await l.h.dispatch({ type: "LOAD_CHANNELS", channels: n });
            } catch (t) {
                for (let n of (C.error("Failed to load channels from disk for " + e.map((e) => e.guildId), t), e))
                    delete x[n.guildId];
                throw t;
            }
            return null;
        });
    }
}
function j(e, t, n) {
    if (null == e || "null" === e || G.has(e) || (0 === t && u.A.hasGuild(e))) return;
    let i = o.A.database();
    if (null == i) return;
    C.verbose(`hydrating guild (guild: ${e}, trace: ${n})`);
    let r = (0, d.Ek)(`ensureGuildLoaded(${e})`, () => c.A.getSync(i, e), "ensureGuildLoaded");
    if (null == r) {
        (G.add(e), u.A.restored(e), C.log(`load returned null; early returning (guild: ${e}, database: ${i})`));
        return;
    }
    let [s, l] = r;
    for (let n of ((0, _.Ay)(s),
    0 !== t && (V += 1),
    G.add(e),
    u.A.restored(e),
    a.A.mark("\u2757", `loaded guild channels (guild: ${e})`, l),
    s))
        Object.hasOwn(R, n.id) || Z((0, f.oh)(n));
    C.verbose(`hydration complete (guild: ${e}, channels: ${s.length}, guilds_loaded: ${V})`);
}
function W(e, t, n) {
    if (!Object.hasOwn(R, e) && !Object.hasOwn(y, e) && !Object.hasOwn(v, e) && !Object.hasOwn(w, e) && 1 === t) {
        let i = u.A.getBasicChannel(e);
        i?.guild_id != null && j(i.guild_id, t, n);
    }
}
function Y(e) {
    if ((C.fileOnly(`Deleting guild channels for ${e}`), null != L[e])) {
        for (let t of p.default.keys(L[e])) delete R[t];
        delete L[e];
    }
    null != b[e] && delete b[e];
}
function K(e) {
    return (W(e, 0, "getBasicChannel"), R[e] ?? y[e] ?? v[e] ?? w[e] ?? u.A.getBasicChannel(e));
}
function $(e) {
    return (W(e, 1, "getChannel"), R[e] ?? y[e] ?? v[e] ?? w[e] ?? F[e]);
}
function z(e) {
    if (e.isPrivate()) {
        if (e.hasFlag(N.lx.UNLISTED)) {
            F[e.id] = e;
            return;
        }
        (delete F[e.id], X(e));
    } else e.isThread() ? q(e) : f.uL.has(e.type) && Z(e);
}
function X(e) {
    if (null != e.recipients.find((e) => (0, E.A)(e))) return !1;
    ((y[e.id] = e), e.type === S.rbe.DM && (P[e.getRecipientId()] = e.id), (M += 1));
}
function q(e) {
    let t = R[e.parent_id];
    ((v[e.id] = e.merge({ nsfw: t?.nsfw === !0, parentChannelThreadType: t?.type })),
        e.isScheduledForDeletion() && l.h.dispatch({ type: "THREAD_DELETE", channel: e }));
}
function Z(e) {
    let { id: t, guild_id: n } = e;
    ((R[t] = e),
        (L[n] = L[n] ?? {}),
        (L[n][t] = e),
        (U[n] = (U[n] ?? 0) + 1),
        null != e.linkedLobby ? ((b[n] = b[n] ?? {}), (b[n][t] = e)) : delete b[n]?.[t]);
}
function Q(e) {
    let { id: t, channels: n, threads: i } = e;
    switch (n.op) {
        case "full_sync":
            for (let e of (C.fileOnly(`ConnectionOpen contained full channels for ${t} #:${n.items.length}`),
            Y(t),
            G.add(t),
            u.A.restored(t),
            n.items))
                Z(e);
            break;
        case "update":
            for (let e of ((n.writes.length > 0 || n.deletes.length > 0) && u.A.invalidate(t), n.deletes)) et(R[e]);
            for (let e of n.writes) Z(e);
    }
    if (null != i) for (let e of i) q(e);
}
function J(e) {
    if (!f.A_.has(e.channel.type)) return !1;
    let t = $(e.channel.id);
    z((t = null == t ? e.channel : t.merge({ ...e.channel.toJS(), bitrate: e.channel.bitrate ?? t.bitrate })));
}
function ee(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        f.A_.has(e.type) && z((0, f.UE)(e));
    });
}
function et(e) {
    if (null == e) return;
    let t = e.guild_id;
    (e.id in y && delete y[e.id],
        e.id in R && delete R[e.id],
        e.id in v && delete v[e.id],
        null != t &&
            (null != L[t] && e.id in L[t] && delete L[t][e.id], null != b[t] && e.id in b[t] && delete b[t][e.id]),
        null == e.guild_id || f.Le.has(e.type)
            ? (0, f.Gw)(e.type) && (M += 1)
            : (U[e.guild_id] = (U[e.guild_id] ?? 0) + 1));
}
function en(e) {
    let { channel: t } = e,
        n = R[t.id] ?? y[t.id] ?? v[t.id];
    if (null == n) return !1;
    (et(n),
        (function (e) {
            if ("basicPermissions" in e || e.type !== S.rbe.DM) return;
            let t = e.getRecipientId();
            P[t] === e.id && delete P[t];
        })(n));
}
function ei(e) {
    let { messages: t } = e;
    for (let e of t) null != e.thread && !(e.thread.id in v) && f.A_.has(e.thread.type) && q((0, f.UE)(e.thread));
}
function er(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n, channels: i } = e;
        (t.forEach((e) => {
            e.forEach((e) => {
                ea(e.thread);
            });
        }),
            n.forEach(ea),
            i.forEach((e) => {
                let t = (0, f.UE)(e),
                    n = null != $(e.id),
                    i = null != F[e.id];
                t.isPrivate() && (!n || i) ? (F[t.id] = t) : n || z(t);
            }));
    });
}
function ea(e) {
    null != e && !(e.id in v) && f.A_.has(e.type) && q((0, f.UE)(e));
}
function es() {
    for (let e in ((w = {}), h.A.getFavoriteChannels())) {
        let t = h.A.getCategoryRecord(e);
        null != t && (w[e] = t);
    }
}
class el extends s.Ay.Store {
    static displayName = "ChannelStore";
    initialize() {
        (this.waitFor(T.default, u.A, h.A, m.A, g.default), this.syncWith([h.A], es));
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
        for (let e of m.A.getGuildIds()) j(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
        return { ...R, ...y };
    }
    getChannelIds(e) {
        return (j(e, 0, "getChannelIds"), null == e)
            ? p.default.keys(y)
            : p.default.keys(u.A.getGuildBasicChannels(e) ?? L[e] ?? O);
    }
    getMutablePrivateChannels() {
        return y;
    }
    getMutableBasicGuildChannelsForGuild(e) {
        return (j(e, 0, "getMutableBasicGuildChannelsForGuild"), u.A.getGuildBasicChannels(e) ?? L[e] ?? O);
    }
    getMutableGuildChannelsForGuild(e) {
        return (j(e, 1, "getMutableGuildChannelsForGuild"), L[e] ?? O);
    }
    getSortedLinkedChannelsForGuild(e) {
        return r()
            .values(b[e] ?? O)
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
        if (null != e) return P[e];
    }
    getDMChannelFromUserId(e) {
        if (null != e) return this.getChannel(P[e]);
    }
    getMutableDMsByUserIds() {
        return P;
    }
    getDMUserIds() {
        return p.default.keys(P);
    }
    getPrivateChannelsVersion() {
        return M;
    }
    getGuildChannelsVersion(e) {
        return U[e] ?? 0;
    }
    getAllThreadsForParent(e) {
        return r()
            .values(v)
            .filter((t) => t.parent_id === e);
    }
    getAllThreadsForGuild(e) {
        return r()
            .values(v)
            .filter((t) => t.guild_id === e);
    }
    getInitialOverlayState() {
        return { ...R, ...y, ...v };
    }
    getDebugInfo() {
        return {
            loadedGuildIds: Array.from(G).sort(p.default.compare),
            pendingGuildLoads: Object.keys(x).sort(p.default.compare),
            guildSizes: Object.keys(L)
                .sort(p.default.compare)
                .map((e) => `${e}: ${eo(e)}`),
        };
    }
}
function eo(e) {
    return null == L[e] ? null : Object.keys(L[e]).length;
}
let ed = new el(l.h, {
    BACKGROUND_SYNC: function (e) {
        let { guilds: t } = e,
            n = L;
        ((R = {}),
            (L = {}),
            (U = {}),
            (b = {}),
            t.forEach((e) => {
                if ("unavailable" === e.data_mode)
                    (C.fileOnly(`Restoring guild channels b/c unavailable in bg sync, for ${e.id} #:${eo(e.id)}`),
                        r().forEach(n[e.id], Z));
                else if ("partial" === e.data_mode) {
                    (C.fileOnly(`Restoring guild channels b/c partial in bg sync, for ${e.id} #:${eo(e.id)}`),
                        r().forEach(n[e.id], Z));
                    let t = e.partial_updates.deleted_channel_ids ?? [];
                    (t.length > 0 && (j(e.id, 1, "handleBackgroundSync"), t.forEach((e) => et(R[e]))),
                        e.partial_updates.channels?.forEach((t) => Z((0, f.UE)(t, e.id))));
                } else
                    (C.fileOnly(`BG sync contained full channels for ${e.id} #:${e.channels.length}`),
                        Y(e.id),
                        G.add(e.id),
                        u.A.restored(e.id),
                        e.channels.forEach((t) => Z((0, f.UE)(t, e.id))));
            }));
    },
    CACHE_LOADED_LAZY: function (e) {
        for (let [t, n] of ((B = Math.max(B, e.guilds.length)), e.guildChannels))
            for (let e of (C.fileOnly(`Lazy cache contained full guild channels for ${t} #:${n.length}`), G.add(t), n))
                z((0, f.oh)(e));
    },
    CACHE_LOADED: function (e) {
        B = Math.max(B, e.guilds.length);
        let { privateChannels: t, initialGuildChannels: n } = e;
        for (let e of [t, n]) for (let t of e) z((0, _.n2)((0, f.oh)(t)));
        let i = n[0]?.guild_id;
        null != i && (C.fileOnly(`Early cache contained full guild channels for ${i}`), G.add(i));
    },
    CHANNEL_CREATE: function (e) {
        z(e.channel);
    },
    CHANNEL_DELETE: en,
    CHANNEL_RECIPIENT_ADD: function (e) {
        let t = $(e.channelId),
            n = T.default.getId();
        return !!t?.isPrivate() && (z(t.addRecipient(e.user.id, e.nick, n)), !0);
    },
    CHANNEL_RECIPIENT_REMOVE: function (e) {
        let t = $(e.channelId);
        return !!t?.isPrivate() && (z(t.removeRecipient(e.user.id)), !0);
    },
    CHANNEL_UPDATES: function (e) {
        let t = e.channels.some((e) => {
            let t = $(e.id);
            return e.nsfw !== t?.nsfw || e.type !== t?.type;
        });
        for (let t of e.channels) z(t);
        t && Object.values(v).forEach((e) => z(e));
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { lazyPrivateChannels: t } = e;
        (null != D && ((y = {}), D.forEach(X)), t.forEach(X));
    },
    CONNECTION_OPEN: function (e) {
        let t = L;
        for (let n of ((P = {}),
        (R = {}),
        (L = {}),
        (b = {}),
        (v = {}),
        (U = {}),
        (F = {}),
        (x = {}),
        (k = Date.now()),
        (D = e.initialPrivateChannels),
        e.initialPrivateChannels.forEach(X),
        e.guilds))
            ("partial" === n.dataMode &&
                (r().forEach(t[n.id], Z), C.fileOnly(`Restoring guild channels for ${n.id} #:${eo(n.id)}`)),
                Q(n));
        es();
    },
    CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: function (e) {
        let { channelId: t, overwrite: n } = e,
            i = $(t);
        if (null == i) return !1;
        z(i.set("permissionOverwrites", { ...i.permissionOverwrites, [n.id]: n }));
    },
    CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: function (e) {
        let { channelId: t, overwriteId: n } = e,
            i = $(t);
        if (null == i) return !1;
        let r = { ...i.permissionOverwrites };
        (delete r[n], z(i.set("permissionOverwrites", r)));
    },
    GUILD_CREATE: function (e) {
        Q(e.guild);
    },
    GUILD_DELETE: function (e) {
        (C.fileOnly(`GuildDelete of ${e.guild.id}`), Y(e.guild.id), G.delete(e.guild.id), u.A.invalidate(e.guild.id));
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: ee,
    LOAD_CHANNELS: function (e) {
        for (let { guildId: t, channels: n } of e.channels)
            for (let e of (C.fileOnly(`Lazy loaded guild channels for ${t}`),
            (0, _.Ay)(n),
            G.add(t),
            u.A.restored(t),
            n))
                Object.hasOwn(R, e.id) || Z((0, f.oh)(e));
        return !1;
    },
    LOAD_MESSAGES_AROUND_SUCCESS: ei,
    LOAD_MESSAGES_SUCCESS: ei,
    LOAD_THREADS_SUCCESS: ee,
    LOGOUT: function () {
        (C.fileOnly("initializeClear()"),
            (P = {}),
            (R = {}),
            (L = {}),
            (U = {}),
            (b = {}),
            (y = {}),
            (F = {}),
            (v = {}),
            (G = new Set()),
            (x = {}),
            (k = Date.now()));
    },
    OVERLAY_INITIALIZE: function (e) {
        for (let t of e.channels) z((0, _.n2)((0, f.oh)(t)));
    },
    SEARCH_MESSAGES_SUCCESS: er,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: er,
    THREAD_CREATE: J,
    THREAD_DELETE: en,
    THREAD_LIST_SYNC: function (e) {
        let { threads: t } = e;
        t.forEach((e) => {
            f.A_.has(e.type) && z(e);
        });
    },
    THREAD_UPDATE: J,
});
