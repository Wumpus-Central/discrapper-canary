"use strict";
n.d(t, { A: () => J }), n(938796), n(321073), n(839272);
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
    f = n(95701),
    h = n(383233),
    p = n(734057),
    E = n(808728),
    m = n(232835),
    g = n(222823),
    A = n(711014),
    I = n(543465),
    T = n(287809),
    S = n(935208),
    N = n(851109),
    y = n(394953),
    C = n(735438),
    v = n.n(C),
    O = n(849077);
class R {
    _messages = [];
    _isSorted = !0;
    _channelIds = new Set();
    updateChannelIds(e) {
        (this._channelIds = new Set(e)),
            (this._messages = this._messages.filter(
                (e) => e.kind !== O.yL.ALL_MESSAGES_CHANNEL || this._channelIds.has(e.channelId),
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
                .filter((e) => e.author.id !== i && S.default.age(e.id) < O.V$)
                .map((e) => ({
                    id: e.id,
                    channelId: e.channel_id,
                    guildId: t?.guild_id,
                    kind: e.mentioned ? O.yL.MENTION : O.yL.ALL_MESSAGES_CHANNEL,
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
            ((this._messages = v().sortedUniqBy(
                this._messages.toSorted((e, t) => {
                    let n = S.default.compare(e.id, t.id);
                    return 0 !== n
                        ? n
                        : e.kind === O.yL.MENTION && t.kind !== O.yL.MENTION
                          ? -1
                          : +(e.kind !== O.yL.MENTION && t.kind === O.yL.MENTION);
                }),
                "id",
            )),
            (this._isSorted = !0));
    }
    maybeTruncate() {
        let e = O.EM * (this._channelIds.size + 1) * 1.5;
        if (this._messages.length <= e) return;
        let t = {};
        for (let e of this._messages)
            S.default.age(e.id) > O.V$ ||
                (null == t[e.channelId] && (t[e.channelId] = { mentions: [], messages: [] }),
                e.kind === O.yL.MENTION ? t[e.channelId].mentions.push(e) : t[e.channelId].messages.push(e));
        let n = [];
        Object.values(t).forEach((e) => {
            let t = [...e.mentions, ...e.messages].sort((e, t) => S.default.compare(e.id, t.id)).slice(-O.EM),
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
var b = n(652215),
    D = n(790782),
    L = n(37411);
let w = {},
    M = null,
    P = [],
    x = new R(),
    U = !1,
    k = !1,
    G = !1,
    F = !1,
    V = S.default.fromTimestamp(Date.now()),
    B = !0,
    H = null,
    j = null,
    Y = !0;
function W(e) {
    if (!m.A.isReady(e)) return;
    let t = p.A.getBasicChannel(e),
        n = m.A.getMessages(e);
    if (n.hasPresent() && 0 !== n.length)
        return x.addChannelMessages({ channel: t, channelMessages: n, userId: T.default.getCurrentUser()?.id }), n;
}
function K() {
    if (null == M) {
        V = S.default.fromTimestamp(Date.now());
        return;
    }
    for (let e of M.toSorted((e, t) => S.default.compare(g.Ay.lastMessageId(t), g.Ay.lastMessageId(e)))) {
        let t = w[e];
        if (t.loadState === O.Ve.UNLOADED && null != t.mostRecentMessageId) {
            V = t.mostRecentMessageId;
            return;
        }
    }
    V = "0";
}
function z() {
    let { notifyingChannelIds: e, staleChannelIds: t } = (function () {
        let e = A.Ay.getFlattenedGuildIds().flatMap((e) => E.Ay.getSelectableChannelIds(e)),
            t = c.A.getAllActiveJoinedThreads(),
            n = (e) => {
                if (
                    !b.kvI.GUILD_TEXTUAL.has(e.type) ||
                    (0, o.UK)(e.id) ||
                    I.Ay.resolveUnreadSetting(e) === D.e.ONLY_MENTIONS
                )
                    return !1;
                if ((0, f.fT)(e.type)) {
                    let t = (0, _.l)(e);
                    if (t === L.CP.NO_MESSAGES || t === L.CP.ONLY_MENTIONS) return !1;
                    let n = d.A.flags(e.id);
                    if (null == n || (n & L.CP.ALL_MESSAGES) == 0) {
                        let t = p.A.getBasicChannel(e.parent_id);
                        if (null != t && I.Ay.resolveUnreadSetting(t) === D.e.ONLY_MENTIONS) return !1;
                    }
                    return !d.A.isMuted(e.id);
                }
                return I.Ay.useNewNotifications
                    ? !I.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) &&
                          I.Ay.resolvedMessageNotifications(e) !== b.orn.NO_MESSAGES &&
                          (!I.Ay.isOptInEnabled(e.guild_id) || I.Ay.isChannelRecordOrParentOptedIn(e))
                    : I.Ay.allowAllMessages(e);
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
        return i
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
                    g.Ay.lastMessageTimestamp(t) > Date.now() - O.V$
                        ? e.notifyingChannelIds.push(t)
                        : e.staleChannelIds.push(t),
                    e
                ),
                { notifyingChannelIds: [], staleChannelIds: [] },
            );
    })();
    (M = e), (P = t), r()(null != M, "notifyingChannelIds should not be null");
    let n = M.filter((e) => null == w[e]),
        i = Object.keys(w).filter((e) => !M?.includes(e));
    if (0 !== M.length && 0 === n.length && 0 === i.length) return !1;
    for (let e of i) delete w[e];
    for (let e of n)
        if (((w[e] = { loadState: O.Ve.UNLOADED, mostRecentMessageId: g.Ay.lastMessageId(e) }), m.A.isReady(e))) {
            let t = W(e);
            null != t &&
                ((w[e].loadState = O.Ve.LOADED), (w[e].mostRecentMessageId = t.last()?.id ?? w[e].mostRecentMessageId));
        }
    x.updateChannelIds(M), K();
}
function $() {
    (w = {}),
        (M = null),
        (P = []),
        (x = new R()),
        (U = !1),
        (k = !1),
        (G = !1),
        (V = S.default.fromTimestamp(Date.now())),
        (B = !0),
        (F = !1),
        (j = null),
        (H = null);
}
function q() {
    for (let e of ($(), z(), M ?? [])) {
        let t = W(e);
        null != t && ((w[e].loadState = O.Ve.LOADED), (w[e].mostRecentMessageId = t.last()?.id ?? null));
    }
    K();
    let e = u.Ay.getSettingsFilteredMentions() ?? [];
    x.addMessages(
        e.map((e) => ({
            id: e.id,
            channelId: e.channel_id,
            guildId: p.A.getBasicChannel(e.channel_id)?.guild_id,
            kind: O.yL.MENTION,
            message: e,
        })),
    );
}
function Z(e) {
    let { id: t } = e;
    return x.deleteMessages([t]);
}
function X(e) {
    let { channel: t } = e;
    if (!x.getMessages().some((e) => e.channelId === t.id)) return !1;
    q();
}
class Q extends s.Ay.Store {
    static displayName = "NotificationsInboxStore";
    initialize() {
        this.waitFor(c.A, p.A, E.Ay, d.A, m.A, g.Ay, u.Ay, A.Ay, I.Ay, T.default);
    }
    canLoadMore(e) {
        let { preload: t } = e;
        return (function (e) {
            let { preload: t } = e;
            return (
                null != (0, N.GE)({ location: "NotificationsInboxStore.canLoadMore" })?.notificationCenterVariant &&
                null != M &&
                !U &&
                !k &&
                (!t || !F) &&
                B
            );
        })({ preload: t });
    }
    getInboxMessages() {
        return x.getMessages();
    }
    getNotifyingChannelIds() {
        return M;
    }
    getChannelInfoMap() {
        return w;
    }
    get oldestDisplayedMessageId() {
        return V;
    }
    get hasMoreToLoad() {
        return B;
    }
    get isLoading() {
        return U;
    }
    get hasLoadedEver() {
        return G;
    }
    get hasPreloaded() {
        return F;
    }
    get isLoadingComplete() {
        return !U && !B;
    }
    get selectedItemInfo() {
        return H;
    }
    get currentRequestAnalyticsPayload() {
        return j;
    }
    getDevOverrides() {
        return { navOnClick: Y };
    }
}
let J = new Q(a.h, {
    LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
        let { messages: t } = e;
        if (0 === t.length) return !1;
        let n = u.Ay.getSettingsFilteredMentions();
        if (null == n || 0 === n.length) return !1;
        x.addMessages(
            n.map((e) => ({
                id: e.id,
                channelId: e.channel_id,
                guildId: p.A.getBasicChannel(e.channel_id)?.guild_id,
                kind: O.yL.MENTION,
                message: e,
            })),
        );
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t } = e;
        if (!M?.includes(t)) return !1;
        let n = W(t);
        if (null == n) return !1;
        let i = n.length >= O.EM || (n.hasFetched && !n.hasMoreBefore);
        w[t].loadState !== O.Ve.LOADED && (w[t].loadState = i ? O.Ve.LOADED : O.Ve.LOADED_UNREAD);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (null == M || n.author?.id === T.default.getCurrentUser()?.id) return !1;
        let i = M.includes(t);
        if ((0, o.UK)(t)) return !1;
        let r = (function (e) {
                if (e instanceof h.Ay) return e;
                let t = m.A.getMessage(e.channel_id, e.id);
                return null != t ? t : (0, l.rh)(e);
            })(n),
            s = r.mentioned;
        if (!i && !s) {
            if (!P.includes(t)) return !1;
            z();
        }
        if (!i && s && !(0, u.pK)(r)) return !1;
        x.addMessage({
            id: n.id,
            channelId: n.channel_id,
            guildId: p.A.getBasicChannel(n.channel_id)?.guild_id,
            kind: s ? O.yL.MENTION : O.yL.ALL_MESSAGES_CHANNEL,
            message: r,
        });
    },
    MESSAGE_DELETE: Z,
    RECENT_MENTION_DELETE: Z,
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t } = e;
        return x.deleteMessages(t);
    },
    CONNECTION_OPEN: q,
    LOGOUT: function () {
        $();
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: q,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: q,
    GUILD_CREATE: q,
    USER_GUILD_SETTINGS_GUILD_UPDATE: q,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: q,
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (I.Ay.allowNoMessages(t)) return !1;
        q();
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (!x.getMessages().some((e) => e.guildId === t.id)) return !1;
        q();
    },
    THREAD_DELETE: X,
    CHANNEL_DELETE: X,
    THREAD_MEMBER_UPDATE: function (e) {
        let { userId: t } = e;
        if (t !== T.default.getCurrentUser()?.id) return !1;
        q();
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let { id: t, addedMembers: n, removedMemberIds: i } = e,
            r = T.default.getCurrentUser()?.id;
        if (null == r) return !1;
        if (n?.some((e) => e.userId === r)) {
            let e = p.A.getBasicChannel(t);
            return !(null == e || d.A.isMuted(t)) && (0, _.l)(e) !== L.CP.NO_MESSAGES && void q();
        }
        return !!i?.includes(r) && void q();
    },
    NOTIFICATIONS_INBOX_OPEN: function () {
        k = !1;
    },
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: function () {
        U = !0;
    },
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: function (e) {
        let { preload: t, hasMoreToLoad: n, analyticsPayload: i } = e;
        (U = !1), t && (F = !0), null != n && (B = n), (G = !0), K(), (j = i ?? null);
    },
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: function () {
        (U = !1), (j = null), (k = !0);
    },
    NOTIFICATIONS_INBOX_ITEM_CLICK: function (e) {
        let { messageId: t, channelId: n, isUnread: i } = e,
            r = (0, N.GE)({ location: "handleInboxItemClick" }).notificationCenterVariant;
        H = i && r === N.U5.SIDEBAR ? { channelId: n, messageId: t } : null;
    },
    NOTIFICATIONS_INBOX_ITEM_ACK: function (e) {
        let { channelId: t, messageId: n } = e;
        (0, y.zo)({ channelId: t, id: n }, H) && (H = null);
    },
    NOTIFICATIONS_INBOX_CLOSE: function () {
        H = null;
    },
    NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES: function (e) {
        let { navOnClick: t } = e;
        Y = t ?? !0;
    },
});
