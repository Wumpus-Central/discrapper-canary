"use strict";
n.d(t, { A: () => en }), n(938796), n(321073), n(839272);
var i = n(284009),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(323073),
    l = n(320095),
    u = n(135978),
    c = n(695633),
    d = n(152007),
    _ = n(607508),
    h = n(95701),
    f = n(383233),
    p = n(734057),
    E = n(808728),
    m = n(232835),
    g = n(222823),
    A = n(994500),
    I = n(711014),
    T = n(543465),
    S = n(287809),
    y = n(567761),
    C = n(935208),
    N = n(851109),
    v = n(394953),
    R = n(735438),
    O = n.n(R),
    b = n(849077);
class D {
    _messages = [];
    _isSorted = !0;
    _channelIds = new Set();
    updateChannelIds(e) {
        (this._channelIds = new Set(e)),
            (this._messages = this._messages.filter(
                (e) => e.kind !== b.yL.ALL_MESSAGES_CHANNEL || this._channelIds.has(e.channelId),
            ));
    }
    addMessage(e) {
        (this._messages = [...this._messages, e]), this.maybeTruncate();
    }
    addChannelMessages(e) {
        let { channel: t, channelMessages: n, userId: i } = e;
        (this._messages = [
            ...this._messages,
            ...n
                .filter((e) => e.author.id !== i && C.default.age(e.id) < b.V$)
                .map((e) => ({
                    id: e.id,
                    channelId: e.channel_id,
                    guildId: t?.guild_id,
                    kind: e.mentioned ? b.yL.MENTION : b.yL.ALL_MESSAGES_CHANNEL,
                    message: e,
                })),
        ]),
            (this._isSorted = !1),
            this.maybeTruncate();
    }
    addMessages(e) {
        (this._messages = [...this._messages, ...e]), (this._isSorted = !1), this.maybeTruncate();
    }
    deleteMessages(e) {
        return (
            !!this._messages.some((t) => e.includes(t.id)) &&
            ((this._messages = this._messages.filter((t) => !e.includes(t.id))), !0)
        );
    }
    getMessages() {
        return this._isSorted || this.sortMessages(), this._messages;
    }
    sortMessages() {
        this._isSorted ||
            ((this._messages = O().sortedUniqBy(
                this._messages.toSorted((e, t) => {
                    let n = C.default.compare(e.id, t.id);
                    return 0 !== n
                        ? n
                        : e.kind === b.yL.MENTION && t.kind !== b.yL.MENTION
                          ? -1
                          : +(e.kind !== b.yL.MENTION && t.kind === b.yL.MENTION);
                }),
                "id",
            )),
            (this._isSorted = !0));
    }
    maybeTruncate() {
        let e = b.EM * (this._channelIds.size + 1) * 1.5;
        if (this._messages.length <= e) return;
        let t = {};
        for (let e of this._messages)
            C.default.age(e.id) > b.V$ ||
                (null == t[e.channelId] && (t[e.channelId] = { mentions: [], messages: [] }),
                e.kind === b.yL.MENTION ? t[e.channelId].mentions.push(e) : t[e.channelId].messages.push(e));
        let n = [];
        Object.values(t).forEach((e) => {
            let t = [...e.mentions, ...e.messages].sort((e, t) => C.default.compare(e.id, t.id)).slice(-b.EM),
                i = new Set(),
                r = [];
            for (let e of t) i.add(e.id), r.push(e);
            for (let t of e.mentions) i.has(t.id) || r.push(t);
            n.push(...r);
        }),
            (this._messages = n),
            (this._isSorted = !1);
    }
}
var L = n(652215),
    w = n(790782),
    M = n(37411);
let P = {},
    x = null,
    k = [],
    U = new D(),
    G = !1,
    F = !1,
    V = !1,
    B = !1,
    j = C.default.fromTimestamp(Date.now()),
    H = !0,
    Y = null,
    W = null,
    K = !0;
function $(e) {
    if (!m.A.isReady(e)) return;
    let t = p.A.getBasicChannel(e),
        n = m.A.getMessages(e);
    if (n.hasPresent() && 0 !== n.length)
        return U.addChannelMessages({ channel: t, channelMessages: n, userId: S.default.getCurrentUser()?.id }), n;
}
function z() {
    if (null == x) {
        j = C.default.fromTimestamp(Date.now());
        return;
    }
    for (let e of x.toSorted((e, t) => C.default.compare(g.Ay.lastMessageId(t), g.Ay.lastMessageId(e)))) {
        let t = P[e];
        if (t.loadState === b.Ve.UNLOADED && null != t.mostRecentMessageId) {
            j = t.mostRecentMessageId;
            return;
        }
    }
    j = "0";
}
function q() {
    let { notifyingChannelIds: e, staleChannelIds: t } = (function () {
        let e = I.Ay.getFlattenedGuildIds().flatMap((e) => E.Ay.getSelectableChannelIds(e)),
            t = c.A.getAllActiveJoinedThreads(),
            n = (e) => {
                if (L.kvI.ALL_DMS.has(e.type)) {
                    if (T.Ay.isGuildOrCategoryOrChannelMuted(null, e.id)) return !1;
                    if (e.type === L.rbe.DM) {
                        let t = p.A.getChannel(e.id),
                            n = t?.isDM() === !0 ? t.getRecipientId() : void 0;
                        if (null != n && A.A.isBlocked(n)) return !1;
                    }
                    return !0;
                }
                if (
                    !L.kvI.GUILD_TEXTUAL.has(e.type) ||
                    (0, o.UK)(e.id) ||
                    T.Ay.resolveUnreadSetting(e) === w.e.ONLY_MENTIONS
                )
                    return !1;
                if ((0, h.fT)(e.type)) {
                    let t = (0, _.l)(e);
                    if (t === M.CP.NO_MESSAGES || t === M.CP.ONLY_MENTIONS) return !1;
                    let n = d.A.flags(e.id);
                    if (null == n || (n & M.CP.ALL_MESSAGES) == 0) {
                        let t = p.A.getBasicChannel(e.parent_id);
                        if (null != t && T.Ay.resolveUnreadSetting(t) === w.e.ONLY_MENTIONS) return !1;
                    }
                    return !d.A.isMuted(e.id);
                }
                return T.Ay.useNewNotifications
                    ? !T.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) &&
                          T.Ay.resolvedMessageNotifications(e) !== L.orn.NO_MESSAGES &&
                          (!T.Ay.isOptInEnabled(e.guild_id) || T.Ay.isChannelRecordOrParentOptedIn(e))
                    : T.Ay.allowAllMessages(e);
            },
            i = [];
        for (let t of e) {
            let e = p.A.getBasicChannel(t);
            null != e && n(e) && i.push(e);
        }
        for (let e in t)
            for (let r in t[e])
                for (let s in t[e][r]) {
                    let e = p.A.getBasicChannel(s);
                    null != e && n(e) && i.push(e);
                }
        for (let e of y.default.getPrivateChannelIds()) {
            let t = p.A.getBasicChannel(e);
            null != t && n(t) && i.push(t);
        }
        return i
            .map((e) => e.id)
            .sort((e, t) => {
                let n = g.Ay.hasUnread(e);
                return n !== g.Ay.hasUnread(t)
                    ? n
                        ? -1
                        : 1
                    : C.default.compare(g.Ay.lastMessageId(t), g.Ay.lastMessageId(e));
            })
            .reduce(
                (e, t) => (
                    g.Ay.lastMessageTimestamp(t) > Date.now() - b.V$
                        ? e.notifyingChannelIds.push(t)
                        : e.staleChannelIds.push(t),
                    e
                ),
                { notifyingChannelIds: [], staleChannelIds: [] },
            );
    })();
    (x = e), (k = t), r()(null != x, "notifyingChannelIds should not be null");
    let n = x.filter((e) => null == P[e]),
        i = Object.keys(P).filter((e) => !x?.includes(e));
    if (0 !== x.length && 0 === n.length && 0 === i.length) return !1;
    for (let e of i) delete P[e];
    for (let e of n)
        if (((P[e] = { loadState: b.Ve.UNLOADED, mostRecentMessageId: g.Ay.lastMessageId(e) }), m.A.isReady(e))) {
            let t = $(e);
            null != t &&
                ((P[e].loadState = b.Ve.LOADED), (P[e].mostRecentMessageId = t.last()?.id ?? P[e].mostRecentMessageId));
        }
    U.updateChannelIds(x), z();
}
function Z() {
    (P = {}),
        (x = null),
        (k = []),
        (U = new D()),
        (G = !1),
        (F = !1),
        (V = !1),
        (j = C.default.fromTimestamp(Date.now())),
        (H = !0),
        (B = !1),
        (W = null),
        (Y = null);
}
function X() {
    for (let e of (Z(), q(), x ?? [])) {
        let t = $(e);
        null != t && ((P[e].loadState = b.Ve.LOADED), (P[e].mostRecentMessageId = t.last()?.id ?? null));
    }
    z();
    let e = u.Ay.getSettingsFilteredMentions() ?? [];
    U.addMessages(
        e.map((e) => ({
            id: e.id,
            channelId: e.channel_id,
            guildId: p.A.getBasicChannel(e.channel_id)?.guild_id,
            kind: b.yL.MENTION,
            message: e,
        })),
    );
}
function Q() {
    let e = q(),
        t = (function () {
            let e = u.Ay.getSettingsFilteredMentions();
            if (null == e) return !1;
            let t = new Set(e.map((e) => e.id)),
                n = new Set((u.Ay.getMentions() ?? []).map((e) => e.id)),
                i = new Set(),
                r = [];
            for (let e of U.getMessages())
                e.kind === b.yL.MENTION && (i.add(e.id), n.has(e.id) && !t.has(e.id) && r.push(e.id));
            let s = e
                    .filter((e) => !i.has(e.id))
                    .map((e) => ({
                        id: e.id,
                        channelId: e.channel_id,
                        guildId: p.A.getBasicChannel(e.channel_id)?.guild_id,
                        kind: b.yL.MENTION,
                        message: e,
                    })),
                a = U.deleteMessages(r);
            return s.length > 0 ? (U.addMessages(s), !0) : a;
        })();
    if (!1 === e && !t) return !1;
}
function J(e) {
    let { id: t } = e;
    return U.deleteMessages([t]);
}
function ee(e) {
    let { channel: t } = e;
    if (!U.getMessages().some((e) => e.channelId === t.id)) return !1;
    X();
}
class et extends s.Ay.Store {
    static displayName = "NotificationsInboxStore";
    initialize() {
        this.waitFor(c.A, p.A, E.Ay, d.A, m.A, y.default, g.Ay, u.Ay, A.A, I.Ay, T.Ay, S.default);
    }
    canLoadMore(e) {
        let { preload: t } = e;
        return (function (e) {
            let { preload: t } = e;
            return (
                null != (0, N.GE)({ location: "NotificationsInboxStore.canLoadMore" })?.notificationCenterVariant &&
                null != x &&
                !G &&
                !F &&
                (!t || !B) &&
                H
            );
        })({ preload: t });
    }
    getInboxMessages() {
        return U.getMessages();
    }
    getNotifyingChannelIds() {
        return x;
    }
    getChannelInfoMap() {
        return P;
    }
    get oldestDisplayedMessageId() {
        return j;
    }
    get hasMoreToLoad() {
        return H;
    }
    get isLoading() {
        return G;
    }
    get hasLoadedEver() {
        return V;
    }
    get hasPreloaded() {
        return B;
    }
    get isLoadingComplete() {
        return !G && !H;
    }
    get selectedItemInfo() {
        return Y;
    }
    get currentRequestAnalyticsPayload() {
        return W;
    }
    getDevOverrides() {
        return { navOnClick: K };
    }
}
let en = new et(a.h, {
    LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
        let { messages: t } = e;
        if (0 === t.length) return !1;
        let n = u.Ay.getSettingsFilteredMentions();
        if (null == n || 0 === n.length) return !1;
        U.addMessages(
            n.map((e) => ({
                id: e.id,
                channelId: e.channel_id,
                guildId: p.A.getBasicChannel(e.channel_id)?.guild_id,
                kind: b.yL.MENTION,
                message: e,
            })),
        );
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t } = e;
        if (!x?.includes(t)) return !1;
        let n = $(t);
        if (null == n) return !1;
        let i = n.length >= b.EM || (n.hasFetched && !n.hasMoreBefore);
        P[t].loadState !== b.Ve.LOADED && (P[t].loadState = i ? b.Ve.LOADED : b.Ve.LOADED_UNREAD);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (null == x || n.author?.id === S.default.getCurrentUser()?.id) return !1;
        let i = x.includes(t);
        if ((0, o.UK)(t)) return !1;
        let r = (function (e) {
                if (e instanceof f.Ay) return e;
                let t = m.A.getMessage(e.channel_id, e.id);
                return null != t ? t : (0, l.rh)(e);
            })(n),
            s = r.mentioned;
        if (!i) {
            if (k.includes(t)) q();
            else if (!s) return !1;
            else if (!(0, u.pK)(r)) return !1;
        }
        U.addMessage({
            id: n.id,
            channelId: n.channel_id,
            guildId: p.A.getBasicChannel(n.channel_id)?.guild_id,
            kind: s ? b.yL.MENTION : b.yL.ALL_MESSAGES_CHANNEL,
            message: r,
        });
    },
    MESSAGE_DELETE: J,
    RECENT_MENTION_DELETE: J,
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t } = e;
        return U.deleteMessages(t);
    },
    CONNECTION_OPEN: X,
    LOGOUT: function () {
        Z();
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: Q,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: Q,
    USER_GUILD_SETTINGS_GUILD_UPDATE: Q,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: Q,
    GUILD_CREATE: X,
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (T.Ay.allowNoMessages(t)) return !1;
        X();
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (!U.getMessages().some((e) => e.guildId === t.id)) return !1;
        X();
    },
    THREAD_DELETE: ee,
    CHANNEL_DELETE: ee,
    THREAD_MEMBER_UPDATE: function (e) {
        let { userId: t } = e;
        if (t !== S.default.getCurrentUser()?.id) return !1;
        X();
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let { id: t, addedMembers: n, removedMemberIds: i } = e,
            r = S.default.getCurrentUser()?.id;
        if (null == r) return !1;
        if (n?.some((e) => e.userId === r)) {
            let e = p.A.getBasicChannel(t);
            return !(null == e || d.A.isMuted(t)) && (0, _.l)(e) !== M.CP.NO_MESSAGES && void X();
        }
        return !!i?.includes(r) && void X();
    },
    NOTIFICATIONS_INBOX_OPEN: function () {
        F = !1;
    },
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: function () {
        G = !0;
    },
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: function (e) {
        let { preload: t, hasMoreToLoad: n, analyticsPayload: i } = e;
        (G = !1), t && (B = !0), null != n && (H = n), t || (V = !0), z(), (W = i ?? null);
    },
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: function () {
        (G = !1), (W = null), (F = !0);
    },
    NOTIFICATIONS_INBOX_ITEM_CLICK: function (e) {
        let { messageId: t, channelId: n, isUnread: i } = e,
            r = (0, N.GE)({ location: "handleInboxItemClick" }).notificationCenterVariant;
        Y = i && r === N.U5.SIDEBAR ? { channelId: n, messageId: t } : null;
    },
    NOTIFICATIONS_INBOX_ITEM_ACK: function (e) {
        let { channelId: t, messageId: n } = e;
        (0, v.zo)({ channelId: t, id: n }, Y) && (Y = null);
    },
    NOTIFICATIONS_INBOX_CLOSE: function () {
        Y = null;
    },
    NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES: function (e) {
        let { navOnClick: t } = e;
        K = t ?? !0;
    },
});
