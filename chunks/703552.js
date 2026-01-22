n.d(t, {
    A: () => ej,
}),
    n(321073),
    n(896048),
    n(638769),
    n(667532);
var i,
    r = n(284009),
    l = n.n(r),
    a = n(835245),
    o = n(311907),
    s = n(73153),
    c = n(684013),
    u = n(313961),
    d = n(274372),
    p = n(141468),
    h = n(742984),
    f = n(159426),
    m = n(253932),
    g = n(164891),
    y = n(616356),
    A = n(961350),
    O = n(734057),
    E = n(320501),
    v = n(803224),
    b = n(783592),
    S = n(290863),
    x = n(383501),
    j = n(994500),
    I = n(309010),
    N = n(461213),
    w = n(351906),
    T = n(287809),
    C = n(977997),
    _ = n(845618),
    P = n(927813),
    D = n(9302),
    R = n(589051),
    L = n(833551),
    k = n(592598),
    M = n(395011),
    V = n(897720),
    U = n(243612),
    z = n(240933),
    G = n(428731),
    H = n(714642),
    Y = n(970495),
    F = n(122749),
    K = n(925159),
    Z = n(128307),
    W = n(533923),
    B = n(965082),
    X = n(749471),
    Q = n(672396),
    J = n(652215),
    q = n(985018);

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
let en = 5 * P.A.Millis.SECOND,
    ei = 8 * P.A.Millis.SECOND,
    er = 30 * P.A.Millis.SECOND,
    el = 30 * P.A.Millis.SECOND,
    ea = Object.freeze({
        timestamp: 0,
        priority: V.In.NORMAL,
        duration: en,
        expirationExternallyManaged: !1,
        type: V.zb.GENERIC,
    }),
    eo = [],
    es = !1,
    ec = [],
    eu = {};

function ed(e, t, n) {
    null == eu[e] && (eu[e] = {}), (eu[e][t] = n);
}
let ep = 30 * P.A.Millis.MINUTE,
    eh = 2 * P.A.Millis.MINUTE;

function ef() {
    if (es && null == eo.find((e) => e.status === J.yFH.FOCUSED))
        for (let e of ((es = !1), (eo = [...eo, ...ec]), (ec = []), eo.length > 40 && (eo.length = 40), eo))
            e.timer.start();
}

function em() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    eo.filter((e) => e.type === V.zb.TEXT && e.status === J.yFH.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - er) && eg(t.id, J.yFH.DISMISSED);
        });
}

function eg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : J.yFH.DISMISSED;
    if (null == e) return !1;
    let n = eo.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = eo[n];
    if ((i.timer.stop(), (eo = [...eo]), t === J.yFH.FOCUSED)) {
        let [e] = eo.splice(n, 1);
        (e = et(ee({}, e), {
            status: t,
        })),
            eo.unshift(e),
            (es = !0);
        return;
    }
    t === J.yFH.DISMISSED
        ? eo.splice(n, 1)
        : (eo[n] = et(ee({}, i), {
              status: t,
          })),
        ef();
}

function ey(e) {
    let t = eo.find((t) => t.type === V.zb.INCOMING_CALL && t.channelId === e);
    return null != t ? t.id : null;
}

function eA(e, t) {
    let n = ee(
            et(ee({}, ea), {
                timestamp: Date.now(),
            }),
            t,
        ),
        i = (0, a.A)(),
        r = !1,
        l = ee(
            {
                id: i,
                status: J.yFH.ACTIVE,
                timer: (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = -1;
                    return {
                        start() {
                            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                                l = r ? J.yFH.TIMED_OUT : J.yFH.DISMISSED;
                            -1 === i && (i = setTimeout(() => c.A.updateNotificationStatus(e, l), null != n ? n : en));
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
    if ((-1 === s ? o.push(l) : o.splice(s, 0, l), o.length > 40)) {
        let e = o.pop();
        es || e.timer.stop();
    }
    return es || ((eo = o), l.timer.start()), i;
}

function eO(e) {
    var t;
    let n = b.A.getUserGame(e);
    if (null == n) return null;
    let i = null == (t = b.A.getNowPlaying(n.gameId)[e]) ? void 0 : t.activity;
    return null == i || i.type !== J.$pd.PLAYING ? null : i;
}

function eE() {
    if (k.A.isNotificationDisabled(Q.KS.NowPlayingNotification)) return !1;
    let e = b.A.usersPlaying,
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
                var n, i, r, l;
                let a, o, s;
                if (!j.A.isFriend(e)) return !1;
                let c = t.gameId;
                if (null == c) return !1;
                let u = eO(e);
                if (
                    null == u ||
                    !(
                        null !=
                            (a =
                                (null == (i = u.timestamps) ? void 0 : i.start) != null
                                    ? u.timestamps.start
                                    : u.created_at) && Date.now() - a < eh
                    )
                )
                    return !1;
                let d = I.A.getVoiceChannelId(),
                    p = null == (n = C.A.getDiscoverableVoiceStateForUser(e)) ? void 0 : n.channelId;
                if (null != d && null != p && d === p) return !1;
                let h = (0, U.qv)();
                return (
                    null != h &&
                    h.id === c &&
                    (null ==
                        (o =
                            null === (r = null == (l = eu[c]) ? void 0 : l[e]) || void 0 === r
                                ? void 0
                                : r.lastSentTimestamp) || Date.now() - o > ep
                        ? (null != (s = (0, K.A)(e, c, u)) &&
                              (ed(c, e, {
                                  userId: e,
                                  gameId: c,
                                  lastSentTimestamp: Date.now(),
                              }),
                              eA(s, {
                                  type: V.zb.GENERIC,
                                  priority: V.In.NORMAL,
                              })),
                          !0)
                        : (ed(c, e, {
                              userId: e,
                              gameId: c,
                              lastSentTimestamp: Date.now(),
                          }),
                          !1))
                );
            })(n, r)),
            t.add(n);
    let r = new Set();
    for (let e of n) t.has(e) || r.add(e);
    let l = M.A.isOverlayV3EnabledForPID(M.A.getTargetPID()) || null != M.A.getFocusedPID();
    for (let e of r)
        if (
            !(function (e) {
                let t = S.A.getActivities(e);
                if (0 === t.length) return !1;
                let n = (0, U.qv)();
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

function ev(e) {
    let { channelId: t, ringing: n } = e,
        i = ey(t);
    if (!n.includes(A.default.getId())) return eg(i);
    if (null != i) return !1;
    let r = O.A.getChannel(t);
    if (
        null == r ||
        !r.isRingable() ||
        ("GUILD_RING_START" === e.type &&
            !g.A.getCurrentConfig({
                guildId: e.guildId,
                location: "OverlayV3StartRinging",
            }).enabled) ||
        N.A.getStatus() === J.clD.DND ||
        m.NO.getSetting()
    )
        return !1;
    let l = eo.find((e) => e.type === V.zb.TEXT && e.channelId === t && e.messageType === J.lAJ.CALL);
    null != l && eg(l.id),
        eA((0, F.A)(r), {
            priority: V.In.HIGH,
            expirationExternallyManaged: !0,
            type: V.zb.INCOMING_CALL,
            channelId: r.id,
        });
}
let eb = {};

function eS(e, t) {
    return "".concat(e, "-").concat(t);
}
class ex extends (i = o.Ay.Store) {
    initialize() {
        this.waitFor(
            y.A,
            A.default,
            u.A,
            O.A,
            d.A,
            E.A,
            v.A,
            b.A,
            L.default,
            k.A,
            M.A,
            S.A,
            x.A,
            j.A,
            I.A,
            N.A,
            w.A,
            T.default,
            C.A,
        ),
            this.syncWith([b.A], eE),
            (function () {
                let e = I.A.getVoiceChannelId(),
                    t = A.default.getId(),
                    n = x.A.getMediaSessionId();
                if (null != e && null != n)
                    for (let i of u.A.getStreamParticipants(e)) i.user.id !== t && (eb[eS(i.user.id, n)] = Date.now());
            })();
    }
    getNotifications() {
        return eo;
    }
}
$(ex, "displayName", "OverlayNotificationsStore");
let ej = new ex(s.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        eg(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: n } = e;
        em(0);
        let i = null != (t = M.A.getFocusedPID()) ? t : D.UNSET_PID;
        if (L.default.hasChangedRenderMode(i)) return;
        let r = (0, X.A)((0, U.qv)(), n);
        null != r &&
            eA(r, {
                priority: V.In.URGENT,
                type: V.zb.NUDGE,
                duration: ei,
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) {
            for (let e of eo) e.status === J.yFH.FOCUSED && eg(e.id, J.yFH.ACTIVE);
            return !0;
        }
        for (let e of (em(), eo))
            e.type === V.zb.NUDGE
                ? eg(e.id, J.yFH.DISMISSED)
                : e.status !== J.yFH.ACTIVE ||
                  e.expirationExternallyManaged ||
                  (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (eo.length > 0) {
            var n;
            return eg(
                null == (n = eo.filter((e) => e.type === V.zb.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0])
                    ? void 0
                    : n.id,
                J.yFH.FOCUSED,
            );
        }
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i;
        let { channelId: r, message: a } = e,
            o = O.A.getChannel(r),
            s = T.default.getUser(null == (n = a.author) ? void 0 : n.id);
        if (null == o || null == s) return !1;
        if ([J.xL.JOIN, J.xL.JOIN_REQUEST, J.xL.STREAM_REQUEST].includes(null == (i = a.activity) ? void 0 : i.type)) {
            if (!(0, h.lx)(a, r, !0, !0)) return !1;
            let e = (function (e, t, n) {
                var i;
                let r, a, o;
                if ((l()(null != t.activity, "received null message activity"), n.id === A.default.getId())) return !1;
                let s = (0, U.qv)(),
                    c = null != (i = null == s ? void 0 : s.altId) ? i : null == s ? void 0 : s.id;
                if (null == s || null == c) return !1;
                switch (t.activity.type) {
                    case J.xL.JOIN:
                        if (
                            null == (r = S.A.getApplicationActivity(n.id, c)) ||
                            null == r.party ||
                            r.party.id !== t.activity.party_id
                        )
                            return !1;
                        a = (0, z.A)(e, t, n, s, r);
                        break;
                    case J.xL.JOIN_REQUEST:
                        if (
                            null == (r = N.A.getApplicationActivity(c)) ||
                            null == r.party ||
                            r.party.id !== t.activity.party_id
                        )
                            return !1;
                        a = (0, Z.A)(e, n, s, r);
                        break;
                    case J.xL.STREAM_REQUEST:
                        let { enableRequestToStreamOverlayNotification: u } = f.m.getCurrentConfig(
                            {
                                guildId: e.guild_id,
                                location: "showActivityNotification",
                            },
                            {
                                autoTrackExposure: !1,
                            },
                        );
                        if (!u || null == (r = N.A.getApplicationActivity(c)) || r.application_id !== c) return !1;
                        a = (0, W.A)(e, n, s, r);
                }
                return (
                    null != a &&
                    (eA(a, {
                        priority: V.In.URGENT,
                        expirationExternallyManaged: !0,
                        channelId: e.id,
                        duration: el,
                        uniqueKey: "activity-"
                            .concat(t.activity.type, "-")
                            .concat(n.id, "-")
                            .concat(e.id, "-")
                            .concat(c),
                    }),
                    (o = new Set()),
                    eo
                        .filter((e) => null != e.uniqueKey)
                        .sort((e, t) => t.timestamp - e.timestamp)
                        .forEach((e) => {
                            null != e.uniqueKey &&
                                (o.has(e.uniqueKey) ? eg(e.id, J.yFH.DISMISSED) : o.add(e.uniqueKey));
                        }),
                    !0)
                );
            })(o, a, s);
            if (!1 !== e) return e;
        }
        if (k.A.isNotificationDisabled(Q.KS.TextChat) || w.A.disableNotifications || !(0, h.lx)(a, r)) return !1;
        let c = !v.A.isSoundDisabled(_.cH),
            u = null != (t = E.A.getMessage(r, a.id)) ? t : (0, p.rh)(a),
            d = (0, B.A)(o, u, s, c);
        if (null == d) return !1;
        eA(d, {
            type: V.zb.TEXT,
            channelId: o.id,
            expirationExternallyManaged: !0,
            messageType: a.type,
        }),
            em();
    },
    CHANNEL_SELECT: function (e) {
        let t,
            n,
            { channelId: i } = e;
        return (
            null != i &&
            ((t = eo.length),
            (n = (eo = eo.filter((e) => e.type !== V.zb.TEXT || e.channelId !== i)).length !== t) && ef(),
            n)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: ev,
    CALL_UPDATE: ev,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        eg(ey(t));
    },
    GUILD_RING_START: ev,
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (
            !g.A.getCurrentConfig({
                guildId: n,
                location: "OverlayV3StopRinging",
            }).enabled
        )
            return !1;
        i.includes(A.default.getId()) && eg(ey(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: r } = e,
            l = (0, U.qv)();
        return (
            null != l &&
            (null == l ? void 0 : l.id) != null &&
            (l.id === r || l.altId === r) &&
            (n === J.xL.JOIN && (t = (0, G.A)(i, l)),
            null != t &&
                void eA(t, {
                    priority: V.In.URGENT,
                    type: V.zb.GENERIC,
                }))
        );
    },
    CLIPS_SAVE_CLIP_START: function (e) {
        "manual" === e.clipMethod && eA((0, H.V)(q.intl.string(q.t.NBMK9m)));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        eA((0, H.V)(q.intl.string(q.t["1ZbZuh"])));
    },
    STREAM_START: function (e) {
        let t = (0, H.t)();
        null != t && eA(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        if (k.A.isNotificationDisabled(Q.KS.StreamWatchNudge)) return !1;
        let n = I.A.getVoiceChannelId(),
            i = A.default.getId(),
            r = x.A.getMediaSessionId();
        if (null != n && null != r)
            for (let e of t) {
                let { userId: t, channelId: a, guildId: o, selfStream: s } = e;
                if (t !== i && n === a && s && null != a && null != o) {
                    var l;
                    let { enabled: e } = (0, R.Fg)("OverlayV3StreamWatchNudge");
                    if (!e) return;
                    let n = eS(t, r);
                    if (null != eb[n]) continue;
                    eb[n] = Date.now();
                    let i = (0, Y.A)(t, a, null != (l = eO(t)) ? l : void 0);
                    if (null == i) continue;
                    eA(i, {
                        priority: V.In.NORMAL,
                        type: V.zb.NUDGE,
                        duration: ei,
                    });
                    return;
                }
            }
    },
});
