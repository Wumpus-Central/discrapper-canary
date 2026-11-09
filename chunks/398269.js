(n.d(t, { A: () => ei }), n(938796), n(321073), n(839272));
var i = n(284009),
    r = n.n(i),
    a = n(855986),
    s = n(73153),
    l = n(323073),
    o = n(50258),
    d = n(849171),
    c = n(432005),
    u = n(863005),
    _ = n(152007),
    E = n(607508),
    A = n(95701),
    f = n(383233),
    h = n(734057),
    I = n(808728),
    p = n(596344),
    m = n(218461),
    T = n(994500),
    g = n(711014),
    S = n(543465),
    N = n(287809),
    C = n(645959),
    O = n(811091),
    R = n(851109),
    L = n(989342),
    y = n(435558),
    D = n.n(y),
    b = n(849077);
let v = class {
    _messages = [];
    _isSorted = !0;
    _channelIds = new Set();
    updateChannelIds(e) {
        ((this._channelIds = new Set(e)),
            (this._messages = this._messages.filter(
                (e) => e.kind !== b.yL.ALL_MESSAGES_CHANNEL || this._channelIds.has(e.channelId),
            )));
    }
    addMessage(e) {
        ((this._messages = [...this._messages, e]), this.maybeTruncate());
    }
    addChannelMessages(e) {
        let { channel: t, channelMessages: n, userId: i } = e;
        ((this._messages = [
            ...this._messages,
            ...n
                .filter((e) => e.author.id !== i && O.default.age(e.id) < b.V$)
                .map((e) => ({
                    id: e.id,
                    channelId: e.channel_id,
                    guildId: t?.guild_id,
                    kind: e.mentioned ? b.yL.MENTION : b.yL.ALL_MESSAGES_CHANNEL,
                    message: e,
                })),
        ]),
            (this._isSorted = !1),
            this.maybeTruncate());
    }
    addMessages(e) {
        ((this._messages = [...this._messages, ...e]), (this._isSorted = !1), this.maybeTruncate());
    }
    deleteMessages(e) {
        return (
            !!this._messages.some((t) => e.includes(t.id)) &&
            ((this._messages = this._messages.filter((t) => !e.includes(t.id))), !0)
        );
    }
    getMessages() {
        return (this._isSorted || this.sortMessages(), this._messages);
    }
    sortMessages() {
        this._isSorted ||
            ((this._messages = D().sortedUniqBy(
                this._messages.toSorted((e, t) => {
                    let n = O.default.compare(e.id, t.id);
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
        let e = 50 * (this._channelIds.size + 1) * 1.5;
        if (this._messages.length <= e) return;
        let t = {};
        for (let e of this._messages)
            O.default.age(e.id) > b.V$ ||
                (null == t[e.channelId] && (t[e.channelId] = { mentions: [], messages: [] }),
                e.kind === b.yL.MENTION ? t[e.channelId].mentions.push(e) : t[e.channelId].messages.push(e));
        let n = [];
        (Object.values(t).forEach((e) => {
            let t = [...e.mentions, ...e.messages].sort((e, t) => O.default.compare(e.id, t.id)).slice(-50),
                i = new Set(),
                r = [];
            for (let e of t) (i.add(e.id), r.push(e));
            for (let t of e.mentions) i.has(t.id) || r.push(t);
            n.push(...r);
        }),
            (this._messages = n),
            (this._isSorted = !1));
    }
};
var P = n(652215),
    M = n(790782),
    U = n(37411);
let w = {},
    G = null,
    x = [],
    k = new v(),
    F = !1,
    B = !1,
    V = !1,
    H = !1,
    j = O.default.fromTimestamp(Date.now()),
    W = !0,
    Y = null,
    K = null,
    $ = !0;
function X(e) {
    if (!p.A.isReady(e)) return;
    let t = h.A.getBasicChannel(e),
        n = p.A.getMessages(e);
    if (n.hasPresent() && 0 !== n.length)
        return (k.addChannelMessages({ channel: t, channelMessages: n, userId: N.default.getCurrentUser()?.id }), n);
}
function z() {
    if (null == G) {
        j = O.default.fromTimestamp(Date.now());
        return;
    }
    for (let e of G.toSorted((e, t) => O.default.compare(m.Ay.lastMessageId(t), m.Ay.lastMessageId(e)))) {
        let t = w[e];
        if (t.loadState === b.Ve.UNLOADED && null != t.mostRecentMessageId) {
            j = t.mostRecentMessageId;
            return;
        }
    }
    j = "0";
}
function q() {
    let { notifyingChannelIds: e, staleChannelIds: t } = (function () {
        let e = g.Ay.getFlattenedGuildIds().flatMap((e) => I.A.getSelectableChannelIds(e)),
            t = u.A.getAllActiveJoinedThreads();
        function n(e) {
            if (P.kvI.ALL_DMS.has(e.type)) {
                if (S.Ay.isGuildOrCategoryOrChannelMuted(null, e.id)) return !1;
                if (e.type === P.rbe.DM) {
                    let t = h.A.getChannel(e.id),
                        n = t?.isDM() === !0 ? t.getRecipientId() : void 0;
                    if (null != n && T.A.isBlocked(n)) return !1;
                }
                return !0;
            }
            if (
                !P.kvI.GUILD_TEXTUAL.has(e.type) ||
                (0, l.UK)(e.id) ||
                S.Ay.resolveUnreadSetting(e) === M.e.ONLY_MENTIONS
            )
                return !1;
            if ((0, A.fT)(e.type)) {
                let t = (0, E.l)(e);
                if (t === U.CP.NO_MESSAGES || t === U.CP.ONLY_MENTIONS) return !1;
                let n = _.A.flags(e.id);
                if (null == n || (n & U.CP.ALL_MESSAGES) == 0) {
                    let t = h.A.getBasicChannel(e.parent_id);
                    if (null != t && S.Ay.resolveUnreadSetting(t) === M.e.ONLY_MENTIONS) return !1;
                }
                return !_.A.isMuted(e.id);
            }
            return S.Ay.useNewNotifications
                ? !S.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) &&
                      S.Ay.resolvedMessageNotifications(e) !== P.orn.NO_MESSAGES &&
                      (!S.Ay.isOptInEnabled(e.guild_id) || S.Ay.isChannelRecordOrParentOptedIn(e))
                : S.Ay.allowAllMessages(e);
        }
        let i = [];
        for (let t of e) {
            let e = h.A.getBasicChannel(t);
            null != e && n(e) && i.push(e);
        }
        for (let e in t)
            for (let r in t[e])
                for (let a in t[e][r]) {
                    let e = h.A.getBasicChannel(a);
                    null != e && n(e) && i.push(e);
                }
        for (let e of C.A.getPrivateChannelIds()) {
            let t = h.A.getBasicChannel(e);
            null != t && n(t) && i.push(t);
        }
        return i
            .map((e) => e.id)
            .sort((e, t) => {
                let n = m.Ay.hasUnread(e);
                return n !== m.Ay.hasUnread(t)
                    ? n
                        ? -1
                        : 1
                    : O.default.compare(m.Ay.lastMessageId(t), m.Ay.lastMessageId(e));
            })
            .reduce(
                (e, t) => (
                    m.Ay.lastMessageTimestamp(t) > Date.now() - b.V$
                        ? e.notifyingChannelIds.push(t)
                        : e.staleChannelIds.push(t),
                    e
                ),
                { notifyingChannelIds: [], staleChannelIds: [] },
            );
    })();
    ((G = e), (x = t), r()(null != G, "notifyingChannelIds should not be null"));
    let n = G.filter((e) => null == w[e]),
        i = Object.keys(w).filter((e) => !G?.includes(e));
    if (0 !== G.length && 0 === n.length && 0 === i.length) return !1;
    for (let e of i) delete w[e];
    for (let e of n)
        if (((w[e] = { loadState: b.Ve.UNLOADED, mostRecentMessageId: m.Ay.lastMessageId(e) }), p.A.isReady(e))) {
            let t = X(e);
            null != t &&
                ((w[e].loadState = b.Ve.LOADED), (w[e].mostRecentMessageId = t.last()?.id ?? w[e].mostRecentMessageId));
        }
    (k.updateChannelIds(G), z());
}
function Q() {
    ((w = {}),
        (G = null),
        (x = []),
        (k = new v()),
        (F = !1),
        (B = !1),
        (V = !1),
        (j = O.default.fromTimestamp(Date.now())),
        (W = !0),
        (H = !1),
        (K = null),
        (Y = null));
}
function J() {
    if (null == (0, R.GE)({ location: "NotificationsInboxStore.reinitializeInbox" })?.notificationCenterVariant)
        return !1;
    for (let e of (Q(), q(), G ?? [])) {
        let t = X(e);
        null != t && ((w[e].loadState = b.Ve.LOADED), (w[e].mostRecentMessageId = t.last()?.id ?? null));
    }
    z();
    let e = d.Ay.getSettingsFilteredMentions() ?? [];
    k.addMessages(
        e.map((e) => ({
            id: e.id,
            channelId: e.channel_id,
            guildId: h.A.getBasicChannel(e.channel_id)?.guild_id,
            kind: b.yL.MENTION,
            message: e,
        })),
    );
}
function Z() {
    let e = q(),
        t = (function () {
            let e = d.Ay.getSettingsFilteredMentions();
            if (null == e) return !1;
            let t = new Set(e.map((e) => e.id)),
                n = new Set((d.Ay.getMentions() ?? []).map((e) => e.id)),
                i = new Set(),
                r = [];
            for (let e of k.getMessages())
                e.kind === b.yL.MENTION && (i.add(e.id), n.has(e.id) && !t.has(e.id) && r.push(e.id));
            let a = e
                    .filter((e) => !i.has(e.id))
                    .map((e) => ({
                        id: e.id,
                        channelId: e.channel_id,
                        guildId: h.A.getBasicChannel(e.channel_id)?.guild_id,
                        kind: b.yL.MENTION,
                        message: e,
                    })),
                s = k.deleteMessages(r);
            return a.length > 0 ? (k.addMessages(a), !0) : s;
        })();
    if (!1 === e && !t) return !1;
}
function ee(e) {
    let { id: t } = e;
    return k.deleteMessages([t]);
}
function et(e) {
    let { channel: t } = e;
    if (!k.getMessages().some((e) => e.channelId === t.id)) return !1;
    J();
}
class en extends a.Ay.Store {
    static displayName = "NotificationsInboxStore";
    initialize() {
        this.waitFor(o.A, u.A, h.A, I.A, _.A, p.A, C.A, m.Ay, d.Ay, T.A, g.Ay, S.Ay, N.default);
    }
    canLoadMore(e) {
        let { preload: t } = e;
        return (function (e) {
            let { preload: t } = e;
            return (
                null != (0, R.GE)({ location: "NotificationsInboxStore.canLoadMore" })?.notificationCenterVariant &&
                null != G &&
                !F &&
                !B &&
                (!t || !H) &&
                W
            );
        })({ preload: t });
    }
    getInboxMessages() {
        return k.getMessages();
    }
    getNotifyingChannelIds() {
        return G;
    }
    getChannelInfoMap() {
        return w;
    }
    get oldestDisplayedMessageId() {
        return j;
    }
    get hasMoreToLoad() {
        return W;
    }
    get isLoading() {
        return F;
    }
    get hasLoadedEver() {
        return V;
    }
    get hasPreloaded() {
        return H;
    }
    get isLoadingComplete() {
        return !F && !W;
    }
    get selectedItemInfo() {
        return Y;
    }
    get currentRequestAnalyticsPayload() {
        return K;
    }
    getDevOverrides() {
        return { navOnClick: $ };
    }
}
let ei = new en(s.h, {
    LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
        let { messages: t } = e;
        if (0 === t.length) return !1;
        let n = d.Ay.getSettingsFilteredMentions();
        if (null == n || 0 === n.length) return !1;
        k.addMessages(
            n.map((e) => ({
                id: e.id,
                channelId: e.channel_id,
                guildId: h.A.getBasicChannel(e.channel_id)?.guild_id,
                kind: b.yL.MENTION,
                message: e,
            })),
        );
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t } = e;
        if (!G?.includes(t)) return !1;
        let n = X(t);
        if (null == n) return !1;
        let i = n.length >= 50 || (n.hasFetched && !n.hasMoreBefore);
        w[t].loadState !== b.Ve.LOADED && (w[t].loadState = i ? b.Ve.LOADED : b.Ve.LOADED_UNREAD);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (null == G || n.author?.id === N.default.getCurrentUser()?.id) return !1;
        let i = G.includes(t);
        if ((0, l.UK)(t)) return !1;
        let r = (function (e) {
                if (e instanceof f.Ay) return e;
                let t = p.A.getMessage(e.channel_id, e.id);
                return null != t ? t : (0, c.rh)(e);
            })(n),
            a = r.mentioned;
        if (!i) {
            if (x.includes(t)) q();
            else if (!a) return !1;
            else if (!(0, d.pK)(r)) return !1;
        }
        k.addMessage({
            id: n.id,
            channelId: n.channel_id,
            guildId: h.A.getBasicChannel(n.channel_id)?.guild_id,
            kind: a ? b.yL.MENTION : b.yL.ALL_MESSAGES_CHANNEL,
            message: r,
        });
    },
    MESSAGE_DELETE: ee,
    RECENT_MENTION_DELETE: ee,
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t } = e;
        return k.deleteMessages(t);
    },
    CONNECTION_OPEN: J,
    LOGOUT: function () {
        Q();
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: Z,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: Z,
    USER_GUILD_SETTINGS_GUILD_UPDATE: Z,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: Z,
    GUILD_CREATE: J,
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (S.Ay.allowNoMessages(t)) return !1;
        J();
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (!k.getMessages().some((e) => e.guildId === t.id)) return !1;
        J();
    },
    THREAD_DELETE: et,
    CHANNEL_DELETE: et,
    THREAD_MEMBER_UPDATE: function (e) {
        let { userId: t } = e;
        if (t !== N.default.getCurrentUser()?.id) return !1;
        J();
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let { id: t, addedMembers: n, removedMemberIds: i } = e,
            r = N.default.getCurrentUser()?.id;
        if (null == r) return !1;
        if (n?.some((e) => e.userId === r)) {
            let e = h.A.getBasicChannel(t);
            return !(null == e || _.A.isMuted(t)) && (0, E.l)(e) !== U.CP.NO_MESSAGES && void J();
        }
        return !!i?.includes(r) && void J();
    },
    NOTIFICATIONS_INBOX_OPEN: function () {
        B = !1;
    },
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: function () {
        F = !0;
    },
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: function (e) {
        let { preload: t, hasMoreToLoad: n, analyticsPayload: i } = e;
        ((F = !1), t && (H = !0), null != n && (W = n), t || (V = !0), z(), (K = i ?? null));
    },
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: function () {
        ((F = !1), (K = null), (B = !0));
    },
    NOTIFICATIONS_INBOX_ITEM_CLICK: function (e) {
        let { messageId: t, channelId: n, isUnread: i } = e,
            r = (0, R.GE)({ location: "handleInboxItemClick" }).notificationCenterVariant;
        Y = i && r === R.U5.SIDEBAR ? { channelId: n, messageId: t } : null;
    },
    NOTIFICATIONS_INBOX_ITEM_ACK: function (e) {
        let { channelId: t, messageId: n } = e;
        (0, L.z)({ channelId: t, id: n }, Y) && (Y = null);
    },
    NOTIFICATIONS_INBOX_CLOSE: function () {
        Y = null;
    },
    NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES: function (e) {
        let { navOnClick: t } = e;
        $ = t ?? !0;
    },
});
