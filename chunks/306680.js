let r;
n.d(t, {
    Ex: () => eP,
    ZP: () => t1,
}),
    n(388685),
    n(415506),
    n(539854),
    n(997841);
var i,
    a = n(392711),
    o = n(913527),
    s = n.n(o),
    l = n(95015),
    c = n(442837),
    u = n(544891),
    d = n(846519),
    f = n(283693),
    p = n(570140),
    _ = n(317381);
n(15624);
var m = n(358221),
    h = n(702321),
    g = n(430198),
    E = n(710845),
    b = n(353926),
    y = n(924301),
    O = n(777639),
    v = n(355298),
    S = n(869404),
    I = n(333984),
    T = n(572804),
    A = n(140155),
    C = n(398758),
    N = n(725319),
    P = n(344185),
    R = n(569471),
    w = n(195663),
    D = n(723170),
    x = n(581883),
    L = n(131704),
    j = n(386438),
    M = n(70956),
    k = n(823379),
    U = n(931619),
    G = n(709054),
    Z = n(314897),
    B = n(433355),
    F = n(592125),
    V = n(796974),
    H = n(486472),
    Y = n(430824),
    W = n(517100),
    K = n(375954),
    z = n(496675),
    q = n(699516),
    X = n(944486),
    Q = n(9156),
    J = n(594174),
    $ = n(451478),
    ee = n(981631),
    et = n(918559),
    en = n(176505),
    er = n(765305),
    ei = n(490897),
    ea = n(124368);
function eo(e, t, n) {
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
let es = new E.Z("ReadStateStore"),
    el = 2;
__OVERLAY__ && (r = n(237997).default);
let ec = ee.S7T.VIEW_CHANNEL | ee.S7T.READ_MESSAGE_HISTORY,
    eu = 100,
    ed = 1,
    ef = X.Z.getChannelId(),
    ep = null,
    e_ = null,
    em = !1,
    eh = [],
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
        for (let e of t) if ($.Z.isFocused(e)) return !0;
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
        eo(this, "channelWindowIds", {});
    }
}
let ey = new eb(),
    eO = 30 * M.Z.Millis.DAY;
function ev() {
    return G.default.fromTimestamp(Date.now() - eO);
}
let eS = 0,
    eI = 0,
    eT = null;
function eA() {
    (eS = Date.now() - 7 * M.Z.Millis.DAY),
        (eI = Date.now() - 3 * M.Z.Millis.DAY),
        clearTimeout(eT),
        (eT = setTimeout(() => {
            p.Z.dispatch({ type: "DECAY_READ_STATES" });
        }, +M.Z.Millis.HOUR));
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
function eP(e, t) {
    let n = F.Z.getChannel(e.channel_id);
    return (
        !(null == n || q.Z.isBlockedOrIgnoredForMessage(e)) &&
        !!(
            (0, T.ZP)({
                message: e,
                userId: t.id,
                suppressEveryone: Q.ZP.isSuppressEveryoneEnabled(n.guild_id),
                suppressRoles: Q.ZP.isSuppressRolesEnabled(n.guild_id),
            }) || eR(n)
        )
    );
}
function eR(e) {
    return null != e && e.isPrivate() && !Q.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
}
async function ew(e) {
    if (0 === eh.length) {
        (eg = !1), null == e || e();
        return;
    }
    eg = !0;
    let t = eh.splice(0, eu);
    await ex(() =>
        u.tn.post({
            url: ee.ANM.BULK_ACK,
            body: { read_states: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    ),
        await (0, d.GR)(1000 * ed),
        ew(e);
}
let eD = 3;
async function ex(e) {
    let t = Z.default.getId();
    for (let n = 0; n < eD; n++)
        try {
            return await e();
        } catch (e) {
            if (
                (es.error("", e),
                n + 1 < eD && (await (0, d.GR)((n + 1) * 2000), await U.Z.awaitOnline(), t !== Z.default.getId()))
            )
                return Promise.reject(Error("User changed."));
        }
}
function eL(e, t) {
    var n;
    (null == (n = J.default.getCurrentUser()) ? void 0 : n.hasAnyStaffLevel()) &&
        es.log("STAFF-ACK-LOG:", t, e.channelId);
}
function ej(e) {
    if ((eL(e, "shouldAutomaticallyAck called"), e.type !== ei.W.CHANNEL)) return eL(e, "not channel read state"), !1;
    let t = F.Z.getChannel(e.channelId),
        n = null != t && t.isForumPost();
    if (
        null != _.ZP.getConnectedActivityLocation() &&
        _.ZP.getActivityPanelMode() === et.Ez.PANEL &&
        _.ZP.getFocusedLayout() === et.MI.NO_CHAT
    )
        return eL(e, "In activity"), !1;
    if (W.Z.isIdle()) return eL(e, "Is idle"), !1;
    if (!e.canTrackUnreads()) return eL(e, "Cannot track unreads"), !1;
    if ((null == t ? void 0 : t.isForumLikeChannel()) !== !0) {
        let t = ey.isAnyWindowFocused(e.channelId),
            n = null != r && r.isInstanceFocused() && r.isPinned(ee.Odu.TEXT);
        if (!t && !n) return !1;
    }
    if (n && !e._persisted) return eL(e, "unpersisted forum post"), !0;
    if (!e.hasUnreadOrMentions()) return eL(e, "No unread or mentions"), !1;
    if ((null == t ? void 0 : t.isForumLikeChannel()) === !0) return eL(e, "Forum-like channel"), !1;
    if (!(n && !e._isJoinedThread) && !V.Z.isAtBottom(e.channelId)) return eL(e, "Not at bottom"), !1;
    let i = m.Z.getLayout(e.channelId),
        a = m.Z.getChatOpen(e.channelId);
    if (!a && (i === ee.AEg.NO_CHAT || i === ee.AEg.FULL_SCREEN)) return eL(e, "Fullscreen video"), !1;
    if (!ey.isChannelAckable(e.channelId)) return eL(e, "Not ackable"), !1;
    let o = K.Z.getMessages(e.channelId);
    return null == o || !o.ready || o.loadingMore
        ? (eL(e, "Still loading messages"), !1)
        : (0, N._E)() || a
          ? (eL(e, "Acked"), !0)
          : (eL(e, "Chat not focused"), !1);
}
class eM {
    static forEach(e) {
        for (let t of eM._readStates.values()) for (let n of t.values()) if (!1 === e(n)) break;
    }
    static get(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL,
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
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = this.getIfExists(e, t);
        return null == i ? r : n(i);
    }
    static clear(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL,
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
            _isJoinedThread: o,
            _persisted: s,
            loadedMessages: l,
            _lastMessageId: c,
            _lastMessageTimestamp: u,
            _ackMessageId: d,
            _ackMessageTimestamp: f,
            ackPinTimestamp: p,
            isManualAck: _,
            lastPinTimestamp: m,
            _oldestUnreadMessageId: h,
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
                _isJoinedThread: o,
                _persisted: s,
                loadedMessages: l,
                _lastMessageId: c,
                _lastMessageTimestamp: u,
                _ackMessageId: d,
                _ackMessageTimestamp: f,
                ackPinTimestamp: p,
                isManualAck: _,
                lastPinTimestamp: m,
                _oldestUnreadMessageId: h,
                oldestUnreadMessageIdStale: g,
                estimated: E,
                _mentionCount: b,
                flags: y,
                lastViewed: O,
            };
        let v = {
            channelId: t,
            type: n,
            _guildId: r,
            _persisted: s,
            _lastMessageId: c,
            _lastMessageTimestamp: u,
            _ackMessageId: d,
            _ackMessageTimestamp: f,
            ackPinTimestamp: p,
            lastPinTimestamp: m,
            _mentionCount: b,
            flags: y,
        };
        return (
            null != O && O > 0 && (v.lastViewed = O),
            i && ((v._isThread = i), (v._isActiveThread = a), (v._isJoinedThread = o)),
            v
        );
    }
    deserializeForOverlay(e) {
        let {
            channelId: t,
            type: n,
            _guildId: r,
            _isThread: i,
            _isActiveJoinedThread: a,
            _isActiveThread: o,
            _isJoinedThread: s,
            _persisted: l,
            loadedMessages: c,
            _lastMessageId: u,
            _lastMessageTimestamp: d,
            _ackMessageId: f,
            _ackMessageTimestamp: p,
            ackPinTimestamp: _,
            isManualAck: m,
            lastPinTimestamp: h,
            _oldestUnreadMessageId: g,
            oldestUnreadMessageIdStale: E,
            estimated: b,
            _unreadCount: y,
            _mentionCount: O,
            flags: v,
            lastViewed: S,
        } = e;
        (this.channelId = t),
            (this.type = null != n ? n : ei.W.CHANNEL),
            (this._guildId = r),
            (this._isThread = null != i && i),
            null != a
                ? ((this._isActiveThread = a), (this._isJoinedThread = a))
                : ((this._isActiveThread = null != o && o), (this._isJoinedThread = null != s && s)),
            (this._persisted = !1 !== l),
            (this.loadedMessages = null != c && c),
            (this._lastMessageId = u),
            (this._lastMessageTimestamp = d),
            (this._ackMessageId = f),
            (this._ackMessageTimestamp = p),
            (this.ackPinTimestamp = _),
            (this.isManualAck = null != m && m),
            (this.lastPinTimestamp = h),
            (this._oldestUnreadMessageId = g),
            (this.oldestUnreadMessageIdStale = null != E && E),
            (this.estimated = null != b && b),
            (this._unreadCount = null != y ? y : 0),
            (this._mentionCount = O),
            (this.flags = v),
            (this.lastViewed = S),
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
        let e = K.Z.getMessages(this.channelId);
        if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
        if (!this.hasMentions()) return this.lastMessageId;
        let t = null,
            n = this.mentionCount,
            r = J.default.getCurrentUser();
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
        let e = F.Z.getChannel(this.channelId);
        return (this._guildId = null != e ? e.getGuildId() : null);
    }
    isPrivate() {
        if (this.type !== ei.W.CHANNEL) return !1;
        let e = F.Z.getChannel(this.channelId);
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
            let e = J.default.getCurrentUser(),
                t = this.getAckTimestamp(),
                i = !1,
                a = !1,
                o = null,
                s = K.Z.getMessages(this.channelId);
            s.forAll((n) => {
                if (i) {
                    var s;
                    this.oldestUnreadMessageId = null != (s = this._oldestUnreadMessageId) ? s : n.id;
                } else i = n.id === this._ackMessageId;
                G.default.extractTimestamp(n.id) > t
                    ? (this.unreadCount++, r && eP(n, e) && this.mentionCount++, (o = null != o ? o : n.id))
                    : (a = !0);
            }),
                (this.estimated = !s.hasPresent() || (!(i || a) && s.length === this.unreadCount)),
                (this.oldestUnreadMessageId = null != (n = this._oldestUnreadMessageId) ? n : o);
        }
        null != i && (this.mentionCount = i);
    }
    handleGuildEventRemoval(e, t) {
        var n;
        if (G.default.compare(this.ackMessageId, t) >= 0) return;
        let r = y.ZP.getGuildScheduledEventsForGuild(e),
            i = this.getAckTimestamp();
        if (isNaN(i)) return;
        let a = null != (n = this._ackMessageId) ? n : G.default.fromTimestamp(i),
            o = null,
            s = 0;
        r.forEach((e) => {
            (0, y.Ld)(e) && (G.default.compare(e.id, o) > 0 && (o = e.id), G.default.compare(e.id, a) > 0 && s++);
        }),
            (this.lastMessageId = o),
            (this.mentionCount = s);
    }
    canTrackUnreads() {
        if (this.type !== ei.W.CHANNEL) return !0;
        if ((this._isThread && !this._isActiveThread) || this._isResourceChannel) return !1;
        let e = F.Z.getBasicChannel(this.channelId);
        return (
            null != e &&
            ("basicPermissions" in e
                ? j.Z.has(e.basicPermissions, ee.S7T.VIEW_CHANNEL)
                : !g.Z.isChannelGated(this.guildId, this.channelId) || z.Z.can(ee.Plq.VIEW_CHANNEL, e))
        );
    }
    canBeUnread() {
        return (
            !(
                (this._isThread && !this._isJoinedThread) ||
                (0, S.h3)(this.channelId, [v.Z, I.Z]) ||
                (!this._isThread &&
                    (0, C.r1)(this._guildId) &&
                    (this._lastMessageTimestamp < eS ||
                        (!Q.ZP.isChannelOrParentOptedIn(this._guildId, this.channelId) &&
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
                (0, S.h3)(this.channelId, [v.Z, I.Z]) ||
                ((0, C.r1)(this._guildId) && this._lastMessageTimestamp < eS)
            ) && this.canTrackUnreads()
        );
    }
    getGuildChannelUnreadState(e, t, n, r, i) {
        if (
            t &&
            (this._lastMessageTimestamp < eS ||
                (!Q.ZP.isChannelRecordOrParentOptedIn(e) &&
                    !this.hasRecentlyVisitedAndRead() &&
                    this.mentionCount <= 0))
        )
            return {
                mentionCount: 0,
                unread: !1,
                isMentionLowImportance: !1,
            };
        if ("basicPermissions" in e) {
            if (!j.Z.has(e.basicPermissions, ee.S7T.VIEW_CHANNEL))
                return {
                    mentionCount: 0,
                    unread: !1,
                    isMentionLowImportance: !1,
                };
        } else if (g.Z.isChannelGated(this.guildId, this.channelId) && !z.Z.can(ee.Plq.VIEW_CHANNEL, e))
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
            this.getAckTimestamp() > eI &&
            x.Z.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
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
        if (this.type !== ei.W.CHANNEL || !this.canTrackUnreads()) return !1;
        if (null == e) {
            if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
            (this._persisted = !0),
                ex(() =>
                    u.tn.post({
                        url: ee.ANM.PINS_ACK(this.channelId),
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
            force: o = !1,
            isExplicitUserAction: s = !1,
        } = e;
        if (!this._shouldAck(o, i, s) || (!o && !this.canTrackUnreads())) return !1;
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
                eJ(this.channelId),
                i
                    ? (this.oldestUnreadMessageId = null)
                    : (null == this.outgoingAck &&
                          (this.outgoingAckTimer = setTimeout(
                              () => {
                                  this.type === ei.W.CHANNEL ? this._ack(n, r) : this._nonChannelAck(),
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
        let { default: e } = n(888369),
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
                (this.type !== ei.W.CHANNEL ||
                    !!this.loadedMessages ||
                    !!(null == (r = F.Z.getChannel(this.channelId)) ? void 0 : r.isForumLikeChannel())))
        );
    }
    _ack(e, t) {
        let { outgoingAck: r } = this;
        if (null == r) return;
        let i = Z.default.getId(),
            a = e_;
        this._persisted = !0;
        let o = this.recalculateFlags(),
            s = o === this.flags ? void 0 : o;
        ex(() =>
            u.tn.post({
                url: ee.ANM.MESSAGE_ACK(this.channelId, r),
                body: {
                    token: e_,
                    last_viewed: this.lastViewed,
                    flags: s,
                },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
        ).then((r) => {
            null != r &&
                (e_ === a && i === Z.default.getId() && (e_ = r.body.token),
                p.Z.dispatch({ type: "MESSAGE_ACKED" }),
                t &&
                    n
                        .e("54076")
                        .then(n.bind(n, 189229))
                        .then((t) => {
                            let { default: n } = t;
                            n(this.channelId, null != e ? e : {});
                        }));
        });
    }
    recalculateFlags() {
        if (this.type !== ei.W.CHANNEL) return;
        let e = F.Z.getChannel(this.channelId);
        if (null != e) return e.isThread() ? 2 : +(null != e.guild_id);
    }
    _nonChannelAck() {
        let e,
            { outgoingAck: t, channelId: n, type: r } = this;
        if (null != t) {
            switch (r) {
                case ei.W.GUILD_HOME:
                case ei.W.GUILD_EVENT:
                case ei.W.GUILD_ONBOARDING_QUESTION:
                    e = ee.ANM.GUILD_FEATURE_ACK(n, t, r);
                    break;
                case ei.W.NOTIFICATION_CENTER:
                case ei.W.MESSAGE_REQUESTS:
                    e = ee.ANM.USER_NON_CHANNEL_ACK(t, r);
                    break;
                default:
                    return;
            }
            (this._persisted = !0),
                ex(() =>
                    u.tn.post({
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
            n = F.Z.getBasicChannel(this.channelId);
        es.log("Deleting ReadState", this.channelId, this.type, {
            remote: t,
            persisted: this._persisted,
            channelMissing: null == n,
            isOld: eq(this, ev()),
            validType: null != n && L.AW.has(n.type),
            readableType: null != n && (0, L.Em)(n.type),
            oldThreadCutoff: ev(),
            mentionCount: this.mentionCount,
            channelId: this.channelId,
            ackMessageId: this._ackMessageId,
            lastMessageId: this._lastMessageId,
        }),
            t &&
                this._persisted &&
                u.tn.del({
                    url: ee.ANM.CHANNEL_ACK(this.channelId),
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
        if (0 !== H.Z.totalUnavailableGuilds) return !1;
        if (null != this.type && this.type !== ei.W.CHANNEL) return !eX(this);
        let t = F.Z.getBasicChannel(this.channelId);
        if (null == t)
            if (eq(this, e)) return !0;
            else return !1;
        return (
            !!L.AW.has(t.type) &&
            (!(0, L.Em)(t.type) ||
                (!(0, L.hv)(t.type) &&
                    !(
                        !(L.Ec.has(t.type) && ez(this, t, e)) &&
                        (!(this.mentionCount > 0) || z.Z.canBasicChannel(ec, t))
                    )))
        );
    }
    getAckTimestamp() {
        let e, t;
        if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
        if (this._isThread)
            return (
                (this._ackMessageTimestamp = eW(this.guildId, this.channelId)),
                (this._ackMessageId = G.default.fromTimestamp(this._ackMessageTimestamp)),
                this._ackMessageTimestamp
            );
        if (this.type === ei.W.GUILD_EVENT || this.type === ei.W.GUILD_ONBOARDING_QUESTION)
            e = Y.Z.getGuild(this.channelId);
        else if ((0, en.AB)(this.channelId)) e = Y.Z.getGuild(this.guildId);
        else {
            let t = F.Z.getChannel(this.channelId);
            if (null != t) {
                let n = t.getGuildId();
                e = Y.Z.getGuild(n);
            }
        }
        return (
            null != e
                ? isNaN((t = eK(e))) && (t = G.default.extractTimestamp(this.channelId))
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
        let e = F.Z.getChannel(this.channelId);
        if (null == e)
            return es.warn("syncThreadSettings called with channel not in memory ".concat(this.channelId)), !1;
        let t = this.guildId,
            n = null != t && P.Z.isActive(t, e.parent_id, this.channelId),
            r = R.Z.hasJoined(this.channelId);
        return (
            (this._isActiveThread !== n || this._isJoinedThread !== r) &&
            ((this._isActiveThread = n), (this._isJoinedThread = r), !0)
        );
    }
    recordLastViewedTime() {
        let e = Math.ceil((Date.now() - G.DISCORD_EPOCH) / M.Z.Millis.DAY);
        e !== this.lastViewed &&
            ((this.lastViewed = e),
            this.canTrackUnreads() &&
                !this.hasUnread() &&
                this.ack({
                    force: !0,
                    trackAnalytics: !1,
                }));
    }
    constructor(e, t = ei.W.CHANNEL) {
        eo(this, "channelId", void 0),
            eo(this, "type", ei.W.CHANNEL),
            eo(this, "_guildId", void 0),
            eo(this, "_isThread", void 0),
            eo(this, "_isActiveThread", void 0),
            eo(this, "_isJoinedThread", void 0),
            eo(this, "_isResourceChannel", void 0),
            eo(this, "_persisted", void 0),
            eo(this, "loadedMessages", void 0),
            eo(this, "_lastMessageId", void 0),
            eo(this, "_lastMessageTimestamp", void 0),
            eo(this, "_ackMessageId", void 0),
            eo(this, "_ackMessageTimestamp", void 0),
            eo(this, "isManualAck", void 0),
            eo(this, "ackPinTimestamp", void 0),
            eo(this, "lastPinTimestamp", void 0),
            eo(this, "_oldestUnreadMessageId", void 0),
            eo(this, "oldestUnreadMessageIdStale", void 0),
            eo(this, "estimated", void 0),
            eo(this, "_unreadCount", void 0),
            eo(this, "_mentionCount", void 0),
            eo(this, "flags", void 0),
            eo(this, "lastViewed", void 0),
            eo(this, "outgoingAck", void 0),
            eo(this, "outgoingAckTimer", null),
            eo(this, "ackMessageIdAtChannelSelect", null),
            eo(this, "ackedWhileCached", void 0),
            eo(this, "snapshot", void 0),
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
        if ((0, L.Em)(e.type)) {
            let t = eM.get(e.id);
            (t._guildId = e.guild_id),
                (t.lastMessageId = e.lastMessageId),
                (t.lastPinTimestamp = eC(e.lastPinTimestamp)),
                (t._isResourceChannel = e.hasFlag(en.zZ.IS_GUILD_RESOURCE_CHANNEL)),
                L.Ec.has(e.type) && t.syncThreadSettings();
        }
    });
}
function eU(e) {
    e.forEach((e) => {
        if ((0, L.Em)(e.type)) {
            var t;
            let n = eM.get(e.id);
            (n.lastMessageId = e.last_message_id),
                (n.lastPinTimestamp = eC(e.last_pin_timestamp)),
                (n._isResourceChannel = (0, l.yE)(null != (t = e.flags) ? t : 0, en.zZ.IS_GUILD_RESOURCE_CHANNEL)),
                L.Ec.has(e.type) && n.syncThreadSettings();
        }
    });
}
function eG(e) {
    eV(e), eH(e), eF(e), eY(e);
}
function eZ(e) {
    eB(e);
}
function eB(e) {
    let t = J.default.getCurrentUser();
    if (null == t) return !1;
    let n = eM.get(t.id, ei.W.NOTIFICATION_CENTER);
    e.forEach((e) => {
        if (null == e.since || e.type !== ee.OGo.PENDING_INCOMING) return;
        let t = new Date(e.since).getTime();
        (null != n.ackMessageId ? G.default.extractTimestamp(n.ackMessageId) : 0) < t &&
            (n.mentionCount++, (n.lastMessageId = G.default.fromTimestamp(t)));
    });
}
function eF(e) {
    let t = 24;
    eM.get(e.id, ei.W.GUILD_HOME).lastMessageId = G.default.fromTimestamp(s()(Date.now()).subtract(t, "h").valueOf());
}
function eV(e) {
    var t;
    null == (t = e.threads) ||
        t.forEach((t) => {
            if (!L.AW.has(t.type)) return;
            let n = eM.get(t.id);
            (n.lastMessageId = t.lastMessageId),
                (n.lastPinTimestamp = eC(t.lastPinTimestamp)),
                (n._isThread = !0),
                (n._isActiveThread = !0),
                (n._isJoinedThread = null != t.member),
                null == n.ackMessageId && (n.ackMessageId = G.default.fromTimestamp(eW(e.id, t.id))),
                null == n.ackPinTimestamp && (n.ackPinTimestamp = eW(e.id, t.id));
        });
}
function eH(e) {
    var t, n;
    if (
        (null == (t = e.guild_scheduled_events) ? void 0 : t.length) === 0 &&
        null == eM.getIfExists(e.id, ei.W.GUILD_EVENT)
    )
        return;
    let r = eM.get(e.id, ei.W.GUILD_EVENT);
    r._guildId = e.id;
    let i = 0,
        a = null,
        o = null != (n = r._ackMessageId) ? n : G.default.fromTimestamp(r.getAckTimestamp());
    e.guild_scheduled_events.forEach((e) => {
        G.default.compare(e.id, a) > 0 && (a = e.id), G.default.compare(e.id, o) > 0 && i++;
    }),
        (r.lastMessageId = a),
        (r.mentionCount = i);
}
function eY(e) {
    let t = Y.Z.getGuild(e.id);
    if (null == t) return;
    let n = null == t ? void 0 : t.latestOnboardingQuestionId;
    if (null == n) return;
    let r = eM.get(t.id, ei.W.GUILD_ONBOARDING_QUESTION);
    (r._guildId = t.id), (r.lastMessageId = n);
}
function eW(e, t) {
    var n, r, i;
    let a = F.Z.getChannel(t),
        o = Y.Z.getGuild(null != e ? e : null == a ? void 0 : a.guild_id),
        s = (null == a ? void 0 : a.isForumPost()) ? 0 : eK(o),
        l = (null != (i = null == (n = R.Z.joinTimestamp(t)) ? void 0 : n.getTime()) ? i : 0) - 5000;
    isNaN(l) && (l = -5000);
    let c = null == a || null == (r = a.threadMetadata) ? void 0 : r.archiveTimestamp,
        u = null != c ? new Date(c).getTime() - 1 : 0;
    isNaN(u) && (u = 0);
    let d = Math.max(l, u);
    return (
        d <= 0 && (d = G.default.extractTimestamp(t) - 1),
        (isNaN(d) || d <= 0) && (d = 0),
        isNaN(s) ? d : Math.max(s, d)
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
function ez(e, t, n) {
    let r = e.guildId;
    return !(null != r && P.Z.isActive(r, t.parent_id, e.channelId)) && eq(e, n);
}
function eq(e, t) {
    return (
        e.mentionCount > 0 ||
        !(
            G.default.compare(e.channelId, t) > 0 ||
            (null != e._ackMessageId && G.default.compare(e._ackMessageId, t) > 0) ||
            (null != e._lastMessageId && G.default.compare(e._lastMessageId, t) > 0)
        )
    );
}
function eX(e) {
    switch (e.type) {
        case ei.W.GUILD_HOME:
        case ei.W.GUILD_EVENT:
        case ei.W.GUILD_ONBOARDING_QUESTION:
            return null != Y.Z.getGuild(e.channelId);
        case ei.W.NOTIFICATION_CENTER:
            var t;
            return G.default.cast(null == (t = J.default.getCurrentUser()) ? void 0 : t.id) === e.channelId;
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
function eJ(e) {
    if (null == e) return;
    let t = eM.get(e);
    if (t.type !== ei.W.CHANNEL) return;
    let n = F.Z.getChannel(t.channelId);
    if (null == n || !n.isForumPost() || null == n.parent_id) return;
    let r = n.parent_id,
        i = eM.get(r);
    P.Z.hasLoaded(n.guild_id) &&
        G.default
            .keys(P.Z.getThreadsForParent(n.guild_id, r))
            .every((e) => t0.hasOpenedThread(e) || 0 > G.default.compare(e, i.ackMessageId)) &&
        i.ack({
            trackAnalytics: !0,
            location: {
                section: ee.jXE.CHANNEL,
                object: ee.qAy.ACK_FORUM_CHANNEL_NO_UNREAD_POSTS,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
        });
}
function e$(e) {
    var t;
    let { guilds: n, relationships: r, initialPrivateChannels: i, readState: a } = e;
    eA(),
        (e_ = null),
        em || a.partial || eM.clearAll(),
        (em = !1),
        a.entries.forEach((e) => {
            var t, n;
            let r = null != (t = e.read_state_type) ? t : ei.W.CHANNEL;
            r !== ei.W.CHANNEL && (e = eN(e));
            let i = eM.get(e.id, r);
            (i._persisted = !0),
                (i._mentionCount = null != (n = e.mention_count) ? n : 0),
                (i.flags = e.flags),
                (i.lastViewed = e.last_viewed);
            let a = F.Z.getBasicChannel(e.id);
            null != a && (0, L.Q5)(a.type) && (null == e.last_message_id || 0 === e.last_message_id)
                ? (i.ackMessageId = G.default.fromTimestamp(eW(a.guild_id, a.id)))
                : i.ackedWhileCached
                  ? -1 === G.default.compare(i.ackMessageId, e.last_message_id) && (i.ackMessageId = e.last_message_id)
                  : (i.ackMessageId = e.last_message_id),
                (i.ackedWhileCached = void 0),
                (i.ackPinTimestamp = eC(e.last_pin_timestamp)),
                eM._mentionChannels.delete(i.channelId),
                i._mentionCount > 0 && i.canHaveMentions() && eM._mentionChannels.add(i.channelId);
        }),
        eM.resetGuildSentinels();
    let o = null == (t = J.default.getCurrentUser()) ? void 0 : t.id;
    for (let e of (null != o &&
        (eM.get(o, ei.W.NOTIFICATION_CENTER).lastMessageId = G.default.fromTimestamp(Date.now())),
    eZ(r),
    ek(i),
    n))
        ek("full_sync" === e.channels.op ? e.channels.items : e.channels.writes),
            null != e.channelTimestampUpdates && e2(e.channelTimestampUpdates),
            eG(e);
    e0(), (eE = setTimeout(() => e3(a.entries), 10 * M.Z.Millis.SECOND));
}
function e0() {
    null != eE && clearTimeout(eE);
}
eo(eM, "_guildReadStateSentinels", {}), eo(eM, "_readStates", new Map()), eo(eM, "_mentionChannels", new Set());
let e1 = (0, a.throttle)((e) => {
    e.delete();
}, 100);
function e3(e) {
    let t = ev();
    for (let r of e) {
        var n;
        let e = null != (n = r.read_state_type) ? n : ei.W.CHANNEL,
            i = eM.get(r.id, e);
        i.shouldDeleteReadState(t) && e1(i);
    }
}
function e2(e) {
    for (let t of e) {
        let e = eM.get(t.id);
        null != t.last_message_id && (e.lastMessageId = t.last_message_id),
            null != t.last_pin_timestamp && (e.lastPinTimestamp = eC(t.last_pin_timestamp));
    }
}
function e4(e) {
    let { lazyPrivateChannels: t } = e;
    ek(t);
}
function e5(e) {
    let { readStates: t, selectedChannelId: n } = e;
    eA(),
        (e_ = null),
        (ef = n),
        (ep = B.ZP.getCurrentSidebarChannelId(ef)),
        eM.clearAll(),
        t.forEach((e) => {
            let t = eM.get(e.channelId);
            t.deserializeForOverlay(e), t.type === ei.W.CHANNEL && t.rebuildChannelState();
        });
}
function e8(e) {
    let { guild: t } = e,
        n = ev();
    eM.forEach((e) => {
        e.guildId === t.id && e.shouldDeleteReadState(n) && e.delete(!1);
    }),
        ek("full_sync" === t.channels.op ? t.channels.items : t.channels.writes),
        null != t.channelTimestampUpdates && e2(t.channelTimestampUpdates),
        eG(t);
}
function e6(e) {
    let { channelId: t, isAfter: n, messages: r } = e,
        i = eM.get(t);
    i.loadedMessages = !0;
    let a = K.Z.getMessages(t);
    null != a &&
        ((r.length > 0 && 1 === G.default.compare(r[0].id, i.ackMessageId) && 0 === i.unreadCount) ||
        a.hasPresent() ||
        a.jumpTargetId === i.ackMessageId
            ? i.rebuildChannelState()
            : n &&
              null != i.ackMessageId &&
              a.has(i.ackMessageId, !0) &&
              ((i.unreadCount += r.length), null == i.oldestUnreadMessageId && i.rebuildChannelState())),
        eU(r.map((e) => e.thread).filter(k.lm));
}
function e7(e) {
    let { channelId: t } = e;
    eM.get(t).rebuildChannelState();
}
function e9(e) {
    let t,
        n,
        { channelId: i, message: a, isPushNotification: o } = e,
        s = eM.get(i),
        l = s.hasUnread(),
        c = null != s.lastMessageId && s.lastMessageId >= a.id;
    s.lastMessageId = a.id;
    let u = J.default.getCurrentUser(),
        d = F.Z.getBasicChannel(i);
    if (null != a.author && null != u && a.author.id === u.id && !ee.V$x.SELF_MENTIONABLE_SYSTEM.has(a.type))
        return (
            null != s.outgoingAck && s.clearOutgoingAck(),
            tx({
                channelId: i,
                messageId: a.id,
                manual: !1,
            })
        );
    let f = (0, O.D)();
    if ((null == f ? void 0 : f.isReady()) === !0) {
        let e = f.getCurrentRoute();
        if (m.Z.getChatOpen(s.channelId)) t = s.channelId;
        else if ((null == e ? void 0 : e.name) === "channel") t = e.params.channelId;
        else if ((null == e ? void 0 : e.name) === "guilds") {
            var p;
            t = null == (p = e.params) ? void 0 : p.channelId;
        }
    } else null == f && ((t = X.Z.getChannelId()), (n = B.ZP.getCurrentSidebarChannelId(t)));
    let _ = t === i || n === i;
    if (_ && ej(s) && !o)
        return s.ack({
            messageId: a.id,
            trackAnalytics: !0,
            location: {
                section: ee.jXE.CHANNEL,
                object: ee.qAy.ACK_INCOMING_MESSAGE,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
        });
    if (null != r && r.isInstanceFocused() && _ && r.isInstanceLocked() && r.isPinned(ee.Odu.TEXT))
        return s.ack({
            messageId: a.id,
            trackAnalytics: !0,
            location: {
                section: ee.jXE.OVERLAY,
                object: ee.qAy.ACK_INCOMING_MESSAGE,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
        });
    if (
        (null == s.oldestUnreadMessageId || s.oldestUnreadMessageIdStale
            ? (s.oldestUnreadMessageId = a.id)
            : l || (0, N.nV)() === i || (s.oldestUnreadMessageId = a.id),
        !c && s.unreadCount++,
        !(
            q.Z.isBlockedOrIgnoredForMessage(a) ||
            (a.type === ee.uaV.RECIPIENT_REMOVE && (null == d ? void 0 : d.type) === ee.d4z.GROUP_DM)
        ))
    ) {
        let { shouldMention: e, isMentionLowImportance: t } = te(a, u, s);
        e && ((s.isMentionLowImportance = t), s.mentionCount++);
    }
}
function te(e, t, n) {
    if (
        null != t &&
        (0, T.Hl)({
            rawMessage: e,
            userId: t.id,
            suppressEveryone: Q.ZP.isSuppressEveryoneEnabled(n.guildId),
            suppressRoles: Q.ZP.isSuppressRolesEnabled(n.guildId),
        })
    )
        return {
            shouldMention: !0,
            isMentionLowImportance: !1,
        };
    let r = F.Z.getChannel(e.channel_id);
    if (eR(r))
        return {
            shouldMention: !0,
            isMentionLowImportance: !1,
        };
    if (Q.ZP.mentionOnAllMessages && null != r) {
        if (r.isThread()) {
            if ((0, D.J)(r) === ea.iN.ALL_MESSAGES)
                return {
                    shouldMention: !0,
                    isMentionLowImportance: !0,
                };
        } else if (
            !r.isVocal() &&
            !Q.ZP.isChannelMuted(r.guild_id, r.id) &&
            Q.ZP.resolvedMessageNotifications(r) === ee.bL.ALL_MESSAGES
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
    if (!(0, L.Em)(t.type)) return !1;
    let n = eM.get(t.id);
    (n.lastMessageId = t.lastMessageId), (n.lastPinTimestamp = eC(t.lastPinTimestamp));
}
function tn(e) {
    let { channel: t } = e;
    tr(t), ti(t);
}
function tr(e) {
    if (!L.AW.has(e.type)) return !1;
    let t = eM.get(e.id);
    (t.lastMessageId = e.lastMessageId),
        (t.lastPinTimestamp = eC(e.lastPinTimestamp)),
        t.syncThreadSettings(),
        e.ownerId === Z.default.getId() && (t.loadedMessages = !0);
}
function ti(e) {
    let t = e.parent_id;
    eM.get(t).lastMessageId = e.id;
    let n = J.default.getCurrentUser();
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
    return !!L.AW.has(t.type) && eM.get(t.id).syncThreadSettings();
}
function to(e) {
    let { id: t } = e;
    return eM.get(t).syncThreadSettings();
}
function ts(e) {
    return (0, w.s)(e) && eM.get(e.id).syncThreadSettings();
}
function tl(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        if (!L.AW.has(e.type)) return;
        let t = eM.get(e.id);
        if (
            ((t.lastMessageId = e.lastMessageId),
            (t.lastPinTimestamp = eC(e.lastPinTimestamp)),
            (t._isThread = !0),
            (t._isActiveThread = !0),
            (t._isJoinedThread = R.Z.hasJoined(e.id)),
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
            section: ee.jXE.CHANNEL,
            object: ee.qAy.ACK_RESORT_THREADS,
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
                    .filter(k.lm),
            );
        }),
            eU(n);
    });
}
function tf(e) {
    let t = J.default.getCurrentUser();
    return null != e.creator_id && null != t && e.creator_id === t.id;
}
function tp(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id,
        r = eM.get(t.guild_id, ei.W.GUILD_EVENT);
    if (((r.lastMessageId = t.id), tf(t)))
        return void tj({
            type: "GUILD_FEATURE_ACK",
            id: n,
            ackType: ei.W.GUILD_EVENT,
            ackedId: t.id,
            local: !1,
        });
    !Q.ZP.isMuteScheduledEventsEnabled(n) && r.mentionCount++;
}
function t_(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id;
    if (tf(t) || ![er.p1.CANCELED, er.p1.COMPLETED].includes(t.status)) return !1;
    eM.get(n, ei.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
}
function tm(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id;
    if (tf(t)) return !1;
    eM.get(t.guild_id, ei.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
}
function th(e) {
    let t = J.default.getCurrentUser();
    if (
        null == t ||
        null == e.relationship.since ||
        (e.relationship.type !== ee.OGo.PENDING_INCOMING && e.relationship.type !== ee.OGo.FRIEND)
    )
        return !1;
    let n = eM.get(t.id, ei.W.NOTIFICATION_CENTER),
        r = e.relationship.type === ee.OGo.FRIEND,
        i = r ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? G.default.extractTimestamp(n.ackMessageId) : 0) < i &&
        ((n.lastMessageId = G.default.fromTimestamp(i)),
        A.Z.active ? tk(t.id, ei.W.NOTIFICATION_CENTER, void 0, !1) : r ? n.mentionCount-- : n.mentionCount++);
}
function tg(e) {
    let t = J.default.getCurrentUser();
    if (null == t || null == e.relationship.since || e.relationship.type !== ee.OGo.PENDING_INCOMING) return !1;
    let n = eM.get(t.id, ei.W.NOTIFICATION_CENTER),
        r = new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? G.default.extractTimestamp(n.ackMessageId) : 0) <= r &&
        (n.mentionCount = Math.max(0, n.mentionCount - 1));
}
function tE(e) {
    var t;
    let { item: n } = e,
        r = null == (t = J.default.getCurrentUser()) ? void 0 : t.id;
    if (null == r) return !1;
    let i = eM.get(r, ei.W.NOTIFICATION_CENTER);
    if (((i.lastMessageId = n.id), A.Z.active || 0)) return void tk(r, ei.W.NOTIFICATION_CENTER, n.id, !1);
    i.mentionCount++;
}
function tb(e) {
    var t;
    let { ids: n, optimistic: r } = e;
    if (r || A.Z.active) return !1;
    let i = null == (t = J.default.getCurrentUser()) ? void 0 : t.id;
    if (null == i) return !1;
    let a = eM.get(i, ei.W.NOTIFICATION_CENTER);
    n.forEach((e) => {
        0 > G.default.compare(a.ackMessageId, e) && (a.mentionCount = Math.max(a.mentionCount - 1, 0));
    });
}
function ty(e) {
    let { guild: t } = e;
    return eM.clear(t.id, ei.W.GUILD_EVENT);
}
function tO(e) {
    let { guild: t } = e,
        n = t.latest_onboarding_question_id;
    if (null == n) return;
    let r = eM.get(t.id, ei.W.GUILD_ONBOARDING_QUESTION);
    (r._guildId = t.id), (r.lastMessageId = n);
}
function tv(e) {
    let { channel: t } = e;
    return eM.clear(t.id);
}
function tS(e) {
    let { channelId: t } = e,
        n = B.ZP.getCurrentSidebarChannelId(t),
        r = F.Z.getChannel(t);
    if (null != r) {
        var i;
        let e = eM.get(r.id);
        (e.ackMessageIdAtChannelSelect =
            null != (i = e.ackMessageId) ? i : G.default.fromTimestamp(e.getAckTimestamp())),
            e.recordLastViewedTime();
    }
    tA(ef), tA(ep);
    let a = !1;
    return (
        ef !== t && ((a = tC(ef) || a), (a = tC(ep) || a)),
        (ef === t || ((null == r ? void 0 : r.type) != null && ee.TPd.GUILD_THREADS_ONLY.has(r.type))) &&
            (a =
                eQ(
                    {
                        section: ee.jXE.CHANNEL,
                        object: ee.qAy.ACK_CHANNEL_SELECT_SAME_CHANNEL,
                        objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    t,
                ) || a),
        ef === t &&
            (a =
                eQ(
                    {
                        section: ee.jXE.CHANNEL,
                        object: ee.qAy.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR,
                        objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    n,
                ) || a),
        (ef = t),
        (ep = n),
        a
    );
}
function tI() {
    let e = B.ZP.getCurrentSidebarChannelId(ef),
        t = !1;
    return (
        ep !== e
            ? ((t = tC(ep)), (ep = e))
            : (t =
                  eQ(
                      {
                          section: ee.jXE.CHANNEL,
                          object: ee.qAy.ACK_CHANNEL_SECTION_STORE_UPDATE,
                          objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
                      },
                      e,
                  ) || t),
        t
    );
}
function tT(e) {
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
                    section: ee.jXE.CHANNEL,
                    object: ee.qAy.ACK_VOICE_CHANNEL_SELECT,
                    objectType: ee.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
            })
        );
}
function tA(e) {
    null != e && (eM.get(e).isManualAck = !1);
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
            r.has(e.windowId) && (t = tP(n, e.focused) || t);
        }),
        t
    );
}
function tP(e, t) {
    if (null == e) return !1;
    let n = eM.get(e);
    return (
        t || n.hasUnread() || (n.oldestUnreadMessageIdStale = !0),
        eQ(
            {
                section: ee.jXE.CHANNEL,
                object: ee.qAy.ACK_WINDOW_FOCUS,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
            e,
        )
    );
}
function tR(e) {
    let { channelId: t } = e;
    return eQ(
        {
            section: ee.jXE.CHANNEL,
            object: ee.qAy.ACK_CHANNEL_SCROLL,
            objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
        },
        t,
    );
}
function tw(e) {
    let { channelId: t, messageId: n, immediate: r = !1, force: i = !1, context: a, location: o } = e,
        s = eM.get(t),
        l = s.ack({
            messageId: n,
            local: a !== ee.e3s,
            immediate: r,
            force: i,
            isExplicitUserAction: !0,
            location: o,
            trackAnalytics: !0,
        });
    return null != n ? (s.rebuildChannelState(), !0) : l;
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
        a = null == (t = J.default.getCurrentUser()) ? void 0 : t.id;
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
function tZ() {
    e_ = null;
}
function tB(e) {
    let { readStates: t } = e;
    (em = !0),
        eA(),
        t.forEach((e) => {
            var t, n;
            let r = null != (t = e.type) ? t : ei.W.CHANNEL;
            e.type = r;
            let i = null != (n = eM._readStates.get(r)) ? n : new Map();
            i.set(e.channelId, (0, f.gh)(e, eM)), eM._readStates.has(r) || eM._readStates.set(r, i);
        });
}
function tF(e) {
    let { channelId: t, chatOpen: n } = e;
}
function tV(e, t, n) {
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
        t === ee.e3s &&
            (eh.push(
                ...e.map((e) => ({
                    channel_id: e.channelId,
                    message_id: e.messageId,
                    read_state_type: e.readStateType,
                })),
            ),
            eg || ew(n));
}
function tH(e) {
    let { channels: t, context: n, onFinished: r } = e;
    tV(
        t.filter((e) => null != e.messageId && t0.hasUnreadOrMentions(e.channelId, e.readStateType)),
        n,
        r,
    );
}
function tY(e) {
    let { channelId: t, windowId: n } = e;
    return (
        !ey.hasWindowId(t, n) &&
        (ey.addWindowId(t, n),
        eQ(
            {
                section: ee.jXE.CHANNEL,
                object: ee.qAy.ENABLE_AUTOMATIC_ACK,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
            t,
        ))
    );
}
function tW(e) {
    let { channelId: t, windowId: n } = e;
    return ey.removeWindowId(t, n), !1;
}
function tK(e) {
    let { channelId: t } = e;
    return tC(t);
}
function tz(e) {
    let { channelId: t, location: n } = e;
    return eQ(n, t);
}
function tq(e) {
    let { changesByChannelId: t } = e;
    for (let e in t) {
        var n, r;
        let i = t[e],
            a = eM.getIfExists(e);
        if (null != a)
            for (let e of [null == (n = i.new_messages) ? void 0 : n[0]]
                .concat(null != (r = i.modified_messages) ? r : [])
                .filter(k.lm))
                1 === G.default.compare(e.id, a.lastMessageId) && (a.lastMessageId = e.id);
    }
}
function tX(e) {
    var t;
    let { ackedId: n } = e,
        r = null == (t = J.default.getCurrentUser()) ? void 0 : t.id;
    if (null == r) return !1;
    let i = eM.get(r, ei.W.MESSAGE_REQUESTS);
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
    let n = null == (t = J.default.getCurrentUser()) ? void 0 : t.id;
    if (null == n) return !1;
    let r = eM.get(n, ei.W.MESSAGE_REQUESTS);
    if (null == r.ackMessageId) return !1;
    r.ackMessageId = void 0;
}
function tJ(e) {
    let { state: t } = e;
    return (
        t === ee.$7l.ACTIVE &&
        eQ(
            {
                section: ee.jXE.CHANNEL,
                object: ee.qAy.ACK_APP_FOREGROUND,
                objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC,
            },
            X.Z.getChannelId(),
        )
    );
}
class t$ extends (i = c.ZP.Store) {
    initialize() {
        V.Z,
            J.default,
            Y.Z,
            H.Z,
            F.Z,
            X.Z,
            K.Z,
            z.Z,
            m.Z,
            P.Z,
            R.Z,
            B.ZP,
            y.ZP,
            b.Z,
            g.Z,
            Q.ZP,
            $.Z,
            A.Z,
            v.Z,
            x.Z,
            I.Z,
            this.waitFor(
                P.Z,
                Z.default,
                m.Z,
                B.ZP,
                F.Z,
                V.Z,
                _.ZP,
                g.Z,
                H.Z,
                y.ZP,
                Y.Z,
                W.Z,
                R.Z,
                K.Z,
                A.Z,
                z.Z,
                q.Z,
                X.Z,
                Q.ZP,
                x.Z,
                J.default,
                $.Z,
            ),
            this.syncWith([B.ZP], tI);
    }
    getReadStatesByChannel() {
        var e;
        return null != (e = eM._readStates.get(ei.W.CHANNEL)) ? e : new Map();
    }
    getForDebugging(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return eM.getIfExists(e, t);
    }
    getNotifCenterReadState(e) {
        return eM.getIfExists(e, ei.W.NOTIFICATION_CENTER);
    }
    hasUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return eM.getValue(e, t, (e) => e.canBeUnread() && e.hasUnread(), !1);
    }
    hasUnreadOrMentions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return eM.getValue(e, t, (e) => e.canBeUnread() && e.hasUnreadOrMentions(), !1);
    }
    hasTrackedUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return eM.getValue(e, t, (e) => e.canTrackUnreads() && e.hasUnread(), !1);
    }
    isForumPostUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return eM.getValue(e, t, (e) => e.isForumPostUnread(), !1);
    }
    getUnreadCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canBeUnread() ? e.unreadCount : 0), 0);
    }
    getMentionCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL,
            n = eM.getValue(e, t, (e) => (e.canHaveMentions() ? e.getMentionCount() : 0), 0);
        if ((0, h.Z)(e) && n > 0) return 1;
        return n;
    }
    getIsMentionLowImportance(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return t === ei.W.CHANNEL && eM.getValue(e, t, (e) => e.isMentionLowImportance, !1);
    }
    getGuildChannelUnreadState(e, t, n, r, i) {
        return eM.getValue(e.id, ei.W.CHANNEL, (a) => a.getGuildChannelUnreadState(e, t, n, r, i), {
            mentionCount: 0,
            unread: !1,
            isMentionLowImportance: !1,
        });
    }
    hasRecentlyVisitedAndRead(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return eM.getValue(e, t, (e) => e.hasRecentlyVisitedAndRead(), !1);
    }
    ackMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canBeUnread() ? e.ackMessageId : null), null);
    }
    getTrackedAckMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canTrackUnreads() ? e._ackMessageId : null), null);
    }
    lastMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return eM.getValue(e, t, (e) => e.lastMessageId, null);
    }
    lastMessageTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return eM.getValue(e, t, (e) => e.lastMessageTimestamp, 0);
    }
    lastPinTimestamp(e) {
        return eM.getValue(e, ei.W.CHANNEL, (e) => e.lastPinTimestamp, null);
    }
    getOldestUnreadMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadMessageId : null), null);
    }
    getOldestUnreadTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return eM.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0), 0);
    }
    isEstimated(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return eM.getValue(e, t, (e) => e.estimated, !1);
    }
    hasOpenedThread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return eM.getValue(e, t, (e) => e._persisted, !1);
    }
    hasUnreadPins(e) {
        return eM.getValue(e, ei.W.CHANNEL, (e) => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1);
    }
    isNewForumThread(e, t, n) {
        let r = eM.get(t);
        if (
            !0 === eM.get(e)._persisted ||
            null == r.ackMessageIdAtChannelSelect ||
            0 >= G.default.compare(e, r.ackMessageIdAtChannelSelect)
        )
            return !1;
        let i = eK(n);
        return G.default.extractTimestamp(e) > i;
    }
    getAllReadStates(e) {
        let t = [];
        return (
            eM.forEach((n) => {
                switch (n.type) {
                    case ei.W.GUILD_HOME:
                    case ei.W.GUILD_EVENT:
                    case ei.W.GUILD_ONBOARDING_QUESTION:
                        null != Y.Z.getGuild(n.channelId) && t.push(n.serialize(e));
                        break;
                    case ei.W.NOTIFICATION_CENTER:
                    case ei.W.MESSAGE_REQUESTS:
                        var r;
                        G.default.cast(null == (r = J.default.getCurrentUser()) ? void 0 : r.id) === n.channelId &&
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
        let n = null == (t = J.default.getCurrentUser()) ? void 0 : t.id;
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
eo(t$, "displayName", "ReadStateStore");
let t0 = new t$(p.Z, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: tq,
        CONNECTION_OPEN: e$,
        CONNECTION_OPEN_SUPPLEMENTAL: e4,
        LOGOUT: e0,
        OVERLAY_INITIALIZE: e5,
        CACHE_LOADED: tB,
        GUILD_CREATE: e8,
        LOAD_MESSAGES_SUCCESS: e6,
        MESSAGE_CREATE: e9,
        MESSAGE_DELETE: e7,
        MESSAGE_DELETE_BULK: e7,
        MESSAGE_ACK: tx,
        CHANNEL_ACK: tw,
        CHANNEL_LOCAL_ACK: tL,
        CHANNEL_PINS_ACK: tD,
        CHANNEL_PINS_UPDATE: tU,
        CHANNEL_SELECT: tS,
        VOICE_CHANNEL_SELECT: tT,
        CHANNEL_CREATE: tt,
        THREAD_CREATE: tn,
        THREAD_UPDATE: ta,
        THREAD_LIST_SYNC: tl,
        LOAD_THREADS_SUCCESS: tc,
        LOAD_ARCHIVED_THREADS_SUCCESS: tc,
        SEARCH_MESSAGES_SUCCESS: td,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: td,
        THREAD_MEMBER_UPDATE: to,
        THREAD_MEMBERS_UPDATE: ts,
        CHANNEL_DELETE: tv,
        THREAD_DELETE: tv,
        WINDOW_FOCUS: tN,
        UPDATE_CHANNEL_DIMENSIONS: tR,
        CURRENT_USER_UPDATE: tZ,
        BULK_ACK: tH,
        ENABLE_AUTOMATIC_ACK: tY,
        DISABLE_AUTOMATIC_ACK: tW,
        GUILD_FEATURE_ACK: tj,
        GUILD_SCHEDULED_EVENT_CREATE: tp,
        GUILD_SCHEDULED_EVENT_UPDATE: t_,
        GUILD_SCHEDULED_EVENT_DELETE: tm,
        GUILD_DELETE: ty,
        GUILD_UPDATE: tO,
        RESORT_THREADS: tu,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: tF,
        DECAY_READ_STATES: eA,
        NOTIFICATION_CENTER_ITEM_CREATE: tE,
        RELATIONSHIP_ADD: th,
        RELATIONSHIP_REMOVE: tg,
        NOTIFICATION_CENTER_ITEMS_ACK: tb,
        USER_NON_CHANNEL_ACK: tM,
        PASSIVE_UPDATE_V2: tG,
        CLEAR_OLDEST_UNREAD_MESSAGE: tK,
        TRY_ACK: tz,
        MESSAGE_REQUEST_ACK: tX,
        MESSAGE_REQUEST_CLEAR_ACK: tQ,
        APP_STATE_UPDATE: tJ,
    }),
    t1 = t0;
