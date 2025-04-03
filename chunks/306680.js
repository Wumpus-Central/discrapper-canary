let r;
n.d(t, {
    Ex: () => eR,
    ZP: () => t0
}),
    n(47120),
    n(411104),
    n(653041),
    n(789020);
var i,
    o = n(392711),
    a = n(913527),
    s = n.n(a),
    l = n(442837),
    c = n(544891),
    u = n(846519),
    d = n(283693),
    f = n(570140),
    _ = n(317381),
    p = n(358221),
    h = n(702321),
    m = n(430198),
    g = n(710845),
    E = n(353926),
    b = n(924301),
    y = n(777639),
    v = n(355298),
    O = n(869404),
    I = n(333984),
    S = n(572804),
    T = n(140155),
    N = n(398758),
    A = n(725319),
    C = n(344185),
    R = n(569471),
    P = n(195663),
    w = n(723170),
    D = n(581883),
    L = n(131704),
    x = n(386438),
    M = n(70956),
    k = n(630388),
    j = n(823379),
    U = n(931619),
    G = n(709054),
    B = n(314897),
    F = n(433355),
    V = n(592125),
    Z = n(796974),
    H = n(486472),
    W = n(430824),
    Y = n(517100),
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
    er = n(765305),
    ei = n(490897),
    eo = n(124368);
function ea(e, t, n) {
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
let es = new g.Z('ReadStateStore'),
    el = 2;
__OVERLAY__ && (r = n(237997).default);
let ec = ee.S7T.VIEW_CHANNEL | ee.S7T.READ_MESSAGE_HISTORY,
    eu = 100,
    ed = 1,
    ef = Q.Z.getChannelId(),
    e_ = null,
    ep = null,
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
        for (let [t, n] of G.default.entries(this.channelWindowIds)) e(t, n);
    }
    constructor() {
        ea(this, 'channelWindowIds', {});
    }
}
let ey = new eb(),
    ev = 30 * M.Z.Millis.DAY;
function eO() {
    return G.default.fromTimestamp(Date.now() - ev);
}
let eI = 0,
    eS = 0,
    eT = null;
function eN() {
    (eI = Date.now() - 7 * M.Z.Millis.DAY),
        (eS = Date.now() - 3 * M.Z.Millis.DAY),
        clearTimeout(eT),
        (eT = setTimeout(() => {
            f.Z.dispatch({ type: 'DECAY_READ_STATES' });
        }, +M.Z.Millis.HOUR));
}
function eA(e) {
    if (null == e) return 0;
    let t = Date.parse(e);
    return isNaN(t) ? 0 : t;
}
function eC(e) {
    return {
        id: e.id,
        read_state_type: e.read_state_type,
        mention_count: e.badge_count,
        last_message_id: e.last_acked_id
    };
}
function eR(e, t) {
    let n = V.Z.getChannel(e.channel_id);
    return (
        !(null == n || q.Z.isBlockedOrIgnoredForMessage(e)) &&
        !!(
            (0, S.ZP)({
                message: e,
                userId: t.id,
                suppressEveryone: X.ZP.isSuppressEveryoneEnabled(n.guild_id),
                suppressRoles: X.ZP.isSuppressRolesEnabled(n.guild_id)
            }) || eP(n)
        )
    );
}
function eP(e) {
    return null != e && e.isPrivate() && !X.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
}
async function ew(e) {
    if (0 === em.length) {
        (eg = !1), null == e || e();
        return;
    }
    eg = !0;
    let t = em.splice(0, eu);
    await eL(() =>
        c.tn.post({
            url: ee.ANM.BULK_ACK,
            body: { read_states: t },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ),
        await (0, u.GR)(1000 * ed),
        ew(e);
}
let eD = 3;
async function eL(e) {
    let t = B.default.getId();
    for (let n = 0; n < eD; n++)
        try {
            return await e();
        } catch (e) {
            if ((es.error('', e), n + 1 < eD && (await (0, u.GR)((n + 1) * 2000), await U.Z.awaitOnline(), t !== B.default.getId()))) return Promise.reject(Error('User changed.'));
        }
}
function ex(e, t) {}
function eM(e) {
    if ((ex(e, 'shouldAutomaticallyAck called'), e.type !== ei.W.CHANNEL)) return ex(e, 'not channel read state'), !1;
    let t = V.Z.getChannel(e.channelId),
        n = null != t && t.isForumPost();
    if (null != _.ZP.getConnectedActivityChannelId() && _.ZP.getActivityPanelMode() === et.Ez.PANEL && _.ZP.getFocusedLayout() === et.MI.NO_CHAT) return ex(e, 'In activity'), !1;
    if (Y.Z.isIdle()) return ex(e, 'Is idle'), !1;
    if (!e.canTrackUnreads()) return ex(e, 'Cannot track unreads'), !1;
    if ((null == t ? void 0 : t.isForumLikeChannel()) !== !0) {
        let t = ey.isAnyWindowFocused(e.channelId),
            n = null != r && r.isInstanceFocused() && r.isPinned(ee.Odu.TEXT);
        if (!t && !n) return !1;
    }
    if (n && !e._persisted) return ex(e, 'unpersisted forum post'), !0;
    if (!e.hasUnreadOrMentions()) return ex(e, 'No unread or mentions'), !1;
    if ((null == t ? void 0 : t.isForumLikeChannel()) === !0) return ex(e, 'Forum-like channel'), !1;
    if (!(n && !e._isJoinedThread) && !Z.Z.isAtBottom(e.channelId)) return ex(e, 'Not at bottom'), !1;
    let i = p.Z.getLayout(e.channelId),
        o = p.Z.getChatOpen(e.channelId);
    if (!o && (i === ee.AEg.NO_CHAT || i === ee.AEg.FULL_SCREEN)) return ex(e, 'Fullscreen video'), !1;
    if (!ey.isChannelAckable(e.channelId)) return ex(e, 'Not ackable'), !1;
    let a = K.Z.getMessages(e.channelId);
    return null == a || !a.ready || a.loadingMore ? (ex(e, 'Still loading messages'), !1) : (0, A._E)() || o ? (ex(e, 'Acked'), !0) : (ex(e, 'Chat not focused'), !1);
}
class ek {
    static forEach(e) {
        for (let n of Object.keys(ek._readStates)) {
            var t;
            let r = null != (t = ek._readStates[parseInt(n)]) ? t : {};
            for (let t of Object.keys(r)) if (!1 === e(r[t])) break;
        }
    }
    static get(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL,
            r = null == (t = ek._readStates[n]) ? void 0 : t[e];
        return null == r && ((r = new ek(e, n)), null == ek._readStates[n] && (ek._readStates[n] = {}), (ek._readStates[n][e] = r)), r;
    }
    static getGuildSentinels(e) {
        return null == this._guildReadStateSentinels[e] && (this._guildReadStateSentinels[e] = { unreadsSentinel: 0 }), this._guildReadStateSentinels[e];
    }
    static resetGuildSentinels() {
        this._guildReadStateSentinels = {};
    }
    static getIfExists(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return null == (t = ek._readStates[n]) ? void 0 : t[e];
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
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL,
            r = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0,
            o = null == (t = ek._readStates[n]) ? void 0 : t[e];
        return null == o ? i : r(o);
    }
    static clear(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return (null == (t = ek._readStates[n]) ? void 0 : t[e]) != null && (delete ek._readStates[n][e], ek._mentionChannels.delete(e), !0);
    }
    static clearAll() {
        (ek._readStates = {}), ek._mentionChannels.clear();
    }
    serialize(e) {
        let { channelId: t, type: n, _guildId: r, _isThread: i, _isActiveThread: o, _isJoinedThread: a, _persisted: s, loadedMessages: l, _lastMessageId: c, _lastMessageTimestamp: u, _ackMessageId: d, _ackMessageTimestamp: f, ackPinTimestamp: _, isManualAck: p, lastPinTimestamp: h, _oldestUnreadMessageId: m, oldestUnreadMessageIdStale: g, estimated: E, _mentionCount: b, flags: y, lastViewed: v } = this;
        if (e)
            return {
                channelId: t,
                type: n,
                _guildId: r,
                _isThread: i,
                _isActiveThread: o,
                _isJoinedThread: a,
                _persisted: s,
                loadedMessages: l,
                _lastMessageId: c,
                _lastMessageTimestamp: u,
                _ackMessageId: d,
                _ackMessageTimestamp: f,
                ackPinTimestamp: _,
                isManualAck: p,
                lastPinTimestamp: h,
                _oldestUnreadMessageId: m,
                oldestUnreadMessageIdStale: g,
                estimated: E,
                _mentionCount: b,
                flags: y,
                lastViewed: v
            };
        let O = {
            channelId: t,
            type: n,
            _guildId: r,
            _persisted: s,
            _lastMessageId: c,
            _lastMessageTimestamp: u,
            _ackMessageId: d,
            _ackMessageTimestamp: f,
            ackPinTimestamp: _,
            lastPinTimestamp: h,
            _mentionCount: b,
            flags: y
        };
        return null != v && v > 0 && (O.lastViewed = v), i && ((O._isThread = i), (O._isActiveThread = o), (O._isJoinedThread = a)), O;
    }
    deserializeForOverlay(e) {
        let { channelId: t, type: n, _guildId: r, _isThread: i, _isActiveJoinedThread: o, _isActiveThread: a, _isJoinedThread: s, _persisted: l, loadedMessages: c, _lastMessageId: u, _lastMessageTimestamp: d, _ackMessageId: f, _ackMessageTimestamp: _, ackPinTimestamp: p, isManualAck: h, lastPinTimestamp: m, _oldestUnreadMessageId: g, oldestUnreadMessageIdStale: E, estimated: b, _unreadCount: y, _mentionCount: v, flags: O, lastViewed: I } = e;
        (this.channelId = t), (this.type = null != n ? n : ei.W.CHANNEL), (this._guildId = r), (this._isThread = null != i && i), null != o ? ((this._isActiveThread = o), (this._isJoinedThread = o)) : ((this._isActiveThread = null != a && a), (this._isJoinedThread = null != s && s)), (this._persisted = !1 !== l), (this.loadedMessages = null != c && c), (this._lastMessageId = u), (this._lastMessageTimestamp = d), (this._ackMessageId = f), (this._ackMessageTimestamp = _), (this.ackPinTimestamp = p), (this.isManualAck = null != h && h), (this.lastPinTimestamp = m), (this._oldestUnreadMessageId = g), (this.oldestUnreadMessageIdStale = null != E && E), (this.estimated = null != b && b), (this._unreadCount = null != y ? y : 0), (this._mentionCount = v), (this.flags = O), (this.lastViewed = I), ek._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && ek._mentionChannels.add(this.channelId);
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
        if (this.type !== ei.W.CHANNEL) return !1;
        let e = V.Z.getChannel(this.channelId);
        return null != e && e.isPrivate();
    }
    rebuildChannelState(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 ? arguments[2] : void 0;
        if (((this.ackMessageId = null != (t = null != e ? e : this._ackMessageId) ? t : this.guessAckMessageId()), (this.isManualAck = null != e), (this.oldestUnreadMessageId = null), (this.estimated = !1), (this.unreadCount = 0), r && (this.mentionCount = 0), this.hasUnread())) {
            let e = J.default.getCurrentUser(),
                t = this.getAckTimestamp(),
                i = !1,
                o = !1,
                a = null,
                s = K.Z.getMessages(this.channelId);
            s.forAll((n) => {
                if (i) {
                    var s;
                    this.oldestUnreadMessageId = null != (s = this._oldestUnreadMessageId) ? s : n.id;
                } else i = n.id === this._ackMessageId;
                G.default.extractTimestamp(n.id) > t ? (this.unreadCount++, r && eR(n, e) && this.mentionCount++, (a = null != a ? a : n.id)) : (o = !0);
            }),
                (this.estimated = !s.hasPresent() || (!(i || o) && s.length === this.unreadCount)),
                (this.oldestUnreadMessageId = null != (n = this._oldestUnreadMessageId) ? n : a);
        }
        null != i && (this.mentionCount = i);
    }
    handleGuildEventRemoval(e, t) {
        var n;
        if (G.default.compare(this.ackMessageId, t) >= 0) return;
        let r = b.ZP.getGuildScheduledEventsForGuild(e),
            i = this.getAckTimestamp();
        if (isNaN(i)) return;
        let o = null != (n = this._ackMessageId) ? n : G.default.fromTimestamp(i),
            a = null,
            s = 0;
        r.forEach((e) => {
            (0, b.Ld)(e) && (G.default.compare(e.id, a) > 0 && (a = e.id), G.default.compare(e.id, o) > 0 && s++);
        }),
            (this.lastMessageId = a),
            (this.mentionCount = s);
    }
    canTrackUnreads() {
        if (this.type !== ei.W.CHANNEL) return !0;
        if ((this._isThread && !this._isActiveThread) || this._isResourceChannel) return !1;
        let e = V.Z.getBasicChannel(this.channelId);
        return null != e && ('basicPermissions' in e ? x.Z.has(e.basicPermissions, ee.S7T.VIEW_CHANNEL) : !m.Z.isChannelGated(this.guildId, this.channelId) || z.Z.can(ee.Plq.VIEW_CHANNEL, e));
    }
    canBeUnread() {
        return !((this._isThread && !this._isJoinedThread) || (0, O.h3)(this.channelId, [v.Z, I.Z]) || (!this._isThread && (0, N.r1)(this._guildId) && (this._lastMessageTimestamp < eI || (!X.ZP.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())))) && this.canTrackUnreads();
    }
    canHaveMentions() {
        return !(0 === this.mentionCount || (this._isThread && !this._isJoinedThread) || (0, O.h3)(this.channelId, [v.Z, I.Z]) || ((0, N.r1)(this._guildId) && this._lastMessageTimestamp < eI)) && this.canTrackUnreads();
    }
    getGuildChannelUnreadState(e, t, n, r, i) {
        if (t && (this._lastMessageTimestamp < eI || (!X.ZP.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0)))
            return {
                mentionCount: 0,
                unread: !1,
                isMentionLowImportance: !1
            };
        if ('basicPermissions' in e) {
            if (!x.Z.has(e.basicPermissions, ee.S7T.VIEW_CHANNEL))
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
        return r || i
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
        return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > eS && D.Z.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp();
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
                eL(() =>
                    c.tn.post({
                        url: ee.ANM.PINS_ACK(this.channelId),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                );
        }
        let t = eA(e);
        return (this.ackPinTimestamp = 0 !== t ? t : this.lastPinTimestamp), !0;
    }
    ack(e) {
        let { messageId: t, local: n = !1, immediate: r = !1, force: i = !1, isExplicitUserAction: o = !1, location: a = { section: ee.jXE.CHANNEL }, trackAnalytics: s = !0 } = e;
        if (!this._shouldAck(i, n, o) || (!i && !this.canTrackUnreads())) return !1;
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
                                  this.type === ei.W.CHANNEL ? this._ack(a, s) : this._nonChannelAck(), (this.outgoingAck = null), (this.outgoingAckTimer = null);
                              },
                              l || r ? 0 : 3000
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
        var r;
        return !!e || !!n || !!t || (!this.isManualAck && (this.type !== ei.W.CHANNEL || !!this.loadedMessages || !!(null == (r = V.Z.getChannel(this.channelId)) ? void 0 : r.isForumLikeChannel())));
    }
    _ack(e, t) {
        let { outgoingAck: r } = this;
        if (null == r) return;
        let i = B.default.getId(),
            o = ep;
        this._persisted = !0;
        let a = this.recalculateFlags(),
            s = a === this.flags ? void 0 : a;
        eL(() =>
            c.tn.post({
                url: ee.ANM.MESSAGE_ACK(this.channelId, r),
                body: {
                    token: ep,
                    last_viewed: this.lastViewed,
                    flags: s
                },
                oldFormErrors: !0,
                rejectWithError: !0
            })
        ).then((e) => {
            null != e &&
                (ep === o && i === B.default.getId() && (ep = e.body.token),
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
        if (this.type !== ei.W.CHANNEL) return;
        let e = V.Z.getChannel(this.channelId);
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
                eL(() =>
                    c.tn.post({
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
        es.log('Deleting ReadState', this.channelId, this.type, {
            remote: t,
            persisted: this._persisted,
            channelMissing: null == n,
            isOld: eq(this, eO()),
            validType: null != n && L.AW.has(n.type),
            readableType: null != n && (0, L.Em)(n.type),
            oldThreadCutoff: eO(),
            mentionCount: this.mentionCount,
            channelId: this.channelId,
            ackMessageId: this._ackMessageId,
            lastMessageId: this._lastMessageId
        }),
            t &&
                this._persisted &&
                c.tn.del({
                    url: ee.ANM.CHANNEL_ACK(this.channelId),
                    body: {
                        version: el,
                        read_state_type: this.type
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0
                }),
            null == (e = ek._readStates[this.type]) || delete e[this.channelId],
            ek._mentionChannels.delete(this.channelId);
    }
    shouldDeleteReadState(e) {
        if (0 !== H.Z.totalUnavailableGuilds) return !1;
        if (null != this.type && this.type !== ei.W.CHANNEL) return !eQ(this);
        let t = V.Z.getBasicChannel(this.channelId);
        if (null == t)
            if (eq(this, e)) return !0;
            else return !1;
        return !!L.AW.has(t.type) && (!(0, L.Em)(t.type) || (!(0, L.hv)(t.type) && !(!(L.Ec.has(t.type) && ez(this, t, e)) && (!(this.mentionCount > 0) || z.Z.canBasicChannel(ec, t)))));
    }
    getAckTimestamp() {
        let e, t;
        if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
        if (this._isThread) return (this._ackMessageTimestamp = eY(this.guildId, this.channelId)), (this._ackMessageId = G.default.fromTimestamp(this._ackMessageTimestamp)), this._ackMessageTimestamp;
        if (this.type === ei.W.GUILD_EVENT || this.type === ei.W.GUILD_ONBOARDING_QUESTION) e = W.Z.getGuild(this.channelId);
        else if ((0, en.AB)(this.channelId)) e = W.Z.getGuild(this.guildId);
        else {
            let t = V.Z.getChannel(this.channelId);
            if (null != t) {
                let n = t.getGuildId();
                e = W.Z.getGuild(n);
            }
        }
        return null != e ? isNaN((t = eK(e))) && (t = G.default.extractTimestamp(this.channelId)) : (t = G.default.extractTimestamp(this.channelId)), (this._ackMessageTimestamp = t), t;
    }
    get oldestUnreadTimestamp() {
        return null != this.oldestUnreadMessageId ? G.default.extractTimestamp(this.oldestUnreadMessageId) : 0;
    }
    syncThreadSettings() {
        this._isThread = !0;
        let e = V.Z.getChannel(this.channelId);
        if (null == e) return es.warn('syncThreadSettings called with channel not in memory '.concat(this.channelId)), !1;
        let t = this.guildId,
            n = null != t && C.Z.isActive(t, e.parent_id, this.channelId),
            r = R.Z.hasJoined(this.channelId);
        return (this._isActiveThread !== n || this._isJoinedThread !== r) && ((this._isActiveThread = n), (this._isJoinedThread = r), !0);
    }
    recordLastViewedTime() {
        let e = Math.ceil((Date.now() - G.DISCORD_EPOCH) / M.Z.Millis.DAY);
        e !== this.lastViewed &&
            ((this.lastViewed = e),
            this.canTrackUnreads() &&
                !this.hasUnread() &&
                this.ack({
                    force: !0,
                    trackAnalytics: !1
                }));
    }
    constructor(e, t = ei.W.CHANNEL) {
        ea(this, 'channelId', void 0), ea(this, 'type', ei.W.CHANNEL), ea(this, '_guildId', void 0), ea(this, '_isThread', void 0), ea(this, '_isActiveThread', void 0), ea(this, '_isJoinedThread', void 0), ea(this, '_isResourceChannel', void 0), ea(this, '_persisted', void 0), ea(this, 'loadedMessages', void 0), ea(this, '_lastMessageId', void 0), ea(this, '_lastMessageTimestamp', void 0), ea(this, '_ackMessageId', void 0), ea(this, '_ackMessageTimestamp', void 0), ea(this, 'isManualAck', void 0), ea(this, 'ackPinTimestamp', void 0), ea(this, 'lastPinTimestamp', void 0), ea(this, '_oldestUnreadMessageId', void 0), ea(this, 'oldestUnreadMessageIdStale', void 0), ea(this, 'estimated', void 0), ea(this, '_unreadCount', void 0), ea(this, '_mentionCount', void 0), ea(this, 'flags', void 0), ea(this, 'lastViewed', void 0), ea(this, 'outgoingAck', void 0), ea(this, 'outgoingAckTimer', null), ea(this, 'ackMessageIdAtChannelSelect', null), ea(this, 'ackedWhileCached', void 0), ea(this, 'snapshot', void 0), (this.channelId = e), (this.type = t), (this._guildId = null), (this._isThread = !1), (this._isActiveThread = !1), (this._isJoinedThread = !1), (this._isResourceChannel = !1), (this._persisted = !1), (this.loadedMessages = !1), (this._lastMessageId = null), (this._lastMessageTimestamp = 0), (this._ackMessageId = null), (this._ackMessageTimestamp = 0), (this.isManualAck = !1), (this.ackPinTimestamp = 0), (this.lastPinTimestamp = 0), (this._oldestUnreadMessageId = null), (this.oldestUnreadMessageIdStale = !1), (this.estimated = !1), (this._unreadCount = 0), (this._mentionCount = 0), (this.outgoingAck = null);
    }
}
function ej(e) {
    e.forEach((e) => {
        if ((0, L.Em)(e.type)) {
            let t = ek.get(e.id);
            (t._guildId = e.guild_id), (t.lastMessageId = e.lastMessageId), (t.lastPinTimestamp = eA(e.lastPinTimestamp)), (t._isResourceChannel = e.hasFlag(en.zZ.IS_GUILD_RESOURCE_CHANNEL)), L.Ec.has(e.type) && t.syncThreadSettings();
        }
    });
}
function eU(e) {
    e.forEach((e) => {
        if ((0, L.Em)(e.type)) {
            var t;
            let n = ek.get(e.id);
            (n.lastMessageId = e.last_message_id), (n.lastPinTimestamp = eA(e.last_pin_timestamp)), (n._isResourceChannel = (0, k.yE)(null != (t = e.flags) ? t : 0, en.zZ.IS_GUILD_RESOURCE_CHANNEL)), L.Ec.has(e.type) && n.syncThreadSettings();
        }
    });
}
function eG(e) {
    eZ(e), eH(e), eV(e), eW(e);
}
function eB(e) {
    eF(e);
}
function eF(e) {
    let t = J.default.getCurrentUser();
    if (null == t) return !1;
    let n = ek.get(t.id, ei.W.NOTIFICATION_CENTER);
    e.forEach((e) => {
        if (null == e.since || e.type !== ee.OGo.PENDING_INCOMING) return;
        let t = new Date(e.since).getTime();
        (null != n.ackMessageId ? G.default.extractTimestamp(n.ackMessageId) : 0) < t && (n.mentionCount++, (n.lastMessageId = G.default.fromTimestamp(t)));
    });
}
function eV(e) {
    let t = 24;
    ek.get(e.id, ei.W.GUILD_HOME).lastMessageId = G.default.fromTimestamp(s()(Date.now()).subtract(t, 'h').valueOf());
}
function eZ(e) {
    var t;
    null == (t = e.threads) ||
        t.forEach((t) => {
            if (!L.AW.has(t.type)) return;
            let n = ek.get(t.id);
            (n.lastMessageId = t.lastMessageId), (n.lastPinTimestamp = eA(t.lastPinTimestamp)), (n._isThread = !0), (n._isActiveThread = !0), (n._isJoinedThread = null != t.member), null == n.ackMessageId && (n.ackMessageId = G.default.fromTimestamp(eY(e.id, t.id))), null == n.ackPinTimestamp && (n.ackPinTimestamp = eY(e.id, t.id));
        });
}
function eH(e) {
    var t, n;
    if ((null == (t = e.guild_scheduled_events) ? void 0 : t.length) === 0 && null == ek.getIfExists(e.id, ei.W.GUILD_EVENT)) return;
    let r = ek.get(e.id, ei.W.GUILD_EVENT);
    r._guildId = e.id;
    let i = 0,
        o = null,
        a = null != (n = r._ackMessageId) ? n : G.default.fromTimestamp(r.getAckTimestamp());
    e.guild_scheduled_events.forEach((e) => {
        G.default.compare(e.id, o) > 0 && (o = e.id), G.default.compare(e.id, a) > 0 && i++;
    }),
        (r.lastMessageId = o),
        (r.mentionCount = i);
}
function eW(e) {
    let t = W.Z.getGuild(e.id);
    if (null == t) return;
    let n = null == t ? void 0 : t.latestOnboardingQuestionId;
    if (null == n) return;
    let r = ek.get(t.id, ei.W.GUILD_ONBOARDING_QUESTION);
    (r._guildId = t.id), (r.lastMessageId = n);
}
function eY(e, t) {
    var n, r, i;
    let o = V.Z.getChannel(t),
        a = W.Z.getGuild(null != e ? e : null == o ? void 0 : o.guild_id),
        s = (null == o ? void 0 : o.isForumPost()) ? 0 : eK(a),
        l = (null != (i = null == (n = R.Z.joinTimestamp(t)) ? void 0 : n.getTime()) ? i : 0) - 5000;
    isNaN(l) && (l = -5000);
    let c = null == o || null == (r = o.threadMetadata) ? void 0 : r.archiveTimestamp,
        u = null != c ? new Date(c).getTime() - 1 : 0;
    isNaN(u) && (u = 0);
    let d = Math.max(l, u);
    return d <= 0 && (d = G.default.extractTimestamp(t) - 1), (isNaN(d) || d <= 0) && (d = 0), isNaN(s) ? d : Math.max(s, d);
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
    let r = e.guildId;
    return !(null != r && C.Z.isActive(r, t.parent_id, e.channelId)) && eq(e, n);
}
function eq(e, t) {
    return e.mentionCount > 0 || !(G.default.compare(e.channelId, t) > 0 || (null != e._ackMessageId && G.default.compare(e._ackMessageId, t) > 0) || (null != e._lastMessageId && G.default.compare(e._lastMessageId, t) > 0));
}
function eQ(e) {
    switch (e.type) {
        case ei.W.GUILD_HOME:
        case ei.W.GUILD_EVENT:
        case ei.W.GUILD_ONBOARDING_QUESTION:
            return null != W.Z.getGuild(e.channelId);
        case ei.W.NOTIFICATION_CENTER:
            var t;
            return G.default.cast(null == (t = J.default.getCurrentUser()) ? void 0 : t.id) === e.channelId;
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
    if (t.type !== ei.W.CHANNEL) return;
    let n = V.Z.getChannel(t.channelId);
    if (null == n || !n.isForumPost() || null == n.parent_id) return;
    let r = n.parent_id,
        i = ek.get(r);
    C.Z.hasLoaded(n.guild_id) && G.default.keys(C.Z.getThreadsForParent(n.guild_id, r)).every((e) => t$.hasOpenedThread(e) || 0 > G.default.compare(e, i.ackMessageId)) && i.ack({});
}
function e$(e) {
    var t, n;
    let { guilds: r, relationships: i, initialPrivateChannels: o, readState: a } = e;
    eN(),
        (ep = null),
        eh || a.partial || ek.clearAll(),
        (eh = !1),
        a.entries.forEach((e) => {
            var t, n;
            let r = null != (t = e.read_state_type) ? t : ei.W.CHANNEL;
            r !== ei.W.CHANNEL && (e = eC(e));
            let i = ek.get(e.id, r);
            (i._persisted = !0), (i._mentionCount = null != (n = e.mention_count) ? n : 0), (i.flags = e.flags), (i.lastViewed = e.last_viewed);
            let o = V.Z.getBasicChannel(e.id);
            null != o && (0, L.Q5)(o.type) && (null == e.last_message_id || 0 === e.last_message_id) ? (i.ackMessageId = G.default.fromTimestamp(eY(o.guild_id, o.id))) : i.ackedWhileCached ? -1 === G.default.compare(i.ackMessageId, e.last_message_id) && (i.ackMessageId = e.last_message_id) : (i.ackMessageId = e.last_message_id), (i.ackedWhileCached = void 0), (i.ackPinTimestamp = eA(e.last_pin_timestamp)), ek._mentionChannels.delete(i.channelId), i._mentionCount > 0 && i.canHaveMentions() && ek._mentionChannels.add(i.channelId);
        }),
        ek.resetGuildSentinels();
    let s = null == (t = J.default.getCurrentUser()) ? void 0 : t.id;
    for (let e of (null != s && (ek.get(s, ei.W.NOTIFICATION_CENTER).lastMessageId = G.default.fromTimestamp(Date.now())), eB(i), ej(o), r)) ej(null != (n = e.channels) ? n : []), e3(e), eG(e);
    e0(), (eE = setTimeout(() => e2(a.entries), 10 * M.Z.Millis.SECOND));
}
function e0() {
    null != eE && clearTimeout(eE);
}
ea(ek, '_guildReadStateSentinels', {}), ea(ek, '_readStates', {}), ea(ek, '_mentionChannels', new Set());
let e1 = (0, o.throttle)((e) => {
    e.delete();
}, 100);
function e2(e) {
    let t = eO();
    for (let r of e) {
        var n;
        let e = null != (n = r.read_state_type) ? n : ei.W.CHANNEL,
            i = ek.get(r.id, e);
        i.shouldDeleteReadState(t) && e1(i);
    }
}
function e3(e) {
    if (null != e.channelUpdates) {
        var t;
        ej(null == (t = e.channelUpdates) ? void 0 : t.writes);
    }
    if (null != e.channelTimestampUpdates)
        for (let t of e.channelTimestampUpdates) {
            let e = ek.get(t.id);
            null != t.last_message_id && (e.lastMessageId = t.last_message_id), null != t.last_pin_timestamp && (e.lastPinTimestamp = eA(t.last_pin_timestamp));
        }
}
function e4(e) {
    let { lazyPrivateChannels: t } = e;
    ej(t);
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
            t.deserializeForOverlay(e), t.type === ei.W.CHANNEL && t.rebuildChannelState();
        });
}
function e5(e) {
    var t;
    let { guild: n } = e,
        r = eO();
    ek.forEach((e) => {
        e.guildId === n.id && e.shouldDeleteReadState(r) && e.delete(!1);
    }),
        ej(null != (t = n.channels) ? t : []),
        e3(n),
        eG(n);
}
function e7(e) {
    let { channelId: t, isAfter: n, messages: r } = e,
        i = ek.get(t);
    i.loadedMessages = !0;
    let o = K.Z.getMessages(t);
    null != o && ((r.length > 0 && 1 === G.default.compare(r[0].id, i.ackMessageId) && 0 === i.unreadCount) || o.hasPresent() || o.jumpTargetId === i.ackMessageId ? i.rebuildChannelState() : n && null != i.ackMessageId && o.has(i.ackMessageId, !0) && ((i.unreadCount += r.length), null == i.oldestUnreadMessageId && i.rebuildChannelState())), eU(r.map((e) => e.thread).filter(j.lm));
}
function e8(e) {
    let { channelId: t } = e;
    ek.get(t).rebuildChannelState();
}
function e9(e) {
    let t,
        n,
        { channelId: i, message: o, isPushNotification: a } = e,
        s = ek.get(i),
        l = s.hasUnread(),
        c = null != s.lastMessageId && s.lastMessageId >= o.id;
    s.lastMessageId = o.id;
    let u = J.default.getCurrentUser(),
        d = V.Z.getBasicChannel(i);
    if (null != o.author && null != u && o.author.id === u.id && !ee.V$x.SELF_MENTIONABLE_SYSTEM.has(o.type))
        return (
            null != s.outgoingAck && s.clearOutgoingAck(),
            tL({
                channelId: i,
                messageId: o.id,
                manual: !1
            })
        );
    let f = (0, y.D)();
    if ((null == f ? void 0 : f.isReady()) === !0) {
        let e = f.getCurrentRoute();
        if (p.Z.getChatOpen(s.channelId)) t = s.channelId;
        else if ((null == e ? void 0 : e.name) === 'channel') t = e.params.channelId;
        else if ((null == e ? void 0 : e.name) === 'guilds') {
            var _;
            t = null == (_ = e.params) ? void 0 : _.channelId;
        }
    } else null == f && ((t = Q.Z.getChannelId()), (n = F.ZP.getCurrentSidebarChannelId(t)));
    let h = t === i || n === i;
    if ((h && eM(s) && !a) || (null != r && r.isInstanceFocused() && h && r.isInstanceLocked() && r.isPinned(ee.Odu.TEXT))) return s.ack({ messageId: o.id });
    if ((null == s.oldestUnreadMessageId || s.oldestUnreadMessageIdStale ? (s.oldestUnreadMessageId = o.id) : l || (0, A.nV)() === i || (s.oldestUnreadMessageId = o.id), !c && s.unreadCount++, !(q.Z.isBlockedOrIgnoredForMessage(o) || (o.type === ee.uaV.RECIPIENT_REMOVE && (null == d ? void 0 : d.type) === ee.d4z.GROUP_DM)))) {
        let { shouldMention: e, isMentionLowImportance: t } = te(o, u, s);
        e && ((s.isMentionLowImportance = t), s.mentionCount++);
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
    let r = V.Z.getChannel(e.channel_id);
    if (eP(r))
        return {
            shouldMention: !0,
            isMentionLowImportance: !1
        };
    if (X.ZP.mentionOnAllMessages && null != r) {
        if (r.isThread()) {
            if ((0, w.J)(r) === eo.iN.ALL_MESSAGES)
                return {
                    shouldMention: !0,
                    isMentionLowImportance: !0
                };
        } else if (!r.isVocal() && !X.ZP.isChannelMuted(r.guild_id, r.id) && X.ZP.resolvedMessageNotifications(r) === ee.bL.ALL_MESSAGES)
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
    if (!(0, L.Em)(t.type)) return !1;
    let n = ek.get(t.id);
    (n.lastMessageId = t.lastMessageId), (n.lastPinTimestamp = eA(t.lastPinTimestamp));
}
function tn(e) {
    let { channel: t } = e;
    tr(t), ti(t);
}
function tr(e) {
    if (!L.AW.has(e.type)) return !1;
    let t = ek.get(e.id);
    (t.lastMessageId = e.lastMessageId), (t.lastPinTimestamp = eA(e.lastPinTimestamp)), t.syncThreadSettings(), e.ownerId === B.default.getId() && (t.loadedMessages = !0);
}
function ti(e) {
    let t = e.parent_id;
    ek.get(t).lastMessageId = e.id;
    let n = J.default.getCurrentUser();
    if (e.ownerId === (null == n ? void 0 : n.id))
        return (
            (ek.get(e.id)._persisted = !0),
            tL({
                channelId: t,
                messageId: e.id,
                manual: !1
            })
        );
}
function to(e) {
    let { channel: t } = e;
    return !!L.AW.has(t.type) && ek.get(t.id).syncThreadSettings();
}
function ta(e) {
    let { id: t } = e;
    return ek.get(t).syncThreadSettings();
}
function ts(e) {
    return (0, P.s)(e) && ek.get(e.id).syncThreadSettings();
}
function tl(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        if (!L.AW.has(e.type)) return;
        let t = ek.get(e.id);
        if (((t.lastMessageId = e.lastMessageId), (t.lastPinTimestamp = eA(e.lastPinTimestamp)), (t._isThread = !0), (t._isActiveThread = !0), (t._isJoinedThread = R.Z.hasJoined(e.id)), e.isForumPost())) {
            let t = ek.get(e.parent_id);
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
    return eX(t);
}
function td(e) {
    let { messages: t, threads: n } = e;
    for (let e of t)
        eU(
            e
                .map((e) => {
                    let { thread: t } = e;
                    return t;
                })
                .filter(j.lm)
        );
    eU(n);
}
function tf(e) {
    let t = J.default.getCurrentUser();
    return null != e.creator_id && null != t && e.creator_id === t.id;
}
function t_(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id,
        r = ek.get(t.guild_id, ei.W.GUILD_EVENT);
    if (((r.lastMessageId = t.id), tf(t)))
        return void tM({
            type: 'GUILD_FEATURE_ACK',
            id: n,
            ackType: ei.W.GUILD_EVENT,
            ackedId: t.id,
            local: !1
        });
    !X.ZP.isMuteScheduledEventsEnabled(n) && r.mentionCount++;
}
function tp(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id;
    if (tf(t) || ![er.p1.CANCELED, er.p1.COMPLETED].includes(t.status)) return !1;
    ek.get(n, ei.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
}
function th(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id;
    if (tf(t)) return !1;
    ek.get(t.guild_id, ei.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
}
function tm(e) {
    let t = J.default.getCurrentUser();
    if (null == t || null == e.relationship.since || (e.relationship.type !== ee.OGo.PENDING_INCOMING && e.relationship.type !== ee.OGo.FRIEND)) return !1;
    let n = ek.get(t.id, ei.W.NOTIFICATION_CENTER),
        r = e.relationship.type === ee.OGo.FRIEND,
        i = r ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? G.default.extractTimestamp(n.ackMessageId) : 0) < i && ((n.lastMessageId = G.default.fromTimestamp(i)), T.Z.active ? tj(t.id, ei.W.NOTIFICATION_CENTER, void 0, !1) : r ? n.mentionCount-- : n.mentionCount++);
}
function tg(e) {
    let t = J.default.getCurrentUser();
    if (null == t || null == e.relationship.since || e.relationship.type !== ee.OGo.PENDING_INCOMING) return !1;
    let n = ek.get(t.id, ei.W.NOTIFICATION_CENTER),
        r = new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? G.default.extractTimestamp(n.ackMessageId) : 0) <= r && (n.mentionCount = Math.max(0, n.mentionCount - 1));
}
function tE(e) {
    var t;
    let { item: n } = e,
        r = null == (t = J.default.getCurrentUser()) ? void 0 : t.id;
    if (null == r) return !1;
    let i = ek.get(r, ei.W.NOTIFICATION_CENTER);
    if (((i.lastMessageId = n.id), T.Z.active || 0)) return void tj(r, ei.W.NOTIFICATION_CENTER, n.id, !1);
    i.mentionCount++;
}
function tb(e) {
    var t;
    let { ids: n, optimistic: r } = e;
    if (r || T.Z.active) return !1;
    let i = null == (t = J.default.getCurrentUser()) ? void 0 : t.id;
    if (null == i) return !1;
    let o = ek.get(i, ei.W.NOTIFICATION_CENTER);
    n.forEach((e) => {
        0 > G.default.compare(o.ackMessageId, e) && (o.mentionCount = Math.max(o.mentionCount - 1, 0));
    });
}
function ty(e) {
    let { guild: t } = e;
    return ek.clear(t.id, ei.W.GUILD_EVENT);
}
function tv(e) {
    let { guild: t } = e,
        n = t.latest_onboarding_question_id;
    if (null == n) return;
    let r = ek.get(t.id, ei.W.GUILD_ONBOARDING_QUESTION);
    (r._guildId = t.id), (r.lastMessageId = n);
}
function tO(e) {
    let { channel: t } = e;
    return ek.clear(t.id);
}
function tI(e) {
    let { channelId: t } = e,
        n = F.ZP.getCurrentSidebarChannelId(t),
        r = V.Z.getChannel(t);
    if (null != r) {
        var i;
        let e = ek.get(r.id);
        (e.ackMessageIdAtChannelSelect = null != (i = e.ackMessageId) ? i : G.default.fromTimestamp(e.getAckTimestamp())), e.recordLastViewedTime();
    }
    tN(ef), tN(e_);
    let o = !1;
    return ef !== t && ((o = tA(ef) || o), (o = tA(e_) || o)), (ef === t || ((null == r ? void 0 : r.type) != null && ee.TPd.GUILD_THREADS_ONLY.has(r.type))) && (o = eX(t) || o), ef === t && (o = eX(n) || o), (ef = t), (e_ = n), o;
}
function tS() {
    let e = F.ZP.getCurrentSidebarChannelId(ef),
        t = !1;
    return e_ !== e ? ((t = tA(e_)), (e_ = e)) : (t = eX(e) || t), t;
}
function tT(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let n = ek.get(t);
    if (!n.hasMentions()) return (n.oldestUnreadMessageId = null), n.ack({ isExplicitUserAction: !0 });
}
function tN(e) {
    null != e && (ek.get(e).isManualAck = !1);
}
function tA(e) {
    if (null == e) return !1;
    let t = ek.get(e);
    return !t.hasUnread() && ((t.oldestUnreadMessageId = null), !0);
}
function tC(e) {
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
    let n = ek.get(e);
    return t || n.hasUnread() || (n.oldestUnreadMessageIdStale = !0), eX(e);
}
function tP(e) {
    let { channelId: t } = e;
    return eX(t);
}
function tw(e) {
    let { channelId: t, messageId: n, immediate: r = !1, force: i = !1, context: o, location: a } = e,
        s = ek.get(t),
        l = s.ack({
            messageId: n,
            local: o !== ee.e3s,
            immediate: r,
            force: i,
            isExplicitUserAction: !0,
            location: a
        });
    return null != n ? (s.rebuildChannelState(), !0) : l;
}
function tD(e) {
    let { channelId: t, timestamp: n } = e;
    return ek.get(t).ackPins(n);
}
function tL(e) {
    let { channelId: t, messageId: n, manual: r, newMentionCount: i } = e,
        o = ek.get(t);
    return r
        ? (o.rebuildChannelState(n, !0, i), o.clearOutgoingAck(), !0)
        : n !== o._ackMessageId &&
              o.ack({
                  messageId: n,
                  local: !0
              });
}
function tx(e) {
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
    let { id: t, ackType: n, ackedId: r, local: i } = e;
    return tj(t, n, r, i);
}
function tk(e) {
    var t;
    let { ackType: n, ackedId: r, local: i } = e,
        o = null == (t = J.default.getCurrentUser()) ? void 0 : t.id;
    return null != o && tj(o, n, r, i);
}
function tj(e, t, n, r) {
    var i;
    let o = ek.get(e, t);
    return (
        n !== o.ackMessageId &&
        o.lastMessageId !== o.ackMessageId &&
        (null != o.lastMessageId || 0 !== o.mentionCount) &&
        ((n = null != (i = null != n ? n : o.lastMessageId) ? i : G.default.fromTimestamp(o.getAckTimestamp())),
        o.ack({
            messageId: n,
            local: null == r || r
        }))
    );
}
function tU(e) {
    let { channelId: t, lastPinTimestamp: n } = e,
        r = ek.get(t),
        i = eA(n);
    return r.lastPinTimestamp !== i && ((r.lastPinTimestamp = i), !0);
}
function tG(e) {
    let t = !1;
    for (let n of e.channels) {
        let e = ek.get(n.id),
            r = eA(n.lastPinTimestamp);
        (e.lastMessageId !== n.lastMessageId || e.lastPinTimestamp !== r) && ((t = !0), (e.lastMessageId = n.lastMessageId), (e.lastPinTimestamp = r));
    }
    return t;
}
function tB() {
    ep = null;
}
function tF(e) {
    let { readStates: t } = e;
    (eh = !0),
        eN(),
        t.forEach((e) => {
            var t;
            let n = null != (t = e.type) ? t : ei.W.CHANNEL;
            (e.type = n), null == ek._readStates[n] && (ek._readStates[n] = {}), (ek._readStates[n][e.channelId] = (0, d.gh)(e, ek));
        });
}
function tV(e) {
    let { channelId: t, chatOpen: n } = e;
}
function tZ(e, t, n) {
    e.forEach((e) => {
        let { channelId: t, messageId: n, readStateType: r } = e;
        ek.get(t, r).ack({
            messageId: n,
            local: !0,
            immediate: void 0,
            force: void 0,
            isExplicitUserAction: !0
        });
    }),
        t === ee.e3s &&
            (em.push(
                ...e.map((e) => ({
                    channel_id: e.channelId,
                    message_id: e.messageId,
                    read_state_type: e.readStateType
                }))
            ),
            eg || ew(n));
}
function tH(e) {
    let { channels: t, context: n, onFinished: r } = e;
    tZ(
        t.filter((e) => null != e.messageId && t$.hasUnreadOrMentions(e.channelId, e.readStateType)),
        n,
        r
    );
}
function tW(e) {
    let { channelId: t, windowId: n } = e;
    return !ey.hasWindowId(t, n) && (ey.addWindowId(t, n), eX(t));
}
function tY(e) {
    let { channelId: t, windowId: n } = e;
    return ey.removeWindowId(t, n), !1;
}
function tK(e) {
    let { channelId: t } = e;
    return tA(t);
}
function tz(e) {
    let { channelId: t } = e;
    return eX(t);
}
function tq(e) {
    let { changesByChannelId: t } = e;
    for (let e in t) {
        var n, r;
        let i = t[e],
            o = ek.getIfExists(e);
        if (null != o) for (let e of [null == (n = i.new_messages) ? void 0 : n[0]].concat(null != (r = i.modified_messages) ? r : []).filter(j.lm)) 1 === G.default.compare(e.id, o.lastMessageId) && (o.lastMessageId = e.id);
    }
}
function tQ(e) {
    var t;
    let { ackedId: n } = e,
        r = null == (t = J.default.getCurrentUser()) ? void 0 : t.id;
    if (null == r) return !1;
    let i = ek.get(r, ei.W.MESSAGE_REQUESTS);
    if (n === i.ackMessageId) return !1;
    (i.ackMessageId = n),
        i.ack({
            messageId: n,
            isExplicitUserAction: !0
        });
}
function tX(e) {
    var t;
    let n = null == (t = J.default.getCurrentUser()) ? void 0 : t.id;
    if (null == n) return !1;
    let r = ek.get(n, ei.W.MESSAGE_REQUESTS);
    if (null == r.ackMessageId) return !1;
    r.ackMessageId = void 0;
}
class tJ extends (i = l.ZP.Store) {
    initialize() {
        let e = [Z.Z, J.default, W.Z, H.Z, V.Z, Q.Z, K.Z, z.Z, p.Z, C.Z, R.Z, F.ZP, b.ZP, E.Z, m.Z, X.ZP, $.Z, T.Z, v.Z, D.Z, I.Z];
        this.waitFor(...e), this.syncWith([F.ZP], tS);
    }
    getReadStatesByChannel() {
        var e;
        return null != (e = ek._readStates[ei.W.CHANNEL]) ? e : {};
    }
    getForDebugging(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return ek.getIfExists(e, t);
    }
    getNotifCenterReadState(e) {
        var t;
        return null == (t = ek._readStates[ei.W.NOTIFICATION_CENTER]) ? void 0 : t[e];
    }
    hasUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return ek.getValue(e, t, (e) => e.canBeUnread() && e.hasUnread(), !1);
    }
    hasUnreadOrMentions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return ek.getValue(e, t, (e) => e.canBeUnread() && e.hasUnreadOrMentions(), !1);
    }
    hasTrackedUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return ek.getValue(e, t, (e) => e.canTrackUnreads() && e.hasUnread(), !1);
    }
    isForumPostUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return ek.getValue(e, t, (e) => e.isForumPostUnread(), !1);
    }
    getUnreadCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return ek.getValue(e, t, (e) => (e.canBeUnread() ? e.unreadCount : 0), 0);
    }
    getMentionCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL,
            n = ek.getValue(e, t, (e) => (e.canHaveMentions() ? e.getMentionCount() : 0), 0);
        if ((0, h.Z)(e) && n > 0) return 1;
        return n;
    }
    getIsMentionLowImportance(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return t === ei.W.CHANNEL && ek.getValue(e, t, (e) => e.isMentionLowImportance, !1);
    }
    getGuildChannelUnreadState(e, t, n, r, i) {
        return ek.getValue(e.id, ei.W.CHANNEL, (o) => o.getGuildChannelUnreadState(e, t, n, r, i), {
            mentionCount: 0,
            unread: !1,
            isMentionLowImportance: !1
        });
    }
    hasRecentlyVisitedAndRead(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return ek.getValue(e, t, (e) => e.hasRecentlyVisitedAndRead(), !1);
    }
    ackMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return ek.getValue(e, t, (e) => (e.canBeUnread() ? e.ackMessageId : null), null);
    }
    getTrackedAckMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return ek.getValue(e, t, (e) => (e.canTrackUnreads() ? e._ackMessageId : null), null);
    }
    lastMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return ek.getValue(e, t, (e) => e.lastMessageId, null);
    }
    lastMessageTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return ek.getValue(e, t, (e) => e.lastMessageTimestamp, 0);
    }
    lastPinTimestamp(e) {
        return ek.getValue(e, ei.W.CHANNEL, (e) => e.lastPinTimestamp, null);
    }
    getOldestUnreadMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return ek.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadMessageId : null), null);
    }
    getOldestUnreadTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return ek.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0), 0);
    }
    isEstimated(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return ek.getValue(e, t, (e) => e.estimated, !1);
    }
    hasOpenedThread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
        return ek.getValue(e, t, (e) => e._persisted, !1);
    }
    hasUnreadPins(e) {
        return ek.getValue(e, ei.W.CHANNEL, (e) => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1);
    }
    isNewForumThread(e, t, n) {
        let r = ek.get(t);
        if (!0 === ek.get(e)._persisted || null == r.ackMessageIdAtChannelSelect || 0 >= G.default.compare(e, r.ackMessageIdAtChannelSelect)) return !1;
        let i = eK(n);
        return G.default.extractTimestamp(e) > i;
    }
    getAllReadStates(e) {
        let t = [];
        return (
            ek.forEach((n) => {
                switch (n.type) {
                    case ei.W.GUILD_HOME:
                    case ei.W.GUILD_EVENT:
                    case ei.W.GUILD_ONBOARDING_QUESTION:
                        null != W.Z.getGuild(n.channelId) && t.push(n.serialize(e));
                        break;
                    case ei.W.NOTIFICATION_CENTER:
                    case ei.W.MESSAGE_REQUESTS:
                        var r;
                        G.default.cast(null == (r = J.default.getCurrentUser()) ? void 0 : r.id) === n.channelId && t.push(n.serialize(e));
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
        let n = null == (t = J.default.getCurrentUser()) ? void 0 : t.id;
        return null == n ? null : ek.get(n, e).ackMessageId;
    }
    getSnapshot(e, t) {
        let n = ek.get(e);
        return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot;
    }
}
ea(tJ, 'displayName', 'ReadStateStore');
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
        MESSAGE_ACK: tL,
        CHANNEL_ACK: tw,
        CHANNEL_LOCAL_ACK: tx,
        CHANNEL_PINS_ACK: tD,
        CHANNEL_PINS_UPDATE: tU,
        CHANNEL_SELECT: tI,
        VOICE_CHANNEL_SELECT: tT,
        CHANNEL_CREATE: tt,
        THREAD_CREATE: tn,
        THREAD_UPDATE: to,
        THREAD_LIST_SYNC: tl,
        LOAD_THREADS_SUCCESS: tc,
        LOAD_ARCHIVED_THREADS_SUCCESS: tc,
        SEARCH_FINISH: td,
        MOD_VIEW_SEARCH_FINISH: td,
        THREAD_MEMBER_UPDATE: ta,
        THREAD_MEMBERS_UPDATE: ts,
        CHANNEL_DELETE: tO,
        THREAD_DELETE: tO,
        WINDOW_FOCUS: tC,
        UPDATE_CHANNEL_DIMENSIONS: tP,
        CURRENT_USER_UPDATE: tB,
        BULK_ACK: tH,
        ENABLE_AUTOMATIC_ACK: tW,
        DISABLE_AUTOMATIC_ACK: tY,
        GUILD_FEATURE_ACK: tM,
        GUILD_SCHEDULED_EVENT_CREATE: t_,
        GUILD_SCHEDULED_EVENT_UPDATE: tp,
        GUILD_SCHEDULED_EVENT_DELETE: th,
        GUILD_DELETE: ty,
        GUILD_UPDATE: tv,
        RESORT_THREADS: tu,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: tV,
        DECAY_READ_STATES: eN,
        NOTIFICATION_CENTER_ITEM_CREATE: tE,
        RELATIONSHIP_ADD: tm,
        RELATIONSHIP_REMOVE: tg,
        NOTIFICATION_CENTER_ITEMS_ACK: tb,
        USER_NON_CHANNEL_ACK: tk,
        PASSIVE_UPDATE_V2: tG,
        CLEAR_OLDEST_UNREAD_MESSAGE: tK,
        TRY_ACK: tz,
        MESSAGE_REQUEST_ACK: tQ,
        MESSAGE_REQUEST_CLEAR_ACK: tX
    }),
    t0 = t$;
