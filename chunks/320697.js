"use strict";
n.d(t, { A: () => X }), n(321073), n(839272);
var r = n(284009),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(323073),
    l = n(141468),
    u = n(187508),
    d = n(863005),
    c = n(152007),
    _ = n(607508),
    f = n(95701),
    E = n(383233),
    h = n(734057),
    p = n(808728),
    m = n(320501),
    g = n(222823),
    A = n(711014),
    I = n(543465),
    T = n(287809),
    S = n(661191),
    y = n(851109),
    N = n(394953),
    O = n(28156),
    R = n(849077),
    v = n(652215),
    C = n(37411);
let b = {},
    D = null,
    L = [],
    w = new O.A(),
    M = !1,
    P = !1,
    U = !1,
    k = !1,
    x = S.default.fromTimestamp(Date.now()),
    G = !0,
    V = null,
    F = null,
    B = !0;
function H(e) {
    if (!m.A.isReady(e)) return;
    let t = h.A.getBasicChannel(e),
        n = m.A.getMessages(e);
    if (n.hasPresent() && 0 !== n.length)
        return w.addChannelMessages({ channel: t, channelMessages: n, userId: T.default.getCurrentUser()?.id }), n;
}
function Y() {
    if (null == D) {
        x = S.default.fromTimestamp(Date.now());
        return;
    }
    for (let e of D.toSorted((e, t) => S.default.compare(g.Ay.lastMessageId(t), g.Ay.lastMessageId(e)))) {
        let t = b[e];
        if (t.loadState === R.Ve.UNLOADED && null != t.mostRecentMessageId) {
            x = t.mostRecentMessageId;
            return;
        }
    }
    x = "0";
}
function W() {
    let { notifyingChannelIds: e, staleChannelIds: t } = (function () {
        let e = A.Ay.getFlattenedGuildIds().flatMap((e) => p.Ay.getSelectableChannelIds(e)),
            t = d.A.getAllActiveJoinedThreads(),
            n = (e) =>
                !(!v.kvI.GUILD_TEXTUAL.has(e.type) || (0, o.UK)(e.id)) &&
                ((0, f.fT)(e.type)
                    ? (0, _.l)(e) === C.CP.ALL_MESSAGES && !c.A.isMuted(e.id)
                    : I.Ay.allowAllMessages(e)),
            r = [];
        for (let t of e) {
            let e = h.A.getBasicChannel(t);
            null != e && n(e) && r.push(e);
        }
        for (let e in t)
            for (let i in t[e])
                for (let s in t[e][i]) {
                    let e = h.A.getBasicChannel(s);
                    null != e && n(e) && r.push(e);
                }
        return r
            .map((e) => e.id)
            .sort((e, t) => {
                let n = g.Ay.hasUnread(e);
                return n !== g.Ay.hasUnread(t)
                    ? n
                        ? -1
                        : 1
                    : S.default.compare(g.Ay.lastMessageId(t), g.Ay.lastMessageId(e));
            })
            .reduce(
                (e, t) => (
                    g.Ay.lastMessageTimestamp(t) > Date.now() - R.V$
                        ? e.notifyingChannelIds.push(t)
                        : e.staleChannelIds.push(t),
                    e
                ),
                { notifyingChannelIds: [], staleChannelIds: [] },
            );
    })();
    (D = e), (L = t), i()(null != D, "notifyingChannelIds should not be null");
    let n = D.filter((e) => null == b[e]),
        r = Object.keys(b).filter((e) => !D?.includes(e));
    if (0 !== D.length && 0 === n.length && 0 === r.length) return !1;
    for (let e of r) delete b[e];
    for (let e of n)
        if (((b[e] = { loadState: R.Ve.UNLOADED, mostRecentMessageId: g.Ay.lastMessageId(e) }), m.A.isReady(e))) {
            let t = H(e);
            null != t &&
                ((b[e].loadState = R.Ve.LOADED), (b[e].mostRecentMessageId = t.last()?.id ?? b[e].mostRecentMessageId));
        }
    w.updateChannelIds(D), Y();
}
function j() {
    (b = {}),
        (D = null),
        (L = []),
        (w = new O.A()),
        (M = !1),
        (P = !1),
        (U = !1),
        (x = S.default.fromTimestamp(Date.now())),
        (G = !0),
        (k = !1),
        (F = null),
        (V = null);
}
function K() {
    for (let e of (j(), W(), D ?? [])) {
        let t = H(e);
        null != t && ((b[e].loadState = R.Ve.LOADED), (b[e].mostRecentMessageId = t.last()?.id ?? null), Y());
    }
    let e = u.Ay.getSettingsFilteredMentions() ?? [];
    w.addMessages(
        e.map((e) => ({
            id: e.id,
            channelId: e.channel_id,
            guildId: h.A.getBasicChannel(e.channel_id)?.guild_id,
            kind: R.yL.MENTION,
            message: e,
        })),
    );
}
function $(e) {
    let { id: t } = e;
    return w.deleteMessages([t]);
}
function z(e) {
    let { channel: t } = e;
    if (!w.getMessages().some((e) => e.channelId === t.id)) return !1;
    K();
}
class q extends s.Ay.Store {
    static displayName = "NotificationsInboxStore";
    initialize() {
        this.waitFor(d.A, h.A, p.Ay, c.A, m.A, g.Ay, u.Ay, A.Ay, I.Ay, T.default);
    }
    canLoadMore(e) {
        let { preload: t } = e;
        return (function (e) {
            let { preload: t } = e;
            return (
                null != (0, y.GE)({ location: "NotificationsInboxStore.canLoadMore" })?.notificationCenterVariant &&
                null != D &&
                !M &&
                !P &&
                (!t || !k) &&
                G
            );
        })({ preload: t });
    }
    getInboxMessages() {
        return w.getMessages();
    }
    getNotifyingChannelIds() {
        return D;
    }
    getChannelInfoMap() {
        return b;
    }
    get oldestDisplayedMessageId() {
        return x;
    }
    get hasMoreToLoad() {
        return G;
    }
    get isLoading() {
        return M;
    }
    get hasLoadedEver() {
        return U;
    }
    get hasPreloaded() {
        return k;
    }
    get isLoadingComplete() {
        return !M && !G;
    }
    get selectedItemInfo() {
        return V;
    }
    get currentRequestAnalyticsPayload() {
        return F;
    }
    getDevOverrides() {
        return { navOnClick: B };
    }
}
let X = new q(a.h, {
    LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
        let { messages: t } = e;
        if (0 === t.length) return !1;
        let n = u.Ay.getSettingsFilteredMentions();
        if (null == n || 0 === n.length) return !1;
        w.addMessages(
            n.map((e) => ({
                id: e.id,
                channelId: e.channel_id,
                guildId: h.A.getBasicChannel(e.channel_id)?.guild_id,
                kind: R.yL.MENTION,
                message: e,
            })),
        );
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t } = e;
        if (!D?.includes(t)) return !1;
        let n = H(t);
        if (null == n) return !1;
        let r = n.length >= R.EM || (n.hasFetched && !n.hasMoreBefore);
        b[t].loadState !== R.Ve.LOADED && (b[t].loadState = r ? R.Ve.LOADED : R.Ve.LOADED_UNREAD), Y();
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (null == D || n.author?.id === T.default.getCurrentUser()?.id) return !1;
        let r = D.includes(t);
        if ((0, o.UK)(t)) return !1;
        let i = (function (e) {
                if (e instanceof E.Ay) return e;
                let t = m.A.getMessage(e.channel_id, e.id);
                return null != t ? t : (0, l.rh)(e);
            })(n),
            s = i.mentioned;
        if (!r && !s) {
            if (!L.includes(t)) return !1;
            W();
        }
        if (!r && s && !(0, u.pK)(i)) return !1;
        w.addMessage({
            id: n.id,
            channelId: n.channel_id,
            guildId: h.A.getBasicChannel(n.channel_id)?.guild_id,
            kind: s ? R.yL.MENTION : R.yL.ALL_MESSAGES_CHANNEL,
            message: i,
        });
    },
    MESSAGE_DELETE: $,
    RECENT_MENTION_DELETE: $,
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t } = e;
        return w.deleteMessages(t);
    },
    CONNECTION_OPEN: K,
    LOGOUT: function () {
        j();
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: K,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: K,
    GUILD_CREATE: K,
    USER_GUILD_SETTINGS_GUILD_UPDATE: K,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: K,
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (I.Ay.allowNoMessages(t)) return !1;
        K();
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (!w.getMessages().some((e) => e.guildId === t.id)) return !1;
        K();
    },
    THREAD_DELETE: z,
    CHANNEL_DELETE: z,
    THREAD_MEMBER_UPDATE: function (e) {
        let { userId: t } = e;
        if (t !== T.default.getCurrentUser()?.id) return !1;
        K();
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let { id: t, addedMembers: n, removedMemberIds: r } = e,
            i = T.default.getCurrentUser()?.id;
        if (null == i) return !1;
        if (n?.some((e) => e.userId === i)) {
            let e = h.A.getBasicChannel(t);
            return !(null == e || c.A.isMuted(t)) && (0, _.l)(e) !== C.CP.NO_MESSAGES && void K();
        }
        return !!r?.includes(i) && void K();
    },
    NOTIFICATIONS_INBOX_OPEN: function () {
        P = !1;
    },
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: function () {
        M = !0;
    },
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: function (e) {
        let { preload: t, hasMoreToLoad: n, analyticsPayload: r } = e;
        (M = !1), t ? (k = !0) : (null != n && (G = n), (U = !0)), (F = r ?? null);
    },
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: function () {
        (M = !1), (F = null), (P = !0);
    },
    NOTIFICATIONS_INBOX_ITEM_CLICK: function (e) {
        let { messageId: t, channelId: n, isUnread: r } = e,
            i = (0, y.GE)({ location: "handleInboxItemClick" }).notificationCenterVariant;
        V = r && i === y.U5.SIDEBAR ? { channelId: n, messageId: t } : null;
    },
    NOTIFICATIONS_INBOX_ITEM_ACK: function (e) {
        let { channelId: t, messageId: n } = e;
        (0, N.zo)({ channelId: t, id: n }, V) && (V = null);
    },
    NOTIFICATIONS_INBOX_CLOSE: function () {
        V = null;
    },
    NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES: function (e) {
        let { navOnClick: t } = e;
        B = t ?? !0;
    },
});
