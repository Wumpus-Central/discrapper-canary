"use strict";
let r;
n.d(t, { Ay: () => t6, Wm: () => eO }), n(321073), n(938796);
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
    b = n(206885),
    R = n(622794),
    O = n(970278),
    D = n(152007),
    L = n(882733),
    w = n(607508),
    x = n(617617),
    M = n(95701),
    P = n(799422),
    k = n(927813),
    U = n(403362),
    G = n(209489),
    F = n(661191),
    V = n(961350),
    B = n(761640),
    H = n(734057),
    j = n(72314),
    Y = n(919638),
    W = n(71393),
    K = n(885576),
    z = n(320501),
    $ = n(576705),
    q = n(994500),
    Z = n(309010),
    X = n(543465),
    Q = n(287809),
    J = n(531685),
    ee = n(652215),
    et = n(5867),
    en = n(746080),
    er = n(988794),
    ei = n(790782),
    es = n(37411);
let ea = new E.A("ReadStateStore"),
    eo = 2;
__OVERLAY__ && (r = n(256415).default);
let el = () => !1;
!__OVERLAY__ && b.O && ({ isOverlayChannelVisible: el } = n(267355));
let eu = ee.hVb.VIEW_CHANNEL | ee.hVb.READ_MESSAGE_HISTORY,
    ec = 100,
    ed = 1,
    e_ = Z.A.getChannelId(),
    ef = null,
    ep = null,
    eh = !1,
    em = [],
    eE = !1,
    eg = null;
class eA {
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
        for (let [n, r] of F.default.entries(this.channelWindowIds)) r.has(e) && t.add(n);
        return Array.from(t);
    }
    isAnyWindowFocused(e) {
        let t = this.channelWindowIds[e];
        if (null == t) return !1;
        for (let e of t) if (J.A.isFocused(e)) return !0;
        return !1;
    }
    removeWindowId(e, t) {
        null != this.channelWindowIds[e] &&
            (this.channelWindowIds[e].delete(t),
            0 === this.channelWindowIds[e].size && delete this.channelWindowIds[e]);
    }
    forEachChannel(e) {
        for (let [t, n] of F.default.entries(this.channelWindowIds)) e(t, n);
    }
}
let eI = new eA(),
    eT = 30 * k.A.Millis.DAY;
function eS() {
    return F.default.fromTimestamp(Date.now() - eT);
}
let ey = 0,
    ev = 0,
    eN = null;
function eC() {
    (ey = Date.now() - 7 * k.A.Millis.DAY),
        (ev = Date.now() - 3 * k.A.Millis.DAY),
        clearTimeout(eN),
        (eN = setTimeout(() => {
            _.h.dispatch({ type: "DECAY_READ_STATES" });
        }, +k.A.Millis.HOUR));
}
function eb(e) {
    if (null == e) return 0;
    let t = Date.parse(e);
    return isNaN(t) ? 0 : t;
}
function eR(e) {
    return {
        id: e.id,
        read_state_type: e.read_state_type,
        mention_count: e.badge_count,
        last_message_id: e.last_acked_id,
    };
}
function eO(e, t) {
    let n = H.A.getChannel(e.channel_id);
    return (
        !(null == n || q.A.isBlockedOrIgnoredForMessage(e)) &&
        !!(
            (0, v.Ay)({
                message: e,
                userId: t.id,
                suppressEveryone: X.Ay.isSuppressEveryoneEnabled(n.guild_id),
                suppressRoles: X.Ay.isSuppressRolesEnabled(n.guild_id),
            }) || eD(n)
        )
    );
}
function eD(e) {
    return null != e && e.isPrivate() && !X.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
}
async function eL(e) {
    if (0 === em.length) {
        (eE = !1), e?.();
        return;
    }
    eE = !0;
    let t = em.splice(0, ec);
    await ex(() =>
        u.Bo.post({ url: ee.Rsh.BULK_ACK, body: { read_states: t }, oldFormErrors: !0, rejectWithError: !1 }),
    ),
        await (0, c.BK)(1e3 * ed),
        eL(e);
}
let ew = 3;
async function ex(e) {
    let t = V.default.getId();
    for (let n = 0; n < ew; n++)
        try {
            return await e();
        } catch (e) {
            if (
                (ea.error("", e),
                n + 1 < ew && (await (0, c.BK)((n + 1) * 2e3), await G.A.awaitOnline(), t !== V.default.getId()))
            )
                return Promise.reject(Error("User changed."));
        }
}
function eM(e, t) {
    return null != r && r.isInstanceFocused() && r.isPinned(ee.uss.TEXT) ? e : null != t && el(t);
}
function eP(e, t) {
    Q.default.getCurrentUser()?.hasAnyStaffLevel() && ea.log("STAFF-ACK-LOG:", t, e.channelId);
}
function ek(e) {
    if ((eP(e, "shouldAutomaticallyAck called"), e.type !== ei.P.CHANNEL)) return eP(e, "not channel read state"), !1;
    let t = H.A.getChannel(e.channelId),
        n = null != t && t.isForumPost();
    if (
        null != f.Ay.getConnectedActivityLocation() &&
        f.Ay.getActivityPanelMode() === et.Gd.PANEL &&
        f.Ay.getFocusedLayout() === et.E8.NO_CHAT
    )
        return eP(e, "In activity"), !1;
    if (K.A.isIdle()) return eP(e, "Is idle"), !1;
    if (!e.canTrackUnreads()) return eP(e, "Cannot track unreads"), !1;
    if (t?.isForumLikeChannel() !== !0 && !eI.isAnyWindowFocused(e.channelId) && !eM(!0, e.channelId)) return !1;
    if (n && !e._persisted) return eP(e, "unpersisted forum post"), !0;
    if (!e.hasUnreadOrMentions()) return eP(e, "No unread or mentions"), !1;
    if (t?.isForumLikeChannel() === !0) return eP(e, "Forum-like channel"), !1;
    if (!(n && !e._isJoinedThread) && !j.A.isAtBottom(e.channelId)) return eP(e, "Not at bottom"), !1;
    let r = p.A.getLayout(e.channelId);
    if (!p.A.getChatOpen(e.channelId) && (r === ee.DUB.NO_CHAT || r === ee.DUB.FULL_SCREEN))
        return eP(e, "Fullscreen video"), !1;
    if (!eI.isChannelAckable(e.channelId)) return eP(e, "Not ackable"), !1;
    let i = z.A.getMessages(e.channelId);
    return null == i || !i.ready || i.loadingMore
        ? (eP(e, "Still loading messages"), !1)
        : (0, R.oE)(e.channelId)
          ? (eP(e, "Acked"), !0)
          : (eP(e, "Chat not focused"), !1);
}
class eU {
    static _guildReadStateSentinels = {};
    static _readStates = new Map();
    static _mentionChannels = new Set();
    channelId;
    type = ei.P.CHANNEL;
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
        for (let t of eU._readStates.values()) for (let n of t.values()) if (!1 === e(n)) break;
    }
    static get(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL,
            n = eU._readStates.get(t)?.get(e);
        if (null == n) {
            n = new eU(e, t);
            let r = eU._readStates.get(t) ?? new Map();
            r.set(e, n), eU._readStates.has(t) || eU._readStates.set(t, r);
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eU._readStates.get(t)?.get(e);
    }
    static getMentionChannelIds() {
        let e = [];
        for (let t of eU._mentionChannels) {
            let n = eU.getIfExists(t);
            null != n && n.canHaveMentions() ? e.push(t) : eU._mentionChannels.delete(t);
        }
        return e;
    }
    static getValue(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = this.getIfExists(e, t);
        return null == i ? r : n(i);
    }
    static clear(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL,
            n = eU._readStates.get(t);
        if (null == n) return !1;
        let r = n.delete(e);
        return r && eU._mentionChannels.delete(e), r;
    }
    static clearAll() {
        eU._readStates.clear(), eU._mentionChannels.clear();
    }
    constructor(e, t = ei.P.CHANNEL) {
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
            (this.type = n ?? ei.P.CHANNEL),
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
            eU._mentionChannels.delete(this.channelId),
            this._mentionCount > 0 && this.canHaveMentions() && eU._mentionChannels.add(this.channelId);
    }
    incrementGuildUnreadsSentinel() {
        null != this._guildId && eU.getGuildSentinels(this._guildId).unreadsSentinel++;
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
        (this._lastMessageId = e), (this._lastMessageTimestamp = null != e ? F.default.extractTimestamp(e) : 0);
    }
    get lastMessageTimestamp() {
        return this._lastMessageTimestamp;
    }
    get ackMessageId() {
        return this._ackMessageId;
    }
    set ackMessageId(e) {
        (this._ackMessageId = e), (this._ackMessageTimestamp = null != e ? F.default.extractTimestamp(e) : 0);
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
            eU._mentionChannels.delete(this.channelId),
            this._mentionCount > 0 && this.canHaveMentions() && eU._mentionChannels.add(this.channelId);
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
        let e = z.A.getMessages(this.channelId);
        if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
        if (!this.hasMentions()) return this.lastMessageId;
        let t = null,
            n = this.mentionCount,
            r = Q.default.getCurrentUser();
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
        let e = H.A.getChannel(this.channelId);
        return (this._guildId = null != e ? e.getGuildId() : null);
    }
    isPrivate() {
        if (this.type !== ei.P.CHANNEL) return !1;
        let e = H.A.getChannel(this.channelId);
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
            let e = Q.default.getCurrentUser(),
                n = this.getAckTimestamp(),
                r = !1,
                i = !1,
                s = null,
                a = z.A.getMessages(this.channelId);
            a.forAll((a) => {
                r
                    ? (this.oldestUnreadMessageId = this._oldestUnreadMessageId ?? a.id)
                    : (r = a.id === this._ackMessageId),
                    F.default.extractTimestamp(a.id) > n
                        ? (this.unreadCount++, t && eO(a, e) && this.mentionCount++, (s = s ?? a.id))
                        : (i = !0);
            }),
                (this.estimated = !a.hasPresent() || (!(r || i) && a.length === this.unreadCount)),
                (this.oldestUnreadMessageId = this._oldestUnreadMessageId ?? s);
        }
        null != n && (this.mentionCount = n);
    }
    handleGuildEventRemoval(e, t) {
        if (F.default.compare(this.ackMessageId, t) >= 0) return;
        let n = A.Ay.getGuildScheduledEventsForGuild(e),
            r = this.getAckTimestamp();
        if (isNaN(r)) return;
        let i = this._ackMessageId ?? F.default.fromTimestamp(r),
            s = null,
            a = 0;
        n.forEach((e) => {
            (0, A.d6)(e) && (F.default.compare(e.id, s) > 0 && (s = e.id), F.default.compare(e.id, i) > 0 && a++);
        }),
            (this.lastMessageId = s),
            (this.mentionCount = a);
    }
    canTrackUnreads() {
        if (this.type !== ei.P.CHANNEL) return !0;
        if ((this._isThread && !this._isActiveThread) || this._isResourceChannel) return !1;
        let e = H.A.getBasicChannel(this.channelId);
        return (
            null != e &&
            ("basicPermissions" in e
                ? P.A.has(e.basicPermissions, ee.hVb.VIEW_CHANNEL)
                : !m.A.isChannelGated(this.guildId, this.channelId) || $.A.can(ee.xBc.VIEW_CHANNEL, e))
        );
    }
    canBeUnread() {
        return (
            !(
                (this._isThread && !this._isJoinedThread) ||
                (0, S.k_)(this.channelId, [T.A, y.A]) ||
                (!this._isThread &&
                    (0, C.WW)(this._guildId) &&
                    (this._lastMessageTimestamp < ey ||
                        (!X.Ay.isChannelOrParentOptedIn(this._guildId, this.channelId) &&
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
                ((0, C.WW)(this._guildId) && this._lastMessageTimestamp < ey)
            ) && this.canTrackUnreads()
        );
    }
    getGuildChannelUnreadState(e, t, n, r, i) {
        if (
            t &&
            (this._lastMessageTimestamp < ey ||
                (!X.Ay.isChannelRecordOrParentOptedIn(e) &&
                    !this.hasRecentlyVisitedAndRead() &&
                    this.mentionCount <= 0))
        )
            return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        if ("basicPermissions" in e) {
            if (!P.A.has(e.basicPermissions, ee.hVb.VIEW_CHANNEL))
                return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        } else if (m.A.isChannelGated(this.guildId, this.channelId) && !$.A.can(ee.xBc.VIEW_CHANNEL, e))
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
            this.getAckTimestamp() > ev &&
            x.A.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
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
        if (this.type !== ei.P.CHANNEL || !this.canTrackUnreads()) return !1;
        if (null == e) {
            if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
            (this._persisted = !0),
                ex(() => u.Bo.post({ url: ee.Rsh.PINS_ACK(this.channelId), oldFormErrors: !0, rejectWithError: !0 }));
        }
        let t = eb(e);
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
                eh && (this.ackedWhileCached = !0),
                eJ(this.channelId),
                i
                    ? (this.oldestUnreadMessageId = null)
                    : (null == this.outgoingAck &&
                          (this.outgoingAckTimer = setTimeout(
                              () => {
                                  this.type === ei.P.CHANNEL ? this._ack(n, r) : this._nonChannelAck(),
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
                (this.type !== ei.P.CHANNEL ||
                    !!this.loadedMessages ||
                    !!H.A.getChannel(this.channelId)?.isForumLikeChannel()))
        );
    }
    _ack(e, t) {
        let { outgoingAck: r } = this;
        if (null == r) return;
        let i = V.default.getId(),
            s = ep;
        this._persisted = !0;
        let a = this.recalculateFlags(),
            o = a === this.flags ? void 0 : a;
        ex(() =>
            u.Bo.post({
                url: ee.Rsh.MESSAGE_ACK(this.channelId, r),
                body: { token: ep, last_viewed: this.lastViewed, flags: o },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
        ).then((r) => {
            null != r &&
                (ep === s && i === V.default.getId() && (ep = r.body.token),
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
        if (this.type !== ei.P.CHANNEL) return;
        let e = H.A.getChannel(this.channelId);
        if (null != e) return e.isThread() ? 2 : +(null != e.guild_id);
    }
    _nonChannelAck() {
        let e,
            { outgoingAck: t, channelId: n, type: r } = this;
        if (null != t) {
            switch (r) {
                case ei.P.GUILD_HOME:
                case ei.P.GUILD_EVENT:
                case ei.P.GUILD_ONBOARDING_QUESTION:
                    e = ee.Rsh.GUILD_FEATURE_ACK(n, t, r);
                    break;
                case ei.P.NOTIFICATION_CENTER:
                case ei.P.MESSAGE_REQUESTS:
                    e = ee.Rsh.USER_NON_CHANNEL_ACK(t, r);
                    break;
                default:
                    return;
            }
            (this._persisted = !0), ex(() => u.Bo.post({ url: e, body: {}, oldFormErrors: !0, rejectWithError: !0 }));
        }
    }
    delete() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = H.A.getBasicChannel(this.channelId);
        ea.log("Deleting ReadState", this.channelId, this.type, {
            remote: e,
            persisted: this._persisted,
            channelMissing: null == t,
            isOld: eZ(this, eS()),
            validType: null != t && M.A_.has(t.type),
            readableType: null != t && (0, M.Z_)(t.type),
            oldThreadCutoff: eS(),
            mentionCount: this.mentionCount,
            channelId: this.channelId,
            ackMessageId: this._ackMessageId,
            lastMessageId: this._lastMessageId,
        }),
            e &&
                this._persisted &&
                u.Bo.del({
                    url: ee.Rsh.CHANNEL_ACK(this.channelId),
                    body: { version: eo, read_state_type: this.type },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
            eU._readStates.get(this.type)?.delete(this.channelId),
            eU._mentionChannels.delete(this.channelId);
    }
    shouldDeleteReadState(e) {
        if (0 !== Y.A.totalUnavailableGuilds) return !1;
        if (null != this.type && this.type !== ei.P.CHANNEL) return !eX(this);
        let t = H.A.getBasicChannel(this.channelId);
        if (null == t)
            if (eZ(this, e)) return !0;
            else return !1;
        return (
            !!M.A_.has(t.type) &&
            (!(0, M.Z_)(t.type) ||
                (!(0, M.Gw)(t.type) &&
                    !(
                        !(M.Le.has(t.type) && eq(this, t, e)) &&
                        (!(this.mentionCount > 0) || $.A.canBasicChannel(eu, t))
                    )))
        );
    }
    getAckTimestamp() {
        let e, t;
        if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
        if (this._isThread)
            return (
                (this._ackMessageTimestamp = ez(this.guildId, this.channelId)),
                (this._ackMessageId = F.default.fromTimestamp(this._ackMessageTimestamp)),
                this._ackMessageTimestamp
            );
        if (this.type === ei.P.GUILD_EVENT || this.type === ei.P.GUILD_ONBOARDING_QUESTION)
            e = W.A.getGuild(this.channelId);
        else if ((0, en.jq)(this.channelId)) e = W.A.getGuild(this.guildId);
        else {
            let t = H.A.getChannel(this.channelId);
            if (null != t) {
                let n = t.getGuildId();
                e = W.A.getGuild(n);
            }
        }
        return (
            null != e
                ? isNaN((t = e$(e))) && (t = F.default.extractTimestamp(this.channelId))
                : (t = F.default.extractTimestamp(this.channelId)),
            (this._ackMessageTimestamp = t),
            t
        );
    }
    get oldestUnreadTimestamp() {
        return null != this.oldestUnreadMessageId ? F.default.extractTimestamp(this.oldestUnreadMessageId) : 0;
    }
    syncThreadSettings() {
        this._isThread = !0;
        let e = H.A.getChannel(this.channelId);
        if (null == e) return ea.warn(`syncThreadSettings called with channel not in memory ${this.channelId}`), !1;
        let t = this.guildId,
            n = null != t && O.A.isActive(t, e.parent_id, this.channelId),
            r = D.A.hasJoined(this.channelId);
        return (
            (this._isActiveThread !== n || this._isJoinedThread !== r) &&
            ((this._isActiveThread = n), (this._isJoinedThread = r), !0)
        );
    }
    recordLastViewedTime() {
        let e = Math.ceil((Date.now() - F.DISCORD_EPOCH) / k.A.Millis.DAY);
        e !== this.lastViewed &&
            ((this.lastViewed = e),
            this.canTrackUnreads() && !this.hasUnread() && this.ack({ force: !0, trackAnalytics: !1 }));
    }
}
function eG(e) {
    e.forEach((e) => {
        if ((0, M.Z_)(e.type)) {
            let t = eU.get(e.id);
            (t._guildId = e.guild_id),
                (t.lastMessageId = e.lastMessageId),
                (t.lastPinTimestamp = eb(e.lastPinTimestamp)),
                (t._isResourceChannel = e.hasFlag(en.lx.IS_GUILD_RESOURCE_CHANNEL)),
                M.Le.has(e.type) && t.syncThreadSettings();
        }
    });
}
function eF(e) {
    e.forEach((e) => {
        if ((0, M.Z_)(e.type)) {
            let t = eU.get(e.id);
            (t.lastMessageId = e.last_message_id),
                (t.lastPinTimestamp = eb(e.last_pin_timestamp)),
                (t._isResourceChannel = (0, o.Lt)(e.flags ?? 0, en.lx.IS_GUILD_RESOURCE_CHANNEL)),
                M.Le.has(e.type) && t.syncThreadSettings();
        }
    });
}
function eV(e) {
    eY(e), eW(e), ej(e), eK(e);
}
function eB(e) {
    eH(e);
}
function eH(e) {
    let t = Q.default.getCurrentUser();
    if (null == t) return !1;
    let n = eU.get(t.id, ei.P.NOTIFICATION_CENTER);
    e.forEach((e) => {
        if (null == e.since || e.type !== ee.eA$.PENDING_INCOMING) return;
        let t = new Date(e.since).getTime();
        (null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0) < t &&
            (n.mentionCount++, (n.lastMessageId = F.default.fromTimestamp(t)));
    });
}
function ej(e) {
    let t = 24;
    eU.get(e.id, ei.P.GUILD_HOME).lastMessageId = F.default.fromTimestamp(a()(Date.now()).subtract(t, "h").valueOf());
}
function eY(e) {
    e.threads?.forEach((t) => {
        if (!M.A_.has(t.type)) return;
        let n = eU.get(t.id);
        (n.lastMessageId = t.lastMessageId),
            (n.lastPinTimestamp = eb(t.lastPinTimestamp)),
            (n._isThread = !0),
            (n._isActiveThread = !0),
            (n._isJoinedThread = null != t.member),
            null == n.ackMessageId && (n.ackMessageId = F.default.fromTimestamp(ez(e.id, t.id))),
            null == n.ackPinTimestamp && (n.ackPinTimestamp = ez(e.id, t.id));
    });
}
function eW(e) {
    if (e.guild_scheduled_events?.length === 0 && null == eU.getIfExists(e.id, ei.P.GUILD_EVENT)) return;
    let t = eU.get(e.id, ei.P.GUILD_EVENT);
    t._guildId = e.id;
    let n = 0,
        r = null,
        i = t._ackMessageId ?? F.default.fromTimestamp(t.getAckTimestamp());
    e.guild_scheduled_events.forEach((e) => {
        F.default.compare(e.id, r) > 0 && (r = e.id), F.default.compare(e.id, i) > 0 && n++;
    }),
        (t.lastMessageId = r),
        (t.mentionCount = n);
}
function eK(e) {
    let t = W.A.getGuild(e.id);
    if (null == t) return;
    let n = t?.latestOnboardingQuestionId;
    if (null == n) return;
    let r = eU.get(t.id, ei.P.GUILD_ONBOARDING_QUESTION);
    (r._guildId = t.id), (r.lastMessageId = n);
}
function ez(e, t) {
    let n = H.A.getChannel(t),
        r = W.A.getGuild(e ?? n?.guild_id),
        i = n?.isForumPost() ? 0 : e$(r),
        s = (D.A.joinTimestamp(t)?.getTime() ?? 0) - 5e3;
    isNaN(s) && (s = -5e3);
    let a = n?.threadMetadata?.archiveTimestamp,
        o = null != a ? new Date(a).getTime() - 1 : 0;
    isNaN(o) && (o = 0);
    let l = Math.max(s, o);
    return (
        l <= 0 && (l = F.default.extractTimestamp(t) - 1),
        (isNaN(l) || l <= 0) && (l = 0),
        isNaN(i) ? l : Math.max(i, l)
    );
}
function e$(e) {
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
function eq(e, t, n) {
    let r = e.guildId;
    return !(null != r && O.A.isActive(r, t.parent_id, e.channelId)) && eZ(e, n);
}
function eZ(e, t) {
    return (
        e.mentionCount > 0 ||
        !(
            F.default.compare(e.channelId, t) > 0 ||
            (null != e._ackMessageId && F.default.compare(e._ackMessageId, t) > 0) ||
            (null != e._lastMessageId && F.default.compare(e._lastMessageId, t) > 0)
        )
    );
}
function eX(e) {
    switch (e.type) {
        case ei.P.GUILD_HOME:
        case ei.P.GUILD_EVENT:
        case ei.P.GUILD_ONBOARDING_QUESTION:
            return null != W.A.getGuild(e.channelId);
        case ei.P.NOTIFICATION_CENTER:
            return F.default.cast(Q.default.getCurrentUser()?.id) === e.channelId;
        default:
            return !0;
    }
}
function eQ(e, t) {
    if (null == t) return !1;
    let n = eU.get(t);
    return !!ek(n) && n.ack({ trackAnalytics: !0, location: e });
}
function eJ(e) {
    if (null == e) return;
    let t = eU.get(e);
    if (t.type !== ei.P.CHANNEL) return;
    let n = H.A.getChannel(t.channelId);
    if (null == n || !n.isForumPost() || null == n.parent_id) return;
    let r = n.parent_id,
        i = eU.get(r);
    O.A.hasLoaded(n.guild_id) &&
        F.default
            .keys(O.A.getThreadsForParent(n.guild_id, r))
            .every((e) => t3.hasOpenedThread(e) || 0 > F.default.compare(e, i.ackMessageId)) &&
        i.ack({
            trackAnalytics: !0,
            location: {
                section: ee.JJy.CHANNEL,
                object: ee.ZSU.ACK_FORUM_CHANNEL_NO_UNREAD_POSTS,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
        });
}
function e0(e) {
    let { guilds: t, relationships: n, initialPrivateChannels: r, readState: i } = e;
    eC(),
        (ep = null),
        eh || i.partial || eU.clearAll(),
        (eh = !1),
        i.entries.forEach((e) => {
            let t = e.read_state_type ?? ei.P.CHANNEL;
            t !== ei.P.CHANNEL && (e = eR(e));
            let n = eU.get(e.id, t);
            (n._persisted = !0),
                (n._mentionCount = e.mention_count ?? 0),
                (n.flags = e.flags),
                (n.lastViewed = e.last_viewed);
            let r = H.A.getBasicChannel(e.id);
            null != r && (0, M.fT)(r.type) && (null == e.last_message_id || 0 === e.last_message_id)
                ? (n.ackMessageId = F.default.fromTimestamp(ez(r.guild_id, r.id)))
                : n.ackedWhileCached
                  ? -1 === F.default.compare(n.ackMessageId, e.last_message_id) && (n.ackMessageId = e.last_message_id)
                  : (n.ackMessageId = e.last_message_id),
                (n.ackedWhileCached = void 0),
                (n.ackPinTimestamp = eb(e.last_pin_timestamp)),
                eU._mentionChannels.delete(n.channelId),
                n._mentionCount > 0 && n.canHaveMentions() && eU._mentionChannels.add(n.channelId);
        }),
        eU.resetGuildSentinels();
    let s = Q.default.getCurrentUser()?.id;
    for (let e of (null != s &&
        (eU.get(s, ei.P.NOTIFICATION_CENTER).lastMessageId = F.default.fromTimestamp(Date.now())),
    eB(n),
    eG(r),
    t))
        eG("full_sync" === e.channels.op ? e.channels.items : e.channels.writes),
            null != e.channelTimestampUpdates && e6(e.channelTimestampUpdates),
            eV(e);
    e1(), (eg = setTimeout(() => e3(i.entries), 10 * k.A.Millis.SECOND));
}
function e1() {
    null != eg && clearTimeout(eg);
}
let e2 = (0, i.throttle)((e) => {
    e.delete();
}, 100);
function e3(e) {
    let t = eS();
    for (let n of e) {
        let e = n.read_state_type ?? ei.P.CHANNEL,
            r = eU.get(n.id, e);
        r.shouldDeleteReadState(t) && e2(r);
    }
}
function e6(e) {
    for (let t of e) {
        let e = eU.get(t.id);
        null != t.last_message_id && (e.lastMessageId = t.last_message_id),
            null != t.last_pin_timestamp && (e.lastPinTimestamp = eb(t.last_pin_timestamp));
    }
}
function e4(e) {
    let { lazyPrivateChannels: t } = e;
    eG(t);
}
function e5(e) {
    let { readStates: t, selectedChannelId: n } = e;
    eC(),
        (ep = null),
        (e_ = n),
        (ef = B.Ay.getCurrentSidebarChannelId(e_)),
        eU.clearAll(),
        t.forEach((e) => {
            let t = eU.get(e.channelId);
            t.deserializeForOverlay(e), t.type === ei.P.CHANNEL && t.rebuildChannelState();
        });
}
function e7(e) {
    let { guild: t } = e,
        n = eS();
    eU.forEach((e) => {
        e.guildId === t.id && e.shouldDeleteReadState(n) && e.delete(!1);
    }),
        eG("full_sync" === t.channels.op ? t.channels.items : t.channels.writes),
        null != t.channelTimestampUpdates && e6(t.channelTimestampUpdates),
        eV(t);
}
function e8(e) {
    let { channelId: t, isAfter: n, messages: r } = e,
        i = eU.get(t);
    i.loadedMessages = !0;
    let s = z.A.getMessages(t);
    null != s &&
        ((r.length > 0 && 1 === F.default.compare(r[0].id, i.ackMessageId) && 0 === i.unreadCount) ||
        s.hasPresent() ||
        s.jumpTargetId === i.ackMessageId
            ? i.rebuildChannelState()
            : n &&
              null != i.ackMessageId &&
              s.has(i.ackMessageId, !0) &&
              ((i.unreadCount += r.length), null == i.oldestUnreadMessageId && i.rebuildChannelState())),
        eF(r.map((e) => e.thread).filter(U.Vq));
}
function e9(e) {
    let { channelId: t } = e;
    eU.get(t).rebuildChannelState();
}
function te(e) {
    let t,
        n,
        { channelId: i, message: s, isPushNotification: a } = e,
        o = eU.get(i),
        l = o.hasUnread(),
        u = null != o.lastMessageId && o.lastMessageId >= s.id;
    o.lastMessageId = s.id;
    let c = Q.default.getCurrentUser(),
        d = H.A.getBasicChannel(i);
    if (null != s.author && null != c && s.author.id === c.id && !ee.MRS.SELF_MENTIONABLE_SYSTEM.has(s.type))
        return null != o.outgoingAck && o.clearOutgoingAck(), tk({ channelId: i, messageId: s.id, manual: !1 });
    let _ = (0, I.Y)();
    if (_?.isReady() === !0) {
        let e = _.getCurrentRoute();
        p.A.getChatOpen(o.channelId)
            ? (t = o.channelId)
            : e?.name === "channel"
              ? (t = e.params.channelId)
              : e?.name === "guilds" && (t = e.params?.channelId);
    } else null == _ && ((t = Z.A.getChannelId()), (n = B.Ay.getCurrentSidebarChannelId(t)));
    let f = t === i || n === i;
    if (f && ek(o) && !a) {
        let e = eM(!0, o.channelId) ? ee.JJy.OVERLAY : ee.JJy.CHANNEL;
        return o.ack({
            messageId: s.id,
            trackAnalytics: !0,
            location: {
                section: e,
                object: ee.ZSU.ACK_INCOMING_MESSAGE,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
        });
    }
    if (eM(f && null != r && r.isInstanceLocked(), i))
        return o.ack({
            messageId: s.id,
            trackAnalytics: !0,
            location: {
                section: ee.JJy.OVERLAY,
                object: ee.ZSU.ACK_INCOMING_MESSAGE,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
        });
    if (
        (null == o.oldestUnreadMessageId || o.oldestUnreadMessageIdStale
            ? (o.oldestUnreadMessageId = s.id)
            : l || (0, R.i$)() === i || (o.oldestUnreadMessageId = s.id),
        !u && o.unreadCount++,
        !(q.A.isBlockedOrIgnoredForMessage(s) || (s.type === ee.lAJ.RECIPIENT_REMOVE && d?.type === ee.rbe.GROUP_DM)))
    ) {
        let { shouldMention: e, isMentionLowImportance: t } = tt(s, c, o);
        e && ((o.isMentionLowImportance = t), o.mentionCount++);
    }
}
function tt(e, t, n) {
    if (
        null != t &&
        (0, v.bG)({
            rawMessage: e,
            userId: t.id,
            suppressEveryone: X.Ay.isSuppressEveryoneEnabled(n.guildId),
            suppressRoles: X.Ay.isSuppressRolesEnabled(n.guildId),
        })
    )
        return { shouldMention: !0, isMentionLowImportance: !1 };
    let r = H.A.getChannel(e.channel_id);
    if (eD(r)) return { shouldMention: !0, isMentionLowImportance: !1 };
    if (X.Ay.mentionOnAllMessages && null != r) {
        if (r.isThread()) {
            if ((0, w.l)(r) === es.CP.ALL_MESSAGES) return { shouldMention: !0, isMentionLowImportance: !0 };
        } else if (
            !r.isVocal() &&
            !X.Ay.isChannelMuted(r.guild_id, r.id) &&
            X.Ay.resolvedMessageNotifications(r) === ee.orn.ALL_MESSAGES
        )
            return { shouldMention: !0, isMentionLowImportance: !0 };
    }
    return { shouldMention: !1, isMentionLowImportance: !1 };
}
function tn(e) {
    let { channel: t } = e;
    if (!(0, M.Z_)(t.type)) return !1;
    let n = eU.get(t.id);
    (n.lastMessageId = t.lastMessageId), (n.lastPinTimestamp = eb(t.lastPinTimestamp));
}
function tr(e) {
    let { channel: t } = e;
    ti(t), ts(t);
}
function ti(e) {
    if (!M.A_.has(e.type)) return !1;
    let t = eU.get(e.id);
    (t.lastMessageId = e.lastMessageId),
        (t.lastPinTimestamp = eb(e.lastPinTimestamp)),
        t.syncThreadSettings(),
        e.ownerId === V.default.getId() && (t.loadedMessages = !0);
}
function ts(e) {
    let t = e.parent_id;
    eU.get(t).lastMessageId = e.id;
    let n = Q.default.getCurrentUser();
    if (e.ownerId === n?.id) return (eU.get(e.id)._persisted = !0), tk({ channelId: t, messageId: e.id, manual: !1 });
}
function ta(e) {
    let { channel: t } = e;
    return !!M.A_.has(t.type) && eU.get(t.id).syncThreadSettings();
}
function to(e) {
    let { id: t } = e;
    return eU.get(t).syncThreadSettings();
}
function tl(e) {
    return (0, L.k)(e) && eU.get(e.id).syncThreadSettings();
}
function tu(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        if (!M.A_.has(e.type)) return;
        let t = eU.get(e.id);
        if (
            ((t.lastMessageId = e.lastMessageId),
            (t.lastPinTimestamp = eb(e.lastPinTimestamp)),
            (t._isThread = !0),
            (t._isActiveThread = !0),
            (t._isJoinedThread = D.A.hasJoined(e.id)),
            e.isForumPost())
        ) {
            let t = eU.get(e.parent_id);
            0 > F.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id);
        }
    });
}
function tc(e) {
    let { threads: t } = e;
    eF(t);
}
function td(e) {
    let { channelId: t } = e;
    return eQ(
        {
            section: ee.JJy.CHANNEL,
            object: ee.ZSU.ACK_RESORT_THREADS,
            objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
        },
        t,
    );
}
function t_(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n } = e;
        t.forEach((e) => {
            eF(
                e
                    .map((e) => {
                        let { thread: t } = e;
                        return t;
                    })
                    .filter(U.Vq),
            );
        }),
            eF(n);
    });
}
function tf(e) {
    let t = Q.default.getCurrentUser();
    return null != e.creator_id && null != t && e.creator_id === t.id;
}
function tp(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id,
        r = eU.get(t.guild_id, ei.P.GUILD_EVENT);
    ((r.lastMessageId = t.id), tf(t))
        ? tG({ type: "GUILD_FEATURE_ACK", id: n, ackType: ei.P.GUILD_EVENT, ackedId: t.id, local: !1 })
        : !X.Ay.isMuteScheduledEventsEnabled(n) && r.mentionCount++;
}
function th(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id;
    if (tf(t) || ![er.XG.CANCELED, er.XG.COMPLETED].includes(t.status)) return !1;
    eU.get(n, ei.P.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
}
function tm(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id;
    if (tf(t)) return !1;
    eU.get(t.guild_id, ei.P.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
}
function tE(e) {
    let t = Q.default.getCurrentUser();
    if (
        null == t ||
        null == e.relationship.since ||
        (e.relationship.type !== ee.eA$.PENDING_INCOMING && e.relationship.type !== ee.eA$.FRIEND)
    )
        return !1;
    let n = eU.get(t.id, ei.P.NOTIFICATION_CENTER),
        r = e.relationship.type === ee.eA$.FRIEND,
        i = r ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0) < i &&
        ((n.lastMessageId = F.default.fromTimestamp(i)),
        N.A.active ? tV(t.id, ei.P.NOTIFICATION_CENTER, void 0, !1) : r ? n.mentionCount-- : n.mentionCount++);
}
function tg(e) {
    let t = Q.default.getCurrentUser();
    if (null == t || null == e.relationship.since || e.relationship.type !== ee.eA$.PENDING_INCOMING) return !1;
    let n = eU.get(t.id, ei.P.NOTIFICATION_CENTER),
        r = new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0) <= r &&
        (n.mentionCount = Math.max(0, n.mentionCount - 1));
}
function tA(e) {
    let { item: t } = e,
        n = Q.default.getCurrentUser()?.id;
    if (null == n) return !1;
    let r = eU.get(n, ei.P.NOTIFICATION_CENTER);
    ((r.lastMessageId = t.id), N.A.active || 0) ? tV(n, ei.P.NOTIFICATION_CENTER, t.id, !1) : r.mentionCount++;
}
function tI(e) {
    let { ids: t, optimistic: n } = e;
    if (n || N.A.active) return !1;
    let r = Q.default.getCurrentUser()?.id;
    if (null == r) return !1;
    let i = eU.get(r, ei.P.NOTIFICATION_CENTER);
    t.forEach((e) => {
        0 > F.default.compare(i.ackMessageId, e) && (i.mentionCount = Math.max(i.mentionCount - 1, 0));
    });
}
function tT(e) {
    let { guild: t } = e;
    return eU.clear(t.id, ei.P.GUILD_EVENT);
}
function tS(e) {
    let { guild: t } = e,
        n = t.latest_onboarding_question_id;
    if (null == n) return;
    let r = eU.get(t.id, ei.P.GUILD_ONBOARDING_QUESTION);
    (r._guildId = t.id), (r.lastMessageId = n);
}
function ty(e) {
    let { channel: t } = e;
    return eU.clear(t.id);
}
function tv(e) {
    let { channelId: t } = e,
        n = B.Ay.getCurrentSidebarChannelId(t),
        r = H.A.getChannel(t);
    if (null != r) {
        let e = eU.get(r.id);
        (e.ackMessageIdAtChannelSelect = e.ackMessageId ?? F.default.fromTimestamp(e.getAckTimestamp())),
            e.recordLastViewedTime();
    }
    tO(e_), tO(ef);
    let i = !1;
    return (
        e_ !== t && ((i = tD(e_) || i), (i = tD(ef) || i)),
        (e_ === t || (r?.type != null && ee.kvI.GUILD_THREADS_ONLY.has(r.type))) &&
            (i =
                eQ(
                    {
                        section: ee.JJy.CHANNEL,
                        object: ee.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL,
                        objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    t,
                ) || i),
        e_ === t &&
            (i =
                eQ(
                    {
                        section: ee.JJy.CHANNEL,
                        object: ee.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR,
                        objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    n,
                ) || i),
        (e_ = t),
        (ef = n),
        i
    );
}
function tN() {
    let e = B.Ay.getCurrentSidebarChannelId(e_),
        t = !1;
    return (
        ef !== e
            ? ((t = tD(ef)), (ef = e))
            : (t =
                  eQ(
                      {
                          section: ee.JJy.CHANNEL,
                          object: ee.ZSU.ACK_CHANNEL_SECTION_STORE_UPDATE,
                          objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
                      },
                      e,
                  ) || t),
        t
    );
}
function tC(e, t) {
    let n = eU.get(e);
    return (
        (n.ackMessageIdAtChannelSelect = n.ackMessageId ?? F.default.fromTimestamp(n.getAckTimestamp())),
        n.recordLastViewedTime(),
        tD(e),
        eQ({ section: ee.JJy.OVERLAY, object: t, objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC }, e),
        !0
    );
}
function tb(e) {
    return !__OVERLAY__ && tC(e.channelId, ee.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH);
}
function tR(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let n = eU.get(t);
    if (!n.hasMentions())
        return (
            (n.oldestUnreadMessageId = null),
            n.ack({
                isExplicitUserAction: !0,
                trackAnalytics: !0,
                location: {
                    section: ee.JJy.CHANNEL,
                    object: ee.ZSU.ACK_VOICE_CHANNEL_SELECT,
                    objectType: ee.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
            })
        );
}
function tO(e) {
    null == e || (eU.get(e).isManualAck = !1);
}
function tD(e) {
    if (null == e) return !1;
    let t = eU.get(e);
    return !t.hasUnread() && ((t.oldestUnreadMessageId = null), !0);
}
function tL(e) {
    let t = !1;
    return (
        eI.forEachChannel((n, r) => {
            r.has(e.windowId) && (t = tw(n, e.focused) || t);
        }),
        t
    );
}
function tw(e, t) {
    if (null == e) return !1;
    let n = eU.get(e);
    return (
        t || n.hasUnread() || (n.oldestUnreadMessageIdStale = !0),
        eQ(
            {
                section: ee.JJy.CHANNEL,
                object: ee.ZSU.ACK_WINDOW_FOCUS,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
            e,
        )
    );
}
function tx(e) {
    let { channelId: t } = e;
    return eQ(
        {
            section: ee.JJy.CHANNEL,
            object: ee.ZSU.ACK_CHANNEL_SCROLL,
            objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
        },
        t,
    );
}
function tM(e) {
    let { channelId: t, messageId: n, immediate: r = !1, force: i = !1, context: s, location: a } = e,
        o = eU.get(t),
        l = o.ack({
            messageId: n,
            local: s !== ee.QCW,
            immediate: r,
            force: i,
            isExplicitUserAction: !0,
            location: a,
            trackAnalytics: !0,
        });
    return null != n ? (o.rebuildChannelState(), !0) : l;
}
function tP(e) {
    let { channelId: t, timestamp: n } = e;
    return eU.get(t).ackPins(n);
}
function tk(e) {
    let { channelId: t, messageId: n, manual: r, newMentionCount: i } = e,
        s = eU.get(t);
    return r
        ? (s.rebuildChannelState(n, !0, i), s.clearOutgoingAck(), !0)
        : n !== s._ackMessageId && s.ack({ messageId: n, local: !0, trackAnalytics: !1 });
}
function tU(e) {
    let { channelId: t } = e;
    return eU
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
function tG(e) {
    let { id: t, ackType: n, ackedId: r, local: i } = e;
    return tV(t, n, r, i);
}
function tF(e) {
    let { ackType: t, ackedId: n, local: r } = e,
        i = Q.default.getCurrentUser()?.id;
    return null != i && tV(i, t, n, r);
}
function tV(e, t, n, r) {
    let i = eU.get(e, t);
    return (
        n !== i.ackMessageId &&
        i.lastMessageId !== i.ackMessageId &&
        (null != i.lastMessageId || 0 !== i.mentionCount) &&
        ((n = n ?? i.lastMessageId ?? F.default.fromTimestamp(i.getAckTimestamp())),
        i.ack({ messageId: n, local: r ?? !0, trackAnalytics: !1 }))
    );
}
function tB(e) {
    let { channelId: t, lastPinTimestamp: n } = e,
        r = eU.get(t),
        i = eb(n);
    return r.lastPinTimestamp !== i && ((r.lastPinTimestamp = i), !0);
}
function tH(e) {
    let t = !1;
    for (let n of e.channels) {
        let e = eU.get(n.id),
            r = eb(n.lastPinTimestamp);
        (e.lastMessageId !== n.lastMessageId || e.lastPinTimestamp !== r) &&
            ((t = !0), (e.lastMessageId = n.lastMessageId), (e.lastPinTimestamp = r));
    }
    return t;
}
function tj() {
    ep = null;
}
function tY(e) {
    let { readStates: t } = e;
    (eh = !0),
        eC(),
        t.forEach((e) => {
            let t = e.type ?? ei.P.CHANNEL;
            e.type = t;
            let n = eU._readStates.get(t) ?? new Map();
            n.set(e.channelId, (0, d.pp)(e, eU)), eU._readStates.has(t) || eU._readStates.set(t, n);
        });
}
function tW(e) {
    let { channelId: t, chatOpen: n } = e;
}
function tK(e, t, n) {
    e.forEach((e) => {
        let { channelId: t, messageId: n, readStateType: r } = e;
        eU.get(t, r).ack({
            messageId: n,
            local: !0,
            immediate: void 0,
            force: void 0,
            isExplicitUserAction: !0,
            trackAnalytics: !1,
        });
    }),
        t === ee.QCW &&
            (em.push(
                ...e.map((e) => ({
                    channel_id: e.channelId,
                    message_id: e.messageId,
                    read_state_type: e.readStateType,
                })),
            ),
            eE || eL(n));
}
function tz(e) {
    let { channels: t, context: n, onFinished: r } = e;
    tK(
        t.filter((e) => null != e.messageId && t3.hasUnreadOrMentions(e.channelId, e.readStateType)),
        n,
        r,
    );
}
function t$(e) {
    let { channelId: t, windowId: n } = e;
    return (
        !eI.hasWindowId(t, n) &&
        (eI.addWindowId(t, n),
        eQ(
            {
                section: ee.JJy.CHANNEL,
                object: ee.ZSU.ENABLE_AUTOMATIC_ACK,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
            t,
        ))
    );
}
function tq(e) {
    let { channelId: t, windowId: n } = e;
    return eI.removeWindowId(t, n), !1;
}
function tZ(e) {
    let { channelId: t } = e;
    return tD(t);
}
function tX(e) {
    let { channelId: t, location: n } = e;
    return eQ(n, t);
}
function tQ(e) {
    let { changesByChannelId: t } = e;
    for (let e in t) {
        let n = t[e],
            r = eU.getIfExists(e);
        if (null != r)
            for (let e of [n.new_messages?.[0]].concat(n.modified_messages ?? []).filter(U.Vq))
                1 === F.default.compare(e.id, r.lastMessageId) && (r.lastMessageId = e.id);
    }
}
function tJ(e) {
    let { ackedId: t } = e,
        n = Q.default.getCurrentUser()?.id;
    if (null == n) return !1;
    let r = eU.get(n, ei.P.MESSAGE_REQUESTS);
    if (t === r.ackMessageId) return !1;
    (r.ackMessageId = t), r.ack({ messageId: t, isExplicitUserAction: !0, trackAnalytics: !1 });
}
function t0(e) {
    let t = Q.default.getCurrentUser()?.id;
    if (null == t) return !1;
    let n = eU.get(t, ei.P.MESSAGE_REQUESTS);
    if (null == n.ackMessageId) return !1;
    n.ackMessageId = void 0;
}
function t1(e) {
    let { state: t } = e;
    return (
        t === ee.g6G.ACTIVE &&
        eQ(
            {
                section: ee.JJy.CHANNEL,
                object: ee.ZSU.ACK_APP_FOREGROUND,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
            Z.A.getChannelId(),
        )
    );
}
class t2 extends l.Ay.Store {
    static displayName = "ReadStateStore";
    initialize() {
        j.A,
            Q.default,
            W.A,
            Y.A,
            H.A,
            Z.A,
            z.A,
            $.A,
            p.A,
            O.A,
            D.A,
            B.Ay,
            A.Ay,
            g.A,
            m.A,
            X.Ay,
            J.A,
            N.A,
            T.A,
            x.A,
            y.A,
            this.waitFor(
                O.A,
                V.default,
                p.A,
                B.Ay,
                H.A,
                j.A,
                f.Ay,
                m.A,
                Y.A,
                A.Ay,
                W.A,
                K.A,
                D.A,
                z.A,
                N.A,
                $.A,
                q.A,
                Z.A,
                X.Ay,
                x.A,
                Q.default,
                J.A,
            ),
            this.syncWith([B.Ay], tN);
    }
    getReadStatesByChannel() {
        return eU._readStates.get(ei.P.CHANNEL) ?? new Map();
    }
    getForDebugging(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eU.getIfExists(e, t);
    }
    getNotifCenterReadState(e) {
        return eU.getIfExists(e, ei.P.NOTIFICATION_CENTER);
    }
    hasUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eU.getValue(e, t, (e) => e.canBeUnread() && e.hasUnread(), !1);
    }
    hasUnreadOrMentions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eU.getValue(e, t, (e) => e.canBeUnread() && e.hasUnreadOrMentions(), !1);
    }
    hasTrackedUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eU.getValue(e, t, (e) => e.canTrackUnreads() && e.hasUnread(), !1);
    }
    isForumPostUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eU.getValue(e, t, (e) => e.isForumPostUnread(), !1);
    }
    getUnreadCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eU.getValue(e, t, (e) => (e.canBeUnread() ? e.unreadCount : 0), 0);
    }
    getMentionCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL,
            n = eU.getValue(e, t, (e) => (e.canHaveMentions() ? e.getMentionCount() : 0), 0);
        if ((0, h.A)(e) && n > 0) return 1;
        return n;
    }
    getIsMentionLowImportance(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return t === ei.P.CHANNEL && eU.getValue(e, t, (e) => e.isMentionLowImportance, !1);
    }
    getGuildChannelUnreadState(e, t, n, r, i) {
        return eU.getValue(e.id, ei.P.CHANNEL, (s) => s.getGuildChannelUnreadState(e, t, n, r, i), {
            mentionCount: 0,
            unread: !1,
            isMentionLowImportance: !1,
        });
    }
    hasRecentlyVisitedAndRead(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eU.getValue(e, t, (e) => e.hasRecentlyVisitedAndRead(), !1);
    }
    ackMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eU.getValue(e, t, (e) => (e.canBeUnread() ? e.ackMessageId : null), null);
    }
    getTrackedAckMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eU.getValue(e, t, (e) => (e.canTrackUnreads() ? e._ackMessageId : null), null);
    }
    lastMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eU.getValue(e, t, (e) => e.lastMessageId, null);
    }
    lastMessageTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eU.getValue(e, t, (e) => e.lastMessageTimestamp, 0);
    }
    lastPinTimestamp(e) {
        return eU.getValue(e, ei.P.CHANNEL, (e) => e.lastPinTimestamp, null);
    }
    getOldestUnreadMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eU.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadMessageId : null), null);
    }
    getOldestUnreadTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eU.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0), 0);
    }
    isEstimated(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eU.getValue(e, t, (e) => e.estimated, !1);
    }
    hasOpenedThread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eU.getValue(e, t, (e) => e._persisted, !1);
    }
    hasUnreadPins(e) {
        return eU.getValue(e, ei.P.CHANNEL, (e) => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1);
    }
    isNewForumThread(e, t, n) {
        let r = eU.get(t);
        if (
            !0 === eU.get(e)._persisted ||
            null == r.ackMessageIdAtChannelSelect ||
            0 >= F.default.compare(e, r.ackMessageIdAtChannelSelect)
        )
            return !1;
        let i = e$(n);
        return F.default.extractTimestamp(e) > i;
    }
    getAllReadStates(e) {
        let t = [];
        return (
            eU.forEach((n) => {
                switch (n.type) {
                    case ei.P.GUILD_HOME:
                    case ei.P.GUILD_EVENT:
                    case ei.P.GUILD_ONBOARDING_QUESTION:
                        null != W.A.getGuild(n.channelId) && t.push(n.serialize(e));
                        break;
                    case ei.P.NOTIFICATION_CENTER:
                    case ei.P.MESSAGE_REQUESTS:
                        F.default.cast(Q.default.getCurrentUser()?.id) === n.channelId && t.push(n.serialize(e));
                        break;
                    default:
                        t.push(n.serialize(e));
                }
            }),
            t
        );
    }
    getGuildUnreadsSentinel(e) {
        return eU.getGuildSentinels(e).unreadsSentinel;
    }
    getMentionChannelIds() {
        return eU.getMentionChannelIds();
    }
    getNonChannelAckId(e) {
        let t = Q.default.getCurrentUser()?.id;
        return null == t ? null : eU.get(t, e).ackMessageId;
    }
    getSnapshot(e, t) {
        let n = eU.get(e);
        return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot;
    }
    getChannelIdsForWindowId(e) {
        return eI.getAllChannelIdsForWindowId(e);
    }
}
let t3 = new t2(_.h, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: tQ,
        CONNECTION_OPEN: e0,
        CONNECTION_OPEN_SUPPLEMENTAL: e4,
        LOGOUT: e1,
        OVERLAY_INITIALIZE: e5,
        CACHE_LOADED: tY,
        GUILD_CREATE: e7,
        LOAD_MESSAGES_SUCCESS: e8,
        MESSAGE_CREATE: te,
        MESSAGE_DELETE: e9,
        MESSAGE_DELETE_BULK: e9,
        MESSAGE_ACK: tk,
        CHANNEL_ACK: tM,
        CHANNEL_LOCAL_ACK: tU,
        CHANNEL_PINS_ACK: tP,
        CHANNEL_PINS_UPDATE: tB,
        CHANNEL_SELECT: tv,
        OVERLAY_TEXT_CHAT_ACK_CHANNEL: tb,
        VOICE_CHANNEL_SELECT: tR,
        CHANNEL_CREATE: tn,
        THREAD_CREATE: tr,
        THREAD_UPDATE: ta,
        THREAD_LIST_SYNC: tu,
        LOAD_THREADS_SUCCESS: tc,
        LOAD_ARCHIVED_THREADS_SUCCESS: tc,
        SEARCH_MESSAGES_SUCCESS: t_,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: t_,
        THREAD_MEMBER_UPDATE: to,
        THREAD_MEMBERS_UPDATE: tl,
        CHANNEL_DELETE: ty,
        THREAD_DELETE: ty,
        WINDOW_FOCUS: tL,
        UPDATE_CHANNEL_DIMENSIONS: tx,
        CURRENT_USER_UPDATE: tj,
        BULK_ACK: tz,
        ENABLE_AUTOMATIC_ACK: t$,
        DISABLE_AUTOMATIC_ACK: tq,
        GUILD_FEATURE_ACK: tG,
        GUILD_SCHEDULED_EVENT_CREATE: tp,
        GUILD_SCHEDULED_EVENT_UPDATE: th,
        GUILD_SCHEDULED_EVENT_DELETE: tm,
        GUILD_DELETE: tT,
        GUILD_UPDATE: tS,
        RESORT_THREADS: td,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: tW,
        DECAY_READ_STATES: eC,
        NOTIFICATION_CENTER_ITEM_CREATE: tA,
        RELATIONSHIP_ADD: tE,
        RELATIONSHIP_REMOVE: tg,
        NOTIFICATION_CENTER_ITEMS_ACK: tI,
        USER_NON_CHANNEL_ACK: tF,
        PASSIVE_UPDATE_V2: tH,
        CLEAR_OLDEST_UNREAD_MESSAGE: tZ,
        TRY_ACK: tX,
        MESSAGE_REQUEST_ACK: tJ,
        MESSAGE_REQUEST_CLEAR_ACK: t0,
        APP_STATE_UPDATE: t1,
    }),
    t6 = t3;
