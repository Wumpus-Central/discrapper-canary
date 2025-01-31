n.d(t, {
    Yr: () => O,
    ZP: () => x,
    oW: () => R,
    sI: () => D
}),
    n(47120),
    n(724458),
    n(653041),
    n(789020);
var i = n(392711),
    r = n(759174),
    a = n(586902),
    s = n(636449),
    o = n(774226),
    l = n(317381),
    u = n(569545),
    c = n(199902),
    d = n(314897),
    f = n(523746),
    _ = n(592125),
    p = n(131951),
    h = n(158776),
    m = n(606304),
    g = n(594174),
    E = n(33039),
    v = n(979651),
    y = n(630388),
    I = n(5192),
    b = n(933546),
    T = n(354459),
    S = n(981631),
    A = n(65154);
function N(e, t, n) {
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
let C = '__EMBEDDED_ACTIVITIES__';
function R(e) {
    return 'activity-'.concat(e);
}
function O(e) {
    switch (e.type) {
        case T.fO.PRESENCE_EMBEDDED_ACTIVITY:
            return '\0';
        case T.fO.ACTIVITY:
            return '\x01'.concat(e.sortKey);
        case T.fO.HIDDEN_STREAM:
        case T.fO.STREAM:
            return ''.concat(e.userVideo ? '\x02' : '\x03').concat((0, b.Z)(e.userNick, e.user), '\x03');
        case T.fO.USER:
            var t, n;
            let i = '\x05';
            return (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (i = '\x03') : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfStream) && (i = '\x04'), ''.concat(i).concat((0, b.Z)(e.userNick, e.user));
    }
}
var D = (function (e) {
    return (e.VIDEO = 'VIDEO'), (e.STREAM = 'STREAM'), (e.FILTERED = 'FILTERED'), (e.SPEAKING = 'SPEAKING'), (e.ACTIVITY = 'ACTIVITY'), e;
})({});
class x {
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
        let e = _.Z.getChannel(this.channelId);
        if (null == e || e.type === S.d4z.GUILD_TEXT || ((this.call = f.Z.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))) return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(v.Z.getVoiceStatesForChannel(e.id)) : e.recipients);
        return (
            t.add(d.default.getId()),
            this.guildRingingUsers.size > 0 && (t = new Set([...t, ...this.guildRingingUsers])),
            c.Z.getAllActiveStreamsForChannel(this.channelId).forEach((e) => {
                let { ownerId: n } = e;
                return t.add(n);
            }),
            this.participantByIndex.clear(),
            (this.participants = {}),
            t.forEach((e) => this.updateParticipant(e)),
            this.updateEmbeddedActivities(),
            !0
        );
    }
    getParticipant(e) {
        var t;
        return null !== (t = this.participantByIndex.get(e)) && void 0 !== t ? t : null;
    }
    updateEmbeddedActivities() {
        return this.updateParticipant(C);
    }
    hasEmbeddedActivity() {
        let e = this.participants[C];
        return null != e && e.length > 0;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = e === C ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
        return (
            (null != t || 0 !== n.length) &&
            (null == t ||
                t.forEach((e) => {
                    this.participantByIndex.delete(e.id);
                }),
            n.forEach((e) => {
                this.participantByIndex.set(e.id, e);
            }),
            (this.participants[e] = n),
            !0)
        );
    }
    updateParticipantSpeaking(e) {
        var t, n;
        return (
            null !==
                (n =
                    null === (t = this.participants[e]) || void 0 === t
                        ? void 0
                        : t.reduce((t, n) => {
                              if (n.type === T.fO.USER) {
                                  let t = (0, a.O)({
                                      userId: e,
                                      checkIsMuted: !0
                                  });
                                  return (
                                      t && (this.lastSpoke[e] = Date.now()),
                                      this.participantByIndex.set(n.id, {
                                          ...n,
                                          speaking: t,
                                          lastSpoke: this.lastSpoke[e],
                                          soundsharing: m.Z.isSoundSharing(e)
                                      }),
                                      !0
                                  );
                              }
                              return t;
                          }, !1)) &&
            void 0 !== n &&
            n
        );
    }
    updateParticipantQuality(e, t, n) {
        var i, r;
        return (
            null !==
                (r =
                    null === (i = this.participants[e]) || void 0 === i
                        ? void 0
                        : i.reduce(
                              (e, i) =>
                                  i.type === T.fO.STREAM
                                      ? (this.participantByIndex.set(i.id, {
                                            ...i,
                                            maxResolution: t,
                                            maxFrameRate: n
                                        }),
                                        !0)
                                      : e,
                              !1
                          )) &&
            void 0 !== r &&
            r
        );
    }
    updateGuildRingingUsers(e, t) {
        t ? this.guildRingingUsers.add(e) : this.guildRingingUsers.delete(e);
    }
    _getEmbeddedActivities() {
        let e = l.ZP.getEmbeddedActivitiesForChannel(this.channelId),
            t = l.ZP.getSelfEmbeddedActivityForChannel(this.channelId);
        if (null == t) return e;
        {
            var n;
            let r = (0, i.uniqBy)([...e, t], (e) => e.applicationId),
                a = null === (n = t.participants) || void 0 === n ? void 0 : n.some((e) => e.sessionId === d.default.getSessionId());
            return (0, s.R)() && a ? r.filter((e) => e.applicationId !== t.applicationId && e.compositeInstanceId !== t.compositeInstanceId) : r;
        }
    }
    _getParticipantsForEmbeddedActivities() {
        return this._getEmbeddedActivities().map((e, t) => {
            var n, i, r;
            return {
                type: T.fO.ACTIVITY,
                id: R(e.applicationId),
                applicationId: e.applicationId,
                activityType: S.IIU.PLAYING,
                activityUrl: e.url,
                participants: [...(null !== (i = e.participants) && void 0 !== i ? i : [])],
                guildId: null !== (r = null === (n = _.Z.getChannel(this.channelId)) || void 0 === n ? void 0 : n.getGuildId()) && void 0 !== r ? r : null,
                sortKey: t.toString()
            };
        });
    }
    _getParticipantsForUser(e) {
        var t, n, i, r, s, f, b, N;
        let C, O, D;
        let x = [],
            L = g.default.getUser(e);
        if (null == L) return x;
        let P = v.Z.getVoiceStateForChannel(this.channelId, e),
            w = v.Z.getVoicePlatformForChannel(this.channelId, e),
            M = _.Z.getChannel(this.channelId),
            k = null !== (i = (null === (n = this.call) || void 0 === n ? void 0 : null === (t = n.ringing) || void 0 === t ? void 0 : t.includes(e)) || this.guildRingingUsers.has(e)) && void 0 !== i && i;
        (null != P || k) &&
            ((C = {
                type: T.fO.USER,
                ...E.Z.getUserStreamData(e, null == M ? void 0 : M.getGuildId()),
                user: L,
                id: L.id,
                voiceState: P,
                voicePlatform: w,
                speaking: (0, a.O)({
                    userId: e,
                    checkIsMuted: !0
                }),
                lastSpoke: null !== (r = this.lastSpoke[e]) && void 0 !== r ? r : 0,
                soundsharing: m.Z.isSoundSharing(e),
                ringing: k,
                userNick: I.ZP.getName(null == M ? void 0 : M.getGuildId(), this.channelId, L),
                localVideoDisabled: p.Z.isLocalVideoDisabled(L.id)
            }),
            x.push(C));
        let U = null !== (s = c.Z.getStreamForUser(e, null == M ? void 0 : M.getGuildId())) && void 0 !== s ? s : c.Z.getActiveStreamForUser(e, null == M ? void 0 : M.getGuildId());
        if (null != U && U.channelId === this.channelId) {
            let t = (0, u.V9)(U),
                n = this.getParticipant(t),
                i = U.ownerId === d.default.getId() && c.Z.isSelfStreamHidden(this.channelId),
                r =
                    (null == n ? void 0 : n.type) === T.fO.STREAM
                        ? {
                              maxResolution: null != n.maxResolution ? { ...n.maxResolution } : void 0,
                              maxFrameRate: n.maxFrameRate
                          }
                        : null;
            (O = {
                ...E.Z.getUserStreamData(e, null == M ? void 0 : M.getGuildId(), A.Yn.STREAM),
                ...r,
                type: i ? T.fO.HIDDEN_STREAM : T.fO.STREAM,
                id: t,
                userVideo: null !== (f = null == P ? void 0 : P.selfVideo) && void 0 !== f && f,
                user: L,
                userNick: I.ZP.getName(null == M ? void 0 : M.getGuildId(), this.channelId, L),
                stream: U
            }),
                x.push(O);
        }
        let G = h.Z.findActivity(L.id, (e) => [S.IIU.PLAYING, S.IIU.WATCHING].includes(e.type));
        if ((0, o.sq)() && null != P && P.channelId === this.channelId && null != G && (0, y.yE)(null !== (b = G.flags) && void 0 !== b ? b : 0, S.xjy.EMBEDDED)) {
            let t = l.ZP.getCurrentEmbeddedActivity();
            (null == t ? void 0 : null === (N = t.participants) || void 0 === N ? void 0 : N.some((t) => t.userId === e && t.sessionId === P.sessionId)) !== !0 &&
                null != G.application_id &&
                ((D = {
                    type: T.fO.PRESENCE_EMBEDDED_ACTIVITY,
                    id: R(G.application_id),
                    applicationId: G.application_id,
                    activityType: G.type,
                    activity: G,
                    user: L
                }),
                x.push(D));
        }
        return x;
    }
    constructor(e) {
        N(this, 'channelId', void 0),
            N(this, 'call', void 0),
            N(this, 'participants', {}),
            N(this, 'lastSpoke', {}),
            N(this, 'guildRingingUsers', new Set()),
            N(
                this,
                'participantByIndex',
                new r.h((e) => {
                    var t;
                    let n = [];
                    return e.type === T.fO.USER && e.speaking && n.push('SPEAKING'), e.type === T.fO.USER && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (n.push('VIDEO'), e.localVideoDisabled || n.push('FILTERED')) : (0, T._5)(e) && (n.push('STREAM'), e.type !== T.fO.HIDDEN_STREAM && null != e.streamId && n.push('FILTERED')), e.type === T.fO.ACTIVITY && (n.push('ACTIVITY'), n.push('FILTERED')), n;
                }, O)
            ),
            (this.channelId = e);
    }
}
