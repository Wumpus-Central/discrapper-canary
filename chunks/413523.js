n.d(t, {
    Yr: () => D,
    ZP: () => L,
    oW: () => w,
    sI: () => x
}),
    n(301563),
    n(47120),
    n(653041),
    n(789020);
var r = n(392711),
    i = n(759174),
    o = n(586902),
    a = n(636449),
    s = n(774226),
    l = n(317381),
    c = n(569545),
    u = n(199902),
    d = n(314897),
    f = n(523746),
    p = n(592125),
    _ = n(131951),
    h = n(158776),
    m = n(606304),
    g = n(594174),
    E = n(33039),
    v = n(979651),
    b = n(630388),
    y = n(5192),
    O = n(933546),
    S = n(354459),
    I = n(981631),
    T = n(65154);
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
function A(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = '__EMBEDDED_ACTIVITIES__';
function w(e) {
    return 'activity-'.concat(e);
}
function D(e) {
    switch (e.type) {
        case S.fO.PRESENCE_EMBEDDED_ACTIVITY:
            return '\0';
        case S.fO.ACTIVITY:
            return '\x01'.concat(e.sortKey);
        case S.fO.HIDDEN_STREAM:
        case S.fO.STREAM:
            return ''.concat(e.userVideo ? '\x02' : '\x03').concat((0, O.Z)(e.userNick, e.user), '\x03');
        case S.fO.USER:
            var t, n;
            let r = '\x05';
            return (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (r = '\x03') : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfStream) && (r = '\x04'), ''.concat(r).concat((0, O.Z)(e.userNick, e.user));
    }
}
var x = (function (e) {
    return (e.VIDEO = 'VIDEO'), (e.STREAM = 'STREAM'), (e.FILTERED = 'FILTERED'), (e.SPEAKING = 'SPEAKING'), (e.ACTIVITY = 'ACTIVITY'), e;
})({});
class L {
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
        let e = p.Z.getChannel(this.channelId);
        if (null == e || e.type === I.d4z.GUILD_TEXT || ((this.call = f.Z.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))) return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(v.Z.getVoiceStatesForChannel(e.id)) : e.recipients);
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
        return null !== (t = this.participantByIndex.get(e)) && void 0 !== t ? t : null;
    }
    updateEmbeddedActivities() {
        return this.updateParticipant(P);
    }
    hasEmbeddedActivity() {
        let e = this.participants[P];
        return null != e && e.length > 0;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = e === P ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
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
                              if (n.type === S.fO.USER) {
                                  let t = (0, o.O)({
                                      userId: e,
                                      checkIsMuted: !0
                                  });
                                  return (
                                      t && (this.lastSpoke[e] = Date.now()),
                                      this.participantByIndex.set(
                                          n.id,
                                          R(A({}, n), {
                                              speaking: t,
                                              lastSpoke: this.lastSpoke[e],
                                              soundsharing: m.Z.isSoundSharing(e)
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
                                  r.type === S.fO.STREAM
                                      ? (this.participantByIndex.set(
                                            r.id,
                                            R(A({}, r), {
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
        let n = l.ZP.getEmbeddedActivitiesForChannel(this.channelId).concat(l.ZP.getEmbeddedActivitiesForStartingChannel(this.channelId)),
            i = null !== (e = l.ZP.getSelfEmbeddedActivityForChannel(this.channelId)) && void 0 !== e ? e : l.ZP.getSelfEmbeddedActivitiesForStartingChannel(this.channelId);
        if (null == i) return n;
        {
            let e = (0, r.uniqBy)([...n, i], (e) => e.applicationId),
                o = null === (t = i.participants) || void 0 === t ? void 0 : t.some((e) => e.sessionId === d.default.getSessionId());
            return (0, a.R)() && o ? e.filter((e) => e.applicationId !== i.applicationId && e.compositeInstanceId !== i.compositeInstanceId) : e;
        }
    }
    _getParticipantsForEmbeddedActivities() {
        return this._getEmbeddedActivities().map((e, t) => {
            var n, r, i;
            return {
                type: S.fO.ACTIVITY,
                id: w(e.applicationId),
                applicationId: e.applicationId,
                activityType: I.IIU.PLAYING,
                activityUrl: e.url,
                participants: [...(null !== (r = e.participants) && void 0 !== r ? r : [])],
                guildId: null !== (i = null === (n = p.Z.getChannel(this.channelId)) || void 0 === n ? void 0 : n.getGuildId()) && void 0 !== i ? i : null,
                sortKey: t.toString()
            };
        });
    }
    _getParticipantsForUser(e) {
        var t, n, r, i, a, f, O, N;
        let C, P, D;
        let x = [],
            L = g.default.getUser(e);
        if (null == L) return x;
        let M = v.Z.getVoiceStateForChannel(this.channelId, e),
            k = v.Z.getVoicePlatformForChannel(this.channelId, e),
            j = p.Z.getChannel(this.channelId),
            U = null !== (r = (null === (n = this.call) || void 0 === n ? void 0 : null === (t = n.ringing) || void 0 === t ? void 0 : t.includes(e)) || this.guildRingingUsers.has(e)) && void 0 !== r && r;
        (null != M || U) &&
            ((C = R(A({ type: S.fO.USER }, E.Z.getUserStreamData(e, null == j ? void 0 : j.getGuildId())), {
                user: L,
                id: L.id,
                voiceState: M,
                voicePlatform: k,
                speaking: (0, o.O)({
                    userId: e,
                    checkIsMuted: !0
                }),
                lastSpoke: null !== (i = this.lastSpoke[e]) && void 0 !== i ? i : 0,
                soundsharing: m.Z.isSoundSharing(e),
                ringing: U,
                userNick: y.ZP.getName(null == j ? void 0 : j.getGuildId(), this.channelId, L),
                localVideoDisabled: _.Z.isLocalVideoDisabled(L.id)
            })),
            x.push(C));
        let G = null !== (a = u.Z.getStreamForUser(e, null == j ? void 0 : j.getGuildId())) && void 0 !== a ? a : u.Z.getActiveStreamForUser(e, null == j ? void 0 : j.getGuildId());
        if (null != G && G.channelId === this.channelId) {
            let t = (0, c.V9)(G),
                n = this.getParticipant(t),
                r = G.ownerId === d.default.getId() && u.Z.isSelfStreamHidden(this.channelId),
                i =
                    (null == n ? void 0 : n.type) === S.fO.STREAM
                        ? {
                              maxResolution: null != n.maxResolution ? A({}, n.maxResolution) : void 0,
                              maxFrameRate: n.maxFrameRate
                          }
                        : null;
            (P = R(A({}, E.Z.getUserStreamData(e, null == j ? void 0 : j.getGuildId(), T.Yn.STREAM), i), {
                type: r ? S.fO.HIDDEN_STREAM : S.fO.STREAM,
                id: t,
                userVideo: null !== (f = null == M ? void 0 : M.selfVideo) && void 0 !== f && f,
                user: L,
                userNick: y.ZP.getName(null == j ? void 0 : j.getGuildId(), this.channelId, L),
                stream: G
            })),
                x.push(P);
        }
        let B = h.Z.findActivity(L.id, (e) => [I.IIU.PLAYING, I.IIU.WATCHING].includes(e.type));
        if ((0, s.sq)() && null != M && M.channelId === this.channelId && null != B && (0, b.yE)(null !== (O = B.flags) && void 0 !== O ? O : 0, I.xjy.EMBEDDED)) {
            let t = l.ZP.getCurrentEmbeddedActivity();
            (null == t ? void 0 : null === (N = t.participants) || void 0 === N ? void 0 : N.some((t) => t.userId === e && t.sessionId === M.sessionId)) !== !0 &&
                null != B.application_id &&
                ((D = {
                    type: S.fO.PRESENCE_EMBEDDED_ACTIVITY,
                    id: w(B.application_id),
                    applicationId: B.application_id,
                    activityType: B.type,
                    activity: B,
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
                new i.h((e) => {
                    var t;
                    let n = [];
                    return e.type === S.fO.USER && e.speaking && n.push('SPEAKING'), e.type === S.fO.USER && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (n.push('VIDEO'), e.localVideoDisabled || n.push('FILTERED')) : (0, S._5)(e) && (n.push('STREAM'), e.type !== S.fO.HIDDEN_STREAM && null != e.streamId && n.push('FILTERED')), e.type === S.fO.ACTIVITY && (n.push('ACTIVITY'), n.push('FILTERED')), n;
                }, D)
            ),
            (this.channelId = e);
    }
}
