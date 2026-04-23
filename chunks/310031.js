"use strict";
n.d(t, { A: () => Q }), n(321073), n(839272);
var i = n(284009),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(323073),
    l = n(320095),
    d = n(135978),
    _ = n(695633),
    u = n(152007),
    c = n(607508),
    E = n(95701),
    h = n(383233),
    m = n(734057),
    f = n(808728),
    g = n(232835),
    p = n(222823),
    A = n(711014),
    I = n(543465),
    T = n(287809),
    S = n(935208),
    N = n(851109),
    C = n(394953),
    R = n(735438),
    O = n.n(R),
    y = n(849077);
class v {
    _messages = [];
    _isSorted = !0;
    _channelIds = new Set();
    updateChannelIds(e) {
        (this._channelIds = new Set(e)),
            (this._messages = this._messages.filter(
                (e) => e.kind !== y.yL.ALL_MESSAGES_CHANNEL || this._channelIds.has(e.channelId),
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
                .filter((e) => e.author.id !== i && S.default.age(e.id) < y.V$)
                .map((e) => ({
                    id: e.id,
                    channelId: e.channel_id,
                    guildId: t?.guild_id,
                    kind: e.mentioned ? y.yL.MENTION : y.yL.ALL_MESSAGES_CHANNEL,
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
                    let n = S.default.compare(e.id, t.id);
                    return 0 !== n
                        ? n
                        : e.kind === y.yL.MENTION && t.kind !== y.yL.MENTION
                          ? -1
                          : +(e.kind !== y.yL.MENTION && t.kind === y.yL.MENTION);
                }),
                "id",
            )),
            (this._isSorted = !0));
    }
    maybeTruncate() {
        let e = y.EM * (this._channelIds.size + 1) * 1.5;
        if (this._messages.length <= e) return;
        let t = {};
        for (let e of this._messages)
            S.default.age(e.id) > y.V$ ||
                (null == t[e.channelId] && (t[e.channelId] = { mentions: [], messages: [] }),
                e.kind === y.yL.MENTION ? t[e.channelId].mentions.push(e) : t[e.channelId].messages.push(e));
        let n = [];
        Object.values(t).forEach((e) => {
            let t = [...e.mentions, ...e.messages].sort((e, t) => S.default.compare(e.id, t.id)).slice(-y.EM),
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
var D = n(652215),
    L = n(37411);
let b = {},
    w = null,
    P = [],
    k = new v(),
    M = !1,
    U = !1,
    x = !1,
    G = !1,
    V = S.default.fromTimestamp(Date.now()),
    F = !0,
    B = null,
    H = null,
    j = !0;
function W(e) {
    if (!g.A.isReady(e)) return;
    let t = m.A.getBasicChannel(e),
        n = g.A.getMessages(e);
    if (n.hasPresent() && 0 !== n.length)
        return k.addChannelMessages({ channel: t, channelMessages: n, userId: T.default.getCurrentUser()?.id }), n;
}
function Y() {
    if (null == w) {
        V = S.default.fromTimestamp(Date.now());
        return;
    }
    for (let e of w.toSorted((e, t) => S.default.compare(p.Ay.lastMessageId(t), p.Ay.lastMessageId(e)))) {
        let t = b[e];
        if (t.loadState === y.Ve.UNLOADED && null != t.mostRecentMessageId) {
            V = t.mostRecentMessageId;
            return;
        }
    }
    V = "0";
}
function K() {
    let { notifyingChannelIds: e, staleChannelIds: t } = (function () {
        let e = A.Ay.getFlattenedGuildIds().flatMap((e) => f.Ay.getSelectableChannelIds(e)),
            t = _.A.getAllActiveJoinedThreads(),
            n = (e) =>
                !(!D.kvI.GUILD_TEXTUAL.has(e.type) || (0, o.UK)(e.id)) &&
                ((0, E.fT)(e.type)
                    ? (0, c.l)(e) === L.CP.ALL_MESSAGES && !u.A.isMuted(e.id)
                    : I.Ay.allowAllMessages(e)),
            i = [];
        for (let t of e) {
            let e = m.A.getBasicChannel(t);
            null != e && n(e) && i.push(e);
        }
        for (let e in t)
            for (let r in t[e])
                for (let s in t[e][r]) {
                    let e = m.A.getBasicChannel(s);
                    null != e && n(e) && i.push(e);
                }
        return i
            .map((e) => e.id)
            .sort((e, t) => {
                let n = p.Ay.hasUnread(e);
                return n !== p.Ay.hasUnread(t)
                    ? n
                        ? -1
                        : 1
                    : S.default.compare(p.Ay.lastMessageId(t), p.Ay.lastMessageId(e));
            })
            .reduce(
                (e, t) => (
                    p.Ay.lastMessageTimestamp(t) > Date.now() - y.V$
                        ? e.notifyingChannelIds.push(t)
                        : e.staleChannelIds.push(t),
                    e
                ),
                { notifyingChannelIds: [], staleChannelIds: [] },
            );
    })();
    (w = e), (P = t), r()(null != w, "notifyingChannelIds should not be null");
    let n = w.filter((e) => null == b[e]),
        i = Object.keys(b).filter((e) => !w?.includes(e));
    if (0 !== w.length && 0 === n.length && 0 === i.length) return !1;
    for (let e of i) delete b[e];
    for (let e of n)
        if (((b[e] = { loadState: y.Ve.UNLOADED, mostRecentMessageId: p.Ay.lastMessageId(e) }), g.A.isReady(e))) {
            let t = W(e);
            null != t &&
                ((b[e].loadState = y.Ve.LOADED), (b[e].mostRecentMessageId = t.last()?.id ?? b[e].mostRecentMessageId));
        }
    k.updateChannelIds(w), Y();
}
function z() {
    (b = {}),
        (w = null),
        (P = []),
        (k = new v()),
        (M = !1),
        (U = !1),
        (x = !1),
        (V = S.default.fromTimestamp(Date.now())),
        (F = !0),
        (G = !1),
        (H = null),
        (B = null);
}
function $() {
    for (let e of (z(), K(), w ?? [])) {
        let t = W(e);
        null != t && ((b[e].loadState = y.Ve.LOADED), (b[e].mostRecentMessageId = t.last()?.id ?? null), Y());
    }
    let e = d.Ay.getSettingsFilteredMentions() ?? [];
    k.addMessages(
        e.map((e) => ({
            id: e.id,
            channelId: e.channel_id,
            guildId: m.A.getBasicChannel(e.channel_id)?.guild_id,
            kind: y.yL.MENTION,
            message: e,
        })),
    );
}
function q(e) {
    let { id: t } = e;
    return k.deleteMessages([t]);
}
function X(e) {
    let { channel: t } = e;
    if (!k.getMessages().some((e) => e.channelId === t.id)) return !1;
    $();
}
class Z extends s.Ay.Store {
    static displayName = "NotificationsInboxStore";
    initialize() {
        this.waitFor(_.A, m.A, f.Ay, u.A, g.A, p.Ay, d.Ay, A.Ay, I.Ay, T.default);
    }
    canLoadMore(e) {
        let { preload: t } = e;
        return (function (e) {
            let { preload: t } = e;
            return (
                null != (0, N.GE)({ location: "NotificationsInboxStore.canLoadMore" })?.notificationCenterVariant &&
                null != w &&
                !M &&
                !U &&
                (!t || !G) &&
                F
            );
        })({ preload: t });
    }
    getInboxMessages() {
        return k.getMessages();
    }
    getNotifyingChannelIds() {
        return w;
    }
    getChannelInfoMap() {
        return b;
    }
    get oldestDisplayedMessageId() {
        return V;
    }
    get hasMoreToLoad() {
        return F;
    }
    get isLoading() {
        return M;
    }
    get hasLoadedEver() {
        return x;
    }
    get hasPreloaded() {
        return G;
    }
    get isLoadingComplete() {
        return !M && !F;
    }
    get selectedItemInfo() {
        return B;
    }
    get currentRequestAnalyticsPayload() {
        return H;
    }
    getDevOverrides() {
        return { navOnClick: j };
    }
}
let Q = new Z(a.h, {
    LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
        let { messages: t } = e;
        if (0 === t.length) return !1;
        let n = d.Ay.getSettingsFilteredMentions();
        if (null == n || 0 === n.length) return !1;
        k.addMessages(
            n.map((e) => ({
                id: e.id,
                channelId: e.channel_id,
                guildId: m.A.getBasicChannel(e.channel_id)?.guild_id,
                kind: y.yL.MENTION,
                message: e,
            })),
        );
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t } = e;
        if (!w?.includes(t)) return !1;
        let n = W(t);
        if (null == n) return !1;
        let i = n.length >= y.EM || (n.hasFetched && !n.hasMoreBefore);
        b[t].loadState !== y.Ve.LOADED && (b[t].loadState = i ? y.Ve.LOADED : y.Ve.LOADED_UNREAD), Y();
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (null == w || n.author?.id === T.default.getCurrentUser()?.id) return !1;
        let i = w.includes(t);
        if ((0, o.UK)(t)) return !1;
        let r = (function (e) {
                if (e instanceof h.Ay) return e;
                let t = g.A.getMessage(e.channel_id, e.id);
                return null != t ? t : (0, l.rh)(e);
            })(n),
            s = r.mentioned;
        if (!i && !s) {
            if (!P.includes(t)) return !1;
            K();
        }
        if (!i && s && !(0, d.pK)(r)) return !1;
        k.addMessage({
            id: n.id,
            channelId: n.channel_id,
            guildId: m.A.getBasicChannel(n.channel_id)?.guild_id,
            kind: s ? y.yL.MENTION : y.yL.ALL_MESSAGES_CHANNEL,
            message: r,
        });
    },
    MESSAGE_DELETE: q,
    RECENT_MENTION_DELETE: q,
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t } = e;
        return k.deleteMessages(t);
    },
    CONNECTION_OPEN: $,
    LOGOUT: function () {
        z();
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: $,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: $,
    GUILD_CREATE: $,
    USER_GUILD_SETTINGS_GUILD_UPDATE: $,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: $,
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (I.Ay.allowNoMessages(t)) return !1;
        $();
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (!k.getMessages().some((e) => e.guildId === t.id)) return !1;
        $();
    },
    THREAD_DELETE: X,
    CHANNEL_DELETE: X,
    THREAD_MEMBER_UPDATE: function (e) {
        let { userId: t } = e;
        if (t !== T.default.getCurrentUser()?.id) return !1;
        $();
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let { id: t, addedMembers: n, removedMemberIds: i } = e,
            r = T.default.getCurrentUser()?.id;
        if (null == r) return !1;
        if (n?.some((e) => e.userId === r)) {
            let e = m.A.getBasicChannel(t);
            return !(null == e || u.A.isMuted(t)) && (0, c.l)(e) !== L.CP.NO_MESSAGES && void $();
        }
        return !!i?.includes(r) && void $();
    },
    NOTIFICATIONS_INBOX_OPEN: function () {
        U = !1;
    },
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: function () {
        M = !0;
    },
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: function (e) {
        let { preload: t, hasMoreToLoad: n, analyticsPayload: i } = e;
        (M = !1), t ? (G = !0) : (null != n && (F = n), (x = !0)), (H = i ?? null);
    },
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: function () {
        (M = !1), (H = null), (U = !0);
    },
    NOTIFICATIONS_INBOX_ITEM_CLICK: function (e) {
        let { messageId: t, channelId: n, isUnread: i } = e,
            r = (0, N.GE)({ location: "handleInboxItemClick" }).notificationCenterVariant;
        B = i && r === N.U5.SIDEBAR ? { channelId: n, messageId: t } : null;
    },
    NOTIFICATIONS_INBOX_ITEM_ACK: function (e) {
        let { channelId: t, messageId: n } = e;
        (0, C.zo)({ channelId: t, id: n }, B) && (B = null);
    },
    NOTIFICATIONS_INBOX_CLOSE: function () {
        B = null;
    },
    NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES: function (e) {
        let { navOnClick: t } = e;
        j = t ?? !0;
    },
});
