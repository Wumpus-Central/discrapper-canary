r.d(n, {
    Yr: function () {
        return P;
    },
    ZP: function () {
        return M;
    },
    sI: function () {
        return i;
    }
});
var i,
    a = r(47120);
var s = r(724458);
var o = r(653041);
var l = r(789020);
var u = r(392711);
var c = r(759174),
    d = r(586902),
    f = r(636449),
    _ = r(774226),
    h = r(317381),
    p = r(569545),
    m = r(199902),
    g = r(314897),
    E = r(523746),
    v = r(592125),
    I = r(131951),
    T = r(158776),
    b = r(606304),
    y = r(594174),
    S = r(33039),
    A = r(979651),
    N = r(630388),
    C = r(5192),
    R = r(933546),
    O = r(354459),
    D = r(981631),
    L = r(65154);
function x(e, n, r) {
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
let w = '__EMBEDDED_ACTIVITIES__';
function P(e) {
    switch (e.type) {
        case O.fO.PRESENCE_EMBEDDED_ACTIVITY:
            return '\0';
        case O.fO.ACTIVITY:
            return '\x01'.concat(e.sortKey);
        case O.fO.HIDDEN_STREAM:
        case O.fO.STREAM:
            return ''.concat(e.userVideo ? '\x02' : '\x03').concat((0, R.Z)(e.userNick, e.user), '\x03');
        case O.fO.USER:
            var n, r;
            let i = '\x05';
            return (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfVideo) ? (i = '\x03') : (null === (r = e.voiceState) || void 0 === r ? void 0 : r.selfStream) && (i = '\x04'), ''.concat(i).concat((0, R.Z)(e.userNick, e.user));
    }
}
!(function (e) {
    (e.VIDEO = 'VIDEO'), (e.STREAM = 'STREAM'), (e.FILTERED = 'FILTERED'), (e.SPEAKING = 'SPEAKING'), (e.ACTIVITY = 'ACTIVITY');
})(i || (i = {}));
class M {
    get version() {
        return this.participantByIndex.version;
    }
    size(e) {
        return this.participantByIndex.size(e);
    }
    toArray(e) {
        return this.participantByIndex.values(e, !0);
    }
    rebuild() {
        let e = v.Z.getChannel(this.channelId);
        if (null == e || e.type === D.d4z.GUILD_TEXT) return !1;
        if (((this.call = E.Z.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))) return !1;
        let n = new Set(e.isGuildVocalOrThread() ? Object.keys(A.Z.getVoiceStatesForChannel(e.id)) : e.recipients);
        return (
            n.add(g.default.getId()),
            this.guildRingingUsers.size > 0 && (n = new Set([...n, ...this.guildRingingUsers])),
            m.Z.getAllActiveStreamsForChannel(this.channelId).forEach((e) => {
                let { ownerId: r } = e;
                return n.add(r);
            }),
            this.participantByIndex.clear(),
            (this.participants = {}),
            n.forEach((e) => this.updateParticipant(e)),
            this.updateEmbeddedActivities(),
            !0
        );
    }
    getParticipant(e) {
        var n;
        return null !== (n = this.participantByIndex.get(e)) && void 0 !== n ? n : null;
    }
    updateEmbeddedActivities() {
        return this.updateParticipant(w);
    }
    hasEmbeddedActivity() {
        let e = this.participants[w];
        return null != e && e.length > 0;
    }
    updateParticipant(e) {
        let n = this.participants[e],
            r = e === w ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
        return (
            (null != n || 0 !== r.length) &&
            (null == n ||
                n.forEach((e) => {
                    this.participantByIndex.delete(e.id);
                }),
            r.forEach((e) => {
                this.participantByIndex.set(e.id, e);
            }),
            (this.participants[e] = r),
            !0)
        );
    }
    updateParticipantSpeaking(e) {
        var n, r;
        return (
            null !==
                (r =
                    null === (n = this.participants[e]) || void 0 === n
                        ? void 0
                        : n.reduce((n, r) => {
                              if (r.type === O.fO.USER) {
                                  let n = (0, d.O)({
                                      userId: e,
                                      checkIsMuted: !0
                                  });
                                  return (
                                      n && (this.lastSpoke[e] = Date.now()),
                                      this.participantByIndex.set(r.id, {
                                          ...r,
                                          speaking: n,
                                          lastSpoke: this.lastSpoke[e],
                                          soundsharing: b.Z.isSoundSharing(e)
                                      }),
                                      !0
                                  );
                              }
                              return n;
                          }, !1)) &&
            void 0 !== r &&
            r
        );
    }
    updateParticipantQuality(e, n, r) {
        var i, a;
        return (
            null !==
                (a =
                    null === (i = this.participants[e]) || void 0 === i
                        ? void 0
                        : i.reduce(
                              (e, i) =>
                                  i.type === O.fO.STREAM
                                      ? (this.participantByIndex.set(i.id, {
                                            ...i,
                                            maxResolution: n,
                                            maxFrameRate: r
                                        }),
                                        !0)
                                      : e,
                              !1
                          )) &&
            void 0 !== a &&
            a
        );
    }
    updateGuildRingingUsers(e, n) {
        n ? this.guildRingingUsers.add(e) : this.guildRingingUsers.delete(e);
    }
    _getEmbeddedActivities() {
        let e = h.ZP.getEmbeddedActivitiesForChannel(this.channelId),
            n = h.ZP.getSelfEmbeddedActivityForChannel(this.channelId);
        if (null == n) return e;
        {
            var r;
            let i = (0, u.uniqBy)([...e, n], (e) => e.applicationId),
                a = null === (r = n.participants) || void 0 === r ? void 0 : r.some((e) => e.sessionId === g.default.getSessionId());
            return (0, f.R)() && a ? i.filter((e) => e.applicationId !== n.applicationId && e.compositeInstanceId !== n.compositeInstanceId) : i;
        }
    }
    _getParticipantsForEmbeddedActivities() {
        return this._getEmbeddedActivities().map((e, n) => {
            var r, i, a;
            return {
                type: O.fO.ACTIVITY,
                id: e.applicationId,
                activityType: D.IIU.PLAYING,
                activityUrl: e.url,
                participants: [...(null !== (i = e.participants) && void 0 !== i ? i : [])],
                guildId: null !== (a = null === (r = v.Z.getChannel(this.channelId)) || void 0 === r ? void 0 : r.getGuildId()) && void 0 !== a ? a : null,
                sortKey: n.toString()
            };
        });
    }
    _getParticipantsForUser(e) {
        var n, r, i, a, s, o, l, u;
        let c, f, E;
        let R = [],
            x = y.default.getUser(e);
        if (null == x) return R;
        let w = A.Z.getVoiceStateForChannel(this.channelId, e),
            P = A.Z.getVoicePlatformForChannel(this.channelId, e),
            M = v.Z.getChannel(this.channelId),
            k = null !== (i = (null === (r = this.call) || void 0 === r ? void 0 : null === (n = r.ringing) || void 0 === n ? void 0 : n.includes(e)) || this.guildRingingUsers.has(e)) && void 0 !== i && i;
        (null != w || k) &&
            ((c = {
                type: O.fO.USER,
                ...S.Z.getUserStreamData(e, null == M ? void 0 : M.getGuildId()),
                user: x,
                id: x.id,
                voiceState: w,
                voicePlatform: P,
                speaking: (0, d.O)({
                    userId: e,
                    checkIsMuted: !0
                }),
                lastSpoke: null !== (a = this.lastSpoke[e]) && void 0 !== a ? a : 0,
                soundsharing: b.Z.isSoundSharing(e),
                ringing: k,
                userNick: C.ZP.getName(null == M ? void 0 : M.getGuildId(), this.channelId, x),
                localVideoDisabled: I.Z.isLocalVideoDisabled(x.id)
            }),
            R.push(c));
        let U = null !== (s = m.Z.getStreamForUser(e, null == M ? void 0 : M.getGuildId())) && void 0 !== s ? s : m.Z.getActiveStreamForUser(e, null == M ? void 0 : M.getGuildId());
        if (null != U && U.channelId === this.channelId) {
            let n = (0, p.V9)(U),
                r = this.getParticipant(n),
                i = U.ownerId === g.default.getId() && m.Z.isSelfStreamHidden(this.channelId),
                a =
                    (null == r ? void 0 : r.type) === O.fO.STREAM
                        ? {
                              maxResolution: null != r.maxResolution ? { ...r.maxResolution } : void 0,
                              maxFrameRate: r.maxFrameRate
                          }
                        : null;
            (f = {
                ...S.Z.getUserStreamData(e, null == M ? void 0 : M.getGuildId(), L.Yn.STREAM),
                ...a,
                type: i ? O.fO.HIDDEN_STREAM : O.fO.STREAM,
                id: n,
                userVideo: null !== (o = null == w ? void 0 : w.selfVideo) && void 0 !== o && o,
                user: x,
                userNick: C.ZP.getName(null == M ? void 0 : M.getGuildId(), this.channelId, x),
                stream: U
            }),
                R.push(f);
        }
        let B = T.Z.findActivity(x.id, (e) => [D.IIU.PLAYING, D.IIU.WATCHING].includes(e.type));
        if ((0, _.s)() && null != w && w.channelId === this.channelId && null != B && (0, N.yE)(null !== (l = B.flags) && void 0 !== l ? l : 0, D.xjy.EMBEDDED)) {
            let n = h.ZP.getCurrentEmbeddedActivity();
            (null == n ? void 0 : null === (u = n.participants) || void 0 === u ? void 0 : u.some((n) => n.userId === e && n.sessionId === w.sessionId)) !== !0 &&
                null != B.application_id &&
                ((E = {
                    type: O.fO.PRESENCE_EMBEDDED_ACTIVITY,
                    id: B.application_id,
                    activityType: B.type,
                    activity: B,
                    user: x
                }),
                R.push(E));
        }
        return R;
    }
    constructor(e) {
        x(this, 'channelId', void 0),
            x(this, 'call', void 0),
            x(this, 'participants', {}),
            x(this, 'lastSpoke', {}),
            x(this, 'guildRingingUsers', new Set()),
            x(
                this,
                'participantByIndex',
                new c.h((e) => {
                    var n;
                    let r = [];
                    return e.type === O.fO.USER && e.speaking && r.push('SPEAKING'), e.type === O.fO.USER && (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfVideo) ? (r.push('VIDEO'), !e.localVideoDisabled && r.push('FILTERED')) : (0, O._5)(e) && (r.push('STREAM'), e.type !== O.fO.HIDDEN_STREAM && null != e.streamId && r.push('FILTERED')), e.type === O.fO.ACTIVITY && (r.push('ACTIVITY'), r.push('FILTERED')), r;
                }, P)
            ),
            (this.channelId = e);
    }
}
