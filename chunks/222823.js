"use strict";
let r;
n.d(t, { Ay: () => e2, Wm: () => eO }), n(321073), n(938796);
var i = n(735438),
    s = n(989349),
    a = n.n(s),
    o = n(665260),
    l = n(311907),
    u = n(562465),
    d = n(451988),
    c = n(933681),
    _ = n(73153),
    f = n(933958);
n(183636);
var E = n(313961),
    h = n(343328),
    p = n(717125),
    m = n(626584),
    g = n(49463),
    A = n(698441),
    I = n(250953),
    T = n(380335),
    S = n(309199),
    y = n(157550),
    N = n(451919),
    O = n(252431),
    R = n(491001),
    v = n(395504),
    C = n(206885),
    b = n(622794),
    D = n(970278),
    L = n(152007),
    w = n(882733),
    M = n(607508),
    P = n(617617),
    U = n(95701),
    k = n(799422),
    x = n(927813),
    G = n(403362),
    V = n(209489),
    F = n(661191),
    B = n(961350),
    H = n(761640),
    Y = n(734057),
    W = n(72314),
    j = n(919638),
    K = n(71393),
    $ = n(885576),
    z = n(320501),
    q = n(576705),
    X = n(994500),
    Q = n(309010),
    J = n(543465),
    Z = n(287809),
    ee = n(531685),
    et = n(652215),
    en = n(5867),
    er = n(746080),
    ei = n(988794),
    es = n(790782),
    ea = n(37411);
let eo = new m.A("ReadStateStore");
__OVERLAY__ && (r = n(256415).default);
let el = () => !1;
!__OVERLAY__ && C.O && ({ isOverlayChannelVisible: el } = n(267355));
let eu = et.hVb.VIEW_CHANNEL | et.hVb.READ_MESSAGE_HISTORY,
    ed = Q.A.getChannelId(),
    ec = null,
    e_ = null,
    ef = !1,
    eE = [],
    eh = !1,
    ep = null,
    em = new (class {
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
    eg = 30 * x.A.Millis.DAY;
function eA() {
    return F.default.fromTimestamp(Date.now() - eg);
}
let eI = 0,
    eT = 0,
    eS = null;
function ey() {
    (eI = Date.now() - 7 * x.A.Millis.DAY),
        (eT = Date.now() - 3 * x.A.Millis.DAY),
        clearTimeout(eS),
        (eS = setTimeout(() => {
            _.h.dispatch({ type: "DECAY_READ_STATES" });
        }, +x.A.Millis.HOUR));
}
function eN(e) {
    if (null == e) return 0;
    let t = Date.parse(e);
    return isNaN(t) ? 0 : t;
}
function eO(e, t) {
    let n = Y.A.getChannel(e.channel_id);
    return (
        !(null == n || X.A.isBlockedOrIgnoredForMessage(e)) &&
        !!(
            (0, N.Ay)({
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
async function ev(e) {
    if (0 === eE.length) {
        (eh = !1), e?.();
        return;
    }
    eh = !0;
    let t = eE.splice(0, 100);
    await eC(() =>
        u.Bo.post({ url: et.Rsh.BULK_ACK, body: { read_states: t }, oldFormErrors: !0, rejectWithError: !1 }),
    ),
        await (0, d.BK)(1e3),
        ev(e);
}
async function eC(e) {
    let t = B.default.getId();
    for (let n = 0; n < 3; n++)
        try {
            return await e();
        } catch (e) {
            if (
                (eo.error("", e),
                n + 1 < 3 && (await (0, d.BK)((n + 1) * 2e3), await V.A.awaitOnline(), t !== B.default.getId()))
            )
                return Promise.reject(Error("User changed."));
        }
}
function eb(e, t) {
    return null != r && r.isInstanceFocused() && r.isPinned(et.uss.TEXT) ? e : null != t && el(t);
}
function eD(e, t) {
    Z.default.getCurrentUser()?.hasAnyStaffLevel() && eo.log("STAFF-ACK-LOG:", t, e.channelId);
}
function eL(e, t) {
    if ((eD(e, "shouldAutomaticallyAck called"), e.type !== es.P.CHANNEL)) return eD(e, "not channel read state"), !1;
    let n = Y.A.getChannel(e.channelId),
        r = null != n && n.isForumPost();
    if (
        null != f.Ay.getConnectedActivityLocation() &&
        f.Ay.getActivityPanelMode() === en.Gd.PANEL &&
        f.Ay.getFocusedLayout() === en.E8.NO_CHAT
    )
        return eD(e, "In activity"), !1;
    if ($.A.isIdle()) return eD(e, "Is idle"), !1;
    if (!e.canTrackUnreads()) return eD(e, "Cannot track unreads"), !1;
    if (n?.isForumLikeChannel() !== !0 && !em.isAnyWindowFocused(e.channelId) && !eb(!0, e.channelId)) return !1;
    if (r && !e._persisted) return eD(e, "unpersisted forum post"), !0;
    if (!e.hasUnreadOrMentions()) return eD(e, "No unread or mentions"), !1;
    if (n?.isForumLikeChannel() === !0) return eD(e, "Forum-like channel"), !1;
    if (!(r && !e._isJoinedThread) && !W.A.isAtBottom(e.channelId)) return eD(e, "Not at bottom"), !1;
    let i = E.A.getLayout(e.channelId);
    if (!E.A.getChatOpen(e.channelId) && (i === et.DUB.NO_CHAT || i === et.DUB.FULL_SCREEN))
        return eD(e, "Fullscreen video"), !1;
    if (!em.isChannelAckable(e.channelId)) return eD(e, "Not ackable"), !1;
    let s = z.A.getMessages(e.channelId);
    return null == s || !s.ready || s.loadingMore
        ? (eD(e, "Still loading messages"), !1)
        : (0, b.oE)(e.channelId, t)
          ? (eD(e, "Acked"), !0)
          : (eD(e, "Chat not focused"), !1);
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
            let r = ew._readStates.get(t) ?? new Map();
            r.set(e, n), ew._readStates.has(t) || ew._readStates.set(t, r);
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
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = this.getIfExists(e, t);
        return null == i ? r : n(i);
    }
    static clear(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL,
            n = ew._readStates.get(t);
        if (null == n) return !1;
        let r = n.delete(e);
        return r && ew._mentionChannels.delete(e), r;
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
            _guildId: r,
            _isThread: i,
            _isActiveThread: s,
            _isJoinedThread: a,
            _persisted: o,
            loadedMessages: l,
            _lastMessageId: u,
            _lastMessageTimestamp: d,
            _ackMessageId: c,
            _ackMessageTimestamp: _,
            ackPinTimestamp: f,
            isManualAck: E,
            lastPinTimestamp: h,
            _oldestUnreadMessageId: p,
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
                _guildId: r,
                _isThread: i,
                _isActiveThread: s,
                _isJoinedThread: a,
                _persisted: o,
                loadedMessages: l,
                _lastMessageId: u,
                _lastMessageTimestamp: d,
                _ackMessageId: c,
                _ackMessageTimestamp: _,
                ackPinTimestamp: f,
                isManualAck: E,
                lastPinTimestamp: h,
                _oldestUnreadMessageId: p,
                oldestUnreadMessageIdStale: m,
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
            _lastMessageTimestamp: d,
            _ackMessageId: c,
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
            _lastMessageId: d,
            _lastMessageTimestamp: c,
            _ackMessageId: _,
            _ackMessageTimestamp: f,
            ackPinTimestamp: E,
            isManualAck: h,
            lastPinTimestamp: p,
            _oldestUnreadMessageId: m,
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
            (this._lastMessageId = d),
            (this._lastMessageTimestamp = c),
            (this._ackMessageId = _),
            (this._ackMessageTimestamp = f),
            (this.ackPinTimestamp = E),
            (this.isManualAck = h ?? !1),
            (this.lastPinTimestamp = p),
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
        let e = z.A.getMessages(this.channelId);
        if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
        if (!this.hasMentions()) return this.lastMessageId;
        let t = null,
            n = this.mentionCount,
            r = Z.default.getCurrentUser();
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
        let e = Y.A.getChannel(this.channelId);
        return (this._guildId = null != e ? e.getGuildId() : null);
    }
    isPrivate() {
        if (this.type !== es.P.CHANNEL) return !1;
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
            let e = Z.default.getCurrentUser(),
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
        if (this.type !== es.P.CHANNEL) return !0;
        if ((this._isThread && !this._isActiveThread) || this._isResourceChannel) return !1;
        let e = Y.A.getBasicChannel(this.channelId);
        return (
            null != e &&
            ("basicPermissions" in e
                ? k.A.has(e.basicPermissions, et.hVb.VIEW_CHANNEL)
                : !p.A.isChannelGated(this.guildId, this.channelId) || q.A.can(et.xBc.VIEW_CHANNEL, e))
        );
    }
    canBeUnread() {
        return (
            !(
                (this._isThread && !this._isJoinedThread) ||
                (0, S.k_)(this.channelId, [T.A, y.A]) ||
                (!this._isThread &&
                    (0, v.WW)(this._guildId) &&
                    (this._lastMessageTimestamp < eI ||
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
                ((0, v.WW)(this._guildId) && this._lastMessageTimestamp < eI)
            ) && this.canTrackUnreads()
        );
    }
    getGuildChannelUnreadState(e, t, n, r, i) {
        if (
            t &&
            (this._lastMessageTimestamp < eI ||
                (!J.Ay.isChannelRecordOrParentOptedIn(e) &&
                    !this.hasRecentlyVisitedAndRead() &&
                    this.mentionCount <= 0))
        )
            return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        if ("basicPermissions" in e) {
            if (!k.A.has(e.basicPermissions, et.hVb.VIEW_CHANNEL))
                return { mentionCount: 0, unread: !1, isMentionLowImportance: !1 };
        } else if (p.A.isChannelGated(this.guildId, this.channelId) && !q.A.can(et.xBc.VIEW_CHANNEL, e))
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
            this.getAckTimestamp() > eT &&
            P.A.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
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
                eC(() => u.Bo.post({ url: et.Rsh.PINS_ACK(this.channelId), oldFormErrors: !0, rejectWithError: !0 }));
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
                (function (e) {
                    if (null == e) return;
                    let t = ew.get(e);
                    if (t.type !== es.P.CHANNEL) return;
                    let n = Y.A.getChannel(t.channelId);
                    if (null == n || !n.isForumPost() || null == n.parent_id) return;
                    let r = n.parent_id,
                        i = ew.get(r);
                    D.A.hasLoaded(n.guild_id) &&
                        F.default
                            .keys(D.A.getThreadsForParent(n.guild_id, r))
                            .every((e) => e1.hasOpenedThread(e) || 0 > F.default.compare(e, i.ackMessageId)) &&
                        i.ack({
                            trackAnalytics: !0,
                            location: {
                                section: et.JJy.CHANNEL,
                                object: et.ZSU.ACK_FORUM_CHANNEL_NO_UNREAD_POSTS,
                                objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                        });
                })(this.channelId),
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
                    !!Y.A.getChannel(this.channelId)?.isForumLikeChannel()))
        );
    }
    _ack(e, t) {
        let { outgoingAck: r } = this;
        if (null == r) return;
        let i = B.default.getId(),
            s = e_;
        this._persisted = !0;
        let a = this.recalculateFlags(),
            o = a === this.flags ? void 0 : a;
        eC(() =>
            u.Bo.post({
                url: et.Rsh.MESSAGE_ACK(this.channelId, r),
                body: { token: e_, last_viewed: this.lastViewed, flags: o },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
        ).then((r) => {
            null != r &&
                (e_ === s && i === B.default.getId() && (e_ = r.body.token),
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
        let e = Y.A.getChannel(this.channelId);
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
            (this._persisted = !0), eC(() => u.Bo.post({ url: e, body: {}, oldFormErrors: !0, rejectWithError: !0 }));
        }
    }
    delete() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = Y.A.getBasicChannel(this.channelId);
        eo.log("Deleting ReadState", this.channelId, this.type, {
            remote: e,
            persisted: this._persisted,
            channelMissing: null == t,
            isOld: eG(this, eA()),
            validType: null != t && U.A_.has(t.type),
            readableType: null != t && (0, U.Z_)(t.type),
            oldThreadCutoff: eA(),
            mentionCount: this.mentionCount,
            channelId: this.channelId,
            ackMessageId: this._ackMessageId,
            lastMessageId: this._lastMessageId,
        }),
            e &&
                this._persisted &&
                u.Bo.del({
                    url: et.Rsh.CHANNEL_ACK(this.channelId),
                    body: { version: 2, read_state_type: this.type },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
            ew._readStates.get(this.type)?.delete(this.channelId),
            ew._mentionChannels.delete(this.channelId);
    }
    shouldDeleteReadState(e) {
        var t, n, r;
        let i;
        if (0 !== j.A.totalUnavailableGuilds) return !1;
        if (null != this.type && this.type !== es.P.CHANNEL)
            return !(function (e) {
                switch (e.type) {
                    case es.P.GUILD_HOME:
                    case es.P.GUILD_EVENT:
                    case es.P.GUILD_ONBOARDING_QUESTION:
                        return null != K.A.getGuild(e.channelId);
                    case es.P.NOTIFICATION_CENTER:
                        return F.default.cast(Z.default.getCurrentUser()?.id) === e.channelId;
                    default:
                        return !0;
                }
            })(this);
        let s = Y.A.getBasicChannel(this.channelId);
        if (null == s)
            if (eG(this, e)) return !0;
            else return !1;
        return (
            !!U.A_.has(s.type) &&
            (!(0, U.Z_)(s.type) ||
                (!(0, U.Gw)(s.type) &&
                    !(
                        !(
                            U.Le.has(s.type) &&
                            ((t = this),
                            (n = s),
                            (r = e),
                            !(null != (i = t.guildId) && D.A.isActive(i, n.parent_id, t.channelId)) && eG(t, r))
                        ) &&
                        (!(this.mentionCount > 0) || q.A.canBasicChannel(eu, s))
                    )))
        );
    }
    getAckTimestamp() {
        let e, t;
        if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
        if (this._isThread)
            return (
                (this._ackMessageTimestamp = ek(this.guildId, this.channelId)),
                (this._ackMessageId = F.default.fromTimestamp(this._ackMessageTimestamp)),
                this._ackMessageTimestamp
            );
        if (this.type === es.P.GUILD_EVENT || this.type === es.P.GUILD_ONBOARDING_QUESTION)
            e = K.A.getGuild(this.channelId);
        else if ((0, er.jq)(this.channelId)) e = K.A.getGuild(this.guildId);
        else {
            let t = Y.A.getChannel(this.channelId);
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
        let e = Y.A.getChannel(this.channelId);
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
        let e = Math.ceil((Date.now() - F.DISCORD_EPOCH) / x.A.Millis.DAY);
        e !== this.lastViewed &&
            ((this.lastViewed = e),
            this.canTrackUnreads() && !this.hasUnread() && this.ack({ force: !0, trackAnalytics: !1 }));
    }
}
function eM(e) {
    e.forEach((e) => {
        if ((0, U.Z_)(e.type)) {
            let t = ew.get(e.id);
            (t._guildId = e.guild_id),
                (t.lastMessageId = e.lastMessageId),
                (t.lastPinTimestamp = eN(e.lastPinTimestamp)),
                (t._isResourceChannel = e.hasFlag(er.lx.IS_GUILD_RESOURCE_CHANNEL)),
                U.Le.has(e.type) && t.syncThreadSettings();
        }
    });
}
function eP(e) {
    e.forEach((e) => {
        if ((0, U.Z_)(e.type)) {
            let t = ew.get(e.id);
            (t.lastMessageId = e.last_message_id),
                (t.lastPinTimestamp = eN(e.last_pin_timestamp)),
                (t._isResourceChannel = (0, o.Lt)(e.flags ?? 0, er.lx.IS_GUILD_RESOURCE_CHANNEL)),
                U.Le.has(e.type) && t.syncThreadSettings();
        }
    });
}
function eU(e) {
    var t, n;
    (t = e),
        t.threads?.forEach((e) => {
            if (!U.A_.has(e.type)) return;
            let n = ew.get(e.id);
            (n.lastMessageId = e.lastMessageId),
                (n.lastPinTimestamp = eN(e.lastPinTimestamp)),
                (n._isThread = !0),
                (n._isActiveThread = !0),
                (n._isJoinedThread = null != e.member),
                null == n.ackMessageId && (n.ackMessageId = F.default.fromTimestamp(ek(t.id, e.id))),
                null == n.ackPinTimestamp && (n.ackPinTimestamp = ek(t.id, e.id));
        }),
        (function (e) {
            if (e.guild_scheduled_events?.length === 0 && null == ew.getIfExists(e.id, es.P.GUILD_EVENT)) return;
            let t = ew.get(e.id, es.P.GUILD_EVENT);
            t._guildId = e.id;
            let n = 0,
                r = null,
                i = t._ackMessageId ?? F.default.fromTimestamp(t.getAckTimestamp());
            e.guild_scheduled_events.forEach((e) => {
                F.default.compare(e.id, r) > 0 && (r = e.id), F.default.compare(e.id, i) > 0 && n++;
            }),
                (t.lastMessageId = r),
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
            let r = ew.get(t.id, es.P.GUILD_ONBOARDING_QUESTION);
            (r._guildId = t.id), (r.lastMessageId = n);
        })(e);
}
function ek(e, t) {
    let n = Y.A.getChannel(t),
        r = K.A.getGuild(e ?? n?.guild_id),
        i = n?.isForumPost() ? 0 : ex(r),
        s = (L.A.joinTimestamp(t)?.getTime() ?? 0) - 5e3;
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
    let r = ew.get(t);
    return !!eL(r, n) && r.ack({ trackAnalytics: !0, location: e });
}
function eF() {
    null != ep && clearTimeout(ep);
}
let eB = (0, i.throttle)((e) => {
    e.delete();
}, 100);
function eH(e) {
    for (let t of e) {
        let e = ew.get(t.id);
        null != t.last_message_id && (e.lastMessageId = t.last_message_id),
            null != t.last_pin_timestamp && (e.lastPinTimestamp = eN(t.last_pin_timestamp));
    }
}
function eY(e) {
    let { channelId: t } = e;
    ew.get(t).rebuildChannelState();
}
function eW(e) {
    let { threads: t } = e;
    eP(t);
}
function ej(e) {
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
                    .filter(G.Vq),
            );
        }),
            eP(n);
    });
}
function eK(e) {
    let t = Z.default.getCurrentUser();
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
        ec !== e
            ? ((t = eX(ec)), (ec = e))
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
function eQ(e) {
    let { channelId: t, messageId: n, manual: r, newMentionCount: i } = e,
        s = ew.get(t);
    return r
        ? (s.rebuildChannelState(n, !0, i), s.clearOutgoingAck(), !0)
        : n !== s._ackMessageId && s.ack({ messageId: n, local: !0, trackAnalytics: !1 });
}
function eJ(e) {
    let { id: t, ackType: n, ackedId: r, local: i } = e;
    return eZ(t, n, r, i);
}
function eZ(e, t, n, r) {
    let i = ew.get(e, t);
    return (
        n !== i.ackMessageId &&
        i.lastMessageId !== i.ackMessageId &&
        (null != i.lastMessageId || 0 !== i.mentionCount) &&
        ((n = n ?? i.lastMessageId ?? F.default.fromTimestamp(i.getAckTimestamp())),
        i.ack({ messageId: n, local: r ?? !0, trackAnalytics: !1 }))
    );
}
class e0 extends l.Ay.Store {
    static displayName = "ReadStateStore";
    initialize() {
        W.A,
            Z.default,
            K.A,
            j.A,
            Y.A,
            Q.A,
            z.A,
            q.A,
            E.A,
            D.A,
            L.A,
            H.Ay,
            A.Ay,
            g.A,
            p.A,
            J.Ay,
            ee.A,
            O.A,
            T.A,
            P.A,
            y.A,
            this.waitFor(
                D.A,
                B.default,
                E.A,
                H.Ay,
                Y.A,
                W.A,
                f.Ay,
                p.A,
                j.A,
                A.Ay,
                K.A,
                $.A,
                L.A,
                z.A,
                O.A,
                q.A,
                X.A,
                Q.A,
                J.Ay,
                P.A,
                Z.default,
                ee.A,
            ),
            this.syncWith([H.Ay], ez);
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
        if ((0, h.A)(e) && n > 0) return 1;
        return n;
    }
    getIsMentionLowImportance(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.P.CHANNEL;
        return t === es.P.CHANNEL && ew.getValue(e, t, (e) => e.isMentionLowImportance, !1);
    }
    getGuildChannelUnreadState(e, t, n, r, i) {
        return ew.getValue(e.id, es.P.CHANNEL, (s) => s.getGuildChannelUnreadState(e, t, n, r, i), {
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
        let r = ew.get(t);
        if (
            !0 === ew.get(e)._persisted ||
            null == r.ackMessageIdAtChannelSelect ||
            0 >= F.default.compare(e, r.ackMessageIdAtChannelSelect)
        )
            return !1;
        let i = ex(n);
        return F.default.extractTimestamp(e) > i;
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
                        F.default.cast(Z.default.getCurrentUser()?.id) === n.channelId && t.push(n.serialize(e));
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
        let t = Z.default.getCurrentUser()?.id;
        return null == t ? null : ew.get(t, e).ackMessageId;
    }
    getSnapshot(e, t) {
        let n = ew.get(e);
        return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot;
    }
    getChannelIdsForWindowId(e) {
        return em.getAllChannelIdsForWindowId(e);
    }
}
let e1 = new e0(_.h, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: function (e) {
            let { changesByChannelId: t } = e;
            for (let e in t) {
                let n = t[e],
                    r = ew.getIfExists(e);
                if (null != r)
                    for (let e of [n.new_messages?.[0]].concat(n.modified_messages ?? []).filter(G.Vq))
                        1 === F.default.compare(e.id, r.lastMessageId) && (r.lastMessageId = e.id);
            }
        },
        CONNECTION_OPEN: function (e) {
            let { guilds: t, relationships: n, initialPrivateChannels: r, readState: i } = e;
            ey(),
                (e_ = null),
                ef || i.partial || ew.clearAll(),
                (ef = !1),
                i.entries.forEach((e) => {
                    var t;
                    let n = e.read_state_type ?? es.P.CHANNEL;
                    n !== es.P.CHANNEL &&
                        (e = {
                            id: (t = e).id,
                            read_state_type: t.read_state_type,
                            mention_count: t.badge_count,
                            last_message_id: t.last_acked_id,
                        });
                    let r = ew.get(e.id, n);
                    (r._persisted = !0),
                        (r._mentionCount = e.mention_count ?? 0),
                        (r.flags = e.flags),
                        (r.lastViewed = e.last_viewed);
                    let i = Y.A.getBasicChannel(e.id);
                    null != i && (0, U.fT)(i.type) && (null == e.last_message_id || 0 === e.last_message_id)
                        ? (r.ackMessageId = F.default.fromTimestamp(ek(i.guild_id, i.id)))
                        : r.ackedWhileCached
                          ? -1 === F.default.compare(r.ackMessageId, e.last_message_id) &&
                            (r.ackMessageId = e.last_message_id)
                          : (r.ackMessageId = e.last_message_id),
                        (r.ackedWhileCached = void 0),
                        (r.ackPinTimestamp = eN(e.last_pin_timestamp)),
                        ew._mentionChannels.delete(r.channelId),
                        r._mentionCount > 0 && r.canHaveMentions() && ew._mentionChannels.add(r.channelId);
                }),
                ew.resetGuildSentinels();
            let s = Z.default.getCurrentUser()?.id;
            for (let e of (null != s &&
                (ew.get(s, es.P.NOTIFICATION_CENTER).lastMessageId = F.default.fromTimestamp(Date.now())),
            (function (e) {
                let t = Z.default.getCurrentUser();
                if (null == t) return;
                let n = ew.get(t.id, es.P.NOTIFICATION_CENTER);
                e.forEach((e) => {
                    if (null == e.since || e.type !== et.eA$.PENDING_INCOMING) return;
                    let t = new Date(e.since).getTime();
                    (null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0) < t &&
                        (n.mentionCount++, (n.lastMessageId = F.default.fromTimestamp(t)));
                });
            })(n),
            eM(r),
            t))
                eM("full_sync" === e.channels.op ? e.channels.items : e.channels.writes),
                    null != e.channelTimestampUpdates && eH(e.channelTimestampUpdates),
                    eU(e);
            eF(),
                (ep = setTimeout(
                    () =>
                        (function (e) {
                            let t = eA();
                            for (let n of e) {
                                let e = n.read_state_type ?? es.P.CHANNEL,
                                    r = ew.get(n.id, e);
                                r.shouldDeleteReadState(t) && eB(r);
                            }
                        })(i.entries),
                    10 * x.A.Millis.SECOND,
                ));
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { lazyPrivateChannels: t } = e;
            eM(t);
        },
        LOGOUT: eF,
        OVERLAY_INITIALIZE: function (e) {
            let { readStates: t, selectedChannelId: n } = e;
            ey(),
                (e_ = null),
                (ed = n),
                (ec = H.Ay.getCurrentSidebarChannelId(ed)),
                ew.clearAll(),
                t.forEach((e) => {
                    let t = ew.get(e.channelId);
                    t.deserializeForOverlay(e), t.type === es.P.CHANNEL && t.rebuildChannelState();
                });
        },
        CACHE_LOADED: function (e) {
            let { readStates: t } = e;
            (ef = !0),
                ey(),
                t.forEach((e) => {
                    let t = e.type ?? es.P.CHANNEL;
                    e.type = t;
                    let n = ew._readStates.get(t) ?? new Map();
                    n.set(e.channelId, (0, c.pp)(e, ew)), ew._readStates.has(t) || ew._readStates.set(t, n);
                });
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e,
                n = eA();
            ew.forEach((e) => {
                e.guildId === t.id && e.shouldDeleteReadState(n) && e.delete(!1);
            }),
                eM("full_sync" === t.channels.op ? t.channels.items : t.channels.writes),
                null != t.channelTimestampUpdates && eH(t.channelTimestampUpdates),
                eU(t);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let { channelId: t, isAfter: n, messages: r } = e,
                i = ew.get(t);
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
                eP(r.map((e) => e.thread).filter(G.Vq));
        },
        LOCAL_MESSAGES_LOADED: function (e) {
            let { channelId: t, messages: n } = e;
            if (!(0, R.K)() || 0 === n.length) return !1;
            let r = ew.get(t),
                i = n[0].id;
            (null == r.lastMessageId || F.default.compare(i, r.lastMessageId) > 0) &&
                ((r.lastMessageId = i), r.rebuildChannelState());
        },
        MESSAGE_CREATE: function (e) {
            let t,
                n,
                { channelId: i, message: s, isPushNotification: a } = e,
                o = ew.get(i),
                l = o.hasUnread(),
                u = null != o.lastMessageId && o.lastMessageId >= s.id;
            o.lastMessageId = s.id;
            let d = Z.default.getCurrentUser(),
                c = Y.A.getBasicChannel(i);
            if (null != s.author && null != d && s.author.id === d.id && !et.MRS.SELF_MENTIONABLE_SYSTEM.has(s.type))
                return null != o.outgoingAck && o.clearOutgoingAck(), eQ({ channelId: i, messageId: s.id, manual: !1 });
            let _ = (0, I.Y)();
            if (_?.isReady() === !0) {
                let e = _.getCurrentRoute();
                E.A.getChatOpen(o.channelId)
                    ? (t = o.channelId)
                    : e?.name === "channel"
                      ? (t = e.params.channelId)
                      : e?.name === "guilds" && (t = e.params?.channelId);
            } else null == _ && ((t = Q.A.getChannelId()), (n = H.Ay.getCurrentSidebarChannelId(t)));
            let f = t === i || n === i;
            if (f && eL(o) && !a) {
                let e = eb(!0, o.channelId) ? et.JJy.OVERLAY : et.JJy.CHANNEL;
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
            if (eb(f && null != r && r.isInstanceLocked(), i))
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
                !(
                    X.A.isBlockedOrIgnoredForMessage(s) ||
                    (s.type === et.lAJ.RECIPIENT_REMOVE && c?.type === et.rbe.GROUP_DM)
                ))
            ) {
                let { shouldMention: e, isMentionLowImportance: t } = (function (e, t, n) {
                    if (
                        null != t &&
                        (0, N.bG)({
                            rawMessage: e,
                            userId: t.id,
                            suppressEveryone: J.Ay.isSuppressEveryoneEnabled(n.guildId),
                            suppressRoles: J.Ay.isSuppressRolesEnabled(n.guildId),
                        })
                    )
                        return { shouldMention: !0, isMentionLowImportance: !1 };
                    let r = Y.A.getChannel(e.channel_id);
                    if (eR(r)) return { shouldMention: !0, isMentionLowImportance: !1 };
                    if (J.Ay.mentionOnAllMessages && null != r) {
                        if (r.isThread()) {
                            if ((0, M.l)(r) === ea.CP.ALL_MESSAGES)
                                return { shouldMention: !0, isMentionLowImportance: !0 };
                        } else if (
                            !r.isVocal() &&
                            !J.Ay.isChannelMuted(r.guild_id, r.id) &&
                            J.Ay.resolvedMessageNotifications(r) === et.orn.ALL_MESSAGES
                        )
                            return { shouldMention: !0, isMentionLowImportance: !0 };
                    }
                    return { shouldMention: !1, isMentionLowImportance: !1 };
                })(s, d, o);
                e && ((o.isMentionLowImportance = t), o.mentionCount++);
            }
        },
        MESSAGE_DELETE: eY,
        MESSAGE_DELETE_BULK: eY,
        MESSAGE_ACK: eQ,
        CHANNEL_ACK: function (e) {
            let { channelId: t, messageId: n, immediate: r = !1, force: i = !1, context: s, location: a } = e,
                o = ew.get(t),
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
                r = ew.get(t),
                i = eN(n);
            return r.lastPinTimestamp !== i && ((r.lastPinTimestamp = i), !0);
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e,
                n = H.Ay.getCurrentSidebarChannelId(t),
                r = Y.A.getChannel(t);
            if (null != r) {
                let e = ew.get(r.id);
                (e.ackMessageIdAtChannelSelect = e.ackMessageId ?? F.default.fromTimestamp(e.getAckTimestamp())),
                    e.recordLastViewedTime();
            }
            eq(ed), eq(ec);
            let i = !1;
            return (
                ed !== t && ((i = eX(ed) || i), (i = eX(ec) || i)),
                (ed === t || (r?.type != null && et.kvI.GUILD_THREADS_ONLY.has(r.type))) &&
                    (i =
                        eV(
                            {
                                section: et.JJy.CHANNEL,
                                object: et.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL,
                                objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            t,
                        ) || i),
                ed === t &&
                    (i =
                        eV(
                            {
                                section: et.JJy.CHANNEL,
                                object: et.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR,
                                objectType: et.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            n,
                        ) || i),
                (ed = t),
                (ec = n),
                i
            );
        },
        OVERLAY_TEXT_CHAT_ACK_CHANNEL: function (e) {
            var t, n;
            let r;
            return (
                !__OVERLAY__ &&
                ((t = e.channelId),
                (n = et.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH),
                ((r = ew.get(t)).ackMessageIdAtChannelSelect =
                    r.ackMessageId ?? F.default.fromTimestamp(r.getAckTimestamp())),
                r.recordLastViewedTime(),
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
            if (!(0, U.Z_)(t.type)) return !1;
            let n = ew.get(t.id);
            (n.lastMessageId = t.lastMessageId), (n.lastPinTimestamp = eN(t.lastPinTimestamp));
        },
        THREAD_CREATE: function (e) {
            var t;
            let n,
                r,
                { channel: i } = e;
            (function (e) {
                if (!U.A_.has(e.type)) return;
                let t = ew.get(e.id);
                (t.lastMessageId = e.lastMessageId),
                    (t.lastPinTimestamp = eN(e.lastPinTimestamp)),
                    t.syncThreadSettings(),
                    e.ownerId === B.default.getId() && (t.loadedMessages = !0);
            })(i),
                (n = (t = i).parent_id),
                (ew.get(n).lastMessageId = t.id),
                (r = Z.default.getCurrentUser()),
                t.ownerId === r?.id &&
                    ((ew.get(t.id)._persisted = !0), eQ({ channelId: n, messageId: t.id, manual: !1 }));
        },
        THREAD_UPDATE: function (e) {
            let { channel: t } = e;
            return !!U.A_.has(t.type) && ew.get(t.id).syncThreadSettings();
        },
        THREAD_LIST_SYNC: function (e) {
            let { threads: t } = e;
            t.forEach((e) => {
                if (!U.A_.has(e.type)) return;
                let t = ew.get(e.id);
                if (
                    ((t.lastMessageId = e.lastMessageId),
                    (t.lastPinTimestamp = eN(e.lastPinTimestamp)),
                    (t._isThread = !0),
                    (t._isActiveThread = !0),
                    (t._isJoinedThread = L.A.hasJoined(e.id)),
                    e.isForumPost())
                ) {
                    let t = ew.get(e.parent_id);
                    0 > F.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id);
                }
            });
        },
        LOAD_THREADS_SUCCESS: eW,
        LOAD_ARCHIVED_THREADS_SUCCESS: eW,
        SEARCH_MESSAGES_SUCCESS: ej,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: ej,
        THREAD_MEMBER_UPDATE: function (e) {
            let { id: t } = e;
            return ew.get(t).syncThreadSettings();
        },
        THREAD_MEMBERS_UPDATE: function (e) {
            return (0, w.k)(e) && ew.get(e.id).syncThreadSettings();
        },
        CHANNEL_DELETE: e$,
        THREAD_DELETE: e$,
        WINDOW_FOCUS: function (e) {
            let t = !1;
            return (
                em.forEachChannel((n, r) => {
                    r.has(e.windowId) &&
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
            e_ = null;
        },
        BULK_ACK: function (e) {
            var t;
            let { channels: n, context: r, onFinished: i } = e;
            (t = n.filter((e) => null != e.messageId && e1.hasUnreadOrMentions(e.channelId, e.readStateType))),
                t.forEach((e) => {
                    let { channelId: t, messageId: n, readStateType: r } = e;
                    ew.get(t, r).ack({
                        messageId: n,
                        local: !0,
                        immediate: void 0,
                        force: void 0,
                        isExplicitUserAction: !0,
                        trackAnalytics: !1,
                    });
                }),
                r === et.QCW &&
                    (eE.push(
                        ...t.map((e) => ({
                            channel_id: e.channelId,
                            message_id: e.messageId,
                            read_state_type: e.readStateType,
                        })),
                    ),
                    eh || ev(i));
        },
        ENABLE_AUTOMATIC_ACK: function (e) {
            let { channelId: t, windowId: n } = e;
            return (
                !em.hasWindowId(t, n) &&
                (em.addWindowId(t, n),
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
            return em.removeWindowId(t, n), !1;
        },
        GUILD_FEATURE_ACK: eJ,
        GUILD_SCHEDULED_EVENT_CREATE: function (e) {
            let { guildScheduledEvent: t } = e,
                n = t.guild_id,
                r = ew.get(t.guild_id, es.P.GUILD_EVENT);
            ((r.lastMessageId = t.id), eK(t))
                ? eJ({ type: "GUILD_FEATURE_ACK", id: n, ackType: es.P.GUILD_EVENT, ackedId: t.id, local: !1 })
                : !J.Ay.isMuteScheduledEventsEnabled(n) && r.mentionCount++;
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
            let { guildScheduledEvent: t } = e,
                n = t.guild_id;
            if (eK(t) || ![ei.XG.CANCELED, ei.XG.COMPLETED].includes(t.status)) return !1;
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
            let r = ew.get(t.id, es.P.GUILD_ONBOARDING_QUESTION);
            (r._guildId = t.id), (r.lastMessageId = n);
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
        DECAY_READ_STATES: ey,
        NOTIFICATION_CENTER_ITEM_CREATE: function (e) {
            let { item: t } = e,
                n = Z.default.getCurrentUser()?.id;
            if (null == n) return !1;
            let r = ew.get(n, es.P.NOTIFICATION_CENTER);
            ((r.lastMessageId = t.id), O.A.active || 0) ? eZ(n, es.P.NOTIFICATION_CENTER, t.id, !1) : r.mentionCount++;
        },
        RELATIONSHIP_ADD: function (e) {
            let t = Z.default.getCurrentUser();
            if (
                null == t ||
                null == e.relationship.since ||
                (e.relationship.type !== et.eA$.PENDING_INCOMING && e.relationship.type !== et.eA$.FRIEND)
            )
                return !1;
            let n = ew.get(t.id, es.P.NOTIFICATION_CENTER),
                r = e.relationship.type === et.eA$.FRIEND,
                i = r ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime();
            (null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0) < i &&
                ((n.lastMessageId = F.default.fromTimestamp(i)),
                O.A.active ? eZ(t.id, es.P.NOTIFICATION_CENTER, void 0, !1) : r ? n.mentionCount-- : n.mentionCount++);
        },
        RELATIONSHIP_REMOVE: function (e) {
            let t = Z.default.getCurrentUser();
            if (null == t || null == e.relationship.since || e.relationship.type !== et.eA$.PENDING_INCOMING) return !1;
            let n = ew.get(t.id, es.P.NOTIFICATION_CENTER),
                r = new Date(e.relationship.since).getTime();
            (null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0) <= r &&
                (n.mentionCount = Math.max(0, n.mentionCount - 1));
        },
        NOTIFICATION_CENTER_ITEMS_ACK: function (e) {
            let { ids: t, optimistic: n } = e;
            if (n || O.A.active) return !1;
            let r = Z.default.getCurrentUser()?.id;
            if (null == r) return !1;
            let i = ew.get(r, es.P.NOTIFICATION_CENTER);
            t.forEach((e) => {
                0 > F.default.compare(i.ackMessageId, e) && (i.mentionCount = Math.max(i.mentionCount - 1, 0));
            });
        },
        USER_NON_CHANNEL_ACK: function (e) {
            let { ackType: t, ackedId: n, local: r } = e,
                i = Z.default.getCurrentUser()?.id;
            return null != i && eZ(i, t, n, r);
        },
        PASSIVE_UPDATE_V2: function (e) {
            let t = !1;
            for (let n of e.channels) {
                let e = ew.get(n.id),
                    r = eN(n.lastPinTimestamp);
                (e.lastMessageId !== n.lastMessageId || e.lastPinTimestamp !== r) &&
                    ((t = !0), (e.lastMessageId = n.lastMessageId), (e.lastPinTimestamp = r));
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
                n = Z.default.getCurrentUser()?.id;
            if (null == n) return !1;
            let r = ew.get(n, es.P.MESSAGE_REQUESTS);
            if (t === r.ackMessageId) return !1;
            (r.ackMessageId = t), r.ack({ messageId: t, isExplicitUserAction: !0, trackAnalytics: !1 });
        },
        MESSAGE_REQUEST_CLEAR_ACK: function (e) {
            let t = Z.default.getCurrentUser()?.id;
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
                    Q.A.getChannelId(),
                )
            );
        },
    }),
    e2 = e1;
