n.d(t, {
    Lc: () => D,
    Yr: () => P,
    ZP: () => x,
    gN: () => R,
    sI: () => w,
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
    _ = n(131951),
    p = n(606304),
    h = n(594174),
    m = n(33039),
    g = n(979651),
    E = n(5192),
    b = n(318793),
    y = n(933546),
    O = n(354459),
    v = n(981631),
    I = n(65154);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = "__EMBEDDED_ACTIVITIES__";
function R(e) {
    let { applicationId: t, instanceId: n } = e;
    return null != n ? "activity-".concat(t, "-").concat(n) : "activity-".concat(t);
}
function P(e) {
    switch (e.type) {
        case O.fO.ACTIVITY:
            return "\x01".concat(e.sortKey);
        case O.fO.HIDDEN_STREAM:
        case O.fO.STREAM:
            return "".concat(e.userVideo ? "\x02" : "\x03").concat((0, y.Z)(e.userNick, e.user), "\x03");
        case O.fO.USER:
            var t, n;
            let r = "\x05";
            return (
                (null == (t = e.voiceState) ? void 0 : t.selfVideo)
                    ? (r = "\x03")
                    : (null == (n = e.voiceState) ? void 0 : n.selfStream) && (r = "\x04"),
                "".concat(r).concat((0, y.Z)(e.userNick, e.user))
            );
    }
}
function D(e, t) {
    let [, n] = e,
        [, r] = t;
    return n === r;
}
var w = (function (e) {
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
function L(e) {
    return u.default.getId() === e && p.Z.isCurrentUserPTTLatched();
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
            e.type === v.d4z.GUILD_TEXT ||
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
        return this.updateParticipant(N);
    }
    hasEmbeddedActivity() {
        return this.size("ACTIVITY") > 0;
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
                              if (n.type === O.fO.USER) {
                                  let t = (0, a.O)({
                                      userId: e,
                                      checkIsMuted: !0,
                                  });
                                  return (
                                      t && (this.lastSpoke[e] = Date.now()),
                                      this.participantByIndex.set(
                                          n.id,
                                          C(S({}, n), {
                                              speaking: t,
                                              latched: L(e),
                                              lastSpoke: this.lastSpoke[e],
                                              soundsharing: p.Z.isSoundSharing(e),
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
                                  r.type === O.fO.STREAM
                                      ? (this.participantByIndex.set(
                                            r.id,
                                            C(S({}, r), {
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
                type: O.fO.ACTIVITY,
                id: R({
                    applicationId: e.applicationId,
                    instanceId: e.compositeInstanceId,
                }),
                applicationId: e.applicationId,
                activityType: v.IIU.PLAYING,
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
            y,
            v = [],
            T = h.default.getUser(e);
        if (null == T) return v;
        let A = g.Z.getVoiceStateForChannel(this.channelId, e),
            N = g.Z.getVoicePlatformForChannel(this.channelId, e),
            R = f.Z.getChannel(this.channelId),
            P = null == R ? void 0 : R.getGuildId(),
            D =
                null !=
                    (r =
                        (null == (n = this.call) || null == (t = n.ringing) ? void 0 : t.includes(e)) ||
                        this.guildRingingUsers.has(e)) && r;
        (null != A || D) &&
            ((b = C(S({ type: O.fO.USER }, m.Z.getUserStreamData(e, P)), {
                user: T,
                id: T.id,
                voiceState: A,
                voicePlatform: N,
                speaking: (0, a.O)({
                    userId: e,
                    checkIsMuted: !0,
                }),
                latched: L(e),
                lastSpoke: null != (i = this.lastSpoke[e]) ? i : 0,
                soundsharing: p.Z.isSoundSharing(e),
                ringing: D,
                userNick: E.ZP.getName(P, this.channelId, T),
                userAvatarDecoration: (0, s.o)(T, P),
                localVideoDisabled: _.Z.isLocalVideoDisabled(T.id),
                isPoppedOut: this.poppedOutParticipants.has(T.id),
            })),
            v.push(b));
        let w = null != (o = c.Z.getStreamForUser(e, P)) ? o : c.Z.getActiveStreamForUser(e, P);
        if (null != w && w.channelId === this.channelId) {
            let t = (0, l.V9)(w),
                n = this.getParticipant(t),
                r = w.ownerId === u.default.getId() && c.Z.isSelfStreamHidden(this.channelId),
                i =
                    (null == n ? void 0 : n.type) === O.fO.STREAM
                        ? {
                              maxResolution: null != n.maxResolution ? S({}, n.maxResolution) : void 0,
                              maxFrameRate: n.maxFrameRate,
                          }
                        : null;
            (y = C(S({}, m.Z.getUserStreamData(e, P, I.Yn.STREAM), i), {
                type: r ? O.fO.HIDDEN_STREAM : O.fO.STREAM,
                id: t,
                userVideo: null != (d = null == A ? void 0 : A.selfVideo) && d,
                user: T,
                userNick: E.ZP.getName(P, this.channelId, T),
                stream: w,
                isPoppedOut: this.poppedOutParticipants.has(t),
            })),
                v.push(y);
        }
        return v;
    }
    constructor(e) {
        T(this, "channelId", void 0),
            T(this, "call", void 0),
            T(this, "participants", {}),
            T(this, "lastSpoke", {}),
            T(this, "guildRingingUsers", new Set()),
            T(this, "poppedOutParticipants", new Set()),
            T(
                this,
                "participantByIndex",
                new i.h((e) => {
                    var t;
                    let n = [];
                    if (
                        (e.type === O.fO.USER && e.speaking && n.push("SPEAKING"),
                        e.type === O.fO.USER && (null == (t = e.voiceState) ? void 0 : t.selfVideo))
                    )
                        n.push("VIDEO"), e.localVideoDisabled || e.isPoppedOut || n.push("FILTERED");
                    else if ((0, O._5)(e)) {
                        n.push("STREAM");
                        let { showInCallGrid: t } = (0, b.$)({ location: "ChannelRTCParticipants" });
                        e.type !== O.fO.HIDDEN_STREAM &&
                            (null != e.streamId || t) &&
                            !e.isPoppedOut &&
                            n.push("FILTERED");
                    }
                    return (
                        e.type === O.fO.ACTIVITY && n.push("ACTIVITY"),
                        ("isPoppedOut" in e && e.isPoppedOut) || n.push("NOT_POPPED_OUT"),
                        n
                    );
                }, P),
            ),
            (this.channelId = e);
    }
}
