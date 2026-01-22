let r;
n.d(t, {
    Ay: () => t1,
    Wm: () => eR,
}),
    n(896048),
    n(65821),
    n(321073),
    n(938796);
var i,
    a = n(735438),
    s = n(989349),
    o = n.n(s),
    l = n(665260),
    c = n(311907),
    u = n(562465),
    d = n(451988),
    f = n(933681),
    p = n(73153),
    _ = n(933958);
n(183636);
var h = n(313961),
    m = n(343328),
    g = n(717125),
    E = n(626584),
    b = n(49463),
    y = n(698441),
    O = n(250953),
    A = n(380335),
    v = n(309199),
    S = n(157550),
    I = n(451919),
    T = n(252431),
    C = n(395504),
    N = n(622794),
    R = n(970278),
    w = n(152007),
    P = n(882733),
    D = n(607508),
    x = n(617617),
    L = n(95701),
    j = n(799422),
    M = n(927813),
    k = n(403362),
    U = n(209489),
    G = n(661191),
    V = n(961350),
    F = n(761640),
    B = n(734057),
    H = n(72314),
    Y = n(919638),
    W = n(71393),
    K = n(885576),
    z = n(320501),
    q = n(576705),
    X = n(994500),
    Z = n(309010),
    Q = n(543465),
    $ = n(287809),
    J = n(531685),
    ee = n(652215),
    et = n(5867),
    en = n(746080),
    er = n(988794),
    ei = n(790782),
    ea = n(37411);
function es(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let eo = new E.A("ReadStateStore"),
    el = 2;
__OVERLAY__ && (r = n(256415).default);
let ec = ee.hVb.VIEW_CHANNEL | ee.hVb.READ_MESSAGE_HISTORY,
    eu = 100,
    ed = 1,
    ef = Z.A.getChannelId(),
    ep = null,
    e_ = null,
    eh = !1,
    em = [],
    eg = !1,
    eE = null;
class eb {
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
        for (let e of t) if (J.A.isFocused(e)) return !0;
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
    constructor() {
        es(this, "channelWindowIds", {});
    }
}
let ey = new eb(),
    eO = 30 * M.A.Millis.DAY;
function eA() {
    return G.default.fromTimestamp(Date.now() - eO);
}
let ev = 0,
    eS = 0,
    eI = null;
function eT() {
    (ev = Date.now() - 7 * M.A.Millis.DAY),
        (eS = Date.now() - 3 * M.A.Millis.DAY),
        clearTimeout(eI),
        (eI = setTimeout(() => {
            p.h.dispatch({ type: "DECAY_READ_STATES" });
        }, +M.A.Millis.HOUR));
}
function eC(e) {
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
    let n = B.A.getChannel(e.channel_id);
    return (
        !(null == n || X.A.isBlockedOrIgnoredForMessage(e)) &&
        !!(
            (0, I.Ay)({
                message: e,
                userId: t.id,
                suppressEveryone: Q.Ay.isSuppressEveryoneEnabled(n.guild_id),
                suppressRoles: Q.Ay.isSuppressRolesEnabled(n.guild_id),
            }) || ew(n)
        )
    );
}
function ew(e) {
    return null != e && e.isPrivate() && !Q.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
}
async function eP(e) {
    if (0 === em.length) {
        (eg = !1), null == e || e();
        return;
    }
    eg = !0;
    let t = em.splice(0, eu);
    await ex(() =>
        u.Bo.post({
            url: ee.Rsh.BULK_ACK,
            body: { read_states: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    ),
        await (0, d.BK)(1000 * ed),
        eP(e);
}
let eD = 3;
async function ex(e) {
    let t = V.default.getId();
    for (let n = 0; n < eD; n++)
        try {
            return await e();
        } catch (e) {
            if (
                (eo.error("", e),
                n + 1 < eD && (await (0, d.BK)((n + 1) * 2000), await U.A.awaitOnline(), t !== V.default.getId()))
            )
                return Promise.reject(Error("User changed."));
        }
}
function eL(e, t) {
    var n;
    (null == (n = $.default.getCurrentUser()) ? void 0 : n.hasAnyStaffLevel()) &&
        eo.log("STAFF-ACK-LOG:", t, e.channelId);
}
function ej(e) {
    if ((eL(e, "shouldAutomaticallyAck called"), e.type !== ei.P.CHANNEL)) return eL(e, "not channel read state"), !1;
    let t = B.A.getChannel(e.channelId),
        n = null != t && t.isForumPost();
    if (
        null != _.Ay.getConnectedActivityLocation() &&
        _.Ay.getActivityPanelMode() === et.Gd.PANEL &&
        _.Ay.getFocusedLayout() === et.E8.NO_CHAT
    )
        return eL(e, "In activity"), !1;
    if (K.A.isIdle()) return eL(e, "Is idle"), !1;
    if (!e.canTrackUnreads()) return eL(e, "Cannot track unreads"), !1;
    if ((null == t ? void 0 : t.isForumLikeChannel()) !== !0) {
        let t = ey.isAnyWindowFocused(e.channelId),
            n = null != r && r.isInstanceFocused() && r.isPinned(ee.uss.TEXT);
        if (!t && !n) return !1;
    }
    if (n && !e._persisted) return eL(e, "unpersisted forum post"), !0;
    if (!e.hasUnreadOrMentions()) return eL(e, "No unread or mentions"), !1;
    if ((null == t ? void 0 : t.isForumLikeChannel()) === !0) return eL(e, "Forum-like channel"), !1;
    if (!(n && !e._isJoinedThread) && !H.A.isAtBottom(e.channelId)) return eL(e, "Not at bottom"), !1;
    let i = h.A.getLayout(e.channelId);
    if (!h.A.getChatOpen(e.channelId) && (i === ee.DUB.NO_CHAT || i === ee.DUB.FULL_SCREEN))
        return eL(e, "Fullscreen video"), !1;
    if (!ey.isChannelAckable(e.channelId)) return eL(e, "Not ackable"), !1;
    let a = z.A.getMessages(e.channelId);
    return null == a || !a.ready || a.loadingMore
        ? (eL(e, "Still loading messages"), !1)
        : (0, N.oE)(e.channelId)
          ? (eL(e, "Acked"), !0)
          : (eL(e, "Chat not focused"), !1);
}
class eM {
    static forEach(e) {
        for (let t of eM._readStates.values()) for (let n of t.values()) if (!1 === e(n)) break;
    }
    static get(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL,
            i = null == (t = eM._readStates.get(r)) ? void 0 : t.get(e);
        if (null == i) {
            i = new eM(e, r);
            let t = null != (n = eM._readStates.get(r)) ? n : new Map();
            t.set(e, i), eM._readStates.has(r) || eM._readStates.set(r, t);
        }
        return i;
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
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.P.CHANNEL;
        return null == (t = eM._readStates.get(n)) ? void 0 : t.get(e);
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
            _lastMessageId: c,
            _lastMessageTimestamp: u,
            _ackMessageId: d,
            _ackMessageTimestamp: f,
            ackPinTimestamp: p,
            isManualAck: _,
            lastPinTimestamp: h,
            _oldestUnreadMessageId: m,
            oldestUnreadMessageIdStale: g,
            estimated: E,
            _mentionCount: b,
            flags: y,
            lastViewed: O,
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
                _lastMessageId: c,
                _lastMessageTimestamp: u,
                _ackMessageId: d,
                _ackMessageTimestamp: f,
                ackPinTimestamp: p,
                isManualAck: _,
                lastPinTimestamp: h,
                _oldestUnreadMessageId: m,
                oldestUnreadMessageIdStale: g,
                estimated: E,
                _mentionCount: b,
                flags: y,
                lastViewed: O,
            };
        let A = {
            channelId: t,
            type: n,
            _guildId: r,
            _persisted: o,
            _lastMessageId: c,
            _lastMessageTimestamp: u,
            _ackMessageId: d,
            _ackMessageTimestamp: f,
            ackPinTimestamp: p,
            lastPinTimestamp: h,
            _mentionCount: b,
            flags: y,
        };
        return (
            null != O && O > 0 && (A.lastViewed = O),
            i && ((A._isThread = i), (A._isActiveThread = a), (A._isJoinedThread = s)),
            A
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
            loadedMessages: c,
            _lastMessageId: u,
            _lastMessageTimestamp: d,
            _ackMessageId: f,
            _ackMessageTimestamp: p,
            ackPinTimestamp: _,
            isManualAck: h,
            lastPinTimestamp: m,
            _oldestUnreadMessageId: g,
            oldestUnreadMessageIdStale: E,
            estimated: b,
            _unreadCount: y,
            _mentionCount: O,
            flags: A,
            lastViewed: v,
        } = e;
        (this.channelId = t),
            (this.type = null != n ? n : ei.P.CHANNEL),
            (this._guildId = r),
            (this._isThread = null != i && i),
            null != a
                ? ((this._isActiveThread = a), (this._isJoinedThread = a))
                : ((this._isActiveThread = null != s && s), (this._isJoinedThread = null != o && o)),
            (this._persisted = !1 !== l),
            (this.loadedMessages = null != c && c),
            (this._lastMessageId = u),
            (this._lastMessageTimestamp = d),
            (this._ackMessageId = f),
            (this._ackMessageTimestamp = p),
            (this.ackPinTimestamp = _),
            (this.isManualAck = null != h && h),
            (this.lastPinTimestamp = m),
            (this._oldestUnreadMessageId = g),
            (this.oldestUnreadMessageIdStale = null != E && E),
            (this.estimated = null != b && b),
            (this._unreadCount = null != y ? y : 0),
            (this._mentionCount = O),
            (this.flags = A),
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
        var e;
        return null != (e = this._unreadCount) ? e : 0;
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
        if (e) {
            if (0 === this._mentionCount) {
                var t;
                this.flags = (null != (t = this.flags) ? t : 0) | 4;
            }
        } else null != this.flags && 0 !== this.flags && (this.flags = -5 & this.flags);
    }
    guessAckMessageId() {
        let e = z.A.getMessages(this.channelId);
        if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
        if (!this.hasMentions()) return this.lastMessageId;
        let t = null,
            n = this.mentionCount,
            r = $.default.getCurrentUser();
        return (
            e.forEach(
                (e) => {
                    if (n > 0 && e.author.id !== (null == r ? void 0 : r.id)) --n;
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
        if (this.type !== ei.P.CHANNEL) return !1;
        let e = B.A.getChannel(this.channelId);
        return null != e && e.isPrivate();
    }
    rebuildChannelState(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 ? arguments[2] : void 0;
        if (
            ((this.ackMessageId = null != (t = null != e ? e : this._ackMessageId) ? t : this.guessAckMessageId()),
            (this.isManualAck = null != e),
            (this.oldestUnreadMessageId = null),
            (this.estimated = !1),
            (this.unreadCount = 0),
            r && (this.mentionCount = 0),
            this.hasUnread())
        ) {
            let e = $.default.getCurrentUser(),
                t = this.getAckTimestamp(),
                i = !1,
                a = !1,
                s = null,
                o = z.A.getMessages(this.channelId);
            o.forAll((n) => {
                if (i) {
                    var o;
                    this.oldestUnreadMessageId = null != (o = this._oldestUnreadMessageId) ? o : n.id;
                } else i = n.id === this._ackMessageId;
                G.default.extractTimestamp(n.id) > t
                    ? (this.unreadCount++, r && eR(n, e) && this.mentionCount++, (s = null != s ? s : n.id))
                    : (a = !0);
            }),
                (this.estimated = !o.hasPresent() || (!(i || a) && o.length === this.unreadCount)),
                (this.oldestUnreadMessageId = null != (n = this._oldestUnreadMessageId) ? n : s);
        }
        null != i && (this.mentionCount = i);
    }
    handleGuildEventRemoval(e, t) {
        var n;
        if (G.default.compare(this.ackMessageId, t) >= 0) return;
        let r = y.Ay.getGuildScheduledEventsForGuild(e),
            i = this.getAckTimestamp();
        if (isNaN(i)) return;
        let a = null != (n = this._ackMessageId) ? n : G.default.fromTimestamp(i),
            s = null,
            o = 0;
        r.forEach((e) => {
            (0, y.d6)(e) && (G.default.compare(e.id, s) > 0 && (s = e.id), G.default.compare(e.id, a) > 0 && o++);
        }),
            (this.lastMessageId = s),
            (this.mentionCount = o);
    }
    canTrackUnreads() {
        if (this.type !== ei.P.CHANNEL) return !0;
        if ((this._isThread && !this._isActiveThread) || this._isResourceChannel) return !1;
        let e = B.A.getBasicChannel(this.channelId);
        return (
            null != e &&
            ("basicPermissions" in e
                ? j.A.has(e.basicPermissions, ee.hVb.VIEW_CHANNEL)
                : !g.A.isChannelGated(this.guildId, this.channelId) || q.A.can(ee.xBc.VIEW_CHANNEL, e))
        );
    }
    canBeUnread() {
        return (
            !(
                (this._isThread && !this._isJoinedThread) ||
                (0, v.k_)(this.channelId, [A.A, S.A]) ||
                (!this._isThread &&
                    (0, C.WW)(this._guildId) &&
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
                (0, v.k_)(this.channelId, [A.A, S.A]) ||
                ((0, C.WW)(this._guildId) && this._lastMessageTimestamp < ev)
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
            return {
                mentionCount: 0,
                unread: !1,
                isMentionLowImportance: !1,
            };
        if ("basicPermissions" in e) {
            if (!j.A.has(e.basicPermissions, ee.hVb.VIEW_CHANNEL))
                return {
                    mentionCount: 0,
                    unread: !1,
                    isMentionLowImportance: !1,
                };
        } else if (g.A.isChannelGated(this.guildId, this.channelId) && !q.A.can(ee.xBc.VIEW_CHANNEL, e))
            return {
                mentionCount: 0,
                unread: !1,
                isMentionLowImportance: !1,
            };
        return r || i
            ? {
                  mentionCount: this.mentionCount,
                  unread: !1,
                  isMentionLowImportance: this.isMentionLowImportance,
              }
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
                ex(() =>
                    u.Bo.post({
                        url: ee.Rsh.PINS_ACK(this.channelId),
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    }),
                );
        }
        let t = eC(e);
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
                e$(this.channelId),
                i
                    ? (this.oldestUnreadMessageId = null)
                    : (null == this.outgoingAck &&
                          (this.outgoingAckTimer = setTimeout(
                              () => {
                                  this.type === ei.P.CHANNEL ? this._ack(n, r) : this._nonChannelAck(),
                                      (this.outgoingAck = null),
                                      (this.outgoingAckTimer = null);
                              },
                              l || a ? 0 : 3000,
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
        var r;
        return (
            !!e ||
            !!n ||
            !!t ||
            (!this.isManualAck &&
                (this.type !== ei.P.CHANNEL ||
                    !!this.loadedMessages ||
                    !!(null == (r = B.A.getChannel(this.channelId)) ? void 0 : r.isForumLikeChannel())))
        );
    }
    _ack(e, t) {
        let { outgoingAck: r } = this;
        if (null == r) return;
        let i = V.default.getId(),
            a = e_;
        this._persisted = !0;
        let s = this.recalculateFlags(),
            o = s === this.flags ? void 0 : s;
        ex(() =>
            u.Bo.post({
                url: ee.Rsh.MESSAGE_ACK(this.channelId, r),
                body: {
                    token: e_,
                    last_viewed: this.lastViewed,
                    flags: o,
                },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
        ).then((r) => {
            null != r &&
                (e_ === a && i === V.default.getId() && (e_ = r.body.token),
                p.h.dispatch({ type: "MESSAGE_ACKED" }),
                t &&
                    n
                        .e("16137")
                        .then(n.bind(n, 862544))
                        .then((t) => {
                            let { default: n } = t;
                            n(this.channelId, null != e ? e : {});
                        }));
        });
    }
    recalculateFlags() {
        if (this.type !== ei.P.CHANNEL) return;
        let e = B.A.getChannel(this.channelId);
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
            (this._persisted = !0),
                ex(() =>
                    u.Bo.post({
                        url: e,
                        body: {},
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    }),
                );
        }
    }
    delete() {
        var e;
        let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            n = B.A.getBasicChannel(this.channelId);
        eo.log("Deleting ReadState", this.channelId, this.type, {
            remote: t,
            persisted: this._persisted,
            channelMissing: null == n,
            isOld: eX(this, eA()),
            validType: null != n && L.A_.has(n.type),
            readableType: null != n && (0, L.Z_)(n.type),
            oldThreadCutoff: eA(),
            mentionCount: this.mentionCount,
            channelId: this.channelId,
            ackMessageId: this._ackMessageId,
            lastMessageId: this._lastMessageId,
        }),
            t &&
                this._persisted &&
                u.Bo.del({
                    url: ee.Rsh.CHANNEL_ACK(this.channelId),
                    body: {
                        version: el,
                        read_state_type: this.type,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
            null == (e = eM._readStates.get(this.type)) || e.delete(this.channelId),
            eM._mentionChannels.delete(this.channelId);
    }
    shouldDeleteReadState(e) {
        if (0 !== Y.A.totalUnavailableGuilds) return !1;
        if (null != this.type && this.type !== ei.P.CHANNEL) return !eZ(this);
        let t = B.A.getBasicChannel(this.channelId);
        if (null == t)
            if (eX(this, e)) return !0;
            else return !1;
        return (
            !!L.A_.has(t.type) &&
            (!(0, L.Z_)(t.type) ||
                (!(0, L.Gw)(t.type) &&
                    !(
                        !(L.Le.has(t.type) && eq(this, t, e)) &&
                        (!(this.mentionCount > 0) || q.A.canBasicChannel(ec, t))
                    )))
        );
    }
    getAckTimestamp() {
        let e, t;
        if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
        if (this._isThread)
            return (
                (this._ackMessageTimestamp = eK(this.guildId, this.channelId)),
                (this._ackMessageId = G.default.fromTimestamp(this._ackMessageTimestamp)),
                this._ackMessageTimestamp
            );
        if (this.type === ei.P.GUILD_EVENT || this.type === ei.P.GUILD_ONBOARDING_QUESTION)
            e = W.A.getGuild(this.channelId);
        else if ((0, en.jq)(this.channelId)) e = W.A.getGuild(this.guildId);
        else {
            let t = B.A.getChannel(this.channelId);
            if (null != t) {
                let n = t.getGuildId();
                e = W.A.getGuild(n);
            }
        }
        return (
            null != e
                ? isNaN((t = ez(e))) && (t = G.default.extractTimestamp(this.channelId))
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
        if (null == e)
            return eo.warn("syncThreadSettings called with channel not in memory ".concat(this.channelId)), !1;
        let t = this.guildId,
            n = null != t && R.A.isActive(t, e.parent_id, this.channelId),
            r = w.A.hasJoined(this.channelId);
        return (
            (this._isActiveThread !== n || this._isJoinedThread !== r) &&
            ((this._isActiveThread = n), (this._isJoinedThread = r), !0)
        );
    }
    recordLastViewedTime() {
        let e = Math.ceil((Date.now() - G.DISCORD_EPOCH) / M.A.Millis.DAY);
        e !== this.lastViewed &&
            ((this.lastViewed = e),
            this.canTrackUnreads() &&
                !this.hasUnread() &&
                this.ack({
                    force: !0,
                    trackAnalytics: !1,
                }));
    }
    constructor(e, t = ei.P.CHANNEL) {
        es(this, "channelId", void 0),
            es(this, "type", ei.P.CHANNEL),
            es(this, "_guildId", void 0),
            es(this, "_isThread", void 0),
            es(this, "_isActiveThread", void 0),
            es(this, "_isJoinedThread", void 0),
            es(this, "_isResourceChannel", void 0),
            es(this, "_persisted", void 0),
            es(this, "loadedMessages", void 0),
            es(this, "_lastMessageId", void 0),
            es(this, "_lastMessageTimestamp", void 0),
            es(this, "_ackMessageId", void 0),
            es(this, "_ackMessageTimestamp", void 0),
            es(this, "isManualAck", void 0),
            es(this, "ackPinTimestamp", void 0),
            es(this, "lastPinTimestamp", void 0),
            es(this, "_oldestUnreadMessageId", void 0),
            es(this, "oldestUnreadMessageIdStale", void 0),
            es(this, "estimated", void 0),
            es(this, "_unreadCount", void 0),
            es(this, "_mentionCount", void 0),
            es(this, "flags", void 0),
            es(this, "lastViewed", void 0),
            es(this, "outgoingAck", void 0),
            es(this, "outgoingAckTimer", null),
            es(this, "ackMessageIdAtChannelSelect", null),
            es(this, "ackedWhileCached", void 0),
            es(this, "snapshot", void 0),
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
}
function ek(e) {
    e.forEach((e) => {
        if ((0, L.Z_)(e.type)) {
            let t = eM.get(e.id);
            (t._guildId = e.guild_id),
                (t.lastMessageId = e.lastMessageId),
                (t.lastPinTimestamp = eC(e.lastPinTimestamp)),
                (t._isResourceChannel = e.hasFlag(en.lx.IS_GUILD_RESOURCE_CHANNEL)),
                L.Le.has(e.type) && t.syncThreadSettings();
        }
    });
}
function eU(e) {
    e.forEach((e) => {
        if ((0, L.Z_)(e.type)) {
            var t;
            let n = eM.get(e.id);
            (n.lastMessageId = e.last_message_id),
                (n.lastPinTimestamp = eC(e.last_pin_timestamp)),
                (n._isResourceChannel = (0, l.Lt)(null != (t = e.flags) ? t : 0, en.lx.IS_GUILD_RESOURCE_CHANNEL)),
                L.Le.has(e.type) && n.syncThreadSettings();
        }
    });
}
function eG(e) {
    eH(e), eY(e), eB(e), eW(e);
}
function eV(e) {
    eF(e);
}
function eF(e) {
    let t = $.default.getCurrentUser();
    if (null == t) return !1;
    let n = eM.get(t.id, ei.P.NOTIFICATION_CENTER);
    e.forEach((e) => {
        if (null == e.since || e.type !== ee.eA$.PENDING_INCOMING) return;
        let t = new Date(e.since).getTime();
        (null != n.ackMessageId ? G.default.extractTimestamp(n.ackMessageId) : 0) < t &&
            (n.mentionCount++, (n.lastMessageId = G.default.fromTimestamp(t)));
    });
}
function eB(e) {
    let t = 24;
    eM.get(e.id, ei.P.GUILD_HOME).lastMessageId = G.default.fromTimestamp(o()(Date.now()).subtract(t, "h").valueOf());
}
function eH(e) {
    var t;
    null == (t = e.threads) ||
        t.forEach((t) => {
            if (!L.A_.has(t.type)) return;
            let n = eM.get(t.id);
            (n.lastMessageId = t.lastMessageId),
                (n.lastPinTimestamp = eC(t.lastPinTimestamp)),
                (n._isThread = !0),
                (n._isActiveThread = !0),
                (n._isJoinedThread = null != t.member),
                null == n.ackMessageId && (n.ackMessageId = G.default.fromTimestamp(eK(e.id, t.id))),
                null == n.ackPinTimestamp && (n.ackPinTimestamp = eK(e.id, t.id));
        });
}
function eY(e) {
    var t, n;
    if (
        (null == (n = e.guild_scheduled_events) ? void 0 : n.length) === 0 &&
        null == eM.getIfExists(e.id, ei.P.GUILD_EVENT)
    )
        return;
    let r = eM.get(e.id, ei.P.GUILD_EVENT);
    r._guildId = e.id;
    let i = 0,
        a = null,
        s = null != (t = r._ackMessageId) ? t : G.default.fromTimestamp(r.getAckTimestamp());
    e.guild_scheduled_events.forEach((e) => {
        G.default.compare(e.id, a) > 0 && (a = e.id), G.default.compare(e.id, s) > 0 && i++;
    }),
        (r.lastMessageId = a),
        (r.mentionCount = i);
}
function eW(e) {
    let t = W.A.getGuild(e.id);
    if (null == t) return;
    let n = null == t ? void 0 : t.latestOnboardingQuestionId;
    if (null == n) return;
    let r = eM.get(t.id, ei.P.GUILD_ONBOARDING_QUESTION);
    (r._guildId = t.id), (r.lastMessageId = n);
}
function eK(e, t) {
    var n, r, i;
    let a = B.A.getChannel(t),
        s = W.A.getGuild(null != e ? e : null == a ? void 0 : a.guild_id),
        o = (null == a ? void 0 : a.isForumPost()) ? 0 : ez(s),
        l = (null != (n = null == (r = w.A.joinTimestamp(t)) ? void 0 : r.getTime()) ? n : 0) - 5000;
    isNaN(l) && (l = -5000);
    let c = null == a || null == (i = a.threadMetadata) ? void 0 : i.archiveTimestamp,
        u = null != c ? new Date(c).getTime() - 1 : 0;
    isNaN(u) && (u = 0);
    let d = Math.max(l, u);
    return (
        d <= 0 && (d = G.default.extractTimestamp(t) - 1),
        (isNaN(d) || d <= 0) && (d = 0),
        isNaN(o) ? d : Math.max(o, d)
    );
}
function ez(e) {
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
    return !(null != r && R.A.isActive(r, t.parent_id, e.channelId)) && eX(e, n);
}
function eX(e, t) {
    return (
        e.mentionCount > 0 ||
        !(
            G.default.compare(e.channelId, t) > 0 ||
            (null != e._ackMessageId && G.default.compare(e._ackMessageId, t) > 0) ||
            (null != e._lastMessageId && G.default.compare(e._lastMessageId, t) > 0)
        )
    );
}
function eZ(e) {
    switch (e.type) {
        case ei.P.GUILD_HOME:
        case ei.P.GUILD_EVENT:
        case ei.P.GUILD_ONBOARDING_QUESTION:
            return null != W.A.getGuild(e.channelId);
        case ei.P.NOTIFICATION_CENTER:
            var t;
            return G.default.cast(null == (t = $.default.getCurrentUser()) ? void 0 : t.id) === e.channelId;
        default:
            return !0;
    }
}
function eQ(e, t) {
    if (null == t) return !1;
    let n = eM.get(t);
    return (
        !!ej(n) &&
        n.ack({
            trackAnalytics: !0,
            location: e,
        })
    );
}
function e$(e) {
    if (null == e) return;
    let t = eM.get(e);
    if (t.type !== ei.P.CHANNEL) return;
    let n = B.A.getChannel(t.channelId);
    if (null == n || !n.isForumPost() || null == n.parent_id) return;
    let r = n.parent_id,
        i = eM.get(r);
    R.A.hasLoaded(n.guild_id) &&
        G.default
            .keys(R.A.getThreadsForParent(n.guild_id, r))
            .every((e) => t0.hasOpenedThread(e) || 0 > G.default.compare(e, i.ackMessageId)) &&
        i.ack({
            trackAnalytics: !0,
            location: {
                section: ee.JJy.CHANNEL,
                object: ee.ZSU.ACK_FORUM_CHANNEL_NO_UNREAD_POSTS,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
        });
}
function eJ(e) {
    var t;
    let { guilds: n, relationships: r, initialPrivateChannels: i, readState: a } = e;
    eT(),
        (e_ = null),
        eh || a.partial || eM.clearAll(),
        (eh = !1),
        a.entries.forEach((e) => {
            var t, n;
            let r = null != (t = e.read_state_type) ? t : ei.P.CHANNEL;
            r !== ei.P.CHANNEL && (e = eN(e));
            let i = eM.get(e.id, r);
            (i._persisted = !0),
                (i._mentionCount = null != (n = e.mention_count) ? n : 0),
                (i.flags = e.flags),
                (i.lastViewed = e.last_viewed);
            let a = B.A.getBasicChannel(e.id);
            null != a && (0, L.fT)(a.type) && (null == e.last_message_id || 0 === e.last_message_id)
                ? (i.ackMessageId = G.default.fromTimestamp(eK(a.guild_id, a.id)))
                : i.ackedWhileCached
                  ? -1 === G.default.compare(i.ackMessageId, e.last_message_id) && (i.ackMessageId = e.last_message_id)
                  : (i.ackMessageId = e.last_message_id),
                (i.ackedWhileCached = void 0),
                (i.ackPinTimestamp = eC(e.last_pin_timestamp)),
                eM._mentionChannels.delete(i.channelId),
                i._mentionCount > 0 && i.canHaveMentions() && eM._mentionChannels.add(i.channelId);
        }),
        eM.resetGuildSentinels();
    let s = null == (t = $.default.getCurrentUser()) ? void 0 : t.id;
    for (let e of (null != s &&
        (eM.get(s, ei.P.NOTIFICATION_CENTER).lastMessageId = G.default.fromTimestamp(Date.now())),
    eV(r),
    ek(i),
    n))
        ek("full_sync" === e.channels.op ? e.channels.items : e.channels.writes),
            null != e.channelTimestampUpdates && e3(e.channelTimestampUpdates),
            eG(e);
    e0(), (eE = setTimeout(() => e2(a.entries), 10 * M.A.Millis.SECOND));
}
function e0() {
    null != eE && clearTimeout(eE);
}
es(eM, "_guildReadStateSentinels", {}), es(eM, "_readStates", new Map()), es(eM, "_mentionChannels", new Set());
let e1 = (0, a.throttle)((e) => {
    e.delete();
}, 100);
function e2(e) {
    let t = eA();
    for (let r of e) {
        var n;
        let e = null != (n = r.read_state_type) ? n : ei.P.CHANNEL,
            i = eM.get(r.id, e);
        i.shouldDeleteReadState(t) && e1(i);
    }
}
function e3(e) {
    for (let t of e) {
        let e = eM.get(t.id);
        null != t.last_message_id && (e.lastMessageId = t.last_message_id),
            null != t.last_pin_timestamp && (e.lastPinTimestamp = eC(t.last_pin_timestamp));
    }
}
function e6(e) {
    let { lazyPrivateChannels: t } = e;
    ek(t);
}
function e4(e) {
    let { readStates: t, selectedChannelId: n } = e;
    eT(),
        (e_ = null),
        (ef = n),
        (ep = F.Ay.getCurrentSidebarChannelId(ef)),
        eM.clearAll(),
        t.forEach((e) => {
            let t = eM.get(e.channelId);
            t.deserializeForOverlay(e), t.type === ei.P.CHANNEL && t.rebuildChannelState();
        });
}
function e5(e) {
    let { guild: t } = e,
        n = eA();
    eM.forEach((e) => {
        e.guildId === t.id && e.shouldDeleteReadState(n) && e.delete(!1);
    }),
        ek("full_sync" === t.channels.op ? t.channels.items : t.channels.writes),
        null != t.channelTimestampUpdates && e3(t.channelTimestampUpdates),
        eG(t);
}
function e7(e) {
    let { channelId: t, isAfter: n, messages: r } = e,
        i = eM.get(t);
    i.loadedMessages = !0;
    let a = z.A.getMessages(t);
    null != a &&
        ((r.length > 0 && 1 === G.default.compare(r[0].id, i.ackMessageId) && 0 === i.unreadCount) ||
        a.hasPresent() ||
        a.jumpTargetId === i.ackMessageId
            ? i.rebuildChannelState()
            : n &&
              null != i.ackMessageId &&
              a.has(i.ackMessageId, !0) &&
              ((i.unreadCount += r.length), null == i.oldestUnreadMessageId && i.rebuildChannelState())),
        eU(r.map((e) => e.thread).filter(k.Vq));
}
function e8(e) {
    let { channelId: t } = e;
    eM.get(t).rebuildChannelState();
}
function e9(e) {
    let t,
        n,
        { channelId: i, message: a, isPushNotification: s } = e,
        o = eM.get(i),
        l = o.hasUnread(),
        c = null != o.lastMessageId && o.lastMessageId >= a.id;
    o.lastMessageId = a.id;
    let u = $.default.getCurrentUser(),
        d = B.A.getBasicChannel(i);
    if (null != a.author && null != u && a.author.id === u.id && !ee.MRS.SELF_MENTIONABLE_SYSTEM.has(a.type))
        return (
            null != o.outgoingAck && o.clearOutgoingAck(),
            tx({
                channelId: i,
                messageId: a.id,
                manual: !1,
            })
        );
    let f = (0, O.Y)();
    if ((null == f ? void 0 : f.isReady()) === !0) {
        let e = f.getCurrentRoute();
        if (h.A.getChatOpen(o.channelId)) t = o.channelId;
        else if ((null == e ? void 0 : e.name) === "channel") t = e.params.channelId;
        else if ((null == e ? void 0 : e.name) === "guilds") {
            var p;
            t = null == (p = e.params) ? void 0 : p.channelId;
        }
    } else null == f && ((t = Z.A.getChannelId()), (n = F.Ay.getCurrentSidebarChannelId(t)));
    let _ = t === i || n === i;
    if (_ && ej(o) && !s)
        return o.ack({
            messageId: a.id,
            trackAnalytics: !0,
            location: {
                section: ee.JJy.CHANNEL,
                object: ee.ZSU.ACK_INCOMING_MESSAGE,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
        });
    if (null != r && r.isInstanceFocused() && _ && r.isInstanceLocked() && r.isPinned(ee.uss.TEXT))
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
            : l || (0, N.i$)() === i || (o.oldestUnreadMessageId = a.id),
        !c && o.unreadCount++,
        !(
            X.A.isBlockedOrIgnoredForMessage(a) ||
            (a.type === ee.lAJ.RECIPIENT_REMOVE && (null == d ? void 0 : d.type) === ee.rbe.GROUP_DM)
        ))
    ) {
        let { shouldMention: e, isMentionLowImportance: t } = te(a, u, o);
        e && ((o.isMentionLowImportance = t), o.mentionCount++);
    }
}
function te(e, t, n) {
    if (
        null != t &&
        (0, I.bG)({
            rawMessage: e,
            userId: t.id,
            suppressEveryone: Q.Ay.isSuppressEveryoneEnabled(n.guildId),
            suppressRoles: Q.Ay.isSuppressRolesEnabled(n.guildId),
        })
    )
        return {
            shouldMention: !0,
            isMentionLowImportance: !1,
        };
    let r = B.A.getChannel(e.channel_id);
    if (ew(r))
        return {
            shouldMention: !0,
            isMentionLowImportance: !1,
        };
    if (Q.Ay.mentionOnAllMessages && null != r) {
        if (r.isThread()) {
            if ((0, D.l)(r) === ea.CP.ALL_MESSAGES)
                return {
                    shouldMention: !0,
                    isMentionLowImportance: !0,
                };
        } else if (
            !r.isVocal() &&
            !Q.Ay.isChannelMuted(r.guild_id, r.id) &&
            Q.Ay.resolvedMessageNotifications(r) === ee.orn.ALL_MESSAGES
        )
            return {
                shouldMention: !0,
                isMentionLowImportance: !0,
            };
    }
    return {
        shouldMention: !1,
        isMentionLowImportance: !1,
    };
}
function tt(e) {
    let { channel: t } = e;
    if (!(0, L.Z_)(t.type)) return !1;
    let n = eM.get(t.id);
    (n.lastMessageId = t.lastMessageId), (n.lastPinTimestamp = eC(t.lastPinTimestamp));
}
function tn(e) {
    let { channel: t } = e;
    tr(t), ti(t);
}
function tr(e) {
    if (!L.A_.has(e.type)) return !1;
    let t = eM.get(e.id);
    (t.lastMessageId = e.lastMessageId),
        (t.lastPinTimestamp = eC(e.lastPinTimestamp)),
        t.syncThreadSettings(),
        e.ownerId === V.default.getId() && (t.loadedMessages = !0);
}
function ti(e) {
    let t = e.parent_id;
    eM.get(t).lastMessageId = e.id;
    let n = $.default.getCurrentUser();
    if (e.ownerId === (null == n ? void 0 : n.id))
        return (
            (eM.get(e.id)._persisted = !0),
            tx({
                channelId: t,
                messageId: e.id,
                manual: !1,
            })
        );
}
function ta(e) {
    let { channel: t } = e;
    return !!L.A_.has(t.type) && eM.get(t.id).syncThreadSettings();
}
function ts(e) {
    let { id: t } = e;
    return eM.get(t).syncThreadSettings();
}
function to(e) {
    return (0, P.k)(e) && eM.get(e.id).syncThreadSettings();
}
function tl(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        if (!L.A_.has(e.type)) return;
        let t = eM.get(e.id);
        if (
            ((t.lastMessageId = e.lastMessageId),
            (t.lastPinTimestamp = eC(e.lastPinTimestamp)),
            (t._isThread = !0),
            (t._isActiveThread = !0),
            (t._isJoinedThread = w.A.hasJoined(e.id)),
            e.isForumPost())
        ) {
            let t = eM.get(e.parent_id);
            0 > G.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id);
        }
    });
}
function tc(e) {
    let { threads: t } = e;
    eU(t);
}
function tu(e) {
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
function td(e) {
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
                    .filter(k.Vq),
            );
        }),
            eU(n);
    });
}
function tf(e) {
    let t = $.default.getCurrentUser();
    return null != e.creator_id && null != t && e.creator_id === t.id;
}
function tp(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id,
        r = eM.get(t.guild_id, ei.P.GUILD_EVENT);
    ((r.lastMessageId = t.id), tf(t))
        ? tj({
              type: "GUILD_FEATURE_ACK",
              id: n,
              ackType: ei.P.GUILD_EVENT,
              ackedId: t.id,
              local: !1,
          })
        : !Q.Ay.isMuteScheduledEventsEnabled(n) && r.mentionCount++;
}
function t_(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id;
    if (tf(t) || ![er.XG.CANCELED, er.XG.COMPLETED].includes(t.status)) return !1;
    eM.get(n, ei.P.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
}
function th(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id;
    if (tf(t)) return !1;
    eM.get(t.guild_id, ei.P.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
}
function tm(e) {
    let t = $.default.getCurrentUser();
    if (
        null == t ||
        null == e.relationship.since ||
        (e.relationship.type !== ee.eA$.PENDING_INCOMING && e.relationship.type !== ee.eA$.FRIEND)
    )
        return !1;
    let n = eM.get(t.id, ei.P.NOTIFICATION_CENTER),
        r = e.relationship.type === ee.eA$.FRIEND,
        i = r ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? G.default.extractTimestamp(n.ackMessageId) : 0) < i &&
        ((n.lastMessageId = G.default.fromTimestamp(i)),
        T.A.active ? tk(t.id, ei.P.NOTIFICATION_CENTER, void 0, !1) : r ? n.mentionCount-- : n.mentionCount++);
}
function tg(e) {
    let t = $.default.getCurrentUser();
    if (null == t || null == e.relationship.since || e.relationship.type !== ee.eA$.PENDING_INCOMING) return !1;
    let n = eM.get(t.id, ei.P.NOTIFICATION_CENTER),
        r = new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? G.default.extractTimestamp(n.ackMessageId) : 0) <= r &&
        (n.mentionCount = Math.max(0, n.mentionCount - 1));
}
function tE(e) {
    var t;
    let { item: n } = e,
        r = null == (t = $.default.getCurrentUser()) ? void 0 : t.id;
    if (null == r) return !1;
    let i = eM.get(r, ei.P.NOTIFICATION_CENTER);
    ((i.lastMessageId = n.id), T.A.active || 0) ? tk(r, ei.P.NOTIFICATION_CENTER, n.id, !1) : i.mentionCount++;
}
function tb(e) {
    var t;
    let { ids: n, optimistic: r } = e;
    if (r || T.A.active) return !1;
    let i = null == (t = $.default.getCurrentUser()) ? void 0 : t.id;
    if (null == i) return !1;
    let a = eM.get(i, ei.P.NOTIFICATION_CENTER);
    n.forEach((e) => {
        0 > G.default.compare(a.ackMessageId, e) && (a.mentionCount = Math.max(a.mentionCount - 1, 0));
    });
}
function ty(e) {
    let { guild: t } = e;
    return eM.clear(t.id, ei.P.GUILD_EVENT);
}
function tO(e) {
    let { guild: t } = e,
        n = t.latest_onboarding_question_id;
    if (null == n) return;
    let r = eM.get(t.id, ei.P.GUILD_ONBOARDING_QUESTION);
    (r._guildId = t.id), (r.lastMessageId = n);
}
function tA(e) {
    let { channel: t } = e;
    return eM.clear(t.id);
}
function tv(e) {
    let { channelId: t } = e,
        n = F.Ay.getCurrentSidebarChannelId(t),
        r = B.A.getChannel(t);
    if (null != r) {
        var i;
        let e = eM.get(r.id);
        (e.ackMessageIdAtChannelSelect =
            null != (i = e.ackMessageId) ? i : G.default.fromTimestamp(e.getAckTimestamp())),
            e.recordLastViewedTime();
    }
    tT(ef), tT(ep);
    let a = !1;
    return (
        ef !== t && ((a = tC(ef) || a), (a = tC(ep) || a)),
        (ef === t || ((null == r ? void 0 : r.type) != null && ee.kvI.GUILD_THREADS_ONLY.has(r.type))) &&
            (a =
                eQ(
                    {
                        section: ee.JJy.CHANNEL,
                        object: ee.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL,
                        objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    t,
                ) || a),
        ef === t &&
            (a =
                eQ(
                    {
                        section: ee.JJy.CHANNEL,
                        object: ee.ZSU.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR,
                        objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    n,
                ) || a),
        (ef = t),
        (ep = n),
        a
    );
}
function tS() {
    let e = F.Ay.getCurrentSidebarChannelId(ef),
        t = !1;
    return (
        ep !== e
            ? ((t = tC(ep)), (ep = e))
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
function tI(e) {
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
function tT(e) {
    null == e || (eM.get(e).isManualAck = !1);
}
function tC(e) {
    if (null == e) return !1;
    let t = eM.get(e);
    return !t.hasUnread() && ((t.oldestUnreadMessageId = null), !0);
}
function tN(e) {
    let t = !1;
    return (
        ey.forEachChannel((n, r) => {
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
function tw(e) {
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
function tP(e) {
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
function tD(e) {
    let { channelId: t, timestamp: n } = e;
    return eM.get(t).ackPins(n);
}
function tx(e) {
    let { channelId: t, messageId: n, manual: r, newMentionCount: i } = e,
        a = eM.get(t);
    return r
        ? (a.rebuildChannelState(n, !0, i), a.clearOutgoingAck(), !0)
        : n !== a._ackMessageId &&
              a.ack({
                  messageId: n,
                  local: !0,
                  trackAnalytics: !1,
              });
}
function tL(e) {
    let { channelId: t } = e;
    return eM.get(t).ack({
        messageId: void 0,
        local: !0,
        immediate: void 0,
        force: void 0,
        isExplicitUserAction: !0,
        trackAnalytics: !1,
    });
}
function tj(e) {
    let { id: t, ackType: n, ackedId: r, local: i } = e;
    return tk(t, n, r, i);
}
function tM(e) {
    var t;
    let { ackType: n, ackedId: r, local: i } = e,
        a = null == (t = $.default.getCurrentUser()) ? void 0 : t.id;
    return null != a && tk(a, n, r, i);
}
function tk(e, t, n, r) {
    var i;
    let a = eM.get(e, t);
    return (
        n !== a.ackMessageId &&
        a.lastMessageId !== a.ackMessageId &&
        (null != a.lastMessageId || 0 !== a.mentionCount) &&
        ((n = null != (i = null != n ? n : a.lastMessageId) ? i : G.default.fromTimestamp(a.getAckTimestamp())),
        a.ack({
            messageId: n,
            local: null == r || r,
            trackAnalytics: !1,
        }))
    );
}
function tU(e) {
    let { channelId: t, lastPinTimestamp: n } = e,
        r = eM.get(t),
        i = eC(n);
    return r.lastPinTimestamp !== i && ((r.lastPinTimestamp = i), !0);
}
function tG(e) {
    let t = !1;
    for (let n of e.channels) {
        let e = eM.get(n.id),
            r = eC(n.lastPinTimestamp);
        (e.lastMessageId !== n.lastMessageId || e.lastPinTimestamp !== r) &&
            ((t = !0), (e.lastMessageId = n.lastMessageId), (e.lastPinTimestamp = r));
    }
    return t;
}
function tV() {
    e_ = null;
}
function tF(e) {
    let { readStates: t } = e;
    (eh = !0),
        eT(),
        t.forEach((e) => {
            var t, n;
            let r = null != (t = e.type) ? t : ei.P.CHANNEL;
            e.type = r;
            let i = null != (n = eM._readStates.get(r)) ? n : new Map();
            i.set(e.channelId, (0, f.pp)(e, eM)), eM._readStates.has(r) || eM._readStates.set(r, i);
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
        t === ee.QCW &&
            (em.push(
                ...e.map((e) => ({
                    channel_id: e.channelId,
                    message_id: e.messageId,
                    read_state_type: e.readStateType,
                })),
            ),
            eg || eP(n));
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
        !ey.hasWindowId(t, n) &&
        (ey.addWindowId(t, n),
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
function tK(e) {
    let { channelId: t, windowId: n } = e;
    return ey.removeWindowId(t, n), !1;
}
function tz(e) {
    let { channelId: t } = e;
    return tC(t);
}
function tq(e) {
    let { channelId: t, location: n } = e;
    return eQ(n, t);
}
function tX(e) {
    let { changesByChannelId: t } = e;
    for (let e in t) {
        var n, r;
        let i = t[e],
            a = eM.getIfExists(e);
        if (null != a)
            for (let e of [null == (r = i.new_messages) ? void 0 : r[0]]
                .concat(null != (n = i.modified_messages) ? n : [])
                .filter(k.Vq))
                1 === G.default.compare(e.id, a.lastMessageId) && (a.lastMessageId = e.id);
    }
}
function tZ(e) {
    var t;
    let { ackedId: n } = e,
        r = null == (t = $.default.getCurrentUser()) ? void 0 : t.id;
    if (null == r) return !1;
    let i = eM.get(r, ei.P.MESSAGE_REQUESTS);
    if (n === i.ackMessageId) return !1;
    (i.ackMessageId = n),
        i.ack({
            messageId: n,
            isExplicitUserAction: !0,
            trackAnalytics: !1,
        });
}
function tQ(e) {
    var t;
    let n = null == (t = $.default.getCurrentUser()) ? void 0 : t.id;
    if (null == n) return !1;
    let r = eM.get(n, ei.P.MESSAGE_REQUESTS);
    if (null == r.ackMessageId) return !1;
    r.ackMessageId = void 0;
}
function t$(e) {
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
class tJ extends (i = c.Ay.Store) {
    initialize() {
        H.A,
            $.default,
            W.A,
            Y.A,
            B.A,
            Z.A,
            z.A,
            q.A,
            h.A,
            R.A,
            w.A,
            F.Ay,
            y.Ay,
            b.A,
            g.A,
            Q.Ay,
            J.A,
            T.A,
            A.A,
            x.A,
            S.A,
            this.waitFor(
                R.A,
                V.default,
                h.A,
                F.Ay,
                B.A,
                H.A,
                _.Ay,
                g.A,
                Y.A,
                y.Ay,
                W.A,
                K.A,
                w.A,
                z.A,
                T.A,
                q.A,
                X.A,
                Z.A,
                Q.Ay,
                x.A,
                $.default,
                J.A,
            ),
            this.syncWith([F.Ay], tS);
    }
    getReadStatesByChannel() {
        var e;
        return null != (e = eM._readStates.get(ei.P.CHANNEL)) ? e : new Map();
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
        if ((0, m.A)(e) && n > 0) return 1;
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
            0 >= G.default.compare(e, r.ackMessageIdAtChannelSelect)
        )
            return !1;
        let i = ez(n);
        return G.default.extractTimestamp(e) > i;
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
                        var r;
                        G.default.cast(null == (r = $.default.getCurrentUser()) ? void 0 : r.id) === n.channelId &&
                            t.push(n.serialize(e));
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
        var t;
        let n = null == (t = $.default.getCurrentUser()) ? void 0 : t.id;
        return null == n ? null : eM.get(n, e).ackMessageId;
    }
    getSnapshot(e, t) {
        let n = eM.get(e);
        return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot;
    }
    getChannelIdsForWindowId(e) {
        return ey.getAllChannelIdsForWindowId(e);
    }
}
es(tJ, "displayName", "ReadStateStore");
let t0 = new tJ(p.h, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: tX,
        CONNECTION_OPEN: eJ,
        CONNECTION_OPEN_SUPPLEMENTAL: e6,
        LOGOUT: e0,
        OVERLAY_INITIALIZE: e4,
        CACHE_LOADED: tF,
        GUILD_CREATE: e5,
        LOAD_MESSAGES_SUCCESS: e7,
        MESSAGE_CREATE: e9,
        MESSAGE_DELETE: e8,
        MESSAGE_DELETE_BULK: e8,
        MESSAGE_ACK: tx,
        CHANNEL_ACK: tP,
        CHANNEL_LOCAL_ACK: tL,
        CHANNEL_PINS_ACK: tD,
        CHANNEL_PINS_UPDATE: tU,
        CHANNEL_SELECT: tv,
        VOICE_CHANNEL_SELECT: tI,
        CHANNEL_CREATE: tt,
        THREAD_CREATE: tn,
        THREAD_UPDATE: ta,
        THREAD_LIST_SYNC: tl,
        LOAD_THREADS_SUCCESS: tc,
        LOAD_ARCHIVED_THREADS_SUCCESS: tc,
        SEARCH_MESSAGES_SUCCESS: td,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: td,
        THREAD_MEMBER_UPDATE: ts,
        THREAD_MEMBERS_UPDATE: to,
        CHANNEL_DELETE: tA,
        THREAD_DELETE: tA,
        WINDOW_FOCUS: tN,
        UPDATE_CHANNEL_DIMENSIONS: tw,
        CURRENT_USER_UPDATE: tV,
        BULK_ACK: tY,
        ENABLE_AUTOMATIC_ACK: tW,
        DISABLE_AUTOMATIC_ACK: tK,
        GUILD_FEATURE_ACK: tj,
        GUILD_SCHEDULED_EVENT_CREATE: tp,
        GUILD_SCHEDULED_EVENT_UPDATE: t_,
        GUILD_SCHEDULED_EVENT_DELETE: th,
        GUILD_DELETE: ty,
        GUILD_UPDATE: tO,
        RESORT_THREADS: tu,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: tB,
        DECAY_READ_STATES: eT,
        NOTIFICATION_CENTER_ITEM_CREATE: tE,
        RELATIONSHIP_ADD: tm,
        RELATIONSHIP_REMOVE: tg,
        NOTIFICATION_CENTER_ITEMS_ACK: tb,
        USER_NON_CHANNEL_ACK: tM,
        PASSIVE_UPDATE_V2: tG,
        CLEAR_OLDEST_UNREAD_MESSAGE: tz,
        TRY_ACK: tq,
        MESSAGE_REQUEST_ACK: tZ,
        MESSAGE_REQUEST_CLEAR_ACK: tQ,
        APP_STATE_UPDATE: t$,
    }),
    t1 = t0;
