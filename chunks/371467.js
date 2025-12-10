n.d(t, { Z: () => eI }), n(539854), n(388685), n(642613), n(290780);
var i,
    r = n(512722),
    l = n.n(r),
    o = n(772848),
    a = n(442837),
    s = n(570140),
    c = n(13245),
    u = n(358221),
    d = n(435064),
    h = n(786761),
    p = n(864060),
    f = n(763624),
    m = n(695346),
    g = n(163612),
    y = n(199902),
    O = n(314897),
    v = n(592125),
    E = n(375954),
    b = n(292959),
    _ = n(649974),
    S = n(158776),
    x = n(19780),
    I = n(699516),
    j = n(944486),
    C = n(885110),
    Z = n(246946),
    N = n(594174),
    w = n(979651),
    T = n(974180),
    P = n(70956),
    A = n(145597),
    k = n(32300),
    D = n(371651),
    R = n(624864),
    L = n(610394),
    M = n(340101),
    z = n(388627),
    V = n(996050),
    U = n(609626),
    W = n(421824),
    G = n(430169),
    F = n(303286),
    H = n(955978),
    B = n(333727),
    Y = n(672199),
    Q = n(585708),
    K = n(588909),
    X = n(987650),
    J = n(981631),
    q = n(388032);
function $(e, t, n) {
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
function ee(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                $(e, t, n[t]);
            });
    }
    return e;
}
function et(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let en = 5 * P.Z.Millis.SECOND,
    ei = 8 * P.Z.Millis.SECOND,
    er = 30 * P.Z.Millis.SECOND,
    el = 30 * P.Z.Millis.SECOND,
    eo = Object.freeze({
        timestamp: 0,
        priority: M.Tu.NORMAL,
        duration: en,
        expirationExternallyManaged: !1,
        type: M.kL.GENERIC,
    }),
    ea = [],
    es = !1,
    ec = [],
    eu = {};
function ed(e, t, n) {
    null == eu[e] && (eu[e] = {}), (eu[e][t] = n);
}
let eh = 30 * P.Z.Millis.MINUTE,
    ep = 2 * P.Z.Millis.MINUTE;
function ef() {
    if (es && null == ea.find((e) => e.status === J._1z.FOCUSED))
        for (let e of ((es = !1), (ea = [...ea, ...ec]), (ec = []), ea.length > 40 && (ea.length = 40), ea))
            e.timer.start();
}
function em() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    ea.filter((e) => e.type === M.kL.TEXT && e.status === J._1z.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - er) && eg(t.id, J._1z.DISMISSED);
        });
}
function eg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : J._1z.DISMISSED;
    if (null == e) return !1;
    let n = ea.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = ea[n];
    if ((i.timer.stop(), (ea = [...ea]), t === J._1z.FOCUSED)) {
        let [e] = ea.splice(n, 1);
        (e = et(ee({}, e), { status: t })), ea.unshift(e), (es = !0);
        return;
    }
    t === J._1z.DISMISSED ? ea.splice(n, 1) : (ea[n] = et(ee({}, i), { status: t })), ef();
}
function ey(e) {
    let t = ea.find((t) => t.type === M.kL.INCOMING_CALL && t.channelId === e);
    return null != t ? t.id : null;
}
function eO(e, t) {
    let n = ee(et(ee({}, eo), { timestamp: Date.now() }), t),
        i = (0, o.Z)(),
        r = !1,
        l = ee(
            {
                id: i,
                status: J._1z.ACTIVE,
                timer: (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = -1;
                    return {
                        start() {
                            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                                l = r ? J._1z.TIMED_OUT : J._1z.DISMISSED;
                            -1 === i && (i = setTimeout(() => c.Z.updateNotificationStatus(e, l), null != n ? n : en));
                        },
                        stop() {
                            clearTimeout(i), (i = -1);
                        },
                    };
                })(i, n.expirationExternallyManaged, n.duration),
                props: et(ee({}, e), {
                    onNotificationShow: () => {
                        var t;
                        r || ((r = !0), null == (t = e.onNotificationShow) || t.call(e, i));
                    },
                }),
            },
            n,
        ),
        a = es ? ec : [...ea],
        s = a.findIndex((e) => e.priority <= n.priority);
    if ((-1 === s ? a.push(l) : a.splice(s, 0, l), a.length > 40)) {
        let e = a.pop();
        es || e.timer.stop();
    }
    return es || ((ea = a), l.timer.start()), i;
}
function ev(e) {
    var t;
    let n = _.Z.getUserGame(e);
    if (null == n) return null;
    let i = null == (t = _.Z.getNowPlaying(n.gameId)[e]) ? void 0 : t.activity;
    return null == i || i.type !== J.IIU.PLAYING ? null : i;
}
function eE() {
    if (R.Z.isNotificationDisabled(X.n0.NowPlayingNotification)) return !1;
    let e = _.Z.usersPlaying,
        t = new Set(),
        n = (function () {
            let e = [];
            for (let t in eu) e.push(...Object.keys(eu[t]).map((e) => e));
            return e;
        })(),
        i = !1;
    for (let [n, r] of Object.entries(e))
        (i =
            i ||
            (function (e, t) {
                var n;
                if (!I.Z.isFriend(e)) return !1;
                let i = t.gameId;
                if (null == i) return !1;
                let r = ev(e);
                if (
                    null == r ||
                    !(function (e) {
                        var t;
                        let n =
                            (null == (t = e.timestamps) ? void 0 : t.start) != null ? e.timestamps.start : e.created_at;
                        return null != n && Date.now() - n < ep;
                    })(r)
                )
                    return !1;
                let l = j.Z.getVoiceChannelId(),
                    o = null == (n = w.Z.getDiscoverableVoiceStateForUser(e)) ? void 0 : n.channelId;
                if (null != l && null != o && l === o) return !1;
                let a = (0, z.pL)();
                if (null == a || a.id !== i) return !1;
                if (
                    !(function (e, t) {
                        var n, i;
                        let r =
                            null === (n = null == (i = eu[e]) ? void 0 : i[t]) || void 0 === n
                                ? void 0
                                : n.lastSentTimestamp;
                        return null == r || Date.now() - r > eh;
                    })(i, e)
                )
                    return (
                        ed(i, e, {
                            userId: e,
                            gameId: i,
                            lastSentTimestamp: Date.now(),
                        }),
                        !1
                    );
                let s = (0, H.Z)(e, i, r);
                return (
                    null != s &&
                        (ed(i, e, {
                            userId: e,
                            gameId: i,
                            lastSentTimestamp: Date.now(),
                        }),
                        eO(s, {
                            type: M.kL.GENERIC,
                            priority: M.Tu.NORMAL,
                        })),
                    !0
                );
            })(n, r)),
            t.add(n);
    let r = new Set();
    for (let e of n) t.has(e) || r.add(e);
    let l = L.Z.isOverlayV3EnabledForPID(L.Z.getTargetPID()) || null != L.Z.getFocusedPID();
    for (let e of r)
        if (
            !(function (e) {
                let t = S.Z.getActivities(e);
                if (0 === t.length) return !1;
                let n = (0, z.pL)();
                return null != n && null != t.find((e) => e.application_id === n.id);
            })(e) &&
            !l
        ) {
            for (let t in eu) {
                let n = eu[t][e];
                null != n && (n.lastSentTimestamp = null);
            }
            i = !0;
        }
    return i;
}
function eb(e) {
    let { channelId: t, ringing: n } = e,
        i = ey(t);
    if (!n.includes(O.default.getId())) return eg(i);
    if (null != i) return !1;
    let r = v.Z.getChannel(t);
    if (
        null == r ||
        !r.isRingable() ||
        ("GUILD_RING_START" === e.type &&
            !g.Z.getCurrentConfig({
                guildId: e.guildId,
                location: "OverlayV3StartRinging",
            }).enabled) ||
        C.Z.getStatus() === J.Skl.DND ||
        m.QZ.getSetting()
    )
        return !1;
    let l = ea.find((e) => e.type === M.kL.TEXT && e.channelId === t && e.messageType === J.uaV.CALL);
    null != l && eg(l.id),
        eO((0, F.Z)(r), {
            priority: M.Tu.HIGH,
            expirationExternallyManaged: !0,
            type: M.kL.INCOMING_CALL,
            channelId: r.id,
        });
}
let e_ = {};
function eS(e, t) {
    return "".concat(e, "-").concat(t);
}
class ex extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(
            y.Z,
            O.default,
            u.Z,
            v.Z,
            d.Z,
            E.Z,
            b.Z,
            _.Z,
            D.default,
            R.Z,
            L.Z,
            S.Z,
            x.Z,
            I.Z,
            j.Z,
            C.Z,
            Z.Z,
            N.default,
            w.Z,
        ),
            this.syncWith([_.Z], eE),
            (function () {
                let e = j.Z.getVoiceChannelId(),
                    t = O.default.getId(),
                    n = x.Z.getMediaSessionId();
                if (null != e && null != n)
                    for (let i of u.Z.getStreamParticipants(e)) i.user.id !== t && (e_[eS(i.user.id, n)] = Date.now());
            })();
    }
    getNotifications() {
        return ea;
    }
}
$(ex, "displayName", "OverlayNotificationsStore");
let eI = new ex(s.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        eg(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: n } = e;
        em(0);
        let i = null != (t = L.Z.getFocusedPID()) ? t : A.UNSET_PID;
        if (D.default.hasChangedRenderMode(i)) return;
        let r = (0, K.Z)((0, z.pL)(), n);
        null != r &&
            eO(r, {
                priority: M.Tu.URGENT,
                type: M.kL.NUDGE,
                duration: ei,
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) {
            for (let e of ea) e.status === J._1z.FOCUSED && eg(e.id, J._1z.ACTIVE);
            return !0;
        }
        for (let e of (em(), ea))
            e.type === M.kL.NUDGE
                ? eg(e.id, J._1z.DISMISSED)
                : e.status !== J._1z.ACTIVE ||
                  e.expirationExternallyManaged ||
                  (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (ea.length > 0) {
            var n;
            return eg(
                null == (n = ea.filter((e) => e.type === M.kL.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0])
                    ? void 0
                    : n.id,
                J._1z.FOCUSED,
            );
        }
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i;
        let { channelId: r, message: o } = e,
            a = v.Z.getChannel(r),
            s = N.default.getUser(null == (t = o.author) ? void 0 : t.id);
        if (null == a || null == s) return !1;
        if (
            [J.mFx.JOIN, J.mFx.JOIN_REQUEST, J.mFx.STREAM_REQUEST].includes(null == (n = o.activity) ? void 0 : n.type)
        ) {
            if (!(0, p.eF)(o, r, !0, !0)) return !1;
            let e = (function (e, t, n) {
                var i;
                let r, o;
                if ((l()(null != t.activity, "received null message activity"), n.id === O.default.getId())) return !1;
                let a = (0, z.pL)(),
                    s = null != (i = null == a ? void 0 : a.altId) ? i : null == a ? void 0 : a.id;
                if (null == a || null == s) return !1;
                switch (t.activity.type) {
                    case J.mFx.JOIN:
                        if (
                            null == (r = S.Z.getApplicationActivity(n.id, s)) ||
                            null == r.party ||
                            r.party.id !== t.activity.party_id
                        )
                            return !1;
                        o = (0, V.Z)(e, t, n, a, r);
                        break;
                    case J.mFx.JOIN_REQUEST:
                        if (
                            null == (r = C.Z.getApplicationActivity(s)) ||
                            null == r.party ||
                            r.party.id !== t.activity.party_id
                        )
                            return !1;
                        o = (0, B.Z)(e, n, a, r);
                        break;
                    case J.mFx.STREAM_REQUEST:
                        let { enableRequestToStreamOverlayNotification: c } = f.A.getCurrentConfig(
                            {
                                guildId: e.guild_id,
                                location: "showActivityNotification",
                            },
                            { autoTrackExposure: !1 },
                        );
                        if (!c || null == (r = C.Z.getApplicationActivity(s)) || r.application_id !== s) return !1;
                        o = (0, Y.Z)(e, n, a, r);
                }
                if (null == o) return !1;
                eO(o, {
                    priority: M.Tu.URGENT,
                    expirationExternallyManaged: !0,
                    channelId: e.id,
                    duration: el,
                    uniqueKey: "activity-".concat(t.activity.type, "-").concat(n.id, "-").concat(e.id, "-").concat(s),
                });
                let u = new Set();
                return (
                    ea
                        .filter((e) => null != e.uniqueKey)
                        .sort((e, t) => t.timestamp - e.timestamp)
                        .forEach((e) => {
                            null != e.uniqueKey &&
                                (u.has(e.uniqueKey) ? eg(e.id, J._1z.DISMISSED) : u.add(e.uniqueKey));
                        }),
                    !0
                );
            })(a, o, s);
            if (!1 !== e) return e;
        }
        if (R.Z.isNotificationDisabled(X.n0.TextChat) || Z.Z.disableNotifications || !(0, p.eF)(o, r)) return !1;
        let c = !b.Z.isSoundDisabled(T.Ay),
            u = null != (i = E.Z.getMessage(r, o.id)) ? i : (0, h.e5)(o),
            d = (0, Q.Z)(a, u, s, c);
        if (null == d) return !1;
        eO(d, {
            type: M.kL.TEXT,
            channelId: a.id,
            expirationExternallyManaged: !0,
            messageType: o.type,
        }),
            em();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (
            null != t &&
            (function (e) {
                let t = ea.length,
                    n = (ea = ea.filter((t) => t.type !== M.kL.TEXT || t.channelId !== e)).length !== t;
                return n && ef(), n;
            })(t)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: eb,
    CALL_UPDATE: eb,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        eg(ey(t));
    },
    GUILD_RING_START: eb,
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (
            !g.Z.getCurrentConfig({
                guildId: n,
                location: "OverlayV3StopRinging",
            }).enabled
        )
            return !1;
        i.includes(O.default.getId()) && eg(ey(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: r } = e,
            l = (0, z.pL)();
        return (
            null != l &&
            (null == l ? void 0 : l.id) != null &&
            (l.id === r || l.altId === r) &&
            (n === J.mFx.JOIN && (t = (0, U.Z)(i, l)),
            null != t &&
                void eO(t, {
                    priority: M.Tu.URGENT,
                    type: M.kL.GENERIC,
                }))
        );
    },
    CLIPS_SAVE_CLIP_START: function (e) {
        "manual" === e.clipMethod && eO((0, W.f)(q.intl.string(q.t.NBMK9m)));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        eO((0, W.f)(q.intl.string(q.t["1ZbZuh"])));
    },
    STREAM_START: function (e) {
        let t = (0, W.y)();
        null != t && eO(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        if (R.Z.isNotificationDisabled(X.n0.StreamWatchNudge)) return !1;
        let n = j.Z.getVoiceChannelId(),
            i = O.default.getId(),
            r = x.Z.getMediaSessionId();
        if (null != n && null != r)
            for (let e of t) {
                let { userId: t, channelId: o, guildId: a, selfStream: s } = e;
                if (t !== i && n === o && s && null != o && null != a) {
                    var l;
                    let { enabled: e } = (0, k.lj)("OverlayV3StreamWatchNudge");
                    if (!e) return;
                    let n = eS(t, r);
                    if (null != e_[n]) continue;
                    e_[n] = Date.now();
                    let i = (0, G.Z)(t, o, null != (l = ev(t)) ? l : void 0);
                    if (null == i) continue;
                    eO(i, {
                        priority: M.Tu.NORMAL,
                        type: M.kL.NUDGE,
                        duration: ei,
                    });
                    return;
                }
            }
    },
});
