n.d(t, {
    Yr: () => R,
    ZP: () => w,
    gN: () => C,
    sI: () => P
}),
    n(301563),
    n(47120),
    n(653041);
var r = n(392711),
    i = n(759174),
    o = n(586902),
    a = n(636449),
    s = n(317381),
    l = n(569545),
    c = n(199902),
    u = n(314897),
    d = n(523746),
    f = n(592125),
    p = n(131951),
    _ = n(606304),
    h = n(594174),
    m = n(33039),
    g = n(979651),
    E = n(5192),
    v = n(933546),
    b = n(354459),
    y = n(981631),
    O = n(65154);
function S(e, t, n) {
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
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = '__EMBEDDED_ACTIVITIES__';
function C(e) {
    let { applicationId: t, instanceId: n } = e;
    return null != n ? 'activity-'.concat(t, '-').concat(n) : 'activity-'.concat(t);
}
function R(e) {
    switch (e.type) {
        case b.fO.PRESENCE_EMBEDDED_ACTIVITY:
            return '\0';
        case b.fO.ACTIVITY:
            return '\x01'.concat(e.sortKey);
        case b.fO.HIDDEN_STREAM:
        case b.fO.STREAM:
            return ''.concat(e.userVideo ? '\x02' : '\x03').concat((0, v.Z)(e.userNick, e.user), '\x03');
        case b.fO.USER:
            var t, n;
            let r = '\x05';
            return (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (r = '\x03') : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfStream) && (r = '\x04'), ''.concat(r).concat((0, v.Z)(e.userNick, e.user));
    }
}
var P = (function (e) {
    return (e.VIDEO = 'VIDEO'), (e.STREAM = 'STREAM'), (e.FILTERED = 'FILTERED'), (e.SPEAKING = 'SPEAKING'), (e.ACTIVITY = 'ACTIVITY'), e;
})({});
class w {
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
        let e = f.Z.getChannel(this.channelId);
        if (null == e || e.type === y.d4z.GUILD_TEXT || ((this.call = d.Z.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))) return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(g.Z.getVoiceStatesForChannel(e.id)) : e.recipients);
        return (
            t.add(u.default.getId()),
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
        return this.updateParticipant(A);
    }
    hasEmbeddedActivity() {
        let e = this.participants[A];
        return null != e && e.length > 0;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = e === A ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
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
                              if (n.type === b.fO.USER) {
                                  let t = (0, o.O)({
                                      userId: e,
                                      checkIsMuted: !0
                                  });
                                  return (
                                      t && (this.lastSpoke[e] = Date.now()),
                                      this.participantByIndex.set(
                                          n.id,
                                          N(I({}, n), {
                                              speaking: t,
                                              lastSpoke: this.lastSpoke[e],
                                              soundsharing: _.Z.isSoundSharing(e)
                                          })
                                      ),
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
        var r, i;
        return (
            null !==
                (i =
                    null === (r = this.participants[e]) || void 0 === r
                        ? void 0
                        : r.reduce(
                              (e, r) =>
                                  r.type === b.fO.STREAM
                                      ? (this.participantByIndex.set(
                                            r.id,
                                            N(I({}, r), {
                                                maxResolution: t,
                                                maxFrameRate: n
                                            })
                                        ),
                                        !0)
                                      : e,
                              !1
                          )) &&
            void 0 !== i &&
            i
        );
    }
    updateGuildRingingUsers(e, t) {
        t ? this.guildRingingUsers.add(e) : this.guildRingingUsers.delete(e);
    }
    _getEmbeddedActivities() {
        var e, t;
        let n = s.ZP.getEmbeddedActivitiesForChannel(this.channelId).concat(s.ZP.getEmbeddedActivitiesForStartingChannel(this.channelId)),
            i = null !== (e = s.ZP.getSelfEmbeddedActivityForChannel(this.channelId)) && void 0 !== e ? e : s.ZP.getSelfEmbeddedActivitiesForStartingChannel(this.channelId);
        if (null == i) return n;
        {
            let e = (0, r.uniqBy)([...n, i], (e) => e.compositeInstanceId),
                o = null === (t = i.participants) || void 0 === t ? void 0 : t.some((e) => e.sessionId === u.default.getSessionId());
            return (0, a.R)() && o ? e.filter((e) => e.applicationId !== i.applicationId && e.compositeInstanceId !== i.compositeInstanceId) : e;
        }
    }
    _getParticipantsForEmbeddedActivities() {
        return this._getEmbeddedActivities().map((e, t) => {
            var n, r, i;
            return {
                type: b.fO.ACTIVITY,
                id: C({
                    applicationId: e.applicationId,
                    instanceId: e.compositeInstanceId
                }),
                applicationId: e.applicationId,
                activityType: y.IIU.PLAYING,
                activityUrl: e.url,
                participants: [...(null !== (r = e.participants) && void 0 !== r ? r : [])],
                guildId: null !== (i = null === (n = f.Z.getChannel(this.channelId)) || void 0 === n ? void 0 : n.getGuildId()) && void 0 !== i ? i : null,
                sortKey: t.toString()
            };
        });
    }
    _getParticipantsForUser(e) {
        var t, n, r, i, a, s;
        let d, v;
        let y = [],
            S = h.default.getUser(e);
        if (null == S) return y;
        let T = g.Z.getVoiceStateForChannel(this.channelId, e),
            A = g.Z.getVoicePlatformForChannel(this.channelId, e),
            C = f.Z.getChannel(this.channelId),
            R = null !== (r = (null === (n = this.call) || void 0 === n ? void 0 : null === (t = n.ringing) || void 0 === t ? void 0 : t.includes(e)) || this.guildRingingUsers.has(e)) && void 0 !== r && r;
        (null != T || R) &&
            ((d = N(I({ type: b.fO.USER }, m.Z.getUserStreamData(e, null == C ? void 0 : C.getGuildId())), {
                user: S,
                id: S.id,
                voiceState: T,
                voicePlatform: A,
                speaking: (0, o.O)({
                    userId: e,
                    checkIsMuted: !0
                }),
                lastSpoke: null !== (i = this.lastSpoke[e]) && void 0 !== i ? i : 0,
                soundsharing: _.Z.isSoundSharing(e),
                ringing: R,
                userNick: E.ZP.getName(null == C ? void 0 : C.getGuildId(), this.channelId, S),
                localVideoDisabled: p.Z.isLocalVideoDisabled(S.id)
            })),
            y.push(d));
        let P = null !== (a = c.Z.getStreamForUser(e, null == C ? void 0 : C.getGuildId())) && void 0 !== a ? a : c.Z.getActiveStreamForUser(e, null == C ? void 0 : C.getGuildId());
        if (null != P && P.channelId === this.channelId) {
            let t = (0, l.V9)(P),
                n = this.getParticipant(t),
                r = P.ownerId === u.default.getId() && c.Z.isSelfStreamHidden(this.channelId),
                i =
                    (null == n ? void 0 : n.type) === b.fO.STREAM
                        ? {
                              maxResolution: null != n.maxResolution ? I({}, n.maxResolution) : void 0,
                              maxFrameRate: n.maxFrameRate
                          }
                        : null;
            (v = N(I({}, m.Z.getUserStreamData(e, null == C ? void 0 : C.getGuildId(), O.Yn.STREAM), i), {
                type: r ? b.fO.HIDDEN_STREAM : b.fO.STREAM,
                id: t,
                userVideo: null !== (s = null == T ? void 0 : T.selfVideo) && void 0 !== s && s,
                user: S,
                userNick: E.ZP.getName(null == C ? void 0 : C.getGuildId(), this.channelId, S),
                stream: P
            })),
                y.push(v);
        }
        return y;
    }
    constructor(e) {
        S(this, 'channelId', void 0),
            S(this, 'call', void 0),
            S(this, 'participants', {}),
            S(this, 'lastSpoke', {}),
            S(this, 'guildRingingUsers', new Set()),
            S(
                this,
                'participantByIndex',
                new i.h((e) => {
                    var t;
                    let n = [];
                    return e.type === b.fO.USER && e.speaking && n.push('SPEAKING'), e.type === b.fO.USER && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (n.push('VIDEO'), e.localVideoDisabled || n.push('FILTERED')) : (0, b._5)(e) && (n.push('STREAM'), e.type !== b.fO.HIDDEN_STREAM && null != e.streamId && n.push('FILTERED')), e.type === b.fO.ACTIVITY && (n.push('ACTIVITY'), n.push('FILTERED')), n;
                }, R)
            ),
            (this.channelId = e);
    }
}
