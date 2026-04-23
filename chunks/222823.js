"use strict";
let i;
n.d(t, { Ay: () => e2, Wm: () => eR }), n(321073), n(938796);
var r = n(735438),
    s = n(989349),
    a = n.n(s),
    o = n(665260),
    l = n(17928),
    d = n(636537),
    _ = n(451988),
    u = n(933681),
    c = n(228366),
    E = n(933958);
n(183636);
var h = n(313961),
    m = n(343328),
    f = n(717125),
    g = n(626584),
    p = n(736056),
    A = n(698441),
    I = n(250953),
    T = n(380335),
    S = n(309199),
    N = n(157550),
    C = n(451919),
    R = n(252431),
    O = n(491001),
    y = n(395504),
    v = n(206885),
    D = n(622794),
    L = n(970278),
    b = n(152007),
    w = n(882733),
    P = n(607508),
    k = n(617617),
    M = n(95701),
    U = n(799422),
    x = n(927813),
    G = n(403362),
    V = n(209489),
    F = n(935208),
    B = n(495544),
    H = n(761640),
    j = n(734057),
    W = n(72314),
    Y = n(919638),
    K = n(71393),
    z = n(885576),
    $ = n(232835),
    q = n(576705),
    X = n(994500),
    Z = n(309010),
    Q = n(543465),
    J = n(287809),
    ee = n(531685),
    et = n(652215),
    en = n(5867),
    ei = n(746080),
    er = n(988794),
    es = n(790782),
    ea = n(37411);
let eo = new g.A("ReadStateStore");
__OVERLAY__ && (i = n(256415).default);
let el = () => !1;
!__OVERLAY__ && v.O && ({ isOverlayChannelVisible: el } = n(267355));
let ed = et.hVb.VIEW_CHANNEL | et.hVb.READ_MESSAGE_HISTORY,
    e_ = Z.A.getChannelId(),
    eu = null,
    ec = null,
    eE = !1,
    eh = [],
    em = !1,
    ef = null,
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
            for (let [n, i] of F.default.entries(this.channelWindowIds)) i.has(e) && t.add(n);
            return Array.from(t);
        }
        isAnyWindowFocused(e) {
            let t = this.channelWindowIds[e];
            if (null == t) return !1;
            for (let e of t) if (ee.A.isFocused(e)) return !0;
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
    })(),
    ep = 30 * x.A.Millis.DAY;
function eA() {
    return F.default.fromTimestamp(Date.now() - ep);
}
let eI = 0,
    eT = 0,
    eS = null;
function eN() {
    (eI = Date.now() - 7 * x.A.Millis.DAY),
        (eT = Date.now() - 3 * x.A.Millis.DAY),
        clearTimeout(eS),
        (eS = setTimeout(() => {
            c.h.dispatch({ type: "DECAY_READ_STATES" });
        }, +x.A.Millis.HOUR));
}
function eC(e) {
    if (null == e) return 0;
    let t = Date.parse(e);
    return isNaN(t) ? 0 : t;
}
function eR(e, t) {
    let n = j.A.getChannel(e.channel_id);
    return (
        !(null == n || X.A.isBlockedOrIgnoredForMessage(e)) &&
        !!(
            (0, C.Ay)({
                message: e,
                userId: t.id,
                suppressEveryone: Q.Ay.isSuppressEveryoneEnabled(n.guild_id),
                suppressRoles: Q.Ay.isSuppressRolesEnabled(n.guild_id),
            }) || eO(n)
        )
    );
}
function eO(e) {
    return null != e && e.isPrivate() && !Q.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
}
async function ey(e) {
    if (0 === eh.length) {
        (em = !1), e?.();
        return;
    }
    em = !0;
    let t = eh.splice(0, 100);
    await ev(() =>
        d.Bo.post({ url: et.Rsh.BULK_ACK, body: { read_states: t }, oldFormErrors: !0, rejectWithError: !1 }),
    ),
        await (0, _.BK)(1e3),
        ey(e);
}
async function ev(e) {
    let t = B.default.getId();
    for (let n = 0; n < 3; n++)
        try {
            return await e();
        } catch (e) {
            if (
                (eo.error("", e),
                n + 1 < 3 && (await (0, _.BK)((n + 1) * 2e3), await V.A.awaitOnline(), t !== B.default.getId()))
            )
                return Promise.reject(Error("User changed."));
        }
}
function eD(e, t) {
    return null != i && i.isInstanceFocused() && i.isPinned(et.uss.TEXT) ? e : null != t && el(t);
}
function eL(e, t) {
    J.default.getCurrentUser()?.hasAnyStaffLevel() && eo.log("STAFF-ACK-LOG:", t, e.channelId);
}
function eb(e, t) {
    if ((eL(e, "shouldAutomaticallyAck called"), e.type !== es.P.CHANNEL)) return eL(e, "not channel read state"), !1;
    let n = j.A.getChannel(e.channelId),
        i = null != n && n.isForumPost();
    if (
        null != E.Ay.getConnectedActivityLocation() &&
        E.Ay.getActivityPanelMode() === en.Gd.PANEL &&
        E.Ay.getFocusedLayout() === en.E8.NO_CHAT
    )
        return eL(e, "In activity"), !1;
    if (z.A.isIdle()) return eL(e, "Is idle"), !1;
    if (!e.canTrackUnreads()) return eL(e, "Cannot track unreads"), !1;
    if (n?.isForumLikeChannel() !== !0 && !eg.isAnyWindowFocused(e.channelId) && !eD(!0, e.channelId)) return !1;
    if (i && !e._persisted) return eL(e, "unpersisted forum post"), !0;
    if (!e.hasUnreadOrMentions()) return eL(e, "No unread or mentions"), !1;
    if (n?.isForumLikeChannel() === !0) return eL(e, "Forum-like channel"), !1;
    if (!(i && !e._isJoinedThread) && !W.A.isAtBottom(e.channelId)) return eL(e, "Not at bottom"), !1;
    let r = h.A.getLayout(e.channelId);
    if (!h.A.getChatOpen(e.channelId) && (r === et.DUB.NO_CHAT || r === et.DUB.FULL_SCREEN))
        return eL(e, "Fullscreen video"), !1;
    if (!eg.isChannelAckable(e.channelId)) return eL(e, "Not ackable"), !1;
    let s = $.A.getMessages(e.channelId);
    return null == s || !s.ready || s.loadingMore
        ? (eL(e, "Still loading messages"), !1)
        : (0, D.oE)(e.channelId, t)
          ? (eL(e, "Acked"), !0)
          : (eL(e, "Chat not focused"), !1);
}
class ew {
    static _guildReadStateSentinels = {};
    static _readStates = new Map();
    static _mentionChannels = new Set();
    channelId;
    type = es.P.CHANNEL;
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL,
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL,
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0,
            r = this.getIfExists(e, t);
        return null == r ? i : n(r);
    }
    static clear(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL,
            n = ew._readStates.get(t);
        if (null == n) return !1;
        let i = n.delete(e);
        return i && ew._mentionChannels.delete(e), i;
    }
    static clearAll() {
        ew._readStates.clear(), ew._mentionChannels.clear();
    }
    constructor(e, t = es.P.CHANNEL) {
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
            _lastMessageId: d,
            _lastMessageTimestamp: _,
            _ackMessageId: u,
            _ackMessageTimestamp: c,
            ackPinTimestamp: E,
            isManualAck: h,
            lastPinTimestamp: m,
            _oldestUnreadMessageId: f,
            oldestUnreadMessageIdStale: g,
            estimated: p,
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
                _lastMessageId: d,
                _lastMessageTimestamp: _,
                _ackMessageId: u,
                _ackMessageTimestamp: c,
                ackPinTimestamp: E,
                isManualAck: h,
                lastPinTimestamp: m,
                _oldestUnreadMessageId: f,
                oldestUnreadMessageIdStale: g,
                estimated: p,
                _mentionCount: A,
                flags: I,
                lastViewed: T,
            };
        let S = {
            channelId: t,
            type: n,
            _guildId: i,
            _persisted: o,
            _lastMessageId: d,
            _lastMessageTimestamp: _,
            _ackMessageId: u,
            _ackMessageTimestamp: c,
            ackPinTimestamp: E,
            lastPinTimestamp: m,
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
            loadedMessages: d,
            _lastMessageId: _,
            _lastMessageTimestamp: u,
            _ackMessageId: c,
            _ackMessageTimestamp: E,
            ackPinTimestamp: h,
            isManualAck: m,
            lastPinTimestamp: f,
            _oldestUnreadMessageId: g,
            oldestUnreadMessageIdStale: p,
            estimated: A,
            _unreadCount: I,
            _mentionCount: T,
            flags: S,
            lastViewed: N,
        } = e;
        (this.channelId = t),
            (this.type = n ?? es.P.CHANNEL),
            (this._guildId = i),
            (this._isThread = r ?? !1),
            null != s
                ? ((this._isActiveThread = s), (this._isJoinedThread = s))
                : ((this._isActiveThread = a ?? !1), (this._isJoinedThread = o ?? !1)),
            (this._persisted = !1 !== l),
            (this.loadedMessages = d ?? !1),
            (this._lastMessageId = _),
            (this._lastMessageTimestamp = u),
            (this._ackMessageId = c),
            (this._ackMessageTimestamp = E),
            (this.ackPinTimestamp = h),
            (this.isManualAck = m ?? !1),
            (this.lastPinTimestamp = f),
            (this._oldestUnreadMessageId = g),
            (this.oldestUnreadMessageIdStale = p ?? !1),
            (this.estimated = A ?? !1),
            (this._unreadCount = I ?? 0),
            (this._mentionCount = T),
            (this.flags = S),
            (this.lastViewed = N),
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
        let e = $.A.getMessages(this.channelId);
        if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
        if (!this.hasMentions()) return this.lastMessageId;
        let t = null,
            n = this.mentionCount,
            i = J.default.getCurrentUser();
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
        let e = j.A.getChannel(this.channelId);
        return (this._guildId = null != e ? e.getGuildId() : null);
    }
    isPrivate() {
        if (this.type !== es.P.CHANNEL) return !1;
        let e = j.A.getChannel(this.channelId);
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
            let e = J.default.getCurrentUser(),
                n = this.getAckTimestamp(),
                i = !1,
                r = !1,
                s = null,
                a = $.A.getMessages(this.channelId);
            a.forAll((a) => {
                i
                    ? (this.oldestUnreadMessageId = this._oldestUnreadMessageId ?? a.id)
                    : (i = a.id === this._ackMessageId),
                    F.default.extractTimestamp(a.id) > n
                        ? (this.unreadCount++, t && eR(a, e) && this.mentionCount++, (s = s ?? a.id))
                        : (r = !0);
            }),
                (this.estimated = !a.hasPresent() || (!(i || r) && a.length === this.unreadCount)),
                (this.oldestUnreadMessageId = this._oldestUnreadMessageId ?? s);
        }
        null != n && (this.mentionCount = n);
    }
    handleGuildEventRemoval(e, t) {
        if (F.default.compare(this.ackMessageId, t) >= 0) return;
        let n = A.Ay.getGuildScheduledEventsForGuild(e),
            i = this.getAckTimestamp();
        if (isNaN(i)) return;
        let r = this._ackMessageId ?? F.default.fromTimestamp(i),
            s = null,
            a = 0;
        n.forEach((e) => {
            (0, A.d6)(e) && (F.default.compare(e.id, s) > 0 && (s = e.id), F.default.compare(e.id, r) > 0 && a++);
        }),
            (this.lastMessageId = s),
            (this.mentionCount = a);
    }
    canTrackUnreads() {
        if (this.type !== es.P.CHANNEL) return !0;
        if ((this._isThread && !this._isActiveThread) || this._isResourceChannel) return !1;
        let e = j.A.getBasicChannel(this.channelId);
        return (
            null != e &&
            ("basicPermissions" in e
                ? U.A.has(e.basicPermissions, et.hVb.VIEW_CHANNEL)
                : !f.A.isChannelGated(this.guildId, this.channelId) || q.A.can(et.xBc.VIEW_CHANNEL, e))
        );
    }
    canBeUnread() {
        return (
            !(
                (this._isThread && !this._isJoinedThread) ||
                (0, S.k_)(this.channelId, [T.A, N.A]) ||
                (!this._isThread &&
                    (0, y.WW)(this._guildId) &&
                    (this._lastMessageTimestamp < eI ||
                        (!Q.Ay.isChannelOrParentOptedIn(this._guildId, this.channelId) &&
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
                (0, S.k_)(this.channelId, [T.A, N.A]) ||
                ((0, y.WW)(this._guildId) && this._lastMessageTimestamp < eI)
            ) && this.canTrackUnreads()
        );
    }
    getGuildChannelUnreadState(e, t, n, i, r) {
        if (
            t &&
            (this._lastMessageTimestamp < eI ||
                (!Q.Ay.isChannelRecordOrParentOptedIn(e) &&
                    !this.hasRecentlyVisitedAndRead() &&
                    this.mentionCount <= 0))
        )
            return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        if ("basicPermissions" in e) {
            if (!U.A.has(e.basicPermissions, et.hVb.VIEW_CHANNEL))
                return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        } else if (f.A.isChannelGated(this.guildId, this.channelId) && !q.A.can(et.xBc.VIEW_CHANNEL, e))
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
            this.getAckTimestamp() > eT &&
            k.A.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
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
        if (this.type !== es.P.CHANNEL || !this.canTrackUnreads()) return !1;
        if (null == e) {
            if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
            (this._persisted = !0),
                ev(() => d.Bo.post({ url: et.Rsh.PINS_ACK(this.channelId), oldFormErrors: !0, rejectWithError: !0 }));
        }
        let t = eC(e);
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
                eE && (this.ackedWhileCached = !0),
                (function (e) {
                    if (null == e) return;
                    let t = ew.get(e);
                    if (t.type !== es.P.CHANNEL) return;
                    let n = j.A.getChannel(t.channelId);
                    if (null == n || !n.isForumPost() || null == n.parent_id) return;
                    let i = n.parent_id,
                        r = ew.get(i);
                    L.A.hasLoaded(n.guild_id) &&
                        F.default
                            .keys(L.A.getThreadsForParent(n.guild_id, i))
                            .every((e) => e1.hasOpenedThread(e) || 0 > F.default.compare(e, r.ackMessageId)) &&
                        r.ack({
                            trackAnalytics: !0,
                            location: {
                                section: et.JJy.CHANNEL,
                                object: et.ZSU.ACK_FORUM_CHANNEL_NO_UNREAD_POSTS,
                                objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                        });
                })(this.channelId),
                r
                    ? (this.oldestUnreadMessageId = null)
                    : (null == this.outgoingAck &&
                          (this.outgoingAckTimer = setTimeout(
                              () => {
                                  this.type === es.P.CHANNEL ? this._ack(n, i) : this._nonChannelAck(),
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
                (this.type !== es.P.CHANNEL ||
                    !!this.loadedMessages ||
                    !!j.A.getChannel(this.channelId)?.isForumLikeChannel()))
        );
    }
    _ack(e, t) {
        let { outgoingAck: i } = this;
        if (null == i) return;
        let r = B.default.getId(),
            s = ec;
        this._persisted = !0;
        let a = this.recalculateFlags(),
            o = a === this.flags ? void 0 : a;
        ev(() =>
            d.Bo.post({
                url: et.Rsh.MESSAGE_ACK(this.channelId, i),
                body: { token: ec, last_viewed: this.lastViewed, flags: o },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
        ).then((i) => {
            null != i &&
                (ec === s && r === B.default.getId() && (ec = i.body.token),
                c.h.dispatch({ type: "MESSAGE_ACKED" }),
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
        if (this.type !== es.P.CHANNEL) return;
        let e = j.A.getChannel(this.channelId);
        if (null != e) return e.isThread() ? 2 : +(null != e.guild_id);
    }
    _nonChannelAck() {
        let e,
            { outgoingAck: t, channelId: n, type: i } = this;
        if (null != t) {
            switch (i) {
                case es.P.GUILD_HOME:
                case es.P.GUILD_EVENT:
                case es.P.GUILD_ONBOARDING_QUESTION:
                    e = et.Rsh.GUILD_FEATURE_ACK(n, t, i);
                    break;
                case es.P.NOTIFICATION_CENTER:
                case es.P.MESSAGE_REQUESTS:
                    e = et.Rsh.USER_NON_CHANNEL_ACK(t, i);
                    break;
                default:
                    return;
            }
            (this._persisted = !0), ev(() => d.Bo.post({ url: e, body: {}, oldFormErrors: !0, rejectWithError: !0 }));
        }
    }
    delete() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = j.A.getBasicChannel(this.channelId);
        eo.log("Deleting ReadState", this.channelId, this.type, {
            remote: e,
            persisted: this._persisted,
            channelMissing: null == t,
            isOld: eG(this, eA()),
            validType: null != t && M.A_.has(t.type),
            readableType: null != t && (0, M.Z_)(t.type),
            oldThreadCutoff: eA(),
            mentionCount: this.mentionCount,
            channelId: this.channelId,
            ackMessageId: this._ackMessageId,
            lastMessageId: this._lastMessageId,
        }),
            e &&
                this._persisted &&
                d.Bo.del({
                    url: et.Rsh.CHANNEL_ACK(this.channelId),
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
        if (0 !== Y.A.totalUnavailableGuilds) return !1;
        if (null != this.type && this.type !== es.P.CHANNEL)
            return !(function (e) {
                switch (e.type) {
                    case es.P.GUILD_HOME:
                    case es.P.GUILD_EVENT:
                    case es.P.GUILD_ONBOARDING_QUESTION:
                        return null != K.A.getGuild(e.channelId);
                    case es.P.NOTIFICATION_CENTER:
                        return F.default.cast(J.default.getCurrentUser()?.id) === e.channelId;
                    default:
                        return !0;
                }
            })(this);
        let s = j.A.getBasicChannel(this.channelId);
        if (null == s)
            if (eG(this, e)) return !0;
            else return !1;
        return (
            !!M.A_.has(s.type) &&
            (!(0, M.Z_)(s.type) ||
                (!(0, M.Gw)(s.type) &&
                    !(
                        !(
                            M.Le.has(s.type) &&
                            ((t = this),
                            (n = s),
                            (i = e),
                            !(null != (r = t.guildId) && L.A.isActive(r, n.parent_id, t.channelId)) && eG(t, i))
                        ) &&
                        (!(this.mentionCount > 0) || q.A.canBasicChannel(ed, s))
                    )))
        );
    }
    getAckTimestamp() {
        let e, t;
        if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
        if (this._isThread)
            return (
                (this._ackMessageTimestamp = eU(this.guildId, this.channelId)),
                (this._ackMessageId = F.default.fromTimestamp(this._ackMessageTimestamp)),
                this._ackMessageTimestamp
            );
        if (this.type === es.P.GUILD_EVENT || this.type === es.P.GUILD_ONBOARDING_QUESTION)
            e = K.A.getGuild(this.channelId);
        else if ((0, ei.jq)(this.channelId)) e = K.A.getGuild(this.guildId);
        else {
            let t = j.A.getChannel(this.channelId);
            if (null != t) {
                let n = t.getGuildId();
                e = K.A.getGuild(n);
            }
        }
        return (
            null != e
                ? isNaN((t = ex(e))) && (t = F.default.extractTimestamp(this.channelId))
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
        let e = j.A.getChannel(this.channelId);
        if (null == e) return eo.warn(`syncThreadSettings called with channel not in memory ${this.channelId}`), !1;
        let t = this.guildId,
            n = null != t && L.A.isActive(t, e.parent_id, this.channelId),
            i = b.A.hasJoined(this.channelId);
        return (
            (this._isActiveThread !== n || this._isJoinedThread !== i) &&
            ((this._isActiveThread = n), (this._isJoinedThread = i), !0)
        );
    }
    recordLastViewedTime() {
        let e = Math.ceil((Date.now() - F.DISCORD_EPOCH) / x.A.Millis.DAY);
        e !== this.lastViewed &&
            ((this.lastViewed = e),
            this.canTrackUnreads() && !this.hasUnread() && this.ack({ force: !0, trackAnalytics: !1 }));
    }
}
function eP(e) {
    e.forEach((e) => {
        if ((0, M.Z_)(e.type)) {
            let t = ew.get(e.id);
            (t._guildId = e.guild_id),
                (t.lastMessageId = e.lastMessageId),
                (t.lastPinTimestamp = eC(e.lastPinTimestamp)),
                (t._isResourceChannel = e.hasFlag(ei.lx.IS_GUILD_RESOURCE_CHANNEL)),
                M.Le.has(e.type) && t.syncThreadSettings();
        }
    });
}
function ek(e) {
    e.forEach((e) => {
        if ((0, M.Z_)(e.type)) {
            let t = ew.get(e.id);
            (t.lastMessageId = e.last_message_id),
                (t.lastPinTimestamp = eC(e.last_pin_timestamp)),
                (t._isResourceChannel = (0, o.Lt)(e.flags ?? 0, ei.lx.IS_GUILD_RESOURCE_CHANNEL)),
                M.Le.has(e.type) && t.syncThreadSettings();
        }
    });
}
function eM(e) {
    var t, n;
    (t = e),
        t.threads?.forEach((e) => {
            if (!M.A_.has(e.type)) return;
            let n = ew.get(e.id);
            (n.lastMessageId = e.lastMessageId),
                (n.lastPinTimestamp = eC(e.lastPinTimestamp)),
                (n._isThread = !0),
                (n._isActiveThread = !0),
                (n._isJoinedThread = null != e.member),
                null == n.ackMessageId && (n.ackMessageId = F.default.fromTimestamp(eU(t.id, e.id))),
                null == n.ackPinTimestamp && (n.ackPinTimestamp = eU(t.id, e.id));
        }),
        (function (e) {
            if (e.guild_scheduled_events?.length === 0 && null == ew.getIfExists(e.id, es.P.GUILD_EVENT)) return;
            let t = ew.get(e.id, es.P.GUILD_EVENT);
            t._guildId = e.id;
            let n = 0,
                i = null,
                r = t._ackMessageId ?? F.default.fromTimestamp(t.getAckTimestamp());
            e.guild_scheduled_events.forEach((e) => {
                F.default.compare(e.id, i) > 0 && (i = e.id), F.default.compare(e.id, r) > 0 && n++;
            }),
                (t.lastMessageId = i),
                (t.mentionCount = n);
        })(e),
        (n = e),
        (ew.get(n.id, es.P.GUILD_HOME).lastMessageId = F.default.fromTimestamp(
            a()(Date.now()).subtract(24, "h").valueOf(),
        )),
        (function (e) {
            let t = K.A.getGuild(e.id);
            if (null == t) return;
            let n = t?.latestOnboardingQuestionId;
            if (null == n) return;
            let i = ew.get(t.id, es.P.GUILD_ONBOARDING_QUESTION);
            (i._guildId = t.id), (i.lastMessageId = n);
        })(e);
}
function eU(e, t) {
    let n = j.A.getChannel(t),
        i = K.A.getGuild(e ?? n?.guild_id),
        r = n?.isForumPost() ? 0 : ex(i),
        s = (b.A.joinTimestamp(t)?.getTime() ?? 0) - 5e3;
    isNaN(s) && (s = -5e3);
    let a = n?.threadMetadata?.archiveTimestamp,
        o = null != a ? new Date(a).getTime() - 1 : 0;
    isNaN(o) && (o = 0);
    let l = Math.max(s, o);
    return (
        l <= 0 && (l = F.default.extractTimestamp(t) - 1),
        (isNaN(l) || l <= 0) && (l = 0),
        isNaN(r) ? l : Math.max(r, l)
    );
}
function ex(e) {
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
            F.default.compare(e.channelId, t) > 0 ||
            (null != e._ackMessageId && F.default.compare(e._ackMessageId, t) > 0) ||
            (null != e._lastMessageId && F.default.compare(e._lastMessageId, t) > 0)
        )
    );
}
function eV(e, t, n) {
    if (null == t) return !1;
    let i = ew.get(t);
    return !!eb(i, n) && i.ack({ trackAnalytics: !0, location: e });
}
function eF() {
    null != ef && clearTimeout(ef);
}
let eB = (0, r.throttle)((e) => {
    e.delete();
}, 100);
function eH(e) {
    for (let t of e) {
        let e = ew.get(t.id);
        null != t.last_message_id && (e.lastMessageId = t.last_message_id),
            null != t.last_pin_timestamp && (e.lastPinTimestamp = eC(t.last_pin_timestamp));
    }
}
function ej(e) {
    let { channelId: t } = e;
    ew.get(t).rebuildChannelState();
}
function eW(e) {
    let { threads: t } = e;
    ek(t);
}
function eY(e) {
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
                    .filter(G.Vq),
            );
        }),
            ek(n);
    });
}
function eK(e) {
    let t = J.default.getCurrentUser();
    return null != e.creator_id && null != t && e.creator_id === t.id;
}
function ez(e) {
    let { channel: t } = e;
    return ew.clear(t.id);
}
function e$() {
    let e = H.Ay.getCurrentSidebarChannelId(e_),
        t = !1;
    return (
        eu !== e
            ? ((t = eX(eu)), (eu = e))
            : (t =
                  eV(
                      {
                          section: et.JJy.CHANNEL,
                          object: et.ZSU.ACK_CHANNEL_SECTION_STORE_UPDATE,
                          objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
                      },
                      e,
                  ) || t),
        t
    );
}
function eq(e) {
    null == e || (ew.get(e).isManualAck = !1);
}
function eX(e) {
    if (null == e) return !1;
    let t = ew.get(e);
    return !t.hasUnread() && ((t.oldestUnreadMessageId = null), !0);
}
function eZ(e) {
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
        ((n = n ?? r.lastMessageId ?? F.default.fromTimestamp(r.getAckTimestamp())),
        r.ack({ messageId: n, local: i ?? !0, trackAnalytics: !1 }))
    );
}
class e0 extends l.Ay.Store {
    static displayName = "ReadStateStore";
    initialize() {
        W.A,
            J.default,
            K.A,
            Y.A,
            j.A,
            Z.A,
            $.A,
            q.A,
            h.A,
            L.A,
            b.A,
            H.Ay,
            A.Ay,
            p.A,
            f.A,
            Q.Ay,
            ee.A,
            R.A,
            T.A,
            k.A,
            N.A,
            this.waitFor(
                L.A,
                B.default,
                h.A,
                H.Ay,
                j.A,
                W.A,
                E.Ay,
                f.A,
                Y.A,
                A.Ay,
                K.A,
                z.A,
                b.A,
                $.A,
                R.A,
                q.A,
                X.A,
                Z.A,
                Q.Ay,
                k.A,
                J.default,
                ee.A,
            ),
            this.syncWith([H.Ay], e$);
    }
    getReadStatesByChannel() {
        return ew._readStates.get(es.P.CHANNEL) ?? new Map();
    }
    getForDebugging(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return ew.getIfExists(e, t);
    }
    getNotifCenterReadState(e) {
        return ew.getIfExists(e, es.P.NOTIFICATION_CENTER);
    }
    hasUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.canBeUnread() && e.hasUnread(), !1);
    }
    hasUnreadOrMentions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.canBeUnread() && e.hasUnreadOrMentions(), !1);
    }
    hasTrackedUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.canTrackUnreads() && e.hasUnread(), !1);
    }
    isForumPostUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.isForumPostUnread(), !1);
    }
    getUnreadCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return ew.getValue(e, t, (e) => (e.canBeUnread() ? e.unreadCount : 0), 0);
    }
    getMentionCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL,
            n = ew.getValue(e, t, (e) => (e.canHaveMentions() ? e.getMentionCount() : 0), 0);
        if ((0, m.A)(e) && n > 0) return 1;
        return n;
    }
    getIsMentionLowImportance(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return t === es.P.CHANNEL && ew.getValue(e, t, (e) => e.isMentionLowImportance, !1);
    }
    getGuildChannelUnreadState(e, t, n, i, r) {
        return ew.getValue(e.id, es.P.CHANNEL, (s) => s.getGuildChannelUnreadState(e, t, n, i, r), {
            mentionCount: 0,
            unread: !1,
            isMentionLowImportance: !1,
        });
    }
    hasRecentlyVisitedAndRead(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.hasRecentlyVisitedAndRead(), !1);
    }
    ackMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return ew.getValue(e, t, (e) => (e.canBeUnread() ? e.ackMessageId : null), null);
    }
    getTrackedAckMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return ew.getValue(e, t, (e) => (e.canTrackUnreads() ? e._ackMessageId : null), null);
    }
    lastMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.lastMessageId, null);
    }
    lastMessageTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.lastMessageTimestamp, 0);
    }
    lastPinTimestamp(e) {
        return ew.getValue(e, es.P.CHANNEL, (e) => e.lastPinTimestamp, null);
    }
    getOldestUnreadMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return ew.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadMessageId : null), null);
    }
    getOldestUnreadTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return ew.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0), 0);
    }
    isEstimated(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.estimated, !1);
    }
    hasOpenedThread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return ew.getValue(e, t, (e) => e._persisted, !1);
    }
    hasUnreadPins(e) {
        return ew.getValue(e, es.P.CHANNEL, (e) => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1);
    }
    isNewForumThread(e, t, n) {
        let i = ew.get(t);
        if (
            !0 === ew.get(e)._persisted ||
            null == i.ackMessageIdAtChannelSelect ||
            0 >= F.default.compare(e, i.ackMessageIdAtChannelSelect)
        )
            return !1;
        let r = ex(n);
        return F.default.extractTimestamp(e) > r;
    }
    getAllReadStates(e) {
        let t = [];
        return (
            ew.forEach((n) => {
                switch (n.type) {
                    case es.P.GUILD_HOME:
                    case es.P.GUILD_EVENT:
                    case es.P.GUILD_ONBOARDING_QUESTION:
                        null != K.A.getGuild(n.channelId) && t.push(n.serialize(e));
                        break;
                    case es.P.NOTIFICATION_CENTER:
                    case es.P.MESSAGE_REQUESTS:
                        F.default.cast(J.default.getCurrentUser()?.id) === n.channelId && t.push(n.serialize(e));
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
        let t = J.default.getCurrentUser()?.id;
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
let e1 = new e0(c.h, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: function (e) {
            let { changesByChannelId: t } = e;
            for (let e in t) {
                let n = t[e],
                    i = ew.getIfExists(e);
                if (null != i)
                    for (let e of [n.new_messages?.[0]].concat(n.modified_messages ?? []).filter(G.Vq))
                        1 === F.default.compare(e.id, i.lastMessageId) && (i.lastMessageId = e.id);
            }
        },
        CONNECTION_OPEN: function (e) {
            let { guilds: t, relationships: n, initialPrivateChannels: i, readState: r } = e;
            eN(),
                (ec = null),
                eE || r.partial || ew.clearAll(),
                (eE = !1),
                r.entries.forEach((e) => {
                    var t;
                    let n = e.read_state_type ?? es.P.CHANNEL;
                    n !== es.P.CHANNEL &&
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
                    let r = j.A.getBasicChannel(e.id);
                    null != r && (0, M.fT)(r.type) && (null == e.last_message_id || 0 === e.last_message_id)
                        ? (i.ackMessageId = F.default.fromTimestamp(eU(r.guild_id, r.id)))
                        : i.ackedWhileCached
                          ? -1 === F.default.compare(i.ackMessageId, e.last_message_id) &&
                            (i.ackMessageId = e.last_message_id)
                          : (i.ackMessageId = e.last_message_id),
                        (i.ackedWhileCached = void 0),
                        (i.ackPinTimestamp = eC(e.last_pin_timestamp)),
                        ew._mentionChannels.delete(i.channelId),
                        i._mentionCount > 0 && i.canHaveMentions() && ew._mentionChannels.add(i.channelId);
                }),
                ew.resetGuildSentinels();
            let s = J.default.getCurrentUser()?.id;
            for (let e of (null != s &&
                (ew.get(s, es.P.NOTIFICATION_CENTER).lastMessageId = F.default.fromTimestamp(Date.now())),
            (function (e) {
                let t = J.default.getCurrentUser();
                if (null == t) return;
                let n = ew.get(t.id, es.P.NOTIFICATION_CENTER);
                e.forEach((e) => {
                    if (null == e.since || e.type !== et.eA$.PENDING_INCOMING) return;
                    let t = new Date(e.since).getTime();
                    (null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0) < t &&
                        (n.mentionCount++, (n.lastMessageId = F.default.fromTimestamp(t)));
                });
            })(n),
            eP(i),
            t))
                eP("full_sync" === e.channels.op ? e.channels.items : e.channels.writes),
                    null != e.channelTimestampUpdates && eH(e.channelTimestampUpdates),
                    eM(e);
            eF(),
                (ef = setTimeout(
                    () =>
                        (function (e) {
                            let t = eA();
                            for (let n of e) {
                                let e = n.read_state_type ?? es.P.CHANNEL,
                                    i = ew.get(n.id, e);
                                i.shouldDeleteReadState(t) && eB(i);
                            }
                        })(r.entries),
                    10 * x.A.Millis.SECOND,
                ));
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { lazyPrivateChannels: t } = e;
            eP(t);
        },
        LOGOUT: eF,
        OVERLAY_INITIALIZE: function (e) {
            let { readStates: t, selectedChannelId: n } = e;
            eN(),
                (ec = null),
                (e_ = n),
                (eu = H.Ay.getCurrentSidebarChannelId(e_)),
                ew.clearAll(),
                t.forEach((e) => {
                    let t = ew.get(e.channelId);
                    t.deserializeForOverlay(e), t.type === es.P.CHANNEL && t.rebuildChannelState();
                });
        },
        CACHE_LOADED: function (e) {
            let { readStates: t } = e;
            (eE = !0),
                eN(),
                t.forEach((e) => {
                    let t = e.type ?? es.P.CHANNEL;
                    e.type = t;
                    let n = ew._readStates.get(t) ?? new Map();
                    n.set(e.channelId, (0, u.pp)(e, ew)), ew._readStates.has(t) || ew._readStates.set(t, n);
                });
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e,
                n = eA();
            ew.forEach((e) => {
                e.guildId === t.id && e.shouldDeleteReadState(n) && e.delete(!1);
            }),
                eP("full_sync" === t.channels.op ? t.channels.items : t.channels.writes),
                null != t.channelTimestampUpdates && eH(t.channelTimestampUpdates),
                eM(t);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let { channelId: t, isAfter: n, messages: i } = e,
                r = ew.get(t);
            r.loadedMessages = !0;
            let s = $.A.getMessages(t);
            null != s &&
                ((i.length > 0 && 1 === F.default.compare(i[0].id, r.ackMessageId) && 0 === r.unreadCount) ||
                s.hasPresent() ||
                s.jumpTargetId === r.ackMessageId
                    ? r.rebuildChannelState()
                    : n &&
                      null != r.ackMessageId &&
                      s.has(r.ackMessageId, !0) &&
                      ((r.unreadCount += i.length), null == r.oldestUnreadMessageId && r.rebuildChannelState())),
                ek(i.map((e) => e.thread).filter(G.Vq));
        },
        LOCAL_MESSAGES_LOADED: function (e) {
            let { channelId: t, messages: n } = e;
            if (!(0, O.K)() || 0 === n.length) return !1;
            let i = ew.get(t),
                r = n[0].id;
            (null == i.lastMessageId || F.default.compare(r, i.lastMessageId) > 0) &&
                ((i.lastMessageId = r), i.rebuildChannelState());
        },
        MESSAGE_CREATE: function (e) {
            let t,
                n,
                { channelId: r, message: s, isPushNotification: a } = e,
                o = ew.get(r),
                l = o.hasUnread(),
                d = null != o.lastMessageId && o.lastMessageId >= s.id;
            o.lastMessageId = s.id;
            let _ = J.default.getCurrentUser(),
                u = j.A.getBasicChannel(r);
            if (null != s.author && null != _ && s.author.id === _.id && !et.MRS.SELF_MENTIONABLE_SYSTEM.has(s.type))
                return null != o.outgoingAck && o.clearOutgoingAck(), eZ({ channelId: r, messageId: s.id, manual: !1 });
            let c = (0, I.Y)();
            if (c?.isReady() === !0) {
                let e = c.getCurrentRoute();
                h.A.getChatOpen(o.channelId)
                    ? (t = o.channelId)
                    : e?.name === "channel"
                      ? (t = e.params.channelId)
                      : e?.name === "guilds" && (t = e.params?.channelId);
            } else null == c && ((t = Z.A.getChannelId()), (n = H.Ay.getCurrentSidebarChannelId(t)));
            let E = t === r || n === r;
            if (E && eb(o) && !a) {
                let e = eD(!0, o.channelId) ? et.JJy.OVERLAY : et.JJy.CHANNEL;
                return o.ack({
                    messageId: s.id,
                    trackAnalytics: !0,
                    location: {
                        section: e,
                        object: et.ZSU.ACK_INCOMING_MESSAGE,
                        objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                });
            }
            if (eD(E && null != i && i.isInstanceLocked(), r))
                return o.ack({
                    messageId: s.id,
                    trackAnalytics: !0,
                    location: {
                        section: et.JJy.OVERLAY,
                        object: et.ZSU.ACK_INCOMING_MESSAGE,
                        objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                });
            if (
                (null == o.oldestUnreadMessageId || o.oldestUnreadMessageIdStale
                    ? (o.oldestUnreadMessageId = s.id)
                    : l || (0, D.i$)() === r || (o.oldestUnreadMessageId = s.id),
                !d && o.unreadCount++,
                !(
                    X.A.isBlockedOrIgnoredForMessage(s) ||
                    (s.type === et.lAJ.RECIPIENT_REMOVE && u?.type === et.rbe.GROUP_DM)
                ))
            ) {
                let { shouldMention: e, isMentionLowImportance: t } = (function (e, t, n) {
                    if (
                        null != t &&
                        (0, C.bG)({
                            rawMessage: e,
                            userId: t.id,
                            suppressEveryone: Q.Ay.isSuppressEveryoneEnabled(n.guildId),
                            suppressRoles: Q.Ay.isSuppressRolesEnabled(n.guildId),
                        })
                    )
                        return { shouldMention: !0, isMentionLowImportance: !1 };
                    let i = j.A.getChannel(e.channel_id);
                    if (eO(i)) return { shouldMention: !0, isMentionLowImportance: !1 };
                    if (Q.Ay.mentionOnAllMessages && null != i) {
                        if (i.isThread()) {
                            if ((0, P.l)(i) === ea.CP.ALL_MESSAGES)
                                return { shouldMention: !0, isMentionLowImportance: !0 };
                        } else if (
                            !i.isVocal() &&
                            !Q.Ay.isChannelMuted(i.guild_id, i.id) &&
                            Q.Ay.resolvedMessageNotifications(i) === et.orn.ALL_MESSAGES
                        )
                            return { shouldMention: !0, isMentionLowImportance: !0 };
                    }
                    return { shouldMention: !1, isMentionLowImportance: !1 };
                })(s, _, o);
                e && ((o.isMentionLowImportance = t), o.mentionCount++);
            }
        },
        MESSAGE_DELETE: ej,
        MESSAGE_DELETE_BULK: ej,
        MESSAGE_ACK: eZ,
        CHANNEL_ACK: function (e) {
            let { channelId: t, messageId: n, immediate: i = !1, force: r = !1, context: s, location: a } = e,
                o = ew.get(t),
                l = o.ack({
                    messageId: n,
                    local: s !== et.QCW,
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
                r = eC(n);
            return i.lastPinTimestamp !== r && ((i.lastPinTimestamp = r), !0);
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e,
                n = H.Ay.getCurrentSidebarChannelId(t),
                i = j.A.getChannel(t);
            if (null != i) {
                let e = ew.get(i.id);
                (e.ackMessageIdAtChannelSelect = e.ackMessageId ?? F.default.fromTimestamp(e.getAckTimestamp())),
                    e.recordLastViewedTime();
            }
            eq(e_), eq(eu);
            let r = !1;
            return (
                e_ !== t && ((r = eX(e_) || r), (r = eX(eu) || r)),
                (e_ === t || (i?.type != null && et.kvI.GUILD_THREADS_ONLY.has(i.type))) &&
                    (r =
                        eV(
                            {
                                section: et.JJy.CHANNEL,
                                object: et.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL,
                                objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            t,
                        ) || r),
                e_ === t &&
                    (r =
                        eV(
                            {
                                section: et.JJy.CHANNEL,
                                object: et.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR,
                                objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            n,
                        ) || r),
                (e_ = t),
                (eu = n),
                r
            );
        },
        OVERLAY_TEXT_CHAT_ACK_CHANNEL: function (e) {
            var t, n;
            let i;
            return (
                !__OVERLAY__ &&
                ((t = e.channelId),
                (n = et.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH),
                ((i = ew.get(t)).ackMessageIdAtChannelSelect =
                    i.ackMessageId ?? F.default.fromTimestamp(i.getAckTimestamp())),
                i.recordLastViewedTime(),
                eX(t),
                eV({ section: et.JJy.OVERLAY, object: n, objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC }, t),
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
                            section: et.JJy.CHANNEL,
                            object: et.ZSU.ACK_VOICE_CHANNEL_SELECT,
                            objectType: et.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                        },
                    })
                );
        },
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, M.Z_)(t.type)) return !1;
            let n = ew.get(t.id);
            (n.lastMessageId = t.lastMessageId), (n.lastPinTimestamp = eC(t.lastPinTimestamp));
        },
        THREAD_CREATE: function (e) {
            var t;
            let n,
                i,
                { channel: r } = e;
            (function (e) {
                if (!M.A_.has(e.type)) return;
                let t = ew.get(e.id);
                (t.lastMessageId = e.lastMessageId),
                    (t.lastPinTimestamp = eC(e.lastPinTimestamp)),
                    t.syncThreadSettings(),
                    e.ownerId === B.default.getId() && (t.loadedMessages = !0);
            })(r),
                (n = (t = r).parent_id),
                (ew.get(n).lastMessageId = t.id),
                (i = J.default.getCurrentUser()),
                t.ownerId === i?.id &&
                    ((ew.get(t.id)._persisted = !0), eZ({ channelId: n, messageId: t.id, manual: !1 }));
        },
        THREAD_UPDATE: function (e) {
            let { channel: t } = e;
            return !!M.A_.has(t.type) && ew.get(t.id).syncThreadSettings();
        },
        THREAD_LIST_SYNC: function (e) {
            let { threads: t } = e;
            t.forEach((e) => {
                if (!M.A_.has(e.type)) return;
                let t = ew.get(e.id);
                if (
                    ((t.lastMessageId = e.lastMessageId),
                    (t.lastPinTimestamp = eC(e.lastPinTimestamp)),
                    (t._isThread = !0),
                    (t._isActiveThread = !0),
                    (t._isJoinedThread = b.A.hasJoined(e.id)),
                    e.isForumPost())
                ) {
                    let t = ew.get(e.parent_id);
                    0 > F.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id);
                }
            });
        },
        LOAD_THREADS_SUCCESS: eW,
        LOAD_ARCHIVED_THREADS_SUCCESS: eW,
        SEARCH_MESSAGES_SUCCESS: eY,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: eY,
        THREAD_MEMBER_UPDATE: function (e) {
            let { id: t } = e;
            return ew.get(t).syncThreadSettings();
        },
        THREAD_MEMBERS_UPDATE: function (e) {
            return (0, w.k)(e) && ew.get(e.id).syncThreadSettings();
        },
        CHANNEL_DELETE: ez,
        THREAD_DELETE: ez,
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
                                    eV(
                                        {
                                            section: et.JJy.CHANNEL,
                                            object: et.ZSU.ACK_WINDOW_FOCUS,
                                            objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
            return eV(
                {
                    section: et.JJy.CHANNEL,
                    object: et.ZSU.ACK_CHANNEL_SCROLL,
                    objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                t,
                n,
            );
        },
        CURRENT_USER_UPDATE: function () {
            ec = null;
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
                i === et.QCW &&
                    (eh.push(
                        ...t.map((e) => ({
                            channel_id: e.channelId,
                            message_id: e.messageId,
                            read_state_type: e.readStateType,
                        })),
                    ),
                    em || ey(r));
        },
        ENABLE_AUTOMATIC_ACK: function (e) {
            let { channelId: t, windowId: n } = e;
            return (
                !eg.hasWindowId(t, n) &&
                (eg.addWindowId(t, n),
                eV(
                    {
                        section: et.JJy.CHANNEL,
                        object: et.ZSU.ENABLE_AUTOMATIC_ACK,
                        objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
                i = ew.get(t.guild_id, es.P.GUILD_EVENT);
            ((i.lastMessageId = t.id), eK(t))
                ? eQ({ type: "GUILD_FEATURE_ACK", id: n, ackType: es.P.GUILD_EVENT, ackedId: t.id, local: !1 })
                : !Q.Ay.isMuteScheduledEventsEnabled(n) && i.mentionCount++;
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
            let { guildScheduledEvent: t } = e,
                n = t.guild_id;
            if (eK(t) || ![er.XG.CANCELED, er.XG.COMPLETED].includes(t.status)) return !1;
            ew.get(n, es.P.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
        },
        GUILD_SCHEDULED_EVENT_DELETE: function (e) {
            let { guildScheduledEvent: t } = e,
                n = t.guild_id;
            if (eK(t)) return !1;
            ew.get(t.guild_id, es.P.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            return ew.clear(t.id, es.P.GUILD_EVENT);
        },
        GUILD_UPDATE: function (e) {
            let { guild: t } = e,
                n = t.latest_onboarding_question_id;
            if (null == n) return;
            let i = ew.get(t.id, es.P.GUILD_ONBOARDING_QUESTION);
            (i._guildId = t.id), (i.lastMessageId = n);
        },
        RESORT_THREADS: function (e) {
            let { channelId: t } = e;
            return eV(
                {
                    section: et.JJy.CHANNEL,
                    object: et.ZSU.ACK_RESORT_THREADS,
                    objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                t,
            );
        },
        CHANNEL_RTC_UPDATE_CHAT_OPEN: function (e) {
            let { channelId: t, chatOpen: n } = e;
        },
        DECAY_READ_STATES: eN,
        NOTIFICATION_CENTER_ITEM_CREATE: function (e) {
            let { item: t } = e,
                n = J.default.getCurrentUser()?.id;
            if (null == n) return !1;
            let i = ew.get(n, es.P.NOTIFICATION_CENTER);
            ((i.lastMessageId = t.id), R.A.active || 0) ? eJ(n, es.P.NOTIFICATION_CENTER, t.id, !1) : i.mentionCount++;
        },
        RELATIONSHIP_ADD: function (e) {
            let t = J.default.getCurrentUser();
            if (
                null == t ||
                null == e.relationship.since ||
                (e.relationship.type !== et.eA$.PENDING_INCOMING && e.relationship.type !== et.eA$.FRIEND)
            )
                return !1;
            let n = ew.get(t.id, es.P.NOTIFICATION_CENTER),
                i = e.relationship.type === et.eA$.FRIEND,
                r = i ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime();
            (null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0) < r &&
                ((n.lastMessageId = F.default.fromTimestamp(r)),
                R.A.active ? eJ(t.id, es.P.NOTIFICATION_CENTER, void 0, !1) : i ? n.mentionCount-- : n.mentionCount++);
        },
        RELATIONSHIP_REMOVE: function (e) {
            let t = J.default.getCurrentUser();
            if (null == t || null == e.relationship.since || e.relationship.type !== et.eA$.PENDING_INCOMING) return !1;
            let n = ew.get(t.id, es.P.NOTIFICATION_CENTER),
                i = new Date(e.relationship.since).getTime();
            (null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0) <= i &&
                (n.mentionCount = Math.max(0, n.mentionCount - 1));
        },
        NOTIFICATION_CENTER_ITEMS_ACK: function (e) {
            let { ids: t, optimistic: n } = e;
            if (n || R.A.active) return !1;
            let i = J.default.getCurrentUser()?.id;
            if (null == i) return !1;
            let r = ew.get(i, es.P.NOTIFICATION_CENTER);
            t.forEach((e) => {
                0 > F.default.compare(r.ackMessageId, e) && (r.mentionCount = Math.max(r.mentionCount - 1, 0));
            });
        },
        USER_NON_CHANNEL_ACK: function (e) {
            let { ackType: t, ackedId: n, local: i } = e,
                r = J.default.getCurrentUser()?.id;
            return null != r && eJ(r, t, n, i);
        },
        PASSIVE_UPDATE_V2: function (e) {
            let t = !1;
            for (let n of e.channels) {
                let e = ew.get(n.id),
                    i = eC(n.lastPinTimestamp);
                (e.lastMessageId !== n.lastMessageId || e.lastPinTimestamp !== i) &&
                    ((t = !0), (e.lastMessageId = n.lastMessageId), (e.lastPinTimestamp = i));
            }
            return t;
        },
        CLEAR_OLDEST_UNREAD_MESSAGE: function (e) {
            let { channelId: t } = e;
            return eX(t);
        },
        TRY_ACK: function (e) {
            let { channelId: t, location: n } = e;
            return eV(n, t);
        },
        MESSAGE_REQUEST_ACK: function (e) {
            let { ackedId: t } = e,
                n = J.default.getCurrentUser()?.id;
            if (null == n) return !1;
            let i = ew.get(n, es.P.MESSAGE_REQUESTS);
            if (t === i.ackMessageId) return !1;
            (i.ackMessageId = t), i.ack({ messageId: t, isExplicitUserAction: !0, trackAnalytics: !1 });
        },
        MESSAGE_REQUEST_CLEAR_ACK: function (e) {
            let t = J.default.getCurrentUser()?.id;
            if (null == t) return !1;
            let n = ew.get(t, es.P.MESSAGE_REQUESTS);
            if (null == n.ackMessageId) return !1;
            n.ackMessageId = void 0;
        },
        APP_STATE_UPDATE: function (e) {
            let { state: t } = e;
            return (
                t === et.g6G.ACTIVE &&
                eV(
                    {
                        section: et.JJy.CHANNEL,
                        object: et.ZSU.ACK_APP_FOREGROUND,
                        objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    Z.A.getChannelId(),
                )
            );
        },
    }),
    e2 = e1;
