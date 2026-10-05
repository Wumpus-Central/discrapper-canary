let i;
(n.d(t, { Cr: () => ew, Ay: () => e4, Wm: () => eD }), n(321073), n(938796));
var r = n(435558),
    a = n(536637),
    s = n.n(a),
    l = n(665260),
    o = n(17928),
    d = n(636537),
    c = n(451988),
    u = n(933681),
    _ = n(73153),
    E = n(933958);
n(183636);
var A = n(198052),
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
    O = n(280450),
    R = n(209489);
async function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        n = O.default.getId();
    for (let i = 0; i < t; i++)
        try {
            return await e();
        } catch (e) {
            if (i + 1 >= t) throw e;
            if ((await (0, c.BK)((i + 1) * 2e3), await R.A.awaitOnline(), n !== O.default.getId()))
                throw Error("User changed.");
        }
    throw Error("Unreachable code in networkAwareRetry");
}
var y = n(252431),
    D = n(491001),
    v = n(395504),
    b = n(206885),
    M = n(622794);
let P = new Map();
var U = n(970278),
    w = n(152007),
    G = n(882733),
    x = n(607508),
    k = n(617617),
    F = n(95701),
    B = n(799422),
    V = n(927813),
    H = n(403362),
    j = n(935208),
    W = n(761640),
    Y = n(734057),
    K = n(72314),
    $ = n(919638),
    z = n(71393),
    X = n(885576),
    Z = n(232835),
    q = n(576705),
    Q = n(994500),
    J = n(309010),
    ee = n(543465),
    et = n(287809),
    en = n(531685),
    ei = n(652215),
    er = n(5867),
    ea = n(746080),
    es = n(988794),
    el = n(790782),
    eo = n(37411);
let ed = new f.A("ReadStateStore");
__OVERLAY__ && (i = n(532294).default);
let ec = () => !1;
!__OVERLAY__ && b.O && ({ isOverlayChannelVisible: ec } = n(267355));
let eu = ei.hVb.VIEW_CHANNEL | ei.hVb.READ_MESSAGE_HISTORY,
    e_ = J.Ay.getChannelId(),
    eE = null,
    eA = null,
    eh = null,
    eI = new Set(),
    ef = !1,
    ep = [],
    eT = !1,
    em = null,
    eg = new (class {
        channelWindowIds = {};
        addWindowId(e, t) {
            (null == this.channelWindowIds[e] && (this.channelWindowIds[e] = new Set()),
                this.channelWindowIds[e].add(t));
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
            for (let e of t) if (en.A.isFocused(e)) return !0;
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
    eS = 30 * V.A.Millis.DAY;
function eN() {
    return j.default.fromTimestamp(Date.now() - eS);
}
let eC = 0,
    eO = 0,
    eR = null;
function eL() {
    ((eC = Date.now() - 7 * V.A.Millis.DAY),
        (eO = Date.now() - 3 * V.A.Millis.DAY),
        clearTimeout(eR),
        (eR = setTimeout(() => {
            _.h.dispatch({ type: "DECAY_READ_STATES" });
        }, +V.A.Millis.HOUR)));
}
function ey(e) {
    if (null == e) return 0;
    let t = Date.parse(e);
    return isNaN(t) ? 0 : t;
}
function eD(e, t) {
    let n = Y.A.getChannel(e.channel_id);
    return (
        !(null == n || Q.A.isBlockedOrIgnoredForMessage(e)) &&
        !!(
            (0, C.Ay)({
                message: e,
                userId: t.id,
                suppressEveryone: ee.Ay.isSuppressEveryoneEnabled(n.guild_id),
                suppressRoles: ee.Ay.isSuppressRolesEnabled(n.guild_id),
            }) || ev(n)
        )
    );
}
function ev(e) {
    return null != e && e.isPrivate() && !ee.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
}
async function eb(e) {
    if (0 === ep.length) {
        ((eT = !1), e?.());
        return;
    }
    eT = !0;
    let t = ep.splice(0, 100);
    try {
        await L(() =>
            d.Bo.post({ url: ei.Rsh.BULK_ACK, body: { read_states: t }, oldFormErrors: !0, rejectWithError: !1 }),
        );
    } catch (e) {
        ((ep.length = 0), (eT = !1));
        return;
    }
    (await (0, c.BK)(1e3), eb(e));
}
function eM(e, t) {
    return null != i && i.isInstanceFocused() && i.isPinned(ei.uss.TEXT) ? e : null != t && ec(t);
}
function eP(e, t) {
    et.default.getCurrentUser()?.hasAnyStaffLevel() && ed.log("STAFF-ACK-LOG:", t, e.channelId);
}
function eU(e, t) {
    if ((eP(e, "shouldAutomaticallyAck called"), e.type !== el.P.CHANNEL)) return (eP(e, "not channel read state"), !1);
    let n = Y.A.getChannel(e.channelId),
        i = null != n && n.isForumPost();
    if (
        null != E.Ay.getConnectedActivityLocation() &&
        E.Ay.getActivityPanelMode() === er.Gd.PANEL &&
        E.Ay.getFocusedLayout() === er.E8.NO_CHAT
    )
        return (eP(e, "In activity"), !1);
    if (X.A.isIdle()) return (eP(e, "Is idle"), !1);
    if (!e.canTrackUnreads()) return (eP(e, "Cannot track unreads"), !1);
    if (n?.isForumLikeChannel() !== !0 && !eg.isAnyWindowFocused(e.channelId) && !eM(!0, e.channelId)) return !1;
    if (i && !e._persisted) return (eP(e, "unpersisted forum post"), !0);
    if (!e.hasUnreadOrMentions()) return (eP(e, "No unread or mentions"), !1);
    if (n?.isForumLikeChannel() === !0) return (eP(e, "Forum-like channel"), !1);
    if (!(i && !e._isJoinedThread) && !K.A.isAtBottom(e.channelId)) return (eP(e, "Not at bottom"), !1);
    let r = A.A.getLayout(e.channelId);
    if (!A.A.getChatOpen(e.channelId) && (r === ei.DUB.NO_CHAT || r === ei.DUB.FULL_SCREEN))
        return (eP(e, "Fullscreen video"), !1);
    if (!eg.isChannelAckable(e.channelId)) return (eP(e, "Not ackable"), !1);
    let a = Z.A.getMessages(e.channelId);
    return null == a || !a.ready || a.loadingMore
        ? (eP(e, "Still loading messages"), !1)
        : (0, M.oE)(e.channelId, t)
          ? (eP(e, "Acked"), !0)
          : (eP(e, "Chat not focused"), !1);
}
class ew {
    static _guildReadStateSentinels = {};
    static _readStates = new Map();
    static _mentionChannels = new Set();
    channelId;
    type = el.P.CHANNEL;
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL,
            n = ew._readStates.get(t)?.get(e);
        if (null == n) {
            n = new ew(e, t);
            let i = ew._readStates.get(t) ?? new Map();
            (i.set(e, n), ew._readStates.has(t) || ew._readStates.set(t, i));
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL;
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL,
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0,
            r = this.getIfExists(e, t);
        return null == r ? i : n(r);
    }
    static clear(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL,
            n = ew._readStates.get(t);
        if (null == n) return !1;
        let i = n.delete(e);
        return (i && ew._mentionChannels.delete(e), i);
    }
    static clearAll() {
        (ew._readStates.clear(), ew._mentionChannels.clear());
    }
    constructor(e, t = el.P.CHANNEL) {
        ((this.channelId = e),
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
            (this.ackPinTimestamp = 0),
            (this.lastPinTimestamp = 0),
            (this._oldestUnreadMessageId = null),
            (this.oldestUnreadMessageIdStale = !1),
            (this.estimated = !1),
            (this._unreadCount = 0),
            (this._mentionCount = 0),
            (this.outgoingAck = null));
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
            lastPinTimestamp: A,
            _oldestUnreadMessageId: h,
            oldestUnreadMessageIdStale: I,
            estimated: f,
            _mentionCount: p,
            flags: T,
            lastViewed: m,
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
                lastPinTimestamp: A,
                _oldestUnreadMessageId: h,
                oldestUnreadMessageIdStale: I,
                estimated: f,
                _mentionCount: p,
                flags: T,
                lastViewed: m,
            };
        let g = {
            channelId: t,
            type: n,
            _guildId: i,
            _persisted: l,
            _lastMessageId: d,
            _lastMessageTimestamp: c,
            _ackMessageId: u,
            _ackMessageTimestamp: _,
            ackPinTimestamp: E,
            lastPinTimestamp: A,
            _mentionCount: p,
            flags: T,
        };
        return (
            null != m && m > 0 && (g.lastViewed = m),
            r && ((g._isThread = r), (g._isActiveThread = a), (g._isJoinedThread = s)),
            g
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
            lastPinTimestamp: h,
            _oldestUnreadMessageId: I,
            oldestUnreadMessageIdStale: f,
            estimated: p,
            _unreadCount: T,
            _mentionCount: m,
            flags: g,
            lastViewed: S,
        } = e;
        ((this.channelId = t),
            (this.type = n ?? el.P.CHANNEL),
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
            (this.lastPinTimestamp = h),
            (this._oldestUnreadMessageId = I),
            (this.oldestUnreadMessageIdStale = f ?? !1),
            (this.estimated = p ?? !1),
            (this._unreadCount = T ?? 0),
            (this._mentionCount = m),
            (this.flags = g),
            (this.lastViewed = S),
            ew._mentionChannels.delete(this.channelId),
            this._mentionCount > 0 && this.canHaveMentions() && ew._mentionChannels.add(this.channelId));
    }
    incrementGuildUnreadsSentinel() {
        null != this._guildId && ew.getGuildSentinels(this._guildId).unreadsSentinel++;
    }
    get oldestUnreadMessageId() {
        return this._oldestUnreadMessageId;
    }
    set oldestUnreadMessageId(e) {
        ((this._oldestUnreadMessageId = e), (this.oldestUnreadMessageIdStale = !1));
    }
    get lastMessageId() {
        return this._lastMessageId;
    }
    set lastMessageId(e) {
        ((this._lastMessageId = e), (this._lastMessageTimestamp = null != e ? j.default.extractTimestamp(e) : 0));
    }
    get lastMessageTimestamp() {
        return this._lastMessageTimestamp;
    }
    get ackMessageId() {
        return this._ackMessageId;
    }
    set ackMessageId(e) {
        ((this._ackMessageId = e), (this._ackMessageTimestamp = null != e ? j.default.extractTimestamp(e) : 0));
    }
    get unreadCount() {
        return this._unreadCount ?? 0;
    }
    set unreadCount(e) {
        ((void 0 === this._unreadCount || 0 === this._unreadCount || 0 === e) && this.incrementGuildUnreadsSentinel(),
            (this._unreadCount = e));
    }
    get mentionCount() {
        return this._mentionCount;
    }
    set mentionCount(e) {
        ((0 === this._mentionCount || 0 === e) && this._mentionCount !== e && this.incrementGuildUnreadsSentinel(),
            (this._mentionCount = e),
            ew._mentionChannels.delete(this.channelId),
            this._mentionCount > 0 && this.canHaveMentions() && ew._mentionChannels.add(this.channelId));
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
        let e = Z.A.getMessages(this.channelId);
        if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
        if (!this.hasMentions()) return this.lastMessageId;
        let t = null,
            n = this.mentionCount,
            i = et.default.getCurrentUser();
        return (
            e.forEach(
                (e) => {
                    if (n > 0 && e.author.id !== i?.id) --n;
                    else if (0 === n) return ((t = e.id), !1);
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
        if (this.type !== el.P.CHANNEL) return !1;
        let e = Y.A.getChannel(this.channelId);
        return null != e && e.isPrivate();
    }
    rebuildChannelState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (
            ((this.ackMessageId = e ?? this._ackMessageId ?? this.guessAckMessageId()),
            (this.oldestUnreadMessageId = null),
            (this.estimated = !1),
            (this.unreadCount = 0),
            t && (this.mentionCount = 0),
            this.hasUnread())
        ) {
            let e = et.default.getCurrentUser(),
                n = this.getAckTimestamp(),
                i = !1,
                r = !1,
                a = null,
                s = Z.A.getMessages(this.channelId);
            (s.forAll((s) => {
                (i
                    ? (this.oldestUnreadMessageId = this._oldestUnreadMessageId ?? s.id)
                    : (i = s.id === this._ackMessageId),
                    j.default.extractTimestamp(s.id) > n
                        ? (this.unreadCount++, t && eD(s, e) && this.mentionCount++, (a = a ?? s.id))
                        : (r = !0));
            }),
                (this.estimated = !s.hasPresent() || (!(i || r) && s.length === this.unreadCount)),
                (this.oldestUnreadMessageId = this._oldestUnreadMessageId ?? a));
        }
        null != n && (this.mentionCount = n);
    }
    handleGuildEventRemoval(e, t) {
        if (j.default.compare(this.ackMessageId, t) >= 0) return;
        let n = T.Ay.getGuildScheduledEventsForGuild(e),
            i = this.getAckTimestamp();
        if (isNaN(i)) return;
        let r = this._ackMessageId ?? j.default.fromTimestamp(i),
            a = null,
            s = 0;
        (n.forEach((e) => {
            (0, T.d6)(e) && (j.default.compare(e.id, a) > 0 && (a = e.id), j.default.compare(e.id, r) > 0 && s++);
        }),
            (this.lastMessageId = a),
            (this.mentionCount = s));
    }
    canTrackUnreads() {
        if (this.type !== el.P.CHANNEL) return !0;
        if ((this._isThread && !this._isActiveThread) || this._isResourceChannel) return !1;
        let e = Y.A.getBasicChannel(this.channelId);
        return (
            null != e &&
            ("basicPermissions" in e
                ? B.A.has(e.basicPermissions, ei.hVb.VIEW_CHANNEL)
                : !I.A.isChannelGated(this.guildId, this.channelId) || q.A.can(ei.xBc.VIEW_CHANNEL, e))
        );
    }
    canBeUnread() {
        return (
            !(
                (this._isThread && !this._isJoinedThread) ||
                (0, S.k_)(this.channelId, [g.A, N.A]) ||
                (!this._isThread &&
                    (0, v.WW)(this._guildId) &&
                    (this._lastMessageTimestamp < eC ||
                        (!ee.Ay.isChannelOrParentOptedIn(this._guildId, this.channelId) &&
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
                ((0, v.WW)(this._guildId) && this._lastMessageTimestamp < eC)
            ) && this.canTrackUnreads()
        );
    }
    getGuildChannelUnreadState(e, t, n, i, r) {
        if (
            t &&
            (this._lastMessageTimestamp < eC ||
                (!ee.Ay.isChannelRecordOrParentOptedIn(e) &&
                    !this.hasRecentlyVisitedAndRead() &&
                    this.mentionCount <= 0))
        )
            return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        if ("basicPermissions" in e) {
            if (!B.A.has(e.basicPermissions, ei.hVb.VIEW_CHANNEL))
                return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        } else if (I.A.isChannelGated(this.guildId, this.channelId) && !q.A.can(ei.xBc.VIEW_CHANNEL, e))
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
            this.getAckTimestamp() > eO &&
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
        if (this.type !== el.P.CHANNEL || !this.canTrackUnreads()) return !1;
        if (null == e) {
            if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
            ((this._persisted = !0),
                L(() => d.Bo.post({ url: ei.Rsh.PINS_ACK(this.channelId), oldFormErrors: !0, rejectWithError: !0 })));
        }
        let t = ey(e);
        return ((this.ackPinTimestamp = 0 !== t ? t : this.lastPinTimestamp), !0);
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
                eI.delete(this.channelId),
                (this._persisted = !0),
                ef && (this.ackedWhileCached = !0),
                (function (e) {
                    if (null == e) return;
                    let t = ew.get(e);
                    if (t.type !== el.P.CHANNEL) return;
                    let n = Y.A.getChannel(t.channelId);
                    if (null == n || !n.isForumPost() || null == n.parent_id) return;
                    let i = n.parent_id,
                        r = ew.get(i);
                    U.A.hasLoaded(n.guild_id) &&
                        j.default
                            .keys(U.A.getThreadsForParent(n.guild_id, i))
                            .every((e) => e6.hasOpenedThread(e) || 0 > j.default.compare(e, r.ackMessageId)) &&
                        r.ack({
                            trackAnalytics: !0,
                            location: {
                                section: ei.JJy.CHANNEL,
                                object: ei.ZSU.ACK_FORUM_CHANNEL_NO_UNREAD_POSTS,
                                objectType: ei.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                        });
                })(this.channelId),
                r
                    ? (this.oldestUnreadMessageId = null)
                    : (null == this.outgoingAck &&
                          (this.outgoingAckTimer = setTimeout(
                              () => {
                                  (this.type === el.P.CHANNEL ? this._ack(n, i) : this._nonChannelAck(),
                                      (this.outgoingAck = null),
                                      (this.outgoingAckTimer = null));
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
        ((this.outgoingAck = null),
            null != this.outgoingAckTimer && (clearTimeout(this.outgoingAckTimer), (this.outgoingAckTimer = null)));
    }
    _shouldAck(e, t, n) {
        return (
            !!e ||
            !!n ||
            !!t ||
            (!eI.has(this.channelId) &&
                (this.type !== el.P.CHANNEL ||
                    !!this.loadedMessages ||
                    !!Y.A.getChannel(this.channelId)?.isForumLikeChannel()))
        );
    }
    _ack(e, t) {
        let { outgoingAck: i } = this;
        if (null == i) return;
        let r = O.default.getId(),
            a = eh;
        this._persisted = !0;
        let s = this.recalculateFlags(),
            l = s === this.flags ? void 0 : s;
        L(() =>
            d.Bo.post({
                url: ei.Rsh.MESSAGE_ACK(this.channelId, i),
                body: { token: eh, last_viewed: this.lastViewed, flags: l },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
        ).then((i) => {
            null != i &&
                (eh === a && r === O.default.getId() && (eh = i.body.token),
                _.h.dispatch({ type: "MESSAGE_ACKED" }),
                t &&
                    n
                        .e("316137")
                        .then(n.bind(n, 862544))
                        .then((t) => {
                            let { default: n } = t;
                            n(this.channelId, e ?? {});
                        }));
        });
    }
    recalculateFlags() {
        if (this.type !== el.P.CHANNEL) return;
        let e = Y.A.getChannel(this.channelId);
        if (null != e) return e.isThread() ? 2 : +(null != e.guild_id);
    }
    _nonChannelAck() {
        let e,
            { outgoingAck: t, channelId: n, type: i } = this;
        if (null != t) {
            switch (i) {
                case el.P.GUILD_HOME:
                case el.P.GUILD_EVENT:
                case el.P.GUILD_ONBOARDING_QUESTION:
                    e = ei.Rsh.GUILD_FEATURE_ACK(n, t, i);
                    break;
                case el.P.NOTIFICATION_CENTER:
                case el.P.MESSAGE_REQUESTS:
                    e = ei.Rsh.USER_NON_CHANNEL_ACK(t, i);
                    break;
                case el.P.CONJURING_PROJECT:
                    e = ei.Rsh.CONJURE_PROJECT_ACK(n, t);
                    break;
                default:
                    return;
            }
            ((this._persisted = !0), L(() => d.Bo.post({ url: e, body: {}, oldFormErrors: !0, rejectWithError: !0 })));
        }
    }
    delete() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = Y.A.getBasicChannel(this.channelId);
        (ed.log("Deleting ReadState", this.channelId, this.type, {
            remote: e,
            persisted: this._persisted,
            channelMissing: null == t,
            isOld: eV(this, eN()),
            validType: null != t && F.A_.has(t.type),
            readableType: null != t && (0, F.Z_)(t.type),
            oldThreadCutoff: eN(),
            mentionCount: this.mentionCount,
            channelId: this.channelId,
            ackMessageId: this._ackMessageId,
            lastMessageId: this._lastMessageId,
        }),
            e &&
                this._persisted &&
                d.Bo.del({
                    url: ei.Rsh.CHANNEL_ACK(this.channelId),
                    body: { version: 2, read_state_type: this.type },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
            ew._readStates.get(this.type)?.delete(this.channelId),
            ew._mentionChannels.delete(this.channelId));
    }
    shouldDeleteReadState(e) {
        var t, n, i;
        let r;
        if (0 !== $.A.totalUnavailableGuilds) return !1;
        if (null != this.type && this.type !== el.P.CHANNEL)
            return !(function (e) {
                switch (e.type) {
                    case el.P.GUILD_HOME:
                    case el.P.GUILD_EVENT:
                    case el.P.GUILD_ONBOARDING_QUESTION:
                        return null != z.A.getGuild(e.channelId);
                    case el.P.NOTIFICATION_CENTER:
                        return j.default.cast(et.default.getCurrentUser()?.id) === e.channelId;
                    default:
                        return !0;
                }
            })(this);
        let a = Y.A.getBasicChannel(this.channelId);
        if (null == a)
            if (eV(this, e)) return !0;
            else return !1;
        return (
            !!F.A_.has(a.type) &&
            (!(0, F.Z_)(a.type) ||
                (!(0, F.Gw)(a.type) &&
                    !(
                        !(
                            F.Le.has(a.type) &&
                            ((t = this),
                            (n = a),
                            (i = e),
                            !(null != (r = t.guildId) && U.A.isActive(r, n.parent_id, t.channelId)) && eV(t, i))
                        ) &&
                        (!(this.mentionCount > 0) || q.A.canBasicChannel(eu, a))
                    )))
        );
    }
    getAckTimestamp() {
        let e, t;
        if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
        if (this._isThread)
            return (
                (this._ackMessageTimestamp = eF(this.guildId, this.channelId)),
                (this._ackMessageId = j.default.fromTimestamp(this._ackMessageTimestamp)),
                this._ackMessageTimestamp
            );
        if (this.type === el.P.GUILD_EVENT || this.type === el.P.GUILD_ONBOARDING_QUESTION)
            e = z.A.getGuild(this.channelId);
        else if ((0, ea.jq)(this.channelId)) e = z.A.getGuild(this.guildId);
        else {
            let t = Y.A.getChannel(this.channelId);
            if (null != t) {
                let n = t.getGuildId();
                e = z.A.getGuild(n);
            }
        }
        return (
            null != e
                ? isNaN((t = eB(e))) && (t = j.default.extractTimestamp(this.channelId))
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
        if (null == e) return (ed.warn(`syncThreadSettings called with channel not in memory ${this.channelId}`), !1);
        let t = this.guildId,
            n = null != t && U.A.isActive(t, e.parent_id, this.channelId),
            i = w.A.hasJoined(this.channelId);
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
function eG(e) {
    e.forEach((e) => {
        if ((0, F.Z_)(e.type)) {
            let t = ew.get(e.id);
            ((t._guildId = e.guild_id),
                (t.lastMessageId = e.lastMessageId),
                (t.lastPinTimestamp = ey(e.lastPinTimestamp)),
                (t._isResourceChannel = e.hasFlag(ea.lx.IS_GUILD_RESOURCE_CHANNEL)),
                F.Le.has(e.type) && t.syncThreadSettings());
        }
    });
}
function ex(e) {
    e.forEach((e) => {
        if ((0, F.Z_)(e.type)) {
            let t = ew.get(e.id);
            ((t.lastMessageId = e.last_message_id),
                (t.lastPinTimestamp = ey(e.last_pin_timestamp)),
                (t._isResourceChannel = (0, l.Lt)(e.flags ?? 0, ea.lx.IS_GUILD_RESOURCE_CHANNEL)),
                F.Le.has(e.type) && t.syncThreadSettings());
        }
    });
}
function ek(e) {
    var t, n;
    ((t = e),
        t.threads?.forEach((e) => {
            if (!F.A_.has(e.type)) return;
            let n = ew.get(e.id);
            ((n.lastMessageId = e.lastMessageId),
                (n.lastPinTimestamp = ey(e.lastPinTimestamp)),
                (n._isThread = !0),
                (n._isActiveThread = !0),
                (n._isJoinedThread = null != e.member),
                null == n.ackMessageId && (n.ackMessageId = j.default.fromTimestamp(eF(t.id, e.id))),
                null == n.ackPinTimestamp && (n.ackPinTimestamp = eF(t.id, e.id)));
        }),
        (function (e) {
            if (e.guild_scheduled_events?.length === 0 && null == ew.getIfExists(e.id, el.P.GUILD_EVENT)) return;
            let t = ew.get(e.id, el.P.GUILD_EVENT);
            t._guildId = e.id;
            let n = 0,
                i = null,
                r = t._ackMessageId ?? j.default.fromTimestamp(t.getAckTimestamp());
            (e.guild_scheduled_events.forEach((e) => {
                (j.default.compare(e.id, i) > 0 && (i = e.id), j.default.compare(e.id, r) > 0 && n++);
            }),
                (t.lastMessageId = i),
                (t.mentionCount = n));
        })(e),
        (n = e),
        (ew.get(n.id, el.P.GUILD_HOME).lastMessageId = j.default.fromTimestamp(
            s()(Date.now()).subtract(24, "h").valueOf(),
        )),
        (function (e) {
            let t = z.A.getGuild(e.id);
            if (null == t) return;
            let n = t?.latestOnboardingQuestionId;
            if (null == n) return;
            let i = ew.get(t.id, el.P.GUILD_ONBOARDING_QUESTION);
            ((i._guildId = t.id), (i.lastMessageId = n));
        })(e));
}
function eF(e, t) {
    let n = Y.A.getChannel(t),
        i = z.A.getGuild(e ?? n?.guild_id),
        r = n?.isForumPost() ? 0 : eB(i),
        a = (w.A.joinTimestamp(t)?.getTime() ?? 0) - 5e3;
    isNaN(a) && (a = -5e3);
    let s = n?.threadMetadata?.archiveTimestamp,
        l = null != s ? new Date(s).getTime() - 1 : 0;
    isNaN(l) && (l = 0);
    let o = Math.max(a, l);
    return (
        o <= 0 && (o = j.default.extractTimestamp(t) - 1),
        (isNaN(o) || o <= 0) && (o = 0),
        isNaN(r) ? o : Math.max(r, o)
    );
}
function eB(e) {
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
function eV(e, t) {
    return (
        e.mentionCount > 0 ||
        !(
            j.default.compare(e.channelId, t) > 0 ||
            (null != e._ackMessageId && j.default.compare(e._ackMessageId, t) > 0) ||
            (null != e._lastMessageId && j.default.compare(e._lastMessageId, t) > 0)
        )
    );
}
function eH(e, t, n) {
    if (null == t) return !1;
    let i = ew.get(t);
    return !!eU(i, n) && i.ack({ trackAnalytics: !0, location: e });
}
function ej() {
    null != em && clearTimeout(em);
}
let eW = (0, r.throttle)((e) => {
    e.delete();
}, 100);
function eY(e) {
    for (let t of e) {
        let e = ew.get(t.id);
        (null != t.last_message_id && (e.lastMessageId = t.last_message_id),
            null != t.last_pin_timestamp && (e.lastPinTimestamp = ey(t.last_pin_timestamp)));
    }
}
function eK(e) {
    let { channelId: t } = e;
    ew.get(t).rebuildChannelState();
}
function e$(e) {
    let { threads: t } = e;
    ex(t);
}
function ez(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n } = e;
        (t.forEach((e) => {
            ex(
                e
                    .map((e) => {
                        let { thread: t } = e;
                        return t;
                    })
                    .filter(H.Vq),
            );
        }),
            ex(n));
    });
}
function eX(e) {
    let t = et.default.getCurrentUser();
    return null != e.creator_id && null != t && e.creator_id === t.id;
}
function eZ(e) {
    let { channel: t } = e;
    return ew.clear(t.id);
}
function eq() {
    let e = W.Ay.getCurrentSidebarChannelId(e_),
        t = !1;
    return (
        eE !== e
            ? ((t = e0(eE)), eJ({ previousChannelId: eE, newChannelId: e }), (eE = e))
            : (t =
                  eH(
                      {
                          section: ei.JJy.CHANNEL,
                          object: ei.ZSU.ACK_CHANNEL_SECTION_STORE_UPDATE,
                          objectType: ei.AnalyticsObjectTypes.ACK_AUTOMATIC,
                      },
                      e,
                  ) || t),
        t
    );
}
function eQ(e) {
    let t = ew.get(e);
    if (!t.hasMentions())
        return (
            (t.oldestUnreadMessageId = null),
            t.ack({
                isExplicitUserAction: !0,
                trackAnalytics: !0,
                location: {
                    section: ei.JJy.CHANNEL,
                    object: ei.ZSU.ACK_VOICE_CHANNEL_SELECT,
                    objectType: ei.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
            })
        );
}
function eJ(e) {
    let { previousChannelId: t, newChannelId: n } = e;
    t !== n && null != t && eI.delete(t);
}
function e0(e) {
    if (null == e) return !1;
    let t = ew.get(e);
    return !t.hasUnread() && ((t.oldestUnreadMessageId = null), !0);
}
function e1(e) {
    let { channelId: t, messageId: n, manual: i, newMentionCount: r } = e,
        a = ew.get(t);
    return i
        ? ((t === e_ || t === eE) && eI.add(t), a.rebuildChannelState(n, !0, r), a.clearOutgoingAck(), !0)
        : n !== a._ackMessageId && a.ack({ messageId: n, local: !0, trackAnalytics: !1 });
}
function e2(e) {
    let { id: t, ackType: n, ackedId: i, local: r } = e;
    return e3(t, n, i, r);
}
function e3(e, t, n, i) {
    let r = ew.get(e, t);
    return (
        n !== r.ackMessageId &&
        r.lastMessageId !== r.ackMessageId &&
        (null != r.lastMessageId || 0 !== r.mentionCount) &&
        ((n = n ?? r.lastMessageId ?? j.default.fromTimestamp(r.getAckTimestamp())),
        r.ack({ messageId: n, local: i ?? !0, trackAnalytics: !1 }))
    );
}
class e5 extends o.Ay.Store {
    static displayName = "ReadStateStore";
    initialize() {
        (K.A,
            et.default,
            z.A,
            $.A,
            Y.A,
            J.Ay,
            Z.A,
            q.A,
            A.A,
            U.A,
            w.A,
            W.Ay,
            T.Ay,
            p.A,
            I.A,
            ee.Ay,
            en.A,
            y.A,
            g.A,
            k.A,
            N.A,
            this.waitFor(
                U.A,
                O.default,
                A.A,
                W.Ay,
                Y.A,
                K.A,
                E.Ay,
                I.A,
                $.A,
                T.Ay,
                z.A,
                X.A,
                w.A,
                Z.A,
                y.A,
                q.A,
                Q.A,
                J.Ay,
                ee.Ay,
                k.A,
                et.default,
                en.A,
            ),
            this.syncWith([W.Ay], eq));
    }
    getReadStatesByChannel() {
        return ew._readStates.get(el.P.CHANNEL) ?? new Map();
    }
    getForDebugging(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL;
        return ew.getIfExists(e, t);
    }
    getNotifCenterReadState(e) {
        return ew.getIfExists(e, el.P.NOTIFICATION_CENTER);
    }
    hasLastMessage(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL;
        return ew.getValue(e, t, (e) => null != e.lastMessageId, !1);
    }
    canBeUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.canBeUnread(), !1);
    }
    hasUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.canBeUnread() && e.hasUnread(), !1);
    }
    wasUnreadOnSelect(e) {
        return eA === e;
    }
    hasUnreadOrMentions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.canBeUnread() && e.hasUnreadOrMentions(), !1);
    }
    hasTrackedUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.canTrackUnreads() && e.hasUnread(), !1);
    }
    isForumPostUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.isForumPostUnread(), !1);
    }
    getUnreadCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL;
        return ew.getValue(e, t, (e) => (e.canBeUnread() ? e.unreadCount : 0), 0);
    }
    getMentionCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL,
            n = ew.getValue(e, t, (e) => (e.canHaveMentions() ? e.getMentionCount() : 0), 0);
        if ((0, h.A)(e) && n > 0) return 1;
        return n;
    }
    getIsMentionLowImportance(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL;
        return t === el.P.CHANNEL && ew.getValue(e, t, (e) => e.isMentionLowImportance, !1);
    }
    getGuildChannelUnreadState(e, t, n, i, r) {
        return ew.getValue(e.id, el.P.CHANNEL, (a) => a.getGuildChannelUnreadState(e, t, n, i, r), {
            mentionCount: 0,
            unread: !1,
            isMentionLowImportance: !1,
        });
    }
    hasRecentlyVisitedAndRead(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.hasRecentlyVisitedAndRead(), !1);
    }
    ackMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL;
        return ew.getValue(e, t, (e) => (e.canBeUnread() ? e.ackMessageId : null), null);
    }
    getTrackedAckMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL;
        return ew.getValue(e, t, (e) => (e.canTrackUnreads() ? e._ackMessageId : null), null);
    }
    lastMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.lastMessageId, null);
    }
    lastMessageTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.lastMessageTimestamp, 0);
    }
    lastPinTimestamp(e) {
        return ew.getValue(e, el.P.CHANNEL, (e) => e.lastPinTimestamp, null);
    }
    getOldestUnreadMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL;
        return ew.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadMessageId : null), null);
    }
    getOldestUnreadTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL;
        return ew.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0), 0);
    }
    isEstimated(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL;
        return ew.getValue(e, t, (e) => e.estimated, !1);
    }
    hasOpenedThread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el.P.CHANNEL;
        return ew.getValue(e, t, (e) => e._persisted, !1);
    }
    hasUnreadPins(e) {
        return ew.getValue(e, el.P.CHANNEL, (e) => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1);
    }
    isNewForumThread(e, t, n) {
        let i = ew.get(t);
        if (
            !0 === ew.get(e)._persisted ||
            null == i.ackMessageIdAtChannelSelect ||
            0 >= j.default.compare(e, i.ackMessageIdAtChannelSelect)
        )
            return !1;
        let r = eB(n);
        return j.default.extractTimestamp(e) > r;
    }
    getAllReadStates(e) {
        let t = [];
        return (
            ew.forEach((n) => {
                switch (n.type) {
                    case el.P.GUILD_HOME:
                    case el.P.GUILD_EVENT:
                    case el.P.GUILD_ONBOARDING_QUESTION:
                        null != z.A.getGuild(n.channelId) && t.push(n.serialize(e));
                        break;
                    case el.P.NOTIFICATION_CENTER:
                    case el.P.MESSAGE_REQUESTS:
                        j.default.cast(et.default.getCurrentUser()?.id) === n.channelId && t.push(n.serialize(e));
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
    getResourceIds(e) {
        return Array.from(ew._readStates.get(e)?.keys() ?? []);
    }
    getNonChannelAckId(e) {
        let t = et.default.getCurrentUser()?.id;
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
let e6 = new e5(_.h, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: function (e) {
            let { changesByChannelId: t } = e;
            for (let e in t) {
                let n = t[e],
                    i = ew.getIfExists(e);
                if (null != i)
                    for (let e of [n.new_messages?.[0]].concat(n.modified_messages ?? []).filter(H.Vq))
                        1 === j.default.compare(e.id, i.lastMessageId) && (i.lastMessageId = e.id);
            }
        },
        CONNECTION_OPEN: function (e) {
            let { guilds: t, relationships: n, initialPrivateChannels: i, readState: r } = e;
            (eL(),
                (eh = null),
                ef || r.partial || ew.clearAll(),
                (ef = !1),
                r.entries.forEach((e) => {
                    var t;
                    let n = e.read_state_type ?? el.P.CHANNEL;
                    n !== el.P.CHANNEL &&
                        (e = {
                            id: (t = e).id,
                            read_state_type: t.read_state_type,
                            mention_count: t.badge_count,
                            last_message_id: t.last_acked_id,
                        });
                    let i = ew.get(e.id, n);
                    ((i._persisted = !0),
                        (i._mentionCount = e.mention_count ?? 0),
                        (i.flags = e.flags),
                        (i.lastViewed = e.last_viewed));
                    let r = Y.A.getBasicChannel(e.id);
                    (null != r && (0, F.fT)(r.type) && (null == e.last_message_id || 0 === e.last_message_id)
                        ? (i.ackMessageId = j.default.fromTimestamp(eF(r.guild_id, r.id)))
                        : i.ackedWhileCached
                          ? -1 === j.default.compare(i.ackMessageId, e.last_message_id) &&
                            (i.ackMessageId = e.last_message_id)
                          : (i.ackMessageId = e.last_message_id),
                        (i.ackedWhileCached = void 0),
                        (i.ackPinTimestamp = ey(e.last_pin_timestamp)),
                        ew._mentionChannels.delete(i.channelId),
                        i._mentionCount > 0 && i.canHaveMentions() && ew._mentionChannels.add(i.channelId));
                }),
                ew.resetGuildSentinels());
            let a = et.default.getCurrentUser()?.id;
            for (let e of (null != a &&
                (ew.get(a, el.P.NOTIFICATION_CENTER).lastMessageId = j.default.fromTimestamp(Date.now())),
            (function (e) {
                let t = et.default.getCurrentUser();
                if (null == t) return;
                let n = ew.get(t.id, el.P.NOTIFICATION_CENTER);
                e.forEach((e) => {
                    if (null == e.since || e.type !== ei.eA$.PENDING_INCOMING) return;
                    let t = new Date(e.since).getTime();
                    (null != n.ackMessageId ? j.default.extractTimestamp(n.ackMessageId) : 0) < t &&
                        (n.mentionCount++, (n.lastMessageId = j.default.fromTimestamp(t)));
                });
            })(n),
            eG(i),
            t))
                (eG("full_sync" === e.channels.op ? e.channels.items : e.channels.writes),
                    null != e.channelTimestampUpdates && eY(e.channelTimestampUpdates),
                    ek(e));
            (ej(),
                (em = setTimeout(
                    () =>
                        (function (e) {
                            let t = eN();
                            for (let n of e) {
                                let e = n.read_state_type ?? el.P.CHANNEL,
                                    i = ew.get(n.id, e);
                                i.shouldDeleteReadState(t) && eW(i);
                            }
                        })(r.entries),
                    10 * V.A.Millis.SECOND,
                )));
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { lazyPrivateChannels: t } = e;
            eG(t);
        },
        LOGOUT: ej,
        OVERLAY_INITIALIZE: function (e) {
            let { readStates: t, selectedChannelId: n } = e;
            (eL(), (eh = null), eJ({ previousChannelId: e_, newChannelId: n }), (e_ = n));
            let i = W.Ay.getCurrentSidebarChannelId(n);
            (eJ({ previousChannelId: eE, newChannelId: i }),
                (eE = i),
                ew.clearAll(),
                t.forEach((e) => {
                    let t = ew.get(e.channelId);
                    (t.deserializeForOverlay(e), t.type === el.P.CHANNEL && t.rebuildChannelState());
                }));
        },
        CACHE_LOADED: function (e) {
            let { readStates: t } = e;
            ((ef = !0),
                eL(),
                t.forEach((e) => {
                    let t = e.type ?? el.P.CHANNEL;
                    e.type = t;
                    let n = ew._readStates.get(t) ?? new Map();
                    (n.set(e.channelId, (0, u.pp)(e, ew)), ew._readStates.has(t) || ew._readStates.set(t, n));
                }));
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e,
                n = eN();
            (ew.forEach((e) => {
                e.guildId === t.id && e.shouldDeleteReadState(n) && e.delete(!1);
            }),
                eG("full_sync" === t.channels.op ? t.channels.items : t.channels.writes),
                null != t.channelTimestampUpdates && eY(t.channelTimestampUpdates),
                ek(t));
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let { channelId: t, isAfter: n, messages: i } = e,
                r = ew.get(t);
            ((r.loadedMessages = !0), null == r.lastMessageId && i.length > 0 && (r.lastMessageId = i[0].id));
            let a = Z.A.getMessages(t);
            (null != a &&
                ((i.length > 0 && 1 === j.default.compare(i[0].id, r.ackMessageId) && 0 === r.unreadCount) ||
                a.hasPresent() ||
                a.jumpTargetId === r.ackMessageId
                    ? r.rebuildChannelState()
                    : n &&
                      null != r.ackMessageId &&
                      a.has(r.ackMessageId, !0) &&
                      ((r.unreadCount += i.length), null == r.oldestUnreadMessageId && r.rebuildChannelState())),
                ex(i.map((e) => e.thread).filter(H.Vq)));
        },
        LOCAL_MESSAGES_LOADED: function (e) {
            let { channelId: t, messages: n } = e;
            if (!(0, D.K)() || 0 === n.length) return !1;
            let i = ew.get(t),
                r = n[0].id;
            (null == i.lastMessageId || j.default.compare(r, i.lastMessageId) > 0) &&
                ((i.lastMessageId = r), i.rebuildChannelState());
        },
        MESSAGE_CREATE: function (e) {
            let t,
                n,
                { channelId: r, message: a, isPushNotification: s } = e,
                l = ew.get(r),
                o = l.hasUnread(),
                d = null != l.lastMessageId && l.lastMessageId >= a.id;
            l.lastMessageId = a.id;
            let c = et.default.getCurrentUser(),
                u = Y.A.getBasicChannel(r);
            if (null != a.author && null != c && a.author.id === c.id && !ei.MRS.SELF_MENTIONABLE_SYSTEM.has(a.type))
                return (
                    null != l.outgoingAck && l.clearOutgoingAck(), e1({ channelId: r, messageId: a.id, manual: !1 })
                );
            let _ = (0, m.Y)();
            if (_?.isReady() === !0) {
                let e = _.getCurrentRoute();
                A.A.getChatOpen(l.channelId)
                    ? (t = l.channelId)
                    : e?.name === "channel"
                      ? (t = e.params.channelId)
                      : e?.name === "guilds" && (t = e.params?.channelId);
            } else null == _ && ((t = J.Ay.getChannelId()), (n = W.Ay.getCurrentSidebarChannelId(t)));
            let E =
                t === r ||
                n === r ||
                (function (e, t) {
                    let n = P.get(e);
                    if (null == n) return !1;
                    for (let e of n) if (t(e)) return !0;
                    return !1;
                })(r, (e) => en.A.isFocused(e));
            if (E && eU(l) && !s) {
                let e = eM(!0, l.channelId) ? ei.JJy.OVERLAY : ei.JJy.CHANNEL;
                return l.ack({
                    messageId: a.id,
                    trackAnalytics: !0,
                    location: {
                        section: e,
                        object: ei.ZSU.ACK_INCOMING_MESSAGE,
                        objectType: ei.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                });
            }
            if (eM(E && null != i && i.isInstanceLocked(), r))
                return l.ack({
                    messageId: a.id,
                    trackAnalytics: !0,
                    location: {
                        section: ei.JJy.OVERLAY,
                        object: ei.ZSU.ACK_INCOMING_MESSAGE,
                        objectType: ei.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                });
            if (
                (null == l.oldestUnreadMessageId || l.oldestUnreadMessageIdStale
                    ? (l.oldestUnreadMessageId = a.id)
                    : o || (0, M.i$)() === r || (l.oldestUnreadMessageId = a.id),
                !d && l.unreadCount++,
                !(
                    Q.A.isBlockedOrIgnoredForMessage(a) ||
                    (a.type === ei.lAJ.RECIPIENT_REMOVE && u?.type === ei.rbe.GROUP_DM)
                ))
            ) {
                let { shouldMention: e, isMentionLowImportance: t } = (function (e, t, n) {
                    if (
                        null != t &&
                        (0, C.bG)({
                            rawMessage: e,
                            userId: t.id,
                            suppressEveryone: ee.Ay.isSuppressEveryoneEnabled(n.guildId),
                            suppressRoles: ee.Ay.isSuppressRolesEnabled(n.guildId),
                        })
                    )
                        return { shouldMention: !0, isMentionLowImportance: !1 };
                    let i = Y.A.getChannel(e.channel_id);
                    if (ev(i)) return { shouldMention: !0, isMentionLowImportance: !1 };
                    if (ee.Ay.mentionOnAllMessages && null != i) {
                        if (i.isThread()) {
                            if ((0, x.l)(i) === eo.CP.ALL_MESSAGES)
                                return { shouldMention: !0, isMentionLowImportance: !0 };
                        } else if (
                            !i.isVocal() &&
                            !ee.Ay.isChannelMuted(i.guild_id, i.id) &&
                            ee.Ay.resolvedMessageNotifications(i) === ei.orn.ALL_MESSAGES
                        )
                            return { shouldMention: !0, isMentionLowImportance: !0 };
                    }
                    return { shouldMention: !1, isMentionLowImportance: !1 };
                })(a, c, l);
                e && ((l.isMentionLowImportance = t), l.mentionCount++);
            }
        },
        MESSAGE_DELETE: eK,
        MESSAGE_DELETE_BULK: eK,
        MESSAGE_ACK: e1,
        CHANNEL_ACK: function (e) {
            let { channelId: t, messageId: n, immediate: i = !1, force: r = !1, context: a, location: s } = e,
                l = ew.get(t),
                o = l.ack({
                    messageId: n,
                    local: a !== ei.QCW,
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
                r = ey(n);
            return i.lastPinTimestamp !== r && ((i.lastPinTimestamp = r), !0);
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e,
                n = W.Ay.getCurrentSidebarChannelId(t),
                i = Y.A.getChannel(t);
            if (null != i) {
                let e = ew.get(i.id);
                ((e.ackMessageIdAtChannelSelect = e.ackMessageId ?? j.default.fromTimestamp(e.getAckTimestamp())),
                    e.recordLastViewedTime());
            }
            (eJ({ previousChannelId: e_, newChannelId: t }), eJ({ previousChannelId: eE, newChannelId: n }));
            let r = !1;
            if (
                (e_ !== t && ((r = e0(e_) || r), (r = e0(eE) || r)),
                (e_ === t || (i?.type != null && ei.kvI.GUILD_THREADS_ONLY.has(i.type))) &&
                    (r =
                        eH(
                            {
                                section: ei.JJy.CHANNEL,
                                object: ei.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL,
                                objectType: ei.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            t,
                        ) || r),
                (eA = null),
                null != i && (0, F.ZV)(i.type))
            ) {
                let e = ew.get(i.id),
                    t = e.canBeUnread() && e.hasUnread();
                !0 === eQ(i.id) && ((eA = t ? i.id : null), (r = !0));
            }
            return (
                e_ === t &&
                    (r =
                        eH(
                            {
                                section: ei.JJy.CHANNEL,
                                object: ei.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR,
                                objectType: ei.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            n,
                        ) || r),
                (e_ = t),
                (eE = n),
                r
            );
        },
        OVERLAY_TEXT_CHAT_ACK_CHANNEL: function (e) {
            var t, n;
            let i;
            return (
                !__OVERLAY__ &&
                ((t = e.channelId),
                (n = ei.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH),
                ((i = ew.get(t)).ackMessageIdAtChannelSelect =
                    i.ackMessageId ?? j.default.fromTimestamp(i.getAckTimestamp())),
                i.recordLastViewedTime(),
                e0(t),
                eH({ section: ei.JJy.OVERLAY, object: n, objectType: ei.AnalyticsObjectTypes.ACK_AUTOMATIC }, t),
                !0)
            );
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (null != t) return eQ(t);
        },
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, F.Z_)(t.type)) return !1;
            let n = ew.get(t.id);
            ((n.lastMessageId = t.lastMessageId), (n.lastPinTimestamp = ey(t.lastPinTimestamp)));
        },
        THREAD_CREATE: function (e) {
            var t;
            let n,
                i,
                { channel: r } = e;
            ((function (e) {
                if (!F.A_.has(e.type)) return;
                let t = ew.get(e.id);
                ((t.lastMessageId = e.lastMessageId),
                    (t.lastPinTimestamp = ey(e.lastPinTimestamp)),
                    t.syncThreadSettings(),
                    e.ownerId === O.default.getId() && (t.loadedMessages = !0));
            })(r),
                (n = (t = r).parent_id),
                (ew.get(n).lastMessageId = t.id),
                (i = et.default.getCurrentUser()),
                t.ownerId === i?.id &&
                    ((ew.get(t.id)._persisted = !0), e1({ channelId: n, messageId: t.id, manual: !1 })));
        },
        THREAD_UPDATE: function (e) {
            let { channel: t } = e;
            return !!F.A_.has(t.type) && ew.get(t.id).syncThreadSettings();
        },
        THREAD_LIST_SYNC: function (e) {
            let { threads: t } = e;
            t.forEach((e) => {
                if (!F.A_.has(e.type)) return;
                let t = ew.get(e.id);
                if (
                    ((t.lastMessageId = e.lastMessageId),
                    (t.lastPinTimestamp = ey(e.lastPinTimestamp)),
                    (t._isThread = !0),
                    (t._isActiveThread = !0),
                    (t._isJoinedThread = w.A.hasJoined(e.id)),
                    e.isForumPost())
                ) {
                    let t = ew.get(e.parent_id);
                    0 > j.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id);
                }
            });
        },
        LOAD_THREADS_SUCCESS: e$,
        LOAD_ARCHIVED_THREADS_SUCCESS: e$,
        SEARCH_MESSAGES_SUCCESS: ez,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: ez,
        THREAD_MEMBER_UPDATE: function (e) {
            let { id: t } = e;
            return ew.get(t).syncThreadSettings();
        },
        THREAD_MEMBERS_UPDATE: function (e) {
            return (0, G.k)(e) && ew.get(e.id).syncThreadSettings();
        },
        CHANNEL_DELETE: eZ,
        THREAD_DELETE: eZ,
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
                                    eH(
                                        {
                                            section: ei.JJy.CHANNEL,
                                            object: ei.ZSU.ACK_WINDOW_FOCUS,
                                            objectType: ei.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
            return eH(
                {
                    section: ei.JJy.CHANNEL,
                    object: ei.ZSU.ACK_CHANNEL_SCROLL,
                    objectType: ei.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
            ((t = n.filter(
                (e) =>
                    Y.A.getChannel(e.channelId)?.isForumLikeChannel() === !0 ||
                    (null != e.messageId && e6.hasUnreadOrMentions(e.channelId, e.readStateType)),
            )),
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
                i === ei.QCW &&
                    (ep.push(
                        ...t.map((e) => ({
                            channel_id: e.channelId,
                            message_id: e.messageId,
                            read_state_type: e.readStateType,
                        })),
                    ),
                    eT || eb(r)));
        },
        ENABLE_AUTOMATIC_ACK: function (e) {
            let { channelId: t, windowId: n } = e;
            return (
                !eg.hasWindowId(t, n) &&
                (eg.addWindowId(t, n),
                eH(
                    {
                        section: ei.JJy.CHANNEL,
                        object: ei.ZSU.ENABLE_AUTOMATIC_ACK,
                        objectType: ei.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    t,
                ))
            );
        },
        DISABLE_AUTOMATIC_ACK: function (e) {
            let { channelId: t, windowId: n } = e;
            return (eg.removeWindowId(t, n), !1);
        },
        REGISTER_VISIBLE_INLINE_CHANNEL: function (e) {
            let t,
                { channelId: n, windowId: i } = e;
            return (
                null == (t = P.get(n)) && ((t = new Set()), P.set(n, t)),
                t.add(i),
                eH(
                    {
                        section: ei.JJy.CHANNEL,
                        object: ei.ZSU.ACK_MESSAGE_VIEWED,
                        objectType: ei.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    n,
                )
            );
        },
        UNREGISTER_VISIBLE_INLINE_CHANNEL: function (e) {
            let t,
                { channelId: n, windowId: i } = e;
            return (null != (t = P.get(n)) && (t.delete(i), 0 === t.size && P.delete(n)), !1);
        },
        GUILD_FEATURE_ACK: e2,
        GUILD_SCHEDULED_EVENT_CREATE: function (e) {
            let { guildScheduledEvent: t } = e,
                n = t.guild_id,
                i = ew.get(t.guild_id, el.P.GUILD_EVENT);
            ((i.lastMessageId = t.id), eX(t))
                ? e2({ type: "GUILD_FEATURE_ACK", id: n, ackType: el.P.GUILD_EVENT, ackedId: t.id, local: !1 })
                : !ee.Ay.isMuteScheduledEventsEnabled(n) && i.mentionCount++;
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
            let { guildScheduledEvent: t } = e,
                n = t.guild_id;
            if (eX(t) || ![es.XG.CANCELED, es.XG.COMPLETED].includes(t.status)) return !1;
            ew.get(n, el.P.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
        },
        GUILD_SCHEDULED_EVENT_DELETE: function (e) {
            let { guildScheduledEvent: t } = e,
                n = t.guild_id;
            if (eX(t)) return !1;
            ew.get(t.guild_id, el.P.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            return ew.clear(t.id, el.P.GUILD_EVENT);
        },
        GUILD_UPDATE: function (e) {
            let { guild: t } = e,
                n = t.latest_onboarding_question_id;
            if (null == n) return;
            let i = ew.get(t.id, el.P.GUILD_ONBOARDING_QUESTION);
            ((i._guildId = t.id), (i.lastMessageId = n));
        },
        RESORT_THREADS: function (e) {
            let { channelId: t } = e;
            return eH(
                {
                    section: ei.JJy.CHANNEL,
                    object: ei.ZSU.ACK_RESORT_THREADS,
                    objectType: ei.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                t,
            );
        },
        CHANNEL_RTC_UPDATE_CHAT_OPEN: function (e) {
            let { channelId: t, chatOpen: n } = e;
        },
        DECAY_READ_STATES: eL,
        NOTIFICATION_CENTER_ITEM_CREATE: function (e) {
            let { item: t } = e,
                n = et.default.getCurrentUser()?.id;
            if (null == n) return !1;
            let i = ew.get(n, el.P.NOTIFICATION_CENTER);
            ((i.lastMessageId = t.id), y.A.active || 0) ? e3(n, el.P.NOTIFICATION_CENTER, t.id, !1) : i.mentionCount++;
        },
        RELATIONSHIP_ADD: function (e) {
            let t = et.default.getCurrentUser();
            if (
                null == t ||
                null == e.relationship.since ||
                (e.relationship.type !== ei.eA$.PENDING_INCOMING && e.relationship.type !== ei.eA$.FRIEND)
            )
                return !1;
            let n = ew.get(t.id, el.P.NOTIFICATION_CENTER),
                i = e.relationship.type === ei.eA$.FRIEND,
                r = i ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime();
            (null != n.ackMessageId ? j.default.extractTimestamp(n.ackMessageId) : 0) < r &&
                ((n.lastMessageId = j.default.fromTimestamp(r)),
                y.A.active ? e3(t.id, el.P.NOTIFICATION_CENTER, void 0, !1) : i ? n.mentionCount-- : n.mentionCount++);
        },
        RELATIONSHIP_REMOVE: function (e) {
            let t = et.default.getCurrentUser();
            if (null == t || null == e.relationship.since || e.relationship.type !== ei.eA$.PENDING_INCOMING) return !1;
            let n = ew.get(t.id, el.P.NOTIFICATION_CENTER),
                i = new Date(e.relationship.since).getTime();
            (null != n.ackMessageId ? j.default.extractTimestamp(n.ackMessageId) : 0) <= i &&
                (n.mentionCount = Math.max(0, n.mentionCount - 1));
        },
        NOTIFICATION_CENTER_ITEMS_ACK: function (e) {
            let { ids: t, optimistic: n } = e;
            if (n || y.A.active) return !1;
            let i = et.default.getCurrentUser()?.id;
            if (null == i) return !1;
            let r = ew.get(i, el.P.NOTIFICATION_CENTER);
            t.forEach((e) => {
                0 > j.default.compare(r.ackMessageId, e) && (r.mentionCount = Math.max(r.mentionCount - 1, 0));
            });
        },
        USER_NON_CHANNEL_ACK: function (e) {
            let { ackType: t, ackedId: n, local: i } = e,
                r = et.default.getCurrentUser()?.id;
            return null != r && e3(r, t, n, i);
        },
        PASSIVE_UPDATE_V2: function (e) {
            let t = !1;
            for (let n of e.channels) {
                let e = ew.get(n.id),
                    i = ey(n.lastPinTimestamp);
                (e.lastMessageId !== n.lastMessageId || e.lastPinTimestamp !== i) &&
                    ((t = !0), (e.lastMessageId = n.lastMessageId), (e.lastPinTimestamp = i));
            }
            return t;
        },
        CLEAR_OLDEST_UNREAD_MESSAGE: function (e) {
            let { channelId: t } = e;
            return e0(t);
        },
        TRY_ACK: function (e) {
            let { channelId: t, location: n } = e;
            return eH(n, t);
        },
        MESSAGE_REQUEST_ACK: function (e) {
            let { ackedId: t } = e,
                n = et.default.getCurrentUser()?.id;
            if (null == n) return !1;
            let i = ew.get(n, el.P.MESSAGE_REQUESTS);
            if (t === i.ackMessageId) return !1;
            ((i.ackMessageId = t), i.ack({ messageId: t, isExplicitUserAction: !0, trackAnalytics: !1 }));
        },
        MESSAGE_REQUEST_CLEAR_ACK: function (e) {
            let t = et.default.getCurrentUser()?.id;
            if (null == t) return !1;
            let n = ew.get(t, el.P.MESSAGE_REQUESTS);
            if (null == n.ackMessageId) return !1;
            n.ackMessageId = void 0;
        },
        CONJURE_TURN_SETTLED: function (e) {
            let { projectId: t, entityId: n } = e,
                i = ew.get(t, el.P.CONJURING_PROJECT);
            ((i._persisted = !0), (i.ackMessageId = n), i.mentionCount++);
        },
        CONJURE_PROJECT_ACK: function (e) {
            let { projectId: t } = e,
                n = ew.getIfExists(t, el.P.CONJURING_PROJECT);
            if (null == n || 0 === n.mentionCount) return !1;
            let i = j.default.fromTimestamp(Date.now());
            return n.ack({ messageId: i, isExplicitUserAction: !0, trackAnalytics: !1, immediate: !0 });
        },
        CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            return ew.clear(t, el.P.CONJURING_PROJECT);
        },
        APP_STATE_UPDATE: function (e) {
            let { state: t } = e;
            return (
                t === ei.g6G.ACTIVE &&
                eH(
                    {
                        section: ei.JJy.CHANNEL,
                        object: ei.ZSU.ACK_APP_FOREGROUND,
                        objectType: ei.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    J.Ay.getChannelId(),
                )
            );
        },
    }),
    e4 = e6;
