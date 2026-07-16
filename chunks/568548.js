"use strict";
let i;
n.d(t, { Ay: () => e2, Wm: () => eO }), n(321073), n(938796);
var r = n(435558),
    a = n(989349),
    s = n.n(a),
    l = n(665260),
    o = n(17928),
    d = n(636537),
    c = n(451988),
    u = n(933681),
    _ = n(228366),
    E = n(933958);
n(183636);
var A = n(313961),
    h = n(343328),
    I = n(717125),
    f = n(626584),
    p = n(736056),
    T = n(698441),
    m = n(250953),
    g = n(380335),
    S = n(309199),
    N = n(157550),
    C = n(451919),
    R = n(280450),
    O = n(209489);
async function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        n = R.default.getId();
    for (let i = 0; i < t; i++)
        try {
            return await e();
        } catch (e) {
            if (i + 1 >= t) throw e;
            if ((await (0, c.BK)((i + 1) * 2e3), await O.A.awaitOnline(), n !== R.default.getId()))
                throw Error("User changed.");
        }
    throw Error("Unreachable code in networkAwareRetry");
}
var y = n(252431),
    D = n(491001),
    v = n(395504),
    b = n(206885),
    M = n(622794),
    P = n(970278),
    U = n(152007),
    w = n(882733),
    G = n(607508),
    x = n(617617),
    k = n(95701),
    F = n(799422),
    V = n(927813),
    B = n(403362),
    H = n(935208),
    j = n(761640),
    W = n(734057),
    Y = n(72314),
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
    ea = n(988794),
    es = n(790782),
    el = n(37411);
let eo = new f.A("ReadStateStore");
__OVERLAY__ && (i = n(184809).default);
let ed = () => !1;
!__OVERLAY__ && b.O && ({ isOverlayChannelVisible: ed } = n(267355));
let ec = en.hVb.VIEW_CHANNEL | en.hVb.READ_MESSAGE_HISTORY,
    eu = Q.Ay.getChannelId(),
    e_ = null,
    eE = null,
    eA = !1,
    eh = [],
    eI = !1,
    ef = null,
    ep = new (class {
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
            for (let [n, i] of H.default.entries(this.channelWindowIds)) i.has(e) && t.add(n);
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
            for (let [t, n] of H.default.entries(this.channelWindowIds)) e(t, n);
        }
    })(),
    eT = 30 * V.A.Millis.DAY;
function em() {
    return H.default.fromTimestamp(Date.now() - eT);
}
let eg = 0,
    eS = 0,
    eN = null;
function eC() {
    (eg = Date.now() - 7 * V.A.Millis.DAY),
        (eS = Date.now() - 3 * V.A.Millis.DAY),
        clearTimeout(eN),
        (eN = setTimeout(() => {
            _.h.dispatch({ type: "DECAY_READ_STATES" });
        }, +V.A.Millis.HOUR));
}
function eR(e) {
    if (null == e) return 0;
    let t = Date.parse(e);
    return isNaN(t) ? 0 : t;
}
function eO(e, t) {
    let n = W.A.getChannel(e.channel_id);
    return (
        !(null == n || X.A.isBlockedOrIgnoredForMessage(e)) &&
        !!(
            (0, C.Ay)({
                message: e,
                userId: t.id,
                suppressEveryone: J.Ay.isSuppressEveryoneEnabled(n.guild_id),
                suppressRoles: J.Ay.isSuppressRolesEnabled(n.guild_id),
            }) || eL(n)
        )
    );
}
function eL(e) {
    return null != e && e.isPrivate() && !J.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
}
async function ey(e) {
    if (0 === eh.length) {
        (eI = !1), e?.();
        return;
    }
    eI = !0;
    let t = eh.splice(0, 100);
    try {
        await L(() =>
            d.Bo.post({ url: en.Rsh.BULK_ACK, body: { read_states: t }, oldFormErrors: !0, rejectWithError: !1 }),
        );
    } catch (e) {
        (eh.length = 0), (eI = !1);
        return;
    }
    await (0, c.BK)(1e3), ey(e);
}
function eD(e, t) {
    return null != i && i.isInstanceFocused() && i.isPinned(en.uss.TEXT) ? e : null != t && ed(t);
}
function ev(e, t) {
    ee.default.getCurrentUser()?.hasAnyStaffLevel() && eo.log("STAFF-ACK-LOG:", t, e.channelId);
}
function eb(e, t) {
    if ((ev(e, "shouldAutomaticallyAck called"), e.type !== es.P.CHANNEL)) return ev(e, "not channel read state"), !1;
    let n = W.A.getChannel(e.channelId),
        i = null != n && n.isForumPost();
    if (
        null != E.Ay.getConnectedActivityLocation() &&
        E.Ay.getActivityPanelMode() === ei.Gd.PANEL &&
        E.Ay.getFocusedLayout() === ei.E8.NO_CHAT
    )
        return ev(e, "In activity"), !1;
    if (z.A.isIdle()) return ev(e, "Is idle"), !1;
    if (!e.canTrackUnreads()) return ev(e, "Cannot track unreads"), !1;
    if (n?.isForumLikeChannel() !== !0 && !ep.isAnyWindowFocused(e.channelId) && !eD(!0, e.channelId)) return !1;
    if (i && !e._persisted) return ev(e, "unpersisted forum post"), !0;
    if (!e.hasUnreadOrMentions()) return ev(e, "No unread or mentions"), !1;
    if (n?.isForumLikeChannel() === !0) return ev(e, "Forum-like channel"), !1;
    if (!(i && !e._isJoinedThread) && !Y.A.isAtBottom(e.channelId)) return ev(e, "Not at bottom"), !1;
    let r = A.A.getLayout(e.channelId);
    if (!A.A.getChatOpen(e.channelId) && (r === en.DUB.NO_CHAT || r === en.DUB.FULL_SCREEN))
        return ev(e, "Fullscreen video"), !1;
    if (!ep.isChannelAckable(e.channelId)) return ev(e, "Not ackable"), !1;
    let a = q.A.getMessages(e.channelId);
    return null == a || !a.ready || a.loadingMore
        ? (ev(e, "Still loading messages"), !1)
        : (0, M.oE)(e.channelId, t)
          ? (ev(e, "Acked"), !0)
          : (ev(e, "Chat not focused"), !1);
}
class eM {
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
        for (let t of eM._readStates.values()) for (let n of t.values()) if (!1 === e(n)) break;
    }
    static get(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL,
            n = eM._readStates.get(t)?.get(e);
        if (null == n) {
            n = new eM(e, t);
            let i = eM._readStates.get(t) ?? new Map();
            i.set(e, n), eM._readStates.has(t) || eM._readStates.set(t, i);
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL,
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0,
            r = this.getIfExists(e, t);
        return null == r ? i : n(r);
    }
    static clear(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL,
            n = eM._readStates.get(t);
        if (null == n) return !1;
        let i = n.delete(e);
        return i && eM._mentionChannels.delete(e), i;
    }
    static clearAll() {
        eM._readStates.clear(), eM._mentionChannels.clear();
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
            _isActiveThread: a,
            _isJoinedThread: s,
            _persisted: l,
            loadedMessages: o,
            _lastMessageId: d,
            _lastMessageTimestamp: c,
            _ackMessageId: u,
            _ackMessageTimestamp: _,
            ackPinTimestamp: E,
            isManualAck: A,
            lastPinTimestamp: h,
            _oldestUnreadMessageId: I,
            oldestUnreadMessageIdStale: f,
            estimated: p,
            _mentionCount: T,
            flags: m,
            lastViewed: g,
        } = this;
        if (e)
            return {
                channelId: t,
                type: n,
                _guildId: i,
                _isThread: r,
                _isActiveThread: a,
                _isJoinedThread: s,
                _persisted: l,
                loadedMessages: o,
                _lastMessageId: d,
                _lastMessageTimestamp: c,
                _ackMessageId: u,
                _ackMessageTimestamp: _,
                ackPinTimestamp: E,
                isManualAck: A,
                lastPinTimestamp: h,
                _oldestUnreadMessageId: I,
                oldestUnreadMessageIdStale: f,
                estimated: p,
                _mentionCount: T,
                flags: m,
                lastViewed: g,
            };
        let S = {
            channelId: t,
            type: n,
            _guildId: i,
            _persisted: l,
            _lastMessageId: d,
            _lastMessageTimestamp: c,
            _ackMessageId: u,
            _ackMessageTimestamp: _,
            ackPinTimestamp: E,
            lastPinTimestamp: h,
            _mentionCount: T,
            flags: m,
        };
        return (
            null != g && g > 0 && (S.lastViewed = g),
            r && ((S._isThread = r), (S._isActiveThread = a), (S._isJoinedThread = s)),
            S
        );
    }
    deserializeForOverlay(e) {
        let {
            channelId: t,
            type: n,
            _guildId: i,
            _isThread: r,
            _isActiveJoinedThread: a,
            _isActiveThread: s,
            _isJoinedThread: l,
            _persisted: o,
            loadedMessages: d,
            _lastMessageId: c,
            _lastMessageTimestamp: u,
            _ackMessageId: _,
            _ackMessageTimestamp: E,
            ackPinTimestamp: A,
            isManualAck: h,
            lastPinTimestamp: I,
            _oldestUnreadMessageId: f,
            oldestUnreadMessageIdStale: p,
            estimated: T,
            _unreadCount: m,
            _mentionCount: g,
            flags: S,
            lastViewed: N,
        } = e;
        (this.channelId = t),
            (this.type = n ?? es.P.CHANNEL),
            (this._guildId = i),
            (this._isThread = r ?? !1),
            null != a
                ? ((this._isActiveThread = a), (this._isJoinedThread = a))
                : ((this._isActiveThread = s ?? !1), (this._isJoinedThread = l ?? !1)),
            (this._persisted = !1 !== o),
            (this.loadedMessages = d ?? !1),
            (this._lastMessageId = c),
            (this._lastMessageTimestamp = u),
            (this._ackMessageId = _),
            (this._ackMessageTimestamp = E),
            (this.ackPinTimestamp = A),
            (this.isManualAck = h ?? !1),
            (this.lastPinTimestamp = I),
            (this._oldestUnreadMessageId = f),
            (this.oldestUnreadMessageIdStale = p ?? !1),
            (this.estimated = T ?? !1),
            (this._unreadCount = m ?? 0),
            (this._mentionCount = g),
            (this.flags = S),
            (this.lastViewed = N),
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
        (this._lastMessageId = e), (this._lastMessageTimestamp = null != e ? H.default.extractTimestamp(e) : 0);
    }
    get lastMessageTimestamp() {
        return this._lastMessageTimestamp;
    }
    get ackMessageId() {
        return this._ackMessageId;
    }
    set ackMessageId(e) {
        (this._ackMessageId = e), (this._ackMessageTimestamp = null != e ? H.default.extractTimestamp(e) : 0);
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
        let e = W.A.getChannel(this.channelId);
        return (this._guildId = null != e ? e.getGuildId() : null);
    }
    isPrivate() {
        if (this.type !== es.P.CHANNEL) return !1;
        let e = W.A.getChannel(this.channelId);
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
                a = null,
                s = q.A.getMessages(this.channelId);
            s.forAll((s) => {
                i
                    ? (this.oldestUnreadMessageId = this._oldestUnreadMessageId ?? s.id)
                    : (i = s.id === this._ackMessageId),
                    H.default.extractTimestamp(s.id) > n
                        ? (this.unreadCount++, t && eO(s, e) && this.mentionCount++, (a = a ?? s.id))
                        : (r = !0);
            }),
                (this.estimated = !s.hasPresent() || (!(i || r) && s.length === this.unreadCount)),
                (this.oldestUnreadMessageId = this._oldestUnreadMessageId ?? a);
        }
        null != n && (this.mentionCount = n);
    }
    handleGuildEventRemoval(e, t) {
        if (H.default.compare(this.ackMessageId, t) >= 0) return;
        let n = T.Ay.getGuildScheduledEventsForGuild(e),
            i = this.getAckTimestamp();
        if (isNaN(i)) return;
        let r = this._ackMessageId ?? H.default.fromTimestamp(i),
            a = null,
            s = 0;
        n.forEach((e) => {
            (0, T.d6)(e) && (H.default.compare(e.id, a) > 0 && (a = e.id), H.default.compare(e.id, r) > 0 && s++);
        }),
            (this.lastMessageId = a),
            (this.mentionCount = s);
    }
    canTrackUnreads() {
        if (this.type !== es.P.CHANNEL) return !0;
        if ((this._isThread && !this._isActiveThread) || this._isResourceChannel) return !1;
        let e = W.A.getBasicChannel(this.channelId);
        return (
            null != e &&
            ("basicPermissions" in e
                ? F.A.has(e.basicPermissions, en.hVb.VIEW_CHANNEL)
                : !I.A.isChannelGated(this.guildId, this.channelId) || Z.A.can(en.xBc.VIEW_CHANNEL, e))
        );
    }
    canBeUnread() {
        return (
            !(
                (this._isThread && !this._isJoinedThread) ||
                (0, S.k_)(this.channelId, [g.A, N.A]) ||
                (!this._isThread &&
                    (0, v.WW)(this._guildId) &&
                    (this._lastMessageTimestamp < eg ||
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
                (0, S.k_)(this.channelId, [g.A, N.A]) ||
                ((0, v.WW)(this._guildId) && this._lastMessageTimestamp < eg)
            ) && this.canTrackUnreads()
        );
    }
    getGuildChannelUnreadState(e, t, n, i, r) {
        if (
            t &&
            (this._lastMessageTimestamp < eg ||
                (!J.Ay.isChannelRecordOrParentOptedIn(e) &&
                    !this.hasRecentlyVisitedAndRead() &&
                    this.mentionCount <= 0))
        )
            return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        if ("basicPermissions" in e) {
            if (!F.A.has(e.basicPermissions, en.hVb.VIEW_CHANNEL))
                return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        } else if (I.A.isChannelGated(this.guildId, this.channelId) && !Z.A.can(en.xBc.VIEW_CHANNEL, e))
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
        if (this.type !== es.P.CHANNEL || !this.canTrackUnreads()) return !1;
        if (null == e) {
            if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
            (this._persisted = !0),
                L(() => d.Bo.post({ url: en.Rsh.PINS_ACK(this.channelId), oldFormErrors: !0, rejectWithError: !0 }));
        }
        let t = eR(e);
        return (this.ackPinTimestamp = 0 !== t ? t : this.lastPinTimestamp), !0;
    }
    ack(e) {
        let {
            messageId: t,
            location: n,
            trackAnalytics: i,
            local: r = !1,
            immediate: a = !1,
            force: s = !1,
            isExplicitUserAction: l = !1,
        } = e;
        if (!this._shouldAck(s, r, l) || (!s && !this.canTrackUnreads())) return !1;
        let o = this.hasMentions();
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
                eA && (this.ackedWhileCached = !0),
                (function (e) {
                    if (null == e) return;
                    let t = eM.get(e);
                    if (t.type !== es.P.CHANNEL) return;
                    let n = W.A.getChannel(t.channelId);
                    if (null == n || !n.isForumPost() || null == n.parent_id) return;
                    let i = n.parent_id,
                        r = eM.get(i);
                    P.A.hasLoaded(n.guild_id) &&
                        H.default
                            .keys(P.A.getThreadsForParent(n.guild_id, i))
                            .every((e) => e1.hasOpenedThread(e) || 0 > H.default.compare(e, r.ackMessageId)) &&
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
                                  this.type === es.P.CHANNEL ? this._ack(n, i) : this._nonChannelAck(),
                                      (this.outgoingAck = null),
                                      (this.outgoingAckTimer = null);
                              },
                              o || a ? 0 : 3e3,
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
                    !!W.A.getChannel(this.channelId)?.isForumLikeChannel()))
        );
    }
    _ack(e, t) {
        let { outgoingAck: i } = this;
        if (null == i) return;
        let r = R.default.getId(),
            a = eE;
        this._persisted = !0;
        let s = this.recalculateFlags(),
            l = s === this.flags ? void 0 : s;
        L(() =>
            d.Bo.post({
                url: en.Rsh.MESSAGE_ACK(this.channelId, i),
                body: { token: eE, last_viewed: this.lastViewed, flags: l },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
        ).then((i) => {
            null != i &&
                (eE === a && r === R.default.getId() && (eE = i.body.token),
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
        if (this.type !== es.P.CHANNEL) return;
        let e = W.A.getChannel(this.channelId);
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
                    e = en.Rsh.GUILD_FEATURE_ACK(n, t, i);
                    break;
                case es.P.NOTIFICATION_CENTER:
                case es.P.MESSAGE_REQUESTS:
                    e = en.Rsh.USER_NON_CHANNEL_ACK(t, i);
                    break;
                default:
                    return;
            }
            (this._persisted = !0), L(() => d.Bo.post({ url: e, body: {}, oldFormErrors: !0, rejectWithError: !0 }));
        }
    }
    delete() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = W.A.getBasicChannel(this.channelId);
        eo.log("Deleting ReadState", this.channelId, this.type, {
            remote: e,
            persisted: this._persisted,
            channelMissing: null == t,
            isOld: ek(this, em()),
            validType: null != t && k.A_.has(t.type),
            readableType: null != t && (0, k.Z_)(t.type),
            oldThreadCutoff: em(),
            mentionCount: this.mentionCount,
            channelId: this.channelId,
            ackMessageId: this._ackMessageId,
            lastMessageId: this._lastMessageId,
        }),
            e &&
                this._persisted &&
                d.Bo.del({
                    url: en.Rsh.CHANNEL_ACK(this.channelId),
                    body: { version: 2, read_state_type: this.type },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
            eM._readStates.get(this.type)?.delete(this.channelId),
            eM._mentionChannels.delete(this.channelId);
    }
    shouldDeleteReadState(e) {
        var t, n, i;
        let r;
        if (0 !== K.A.totalUnavailableGuilds) return !1;
        if (null != this.type && this.type !== es.P.CHANNEL)
            return !(function (e) {
                switch (e.type) {
                    case es.P.GUILD_HOME:
                    case es.P.GUILD_EVENT:
                    case es.P.GUILD_ONBOARDING_QUESTION:
                        return null != $.A.getGuild(e.channelId);
                    case es.P.NOTIFICATION_CENTER:
                        return H.default.cast(ee.default.getCurrentUser()?.id) === e.channelId;
                    default:
                        return !0;
                }
            })(this);
        let a = W.A.getBasicChannel(this.channelId);
        if (null == a)
            if (ek(this, e)) return !0;
            else return !1;
        return (
            !!k.A_.has(a.type) &&
            (!(0, k.Z_)(a.type) ||
                (!(0, k.Gw)(a.type) &&
                    !(
                        !(
                            k.Le.has(a.type) &&
                            ((t = this),
                            (n = a),
                            (i = e),
                            !(null != (r = t.guildId) && P.A.isActive(r, n.parent_id, t.channelId)) && ek(t, i))
                        ) &&
                        (!(this.mentionCount > 0) || Z.A.canBasicChannel(ec, a))
                    )))
        );
    }
    getAckTimestamp() {
        let e, t;
        if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
        if (this._isThread)
            return (
                (this._ackMessageTimestamp = eG(this.guildId, this.channelId)),
                (this._ackMessageId = H.default.fromTimestamp(this._ackMessageTimestamp)),
                this._ackMessageTimestamp
            );
        if (this.type === es.P.GUILD_EVENT || this.type === es.P.GUILD_ONBOARDING_QUESTION)
            e = $.A.getGuild(this.channelId);
        else if ((0, er.jq)(this.channelId)) e = $.A.getGuild(this.guildId);
        else {
            let t = W.A.getChannel(this.channelId);
            if (null != t) {
                let n = t.getGuildId();
                e = $.A.getGuild(n);
            }
        }
        return (
            null != e
                ? isNaN((t = ex(e))) && (t = H.default.extractTimestamp(this.channelId))
                : (t = H.default.extractTimestamp(this.channelId)),
            (this._ackMessageTimestamp = t),
            t
        );
    }
    get oldestUnreadTimestamp() {
        return null != this.oldestUnreadMessageId ? H.default.extractTimestamp(this.oldestUnreadMessageId) : 0;
    }
    syncThreadSettings() {
        this._isThread = !0;
        let e = W.A.getChannel(this.channelId);
        if (null == e) return eo.warn(`syncThreadSettings called with channel not in memory ${this.channelId}`), !1;
        let t = this.guildId,
            n = null != t && P.A.isActive(t, e.parent_id, this.channelId),
            i = U.A.hasJoined(this.channelId);
        return (
            (this._isActiveThread !== n || this._isJoinedThread !== i) &&
            ((this._isActiveThread = n), (this._isJoinedThread = i), !0)
        );
    }
    recordLastViewedTime() {
        let e = Math.ceil((Date.now() - H.DISCORD_EPOCH) / V.A.Millis.DAY);
        e !== this.lastViewed &&
            ((this.lastViewed = e),
            this.canTrackUnreads() && !this.hasUnread() && this.ack({ force: !0, trackAnalytics: !1 }));
    }
}
function eP(e) {
    e.forEach((e) => {
        if ((0, k.Z_)(e.type)) {
            let t = eM.get(e.id);
            (t._guildId = e.guild_id),
                (t.lastMessageId = e.lastMessageId),
                (t.lastPinTimestamp = eR(e.lastPinTimestamp)),
                (t._isResourceChannel = e.hasFlag(er.lx.IS_GUILD_RESOURCE_CHANNEL)),
                k.Le.has(e.type) && t.syncThreadSettings();
        }
    });
}
function eU(e) {
    e.forEach((e) => {
        if ((0, k.Z_)(e.type)) {
            let t = eM.get(e.id);
            (t.lastMessageId = e.last_message_id),
                (t.lastPinTimestamp = eR(e.last_pin_timestamp)),
                (t._isResourceChannel = (0, l.Lt)(e.flags ?? 0, er.lx.IS_GUILD_RESOURCE_CHANNEL)),
                k.Le.has(e.type) && t.syncThreadSettings();
        }
    });
}
function ew(e) {
    var t, n;
    (t = e),
        t.threads?.forEach((e) => {
            if (!k.A_.has(e.type)) return;
            let n = eM.get(e.id);
            (n.lastMessageId = e.lastMessageId),
                (n.lastPinTimestamp = eR(e.lastPinTimestamp)),
                (n._isThread = !0),
                (n._isActiveThread = !0),
                (n._isJoinedThread = null != e.member),
                null == n.ackMessageId && (n.ackMessageId = H.default.fromTimestamp(eG(t.id, e.id))),
                null == n.ackPinTimestamp && (n.ackPinTimestamp = eG(t.id, e.id));
        }),
        (function (e) {
            if (e.guild_scheduled_events?.length === 0 && null == eM.getIfExists(e.id, es.P.GUILD_EVENT)) return;
            let t = eM.get(e.id, es.P.GUILD_EVENT);
            t._guildId = e.id;
            let n = 0,
                i = null,
                r = t._ackMessageId ?? H.default.fromTimestamp(t.getAckTimestamp());
            e.guild_scheduled_events.forEach((e) => {
                H.default.compare(e.id, i) > 0 && (i = e.id), H.default.compare(e.id, r) > 0 && n++;
            }),
                (t.lastMessageId = i),
                (t.mentionCount = n);
        })(e),
        (n = e),
        (eM.get(n.id, es.P.GUILD_HOME).lastMessageId = H.default.fromTimestamp(
            s()(Date.now()).subtract(24, "h").valueOf(),
        )),
        (function (e) {
            let t = $.A.getGuild(e.id);
            if (null == t) return;
            let n = t?.latestOnboardingQuestionId;
            if (null == n) return;
            let i = eM.get(t.id, es.P.GUILD_ONBOARDING_QUESTION);
            (i._guildId = t.id), (i.lastMessageId = n);
        })(e);
}
function eG(e, t) {
    let n = W.A.getChannel(t),
        i = $.A.getGuild(e ?? n?.guild_id),
        r = n?.isForumPost() ? 0 : ex(i),
        a = (U.A.joinTimestamp(t)?.getTime() ?? 0) - 5e3;
    isNaN(a) && (a = -5e3);
    let s = n?.threadMetadata?.archiveTimestamp,
        l = null != s ? new Date(s).getTime() - 1 : 0;
    isNaN(l) && (l = 0);
    let o = Math.max(a, l);
    return (
        o <= 0 && (o = H.default.extractTimestamp(t) - 1),
        (isNaN(o) || o <= 0) && (o = 0),
        isNaN(r) ? o : Math.max(r, o)
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
function ek(e, t) {
    return (
        e.mentionCount > 0 ||
        !(
            H.default.compare(e.channelId, t) > 0 ||
            (null != e._ackMessageId && H.default.compare(e._ackMessageId, t) > 0) ||
            (null != e._lastMessageId && H.default.compare(e._lastMessageId, t) > 0)
        )
    );
}
function eF(e, t, n) {
    if (null == t) return !1;
    let i = eM.get(t);
    return !!eb(i, n) && i.ack({ trackAnalytics: !0, location: e });
}
function eV() {
    null != ef && clearTimeout(ef);
}
let eB = (0, r.throttle)((e) => {
    e.delete();
}, 100);
function eH(e) {
    for (let t of e) {
        let e = eM.get(t.id);
        null != t.last_message_id && (e.lastMessageId = t.last_message_id),
            null != t.last_pin_timestamp && (e.lastPinTimestamp = eR(t.last_pin_timestamp));
    }
}
function ej(e) {
    let { channelId: t } = e;
    eM.get(t).rebuildChannelState();
}
function eW(e) {
    let { threads: t } = e;
    eU(t);
}
function eY(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n } = e;
        t.forEach((e) => {
            eU(
                e
                    .map((e) => {
                        let { thread: t } = e;
                        return t;
                    })
                    .filter(B.Vq),
            );
        }),
            eU(n);
    });
}
function eK(e) {
    let t = ee.default.getCurrentUser();
    return null != e.creator_id && null != t && e.creator_id === t.id;
}
function e$(e) {
    let { channel: t } = e;
    return eM.clear(t.id);
}
function ez() {
    let e = j.Ay.getCurrentSidebarChannelId(eu),
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
    null == e || (eM.get(e).isManualAck = !1);
}
function eZ(e) {
    if (null == e) return !1;
    let t = eM.get(e);
    return !t.hasUnread() && ((t.oldestUnreadMessageId = null), !0);
}
function eX(e) {
    let { channelId: t, messageId: n, manual: i, newMentionCount: r } = e,
        a = eM.get(t);
    return i
        ? (a.rebuildChannelState(n, !0, r), a.clearOutgoingAck(), !0)
        : n !== a._ackMessageId && a.ack({ messageId: n, local: !0, trackAnalytics: !1 });
}
function eQ(e) {
    let { id: t, ackType: n, ackedId: i, local: r } = e;
    return eJ(t, n, i, r);
}
function eJ(e, t, n, i) {
    let r = eM.get(e, t);
    return (
        n !== r.ackMessageId &&
        r.lastMessageId !== r.ackMessageId &&
        (null != r.lastMessageId || 0 !== r.mentionCount) &&
        ((n = n ?? r.lastMessageId ?? H.default.fromTimestamp(r.getAckTimestamp())),
        r.ack({ messageId: n, local: i ?? !0, trackAnalytics: !1 }))
    );
}
class e0 extends o.Ay.Store {
    static displayName = "ReadStateStore";
    initialize() {
        Y.A,
            ee.default,
            $.A,
            K.A,
            W.A,
            Q.Ay,
            q.A,
            Z.A,
            A.A,
            P.A,
            U.A,
            j.Ay,
            T.Ay,
            p.A,
            I.A,
            J.Ay,
            et.A,
            y.A,
            g.A,
            x.A,
            N.A,
            this.waitFor(
                P.A,
                R.default,
                A.A,
                j.Ay,
                W.A,
                Y.A,
                E.Ay,
                I.A,
                K.A,
                T.Ay,
                $.A,
                z.A,
                U.A,
                q.A,
                y.A,
                Z.A,
                X.A,
                Q.Ay,
                J.Ay,
                x.A,
                ee.default,
                et.A,
            ),
            this.syncWith([j.Ay], ez);
    }
    getReadStatesByChannel() {
        return eM._readStates.get(es.P.CHANNEL) ?? new Map();
    }
    getForDebugging(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eM.getIfExists(e, t);
    }
    getNotifCenterReadState(e) {
        return eM.getIfExists(e, es.P.NOTIFICATION_CENTER);
    }
    hasUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.canBeUnread() && e.hasUnread(), !1);
    }
    hasUnreadOrMentions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.canBeUnread() && e.hasUnreadOrMentions(), !1);
    }
    hasTrackedUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.canTrackUnreads() && e.hasUnread(), !1);
    }
    isForumPostUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.isForumPostUnread(), !1);
    }
    getUnreadCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canBeUnread() ? e.unreadCount : 0), 0);
    }
    getMentionCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL,
            n = eM.getValue(e, t, (e) => (e.canHaveMentions() ? e.getMentionCount() : 0), 0);
        if ((0, h.A)(e) && n > 0) return 1;
        return n;
    }
    getIsMentionLowImportance(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return t === es.P.CHANNEL && eM.getValue(e, t, (e) => e.isMentionLowImportance, !1);
    }
    getGuildChannelUnreadState(e, t, n, i, r) {
        return eM.getValue(e.id, es.P.CHANNEL, (a) => a.getGuildChannelUnreadState(e, t, n, i, r), {
            mentionCount: 0,
            unread: !1,
            isMentionLowImportance: !1,
        });
    }
    hasRecentlyVisitedAndRead(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.hasRecentlyVisitedAndRead(), !1);
    }
    ackMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canBeUnread() ? e.ackMessageId : null), null);
    }
    getTrackedAckMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canTrackUnreads() ? e._ackMessageId : null), null);
    }
    lastMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.lastMessageId, null);
    }
    lastMessageTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.lastMessageTimestamp, 0);
    }
    lastPinTimestamp(e) {
        return eM.getValue(e, es.P.CHANNEL, (e) => e.lastPinTimestamp, null);
    }
    getOldestUnreadMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadMessageId : null), null);
    }
    getOldestUnreadTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0), 0);
    }
    isEstimated(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.estimated, !1);
    }
    hasOpenedThread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eM.getValue(e, t, (e) => e._persisted, !1);
    }
    hasUnreadPins(e) {
        return eM.getValue(e, es.P.CHANNEL, (e) => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1);
    }
    isNewForumThread(e, t, n) {
        let i = eM.get(t);
        if (
            !0 === eM.get(e)._persisted ||
            null == i.ackMessageIdAtChannelSelect ||
            0 >= H.default.compare(e, i.ackMessageIdAtChannelSelect)
        )
            return !1;
        let r = ex(n);
        return H.default.extractTimestamp(e) > r;
    }
    getAllReadStates(e) {
        let t = [];
        return (
            eM.forEach((n) => {
                switch (n.type) {
                    case es.P.GUILD_HOME:
                    case es.P.GUILD_EVENT:
                    case es.P.GUILD_ONBOARDING_QUESTION:
                        null != $.A.getGuild(n.channelId) && t.push(n.serialize(e));
                        break;
                    case es.P.NOTIFICATION_CENTER:
                    case es.P.MESSAGE_REQUESTS:
                        H.default.cast(ee.default.getCurrentUser()?.id) === n.channelId && t.push(n.serialize(e));
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
        let t = ee.default.getCurrentUser()?.id;
        return null == t ? null : eM.get(t, e).ackMessageId;
    }
    getSnapshot(e, t) {
        let n = eM.get(e);
        return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot;
    }
    getChannelIdsForWindowId(e) {
        return ep.getAllChannelIdsForWindowId(e);
    }
}
let e1 = new e0(_.h, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: function (e) {
            let { changesByChannelId: t } = e;
            for (let e in t) {
                let n = t[e],
                    i = eM.getIfExists(e);
                if (null != i)
                    for (let e of [n.new_messages?.[0]].concat(n.modified_messages ?? []).filter(B.Vq))
                        1 === H.default.compare(e.id, i.lastMessageId) && (i.lastMessageId = e.id);
            }
        },
        CONNECTION_OPEN: function (e) {
            let { guilds: t, relationships: n, initialPrivateChannels: i, readState: r } = e;
            eC(),
                (eE = null),
                eA || r.partial || eM.clearAll(),
                (eA = !1),
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
                    let i = eM.get(e.id, n);
                    (i._persisted = !0),
                        (i._mentionCount = e.mention_count ?? 0),
                        (i.flags = e.flags),
                        (i.lastViewed = e.last_viewed);
                    let r = W.A.getBasicChannel(e.id);
                    null != r && (0, k.fT)(r.type) && (null == e.last_message_id || 0 === e.last_message_id)
                        ? (i.ackMessageId = H.default.fromTimestamp(eG(r.guild_id, r.id)))
                        : i.ackedWhileCached
                          ? -1 === H.default.compare(i.ackMessageId, e.last_message_id) &&
                            (i.ackMessageId = e.last_message_id)
                          : (i.ackMessageId = e.last_message_id),
                        (i.ackedWhileCached = void 0),
                        (i.ackPinTimestamp = eR(e.last_pin_timestamp)),
                        eM._mentionChannels.delete(i.channelId),
                        i._mentionCount > 0 && i.canHaveMentions() && eM._mentionChannels.add(i.channelId);
                }),
                eM.resetGuildSentinels();
            let a = ee.default.getCurrentUser()?.id;
            for (let e of (null != a &&
                (eM.get(a, es.P.NOTIFICATION_CENTER).lastMessageId = H.default.fromTimestamp(Date.now())),
            (function (e) {
                let t = ee.default.getCurrentUser();
                if (null == t) return;
                let n = eM.get(t.id, es.P.NOTIFICATION_CENTER);
                e.forEach((e) => {
                    if (null == e.since || e.type !== en.eA$.PENDING_INCOMING) return;
                    let t = new Date(e.since).getTime();
                    (null != n.ackMessageId ? H.default.extractTimestamp(n.ackMessageId) : 0) < t &&
                        (n.mentionCount++, (n.lastMessageId = H.default.fromTimestamp(t)));
                });
            })(n),
            eP(i),
            t))
                eP("full_sync" === e.channels.op ? e.channels.items : e.channels.writes),
                    null != e.channelTimestampUpdates && eH(e.channelTimestampUpdates),
                    ew(e);
            eV(),
                (ef = setTimeout(
                    () =>
                        (function (e) {
                            let t = em();
                            for (let n of e) {
                                let e = n.read_state_type ?? es.P.CHANNEL,
                                    i = eM.get(n.id, e);
                                i.shouldDeleteReadState(t) && eB(i);
                            }
                        })(r.entries),
                    10 * V.A.Millis.SECOND,
                ));
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { lazyPrivateChannels: t } = e;
            eP(t);
        },
        LOGOUT: eV,
        OVERLAY_INITIALIZE: function (e) {
            let { readStates: t, selectedChannelId: n } = e;
            eC(),
                (eE = null),
                (eu = n),
                (e_ = j.Ay.getCurrentSidebarChannelId(eu)),
                eM.clearAll(),
                t.forEach((e) => {
                    let t = eM.get(e.channelId);
                    t.deserializeForOverlay(e), t.type === es.P.CHANNEL && t.rebuildChannelState();
                });
        },
        CACHE_LOADED: function (e) {
            let { readStates: t } = e;
            (eA = !0),
                eC(),
                t.forEach((e) => {
                    let t = e.type ?? es.P.CHANNEL;
                    e.type = t;
                    let n = eM._readStates.get(t) ?? new Map();
                    n.set(e.channelId, (0, u.pp)(e, eM)), eM._readStates.has(t) || eM._readStates.set(t, n);
                });
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e,
                n = em();
            eM.forEach((e) => {
                e.guildId === t.id && e.shouldDeleteReadState(n) && e.delete(!1);
            }),
                eP("full_sync" === t.channels.op ? t.channels.items : t.channels.writes),
                null != t.channelTimestampUpdates && eH(t.channelTimestampUpdates),
                ew(t);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let { channelId: t, isAfter: n, messages: i } = e,
                r = eM.get(t);
            (r.loadedMessages = !0), null == r.lastMessageId && i.length > 0 && (r.lastMessageId = i[0].id);
            let a = q.A.getMessages(t);
            null != a &&
                ((i.length > 0 && 1 === H.default.compare(i[0].id, r.ackMessageId) && 0 === r.unreadCount) ||
                a.hasPresent() ||
                a.jumpTargetId === r.ackMessageId
                    ? r.rebuildChannelState()
                    : n &&
                      null != r.ackMessageId &&
                      a.has(r.ackMessageId, !0) &&
                      ((r.unreadCount += i.length), null == r.oldestUnreadMessageId && r.rebuildChannelState())),
                eU(i.map((e) => e.thread).filter(B.Vq));
        },
        LOCAL_MESSAGES_LOADED: function (e) {
            let { channelId: t, messages: n } = e;
            if (!(0, D.K)() || 0 === n.length) return !1;
            let i = eM.get(t),
                r = n[0].id;
            (null == i.lastMessageId || H.default.compare(r, i.lastMessageId) > 0) &&
                ((i.lastMessageId = r), i.rebuildChannelState());
        },
        MESSAGE_CREATE: function (e) {
            let t,
                n,
                { channelId: r, message: a, isPushNotification: s } = e,
                l = eM.get(r),
                o = l.hasUnread(),
                d = null != l.lastMessageId && l.lastMessageId >= a.id;
            l.lastMessageId = a.id;
            let c = ee.default.getCurrentUser(),
                u = W.A.getBasicChannel(r);
            if (null != a.author && null != c && a.author.id === c.id && !en.MRS.SELF_MENTIONABLE_SYSTEM.has(a.type))
                return null != l.outgoingAck && l.clearOutgoingAck(), eX({ channelId: r, messageId: a.id, manual: !1 });
            let _ = (0, m.Y)();
            if (_?.isReady() === !0) {
                let e = _.getCurrentRoute();
                A.A.getChatOpen(l.channelId)
                    ? (t = l.channelId)
                    : e?.name === "channel"
                      ? (t = e.params.channelId)
                      : e?.name === "guilds" && (t = e.params?.channelId);
            } else null == _ && ((t = Q.Ay.getChannelId()), (n = j.Ay.getCurrentSidebarChannelId(t)));
            let E = t === r || n === r;
            if (E && eb(l) && !s) {
                let e = eD(!0, l.channelId) ? en.JJy.OVERLAY : en.JJy.CHANNEL;
                return l.ack({
                    messageId: a.id,
                    trackAnalytics: !0,
                    location: {
                        section: e,
                        object: en.ZSU.ACK_INCOMING_MESSAGE,
                        objectType: en.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                });
            }
            if (eD(E && null != i && i.isInstanceLocked(), r))
                return l.ack({
                    messageId: a.id,
                    trackAnalytics: !0,
                    location: {
                        section: en.JJy.OVERLAY,
                        object: en.ZSU.ACK_INCOMING_MESSAGE,
                        objectType: en.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                });
            if (
                (null == l.oldestUnreadMessageId || l.oldestUnreadMessageIdStale
                    ? (l.oldestUnreadMessageId = a.id)
                    : o || (0, M.i$)() === r || (l.oldestUnreadMessageId = a.id),
                !d && l.unreadCount++,
                !(
                    X.A.isBlockedOrIgnoredForMessage(a) ||
                    (a.type === en.lAJ.RECIPIENT_REMOVE && u?.type === en.rbe.GROUP_DM)
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
                    let i = W.A.getChannel(e.channel_id);
                    if (eL(i)) return { shouldMention: !0, isMentionLowImportance: !1 };
                    if (J.Ay.mentionOnAllMessages && null != i) {
                        if (i.isThread()) {
                            if ((0, G.l)(i) === el.CP.ALL_MESSAGES)
                                return { shouldMention: !0, isMentionLowImportance: !0 };
                        } else if (
                            !i.isVocal() &&
                            !J.Ay.isChannelMuted(i.guild_id, i.id) &&
                            J.Ay.resolvedMessageNotifications(i) === en.orn.ALL_MESSAGES
                        )
                            return { shouldMention: !0, isMentionLowImportance: !0 };
                    }
                    return { shouldMention: !1, isMentionLowImportance: !1 };
                })(a, c, l);
                e && ((l.isMentionLowImportance = t), l.mentionCount++);
            }
        },
        MESSAGE_DELETE: ej,
        MESSAGE_DELETE_BULK: ej,
        MESSAGE_ACK: eX,
        CHANNEL_ACK: function (e) {
            let { channelId: t, messageId: n, immediate: i = !1, force: r = !1, context: a, location: s } = e,
                l = eM.get(t),
                o = l.ack({
                    messageId: n,
                    local: a !== en.QCW,
                    immediate: i,
                    force: r,
                    isExplicitUserAction: !0,
                    location: s,
                    trackAnalytics: !0,
                });
            return null != n ? (l.rebuildChannelState(), !0) : o;
        },
        CHANNEL_LOCAL_ACK: function (e) {
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
        },
        CHANNEL_PINS_ACK: function (e) {
            let { channelId: t, timestamp: n } = e;
            return eM.get(t).ackPins(n);
        },
        CHANNEL_PINS_UPDATE: function (e) {
            let { channelId: t, lastPinTimestamp: n } = e,
                i = eM.get(t),
                r = eR(n);
            return i.lastPinTimestamp !== r && ((i.lastPinTimestamp = r), !0);
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e,
                n = j.Ay.getCurrentSidebarChannelId(t),
                i = W.A.getChannel(t);
            if (null != i) {
                let e = eM.get(i.id);
                (e.ackMessageIdAtChannelSelect = e.ackMessageId ?? H.default.fromTimestamp(e.getAckTimestamp())),
                    e.recordLastViewedTime();
            }
            eq(eu), eq(e_);
            let r = !1;
            return (
                eu !== t && ((r = eZ(eu) || r), (r = eZ(e_) || r)),
                (eu === t || (i?.type != null && en.kvI.GUILD_THREADS_ONLY.has(i.type))) &&
                    (r =
                        eF(
                            {
                                section: en.JJy.CHANNEL,
                                object: en.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL,
                                objectType: en.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            t,
                        ) || r),
                eu === t &&
                    (r =
                        eF(
                            {
                                section: en.JJy.CHANNEL,
                                object: en.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR,
                                objectType: en.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            n,
                        ) || r),
                (eu = t),
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
                ((i = eM.get(t)).ackMessageIdAtChannelSelect =
                    i.ackMessageId ?? H.default.fromTimestamp(i.getAckTimestamp())),
                i.recordLastViewedTime(),
                eZ(t),
                eF({ section: en.JJy.OVERLAY, object: n, objectType: en.AnalyticsObjectTypes.ACK_AUTOMATIC }, t),
                !0)
            );
        },
        VOICE_CHANNEL_SELECT: function (e) {
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
                            section: en.JJy.CHANNEL,
                            object: en.ZSU.ACK_VOICE_CHANNEL_SELECT,
                            objectType: en.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                        },
                    })
                );
        },
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, k.Z_)(t.type)) return !1;
            let n = eM.get(t.id);
            (n.lastMessageId = t.lastMessageId), (n.lastPinTimestamp = eR(t.lastPinTimestamp));
        },
        THREAD_CREATE: function (e) {
            var t;
            let n,
                i,
                { channel: r } = e;
            (function (e) {
                if (!k.A_.has(e.type)) return;
                let t = eM.get(e.id);
                (t.lastMessageId = e.lastMessageId),
                    (t.lastPinTimestamp = eR(e.lastPinTimestamp)),
                    t.syncThreadSettings(),
                    e.ownerId === R.default.getId() && (t.loadedMessages = !0);
            })(r),
                (n = (t = r).parent_id),
                (eM.get(n).lastMessageId = t.id),
                (i = ee.default.getCurrentUser()),
                t.ownerId === i?.id &&
                    ((eM.get(t.id)._persisted = !0), eX({ channelId: n, messageId: t.id, manual: !1 }));
        },
        THREAD_UPDATE: function (e) {
            let { channel: t } = e;
            return !!k.A_.has(t.type) && eM.get(t.id).syncThreadSettings();
        },
        THREAD_LIST_SYNC: function (e) {
            let { threads: t } = e;
            t.forEach((e) => {
                if (!k.A_.has(e.type)) return;
                let t = eM.get(e.id);
                if (
                    ((t.lastMessageId = e.lastMessageId),
                    (t.lastPinTimestamp = eR(e.lastPinTimestamp)),
                    (t._isThread = !0),
                    (t._isActiveThread = !0),
                    (t._isJoinedThread = U.A.hasJoined(e.id)),
                    e.isForumPost())
                ) {
                    let t = eM.get(e.parent_id);
                    0 > H.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id);
                }
            });
        },
        LOAD_THREADS_SUCCESS: eW,
        LOAD_ARCHIVED_THREADS_SUCCESS: eW,
        SEARCH_MESSAGES_SUCCESS: eY,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: eY,
        THREAD_MEMBER_UPDATE: function (e) {
            let { id: t } = e;
            return eM.get(t).syncThreadSettings();
        },
        THREAD_MEMBERS_UPDATE: function (e) {
            return (0, w.k)(e) && eM.get(e.id).syncThreadSettings();
        },
        CHANNEL_DELETE: e$,
        THREAD_DELETE: e$,
        WINDOW_FOCUS: function (e) {
            let t = !1;
            return (
                ep.forEachChannel((n, i) => {
                    i.has(e.windowId) &&
                        (t =
                            (function (e, t) {
                                if (null == e) return !1;
                                let n = eM.get(e);
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
            eE = null;
        },
        BULK_ACK: function (e) {
            var t;
            let { channels: n, context: i, onFinished: r } = e;
            (t = n.filter((e) => null != e.messageId && e1.hasUnreadOrMentions(e.channelId, e.readStateType))),
                t.forEach((e) => {
                    let { channelId: t, messageId: n, readStateType: i } = e;
                    eM.get(t, i).ack({
                        messageId: n,
                        local: !0,
                        immediate: void 0,
                        force: void 0,
                        isExplicitUserAction: !0,
                        trackAnalytics: !1,
                    });
                }),
                i === en.QCW &&
                    (eh.push(
                        ...t.map((e) => ({
                            channel_id: e.channelId,
                            message_id: e.messageId,
                            read_state_type: e.readStateType,
                        })),
                    ),
                    eI || ey(r));
        },
        ENABLE_AUTOMATIC_ACK: function (e) {
            let { channelId: t, windowId: n } = e;
            return (
                !ep.hasWindowId(t, n) &&
                (ep.addWindowId(t, n),
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
            return ep.removeWindowId(t, n), !1;
        },
        GUILD_FEATURE_ACK: eQ,
        GUILD_SCHEDULED_EVENT_CREATE: function (e) {
            let { guildScheduledEvent: t } = e,
                n = t.guild_id,
                i = eM.get(t.guild_id, es.P.GUILD_EVENT);
            ((i.lastMessageId = t.id), eK(t))
                ? eQ({ type: "GUILD_FEATURE_ACK", id: n, ackType: es.P.GUILD_EVENT, ackedId: t.id, local: !1 })
                : !J.Ay.isMuteScheduledEventsEnabled(n) && i.mentionCount++;
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
            let { guildScheduledEvent: t } = e,
                n = t.guild_id;
            if (eK(t) || ![ea.XG.CANCELED, ea.XG.COMPLETED].includes(t.status)) return !1;
            eM.get(n, es.P.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
        },
        GUILD_SCHEDULED_EVENT_DELETE: function (e) {
            let { guildScheduledEvent: t } = e,
                n = t.guild_id;
            if (eK(t)) return !1;
            eM.get(t.guild_id, es.P.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            return eM.clear(t.id, es.P.GUILD_EVENT);
        },
        GUILD_UPDATE: function (e) {
            let { guild: t } = e,
                n = t.latest_onboarding_question_id;
            if (null == n) return;
            let i = eM.get(t.id, es.P.GUILD_ONBOARDING_QUESTION);
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
            let i = eM.get(n, es.P.NOTIFICATION_CENTER);
            ((i.lastMessageId = t.id), y.A.active || 0) ? eJ(n, es.P.NOTIFICATION_CENTER, t.id, !1) : i.mentionCount++;
        },
        RELATIONSHIP_ADD: function (e) {
            let t = ee.default.getCurrentUser();
            if (
                null == t ||
                null == e.relationship.since ||
                (e.relationship.type !== en.eA$.PENDING_INCOMING && e.relationship.type !== en.eA$.FRIEND)
            )
                return !1;
            let n = eM.get(t.id, es.P.NOTIFICATION_CENTER),
                i = e.relationship.type === en.eA$.FRIEND,
                r = i ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime();
            (null != n.ackMessageId ? H.default.extractTimestamp(n.ackMessageId) : 0) < r &&
                ((n.lastMessageId = H.default.fromTimestamp(r)),
                y.A.active ? eJ(t.id, es.P.NOTIFICATION_CENTER, void 0, !1) : i ? n.mentionCount-- : n.mentionCount++);
        },
        RELATIONSHIP_REMOVE: function (e) {
            let t = ee.default.getCurrentUser();
            if (null == t || null == e.relationship.since || e.relationship.type !== en.eA$.PENDING_INCOMING) return !1;
            let n = eM.get(t.id, es.P.NOTIFICATION_CENTER),
                i = new Date(e.relationship.since).getTime();
            (null != n.ackMessageId ? H.default.extractTimestamp(n.ackMessageId) : 0) <= i &&
                (n.mentionCount = Math.max(0, n.mentionCount - 1));
        },
        NOTIFICATION_CENTER_ITEMS_ACK: function (e) {
            let { ids: t, optimistic: n } = e;
            if (n || y.A.active) return !1;
            let i = ee.default.getCurrentUser()?.id;
            if (null == i) return !1;
            let r = eM.get(i, es.P.NOTIFICATION_CENTER);
            t.forEach((e) => {
                0 > H.default.compare(r.ackMessageId, e) && (r.mentionCount = Math.max(r.mentionCount - 1, 0));
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
                let e = eM.get(n.id),
                    i = eR(n.lastPinTimestamp);
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
            let i = eM.get(n, es.P.MESSAGE_REQUESTS);
            if (t === i.ackMessageId) return !1;
            (i.ackMessageId = t), i.ack({ messageId: t, isExplicitUserAction: !0, trackAnalytics: !1 });
        },
        MESSAGE_REQUEST_CLEAR_ACK: function (e) {
            let t = ee.default.getCurrentUser()?.id;
            if (null == t) return !1;
            let n = eM.get(t, es.P.MESSAGE_REQUESTS);
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
                    Q.Ay.getChannelId(),
                )
            );
        },
    }),
    e2 = e1;
