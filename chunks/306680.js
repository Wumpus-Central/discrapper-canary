let i;
r.d(n, {
    Ex: function () {
        return ek;
    }
});
var a,
    s,
    o = r(47120);
var l = r(411104);
var u = r(653041);
var c = r(789020);
var d = r(512722),
    f = r.n(d),
    _ = r(392711);
var h = r(913527),
    p = r.n(h),
    m = r(442837),
    g = r(544891),
    E = r(846519),
    v = r(283693),
    I = r(570140),
    T = r(317381),
    b = r(358221),
    y = r(702321),
    S = r(430198),
    A = r(710845),
    N = r(353926),
    C = r(924301),
    R = r(777639),
    O = r(355298),
    D = r(869404),
    L = r(333984),
    x = r(572804),
    w = r(140155),
    P = r(398758),
    M = r(725319),
    k = r(344185),
    U = r(569471),
    B = r(195663),
    G = r(723170),
    Z = r(581883),
    F = r(131704),
    V = r(386438),
    j = r(70956),
    H = r(630388),
    Y = r(823379),
    W = r(931619),
    K = r(709054),
    z = r(314897),
    q = r(433355),
    Q = r(592125),
    X = r(796974),
    J = r(486472),
    $ = r(430824),
    ee = r(517100),
    et = r(375954),
    en = r(496675),
    er = r(699516),
    ei = r(944486),
    ea = r(9156),
    es = r(594174),
    eo = r(451478),
    el = r(981631),
    eu = r(918559),
    ec = r(176505),
    ed = r(765305),
    ef = r(490897),
    e_ = r(124368);
function eh(e, n, r) {
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
let ep = new A.Z('ReadStateStore'),
    em = 2;
__OVERLAY__ && (i = r(237997).Z);
let eg = el.S7T.VIEW_CHANNEL | el.S7T.READ_MESSAGE_HISTORY,
    eE = 100,
    ev = 1,
    eI = ei.Z.getChannelId(),
    eT = null,
    eb = null,
    ey = !1,
    eS = [],
    eA = !1,
    eN = null,
    eC = {};
let eR = 30 * j.Z.Millis.DAY;
function eO() {
    return K.default.fromTimestamp(Date.now() - eR);
}
let eD = 0,
    eL = 0,
    ex = null;
function ew() {
    (eD = Date.now() - 7 * j.Z.Millis.DAY),
        (eL = Date.now() - 3 * j.Z.Millis.DAY),
        clearTimeout(ex),
        (ex = setTimeout(() => {
            I.Z.dispatch({ type: 'DECAY_READ_STATES' });
        }, 1 * j.Z.Millis.HOUR));
}
function eP(e) {
    if (null == e) return 0;
    let n = Date.parse(e);
    return isNaN(n) ? 0 : n;
}
function eM(e) {
    return {
        id: e.id,
        read_state_type: e.read_state_type,
        mention_count: e.badge_count,
        last_message_id: e.last_acked_id
    };
}
function ek(e, n) {
    let r = Q.Z.getChannel(e.channel_id);
    return (
        !(null == r || er.Z.isBlockedOrIgnoredForMessage(e)) &&
        (!!(
            (0, x.ZP)({
                message: e,
                userId: n.id,
                suppressEveryone: ea.ZP.isSuppressEveryoneEnabled(r.guild_id),
                suppressRoles: ea.ZP.isSuppressRolesEnabled(r.guild_id)
            }) || eU(r)
        ) ||
            !1)
    );
}
function eU(e) {
    return null != e && e.isPrivate() && !ea.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
}
async function eB(e) {
    if (0 === eS.length) {
        (eA = !1), null == e || e();
        return;
    }
    eA = !0;
    let n = eS.splice(0, eE);
    await eZ(() =>
        g.tn.post({
            url: el.ANM.BULK_ACK,
            body: { read_states: n },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ),
        await (0, E.GR)(1000 * ev),
        eB(e);
}
let eG = 3;
async function eZ(e) {
    let n = z.default.getId();
    for (let r = 0; r < eG; r++)
        try {
            return await e();
        } catch (e) {
            if ((ep.error('', e), r + 1 < eG && (await (0, E.GR)((r + 1) * 2000), await W.Z.awaitOnline(), n !== z.default.getId()))) return Promise.reject(Error('User changed.'));
        }
}
function eF(e) {
    if (e.type !== ef.W.CHANNEL) return !1;
    let n = Q.Z.getChannel(e.channelId),
        r = null != n && n.isForumPost();
    if ((null != T.ZP.getConnectedActivityChannelId() && T.ZP.getActivityPanelMode() === eu.Ez.PANEL && T.ZP.getFocusedLayout() === eu.MI.NO_CHAT) || ee.Z.isIdle() || !e.canTrackUnreads()) return !1;
    if ((null == n ? void 0 : n.isForumLikeChannel()) !== !0) {
        let n = eC[e.channelId],
            r = null != n && eo.Z.isFocused(n),
            a = null != i && i.isInstanceFocused() && i.isPinned(el.Odu.TEXT);
        if (!r && !a) return !1;
    }
    if (r && !e._persisted) return !0;
    if (!e.hasUnreadOrMentions() || (null == n ? void 0 : n.isForumLikeChannel()) === !0) return !1;
    let a = !1;
    if (!(r && !e._isJoinedThread) && !X.Z.isAtBottom(e.channelId)) return a && ep.log('STAFF-ACK-LOG: Not at bottom', e.channelId), !1;
    let s = b.Z.getLayout(e.channelId),
        o = b.Z.getChatOpen(e.channelId);
    if ((!o && (s === el.AEg.NO_CHAT || s === el.AEg.FULL_SCREEN)) || null == eC[e.channelId]) return !1;
    let l = et.Z.getMessages(e.channelId);
    return null == l || !l.ready || l.loadingMore ? (a && ep.log('STAFF-ACK-LOG: Still loading messages', e.channelId), !1) : (0, M._E)() || o ? (a && ep.log('STAFF-ACK-LOG: Acked', e.channelId), !0) : (a && ep.log('STAFF-ACK-LOG: Chat not focused', e.channelId), !1);
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
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL,
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
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL;
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
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL,
            i = arguments.length > 2 ? arguments[2] : void 0,
            a = arguments.length > 3 ? arguments[3] : void 0,
            s = null === (n = eV._readStates[r]) || void 0 === n ? void 0 : n[e];
        return null == s ? a : i(s);
    }
    static clear(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL;
        return (null === (n = eV._readStates[r]) || void 0 === n ? void 0 : n[e]) != null && (delete eV._readStates[r][e], eV._mentionChannels.delete(e), !0);
    }
    static clearAll() {
        (eV._readStates = {}), eV._mentionChannels.clear();
    }
    serialize(e) {
        let { channelId: n, type: r, _guildId: i, _isThread: a, _isActiveThread: s, _isJoinedThread: o, _persisted: l, loadedMessages: u, _lastMessageId: c, _lastMessageTimestamp: d, _ackMessageId: f, _ackMessageTimestamp: _, ackPinTimestamp: h, isManualAck: p, lastPinTimestamp: m, _oldestUnreadMessageId: g, oldestUnreadMessageIdStale: E, estimated: v, _mentionCount: I, flags: T, lastViewed: b } = this;
        if (e)
            return {
                channelId: n,
                type: r,
                _guildId: i,
                _isThread: a,
                _isActiveThread: s,
                _isJoinedThread: o,
                _persisted: l,
                loadedMessages: u,
                _lastMessageId: c,
                _lastMessageTimestamp: d,
                _ackMessageId: f,
                _ackMessageTimestamp: _,
                ackPinTimestamp: h,
                isManualAck: p,
                lastPinTimestamp: m,
                _oldestUnreadMessageId: g,
                oldestUnreadMessageIdStale: E,
                estimated: v,
                _mentionCount: I,
                flags: T,
                lastViewed: b
            };
        let y = {
            channelId: n,
            type: r,
            _guildId: i,
            _persisted: l,
            _lastMessageId: c,
            _lastMessageTimestamp: d,
            _ackMessageId: f,
            _ackMessageTimestamp: _,
            ackPinTimestamp: h,
            lastPinTimestamp: m,
            _mentionCount: I,
            flags: T
        };
        return null != b && b > 0 && (y.lastViewed = b), a && ((y._isThread = a), (y._isActiveThread = s), (y._isJoinedThread = o)), y;
    }
    deserializeForOverlay(e) {
        let { channelId: n, type: r, _guildId: i, _isThread: a, _isActiveJoinedThread: s, _isActiveThread: o, _isJoinedThread: l, _persisted: u, loadedMessages: c, _lastMessageId: d, _lastMessageTimestamp: f, _ackMessageId: _, _ackMessageTimestamp: h, ackPinTimestamp: p, isManualAck: m, lastPinTimestamp: g, _oldestUnreadMessageId: E, oldestUnreadMessageIdStale: v, estimated: I, _unreadCount: T, _mentionCount: b, flags: y, lastViewed: S } = e;
        (this.channelId = n), (this.type = null != r ? r : ef.W.CHANNEL), (this._guildId = i), (this._isThread = null != a && a), null != s ? ((this._isActiveThread = s), (this._isJoinedThread = s)) : ((this._isActiveThread = null != o && o), (this._isJoinedThread = null != l && l)), (this._persisted = !1 !== u), (this.loadedMessages = null != c && c), (this._lastMessageId = d), (this._lastMessageTimestamp = f), (this._ackMessageId = _), (this._ackMessageTimestamp = h), (this.ackPinTimestamp = p), (this.isManualAck = null != m && m), (this.lastPinTimestamp = g), (this._oldestUnreadMessageId = E), (this.oldestUnreadMessageIdStale = null != v && v), (this.estimated = null != I && I), (this._unreadCount = null != T ? T : 0), (this._mentionCount = b), (this.flags = y), (this.lastViewed = S), eV._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eV._mentionChannels.add(this.channelId);
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
        (this._lastMessageId = e), (this._lastMessageTimestamp = null != e ? K.default.extractTimestamp(e) : 0);
    }
    get lastMessageTimestamp() {
        return this._lastMessageTimestamp;
    }
    get ackMessageId() {
        return this._ackMessageId;
    }
    set ackMessageId(e) {
        (this._ackMessageId = e), (this._ackMessageTimestamp = null != e ? K.default.extractTimestamp(e) : 0);
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
        let e = et.Z.getMessages(this.channelId);
        if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
        if (!this.hasMentions()) return this.lastMessageId;
        let n = null,
            r = this.mentionCount,
            i = es.default.getCurrentUser();
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
        let e = Q.Z.getChannel(this.channelId);
        return (this._guildId = null != e ? e.getGuildId() : null);
    }
    isPrivate() {
        if (this.type !== ef.W.CHANNEL) return !1;
        let e = Q.Z.getChannel(this.channelId);
        return null != e && e.isPrivate();
    }
    rebuildChannelState(e) {
        var n, r;
        let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = arguments.length > 2 ? arguments[2] : void 0;
        if (((this.ackMessageId = null !== (n = null != e ? e : this._ackMessageId) && void 0 !== n ? n : this.guessAckMessageId()), (this.isManualAck = null != e), (this.oldestUnreadMessageId = null), (this.estimated = !1), (this.unreadCount = 0), i && (this.mentionCount = 0), this.hasUnread())) {
            let e = es.default.getCurrentUser(),
                n = this.getAckTimestamp(),
                a = !1,
                s = !1,
                o = null,
                l = et.Z.getMessages(this.channelId);
            l.forAll((r) => {
                if (a) {
                    var l;
                    this.oldestUnreadMessageId = null !== (l = this._oldestUnreadMessageId) && void 0 !== l ? l : r.id;
                } else a = r.id === this._ackMessageId;
                K.default.extractTimestamp(r.id) > n ? (this.unreadCount++, i && ek(r, e) && this.mentionCount++, (o = null != o ? o : r.id)) : (s = !0);
            }),
                (this.estimated = !l.hasPresent() || (!(a || s) && l.length === this.unreadCount)),
                (this.oldestUnreadMessageId = null !== (r = this._oldestUnreadMessageId) && void 0 !== r ? r : o);
        }
        null != a && (this.mentionCount = a);
    }
    handleGuildEventRemoval(e, n) {
        var r;
        if (K.default.compare(this.ackMessageId, n) >= 0) return;
        let i = C.ZP.getGuildScheduledEventsForGuild(e),
            a = this.getAckTimestamp();
        if (isNaN(a)) return;
        let s = null !== (r = this._ackMessageId) && void 0 !== r ? r : K.default.fromTimestamp(a),
            o = null,
            l = 0;
        i.forEach((e) => {
            (0, C.Ld)(e) && (K.default.compare(e.id, o) > 0 && (o = e.id), K.default.compare(e.id, s) > 0 && l++);
        }),
            (this.lastMessageId = o),
            (this.mentionCount = l);
    }
    canTrackUnreads() {
        if (this.type !== ef.W.CHANNEL) return !0;
        if ((this._isThread && !this._isActiveThread) || this._isResourceChannel) return !1;
        let e = Q.Z.getBasicChannel(this.channelId);
        return null != e && ('basicPermissions' in e ? V.Z.has(e.basicPermissions, el.S7T.VIEW_CHANNEL) : !S.Z.isChannelGated(this.guildId, this.channelId) || en.Z.can(el.Plq.VIEW_CHANNEL, e));
    }
    canBeUnread() {
        return !((this._isThread && !this._isJoinedThread) || (0, D.h3)(this.channelId, [O.Z, L.Z]) || (!this._isThread && (0, P.r1)(this._guildId) && (this._lastMessageTimestamp < eD || (!ea.ZP.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())))) && this.canTrackUnreads();
    }
    canHaveMentions() {
        return !(0 === this.mentionCount || (this._isThread && !this._isJoinedThread) || (0, D.h3)(this.channelId, [O.Z, L.Z]) || ((0, P.r1)(this._guildId) && this._lastMessageTimestamp < eD)) && this.canTrackUnreads();
    }
    getGuildChannelUnreadState(e, n, r, i, a) {
        if (n && (this._lastMessageTimestamp < eD || (!ea.ZP.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0)))
            return {
                mentionCount: 0,
                unread: !1,
                isMentionLowImportance: !1
            };
        if ('basicPermissions' in e) {
            if (!V.Z.has(e.basicPermissions, el.S7T.VIEW_CHANNEL))
                return {
                    mentionCount: 0,
                    unread: !1,
                    isMentionLowImportance: !1
                };
        } else if (S.Z.isChannelGated(this.guildId, this.channelId) && !en.Z.can(el.Plq.VIEW_CHANNEL, e))
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
        return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > eL && Z.Z.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp();
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
        if (this.type !== ef.W.CHANNEL || !this.canTrackUnreads()) return !1;
        if (null == e) {
            if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
            (this._persisted = !0),
                eZ(() =>
                    g.tn.post({
                        url: el.ANM.PINS_ACK(this.channelId),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                );
        }
        let n = eP(e);
        return (this.ackPinTimestamp = 0 !== n ? n : this.lastPinTimestamp), !0;
    }
    ack(e) {
        let { messageId: n, local: r = !1, immediate: i = !1, force: a = !1, isExplicitUserAction: s = !1, location: o = { section: el.jXE.CHANNEL }, trackAnalytics: l = !0 } = e;
        if (!this._shouldAck(a, r, s) || (!a && !this.canTrackUnreads())) return !1;
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
                ey && (this.ackedWhileCached = !0),
                e4(this.channelId),
                r
                    ? (this.oldestUnreadMessageId = null)
                    : (null == this.outgoingAck &&
                          (this.outgoingAckTimer = setTimeout(
                              () => {
                                  this.type === ef.W.CHANNEL ? this._ack(o, l) : this._nonChannelAck(), (this.outgoingAck = null), (this.outgoingAckTimer = null);
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
        return !!e || !!r || !!n || !!(!this.isManualAck && (this.type !== ef.W.CHANNEL || this.loadedMessages || (null === (i = Q.Z.getChannel(this.channelId)) || void 0 === i ? void 0 : i.isForumLikeChannel()))) || !1;
    }
    _ack(e, n) {
        let { outgoingAck: i } = this;
        if (null == i) return;
        let a = z.default.getId(),
            s = eb;
        this._persisted = !0;
        let o = this.recalculateFlags(),
            l = o === this.flags ? void 0 : o;
        eZ(() =>
            g.tn.post({
                url: el.ANM.MESSAGE_ACK(this.channelId, i),
                body: {
                    token: eb,
                    last_viewed: this.lastViewed,
                    flags: l
                },
                oldFormErrors: !0,
                rejectWithError: !0
            })
        ).then((e) => {
            null != e &&
                (eb === s && a === z.default.getId() && (eb = e.body.token),
                I.Z.dispatch({ type: 'MESSAGE_ACKED' }),
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
        if (this.type !== ef.W.CHANNEL) return;
        let e = Q.Z.getChannel(this.channelId);
        if (null != e) return e.isThread() ? 2 : null != e.guild_id ? 1 : 0;
    }
    _nonChannelAck() {
        let e;
        let { outgoingAck: n, channelId: r, type: i } = this;
        if (null != n) {
            switch (i) {
                case ef.W.GUILD_HOME:
                case ef.W.GUILD_EVENT:
                case ef.W.GUILD_ONBOARDING_QUESTION:
                    e = el.ANM.GUILD_FEATURE_ACK(r, n, i);
                    break;
                case ef.W.NOTIFICATION_CENTER:
                case ef.W.MESSAGE_REQUESTS:
                    e = el.ANM.USER_NON_CHANNEL_ACK(n, i);
                    break;
                default:
                    return;
            }
            (this._persisted = !0),
                eZ(() =>
                    g.tn.post({
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
            r = Q.Z.getBasicChannel(this.channelId);
        ep.log('Deleting ReadState', this.channelId, this.type, {
            remote: n,
            persisted: this._persisted,
            channelMissing: null == r,
            isOld: e1(this, eO()),
            validType: null != r && F.AW.has(r.type),
            readableType: null != r && (0, F.Em)(r.type),
            oldThreadCutoff: eO(),
            mentionCount: this.mentionCount,
            channelId: this.channelId,
            ackMessageId: this._ackMessageId,
            lastMessageId: this._lastMessageId
        }),
            n &&
                this._persisted &&
                g.tn.del({
                    url: el.ANM.CHANNEL_ACK(this.channelId),
                    body: {
                        version: em,
                        read_state_type: this.type
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0
                }),
            null === (e = eV._readStates[this.type]) || void 0 === e || delete e[this.channelId],
            eV._mentionChannels.delete(this.channelId);
    }
    shouldDeleteReadState(e) {
        if (0 !== J.Z.totalUnavailableGuilds) return !1;
        if (null != this.type && this.type !== ef.W.CHANNEL) return !e2(this);
        let n = Q.Z.getBasicChannel(this.channelId);
        if (null == n) return !!e1(this, e) || !1;
        return !!F.AW.has(n.type) && (!(0, F.Em)(n.type) || (!(0, F.hv)(n.type) && (!!(F.Ec.has(n.type) && e0(this, n, e)) || (!!(this.mentionCount > 0) && !en.Z.canBasicChannel(eg, n)) || !1)));
    }
    getAckTimestamp() {
        let e, n;
        if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
        if (this._isThread) return (this._ackMessageTimestamp = eJ(this.guildId, this.channelId)), (this._ackMessageId = K.default.fromTimestamp(this._ackMessageTimestamp)), this._ackMessageTimestamp;
        if (this.type === ef.W.GUILD_EVENT || this.type === ef.W.GUILD_ONBOARDING_QUESTION) e = $.Z.getGuild(this.channelId);
        else if ((0, ec.AB)(this.channelId)) e = $.Z.getGuild(this.guildId);
        else {
            let n = Q.Z.getChannel(this.channelId);
            if (null != n) {
                let r = n.getGuildId();
                e = $.Z.getGuild(r);
            }
        }
        return null != e ? isNaN((n = e$(e))) && (n = K.default.extractTimestamp(this.channelId)) : (n = K.default.extractTimestamp(this.channelId)), (this._ackMessageTimestamp = n), n;
    }
    get oldestUnreadTimestamp() {
        return null != this.oldestUnreadMessageId ? K.default.extractTimestamp(this.oldestUnreadMessageId) : 0;
    }
    syncThreadSettings() {
        this._isThread = !0;
        let e = Q.Z.getChannel(this.channelId);
        if (null == e) return ep.warn('syncThreadSettings called with channel not in memory '.concat(this.channelId)), !1;
        let n = this.guildId,
            r = null != n && k.Z.isActive(n, e.parent_id, this.channelId),
            i = U.Z.hasJoined(this.channelId);
        return (this._isActiveThread !== r || this._isJoinedThread !== i) && ((this._isActiveThread = r), (this._isJoinedThread = i), !0);
    }
    recordLastViewedTime() {
        let e = Math.ceil((Date.now() - K.DISCORD_EPOCH) / j.Z.Millis.DAY);
        e !== this.lastViewed &&
            ((this.lastViewed = e),
            this.canTrackUnreads() &&
                !this.hasUnread() &&
                this.ack({
                    force: !0,
                    trackAnalytics: !1
                }));
    }
    constructor(e, n = ef.W.CHANNEL) {
        eh(this, 'channelId', void 0), eh(this, 'type', ef.W.CHANNEL), eh(this, '_guildId', void 0), eh(this, '_isThread', void 0), eh(this, '_isActiveThread', void 0), eh(this, '_isJoinedThread', void 0), eh(this, '_isResourceChannel', void 0), eh(this, '_persisted', void 0), eh(this, 'loadedMessages', void 0), eh(this, '_lastMessageId', void 0), eh(this, '_lastMessageTimestamp', void 0), eh(this, '_ackMessageId', void 0), eh(this, '_ackMessageTimestamp', void 0), eh(this, 'isManualAck', void 0), eh(this, 'ackPinTimestamp', void 0), eh(this, 'lastPinTimestamp', void 0), eh(this, '_oldestUnreadMessageId', void 0), eh(this, 'oldestUnreadMessageIdStale', void 0), eh(this, 'estimated', void 0), eh(this, '_unreadCount', void 0), eh(this, '_mentionCount', void 0), eh(this, 'flags', void 0), eh(this, 'lastViewed', void 0), eh(this, 'outgoingAck', void 0), eh(this, 'outgoingAckTimer', null), eh(this, 'ackMessageIdAtChannelSelect', null), eh(this, 'ackedWhileCached', void 0), eh(this, 'snapshot', void 0), (this.channelId = e), (this.type = n), (this._guildId = null), (this._isThread = !1), (this._isActiveThread = !1), (this._isJoinedThread = !1), (this._isResourceChannel = !1), (this._persisted = !1), (this.loadedMessages = !1), (this._lastMessageId = null), (this._lastMessageTimestamp = 0), (this._ackMessageId = null), (this._ackMessageTimestamp = 0), (this.isManualAck = !1), (this.ackPinTimestamp = 0), (this.lastPinTimestamp = 0), (this._oldestUnreadMessageId = null), (this.oldestUnreadMessageIdStale = !1), (this.estimated = !1), (this._unreadCount = 0), (this._mentionCount = 0), (this.outgoingAck = null);
    }
}
function ej(e) {
    e.forEach((e) => {
        if ((0, F.Em)(e.type)) {
            let n = eV.get(e.id);
            (n._guildId = e.guild_id), (n.lastMessageId = e.lastMessageId), (n.lastPinTimestamp = eP(e.lastPinTimestamp)), (n._isResourceChannel = e.hasFlag(ec.zZ.IS_GUILD_RESOURCE_CHANNEL)), F.Ec.has(e.type) && n.syncThreadSettings();
        }
    });
}
function eH(e) {
    e.forEach((e) => {
        if ((0, F.Em)(e.type)) {
            var n;
            let r = eV.get(e.id);
            (r.lastMessageId = e.last_message_id), (r.lastPinTimestamp = eP(e.last_pin_timestamp)), (r._isResourceChannel = (0, H.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, ec.zZ.IS_GUILD_RESOURCE_CHANNEL)), F.Ec.has(e.type) && r.syncThreadSettings();
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
    let n = es.default.getCurrentUser();
    if (null == n) return !1;
    let r = eV.get(n.id, ef.W.NOTIFICATION_CENTER);
    e.forEach((e) => {
        if (null == e.since || e.type !== el.OGo.PENDING_INCOMING) return;
        let n = new Date(e.since).getTime();
        (null != r.ackMessageId ? K.default.extractTimestamp(r.ackMessageId) : 0) < n && (r.mentionCount++, (r.lastMessageId = K.default.fromTimestamp(n)));
    });
}
function ez(e) {
    let n = 24;
    eV.get(e.id, ef.W.GUILD_HOME).lastMessageId = K.default.fromTimestamp(p()(Date.now()).subtract(n, 'h').valueOf());
}
function eq(e) {
    var n;
    null === (n = e.threads) ||
        void 0 === n ||
        n.forEach((n) => {
            if (!F.AW.has(n.type)) return;
            let r = eV.get(n.id);
            (r.lastMessageId = n.lastMessageId), (r.lastPinTimestamp = eP(n.lastPinTimestamp)), (r._isThread = !0), (r._isActiveThread = !0), (r._isJoinedThread = null != n.member), null == r.ackMessageId && (r.ackMessageId = K.default.fromTimestamp(eJ(e.id, n.id))), null == r.ackPinTimestamp && (r.ackPinTimestamp = eJ(e.id, n.id));
        });
}
function eQ(e) {
    var n, r;
    if ((null === (n = e.guild_scheduled_events) || void 0 === n ? void 0 : n.length) === 0 && null == eV.getIfExists(e.id, ef.W.GUILD_EVENT)) return;
    let i = eV.get(e.id, ef.W.GUILD_EVENT);
    i._guildId = e.id;
    let a = 0,
        s = null,
        o = null !== (r = i._ackMessageId) && void 0 !== r ? r : K.default.fromTimestamp(i.getAckTimestamp());
    e.guild_scheduled_events.forEach((e) => {
        K.default.compare(e.id, s) > 0 && (s = e.id), K.default.compare(e.id, o) > 0 && a++;
    }),
        (i.lastMessageId = s),
        (i.mentionCount = a);
}
function eX(e) {
    let n = $.Z.getGuild(e.id);
    if (null == n) return;
    let r = null == n ? void 0 : n.latestOnboardingQuestionId;
    if (null == r) return;
    let i = eV.get(n.id, ef.W.GUILD_ONBOARDING_QUESTION);
    (i._guildId = n.id), (i.lastMessageId = r);
}
function eJ(e, n) {
    var r, i, a;
    let s = Q.Z.getChannel(n),
        o = $.Z.getGuild(null != e ? e : null == s ? void 0 : s.guild_id),
        l = (null == s ? void 0 : s.isForumPost()) ? 0 : e$(o),
        u = (null !== (a = null === (r = U.Z.joinTimestamp(n)) || void 0 === r ? void 0 : r.getTime()) && void 0 !== a ? a : 0) - 5000;
    isNaN(u) && (u = -5000);
    let c = null == s ? void 0 : null === (i = s.threadMetadata) || void 0 === i ? void 0 : i.archiveTimestamp,
        d = null != c ? new Date(c).getTime() - 1 : 0;
    isNaN(d) && (d = 0);
    let f = Math.max(u, d);
    return f <= 0 && (f = K.default.extractTimestamp(n) - 1), (isNaN(f) || f <= 0) && (f = 0), isNaN(l) ? f : Math.max(l, f);
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
    return !(null != i && k.Z.isActive(i, n.parent_id, e.channelId)) && e1(e, r);
}
function e1(e, n) {
    return !!(e.mentionCount > 0) || (!(K.default.compare(e.channelId, n) > 0 || (null != e._ackMessageId && K.default.compare(e._ackMessageId, n) > 0) || (null != e._lastMessageId && K.default.compare(e._lastMessageId, n) > 0)) && !0);
}
function e2(e) {
    switch (e.type) {
        case ef.W.GUILD_HOME:
        case ef.W.GUILD_EVENT:
        case ef.W.GUILD_ONBOARDING_QUESTION:
            return null != $.Z.getGuild(e.channelId);
        case ef.W.NOTIFICATION_CENTER:
            var n;
            return K.default.cast(null === (n = es.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.channelId;
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
    if (n.type !== ef.W.CHANNEL) return;
    let r = Q.Z.getChannel(n.channelId);
    if (null == r || !r.isForumPost() || null == r.parent_id) return;
    let i = r.parent_id,
        a = eV.get(i);
    k.Z.hasLoaded(r.guild_id) && K.default.keys(k.Z.getThreadsForParent(r.guild_id, i)).every((e) => t6.hasOpenedThread(e) || 0 > K.default.compare(e, a.ackMessageId)) && a.ack({});
}
function e6(e) {
    var n, r;
    let { guilds: i, relationships: a, initialPrivateChannels: s, readState: o } = e;
    ew(),
        (eb = null),
        !ey && !o.partial && eV.clearAll(),
        (ey = !1),
        o.entries.forEach((e) => {
            var n, r;
            let i = null !== (n = e.read_state_type) && void 0 !== n ? n : ef.W.CHANNEL;
            i !== ef.W.CHANNEL && (e = eM(e));
            let a = eV.get(e.id, i);
            (a._persisted = !0), (a._mentionCount = null !== (r = e.mention_count) && void 0 !== r ? r : 0), (a.flags = e.flags), (a.lastViewed = e.last_viewed);
            let s = Q.Z.getBasicChannel(e.id);
            null != s && (0, F.Q5)(s.type) && (null == e.last_message_id || 0 === e.last_message_id) ? (a.ackMessageId = K.default.fromTimestamp(eJ(s.guild_id, s.id))) : a.ackedWhileCached ? -1 === K.default.compare(a.ackMessageId, e.last_message_id) && (a.ackMessageId = e.last_message_id) : (a.ackMessageId = e.last_message_id), (a.ackedWhileCached = void 0), (a.ackPinTimestamp = eP(e.last_pin_timestamp)), eV._mentionChannels.delete(a.channelId), a._mentionCount > 0 && a.canHaveMentions() && eV._mentionChannels.add(a.channelId);
        }),
        eV.resetGuildSentinels();
    let l = null === (n = es.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    for (let e of (null != l && (eV.get(l, ef.W.NOTIFICATION_CENTER).lastMessageId = K.default.fromTimestamp(Date.now())), eW(a), ej(s), i)) ej(null !== (r = e.channels) && void 0 !== r ? r : []), e9(e), eY(e);
    e5(), (eN = setTimeout(() => e8(o.entries), 10 * j.Z.Millis.SECOND));
}
function e5() {
    null != eN && clearTimeout(eN);
}
eh(eV, '_guildReadStateSentinels', {}), eh(eV, '_readStates', {}), eh(eV, '_mentionChannels', new Set());
let e7 = (0, _.throttle)((e) => {
    e.delete();
}, 100);
function e8(e) {
    let n = eO();
    for (let i of e) {
        var r;
        let e = null !== (r = i.read_state_type) && void 0 !== r ? r : ef.W.CHANNEL,
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
            null != n.last_message_id && (e.lastMessageId = n.last_message_id), null != n.last_pin_timestamp && (e.lastPinTimestamp = eP(n.last_pin_timestamp));
        }
}
function te(e) {
    let { lazyPrivateChannels: n } = e;
    ej(n);
}
function tt(e) {
    let { readStates: n, selectedChannelId: r } = e;
    ew(),
        (eb = null),
        (eI = r),
        (eT = q.ZP.getCurrentSidebarChannelId(eI)),
        eV.clearAll(),
        n.forEach((e) => {
            let n = eV.get(e.channelId);
            n.deserializeForOverlay(e), n.type === ef.W.CHANNEL && n.rebuildChannelState();
        });
}
function tn(e) {
    var n;
    let { guild: r } = e,
        i = eO();
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
    let s = et.Z.getMessages(n);
    null != s && (i.length > 0 && 1 === K.default.compare(i[0].id, a.ackMessageId) && 0 === a.unreadCount ? a.rebuildChannelState() : s.hasPresent() || s.jumpTargetId === a.ackMessageId ? a.rebuildChannelState() : r && null != a.ackMessageId && s.has(a.ackMessageId, !0) && ((a.unreadCount += i.length), null == a.oldestUnreadMessageId && a.rebuildChannelState())), eH(i.map((e) => e.thread).filter(Y.lm));
}
function ti(e) {
    let { channelId: n } = e;
    eV.get(n).rebuildChannelState();
}
function ta(e) {
    let n,
        r,
        { channelId: a, message: s, isPushNotification: o } = e,
        l = eV.get(a),
        u = l.hasUnread(),
        c = null != l.lastMessageId && l.lastMessageId >= s.id;
    l.lastMessageId = s.id;
    let d = es.default.getCurrentUser(),
        f = Q.Z.getBasicChannel(a);
    if (null != s.author && null != d && s.author.id === d.id && !el.V$x.SELF_MENTIONABLE_SYSTEM.has(s.type))
        return (
            null != l.outgoingAck && l.clearOutgoingAck(),
            tG({
                channelId: a,
                messageId: s.id,
                manual: !1
            })
        );
    let _ = (0, R.D)();
    if ((null == _ ? void 0 : _.isReady()) === !0) {
        let e = _.getCurrentRoute();
        if (b.Z.getChatOpen(l.channelId)) n = l.channelId;
        else if ((null == e ? void 0 : e.name) === 'channel') n = e.params.channelId;
        else if ((null == e ? void 0 : e.name) === 'guilds') {
            var h;
            n = null === (h = e.params) || void 0 === h ? void 0 : h.channelId;
        }
    } else null == _ && ((n = ei.Z.getChannelId()), (r = q.ZP.getCurrentSidebarChannelId(n)));
    let p = n === a || r === a;
    if ((p && eF(l) && !o) || (null != i && i.isInstanceFocused() && p && i.isInstanceLocked() && i.isPinned(el.Odu.TEXT))) return l.ack({ messageId: s.id });
    if ((null == l.oldestUnreadMessageId || l.oldestUnreadMessageIdStale ? (l.oldestUnreadMessageId = s.id) : !u && (0, M.nV)() !== a && (l.oldestUnreadMessageId = s.id), !c && l.unreadCount++, !(er.Z.isBlockedOrIgnoredForMessage(s) || (s.type === el.uaV.RECIPIENT_REMOVE && (null == f ? void 0 : f.type) === el.d4z.GROUP_DM)))) {
        let { shouldMention: e, isMentionLowImportance: n } = ts(s, d, l);
        e && ((l.isMentionLowImportance = n), l.mentionCount++);
    }
}
function ts(e, n, r) {
    if (
        null != n &&
        (0, x.Hl)({
            rawMessage: e,
            userId: n.id,
            suppressEveryone: ea.ZP.isSuppressEveryoneEnabled(r.guildId),
            suppressRoles: ea.ZP.isSuppressRolesEnabled(r.guildId)
        })
    )
        return {
            shouldMention: !0,
            isMentionLowImportance: !1
        };
    let i = Q.Z.getChannel(e.channel_id);
    if (eU(i))
        return {
            shouldMention: !0,
            isMentionLowImportance: !1
        };
    if (ea.ZP.mentionOnAllMessages && null != i) {
        if (i.isThread()) {
            if ((0, G.J)(i) === e_.iN.ALL_MESSAGES)
                return {
                    shouldMention: !0,
                    isMentionLowImportance: !0
                };
        } else if (!i.isVocal() && !ea.ZP.isChannelMuted(i.guild_id, i.id) && ea.ZP.resolvedMessageNotifications(i) === el.bL.ALL_MESSAGES)
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
function to(e) {
    let { channel: n } = e;
    if (!(0, F.Em)(n.type)) return !1;
    let r = eV.get(n.id);
    (r.lastMessageId = n.lastMessageId), (r.lastPinTimestamp = eP(n.lastPinTimestamp));
}
function tl(e) {
    let { channel: n } = e;
    tu(n), tc(n);
}
function tu(e) {
    if (!F.AW.has(e.type)) return !1;
    let n = eV.get(e.id);
    (n.lastMessageId = e.lastMessageId), (n.lastPinTimestamp = eP(e.lastPinTimestamp)), n.syncThreadSettings(), e.ownerId === z.default.getId() && (n.loadedMessages = !0);
}
function tc(e) {
    let n = e.parent_id;
    eV.get(n).lastMessageId = e.id;
    let r = es.default.getCurrentUser();
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
    return !!F.AW.has(n.type) && eV.get(n.id).syncThreadSettings();
}
function tf(e) {
    let { id: n } = e;
    return eV.get(n).syncThreadSettings();
}
function t_(e) {
    return (0, B.s)(e) && eV.get(e.id).syncThreadSettings();
}
function th(e) {
    let { threads: n } = e;
    n.forEach((e) => {
        if (!F.AW.has(e.type)) return;
        let n = eV.get(e.id);
        if (((n.lastMessageId = e.lastMessageId), (n.lastPinTimestamp = eP(e.lastPinTimestamp)), (n._isThread = !0), (n._isActiveThread = !0), (n._isJoinedThread = U.Z.hasJoined(e.id)), e.isForumPost())) {
            let n = eV.get(e.parent_id);
            0 > K.default.compare(n.lastMessageId, e.id) && (n.lastMessageId = e.id);
        }
    });
}
function tp(e) {
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
                .filter(Y.lm)
        );
    eH(r);
}
function tE(e) {
    let n = es.default.getCurrentUser();
    return null != e.creator_id && null != n && e.creator_id === n.id;
}
function tv(e) {
    let { guildScheduledEvent: n } = e,
        r = n.guild_id,
        i = eV.get(n.guild_id, ef.W.GUILD_EVENT);
    if (((i.lastMessageId = n.id), tE(n))) {
        tF({
            type: 'GUILD_FEATURE_ACK',
            id: r,
            ackType: ef.W.GUILD_EVENT,
            ackedId: n.id,
            local: !1
        });
        return;
    }
    !ea.ZP.isMuteScheduledEventsEnabled(r) && i.mentionCount++;
}
function tI(e) {
    let { guildScheduledEvent: n } = e,
        r = n.guild_id;
    if (tE(n) || ![ed.p1.CANCELED, ed.p1.COMPLETED].includes(n.status)) return !1;
    eV.get(r, ef.W.GUILD_EVENT).handleGuildEventRemoval(r, n.id);
}
function tT(e) {
    let { guildScheduledEvent: n } = e,
        r = n.guild_id;
    if (tE(n)) return !1;
    eV.get(n.guild_id, ef.W.GUILD_EVENT).handleGuildEventRemoval(r, n.id);
}
function tb(e) {
    let n = es.default.getCurrentUser();
    if (null == n || null == e.relationship.since || (e.relationship.type !== el.OGo.PENDING_INCOMING && e.relationship.type !== el.OGo.FRIEND)) return !1;
    let r = eV.get(n.id, ef.W.NOTIFICATION_CENTER),
        i = e.relationship.type === el.OGo.FRIEND,
        a = i ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime();
    (null != r.ackMessageId ? K.default.extractTimestamp(r.ackMessageId) : 0) < a && ((r.lastMessageId = K.default.fromTimestamp(a)), w.Z.active ? tj(n.id, ef.W.NOTIFICATION_CENTER, void 0, !1) : i ? r.mentionCount-- : r.mentionCount++);
}
function ty(e) {
    let n = es.default.getCurrentUser();
    if (null == n || null == e.relationship.since || e.relationship.type !== el.OGo.PENDING_INCOMING) return !1;
    let r = eV.get(n.id, ef.W.NOTIFICATION_CENTER),
        i = new Date(e.relationship.since).getTime();
    (null != r.ackMessageId ? K.default.extractTimestamp(r.ackMessageId) : 0) <= i && (r.mentionCount = Math.max(0, r.mentionCount - 1));
}
function tS(e) {
    var n;
    let { item: r } = e,
        i = null === (n = es.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null == i) return !1;
    let a = eV.get(i, ef.W.NOTIFICATION_CENTER);
    if (((a.lastMessageId = r.id), w.Z.active)) {
        tj(i, ef.W.NOTIFICATION_CENTER, r.id, !1);
        return;
    }
    a.mentionCount++;
}
function tA(e) {
    var n;
    let { ids: r, optimistic: i } = e;
    if (i || w.Z.active) return !1;
    let a = null === (n = es.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null == a) return !1;
    let s = eV.get(a, ef.W.NOTIFICATION_CENTER);
    r.forEach((e) => {
        0 > K.default.compare(s.ackMessageId, e) && (s.mentionCount = Math.max(s.mentionCount - 1, 0));
    });
}
function tN(e) {
    let { guild: n } = e;
    return eV.clear(n.id, ef.W.GUILD_EVENT);
}
function tC(e) {
    let { guild: n } = e,
        r = n.latest_onboarding_question_id;
    if (null == r) return;
    let i = eV.get(n.id, ef.W.GUILD_ONBOARDING_QUESTION);
    (i._guildId = n.id), (i.lastMessageId = r);
}
function tR(e) {
    let { channel: n } = e;
    return eV.clear(n.id);
}
function tO(e) {
    let { channelId: n } = e,
        r = q.ZP.getCurrentSidebarChannelId(n),
        i = Q.Z.getChannel(n);
    if (null != i) {
        var a;
        let e = eV.get(i.id);
        (e.ackMessageIdAtChannelSelect = null !== (a = e.ackMessageId) && void 0 !== a ? a : K.default.fromTimestamp(e.getAckTimestamp())), e.recordLastViewedTime();
    }
    tx(eI), tx(eT);
    let s = !1;
    return eI !== n && ((s = tw(eI) || s), (s = tw(eT) || s)), (eI === n || ((null == i ? void 0 : i.type) != null && el.TPd.GUILD_THREADS_ONLY.has(i.type))) && (s = e3(n) || s), eI === n && (s = e3(r) || s), (eI = n), (eT = r), s;
}
function tD() {
    let e = q.ZP.getCurrentSidebarChannelId(eI),
        n = !1;
    return eT !== e ? ((n = tw(eT)), (eT = e)) : (n = e3(e) || n), n;
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
    for (let [r, i] of K.default.entries(eC)) i === e.windowId && (n = tM(r, e.focused) || n);
    return n;
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
    let { channelId: n, messageId: r, immediate: i = !1, force: a = !1, context: s, location: o } = e,
        l = eV.get(n),
        u = l.ack({
            messageId: r,
            local: s !== el.e3s,
            immediate: i,
            force: a,
            isExplicitUserAction: !0,
            location: o
        });
    return null != r ? (l.rebuildChannelState(), !0) : u;
}
function tB(e) {
    let { channelId: n, timestamp: r } = e;
    return eV.get(n).ackPins(r);
}
function tG(e) {
    let { channelId: n, messageId: r, manual: i, newMentionCount: a } = e,
        s = eV.get(n);
    return i
        ? (s.rebuildChannelState(r, !0, a), s.clearOutgoingAck(), !0)
        : r !== s._ackMessageId &&
              s.ack({
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
        s = null === (n = es.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    return null != s && tj(s, r, i, a);
}
function tj(e, n, r, i) {
    var a;
    let s = eV.get(e, n);
    return (
        r !== s.ackMessageId &&
        s.lastMessageId !== s.ackMessageId &&
        (null != s.lastMessageId || 0 !== s.mentionCount) &&
        ((r = null !== (a = null != r ? r : s.lastMessageId) && void 0 !== a ? a : K.default.fromTimestamp(s.getAckTimestamp())),
        s.ack({
            messageId: r,
            local: null == i || i
        }))
    );
}
function tH(e) {
    let { channelId: n, lastPinTimestamp: r } = e,
        i = eV.get(n),
        a = eP(r);
    return i.lastPinTimestamp !== a && ((i.lastPinTimestamp = a), !0);
}
function tY(e) {
    let n = !1;
    for (let r of e.channels) {
        let e = eV.get(r.id),
            i = eP(r.lastPinTimestamp);
        (e.lastMessageId !== r.lastMessageId || e.lastPinTimestamp !== i) && ((n = !0), (e.lastMessageId = r.lastMessageId), (e.lastPinTimestamp = i));
    }
    return n;
}
function tW() {
    eb = null;
}
function tK(e) {
    let { readStates: n } = e;
    (ey = !0),
        ew(),
        n.forEach((e) => {
            var n;
            let r = null !== (n = e.type) && void 0 !== n ? n : ef.W.CHANNEL;
            (e.type = r), null == eV._readStates[r] && (eV._readStates[r] = {}), (eV._readStates[r][e.channelId] = (0, v.gh)(e, eV));
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
        n === el.e3s &&
            (eS.push(
                ...e.map((e) => ({
                    channel_id: e.channelId,
                    message_id: e.messageId,
                    read_state_type: e.readStateType
                }))
            ),
            !eA && eB(r));
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
    return eC[n] !== r && (f()(void 0 === eC[n], 'handleEnableAutomaticAck: channel already visible in another window'), (eC[n] = r), e3(n));
}
function tJ(e) {
    let { channelId: n } = e;
    return (eC[n] = void 0), !1;
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
            s = eV.getIfExists(e);
        if (null != s) for (let e of [null === (r = a.new_messages) || void 0 === r ? void 0 : r[0]].concat(null !== (i = a.modified_messages) && void 0 !== i ? i : []).filter(Y.lm)) 1 === K.default.compare(e.id, s.lastMessageId) && (s.lastMessageId = e.id);
    }
}
function t2(e) {
    var n;
    let { ackedId: r } = e,
        i = null === (n = es.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null == i) return !1;
    let a = eV.get(i, ef.W.MESSAGE_REQUESTS);
    if (r === a.ackMessageId) return !1;
    (a.ackMessageId = r),
        a.ack({
            messageId: r,
            isExplicitUserAction: !0
        });
}
function t3(e) {
    var n;
    let r = null === (n = es.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null == r) return !1;
    let i = eV.get(r, ef.W.MESSAGE_REQUESTS);
    if (null == i.ackMessageId) return !1;
    i.ackMessageId = void 0;
}
class t4 extends (s = m.ZP.Store) {
    initialize() {
        let e = [X.Z, es.default, $.Z, J.Z, Q.Z, ei.Z, et.Z, en.Z, b.Z, k.Z, U.Z, q.ZP, C.ZP, N.Z, S.Z, ea.ZP, eo.Z, w.Z, O.Z, Z.Z, L.Z];
        this.waitFor(...e), this.syncWith([q.ZP], tD);
    }
    getReadStatesByChannel() {
        var e;
        return null !== (e = eV._readStates[ef.W.CHANNEL]) && void 0 !== e ? e : {};
    }
    getForDebugging(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL;
        return eV.getIfExists(e, n);
    }
    getNotifCenterReadState(e) {
        var n;
        return null === (n = eV._readStates[ef.W.NOTIFICATION_CENTER]) || void 0 === n ? void 0 : n[e];
    }
    hasUnread(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL;
        return eV.getValue(e, n, (e) => e.canBeUnread() && e.hasUnread(), !1);
    }
    hasUnreadOrMentions(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL;
        return eV.getValue(e, n, (e) => e.canBeUnread() && e.hasUnreadOrMentions(), !1);
    }
    hasTrackedUnread(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL;
        return eV.getValue(e, n, (e) => e.canTrackUnreads() && e.hasUnread(), !1);
    }
    isForumPostUnread(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL;
        return eV.getValue(e, n, (e) => e.isForumPostUnread(), !1);
    }
    getUnreadCount(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL;
        return eV.getValue(e, n, (e) => (e.canBeUnread() ? e.unreadCount : 0), 0);
    }
    getMentionCount(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL,
            r = eV.getValue(e, n, (e) => (e.canHaveMentions() ? e.getMentionCount() : 0), 0);
        if ((0, y.Z)(e)) {
            if (r > 0) return 1;
        }
        return r;
    }
    getIsMentionLowImportance(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL;
        return n === ef.W.CHANNEL && eV.getValue(e, n, (e) => e.isMentionLowImportance, !1);
    }
    getGuildChannelUnreadState(e, n, r, i, a) {
        return eV.getValue(e.id, ef.W.CHANNEL, (s) => s.getGuildChannelUnreadState(e, n, r, i, a), {
            mentionCount: 0,
            unread: !1,
            isMentionLowImportance: !1
        });
    }
    hasRecentlyVisitedAndRead(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL;
        return eV.getValue(e, n, (e) => e.hasRecentlyVisitedAndRead(), !1);
    }
    ackMessageId(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL;
        return eV.getValue(e, n, (e) => (e.canBeUnread() ? e.ackMessageId : null), null);
    }
    getTrackedAckMessageId(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL;
        return eV.getValue(e, n, (e) => (e.canTrackUnreads() ? e._ackMessageId : null), null);
    }
    lastMessageId(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL;
        return eV.getValue(e, n, (e) => e.lastMessageId, null);
    }
    lastMessageTimestamp(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL;
        return eV.getValue(e, n, (e) => e.lastMessageTimestamp, 0);
    }
    lastPinTimestamp(e) {
        return eV.getValue(e, ef.W.CHANNEL, (e) => e.lastPinTimestamp, null);
    }
    getOldestUnreadMessageId(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL;
        return eV.getValue(e, n, (e) => (e.canTrackUnreads() ? e.oldestUnreadMessageId : null), null);
    }
    getOldestUnreadTimestamp(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL;
        return eV.getValue(e, n, (e) => (e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0), 0);
    }
    isEstimated(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL;
        return eV.getValue(e, n, (e) => e.estimated, !1);
    }
    hasOpenedThread(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.W.CHANNEL;
        return eV.getValue(e, n, (e) => e._persisted, !1);
    }
    hasUnreadPins(e) {
        return eV.getValue(e, ef.W.CHANNEL, (e) => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1);
    }
    isNewForumThread(e, n, r) {
        let i = eV.get(n);
        if (!0 === eV.get(e)._persisted || null == i.ackMessageIdAtChannelSelect || 0 >= K.default.compare(e, i.ackMessageIdAtChannelSelect)) return !1;
        let a = e$(r);
        return K.default.extractTimestamp(e) > a;
    }
    getAllReadStates(e) {
        let n = [];
        return (
            eV.forEach((r) => {
                switch (r.type) {
                    case ef.W.GUILD_HOME:
                    case ef.W.GUILD_EVENT:
                    case ef.W.GUILD_ONBOARDING_QUESTION:
                        null != $.Z.getGuild(r.channelId) && n.push(r.serialize(e));
                        break;
                    case ef.W.NOTIFICATION_CENTER:
                    case ef.W.MESSAGE_REQUESTS:
                        var i;
                        K.default.cast(null === (i = es.default.getCurrentUser()) || void 0 === i ? void 0 : i.id) === r.channelId && n.push(r.serialize(e));
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
        let r = null === (n = es.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
        return null == r ? null : eV.get(r, e).ackMessageId;
    }
    getSnapshot(e, n) {
        let r = eV.get(e);
        return null == r.snapshot || Date.now() - r.snapshot.takenAt > n ? r.takeSnapshot() : r.snapshot;
    }
}
eh(t4, 'displayName', 'ReadStateStore');
let t6 = new t4(I.Z, {
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
    CHANNEL_CREATE: to,
    THREAD_CREATE: tl,
    THREAD_UPDATE: td,
    THREAD_LIST_SYNC: th,
    LOAD_THREADS_SUCCESS: tp,
    LOAD_ARCHIVED_THREADS_SUCCESS: tp,
    SEARCH_FINISH: tg,
    MOD_VIEW_SEARCH_FINISH: tg,
    THREAD_MEMBER_UPDATE: tf,
    THREAD_MEMBERS_UPDATE: t_,
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
    GUILD_SCHEDULED_EVENT_UPDATE: tI,
    GUILD_SCHEDULED_EVENT_DELETE: tT,
    GUILD_DELETE: tN,
    GUILD_UPDATE: tC,
    RESORT_THREADS: tm,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: tz,
    DECAY_READ_STATES: ew,
    NOTIFICATION_CENTER_ITEM_CREATE: tS,
    RELATIONSHIP_ADD: tb,
    RELATIONSHIP_REMOVE: ty,
    NOTIFICATION_CENTER_ITEMS_ACK: tA,
    USER_NON_CHANNEL_ACK: tV,
    PASSIVE_UPDATE_V2: tY,
    CLEAR_OLDEST_UNREAD_MESSAGE: t$,
    TRY_ACK: t0,
    MESSAGE_REQUEST_ACK: t2,
    MESSAGE_REQUEST_CLEAR_ACK: t3
});
n.ZP = t6;
