"use strict";
n.d(t, { A: () => eE }), n(321073), n(839272);
var r = n(284009),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(323073),
    l = n(141468),
    u = n(187508),
    c = n(863005),
    d = n(152007),
    _ = n(607508),
    f = n(95701),
    h = n(383233),
    p = n(734057),
    g = n(808728),
    E = n(320501),
    A = n(222823),
    I = n(711014),
    T = n(543465),
    y = n(287809),
    S = n(661191),
    v = n(851109),
    C = n(394953),
    b = n(28156),
    N = n(849077),
    R = n(652215),
    O = n(37411);
let D = {},
    L = null,
    w = [],
    x = new b.A(),
    P = !1,
    M = !1,
    k = !1,
    U = !1,
    G = S.default.fromTimestamp(Date.now()),
    F = !0,
    V = null,
    B = null,
    j = !0;
function H() {
    let e = I.Ay.getFlattenedGuildIds().flatMap((e) => g.Ay.getSelectableChannelIds(e)),
        t = c.A.getAllActiveJoinedThreads(),
        n = (e) =>
            !(!R.kvI.GUILD_TEXTUAL.has(e.type) || (0, o.UK)(e.id)) &&
            ((0, f.fT)(e.type) ? (0, _.l)(e) === O.CP.ALL_MESSAGES && !d.A.isMuted(e.id) : T.Ay.allowAllMessages(e)),
        r = [];
    for (let t of e) {
        let e = p.A.getBasicChannel(t);
        null != e && n(e) && r.push(e);
    }
    for (let e in t)
        for (let i in t[e])
            for (let a in t[e][i]) {
                let e = p.A.getBasicChannel(a);
                null != e && n(e) && r.push(e);
            }
    return r
        .map((e) => e.id)
        .sort((e, t) => {
            let n = A.Ay.hasUnread(e);
            return n !== A.Ay.hasUnread(t)
                ? n
                    ? -1
                    : 1
                : S.default.compare(A.Ay.lastMessageId(t), A.Ay.lastMessageId(e));
        })
        .reduce(
            (e, t) => (
                A.Ay.lastMessageTimestamp(t) > Date.now() - N.V$
                    ? e.notifyingChannelIds.push(t)
                    : e.staleChannelIds.push(t),
                e
            ),
            { notifyingChannelIds: [], staleChannelIds: [] },
        );
}
function Y(e) {
    if (!E.A.isReady(e)) return;
    let t = p.A.getBasicChannel(e),
        n = E.A.getMessages(e);
    if (n.hasPresent() && 0 !== n.length)
        return x.addChannelMessages({ channel: t, channelMessages: n, userId: y.default.getCurrentUser()?.id }), n;
}
function W() {
    if (null == L) {
        G = S.default.fromTimestamp(Date.now());
        return;
    }
    for (let e of L.toSorted((e, t) => S.default.compare(A.Ay.lastMessageId(t), A.Ay.lastMessageId(e)))) {
        let t = D[e];
        if (t.loadState === N.Ve.UNLOADED && null != t.mostRecentMessageId) {
            G = t.mostRecentMessageId;
            return;
        }
    }
    G = "0";
}
function K() {
    let { notifyingChannelIds: e, staleChannelIds: t } = H();
    (L = e), (w = t), i()(null != L, "notifyingChannelIds should not be null");
    let n = L.filter((e) => null == D[e]),
        r = Object.keys(D).filter((e) => !L?.includes(e));
    if (0 !== L.length && 0 === n.length && 0 === r.length) return !1;
    for (let e of r) delete D[e];
    for (let e of n)
        if (((D[e] = { loadState: N.Ve.UNLOADED, mostRecentMessageId: A.Ay.lastMessageId(e) }), E.A.isReady(e))) {
            let t = Y(e);
            null != t &&
                ((D[e].loadState = N.Ve.LOADED), (D[e].mostRecentMessageId = t.last()?.id ?? D[e].mostRecentMessageId));
        }
    x.updateChannelIds(L), W();
}
function $() {
    (D = {}),
        (L = null),
        (w = []),
        (x = new b.A()),
        (P = !1),
        (M = !1),
        (k = !1),
        (G = S.default.fromTimestamp(Date.now())),
        (F = !0),
        (U = !1),
        (B = null),
        (V = null);
}
function z() {
    for (let e of (K(), L ?? [])) {
        let t = Y(e);
        null != t && ((D[e].loadState = N.Ve.LOADED), (D[e].mostRecentMessageId = t.last()?.id ?? null), W());
    }
    let e = u.Ay.getSettingsFilteredMentions() ?? [];
    x.addMessages(
        e.map((e) => ({
            id: e.id,
            channelId: e.channel_id,
            guildId: p.A.getBasicChannel(e.channel_id)?.guild_id,
            kind: N.yL.MENTION,
            message: e,
        })),
    );
}
function q() {
    $(), z();
}
function X() {
    $();
}
function Z(e) {
    if (e instanceof h.Ay) return e;
    let t = E.A.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, l.rh)(e);
}
function Q(e) {
    let { channelId: t, message: n } = e;
    if (null == L || n.author?.id === y.default.getCurrentUser()?.id) return !1;
    let r = L.includes(t);
    if ((0, o.UK)(t)) return !1;
    let i = Z(n),
        a = i.mentioned;
    if (!r && !a) {
        if (!w.includes(t)) return !1;
        K();
    }
    if (!r && a && !(0, u.pK)(i)) return !1;
    x.addMessage({
        id: n.id,
        channelId: n.channel_id,
        guildId: p.A.getBasicChannel(n.channel_id)?.guild_id,
        kind: a ? N.yL.MENTION : N.yL.ALL_MESSAGES_CHANNEL,
        message: i,
    });
}
function J(e) {
    let { channelId: t } = e;
    if (!L?.includes(t)) return !1;
    let n = Y(t);
    if (null == n) return !1;
    let r = n.length >= N.EM || (n.hasFetched && !n.hasMoreBefore);
    D[t].loadState !== N.Ve.LOADED && (D[t].loadState = r ? N.Ve.LOADED : N.Ve.LOADED_UNREAD), W();
}
function ee(e) {
    let { messages: t } = e;
    if (0 === t.length) return !1;
    let n = u.Ay.getSettingsFilteredMentions();
    if (null == n || 0 === n.length) return !1;
    x.addMessages(
        n.map((e) => ({
            id: e.id,
            channelId: e.channel_id,
            guildId: p.A.getBasicChannel(e.channel_id)?.guild_id,
            kind: N.yL.MENTION,
            message: e,
        })),
    );
}
function et(e) {
    let { id: t } = e;
    return x.deleteMessages([t]);
}
function en(e) {
    let { ids: t } = e;
    return x.deleteMessages(t);
}
function er() {
    P = !0;
}
function ei(e) {
    let { preload: t, hasMoreToLoad: n, analyticsPayload: r } = e;
    (P = !1), t ? (U = !0) : (null != n && (F = n), (k = !0)), (B = r ?? null);
}
function ea(e) {
    let { preload: t } = e;
    return (
        null !=
            (0, v.GE)({ location: "NotificationsInboxStore.canLoadMore", autoTrackExposure: !1 })
                ?.notificationCenterVariant &&
        null != L &&
        !P &&
        !M &&
        (!t || !U) &&
        F
    );
}
function es() {
    (P = !1), (B = null), (M = !0);
}
function eo(e) {
    let { messageId: t, channelId: n, isUnread: r } = e,
        i = (0, v.GE)({ location: "handleInboxItemClick" }).notificationCenterVariant;
    V = r && i === v.U5.SIDEBAR ? { channelId: n, messageId: t } : null;
}
function el(e) {
    let { channelId: t, messageId: n } = e;
    (0, C.zo)({ channelId: t, id: n }, V) && (V = null);
}
function eu() {
    M = !1;
}
function ec() {
    V = null;
}
function ed(e) {
    let { channel: t } = e;
    if (T.Ay.allowNoMessages(t)) return !1;
    q();
}
function e_(e) {
    let { userId: t } = e;
    if (t !== y.default.getCurrentUser()?.id) return !1;
    q();
}
function ef(e) {
    let { id: t, addedMembers: n, removedMemberIds: r } = e,
        i = y.default.getCurrentUser()?.id;
    if (null == i) return !1;
    if (n?.some((e) => e.userId === i)) {
        let e = p.A.getBasicChannel(t);
        return !(null == e || d.A.isMuted(t)) && (0, _.l)(e) !== O.CP.NO_MESSAGES && void q();
    }
    return !!r?.includes(i) && void q();
}
function eh(e) {
    let { channel: t } = e;
    if (!x.getMessages().some((e) => e.channelId === t.id)) return !1;
    q();
}
function ep(e) {
    let { guild: t } = e;
    if (!x.getMessages().some((e) => e.guildId === t.id)) return !1;
    q();
}
function em(e) {
    let { navOnClick: t } = e;
    j = t ?? !0;
}
class eg extends a.Ay.Store {
    static displayName = "NotificationsInboxStore";
    initialize() {
        this.waitFor(c.A, p.A, g.Ay, d.A, E.A, A.Ay, u.Ay, I.Ay, T.Ay, y.default);
    }
    canLoadMore(e) {
        let { preload: t } = e;
        return ea({ preload: t });
    }
    getInboxMessages() {
        return x.getMessages();
    }
    getNotifyingChannelIds() {
        return L;
    }
    getChannelInfoMap() {
        return D;
    }
    get oldestDisplayedMessageId() {
        return G;
    }
    get hasMoreToLoad() {
        return F;
    }
    get isLoading() {
        return P;
    }
    get hasLoadedEver() {
        return k;
    }
    get hasPreloaded() {
        return U;
    }
    get isLoadingComplete() {
        return !P && !F;
    }
    get selectedItemInfo() {
        return V;
    }
    get currentRequestAnalyticsPayload() {
        return B;
    }
    getDevOverrides() {
        return { navOnClick: j };
    }
}
let eE = new eg(s.h, {
    LOAD_RECENT_MENTIONS_SUCCESS: ee,
    LOAD_MESSAGES_SUCCESS: J,
    MESSAGE_CREATE: Q,
    MESSAGE_DELETE: et,
    RECENT_MENTION_DELETE: et,
    MESSAGE_DELETE_BULK: en,
    CONNECTION_OPEN: q,
    LOGOUT: X,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: q,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: q,
    GUILD_CREATE: q,
    USER_GUILD_SETTINGS_GUILD_UPDATE: q,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: q,
    CHANNEL_CREATE: ed,
    GUILD_DELETE: ep,
    THREAD_DELETE: eh,
    CHANNEL_DELETE: eh,
    THREAD_MEMBER_UPDATE: e_,
    THREAD_MEMBERS_UPDATE: ef,
    NOTIFICATIONS_INBOX_OPEN: eu,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: er,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: ei,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: es,
    NOTIFICATIONS_INBOX_ITEM_CLICK: eo,
    NOTIFICATIONS_INBOX_ITEM_ACK: el,
    NOTIFICATIONS_INBOX_CLOSE: ec,
    NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES: em,
});
