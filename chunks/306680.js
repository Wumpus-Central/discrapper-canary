let i;
r.d(n, {
    Ex: function () {
        return eM;
    }
});
var a,
    o,
    s = r(47120);
var l = r(411104);
var u = r(653041);
var c = r(789020);
var d = r(392711);
var f = r(913527),
    p = r.n(f),
    h = r(442837),
    _ = r(544891),
    m = r(846519),
    g = r(283693),
    E = r(570140),
    v = r(317381),
    y = r(358221),
    b = r(702321),
    I = r(430198),
    T = r(710845),
    S = r(353926),
    A = r(924301),
    C = r(777639),
    N = r(355298),
    R = r(869404),
    O = r(333984),
    D = r(572804),
    L = r(140155),
    x = r(398758),
    w = r(725319),
    P = r(344185),
    M = r(569471),
    k = r(195663),
    U = r(723170),
    B = r(581883),
    G = r(131704),
    Z = r(386438),
    F = r(70956),
    V = r(630388),
    j = r(823379),
    H = r(931619),
    Y = r(709054),
    W = r(314897),
    K = r(433355),
    z = r(592125),
    q = r(796974),
    Q = r(486472),
    X = r(430824),
    J = r(517100),
    $ = r(375954),
    ee = r(496675),
    et = r(699516),
    en = r(944486),
    er = r(9156),
    ei = r(594174),
    ea = r(451478),
    eo = r(981631),
    es = r(918559),
    el = r(176505),
    eu = r(765305),
    ec = r(490897),
    ed = r(124368);
function ef(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let ep = new T.Z('ReadStateStore'),
    eh = 2;
__OVERLAY__ && (i = r(237997).Z);
let e_ = eo.S7T.VIEW_CHANNEL | eo.S7T.READ_MESSAGE_HISTORY,
    em = 100,
    eg = 1,
    eE = en.Z.getChannelId(),
    ev = null,
    ey = null,
    eb = !1,
    eI = [],
    eT = !1,
    eS = null;
class eA {
    addWindowId(e, n) {
        null == this.channelWindowIds[e] && (this.channelWindowIds[e] = new Set()), this.channelWindowIds[e].add(n);
    }
    hasWindowId(e, n) {
        return null != this.channelWindowIds[e] && this.channelWindowIds[e].has(n);
    }
    isChannelAckable(e) {
        return null != this.channelWindowIds[e] && this.channelWindowIds[e].size > 0;
    }
    getAllWindowIds(e) {
        return null == this.channelWindowIds[e] ? [] : Array.from(this.channelWindowIds[e]);
    }
    isAnyWindowFocused(e) {
        let n = this.channelWindowIds[e];
        if (null == n) return !1;
        for (let e of n) if (ea.Z.isFocused(e)) return !0;
        return !1;
    }
    removeWindowId(e, n) {
        if (null != this.channelWindowIds[e]) this.channelWindowIds[e].delete(n), 0 === this.channelWindowIds[e].size && delete this.channelWindowIds[e];
    }
    forEachChannel(e) {
        for (let [n, r] of Y.default.entries(this.channelWindowIds)) e(n, r);
    }
    constructor() {
        ef(this, 'channelWindowIds', {});
    }
}
let eC = new eA();
let eN = 30 * F.Z.Millis.DAY;
function eR() {
    return Y.default.fromTimestamp(Date.now() - eN);
}
let eO = 0,
    eD = 0,
    eL = null;
function ex() {
    (eO = Date.now() - 7 * F.Z.Millis.DAY),
        (eD = Date.now() - 3 * F.Z.Millis.DAY),
        clearTimeout(eL),
        (eL = setTimeout(() => {
            E.Z.dispatch({ type: 'DECAY_READ_STATES' });
        }, 1 * F.Z.Millis.HOUR));
}
function ew(e) {
    if (null == e) return 0;
    let n = Date.parse(e);
    return isNaN(n) ? 0 : n;
}
function eP(e) {
    return {
        id: e.id,
        read_state_type: e.read_state_type,
        mention_count: e.badge_count,
        last_message_id: e.last_acked_id
    };
}
function eM(e, n) {
    let r = z.Z.getChannel(e.channel_id);
    return (
        !(null == r || et.Z.isBlockedOrIgnoredForMessage(e)) &&
        (!!(
            (0, D.ZP)({
                message: e,
                userId: n.id,
                suppressEveryone: er.ZP.isSuppressEveryoneEnabled(r.guild_id),
                suppressRoles: er.ZP.isSuppressRolesEnabled(r.guild_id)
            }) || ek(r)
        ) ||
            !1)
    );
}
function ek(e) {
    return null != e && e.isPrivate() && !er.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
}
async function eU(e) {
    if (0 === eI.length) {
        (eT = !1), null == e || e();
        return;
    }
    eT = !0;
    let n = eI.splice(0, em);
    await eG(() =>
        _.tn.post({
            url: eo.ANM.BULK_ACK,
            body: { read_states: n },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ),
        await (0, m.GR)(1000 * eg),
        eU(e);
}
let eB = 3;
async function eG(e) {
    let n = W.default.getId();
    for (let r = 0; r < eB; r++)
        try {
            return await e();
        } catch (e) {
            if ((ep.error('', e), r + 1 < eB && (await (0, m.GR)((r + 1) * 2000), await H.Z.awaitOnline(), n !== W.default.getId()))) return Promise.reject(Error('User changed.'));
        }
}
function eZ(e, n) {}
function eF(e) {
    if ((eZ(e, 'shouldAutomaticallyAck called'), e.type !== ec.W.CHANNEL)) return eZ(e, 'not channel read state'), !1;
    let n = z.Z.getChannel(e.channelId),
        r = null != n && n.isForumPost();
    if (null != v.ZP.getConnectedActivityChannelId() && v.ZP.getActivityPanelMode() === es.Ez.PANEL && v.ZP.getFocusedLayout() === es.MI.NO_CHAT) return eZ(e, 'In activity'), !1;
    if (J.Z.isIdle()) return eZ(e, 'Is idle'), !1;
    if (!e.canTrackUnreads()) return eZ(e, 'Cannot track unreads'), !1;
    if ((null == n ? void 0 : n.isForumLikeChannel()) !== !0) {
        let n = eC.isAnyWindowFocused(e.channelId),
            r = null != i && i.isInstanceFocused() && i.isPinned(eo.Odu.TEXT);
        if (!n && !r) return !1;
    }
    if (r && !e._persisted) return eZ(e, 'unpersisted forum post'), !0;
    if (!e.hasUnreadOrMentions()) return eZ(e, 'No unread or mentions'), !1;
    if ((null == n ? void 0 : n.isForumLikeChannel()) === !0) return eZ(e, 'Forum-like channel'), !1;
    if (!(r && !e._isJoinedThread) && !q.Z.isAtBottom(e.channelId)) return eZ(e, 'Not at bottom'), !1;
    let a = y.Z.getLayout(e.channelId),
        o = y.Z.getChatOpen(e.channelId);
    if (!o && (a === eo.AEg.NO_CHAT || a === eo.AEg.FULL_SCREEN)) return eZ(e, 'Fullscreen video'), !1;
    if (!eC.isChannelAckable(e.channelId)) return eZ(e, 'Not ackable'), !1;
    let s = $.Z.getMessages(e.channelId);
    return null == s || !s.ready || s.loadingMore ? (eZ(e, 'Still loading messages'), !1) : (0, w._E)() || o ? (eZ(e, 'Acked'), !0) : (eZ(e, 'Chat not focused'), !1);
}
!(function (e) {
    (e[(e.IS_GUILD_CHANNEL = 1)] = 'IS_GUILD_CHANNEL'), (e[(e.IS_THREAD = 2)] = 'IS_THREAD'), (e[(e.IS_MENTION_LOW_IMPORTANCE = 4)] = 'IS_MENTION_LOW_IMPORTANCE');
})(a || (a = {}));
class eV {
    static forEach(e) {
        for (let r of Object.keys(eV._readStates)) {
            var n;
            let i = null !== (n = eV._readStates[parseInt(r)]) && void 0 !== n ? n : {};
            for (let n of Object.keys(i)) if (!1 === e(i[n])) break;
        }
    }
    static get(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL,
            i = null === (n = eV._readStates[r]) || void 0 === n ? void 0 : n[e];
        return null == i && ((i = new eV(e, r)), null == eV._readStates[r] && (eV._readStates[r] = {}), (eV._readStates[r][e] = i)), i;
    }
    static getGuildSentinels(e) {
        return null == this._guildReadStateSentinels[e] && (this._guildReadStateSentinels[e] = { unreadsSentinel: 0 }), this._guildReadStateSentinels[e];
    }
    static resetGuildSentinels() {
        this._guildReadStateSentinels = {};
    }
    static getIfExists(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return null === (n = eV._readStates[r]) || void 0 === n ? void 0 : n[e];
    }
    static getMentionChannelIds() {
        let e = [];
        for (let n of eV._mentionChannels) {
            let r = eV.getIfExists(n);
            null != r && r.canHaveMentions() ? e.push(n) : eV._mentionChannels.delete(n);
        }
        return e;
    }
    static getValue(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL,
            i = arguments.length > 2 ? arguments[2] : void 0,
            a = arguments.length > 3 ? arguments[3] : void 0,
            o = null === (n = eV._readStates[r]) || void 0 === n ? void 0 : n[e];
        return null == o ? a : i(o);
    }
    static clear(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return (null === (n = eV._readStates[r]) || void 0 === n ? void 0 : n[e]) != null && (delete eV._readStates[r][e], eV._mentionChannels.delete(e), !0);
    }
    static clearAll() {
        (eV._readStates = {}), eV._mentionChannels.clear();
    }
    serialize(e) {
        let { channelId: n, type: r, _guildId: i, _isThread: a, _isActiveThread: o, _isJoinedThread: s, _persisted: l, loadedMessages: u, _lastMessageId: c, _lastMessageTimestamp: d, _ackMessageId: f, _ackMessageTimestamp: p, ackPinTimestamp: h, isManualAck: _, lastPinTimestamp: m, _oldestUnreadMessageId: g, oldestUnreadMessageIdStale: E, estimated: v, _mentionCount: y, flags: b, lastViewed: I } = this;
        if (e)
            return {
                channelId: n,
                type: r,
                _guildId: i,
                _isThread: a,
                _isActiveThread: o,
                _isJoinedThread: s,
                _persisted: l,
                loadedMessages: u,
                _lastMessageId: c,
                _lastMessageTimestamp: d,
                _ackMessageId: f,
                _ackMessageTimestamp: p,
                ackPinTimestamp: h,
                isManualAck: _,
                lastPinTimestamp: m,
                _oldestUnreadMessageId: g,
                oldestUnreadMessageIdStale: E,
                estimated: v,
                _mentionCount: y,
                flags: b,
                lastViewed: I
            };
        let T = {
            channelId: n,
            type: r,
            _guildId: i,
            _persisted: l,
            _lastMessageId: c,
            _lastMessageTimestamp: d,
            _ackMessageId: f,
            _ackMessageTimestamp: p,
            ackPinTimestamp: h,
            lastPinTimestamp: m,
            _mentionCount: y,
            flags: b
        };
        return null != I && I > 0 && (T.lastViewed = I), a && ((T._isThread = a), (T._isActiveThread = o), (T._isJoinedThread = s)), T;
    }
    deserializeForOverlay(e) {
        let { channelId: n, type: r, _guildId: i, _isThread: a, _isActiveJoinedThread: o, _isActiveThread: s, _isJoinedThread: l, _persisted: u, loadedMessages: c, _lastMessageId: d, _lastMessageTimestamp: f, _ackMessageId: p, _ackMessageTimestamp: h, ackPinTimestamp: _, isManualAck: m, lastPinTimestamp: g, _oldestUnreadMessageId: E, oldestUnreadMessageIdStale: v, estimated: y, _unreadCount: b, _mentionCount: I, flags: T, lastViewed: S } = e;
        (this.channelId = n), (this.type = null != r ? r : ec.W.CHANNEL), (this._guildId = i), (this._isThread = null != a && a), null != o ? ((this._isActiveThread = o), (this._isJoinedThread = o)) : ((this._isActiveThread = null != s && s), (this._isJoinedThread = null != l && l)), (this._persisted = !1 !== u), (this.loadedMessages = null != c && c), (this._lastMessageId = d), (this._lastMessageTimestamp = f), (this._ackMessageId = p), (this._ackMessageTimestamp = h), (this.ackPinTimestamp = _), (this.isManualAck = null != m && m), (this.lastPinTimestamp = g), (this._oldestUnreadMessageId = E), (this.oldestUnreadMessageIdStale = null != v && v), (this.estimated = null != y && y), (this._unreadCount = null != b ? b : 0), (this._mentionCount = I), (this.flags = T), (this.lastViewed = S), eV._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eV._mentionChannels.add(this.channelId);
    }
    incrementGuildUnreadsSentinel() {
        if (null != this._guildId) eV.getGuildSentinels(this._guildId).unreadsSentinel++;
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
        (this._lastMessageId = e), (this._lastMessageTimestamp = null != e ? Y.default.extractTimestamp(e) : 0);
    }
    get lastMessageTimestamp() {
        return this._lastMessageTimestamp;
    }
    get ackMessageId() {
        return this._ackMessageId;
    }
    set ackMessageId(e) {
        (this._ackMessageId = e), (this._ackMessageTimestamp = null != e ? Y.default.extractTimestamp(e) : 0);
    }
    get unreadCount() {
        var e;
        return null !== (e = this._unreadCount) && void 0 !== e ? e : 0;
    }
    set unreadCount(e) {
        (void 0 === this._unreadCount || 0 === this._unreadCount || 0 === e) && this.incrementGuildUnreadsSentinel(), (this._unreadCount = e);
    }
    get mentionCount() {
        return this._mentionCount;
    }
    set mentionCount(e) {
        (0 === this._mentionCount || 0 === e) && this._mentionCount !== e && this.incrementGuildUnreadsSentinel(), (this._mentionCount = e), eV._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eV._mentionChannels.add(this.channelId);
    }
    get isMentionLowImportance() {
        return null != this.flags && (4 & this.flags) == 4;
    }
    set isMentionLowImportance(e) {
        if (e) {
            if (0 === this._mentionCount) {
                var n;
                this.flags = (null !== (n = this.flags) && void 0 !== n ? n : 0) | 4;
            }
        } else null != this.flags && 0 !== this.flags && (this.flags = -5 & this.flags);
    }
    guessAckMessageId() {
        let e = $.Z.getMessages(this.channelId);
        if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
        if (!this.hasMentions()) return this.lastMessageId;
        let n = null,
            r = this.mentionCount,
            i = ei.default.getCurrentUser();
        return (
            e.forEach(
                (e) => {
                    if (r > 0 && e.author.id !== (null == i ? void 0 : i.id)) --r;
                    else if (0 === r) return (n = e.id), !1;
                },
                this,
                !0
            ),
            n
        );
    }
    get guildId() {
        if (null != this._guildId) return this._guildId;
        let e = z.Z.getChannel(this.channelId);
        return (this._guildId = null != e ? e.getGuildId() : null);
    }
    isPrivate() {
        if (this.type !== ec.W.CHANNEL) return !1;
        let e = z.Z.getChannel(this.channelId);
        return null != e && e.isPrivate();
    }
    rebuildChannelState(e) {
        var n, r;
        let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = arguments.length > 2 ? arguments[2] : void 0;
        if (((this.ackMessageId = null !== (n = null != e ? e : this._ackMessageId) && void 0 !== n ? n : this.guessAckMessageId()), (this.isManualAck = null != e), (this.oldestUnreadMessageId = null), (this.estimated = !1), (this.unreadCount = 0), i && (this.mentionCount = 0), this.hasUnread())) {
            let e = ei.default.getCurrentUser(),
                n = this.getAckTimestamp(),
                a = !1,
                o = !1,
                s = null,
                l = $.Z.getMessages(this.channelId);
            l.forAll((r) => {
                if (a) {
                    var l;
                    this.oldestUnreadMessageId = null !== (l = this._oldestUnreadMessageId) && void 0 !== l ? l : r.id;
                } else a = r.id === this._ackMessageId;
                Y.default.extractTimestamp(r.id) > n ? (this.unreadCount++, i && eM(r, e) && this.mentionCount++, (s = null != s ? s : r.id)) : (o = !0);
            }),
                (this.estimated = !l.hasPresent() || (!(a || o) && l.length === this.unreadCount)),
                (this.oldestUnreadMessageId = null !== (r = this._oldestUnreadMessageId) && void 0 !== r ? r : s);
        }
        null != a && (this.mentionCount = a);
    }
    handleGuildEventRemoval(e, n) {
        var r;
        if (Y.default.compare(this.ackMessageId, n) >= 0) return;
        let i = A.ZP.getGuildScheduledEventsForGuild(e),
            a = this.getAckTimestamp();
        if (isNaN(a)) return;
        let o = null !== (r = this._ackMessageId) && void 0 !== r ? r : Y.default.fromTimestamp(a),
            s = null,
            l = 0;
        i.forEach((e) => {
            (0, A.Ld)(e) && (Y.default.compare(e.id, s) > 0 && (s = e.id), Y.default.compare(e.id, o) > 0 && l++);
        }),
            (this.lastMessageId = s),
            (this.mentionCount = l);
    }
    canTrackUnreads() {
        if (this.type !== ec.W.CHANNEL) return !0;
        if ((this._isThread && !this._isActiveThread) || this._isResourceChannel) return !1;
        let e = z.Z.getBasicChannel(this.channelId);
        return null != e && ('basicPermissions' in e ? Z.Z.has(e.basicPermissions, eo.S7T.VIEW_CHANNEL) : !I.Z.isChannelGated(this.guildId, this.channelId) || ee.Z.can(eo.Plq.VIEW_CHANNEL, e));
    }
    canBeUnread() {
        return !((this._isThread && !this._isJoinedThread) || (0, R.h3)(this.channelId, [N.Z, O.Z]) || (!this._isThread && (0, x.r1)(this._guildId) && (this._lastMessageTimestamp < eO || (!er.ZP.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())))) && this.canTrackUnreads();
    }
    canHaveMentions() {
        return !(0 === this.mentionCount || (this._isThread && !this._isJoinedThread) || (0, R.h3)(this.channelId, [N.Z, O.Z]) || ((0, x.r1)(this._guildId) && this._lastMessageTimestamp < eO)) && this.canTrackUnreads();
    }
    getGuildChannelUnreadState(e, n, r, i, a) {
        if (n && (this._lastMessageTimestamp < eO || (!er.ZP.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0)))
            return {
                mentionCount: 0,
                unread: !1,
                isMentionLowImportance: !1
            };
        if ('basicPermissions' in e) {
            if (!Z.Z.has(e.basicPermissions, eo.S7T.VIEW_CHANNEL))
                return {
                    mentionCount: 0,
                    unread: !1,
                    isMentionLowImportance: !1
                };
        } else if (I.Z.isChannelGated(this.guildId, this.channelId) && !ee.Z.can(eo.Plq.VIEW_CHANNEL, e))
            return {
                mentionCount: 0,
                unread: !1,
                isMentionLowImportance: !1
            };
        return i || a
            ? {
                  mentionCount: this.mentionCount,
                  unread: !1,
                  isMentionLowImportance: this.isMentionLowImportance
              }
            : {
                  mentionCount: this.mentionCount,
                  unread: this.getAckTimestamp() < this._lastMessageTimestamp,
                  isMentionLowImportance: this.isMentionLowImportance
              };
    }
    hasUnread() {
        return this.getAckTimestamp() < this._lastMessageTimestamp;
    }
    hasRecentlyVisitedAndRead() {
        return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > eD && B.Z.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp();
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
        if (this.type !== ec.W.CHANNEL || !this.canTrackUnreads()) return !1;
        if (null == e) {
            if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
            (this._persisted = !0),
                eG(() =>
                    _.tn.post({
                        url: eo.ANM.PINS_ACK(this.channelId),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                );
        }
        let n = ew(e);
        return (this.ackPinTimestamp = 0 !== n ? n : this.lastPinTimestamp), !0;
    }
    ack(e) {
        let { messageId: n, local: r = !1, immediate: i = !1, force: a = !1, isExplicitUserAction: o = !1, location: s = { section: eo.jXE.CHANNEL }, trackAnalytics: l = !0 } = e;
        if (!this._shouldAck(a, r, o) || (!a && !this.canTrackUnreads())) return !1;
        let u = this.hasMentions();
        return (
            (this.estimated = !1),
            (this.snapshot = this.takeSnapshot()),
            (this.unreadCount = 0),
            (this.mentionCount = 0),
            (this.isMentionLowImportance = !1),
            (null != n || null != (n = this.lastMessageId)) &&
                ((this.ackMessageId = n),
                (this.isManualAck = !1),
                (this._persisted = !0),
                eb && (this.ackedWhileCached = !0),
                e4(this.channelId),
                r
                    ? (this.oldestUnreadMessageId = null)
                    : (null == this.outgoingAck &&
                          (this.outgoingAckTimer = setTimeout(
                              () => {
                                  this.type === ec.W.CHANNEL ? this._ack(s, l) : this._nonChannelAck(), (this.outgoingAck = null), (this.outgoingAckTimer = null);
                              },
                              u || i ? 0 : 3000
                          )),
                      (this.outgoingAck = n)),
                !0)
        );
    }
    takeSnapshot() {
        let { default: e } = r(888369),
            n = this.guildId;
        return {
            unread: this.hasUnread(),
            mentionCount: this.mentionCount,
            guildUnread: null == n ? null : e.hasUnread(n),
            guildMentionCount: null == n ? null : e.getMentionCount(n),
            takenAt: Date.now()
        };
    }
    clearOutgoingAck() {
        (this.outgoingAck = null), null != this.outgoingAckTimer && (clearTimeout(this.outgoingAckTimer), (this.outgoingAckTimer = null));
    }
    _shouldAck(e, n, r) {
        var i;
        return !!e || !!r || !!n || !!(!this.isManualAck && (this.type !== ec.W.CHANNEL || this.loadedMessages || (null === (i = z.Z.getChannel(this.channelId)) || void 0 === i ? void 0 : i.isForumLikeChannel()))) || !1;
    }
    _ack(e, n) {
        let { outgoingAck: i } = this;
        if (null == i) return;
        let a = W.default.getId(),
            o = ey;
        this._persisted = !0;
        let s = this.recalculateFlags(),
            l = s === this.flags ? void 0 : s;
        eG(() =>
            _.tn.post({
                url: eo.ANM.MESSAGE_ACK(this.channelId, i),
                body: {
                    token: ey,
                    last_viewed: this.lastViewed,
                    flags: l
                },
                oldFormErrors: !0,
                rejectWithError: !0
            })
        ).then((e) => {
            null != e &&
                (ey === o && a === W.default.getId() && (ey = e.body.token),
                E.Z.dispatch({ type: 'MESSAGE_ACKED' }),
                n &&
                    r
                        .e('54076')
                        .then(r.bind(r, 189229))
                        .then((e) => {
                            let { default: n } = e;
                            n(this.channelId);
                        }));
        });
    }
    recalculateFlags() {
        if (this.type !== ec.W.CHANNEL) return;
        let e = z.Z.getChannel(this.channelId);
        if (null != e) return e.isThread() ? 2 : null != e.guild_id ? 1 : 0;
    }
    _nonChannelAck() {
        let e;
        let { outgoingAck: n, channelId: r, type: i } = this;
        if (null != n) {
            switch (i) {
                case ec.W.GUILD_HOME:
                case ec.W.GUILD_EVENT:
                case ec.W.GUILD_ONBOARDING_QUESTION:
                    e = eo.ANM.GUILD_FEATURE_ACK(r, n, i);
                    break;
                case ec.W.NOTIFICATION_CENTER:
                case ec.W.MESSAGE_REQUESTS:
                    e = eo.ANM.USER_NON_CHANNEL_ACK(n, i);
                    break;
                default:
                    return;
            }
            (this._persisted = !0),
                eG(() =>
                    _.tn.post({
                        url: e,
                        body: {},
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                );
        }
    }
    delete() {
        var e;
        let n = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            r = z.Z.getBasicChannel(this.channelId);
        ep.log('Deleting ReadState', this.channelId, this.type, {
            remote: n,
            persisted: this._persisted,
            channelMissing: null == r,
            isOld: e1(this, eR()),
            validType: null != r && G.AW.has(r.type),
            readableType: null != r && (0, G.Em)(r.type),
            oldThreadCutoff: eR(),
            mentionCount: this.mentionCount,
            channelId: this.channelId,
            ackMessageId: this._ackMessageId,
            lastMessageId: this._lastMessageId
        }),
            n &&
                this._persisted &&
                _.tn.del({
                    url: eo.ANM.CHANNEL_ACK(this.channelId),
                    body: {
                        version: eh,
                        read_state_type: this.type
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0
                }),
            null === (e = eV._readStates[this.type]) || void 0 === e || delete e[this.channelId],
            eV._mentionChannels.delete(this.channelId);
    }
    shouldDeleteReadState(e) {
        if (0 !== Q.Z.totalUnavailableGuilds) return !1;
        if (null != this.type && this.type !== ec.W.CHANNEL) return !e2(this);
        let n = z.Z.getBasicChannel(this.channelId);
        if (null == n) return !!e1(this, e) || !1;
        return !!G.AW.has(n.type) && (!(0, G.Em)(n.type) || (!(0, G.hv)(n.type) && (!!(G.Ec.has(n.type) && e0(this, n, e)) || (!!(this.mentionCount > 0) && !ee.Z.canBasicChannel(e_, n)) || !1)));
    }
    getAckTimestamp() {
        let e, n;
        if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
        if (this._isThread) return (this._ackMessageTimestamp = eJ(this.guildId, this.channelId)), (this._ackMessageId = Y.default.fromTimestamp(this._ackMessageTimestamp)), this._ackMessageTimestamp;
        if (this.type === ec.W.GUILD_EVENT || this.type === ec.W.GUILD_ONBOARDING_QUESTION) e = X.Z.getGuild(this.channelId);
        else if ((0, el.AB)(this.channelId)) e = X.Z.getGuild(this.guildId);
        else {
            let n = z.Z.getChannel(this.channelId);
            if (null != n) {
                let r = n.getGuildId();
                e = X.Z.getGuild(r);
            }
        }
        return null != e ? isNaN((n = e$(e))) && (n = Y.default.extractTimestamp(this.channelId)) : (n = Y.default.extractTimestamp(this.channelId)), (this._ackMessageTimestamp = n), n;
    }
    get oldestUnreadTimestamp() {
        return null != this.oldestUnreadMessageId ? Y.default.extractTimestamp(this.oldestUnreadMessageId) : 0;
    }
    syncThreadSettings() {
        this._isThread = !0;
        let e = z.Z.getChannel(this.channelId);
        if (null == e) return ep.warn('syncThreadSettings called with channel not in memory '.concat(this.channelId)), !1;
        let n = this.guildId,
            r = null != n && P.Z.isActive(n, e.parent_id, this.channelId),
            i = M.Z.hasJoined(this.channelId);
        return (this._isActiveThread !== r || this._isJoinedThread !== i) && ((this._isActiveThread = r), (this._isJoinedThread = i), !0);
    }
    recordLastViewedTime() {
        let e = Math.ceil((Date.now() - Y.DISCORD_EPOCH) / F.Z.Millis.DAY);
        e !== this.lastViewed &&
            ((this.lastViewed = e),
            this.canTrackUnreads() &&
                !this.hasUnread() &&
                this.ack({
                    force: !0,
                    trackAnalytics: !1
                }));
    }
    constructor(e, n = ec.W.CHANNEL) {
        ef(this, 'channelId', void 0), ef(this, 'type', ec.W.CHANNEL), ef(this, '_guildId', void 0), ef(this, '_isThread', void 0), ef(this, '_isActiveThread', void 0), ef(this, '_isJoinedThread', void 0), ef(this, '_isResourceChannel', void 0), ef(this, '_persisted', void 0), ef(this, 'loadedMessages', void 0), ef(this, '_lastMessageId', void 0), ef(this, '_lastMessageTimestamp', void 0), ef(this, '_ackMessageId', void 0), ef(this, '_ackMessageTimestamp', void 0), ef(this, 'isManualAck', void 0), ef(this, 'ackPinTimestamp', void 0), ef(this, 'lastPinTimestamp', void 0), ef(this, '_oldestUnreadMessageId', void 0), ef(this, 'oldestUnreadMessageIdStale', void 0), ef(this, 'estimated', void 0), ef(this, '_unreadCount', void 0), ef(this, '_mentionCount', void 0), ef(this, 'flags', void 0), ef(this, 'lastViewed', void 0), ef(this, 'outgoingAck', void 0), ef(this, 'outgoingAckTimer', null), ef(this, 'ackMessageIdAtChannelSelect', null), ef(this, 'ackedWhileCached', void 0), ef(this, 'snapshot', void 0), (this.channelId = e), (this.type = n), (this._guildId = null), (this._isThread = !1), (this._isActiveThread = !1), (this._isJoinedThread = !1), (this._isResourceChannel = !1), (this._persisted = !1), (this.loadedMessages = !1), (this._lastMessageId = null), (this._lastMessageTimestamp = 0), (this._ackMessageId = null), (this._ackMessageTimestamp = 0), (this.isManualAck = !1), (this.ackPinTimestamp = 0), (this.lastPinTimestamp = 0), (this._oldestUnreadMessageId = null), (this.oldestUnreadMessageIdStale = !1), (this.estimated = !1), (this._unreadCount = 0), (this._mentionCount = 0), (this.outgoingAck = null);
    }
}
function ej(e) {
    e.forEach((e) => {
        if ((0, G.Em)(e.type)) {
            let n = eV.get(e.id);
            (n._guildId = e.guild_id), (n.lastMessageId = e.lastMessageId), (n.lastPinTimestamp = ew(e.lastPinTimestamp)), (n._isResourceChannel = e.hasFlag(el.zZ.IS_GUILD_RESOURCE_CHANNEL)), G.Ec.has(e.type) && n.syncThreadSettings();
        }
    });
}
function eH(e) {
    e.forEach((e) => {
        if ((0, G.Em)(e.type)) {
            var n;
            let r = eV.get(e.id);
            (r.lastMessageId = e.last_message_id), (r.lastPinTimestamp = ew(e.last_pin_timestamp)), (r._isResourceChannel = (0, V.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, el.zZ.IS_GUILD_RESOURCE_CHANNEL)), G.Ec.has(e.type) && r.syncThreadSettings();
        }
    });
}
function eY(e) {
    eq(e), eQ(e), ez(e), eX(e);
}
function eW(e) {
    eK(e);
}
function eK(e) {
    let n = ei.default.getCurrentUser();
    if (null == n) return !1;
    let r = eV.get(n.id, ec.W.NOTIFICATION_CENTER);
    e.forEach((e) => {
        if (null == e.since || e.type !== eo.OGo.PENDING_INCOMING) return;
        let n = new Date(e.since).getTime();
        (null != r.ackMessageId ? Y.default.extractTimestamp(r.ackMessageId) : 0) < n && (r.mentionCount++, (r.lastMessageId = Y.default.fromTimestamp(n)));
    });
}
function ez(e) {
    let n = 24;
    eV.get(e.id, ec.W.GUILD_HOME).lastMessageId = Y.default.fromTimestamp(p()(Date.now()).subtract(n, 'h').valueOf());
}
function eq(e) {
    var n;
    null === (n = e.threads) ||
        void 0 === n ||
        n.forEach((n) => {
            if (!G.AW.has(n.type)) return;
            let r = eV.get(n.id);
            (r.lastMessageId = n.lastMessageId), (r.lastPinTimestamp = ew(n.lastPinTimestamp)), (r._isThread = !0), (r._isActiveThread = !0), (r._isJoinedThread = null != n.member), null == r.ackMessageId && (r.ackMessageId = Y.default.fromTimestamp(eJ(e.id, n.id))), null == r.ackPinTimestamp && (r.ackPinTimestamp = eJ(e.id, n.id));
        });
}
function eQ(e) {
    var n, r;
    if ((null === (n = e.guild_scheduled_events) || void 0 === n ? void 0 : n.length) === 0 && null == eV.getIfExists(e.id, ec.W.GUILD_EVENT)) return;
    let i = eV.get(e.id, ec.W.GUILD_EVENT);
    i._guildId = e.id;
    let a = 0,
        o = null,
        s = null !== (r = i._ackMessageId) && void 0 !== r ? r : Y.default.fromTimestamp(i.getAckTimestamp());
    e.guild_scheduled_events.forEach((e) => {
        Y.default.compare(e.id, o) > 0 && (o = e.id), Y.default.compare(e.id, s) > 0 && a++;
    }),
        (i.lastMessageId = o),
        (i.mentionCount = a);
}
function eX(e) {
    let n = X.Z.getGuild(e.id);
    if (null == n) return;
    let r = null == n ? void 0 : n.latestOnboardingQuestionId;
    if (null == r) return;
    let i = eV.get(n.id, ec.W.GUILD_ONBOARDING_QUESTION);
    (i._guildId = n.id), (i.lastMessageId = r);
}
function eJ(e, n) {
    var r, i, a;
    let o = z.Z.getChannel(n),
        s = X.Z.getGuild(null != e ? e : null == o ? void 0 : o.guild_id),
        l = (null == o ? void 0 : o.isForumPost()) ? 0 : e$(s),
        u = (null !== (a = null === (r = M.Z.joinTimestamp(n)) || void 0 === r ? void 0 : r.getTime()) && void 0 !== a ? a : 0) - 5000;
    isNaN(u) && (u = -5000);
    let c = null == o ? void 0 : null === (i = o.threadMetadata) || void 0 === i ? void 0 : i.archiveTimestamp,
        d = null != c ? new Date(c).getTime() - 1 : 0;
    isNaN(d) && (d = 0);
    let f = Math.max(u, d);
    return f <= 0 && (f = Y.default.extractTimestamp(n) - 1), (isNaN(f) || f <= 0) && (f = 0), isNaN(l) ? f : Math.max(l, f);
}
function e$(e) {
    if (null != e && null != e.joinedAt) {
        if (e.joinedAt instanceof Date) {
            let n = e.joinedAt.getTime();
            if (!isNaN(n)) return n;
        } else if ('string' == typeof e.joinedAt) {
            let n = new Date(e.joinedAt).getTime();
            if (!isNaN(n)) return n;
        } else if ('number' == typeof e.joinedAt && !isNaN(e.joinedAt)) return e.joinedAt;
    }
    return Date.now();
}
function e0(e, n, r) {
    let i = e.guildId;
    return !(null != i && P.Z.isActive(i, n.parent_id, e.channelId)) && e1(e, r);
}
function e1(e, n) {
    return !!(e.mentionCount > 0) || (!(Y.default.compare(e.channelId, n) > 0 || (null != e._ackMessageId && Y.default.compare(e._ackMessageId, n) > 0) || (null != e._lastMessageId && Y.default.compare(e._lastMessageId, n) > 0)) && !0);
}
function e2(e) {
    switch (e.type) {
        case ec.W.GUILD_HOME:
        case ec.W.GUILD_EVENT:
        case ec.W.GUILD_ONBOARDING_QUESTION:
            return null != X.Z.getGuild(e.channelId);
        case ec.W.NOTIFICATION_CENTER:
            var n;
            return Y.default.cast(null === (n = ei.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.channelId;
        default:
            return !0;
    }
}
function e3(e) {
    if (null == e) return !1;
    let n = eV.get(e);
    return !!eF(n) && n.ack({});
}
function e4(e) {
    if (null == e) return;
    let n = eV.get(e);
    if (n.type !== ec.W.CHANNEL) return;
    let r = z.Z.getChannel(n.channelId);
    if (null == r || !r.isForumPost() || null == r.parent_id) return;
    let i = r.parent_id,
        a = eV.get(i);
    P.Z.hasLoaded(r.guild_id) && Y.default.keys(P.Z.getThreadsForParent(r.guild_id, i)).every((e) => t6.hasOpenedThread(e) || 0 > Y.default.compare(e, a.ackMessageId)) && a.ack({});
}
function e6(e) {
    var n, r;
    let { guilds: i, relationships: a, initialPrivateChannels: o, readState: s } = e;
    ex(),
        (ey = null),
        !eb && !s.partial && eV.clearAll(),
        (eb = !1),
        s.entries.forEach((e) => {
            var n, r;
            let i = null !== (n = e.read_state_type) && void 0 !== n ? n : ec.W.CHANNEL;
            i !== ec.W.CHANNEL && (e = eP(e));
            let a = eV.get(e.id, i);
            (a._persisted = !0), (a._mentionCount = null !== (r = e.mention_count) && void 0 !== r ? r : 0), (a.flags = e.flags), (a.lastViewed = e.last_viewed);
            let o = z.Z.getBasicChannel(e.id);
            null != o && (0, G.Q5)(o.type) && (null == e.last_message_id || 0 === e.last_message_id) ? (a.ackMessageId = Y.default.fromTimestamp(eJ(o.guild_id, o.id))) : a.ackedWhileCached ? -1 === Y.default.compare(a.ackMessageId, e.last_message_id) && (a.ackMessageId = e.last_message_id) : (a.ackMessageId = e.last_message_id), (a.ackedWhileCached = void 0), (a.ackPinTimestamp = ew(e.last_pin_timestamp)), eV._mentionChannels.delete(a.channelId), a._mentionCount > 0 && a.canHaveMentions() && eV._mentionChannels.add(a.channelId);
        }),
        eV.resetGuildSentinels();
    let l = null === (n = ei.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    for (let e of (null != l && (eV.get(l, ec.W.NOTIFICATION_CENTER).lastMessageId = Y.default.fromTimestamp(Date.now())), eW(a), ej(o), i)) ej(null !== (r = e.channels) && void 0 !== r ? r : []), e9(e), eY(e);
    e5(), (eS = setTimeout(() => e8(s.entries), 10 * F.Z.Millis.SECOND));
}
function e5() {
    null != eS && clearTimeout(eS);
}
ef(eV, '_guildReadStateSentinels', {}), ef(eV, '_readStates', {}), ef(eV, '_mentionChannels', new Set());
let e7 = (0, d.throttle)((e) => {
    e.delete();
}, 100);
function e8(e) {
    let n = eR();
    for (let i of e) {
        var r;
        let e = null !== (r = i.read_state_type) && void 0 !== r ? r : ec.W.CHANNEL,
            a = eV.get(i.id, e);
        a.shouldDeleteReadState(n) && e7(a);
    }
}
function e9(e) {
    if (null != e.channelUpdates) {
        var n;
        ej(null === (n = e.channelUpdates) || void 0 === n ? void 0 : n.writes);
    }
    if (null != e.channelTimestampUpdates)
        for (let n of e.channelTimestampUpdates) {
            let e = eV.get(n.id);
            null != n.last_message_id && (e.lastMessageId = n.last_message_id), null != n.last_pin_timestamp && (e.lastPinTimestamp = ew(n.last_pin_timestamp));
        }
}
function te(e) {
    let { lazyPrivateChannels: n } = e;
    ej(n);
}
function tt(e) {
    let { readStates: n, selectedChannelId: r } = e;
    ex(),
        (ey = null),
        (eE = r),
        (ev = K.ZP.getCurrentSidebarChannelId(eE)),
        eV.clearAll(),
        n.forEach((e) => {
            let n = eV.get(e.channelId);
            n.deserializeForOverlay(e), n.type === ec.W.CHANNEL && n.rebuildChannelState();
        });
}
function tn(e) {
    var n;
    let { guild: r } = e,
        i = eR();
    eV.forEach((e) => {
        e.guildId === r.id && e.shouldDeleteReadState(i) && e.delete(!1);
    }),
        ej(null !== (n = r.channels) && void 0 !== n ? n : []),
        e9(r),
        eY(r);
}
function tr(e) {
    let { channelId: n, isAfter: r, messages: i } = e,
        a = eV.get(n);
    a.loadedMessages = !0;
    let o = $.Z.getMessages(n);
    null != o && (i.length > 0 && 1 === Y.default.compare(i[0].id, a.ackMessageId) && 0 === a.unreadCount ? a.rebuildChannelState() : o.hasPresent() || o.jumpTargetId === a.ackMessageId ? a.rebuildChannelState() : r && null != a.ackMessageId && o.has(a.ackMessageId, !0) && ((a.unreadCount += i.length), null == a.oldestUnreadMessageId && a.rebuildChannelState())), eH(i.map((e) => e.thread).filter(j.lm));
}
function ti(e) {
    let { channelId: n } = e;
    eV.get(n).rebuildChannelState();
}
function ta(e) {
    let n,
        r,
        { channelId: a, message: o, isPushNotification: s } = e,
        l = eV.get(a),
        u = l.hasUnread(),
        c = null != l.lastMessageId && l.lastMessageId >= o.id;
    l.lastMessageId = o.id;
    let d = ei.default.getCurrentUser(),
        f = z.Z.getBasicChannel(a);
    if (null != o.author && null != d && o.author.id === d.id && !eo.V$x.SELF_MENTIONABLE_SYSTEM.has(o.type))
        return (
            null != l.outgoingAck && l.clearOutgoingAck(),
            tG({
                channelId: a,
                messageId: o.id,
                manual: !1
            })
        );
    let p = (0, C.D)();
    if ((null == p ? void 0 : p.isReady()) === !0) {
        let e = p.getCurrentRoute();
        if (y.Z.getChatOpen(l.channelId)) n = l.channelId;
        else if ((null == e ? void 0 : e.name) === 'channel') n = e.params.channelId;
        else if ((null == e ? void 0 : e.name) === 'guilds') {
            var h;
            n = null === (h = e.params) || void 0 === h ? void 0 : h.channelId;
        }
    } else null == p && ((n = en.Z.getChannelId()), (r = K.ZP.getCurrentSidebarChannelId(n)));
    let _ = n === a || r === a;
    if ((_ && eF(l) && !s) || (null != i && i.isInstanceFocused() && _ && i.isInstanceLocked() && i.isPinned(eo.Odu.TEXT))) return l.ack({ messageId: o.id });
    if ((null == l.oldestUnreadMessageId || l.oldestUnreadMessageIdStale ? (l.oldestUnreadMessageId = o.id) : !u && (0, w.nV)() !== a && (l.oldestUnreadMessageId = o.id), !c && l.unreadCount++, !(et.Z.isBlockedOrIgnoredForMessage(o) || (o.type === eo.uaV.RECIPIENT_REMOVE && (null == f ? void 0 : f.type) === eo.d4z.GROUP_DM)))) {
        let { shouldMention: e, isMentionLowImportance: n } = to(o, d, l);
        e && ((l.isMentionLowImportance = n), l.mentionCount++);
    }
}
function to(e, n, r) {
    if (
        null != n &&
        (0, D.Hl)({
            rawMessage: e,
            userId: n.id,
            suppressEveryone: er.ZP.isSuppressEveryoneEnabled(r.guildId),
            suppressRoles: er.ZP.isSuppressRolesEnabled(r.guildId)
        })
    )
        return {
            shouldMention: !0,
            isMentionLowImportance: !1
        };
    let i = z.Z.getChannel(e.channel_id);
    if (ek(i))
        return {
            shouldMention: !0,
            isMentionLowImportance: !1
        };
    if (er.ZP.mentionOnAllMessages && null != i) {
        if (i.isThread()) {
            if ((0, U.J)(i) === ed.iN.ALL_MESSAGES)
                return {
                    shouldMention: !0,
                    isMentionLowImportance: !0
                };
        } else if (!i.isVocal() && !er.ZP.isChannelMuted(i.guild_id, i.id) && er.ZP.resolvedMessageNotifications(i) === eo.bL.ALL_MESSAGES)
            return {
                shouldMention: !0,
                isMentionLowImportance: !0
            };
    }
    return {
        shouldMention: !1,
        isMentionLowImportance: !1
    };
}
function ts(e) {
    let { channel: n } = e;
    if (!(0, G.Em)(n.type)) return !1;
    let r = eV.get(n.id);
    (r.lastMessageId = n.lastMessageId), (r.lastPinTimestamp = ew(n.lastPinTimestamp));
}
function tl(e) {
    let { channel: n } = e;
    tu(n), tc(n);
}
function tu(e) {
    if (!G.AW.has(e.type)) return !1;
    let n = eV.get(e.id);
    (n.lastMessageId = e.lastMessageId), (n.lastPinTimestamp = ew(e.lastPinTimestamp)), n.syncThreadSettings(), e.ownerId === W.default.getId() && (n.loadedMessages = !0);
}
function tc(e) {
    let n = e.parent_id;
    eV.get(n).lastMessageId = e.id;
    let r = ei.default.getCurrentUser();
    if (e.ownerId === (null == r ? void 0 : r.id))
        return (
            (eV.get(e.id)._persisted = !0),
            tG({
                channelId: n,
                messageId: e.id,
                manual: !1
            })
        );
}
function td(e) {
    let { channel: n } = e;
    return !!G.AW.has(n.type) && eV.get(n.id).syncThreadSettings();
}
function tf(e) {
    let { id: n } = e;
    return eV.get(n).syncThreadSettings();
}
function tp(e) {
    return (0, k.s)(e) && eV.get(e.id).syncThreadSettings();
}
function th(e) {
    let { threads: n } = e;
    n.forEach((e) => {
        if (!G.AW.has(e.type)) return;
        let n = eV.get(e.id);
        if (((n.lastMessageId = e.lastMessageId), (n.lastPinTimestamp = ew(e.lastPinTimestamp)), (n._isThread = !0), (n._isActiveThread = !0), (n._isJoinedThread = M.Z.hasJoined(e.id)), e.isForumPost())) {
            let n = eV.get(e.parent_id);
            0 > Y.default.compare(n.lastMessageId, e.id) && (n.lastMessageId = e.id);
        }
    });
}
function t_(e) {
    let { threads: n } = e;
    eH(n);
}
function tm(e) {
    let { channelId: n } = e;
    return e3(n);
}
function tg(e) {
    let { messages: n, threads: r } = e;
    for (let e of n)
        eH(
            e
                .map((e) => {
                    let { thread: n } = e;
                    return n;
                })
                .filter(j.lm)
        );
    eH(r);
}
function tE(e) {
    let n = ei.default.getCurrentUser();
    return null != e.creator_id && null != n && e.creator_id === n.id;
}
function tv(e) {
    let { guildScheduledEvent: n } = e,
        r = n.guild_id,
        i = eV.get(n.guild_id, ec.W.GUILD_EVENT);
    if (((i.lastMessageId = n.id), tE(n))) {
        tF({
            type: 'GUILD_FEATURE_ACK',
            id: r,
            ackType: ec.W.GUILD_EVENT,
            ackedId: n.id,
            local: !1
        });
        return;
    }
    !er.ZP.isMuteScheduledEventsEnabled(r) && i.mentionCount++;
}
function ty(e) {
    let { guildScheduledEvent: n } = e,
        r = n.guild_id;
    if (tE(n) || ![eu.p1.CANCELED, eu.p1.COMPLETED].includes(n.status)) return !1;
    eV.get(r, ec.W.GUILD_EVENT).handleGuildEventRemoval(r, n.id);
}
function tb(e) {
    let { guildScheduledEvent: n } = e,
        r = n.guild_id;
    if (tE(n)) return !1;
    eV.get(n.guild_id, ec.W.GUILD_EVENT).handleGuildEventRemoval(r, n.id);
}
function tI(e) {
    let n = ei.default.getCurrentUser();
    if (null == n || null == e.relationship.since || (e.relationship.type !== eo.OGo.PENDING_INCOMING && e.relationship.type !== eo.OGo.FRIEND)) return !1;
    let r = eV.get(n.id, ec.W.NOTIFICATION_CENTER),
        i = e.relationship.type === eo.OGo.FRIEND,
        a = i ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime();
    (null != r.ackMessageId ? Y.default.extractTimestamp(r.ackMessageId) : 0) < a && ((r.lastMessageId = Y.default.fromTimestamp(a)), L.Z.active ? tj(n.id, ec.W.NOTIFICATION_CENTER, void 0, !1) : i ? r.mentionCount-- : r.mentionCount++);
}
function tT(e) {
    let n = ei.default.getCurrentUser();
    if (null == n || null == e.relationship.since || e.relationship.type !== eo.OGo.PENDING_INCOMING) return !1;
    let r = eV.get(n.id, ec.W.NOTIFICATION_CENTER),
        i = new Date(e.relationship.since).getTime();
    (null != r.ackMessageId ? Y.default.extractTimestamp(r.ackMessageId) : 0) <= i && (r.mentionCount = Math.max(0, r.mentionCount - 1));
}
function tS(e) {
    var n;
    let { item: r } = e,
        i = null === (n = ei.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null == i) return !1;
    let a = eV.get(i, ec.W.NOTIFICATION_CENTER);
    if (((a.lastMessageId = r.id), L.Z.active)) {
        tj(i, ec.W.NOTIFICATION_CENTER, r.id, !1);
        return;
    }
    a.mentionCount++;
}
function tA(e) {
    var n;
    let { ids: r, optimistic: i } = e;
    if (i || L.Z.active) return !1;
    let a = null === (n = ei.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null == a) return !1;
    let o = eV.get(a, ec.W.NOTIFICATION_CENTER);
    r.forEach((e) => {
        0 > Y.default.compare(o.ackMessageId, e) && (o.mentionCount = Math.max(o.mentionCount - 1, 0));
    });
}
function tC(e) {
    let { guild: n } = e;
    return eV.clear(n.id, ec.W.GUILD_EVENT);
}
function tN(e) {
    let { guild: n } = e,
        r = n.latest_onboarding_question_id;
    if (null == r) return;
    let i = eV.get(n.id, ec.W.GUILD_ONBOARDING_QUESTION);
    (i._guildId = n.id), (i.lastMessageId = r);
}
function tR(e) {
    let { channel: n } = e;
    return eV.clear(n.id);
}
function tO(e) {
    let { channelId: n } = e,
        r = K.ZP.getCurrentSidebarChannelId(n),
        i = z.Z.getChannel(n);
    if (null != i) {
        var a;
        let e = eV.get(i.id);
        (e.ackMessageIdAtChannelSelect = null !== (a = e.ackMessageId) && void 0 !== a ? a : Y.default.fromTimestamp(e.getAckTimestamp())), e.recordLastViewedTime();
    }
    tx(eE), tx(ev);
    let o = !1;
    return eE !== n && ((o = tw(eE) || o), (o = tw(ev) || o)), (eE === n || ((null == i ? void 0 : i.type) != null && eo.TPd.GUILD_THREADS_ONLY.has(i.type))) && (o = e3(n) || o), eE === n && (o = e3(r) || o), (eE = n), (ev = r), o;
}
function tD() {
    let e = K.ZP.getCurrentSidebarChannelId(eE),
        n = !1;
    return ev !== e ? ((n = tw(ev)), (ev = e)) : (n = e3(e) || n), n;
}
function tL(e) {
    let { channelId: n } = e;
    if (null == n) return;
    let r = eV.get(n);
    if (!r.hasMentions()) return (r.oldestUnreadMessageId = null), r.ack({ isExplicitUserAction: !0 });
}
function tx(e) {
    if (null != e) eV.get(e).isManualAck = !1;
}
function tw(e) {
    if (null == e) return !1;
    let n = eV.get(e);
    return !n.hasUnread() && ((n.oldestUnreadMessageId = null), !0);
}
function tP(e) {
    let n = !1;
    return (
        eC.forEachChannel((r, i) => {
            i.has(e.windowId) && (n = tM(r, e.focused) || n);
        }),
        n
    );
}
function tM(e, n) {
    if (null == e) return !1;
    let r = eV.get(e);
    return !n && !r.hasUnread() && (r.oldestUnreadMessageIdStale = !0), e3(e);
}
function tk(e) {
    let { channelId: n } = e;
    return e3(n);
}
function tU(e) {
    let { channelId: n, messageId: r, immediate: i = !1, force: a = !1, context: o, location: s } = e,
        l = eV.get(n),
        u = l.ack({
            messageId: r,
            local: o !== eo.e3s,
            immediate: i,
            force: a,
            isExplicitUserAction: !0,
            location: s
        });
    return null != r ? (l.rebuildChannelState(), !0) : u;
}
function tB(e) {
    let { channelId: n, timestamp: r } = e;
    return eV.get(n).ackPins(r);
}
function tG(e) {
    let { channelId: n, messageId: r, manual: i, newMentionCount: a } = e,
        o = eV.get(n);
    return i
        ? (o.rebuildChannelState(r, !0, a), o.clearOutgoingAck(), !0)
        : r !== o._ackMessageId &&
              o.ack({
                  messageId: r,
                  local: !0
              });
}
function tZ(e) {
    let { channelId: n } = e;
    return eV.get(n).ack({
        messageId: void 0,
        local: !0,
        immediate: void 0,
        force: void 0,
        isExplicitUserAction: !0
    });
}
function tF(e) {
    let { id: n, ackType: r, ackedId: i, local: a } = e;
    return tj(n, r, i, a);
}
function tV(e) {
    var n;
    let { ackType: r, ackedId: i, local: a } = e,
        o = null === (n = ei.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    return null != o && tj(o, r, i, a);
}
function tj(e, n, r, i) {
    var a;
    let o = eV.get(e, n);
    return (
        r !== o.ackMessageId &&
        o.lastMessageId !== o.ackMessageId &&
        (null != o.lastMessageId || 0 !== o.mentionCount) &&
        ((r = null !== (a = null != r ? r : o.lastMessageId) && void 0 !== a ? a : Y.default.fromTimestamp(o.getAckTimestamp())),
        o.ack({
            messageId: r,
            local: null == i || i
        }))
    );
}
function tH(e) {
    let { channelId: n, lastPinTimestamp: r } = e,
        i = eV.get(n),
        a = ew(r);
    return i.lastPinTimestamp !== a && ((i.lastPinTimestamp = a), !0);
}
function tY(e) {
    let n = !1;
    for (let r of e.channels) {
        let e = eV.get(r.id),
            i = ew(r.lastPinTimestamp);
        (e.lastMessageId !== r.lastMessageId || e.lastPinTimestamp !== i) && ((n = !0), (e.lastMessageId = r.lastMessageId), (e.lastPinTimestamp = i));
    }
    return n;
}
function tW() {
    ey = null;
}
function tK(e) {
    let { readStates: n } = e;
    (eb = !0),
        ex(),
        n.forEach((e) => {
            var n;
            let r = null !== (n = e.type) && void 0 !== n ? n : ec.W.CHANNEL;
            (e.type = r), null == eV._readStates[r] && (eV._readStates[r] = {}), (eV._readStates[r][e.channelId] = (0, g.gh)(e, eV));
        });
}
function tz(e) {
    let { channelId: n, chatOpen: r } = e;
}
function tq(e, n, r) {
    e.forEach((e) => {
        let { channelId: n, messageId: r, readStateType: i } = e;
        eV.get(n, i).ack({
            messageId: r,
            local: !0,
            immediate: void 0,
            force: void 0,
            isExplicitUserAction: !0
        });
    }),
        n === eo.e3s &&
            (eI.push(
                ...e.map((e) => ({
                    channel_id: e.channelId,
                    message_id: e.messageId,
                    read_state_type: e.readStateType
                }))
            ),
            !eT && eU(r));
}
function tQ(e) {
    let { channels: n, context: r, onFinished: i } = e;
    tq(
        n.filter((e) => null != e.messageId && t6.hasUnreadOrMentions(e.channelId, e.readStateType)),
        r,
        i
    );
}
function tX(e) {
    let { channelId: n, windowId: r } = e;
    return !eC.hasWindowId(n, r) && (eC.addWindowId(n, r), e3(n));
}
function tJ(e) {
    let { channelId: n, windowId: r } = e;
    return eC.removeWindowId(n, r), !1;
}
function t$(e) {
    let { channelId: n } = e;
    return tw(n);
}
function t0(e) {
    let { channelId: n } = e;
    return e3(n);
}
function t1(e) {
    let { changesByChannelId: n } = e;
    for (let e in n) {
        var r, i;
        let a = n[e],
            o = eV.getIfExists(e);
        if (null != o) for (let e of [null === (r = a.new_messages) || void 0 === r ? void 0 : r[0]].concat(null !== (i = a.modified_messages) && void 0 !== i ? i : []).filter(j.lm)) 1 === Y.default.compare(e.id, o.lastMessageId) && (o.lastMessageId = e.id);
    }
}
function t2(e) {
    var n;
    let { ackedId: r } = e,
        i = null === (n = ei.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null == i) return !1;
    let a = eV.get(i, ec.W.MESSAGE_REQUESTS);
    if (r === a.ackMessageId) return !1;
    (a.ackMessageId = r),
        a.ack({
            messageId: r,
            isExplicitUserAction: !0
        });
}
function t3(e) {
    var n;
    let r = null === (n = ei.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null == r) return !1;
    let i = eV.get(r, ec.W.MESSAGE_REQUESTS);
    if (null == i.ackMessageId) return !1;
    i.ackMessageId = void 0;
}
class t4 extends (o = h.ZP.Store) {
    initialize() {
        let e = [q.Z, ei.default, X.Z, Q.Z, z.Z, en.Z, $.Z, ee.Z, y.Z, P.Z, M.Z, K.ZP, A.ZP, S.Z, I.Z, er.ZP, ea.Z, L.Z, N.Z, B.Z, O.Z];
        this.waitFor(...e), this.syncWith([K.ZP], tD);
    }
    getReadStatesByChannel() {
        var e;
        return null !== (e = eV._readStates[ec.W.CHANNEL]) && void 0 !== e ? e : {};
    }
    getForDebugging(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eV.getIfExists(e, n);
    }
    getNotifCenterReadState(e) {
        var n;
        return null === (n = eV._readStates[ec.W.NOTIFICATION_CENTER]) || void 0 === n ? void 0 : n[e];
    }
    hasUnread(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eV.getValue(e, n, (e) => e.canBeUnread() && e.hasUnread(), !1);
    }
    hasUnreadOrMentions(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eV.getValue(e, n, (e) => e.canBeUnread() && e.hasUnreadOrMentions(), !1);
    }
    hasTrackedUnread(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eV.getValue(e, n, (e) => e.canTrackUnreads() && e.hasUnread(), !1);
    }
    isForumPostUnread(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eV.getValue(e, n, (e) => e.isForumPostUnread(), !1);
    }
    getUnreadCount(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eV.getValue(e, n, (e) => (e.canBeUnread() ? e.unreadCount : 0), 0);
    }
    getMentionCount(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL,
            r = eV.getValue(e, n, (e) => (e.canHaveMentions() ? e.getMentionCount() : 0), 0);
        if ((0, b.Z)(e)) {
            if (r > 0) return 1;
        }
        return r;
    }
    getIsMentionLowImportance(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return n === ec.W.CHANNEL && eV.getValue(e, n, (e) => e.isMentionLowImportance, !1);
    }
    getGuildChannelUnreadState(e, n, r, i, a) {
        return eV.getValue(e.id, ec.W.CHANNEL, (o) => o.getGuildChannelUnreadState(e, n, r, i, a), {
            mentionCount: 0,
            unread: !1,
            isMentionLowImportance: !1
        });
    }
    hasRecentlyVisitedAndRead(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eV.getValue(e, n, (e) => e.hasRecentlyVisitedAndRead(), !1);
    }
    ackMessageId(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eV.getValue(e, n, (e) => (e.canBeUnread() ? e.ackMessageId : null), null);
    }
    getTrackedAckMessageId(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eV.getValue(e, n, (e) => (e.canTrackUnreads() ? e._ackMessageId : null), null);
    }
    lastMessageId(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eV.getValue(e, n, (e) => e.lastMessageId, null);
    }
    lastMessageTimestamp(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eV.getValue(e, n, (e) => e.lastMessageTimestamp, 0);
    }
    lastPinTimestamp(e) {
        return eV.getValue(e, ec.W.CHANNEL, (e) => e.lastPinTimestamp, null);
    }
    getOldestUnreadMessageId(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eV.getValue(e, n, (e) => (e.canTrackUnreads() ? e.oldestUnreadMessageId : null), null);
    }
    getOldestUnreadTimestamp(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eV.getValue(e, n, (e) => (e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0), 0);
    }
    isEstimated(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eV.getValue(e, n, (e) => e.estimated, !1);
    }
    hasOpenedThread(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eV.getValue(e, n, (e) => e._persisted, !1);
    }
    hasUnreadPins(e) {
        return eV.getValue(e, ec.W.CHANNEL, (e) => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1);
    }
    isNewForumThread(e, n, r) {
        let i = eV.get(n);
        if (!0 === eV.get(e)._persisted || null == i.ackMessageIdAtChannelSelect || 0 >= Y.default.compare(e, i.ackMessageIdAtChannelSelect)) return !1;
        let a = e$(r);
        return Y.default.extractTimestamp(e) > a;
    }
    getAllReadStates(e) {
        let n = [];
        return (
            eV.forEach((r) => {
                switch (r.type) {
                    case ec.W.GUILD_HOME:
                    case ec.W.GUILD_EVENT:
                    case ec.W.GUILD_ONBOARDING_QUESTION:
                        null != X.Z.getGuild(r.channelId) && n.push(r.serialize(e));
                        break;
                    case ec.W.NOTIFICATION_CENTER:
                    case ec.W.MESSAGE_REQUESTS:
                        var i;
                        Y.default.cast(null === (i = ei.default.getCurrentUser()) || void 0 === i ? void 0 : i.id) === r.channelId && n.push(r.serialize(e));
                        break;
                    default:
                        n.push(r.serialize(e));
                }
            }),
            n
        );
    }
    getGuildUnreadsSentinel(e) {
        return eV.getGuildSentinels(e).unreadsSentinel;
    }
    getMentionChannelIds() {
        return eV.getMentionChannelIds();
    }
    getNonChannelAckId(e) {
        var n;
        let r = null === (n = ei.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
        return null == r ? null : eV.get(r, e).ackMessageId;
    }
    getSnapshot(e, n) {
        let r = eV.get(e);
        return null == r.snapshot || Date.now() - r.snapshot.takenAt > n ? r.takeSnapshot() : r.snapshot;
    }
}
ef(t4, 'displayName', 'ReadStateStore');
let t6 = new t4(E.Z, {
    BACKGROUND_SYNC_CHANNEL_MESSAGES: t1,
    CONNECTION_OPEN: e6,
    CONNECTION_OPEN_SUPPLEMENTAL: te,
    LOGOUT: e5,
    OVERLAY_INITIALIZE: tt,
    CACHE_LOADED: tK,
    GUILD_CREATE: tn,
    LOAD_MESSAGES_SUCCESS: tr,
    MESSAGE_CREATE: ta,
    MESSAGE_DELETE: ti,
    MESSAGE_DELETE_BULK: ti,
    MESSAGE_ACK: tG,
    CHANNEL_ACK: tU,
    CHANNEL_LOCAL_ACK: tZ,
    CHANNEL_PINS_ACK: tB,
    CHANNEL_PINS_UPDATE: tH,
    CHANNEL_SELECT: tO,
    VOICE_CHANNEL_SELECT: tL,
    CHANNEL_CREATE: ts,
    THREAD_CREATE: tl,
    THREAD_UPDATE: td,
    THREAD_LIST_SYNC: th,
    LOAD_THREADS_SUCCESS: t_,
    LOAD_ARCHIVED_THREADS_SUCCESS: t_,
    SEARCH_FINISH: tg,
    MOD_VIEW_SEARCH_FINISH: tg,
    THREAD_MEMBER_UPDATE: tf,
    THREAD_MEMBERS_UPDATE: tp,
    CHANNEL_DELETE: tR,
    THREAD_DELETE: tR,
    WINDOW_FOCUS: tP,
    UPDATE_CHANNEL_DIMENSIONS: tk,
    CURRENT_USER_UPDATE: tW,
    BULK_ACK: tQ,
    ENABLE_AUTOMATIC_ACK: tX,
    DISABLE_AUTOMATIC_ACK: tJ,
    GUILD_FEATURE_ACK: tF,
    GUILD_SCHEDULED_EVENT_CREATE: tv,
    GUILD_SCHEDULED_EVENT_UPDATE: ty,
    GUILD_SCHEDULED_EVENT_DELETE: tb,
    GUILD_DELETE: tC,
    GUILD_UPDATE: tN,
    RESORT_THREADS: tm,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: tz,
    DECAY_READ_STATES: ex,
    NOTIFICATION_CENTER_ITEM_CREATE: tS,
    RELATIONSHIP_ADD: tI,
    RELATIONSHIP_REMOVE: tT,
    NOTIFICATION_CENTER_ITEMS_ACK: tA,
    USER_NON_CHANNEL_ACK: tV,
    PASSIVE_UPDATE_V2: tY,
    CLEAR_OLDEST_UNREAD_MESSAGE: t$,
    TRY_ACK: t0,
    MESSAGE_REQUEST_ACK: t2,
    MESSAGE_REQUEST_CLEAR_ACK: t3
});
n.ZP = t6;
