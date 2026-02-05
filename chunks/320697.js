"use strict";
n.d(t, { A: () => eg }), n(321073), n(839272);
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
    p = n(383233),
    h = n(734057),
    m = n(808728),
    g = n(320501),
    E = n(222823),
    A = n(711014),
    I = n(543465),
    T = n(287809),
    y = n(661191),
    S = n(851109),
    v = n(394953),
    C = n(28156),
    b = n(849077),
    N = n(652215),
    R = n(37411);
let O = {},
    D = null,
    L = [],
    w = new C.A(),
    x = !1,
    P = !1,
    M = !1,
    k = !1,
    U = y.default.fromTimestamp(Date.now()),
    G = !0,
    V = null,
    F = null,
    B = !0;
function j() {
    let e = A.Ay.getFlattenedGuildIds().flatMap((e) => m.Ay.getSelectableChannelIds(e)),
        t = c.A.getAllActiveJoinedThreads(),
        n = (e) =>
            !(!N.kvI.GUILD_TEXTUAL.has(e.type) || (0, o.UK)(e.id)) &&
            ((0, f.fT)(e.type) ? (0, _.l)(e) === R.CP.ALL_MESSAGES && !d.A.isMuted(e.id) : I.Ay.allowAllMessages(e)),
        r = [];
    for (let t of e) {
        let e = h.A.getBasicChannel(t);
        null != e && n(e) && r.push(e);
    }
    for (let e in t)
        for (let i in t[e])
            for (let a in t[e][i]) {
                let e = h.A.getBasicChannel(a);
                null != e && n(e) && r.push(e);
            }
    return r
        .map((e) => e.id)
        .sort((e, t) => {
            let n = E.Ay.hasUnread(e);
            return n !== E.Ay.hasUnread(t)
                ? n
                    ? -1
                    : 1
                : y.default.compare(E.Ay.lastMessageId(t), E.Ay.lastMessageId(e));
        })
        .reduce(
            (e, t) => (
                E.Ay.lastMessageTimestamp(t) > Date.now() - b.V$
                    ? e.notifyingChannelIds.push(t)
                    : e.staleChannelIds.push(t),
                e
            ),
            { notifyingChannelIds: [], staleChannelIds: [] },
        );
}
function H(e) {
    if (!g.A.isReady(e)) return;
    let t = h.A.getBasicChannel(e),
        n = g.A.getMessages(e);
    if (n.hasPresent() && 0 !== n.length)
        return w.addChannelMessages({ channel: t, channelMessages: n, userId: T.default.getCurrentUser()?.id }), n;
}
function Y() {
    if (null == D) {
        U = y.default.fromTimestamp(Date.now());
        return;
    }
    for (let e of D.toSorted((e, t) => y.default.compare(E.Ay.lastMessageId(t), E.Ay.lastMessageId(e)))) {
        let t = O[e];
        if (t.loadState === b.Ve.UNLOADED && null != t.mostRecentMessageId) {
            U = t.mostRecentMessageId;
            return;
        }
    }
    U = "0";
}
function W() {
    let { notifyingChannelIds: e, staleChannelIds: t } = j();
    (D = e), (L = t), i()(null != D, "notifyingChannelIds should not be null");
    let n = D.filter((e) => null == O[e]),
        r = Object.keys(O).filter((e) => !D?.includes(e));
    if (0 !== D.length && 0 === n.length && 0 === r.length) return !1;
    for (let e of r) delete O[e];
    for (let e of n)
        if (((O[e] = { loadState: b.Ve.UNLOADED, mostRecentMessageId: E.Ay.lastMessageId(e) }), g.A.isReady(e))) {
            let t = H(e);
            null != t &&
                ((O[e].loadState = b.Ve.LOADED), (O[e].mostRecentMessageId = t.last()?.id ?? O[e].mostRecentMessageId));
        }
    w.updateChannelIds(D), Y();
}
function K() {
    (O = {}),
        (D = null),
        (L = []),
        (w = new C.A()),
        (x = !1),
        (P = !1),
        (M = !1),
        (U = y.default.fromTimestamp(Date.now())),
        (G = !0),
        (k = !1),
        (F = null),
        (V = null);
}
function z() {
    for (let e of (W(), D ?? [])) {
        let t = H(e);
        null != t && ((O[e].loadState = b.Ve.LOADED), (O[e].mostRecentMessageId = t.last()?.id ?? null), Y());
    }
    let e = u.Ay.getSettingsFilteredMentions() ?? [];
    w.addMessages(
        e.map((e) => ({
            id: e.id,
            channelId: e.channel_id,
            guildId: h.A.getBasicChannel(e.channel_id)?.guild_id,
            kind: b.yL.MENTION,
            message: e,
        })),
    );
}
function $() {
    K(), z();
}
function q() {
    K();
}
function Z(e) {
    if (e instanceof p.Ay) return e;
    let t = g.A.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, l.rh)(e);
}
function Q(e) {
    let { channelId: t, message: n } = e;
    if (null == D || n.author?.id === T.default.getCurrentUser()?.id) return !1;
    let r = D.includes(t);
    if ((0, o.UK)(t)) return !1;
    let i = Z(n),
        a = i.mentioned;
    if (!r && !a) {
        if (!L.includes(t)) return !1;
        W();
    }
    if (!r && a && !(0, u.pK)(i)) return !1;
    w.addMessage({
        id: n.id,
        channelId: n.channel_id,
        guildId: h.A.getBasicChannel(n.channel_id)?.guild_id,
        kind: a ? b.yL.MENTION : b.yL.ALL_MESSAGES_CHANNEL,
        message: i,
    });
}
function X(e) {
    let { channelId: t } = e;
    if (!D?.includes(t)) return !1;
    let n = H(t);
    if (null == n) return !1;
    let r = n.length >= b.EM || (n.hasFetched && !n.hasMoreBefore);
    O[t].loadState !== b.Ve.LOADED && (O[t].loadState = r ? b.Ve.LOADED : b.Ve.LOADED_UNREAD), Y();
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
            kind: b.yL.MENTION,
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
    x = !0;
}
function er(e) {
    let { preload: t, hasMoreToLoad: n, analyticsPayload: r } = e;
    (x = !1), t ? (k = !0) : (null != n && (G = n), (M = !0)), (F = r ?? null);
}
function ei(e) {
    let { preload: t } = e;
    return (
        null !=
            (0, S.GE)({ location: "NotificationsInboxStore.canLoadMore", autoTrackExposure: !1 })
                ?.notificationCenterVariant &&
        null != D &&
        !x &&
        !P &&
        (!t || !k) &&
        G
    );
}
function ea() {
    (x = !1), (F = null), (P = !0);
}
function es(e) {
    let { messageId: t, channelId: n, isUnread: r } = e,
        i = (0, S.GE)({ location: "handleInboxItemClick" }).notificationCenterVariant;
    V = r && i === S.U5.SIDEBAR ? { channelId: n, messageId: t } : null;
}
function eo(e) {
    let { channelId: t, messageId: n } = e;
    (0, v.zo)({ channelId: t, id: n }, V) && (V = null);
}
function el() {
    P = !1;
}
function eu() {
    V = null;
}
function ec(e) {
    let { channel: t } = e;
    if (I.Ay.allowNoMessages(t)) return !1;
    $();
}
function ed(e) {
    let { userId: t } = e;
    if (t !== T.default.getCurrentUser()?.id) return !1;
    $();
}
function e_(e) {
    let { id: t, addedMembers: n, removedMemberIds: r } = e,
        i = T.default.getCurrentUser()?.id;
    if (null == i) return !1;
    if (n?.some((e) => e.userId === i)) {
        let e = h.A.getBasicChannel(t);
        return !(null == e || d.A.isMuted(t)) && (0, _.l)(e) !== R.CP.NO_MESSAGES && void $();
    }
    return !!r?.includes(i) && void $();
}
function ef(e) {
    let { channel: t } = e;
    if (!w.getMessages().some((e) => e.channelId === t.id)) return !1;
    $();
}
function ep(e) {
    let { guild: t } = e;
    if (!w.getMessages().some((e) => e.guildId === t.id)) return !1;
    $();
}
function eh(e) {
    let { navOnClick: t } = e;
    B = t ?? !0;
}
class em extends a.Ay.Store {
    static displayName = "NotificationsInboxStore";
    initialize() {
        this.waitFor(c.A, h.A, m.Ay, d.A, g.A, E.Ay, u.Ay, A.Ay, I.Ay, T.default);
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
        return O;
    }
    get oldestDisplayedMessageId() {
        return U;
    }
    get hasMoreToLoad() {
        return G;
    }
    get isLoading() {
        return x;
    }
    get hasLoadedEver() {
        return M;
    }
    get hasPreloaded() {
        return k;
    }
    get isLoadingComplete() {
        return !x && !G;
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
let eg = new em(s.h, {
    LOAD_RECENT_MENTIONS_SUCCESS: J,
    LOAD_MESSAGES_SUCCESS: X,
    MESSAGE_CREATE: Q,
    MESSAGE_DELETE: ee,
    RECENT_MENTION_DELETE: ee,
    MESSAGE_DELETE_BULK: et,
    CONNECTION_OPEN: $,
    LOGOUT: q,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: $,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: $,
    GUILD_CREATE: $,
    USER_GUILD_SETTINGS_GUILD_UPDATE: $,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: $,
    CHANNEL_CREATE: ec,
    GUILD_DELETE: ep,
    THREAD_DELETE: ef,
    CHANNEL_DELETE: ef,
    THREAD_MEMBER_UPDATE: ed,
    THREAD_MEMBERS_UPDATE: e_,
    NOTIFICATIONS_INBOX_OPEN: el,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: en,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: er,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: ea,
    NOTIFICATIONS_INBOX_ITEM_CLICK: es,
    NOTIFICATIONS_INBOX_ITEM_ACK: eo,
    NOTIFICATIONS_INBOX_CLOSE: eu,
    NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES: eh,
});
