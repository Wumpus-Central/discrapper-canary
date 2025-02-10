let i;
n.d(t, {
    Ex: () => eO,
    ZP: () => t0
}),
    n(47120),
    n(411104),
    n(653041),
    n(789020);
var r,
    a = n(392711),
    s = n(913527),
    o = n.n(s),
    l = n(442837),
    u = n(544891),
    c = n(846519),
    d = n(283693),
    f = n(570140),
    _ = n(317381),
    p = n(358221),
    h = n(702321),
    m = n(430198),
    g = n(710845),
    E = n(353926),
    v = n(924301),
    y = n(777639),
    I = n(355298),
    T = n(869404),
    b = n(333984),
    S = n(572804),
    A = n(140155),
    N = n(398758),
    C = n(725319),
    R = n(344185),
    O = n(569471),
    D = n(195663),
    L = n(723170),
    x = n(581883),
    P = n(131704),
    w = n(386438),
    M = n(70956),
    k = n(630388),
    U = n(823379),
    G = n(931619),
    B = n(709054),
    Z = n(314897),
    F = n(433355),
    V = n(592125),
    j = n(796974),
    H = n(486472),
    Y = n(430824),
    W = n(517100),
    K = n(375954),
    z = n(496675),
    q = n(699516),
    Q = n(944486),
    X = n(9156),
    J = n(594174),
    $ = n(451478),
    ee = n(981631),
    et = n(918559),
    en = n(176505),
    ei = n(765305),
    er = n(490897),
    ea = n(124368);
function es(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let eo = new g.Z('ReadStateStore'),
    el = 2;
__OVERLAY__ && (i = n(237997).Z);
let eu = ee.S7T.VIEW_CHANNEL | ee.S7T.READ_MESSAGE_HISTORY,
    ec = 100,
    ed = 1,
    ef = Q.Z.getChannelId(),
    e_ = null,
    ep = null,
    eh = !1,
    em = [],
    eg = !1,
    eE = null;
class ev {
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
    isAnyWindowFocused(e) {
        let t = this.channelWindowIds[e];
        if (null == t) return !1;
        for (let e of t) if ($.Z.isFocused(e)) return !0;
        return !1;
    }
    removeWindowId(e, t) {
        null != this.channelWindowIds[e] && (this.channelWindowIds[e].delete(t), 0 === this.channelWindowIds[e].size && delete this.channelWindowIds[e]);
    }
    forEachChannel(e) {
        for (let [t, n] of B.default.entries(this.channelWindowIds)) e(t, n);
    }
    constructor() {
        es(this, 'channelWindowIds', {});
    }
}
let ey = new ev(),
    eI = 30 * M.Z.Millis.DAY;
function eT() {
    return B.default.fromTimestamp(Date.now() - eI);
}
let eb = 0,
    eS = 0,
    eA = null;
function eN() {
    (eb = Date.now() - 7 * M.Z.Millis.DAY),
        (eS = Date.now() - 3 * M.Z.Millis.DAY),
        clearTimeout(eA),
        (eA = setTimeout(() => {
            f.Z.dispatch({ type: 'DECAY_READ_STATES' });
        }, 1 * M.Z.Millis.HOUR));
}
function eC(e) {
    if (null == e) return 0;
    let t = Date.parse(e);
    return isNaN(t) ? 0 : t;
}
function eR(e) {
    return {
        id: e.id,
        read_state_type: e.read_state_type,
        mention_count: e.badge_count,
        last_message_id: e.last_acked_id
    };
}
function eO(e, t) {
    let n = V.Z.getChannel(e.channel_id);
    return (
        !(null == n || q.Z.isBlockedOrIgnoredForMessage(e)) &&
        !!(
            (0, S.ZP)({
                message: e,
                userId: t.id,
                suppressEveryone: X.ZP.isSuppressEveryoneEnabled(n.guild_id),
                suppressRoles: X.ZP.isSuppressRolesEnabled(n.guild_id)
            }) || eD(n)
        )
    );
}
function eD(e) {
    return null != e && e.isPrivate() && !X.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
}
async function eL(e) {
    if (0 === em.length) {
        (eg = !1), null == e || e();
        return;
    }
    eg = !0;
    let t = em.splice(0, ec);
    await eP(() =>
        u.tn.post({
            url: ee.ANM.BULK_ACK,
            body: { read_states: t },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ),
        await (0, c.GR)(1000 * ed),
        eL(e);
}
let ex = 3;
async function eP(e) {
    let t = Z.default.getId();
    for (let n = 0; n < ex; n++)
        try {
            return await e();
        } catch (e) {
            if ((eo.error('', e), n + 1 < ex && (await (0, c.GR)((n + 1) * 2000), await G.Z.awaitOnline(), t !== Z.default.getId()))) return Promise.reject(Error('User changed.'));
        }
}
function ew(e, t) {}
function eM(e) {
    if (e.type !== er.W.CHANNEL) return !1;
    let t = V.Z.getChannel(e.channelId),
        n = null != t && t.isForumPost();
    if ((null != _.ZP.getConnectedActivityChannelId() && _.ZP.getActivityPanelMode() === et.Ez.PANEL && _.ZP.getFocusedLayout() === et.MI.NO_CHAT) || W.Z.isIdle() || !e.canTrackUnreads()) return !1;
    if ((null == t ? void 0 : t.isForumLikeChannel()) !== !0) {
        let t = ey.isAnyWindowFocused(e.channelId),
            n = null != i && i.isInstanceFocused() && i.isPinned(ee.Odu.TEXT);
        if (!t && !n) return !1;
    }
    if (n && !e._persisted) return !0;
    if (!e.hasUnreadOrMentions() || (null == t ? void 0 : t.isForumLikeChannel()) === !0 || (!(n && !e._isJoinedThread) && !j.Z.isAtBottom(e.channelId))) return !1;
    let r = p.Z.getLayout(e.channelId),
        a = p.Z.getChatOpen(e.channelId);
    if ((!a && (r === ee.AEg.NO_CHAT || r === ee.AEg.FULL_SCREEN)) || !ey.isChannelAckable(e.channelId)) return !1;
    let s = K.Z.getMessages(e.channelId);
    return null != s && !!s.ready && !s.loadingMore && (!!(0, C._E)() || !!a);
}
class ek {
    static forEach(e) {
        for (let n of Object.keys(ek._readStates)) {
            var t;
            let i = null !== (t = ek._readStates[parseInt(n)]) && void 0 !== t ? t : {};
            for (let t of Object.keys(i)) if (!1 === e(i[t])) break;
        }
    }
    static get(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL,
            i = null === (t = ek._readStates[n]) || void 0 === t ? void 0 : t[e];
        return null == i && ((i = new ek(e, n)), null == ek._readStates[n] && (ek._readStates[n] = {}), (ek._readStates[n][e] = i)), i;
    }
    static getGuildSentinels(e) {
        return null == this._guildReadStateSentinels[e] && (this._guildReadStateSentinels[e] = { unreadsSentinel: 0 }), this._guildReadStateSentinels[e];
    }
    static resetGuildSentinels() {
        this._guildReadStateSentinels = {};
    }
    static getIfExists(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL;
        return null === (t = ek._readStates[n]) || void 0 === t ? void 0 : t[e];
    }
    static getMentionChannelIds() {
        let e = [];
        for (let t of ek._mentionChannels) {
            let n = ek.getIfExists(t);
            null != n && n.canHaveMentions() ? e.push(t) : ek._mentionChannels.delete(t);
        }
        return e;
    }
    static getValue(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL,
            i = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 ? arguments[3] : void 0,
            a = null === (t = ek._readStates[n]) || void 0 === t ? void 0 : t[e];
        return null == a ? r : i(a);
    }
    static clear(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL;
        return (null === (t = ek._readStates[n]) || void 0 === t ? void 0 : t[e]) != null && (delete ek._readStates[n][e], ek._mentionChannels.delete(e), !0);
    }
    static clearAll() {
        (ek._readStates = {}), ek._mentionChannels.clear();
    }
    serialize(e) {
        let { channelId: t, type: n, _guildId: i, _isThread: r, _isActiveThread: a, _isJoinedThread: s, _persisted: o, loadedMessages: l, _lastMessageId: u, _lastMessageTimestamp: c, _ackMessageId: d, _ackMessageTimestamp: f, ackPinTimestamp: _, isManualAck: p, lastPinTimestamp: h, _oldestUnreadMessageId: m, oldestUnreadMessageIdStale: g, estimated: E, _mentionCount: v, flags: y, lastViewed: I } = this;
        if (e)
            return {
                channelId: t,
                type: n,
                _guildId: i,
                _isThread: r,
                _isActiveThread: a,
                _isJoinedThread: s,
                _persisted: o,
                loadedMessages: l,
                _lastMessageId: u,
                _lastMessageTimestamp: c,
                _ackMessageId: d,
                _ackMessageTimestamp: f,
                ackPinTimestamp: _,
                isManualAck: p,
                lastPinTimestamp: h,
                _oldestUnreadMessageId: m,
                oldestUnreadMessageIdStale: g,
                estimated: E,
                _mentionCount: v,
                flags: y,
                lastViewed: I
            };
        let T = {
            channelId: t,
            type: n,
            _guildId: i,
            _persisted: o,
            _lastMessageId: u,
            _lastMessageTimestamp: c,
            _ackMessageId: d,
            _ackMessageTimestamp: f,
            ackPinTimestamp: _,
            lastPinTimestamp: h,
            _mentionCount: v,
            flags: y
        };
        return null != I && I > 0 && (T.lastViewed = I), r && ((T._isThread = r), (T._isActiveThread = a), (T._isJoinedThread = s)), T;
    }
    deserializeForOverlay(e) {
        let { channelId: t, type: n, _guildId: i, _isThread: r, _isActiveJoinedThread: a, _isActiveThread: s, _isJoinedThread: o, _persisted: l, loadedMessages: u, _lastMessageId: c, _lastMessageTimestamp: d, _ackMessageId: f, _ackMessageTimestamp: _, ackPinTimestamp: p, isManualAck: h, lastPinTimestamp: m, _oldestUnreadMessageId: g, oldestUnreadMessageIdStale: E, estimated: v, _unreadCount: y, _mentionCount: I, flags: T, lastViewed: b } = e;
        (this.channelId = t), (this.type = null != n ? n : er.W.CHANNEL), (this._guildId = i), (this._isThread = null != r && r), null != a ? ((this._isActiveThread = a), (this._isJoinedThread = a)) : ((this._isActiveThread = null != s && s), (this._isJoinedThread = null != o && o)), (this._persisted = !1 !== l), (this.loadedMessages = null != u && u), (this._lastMessageId = c), (this._lastMessageTimestamp = d), (this._ackMessageId = f), (this._ackMessageTimestamp = _), (this.ackPinTimestamp = p), (this.isManualAck = null != h && h), (this.lastPinTimestamp = m), (this._oldestUnreadMessageId = g), (this.oldestUnreadMessageIdStale = null != E && E), (this.estimated = null != v && v), (this._unreadCount = null != y ? y : 0), (this._mentionCount = I), (this.flags = T), (this.lastViewed = b), ek._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && ek._mentionChannels.add(this.channelId);
    }
    incrementGuildUnreadsSentinel() {
        null != this._guildId && ek.getGuildSentinels(this._guildId).unreadsSentinel++;
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
        (this._lastMessageId = e), (this._lastMessageTimestamp = null != e ? B.default.extractTimestamp(e) : 0);
    }
    get lastMessageTimestamp() {
        return this._lastMessageTimestamp;
    }
    get ackMessageId() {
        return this._ackMessageId;
    }
    set ackMessageId(e) {
        (this._ackMessageId = e), (this._ackMessageTimestamp = null != e ? B.default.extractTimestamp(e) : 0);
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
        (0 === this._mentionCount || 0 === e) && this._mentionCount !== e && this.incrementGuildUnreadsSentinel(), (this._mentionCount = e), ek._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && ek._mentionChannels.add(this.channelId);
    }
    get isMentionLowImportance() {
        return null != this.flags && (4 & this.flags) == 4;
    }
    set isMentionLowImportance(e) {
        if (e) {
            if (0 === this._mentionCount) {
                var t;
                this.flags = (null !== (t = this.flags) && void 0 !== t ? t : 0) | 4;
            }
        } else null != this.flags && 0 !== this.flags && (this.flags = -5 & this.flags);
    }
    guessAckMessageId() {
        let e = K.Z.getMessages(this.channelId);
        if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
        if (!this.hasMentions()) return this.lastMessageId;
        let t = null,
            n = this.mentionCount,
            i = J.default.getCurrentUser();
        return (
            e.forEach(
                (e) => {
                    if (n > 0 && e.author.id !== (null == i ? void 0 : i.id)) --n;
                    else if (0 === n) return (t = e.id), !1;
                },
                this,
                !0
            ),
            t
        );
    }
    get guildId() {
        if (null != this._guildId) return this._guildId;
        let e = V.Z.getChannel(this.channelId);
        return (this._guildId = null != e ? e.getGuildId() : null);
    }
    isPrivate() {
        if (this.type !== er.W.CHANNEL) return !1;
        let e = V.Z.getChannel(this.channelId);
        return null != e && e.isPrivate();
    }
    rebuildChannelState(e) {
        var t, n;
        let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 ? arguments[2] : void 0;
        if (((this.ackMessageId = null !== (t = null != e ? e : this._ackMessageId) && void 0 !== t ? t : this.guessAckMessageId()), (this.isManualAck = null != e), (this.oldestUnreadMessageId = null), (this.estimated = !1), (this.unreadCount = 0), i && (this.mentionCount = 0), this.hasUnread())) {
            let e = J.default.getCurrentUser(),
                t = this.getAckTimestamp(),
                r = !1,
                a = !1,
                s = null,
                o = K.Z.getMessages(this.channelId);
            o.forAll((n) => {
                if (r) {
                    var o;
                    this.oldestUnreadMessageId = null !== (o = this._oldestUnreadMessageId) && void 0 !== o ? o : n.id;
                } else r = n.id === this._ackMessageId;
                B.default.extractTimestamp(n.id) > t ? (this.unreadCount++, i && eO(n, e) && this.mentionCount++, (s = null != s ? s : n.id)) : (a = !0);
            }),
                (this.estimated = !o.hasPresent() || (!(r || a) && o.length === this.unreadCount)),
                (this.oldestUnreadMessageId = null !== (n = this._oldestUnreadMessageId) && void 0 !== n ? n : s);
        }
        null != r && (this.mentionCount = r);
    }
    handleGuildEventRemoval(e, t) {
        var n;
        if (B.default.compare(this.ackMessageId, t) >= 0) return;
        let i = v.ZP.getGuildScheduledEventsForGuild(e),
            r = this.getAckTimestamp();
        if (isNaN(r)) return;
        let a = null !== (n = this._ackMessageId) && void 0 !== n ? n : B.default.fromTimestamp(r),
            s = null,
            o = 0;
        i.forEach((e) => {
            (0, v.Ld)(e) && (B.default.compare(e.id, s) > 0 && (s = e.id), B.default.compare(e.id, a) > 0 && o++);
        }),
            (this.lastMessageId = s),
            (this.mentionCount = o);
    }
    canTrackUnreads() {
        if (this.type !== er.W.CHANNEL) return !0;
        if ((this._isThread && !this._isActiveThread) || this._isResourceChannel) return !1;
        let e = V.Z.getBasicChannel(this.channelId);
        return null != e && ('basicPermissions' in e ? w.Z.has(e.basicPermissions, ee.S7T.VIEW_CHANNEL) : !m.Z.isChannelGated(this.guildId, this.channelId) || z.Z.can(ee.Plq.VIEW_CHANNEL, e));
    }
    canBeUnread() {
        return !((this._isThread && !this._isJoinedThread) || (0, T.h3)(this.channelId, [I.Z, b.Z]) || (!this._isThread && (0, N.r1)(this._guildId) && (this._lastMessageTimestamp < eb || (!X.ZP.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())))) && this.canTrackUnreads();
    }
    canHaveMentions() {
        return !(0 === this.mentionCount || (this._isThread && !this._isJoinedThread) || (0, T.h3)(this.channelId, [I.Z, b.Z]) || ((0, N.r1)(this._guildId) && this._lastMessageTimestamp < eb)) && this.canTrackUnreads();
    }
    getGuildChannelUnreadState(e, t, n, i, r) {
        if (t && (this._lastMessageTimestamp < eb || (!X.ZP.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0)))
            return {
                mentionCount: 0,
                unread: !1,
                isMentionLowImportance: !1
            };
        if ('basicPermissions' in e) {
            if (!w.Z.has(e.basicPermissions, ee.S7T.VIEW_CHANNEL))
                return {
                    mentionCount: 0,
                    unread: !1,
                    isMentionLowImportance: !1
                };
        } else if (m.Z.isChannelGated(this.guildId, this.channelId) && !z.Z.can(ee.Plq.VIEW_CHANNEL, e))
            return {
                mentionCount: 0,
                unread: !1,
                isMentionLowImportance: !1
            };
        return i || r
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
        return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > eS && x.Z.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp();
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
        if (this.type !== er.W.CHANNEL || !this.canTrackUnreads()) return !1;
        if (null == e) {
            if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
            (this._persisted = !0),
                eP(() =>
                    u.tn.post({
                        url: ee.ANM.PINS_ACK(this.channelId),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                );
        }
        let t = eC(e);
        return (this.ackPinTimestamp = 0 !== t ? t : this.lastPinTimestamp), !0;
    }
    ack(e) {
        let { messageId: t, local: n = !1, immediate: i = !1, force: r = !1, isExplicitUserAction: a = !1, location: s = { section: ee.jXE.CHANNEL }, trackAnalytics: o = !0 } = e;
        if (!this._shouldAck(r, n, a) || (!r && !this.canTrackUnreads())) return !1;
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
                eJ(this.channelId),
                n
                    ? (this.oldestUnreadMessageId = null)
                    : (null == this.outgoingAck &&
                          (this.outgoingAckTimer = setTimeout(
                              () => {
                                  this.type === er.W.CHANNEL ? this._ack(s, o) : this._nonChannelAck(), (this.outgoingAck = null), (this.outgoingAckTimer = null);
                              },
                              l || i ? 0 : 3000
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
            takenAt: Date.now()
        };
    }
    clearOutgoingAck() {
        (this.outgoingAck = null), null != this.outgoingAckTimer && (clearTimeout(this.outgoingAckTimer), (this.outgoingAckTimer = null));
    }
    _shouldAck(e, t, n) {
        var i;
        return !!e || !!n || !!t || !!(!this.isManualAck && (this.type !== er.W.CHANNEL || this.loadedMessages || (null === (i = V.Z.getChannel(this.channelId)) || void 0 === i ? void 0 : i.isForumLikeChannel())));
    }
    _ack(e, t) {
        let { outgoingAck: i } = this;
        if (null == i) return;
        let r = Z.default.getId(),
            a = ep;
        this._persisted = !0;
        let s = this.recalculateFlags(),
            o = s === this.flags ? void 0 : s;
        eP(() =>
            u.tn.post({
                url: ee.ANM.MESSAGE_ACK(this.channelId, i),
                body: {
                    token: ep,
                    last_viewed: this.lastViewed,
                    flags: o
                },
                oldFormErrors: !0,
                rejectWithError: !0
            })
        ).then((e) => {
            null != e &&
                (ep === a && r === Z.default.getId() && (ep = e.body.token),
                f.Z.dispatch({ type: 'MESSAGE_ACKED' }),
                t &&
                    n
                        .e('54076')
                        .then(n.bind(n, 189229))
                        .then((e) => {
                            let { default: t } = e;
                            t(this.channelId);
                        }));
        });
    }
    recalculateFlags() {
        if (this.type !== er.W.CHANNEL) return;
        let e = V.Z.getChannel(this.channelId);
        if (null != e) return e.isThread() ? 2 : null != e.guild_id ? 1 : 0;
    }
    _nonChannelAck() {
        let e;
        let { outgoingAck: t, channelId: n, type: i } = this;
        if (null != t) {
            switch (i) {
                case er.W.GUILD_HOME:
                case er.W.GUILD_EVENT:
                case er.W.GUILD_ONBOARDING_QUESTION:
                    e = ee.ANM.GUILD_FEATURE_ACK(n, t, i);
                    break;
                case er.W.NOTIFICATION_CENTER:
                case er.W.MESSAGE_REQUESTS:
                    e = ee.ANM.USER_NON_CHANNEL_ACK(t, i);
                    break;
                default:
                    return;
            }
            (this._persisted = !0),
                eP(() =>
                    u.tn.post({
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
        let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            n = V.Z.getBasicChannel(this.channelId);
        eo.log('Deleting ReadState', this.channelId, this.type, {
            remote: t,
            persisted: this._persisted,
            channelMissing: null == n,
            isOld: eq(this, eT()),
            validType: null != n && P.AW.has(n.type),
            readableType: null != n && (0, P.Em)(n.type),
            oldThreadCutoff: eT(),
            mentionCount: this.mentionCount,
            channelId: this.channelId,
            ackMessageId: this._ackMessageId,
            lastMessageId: this._lastMessageId
        }),
            t &&
                this._persisted &&
                u.tn.del({
                    url: ee.ANM.CHANNEL_ACK(this.channelId),
                    body: {
                        version: el,
                        read_state_type: this.type
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0
                }),
            null === (e = ek._readStates[this.type]) || void 0 === e || delete e[this.channelId],
            ek._mentionChannels.delete(this.channelId);
    }
    shouldDeleteReadState(e) {
        if (0 !== H.Z.totalUnavailableGuilds) return !1;
        if (null != this.type && this.type !== er.W.CHANNEL) return !eQ(this);
        let t = V.Z.getBasicChannel(this.channelId);
        return null == t ? !!eq(this, e) : !!P.AW.has(t.type) && (!(0, P.Em)(t.type) || (!(0, P.hv)(t.type) && (!!(P.Ec.has(t.type) && ez(this, t, e)) || (!!(this.mentionCount > 0) && !z.Z.canBasicChannel(eu, t)))));
    }
    getAckTimestamp() {
        let e, t;
        if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
        if (this._isThread) return (this._ackMessageTimestamp = eW(this.guildId, this.channelId)), (this._ackMessageId = B.default.fromTimestamp(this._ackMessageTimestamp)), this._ackMessageTimestamp;
        if (this.type === er.W.GUILD_EVENT || this.type === er.W.GUILD_ONBOARDING_QUESTION) e = Y.Z.getGuild(this.channelId);
        else if ((0, en.AB)(this.channelId)) e = Y.Z.getGuild(this.guildId);
        else {
            let t = V.Z.getChannel(this.channelId);
            if (null != t) {
                let n = t.getGuildId();
                e = Y.Z.getGuild(n);
            }
        }
        return null != e ? isNaN((t = eK(e))) && (t = B.default.extractTimestamp(this.channelId)) : (t = B.default.extractTimestamp(this.channelId)), (this._ackMessageTimestamp = t), t;
    }
    get oldestUnreadTimestamp() {
        return null != this.oldestUnreadMessageId ? B.default.extractTimestamp(this.oldestUnreadMessageId) : 0;
    }
    syncThreadSettings() {
        this._isThread = !0;
        let e = V.Z.getChannel(this.channelId);
        if (null == e) return eo.warn('syncThreadSettings called with channel not in memory '.concat(this.channelId)), !1;
        let t = this.guildId,
            n = null != t && R.Z.isActive(t, e.parent_id, this.channelId),
            i = O.Z.hasJoined(this.channelId);
        return (this._isActiveThread !== n || this._isJoinedThread !== i) && ((this._isActiveThread = n), (this._isJoinedThread = i), !0);
    }
    recordLastViewedTime() {
        let e = Math.ceil((Date.now() - B.DISCORD_EPOCH) / M.Z.Millis.DAY);
        e !== this.lastViewed &&
            ((this.lastViewed = e),
            this.canTrackUnreads() &&
                !this.hasUnread() &&
                this.ack({
                    force: !0,
                    trackAnalytics: !1
                }));
    }
    constructor(e, t = er.W.CHANNEL) {
        es(this, 'channelId', void 0), es(this, 'type', er.W.CHANNEL), es(this, '_guildId', void 0), es(this, '_isThread', void 0), es(this, '_isActiveThread', void 0), es(this, '_isJoinedThread', void 0), es(this, '_isResourceChannel', void 0), es(this, '_persisted', void 0), es(this, 'loadedMessages', void 0), es(this, '_lastMessageId', void 0), es(this, '_lastMessageTimestamp', void 0), es(this, '_ackMessageId', void 0), es(this, '_ackMessageTimestamp', void 0), es(this, 'isManualAck', void 0), es(this, 'ackPinTimestamp', void 0), es(this, 'lastPinTimestamp', void 0), es(this, '_oldestUnreadMessageId', void 0), es(this, 'oldestUnreadMessageIdStale', void 0), es(this, 'estimated', void 0), es(this, '_unreadCount', void 0), es(this, '_mentionCount', void 0), es(this, 'flags', void 0), es(this, 'lastViewed', void 0), es(this, 'outgoingAck', void 0), es(this, 'outgoingAckTimer', null), es(this, 'ackMessageIdAtChannelSelect', null), es(this, 'ackedWhileCached', void 0), es(this, 'snapshot', void 0), (this.channelId = e), (this.type = t), (this._guildId = null), (this._isThread = !1), (this._isActiveThread = !1), (this._isJoinedThread = !1), (this._isResourceChannel = !1), (this._persisted = !1), (this.loadedMessages = !1), (this._lastMessageId = null), (this._lastMessageTimestamp = 0), (this._ackMessageId = null), (this._ackMessageTimestamp = 0), (this.isManualAck = !1), (this.ackPinTimestamp = 0), (this.lastPinTimestamp = 0), (this._oldestUnreadMessageId = null), (this.oldestUnreadMessageIdStale = !1), (this.estimated = !1), (this._unreadCount = 0), (this._mentionCount = 0), (this.outgoingAck = null);
    }
}
function eU(e) {
    e.forEach((e) => {
        if ((0, P.Em)(e.type)) {
            let t = ek.get(e.id);
            (t._guildId = e.guild_id), (t.lastMessageId = e.lastMessageId), (t.lastPinTimestamp = eC(e.lastPinTimestamp)), (t._isResourceChannel = e.hasFlag(en.zZ.IS_GUILD_RESOURCE_CHANNEL)), P.Ec.has(e.type) && t.syncThreadSettings();
        }
    });
}
function eG(e) {
    e.forEach((e) => {
        if ((0, P.Em)(e.type)) {
            var t;
            let n = ek.get(e.id);
            (n.lastMessageId = e.last_message_id), (n.lastPinTimestamp = eC(e.last_pin_timestamp)), (n._isResourceChannel = (0, k.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, en.zZ.IS_GUILD_RESOURCE_CHANNEL)), P.Ec.has(e.type) && n.syncThreadSettings();
        }
    });
}
function eB(e) {
    ej(e), eH(e), eV(e), eY(e);
}
function eZ(e) {
    eF(e);
}
function eF(e) {
    let t = J.default.getCurrentUser();
    if (null == t) return !1;
    let n = ek.get(t.id, er.W.NOTIFICATION_CENTER);
    e.forEach((e) => {
        if (null == e.since || e.type !== ee.OGo.PENDING_INCOMING) return;
        let t = new Date(e.since).getTime();
        (null != n.ackMessageId ? B.default.extractTimestamp(n.ackMessageId) : 0) < t && (n.mentionCount++, (n.lastMessageId = B.default.fromTimestamp(t)));
    });
}
function eV(e) {
    let t = 24;
    ek.get(e.id, er.W.GUILD_HOME).lastMessageId = B.default.fromTimestamp(o()(Date.now()).subtract(t, 'h').valueOf());
}
function ej(e) {
    var t;
    null === (t = e.threads) ||
        void 0 === t ||
        t.forEach((t) => {
            if (!P.AW.has(t.type)) return;
            let n = ek.get(t.id);
            (n.lastMessageId = t.lastMessageId), (n.lastPinTimestamp = eC(t.lastPinTimestamp)), (n._isThread = !0), (n._isActiveThread = !0), (n._isJoinedThread = null != t.member), null == n.ackMessageId && (n.ackMessageId = B.default.fromTimestamp(eW(e.id, t.id))), null == n.ackPinTimestamp && (n.ackPinTimestamp = eW(e.id, t.id));
        });
}
function eH(e) {
    var t, n;
    if ((null === (t = e.guild_scheduled_events) || void 0 === t ? void 0 : t.length) === 0 && null == ek.getIfExists(e.id, er.W.GUILD_EVENT)) return;
    let i = ek.get(e.id, er.W.GUILD_EVENT);
    i._guildId = e.id;
    let r = 0,
        a = null,
        s = null !== (n = i._ackMessageId) && void 0 !== n ? n : B.default.fromTimestamp(i.getAckTimestamp());
    e.guild_scheduled_events.forEach((e) => {
        B.default.compare(e.id, a) > 0 && (a = e.id), B.default.compare(e.id, s) > 0 && r++;
    }),
        (i.lastMessageId = a),
        (i.mentionCount = r);
}
function eY(e) {
    let t = Y.Z.getGuild(e.id);
    if (null == t) return;
    let n = null == t ? void 0 : t.latestOnboardingQuestionId;
    if (null == n) return;
    let i = ek.get(t.id, er.W.GUILD_ONBOARDING_QUESTION);
    (i._guildId = t.id), (i.lastMessageId = n);
}
function eW(e, t) {
    var n, i, r;
    let a = V.Z.getChannel(t),
        s = Y.Z.getGuild(null != e ? e : null == a ? void 0 : a.guild_id),
        o = (null == a ? void 0 : a.isForumPost()) ? 0 : eK(s),
        l = (null !== (r = null === (n = O.Z.joinTimestamp(t)) || void 0 === n ? void 0 : n.getTime()) && void 0 !== r ? r : 0) - 5000;
    isNaN(l) && (l = -5000);
    let u = null == a ? void 0 : null === (i = a.threadMetadata) || void 0 === i ? void 0 : i.archiveTimestamp,
        c = null != u ? new Date(u).getTime() - 1 : 0;
    isNaN(c) && (c = 0);
    let d = Math.max(l, c);
    return d <= 0 && (d = B.default.extractTimestamp(t) - 1), (isNaN(d) || d <= 0) && (d = 0), isNaN(o) ? d : Math.max(o, d);
}
function eK(e) {
    if (null != e && null != e.joinedAt) {
        if (e.joinedAt instanceof Date) {
            let t = e.joinedAt.getTime();
            if (!isNaN(t)) return t;
        } else if ('string' == typeof e.joinedAt) {
            let t = new Date(e.joinedAt).getTime();
            if (!isNaN(t)) return t;
        } else if ('number' == typeof e.joinedAt && !isNaN(e.joinedAt)) return e.joinedAt;
    }
    return Date.now();
}
function ez(e, t, n) {
    let i = e.guildId;
    return !(null != i && R.Z.isActive(i, t.parent_id, e.channelId)) && eq(e, n);
}
function eq(e, t) {
    return e.mentionCount > 0 || !(B.default.compare(e.channelId, t) > 0 || (null != e._ackMessageId && B.default.compare(e._ackMessageId, t) > 0) || (null != e._lastMessageId && B.default.compare(e._lastMessageId, t) > 0));
}
function eQ(e) {
    switch (e.type) {
        case er.W.GUILD_HOME:
        case er.W.GUILD_EVENT:
        case er.W.GUILD_ONBOARDING_QUESTION:
            return null != Y.Z.getGuild(e.channelId);
        case er.W.NOTIFICATION_CENTER:
            var t;
            return B.default.cast(null === (t = J.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.channelId;
        default:
            return !0;
    }
}
function eX(e) {
    if (null == e) return !1;
    let t = ek.get(e);
    return !!eM(t) && t.ack({});
}
function eJ(e) {
    if (null == e) return;
    let t = ek.get(e);
    if (t.type !== er.W.CHANNEL) return;
    let n = V.Z.getChannel(t.channelId);
    if (null == n || !n.isForumPost() || null == n.parent_id) return;
    let i = n.parent_id,
        r = ek.get(i);
    R.Z.hasLoaded(n.guild_id) && B.default.keys(R.Z.getThreadsForParent(n.guild_id, i)).every((e) => t$.hasOpenedThread(e) || 0 > B.default.compare(e, r.ackMessageId)) && r.ack({});
}
function e$(e) {
    var t, n;
    let { guilds: i, relationships: r, initialPrivateChannels: a, readState: s } = e;
    eN(),
        (ep = null),
        eh || s.partial || ek.clearAll(),
        (eh = !1),
        s.entries.forEach((e) => {
            var t, n;
            let i = null !== (t = e.read_state_type) && void 0 !== t ? t : er.W.CHANNEL;
            i !== er.W.CHANNEL && (e = eR(e));
            let r = ek.get(e.id, i);
            (r._persisted = !0), (r._mentionCount = null !== (n = e.mention_count) && void 0 !== n ? n : 0), (r.flags = e.flags), (r.lastViewed = e.last_viewed);
            let a = V.Z.getBasicChannel(e.id);
            null != a && (0, P.Q5)(a.type) && (null == e.last_message_id || 0 === e.last_message_id) ? (r.ackMessageId = B.default.fromTimestamp(eW(a.guild_id, a.id))) : r.ackedWhileCached ? -1 === B.default.compare(r.ackMessageId, e.last_message_id) && (r.ackMessageId = e.last_message_id) : (r.ackMessageId = e.last_message_id), (r.ackedWhileCached = void 0), (r.ackPinTimestamp = eC(e.last_pin_timestamp)), ek._mentionChannels.delete(r.channelId), r._mentionCount > 0 && r.canHaveMentions() && ek._mentionChannels.add(r.channelId);
        }),
        ek.resetGuildSentinels();
    let o = null === (t = J.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    for (let e of (null != o && (ek.get(o, er.W.NOTIFICATION_CENTER).lastMessageId = B.default.fromTimestamp(Date.now())), eZ(r), eU(a), i)) eU(null !== (n = e.channels) && void 0 !== n ? n : []), e3(e), eB(e);
    e0(), (eE = setTimeout(() => e2(s.entries), 10 * M.Z.Millis.SECOND));
}
function e0() {
    null != eE && clearTimeout(eE);
}
es(ek, '_guildReadStateSentinels', {}), es(ek, '_readStates', {}), es(ek, '_mentionChannels', new Set());
let e1 = (0, a.throttle)((e) => {
    e.delete();
}, 100);
function e2(e) {
    let t = eT();
    for (let i of e) {
        var n;
        let e = null !== (n = i.read_state_type) && void 0 !== n ? n : er.W.CHANNEL,
            r = ek.get(i.id, e);
        r.shouldDeleteReadState(t) && e1(r);
    }
}
function e3(e) {
    if (null != e.channelUpdates) {
        var t;
        eU(null === (t = e.channelUpdates) || void 0 === t ? void 0 : t.writes);
    }
    if (null != e.channelTimestampUpdates)
        for (let t of e.channelTimestampUpdates) {
            let e = ek.get(t.id);
            null != t.last_message_id && (e.lastMessageId = t.last_message_id), null != t.last_pin_timestamp && (e.lastPinTimestamp = eC(t.last_pin_timestamp));
        }
}
function e4(e) {
    let { lazyPrivateChannels: t } = e;
    eU(t);
}
function e6(e) {
    let { readStates: t, selectedChannelId: n } = e;
    eN(),
        (ep = null),
        (ef = n),
        (e_ = F.ZP.getCurrentSidebarChannelId(ef)),
        ek.clearAll(),
        t.forEach((e) => {
            let t = ek.get(e.channelId);
            t.deserializeForOverlay(e), t.type === er.W.CHANNEL && t.rebuildChannelState();
        });
}
function e5(e) {
    var t;
    let { guild: n } = e,
        i = eT();
    ek.forEach((e) => {
        e.guildId === n.id && e.shouldDeleteReadState(i) && e.delete(!1);
    }),
        eU(null !== (t = n.channels) && void 0 !== t ? t : []),
        e3(n),
        eB(n);
}
function e7(e) {
    let { channelId: t, isAfter: n, messages: i } = e,
        r = ek.get(t);
    r.loadedMessages = !0;
    let a = K.Z.getMessages(t);
    null != a && (i.length > 0 && 1 === B.default.compare(i[0].id, r.ackMessageId) && 0 === r.unreadCount ? r.rebuildChannelState() : a.hasPresent() || a.jumpTargetId === r.ackMessageId ? r.rebuildChannelState() : n && null != r.ackMessageId && a.has(r.ackMessageId, !0) && ((r.unreadCount += i.length), null == r.oldestUnreadMessageId && r.rebuildChannelState())), eG(i.map((e) => e.thread).filter(U.lm));
}
function e8(e) {
    let { channelId: t } = e;
    ek.get(t).rebuildChannelState();
}
function e9(e) {
    let t,
        n,
        { channelId: r, message: a, isPushNotification: s } = e,
        o = ek.get(r),
        l = o.hasUnread(),
        u = null != o.lastMessageId && o.lastMessageId >= a.id;
    o.lastMessageId = a.id;
    let c = J.default.getCurrentUser(),
        d = V.Z.getBasicChannel(r);
    if (null != a.author && null != c && a.author.id === c.id && !ee.V$x.SELF_MENTIONABLE_SYSTEM.has(a.type))
        return (
            null != o.outgoingAck && o.clearOutgoingAck(),
            tP({
                channelId: r,
                messageId: a.id,
                manual: !1
            })
        );
    let f = (0, y.D)();
    if ((null == f ? void 0 : f.isReady()) === !0) {
        let e = f.getCurrentRoute();
        if (p.Z.getChatOpen(o.channelId)) t = o.channelId;
        else if ((null == e ? void 0 : e.name) === 'channel') t = e.params.channelId;
        else if ((null == e ? void 0 : e.name) === 'guilds') {
            var _;
            t = null === (_ = e.params) || void 0 === _ ? void 0 : _.channelId;
        }
    } else null == f && ((t = Q.Z.getChannelId()), (n = F.ZP.getCurrentSidebarChannelId(t)));
    let h = t === r || n === r;
    if ((h && eM(o) && !s) || (null != i && i.isInstanceFocused() && h && i.isInstanceLocked() && i.isPinned(ee.Odu.TEXT))) return o.ack({ messageId: a.id });
    if ((null == o.oldestUnreadMessageId || o.oldestUnreadMessageIdStale ? (o.oldestUnreadMessageId = a.id) : l || (0, C.nV)() === r || (o.oldestUnreadMessageId = a.id), !u && o.unreadCount++, !(q.Z.isBlockedOrIgnoredForMessage(a) || (a.type === ee.uaV.RECIPIENT_REMOVE && (null == d ? void 0 : d.type) === ee.d4z.GROUP_DM)))) {
        let { shouldMention: e, isMentionLowImportance: t } = te(a, c, o);
        e && ((o.isMentionLowImportance = t), o.mentionCount++);
    }
}
function te(e, t, n) {
    if (
        null != t &&
        (0, S.Hl)({
            rawMessage: e,
            userId: t.id,
            suppressEveryone: X.ZP.isSuppressEveryoneEnabled(n.guildId),
            suppressRoles: X.ZP.isSuppressRolesEnabled(n.guildId)
        })
    )
        return {
            shouldMention: !0,
            isMentionLowImportance: !1
        };
    let i = V.Z.getChannel(e.channel_id);
    if (eD(i))
        return {
            shouldMention: !0,
            isMentionLowImportance: !1
        };
    if (X.ZP.mentionOnAllMessages && null != i) {
        if (i.isThread()) {
            if ((0, L.J)(i) === ea.iN.ALL_MESSAGES)
                return {
                    shouldMention: !0,
                    isMentionLowImportance: !0
                };
        } else if (!i.isVocal() && !X.ZP.isChannelMuted(i.guild_id, i.id) && X.ZP.resolvedMessageNotifications(i) === ee.bL.ALL_MESSAGES)
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
function tt(e) {
    let { channel: t } = e;
    if (!(0, P.Em)(t.type)) return !1;
    let n = ek.get(t.id);
    (n.lastMessageId = t.lastMessageId), (n.lastPinTimestamp = eC(t.lastPinTimestamp));
}
function tn(e) {
    let { channel: t } = e;
    ti(t), tr(t);
}
function ti(e) {
    if (!P.AW.has(e.type)) return !1;
    let t = ek.get(e.id);
    (t.lastMessageId = e.lastMessageId), (t.lastPinTimestamp = eC(e.lastPinTimestamp)), t.syncThreadSettings(), e.ownerId === Z.default.getId() && (t.loadedMessages = !0);
}
function tr(e) {
    let t = e.parent_id;
    ek.get(t).lastMessageId = e.id;
    let n = J.default.getCurrentUser();
    if (e.ownerId === (null == n ? void 0 : n.id))
        return (
            (ek.get(e.id)._persisted = !0),
            tP({
                channelId: t,
                messageId: e.id,
                manual: !1
            })
        );
}
function ta(e) {
    let { channel: t } = e;
    return !!P.AW.has(t.type) && ek.get(t.id).syncThreadSettings();
}
function ts(e) {
    let { id: t } = e;
    return ek.get(t).syncThreadSettings();
}
function to(e) {
    return (0, D.s)(e) && ek.get(e.id).syncThreadSettings();
}
function tl(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        if (!P.AW.has(e.type)) return;
        let t = ek.get(e.id);
        if (((t.lastMessageId = e.lastMessageId), (t.lastPinTimestamp = eC(e.lastPinTimestamp)), (t._isThread = !0), (t._isActiveThread = !0), (t._isJoinedThread = O.Z.hasJoined(e.id)), e.isForumPost())) {
            let t = ek.get(e.parent_id);
            0 > B.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id);
        }
    });
}
function tu(e) {
    let { threads: t } = e;
    eG(t);
}
function tc(e) {
    let { channelId: t } = e;
    return eX(t);
}
function td(e) {
    let { messages: t, threads: n } = e;
    for (let e of t)
        eG(
            e
                .map((e) => {
                    let { thread: t } = e;
                    return t;
                })
                .filter(U.lm)
        );
    eG(n);
}
function tf(e) {
    let t = J.default.getCurrentUser();
    return null != e.creator_id && null != t && e.creator_id === t.id;
}
function t_(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id,
        i = ek.get(t.guild_id, er.W.GUILD_EVENT);
    if (((i.lastMessageId = t.id), tf(t))) {
        tM({
            type: 'GUILD_FEATURE_ACK',
            id: n,
            ackType: er.W.GUILD_EVENT,
            ackedId: t.id,
            local: !1
        });
        return;
    }
    !X.ZP.isMuteScheduledEventsEnabled(n) && i.mentionCount++;
}
function tp(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id;
    if (tf(t) || ![ei.p1.CANCELED, ei.p1.COMPLETED].includes(t.status)) return !1;
    ek.get(n, er.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
}
function th(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id;
    if (tf(t)) return !1;
    ek.get(t.guild_id, er.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
}
function tm(e) {
    let t = J.default.getCurrentUser();
    if (null == t || null == e.relationship.since || (e.relationship.type !== ee.OGo.PENDING_INCOMING && e.relationship.type !== ee.OGo.FRIEND)) return !1;
    let n = ek.get(t.id, er.W.NOTIFICATION_CENTER),
        i = e.relationship.type === ee.OGo.FRIEND,
        r = i ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? B.default.extractTimestamp(n.ackMessageId) : 0) < r && ((n.lastMessageId = B.default.fromTimestamp(r)), A.Z.active ? tU(t.id, er.W.NOTIFICATION_CENTER, void 0, !1) : i ? n.mentionCount-- : n.mentionCount++);
}
function tg(e) {
    let t = J.default.getCurrentUser();
    if (null == t || null == e.relationship.since || e.relationship.type !== ee.OGo.PENDING_INCOMING) return !1;
    let n = ek.get(t.id, er.W.NOTIFICATION_CENTER),
        i = new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? B.default.extractTimestamp(n.ackMessageId) : 0) <= i && (n.mentionCount = Math.max(0, n.mentionCount - 1));
}
function tE(e) {
    var t;
    let { item: n } = e,
        i = null === (t = J.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == i) return !1;
    let r = ek.get(i, er.W.NOTIFICATION_CENTER);
    if (((r.lastMessageId = n.id), A.Z.active)) {
        tU(i, er.W.NOTIFICATION_CENTER, n.id, !1);
        return;
    }
    r.mentionCount++;
}
function tv(e) {
    var t;
    let { ids: n, optimistic: i } = e;
    if (i || A.Z.active) return !1;
    let r = null === (t = J.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == r) return !1;
    let a = ek.get(r, er.W.NOTIFICATION_CENTER);
    n.forEach((e) => {
        0 > B.default.compare(a.ackMessageId, e) && (a.mentionCount = Math.max(a.mentionCount - 1, 0));
    });
}
function ty(e) {
    let { guild: t } = e;
    return ek.clear(t.id, er.W.GUILD_EVENT);
}
function tI(e) {
    let { guild: t } = e,
        n = t.latest_onboarding_question_id;
    if (null == n) return;
    let i = ek.get(t.id, er.W.GUILD_ONBOARDING_QUESTION);
    (i._guildId = t.id), (i.lastMessageId = n);
}
function tT(e) {
    let { channel: t } = e;
    return ek.clear(t.id);
}
function tb(e) {
    let { channelId: t } = e,
        n = F.ZP.getCurrentSidebarChannelId(t),
        i = V.Z.getChannel(t);
    if (null != i) {
        var r;
        let e = ek.get(i.id);
        (e.ackMessageIdAtChannelSelect = null !== (r = e.ackMessageId) && void 0 !== r ? r : B.default.fromTimestamp(e.getAckTimestamp())), e.recordLastViewedTime();
    }
    tN(ef), tN(e_);
    let a = !1;
    return ef !== t && ((a = tC(ef) || a), (a = tC(e_) || a)), (ef === t || ((null == i ? void 0 : i.type) != null && ee.TPd.GUILD_THREADS_ONLY.has(i.type))) && (a = eX(t) || a), ef === t && (a = eX(n) || a), (ef = t), (e_ = n), a;
}
function tS() {
    let e = F.ZP.getCurrentSidebarChannelId(ef),
        t = !1;
    return e_ !== e ? ((t = tC(e_)), (e_ = e)) : (t = eX(e) || t), t;
}
function tA(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let n = ek.get(t);
    if (!n.hasMentions()) return (n.oldestUnreadMessageId = null), n.ack({ isExplicitUserAction: !0 });
}
function tN(e) {
    null != e && (ek.get(e).isManualAck = !1);
}
function tC(e) {
    if (null == e) return !1;
    let t = ek.get(e);
    return !t.hasUnread() && ((t.oldestUnreadMessageId = null), !0);
}
function tR(e) {
    let t = !1;
    return (
        ey.forEachChannel((n, i) => {
            i.has(e.windowId) && (t = tO(n, e.focused) || t);
        }),
        t
    );
}
function tO(e, t) {
    if (null == e) return !1;
    let n = ek.get(e);
    return t || n.hasUnread() || (n.oldestUnreadMessageIdStale = !0), eX(e);
}
function tD(e) {
    let { channelId: t } = e;
    return eX(t);
}
function tL(e) {
    let { channelId: t, messageId: n, immediate: i = !1, force: r = !1, context: a, location: s } = e,
        o = ek.get(t),
        l = o.ack({
            messageId: n,
            local: a !== ee.e3s,
            immediate: i,
            force: r,
            isExplicitUserAction: !0,
            location: s
        });
    return null != n ? (o.rebuildChannelState(), !0) : l;
}
function tx(e) {
    let { channelId: t, timestamp: n } = e;
    return ek.get(t).ackPins(n);
}
function tP(e) {
    let { channelId: t, messageId: n, manual: i, newMentionCount: r } = e,
        a = ek.get(t);
    return i
        ? (a.rebuildChannelState(n, !0, r), a.clearOutgoingAck(), !0)
        : n !== a._ackMessageId &&
              a.ack({
                  messageId: n,
                  local: !0
              });
}
function tw(e) {
    let { channelId: t } = e;
    return ek.get(t).ack({
        messageId: void 0,
        local: !0,
        immediate: void 0,
        force: void 0,
        isExplicitUserAction: !0
    });
}
function tM(e) {
    let { id: t, ackType: n, ackedId: i, local: r } = e;
    return tU(t, n, i, r);
}
function tk(e) {
    var t;
    let { ackType: n, ackedId: i, local: r } = e,
        a = null === (t = J.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    return null != a && tU(a, n, i, r);
}
function tU(e, t, n, i) {
    var r;
    let a = ek.get(e, t);
    return (
        n !== a.ackMessageId &&
        a.lastMessageId !== a.ackMessageId &&
        (null != a.lastMessageId || 0 !== a.mentionCount) &&
        ((n = null !== (r = null != n ? n : a.lastMessageId) && void 0 !== r ? r : B.default.fromTimestamp(a.getAckTimestamp())),
        a.ack({
            messageId: n,
            local: null == i || i
        }))
    );
}
function tG(e) {
    let { channelId: t, lastPinTimestamp: n } = e,
        i = ek.get(t),
        r = eC(n);
    return i.lastPinTimestamp !== r && ((i.lastPinTimestamp = r), !0);
}
function tB(e) {
    let t = !1;
    for (let n of e.channels) {
        let e = ek.get(n.id),
            i = eC(n.lastPinTimestamp);
        (e.lastMessageId !== n.lastMessageId || e.lastPinTimestamp !== i) && ((t = !0), (e.lastMessageId = n.lastMessageId), (e.lastPinTimestamp = i));
    }
    return t;
}
function tZ() {
    ep = null;
}
function tF(e) {
    let { readStates: t } = e;
    (eh = !0),
        eN(),
        t.forEach((e) => {
            var t;
            let n = null !== (t = e.type) && void 0 !== t ? t : er.W.CHANNEL;
            (e.type = n), null == ek._readStates[n] && (ek._readStates[n] = {}), (ek._readStates[n][e.channelId] = (0, d.gh)(e, ek));
        });
}
function tV(e) {
    let { channelId: t, chatOpen: n } = e;
}
function tj(e, t, n) {
    e.forEach((e) => {
        let { channelId: t, messageId: n, readStateType: i } = e;
        ek.get(t, i).ack({
            messageId: n,
            local: !0,
            immediate: void 0,
            force: void 0,
            isExplicitUserAction: !0
        });
    }),
        t !== ee.e3s ||
            (em.push(
                ...e.map((e) => ({
                    channel_id: e.channelId,
                    message_id: e.messageId,
                    read_state_type: e.readStateType
                }))
            ),
            eg || eL(n));
}
function tH(e) {
    let { channels: t, context: n, onFinished: i } = e;
    tj(
        t.filter((e) => null != e.messageId && t$.hasUnreadOrMentions(e.channelId, e.readStateType)),
        n,
        i
    );
}
function tY(e) {
    let { channelId: t, windowId: n } = e;
    return !ey.hasWindowId(t, n) && (ey.addWindowId(t, n), eX(t));
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
    let { channelId: t } = e;
    return eX(t);
}
function tq(e) {
    let { changesByChannelId: t } = e;
    for (let e in t) {
        var n, i;
        let r = t[e],
            a = ek.getIfExists(e);
        if (null != a) for (let e of [null === (n = r.new_messages) || void 0 === n ? void 0 : n[0]].concat(null !== (i = r.modified_messages) && void 0 !== i ? i : []).filter(U.lm)) 1 === B.default.compare(e.id, a.lastMessageId) && (a.lastMessageId = e.id);
    }
}
function tQ(e) {
    var t;
    let { ackedId: n } = e,
        i = null === (t = J.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == i) return !1;
    let r = ek.get(i, er.W.MESSAGE_REQUESTS);
    if (n === r.ackMessageId) return !1;
    (r.ackMessageId = n),
        r.ack({
            messageId: n,
            isExplicitUserAction: !0
        });
}
function tX(e) {
    var t;
    let n = null === (t = J.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == n) return !1;
    let i = ek.get(n, er.W.MESSAGE_REQUESTS);
    if (null == i.ackMessageId) return !1;
    i.ackMessageId = void 0;
}
class tJ extends (r = l.ZP.Store) {
    initialize() {
        let e = [j.Z, J.default, Y.Z, H.Z, V.Z, Q.Z, K.Z, z.Z, p.Z, R.Z, O.Z, F.ZP, v.ZP, E.Z, m.Z, X.ZP, $.Z, A.Z, I.Z, x.Z, b.Z];
        this.waitFor(...e), this.syncWith([F.ZP], tS);
    }
    getReadStatesByChannel() {
        var e;
        return null !== (e = ek._readStates[er.W.CHANNEL]) && void 0 !== e ? e : {};
    }
    getForDebugging(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL;
        return ek.getIfExists(e, t);
    }
    getNotifCenterReadState(e) {
        var t;
        return null === (t = ek._readStates[er.W.NOTIFICATION_CENTER]) || void 0 === t ? void 0 : t[e];
    }
    hasUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL;
        return ek.getValue(e, t, (e) => e.canBeUnread() && e.hasUnread(), !1);
    }
    hasUnreadOrMentions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL;
        return ek.getValue(e, t, (e) => e.canBeUnread() && e.hasUnreadOrMentions(), !1);
    }
    hasTrackedUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL;
        return ek.getValue(e, t, (e) => e.canTrackUnreads() && e.hasUnread(), !1);
    }
    isForumPostUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL;
        return ek.getValue(e, t, (e) => e.isForumPostUnread(), !1);
    }
    getUnreadCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL;
        return ek.getValue(e, t, (e) => (e.canBeUnread() ? e.unreadCount : 0), 0);
    }
    getMentionCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL,
            n = ek.getValue(e, t, (e) => (e.canHaveMentions() ? e.getMentionCount() : 0), 0);
        return (0, h.Z)(e) && n > 0 ? 1 : n;
    }
    getIsMentionLowImportance(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL;
        return t === er.W.CHANNEL && ek.getValue(e, t, (e) => e.isMentionLowImportance, !1);
    }
    getGuildChannelUnreadState(e, t, n, i, r) {
        return ek.getValue(e.id, er.W.CHANNEL, (a) => a.getGuildChannelUnreadState(e, t, n, i, r), {
            mentionCount: 0,
            unread: !1,
            isMentionLowImportance: !1
        });
    }
    hasRecentlyVisitedAndRead(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL;
        return ek.getValue(e, t, (e) => e.hasRecentlyVisitedAndRead(), !1);
    }
    ackMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL;
        return ek.getValue(e, t, (e) => (e.canBeUnread() ? e.ackMessageId : null), null);
    }
    getTrackedAckMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL;
        return ek.getValue(e, t, (e) => (e.canTrackUnreads() ? e._ackMessageId : null), null);
    }
    lastMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL;
        return ek.getValue(e, t, (e) => e.lastMessageId, null);
    }
    lastMessageTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL;
        return ek.getValue(e, t, (e) => e.lastMessageTimestamp, 0);
    }
    lastPinTimestamp(e) {
        return ek.getValue(e, er.W.CHANNEL, (e) => e.lastPinTimestamp, null);
    }
    getOldestUnreadMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL;
        return ek.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadMessageId : null), null);
    }
    getOldestUnreadTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL;
        return ek.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0), 0);
    }
    isEstimated(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL;
        return ek.getValue(e, t, (e) => e.estimated, !1);
    }
    hasOpenedThread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.W.CHANNEL;
        return ek.getValue(e, t, (e) => e._persisted, !1);
    }
    hasUnreadPins(e) {
        return ek.getValue(e, er.W.CHANNEL, (e) => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1);
    }
    isNewForumThread(e, t, n) {
        let i = ek.get(t);
        if (!0 === ek.get(e)._persisted || null == i.ackMessageIdAtChannelSelect || 0 >= B.default.compare(e, i.ackMessageIdAtChannelSelect)) return !1;
        let r = eK(n);
        return B.default.extractTimestamp(e) > r;
    }
    getAllReadStates(e) {
        let t = [];
        return (
            ek.forEach((n) => {
                switch (n.type) {
                    case er.W.GUILD_HOME:
                    case er.W.GUILD_EVENT:
                    case er.W.GUILD_ONBOARDING_QUESTION:
                        null != Y.Z.getGuild(n.channelId) && t.push(n.serialize(e));
                        break;
                    case er.W.NOTIFICATION_CENTER:
                    case er.W.MESSAGE_REQUESTS:
                        var i;
                        B.default.cast(null === (i = J.default.getCurrentUser()) || void 0 === i ? void 0 : i.id) === n.channelId && t.push(n.serialize(e));
                        break;
                    default:
                        t.push(n.serialize(e));
                }
            }),
            t
        );
    }
    getGuildUnreadsSentinel(e) {
        return ek.getGuildSentinels(e).unreadsSentinel;
    }
    getMentionChannelIds() {
        return ek.getMentionChannelIds();
    }
    getNonChannelAckId(e) {
        var t;
        let n = null === (t = J.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
        return null == n ? null : ek.get(n, e).ackMessageId;
    }
    getSnapshot(e, t) {
        let n = ek.get(e);
        return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot;
    }
}
es(tJ, 'displayName', 'ReadStateStore');
let t$ = new tJ(f.Z, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: tq,
        CONNECTION_OPEN: e$,
        CONNECTION_OPEN_SUPPLEMENTAL: e4,
        LOGOUT: e0,
        OVERLAY_INITIALIZE: e6,
        CACHE_LOADED: tF,
        GUILD_CREATE: e5,
        LOAD_MESSAGES_SUCCESS: e7,
        MESSAGE_CREATE: e9,
        MESSAGE_DELETE: e8,
        MESSAGE_DELETE_BULK: e8,
        MESSAGE_ACK: tP,
        CHANNEL_ACK: tL,
        CHANNEL_LOCAL_ACK: tw,
        CHANNEL_PINS_ACK: tx,
        CHANNEL_PINS_UPDATE: tG,
        CHANNEL_SELECT: tb,
        VOICE_CHANNEL_SELECT: tA,
        CHANNEL_CREATE: tt,
        THREAD_CREATE: tn,
        THREAD_UPDATE: ta,
        THREAD_LIST_SYNC: tl,
        LOAD_THREADS_SUCCESS: tu,
        LOAD_ARCHIVED_THREADS_SUCCESS: tu,
        SEARCH_FINISH: td,
        MOD_VIEW_SEARCH_FINISH: td,
        THREAD_MEMBER_UPDATE: ts,
        THREAD_MEMBERS_UPDATE: to,
        CHANNEL_DELETE: tT,
        THREAD_DELETE: tT,
        WINDOW_FOCUS: tR,
        UPDATE_CHANNEL_DIMENSIONS: tD,
        CURRENT_USER_UPDATE: tZ,
        BULK_ACK: tH,
        ENABLE_AUTOMATIC_ACK: tY,
        DISABLE_AUTOMATIC_ACK: tW,
        GUILD_FEATURE_ACK: tM,
        GUILD_SCHEDULED_EVENT_CREATE: t_,
        GUILD_SCHEDULED_EVENT_UPDATE: tp,
        GUILD_SCHEDULED_EVENT_DELETE: th,
        GUILD_DELETE: ty,
        GUILD_UPDATE: tI,
        RESORT_THREADS: tc,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: tV,
        DECAY_READ_STATES: eN,
        NOTIFICATION_CENTER_ITEM_CREATE: tE,
        RELATIONSHIP_ADD: tm,
        RELATIONSHIP_REMOVE: tg,
        NOTIFICATION_CENTER_ITEMS_ACK: tv,
        USER_NON_CHANNEL_ACK: tk,
        PASSIVE_UPDATE_V2: tB,
        CLEAR_OLDEST_UNREAD_MESSAGE: tK,
        TRY_ACK: tz,
        MESSAGE_REQUEST_ACK: tQ,
        MESSAGE_REQUEST_CLEAR_ACK: tX
    }),
    t0 = t$;
