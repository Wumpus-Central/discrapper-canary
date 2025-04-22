n.d(t, {
    Yr: () => D,
    ZP: () => x,
    gN: () => w,
    sI: () => L
}),
    n(35282),
    n(388685),
    n(539854);
var r = n(392711),
    i = n(252258),
    a = n(759174),
    o = n(586902),
    s = n(317381),
    l = n(16609),
    c = n(620662),
    u = n(569545),
    d = n(199902),
    f = n(314897),
    _ = n(523746),
    p = n(592125),
    h = n(131951),
    m = n(158776),
    g = n(606304),
    E = n(594174),
    b = n(33039),
    y = n(979651),
    v = n(5192),
    O = n(933546),
    I = n(354459),
    S = n(981631),
    T = n(65154);
function A(e, t, n) {
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
function N(e) {
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
                A(e, t, n[t]);
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
    let { applicationId: t, instanceId: n } = e;
    return null != n ? 'activity-'.concat(t, '-').concat(n) : 'activity-'.concat(t);
}
function D(e) {
    switch (e.type) {
        case I.fO.PRESENCE_EMBEDDED_ACTIVITY:
            return '\0';
        case I.fO.ACTIVITY:
            return '\x01'.concat(e.sortKey);
        case I.fO.HIDDEN_STREAM:
        case I.fO.STREAM:
            return ''.concat(e.userVideo ? '\x02' : '\x03').concat((0, O.Z)(e.userNick, e.user), '\x03');
        case I.fO.USER:
            var t, n;
            let r = '\x05';
            return (null == (t = e.voiceState) ? void 0 : t.selfVideo) ? (r = '\x03') : (null == (n = e.voiceState) ? void 0 : n.selfStream) && (r = '\x04'), ''.concat(r).concat((0, O.Z)(e.userNick, e.user));
    }
}
var L = (function (e) {
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
        let e = p.Z.getChannel(this.channelId);
        if (null == e || e.type === S.d4z.GUILD_TEXT || ((this.call = _.Z.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))) return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(y.Z.getVoiceStatesForChannel(e.id)) : e.recipients);
        return (
            t.add(f.default.getId()),
            this.guildRingingUsers.size > 0 && (t = new Set([...t, ...this.guildRingingUsers])),
            d.Z.getAllActiveStreamsForChannel(this.channelId).forEach((e) => {
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
        return this.updateParticipant(P);
    }
    hasEmbeddedActivity() {
        return this.size('ACTIVITY') > 0;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = e === P ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
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
            e !== P)
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
                              if (n.type === I.fO.USER) {
                                  let t = (0, o.O)({
                                      userId: e,
                                      checkIsMuted: !0
                                  });
                                  return (
                                      t && (this.lastSpoke[e] = Date.now()),
                                      this.participantByIndex.set(
                                          n.id,
                                          R(N({}, n), {
                                              speaking: t,
                                              lastSpoke: this.lastSpoke[e],
                                              soundsharing: g.Z.isSoundSharing(e)
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
                                  r.type === I.fO.STREAM
                                      ? (this.participantByIndex.set(
                                            r.id,
                                            R(N({}, r), {
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
        let n = s.ZP.getEmbeddedActivitiesForChannel(this.channelId);
        (null == (e = p.Z.getChannel(this.channelId)) ? void 0 : e.getGuildId()) != null && (n = n.concat(s.ZP.getEmbeddedActivitiesForStartingChannel(this.channelId)));
        let a = new Set();
        Object.entries(this.participants).forEach((e) => {
            let [t, n] = e;
            n.length > 0 && a.add(t);
        });
        let o = n.filter((e) => {
                var t;
                return null == (t = e.participants) ? void 0 : t.some((e) => a.has(e.userId));
            }),
            l = null != (t = s.ZP.getSelfEmbeddedActivityForChannel(this.channelId)) ? t : s.ZP.getSelfEmbeddedActivityForStartingChannel(this.channelId);
        return null == l ? o : (0, r.uniqBy)([...o, l], (e) => e.compositeInstanceId).filter((e) => e.location.kind !== i.E.CONTEXTLESS || e.compositeInstanceId !== l.compositeInstanceId);
    }
    _getParticipantsForEmbeddedActivities() {
        return this._getEmbeddedActivities().map((e, t) => {
            var n, r, i;
            return {
                type: I.fO.ACTIVITY,
                id: w({
                    applicationId: e.applicationId,
                    instanceId: e.compositeInstanceId
                }),
                applicationId: e.applicationId,
                activityType: S.IIU.PLAYING,
                activityUrl: e.url,
                participants: [...(null != (r = e.participants) ? r : [])],
                guildId: null != (i = null == (n = p.Z.getChannel(this.channelId)) ? void 0 : n.getGuildId()) ? i : null,
                sortKey: t.toString()
            };
        });
    }
    _getParticipantsForUser(e) {
        var t, n, r, i, a, _, O;
        let A,
            C,
            P = [],
            D = E.default.getUser(e);
        if (null == D) return P;
        let L = y.Z.getVoiceStateForChannel(this.channelId, e),
            x = y.Z.getVoicePlatformForChannel(this.channelId, e),
            M = p.Z.getChannel(this.channelId),
            k = null != (i = (null == (n = this.call) || null == (t = n.ringing) ? void 0 : t.includes(e)) || this.guildRingingUsers.has(e)) && i;
        (null != L || k) &&
            ((A = R(N({ type: I.fO.USER }, b.Z.getUserStreamData(e, null == M ? void 0 : M.getGuildId())), {
                user: D,
                id: D.id,
                voiceState: L,
                voicePlatform: x,
                speaking: (0, o.O)({
                    userId: e,
                    checkIsMuted: !0
                }),
                lastSpoke: null != (a = this.lastSpoke[e]) ? a : 0,
                soundsharing: g.Z.isSoundSharing(e),
                ringing: k,
                userNick: v.ZP.getName(null == M ? void 0 : M.getGuildId(), this.channelId, D),
                localVideoDisabled: h.Z.isLocalVideoDisabled(D.id)
            })),
            P.push(A));
        let j = null != (_ = d.Z.getStreamForUser(e, null == M ? void 0 : M.getGuildId())) ? _ : d.Z.getActiveStreamForUser(e, null == M ? void 0 : M.getGuildId());
        if (null != j && j.channelId === this.channelId) {
            let t = (0, u.V9)(j),
                n = this.getParticipant(t),
                r = j.ownerId === f.default.getId() && d.Z.isSelfStreamHidden(this.channelId),
                i =
                    (null == n ? void 0 : n.type) === I.fO.STREAM
                        ? {
                              maxResolution: null != n.maxResolution ? N({}, n.maxResolution) : void 0,
                              maxFrameRate: n.maxFrameRate
                          }
                        : null;
            (C = R(N({}, b.Z.getUserStreamData(e, null == M ? void 0 : M.getGuildId(), T.Yn.STREAM), i), {
                type: r ? I.fO.HIDDEN_STREAM : I.fO.STREAM,
                id: t,
                userVideo: null != (O = null == L ? void 0 : L.selfVideo) && O,
                user: D,
                userNick: v.ZP.getName(null == M ? void 0 : M.getGuildId(), this.channelId, D),
                stream: j
            })),
                P.push(C);
        }
        let U = m.Z.findActivity(D.id, (e) => (0, c.Z)(e, S.xjy.CONTEXTLESS)),
            G = null == U || null == (r = U.party) ? void 0 : r.id;
        if (null != U && null != U.application_id && null != L && null != G && (null == M ? void 0 : M.getGuildId()) == null && (null == M ? void 0 : M.id) === (0, l.Bt)(G)) {
            let e = s.ZP.getCurrentEmbeddedActivity();
            (null == e ? void 0 : e.compositeInstanceId) !== G &&
                P.push({
                    id: w({
                        applicationId: U.application_id,
                        instanceId: G
                    }),
                    type: I.fO.PRESENCE_EMBEDDED_ACTIVITY,
                    applicationId: U.application_id,
                    activityType: U.type,
                    activity: U,
                    user: D
                });
        }
        return P;
    }
    constructor(e) {
        A(this, 'channelId', void 0),
            A(this, 'call', void 0),
            A(this, 'participants', {}),
            A(this, 'lastSpoke', {}),
            A(this, 'guildRingingUsers', new Set()),
            A(
                this,
                'participantByIndex',
                new a.h((e) => {
                    var t;
                    let n = [];
                    return e.type === I.fO.USER && e.speaking && n.push('SPEAKING'), e.type === I.fO.USER && (null == (t = e.voiceState) ? void 0 : t.selfVideo) ? (n.push('VIDEO'), e.localVideoDisabled || n.push('FILTERED')) : (0, I._5)(e) && (n.push('STREAM'), e.type !== I.fO.HIDDEN_STREAM && null != e.streamId && n.push('FILTERED')), e.type === I.fO.ACTIVITY && (n.push('ACTIVITY'), n.push('FILTERED')), e.type === I.fO.PRESENCE_EMBEDDED_ACTIVITY && (n.push('ACTIVITY'), n.push('FILTERED')), n;
                }, D)
            ),
            (this.channelId = e);
    }
}
