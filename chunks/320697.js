"use strict";
n.d(t, { A: () => eE }), n(321073), n(839272);
var r = n(284009),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(323073),
    l = n(141468),
    u = n(187508),
    c = n(863005),
    d = n(152007),
    _ = n(607508),
    f = n(95701),
    p = n(383233),
    h = n(734057),
    m = n(808728),
    E = n(320501),
    g = n(222823),
    A = n(711014),
    I = n(543465),
    T = n(287809),
    S = n(661191),
    y = n(851109),
    v = n(394953),
    N = n(28156),
    C = n(849077),
    R = n(652215),
    O = n(37411);
let b = {},
    D = null,
    L = [],
    w = new N.A(),
    M = !1,
    x = !1,
    P = !1,
    k = !1,
    U = S.default.fromTimestamp(Date.now()),
    G = !0,
    F = null,
    V = null,
    B = !0;
function H() {
    let e = A.Ay.getFlattenedGuildIds().flatMap((e) => m.Ay.getSelectableChannelIds(e)),
        t = c.A.getAllActiveJoinedThreads(),
        n = (e) =>
            !(!R.kvI.GUILD_TEXTUAL.has(e.type) || (0, o.UK)(e.id)) &&
            ((0, f.fT)(e.type) ? (0, _.l)(e) === O.CP.ALL_MESSAGES && !d.A.isMuted(e.id) : I.Ay.allowAllMessages(e)),
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
                g.Ay.lastMessageTimestamp(t) > Date.now() - C.V$
                    ? e.notifyingChannelIds.push(t)
                    : e.staleChannelIds.push(t),
                e
            ),
            { notifyingChannelIds: [], staleChannelIds: [] },
        );
}
function j(e) {
    if (!E.A.isReady(e)) return;
    let t = h.A.getBasicChannel(e),
        n = E.A.getMessages(e);
    if (n.hasPresent() && 0 !== n.length)
        return w.addChannelMessages({ channel: t, channelMessages: n, userId: T.default.getCurrentUser()?.id }), n;
}
function Y() {
    if (null == D) {
        U = S.default.fromTimestamp(Date.now());
        return;
    }
    for (let e of D.toSorted((e, t) => S.default.compare(g.Ay.lastMessageId(t), g.Ay.lastMessageId(e)))) {
        let t = b[e];
        if (t.loadState === C.Ve.UNLOADED && null != t.mostRecentMessageId) {
            U = t.mostRecentMessageId;
            return;
        }
    }
    U = "0";
}
function W() {
    let { notifyingChannelIds: e, staleChannelIds: t } = H();
    (D = e), (L = t), i()(null != D, "notifyingChannelIds should not be null");
    let n = D.filter((e) => null == b[e]),
        r = Object.keys(b).filter((e) => !D?.includes(e));
    if (0 !== D.length && 0 === n.length && 0 === r.length) return !1;
    for (let e of r) delete b[e];
    for (let e of n)
        if (((b[e] = { loadState: C.Ve.UNLOADED, mostRecentMessageId: g.Ay.lastMessageId(e) }), E.A.isReady(e))) {
            let t = j(e);
            null != t &&
                ((b[e].loadState = C.Ve.LOADED), (b[e].mostRecentMessageId = t.last()?.id ?? b[e].mostRecentMessageId));
        }
    w.updateChannelIds(D), Y();
}
function K() {
    (b = {}),
        (D = null),
        (L = []),
        (w = new N.A()),
        (M = !1),
        (x = !1),
        (P = !1),
        (U = S.default.fromTimestamp(Date.now())),
        (G = !0),
        (k = !1),
        (V = null),
        (F = null);
}
function $() {
    for (let e of (W(), D ?? [])) {
        let t = j(e);
        null != t && ((b[e].loadState = C.Ve.LOADED), (b[e].mostRecentMessageId = t.last()?.id ?? null), Y());
    }
    let e = u.Ay.getSettingsFilteredMentions() ?? [];
    w.addMessages(
        e.map((e) => ({
            id: e.id,
            channelId: e.channel_id,
            guildId: h.A.getBasicChannel(e.channel_id)?.guild_id,
            kind: C.yL.MENTION,
            message: e,
        })),
    );
}
function z() {
    K(), $();
}
function q() {
    K();
}
function Z(e) {
    if (e instanceof p.Ay) return e;
    let t = E.A.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, l.rh)(e);
}
function X(e) {
    let { channelId: t, message: n } = e;
    if (null == D || n.author?.id === T.default.getCurrentUser()?.id) return !1;
    let r = D.includes(t);
    if ((0, o.UK)(t)) return !1;
    let i = Z(n),
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
        kind: s ? C.yL.MENTION : C.yL.ALL_MESSAGES_CHANNEL,
        message: i,
    });
}
function Q(e) {
    let { channelId: t } = e;
    if (!D?.includes(t)) return !1;
    let n = j(t);
    if (null == n) return !1;
    let r = n.length >= C.EM || (n.hasFetched && !n.hasMoreBefore);
    b[t].loadState !== C.Ve.LOADED && (b[t].loadState = r ? C.Ve.LOADED : C.Ve.LOADED_UNREAD), Y();
}
function J(e) {
    let { messages: t } = e;
    if (0 === t.length) return !1;
    let n = u.Ay.getSettingsFilteredMentions();
    if (null == n || 0 === n.length) return !1;
    w.addMessages(
        n.map((e) => ({
            id: e.id,
            channelId: e.channel_id,
            guildId: h.A.getBasicChannel(e.channel_id)?.guild_id,
            kind: C.yL.MENTION,
            message: e,
        })),
    );
}
function ee(e) {
    let { id: t } = e;
    return w.deleteMessages([t]);
}
function et(e) {
    let { ids: t } = e;
    return w.deleteMessages(t);
}
function en() {
    M = !0;
}
function er(e) {
    let { preload: t, hasMoreToLoad: n, analyticsPayload: r } = e;
    (M = !1), t ? (k = !0) : (null != n && (G = n), (P = !0)), (V = r ?? null);
}
function ei(e) {
    let { preload: t } = e;
    return (
        null != (0, y.GE)({ location: "NotificationsInboxStore.canLoadMore" })?.notificationCenterVariant &&
        null != D &&
        !M &&
        !x &&
        (!t || !k) &&
        G
    );
}
function es() {
    (M = !1), (V = null), (x = !0);
}
function ea(e) {
    let { messageId: t, channelId: n, isUnread: r } = e,
        i = (0, y.GE)({ location: "handleInboxItemClick" }).notificationCenterVariant;
    F = r && i === y.U5.SIDEBAR ? { channelId: n, messageId: t } : null;
}
function eo(e) {
    let { channelId: t, messageId: n } = e;
    (0, v.zo)({ channelId: t, id: n }, F) && (F = null);
}
function el() {
    x = !1;
}
function eu() {
    F = null;
}
function ec(e) {
    let { channel: t } = e;
    if (I.Ay.allowNoMessages(t)) return !1;
    z();
}
function ed(e) {
    let { userId: t } = e;
    if (t !== T.default.getCurrentUser()?.id) return !1;
    z();
}
function e_(e) {
    let { id: t, addedMembers: n, removedMemberIds: r } = e,
        i = T.default.getCurrentUser()?.id;
    if (null == i) return !1;
    if (n?.some((e) => e.userId === i)) {
        let e = h.A.getBasicChannel(t);
        return !(null == e || d.A.isMuted(t)) && (0, _.l)(e) !== O.CP.NO_MESSAGES && void z();
    }
    return !!r?.includes(i) && void z();
}
function ef(e) {
    let { channel: t } = e;
    if (!w.getMessages().some((e) => e.channelId === t.id)) return !1;
    z();
}
function ep(e) {
    let { guild: t } = e;
    if (!w.getMessages().some((e) => e.guildId === t.id)) return !1;
    z();
}
function eh(e) {
    let { navOnClick: t } = e;
    B = t ?? !0;
}
class em extends s.Ay.Store {
    static displayName = "NotificationsInboxStore";
    initialize() {
        this.waitFor(c.A, h.A, m.Ay, d.A, E.A, g.Ay, u.Ay, A.Ay, I.Ay, T.default);
    }
    canLoadMore(e) {
        let { preload: t } = e;
        return ei({ preload: t });
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
        return U;
    }
    get hasMoreToLoad() {
        return G;
    }
    get isLoading() {
        return M;
    }
    get hasLoadedEver() {
        return P;
    }
    get hasPreloaded() {
        return k;
    }
    get isLoadingComplete() {
        return !M && !G;
    }
    get selectedItemInfo() {
        return F;
    }
    get currentRequestAnalyticsPayload() {
        return V;
    }
    getDevOverrides() {
        return { navOnClick: B };
    }
}
let eE = new em(a.h, {
    LOAD_RECENT_MENTIONS_SUCCESS: J,
    LOAD_MESSAGES_SUCCESS: Q,
    MESSAGE_CREATE: X,
    MESSAGE_DELETE: ee,
    RECENT_MENTION_DELETE: ee,
    MESSAGE_DELETE_BULK: et,
    CONNECTION_OPEN: z,
    LOGOUT: q,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: z,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: z,
    GUILD_CREATE: z,
    USER_GUILD_SETTINGS_GUILD_UPDATE: z,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: z,
    CHANNEL_CREATE: ec,
    GUILD_DELETE: ep,
    THREAD_DELETE: ef,
    CHANNEL_DELETE: ef,
    THREAD_MEMBER_UPDATE: ed,
    THREAD_MEMBERS_UPDATE: e_,
    NOTIFICATIONS_INBOX_OPEN: el,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: en,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: er,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: es,
    NOTIFICATIONS_INBOX_ITEM_CLICK: ea,
    NOTIFICATIONS_INBOX_ITEM_ACK: eo,
    NOTIFICATIONS_INBOX_CLOSE: eu,
    NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES: eh,
});
