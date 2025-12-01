n.d(t, { Z: () => eI }), n(539854), n(388685), n(642613), n(290780);
var i,
    r = n(512722),
    l = n.n(r),
    a = n(772848),
    o = n(442837),
    s = n(570140),
    u = n(13245),
    c = n(358221),
    d = n(435064),
    h = n(786761),
    p = n(864060),
    f = n(763624),
    m = n(695346),
    g = n(163612),
    y = n(199902),
    O = n(314897),
    E = n(592125),
    v = n(375954),
    S = n(292959),
    b = n(649974),
    x = n(158776),
    j = n(19780),
    I = n(699516),
    C = n(944486),
    Z = n(885110),
    N = n(246946),
    w = n(594174),
    T = n(979651),
    _ = n(974180),
    P = n(70956),
    A = n(145597),
    D = n(32300),
    R = n(371651),
    k = n(624864),
    L = n(610394),
    M = n(340101),
    V = n(388627),
    z = n(996050),
    U = n(609626),
    W = n(421824),
    G = n(430169),
    F = n(303286),
    H = n(955978),
    Y = n(333727),
    B = n(672199),
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
    ea = Object.freeze({
        timestamp: 0,
        priority: M.Tu.NORMAL,
        duration: en,
        expirationExternallyManaged: !1,
        type: M.kL.GENERIC,
    }),
    eo = [],
    es = !1,
    eu = [],
    ec = {};
function ed(e, t, n) {
    null == ec[e] && (ec[e] = {}), (ec[e][t] = n);
}
let eh = 30 * P.Z.Millis.MINUTE,
    ep = 2 * P.Z.Millis.MINUTE;
function ef() {
    if (es && null == eo.find((e) => e.status === J._1z.FOCUSED))
        for (let e of ((es = !1), (eo = [...eo, ...eu]), (eu = []), eo.length > 40 && (eo.length = 40), eo))
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
    t === J._1z.DISMISSED ? eo.splice(n, 1) : (eo[n] = et(ee({}, i), { status: t })), ef();
}
function ey(e) {
    let t = eo.find((t) => t.type === M.kL.INCOMING_CALL && t.channelId === e);
    return null != t ? t.id : null;
}
function eO(e, t) {
    let n = ee(et(ee({}, ea), { timestamp: Date.now() }), t),
        i = (0, a.Z)(),
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
                            -1 === i && (i = setTimeout(() => u.Z.updateNotificationStatus(e, l), null != n ? n : en));
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
        o = es ? eu : [...eo],
        s = o.findIndex((e) => e.priority <= n.priority);
    if ((-1 === s ? o.push(l) : o.splice(s, 0, l), o.length > 40)) {
        let e = o.pop();
        es || e.timer.stop();
    }
    return es || ((eo = o), l.timer.start()), i;
}
function eE(e) {
    var t;
    let n = b.Z.getUserGame(e);
    if (null == n) return null;
    let i = null == (t = b.Z.getNowPlaying(n.gameId)[e]) ? void 0 : t.activity;
    return null == i || i.type !== J.IIU.PLAYING ? null : i;
}
function ev() {
    if (k.Z.isNotificationDisabled(X.n0.NowPlayingNotification)) return !1;
    let e = b.Z.usersPlaying,
        t = new Set(),
        n = (function () {
            let e = [];
            for (let t in ec) e.push(...Object.keys(ec[t]).map((e) => e));
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
                let r = eE(e);
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
                let l = C.Z.getVoiceChannelId(),
                    a = null == (n = T.Z.getDiscoverableVoiceStateForUser(e)) ? void 0 : n.channelId;
                if (null != l && null != a && l === a) return !1;
                let o = (0, V.pL)();
                if (null == o || o.id !== i) return !1;
                if (
                    !(function (e, t) {
                        var n, i;
                        let r =
                            null === (n = null == (i = ec[e]) ? void 0 : i[t]) || void 0 === n
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
                let t = x.Z.getActivities(e);
                if (0 === t.length) return !1;
                let n = (0, V.pL)();
                return null != n && null != t.find((e) => e.application_id === n.id);
            })(e) &&
            !l
        ) {
            for (let t in ec) {
                let n = ec[t][e];
                null != n && (n.lastSentTimestamp = null);
            }
            i = !0;
        }
    return i;
}
function eS(e) {
    let { channelId: t, ringing: n } = e,
        i = ey(t);
    if (!n.includes(O.default.getId())) return eg(i);
    if (null != i) return !1;
    let r = E.Z.getChannel(t);
    if (
        null == r ||
        !r.isRingable() ||
        ("GUILD_RING_START" === e.type &&
            !g.Z.getCurrentConfig({
                guildId: e.guildId,
                location: "OverlayV3StartRinging",
            }).enabled) ||
        Z.Z.getStatus() === J.Skl.DND ||
        m.QZ.getSetting()
    )
        return !1;
    let l = eo.find((e) => e.type === M.kL.TEXT && e.channelId === t && e.messageType === J.uaV.CALL);
    null != l && eg(l.id),
        eO((0, F.Z)(r), {
            priority: M.Tu.HIGH,
            expirationExternallyManaged: !0,
            type: M.kL.INCOMING_CALL,
            channelId: r.id,
        });
}
let eb = {};
function ex(e, t) {
    return "".concat(e, "-").concat(t);
}
class ej extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(
            y.Z,
            O.default,
            c.Z,
            E.Z,
            d.Z,
            v.Z,
            S.Z,
            b.Z,
            R.default,
            k.Z,
            L.Z,
            x.Z,
            j.Z,
            I.Z,
            C.Z,
            Z.Z,
            N.Z,
            w.default,
            T.Z,
        ),
            this.syncWith([b.Z], ev),
            (function () {
                let e = C.Z.getVoiceChannelId(),
                    t = O.default.getId(),
                    n = j.Z.getMediaSessionId();
                if (null != e && null != n)
                    for (let i of c.Z.getStreamParticipants(e)) i.user.id !== t && (eb[ex(i.user.id, n)] = Date.now());
            })();
    }
    getNotifications() {
        return eo;
    }
}
$(ej, "displayName", "OverlayNotificationsStore");
let eI = new ej(s.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        eg(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: n } = e;
        em(0);
        let i = null != (t = L.Z.getFocusedPID()) ? t : A.UNSET_PID;
        if (R.default.hasChangedRenderMode(i)) return;
        let r = (0, K.Z)((0, V.pL)(), n);
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
        let { channelId: r, message: a } = e,
            o = E.Z.getChannel(r),
            s = w.default.getUser(null == (t = a.author) ? void 0 : t.id);
        if (null == o || null == s) return !1;
        if (
            [J.mFx.JOIN, J.mFx.JOIN_REQUEST, J.mFx.STREAM_REQUEST].includes(null == (n = a.activity) ? void 0 : n.type)
        ) {
            if (!(0, p.eF)(a, r, !0, !0)) return !1;
            let e = (function (e, t, n) {
                var i;
                let r, a;
                if ((l()(null != t.activity, "received null message activity"), n.id === O.default.getId())) return !1;
                let o = (0, V.pL)(),
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
                        a = (0, z.Z)(e, t, n, o, r);
                        break;
                    case J.mFx.JOIN_REQUEST:
                        if (
                            null == (r = Z.Z.getApplicationActivity(s)) ||
                            null == r.party ||
                            r.party.id !== t.activity.party_id
                        )
                            return !1;
                        a = (0, Y.Z)(e, n, o, r);
                        break;
                    case J.mFx.STREAM_REQUEST:
                        let { enableRequestToStreamOverlayNotification: u } = f.A.getCurrentConfig(
                            {
                                guildId: e.guild_id,
                                location: "showActivityNotification",
                            },
                            { autoTrackExposure: !1 },
                        );
                        if (!u || null == (r = Z.Z.getApplicationActivity(s)) || r.application_id !== s) return !1;
                        a = (0, B.Z)(e, n, o, r);
                }
                if (null == a) return !1;
                eO(a, {
                    priority: M.Tu.URGENT,
                    expirationExternallyManaged: !0,
                    channelId: e.id,
                    duration: el,
                    uniqueKey: "activity-".concat(t.activity.type, "-").concat(n.id, "-").concat(e.id, "-").concat(s),
                });
                let c = new Set();
                return (
                    eo
                        .filter((e) => null != e.uniqueKey)
                        .sort((e, t) => t.timestamp - e.timestamp)
                        .forEach((e) => {
                            null != e.uniqueKey &&
                                (c.has(e.uniqueKey) ? eg(e.id, J._1z.DISMISSED) : c.add(e.uniqueKey));
                        }),
                    !0
                );
            })(o, a, s);
            if (!1 !== e) return e;
        }
        if (k.Z.isNotificationDisabled(X.n0.TextChat) || N.Z.disableNotifications || !(0, p.eF)(a, r)) return !1;
        let u = !S.Z.isSoundDisabled(_.Ay),
            c = null != (i = v.Z.getMessage(r, a.id)) ? i : (0, h.e5)(a),
            d = (0, Q.Z)(o, c, s, u);
        if (null == d) return !1;
        eO(d, {
            type: M.kL.TEXT,
            channelId: o.id,
            expirationExternallyManaged: !0,
            messageType: a.type,
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
                return n && ef(), n;
            })(t)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: eS,
    CALL_UPDATE: eS,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        eg(ey(t));
    },
    GUILD_RING_START: eS,
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
            l = (0, V.pL)();
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
        if (k.Z.isNotificationDisabled(X.n0.StreamWatchNudge)) return !1;
        let n = C.Z.getVoiceChannelId(),
            i = O.default.getId(),
            r = j.Z.getMediaSessionId();
        if (null != n && null != r)
            for (let e of t) {
                let { userId: t, channelId: a, guildId: o, selfStream: s } = e;
                if (t !== i && n === a && s && null != a && null != o) {
                    var l;
                    let { enabled: e } = (0, D.lj)("OverlayV3StreamWatchNudge");
                    if (!e) return;
                    let n = ex(t, r);
                    if (null != eb[n]) continue;
                    eb[n] = Date.now();
                    let i = (0, G.Z)(t, a, null != (l = eE(t)) ? l : void 0);
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
