"use strict";
let i;
n.d(t, { Ay: () => e2, Wm: () => ev }), n(321073), n(938796);
var r = n(735438),
    s = n(989349),
    a = n.n(s),
    o = n(665260),
    l = n(17928),
    u = n(636537),
    c = n(451988),
    d = n(933681),
    _ = n(228366),
    h = n(933958);
n(183636);
var f = n(313961),
    p = n(343328),
    E = n(717125),
    m = n(626584),
    g = n(736056),
    A = n(698441),
    I = n(250953),
    T = n(380335),
    S = n(309199),
    y = n(157550),
    C = n(451919),
    N = n(495544),
    v = n(209489);
async function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        n = N.default.getId();
    for (let i = 0; i < t; i++)
        try {
            return await e();
        } catch (e) {
            if (i + 1 >= t) throw e;
            if ((await (0, c.BK)((i + 1) * 2e3), await v.A.awaitOnline(), n !== N.default.getId()))
                throw Error("User changed.");
        }
    throw Error("Unreachable code in networkAwareRetry");
}
var O = n(252431),
    b = n(491001),
    D = n(395504),
    L = n(206885),
    w = n(622794),
    M = n(970278),
    P = n(152007),
    x = n(882733),
    k = n(607508),
    U = n(617617),
    G = n(95701),
    F = n(799422),
    V = n(927813),
    B = n(403362),
    j = n(935208),
    H = n(761640),
    Y = n(734057),
    W = n(72314),
    K = n(919638),
    $ = n(71393),
    z = n(885576),
    q = n(232835),
    Z = n(576705),
    X = n(994500),
    Q = n(309010),
    J = n(543465),
    ee = n(287809),
    et = n(531685),
    en = n(652215),
    ei = n(5867),
    er = n(746080),
    es = n(988794),
    ea = n(790782),
    eo = n(37411);
let el = new m.A("ReadStateStore");
__OVERLAY__ && (i = n(184809).default);
let eu = () => !1;
!__OVERLAY__ && L.O && ({ isOverlayChannelVisible: eu } = n(267355));
let ec = en.hVb.VIEW_CHANNEL | en.hVb.READ_MESSAGE_HISTORY,
    ed = Q.A.getChannelId(),
    e_ = null,
    eh = null,
    ef = !1,
    ep = [],
    eE = !1,
    em = null,
    eg = new (class {
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
            for (let [n, i] of j.default.entries(this.channelWindowIds)) i.has(e) && t.add(n);
            return Array.from(t);
        }
        isAnyWindowFocused(e) {
            let t = this.channelWindowIds[e];
            if (null == t) return !1;
            for (let e of t) if (et.A.isFocused(e)) return !0;
            return !1;
        }
        removeWindowId(e, t) {
            null != this.channelWindowIds[e] &&
                (this.channelWindowIds[e].delete(t),
                0 === this.channelWindowIds[e].size && delete this.channelWindowIds[e]);
        }
        forEachChannel(e) {
            for (let [t, n] of j.default.entries(this.channelWindowIds)) e(t, n);
        }
    })(),
    eA = 30 * V.A.Millis.DAY;
function eI() {
    return j.default.fromTimestamp(Date.now() - eA);
}
let eT = 0,
    eS = 0,
    ey = null;
function eC() {
    (eT = Date.now() - 7 * V.A.Millis.DAY),
        (eS = Date.now() - 3 * V.A.Millis.DAY),
        clearTimeout(ey),
        (ey = setTimeout(() => {
            _.h.dispatch({ type: "DECAY_READ_STATES" });
        }, +V.A.Millis.HOUR));
}
function eN(e) {
    if (null == e) return 0;
    let t = Date.parse(e);
    return isNaN(t) ? 0 : t;
}
function ev(e, t) {
    let n = Y.A.getChannel(e.channel_id);
    return (
        !(null == n || X.A.isBlockedOrIgnoredForMessage(e)) &&
        !!(
            (0, C.Ay)({
                message: e,
                userId: t.id,
                suppressEveryone: J.Ay.isSuppressEveryoneEnabled(n.guild_id),
                suppressRoles: J.Ay.isSuppressRolesEnabled(n.guild_id),
            }) || eR(n)
        )
    );
}
function eR(e) {
    return null != e && e.isPrivate() && !J.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
}
async function eO(e) {
    if (0 === ep.length) {
        (eE = !1), e?.();
        return;
    }
    eE = !0;
    let t = ep.splice(0, 100);
    try {
        await R(() =>
            u.Bo.post({ url: en.Rsh.BULK_ACK, body: { read_states: t }, oldFormErrors: !0, rejectWithError: !1 }),
        );
    } catch (e) {
        (ep.length = 0), (eE = !1);
        return;
    }
    await (0, c.BK)(1e3), eO(e);
}
function eb(e, t) {
    return null != i && i.isInstanceFocused() && i.isPinned(en.uss.TEXT) ? e : null != t && eu(t);
}
function eD(e, t) {
    ee.default.getCurrentUser()?.hasAnyStaffLevel() && el.log("STAFF-ACK-LOG:", t, e.channelId);
}
function eL(e, t) {
    if ((eD(e, "shouldAutomaticallyAck called"), e.type !== ea.P.CHANNEL)) return eD(e, "not channel read state"), !1;
    let n = Y.A.getChannel(e.channelId),
        i = null != n && n.isForumPost();
    if (
        null != h.Ay.getConnectedActivityLocation() &&
        h.Ay.getActivityPanelMode() === ei.Gd.PANEL &&
        h.Ay.getFocusedLayout() === ei.E8.NO_CHAT
    )
        return eD(e, "In activity"), !1;
    if (z.A.isIdle()) return eD(e, "Is idle"), !1;
    if (!e.canTrackUnreads()) return eD(e, "Cannot track unreads"), !1;
    if (n?.isForumLikeChannel() !== !0 && !eg.isAnyWindowFocused(e.channelId) && !eb(!0, e.channelId)) return !1;
    if (i && !e._persisted) return eD(e, "unpersisted forum post"), !0;
    if (!e.hasUnreadOrMentions()) return eD(e, "No unread or mentions"), !1;
    if (n?.isForumLikeChannel() === !0) return eD(e, "Forum-like channel"), !1;
    if (!(i && !e._isJoinedThread) && !W.A.isAtBottom(e.channelId)) return eD(e, "Not at bottom"), !1;
    let r = f.A.getLayout(e.channelId);
    if (!f.A.getChatOpen(e.channelId) && (r === en.DUB.NO_CHAT || r === en.DUB.FULL_SCREEN))
        return eD(e, "Fullscreen video"), !1;
    if (!eg.isChannelAckable(e.channelId)) return eD(e, "Not ackable"), !1;
    let s = q.A.getMessages(e.channelId);
    return null == s || !s.ready || s.loadingMore
        ? (eD(e, "Still loading messages"), !1)
        : (0, w.oE)(e.channelId, t)
          ? (eD(e, "Acked"), !0)
          : (eD(e, "Chat not focused"), !1);
}
class ew {
    static _guildReadStateSentinels = {};
    static _readStates = new Map();
    static _mentionChannels = new Set();
    channelId;
    type = ea.P.CHANNEL;
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
        for (let t of ew._readStates.values()) for (let n of t.values()) if (!1 === e(n)) break;
    }
    static get(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL,
            n = ew._readStates.get(t)?.get(e);
        if (null == n) {
            n = new ew(e, t);
            let i = ew._readStates.get(t) ?? new Map();
            i.set(e, n), ew._readStates.has(t) || ew._readStates.set(t, i);
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL;
        return ew._readStates.get(t)?.get(e);
    }
    static getMentionChannelIds() {
        let e = [];
        for (let t of ew._mentionChannels) {
            let n = ew.getIfExists(t);
            null != n && n.canHaveMentions() ? e.push(t) : ew._mentionChannels.delete(t);
        }
        return e;
    }
    static getValue(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL,
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0,
            r = this.getIfExists(e, t);
        return null == r ? i : n(r);
    }
    static clear(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL,
            n = ew._readStates.get(t);
        if (null == n) return !1;
        let i = n.delete(e);
        return i && ew._mentionChannels.delete(e), i;
    }
    static clearAll() {
        ew._readStates.clear(), ew._mentionChannels.clear();
    }
    constructor(e, t = ea.P.CHANNEL) {
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
            _guildId: i,
            _isThread: r,
            _isActiveThread: s,
            _isJoinedThread: a,
            _persisted: o,
            loadedMessages: l,
            _lastMessageId: u,
            _lastMessageTimestamp: c,
            _ackMessageId: d,
            _ackMessageTimestamp: _,
            ackPinTimestamp: h,
            isManualAck: f,
            lastPinTimestamp: p,
            _oldestUnreadMessageId: E,
            oldestUnreadMessageIdStale: m,
            estimated: g,
            _mentionCount: A,
            flags: I,
            lastViewed: T,
        } = this;
        if (e)
            return {
                channelId: t,
                type: n,
                _guildId: i,
                _isThread: r,
                _isActiveThread: s,
                _isJoinedThread: a,
                _persisted: o,
                loadedMessages: l,
                _lastMessageId: u,
                _lastMessageTimestamp: c,
                _ackMessageId: d,
                _ackMessageTimestamp: _,
                ackPinTimestamp: h,
                isManualAck: f,
                lastPinTimestamp: p,
                _oldestUnreadMessageId: E,
                oldestUnreadMessageIdStale: m,
                estimated: g,
                _mentionCount: A,
                flags: I,
                lastViewed: T,
            };
        let S = {
            channelId: t,
            type: n,
            _guildId: i,
            _persisted: o,
            _lastMessageId: u,
            _lastMessageTimestamp: c,
            _ackMessageId: d,
            _ackMessageTimestamp: _,
            ackPinTimestamp: h,
            lastPinTimestamp: p,
            _mentionCount: A,
            flags: I,
        };
        return (
            null != T && T > 0 && (S.lastViewed = T),
            r && ((S._isThread = r), (S._isActiveThread = s), (S._isJoinedThread = a)),
            S
        );
    }
    deserializeForOverlay(e) {
        let {
            channelId: t,
            type: n,
            _guildId: i,
            _isThread: r,
            _isActiveJoinedThread: s,
            _isActiveThread: a,
            _isJoinedThread: o,
            _persisted: l,
            loadedMessages: u,
            _lastMessageId: c,
            _lastMessageTimestamp: d,
            _ackMessageId: _,
            _ackMessageTimestamp: h,
            ackPinTimestamp: f,
            isManualAck: p,
            lastPinTimestamp: E,
            _oldestUnreadMessageId: m,
            oldestUnreadMessageIdStale: g,
            estimated: A,
            _unreadCount: I,
            _mentionCount: T,
            flags: S,
            lastViewed: y,
        } = e;
        (this.channelId = t),
            (this.type = n ?? ea.P.CHANNEL),
            (this._guildId = i),
            (this._isThread = r ?? !1),
            null != s
                ? ((this._isActiveThread = s), (this._isJoinedThread = s))
                : ((this._isActiveThread = a ?? !1), (this._isJoinedThread = o ?? !1)),
            (this._persisted = !1 !== l),
            (this.loadedMessages = u ?? !1),
            (this._lastMessageId = c),
            (this._lastMessageTimestamp = d),
            (this._ackMessageId = _),
            (this._ackMessageTimestamp = h),
            (this.ackPinTimestamp = f),
            (this.isManualAck = p ?? !1),
            (this.lastPinTimestamp = E),
            (this._oldestUnreadMessageId = m),
            (this.oldestUnreadMessageIdStale = g ?? !1),
            (this.estimated = A ?? !1),
            (this._unreadCount = I ?? 0),
            (this._mentionCount = T),
            (this.flags = S),
            (this.lastViewed = y),
            ew._mentionChannels.delete(this.channelId),
            this._mentionCount > 0 && this.canHaveMentions() && ew._mentionChannels.add(this.channelId);
    }
    incrementGuildUnreadsSentinel() {
        null != this._guildId && ew.getGuildSentinels(this._guildId).unreadsSentinel++;
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
        (this._lastMessageId = e), (this._lastMessageTimestamp = null != e ? j.default.extractTimestamp(e) : 0);
    }
    get lastMessageTimestamp() {
        return this._lastMessageTimestamp;
    }
    get ackMessageId() {
        return this._ackMessageId;
    }
    set ackMessageId(e) {
        (this._ackMessageId = e), (this._ackMessageTimestamp = null != e ? j.default.extractTimestamp(e) : 0);
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
            ew._mentionChannels.delete(this.channelId),
            this._mentionCount > 0 && this.canHaveMentions() && ew._mentionChannels.add(this.channelId);
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
        let e = q.A.getMessages(this.channelId);
        if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
        if (!this.hasMentions()) return this.lastMessageId;
        let t = null,
            n = this.mentionCount,
            i = ee.default.getCurrentUser();
        return (
            e.forEach(
                (e) => {
                    if (n > 0 && e.author.id !== i?.id) --n;
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
        let e = Y.A.getChannel(this.channelId);
        return (this._guildId = null != e ? e.getGuildId() : null);
    }
    isPrivate() {
        if (this.type !== ea.P.CHANNEL) return !1;
        let e = Y.A.getChannel(this.channelId);
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
            let e = ee.default.getCurrentUser(),
                n = this.getAckTimestamp(),
                i = !1,
                r = !1,
                s = null,
                a = q.A.getMessages(this.channelId);
            a.forAll((a) => {
                i
                    ? (this.oldestUnreadMessageId = this._oldestUnreadMessageId ?? a.id)
                    : (i = a.id === this._ackMessageId),
                    j.default.extractTimestamp(a.id) > n
                        ? (this.unreadCount++, t && ev(a, e) && this.mentionCount++, (s = s ?? a.id))
                        : (r = !0);
            }),
                (this.estimated = !a.hasPresent() || (!(i || r) && a.length === this.unreadCount)),
                (this.oldestUnreadMessageId = this._oldestUnreadMessageId ?? s);
        }
        null != n && (this.mentionCount = n);
    }
    handleGuildEventRemoval(e, t) {
        if (j.default.compare(this.ackMessageId, t) >= 0) return;
        let n = A.Ay.getGuildScheduledEventsForGuild(e),
            i = this.getAckTimestamp();
        if (isNaN(i)) return;
        let r = this._ackMessageId ?? j.default.fromTimestamp(i),
            s = null,
            a = 0;
        n.forEach((e) => {
            (0, A.d6)(e) && (j.default.compare(e.id, s) > 0 && (s = e.id), j.default.compare(e.id, r) > 0 && a++);
        }),
            (this.lastMessageId = s),
            (this.mentionCount = a);
    }
    canTrackUnreads() {
        if (this.type !== ea.P.CHANNEL) return !0;
        if ((this._isThread && !this._isActiveThread) || this._isResourceChannel) return !1;
        let e = Y.A.getBasicChannel(this.channelId);
        return (
            null != e &&
            ("basicPermissions" in e
                ? F.A.has(e.basicPermissions, en.hVb.VIEW_CHANNEL)
                : !E.A.isChannelGated(this.guildId, this.channelId) || Z.A.can(en.xBc.VIEW_CHANNEL, e))
        );
    }
    canBeUnread() {
        return (
            !(
                (this._isThread && !this._isJoinedThread) ||
                (0, S.k_)(this.channelId, [T.A, y.A]) ||
                (!this._isThread &&
                    (0, D.WW)(this._guildId) &&
                    (this._lastMessageTimestamp < eT ||
                        (!J.Ay.isChannelOrParentOptedIn(this._guildId, this.channelId) &&
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
                ((0, D.WW)(this._guildId) && this._lastMessageTimestamp < eT)
            ) && this.canTrackUnreads()
        );
    }
    getGuildChannelUnreadState(e, t, n, i, r) {
        if (
            t &&
            (this._lastMessageTimestamp < eT ||
                (!J.Ay.isChannelRecordOrParentOptedIn(e) &&
                    !this.hasRecentlyVisitedAndRead() &&
                    this.mentionCount <= 0))
        )
            return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        if ("basicPermissions" in e) {
            if (!F.A.has(e.basicPermissions, en.hVb.VIEW_CHANNEL))
                return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        } else if (E.A.isChannelGated(this.guildId, this.channelId) && !Z.A.can(en.xBc.VIEW_CHANNEL, e))
            return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        return i || r
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
            U.A.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
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
        if (this.type !== ea.P.CHANNEL || !this.canTrackUnreads()) return !1;
        if (null == e) {
            if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
            (this._persisted = !0),
                R(() => u.Bo.post({ url: en.Rsh.PINS_ACK(this.channelId), oldFormErrors: !0, rejectWithError: !0 }));
        }
        let t = eN(e);
        return (this.ackPinTimestamp = 0 !== t ? t : this.lastPinTimestamp), !0;
    }
    ack(e) {
        let {
            messageId: t,
            location: n,
            trackAnalytics: i,
            local: r = !1,
            immediate: s = !1,
            force: a = !1,
            isExplicitUserAction: o = !1,
        } = e;
        if (!this._shouldAck(a, r, o) || (!a && !this.canTrackUnreads())) return !1;
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
                (function (e) {
                    if (null == e) return;
                    let t = ew.get(e);
                    if (t.type !== ea.P.CHANNEL) return;
                    let n = Y.A.getChannel(t.channelId);
                    if (null == n || !n.isForumPost() || null == n.parent_id) return;
                    let i = n.parent_id,
                        r = ew.get(i);
                    M.A.hasLoaded(n.guild_id) &&
                        j.default
                            .keys(M.A.getThreadsForParent(n.guild_id, i))
                            .every((e) => e1.hasOpenedThread(e) || 0 > j.default.compare(e, r.ackMessageId)) &&
                        r.ack({
                            trackAnalytics: !0,
                            location: {
                                section: en.JJy.CHANNEL,
                                object: en.ZSU.ACK_FORUM_CHANNEL_NO_UNREAD_POSTS,
                                objectType: en.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                        });
                })(this.channelId),
                r
                    ? (this.oldestUnreadMessageId = null)
                    : (null == this.outgoingAck &&
                          (this.outgoingAckTimer = setTimeout(
                              () => {
                                  this.type === ea.P.CHANNEL ? this._ack(n, i) : this._nonChannelAck(),
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
                (this.type !== ea.P.CHANNEL ||
                    !!this.loadedMessages ||
                    !!Y.A.getChannel(this.channelId)?.isForumLikeChannel()))
        );
    }
    _ack(e, t) {
        let { outgoingAck: i } = this;
        if (null == i) return;
        let r = N.default.getId(),
            s = eh;
        this._persisted = !0;
        let a = this.recalculateFlags(),
            o = a === this.flags ? void 0 : a;
        R(() =>
            u.Bo.post({
                url: en.Rsh.MESSAGE_ACK(this.channelId, i),
                body: { token: eh, last_viewed: this.lastViewed, flags: o },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
        ).then((i) => {
            null != i &&
                (eh === s && r === N.default.getId() && (eh = i.body.token),
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
        if (this.type !== ea.P.CHANNEL) return;
        let e = Y.A.getChannel(this.channelId);
        if (null != e) return e.isThread() ? 2 : +(null != e.guild_id);
    }
    _nonChannelAck() {
        let e,
            { outgoingAck: t, channelId: n, type: i } = this;
        if (null != t) {
            switch (i) {
                case ea.P.GUILD_HOME:
                case ea.P.GUILD_EVENT:
                case ea.P.GUILD_ONBOARDING_QUESTION:
                    e = en.Rsh.GUILD_FEATURE_ACK(n, t, i);
                    break;
                case ea.P.NOTIFICATION_CENTER:
                case ea.P.MESSAGE_REQUESTS:
                    e = en.Rsh.USER_NON_CHANNEL_ACK(t, i);
                    break;
                default:
                    return;
            }
            (this._persisted = !0), R(() => u.Bo.post({ url: e, body: {}, oldFormErrors: !0, rejectWithError: !0 }));
        }
    }
    delete() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = Y.A.getBasicChannel(this.channelId);
        el.log("Deleting ReadState", this.channelId, this.type, {
            remote: e,
            persisted: this._persisted,
            channelMissing: null == t,
            isOld: eG(this, eI()),
            validType: null != t && G.A_.has(t.type),
            readableType: null != t && (0, G.Z_)(t.type),
            oldThreadCutoff: eI(),
            mentionCount: this.mentionCount,
            channelId: this.channelId,
            ackMessageId: this._ackMessageId,
            lastMessageId: this._lastMessageId,
        }),
            e &&
                this._persisted &&
                u.Bo.del({
                    url: en.Rsh.CHANNEL_ACK(this.channelId),
                    body: { version: 2, read_state_type: this.type },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
            ew._readStates.get(this.type)?.delete(this.channelId),
            ew._mentionChannels.delete(this.channelId);
    }
    shouldDeleteReadState(e) {
        var t, n, i;
        let r;
        if (0 !== K.A.totalUnavailableGuilds) return !1;
        if (null != this.type && this.type !== ea.P.CHANNEL)
            return !(function (e) {
                switch (e.type) {
                    case ea.P.GUILD_HOME:
                    case ea.P.GUILD_EVENT:
                    case ea.P.GUILD_ONBOARDING_QUESTION:
                        return null != $.A.getGuild(e.channelId);
                    case ea.P.NOTIFICATION_CENTER:
                        return j.default.cast(ee.default.getCurrentUser()?.id) === e.channelId;
                    default:
                        return !0;
                }
            })(this);
        let s = Y.A.getBasicChannel(this.channelId);
        if (null == s)
            if (eG(this, e)) return !0;
            else return !1;
        return (
            !!G.A_.has(s.type) &&
            (!(0, G.Z_)(s.type) ||
                (!(0, G.Gw)(s.type) &&
                    !(
                        !(
                            G.Le.has(s.type) &&
                            ((t = this),
                            (n = s),
                            (i = e),
                            !(null != (r = t.guildId) && M.A.isActive(r, n.parent_id, t.channelId)) && eG(t, i))
                        ) &&
                        (!(this.mentionCount > 0) || Z.A.canBasicChannel(ec, s))
                    )))
        );
    }
    getAckTimestamp() {
        let e, t;
        if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
        if (this._isThread)
            return (
                (this._ackMessageTimestamp = ek(this.guildId, this.channelId)),
                (this._ackMessageId = j.default.fromTimestamp(this._ackMessageTimestamp)),
                this._ackMessageTimestamp
            );
        if (this.type === ea.P.GUILD_EVENT || this.type === ea.P.GUILD_ONBOARDING_QUESTION)
            e = $.A.getGuild(this.channelId);
        else if ((0, er.jq)(this.channelId)) e = $.A.getGuild(this.guildId);
        else {
            let t = Y.A.getChannel(this.channelId);
            if (null != t) {
                let n = t.getGuildId();
                e = $.A.getGuild(n);
            }
        }
        return (
            null != e
                ? isNaN((t = eU(e))) && (t = j.default.extractTimestamp(this.channelId))
                : (t = j.default.extractTimestamp(this.channelId)),
            (this._ackMessageTimestamp = t),
            t
        );
    }
    get oldestUnreadTimestamp() {
        return null != this.oldestUnreadMessageId ? j.default.extractTimestamp(this.oldestUnreadMessageId) : 0;
    }
    syncThreadSettings() {
        this._isThread = !0;
        let e = Y.A.getChannel(this.channelId);
        if (null == e) return el.warn(`syncThreadSettings called with channel not in memory ${this.channelId}`), !1;
        let t = this.guildId,
            n = null != t && M.A.isActive(t, e.parent_id, this.channelId),
            i = P.A.hasJoined(this.channelId);
        return (
            (this._isActiveThread !== n || this._isJoinedThread !== i) &&
            ((this._isActiveThread = n), (this._isJoinedThread = i), !0)
        );
    }
    recordLastViewedTime() {
        let e = Math.ceil((Date.now() - j.DISCORD_EPOCH) / V.A.Millis.DAY);
        e !== this.lastViewed &&
            ((this.lastViewed = e),
            this.canTrackUnreads() && !this.hasUnread() && this.ack({ force: !0, trackAnalytics: !1 }));
    }
}
function eM(e) {
    e.forEach((e) => {
        if ((0, G.Z_)(e.type)) {
            let t = ew.get(e.id);
            (t._guildId = e.guild_id),
                (t.lastMessageId = e.lastMessageId),
                (t.lastPinTimestamp = eN(e.lastPinTimestamp)),
                (t._isResourceChannel = e.hasFlag(er.lx.IS_GUILD_RESOURCE_CHANNEL)),
                G.Le.has(e.type) && t.syncThreadSettings();
        }
    });
}
function eP(e) {
    e.forEach((e) => {
        if ((0, G.Z_)(e.type)) {
            let t = ew.get(e.id);
            (t.lastMessageId = e.last_message_id),
                (t.lastPinTimestamp = eN(e.last_pin_timestamp)),
                (t._isResourceChannel = (0, o.Lt)(e.flags ?? 0, er.lx.IS_GUILD_RESOURCE_CHANNEL)),
                G.Le.has(e.type) && t.syncThreadSettings();
        }
    });
}
function ex(e) {
    var t, n;
    (t = e),
        t.threads?.forEach((e) => {
            if (!G.A_.has(e.type)) return;
            let n = ew.get(e.id);
            (n.lastMessageId = e.lastMessageId),
                (n.lastPinTimestamp = eN(e.lastPinTimestamp)),
                (n._isThread = !0),
                (n._isActiveThread = !0),
                (n._isJoinedThread = null != e.member),
                null == n.ackMessageId && (n.ackMessageId = j.default.fromTimestamp(ek(t.id, e.id))),
                null == n.ackPinTimestamp && (n.ackPinTimestamp = ek(t.id, e.id));
        }),
        (function (e) {
            if (e.guild_scheduled_events?.length === 0 && null == ew.getIfExists(e.id, ea.P.GUILD_EVENT)) return;
            let t = ew.get(e.id, ea.P.GUILD_EVENT);
            t._guildId = e.id;
            let n = 0,
                i = null,
                r = t._ackMessageId ?? j.default.fromTimestamp(t.getAckTimestamp());
            e.guild_scheduled_events.forEach((e) => {
                j.default.compare(e.id, i) > 0 && (i = e.id), j.default.compare(e.id, r) > 0 && n++;
            }),
                (t.lastMessageId = i),
                (t.mentionCount = n);
        })(e),
        (n = e),
        (ew.get(n.id, ea.P.GUILD_HOME).lastMessageId = j.default.fromTimestamp(
            a()(Date.now()).subtract(24, "h").valueOf(),
        )),
        (function (e) {
            let t = $.A.getGuild(e.id);
            if (null == t) return;
            let n = t?.latestOnboardingQuestionId;
            if (null == n) return;
            let i = ew.get(t.id, ea.P.GUILD_ONBOARDING_QUESTION);
            (i._guildId = t.id), (i.lastMessageId = n);
        })(e);
}
function ek(e, t) {
    let n = Y.A.getChannel(t),
        i = $.A.getGuild(e ?? n?.guild_id),
        r = n?.isForumPost() ? 0 : eU(i),
        s = (P.A.joinTimestamp(t)?.getTime() ?? 0) - 5e3;
    isNaN(s) && (s = -5e3);
    let a = n?.threadMetadata?.archiveTimestamp,
        o = null != a ? new Date(a).getTime() - 1 : 0;
    isNaN(o) && (o = 0);
    let l = Math.max(s, o);
    return (
        l <= 0 && (l = j.default.extractTimestamp(t) - 1),
        (isNaN(l) || l <= 0) && (l = 0),
        isNaN(r) ? l : Math.max(r, l)
    );
}
function eU(e) {
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
function eG(e, t) {
    return (
        e.mentionCount > 0 ||
        !(
            j.default.compare(e.channelId, t) > 0 ||
            (null != e._ackMessageId && j.default.compare(e._ackMessageId, t) > 0) ||
            (null != e._lastMessageId && j.default.compare(e._lastMessageId, t) > 0)
        )
    );
}
function eF(e, t, n) {
    if (null == t) return !1;
    let i = ew.get(t);
    return !!eL(i, n) && i.ack({ trackAnalytics: !0, location: e });
}
function eV() {
    null != em && clearTimeout(em);
}
let eB = (0, r.throttle)((e) => {
    e.delete();
}, 100);
function ej(e) {
    for (let t of e) {
        let e = ew.get(t.id);
        null != t.last_message_id && (e.lastMessageId = t.last_message_id),
            null != t.last_pin_timestamp && (e.lastPinTimestamp = eN(t.last_pin_timestamp));
    }
}
function eH(e) {
    let { channelId: t } = e;
    ew.get(t).rebuildChannelState();
}
function eY(e) {
    let { threads: t } = e;
    eP(t);
}
function eW(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n } = e;
        t.forEach((e) => {
            eP(
                e
                    .map((e) => {
                        let { thread: t } = e;
                        return t;
                    })
                    .filter(B.Vq),
            );
        }),
            eP(n);
    });
}
function eK(e) {
    let t = ee.default.getCurrentUser();
    return null != e.creator_id && null != t && e.creator_id === t.id;
}
function e$(e) {
    let { channel: t } = e;
    return ew.clear(t.id);
}
function ez() {
    let e = H.Ay.getCurrentSidebarChannelId(ed),
        t = !1;
    return (
        e_ !== e
            ? ((t = eZ(e_)), (e_ = e))
            : (t =
                  eF(
                      {
                          section: en.JJy.CHANNEL,
                          object: en.ZSU.ACK_CHANNEL_SECTION_STORE_UPDATE,
                          objectType: en.AnalyticsObjectTypes.ACK_AUTOMATIC,
                      },
                      e,
                  ) || t),
        t
    );
}
function eq(e) {
    null == e || (ew.get(e).isManualAck = !1);
}
function eZ(e) {
    if (null == e) return !1;
    let t = ew.get(e);
    return !t.hasUnread() && ((t.oldestUnreadMessageId = null), !0);
}
function eX(e) {
    let { channelId: t, messageId: n, manual: i, newMentionCount: r } = e,
        s = ew.get(t);
    return i
        ? (s.rebuildChannelState(n, !0, r), s.clearOutgoingAck(), !0)
        : n !== s._ackMessageId && s.ack({ messageId: n, local: !0, trackAnalytics: !1 });
}
function eQ(e) {
    let { id: t, ackType: n, ackedId: i, local: r } = e;
    return eJ(t, n, i, r);
}
function eJ(e, t, n, i) {
    let r = ew.get(e, t);
    return (
        n !== r.ackMessageId &&
        r.lastMessageId !== r.ackMessageId &&
        (null != r.lastMessageId || 0 !== r.mentionCount) &&
        ((n = n ?? r.lastMessageId ?? j.default.fromTimestamp(r.getAckTimestamp())),
        r.ack({ messageId: n, local: i ?? !0, trackAnalytics: !1 }))
    );
}
class e0 extends l.Ay.Store {
    static displayName = "ReadStateStore";
    initialize() {
        W.A,
            ee.default,
            $.A,
            K.A,
            Y.A,
            Q.A,
            q.A,
            Z.A,
            f.A,
            M.A,
            P.A,
            H.Ay,
            A.Ay,
            g.A,
            E.A,
            J.Ay,
            et.A,
            O.A,
            T.A,
            U.A,
            y.A,
            this.waitFor(
                M.A,
                N.default,
                f.A,
                H.Ay,
                Y.A,
                W.A,
                h.Ay,
                E.A,
                K.A,
                A.Ay,
                $.A,
                z.A,
                P.A,
                q.A,
                O.A,
                Z.A,
                X.A,
                Q.A,
                J.Ay,
                U.A,
                ee.default,
                et.A,
            ),
            this.syncWith([H.Ay], ez);
    }
    getReadStatesByChannel() {
        return ew._readStates.get(ea.P.CHANNEL) ?? new Map();
    }
    getForDebugging(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL;
        return ew.getIfExists(e, t);
    }
    getNotifCenterReadState(e) {
        return ew.getIfExists(e, ea.P.NOTIFICATION_CENTER);
    }
    hasUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.canBeUnread() && e.hasUnread(), !1);
    }
    hasUnreadOrMentions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.canBeUnread() && e.hasUnreadOrMentions(), !1);
    }
    hasTrackedUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.canTrackUnreads() && e.hasUnread(), !1);
    }
    isForumPostUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.isForumPostUnread(), !1);
    }
    getUnreadCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL;
        return ew.getValue(e, t, (e) => (e.canBeUnread() ? e.unreadCount : 0), 0);
    }
    getMentionCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL,
            n = ew.getValue(e, t, (e) => (e.canHaveMentions() ? e.getMentionCount() : 0), 0);
        if ((0, p.A)(e) && n > 0) return 1;
        return n;
    }
    getIsMentionLowImportance(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL;
        return t === ea.P.CHANNEL && ew.getValue(e, t, (e) => e.isMentionLowImportance, !1);
    }
    getGuildChannelUnreadState(e, t, n, i, r) {
        return ew.getValue(e.id, ea.P.CHANNEL, (s) => s.getGuildChannelUnreadState(e, t, n, i, r), {
            mentionCount: 0,
            unread: !1,
            isMentionLowImportance: !1,
        });
    }
    hasRecentlyVisitedAndRead(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.hasRecentlyVisitedAndRead(), !1);
    }
    ackMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL;
        return ew.getValue(e, t, (e) => (e.canBeUnread() ? e.ackMessageId : null), null);
    }
    getTrackedAckMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL;
        return ew.getValue(e, t, (e) => (e.canTrackUnreads() ? e._ackMessageId : null), null);
    }
    lastMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.lastMessageId, null);
    }
    lastMessageTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.lastMessageTimestamp, 0);
    }
    lastPinTimestamp(e) {
        return ew.getValue(e, ea.P.CHANNEL, (e) => e.lastPinTimestamp, null);
    }
    getOldestUnreadMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL;
        return ew.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadMessageId : null), null);
    }
    getOldestUnreadTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL;
        return ew.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0), 0);
    }
    isEstimated(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.estimated, !1);
    }
    hasOpenedThread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.P.CHANNEL;
        return ew.getValue(e, t, (e) => e._persisted, !1);
    }
    hasUnreadPins(e) {
        return ew.getValue(e, ea.P.CHANNEL, (e) => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1);
    }
    isNewForumThread(e, t, n) {
        let i = ew.get(t);
        if (
            !0 === ew.get(e)._persisted ||
            null == i.ackMessageIdAtChannelSelect ||
            0 >= j.default.compare(e, i.ackMessageIdAtChannelSelect)
        )
            return !1;
        let r = eU(n);
        return j.default.extractTimestamp(e) > r;
    }
    getAllReadStates(e) {
        let t = [];
        return (
            ew.forEach((n) => {
                switch (n.type) {
                    case ea.P.GUILD_HOME:
                    case ea.P.GUILD_EVENT:
                    case ea.P.GUILD_ONBOARDING_QUESTION:
                        null != $.A.getGuild(n.channelId) && t.push(n.serialize(e));
                        break;
                    case ea.P.NOTIFICATION_CENTER:
                    case ea.P.MESSAGE_REQUESTS:
                        j.default.cast(ee.default.getCurrentUser()?.id) === n.channelId && t.push(n.serialize(e));
                        break;
                    default:
                        t.push(n.serialize(e));
                }
            }),
            t
        );
    }
    getGuildUnreadsSentinel(e) {
        return ew.getGuildSentinels(e).unreadsSentinel;
    }
    getMentionChannelIds() {
        return ew.getMentionChannelIds();
    }
    getNonChannelAckId(e) {
        let t = ee.default.getCurrentUser()?.id;
        return null == t ? null : ew.get(t, e).ackMessageId;
    }
    getSnapshot(e, t) {
        let n = ew.get(e);
        return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot;
    }
    getChannelIdsForWindowId(e) {
        return eg.getAllChannelIdsForWindowId(e);
    }
}
let e1 = new e0(_.h, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: function (e) {
            let { changesByChannelId: t } = e;
            for (let e in t) {
                let n = t[e],
                    i = ew.getIfExists(e);
                if (null != i)
                    for (let e of [n.new_messages?.[0]].concat(n.modified_messages ?? []).filter(B.Vq))
                        1 === j.default.compare(e.id, i.lastMessageId) && (i.lastMessageId = e.id);
            }
        },
        CONNECTION_OPEN: function (e) {
            let { guilds: t, relationships: n, initialPrivateChannels: i, readState: r } = e;
            eC(),
                (eh = null),
                ef || r.partial || ew.clearAll(),
                (ef = !1),
                r.entries.forEach((e) => {
                    var t;
                    let n = e.read_state_type ?? ea.P.CHANNEL;
                    n !== ea.P.CHANNEL &&
                        (e = {
                            id: (t = e).id,
                            read_state_type: t.read_state_type,
                            mention_count: t.badge_count,
                            last_message_id: t.last_acked_id,
                        });
                    let i = ew.get(e.id, n);
                    (i._persisted = !0),
                        (i._mentionCount = e.mention_count ?? 0),
                        (i.flags = e.flags),
                        (i.lastViewed = e.last_viewed);
                    let r = Y.A.getBasicChannel(e.id);
                    null != r && (0, G.fT)(r.type) && (null == e.last_message_id || 0 === e.last_message_id)
                        ? (i.ackMessageId = j.default.fromTimestamp(ek(r.guild_id, r.id)))
                        : i.ackedWhileCached
                          ? -1 === j.default.compare(i.ackMessageId, e.last_message_id) &&
                            (i.ackMessageId = e.last_message_id)
                          : (i.ackMessageId = e.last_message_id),
                        (i.ackedWhileCached = void 0),
                        (i.ackPinTimestamp = eN(e.last_pin_timestamp)),
                        ew._mentionChannels.delete(i.channelId),
                        i._mentionCount > 0 && i.canHaveMentions() && ew._mentionChannels.add(i.channelId);
                }),
                ew.resetGuildSentinels();
            let s = ee.default.getCurrentUser()?.id;
            for (let e of (null != s &&
                (ew.get(s, ea.P.NOTIFICATION_CENTER).lastMessageId = j.default.fromTimestamp(Date.now())),
            (function (e) {
                let t = ee.default.getCurrentUser();
                if (null == t) return;
                let n = ew.get(t.id, ea.P.NOTIFICATION_CENTER);
                e.forEach((e) => {
                    if (null == e.since || e.type !== en.eA$.PENDING_INCOMING) return;
                    let t = new Date(e.since).getTime();
                    (null != n.ackMessageId ? j.default.extractTimestamp(n.ackMessageId) : 0) < t &&
                        (n.mentionCount++, (n.lastMessageId = j.default.fromTimestamp(t)));
                });
            })(n),
            eM(i),
            t))
                eM("full_sync" === e.channels.op ? e.channels.items : e.channels.writes),
                    null != e.channelTimestampUpdates && ej(e.channelTimestampUpdates),
                    ex(e);
            eV(),
                (em = setTimeout(
                    () =>
                        (function (e) {
                            let t = eI();
                            for (let n of e) {
                                let e = n.read_state_type ?? ea.P.CHANNEL,
                                    i = ew.get(n.id, e);
                                i.shouldDeleteReadState(t) && eB(i);
                            }
                        })(r.entries),
                    10 * V.A.Millis.SECOND,
                ));
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { lazyPrivateChannels: t } = e;
            eM(t);
        },
        LOGOUT: eV,
        OVERLAY_INITIALIZE: function (e) {
            let { readStates: t, selectedChannelId: n } = e;
            eC(),
                (eh = null),
                (ed = n),
                (e_ = H.Ay.getCurrentSidebarChannelId(ed)),
                ew.clearAll(),
                t.forEach((e) => {
                    let t = ew.get(e.channelId);
                    t.deserializeForOverlay(e), t.type === ea.P.CHANNEL && t.rebuildChannelState();
                });
        },
        CACHE_LOADED: function (e) {
            let { readStates: t } = e;
            (ef = !0),
                eC(),
                t.forEach((e) => {
                    let t = e.type ?? ea.P.CHANNEL;
                    e.type = t;
                    let n = ew._readStates.get(t) ?? new Map();
                    n.set(e.channelId, (0, d.pp)(e, ew)), ew._readStates.has(t) || ew._readStates.set(t, n);
                });
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e,
                n = eI();
            ew.forEach((e) => {
                e.guildId === t.id && e.shouldDeleteReadState(n) && e.delete(!1);
            }),
                eM("full_sync" === t.channels.op ? t.channels.items : t.channels.writes),
                null != t.channelTimestampUpdates && ej(t.channelTimestampUpdates),
                ex(t);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let { channelId: t, isAfter: n, messages: i } = e,
                r = ew.get(t);
            (r.loadedMessages = !0),
                i.length > 0 && 1 === j.default.compare(i[0].id, r.lastMessageId) && (r.lastMessageId = i[0].id);
            let s = q.A.getMessages(t);
            null != s &&
                ((i.length > 0 && 1 === j.default.compare(i[0].id, r.ackMessageId) && 0 === r.unreadCount) ||
                s.hasPresent() ||
                s.jumpTargetId === r.ackMessageId
                    ? r.rebuildChannelState()
                    : n &&
                      null != r.ackMessageId &&
                      s.has(r.ackMessageId, !0) &&
                      ((r.unreadCount += i.length), null == r.oldestUnreadMessageId && r.rebuildChannelState())),
                eP(i.map((e) => e.thread).filter(B.Vq));
        },
        LOCAL_MESSAGES_LOADED: function (e) {
            let { channelId: t, messages: n } = e;
            if (!(0, b.K)() || 0 === n.length) return !1;
            let i = ew.get(t),
                r = n[0].id;
            (null == i.lastMessageId || j.default.compare(r, i.lastMessageId) > 0) &&
                ((i.lastMessageId = r), i.rebuildChannelState());
        },
        MESSAGE_CREATE: function (e) {
            let t,
                n,
                { channelId: r, message: s, isPushNotification: a } = e,
                o = ew.get(r),
                l = o.hasUnread(),
                u = null != o.lastMessageId && o.lastMessageId >= s.id;
            o.lastMessageId = s.id;
            let c = ee.default.getCurrentUser(),
                d = Y.A.getBasicChannel(r);
            if (null != s.author && null != c && s.author.id === c.id && !en.MRS.SELF_MENTIONABLE_SYSTEM.has(s.type))
                return null != o.outgoingAck && o.clearOutgoingAck(), eX({ channelId: r, messageId: s.id, manual: !1 });
            let _ = (0, I.Y)();
            if (_?.isReady() === !0) {
                let e = _.getCurrentRoute();
                f.A.getChatOpen(o.channelId)
                    ? (t = o.channelId)
                    : e?.name === "channel"
                      ? (t = e.params.channelId)
                      : e?.name === "guilds" && (t = e.params?.channelId);
            } else null == _ && ((t = Q.A.getChannelId()), (n = H.Ay.getCurrentSidebarChannelId(t)));
            let h = t === r || n === r;
            if (h && eL(o) && !a) {
                let e = eb(!0, o.channelId) ? en.JJy.OVERLAY : en.JJy.CHANNEL;
                return o.ack({
                    messageId: s.id,
                    trackAnalytics: !0,
                    location: {
                        section: e,
                        object: en.ZSU.ACK_INCOMING_MESSAGE,
                        objectType: en.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                });
            }
            if (eb(h && null != i && i.isInstanceLocked(), r))
                return o.ack({
                    messageId: s.id,
                    trackAnalytics: !0,
                    location: {
                        section: en.JJy.OVERLAY,
                        object: en.ZSU.ACK_INCOMING_MESSAGE,
                        objectType: en.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                });
            if (
                (null == o.oldestUnreadMessageId || o.oldestUnreadMessageIdStale
                    ? (o.oldestUnreadMessageId = s.id)
                    : l || (0, w.i$)() === r || (o.oldestUnreadMessageId = s.id),
                !u && o.unreadCount++,
                !(
                    X.A.isBlockedOrIgnoredForMessage(s) ||
                    (s.type === en.lAJ.RECIPIENT_REMOVE && d?.type === en.rbe.GROUP_DM)
                ))
            ) {
                let { shouldMention: e, isMentionLowImportance: t } = (function (e, t, n) {
                    if (
                        null != t &&
                        (0, C.bG)({
                            rawMessage: e,
                            userId: t.id,
                            suppressEveryone: J.Ay.isSuppressEveryoneEnabled(n.guildId),
                            suppressRoles: J.Ay.isSuppressRolesEnabled(n.guildId),
                        })
                    )
                        return { shouldMention: !0, isMentionLowImportance: !1 };
                    let i = Y.A.getChannel(e.channel_id);
                    if (eR(i)) return { shouldMention: !0, isMentionLowImportance: !1 };
                    if (J.Ay.mentionOnAllMessages && null != i) {
                        if (i.isThread()) {
                            if ((0, k.l)(i) === eo.CP.ALL_MESSAGES)
                                return { shouldMention: !0, isMentionLowImportance: !0 };
                        } else if (
                            !i.isVocal() &&
                            !J.Ay.isChannelMuted(i.guild_id, i.id) &&
                            J.Ay.resolvedMessageNotifications(i) === en.orn.ALL_MESSAGES
                        )
                            return { shouldMention: !0, isMentionLowImportance: !0 };
                    }
                    return { shouldMention: !1, isMentionLowImportance: !1 };
                })(s, c, o);
                e && ((o.isMentionLowImportance = t), o.mentionCount++);
            }
        },
        MESSAGE_DELETE: eH,
        MESSAGE_DELETE_BULK: eH,
        MESSAGE_ACK: eX,
        CHANNEL_ACK: function (e) {
            let { channelId: t, messageId: n, immediate: i = !1, force: r = !1, context: s, location: a } = e,
                o = ew.get(t),
                l = o.ack({
                    messageId: n,
                    local: s !== en.QCW,
                    immediate: i,
                    force: r,
                    isExplicitUserAction: !0,
                    location: a,
                    trackAnalytics: !0,
                });
            return null != n ? (o.rebuildChannelState(), !0) : l;
        },
        CHANNEL_LOCAL_ACK: function (e) {
            let { channelId: t } = e;
            return ew
                .get(t)
                .ack({
                    messageId: void 0,
                    local: !0,
                    immediate: void 0,
                    force: void 0,
                    isExplicitUserAction: !0,
                    trackAnalytics: !1,
                });
        },
        CHANNEL_PINS_ACK: function (e) {
            let { channelId: t, timestamp: n } = e;
            return ew.get(t).ackPins(n);
        },
        CHANNEL_PINS_UPDATE: function (e) {
            let { channelId: t, lastPinTimestamp: n } = e,
                i = ew.get(t),
                r = eN(n);
            return i.lastPinTimestamp !== r && ((i.lastPinTimestamp = r), !0);
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e,
                n = H.Ay.getCurrentSidebarChannelId(t),
                i = Y.A.getChannel(t);
            if (null != i) {
                let e = ew.get(i.id);
                (e.ackMessageIdAtChannelSelect = e.ackMessageId ?? j.default.fromTimestamp(e.getAckTimestamp())),
                    e.recordLastViewedTime();
            }
            eq(ed), eq(e_);
            let r = !1;
            return (
                ed !== t && ((r = eZ(ed) || r), (r = eZ(e_) || r)),
                (ed === t || (i?.type != null && en.kvI.GUILD_THREADS_ONLY.has(i.type))) &&
                    (r =
                        eF(
                            {
                                section: en.JJy.CHANNEL,
                                object: en.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL,
                                objectType: en.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            t,
                        ) || r),
                ed === t &&
                    (r =
                        eF(
                            {
                                section: en.JJy.CHANNEL,
                                object: en.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR,
                                objectType: en.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            n,
                        ) || r),
                (ed = t),
                (e_ = n),
                r
            );
        },
        OVERLAY_TEXT_CHAT_ACK_CHANNEL: function (e) {
            var t, n;
            let i;
            return (
                !__OVERLAY__ &&
                ((t = e.channelId),
                (n = en.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH),
                ((i = ew.get(t)).ackMessageIdAtChannelSelect =
                    i.ackMessageId ?? j.default.fromTimestamp(i.getAckTimestamp())),
                i.recordLastViewedTime(),
                eZ(t),
                eF({ section: en.JJy.OVERLAY, object: n, objectType: en.AnalyticsObjectTypes.ACK_AUTOMATIC }, t),
                !0)
            );
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (null == t) return;
            let n = ew.get(t);
            if (!n.hasMentions())
                return (
                    (n.oldestUnreadMessageId = null),
                    n.ack({
                        isExplicitUserAction: !0,
                        trackAnalytics: !0,
                        location: {
                            section: en.JJy.CHANNEL,
                            object: en.ZSU.ACK_VOICE_CHANNEL_SELECT,
                            objectType: en.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                        },
                    })
                );
        },
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, G.Z_)(t.type)) return !1;
            let n = ew.get(t.id);
            (n.lastMessageId = t.lastMessageId), (n.lastPinTimestamp = eN(t.lastPinTimestamp));
        },
        THREAD_CREATE: function (e) {
            var t;
            let n,
                i,
                { channel: r } = e;
            (function (e) {
                if (!G.A_.has(e.type)) return;
                let t = ew.get(e.id);
                (t.lastMessageId = e.lastMessageId),
                    (t.lastPinTimestamp = eN(e.lastPinTimestamp)),
                    t.syncThreadSettings(),
                    e.ownerId === N.default.getId() && (t.loadedMessages = !0);
            })(r),
                (n = (t = r).parent_id),
                (ew.get(n).lastMessageId = t.id),
                (i = ee.default.getCurrentUser()),
                t.ownerId === i?.id &&
                    ((ew.get(t.id)._persisted = !0), eX({ channelId: n, messageId: t.id, manual: !1 }));
        },
        THREAD_UPDATE: function (e) {
            let { channel: t } = e;
            return !!G.A_.has(t.type) && ew.get(t.id).syncThreadSettings();
        },
        THREAD_LIST_SYNC: function (e) {
            let { threads: t } = e;
            t.forEach((e) => {
                if (!G.A_.has(e.type)) return;
                let t = ew.get(e.id);
                if (
                    ((t.lastMessageId = e.lastMessageId),
                    (t.lastPinTimestamp = eN(e.lastPinTimestamp)),
                    (t._isThread = !0),
                    (t._isActiveThread = !0),
                    (t._isJoinedThread = P.A.hasJoined(e.id)),
                    e.isForumPost())
                ) {
                    let t = ew.get(e.parent_id);
                    0 > j.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id);
                }
            });
        },
        LOAD_THREADS_SUCCESS: eY,
        LOAD_ARCHIVED_THREADS_SUCCESS: eY,
        SEARCH_MESSAGES_SUCCESS: eW,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: eW,
        THREAD_MEMBER_UPDATE: function (e) {
            let { id: t } = e;
            return ew.get(t).syncThreadSettings();
        },
        THREAD_MEMBERS_UPDATE: function (e) {
            return (0, x.k)(e) && ew.get(e.id).syncThreadSettings();
        },
        CHANNEL_DELETE: e$,
        THREAD_DELETE: e$,
        WINDOW_FOCUS: function (e) {
            let t = !1;
            return (
                eg.forEachChannel((n, i) => {
                    i.has(e.windowId) &&
                        (t =
                            (function (e, t) {
                                if (null == e) return !1;
                                let n = ew.get(e);
                                return (
                                    t || n.hasUnread() || (n.oldestUnreadMessageIdStale = !0),
                                    eF(
                                        {
                                            section: en.JJy.CHANNEL,
                                            object: en.ZSU.ACK_WINDOW_FOCUS,
                                            objectType: en.AnalyticsObjectTypes.ACK_AUTOMATIC,
                                        },
                                        e,
                                    )
                                );
                            })(n, e.focused) || t);
                }),
                t
            );
        },
        UPDATE_CHANNEL_DIMENSIONS: function (e) {
            let { channelId: t, timestamp: n } = e;
            return eF(
                {
                    section: en.JJy.CHANNEL,
                    object: en.ZSU.ACK_CHANNEL_SCROLL,
                    objectType: en.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                t,
                n,
            );
        },
        CURRENT_USER_UPDATE: function () {
            eh = null;
        },
        BULK_ACK: function (e) {
            var t;
            let { channels: n, context: i, onFinished: r } = e;
            (t = n.filter((e) => null != e.messageId && e1.hasUnreadOrMentions(e.channelId, e.readStateType))),
                t.forEach((e) => {
                    let { channelId: t, messageId: n, readStateType: i } = e;
                    ew.get(t, i).ack({
                        messageId: n,
                        local: !0,
                        immediate: void 0,
                        force: void 0,
                        isExplicitUserAction: !0,
                        trackAnalytics: !1,
                    });
                }),
                i === en.QCW &&
                    (ep.push(
                        ...t.map((e) => ({
                            channel_id: e.channelId,
                            message_id: e.messageId,
                            read_state_type: e.readStateType,
                        })),
                    ),
                    eE || eO(r));
        },
        ENABLE_AUTOMATIC_ACK: function (e) {
            let { channelId: t, windowId: n } = e;
            return (
                !eg.hasWindowId(t, n) &&
                (eg.addWindowId(t, n),
                eF(
                    {
                        section: en.JJy.CHANNEL,
                        object: en.ZSU.ENABLE_AUTOMATIC_ACK,
                        objectType: en.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    t,
                ))
            );
        },
        DISABLE_AUTOMATIC_ACK: function (e) {
            let { channelId: t, windowId: n } = e;
            return eg.removeWindowId(t, n), !1;
        },
        GUILD_FEATURE_ACK: eQ,
        GUILD_SCHEDULED_EVENT_CREATE: function (e) {
            let { guildScheduledEvent: t } = e,
                n = t.guild_id,
                i = ew.get(t.guild_id, ea.P.GUILD_EVENT);
            ((i.lastMessageId = t.id), eK(t))
                ? eQ({ type: "GUILD_FEATURE_ACK", id: n, ackType: ea.P.GUILD_EVENT, ackedId: t.id, local: !1 })
                : !J.Ay.isMuteScheduledEventsEnabled(n) && i.mentionCount++;
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
            let { guildScheduledEvent: t } = e,
                n = t.guild_id;
            if (eK(t) || ![es.XG.CANCELED, es.XG.COMPLETED].includes(t.status)) return !1;
            ew.get(n, ea.P.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
        },
        GUILD_SCHEDULED_EVENT_DELETE: function (e) {
            let { guildScheduledEvent: t } = e,
                n = t.guild_id;
            if (eK(t)) return !1;
            ew.get(t.guild_id, ea.P.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            return ew.clear(t.id, ea.P.GUILD_EVENT);
        },
        GUILD_UPDATE: function (e) {
            let { guild: t } = e,
                n = t.latest_onboarding_question_id;
            if (null == n) return;
            let i = ew.get(t.id, ea.P.GUILD_ONBOARDING_QUESTION);
            (i._guildId = t.id), (i.lastMessageId = n);
        },
        RESORT_THREADS: function (e) {
            let { channelId: t } = e;
            return eF(
                {
                    section: en.JJy.CHANNEL,
                    object: en.ZSU.ACK_RESORT_THREADS,
                    objectType: en.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                t,
            );
        },
        CHANNEL_RTC_UPDATE_CHAT_OPEN: function (e) {
            let { channelId: t, chatOpen: n } = e;
        },
        DECAY_READ_STATES: eC,
        NOTIFICATION_CENTER_ITEM_CREATE: function (e) {
            let { item: t } = e,
                n = ee.default.getCurrentUser()?.id;
            if (null == n) return !1;
            let i = ew.get(n, ea.P.NOTIFICATION_CENTER);
            ((i.lastMessageId = t.id), O.A.active || 0) ? eJ(n, ea.P.NOTIFICATION_CENTER, t.id, !1) : i.mentionCount++;
        },
        RELATIONSHIP_ADD: function (e) {
            let t = ee.default.getCurrentUser();
            if (
                null == t ||
                null == e.relationship.since ||
                (e.relationship.type !== en.eA$.PENDING_INCOMING && e.relationship.type !== en.eA$.FRIEND)
            )
                return !1;
            let n = ew.get(t.id, ea.P.NOTIFICATION_CENTER),
                i = e.relationship.type === en.eA$.FRIEND,
                r = i ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime();
            (null != n.ackMessageId ? j.default.extractTimestamp(n.ackMessageId) : 0) < r &&
                ((n.lastMessageId = j.default.fromTimestamp(r)),
                O.A.active ? eJ(t.id, ea.P.NOTIFICATION_CENTER, void 0, !1) : i ? n.mentionCount-- : n.mentionCount++);
        },
        RELATIONSHIP_REMOVE: function (e) {
            let t = ee.default.getCurrentUser();
            if (null == t || null == e.relationship.since || e.relationship.type !== en.eA$.PENDING_INCOMING) return !1;
            let n = ew.get(t.id, ea.P.NOTIFICATION_CENTER),
                i = new Date(e.relationship.since).getTime();
            (null != n.ackMessageId ? j.default.extractTimestamp(n.ackMessageId) : 0) <= i &&
                (n.mentionCount = Math.max(0, n.mentionCount - 1));
        },
        NOTIFICATION_CENTER_ITEMS_ACK: function (e) {
            let { ids: t, optimistic: n } = e;
            if (n || O.A.active) return !1;
            let i = ee.default.getCurrentUser()?.id;
            if (null == i) return !1;
            let r = ew.get(i, ea.P.NOTIFICATION_CENTER);
            t.forEach((e) => {
                0 > j.default.compare(r.ackMessageId, e) && (r.mentionCount = Math.max(r.mentionCount - 1, 0));
            });
        },
        USER_NON_CHANNEL_ACK: function (e) {
            let { ackType: t, ackedId: n, local: i } = e,
                r = ee.default.getCurrentUser()?.id;
            return null != r && eJ(r, t, n, i);
        },
        PASSIVE_UPDATE_V2: function (e) {
            let t = !1;
            for (let n of e.channels) {
                let e = ew.get(n.id),
                    i = eN(n.lastPinTimestamp);
                (e.lastMessageId !== n.lastMessageId || e.lastPinTimestamp !== i) &&
                    ((t = !0), (e.lastMessageId = n.lastMessageId), (e.lastPinTimestamp = i));
            }
            return t;
        },
        CLEAR_OLDEST_UNREAD_MESSAGE: function (e) {
            let { channelId: t } = e;
            return eZ(t);
        },
        TRY_ACK: function (e) {
            let { channelId: t, location: n } = e;
            return eF(n, t);
        },
        MESSAGE_REQUEST_ACK: function (e) {
            let { ackedId: t } = e,
                n = ee.default.getCurrentUser()?.id;
            if (null == n) return !1;
            let i = ew.get(n, ea.P.MESSAGE_REQUESTS);
            if (t === i.ackMessageId) return !1;
            (i.ackMessageId = t), i.ack({ messageId: t, isExplicitUserAction: !0, trackAnalytics: !1 });
        },
        MESSAGE_REQUEST_CLEAR_ACK: function (e) {
            let t = ee.default.getCurrentUser()?.id;
            if (null == t) return !1;
            let n = ew.get(t, ea.P.MESSAGE_REQUESTS);
            if (null == n.ackMessageId) return !1;
            n.ackMessageId = void 0;
        },
        APP_STATE_UPDATE: function (e) {
            let { state: t } = e;
            return (
                t === en.g6G.ACTIVE &&
                eF(
                    {
                        section: en.JJy.CHANNEL,
                        object: en.ZSU.ACK_APP_FOREGROUND,
                        objectType: en.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    Q.A.getChannelId(),
                )
            );
        },
    }),
    e2 = e1;
