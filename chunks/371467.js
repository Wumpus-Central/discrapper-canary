n.d(t, { Z: () => eC }), n(539854), n(388685), n(642613), n(290780);
var i,
    r = n(512722),
    a = n.n(r),
    l = n(772848),
    o = n(442837),
    s = n(570140),
    c = n(13245),
    u = n(358221),
    d = n(435064),
    f = n(786761),
    h = n(864060),
    p = n(763624),
    m = n(695346),
    g = n(163612),
    b = n(199902),
    y = n(314897),
    O = n(592125),
    v = n(375954),
    E = n(292959),
    S = n(649974),
    x = n(158776),
    I = n(19780),
    C = n(699516),
    j = n(944486),
    _ = n(885110),
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
    U = n(550055),
    W = n(421824),
    G = n(430169),
    F = n(777036),
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
    ea = 30 * P.Z.Millis.SECOND,
    el = Object.freeze({
        timestamp: 0,
        priority: M.Tu.NORMAL,
        duration: en,
        expirationExternallyManaged: !1,
        type: M.kL.GENERIC,
    }),
    eo = [],
    es = !1,
    ec = [],
    eu = {};
function ed(e, t, n) {
    null == eu[e] && (eu[e] = {}), (eu[e][t] = n);
}
let ef = 30 * P.Z.Millis.MINUTE,
    eh = 2 * P.Z.Millis.MINUTE;
function ep() {
    if (es && null == eo.find((e) => e.status === J._1z.FOCUSED))
        for (let e of ((es = !1), (eo = [...eo, ...ec]), (ec = []), eo.length > 40 && (eo.length = 40), eo))
            e.timer.start();
}
function em() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    eo.filter((e) => e.type === M.kL.TEXT && e.status === J._1z.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - er) && eg(t.id, J._1z.DISMISSED);
        });
}
function eg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : J._1z.DISMISSED;
    if (null == e) return !1;
    let n = eo.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = eo[n];
    if ((i.timer.stop(), (eo = [...eo]), t === J._1z.FOCUSED)) {
        let [e] = eo.splice(n, 1);
        (e = et(ee({}, e), { status: t })), eo.unshift(e), (es = !0);
        return;
    }
    t === J._1z.DISMISSED ? eo.splice(n, 1) : (eo[n] = et(ee({}, i), { status: t })), ep();
}
function eb(e) {
    let t = eo.find((t) => t.type === M.kL.INCOMING_CALL && t.channelId === e);
    return null != t ? t.id : null;
}
function ey(e, t) {
    let n = ee(et(ee({}, el), { timestamp: Date.now() }), t),
        i = (0, l.Z)(),
        r = !1,
        a = ee(
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
                                a = r ? J._1z.TIMED_OUT : J._1z.DISMISSED;
                            -1 === i && (i = setTimeout(() => c.Z.updateNotificationStatus(e, a), null != n ? n : en));
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
        o = es ? ec : [...eo],
        s = o.findIndex((e) => e.priority <= n.priority);
    if ((-1 === s ? o.push(a) : o.splice(s, 0, a), o.length > 40)) {
        let e = o.pop();
        es || e.timer.stop();
    }
    return es || ((eo = o), a.timer.start()), i;
}
function eO(e) {
    var t;
    let n = S.Z.getUserGame(e);
    if (null == n) return null;
    let i = null == (t = S.Z.getNowPlaying(n.gameId)[e]) ? void 0 : t.activity;
    return null == i || i.type !== J.IIU.PLAYING ? null : i;
}
function ev() {
    if (R.Z.isNotificationDisabled(X.n0.NowPlayingNotification)) return !1;
    let e = S.Z.usersPlaying,
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
                if (!C.Z.isFriend(e)) return !1;
                let i = t.gameId;
                if (null == i) return !1;
                let r = eO(e);
                if (
                    null == r ||
                    !(function (e) {
                        var t;
                        let n =
                            (null == (t = e.timestamps) ? void 0 : t.start) != null ? e.timestamps.start : e.created_at;
                        return null != n && Date.now() - n < eh;
                    })(r)
                )
                    return !1;
                let a = j.Z.getVoiceChannelId(),
                    l = null == (n = w.Z.getDiscoverableVoiceStateForUser(e)) ? void 0 : n.channelId;
                if (null != a && null != l && a === l) return !1;
                let o = (0, z.pL)();
                if (null == o || o.id !== i) return !1;
                if (
                    !(function (e, t) {
                        var n, i;
                        let r =
                            null === (n = null == (i = eu[e]) ? void 0 : i[t]) || void 0 === n
                                ? void 0
                                : n.lastSentTimestamp;
                        return null == r || Date.now() - r > ef;
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
                        ey(s, {
                            type: M.kL.GENERIC,
                            priority: M.Tu.NORMAL,
                        })),
                    !0
                );
            })(n, r)),
            t.add(n);
    let r = new Set();
    for (let e of n) t.has(e) || r.add(e);
    let a = L.Z.isOverlayV3EnabledForPID(L.Z.getTargetPID()) || null != L.Z.getFocusedPID();
    for (let e of r)
        if (
            !(function (e) {
                let t = x.Z.getActivities(e);
                if (0 === t.length) return !1;
                let n = (0, z.pL)();
                return null != n && null != t.find((e) => e.application_id === n.id);
            })(e) &&
            !a
        ) {
            for (let t in eu) {
                let n = eu[t][e];
                null != n && (n.lastSentTimestamp = null);
            }
            i = !0;
        }
    return i;
}
function eE(e) {
    let { channelId: t, ringing: n } = e,
        i = eb(t);
    if (!n.includes(y.default.getId())) return eg(i);
    if (null != i) return !1;
    let r = O.Z.getChannel(t);
    if (
        null == r ||
        !r.isRingable() ||
        ("GUILD_RING_START" === e.type &&
            !g.Z.getCurrentConfig({
                guildId: e.guildId,
                location: "OverlayV3StartRinging",
            }).enabled) ||
        _.Z.getStatus() === J.Skl.DND ||
        m.QZ.getSetting()
    )
        return !1;
    let a = eo.find((e) => e.type === M.kL.TEXT && e.channelId === t && e.messageType === J.uaV.CALL);
    null != a && eg(a.id),
        ey((0, F.Z)(r), {
            priority: M.Tu.HIGH,
            expirationExternallyManaged: !0,
            type: M.kL.INCOMING_CALL,
            channelId: r.id,
        });
}
let eS = {};
function ex(e, t) {
    return "".concat(e, "-").concat(t);
}
class eI extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(
            b.Z,
            y.default,
            u.Z,
            O.Z,
            d.Z,
            v.Z,
            E.Z,
            S.Z,
            D.default,
            R.Z,
            L.Z,
            x.Z,
            I.Z,
            C.Z,
            j.Z,
            _.Z,
            Z.Z,
            N.default,
            w.Z,
        ),
            this.syncWith([S.Z], ev),
            (function () {
                let e = j.Z.getVoiceChannelId(),
                    t = y.default.getId(),
                    n = I.Z.getMediaSessionId();
                if (null != e && null != n)
                    for (let i of u.Z.getStreamParticipants(e)) i.user.id !== t && (eS[ex(i.user.id, n)] = Date.now());
            })();
    }
    getNotifications() {
        return eo;
    }
}
$(eI, "displayName", "OverlayNotificationsStore");
let eC = new eI(s.Z, {
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
            ey(r, {
                priority: M.Tu.URGENT,
                type: M.kL.NUDGE,
                duration: ei,
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) {
            for (let e of eo) e.status === J._1z.FOCUSED && eg(e.id, J._1z.ACTIVE);
            return !0;
        }
        for (let e of (em(), eo))
            e.type === M.kL.NUDGE
                ? eg(e.id, J._1z.DISMISSED)
                : e.status !== J._1z.ACTIVE ||
                  e.expirationExternallyManaged ||
                  (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (eo.length > 0) {
            var n;
            return eg(
                null == (n = eo.filter((e) => e.type === M.kL.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0])
                    ? void 0
                    : n.id,
                J._1z.FOCUSED,
            );
        }
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i;
        let { channelId: r, message: l } = e,
            o = O.Z.getChannel(r),
            s = N.default.getUser(null == (t = l.author) ? void 0 : t.id);
        if (null == o || null == s) return !1;
        if (
            [J.mFx.JOIN, J.mFx.JOIN_REQUEST, J.mFx.STREAM_REQUEST].includes(null == (n = l.activity) ? void 0 : n.type)
        ) {
            if (!(0, h.eF)(l, r, !0, !0)) return !1;
            let e = (function (e, t, n) {
                var i;
                let r, l;
                if ((a()(null != t.activity, "received null message activity"), n.id === y.default.getId())) return !1;
                let o = (0, z.pL)(),
                    s = null != (i = null == o ? void 0 : o.altId) ? i : null == o ? void 0 : o.id;
                if (null == o || null == s) return !1;
                switch (t.activity.type) {
                    case J.mFx.JOIN:
                        if (
                            null == (r = x.Z.getApplicationActivity(n.id, s)) ||
                            null == r.party ||
                            r.party.id !== t.activity.party_id
                        )
                            return !1;
                        l = (0, V.Z)(e, t, n, o, r);
                        break;
                    case J.mFx.JOIN_REQUEST:
                        if (
                            null == (r = _.Z.getApplicationActivity(s)) ||
                            null == r.party ||
                            r.party.id !== t.activity.party_id
                        )
                            return !1;
                        l = (0, B.Z)(e, n, o, r);
                        break;
                    case J.mFx.STREAM_REQUEST:
                        let { enableRequestToStreamOverlayNotification: c } = p.A.getCurrentConfig(
                            {
                                guildId: e.guild_id,
                                location: "showActivityNotification",
                            },
                            { autoTrackExposure: !1 },
                        );
                        if (!c || null == (r = _.Z.getApplicationActivity(s)) || r.application_id !== s) return !1;
                        l = (0, Y.Z)(e, n, o, r);
                }
                if (null == l) return !1;
                ey(l, {
                    priority: M.Tu.URGENT,
                    expirationExternallyManaged: !0,
                    channelId: e.id,
                    duration: ea,
                    uniqueKey: "activity-".concat(t.activity.type, "-").concat(n.id, "-").concat(e.id, "-").concat(s),
                });
                let u = new Set();
                return (
                    eo
                        .filter((e) => null != e.uniqueKey)
                        .sort((e, t) => t.timestamp - e.timestamp)
                        .forEach((e) => {
                            null != e.uniqueKey &&
                                (u.has(e.uniqueKey) ? eg(e.id, J._1z.DISMISSED) : u.add(e.uniqueKey));
                        }),
                    !0
                );
            })(o, l, s);
            if (!1 !== e) return e;
        }
        if (R.Z.isNotificationDisabled(X.n0.TextChat) || Z.Z.disableNotifications || !(0, h.eF)(l, r)) return !1;
        let c = !E.Z.isSoundDisabled(T.Ay),
            u = null != (i = v.Z.getMessage(r, l.id)) ? i : (0, f.e5)(l),
            d = (0, Q.Z)(o, u, s, c);
        if (null == d) return !1;
        ey(d, {
            type: M.kL.TEXT,
            channelId: o.id,
            expirationExternallyManaged: !0,
            messageType: l.type,
        }),
            em();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (
            null != t &&
            (function (e) {
                let t = eo.length,
                    n = (eo = eo.filter((t) => t.type !== M.kL.TEXT || t.channelId !== e)).length !== t;
                return n && ep(), n;
            })(t)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: eE,
    CALL_UPDATE: eE,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        eg(eb(t));
    },
    GUILD_RING_START: eE,
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (
            !g.Z.getCurrentConfig({
                guildId: n,
                location: "OverlayV3StopRinging",
            }).enabled
        )
            return !1;
        i.includes(y.default.getId()) && eg(eb(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: r } = e,
            a = (0, z.pL)();
        return (
            null != a &&
            (null == a ? void 0 : a.id) != null &&
            (a.id === r || a.altId === r) &&
            (n === J.mFx.JOIN && (t = (0, U.Z)(i, a)),
            null != t &&
                void ey(t, {
                    priority: M.Tu.URGENT,
                    type: M.kL.GENERIC,
                }))
        );
    },
    CLIPS_SAVE_CLIP_START: function (e) {
        "manual" === e.clipMethod && ey((0, W.f)(q.intl.string(q.t.NBMK9m)));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        ey((0, W.f)(q.intl.string(q.t["1ZbZuh"])));
    },
    STREAM_START: function (e) {
        let t = (0, W.y)();
        null != t && ey(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        if (R.Z.isNotificationDisabled(X.n0.StreamWatchNudge)) return !1;
        let n = j.Z.getVoiceChannelId(),
            i = y.default.getId(),
            r = I.Z.getMediaSessionId();
        if (null != n && null != r)
            for (let e of t) {
                let { userId: t, channelId: l, guildId: o, selfStream: s } = e;
                if (t !== i && n === l && s && null != l && null != o) {
                    var a;
                    let { enabled: e } = (0, k.lj)("OverlayV3StreamWatchNudge");
                    if (!e) return;
                    let n = ex(t, r);
                    if (null != eS[n]) continue;
                    eS[n] = Date.now();
                    let i = (0, G.Z)(t, l, null != (a = eO(t)) ? a : void 0);
                    if (null == i) continue;
                    ey(i, {
                        priority: M.Tu.NORMAL,
                        type: M.kL.NUDGE,
                        duration: ei,
                    });
                    return;
                }
            }
    },
});
