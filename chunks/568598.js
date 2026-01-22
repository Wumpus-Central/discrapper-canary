n.d(t, {
    Ay: () => x,
    KU: () => R,
    Qt: () => N,
    hS: () => w,
    r4: () => P,
}),
    n(747238),
    n(896048),
    n(321073);
var r = n(735438),
    i = n(713402),
    a = n(717558),
    s = n(933958),
    o = n(357046),
    l = n(652896),
    c = n(616356),
    u = n(961350),
    d = n(470710),
    f = n(734057),
    p = n(430452),
    _ = n(485296),
    h = n(287809),
    m = n(803301),
    g = n(977997),
    E = n(562153),
    b = n(90575),
    y = n(806931),
    O = n(652215),
    A = n(731854);
function v(e, t, n) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = "__EMBEDDED_ACTIVITIES__";
function N(e) {
    let { applicationId: t, instanceId: n } = e;
    return null != n ? "activity-".concat(t, "-").concat(n) : "activity-".concat(t);
}
function R(e) {
    switch (e.type) {
        case y.lp.ACTIVITY:
            return "\x01".concat(e.sortKey);
        case y.lp.HIDDEN_STREAM:
        case y.lp.STREAM:
            return "".concat(e.userVideo ? "\x02" : "\x03").concat((0, b.A)(e.userNick, e.user), "\x03");
        case y.lp.USER:
            var t, n;
            let r = "\x05";
            return (
                (null == (t = e.voiceState) ? void 0 : t.selfVideo)
                    ? (r = "\x03")
                    : (null == (n = e.voiceState) ? void 0 : n.selfStream) && (r = "\x04"),
                "".concat(r).concat((0, b.A)(e.userNick, e.user))
            );
    }
}
function w(e, t) {
    let [, n] = e,
        [, r] = t;
    return n === r;
}
var P = (function (e) {
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
    return u.default.getId() === e && _.A.isCurrentUserPTTLatched();
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
        let e = f.A.getChannel(this.channelId);
        if (
            null == e ||
            e.type === O.rbe.GUILD_TEXT ||
            ((this.call = d.A.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))
        )
            return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(g.A.getVoiceStatesForChannel(e.id)) : e.recipients);
        return (
            t.add(u.default.getId()),
            this.guildRingingUsers.size > 0 && (t = new Set([...t, ...this.guildRingingUsers])),
            c.A.getAllActiveStreamsForChannel(this.channelId).forEach((e) => {
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
        return this.size("ACTIVITY") > 0;
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
                (t =
                    null == (n = this.participants[e])
                        ? void 0
                        : n.reduce((t, n) => {
                              if (n.type === y.lp.USER) {
                                  let t = (0, a.R)({
                                      userId: e,
                                      checkIsMuted: !0,
                                  });
                                  return (
                                      t && (this.lastSpoke[e] = Date.now()),
                                      this.participantByIndex.set(
                                          n.id,
                                          T(S({}, n), {
                                              speaking: t,
                                              voiceDb: _.A.getVoiceVolume(e),
                                              latched: D(e),
                                              lastSpoke: this.lastSpoke[e],
                                              soundsharing: _.A.isSoundSharing(e),
                                          }),
                                      ),
                                      !0
                                  );
                              }
                              return t;
                          }, !1)) && t
        );
    }
    updateParticipantQuality(e, t, n) {
        var r, i;
        return (
            null !=
                (r =
                    null == (i = this.participants[e])
                        ? void 0
                        : i.reduce(
                              (e, r) =>
                                  r.type === y.lp.STREAM
                                      ? (this.participantByIndex.set(
                                            r.id,
                                            T(S({}, r), {
                                                maxResolution: t,
                                                maxFrameRate: n,
                                            }),
                                        ),
                                        !0)
                                      : e,
                              !1,
                          )) && r
        );
    }
    updateGuildRingingUsers(e, t) {
        t ? this.guildRingingUsers.add(e) : this.guildRingingUsers.delete(e);
    }
    updateParticipantPoppedOut(e, t) {
        t ? this.poppedOutParticipants.add(e) : this.poppedOutParticipants.delete(e);
    }
    _getEmbeddedActivities() {
        let e = s.Ay.getEmbeddedActivitiesForChannel(this.channelId),
            t = s.Ay.getSelfEmbeddedActivityForChannel(this.channelId);
        return null == t ? e : (0, r.uniqBy)([...e, t], (e) => e.compositeInstanceId);
    }
    _getParticipantsForEmbeddedActivities() {
        return this._getEmbeddedActivities().map((e, t) => {
            var n, r, i;
            return {
                type: y.lp.ACTIVITY,
                id: N({
                    applicationId: e.applicationId,
                    instanceId: e.compositeInstanceId,
                }),
                applicationId: e.applicationId,
                activityType: O.$pd.PLAYING,
                activityUrl: e.url,
                participants: [...(null != (n = e.participants) ? n : [])],
                guildId:
                    null != (r = null == (i = f.A.getChannel(this.channelId)) ? void 0 : i.getGuildId()) ? r : null,
                sortKey: t.toString(),
            };
        });
    }
    _getParticipantsForUser(e) {
        var t, n, r, i, s, d;
        let b,
            O,
            v = [],
            I = h.default.getUser(e);
        if (null == I) return v;
        let C = g.A.getVoiceStateForChannel(this.channelId, e),
            N = g.A.getVoicePlatformForChannel(this.channelId, e),
            R = f.A.getChannel(this.channelId),
            w = null == R ? void 0 : R.getGuildId(),
            P =
                null !=
                    (t =
                        (null == (i = this.call) || null == (r = i.ringing) ? void 0 : r.includes(e)) ||
                        this.guildRingingUsers.has(e)) && t;
        (null != C || P) &&
            ((b = T(S({ type: y.lp.USER }, m.A.getUserStreamData(e, w)), {
                user: I,
                id: I.id,
                voiceState: C,
                voicePlatform: N,
                speaking: (0, a.R)({
                    userId: e,
                    checkIsMuted: !0,
                }),
                voiceDb: _.A.getVoiceVolume(e),
                latched: D(e),
                lastSpoke: null != (s = this.lastSpoke[e]) ? s : 0,
                soundsharing: _.A.isSoundSharing(e),
                ringing: P,
                userNick: E.Ay.getName(w, this.channelId, I),
                userAvatarDecoration: (0, o.U)(I, w),
                localVideoDisabled: p.A.isLocalVideoDisabled(I.id),
                isPoppedOut: this.poppedOutParticipants.has(I.id),
            })),
            v.push(b));
        let x = null != (n = c.A.getStreamForUser(e, w)) ? n : c.A.getActiveStreamForUser(e, w);
        if (null != x && x.channelId === this.channelId) {
            let t = (0, l._z)(x),
                n = this.getParticipant(t),
                r = x.ownerId === u.default.getId() && c.A.isSelfStreamHidden(this.channelId),
                i =
                    (null == n ? void 0 : n.type) === y.lp.STREAM
                        ? {
                              maxResolution: null != n.maxResolution ? S({}, n.maxResolution) : void 0,
                              maxFrameRate: n.maxFrameRate,
                          }
                        : null;
            (O = T(S({}, m.A.getUserStreamData(e, w, A.x.STREAM), i), {
                type: r ? y.lp.HIDDEN_STREAM : y.lp.STREAM,
                id: t,
                userVideo: null != (d = null == C ? void 0 : C.selfVideo) && d,
                user: I,
                userNick: E.Ay.getName(w, this.channelId, I),
                stream: x,
                isPoppedOut: this.poppedOutParticipants.has(t),
            })),
                v.push(O);
        }
        return v;
    }
    constructor(e) {
        v(this, "channelId", void 0),
            v(this, "call", void 0),
            v(this, "participants", {}),
            v(this, "lastSpoke", {}),
            v(this, "guildRingingUsers", new Set()),
            v(this, "poppedOutParticipants", new Set()),
            v(
                this,
                "participantByIndex",
                new i.J((e) => {
                    var t;
                    let n = [];
                    return (
                        e.type === y.lp.USER && e.speaking && n.push("SPEAKING"),
                        e.type === y.lp.USER && (null == (t = e.voiceState) ? void 0 : t.selfVideo)
                            ? (n.push("VIDEO"), e.localVideoDisabled || e.isPoppedOut || n.push("FILTERED"))
                            : (0, y.Ay)(e) &&
                              (n.push("STREAM"),
                              e.type === y.lp.HIDDEN_STREAM ||
                                  null == e.streamId ||
                                  e.isPoppedOut ||
                                  n.push("FILTERED")),
                        e.type === y.lp.ACTIVITY && n.push("ACTIVITY"),
                        ("isPoppedOut" in e && e.isPoppedOut) || n.push("NOT_POPPED_OUT"),
                        n
                    );
                }, R),
            ),
            (this.channelId = e);
    }
}
