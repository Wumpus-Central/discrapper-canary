n.d(t, {
    Yr: () => R,
    ZP: () => w,
    gN: () => C,
    sI: () => P
}),
    n(35282),
    n(388685),
    n(539854);
var r = n(392711),
    i = n(759174),
    a = n(586902),
    o = n(636449),
    s = n(317381),
    l = n(569545),
    c = n(199902),
    u = n(314897),
    d = n(523746),
    f = n(592125),
    _ = n(131951),
    p = n(606304),
    h = n(594174),
    m = n(33039),
    g = n(979651),
    E = n(5192),
    b = n(933546),
    y = n(354459),
    v = n(981631),
    O = n(65154);
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
function S(e) {
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
                I(e, t, n[t]);
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
function A(e, t) {
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
let N = '__EMBEDDED_ACTIVITIES__';
function C(e) {
    let { applicationId: t, instanceId: n } = e;
    return null != n ? 'activity-'.concat(t, '-').concat(n) : 'activity-'.concat(t);
}
function R(e) {
    switch (e.type) {
        case y.fO.PRESENCE_EMBEDDED_ACTIVITY:
            return '\0';
        case y.fO.ACTIVITY:
            return '\x01'.concat(e.sortKey);
        case y.fO.HIDDEN_STREAM:
        case y.fO.STREAM:
            return ''.concat(e.userVideo ? '\x02' : '\x03').concat((0, b.Z)(e.userNick, e.user), '\x03');
        case y.fO.USER:
            var t, n;
            let r = '\x05';
            return (null == (t = e.voiceState) ? void 0 : t.selfVideo) ? (r = '\x03') : (null == (n = e.voiceState) ? void 0 : n.selfStream) && (r = '\x04'), ''.concat(r).concat((0, b.Z)(e.userNick, e.user));
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
        if (null == e || e.type === v.d4z.GUILD_TEXT || ((this.call = d.Z.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))) return !1;
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
        let e = this.participants[N];
        return null != e && e.length > 0;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = e === N ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
        if (null == t && 0 === n.length) return !1;
        if (
            (null == t ||
                t.forEach((e) => {
                    this.participantByIndex.delete(e.id);
                }),
            n.forEach((e) => {
                this.participantByIndex.set(e.id, e);
            }),
            (this.participants[e] = n),
            e !== N)
        ) {
            var r, i;
            let e = null != (r = null == t ? void 0 : t.length) ? r : 0,
                a = null != (i = null == n ? void 0 : n.length) ? i : 0;
            ((e < 1 && a > 0) || (e > 0 && a < 1)) && this.updateEmbeddedActivities();
        }
        return !0;
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
                                          A(S({}, n), {
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
                                            A(S({}, r), {
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
        let n = s.ZP.getEmbeddedActivitiesForChannel(this.channelId).concat(s.ZP.getEmbeddedActivitiesForStartingChannel(this.channelId)),
            i = new Set();
        Object.entries(this.participants).forEach((e) => {
            let [t, n] = e;
            n.length > 0 && i.add(t);
        });
        let a = n.filter((e) => {
                var t;
                return null == (t = e.participants) ? void 0 : t.some((e) => i.has(e.userId));
            }),
            l = null != (e = s.ZP.getSelfEmbeddedActivityForChannel(this.channelId)) ? e : s.ZP.getSelfEmbeddedActivityForStartingChannel(this.channelId);
        if (null == l) return a;
        {
            let e = (0, r.uniqBy)([...a, l], (e) => e.compositeInstanceId);
            return (null == (t = l.participants) ? void 0 : t.some((e) => e.sessionId === u.default.getSessionId())) && (0, o.R)() ? e.filter((e) => e.applicationId !== l.applicationId && e.compositeInstanceId !== l.compositeInstanceId) : e;
        }
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
                activityType: v.IIU.PLAYING,
                activityUrl: e.url,
                participants: [...(null != (r = e.participants) ? r : [])],
                guildId: null != (i = null == (n = f.Z.getChannel(this.channelId)) ? void 0 : n.getGuildId()) ? i : null,
                sortKey: t.toString()
            };
        });
    }
    _getParticipantsForUser(e) {
        var t, n, r, i, o, s;
        let d,
            b,
            v = [],
            I = h.default.getUser(e);
        if (null == I) return v;
        let T = g.Z.getVoiceStateForChannel(this.channelId, e),
            N = g.Z.getVoicePlatformForChannel(this.channelId, e),
            C = f.Z.getChannel(this.channelId),
            R = null != (r = (null == (n = this.call) || null == (t = n.ringing) ? void 0 : t.includes(e)) || this.guildRingingUsers.has(e)) && r;
        (null != T || R) &&
            ((d = A(S({ type: y.fO.USER }, m.Z.getUserStreamData(e, null == C ? void 0 : C.getGuildId())), {
                user: I,
                id: I.id,
                voiceState: T,
                voicePlatform: N,
                speaking: (0, a.O)({
                    userId: e,
                    checkIsMuted: !0
                }),
                lastSpoke: null != (i = this.lastSpoke[e]) ? i : 0,
                soundsharing: p.Z.isSoundSharing(e),
                ringing: R,
                userNick: E.ZP.getName(null == C ? void 0 : C.getGuildId(), this.channelId, I),
                localVideoDisabled: _.Z.isLocalVideoDisabled(I.id)
            })),
            v.push(d));
        let P = null != (o = c.Z.getStreamForUser(e, null == C ? void 0 : C.getGuildId())) ? o : c.Z.getActiveStreamForUser(e, null == C ? void 0 : C.getGuildId());
        if (null != P && P.channelId === this.channelId) {
            let t = (0, l.V9)(P),
                n = this.getParticipant(t),
                r = P.ownerId === u.default.getId() && c.Z.isSelfStreamHidden(this.channelId),
                i =
                    (null == n ? void 0 : n.type) === y.fO.STREAM
                        ? {
                              maxResolution: null != n.maxResolution ? S({}, n.maxResolution) : void 0,
                              maxFrameRate: n.maxFrameRate
                          }
                        : null;
            (b = A(S({}, m.Z.getUserStreamData(e, null == C ? void 0 : C.getGuildId(), O.Yn.STREAM), i), {
                type: r ? y.fO.HIDDEN_STREAM : y.fO.STREAM,
                id: t,
                userVideo: null != (s = null == T ? void 0 : T.selfVideo) && s,
                user: I,
                userNick: E.ZP.getName(null == C ? void 0 : C.getGuildId(), this.channelId, I),
                stream: P
            })),
                v.push(b);
        }
        return v;
    }
    constructor(e) {
        I(this, 'channelId', void 0),
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
                    return e.type === y.fO.USER && e.speaking && n.push('SPEAKING'), e.type === y.fO.USER && (null == (t = e.voiceState) ? void 0 : t.selfVideo) ? (n.push('VIDEO'), e.localVideoDisabled || n.push('FILTERED')) : (0, y._5)(e) && (n.push('STREAM'), e.type !== y.fO.HIDDEN_STREAM && null != e.streamId && n.push('FILTERED')), e.type === y.fO.ACTIVITY && (n.push('ACTIVITY'), n.push('FILTERED')), n;
                }, R)
            ),
            (this.channelId = e);
    }
}
