n.d(t, {
    Lc: () => w,
    Yr: () => P,
    ZP: () => x,
    gN: () => N,
    sI: () => R,
}),
    n(35282),
    n(388685),
    n(539854);
var r = n(392711),
    i = n(759174),
    a = n(586902),
    o = n(317381),
    s = n(541638),
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
    b = n(933546),
    y = n(354459),
    O = n(981631),
    v = n(65154);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function C(e, t) {
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
let A = "__EMBEDDED_ACTIVITIES__";
function N(e) {
    let { applicationId: t, instanceId: n } = e;
    return null != n ? "activity-".concat(t, "-").concat(n) : "activity-".concat(t);
}
function P(e) {
    switch (e.type) {
        case y.fO.ACTIVITY:
            return "\x01".concat(e.sortKey);
        case y.fO.HIDDEN_STREAM:
        case y.fO.STREAM:
            return "".concat(e.userVideo ? "\x02" : "\x03").concat((0, b.Z)(e.userNick, e.user), "\x03");
        case y.fO.USER:
            var t, n;
            let r = "\x05";
            return (
                (null == (t = e.voiceState) ? void 0 : t.selfVideo)
                    ? (r = "\x03")
                    : (null == (n = e.voiceState) ? void 0 : n.selfStream) && (r = "\x04"),
                "".concat(r).concat((0, b.Z)(e.userNick, e.user))
            );
    }
}
function w(e, t) {
    let [, n] = e,
        [, r] = t;
    return n === r;
}
var R = (function (e) {
    return (
        (e.VIDEO = "VIDEO"),
        (e.STREAM = "STREAM"),
        (e.FILTERED = "FILTERED"),
        (e.SPEAKING = "SPEAKING"),
        (e.ACTIVITY = "ACTIVITY"),
        (e.NOT_POPPED_OUT = "NOT_POPPED_OUT"),
        e
    );
})({});
function D(e) {
    return u.default.getId() === e && _.Z.isCurrentUserPTTLatched();
}
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
        let e = f.Z.getChannel(this.channelId);
        if (
            null == e ||
            e.type === O.d4z.GUILD_TEXT ||
            ((this.call = d.Z.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))
        )
            return !1;
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
        return this.updateParticipant(A);
    }
    hasEmbeddedActivity() {
        return this.size("ACTIVITY") > 0;
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
                              if (n.type === y.fO.USER) {
                                  let t = (0, a.O)({
                                      userId: e,
                                      checkIsMuted: !0,
                                  });
                                  return (
                                      t && (this.lastSpoke[e] = Date.now()),
                                      this.participantByIndex.set(
                                          n.id,
                                          C(I({}, n), {
                                              speaking: t,
                                              voiceDb: _.Z.getVoiceVolume(e),
                                              latched: D(e),
                                              lastSpoke: this.lastSpoke[e],
                                              soundsharing: _.Z.isSoundSharing(e),
                                          }),
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
                                            C(I({}, r), {
                                                maxResolution: t,
                                                maxFrameRate: n,
                                            }),
                                        ),
                                        !0)
                                      : e,
                              !1,
                          )) && i
        );
    }
    updateGuildRingingUsers(e, t) {
        t ? this.guildRingingUsers.add(e) : this.guildRingingUsers.delete(e);
    }
    updateParticipantPoppedOut(e, t) {
        t ? this.poppedOutParticipants.add(e) : this.poppedOutParticipants.delete(e);
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
                id: N({
                    applicationId: e.applicationId,
                    instanceId: e.compositeInstanceId,
                }),
                applicationId: e.applicationId,
                activityType: O.IIU.PLAYING,
                activityUrl: e.url,
                participants: [...(null != (r = e.participants) ? r : [])],
                guildId:
                    null != (i = null == (n = f.Z.getChannel(this.channelId)) ? void 0 : n.getGuildId()) ? i : null,
                sortKey: t.toString(),
            };
        });
    }
    _getParticipantsForUser(e) {
        var t, n, r, i, o, d;
        let b,
            O,
            S = [],
            T = h.default.getUser(e);
        if (null == T) return S;
        let A = g.Z.getVoiceStateForChannel(this.channelId, e),
            N = g.Z.getVoicePlatformForChannel(this.channelId, e),
            P = f.Z.getChannel(this.channelId),
            w = null == P ? void 0 : P.getGuildId(),
            R =
                null !=
                    (r =
                        (null == (n = this.call) || null == (t = n.ringing) ? void 0 : t.includes(e)) ||
                        this.guildRingingUsers.has(e)) && r;
        (null != A || R) &&
            ((b = C(I({ type: y.fO.USER }, m.Z.getUserStreamData(e, w)), {
                user: T,
                id: T.id,
                voiceState: A,
                voicePlatform: N,
                speaking: (0, a.O)({
                    userId: e,
                    checkIsMuted: !0,
                }),
                voiceDb: _.Z.getVoiceVolume(e),
                latched: D(e),
                lastSpoke: null != (i = this.lastSpoke[e]) ? i : 0,
                soundsharing: _.Z.isSoundSharing(e),
                ringing: R,
                userNick: E.ZP.getName(w, this.channelId, T),
                userAvatarDecoration: (0, s.o)(T, w),
                localVideoDisabled: p.Z.isLocalVideoDisabled(T.id),
                isPoppedOut: this.poppedOutParticipants.has(T.id),
            })),
            S.push(b));
        let x = null != (o = c.Z.getStreamForUser(e, w)) ? o : c.Z.getActiveStreamForUser(e, w);
        if (null != x && x.channelId === this.channelId) {
            let t = (0, l.V9)(x),
                n = this.getParticipant(t),
                r = x.ownerId === u.default.getId() && c.Z.isSelfStreamHidden(this.channelId),
                i =
                    (null == n ? void 0 : n.type) === y.fO.STREAM
                        ? {
                              maxResolution: null != n.maxResolution ? I({}, n.maxResolution) : void 0,
                              maxFrameRate: n.maxFrameRate,
                          }
                        : null;
            (O = C(I({}, m.Z.getUserStreamData(e, w, v.Yn.STREAM), i), {
                type: r ? y.fO.HIDDEN_STREAM : y.fO.STREAM,
                id: t,
                userVideo: null != (d = null == A ? void 0 : A.selfVideo) && d,
                user: T,
                userNick: E.ZP.getName(w, this.channelId, T),
                stream: x,
                isPoppedOut: this.poppedOutParticipants.has(t),
            })),
                S.push(O);
        }
        return S;
    }
    constructor(e) {
        S(this, "channelId", void 0),
            S(this, "call", void 0),
            S(this, "participants", {}),
            S(this, "lastSpoke", {}),
            S(this, "guildRingingUsers", new Set()),
            S(this, "poppedOutParticipants", new Set()),
            S(
                this,
                "participantByIndex",
                new i.h((e) => {
                    var t;
                    let n = [];
                    return (
                        e.type === y.fO.USER && e.speaking && n.push("SPEAKING"),
                        e.type === y.fO.USER && (null == (t = e.voiceState) ? void 0 : t.selfVideo)
                            ? (n.push("VIDEO"), e.localVideoDisabled || e.isPoppedOut || n.push("FILTERED"))
                            : (0, y._5)(e) &&
                              (n.push("STREAM"),
                              e.type === y.fO.HIDDEN_STREAM ||
                                  null == e.streamId ||
                                  e.isPoppedOut ||
                                  n.push("FILTERED")),
                        e.type === y.fO.ACTIVITY && n.push("ACTIVITY"),
                        ("isPoppedOut" in e && e.isPoppedOut) || n.push("NOT_POPPED_OUT"),
                        n
                    );
                }, P),
            ),
            (this.channelId = e);
    }
}
