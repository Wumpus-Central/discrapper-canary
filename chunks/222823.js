"use strict";
let r;
n.d(t, { Ay: () => t1, Wm: () => eR }), n(321073), n(938796);
var i = n(735438),
    a = n(989349),
    s = n.n(a),
    o = n(665260),
    l = n(311907),
    u = n(562465),
    c = n(451988),
    d = n(933681),
    _ = n(73153),
    f = n(933958);
n(183636);
var h = n(313961),
    p = n(343328),
    g = n(717125),
    E = n(626584),
    A = n(49463),
    I = n(698441),
    T = n(250953),
    y = n(380335),
    S = n(309199),
    v = n(157550),
    C = n(451919),
    b = n(252431),
    N = n(395504),
    R = n(622794),
    O = n(970278),
    D = n(152007),
    L = n(882733),
    w = n(607508),
    x = n(617617),
    P = n(95701),
    M = n(799422),
    k = n(927813),
    U = n(403362),
    G = n(209489),
    F = n(661191),
    V = n(961350),
    B = n(761640),
    j = n(734057),
    H = n(72314),
    Y = n(919638),
    W = n(71393),
    K = n(885576),
    $ = n(320501),
    z = n(576705),
    q = n(994500),
    X = n(309010),
    Z = n(543465),
    Q = n(287809),
    J = n(531685),
    ee = n(652215),
    et = n(5867),
    en = n(746080),
    er = n(988794),
    ei = n(790782),
    ea = n(37411);
let es = new E.A("ReadStateStore"),
    eo = 2;
__OVERLAY__ && (r = n(256415).default);
let el = ee.hVb.VIEW_CHANNEL | ee.hVb.READ_MESSAGE_HISTORY,
    eu = 100,
    ec = 1,
    ed = X.A.getChannelId(),
    e_ = null,
    ef = null,
    eh = !1,
    ep = [],
    em = !1,
    eg = null;
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
let eA = new eE(),
    eI = 30 * k.A.Millis.DAY;
function eT() {
    return F.default.fromTimestamp(Date.now() - eI);
}
let ey = 0,
    eS = 0,
    ev = null;
function eC() {
    (ey = Date.now() - 7 * k.A.Millis.DAY),
        (eS = Date.now() - 3 * k.A.Millis.DAY),
        clearTimeout(ev),
        (ev = setTimeout(() => {
            _.h.dispatch({ type: "DECAY_READ_STATES" });
        }, +k.A.Millis.HOUR));
}
function eb(e) {
    if (null == e) return 0;
    let t = Date.parse(e);
    return isNaN(t) ? 0 : t;
}
function eN(e) {
    return {
        id: e.id,
        read_state_type: e.read_state_type,
        mention_count: e.badge_count,
        last_message_id: e.last_acked_id,
    };
}
function eR(e, t) {
    let n = j.A.getChannel(e.channel_id);
    return (
        !(null == n || q.A.isBlockedOrIgnoredForMessage(e)) &&
        !!(
            (0, C.Ay)({
                message: e,
                userId: t.id,
                suppressEveryone: Z.Ay.isSuppressEveryoneEnabled(n.guild_id),
                suppressRoles: Z.Ay.isSuppressRolesEnabled(n.guild_id),
            }) || eO(n)
        )
    );
}
function eO(e) {
    return null != e && e.isPrivate() && !Z.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
}
async function eD(e) {
    if (0 === ep.length) {
        (em = !1), e?.();
        return;
    }
    em = !0;
    let t = ep.splice(0, eu);
    await ew(() =>
        u.Bo.post({ url: ee.Rsh.BULK_ACK, body: { read_states: t }, oldFormErrors: !0, rejectWithError: !1 }),
    ),
        await (0, c.BK)(1e3 * ec),
        eD(e);
}
let eL = 3;
async function ew(e) {
    let t = V.default.getId();
    for (let n = 0; n < eL; n++)
        try {
            return await e();
        } catch (e) {
            if (
                (es.error("", e),
                n + 1 < eL && (await (0, c.BK)((n + 1) * 2e3), await G.A.awaitOnline(), t !== V.default.getId()))
            )
                return Promise.reject(Error("User changed."));
        }
}
function ex(e, t) {
    Q.default.getCurrentUser()?.hasAnyStaffLevel() && es.log("STAFF-ACK-LOG:", t, e.channelId);
}
function eP(e) {
    if ((ex(e, "shouldAutomaticallyAck called"), e.type !== ei.P.CHANNEL)) return ex(e, "not channel read state"), !1;
    let t = j.A.getChannel(e.channelId),
        n = null != t && t.isForumPost();
    if (
        null != f.Ay.getConnectedActivityLocation() &&
        f.Ay.getActivityPanelMode() === et.Gd.PANEL &&
        f.Ay.getFocusedLayout() === et.E8.NO_CHAT
    )
        return ex(e, "In activity"), !1;
    if (K.A.isIdle()) return ex(e, "Is idle"), !1;
    if (!e.canTrackUnreads()) return ex(e, "Cannot track unreads"), !1;
    if (t?.isForumLikeChannel() !== !0) {
        let t = eA.isAnyWindowFocused(e.channelId),
            n = null != r && r.isInstanceFocused() && r.isPinned(ee.uss.TEXT);
        if (!t && !n) return !1;
    }
    if (n && !e._persisted) return ex(e, "unpersisted forum post"), !0;
    if (!e.hasUnreadOrMentions()) return ex(e, "No unread or mentions"), !1;
    if (t?.isForumLikeChannel() === !0) return ex(e, "Forum-like channel"), !1;
    if (!(n && !e._isJoinedThread) && !H.A.isAtBottom(e.channelId)) return ex(e, "Not at bottom"), !1;
    let i = h.A.getLayout(e.channelId);
    if (!h.A.getChatOpen(e.channelId) && (i === ee.DUB.NO_CHAT || i === ee.DUB.FULL_SCREEN))
        return ex(e, "Fullscreen video"), !1;
    if (!eA.isChannelAckable(e.channelId)) return ex(e, "Not ackable"), !1;
    let a = $.A.getMessages(e.channelId);
    return null == a || !a.ready || a.loadingMore
        ? (ex(e, "Still loading messages"), !1)
        : (0, R.oE)(e.channelId)
          ? (ex(e, "Acked"), !0)
          : (ex(e, "Chat not focused"), !1);
}
class eM {
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
        for (let t of eM._readStates.values()) for (let n of t.values()) if (!1 === e(n)) break;
    }
    static get(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL,
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = this.getIfExists(e, t);
        return null == i ? r : n(i);
    }
    static clear(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL,
            n = eM._readStates.get(t);
        if (null == n) return !1;
        let r = n.delete(e);
        return r && eM._mentionChannels.delete(e), r;
    }
    static clearAll() {
        eM._readStates.clear(), eM._mentionChannels.clear();
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
            _isActiveThread: a,
            _isJoinedThread: s,
            _persisted: o,
            loadedMessages: l,
            _lastMessageId: u,
            _lastMessageTimestamp: c,
            _ackMessageId: d,
            _ackMessageTimestamp: _,
            ackPinTimestamp: f,
            isManualAck: h,
            lastPinTimestamp: p,
            _oldestUnreadMessageId: g,
            oldestUnreadMessageIdStale: E,
            estimated: A,
            _mentionCount: I,
            flags: T,
            lastViewed: y,
        } = this;
        if (e)
            return {
                channelId: t,
                type: n,
                _guildId: r,
                _isThread: i,
                _isActiveThread: a,
                _isJoinedThread: s,
                _persisted: o,
                loadedMessages: l,
                _lastMessageId: u,
                _lastMessageTimestamp: c,
                _ackMessageId: d,
                _ackMessageTimestamp: _,
                ackPinTimestamp: f,
                isManualAck: h,
                lastPinTimestamp: p,
                _oldestUnreadMessageId: g,
                oldestUnreadMessageIdStale: E,
                estimated: A,
                _mentionCount: I,
                flags: T,
                lastViewed: y,
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
            lastPinTimestamp: p,
            _mentionCount: I,
            flags: T,
        };
        return (
            null != y && y > 0 && (S.lastViewed = y),
            i && ((S._isThread = i), (S._isActiveThread = a), (S._isJoinedThread = s)),
            S
        );
    }
    deserializeForOverlay(e) {
        let {
            channelId: t,
            type: n,
            _guildId: r,
            _isThread: i,
            _isActiveJoinedThread: a,
            _isActiveThread: s,
            _isJoinedThread: o,
            _persisted: l,
            loadedMessages: u,
            _lastMessageId: c,
            _lastMessageTimestamp: d,
            _ackMessageId: _,
            _ackMessageTimestamp: f,
            ackPinTimestamp: h,
            isManualAck: p,
            lastPinTimestamp: g,
            _oldestUnreadMessageId: E,
            oldestUnreadMessageIdStale: A,
            estimated: I,
            _unreadCount: T,
            _mentionCount: y,
            flags: S,
            lastViewed: v,
        } = e;
        (this.channelId = t),
            (this.type = n ?? ei.P.CHANNEL),
            (this._guildId = r),
            (this._isThread = i ?? !1),
            null != a
                ? ((this._isActiveThread = a), (this._isJoinedThread = a))
                : ((this._isActiveThread = s ?? !1), (this._isJoinedThread = o ?? !1)),
            (this._persisted = !1 !== l),
            (this.loadedMessages = u ?? !1),
            (this._lastMessageId = c),
            (this._lastMessageTimestamp = d),
            (this._ackMessageId = _),
            (this._ackMessageTimestamp = f),
            (this.ackPinTimestamp = h),
            (this.isManualAck = p ?? !1),
            (this.lastPinTimestamp = g),
            (this._oldestUnreadMessageId = E),
            (this.oldestUnreadMessageIdStale = A ?? !1),
            (this.estimated = I ?? !1),
            (this._unreadCount = T ?? 0),
            (this._mentionCount = y),
            (this.flags = S),
            (this.lastViewed = v),
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
        let e = $.A.getMessages(this.channelId);
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
        let e = j.A.getChannel(this.channelId);
        return (this._guildId = null != e ? e.getGuildId() : null);
    }
    isPrivate() {
        if (this.type !== ei.P.CHANNEL) return !1;
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
            let e = Q.default.getCurrentUser(),
                n = this.getAckTimestamp(),
                r = !1,
                i = !1,
                a = null,
                s = $.A.getMessages(this.channelId);
            s.forAll((s) => {
                r
                    ? (this.oldestUnreadMessageId = this._oldestUnreadMessageId ?? s.id)
                    : (r = s.id === this._ackMessageId),
                    F.default.extractTimestamp(s.id) > n
                        ? (this.unreadCount++, t && eR(s, e) && this.mentionCount++, (a = a ?? s.id))
                        : (i = !0);
            }),
                (this.estimated = !s.hasPresent() || (!(r || i) && s.length === this.unreadCount)),
                (this.oldestUnreadMessageId = this._oldestUnreadMessageId ?? a);
        }
        null != n && (this.mentionCount = n);
    }
    handleGuildEventRemoval(e, t) {
        if (F.default.compare(this.ackMessageId, t) >= 0) return;
        let n = I.Ay.getGuildScheduledEventsForGuild(e),
            r = this.getAckTimestamp();
        if (isNaN(r)) return;
        let i = this._ackMessageId ?? F.default.fromTimestamp(r),
            a = null,
            s = 0;
        n.forEach((e) => {
            (0, I.d6)(e) && (F.default.compare(e.id, a) > 0 && (a = e.id), F.default.compare(e.id, i) > 0 && s++);
        }),
            (this.lastMessageId = a),
            (this.mentionCount = s);
    }
    canTrackUnreads() {
        if (this.type !== ei.P.CHANNEL) return !0;
        if ((this._isThread && !this._isActiveThread) || this._isResourceChannel) return !1;
        let e = j.A.getBasicChannel(this.channelId);
        return (
            null != e &&
            ("basicPermissions" in e
                ? M.A.has(e.basicPermissions, ee.hVb.VIEW_CHANNEL)
                : !g.A.isChannelGated(this.guildId, this.channelId) || z.A.can(ee.xBc.VIEW_CHANNEL, e))
        );
    }
    canBeUnread() {
        return (
            !(
                (this._isThread && !this._isJoinedThread) ||
                (0, S.k_)(this.channelId, [y.A, v.A]) ||
                (!this._isThread &&
                    (0, N.WW)(this._guildId) &&
                    (this._lastMessageTimestamp < ey ||
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
                (0, S.k_)(this.channelId, [y.A, v.A]) ||
                ((0, N.WW)(this._guildId) && this._lastMessageTimestamp < ey)
            ) && this.canTrackUnreads()
        );
    }
    getGuildChannelUnreadState(e, t, n, r, i) {
        if (
            t &&
            (this._lastMessageTimestamp < ey ||
                (!Z.Ay.isChannelRecordOrParentOptedIn(e) &&
                    !this.hasRecentlyVisitedAndRead() &&
                    this.mentionCount <= 0))
        )
            return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        if ("basicPermissions" in e) {
            if (!M.A.has(e.basicPermissions, ee.hVb.VIEW_CHANNEL))
                return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        } else if (g.A.isChannelGated(this.guildId, this.channelId) && !z.A.can(ee.xBc.VIEW_CHANNEL, e))
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
                ew(() => u.Bo.post({ url: ee.Rsh.PINS_ACK(this.channelId), oldFormErrors: !0, rejectWithError: !0 }));
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
            immediate: a = !1,
            force: s = !1,
            isExplicitUserAction: o = !1,
        } = e;
        if (!this._shouldAck(s, i, o) || (!s && !this.canTrackUnreads())) return !1;
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
                eZ(this.channelId),
                i
                    ? (this.oldestUnreadMessageId = null)
                    : (null == this.outgoingAck &&
                          (this.outgoingAckTimer = setTimeout(
                              () => {
                                  this.type === ei.P.CHANNEL ? this._ack(n, r) : this._nonChannelAck(),
                                      (this.outgoingAck = null),
                                      (this.outgoingAckTimer = null);
                              },
                              l || a ? 0 : 3e3,
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
                    !!j.A.getChannel(this.channelId)?.isForumLikeChannel()))
        );
    }
    _ack(e, t) {
        let { outgoingAck: r } = this;
        if (null == r) return;
        let i = V.default.getId(),
            a = ef;
        this._persisted = !0;
        let s = this.recalculateFlags(),
            o = s === this.flags ? void 0 : s;
        ew(() =>
            u.Bo.post({
                url: ee.Rsh.MESSAGE_ACK(this.channelId, r),
                body: { token: ef, last_viewed: this.lastViewed, flags: o },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
        ).then((r) => {
            null != r &&
                (ef === a && i === V.default.getId() && (ef = r.body.token),
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
        let e = j.A.getChannel(this.channelId);
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
            (this._persisted = !0), ew(() => u.Bo.post({ url: e, body: {}, oldFormErrors: !0, rejectWithError: !0 }));
        }
    }
    delete() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = j.A.getBasicChannel(this.channelId);
        es.log("Deleting ReadState", this.channelId, this.type, {
            remote: e,
            persisted: this._persisted,
            channelMissing: null == t,
            isOld: ez(this, eT()),
            validType: null != t && P.A_.has(t.type),
            readableType: null != t && (0, P.Z_)(t.type),
            oldThreadCutoff: eT(),
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
            eM._readStates.get(this.type)?.delete(this.channelId),
            eM._mentionChannels.delete(this.channelId);
    }
    shouldDeleteReadState(e) {
        if (0 !== Y.A.totalUnavailableGuilds) return !1;
        if (null != this.type && this.type !== ei.P.CHANNEL) return !eq(this);
        let t = j.A.getBasicChannel(this.channelId);
        if (null == t)
            if (ez(this, e)) return !0;
            else return !1;
        return (
            !!P.A_.has(t.type) &&
            (!(0, P.Z_)(t.type) ||
                (!(0, P.Gw)(t.type) &&
                    !(
                        !(P.Le.has(t.type) && e$(this, t, e)) &&
                        (!(this.mentionCount > 0) || z.A.canBasicChannel(el, t))
                    )))
        );
    }
    getAckTimestamp() {
        let e, t;
        if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
        if (this._isThread)
            return (
                (this._ackMessageTimestamp = eW(this.guildId, this.channelId)),
                (this._ackMessageId = F.default.fromTimestamp(this._ackMessageTimestamp)),
                this._ackMessageTimestamp
            );
        if (this.type === ei.P.GUILD_EVENT || this.type === ei.P.GUILD_ONBOARDING_QUESTION)
            e = W.A.getGuild(this.channelId);
        else if ((0, en.jq)(this.channelId)) e = W.A.getGuild(this.guildId);
        else {
            let t = j.A.getChannel(this.channelId);
            if (null != t) {
                let n = t.getGuildId();
                e = W.A.getGuild(n);
            }
        }
        return (
            null != e
                ? isNaN((t = eK(e))) && (t = F.default.extractTimestamp(this.channelId))
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
        if (null == e) return es.warn(`syncThreadSettings called with channel not in memory ${this.channelId}`), !1;
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
function ek(e) {
    e.forEach((e) => {
        if ((0, P.Z_)(e.type)) {
            let t = eM.get(e.id);
            (t._guildId = e.guild_id),
                (t.lastMessageId = e.lastMessageId),
                (t.lastPinTimestamp = eb(e.lastPinTimestamp)),
                (t._isResourceChannel = e.hasFlag(en.lx.IS_GUILD_RESOURCE_CHANNEL)),
                P.Le.has(e.type) && t.syncThreadSettings();
        }
    });
}
function eU(e) {
    e.forEach((e) => {
        if ((0, P.Z_)(e.type)) {
            let t = eM.get(e.id);
            (t.lastMessageId = e.last_message_id),
                (t.lastPinTimestamp = eb(e.last_pin_timestamp)),
                (t._isResourceChannel = (0, o.Lt)(e.flags ?? 0, en.lx.IS_GUILD_RESOURCE_CHANNEL)),
                P.Le.has(e.type) && t.syncThreadSettings();
        }
    });
}
function eG(e) {
    ej(e), eH(e), eB(e), eY(e);
}
function eF(e) {
    eV(e);
}
function eV(e) {
    let t = Q.default.getCurrentUser();
    if (null == t) return !1;
    let n = eM.get(t.id, ei.P.NOTIFICATION_CENTER);
    e.forEach((e) => {
        if (null == e.since || e.type !== ee.eA$.PENDING_INCOMING) return;
        let t = new Date(e.since).getTime();
        (null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0) < t &&
            (n.mentionCount++, (n.lastMessageId = F.default.fromTimestamp(t)));
    });
}
function eB(e) {
    let t = 24;
    eM.get(e.id, ei.P.GUILD_HOME).lastMessageId = F.default.fromTimestamp(s()(Date.now()).subtract(t, "h").valueOf());
}
function ej(e) {
    e.threads?.forEach((t) => {
        if (!P.A_.has(t.type)) return;
        let n = eM.get(t.id);
        (n.lastMessageId = t.lastMessageId),
            (n.lastPinTimestamp = eb(t.lastPinTimestamp)),
            (n._isThread = !0),
            (n._isActiveThread = !0),
            (n._isJoinedThread = null != t.member),
            null == n.ackMessageId && (n.ackMessageId = F.default.fromTimestamp(eW(e.id, t.id))),
            null == n.ackPinTimestamp && (n.ackPinTimestamp = eW(e.id, t.id));
    });
}
function eH(e) {
    if (e.guild_scheduled_events?.length === 0 && null == eM.getIfExists(e.id, ei.P.GUILD_EVENT)) return;
    let t = eM.get(e.id, ei.P.GUILD_EVENT);
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
function eY(e) {
    let t = W.A.getGuild(e.id);
    if (null == t) return;
    let n = t?.latestOnboardingQuestionId;
    if (null == n) return;
    let r = eM.get(t.id, ei.P.GUILD_ONBOARDING_QUESTION);
    (r._guildId = t.id), (r.lastMessageId = n);
}
function eW(e, t) {
    let n = j.A.getChannel(t),
        r = W.A.getGuild(e ?? n?.guild_id),
        i = n?.isForumPost() ? 0 : eK(r),
        a = (D.A.joinTimestamp(t)?.getTime() ?? 0) - 5e3;
    isNaN(a) && (a = -5e3);
    let s = n?.threadMetadata?.archiveTimestamp,
        o = null != s ? new Date(s).getTime() - 1 : 0;
    isNaN(o) && (o = 0);
    let l = Math.max(a, o);
    return (
        l <= 0 && (l = F.default.extractTimestamp(t) - 1),
        (isNaN(l) || l <= 0) && (l = 0),
        isNaN(i) ? l : Math.max(i, l)
    );
}
function eK(e) {
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
function e$(e, t, n) {
    let r = e.guildId;
    return !(null != r && O.A.isActive(r, t.parent_id, e.channelId)) && ez(e, n);
}
function ez(e, t) {
    return (
        e.mentionCount > 0 ||
        !(
            F.default.compare(e.channelId, t) > 0 ||
            (null != e._ackMessageId && F.default.compare(e._ackMessageId, t) > 0) ||
            (null != e._lastMessageId && F.default.compare(e._lastMessageId, t) > 0)
        )
    );
}
function eq(e) {
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
function eX(e, t) {
    if (null == t) return !1;
    let n = eM.get(t);
    return !!eP(n) && n.ack({ trackAnalytics: !0, location: e });
}
function eZ(e) {
    if (null == e) return;
    let t = eM.get(e);
    if (t.type !== ei.P.CHANNEL) return;
    let n = j.A.getChannel(t.channelId);
    if (null == n || !n.isForumPost() || null == n.parent_id) return;
    let r = n.parent_id,
        i = eM.get(r);
    O.A.hasLoaded(n.guild_id) &&
        F.default
            .keys(O.A.getThreadsForParent(n.guild_id, r))
            .every((e) => t0.hasOpenedThread(e) || 0 > F.default.compare(e, i.ackMessageId)) &&
        i.ack({
            trackAnalytics: !0,
            location: {
                section: ee.JJy.CHANNEL,
                object: ee.ZSU.ACK_FORUM_CHANNEL_NO_UNREAD_POSTS,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
        });
}
function eQ(e) {
    let { guilds: t, relationships: n, initialPrivateChannels: r, readState: i } = e;
    eC(),
        (ef = null),
        eh || i.partial || eM.clearAll(),
        (eh = !1),
        i.entries.forEach((e) => {
            let t = e.read_state_type ?? ei.P.CHANNEL;
            t !== ei.P.CHANNEL && (e = eN(e));
            let n = eM.get(e.id, t);
            (n._persisted = !0),
                (n._mentionCount = e.mention_count ?? 0),
                (n.flags = e.flags),
                (n.lastViewed = e.last_viewed);
            let r = j.A.getBasicChannel(e.id);
            null != r && (0, P.fT)(r.type) && (null == e.last_message_id || 0 === e.last_message_id)
                ? (n.ackMessageId = F.default.fromTimestamp(eW(r.guild_id, r.id)))
                : n.ackedWhileCached
                  ? -1 === F.default.compare(n.ackMessageId, e.last_message_id) && (n.ackMessageId = e.last_message_id)
                  : (n.ackMessageId = e.last_message_id),
                (n.ackedWhileCached = void 0),
                (n.ackPinTimestamp = eb(e.last_pin_timestamp)),
                eM._mentionChannels.delete(n.channelId),
                n._mentionCount > 0 && n.canHaveMentions() && eM._mentionChannels.add(n.channelId);
        }),
        eM.resetGuildSentinels();
    let a = Q.default.getCurrentUser()?.id;
    for (let e of (null != a &&
        (eM.get(a, ei.P.NOTIFICATION_CENTER).lastMessageId = F.default.fromTimestamp(Date.now())),
    eF(n),
    ek(r),
    t))
        ek("full_sync" === e.channels.op ? e.channels.items : e.channels.writes),
            null != e.channelTimestampUpdates && e2(e.channelTimestampUpdates),
            eG(e);
    eJ(), (eg = setTimeout(() => e1(i.entries), 10 * k.A.Millis.SECOND));
}
function eJ() {
    null != eg && clearTimeout(eg);
}
let e0 = (0, i.throttle)((e) => {
    e.delete();
}, 100);
function e1(e) {
    let t = eT();
    for (let n of e) {
        let e = n.read_state_type ?? ei.P.CHANNEL,
            r = eM.get(n.id, e);
        r.shouldDeleteReadState(t) && e0(r);
    }
}
function e2(e) {
    for (let t of e) {
        let e = eM.get(t.id);
        null != t.last_message_id && (e.lastMessageId = t.last_message_id),
            null != t.last_pin_timestamp && (e.lastPinTimestamp = eb(t.last_pin_timestamp));
    }
}
function e3(e) {
    let { lazyPrivateChannels: t } = e;
    ek(t);
}
function e6(e) {
    let { readStates: t, selectedChannelId: n } = e;
    eC(),
        (ef = null),
        (ed = n),
        (e_ = B.Ay.getCurrentSidebarChannelId(ed)),
        eM.clearAll(),
        t.forEach((e) => {
            let t = eM.get(e.channelId);
            t.deserializeForOverlay(e), t.type === ei.P.CHANNEL && t.rebuildChannelState();
        });
}
function e4(e) {
    let { guild: t } = e,
        n = eT();
    eM.forEach((e) => {
        e.guildId === t.id && e.shouldDeleteReadState(n) && e.delete(!1);
    }),
        ek("full_sync" === t.channels.op ? t.channels.items : t.channels.writes),
        null != t.channelTimestampUpdates && e2(t.channelTimestampUpdates),
        eG(t);
}
function e5(e) {
    let { channelId: t, isAfter: n, messages: r } = e,
        i = eM.get(t);
    i.loadedMessages = !0;
    let a = $.A.getMessages(t);
    null != a &&
        ((r.length > 0 && 1 === F.default.compare(r[0].id, i.ackMessageId) && 0 === i.unreadCount) ||
        a.hasPresent() ||
        a.jumpTargetId === i.ackMessageId
            ? i.rebuildChannelState()
            : n &&
              null != i.ackMessageId &&
              a.has(i.ackMessageId, !0) &&
              ((i.unreadCount += r.length), null == i.oldestUnreadMessageId && i.rebuildChannelState())),
        eU(r.map((e) => e.thread).filter(U.Vq));
}
function e7(e) {
    let { channelId: t } = e;
    eM.get(t).rebuildChannelState();
}
function e8(e) {
    let t,
        n,
        { channelId: i, message: a, isPushNotification: s } = e,
        o = eM.get(i),
        l = o.hasUnread(),
        u = null != o.lastMessageId && o.lastMessageId >= a.id;
    o.lastMessageId = a.id;
    let c = Q.default.getCurrentUser(),
        d = j.A.getBasicChannel(i);
    if (null != a.author && null != c && a.author.id === c.id && !ee.MRS.SELF_MENTIONABLE_SYSTEM.has(a.type))
        return null != o.outgoingAck && o.clearOutgoingAck(), tx({ channelId: i, messageId: a.id, manual: !1 });
    let _ = (0, T.Y)();
    if (_?.isReady() === !0) {
        let e = _.getCurrentRoute();
        h.A.getChatOpen(o.channelId)
            ? (t = o.channelId)
            : e?.name === "channel"
              ? (t = e.params.channelId)
              : e?.name === "guilds" && (t = e.params?.channelId);
    } else null == _ && ((t = X.A.getChannelId()), (n = B.Ay.getCurrentSidebarChannelId(t)));
    let f = t === i || n === i;
    if (f && eP(o) && !s)
        return o.ack({
            messageId: a.id,
            trackAnalytics: !0,
            location: {
                section: ee.JJy.CHANNEL,
                object: ee.ZSU.ACK_INCOMING_MESSAGE,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
        });
    if (null != r && r.isInstanceFocused() && f && r.isInstanceLocked() && r.isPinned(ee.uss.TEXT))
        return o.ack({
            messageId: a.id,
            trackAnalytics: !0,
            location: {
                section: ee.JJy.OVERLAY,
                object: ee.ZSU.ACK_INCOMING_MESSAGE,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
        });
    if (
        (null == o.oldestUnreadMessageId || o.oldestUnreadMessageIdStale
            ? (o.oldestUnreadMessageId = a.id)
            : l || (0, R.i$)() === i || (o.oldestUnreadMessageId = a.id),
        !u && o.unreadCount++,
        !(q.A.isBlockedOrIgnoredForMessage(a) || (a.type === ee.lAJ.RECIPIENT_REMOVE && d?.type === ee.rbe.GROUP_DM)))
    ) {
        let { shouldMention: e, isMentionLowImportance: t } = e9(a, c, o);
        e && ((o.isMentionLowImportance = t), o.mentionCount++);
    }
}
function e9(e, t, n) {
    if (
        null != t &&
        (0, C.bG)({
            rawMessage: e,
            userId: t.id,
            suppressEveryone: Z.Ay.isSuppressEveryoneEnabled(n.guildId),
            suppressRoles: Z.Ay.isSuppressRolesEnabled(n.guildId),
        })
    )
        return { shouldMention: !0, isMentionLowImportance: !1 };
    let r = j.A.getChannel(e.channel_id);
    if (eO(r)) return { shouldMention: !0, isMentionLowImportance: !1 };
    if (Z.Ay.mentionOnAllMessages && null != r) {
        if (r.isThread()) {
            if ((0, w.l)(r) === ea.CP.ALL_MESSAGES) return { shouldMention: !0, isMentionLowImportance: !0 };
        } else if (
            !r.isVocal() &&
            !Z.Ay.isChannelMuted(r.guild_id, r.id) &&
            Z.Ay.resolvedMessageNotifications(r) === ee.orn.ALL_MESSAGES
        )
            return { shouldMention: !0, isMentionLowImportance: !0 };
    }
    return { shouldMention: !1, isMentionLowImportance: !1 };
}
function te(e) {
    let { channel: t } = e;
    if (!(0, P.Z_)(t.type)) return !1;
    let n = eM.get(t.id);
    (n.lastMessageId = t.lastMessageId), (n.lastPinTimestamp = eb(t.lastPinTimestamp));
}
function tt(e) {
    let { channel: t } = e;
    tn(t), tr(t);
}
function tn(e) {
    if (!P.A_.has(e.type)) return !1;
    let t = eM.get(e.id);
    (t.lastMessageId = e.lastMessageId),
        (t.lastPinTimestamp = eb(e.lastPinTimestamp)),
        t.syncThreadSettings(),
        e.ownerId === V.default.getId() && (t.loadedMessages = !0);
}
function tr(e) {
    let t = e.parent_id;
    eM.get(t).lastMessageId = e.id;
    let n = Q.default.getCurrentUser();
    if (e.ownerId === n?.id) return (eM.get(e.id)._persisted = !0), tx({ channelId: t, messageId: e.id, manual: !1 });
}
function ti(e) {
    let { channel: t } = e;
    return !!P.A_.has(t.type) && eM.get(t.id).syncThreadSettings();
}
function ta(e) {
    let { id: t } = e;
    return eM.get(t).syncThreadSettings();
}
function ts(e) {
    return (0, L.k)(e) && eM.get(e.id).syncThreadSettings();
}
function to(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        if (!P.A_.has(e.type)) return;
        let t = eM.get(e.id);
        if (
            ((t.lastMessageId = e.lastMessageId),
            (t.lastPinTimestamp = eb(e.lastPinTimestamp)),
            (t._isThread = !0),
            (t._isActiveThread = !0),
            (t._isJoinedThread = D.A.hasJoined(e.id)),
            e.isForumPost())
        ) {
            let t = eM.get(e.parent_id);
            0 > F.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id);
        }
    });
}
function tl(e) {
    let { threads: t } = e;
    eU(t);
}
function tu(e) {
    let { channelId: t } = e;
    return eX(
        {
            section: ee.JJy.CHANNEL,
            object: ee.ZSU.ACK_RESORT_THREADS,
            objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
        },
        t,
    );
}
function tc(e) {
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
                    .filter(U.Vq),
            );
        }),
            eU(n);
    });
}
function td(e) {
    let t = Q.default.getCurrentUser();
    return null != e.creator_id && null != t && e.creator_id === t.id;
}
function t_(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id,
        r = eM.get(t.guild_id, ei.P.GUILD_EVENT);
    ((r.lastMessageId = t.id), td(t))
        ? tM({ type: "GUILD_FEATURE_ACK", id: n, ackType: ei.P.GUILD_EVENT, ackedId: t.id, local: !1 })
        : !Z.Ay.isMuteScheduledEventsEnabled(n) && r.mentionCount++;
}
function tf(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id;
    if (td(t) || ![er.XG.CANCELED, er.XG.COMPLETED].includes(t.status)) return !1;
    eM.get(n, ei.P.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
}
function th(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id;
    if (td(t)) return !1;
    eM.get(t.guild_id, ei.P.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
}
function tp(e) {
    let t = Q.default.getCurrentUser();
    if (
        null == t ||
        null == e.relationship.since ||
        (e.relationship.type !== ee.eA$.PENDING_INCOMING && e.relationship.type !== ee.eA$.FRIEND)
    )
        return !1;
    let n = eM.get(t.id, ei.P.NOTIFICATION_CENTER),
        r = e.relationship.type === ee.eA$.FRIEND,
        i = r ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0) < i &&
        ((n.lastMessageId = F.default.fromTimestamp(i)),
        b.A.active ? tU(t.id, ei.P.NOTIFICATION_CENTER, void 0, !1) : r ? n.mentionCount-- : n.mentionCount++);
}
function tm(e) {
    let t = Q.default.getCurrentUser();
    if (null == t || null == e.relationship.since || e.relationship.type !== ee.eA$.PENDING_INCOMING) return !1;
    let n = eM.get(t.id, ei.P.NOTIFICATION_CENTER),
        r = new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0) <= r &&
        (n.mentionCount = Math.max(0, n.mentionCount - 1));
}
function tg(e) {
    let { item: t } = e,
        n = Q.default.getCurrentUser()?.id;
    if (null == n) return !1;
    let r = eM.get(n, ei.P.NOTIFICATION_CENTER);
    ((r.lastMessageId = t.id), b.A.active || 0) ? tU(n, ei.P.NOTIFICATION_CENTER, t.id, !1) : r.mentionCount++;
}
function tE(e) {
    let { ids: t, optimistic: n } = e;
    if (n || b.A.active) return !1;
    let r = Q.default.getCurrentUser()?.id;
    if (null == r) return !1;
    let i = eM.get(r, ei.P.NOTIFICATION_CENTER);
    t.forEach((e) => {
        0 > F.default.compare(i.ackMessageId, e) && (i.mentionCount = Math.max(i.mentionCount - 1, 0));
    });
}
function tA(e) {
    let { guild: t } = e;
    return eM.clear(t.id, ei.P.GUILD_EVENT);
}
function tI(e) {
    let { guild: t } = e,
        n = t.latest_onboarding_question_id;
    if (null == n) return;
    let r = eM.get(t.id, ei.P.GUILD_ONBOARDING_QUESTION);
    (r._guildId = t.id), (r.lastMessageId = n);
}
function tT(e) {
    let { channel: t } = e;
    return eM.clear(t.id);
}
function ty(e) {
    let { channelId: t } = e,
        n = B.Ay.getCurrentSidebarChannelId(t),
        r = j.A.getChannel(t);
    if (null != r) {
        let e = eM.get(r.id);
        (e.ackMessageIdAtChannelSelect = e.ackMessageId ?? F.default.fromTimestamp(e.getAckTimestamp())),
            e.recordLastViewedTime();
    }
    tb(ed), tb(e_);
    let i = !1;
    return (
        ed !== t && ((i = tN(ed) || i), (i = tN(e_) || i)),
        (ed === t || (r?.type != null && ee.kvI.GUILD_THREADS_ONLY.has(r.type))) &&
            (i =
                eX(
                    {
                        section: ee.JJy.CHANNEL,
                        object: ee.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL,
                        objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    t,
                ) || i),
        ed === t &&
            (i =
                eX(
                    {
                        section: ee.JJy.CHANNEL,
                        object: ee.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR,
                        objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    n,
                ) || i),
        (ed = t),
        (e_ = n),
        i
    );
}
function tS() {
    let e = B.Ay.getCurrentSidebarChannelId(ed),
        t = !1;
    return (
        e_ !== e
            ? ((t = tN(e_)), (e_ = e))
            : (t =
                  eX(
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
function tv(e) {
    let { channelId: t, guildId: n, messageId: r } = e;
    return ty({
        guildId: n,
        channelId: t,
        messageId: r,
        type: "CHANNEL_SELECT",
        source: "OVERLAY_TEXT_CHAT_SELECT_CHANNEL",
    });
}
function tC(e) {
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
                    section: ee.JJy.CHANNEL,
                    object: ee.ZSU.ACK_VOICE_CHANNEL_SELECT,
                    objectType: ee.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
            })
        );
}
function tb(e) {
    null == e || (eM.get(e).isManualAck = !1);
}
function tN(e) {
    if (null == e) return !1;
    let t = eM.get(e);
    return !t.hasUnread() && ((t.oldestUnreadMessageId = null), !0);
}
function tR(e) {
    let t = !1;
    return (
        eA.forEachChannel((n, r) => {
            r.has(e.windowId) && (t = tO(n, e.focused) || t);
        }),
        t
    );
}
function tO(e, t) {
    if (null == e) return !1;
    let n = eM.get(e);
    return (
        t || n.hasUnread() || (n.oldestUnreadMessageIdStale = !0),
        eX(
            {
                section: ee.JJy.CHANNEL,
                object: ee.ZSU.ACK_WINDOW_FOCUS,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
            e,
        )
    );
}
function tD(e) {
    let { channelId: t } = e;
    return eX(
        {
            section: ee.JJy.CHANNEL,
            object: ee.ZSU.ACK_CHANNEL_SCROLL,
            objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
        },
        t,
    );
}
function tL(e) {
    let { channelId: t, messageId: n, immediate: r = !1, force: i = !1, context: a, location: s } = e,
        o = eM.get(t),
        l = o.ack({
            messageId: n,
            local: a !== ee.QCW,
            immediate: r,
            force: i,
            isExplicitUserAction: !0,
            location: s,
            trackAnalytics: !0,
        });
    return null != n ? (o.rebuildChannelState(), !0) : l;
}
function tw(e) {
    let { channelId: t, timestamp: n } = e;
    return eM.get(t).ackPins(n);
}
function tx(e) {
    let { channelId: t, messageId: n, manual: r, newMentionCount: i } = e,
        a = eM.get(t);
    return r
        ? (a.rebuildChannelState(n, !0, i), a.clearOutgoingAck(), !0)
        : n !== a._ackMessageId && a.ack({ messageId: n, local: !0, trackAnalytics: !1 });
}
function tP(e) {
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
    return tU(t, n, r, i);
}
function tk(e) {
    let { ackType: t, ackedId: n, local: r } = e,
        i = Q.default.getCurrentUser()?.id;
    return null != i && tU(i, t, n, r);
}
function tU(e, t, n, r) {
    let i = eM.get(e, t);
    return (
        n !== i.ackMessageId &&
        i.lastMessageId !== i.ackMessageId &&
        (null != i.lastMessageId || 0 !== i.mentionCount) &&
        ((n = n ?? i.lastMessageId ?? F.default.fromTimestamp(i.getAckTimestamp())),
        i.ack({ messageId: n, local: r ?? !0, trackAnalytics: !1 }))
    );
}
function tG(e) {
    let { channelId: t, lastPinTimestamp: n } = e,
        r = eM.get(t),
        i = eb(n);
    return r.lastPinTimestamp !== i && ((r.lastPinTimestamp = i), !0);
}
function tF(e) {
    let t = !1;
    for (let n of e.channels) {
        let e = eM.get(n.id),
            r = eb(n.lastPinTimestamp);
        (e.lastMessageId !== n.lastMessageId || e.lastPinTimestamp !== r) &&
            ((t = !0), (e.lastMessageId = n.lastMessageId), (e.lastPinTimestamp = r));
    }
    return t;
}
function tV() {
    ef = null;
}
function tB(e) {
    let { readStates: t } = e;
    (eh = !0),
        eC(),
        t.forEach((e) => {
            let t = e.type ?? ei.P.CHANNEL;
            e.type = t;
            let n = eM._readStates.get(t) ?? new Map();
            n.set(e.channelId, (0, d.pp)(e, eM)), eM._readStates.has(t) || eM._readStates.set(t, n);
        });
}
function tj(e) {
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
        t === ee.QCW &&
            (ep.push(
                ...e.map((e) => ({
                    channel_id: e.channelId,
                    message_id: e.messageId,
                    read_state_type: e.readStateType,
                })),
            ),
            em || eD(n));
}
function tY(e) {
    let { channels: t, context: n, onFinished: r } = e;
    tH(
        t.filter((e) => null != e.messageId && t0.hasUnreadOrMentions(e.channelId, e.readStateType)),
        n,
        r,
    );
}
function tW(e) {
    let { channelId: t, windowId: n } = e;
    return (
        !eA.hasWindowId(t, n) &&
        (eA.addWindowId(t, n),
        eX(
            {
                section: ee.JJy.CHANNEL,
                object: ee.ZSU.ENABLE_AUTOMATIC_ACK,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
            t,
        ))
    );
}
function tK(e) {
    let { channelId: t, windowId: n } = e;
    return eA.removeWindowId(t, n), !1;
}
function t$(e) {
    let { channelId: t } = e;
    return tN(t);
}
function tz(e) {
    let { channelId: t, location: n } = e;
    return eX(n, t);
}
function tq(e) {
    let { changesByChannelId: t } = e;
    for (let e in t) {
        let n = t[e],
            r = eM.getIfExists(e);
        if (null != r)
            for (let e of [n.new_messages?.[0]].concat(n.modified_messages ?? []).filter(U.Vq))
                1 === F.default.compare(e.id, r.lastMessageId) && (r.lastMessageId = e.id);
    }
}
function tX(e) {
    let { ackedId: t } = e,
        n = Q.default.getCurrentUser()?.id;
    if (null == n) return !1;
    let r = eM.get(n, ei.P.MESSAGE_REQUESTS);
    if (t === r.ackMessageId) return !1;
    (r.ackMessageId = t), r.ack({ messageId: t, isExplicitUserAction: !0, trackAnalytics: !1 });
}
function tZ(e) {
    let t = Q.default.getCurrentUser()?.id;
    if (null == t) return !1;
    let n = eM.get(t, ei.P.MESSAGE_REQUESTS);
    if (null == n.ackMessageId) return !1;
    n.ackMessageId = void 0;
}
function tQ(e) {
    let { state: t } = e;
    return (
        t === ee.g6G.ACTIVE &&
        eX(
            {
                section: ee.JJy.CHANNEL,
                object: ee.ZSU.ACK_APP_FOREGROUND,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
            X.A.getChannelId(),
        )
    );
}
class tJ extends l.Ay.Store {
    static displayName = "ReadStateStore";
    initialize() {
        H.A,
            Q.default,
            W.A,
            Y.A,
            j.A,
            X.A,
            $.A,
            z.A,
            h.A,
            O.A,
            D.A,
            B.Ay,
            I.Ay,
            A.A,
            g.A,
            Z.Ay,
            J.A,
            b.A,
            y.A,
            x.A,
            v.A,
            this.waitFor(
                O.A,
                V.default,
                h.A,
                B.Ay,
                j.A,
                H.A,
                f.Ay,
                g.A,
                Y.A,
                I.Ay,
                W.A,
                K.A,
                D.A,
                $.A,
                b.A,
                z.A,
                q.A,
                X.A,
                Z.Ay,
                x.A,
                Q.default,
                J.A,
            ),
            this.syncWith([B.Ay], tS);
    }
    getReadStatesByChannel() {
        return eM._readStates.get(ei.P.CHANNEL) ?? new Map();
    }
    getForDebugging(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eM.getIfExists(e, t);
    }
    getNotifCenterReadState(e) {
        return eM.getIfExists(e, ei.P.NOTIFICATION_CENTER);
    }
    hasUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.canBeUnread() && e.hasUnread(), !1);
    }
    hasUnreadOrMentions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.canBeUnread() && e.hasUnreadOrMentions(), !1);
    }
    hasTrackedUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.canTrackUnreads() && e.hasUnread(), !1);
    }
    isForumPostUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.isForumPostUnread(), !1);
    }
    getUnreadCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canBeUnread() ? e.unreadCount : 0), 0);
    }
    getMentionCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL,
            n = eM.getValue(e, t, (e) => (e.canHaveMentions() ? e.getMentionCount() : 0), 0);
        if ((0, p.A)(e) && n > 0) return 1;
        return n;
    }
    getIsMentionLowImportance(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return t === ei.P.CHANNEL && eM.getValue(e, t, (e) => e.isMentionLowImportance, !1);
    }
    getGuildChannelUnreadState(e, t, n, r, i) {
        return eM.getValue(e.id, ei.P.CHANNEL, (a) => a.getGuildChannelUnreadState(e, t, n, r, i), {
            mentionCount: 0,
            unread: !1,
            isMentionLowImportance: !1,
        });
    }
    hasRecentlyVisitedAndRead(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.hasRecentlyVisitedAndRead(), !1);
    }
    ackMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canBeUnread() ? e.ackMessageId : null), null);
    }
    getTrackedAckMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canTrackUnreads() ? e._ackMessageId : null), null);
    }
    lastMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.lastMessageId, null);
    }
    lastMessageTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.lastMessageTimestamp, 0);
    }
    lastPinTimestamp(e) {
        return eM.getValue(e, ei.P.CHANNEL, (e) => e.lastPinTimestamp, null);
    }
    getOldestUnreadMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadMessageId : null), null);
    }
    getOldestUnreadTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0), 0);
    }
    isEstimated(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eM.getValue(e, t, (e) => e.estimated, !1);
    }
    hasOpenedThread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return eM.getValue(e, t, (e) => e._persisted, !1);
    }
    hasUnreadPins(e) {
        return eM.getValue(e, ei.P.CHANNEL, (e) => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1);
    }
    isNewForumThread(e, t, n) {
        let r = eM.get(t);
        if (
            !0 === eM.get(e)._persisted ||
            null == r.ackMessageIdAtChannelSelect ||
            0 >= F.default.compare(e, r.ackMessageIdAtChannelSelect)
        )
            return !1;
        let i = eK(n);
        return F.default.extractTimestamp(e) > i;
    }
    getAllReadStates(e) {
        let t = [];
        return (
            eM.forEach((n) => {
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
        return eM.getGuildSentinels(e).unreadsSentinel;
    }
    getMentionChannelIds() {
        return eM.getMentionChannelIds();
    }
    getNonChannelAckId(e) {
        let t = Q.default.getCurrentUser()?.id;
        return null == t ? null : eM.get(t, e).ackMessageId;
    }
    getSnapshot(e, t) {
        let n = eM.get(e);
        return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot;
    }
    getChannelIdsForWindowId(e) {
        return eA.getAllChannelIdsForWindowId(e);
    }
}
let t0 = new tJ(_.h, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: tq,
        CONNECTION_OPEN: eQ,
        CONNECTION_OPEN_SUPPLEMENTAL: e3,
        LOGOUT: eJ,
        OVERLAY_INITIALIZE: e6,
        CACHE_LOADED: tB,
        GUILD_CREATE: e4,
        LOAD_MESSAGES_SUCCESS: e5,
        MESSAGE_CREATE: e8,
        MESSAGE_DELETE: e7,
        MESSAGE_DELETE_BULK: e7,
        MESSAGE_ACK: tx,
        CHANNEL_ACK: tL,
        CHANNEL_LOCAL_ACK: tP,
        CHANNEL_PINS_ACK: tw,
        CHANNEL_PINS_UPDATE: tG,
        CHANNEL_SELECT: ty,
        OVERLAY_TEXT_CHAT_SELECT_CHANNEL: tv,
        VOICE_CHANNEL_SELECT: tC,
        CHANNEL_CREATE: te,
        THREAD_CREATE: tt,
        THREAD_UPDATE: ti,
        THREAD_LIST_SYNC: to,
        LOAD_THREADS_SUCCESS: tl,
        LOAD_ARCHIVED_THREADS_SUCCESS: tl,
        SEARCH_MESSAGES_SUCCESS: tc,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: tc,
        THREAD_MEMBER_UPDATE: ta,
        THREAD_MEMBERS_UPDATE: ts,
        CHANNEL_DELETE: tT,
        THREAD_DELETE: tT,
        WINDOW_FOCUS: tR,
        UPDATE_CHANNEL_DIMENSIONS: tD,
        CURRENT_USER_UPDATE: tV,
        BULK_ACK: tY,
        ENABLE_AUTOMATIC_ACK: tW,
        DISABLE_AUTOMATIC_ACK: tK,
        GUILD_FEATURE_ACK: tM,
        GUILD_SCHEDULED_EVENT_CREATE: t_,
        GUILD_SCHEDULED_EVENT_UPDATE: tf,
        GUILD_SCHEDULED_EVENT_DELETE: th,
        GUILD_DELETE: tA,
        GUILD_UPDATE: tI,
        RESORT_THREADS: tu,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: tj,
        DECAY_READ_STATES: eC,
        NOTIFICATION_CENTER_ITEM_CREATE: tg,
        RELATIONSHIP_ADD: tp,
        RELATIONSHIP_REMOVE: tm,
        NOTIFICATION_CENTER_ITEMS_ACK: tE,
        USER_NON_CHANNEL_ACK: tk,
        PASSIVE_UPDATE_V2: tF,
        CLEAR_OLDEST_UNREAD_MESSAGE: t$,
        TRY_ACK: tz,
        MESSAGE_REQUEST_ACK: tX,
        MESSAGE_REQUEST_CLEAR_ACK: tZ,
        APP_STATE_UPDATE: tQ,
    }),
    t1 = t0;
