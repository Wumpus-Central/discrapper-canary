n.d(t, {
    Yr: () => C,
    ZP: () => R,
    gN: () => N,
    sI: () => P
}),
    n(35282),
    n(388685),
    n(539854);
var r = n(392711),
    i = n(759174),
    a = n(586902),
    o = n(317381),
    s = n(569545),
    l = n(199902),
    c = n(314897),
    u = n(523746),
    d = n(592125),
    f = n(131951),
    _ = n(606304),
    p = n(594174),
    h = n(33039),
    m = n(979651),
    g = n(5192),
    E = n(933546),
    b = n(354459),
    y = n(981631),
    O = n(65154);
function v(e, t, n) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function T(e, t) {
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
let A = '__EMBEDDED_ACTIVITIES__';
function N(e) {
    let { applicationId: t, instanceId: n } = e;
    return null != n ? 'activity-'.concat(t, '-').concat(n) : 'activity-'.concat(t);
}
function C(e) {
    switch (e.type) {
        case b.fO.ACTIVITY:
            return '\x01'.concat(e.sortKey);
        case b.fO.HIDDEN_STREAM:
        case b.fO.STREAM:
            return ''.concat(e.userVideo ? '\x02' : '\x03').concat((0, E.Z)(e.userNick, e.user), '\x03');
        case b.fO.USER:
            var t, n;
            let r = '\x05';
            return (null == (t = e.voiceState) ? void 0 : t.selfVideo) ? (r = '\x03') : (null == (n = e.voiceState) ? void 0 : n.selfStream) && (r = '\x04'), ''.concat(r).concat((0, E.Z)(e.userNick, e.user));
    }
}
var P = (function (e) {
    return (e.VIDEO = 'VIDEO'), (e.STREAM = 'STREAM'), (e.FILTERED = 'FILTERED'), (e.SPEAKING = 'SPEAKING'), (e.ACTIVITY = 'ACTIVITY'), e;
})({});
class R {
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
        let e = d.Z.getChannel(this.channelId);
        if (null == e || e.type === y.d4z.GUILD_TEXT || ((this.call = u.Z.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))) return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(m.Z.getVoiceStatesForChannel(e.id)) : e.recipients);
        return (
            t.add(c.default.getId()),
            this.guildRingingUsers.size > 0 && (t = new Set([...t, ...this.guildRingingUsers])),
            l.Z.getAllActiveStreamsForChannel(this.channelId).forEach((e) => {
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
        return this.updateParticipant(A);
    }
    hasEmbeddedActivity() {
        return this.size('ACTIVITY') > 0;
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
            null !=
                (n =
                    null == (t = this.participants[e])
                        ? void 0
                        : t.reduce((t, n) => {
                              if (n.type === b.fO.USER) {
                                  let t = (0, a.O)({
                                      userId: e,
                                      checkIsMuted: !0
                                  });
                                  return (
                                      t && (this.lastSpoke[e] = Date.now()),
                                      this.participantByIndex.set(
                                          n.id,
                                          T(I({}, n), {
                                              speaking: t,
                                              lastSpoke: this.lastSpoke[e],
                                              soundsharing: _.Z.isSoundSharing(e)
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
                                  r.type === b.fO.STREAM
                                      ? (this.participantByIndex.set(
                                            r.id,
                                            T(I({}, r), {
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
                type: b.fO.ACTIVITY,
                id: N({
                    applicationId: e.applicationId,
                    instanceId: e.compositeInstanceId
                }),
                applicationId: e.applicationId,
                activityType: y.IIU.PLAYING,
                activityUrl: e.url,
                participants: [...(null != (r = e.participants) ? r : [])],
                guildId: null != (i = null == (n = d.Z.getChannel(this.channelId)) ? void 0 : n.getGuildId()) ? i : null,
                sortKey: t.toString()
            };
        });
    }
    _getParticipantsForUser(e) {
        var t, n, r, i, o, u;
        let E,
            y,
            v = [],
            S = p.default.getUser(e);
        if (null == S) return v;
        let A = m.Z.getVoiceStateForChannel(this.channelId, e),
            N = m.Z.getVoicePlatformForChannel(this.channelId, e),
            C = d.Z.getChannel(this.channelId),
            P = null != (r = (null == (n = this.call) || null == (t = n.ringing) ? void 0 : t.includes(e)) || this.guildRingingUsers.has(e)) && r;
        (null != A || P) &&
            ((E = T(I({ type: b.fO.USER }, h.Z.getUserStreamData(e, null == C ? void 0 : C.getGuildId())), {
                user: S,
                id: S.id,
                voiceState: A,
                voicePlatform: N,
                speaking: (0, a.O)({
                    userId: e,
                    checkIsMuted: !0
                }),
                lastSpoke: null != (i = this.lastSpoke[e]) ? i : 0,
                soundsharing: _.Z.isSoundSharing(e),
                ringing: P,
                userNick: g.ZP.getName(null == C ? void 0 : C.getGuildId(), this.channelId, S),
                localVideoDisabled: f.Z.isLocalVideoDisabled(S.id)
            })),
            v.push(E));
        let R = null != (o = l.Z.getStreamForUser(e, null == C ? void 0 : C.getGuildId())) ? o : l.Z.getActiveStreamForUser(e, null == C ? void 0 : C.getGuildId());
        if (null != R && R.channelId === this.channelId) {
            let t = (0, s.V9)(R),
                n = this.getParticipant(t),
                r = R.ownerId === c.default.getId() && l.Z.isSelfStreamHidden(this.channelId),
                i =
                    (null == n ? void 0 : n.type) === b.fO.STREAM
                        ? {
                              maxResolution: null != n.maxResolution ? I({}, n.maxResolution) : void 0,
                              maxFrameRate: n.maxFrameRate
                          }
                        : null;
            (y = T(I({}, h.Z.getUserStreamData(e, null == C ? void 0 : C.getGuildId(), O.Yn.STREAM), i), {
                type: r ? b.fO.HIDDEN_STREAM : b.fO.STREAM,
                id: t,
                userVideo: null != (u = null == A ? void 0 : A.selfVideo) && u,
                user: S,
                userNick: g.ZP.getName(null == C ? void 0 : C.getGuildId(), this.channelId, S),
                stream: R
            })),
                v.push(y);
        }
        return v;
    }
    constructor(e) {
        v(this, 'channelId', void 0),
            v(this, 'call', void 0),
            v(this, 'participants', {}),
            v(this, 'lastSpoke', {}),
            v(this, 'guildRingingUsers', new Set()),
            v(
                this,
                'participantByIndex',
                new i.h((e) => {
                    var t;
                    let n = [];
                    return e.type === b.fO.USER && e.speaking && n.push('SPEAKING'), e.type === b.fO.USER && (null == (t = e.voiceState) ? void 0 : t.selfVideo) ? (n.push('VIDEO'), e.localVideoDisabled || n.push('FILTERED')) : (0, b._5)(e) && (n.push('STREAM'), e.type !== b.fO.HIDDEN_STREAM && null != e.streamId && n.push('FILTERED')), e.type === b.fO.ACTIVITY && (n.push('ACTIVITY'), n.push('FILTERED')), n;
                }, C)
            ),
            (this.channelId = e);
    }
}
