"use strict";
let r;
n.d(t, { Ay: () => t5, Wm: () => eD }), n(321073), n(938796);
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
    C = n(491001),
    R = n(395504),
    O = n(206885),
    b = n(622794),
    D = n(970278),
    L = n(152007),
    w = n(882733),
    M = n(607508),
    x = n(617617),
    P = n(95701),
    k = n(799422),
    U = n(927813),
    G = n(403362),
    F = n(209489),
    V = n(661191),
    B = n(961350),
    H = n(761640),
    j = n(734057),
    Y = n(72314),
    W = n(919638),
    K = n(71393),
    $ = n(885576),
    z = n(320501),
    q = n(576705),
    Z = n(994500),
    X = n(309010),
    Q = n(543465),
    J = n(287809),
    ee = n(531685),
    et = n(652215),
    en = n(5867),
    er = n(746080),
    ei = n(988794),
    es = n(790782),
    ea = n(37411);
let eo = new E.A("ReadStateStore"),
    el = 2;
__OVERLAY__ && (r = n(256415).default);
let eu = () => !1;
!__OVERLAY__ && O.O && ({ isOverlayChannelVisible: eu } = n(267355));
let ec = et.hVb.VIEW_CHANNEL | et.hVb.READ_MESSAGE_HISTORY,
    ed = 100,
    e_ = 1,
    ef = X.A.getChannelId(),
    ep = null,
    eh = null,
    em = !1,
    eE = [],
    eg = !1,
    eA = null;
class eI {
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
        for (let [n, r] of V.default.entries(this.channelWindowIds)) r.has(e) && t.add(n);
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
        for (let [t, n] of V.default.entries(this.channelWindowIds)) e(t, n);
    }
}
let eT = new eI(),
    eS = 30 * U.A.Millis.DAY;
function ey() {
    return V.default.fromTimestamp(Date.now() - eS);
}
let ev = 0,
    eN = 0,
    eC = null;
function eR() {
    (ev = Date.now() - 7 * U.A.Millis.DAY),
        (eN = Date.now() - 3 * U.A.Millis.DAY),
        clearTimeout(eC),
        (eC = setTimeout(() => {
            _.h.dispatch({ type: "DECAY_READ_STATES" });
        }, +U.A.Millis.HOUR));
}
function eO(e) {
    if (null == e) return 0;
    let t = Date.parse(e);
    return isNaN(t) ? 0 : t;
}
function eb(e) {
    return {
        id: e.id,
        read_state_type: e.read_state_type,
        mention_count: e.badge_count,
        last_message_id: e.last_acked_id,
    };
}
function eD(e, t) {
    let n = j.A.getChannel(e.channel_id);
    return (
        !(null == n || Z.A.isBlockedOrIgnoredForMessage(e)) &&
        !!(
            (0, v.Ay)({
                message: e,
                userId: t.id,
                suppressEveryone: Q.Ay.isSuppressEveryoneEnabled(n.guild_id),
                suppressRoles: Q.Ay.isSuppressRolesEnabled(n.guild_id),
            }) || eL(n)
        )
    );
}
function eL(e) {
    return null != e && e.isPrivate() && !Q.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
}
async function ew(e) {
    if (0 === eE.length) {
        (eg = !1), e?.();
        return;
    }
    eg = !0;
    let t = eE.splice(0, ed);
    await ex(() =>
        u.Bo.post({ url: et.Rsh.BULK_ACK, body: { read_states: t }, oldFormErrors: !0, rejectWithError: !1 }),
    ),
        await (0, c.BK)(1e3 * e_),
        ew(e);
}
let eM = 3;
async function ex(e) {
    let t = B.default.getId();
    for (let n = 0; n < eM; n++)
        try {
            return await e();
        } catch (e) {
            if (
                (eo.error("", e),
                n + 1 < eM && (await (0, c.BK)((n + 1) * 2e3), await F.A.awaitOnline(), t !== B.default.getId()))
            )
                return Promise.reject(Error("User changed."));
        }
}
function eP(e, t) {
    return null != r && r.isInstanceFocused() && r.isPinned(et.uss.TEXT) ? e : null != t && eu(t);
}
function ek(e, t) {
    J.default.getCurrentUser()?.hasAnyStaffLevel() && eo.log("STAFF-ACK-LOG:", t, e.channelId);
}
function eU(e, t) {
    if ((ek(e, "shouldAutomaticallyAck called"), e.type !== es.P.CHANNEL)) return ek(e, "not channel read state"), !1;
    let n = j.A.getChannel(e.channelId),
        r = null != n && n.isForumPost();
    if (
        null != f.Ay.getConnectedActivityLocation() &&
        f.Ay.getActivityPanelMode() === en.Gd.PANEL &&
        f.Ay.getFocusedLayout() === en.E8.NO_CHAT
    )
        return ek(e, "In activity"), !1;
    if ($.A.isIdle()) return ek(e, "Is idle"), !1;
    if (!e.canTrackUnreads()) return ek(e, "Cannot track unreads"), !1;
    if (n?.isForumLikeChannel() !== !0 && !eT.isAnyWindowFocused(e.channelId) && !eP(!0, e.channelId)) return !1;
    if (r && !e._persisted) return ek(e, "unpersisted forum post"), !0;
    if (!e.hasUnreadOrMentions()) return ek(e, "No unread or mentions"), !1;
    if (n?.isForumLikeChannel() === !0) return ek(e, "Forum-like channel"), !1;
    if (!(r && !e._isJoinedThread) && !Y.A.isAtBottom(e.channelId)) return ek(e, "Not at bottom"), !1;
    let i = p.A.getLayout(e.channelId);
    if (!p.A.getChatOpen(e.channelId) && (i === et.DUB.NO_CHAT || i === et.DUB.FULL_SCREEN))
        return ek(e, "Fullscreen video"), !1;
    if (!eT.isChannelAckable(e.channelId)) return ek(e, "Not ackable"), !1;
    let s = z.A.getMessages(e.channelId);
    return null == s || !s.ready || s.loadingMore
        ? (ek(e, "Still loading messages"), !1)
        : (0, b.oE)(e.channelId, t)
          ? (ek(e, "Acked"), !0)
          : (ek(e, "Chat not focused"), !1);
}
class eG {
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
        for (let t of eG._readStates.values()) for (let n of t.values()) if (!1 === e(n)) break;
    }
    static get(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL,
            n = eG._readStates.get(t)?.get(e);
        if (null == n) {
            n = new eG(e, t);
            let r = eG._readStates.get(t) ?? new Map();
            r.set(e, n), eG._readStates.has(t) || eG._readStates.set(t, r);
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
        return eG._readStates.get(t)?.get(e);
    }
    static getMentionChannelIds() {
        let e = [];
        for (let t of eG._mentionChannels) {
            let n = eG.getIfExists(t);
            null != n && n.canHaveMentions() ? e.push(t) : eG._mentionChannels.delete(t);
        }
        return e;
    }
    static getValue(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = this.getIfExists(e, t);
        return null == i ? r : n(i);
    }
    static clear(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL,
            n = eG._readStates.get(t);
        if (null == n) return !1;
        let r = n.delete(e);
        return r && eG._mentionChannels.delete(e), r;
    }
    static clearAll() {
        eG._readStates.clear(), eG._mentionChannels.clear();
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
            (this.type = n ?? es.P.CHANNEL),
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
            eG._mentionChannels.delete(this.channelId),
            this._mentionCount > 0 && this.canHaveMentions() && eG._mentionChannels.add(this.channelId);
    }
    incrementGuildUnreadsSentinel() {
        null != this._guildId && eG.getGuildSentinels(this._guildId).unreadsSentinel++;
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
        (this._lastMessageId = e), (this._lastMessageTimestamp = null != e ? V.default.extractTimestamp(e) : 0);
    }
    get lastMessageTimestamp() {
        return this._lastMessageTimestamp;
    }
    get ackMessageId() {
        return this._ackMessageId;
    }
    set ackMessageId(e) {
        (this._ackMessageId = e), (this._ackMessageTimestamp = null != e ? V.default.extractTimestamp(e) : 0);
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
            eG._mentionChannels.delete(this.channelId),
            this._mentionCount > 0 && this.canHaveMentions() && eG._mentionChannels.add(this.channelId);
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
            r = J.default.getCurrentUser();
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
                r = !1,
                i = !1,
                s = null,
                a = z.A.getMessages(this.channelId);
            a.forAll((a) => {
                r
                    ? (this.oldestUnreadMessageId = this._oldestUnreadMessageId ?? a.id)
                    : (r = a.id === this._ackMessageId),
                    V.default.extractTimestamp(a.id) > n
                        ? (this.unreadCount++, t && eD(a, e) && this.mentionCount++, (s = s ?? a.id))
                        : (i = !0);
            }),
                (this.estimated = !a.hasPresent() || (!(r || i) && a.length === this.unreadCount)),
                (this.oldestUnreadMessageId = this._oldestUnreadMessageId ?? s);
        }
        null != n && (this.mentionCount = n);
    }
    handleGuildEventRemoval(e, t) {
        if (V.default.compare(this.ackMessageId, t) >= 0) return;
        let n = A.Ay.getGuildScheduledEventsForGuild(e),
            r = this.getAckTimestamp();
        if (isNaN(r)) return;
        let i = this._ackMessageId ?? V.default.fromTimestamp(r),
            s = null,
            a = 0;
        n.forEach((e) => {
            (0, A.d6)(e) && (V.default.compare(e.id, s) > 0 && (s = e.id), V.default.compare(e.id, i) > 0 && a++);
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
                ? k.A.has(e.basicPermissions, et.hVb.VIEW_CHANNEL)
                : !m.A.isChannelGated(this.guildId, this.channelId) || q.A.can(et.xBc.VIEW_CHANNEL, e))
        );
    }
    canBeUnread() {
        return (
            !(
                (this._isThread && !this._isJoinedThread) ||
                (0, S.k_)(this.channelId, [T.A, y.A]) ||
                (!this._isThread &&
                    (0, R.WW)(this._guildId) &&
                    (this._lastMessageTimestamp < ev ||
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
                (0, S.k_)(this.channelId, [T.A, y.A]) ||
                ((0, R.WW)(this._guildId) && this._lastMessageTimestamp < ev)
            ) && this.canTrackUnreads()
        );
    }
    getGuildChannelUnreadState(e, t, n, r, i) {
        if (
            t &&
            (this._lastMessageTimestamp < ev ||
                (!Q.Ay.isChannelRecordOrParentOptedIn(e) &&
                    !this.hasRecentlyVisitedAndRead() &&
                    this.mentionCount <= 0))
        )
            return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        if ("basicPermissions" in e) {
            if (!k.A.has(e.basicPermissions, et.hVb.VIEW_CHANNEL))
                return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        } else if (m.A.isChannelGated(this.guildId, this.channelId) && !q.A.can(et.xBc.VIEW_CHANNEL, e))
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
            this.getAckTimestamp() > eN &&
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
                ex(() => u.Bo.post({ url: et.Rsh.PINS_ACK(this.channelId), oldFormErrors: !0, rejectWithError: !0 }));
        }
        let t = eO(e);
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
                em && (this.ackedWhileCached = !0),
                e0(this.channelId),
                i
                    ? (this.oldestUnreadMessageId = null)
                    : (null == this.outgoingAck &&
                          (this.outgoingAckTimer = setTimeout(
                              () => {
                                  this.type === es.P.CHANNEL ? this._ack(n, r) : this._nonChannelAck(),
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
        let { outgoingAck: r } = this;
        if (null == r) return;
        let i = B.default.getId(),
            s = eh;
        this._persisted = !0;
        let a = this.recalculateFlags(),
            o = a === this.flags ? void 0 : a;
        ex(() =>
            u.Bo.post({
                url: et.Rsh.MESSAGE_ACK(this.channelId, r),
                body: { token: eh, last_viewed: this.lastViewed, flags: o },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
        ).then((r) => {
            null != r &&
                (eh === s && i === B.default.getId() && (eh = r.body.token),
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
        let e = j.A.getChannel(this.channelId);
        if (null != e) return e.isThread() ? 2 : +(null != e.guild_id);
    }
    _nonChannelAck() {
        let e,
            { outgoingAck: t, channelId: n, type: r } = this;
        if (null != t) {
            switch (r) {
                case es.P.GUILD_HOME:
                case es.P.GUILD_EVENT:
                case es.P.GUILD_ONBOARDING_QUESTION:
                    e = et.Rsh.GUILD_FEATURE_ACK(n, t, r);
                    break;
                case es.P.NOTIFICATION_CENTER:
                case es.P.MESSAGE_REQUESTS:
                    e = et.Rsh.USER_NON_CHANNEL_ACK(t, r);
                    break;
                default:
                    return;
            }
            (this._persisted = !0), ex(() => u.Bo.post({ url: e, body: {}, oldFormErrors: !0, rejectWithError: !0 }));
        }
    }
    delete() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = j.A.getBasicChannel(this.channelId);
        eo.log("Deleting ReadState", this.channelId, this.type, {
            remote: e,
            persisted: this._persisted,
            channelMissing: null == t,
            isOld: eX(this, ey()),
            validType: null != t && P.A_.has(t.type),
            readableType: null != t && (0, P.Z_)(t.type),
            oldThreadCutoff: ey(),
            mentionCount: this.mentionCount,
            channelId: this.channelId,
            ackMessageId: this._ackMessageId,
            lastMessageId: this._lastMessageId,
        }),
            e &&
                this._persisted &&
                u.Bo.del({
                    url: et.Rsh.CHANNEL_ACK(this.channelId),
                    body: { version: el, read_state_type: this.type },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
            eG._readStates.get(this.type)?.delete(this.channelId),
            eG._mentionChannels.delete(this.channelId);
    }
    shouldDeleteReadState(e) {
        if (0 !== W.A.totalUnavailableGuilds) return !1;
        if (null != this.type && this.type !== es.P.CHANNEL) return !eQ(this);
        let t = j.A.getBasicChannel(this.channelId);
        if (null == t)
            if (eX(this, e)) return !0;
            else return !1;
        return (
            !!P.A_.has(t.type) &&
            (!(0, P.Z_)(t.type) ||
                (!(0, P.Gw)(t.type) &&
                    !(
                        !(P.Le.has(t.type) && eZ(this, t, e)) &&
                        (!(this.mentionCount > 0) || q.A.canBasicChannel(ec, t))
                    )))
        );
    }
    getAckTimestamp() {
        let e, t;
        if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
        if (this._isThread)
            return (
                (this._ackMessageTimestamp = ez(this.guildId, this.channelId)),
                (this._ackMessageId = V.default.fromTimestamp(this._ackMessageTimestamp)),
                this._ackMessageTimestamp
            );
        if (this.type === es.P.GUILD_EVENT || this.type === es.P.GUILD_ONBOARDING_QUESTION)
            e = K.A.getGuild(this.channelId);
        else if ((0, er.jq)(this.channelId)) e = K.A.getGuild(this.guildId);
        else {
            let t = j.A.getChannel(this.channelId);
            if (null != t) {
                let n = t.getGuildId();
                e = K.A.getGuild(n);
            }
        }
        return (
            null != e
                ? isNaN((t = eq(e))) && (t = V.default.extractTimestamp(this.channelId))
                : (t = V.default.extractTimestamp(this.channelId)),
            (this._ackMessageTimestamp = t),
            t
        );
    }
    get oldestUnreadTimestamp() {
        return null != this.oldestUnreadMessageId ? V.default.extractTimestamp(this.oldestUnreadMessageId) : 0;
    }
    syncThreadSettings() {
        this._isThread = !0;
        let e = j.A.getChannel(this.channelId);
        if (null == e) return eo.warn(`syncThreadSettings called with channel not in memory ${this.channelId}`), !1;
        let t = this.guildId,
            n = null != t && D.A.isActive(t, e.parent_id, this.channelId),
            r = L.A.hasJoined(this.channelId);
        return (
            (this._isActiveThread !== n || this._isJoinedThread !== r) &&
            ((this._isActiveThread = n), (this._isJoinedThread = r), !0)
        );
    }
    recordLastViewedTime() {
        let e = Math.ceil((Date.now() - V.DISCORD_EPOCH) / U.A.Millis.DAY);
        e !== this.lastViewed &&
            ((this.lastViewed = e),
            this.canTrackUnreads() && !this.hasUnread() && this.ack({ force: !0, trackAnalytics: !1 }));
    }
}
function eF(e) {
    e.forEach((e) => {
        if ((0, P.Z_)(e.type)) {
            let t = eG.get(e.id);
            (t._guildId = e.guild_id),
                (t.lastMessageId = e.lastMessageId),
                (t.lastPinTimestamp = eO(e.lastPinTimestamp)),
                (t._isResourceChannel = e.hasFlag(er.lx.IS_GUILD_RESOURCE_CHANNEL)),
                P.Le.has(e.type) && t.syncThreadSettings();
        }
    });
}
function eV(e) {
    e.forEach((e) => {
        if ((0, P.Z_)(e.type)) {
            let t = eG.get(e.id);
            (t.lastMessageId = e.last_message_id),
                (t.lastPinTimestamp = eO(e.last_pin_timestamp)),
                (t._isResourceChannel = (0, o.Lt)(e.flags ?? 0, er.lx.IS_GUILD_RESOURCE_CHANNEL)),
                P.Le.has(e.type) && t.syncThreadSettings();
        }
    });
}
function eB(e) {
    eW(e), eK(e), eY(e), e$(e);
}
function eH(e) {
    ej(e);
}
function ej(e) {
    let t = J.default.getCurrentUser();
    if (null == t) return !1;
    let n = eG.get(t.id, es.P.NOTIFICATION_CENTER);
    e.forEach((e) => {
        if (null == e.since || e.type !== et.eA$.PENDING_INCOMING) return;
        let t = new Date(e.since).getTime();
        (null != n.ackMessageId ? V.default.extractTimestamp(n.ackMessageId) : 0) < t &&
            (n.mentionCount++, (n.lastMessageId = V.default.fromTimestamp(t)));
    });
}
function eY(e) {
    let t = 24;
    eG.get(e.id, es.P.GUILD_HOME).lastMessageId = V.default.fromTimestamp(a()(Date.now()).subtract(t, "h").valueOf());
}
function eW(e) {
    e.threads?.forEach((t) => {
        if (!P.A_.has(t.type)) return;
        let n = eG.get(t.id);
        (n.lastMessageId = t.lastMessageId),
            (n.lastPinTimestamp = eO(t.lastPinTimestamp)),
            (n._isThread = !0),
            (n._isActiveThread = !0),
            (n._isJoinedThread = null != t.member),
            null == n.ackMessageId && (n.ackMessageId = V.default.fromTimestamp(ez(e.id, t.id))),
            null == n.ackPinTimestamp && (n.ackPinTimestamp = ez(e.id, t.id));
    });
}
function eK(e) {
    if (e.guild_scheduled_events?.length === 0 && null == eG.getIfExists(e.id, es.P.GUILD_EVENT)) return;
    let t = eG.get(e.id, es.P.GUILD_EVENT);
    t._guildId = e.id;
    let n = 0,
        r = null,
        i = t._ackMessageId ?? V.default.fromTimestamp(t.getAckTimestamp());
    e.guild_scheduled_events.forEach((e) => {
        V.default.compare(e.id, r) > 0 && (r = e.id), V.default.compare(e.id, i) > 0 && n++;
    }),
        (t.lastMessageId = r),
        (t.mentionCount = n);
}
function e$(e) {
    let t = K.A.getGuild(e.id);
    if (null == t) return;
    let n = t?.latestOnboardingQuestionId;
    if (null == n) return;
    let r = eG.get(t.id, es.P.GUILD_ONBOARDING_QUESTION);
    (r._guildId = t.id), (r.lastMessageId = n);
}
function ez(e, t) {
    let n = j.A.getChannel(t),
        r = K.A.getGuild(e ?? n?.guild_id),
        i = n?.isForumPost() ? 0 : eq(r),
        s = (L.A.joinTimestamp(t)?.getTime() ?? 0) - 5e3;
    isNaN(s) && (s = -5e3);
    let a = n?.threadMetadata?.archiveTimestamp,
        o = null != a ? new Date(a).getTime() - 1 : 0;
    isNaN(o) && (o = 0);
    let l = Math.max(s, o);
    return (
        l <= 0 && (l = V.default.extractTimestamp(t) - 1),
        (isNaN(l) || l <= 0) && (l = 0),
        isNaN(i) ? l : Math.max(i, l)
    );
}
function eq(e) {
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
function eZ(e, t, n) {
    let r = e.guildId;
    return !(null != r && D.A.isActive(r, t.parent_id, e.channelId)) && eX(e, n);
}
function eX(e, t) {
    return (
        e.mentionCount > 0 ||
        !(
            V.default.compare(e.channelId, t) > 0 ||
            (null != e._ackMessageId && V.default.compare(e._ackMessageId, t) > 0) ||
            (null != e._lastMessageId && V.default.compare(e._lastMessageId, t) > 0)
        )
    );
}
function eQ(e) {
    switch (e.type) {
        case es.P.GUILD_HOME:
        case es.P.GUILD_EVENT:
        case es.P.GUILD_ONBOARDING_QUESTION:
            return null != K.A.getGuild(e.channelId);
        case es.P.NOTIFICATION_CENTER:
            return V.default.cast(J.default.getCurrentUser()?.id) === e.channelId;
        default:
            return !0;
    }
}
function eJ(e, t, n) {
    if (null == t) return !1;
    let r = eG.get(t);
    return !!eU(r, n) && r.ack({ trackAnalytics: !0, location: e });
}
function e0(e) {
    if (null == e) return;
    let t = eG.get(e);
    if (t.type !== es.P.CHANNEL) return;
    let n = j.A.getChannel(t.channelId);
    if (null == n || !n.isForumPost() || null == n.parent_id) return;
    let r = n.parent_id,
        i = eG.get(r);
    D.A.hasLoaded(n.guild_id) &&
        V.default
            .keys(D.A.getThreadsForParent(n.guild_id, r))
            .every((e) => t4.hasOpenedThread(e) || 0 > V.default.compare(e, i.ackMessageId)) &&
        i.ack({
            trackAnalytics: !0,
            location: {
                section: et.JJy.CHANNEL,
                object: et.ZSU.ACK_FORUM_CHANNEL_NO_UNREAD_POSTS,
                objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
        });
}
function e1(e) {
    let { guilds: t, relationships: n, initialPrivateChannels: r, readState: i } = e;
    eR(),
        (eh = null),
        em || i.partial || eG.clearAll(),
        (em = !1),
        i.entries.forEach((e) => {
            let t = e.read_state_type ?? es.P.CHANNEL;
            t !== es.P.CHANNEL && (e = eb(e));
            let n = eG.get(e.id, t);
            (n._persisted = !0),
                (n._mentionCount = e.mention_count ?? 0),
                (n.flags = e.flags),
                (n.lastViewed = e.last_viewed);
            let r = j.A.getBasicChannel(e.id);
            null != r && (0, P.fT)(r.type) && (null == e.last_message_id || 0 === e.last_message_id)
                ? (n.ackMessageId = V.default.fromTimestamp(ez(r.guild_id, r.id)))
                : n.ackedWhileCached
                  ? -1 === V.default.compare(n.ackMessageId, e.last_message_id) && (n.ackMessageId = e.last_message_id)
                  : (n.ackMessageId = e.last_message_id),
                (n.ackedWhileCached = void 0),
                (n.ackPinTimestamp = eO(e.last_pin_timestamp)),
                eG._mentionChannels.delete(n.channelId),
                n._mentionCount > 0 && n.canHaveMentions() && eG._mentionChannels.add(n.channelId);
        }),
        eG.resetGuildSentinels();
    let s = J.default.getCurrentUser()?.id;
    for (let e of (null != s &&
        (eG.get(s, es.P.NOTIFICATION_CENTER).lastMessageId = V.default.fromTimestamp(Date.now())),
    eH(n),
    eF(r),
    t))
        eF("full_sync" === e.channels.op ? e.channels.items : e.channels.writes),
            null != e.channelTimestampUpdates && e4(e.channelTimestampUpdates),
            eB(e);
    e2(), (eA = setTimeout(() => e6(i.entries), 10 * U.A.Millis.SECOND));
}
function e2() {
    null != eA && clearTimeout(eA);
}
let e3 = (0, i.throttle)((e) => {
    e.delete();
}, 100);
function e6(e) {
    let t = ey();
    for (let n of e) {
        let e = n.read_state_type ?? es.P.CHANNEL,
            r = eG.get(n.id, e);
        r.shouldDeleteReadState(t) && e3(r);
    }
}
function e4(e) {
    for (let t of e) {
        let e = eG.get(t.id);
        null != t.last_message_id && (e.lastMessageId = t.last_message_id),
            null != t.last_pin_timestamp && (e.lastPinTimestamp = eO(t.last_pin_timestamp));
    }
}
function e5(e) {
    let { lazyPrivateChannels: t } = e;
    eF(t);
}
function e7(e) {
    let { readStates: t, selectedChannelId: n } = e;
    eR(),
        (eh = null),
        (ef = n),
        (ep = H.Ay.getCurrentSidebarChannelId(ef)),
        eG.clearAll(),
        t.forEach((e) => {
            let t = eG.get(e.channelId);
            t.deserializeForOverlay(e), t.type === es.P.CHANNEL && t.rebuildChannelState();
        });
}
function e8(e) {
    let { guild: t } = e,
        n = ey();
    eG.forEach((e) => {
        e.guildId === t.id && e.shouldDeleteReadState(n) && e.delete(!1);
    }),
        eF("full_sync" === t.channels.op ? t.channels.items : t.channels.writes),
        null != t.channelTimestampUpdates && e4(t.channelTimestampUpdates),
        eB(t);
}
function e9(e) {
    let { channelId: t, isAfter: n, messages: r } = e,
        i = eG.get(t);
    i.loadedMessages = !0;
    let s = z.A.getMessages(t);
    null != s &&
        ((r.length > 0 && 1 === V.default.compare(r[0].id, i.ackMessageId) && 0 === i.unreadCount) ||
        s.hasPresent() ||
        s.jumpTargetId === i.ackMessageId
            ? i.rebuildChannelState()
            : n &&
              null != i.ackMessageId &&
              s.has(i.ackMessageId, !0) &&
              ((i.unreadCount += r.length), null == i.oldestUnreadMessageId && i.rebuildChannelState())),
        eV(r.map((e) => e.thread).filter(G.Vq));
}
function te(e) {
    let { channelId: t, messages: n } = e;
    if (!(0, C.K)() || 0 === n.length) return !1;
    let r = eG.get(t),
        i = n[0].id;
    (null == r.lastMessageId || V.default.compare(i, r.lastMessageId) > 0) &&
        ((r.lastMessageId = i), r.rebuildChannelState());
}
function tt(e) {
    let { channelId: t } = e;
    eG.get(t).rebuildChannelState();
}
function tn(e) {
    let t,
        n,
        { channelId: i, message: s, isPushNotification: a } = e,
        o = eG.get(i),
        l = o.hasUnread(),
        u = null != o.lastMessageId && o.lastMessageId >= s.id;
    o.lastMessageId = s.id;
    let c = J.default.getCurrentUser(),
        d = j.A.getBasicChannel(i);
    if (null != s.author && null != c && s.author.id === c.id && !et.MRS.SELF_MENTIONABLE_SYSTEM.has(s.type))
        return null != o.outgoingAck && o.clearOutgoingAck(), tG({ channelId: i, messageId: s.id, manual: !1 });
    let _ = (0, I.Y)();
    if (_?.isReady() === !0) {
        let e = _.getCurrentRoute();
        p.A.getChatOpen(o.channelId)
            ? (t = o.channelId)
            : e?.name === "channel"
              ? (t = e.params.channelId)
              : e?.name === "guilds" && (t = e.params?.channelId);
    } else null == _ && ((t = X.A.getChannelId()), (n = H.Ay.getCurrentSidebarChannelId(t)));
    let f = t === i || n === i;
    if (f && eU(o) && !a) {
        let e = eP(!0, o.channelId) ? et.JJy.OVERLAY : et.JJy.CHANNEL;
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
    if (eP(f && null != r && r.isInstanceLocked(), i))
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
            : l || (0, b.i$)() === i || (o.oldestUnreadMessageId = s.id),
        !u && o.unreadCount++,
        !(Z.A.isBlockedOrIgnoredForMessage(s) || (s.type === et.lAJ.RECIPIENT_REMOVE && d?.type === et.rbe.GROUP_DM)))
    ) {
        let { shouldMention: e, isMentionLowImportance: t } = tr(s, c, o);
        e && ((o.isMentionLowImportance = t), o.mentionCount++);
    }
}
function tr(e, t, n) {
    if (
        null != t &&
        (0, v.bG)({
            rawMessage: e,
            userId: t.id,
            suppressEveryone: Q.Ay.isSuppressEveryoneEnabled(n.guildId),
            suppressRoles: Q.Ay.isSuppressRolesEnabled(n.guildId),
        })
    )
        return { shouldMention: !0, isMentionLowImportance: !1 };
    let r = j.A.getChannel(e.channel_id);
    if (eL(r)) return { shouldMention: !0, isMentionLowImportance: !1 };
    if (Q.Ay.mentionOnAllMessages && null != r) {
        if (r.isThread()) {
            if ((0, M.l)(r) === ea.CP.ALL_MESSAGES) return { shouldMention: !0, isMentionLowImportance: !0 };
        } else if (
            !r.isVocal() &&
            !Q.Ay.isChannelMuted(r.guild_id, r.id) &&
            Q.Ay.resolvedMessageNotifications(r) === et.orn.ALL_MESSAGES
        )
            return { shouldMention: !0, isMentionLowImportance: !0 };
    }
    return { shouldMention: !1, isMentionLowImportance: !1 };
}
function ti(e) {
    let { channel: t } = e;
    if (!(0, P.Z_)(t.type)) return !1;
    let n = eG.get(t.id);
    (n.lastMessageId = t.lastMessageId), (n.lastPinTimestamp = eO(t.lastPinTimestamp));
}
function ts(e) {
    let { channel: t } = e;
    ta(t), to(t);
}
function ta(e) {
    if (!P.A_.has(e.type)) return !1;
    let t = eG.get(e.id);
    (t.lastMessageId = e.lastMessageId),
        (t.lastPinTimestamp = eO(e.lastPinTimestamp)),
        t.syncThreadSettings(),
        e.ownerId === B.default.getId() && (t.loadedMessages = !0);
}
function to(e) {
    let t = e.parent_id;
    eG.get(t).lastMessageId = e.id;
    let n = J.default.getCurrentUser();
    if (e.ownerId === n?.id) return (eG.get(e.id)._persisted = !0), tG({ channelId: t, messageId: e.id, manual: !1 });
}
function tl(e) {
    let { channel: t } = e;
    return !!P.A_.has(t.type) && eG.get(t.id).syncThreadSettings();
}
function tu(e) {
    let { id: t } = e;
    return eG.get(t).syncThreadSettings();
}
function tc(e) {
    return (0, w.k)(e) && eG.get(e.id).syncThreadSettings();
}
function td(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        if (!P.A_.has(e.type)) return;
        let t = eG.get(e.id);
        if (
            ((t.lastMessageId = e.lastMessageId),
            (t.lastPinTimestamp = eO(e.lastPinTimestamp)),
            (t._isThread = !0),
            (t._isActiveThread = !0),
            (t._isJoinedThread = L.A.hasJoined(e.id)),
            e.isForumPost())
        ) {
            let t = eG.get(e.parent_id);
            0 > V.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id);
        }
    });
}
function t_(e) {
    let { threads: t } = e;
    eV(t);
}
function tf(e) {
    let { channelId: t } = e;
    return eJ(
        {
            section: et.JJy.CHANNEL,
            object: et.ZSU.ACK_RESORT_THREADS,
            objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
        },
        t,
    );
}
function tp(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n } = e;
        t.forEach((e) => {
            eV(
                e
                    .map((e) => {
                        let { thread: t } = e;
                        return t;
                    })
                    .filter(G.Vq),
            );
        }),
            eV(n);
    });
}
function th(e) {
    let t = J.default.getCurrentUser();
    return null != e.creator_id && null != t && e.creator_id === t.id;
}
function tm(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id,
        r = eG.get(t.guild_id, es.P.GUILD_EVENT);
    ((r.lastMessageId = t.id), th(t))
        ? tV({ type: "GUILD_FEATURE_ACK", id: n, ackType: es.P.GUILD_EVENT, ackedId: t.id, local: !1 })
        : !Q.Ay.isMuteScheduledEventsEnabled(n) && r.mentionCount++;
}
function tE(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id;
    if (th(t) || ![ei.XG.CANCELED, ei.XG.COMPLETED].includes(t.status)) return !1;
    eG.get(n, es.P.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
}
function tg(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id;
    if (th(t)) return !1;
    eG.get(t.guild_id, es.P.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
}
function tA(e) {
    let t = J.default.getCurrentUser();
    if (
        null == t ||
        null == e.relationship.since ||
        (e.relationship.type !== et.eA$.PENDING_INCOMING && e.relationship.type !== et.eA$.FRIEND)
    )
        return !1;
    let n = eG.get(t.id, es.P.NOTIFICATION_CENTER),
        r = e.relationship.type === et.eA$.FRIEND,
        i = r ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? V.default.extractTimestamp(n.ackMessageId) : 0) < i &&
        ((n.lastMessageId = V.default.fromTimestamp(i)),
        N.A.active ? tH(t.id, es.P.NOTIFICATION_CENTER, void 0, !1) : r ? n.mentionCount-- : n.mentionCount++);
}
function tI(e) {
    let t = J.default.getCurrentUser();
    if (null == t || null == e.relationship.since || e.relationship.type !== et.eA$.PENDING_INCOMING) return !1;
    let n = eG.get(t.id, es.P.NOTIFICATION_CENTER),
        r = new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? V.default.extractTimestamp(n.ackMessageId) : 0) <= r &&
        (n.mentionCount = Math.max(0, n.mentionCount - 1));
}
function tT(e) {
    let { item: t } = e,
        n = J.default.getCurrentUser()?.id;
    if (null == n) return !1;
    let r = eG.get(n, es.P.NOTIFICATION_CENTER);
    ((r.lastMessageId = t.id), N.A.active || 0) ? tH(n, es.P.NOTIFICATION_CENTER, t.id, !1) : r.mentionCount++;
}
function tS(e) {
    let { ids: t, optimistic: n } = e;
    if (n || N.A.active) return !1;
    let r = J.default.getCurrentUser()?.id;
    if (null == r) return !1;
    let i = eG.get(r, es.P.NOTIFICATION_CENTER);
    t.forEach((e) => {
        0 > V.default.compare(i.ackMessageId, e) && (i.mentionCount = Math.max(i.mentionCount - 1, 0));
    });
}
function ty(e) {
    let { guild: t } = e;
    return eG.clear(t.id, es.P.GUILD_EVENT);
}
function tv(e) {
    let { guild: t } = e,
        n = t.latest_onboarding_question_id;
    if (null == n) return;
    let r = eG.get(t.id, es.P.GUILD_ONBOARDING_QUESTION);
    (r._guildId = t.id), (r.lastMessageId = n);
}
function tN(e) {
    let { channel: t } = e;
    return eG.clear(t.id);
}
function tC(e) {
    let { channelId: t } = e,
        n = H.Ay.getCurrentSidebarChannelId(t),
        r = j.A.getChannel(t);
    if (null != r) {
        let e = eG.get(r.id);
        (e.ackMessageIdAtChannelSelect = e.ackMessageId ?? V.default.fromTimestamp(e.getAckTimestamp())),
            e.recordLastViewedTime();
    }
    tL(ef), tL(ep);
    let i = !1;
    return (
        ef !== t && ((i = tw(ef) || i), (i = tw(ep) || i)),
        (ef === t || (r?.type != null && et.kvI.GUILD_THREADS_ONLY.has(r.type))) &&
            (i =
                eJ(
                    {
                        section: et.JJy.CHANNEL,
                        object: et.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL,
                        objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    t,
                ) || i),
        ef === t &&
            (i =
                eJ(
                    {
                        section: et.JJy.CHANNEL,
                        object: et.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR,
                        objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    n,
                ) || i),
        (ef = t),
        (ep = n),
        i
    );
}
function tR() {
    let e = H.Ay.getCurrentSidebarChannelId(ef),
        t = !1;
    return (
        ep !== e
            ? ((t = tw(ep)), (ep = e))
            : (t =
                  eJ(
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
function tO(e, t) {
    let n = eG.get(e);
    return (
        (n.ackMessageIdAtChannelSelect = n.ackMessageId ?? V.default.fromTimestamp(n.getAckTimestamp())),
        n.recordLastViewedTime(),
        tw(e),
        eJ({ section: et.JJy.OVERLAY, object: t, objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC }, e),
        !0
    );
}
function tb(e) {
    return !__OVERLAY__ && tO(e.channelId, et.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH);
}
function tD(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let n = eG.get(t);
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
}
function tL(e) {
    null == e || (eG.get(e).isManualAck = !1);
}
function tw(e) {
    if (null == e) return !1;
    let t = eG.get(e);
    return !t.hasUnread() && ((t.oldestUnreadMessageId = null), !0);
}
function tM(e) {
    let t = !1;
    return (
        eT.forEachChannel((n, r) => {
            r.has(e.windowId) && (t = tx(n, e.focused) || t);
        }),
        t
    );
}
function tx(e, t) {
    if (null == e) return !1;
    let n = eG.get(e);
    return (
        t || n.hasUnread() || (n.oldestUnreadMessageIdStale = !0),
        eJ(
            {
                section: et.JJy.CHANNEL,
                object: et.ZSU.ACK_WINDOW_FOCUS,
                objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
            e,
        )
    );
}
function tP(e) {
    let { channelId: t, timestamp: n } = e;
    return eJ(
        {
            section: et.JJy.CHANNEL,
            object: et.ZSU.ACK_CHANNEL_SCROLL,
            objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
        },
        t,
        n,
    );
}
function tk(e) {
    let { channelId: t, messageId: n, immediate: r = !1, force: i = !1, context: s, location: a } = e,
        o = eG.get(t),
        l = o.ack({
            messageId: n,
            local: s !== et.QCW,
            immediate: r,
            force: i,
            isExplicitUserAction: !0,
            location: a,
            trackAnalytics: !0,
        });
    return null != n ? (o.rebuildChannelState(), !0) : l;
}
function tU(e) {
    let { channelId: t, timestamp: n } = e;
    return eG.get(t).ackPins(n);
}
function tG(e) {
    let { channelId: t, messageId: n, manual: r, newMentionCount: i } = e,
        s = eG.get(t);
    return r
        ? (s.rebuildChannelState(n, !0, i), s.clearOutgoingAck(), !0)
        : n !== s._ackMessageId && s.ack({ messageId: n, local: !0, trackAnalytics: !1 });
}
function tF(e) {
    let { channelId: t } = e;
    return eG
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
function tV(e) {
    let { id: t, ackType: n, ackedId: r, local: i } = e;
    return tH(t, n, r, i);
}
function tB(e) {
    let { ackType: t, ackedId: n, local: r } = e,
        i = J.default.getCurrentUser()?.id;
    return null != i && tH(i, t, n, r);
}
function tH(e, t, n, r) {
    let i = eG.get(e, t);
    return (
        n !== i.ackMessageId &&
        i.lastMessageId !== i.ackMessageId &&
        (null != i.lastMessageId || 0 !== i.mentionCount) &&
        ((n = n ?? i.lastMessageId ?? V.default.fromTimestamp(i.getAckTimestamp())),
        i.ack({ messageId: n, local: r ?? !0, trackAnalytics: !1 }))
    );
}
function tj(e) {
    let { channelId: t, lastPinTimestamp: n } = e,
        r = eG.get(t),
        i = eO(n);
    return r.lastPinTimestamp !== i && ((r.lastPinTimestamp = i), !0);
}
function tY(e) {
    let t = !1;
    for (let n of e.channels) {
        let e = eG.get(n.id),
            r = eO(n.lastPinTimestamp);
        (e.lastMessageId !== n.lastMessageId || e.lastPinTimestamp !== r) &&
            ((t = !0), (e.lastMessageId = n.lastMessageId), (e.lastPinTimestamp = r));
    }
    return t;
}
function tW() {
    eh = null;
}
function tK(e) {
    let { readStates: t } = e;
    (em = !0),
        eR(),
        t.forEach((e) => {
            let t = e.type ?? es.P.CHANNEL;
            e.type = t;
            let n = eG._readStates.get(t) ?? new Map();
            n.set(e.channelId, (0, d.pp)(e, eG)), eG._readStates.has(t) || eG._readStates.set(t, n);
        });
}
function t$(e) {
    let { channelId: t, chatOpen: n } = e;
}
function tz(e, t, n) {
    e.forEach((e) => {
        let { channelId: t, messageId: n, readStateType: r } = e;
        eG.get(t, r).ack({
            messageId: n,
            local: !0,
            immediate: void 0,
            force: void 0,
            isExplicitUserAction: !0,
            trackAnalytics: !1,
        });
    }),
        t === et.QCW &&
            (eE.push(
                ...e.map((e) => ({
                    channel_id: e.channelId,
                    message_id: e.messageId,
                    read_state_type: e.readStateType,
                })),
            ),
            eg || ew(n));
}
function tq(e) {
    let { channels: t, context: n, onFinished: r } = e;
    tz(
        t.filter((e) => null != e.messageId && t4.hasUnreadOrMentions(e.channelId, e.readStateType)),
        n,
        r,
    );
}
function tZ(e) {
    let { channelId: t, windowId: n } = e;
    return (
        !eT.hasWindowId(t, n) &&
        (eT.addWindowId(t, n),
        eJ(
            {
                section: et.JJy.CHANNEL,
                object: et.ZSU.ENABLE_AUTOMATIC_ACK,
                objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
            t,
        ))
    );
}
function tX(e) {
    let { channelId: t, windowId: n } = e;
    return eT.removeWindowId(t, n), !1;
}
function tQ(e) {
    let { channelId: t } = e;
    return tw(t);
}
function tJ(e) {
    let { channelId: t, location: n } = e;
    return eJ(n, t);
}
function t0(e) {
    let { changesByChannelId: t } = e;
    for (let e in t) {
        let n = t[e],
            r = eG.getIfExists(e);
        if (null != r)
            for (let e of [n.new_messages?.[0]].concat(n.modified_messages ?? []).filter(G.Vq))
                1 === V.default.compare(e.id, r.lastMessageId) && (r.lastMessageId = e.id);
    }
}
function t1(e) {
    let { ackedId: t } = e,
        n = J.default.getCurrentUser()?.id;
    if (null == n) return !1;
    let r = eG.get(n, es.P.MESSAGE_REQUESTS);
    if (t === r.ackMessageId) return !1;
    (r.ackMessageId = t), r.ack({ messageId: t, isExplicitUserAction: !0, trackAnalytics: !1 });
}
function t2(e) {
    let t = J.default.getCurrentUser()?.id;
    if (null == t) return !1;
    let n = eG.get(t, es.P.MESSAGE_REQUESTS);
    if (null == n.ackMessageId) return !1;
    n.ackMessageId = void 0;
}
function t3(e) {
    let { state: t } = e;
    return (
        t === et.g6G.ACTIVE &&
        eJ(
            {
                section: et.JJy.CHANNEL,
                object: et.ZSU.ACK_APP_FOREGROUND,
                objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
            X.A.getChannelId(),
        )
    );
}
class t6 extends l.Ay.Store {
    static displayName = "ReadStateStore";
    initialize() {
        Y.A,
            J.default,
            K.A,
            W.A,
            j.A,
            X.A,
            z.A,
            q.A,
            p.A,
            D.A,
            L.A,
            H.Ay,
            A.Ay,
            g.A,
            m.A,
            Q.Ay,
            ee.A,
            N.A,
            T.A,
            x.A,
            y.A,
            this.waitFor(
                D.A,
                B.default,
                p.A,
                H.Ay,
                j.A,
                Y.A,
                f.Ay,
                m.A,
                W.A,
                A.Ay,
                K.A,
                $.A,
                L.A,
                z.A,
                N.A,
                q.A,
                Z.A,
                X.A,
                Q.Ay,
                x.A,
                J.default,
                ee.A,
            ),
            this.syncWith([H.Ay], tR);
    }
    getReadStatesByChannel() {
        return eG._readStates.get(es.P.CHANNEL) ?? new Map();
    }
    getForDebugging(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eG.getIfExists(e, t);
    }
    getNotifCenterReadState(e) {
        return eG.getIfExists(e, es.P.NOTIFICATION_CENTER);
    }
    hasUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eG.getValue(e, t, (e) => e.canBeUnread() && e.hasUnread(), !1);
    }
    hasUnreadOrMentions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eG.getValue(e, t, (e) => e.canBeUnread() && e.hasUnreadOrMentions(), !1);
    }
    hasTrackedUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eG.getValue(e, t, (e) => e.canTrackUnreads() && e.hasUnread(), !1);
    }
    isForumPostUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eG.getValue(e, t, (e) => e.isForumPostUnread(), !1);
    }
    getUnreadCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eG.getValue(e, t, (e) => (e.canBeUnread() ? e.unreadCount : 0), 0);
    }
    getMentionCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL,
            n = eG.getValue(e, t, (e) => (e.canHaveMentions() ? e.getMentionCount() : 0), 0);
        if ((0, h.A)(e) && n > 0) return 1;
        return n;
    }
    getIsMentionLowImportance(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return t === es.P.CHANNEL && eG.getValue(e, t, (e) => e.isMentionLowImportance, !1);
    }
    getGuildChannelUnreadState(e, t, n, r, i) {
        return eG.getValue(e.id, es.P.CHANNEL, (s) => s.getGuildChannelUnreadState(e, t, n, r, i), {
            mentionCount: 0,
            unread: !1,
            isMentionLowImportance: !1,
        });
    }
    hasRecentlyVisitedAndRead(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eG.getValue(e, t, (e) => e.hasRecentlyVisitedAndRead(), !1);
    }
    ackMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eG.getValue(e, t, (e) => (e.canBeUnread() ? e.ackMessageId : null), null);
    }
    getTrackedAckMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eG.getValue(e, t, (e) => (e.canTrackUnreads() ? e._ackMessageId : null), null);
    }
    lastMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eG.getValue(e, t, (e) => e.lastMessageId, null);
    }
    lastMessageTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eG.getValue(e, t, (e) => e.lastMessageTimestamp, 0);
    }
    lastPinTimestamp(e) {
        return eG.getValue(e, es.P.CHANNEL, (e) => e.lastPinTimestamp, null);
    }
    getOldestUnreadMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eG.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadMessageId : null), null);
    }
    getOldestUnreadTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eG.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0), 0);
    }
    isEstimated(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eG.getValue(e, t, (e) => e.estimated, !1);
    }
    hasOpenedThread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return eG.getValue(e, t, (e) => e._persisted, !1);
    }
    hasUnreadPins(e) {
        return eG.getValue(e, es.P.CHANNEL, (e) => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1);
    }
    isNewForumThread(e, t, n) {
        let r = eG.get(t);
        if (
            !0 === eG.get(e)._persisted ||
            null == r.ackMessageIdAtChannelSelect ||
            0 >= V.default.compare(e, r.ackMessageIdAtChannelSelect)
        )
            return !1;
        let i = eq(n);
        return V.default.extractTimestamp(e) > i;
    }
    getAllReadStates(e) {
        let t = [];
        return (
            eG.forEach((n) => {
                switch (n.type) {
                    case es.P.GUILD_HOME:
                    case es.P.GUILD_EVENT:
                    case es.P.GUILD_ONBOARDING_QUESTION:
                        null != K.A.getGuild(n.channelId) && t.push(n.serialize(e));
                        break;
                    case es.P.NOTIFICATION_CENTER:
                    case es.P.MESSAGE_REQUESTS:
                        V.default.cast(J.default.getCurrentUser()?.id) === n.channelId && t.push(n.serialize(e));
                        break;
                    default:
                        t.push(n.serialize(e));
                }
            }),
            t
        );
    }
    getGuildUnreadsSentinel(e) {
        return eG.getGuildSentinels(e).unreadsSentinel;
    }
    getMentionChannelIds() {
        return eG.getMentionChannelIds();
    }
    getNonChannelAckId(e) {
        let t = J.default.getCurrentUser()?.id;
        return null == t ? null : eG.get(t, e).ackMessageId;
    }
    getSnapshot(e, t) {
        let n = eG.get(e);
        return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot;
    }
    getChannelIdsForWindowId(e) {
        return eT.getAllChannelIdsForWindowId(e);
    }
}
let t4 = new t6(_.h, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: t0,
        CONNECTION_OPEN: e1,
        CONNECTION_OPEN_SUPPLEMENTAL: e5,
        LOGOUT: e2,
        OVERLAY_INITIALIZE: e7,
        CACHE_LOADED: tK,
        GUILD_CREATE: e8,
        LOAD_MESSAGES_SUCCESS: e9,
        LOCAL_MESSAGES_LOADED: te,
        MESSAGE_CREATE: tn,
        MESSAGE_DELETE: tt,
        MESSAGE_DELETE_BULK: tt,
        MESSAGE_ACK: tG,
        CHANNEL_ACK: tk,
        CHANNEL_LOCAL_ACK: tF,
        CHANNEL_PINS_ACK: tU,
        CHANNEL_PINS_UPDATE: tj,
        CHANNEL_SELECT: tC,
        OVERLAY_TEXT_CHAT_ACK_CHANNEL: tb,
        VOICE_CHANNEL_SELECT: tD,
        CHANNEL_CREATE: ti,
        THREAD_CREATE: ts,
        THREAD_UPDATE: tl,
        THREAD_LIST_SYNC: td,
        LOAD_THREADS_SUCCESS: t_,
        LOAD_ARCHIVED_THREADS_SUCCESS: t_,
        SEARCH_MESSAGES_SUCCESS: tp,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: tp,
        THREAD_MEMBER_UPDATE: tu,
        THREAD_MEMBERS_UPDATE: tc,
        CHANNEL_DELETE: tN,
        THREAD_DELETE: tN,
        WINDOW_FOCUS: tM,
        UPDATE_CHANNEL_DIMENSIONS: tP,
        CURRENT_USER_UPDATE: tW,
        BULK_ACK: tq,
        ENABLE_AUTOMATIC_ACK: tZ,
        DISABLE_AUTOMATIC_ACK: tX,
        GUILD_FEATURE_ACK: tV,
        GUILD_SCHEDULED_EVENT_CREATE: tm,
        GUILD_SCHEDULED_EVENT_UPDATE: tE,
        GUILD_SCHEDULED_EVENT_DELETE: tg,
        GUILD_DELETE: ty,
        GUILD_UPDATE: tv,
        RESORT_THREADS: tf,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: t$,
        DECAY_READ_STATES: eR,
        NOTIFICATION_CENTER_ITEM_CREATE: tT,
        RELATIONSHIP_ADD: tA,
        RELATIONSHIP_REMOVE: tI,
        NOTIFICATION_CENTER_ITEMS_ACK: tS,
        USER_NON_CHANNEL_ACK: tB,
        PASSIVE_UPDATE_V2: tY,
        CLEAR_OLDEST_UNREAD_MESSAGE: tQ,
        TRY_ACK: tJ,
        MESSAGE_REQUEST_ACK: t1,
        MESSAGE_REQUEST_CLEAR_ACK: t2,
        APP_STATE_UPDATE: t3,
    }),
    t5 = t4;
