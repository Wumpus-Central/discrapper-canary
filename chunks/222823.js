"use strict";
let r;
n.d(t, { Ay: () => t0, Wm: () => eb }), n(321073), n(938796);
var i = n(735438),
    s = n(989349),
    a = n.n(s),
    o = n(665260),
    l = n(311907),
    u = n(562465),
    c = n(451988),
    d = n(933681),
    _ = n(73153),
    f = n(933958);
n(183636);
var p = n(313961),
    h = n(343328),
    m = n(717125),
    E = n(626584),
    g = n(49463),
    A = n(698441),
    I = n(250953),
    T = n(380335),
    S = n(309199),
    y = n(157550),
    v = n(451919),
    N = n(252431),
    C = n(395504),
    b = n(622794),
    R = n(970278),
    O = n(152007),
    D = n(882733),
    L = n(607508),
    w = n(617617),
    x = n(95701),
    M = n(799422),
    P = n(927813),
    k = n(403362),
    U = n(209489),
    G = n(661191),
    F = n(961350),
    V = n(761640),
    B = n(734057),
    H = n(72314),
    j = n(919638),
    Y = n(71393),
    W = n(885576),
    K = n(320501),
    z = n(576705),
    $ = n(994500),
    q = n(309010),
    Z = n(543465),
    X = n(287809),
    Q = n(531685),
    J = n(652215),
    ee = n(5867),
    et = n(746080),
    en = n(988794),
    er = n(790782),
    ei = n(37411);
let es = new E.A("ReadStateStore"),
    ea = 2;
__OVERLAY__ && (r = n(256415).default);
let eo = J.hVb.VIEW_CHANNEL | J.hVb.READ_MESSAGE_HISTORY,
    el = 100,
    eu = 1,
    ec = q.A.getChannelId(),
    ed = null,
    e_ = null,
    ef = !1,
    ep = [],
    eh = !1,
    em = null;
class eE {
    channelWindowIds = {};
    addWindowId(e, t) {
        null == this.channelWindowIds[e] && (this.channelWindowIds[e] = new Set()), this.channelWindowIds[e].add(t);
    }
    hasWindowId(e, t) {
        return null != this.channelWindowIds[e] && this.channelWindowIds[e].has(t);
    }
    isChannelAckable(e) {
        return null != this.channelWindowIds[e] && this.channelWindowIds[e].size > 0;
    }
    getAllWindowIds(e) {
        return null == this.channelWindowIds[e] ? [] : Array.from(this.channelWindowIds[e]);
    }
    getAllChannelIdsForWindowId(e) {
        let t = new Set();
        for (let [n, r] of G.default.entries(this.channelWindowIds)) r.has(e) && t.add(n);
        return Array.from(t);
    }
    isAnyWindowFocused(e) {
        let t = this.channelWindowIds[e];
        if (null == t) return !1;
        for (let e of t) if (Q.A.isFocused(e)) return !0;
        return !1;
    }
    removeWindowId(e, t) {
        null != this.channelWindowIds[e] &&
            (this.channelWindowIds[e].delete(t),
            0 === this.channelWindowIds[e].size && delete this.channelWindowIds[e]);
    }
    forEachChannel(e) {
        for (let [t, n] of G.default.entries(this.channelWindowIds)) e(t, n);
    }
}
let eg = new eE(),
    eA = 30 * P.A.Millis.DAY;
function eI() {
    return G.default.fromTimestamp(Date.now() - eA);
}
let eT = 0,
    eS = 0,
    ey = null;
function ev() {
    (eT = Date.now() - 7 * P.A.Millis.DAY),
        (eS = Date.now() - 3 * P.A.Millis.DAY),
        clearTimeout(ey),
        (ey = setTimeout(() => {
            _.h.dispatch({ type: "DECAY_READ_STATES" });
        }, +P.A.Millis.HOUR));
}
function eN(e) {
    if (null == e) return 0;
    let t = Date.parse(e);
    return isNaN(t) ? 0 : t;
}
function eC(e) {
    return {
        id: e.id,
        read_state_type: e.read_state_type,
        mention_count: e.badge_count,
        last_message_id: e.last_acked_id,
    };
}
function eb(e, t) {
    let n = B.A.getChannel(e.channel_id);
    return (
        !(null == n || $.A.isBlockedOrIgnoredForMessage(e)) &&
        !!(
            (0, v.Ay)({
                message: e,
                userId: t.id,
                suppressEveryone: Z.Ay.isSuppressEveryoneEnabled(n.guild_id),
                suppressRoles: Z.Ay.isSuppressRolesEnabled(n.guild_id),
            }) || eR(n)
        )
    );
}
function eR(e) {
    return null != e && e.isPrivate() && !Z.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
}
async function eO(e) {
    if (0 === ep.length) {
        (eh = !1), e?.();
        return;
    }
    eh = !0;
    let t = ep.splice(0, el);
    await eL(() =>
        u.Bo.post({ url: J.Rsh.BULK_ACK, body: { read_states: t }, oldFormErrors: !0, rejectWithError: !1 }),
    ),
        await (0, c.BK)(1e3 * eu),
        eO(e);
}
let eD = 3;
async function eL(e) {
    let t = F.default.getId();
    for (let n = 0; n < eD; n++)
        try {
            return await e();
        } catch (e) {
            if (
                (es.error("", e),
                n + 1 < eD && (await (0, c.BK)((n + 1) * 2e3), await U.A.awaitOnline(), t !== F.default.getId()))
            )
                return Promise.reject(Error("User changed."));
        }
}
function ew(e, t) {
    X.default.getCurrentUser()?.hasAnyStaffLevel() && es.log("STAFF-ACK-LOG:", t, e.channelId);
}
function ex(e) {
    if ((ew(e, "shouldAutomaticallyAck called"), e.type !== er.P.CHANNEL)) return ew(e, "not channel read state"), !1;
    let t = B.A.getChannel(e.channelId),
        n = null != t && t.isForumPost();
    if (
        null != f.Ay.getConnectedActivityLocation() &&
        f.Ay.getActivityPanelMode() === ee.Gd.PANEL &&
        f.Ay.getFocusedLayout() === ee.E8.NO_CHAT
    )
        return ew(e, "In activity"), !1;
    if (W.A.isIdle()) return ew(e, "Is idle"), !1;
    if (!e.canTrackUnreads()) return ew(e, "Cannot track unreads"), !1;
    if (t?.isForumLikeChannel() !== !0) {
        let t = eg.isAnyWindowFocused(e.channelId),
            n = null != r && r.isInstanceFocused() && r.isPinned(J.uss.TEXT);
        if (!t && !n) return !1;
    }
    if (n && !e._persisted) return ew(e, "unpersisted forum post"), !0;
    if (!e.hasUnreadOrMentions()) return ew(e, "No unread or mentions"), !1;
    if (t?.isForumLikeChannel() === !0) return ew(e, "Forum-like channel"), !1;
    if (!(n && !e._isJoinedThread) && !H.A.isAtBottom(e.channelId)) return ew(e, "Not at bottom"), !1;
    let i = p.A.getLayout(e.channelId);
    if (!p.A.getChatOpen(e.channelId) && (i === J.DUB.NO_CHAT || i === J.DUB.FULL_SCREEN))
        return ew(e, "Fullscreen video"), !1;
    if (!eg.isChannelAckable(e.channelId)) return ew(e, "Not ackable"), !1;
    let s = K.A.getMessages(e.channelId);
    return null == s || !s.ready || s.loadingMore
        ? (ew(e, "Still loading messages"), !1)
        : (0, b.oE)(e.channelId)
          ? (ew(e, "Acked"), !0)
          : (ew(e, "Chat not focused"), !1);
}
class eM {
    static _guildReadStateSentinels = {};
    static _readStates = new Map();
    static _mentionChannels = new Set();
    channelId;
    type = er.P.CHANNEL;
    _guildId;
    _isThread;
    _isActiveThread;
    _isJoinedThread;
    _isResourceChannel;
    _persisted;
    loadedMessages;
    _lastMessageId;
    _lastMessageTimestamp;
    _ackMessageId;
    _ackMessageTimestamp;
    isManualAck;
    ackPinTimestamp;
    lastPinTimestamp;
    _oldestUnreadMessageId;
    oldestUnreadMessageIdStale;
    estimated;
    _unreadCount;
    _mentionCount;
    flags;
    lastViewed;
    outgoingAck;
    outgoingAckTimer = null;
    ackMessageIdAtChannelSelect = null;
    ackedWhileCached = void 0;
    snapshot;
    static forEach(e) {
        for (let t of eM._readStates.values()) for (let n of t.values()) if (!1 === e(n)) break;
    }
    static get(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL,
            n = eM._readStates.get(t)?.get(e);
        if (null == n) {
            n = new eM(e, t);
            let r = eM._readStates.get(t) ?? new Map();
            r.set(e, n), eM._readStates.has(t) || eM._readStates.set(t, r);
        }
        return n;
    }
    static getGuildSentinels(e) {
        return (
            null == this._guildReadStateSentinels[e] && (this._guildReadStateSentinels[e] = { unreadsSentinel: 0 }),
            this._guildReadStateSentinels[e]
        );
    }
    static resetGuildSentinels() {
        this._guildReadStateSentinels = {};
    }
    static getIfExists(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL;
        return eM._readStates.get(t)?.get(e);
    }
    static getMentionChannelIds() {
        let e = [];
        for (let t of eM._mentionChannels) {
            let n = eM.getIfExists(t);
            null != n && n.canHaveMentions() ? e.push(t) : eM._mentionChannels.delete(t);
        }
        return e;
    }
    static getValue(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = this.getIfExists(e, t);
        return null == i ? r : n(i);
    }
    static clear(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL,
            n = eM._readStates.get(t);
        if (null == n) return !1;
        let r = n.delete(e);
        return r && eM._mentionChannels.delete(e), r;
    }
    static clearAll() {
        eM._readStates.clear(), eM._mentionChannels.clear();
    }
    constructor(e, t = er.P.CHANNEL) {
        (this.channelId = e),
            (this.type = t),
            (this._guildId = null),
            (this._isThread = !1),
            (this._isActiveThread = !1),
            (this._isJoinedThread = !1),
            (this._isResourceChannel = !1),
            (this._persisted = !1),
            (this.loadedMessages = !1),
            (this._lastMessageId = null),
            (this._lastMessageTimestamp = 0),
            (this._ackMessageId = null),
            (this._ackMessageTimestamp = 0),
            (this.isManualAck = !1),
            (this.ackPinTimestamp = 0),
            (this.lastPinTimestamp = 0),
            (this._oldestUnreadMessageId = null),
            (this.oldestUnreadMessageIdStale = !1),
            (this.estimated = !1),
            (this._unreadCount = 0),
            (this._mentionCount = 0),
            (this.outgoingAck = null);
    }
    serialize(e) {
        let {
            channelId: t,
            type: n,
            _guildId: r,
            _isThread: i,
            _isActiveThread: s,
            _isJoinedThread: a,
            _persisted: o,
            loadedMessages: l,
            _lastMessageId: u,
            _lastMessageTimestamp: c,
            _ackMessageId: d,
            _ackMessageTimestamp: _,
            ackPinTimestamp: f,
            isManualAck: p,
            lastPinTimestamp: h,
            _oldestUnreadMessageId: m,
            oldestUnreadMessageIdStale: E,
            estimated: g,
            _mentionCount: A,
            flags: I,
            lastViewed: T,
        } = this;
        if (e)
            return {
                channelId: t,
                type: n,
                _guildId: r,
                _isThread: i,
                _isActiveThread: s,
                _isJoinedThread: a,
                _persisted: o,
                loadedMessages: l,
                _lastMessageId: u,
                _lastMessageTimestamp: c,
                _ackMessageId: d,
                _ackMessageTimestamp: _,
                ackPinTimestamp: f,
                isManualAck: p,
                lastPinTimestamp: h,
                _oldestUnreadMessageId: m,
                oldestUnreadMessageIdStale: E,
                estimated: g,
                _mentionCount: A,
                flags: I,
                lastViewed: T,
            };
        let S = {
            channelId: t,
            type: n,
            _guildId: r,
            _persisted: o,
            _lastMessageId: u,
            _lastMessageTimestamp: c,
            _ackMessageId: d,
            _ackMessageTimestamp: _,
            ackPinTimestamp: f,
            lastPinTimestamp: h,
            _mentionCount: A,
            flags: I,
        };
        return (
            null != T && T > 0 && (S.lastViewed = T),
            i && ((S._isThread = i), (S._isActiveThread = s), (S._isJoinedThread = a)),
            S
        );
    }
    deserializeForOverlay(e) {
        let {
            channelId: t,
            type: n,
            _guildId: r,
            _isThread: i,
            _isActiveJoinedThread: s,
            _isActiveThread: a,
            _isJoinedThread: o,
            _persisted: l,
            loadedMessages: u,
            _lastMessageId: c,
            _lastMessageTimestamp: d,
            _ackMessageId: _,
            _ackMessageTimestamp: f,
            ackPinTimestamp: p,
            isManualAck: h,
            lastPinTimestamp: m,
            _oldestUnreadMessageId: E,
            oldestUnreadMessageIdStale: g,
            estimated: A,
            _unreadCount: I,
            _mentionCount: T,
            flags: S,
            lastViewed: y,
        } = e;
        (this.channelId = t),
            (this.type = n ?? er.P.CHANNEL),
            (this._guildId = r),
            (this._isThread = i ?? !1),
            null != s
                ? ((this._isActiveThread = s), (this._isJoinedThread = s))
                : ((this._isActiveThread = a ?? !1), (this._isJoinedThread = o ?? !1)),
            (this._persisted = !1 !== l),
            (this.loadedMessages = u ?? !1),
            (this._lastMessageId = c),
            (this._lastMessageTimestamp = d),
            (this._ackMessageId = _),
            (this._ackMessageTimestamp = f),
            (this.ackPinTimestamp = p),
            (this.isManualAck = h ?? !1),
            (this.lastPinTimestamp = m),
            (this._oldestUnreadMessageId = E),
            (this.oldestUnreadMessageIdStale = g ?? !1),
            (this.estimated = A ?? !1),
            (this._unreadCount = I ?? 0),
            (this._mentionCount = T),
            (this.flags = S),
            (this.lastViewed = y),
            eM._mentionChannels.delete(this.channelId),
            this._mentionCount > 0 && this.canHaveMentions() && eM._mentionChannels.add(this.channelId);
    }
    incrementGuildUnreadsSentinel() {
        null != this._guildId && eM.getGuildSentinels(this._guildId).unreadsSentinel++;
    }
    get oldestUnreadMessageId() {
        return this._oldestUnreadMessageId;
    }
    set oldestUnreadMessageId(e) {
        (this._oldestUnreadMessageId = e), (this.oldestUnreadMessageIdStale = !1);
    }
    get lastMessageId() {
        return this._lastMessageId;
    }
    set lastMessageId(e) {
        (this._lastMessageId = e), (this._lastMessageTimestamp = null != e ? G.default.extractTimestamp(e) : 0);
    }
    get lastMessageTimestamp() {
        return this._lastMessageTimestamp;
    }
    get ackMessageId() {
        return this._ackMessageId;
    }
    set ackMessageId(e) {
        (this._ackMessageId = e), (this._ackMessageTimestamp = null != e ? G.default.extractTimestamp(e) : 0);
    }
    get unreadCount() {
        return this._unreadCount ?? 0;
    }
    set unreadCount(e) {
        (void 0 === this._unreadCount || 0 === this._unreadCount || 0 === e) && this.incrementGuildUnreadsSentinel(),
            (this._unreadCount = e);
    }
    get mentionCount() {
        return this._mentionCount;
    }
    set mentionCount(e) {
        (0 === this._mentionCount || 0 === e) && this._mentionCount !== e && this.incrementGuildUnreadsSentinel(),
            (this._mentionCount = e),
            eM._mentionChannels.delete(this.channelId),
            this._mentionCount > 0 && this.canHaveMentions() && eM._mentionChannels.add(this.channelId);
    }
    get isMentionLowImportance() {
        return null != this.flags && (4 & this.flags) == 4;
    }
    set isMentionLowImportance(e) {
        e
            ? 0 === this._mentionCount && (this.flags = (this.flags ?? 0) | 4)
            : null != this.flags && 0 !== this.flags && (this.flags = -5 & this.flags);
    }
    guessAckMessageId() {
        let e = K.A.getMessages(this.channelId);
        if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
        if (!this.hasMentions()) return this.lastMessageId;
        let t = null,
            n = this.mentionCount,
            r = X.default.getCurrentUser();
        return (
            e.forEach(
                (e) => {
                    if (n > 0 && e.author.id !== r?.id) --n;
                    else if (0 === n) return (t = e.id), !1;
                },
                this,
                !0,
            ),
            t
        );
    }
    get guildId() {
        if (null != this._guildId) return this._guildId;
        let e = B.A.getChannel(this.channelId);
        return (this._guildId = null != e ? e.getGuildId() : null);
    }
    isPrivate() {
        if (this.type !== er.P.CHANNEL) return !1;
        let e = B.A.getChannel(this.channelId);
        return null != e && e.isPrivate();
    }
    rebuildChannelState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (
            ((this.ackMessageId = e ?? this._ackMessageId ?? this.guessAckMessageId()),
            (this.isManualAck = null != e),
            (this.oldestUnreadMessageId = null),
            (this.estimated = !1),
            (this.unreadCount = 0),
            t && (this.mentionCount = 0),
            this.hasUnread())
        ) {
            let e = X.default.getCurrentUser(),
                n = this.getAckTimestamp(),
                r = !1,
                i = !1,
                s = null,
                a = K.A.getMessages(this.channelId);
            a.forAll((a) => {
                r
                    ? (this.oldestUnreadMessageId = this._oldestUnreadMessageId ?? a.id)
                    : (r = a.id === this._ackMessageId),
                    G.default.extractTimestamp(a.id) > n
                        ? (this.unreadCount++, t && eb(a, e) && this.mentionCount++, (s = s ?? a.id))
                        : (i = !0);
            }),
                (this.estimated = !a.hasPresent() || (!(r || i) && a.length === this.unreadCount)),
                (this.oldestUnreadMessageId = this._oldestUnreadMessageId ?? s);
        }
        null != n && (this.mentionCount = n);
    }
    handleGuildEventRemoval(e, t) {
        if (G.default.compare(this.ackMessageId, t) >= 0) return;
        let n = A.Ay.getGuildScheduledEventsForGuild(e),
            r = this.getAckTimestamp();
        if (isNaN(r)) return;
        let i = this._ackMessageId ?? G.default.fromTimestamp(r),
            s = null,
            a = 0;
        n.forEach((e) => {
            (0, A.d6)(e) && (G.default.compare(e.id, s) > 0 && (s = e.id), G.default.compare(e.id, i) > 0 && a++);
        }),
            (this.lastMessageId = s),
            (this.mentionCount = a);
    }
    canTrackUnreads() {
        if (this.type !== er.P.CHANNEL) return !0;
        if ((this._isThread && !this._isActiveThread) || this._isResourceChannel) return !1;
        let e = B.A.getBasicChannel(this.channelId);
        return (
            null != e &&
            ("basicPermissions" in e
                ? M.A.has(e.basicPermissions, J.hVb.VIEW_CHANNEL)
                : !m.A.isChannelGated(this.guildId, this.channelId) || z.A.can(J.xBc.VIEW_CHANNEL, e))
        );
    }
    canBeUnread() {
        return (
            !(
                (this._isThread && !this._isJoinedThread) ||
                (0, S.k_)(this.channelId, [T.A, y.A]) ||
                (!this._isThread &&
                    (0, C.WW)(this._guildId) &&
                    (this._lastMessageTimestamp < eT ||
                        (!Z.Ay.isChannelOrParentOptedIn(this._guildId, this.channelId) &&
                            !this.hasRecentlyVisitedAndRead() &&
                            !this.hasMentions())))
            ) && this.canTrackUnreads()
        );
    }
    canHaveMentions() {
        return (
            !(
                0 === this.mentionCount ||
                (this._isThread && !this._isJoinedThread) ||
                (0, S.k_)(this.channelId, [T.A, y.A]) ||
                ((0, C.WW)(this._guildId) && this._lastMessageTimestamp < eT)
            ) && this.canTrackUnreads()
        );
    }
    getGuildChannelUnreadState(e, t, n, r, i) {
        if (
            t &&
            (this._lastMessageTimestamp < eT ||
                (!Z.Ay.isChannelRecordOrParentOptedIn(e) &&
                    !this.hasRecentlyVisitedAndRead() &&
                    this.mentionCount <= 0))
        )
            return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        if ("basicPermissions" in e) {
            if (!M.A.has(e.basicPermissions, J.hVb.VIEW_CHANNEL))
                return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        } else if (m.A.isChannelGated(this.guildId, this.channelId) && !z.A.can(J.xBc.VIEW_CHANNEL, e))
            return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        return r || i
            ? { mentionCount: this.mentionCount, unread: !1, isMentionLowImportance: this.isMentionLowImportance }
            : {
                  mentionCount: this.mentionCount,
                  unread: this.getAckTimestamp() < this._lastMessageTimestamp,
                  isMentionLowImportance: this.isMentionLowImportance,
              };
    }
    hasUnread() {
        return this.getAckTimestamp() < this._lastMessageTimestamp;
    }
    hasRecentlyVisitedAndRead() {
        return (
            this._lastMessageTimestamp > 0 &&
            null != this._ackMessageId &&
            this.getAckTimestamp() > eS &&
            w.A.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
        );
    }
    isForumPostUnread() {
        return !!this._isActiveThread && this.hasUnread();
    }
    hasMentions() {
        return this.getMentionCount() > 0;
    }
    getMentionCount() {
        return this.mentionCount;
    }
    hasUnreadOrMentions() {
        return this.hasMentions() || this.hasUnread();
    }
    ackPins() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.type !== er.P.CHANNEL || !this.canTrackUnreads()) return !1;
        if (null == e) {
            if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
            (this._persisted = !0),
                eL(() => u.Bo.post({ url: J.Rsh.PINS_ACK(this.channelId), oldFormErrors: !0, rejectWithError: !0 }));
        }
        let t = eN(e);
        return (this.ackPinTimestamp = 0 !== t ? t : this.lastPinTimestamp), !0;
    }
    ack(e) {
        let {
            messageId: t,
            location: n,
            trackAnalytics: r,
            local: i = !1,
            immediate: s = !1,
            force: a = !1,
            isExplicitUserAction: o = !1,
        } = e;
        if (!this._shouldAck(a, i, o) || (!a && !this.canTrackUnreads())) return !1;
        let l = this.hasMentions();
        return (
            (this.estimated = !1),
            (this.snapshot = this.takeSnapshot()),
            (this.unreadCount = 0),
            (this.mentionCount = 0),
            (this.isMentionLowImportance = !1),
            (null != t || null != (t = this.lastMessageId)) &&
                ((this.ackMessageId = t),
                (this.isManualAck = !1),
                (this._persisted = !0),
                ef && (this.ackedWhileCached = !0),
                eZ(this.channelId),
                i
                    ? (this.oldestUnreadMessageId = null)
                    : (null == this.outgoingAck &&
                          (this.outgoingAckTimer = setTimeout(
                              () => {
                                  this.type === er.P.CHANNEL ? this._ack(n, r) : this._nonChannelAck(),
                                      (this.outgoingAck = null),
                                      (this.outgoingAckTimer = null);
                              },
                              l || s ? 0 : 3e3,
                          )),
                      (this.outgoingAck = t)),
                !0)
        );
    }
    takeSnapshot() {
        let { default: e } = n(458294),
            t = this.guildId;
        return {
            unread: this.hasUnread(),
            mentionCount: this.mentionCount,
            guildUnread: null == t ? null : e.hasUnread(t),
            guildMentionCount: null == t ? null : e.getMentionCount(t),
            takenAt: Date.now(),
        };
    }
    clearOutgoingAck() {
        (this.outgoingAck = null),
            null != this.outgoingAckTimer && (clearTimeout(this.outgoingAckTimer), (this.outgoingAckTimer = null));
    }
    _shouldAck(e, t, n) {
        return (
            !!e ||
            !!n ||
            !!t ||
            (!this.isManualAck &&
                (this.type !== er.P.CHANNEL ||
                    !!this.loadedMessages ||
                    !!B.A.getChannel(this.channelId)?.isForumLikeChannel()))
        );
    }
    _ack(e, t) {
        let { outgoingAck: r } = this;
        if (null == r) return;
        let i = F.default.getId(),
            s = e_;
        this._persisted = !0;
        let a = this.recalculateFlags(),
            o = a === this.flags ? void 0 : a;
        eL(() =>
            u.Bo.post({
                url: J.Rsh.MESSAGE_ACK(this.channelId, r),
                body: { token: e_, last_viewed: this.lastViewed, flags: o },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
        ).then((r) => {
            null != r &&
                (e_ === s && i === F.default.getId() && (e_ = r.body.token),
                _.h.dispatch({ type: "MESSAGE_ACKED" }),
                t &&
                    n
                        .e("16137")
                        .then(n.bind(n, 862544))
                        .then((t) => {
                            let { default: n } = t;
                            n(this.channelId, e ?? {});
                        }));
        });
    }
    recalculateFlags() {
        if (this.type !== er.P.CHANNEL) return;
        let e = B.A.getChannel(this.channelId);
        if (null != e) return e.isThread() ? 2 : +(null != e.guild_id);
    }
    _nonChannelAck() {
        let e,
            { outgoingAck: t, channelId: n, type: r } = this;
        if (null != t) {
            switch (r) {
                case er.P.GUILD_HOME:
                case er.P.GUILD_EVENT:
                case er.P.GUILD_ONBOARDING_QUESTION:
                    e = J.Rsh.GUILD_FEATURE_ACK(n, t, r);
                    break;
                case er.P.NOTIFICATION_CENTER:
                case er.P.MESSAGE_REQUESTS:
                    e = J.Rsh.USER_NON_CHANNEL_ACK(t, r);
                    break;
                default:
                    return;
            }
            (this._persisted = !0), eL(() => u.Bo.post({ url: e, body: {}, oldFormErrors: !0, rejectWithError: !0 }));
        }
    }
    delete() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = B.A.getBasicChannel(this.channelId);
        es.log("Deleting ReadState", this.channelId, this.type, {
            remote: e,
            persisted: this._persisted,
            channelMissing: null == t,
            isOld: ez(this, eI()),
            validType: null != t && x.A_.has(t.type),
            readableType: null != t && (0, x.Z_)(t.type),
            oldThreadCutoff: eI(),
            mentionCount: this.mentionCount,
            channelId: this.channelId,
            ackMessageId: this._ackMessageId,
            lastMessageId: this._lastMessageId,
        }),
            e &&
                this._persisted &&
                u.Bo.del({
                    url: J.Rsh.CHANNEL_ACK(this.channelId),
                    body: { version: ea, read_state_type: this.type },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
            eM._readStates.get(this.type)?.delete(this.channelId),
            eM._mentionChannels.delete(this.channelId);
    }
    shouldDeleteReadState(e) {
        if (0 !== j.A.totalUnavailableGuilds) return !1;
        if (null != this.type && this.type !== er.P.CHANNEL) return !e$(this);
        let t = B.A.getBasicChannel(this.channelId);
        if (null == t)
            if (ez(this, e)) return !0;
            else return !1;
        return (
            !!x.A_.has(t.type) &&
            (!(0, x.Z_)(t.type) ||
                (!(0, x.Gw)(t.type) &&
                    !(
                        !(x.Le.has(t.type) && eK(this, t, e)) &&
                        (!(this.mentionCount > 0) || z.A.canBasicChannel(eo, t))
                    )))
        );
    }
    getAckTimestamp() {
        let e, t;
        if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
        if (this._isThread)
            return (
                (this._ackMessageTimestamp = eY(this.guildId, this.channelId)),
                (this._ackMessageId = G.default.fromTimestamp(this._ackMessageTimestamp)),
                this._ackMessageTimestamp
            );
        if (this.type === er.P.GUILD_EVENT || this.type === er.P.GUILD_ONBOARDING_QUESTION)
            e = Y.A.getGuild(this.channelId);
        else if ((0, et.jq)(this.channelId)) e = Y.A.getGuild(this.guildId);
        else {
            let t = B.A.getChannel(this.channelId);
            if (null != t) {
                let n = t.getGuildId();
                e = Y.A.getGuild(n);
            }
        }
        return (
            null != e
                ? isNaN((t = eW(e))) && (t = G.default.extractTimestamp(this.channelId))
                : (t = G.default.extractTimestamp(this.channelId)),
            (this._ackMessageTimestamp = t),
            t
        );
    }
    get oldestUnreadTimestamp() {
        return null != this.oldestUnreadMessageId ? G.default.extractTimestamp(this.oldestUnreadMessageId) : 0;
    }
    syncThreadSettings() {
        this._isThread = !0;
        let e = B.A.getChannel(this.channelId);
        if (null == e) return es.warn(`syncThreadSettings called with channel not in memory ${this.channelId}`), !1;
        let t = this.guildId,
            n = null != t && R.A.isActive(t, e.parent_id, this.channelId),
            r = O.A.hasJoined(this.channelId);
        return (
            (this._isActiveThread !== n || this._isJoinedThread !== r) &&
            ((this._isActiveThread = n), (this._isJoinedThread = r), !0)
        );
    }
    recordLastViewedTime() {
        let e = Math.ceil((Date.now() - G.DISCORD_EPOCH) / P.A.Millis.DAY);
        e !== this.lastViewed &&
            ((this.lastViewed = e),
            this.canTrackUnreads() && !this.hasUnread() && this.ack({ force: !0, trackAnalytics: !1 }));
    }
}
function eP(e) {
    e.forEach((e) => {
        if ((0, x.Z_)(e.type)) {
            let t = eM.get(e.id);
            (t._guildId = e.guild_id),
                (t.lastMessageId = e.lastMessageId),
                (t.lastPinTimestamp = eN(e.lastPinTimestamp)),
                (t._isResourceChannel = e.hasFlag(et.lx.IS_GUILD_RESOURCE_CHANNEL)),
                x.Le.has(e.type) && t.syncThreadSettings();
        }
    });
}
function ek(e) {
    e.forEach((e) => {
        if ((0, x.Z_)(e.type)) {
            let t = eM.get(e.id);
            (t.lastMessageId = e.last_message_id),
                (t.lastPinTimestamp = eN(e.last_pin_timestamp)),
                (t._isResourceChannel = (0, o.Lt)(e.flags ?? 0, et.lx.IS_GUILD_RESOURCE_CHANNEL)),
                x.Le.has(e.type) && t.syncThreadSettings();
        }
    });
}
function eU(e) {
    eB(e), eH(e), eV(e), ej(e);
}
function eG(e) {
    eF(e);
}
function eF(e) {
    let t = X.default.getCurrentUser();
    if (null == t) return !1;
    let n = eM.get(t.id, er.P.NOTIFICATION_CENTER);
    e.forEach((e) => {
        if (null == e.since || e.type !== J.eA$.PENDING_INCOMING) return;
        let t = new Date(e.since).getTime();
        (null != n.ackMessageId ? G.default.extractTimestamp(n.ackMessageId) : 0) < t &&
            (n.mentionCount++, (n.lastMessageId = G.default.fromTimestamp(t)));
    });
}
function eV(e) {
    let t = 24;
    eM.get(e.id, er.P.GUILD_HOME).lastMessageId = G.default.fromTimestamp(a()(Date.now()).subtract(t, "h").valueOf());
}
function eB(e) {
    e.threads?.forEach((t) => {
        if (!x.A_.has(t.type)) return;
        let n = eM.get(t.id);
        (n.lastMessageId = t.lastMessageId),
            (n.lastPinTimestamp = eN(t.lastPinTimestamp)),
            (n._isThread = !0),
            (n._isActiveThread = !0),
            (n._isJoinedThread = null != t.member),
            null == n.ackMessageId && (n.ackMessageId = G.default.fromTimestamp(eY(e.id, t.id))),
            null == n.ackPinTimestamp && (n.ackPinTimestamp = eY(e.id, t.id));
    });
}
function eH(e) {
    if (e.guild_scheduled_events?.length === 0 && null == eM.getIfExists(e.id, er.P.GUILD_EVENT)) return;
    let t = eM.get(e.id, er.P.GUILD_EVENT);
    t._guildId = e.id;
    let n = 0,
        r = null,
        i = t._ackMessageId ?? G.default.fromTimestamp(t.getAckTimestamp());
    e.guild_scheduled_events.forEach((e) => {
        G.default.compare(e.id, r) > 0 && (r = e.id), G.default.compare(e.id, i) > 0 && n++;
    }),
        (t.lastMessageId = r),
        (t.mentionCount = n);
}
function ej(e) {
    let t = Y.A.getGuild(e.id);
    if (null == t) return;
    let n = t?.latestOnboardingQuestionId;
    if (null == n) return;
    let r = eM.get(t.id, er.P.GUILD_ONBOARDING_QUESTION);
    (r._guildId = t.id), (r.lastMessageId = n);
}
function eY(e, t) {
    let n = B.A.getChannel(t),
        r = Y.A.getGuild(e ?? n?.guild_id),
        i = n?.isForumPost() ? 0 : eW(r),
        s = (O.A.joinTimestamp(t)?.getTime() ?? 0) - 5e3;
    isNaN(s) && (s = -5e3);
    let a = n?.threadMetadata?.archiveTimestamp,
        o = null != a ? new Date(a).getTime() - 1 : 0;
    isNaN(o) && (o = 0);
    let l = Math.max(s, o);
    return (
        l <= 0 && (l = G.default.extractTimestamp(t) - 1),
        (isNaN(l) || l <= 0) && (l = 0),
        isNaN(i) ? l : Math.max(i, l)
    );
}
function eW(e) {
    if (null != e && null != e.joinedAt) {
        if (e.joinedAt instanceof Date) {
            let t = e.joinedAt.getTime();
            if (!isNaN(t)) return t;
        } else if ("string" == typeof e.joinedAt) {
            let t = new Date(e.joinedAt).getTime();
            if (!isNaN(t)) return t;
        } else if ("number" == typeof e.joinedAt && !isNaN(e.joinedAt)) return e.joinedAt;
    }
    return Date.now();
}
function eK(e, t, n) {
    let r = e.guildId;
    return !(null != r && R.A.isActive(r, t.parent_id, e.channelId)) && ez(e, n);
}
function ez(e, t) {
    return (
        e.mentionCount > 0 ||
        !(
            G.default.compare(e.channelId, t) > 0 ||
            (null != e._ackMessageId && G.default.compare(e._ackMessageId, t) > 0) ||
            (null != e._lastMessageId && G.default.compare(e._lastMessageId, t) > 0)
        )
    );
}
function e$(e) {
    switch (e.type) {
        case er.P.GUILD_HOME:
        case er.P.GUILD_EVENT:
        case er.P.GUILD_ONBOARDING_QUESTION:
            return null != Y.A.getGuild(e.channelId);
        case er.P.NOTIFICATION_CENTER:
            return G.default.cast(X.default.getCurrentUser()?.id) === e.channelId;
        default:
            return !0;
    }
}
function eq(e, t) {
    if (null == t) return !1;
    let n = eM.get(t);
    return !!ex(n) && n.ack({ trackAnalytics: !0, location: e });
}
function eZ(e) {
    if (null == e) return;
    let t = eM.get(e);
    if (t.type !== er.P.CHANNEL) return;
    let n = B.A.getChannel(t.channelId);
    if (null == n || !n.isForumPost() || null == n.parent_id) return;
    let r = n.parent_id,
        i = eM.get(r);
    R.A.hasLoaded(n.guild_id) &&
        G.default
            .keys(R.A.getThreadsForParent(n.guild_id, r))
            .every((e) => tJ.hasOpenedThread(e) || 0 > G.default.compare(e, i.ackMessageId)) &&
        i.ack({
            trackAnalytics: !0,
            location: {
                section: J.JJy.CHANNEL,
                object: J.ZSU.ACK_FORUM_CHANNEL_NO_UNREAD_POSTS,
                objectType: J.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
        });
}
function eX(e) {
    let { guilds: t, relationships: n, initialPrivateChannels: r, readState: i } = e;
    ev(),
        (e_ = null),
        ef || i.partial || eM.clearAll(),
        (ef = !1),
        i.entries.forEach((e) => {
            let t = e.read_state_type ?? er.P.CHANNEL;
            t !== er.P.CHANNEL && (e = eC(e));
            let n = eM.get(e.id, t);
            (n._persisted = !0),
                (n._mentionCount = e.mention_count ?? 0),
                (n.flags = e.flags),
                (n.lastViewed = e.last_viewed);
            let r = B.A.getBasicChannel(e.id);
            null != r && (0, x.fT)(r.type) && (null == e.last_message_id || 0 === e.last_message_id)
                ? (n.ackMessageId = G.default.fromTimestamp(eY(r.guild_id, r.id)))
                : n.ackedWhileCached
                  ? -1 === G.default.compare(n.ackMessageId, e.last_message_id) && (n.ackMessageId = e.last_message_id)
                  : (n.ackMessageId = e.last_message_id),
                (n.ackedWhileCached = void 0),
                (n.ackPinTimestamp = eN(e.last_pin_timestamp)),
                eM._mentionChannels.delete(n.channelId),
                n._mentionCount > 0 && n.canHaveMentions() && eM._mentionChannels.add(n.channelId);
        }),
        eM.resetGuildSentinels();
    let s = X.default.getCurrentUser()?.id;
    for (let e of (null != s &&
        (eM.get(s, er.P.NOTIFICATION_CENTER).lastMessageId = G.default.fromTimestamp(Date.now())),
    eG(n),
    eP(r),
    t))
        eP("full_sync" === e.channels.op ? e.channels.items : e.channels.writes),
            null != e.channelTimestampUpdates && e1(e.channelTimestampUpdates),
            eU(e);
    eQ(), (em = setTimeout(() => e0(i.entries), 10 * P.A.Millis.SECOND));
}
function eQ() {
    null != em && clearTimeout(em);
}
let eJ = (0, i.throttle)((e) => {
    e.delete();
}, 100);
function e0(e) {
    let t = eI();
    for (let n of e) {
        let e = n.read_state_type ?? er.P.CHANNEL,
            r = eM.get(n.id, e);
        r.shouldDeleteReadState(t) && eJ(r);
    }
}
function e1(e) {
    for (let t of e) {
        let e = eM.get(t.id);
        null != t.last_message_id && (e.lastMessageId = t.last_message_id),
            null != t.last_pin_timestamp && (e.lastPinTimestamp = eN(t.last_pin_timestamp));
    }
}
function e2(e) {
    let { lazyPrivateChannels: t } = e;
    eP(t);
}
function e3(e) {
    let { readStates: t, selectedChannelId: n } = e;
    ev(),
        (e_ = null),
        (ec = n),
        (ed = V.Ay.getCurrentSidebarChannelId(ec)),
        eM.clearAll(),
        t.forEach((e) => {
            let t = eM.get(e.channelId);
            t.deserializeForOverlay(e), t.type === er.P.CHANNEL && t.rebuildChannelState();
        });
}
function e6(e) {
    let { guild: t } = e,
        n = eI();
    eM.forEach((e) => {
        e.guildId === t.id && e.shouldDeleteReadState(n) && e.delete(!1);
    }),
        eP("full_sync" === t.channels.op ? t.channels.items : t.channels.writes),
        null != t.channelTimestampUpdates && e1(t.channelTimestampUpdates),
        eU(t);
}
function e4(e) {
    let { channelId: t, isAfter: n, messages: r } = e,
        i = eM.get(t);
    i.loadedMessages = !0;
    let s = K.A.getMessages(t);
    null != s &&
        ((r.length > 0 && 1 === G.default.compare(r[0].id, i.ackMessageId) && 0 === i.unreadCount) ||
        s.hasPresent() ||
        s.jumpTargetId === i.ackMessageId
            ? i.rebuildChannelState()
            : n &&
              null != i.ackMessageId &&
              s.has(i.ackMessageId, !0) &&
              ((i.unreadCount += r.length), null == i.oldestUnreadMessageId && i.rebuildChannelState())),
        ek(r.map((e) => e.thread).filter(k.Vq));
}
function e5(e) {
    let { channelId: t } = e;
    eM.get(t).rebuildChannelState();
}
function e7(e) {
    let t,
        n,
        { channelId: i, message: s, isPushNotification: a } = e,
        o = eM.get(i),
        l = o.hasUnread(),
        u = null != o.lastMessageId && o.lastMessageId >= s.id;
    o.lastMessageId = s.id;
    let c = X.default.getCurrentUser(),
        d = B.A.getBasicChannel(i);
    if (null != s.author && null != c && s.author.id === c.id && !J.MRS.SELF_MENTIONABLE_SYSTEM.has(s.type))
        return null != o.outgoingAck && o.clearOutgoingAck(), tw({ channelId: i, messageId: s.id, manual: !1 });
    let _ = (0, I.Y)();
    if (_?.isReady() === !0) {
        let e = _.getCurrentRoute();
        p.A.getChatOpen(o.channelId)
            ? (t = o.channelId)
            : e?.name === "channel"
              ? (t = e.params.channelId)
              : e?.name === "guilds" && (t = e.params?.channelId);
    } else null == _ && ((t = q.A.getChannelId()), (n = V.Ay.getCurrentSidebarChannelId(t)));
    let f = t === i || n === i;
    if (f && ex(o) && !a)
        return o.ack({
            messageId: s.id,
            trackAnalytics: !0,
            location: {
                section: J.JJy.CHANNEL,
                object: J.ZSU.ACK_INCOMING_MESSAGE,
                objectType: J.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
        });
    if (null != r && r.isInstanceFocused() && f && r.isInstanceLocked() && r.isPinned(J.uss.TEXT))
        return o.ack({
            messageId: s.id,
            trackAnalytics: !0,
            location: {
                section: J.JJy.OVERLAY,
                object: J.ZSU.ACK_INCOMING_MESSAGE,
                objectType: J.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
        });
    if (
        (null == o.oldestUnreadMessageId || o.oldestUnreadMessageIdStale
            ? (o.oldestUnreadMessageId = s.id)
            : l || (0, b.i$)() === i || (o.oldestUnreadMessageId = s.id),
        !u && o.unreadCount++,
        !($.A.isBlockedOrIgnoredForMessage(s) || (s.type === J.lAJ.RECIPIENT_REMOVE && d?.type === J.rbe.GROUP_DM)))
    ) {
        let { shouldMention: e, isMentionLowImportance: t } = e8(s, c, o);
        e && ((o.isMentionLowImportance = t), o.mentionCount++);
    }
}
function e8(e, t, n) {
    if (
        null != t &&
        (0, v.bG)({
            rawMessage: e,
            userId: t.id,
            suppressEveryone: Z.Ay.isSuppressEveryoneEnabled(n.guildId),
            suppressRoles: Z.Ay.isSuppressRolesEnabled(n.guildId),
        })
    )
        return { shouldMention: !0, isMentionLowImportance: !1 };
    let r = B.A.getChannel(e.channel_id);
    if (eR(r)) return { shouldMention: !0, isMentionLowImportance: !1 };
    if (Z.Ay.mentionOnAllMessages && null != r) {
        if (r.isThread()) {
            if ((0, L.l)(r) === ei.CP.ALL_MESSAGES) return { shouldMention: !0, isMentionLowImportance: !0 };
        } else if (
            !r.isVocal() &&
            !Z.Ay.isChannelMuted(r.guild_id, r.id) &&
            Z.Ay.resolvedMessageNotifications(r) === J.orn.ALL_MESSAGES
        )
            return { shouldMention: !0, isMentionLowImportance: !0 };
    }
    return { shouldMention: !1, isMentionLowImportance: !1 };
}
function e9(e) {
    let { channel: t } = e;
    if (!(0, x.Z_)(t.type)) return !1;
    let n = eM.get(t.id);
    (n.lastMessageId = t.lastMessageId), (n.lastPinTimestamp = eN(t.lastPinTimestamp));
}
function te(e) {
    let { channel: t } = e;
    tt(t), tn(t);
}
function tt(e) {
    if (!x.A_.has(e.type)) return !1;
    let t = eM.get(e.id);
    (t.lastMessageId = e.lastMessageId),
        (t.lastPinTimestamp = eN(e.lastPinTimestamp)),
        t.syncThreadSettings(),
        e.ownerId === F.default.getId() && (t.loadedMessages = !0);
}
function tn(e) {
    let t = e.parent_id;
    eM.get(t).lastMessageId = e.id;
    let n = X.default.getCurrentUser();
    if (e.ownerId === n?.id) return (eM.get(e.id)._persisted = !0), tw({ channelId: t, messageId: e.id, manual: !1 });
}
function tr(e) {
    let { channel: t } = e;
    return !!x.A_.has(t.type) && eM.get(t.id).syncThreadSettings();
}
function ti(e) {
    let { id: t } = e;
    return eM.get(t).syncThreadSettings();
}
function ts(e) {
    return (0, D.k)(e) && eM.get(e.id).syncThreadSettings();
}
function ta(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        if (!x.A_.has(e.type)) return;
        let t = eM.get(e.id);
        if (
            ((t.lastMessageId = e.lastMessageId),
            (t.lastPinTimestamp = eN(e.lastPinTimestamp)),
            (t._isThread = !0),
            (t._isActiveThread = !0),
            (t._isJoinedThread = O.A.hasJoined(e.id)),
            e.isForumPost())
        ) {
            let t = eM.get(e.parent_id);
            0 > G.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id);
        }
    });
}
function to(e) {
    let { threads: t } = e;
    ek(t);
}
function tl(e) {
    let { channelId: t } = e;
    return eq(
        { section: J.JJy.CHANNEL, object: J.ZSU.ACK_RESORT_THREADS, objectType: J.AnalyticsObjectTypes.ACK_AUTOMATIC },
        t,
    );
}
function tu(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n } = e;
        t.forEach((e) => {
            ek(
                e
                    .map((e) => {
                        let { thread: t } = e;
                        return t;
                    })
                    .filter(k.Vq),
            );
        }),
            ek(n);
    });
}
function tc(e) {
    let t = X.default.getCurrentUser();
    return null != e.creator_id && null != t && e.creator_id === t.id;
}
function td(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id,
        r = eM.get(t.guild_id, er.P.GUILD_EVENT);
    ((r.lastMessageId = t.id), tc(t))
        ? tM({ type: "GUILD_FEATURE_ACK", id: n, ackType: er.P.GUILD_EVENT, ackedId: t.id, local: !1 })
        : !Z.Ay.isMuteScheduledEventsEnabled(n) && r.mentionCount++;
}
function t_(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id;
    if (tc(t) || ![en.XG.CANCELED, en.XG.COMPLETED].includes(t.status)) return !1;
    eM.get(n, er.P.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
}
function tf(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id;
    if (tc(t)) return !1;
    eM.get(t.guild_id, er.P.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
}
function tp(e) {
    let t = X.default.getCurrentUser();
    if (
        null == t ||
        null == e.relationship.since ||
        (e.relationship.type !== J.eA$.PENDING_INCOMING && e.relationship.type !== J.eA$.FRIEND)
    )
        return !1;
    let n = eM.get(t.id, er.P.NOTIFICATION_CENTER),
        r = e.relationship.type === J.eA$.FRIEND,
        i = r ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? G.default.extractTimestamp(n.ackMessageId) : 0) < i &&
        ((n.lastMessageId = G.default.fromTimestamp(i)),
        N.A.active ? tk(t.id, er.P.NOTIFICATION_CENTER, void 0, !1) : r ? n.mentionCount-- : n.mentionCount++);
}
function th(e) {
    let t = X.default.getCurrentUser();
    if (null == t || null == e.relationship.since || e.relationship.type !== J.eA$.PENDING_INCOMING) return !1;
    let n = eM.get(t.id, er.P.NOTIFICATION_CENTER),
        r = new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? G.default.extractTimestamp(n.ackMessageId) : 0) <= r &&
        (n.mentionCount = Math.max(0, n.mentionCount - 1));
}
function tm(e) {
    let { item: t } = e,
        n = X.default.getCurrentUser()?.id;
    if (null == n) return !1;
    let r = eM.get(n, er.P.NOTIFICATION_CENTER);
    ((r.lastMessageId = t.id), N.A.active || 0) ? tk(n, er.P.NOTIFICATION_CENTER, t.id, !1) : r.mentionCount++;
}
function tE(e) {
    let { ids: t, optimistic: n } = e;
    if (n || N.A.active) return !1;
    let r = X.default.getCurrentUser()?.id;
    if (null == r) return !1;
    let i = eM.get(r, er.P.NOTIFICATION_CENTER);
    t.forEach((e) => {
        0 > G.default.compare(i.ackMessageId, e) && (i.mentionCount = Math.max(i.mentionCount - 1, 0));
    });
}
function tg(e) {
    let { guild: t } = e;
    return eM.clear(t.id, er.P.GUILD_EVENT);
}
function tA(e) {
    let { guild: t } = e,
        n = t.latest_onboarding_question_id;
    if (null == n) return;
    let r = eM.get(t.id, er.P.GUILD_ONBOARDING_QUESTION);
    (r._guildId = t.id), (r.lastMessageId = n);
}
function tI(e) {
    let { channel: t } = e;
    return eM.clear(t.id);
}
function tT(e) {
    let { channelId: t } = e,
        n = V.Ay.getCurrentSidebarChannelId(t),
        r = B.A.getChannel(t);
    if (null != r) {
        let e = eM.get(r.id);
        (e.ackMessageIdAtChannelSelect = e.ackMessageId ?? G.default.fromTimestamp(e.getAckTimestamp())),
            e.recordLastViewedTime();
    }
    tN(ec), tN(ed);
    let i = !1;
    return (
        ec !== t && ((i = tC(ec) || i), (i = tC(ed) || i)),
        (ec === t || (r?.type != null && J.kvI.GUILD_THREADS_ONLY.has(r.type))) &&
            (i =
                eq(
                    {
                        section: J.JJy.CHANNEL,
                        object: J.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL,
                        objectType: J.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    t,
                ) || i),
        ec === t &&
            (i =
                eq(
                    {
                        section: J.JJy.CHANNEL,
                        object: J.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR,
                        objectType: J.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    n,
                ) || i),
        (ec = t),
        (ed = n),
        i
    );
}
function tS() {
    let e = V.Ay.getCurrentSidebarChannelId(ec),
        t = !1;
    return (
        ed !== e
            ? ((t = tC(ed)), (ed = e))
            : (t =
                  eq(
                      {
                          section: J.JJy.CHANNEL,
                          object: J.ZSU.ACK_CHANNEL_SECTION_STORE_UPDATE,
                          objectType: J.AnalyticsObjectTypes.ACK_AUTOMATIC,
                      },
                      e,
                  ) || t),
        t
    );
}
function ty(e) {
    let { channelId: t, guildId: n, messageId: r } = e;
    return tT({
        guildId: n,
        channelId: t,
        messageId: r,
        type: "CHANNEL_SELECT",
        source: "OVERLAY_TEXT_CHAT_SELECT_CHANNEL",
    });
}
function tv(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let n = eM.get(t);
    if (!n.hasMentions())
        return (
            (n.oldestUnreadMessageId = null),
            n.ack({
                isExplicitUserAction: !0,
                trackAnalytics: !0,
                location: {
                    section: J.JJy.CHANNEL,
                    object: J.ZSU.ACK_VOICE_CHANNEL_SELECT,
                    objectType: J.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
            })
        );
}
function tN(e) {
    null == e || (eM.get(e).isManualAck = !1);
}
function tC(e) {
    if (null == e) return !1;
    let t = eM.get(e);
    return !t.hasUnread() && ((t.oldestUnreadMessageId = null), !0);
}
function tb(e) {
    let t = !1;
    return (
        eg.forEachChannel((n, r) => {
            r.has(e.windowId) && (t = tR(n, e.focused) || t);
        }),
        t
    );
}
function tR(e, t) {
    if (null == e) return !1;
    let n = eM.get(e);
    return (
        t || n.hasUnread() || (n.oldestUnreadMessageIdStale = !0),
        eq(
            {
                section: J.JJy.CHANNEL,
                object: J.ZSU.ACK_WINDOW_FOCUS,
                objectType: J.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
            e,
        )
    );
}
function tO(e) {
    let { channelId: t } = e;
    return eq(
        { section: J.JJy.CHANNEL, object: J.ZSU.ACK_CHANNEL_SCROLL, objectType: J.AnalyticsObjectTypes.ACK_AUTOMATIC },
        t,
    );
}
function tD(e) {
    let { channelId: t, messageId: n, immediate: r = !1, force: i = !1, context: s, location: a } = e,
        o = eM.get(t),
        l = o.ack({
            messageId: n,
            local: s !== J.QCW,
            immediate: r,
            force: i,
            isExplicitUserAction: !0,
            location: a,
            trackAnalytics: !0,
        });
    return null != n ? (o.rebuildChannelState(), !0) : l;
}
function tL(e) {
    let { channelId: t, timestamp: n } = e;
    return eM.get(t).ackPins(n);
}
function tw(e) {
    let { channelId: t, messageId: n, manual: r, newMentionCount: i } = e,
        s = eM.get(t);
    return r
        ? (s.rebuildChannelState(n, !0, i), s.clearOutgoingAck(), !0)
        : n !== s._ackMessageId && s.ack({ messageId: n, local: !0, trackAnalytics: !1 });
}
function tx(e) {
    let { channelId: t } = e;
    return eM
        .get(t)
        .ack({
            messageId: void 0,
            local: !0,
            immediate: void 0,
            force: void 0,
            isExplicitUserAction: !0,
            trackAnalytics: !1,
        });
}
function tM(e) {
    let { id: t, ackType: n, ackedId: r, local: i } = e;
    return tk(t, n, r, i);
}
function tP(e) {
    let { ackType: t, ackedId: n, local: r } = e,
        i = X.default.getCurrentUser()?.id;
    return null != i && tk(i, t, n, r);
}
function tk(e, t, n, r) {
    let i = eM.get(e, t);
    return (
        n !== i.ackMessageId &&
        i.lastMessageId !== i.ackMessageId &&
        (null != i.lastMessageId || 0 !== i.mentionCount) &&
        ((n = n ?? i.lastMessageId ?? G.default.fromTimestamp(i.getAckTimestamp())),
        i.ack({ messageId: n, local: r ?? !0, trackAnalytics: !1 }))
    );
}
function tU(e) {
    let { channelId: t, lastPinTimestamp: n } = e,
        r = eM.get(t),
        i = eN(n);
    return r.lastPinTimestamp !== i && ((r.lastPinTimestamp = i), !0);
}
function tG(e) {
    let t = !1;
    for (let n of e.channels) {
        let e = eM.get(n.id),
            r = eN(n.lastPinTimestamp);
        (e.lastMessageId !== n.lastMessageId || e.lastPinTimestamp !== r) &&
            ((t = !0), (e.lastMessageId = n.lastMessageId), (e.lastPinTimestamp = r));
    }
    return t;
}
function tF() {
    e_ = null;
}
function tV(e) {
    let { readStates: t } = e;
    (ef = !0),
        ev(),
        t.forEach((e) => {
            let t = e.type ?? er.P.CHANNEL;
            e.type = t;
            let n = eM._readStates.get(t) ?? new Map();
            n.set(e.channelId, (0, d.pp)(e, eM)), eM._readStates.has(t) || eM._readStates.set(t, n);
        });
}
function tB(e) {
    let { channelId: t, chatOpen: n } = e;
}
function tH(e, t, n) {
    e.forEach((e) => {
        let { channelId: t, messageId: n, readStateType: r } = e;
        eM.get(t, r).ack({
            messageId: n,
            local: !0,
            immediate: void 0,
            force: void 0,
            isExplicitUserAction: !0,
            trackAnalytics: !1,
        });
    }),
        t === J.QCW &&
            (ep.push(
                ...e.map((e) => ({
                    channel_id: e.channelId,
                    message_id: e.messageId,
                    read_state_type: e.readStateType,
                })),
            ),
            eh || eO(n));
}
function tj(e) {
    let { channels: t, context: n, onFinished: r } = e;
    tH(
        t.filter((e) => null != e.messageId && tJ.hasUnreadOrMentions(e.channelId, e.readStateType)),
        n,
        r,
    );
}
function tY(e) {
    let { channelId: t, windowId: n } = e;
    return (
        !eg.hasWindowId(t, n) &&
        (eg.addWindowId(t, n),
        eq(
            {
                section: J.JJy.CHANNEL,
                object: J.ZSU.ENABLE_AUTOMATIC_ACK,
                objectType: J.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
            t,
        ))
    );
}
function tW(e) {
    let { channelId: t, windowId: n } = e;
    return eg.removeWindowId(t, n), !1;
}
function tK(e) {
    let { channelId: t } = e;
    return tC(t);
}
function tz(e) {
    let { channelId: t, location: n } = e;
    return eq(n, t);
}
function t$(e) {
    let { changesByChannelId: t } = e;
    for (let e in t) {
        let n = t[e],
            r = eM.getIfExists(e);
        if (null != r)
            for (let e of [n.new_messages?.[0]].concat(n.modified_messages ?? []).filter(k.Vq))
                1 === G.default.compare(e.id, r.lastMessageId) && (r.lastMessageId = e.id);
    }
}
function tq(e) {
    let { ackedId: t } = e,
        n = X.default.getCurrentUser()?.id;
    if (null == n) return !1;
    let r = eM.get(n, er.P.MESSAGE_REQUESTS);
    if (t === r.ackMessageId) return !1;
    (r.ackMessageId = t), r.ack({ messageId: t, isExplicitUserAction: !0, trackAnalytics: !1 });
}
function tZ(e) {
    let t = X.default.getCurrentUser()?.id;
    if (null == t) return !1;
    let n = eM.get(t, er.P.MESSAGE_REQUESTS);
    if (null == n.ackMessageId) return !1;
    n.ackMessageId = void 0;
}
function tX(e) {
    let { state: t } = e;
    return (
        t === J.g6G.ACTIVE &&
        eq(
            {
                section: J.JJy.CHANNEL,
                object: J.ZSU.ACK_APP_FOREGROUND,
                objectType: J.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
            q.A.getChannelId(),
        )
    );
}
class tQ extends l.Ay.Store {
    static displayName = "ReadStateStore";
    initialize() {
        H.A,
            X.default,
            Y.A,
            j.A,
            B.A,
            q.A,
            K.A,
            z.A,
            p.A,
            R.A,
            O.A,
            V.Ay,
            A.Ay,
            g.A,
            m.A,
            Z.Ay,
            Q.A,
            N.A,
            T.A,
            w.A,
            y.A,
            this.waitFor(
                R.A,
                F.default,
                p.A,
                V.Ay,
                B.A,
                H.A,
                f.Ay,
                m.A,
                j.A,
                A.Ay,
                Y.A,
                W.A,
                O.A,
                K.A,
                N.A,
                z.A,
                $.A,
                q.A,
                Z.Ay,
                w.A,
                X.default,
                Q.A,
            ),
            this.syncWith([V.Ay], tS);
    }
    getReadStatesByChannel() {
        return eM._readStates.get(er.P.CHANNEL) ?? new Map();
    }
    getForDebugging(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL;
        return eM.getIfExists(e, t);
    }
    getNotifCenterReadState(e) {
        return eM.getIfExists(e, er.P.NOTIFICATION_CENTER);
    }
    hasUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.canBeUnread() && e.hasUnread(), !1);
    }
    hasUnreadOrMentions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.canBeUnread() && e.hasUnreadOrMentions(), !1);
    }
    hasTrackedUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.canTrackUnreads() && e.hasUnread(), !1);
    }
    isForumPostUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.isForumPostUnread(), !1);
    }
    getUnreadCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canBeUnread() ? e.unreadCount : 0), 0);
    }
    getMentionCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL,
            n = eM.getValue(e, t, (e) => (e.canHaveMentions() ? e.getMentionCount() : 0), 0);
        if ((0, h.A)(e) && n > 0) return 1;
        return n;
    }
    getIsMentionLowImportance(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL;
        return t === er.P.CHANNEL && eM.getValue(e, t, (e) => e.isMentionLowImportance, !1);
    }
    getGuildChannelUnreadState(e, t, n, r, i) {
        return eM.getValue(e.id, er.P.CHANNEL, (s) => s.getGuildChannelUnreadState(e, t, n, r, i), {
            mentionCount: 0,
            unread: !1,
            isMentionLowImportance: !1,
        });
    }
    hasRecentlyVisitedAndRead(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.hasRecentlyVisitedAndRead(), !1);
    }
    ackMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canBeUnread() ? e.ackMessageId : null), null);
    }
    getTrackedAckMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canTrackUnreads() ? e._ackMessageId : null), null);
    }
    lastMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.lastMessageId, null);
    }
    lastMessageTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.lastMessageTimestamp, 0);
    }
    lastPinTimestamp(e) {
        return eM.getValue(e, er.P.CHANNEL, (e) => e.lastPinTimestamp, null);
    }
    getOldestUnreadMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadMessageId : null), null);
    }
    getOldestUnreadTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0), 0);
    }
    isEstimated(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.estimated, !1);
    }
    hasOpenedThread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.P.CHANNEL;
        return eM.getValue(e, t, (e) => e._persisted, !1);
    }
    hasUnreadPins(e) {
        return eM.getValue(e, er.P.CHANNEL, (e) => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1);
    }
    isNewForumThread(e, t, n) {
        let r = eM.get(t);
        if (
            !0 === eM.get(e)._persisted ||
            null == r.ackMessageIdAtChannelSelect ||
            0 >= G.default.compare(e, r.ackMessageIdAtChannelSelect)
        )
            return !1;
        let i = eW(n);
        return G.default.extractTimestamp(e) > i;
    }
    getAllReadStates(e) {
        let t = [];
        return (
            eM.forEach((n) => {
                switch (n.type) {
                    case er.P.GUILD_HOME:
                    case er.P.GUILD_EVENT:
                    case er.P.GUILD_ONBOARDING_QUESTION:
                        null != Y.A.getGuild(n.channelId) && t.push(n.serialize(e));
                        break;
                    case er.P.NOTIFICATION_CENTER:
                    case er.P.MESSAGE_REQUESTS:
                        G.default.cast(X.default.getCurrentUser()?.id) === n.channelId && t.push(n.serialize(e));
                        break;
                    default:
                        t.push(n.serialize(e));
                }
            }),
            t
        );
    }
    getGuildUnreadsSentinel(e) {
        return eM.getGuildSentinels(e).unreadsSentinel;
    }
    getMentionChannelIds() {
        return eM.getMentionChannelIds();
    }
    getNonChannelAckId(e) {
        let t = X.default.getCurrentUser()?.id;
        return null == t ? null : eM.get(t, e).ackMessageId;
    }
    getSnapshot(e, t) {
        let n = eM.get(e);
        return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot;
    }
    getChannelIdsForWindowId(e) {
        return eg.getAllChannelIdsForWindowId(e);
    }
}
let tJ = new tQ(_.h, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: t$,
        CONNECTION_OPEN: eX,
        CONNECTION_OPEN_SUPPLEMENTAL: e2,
        LOGOUT: eQ,
        OVERLAY_INITIALIZE: e3,
        CACHE_LOADED: tV,
        GUILD_CREATE: e6,
        LOAD_MESSAGES_SUCCESS: e4,
        MESSAGE_CREATE: e7,
        MESSAGE_DELETE: e5,
        MESSAGE_DELETE_BULK: e5,
        MESSAGE_ACK: tw,
        CHANNEL_ACK: tD,
        CHANNEL_LOCAL_ACK: tx,
        CHANNEL_PINS_ACK: tL,
        CHANNEL_PINS_UPDATE: tU,
        CHANNEL_SELECT: tT,
        OVERLAY_TEXT_CHAT_SELECT_CHANNEL: ty,
        VOICE_CHANNEL_SELECT: tv,
        CHANNEL_CREATE: e9,
        THREAD_CREATE: te,
        THREAD_UPDATE: tr,
        THREAD_LIST_SYNC: ta,
        LOAD_THREADS_SUCCESS: to,
        LOAD_ARCHIVED_THREADS_SUCCESS: to,
        SEARCH_MESSAGES_SUCCESS: tu,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: tu,
        THREAD_MEMBER_UPDATE: ti,
        THREAD_MEMBERS_UPDATE: ts,
        CHANNEL_DELETE: tI,
        THREAD_DELETE: tI,
        WINDOW_FOCUS: tb,
        UPDATE_CHANNEL_DIMENSIONS: tO,
        CURRENT_USER_UPDATE: tF,
        BULK_ACK: tj,
        ENABLE_AUTOMATIC_ACK: tY,
        DISABLE_AUTOMATIC_ACK: tW,
        GUILD_FEATURE_ACK: tM,
        GUILD_SCHEDULED_EVENT_CREATE: td,
        GUILD_SCHEDULED_EVENT_UPDATE: t_,
        GUILD_SCHEDULED_EVENT_DELETE: tf,
        GUILD_DELETE: tg,
        GUILD_UPDATE: tA,
        RESORT_THREADS: tl,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: tB,
        DECAY_READ_STATES: ev,
        NOTIFICATION_CENTER_ITEM_CREATE: tm,
        RELATIONSHIP_ADD: tp,
        RELATIONSHIP_REMOVE: th,
        NOTIFICATION_CENTER_ITEMS_ACK: tE,
        USER_NON_CHANNEL_ACK: tP,
        PASSIVE_UPDATE_V2: tG,
        CLEAR_OLDEST_UNREAD_MESSAGE: tK,
        TRY_ACK: tz,
        MESSAGE_REQUEST_ACK: tq,
        MESSAGE_REQUEST_CLEAR_ACK: tZ,
        APP_STATE_UPDATE: tX,
    }),
    t0 = tJ;
