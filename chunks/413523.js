(n.d(t, {
    Yr: () => R,
    ZP: () => w,
    gN: () => C,
    sI: () => P
}),
    n(35282),
    n(388685),
    n(539854));
var r = n(392711),
    i = n(759174),
    a = n(586902),
    o = n(317381),
    s = n(541638),
    l = n(569545),
    c = n(199902),
    u = n(314897),
    d = n(523746),
    _ = n(592125),
    f = n(131951),
    p = n(606304),
    h = n(594174),
    m = n(33039),
    g = n(979651),
    E = n(5192),
    b = n(933546),
    y = n(354459),
    O = n(981631),
    v = n(65154);
function I(e, t, n) {
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
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            }));
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = '__EMBEDDED_ACTIVITIES__';
function C(e) {
    let { applicationId: t, instanceId: n } = e;
    return null != n ? 'activity-'.concat(t, '-').concat(n) : 'activity-'.concat(t);
}
function R(e) {
    switch (e.type) {
        case y.fO.ACTIVITY:
            return '\x01'.concat(e.sortKey);
        case y.fO.HIDDEN_STREAM:
        case y.fO.STREAM:
            return ''.concat(e.userVideo ? '\x02' : '\x03').concat((0, b.Z)(e.userNick, e.user), '\x03');
        case y.fO.USER:
            var t, n;
            let r = '\x05';
            return ((null == (t = e.voiceState) ? void 0 : t.selfVideo) ? (r = '\x03') : (null == (n = e.voiceState) ? void 0 : n.selfStream) && (r = '\x04'), ''.concat(r).concat((0, b.Z)(e.userNick, e.user)));
    }
}
var P = (function (e) {
    return ((e.VIDEO = 'VIDEO'), (e.STREAM = 'STREAM'), (e.FILTERED = 'FILTERED'), (e.SPEAKING = 'SPEAKING'), (e.ACTIVITY = 'ACTIVITY'), e);
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
        let e = _.Z.getChannel(this.channelId);
        if (null == e || e.type === O.d4z.GUILD_TEXT || ((this.call = d.Z.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))) return !1;
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
        return null != (t = this.participantByIndex.get(e)) ? t : null;
    }
    updateEmbeddedActivities() {
        return this.updateParticipant(N);
    }
    hasEmbeddedActivity() {
        return this.size('ACTIVITY') > 0;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = e === N ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
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
            null !=
                (n =
                    null == (t = this.participants[e])
                        ? void 0
                        : t.reduce((t, n) => {
                              if (n.type === y.fO.USER) {
                                  let t = (0, a.O)({
                                      userId: e,
                                      checkIsMuted: !0
                                  });
                                  return (
                                      t && (this.lastSpoke[e] = Date.now()),
                                      this.participantByIndex.set(
                                          n.id,
                                          A(T({}, n), {
                                              speaking: t,
                                              lastSpoke: this.lastSpoke[e],
                                              soundsharing: p.Z.isSoundSharing(e)
                                          })
                                      ),
                                      !0
                                  );
                              }
                              return t;
                          }, !1)) && n
        );
    }
    updateParticipantQuality(e, t, n) {
        var r, i;
        return (
            null !=
                (i =
                    null == (r = this.participants[e])
                        ? void 0
                        : r.reduce(
                              (e, r) =>
                                  r.type === y.fO.STREAM
                                      ? (this.participantByIndex.set(
                                            r.id,
                                            A(T({}, r), {
                                                maxResolution: t,
                                                maxFrameRate: n
                                            })
                                        ),
                                        !0)
                                      : e,
                              !1
                          )) && i
        );
    }
    updateGuildRingingUsers(e, t) {
        t ? this.guildRingingUsers.add(e) : this.guildRingingUsers.delete(e);
    }
    _getEmbeddedActivities() {
        let e = o.ZP.getEmbeddedActivitiesForChannel(this.channelId),
            t = o.ZP.getSelfEmbeddedActivityForChannel(this.channelId);
        return null == t ? e : (0, r.uniqBy)([...e, t], (e) => e.compositeInstanceId);
    }
    _getParticipantsForEmbeddedActivities() {
        return this._getEmbeddedActivities().map((e, t) => {
            var n, r, i;
            return {
                type: y.fO.ACTIVITY,
                id: C({
                    applicationId: e.applicationId,
                    instanceId: e.compositeInstanceId
                }),
                applicationId: e.applicationId,
                activityType: O.IIU.PLAYING,
                activityUrl: e.url,
                participants: [...(null != (r = e.participants) ? r : [])],
                guildId: null != (i = null == (n = _.Z.getChannel(this.channelId)) ? void 0 : n.getGuildId()) ? i : null,
                sortKey: t.toString()
            };
        });
    }
    _getParticipantsForUser(e) {
        var t, n, r, i, o, d;
        let b,
            O,
            I = [],
            S = h.default.getUser(e);
        if (null == S) return I;
        let N = g.Z.getVoiceStateForChannel(this.channelId, e),
            C = g.Z.getVoicePlatformForChannel(this.channelId, e),
            R = _.Z.getChannel(this.channelId),
            P = null == R ? void 0 : R.getGuildId(),
            w = null != (r = (null == (n = this.call) || null == (t = n.ringing) ? void 0 : t.includes(e)) || this.guildRingingUsers.has(e)) && r;
        (null != N || w) &&
            ((b = A(T({ type: y.fO.USER }, m.Z.getUserStreamData(e, P)), {
                user: S,
                id: S.id,
                voiceState: N,
                voicePlatform: C,
                speaking: (0, a.O)({
                    userId: e,
                    checkIsMuted: !0
                }),
                lastSpoke: null != (i = this.lastSpoke[e]) ? i : 0,
                soundsharing: p.Z.isSoundSharing(e),
                ringing: w,
                userNick: E.ZP.getName(P, this.channelId, S),
                userAvatarDecoration: (0, s.o)(S, P),
                localVideoDisabled: f.Z.isLocalVideoDisabled(S.id)
            })),
            I.push(b));
        let D = null != (o = c.Z.getStreamForUser(e, P)) ? o : c.Z.getActiveStreamForUser(e, P);
        if (null != D && D.channelId === this.channelId) {
            let t = (0, l.V9)(D),
                n = this.getParticipant(t),
                r = D.ownerId === u.default.getId() && c.Z.isSelfStreamHidden(this.channelId),
                i =
                    (null == n ? void 0 : n.type) === y.fO.STREAM
                        ? {
                              maxResolution: null != n.maxResolution ? T({}, n.maxResolution) : void 0,
                              maxFrameRate: n.maxFrameRate
                          }
                        : null;
            ((O = A(T({}, m.Z.getUserStreamData(e, P, v.Yn.STREAM), i), {
                type: r ? y.fO.HIDDEN_STREAM : y.fO.STREAM,
                id: t,
                userVideo: null != (d = null == N ? void 0 : N.selfVideo) && d,
                user: S,
                userNick: E.ZP.getName(P, this.channelId, S),
                stream: D
            })),
                I.push(O));
        }
        return I;
    }
    constructor(e) {
        (I(this, 'channelId', void 0),
            I(this, 'call', void 0),
            I(this, 'participants', {}),
            I(this, 'lastSpoke', {}),
            I(this, 'guildRingingUsers', new Set()),
            I(
                this,
                'participantByIndex',
                new i.h((e) => {
                    var t;
                    let n = [];
                    return (e.type === y.fO.USER && e.speaking && n.push('SPEAKING'), e.type === y.fO.USER && (null == (t = e.voiceState) ? void 0 : t.selfVideo) ? (n.push('VIDEO'), e.localVideoDisabled || n.push('FILTERED')) : (0, y._5)(e) && (n.push('STREAM'), e.type !== y.fO.HIDDEN_STREAM && null != e.streamId && n.push('FILTERED')), e.type === y.fO.ACTIVITY && (n.push('ACTIVITY'), n.push('FILTERED')), n);
                }, R)
            ),
            (this.channelId = e));
    }
}
