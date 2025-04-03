n.d(t, {
    Yr: () => P,
    ZP: () => D,
    gN: () => R,
    sI: () => w
}),
    n(301563),
    n(47120),
    n(653041);
var r = n(392711),
    i = n(252258),
    o = n(759174),
    a = n(586902),
    s = n(636449),
    l = n(317381),
    c = n(569545),
    u = n(199902),
    d = n(314897),
    f = n(523746),
    _ = n(592125),
    p = n(131951),
    h = n(606304),
    m = n(594174),
    g = n(33039),
    E = n(979651),
    b = n(5192),
    y = n(933546),
    v = n(354459),
    O = n(981631),
    I = n(65154);
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
function T(e) {
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
function N(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = '__EMBEDDED_ACTIVITIES__';
function R(e) {
    let { applicationId: t, instanceId: n } = e;
    return null != n ? 'activity-'.concat(t, '-').concat(n) : 'activity-'.concat(t);
}
function P(e) {
    switch (e.type) {
        case v.fO.PRESENCE_EMBEDDED_ACTIVITY:
            return '\0';
        case v.fO.ACTIVITY:
            return '\x01'.concat(e.sortKey);
        case v.fO.HIDDEN_STREAM:
        case v.fO.STREAM:
            return ''.concat(e.userVideo ? '\x02' : '\x03').concat((0, y.Z)(e.userNick, e.user), '\x03');
        case v.fO.USER:
            var t, n;
            let r = '\x05';
            return (null == (t = e.voiceState) ? void 0 : t.selfVideo) ? (r = '\x03') : (null == (n = e.voiceState) ? void 0 : n.selfStream) && (r = '\x04'), ''.concat(r).concat((0, y.Z)(e.userNick, e.user));
    }
}
var w = (function (e) {
    return (e.VIDEO = 'VIDEO'), (e.STREAM = 'STREAM'), (e.FILTERED = 'FILTERED'), (e.SPEAKING = 'SPEAKING'), (e.ACTIVITY = 'ACTIVITY'), e;
})({});
class D {
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
        if (null == e || e.type === O.d4z.GUILD_TEXT || ((this.call = f.Z.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))) return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(E.Z.getVoiceStatesForChannel(e.id)) : e.recipients);
        return (
            t.add(d.default.getId()),
            this.guildRingingUsers.size > 0 && (t = new Set([...t, ...this.guildRingingUsers])),
            u.Z.getAllActiveStreamsForChannel(this.channelId).forEach((e) => {
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
            null !=
                (n =
                    null == (t = this.participants[e])
                        ? void 0
                        : t.reduce((t, n) => {
                              if (n.type === v.fO.USER) {
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
                                              soundsharing: h.Z.isSoundSharing(e)
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
                                  r.type === v.fO.STREAM
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
        var e, t;
        let n = l.ZP.getEmbeddedActivitiesForChannel(this.channelId).concat(l.ZP.getEmbeddedActivitiesForStartingChannel(this.channelId)),
            o = null != (e = l.ZP.getSelfEmbeddedActivityForChannel(this.channelId)) ? e : l.ZP.getSelfEmbeddedActivityForStartingChannel(this.channelId);
        if (null == o) return n;
        {
            let e = (0, r.uniqBy)([...n, o], (e) => e.compositeInstanceId);
            return (null == (t = o.participants) ? void 0 : t.some((e) => e.sessionId === d.default.getSessionId())) && (0, s.R)({ isContextless: o.location.kind === i.E.CONTEXTLESS }) ? e.filter((e) => e.applicationId !== o.applicationId && e.compositeInstanceId !== o.compositeInstanceId) : e;
        }
    }
    _getParticipantsForEmbeddedActivities() {
        return this._getEmbeddedActivities().map((e, t) => {
            var n, r, i;
            return {
                type: v.fO.ACTIVITY,
                id: R({
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
        var t, n, r, i, o, s;
        let l,
            f,
            y = [],
            O = m.default.getUser(e);
        if (null == O) return y;
        let S = E.Z.getVoiceStateForChannel(this.channelId, e),
            N = E.Z.getVoicePlatformForChannel(this.channelId, e),
            C = _.Z.getChannel(this.channelId),
            R = null != (r = (null == (n = this.call) || null == (t = n.ringing) ? void 0 : t.includes(e)) || this.guildRingingUsers.has(e)) && r;
        (null != S || R) &&
            ((l = A(T({ type: v.fO.USER }, g.Z.getUserStreamData(e, null == C ? void 0 : C.getGuildId())), {
                user: O,
                id: O.id,
                voiceState: S,
                voicePlatform: N,
                speaking: (0, a.O)({
                    userId: e,
                    checkIsMuted: !0
                }),
                lastSpoke: null != (i = this.lastSpoke[e]) ? i : 0,
                soundsharing: h.Z.isSoundSharing(e),
                ringing: R,
                userNick: b.ZP.getName(null == C ? void 0 : C.getGuildId(), this.channelId, O),
                localVideoDisabled: p.Z.isLocalVideoDisabled(O.id)
            })),
            y.push(l));
        let P = null != (o = u.Z.getStreamForUser(e, null == C ? void 0 : C.getGuildId())) ? o : u.Z.getActiveStreamForUser(e, null == C ? void 0 : C.getGuildId());
        if (null != P && P.channelId === this.channelId) {
            let t = (0, c.V9)(P),
                n = this.getParticipant(t),
                r = P.ownerId === d.default.getId() && u.Z.isSelfStreamHidden(this.channelId),
                i =
                    (null == n ? void 0 : n.type) === v.fO.STREAM
                        ? {
                              maxResolution: null != n.maxResolution ? T({}, n.maxResolution) : void 0,
                              maxFrameRate: n.maxFrameRate
                          }
                        : null;
            (f = A(T({}, g.Z.getUserStreamData(e, null == C ? void 0 : C.getGuildId(), I.Yn.STREAM), i), {
                type: r ? v.fO.HIDDEN_STREAM : v.fO.STREAM,
                id: t,
                userVideo: null != (s = null == S ? void 0 : S.selfVideo) && s,
                user: O,
                userNick: b.ZP.getName(null == C ? void 0 : C.getGuildId(), this.channelId, O),
                stream: P
            })),
                y.push(f);
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
                new o.h((e) => {
                    var t;
                    let n = [];
                    return e.type === v.fO.USER && e.speaking && n.push('SPEAKING'), e.type === v.fO.USER && (null == (t = e.voiceState) ? void 0 : t.selfVideo) ? (n.push('VIDEO'), e.localVideoDisabled || n.push('FILTERED')) : (0, v._5)(e) && (n.push('STREAM'), e.type !== v.fO.HIDDEN_STREAM && null != e.streamId && n.push('FILTERED')), e.type === v.fO.ACTIVITY && (n.push('ACTIVITY'), n.push('FILTERED')), n;
                }, P)
            ),
            (this.channelId = e);
    }
}
