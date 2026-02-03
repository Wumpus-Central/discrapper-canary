n.d(t, {
    A: () => eI,
}),
    n(321073),
    n(896048),
    n(638769),
    n(667532);
var i,
    r = n(284009),
    l = n.n(r),
    a = n(835245),
    s = n(311907),
    o = n(73153),
    u = n(684013),
    c = n(587895),
    d = n(313961),
    h = n(274372),
    p = n(141468),
    f = n(742984),
    g = n(159426),
    m = n(253932),
    y = n(164891),
    A = n(616356),
    v = n(961350),
    b = n(734057),
    E = n(320501),
    O = n(803224),
    x = n(783592),
    _ = n(290863),
    S = n(383501),
    I = n(994500),
    j = n(309010),
    T = n(461213),
    C = n(351906),
    N = n(287809),
    w = n(977997),
    P = n(845618),
    D = n(927813),
    R = n(9302),
    k = n(589051),
    M = n(833551),
    L = n(592598),
    U = n(395011),
    G = n(897720),
    V = n(243612),
    z = n(240933),
    F = n(428731),
    H = n(714642),
    Y = n(970495),
    W = n(122749),
    K = n(925159),
    B = n(128307),
    Z = n(533923),
    X = n(965082),
    J = n(749471),
    Q = n(672396),
    q = n(652215),
    $ = n(985018);

function ee(e, t, n) {
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

function et(e) {
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
                ee(e, t, n[t]);
            });
    }
    return e;
}

function en(e, t) {
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
let ei = 5 * D.A.Millis.SECOND,
    er = 8 * D.A.Millis.SECOND,
    el = 30 * D.A.Millis.SECOND,
    ea = 30 * D.A.Millis.SECOND,
    es = Object.freeze({
        timestamp: 0,
        priority: G.In.NORMAL,
        duration: ei,
        expirationExternallyManaged: !1,
        type: G.zb.GENERIC,
    }),
    eo = [],
    eu = !1,
    ec = [],
    ed = {};

function eh(e, t, n) {
    null == ed[e] && (ed[e] = {}), (ed[e][t] = n);
}
let ep = 30 * D.A.Millis.MINUTE,
    ef = 2 * D.A.Millis.MINUTE;

function eg() {
    if (eu && null == eo.find((e) => e.status === q.yFH.FOCUSED))
        for (let e of ((eu = !1), (eo = [...eo, ...ec]), (ec = []), eo.length > 40 && (eo.length = 40), eo))
            e.timer.start();
}

function em() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    eo.filter((e) => e.type === G.zb.TEXT && e.status === q.yFH.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - el) && ey(t.id, q.yFH.DISMISSED);
        });
}

function ey(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : q.yFH.DISMISSED;
    if (null == e) return !1;
    let n = eo.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = eo[n];
    if ((i.timer.stop(), (eo = [...eo]), t === q.yFH.FOCUSED)) {
        let [e] = eo.splice(n, 1);
        (e = en(et({}, e), {
            status: t,
        })),
            eo.unshift(e),
            (eu = !0);
        return;
    }
    t === q.yFH.DISMISSED
        ? eo.splice(n, 1)
        : (eo[n] = en(et({}, i), {
              status: t,
          })),
        eg();
}

function eA(e) {
    let t = eo.find((t) => t.type === G.zb.INCOMING_CALL && t.channelId === e);
    return null != t ? t.id : null;
}

function ev(e, t) {
    let n = et(
            en(et({}, es), {
                timestamp: Date.now(),
            }),
            t,
        ),
        i = (0, a.A)(),
        r = !1,
        l = et(
            {
                id: i,
                status: q.yFH.ACTIVE,
                timer: (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = -1;
                    return {
                        start() {
                            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                                l = r ? q.yFH.TIMED_OUT : q.yFH.DISMISSED;
                            -1 === i && (i = setTimeout(() => u.A.updateNotificationStatus(e, l), null != n ? n : ei));
                        },
                        stop() {
                            clearTimeout(i), (i = -1);
                        },
                    };
                })(i, n.expirationExternallyManaged, n.duration),
                props: en(et({}, e), {
                    onNotificationShow: () => {
                        var t;
                        r || ((r = !0), null == (t = e.onNotificationShow) || t.call(e, i));
                    },
                }),
            },
            n,
        ),
        s = eu ? ec : [...eo],
        o = s.findIndex((e) => e.priority <= n.priority);
    if ((-1 === o ? s.push(l) : s.splice(o, 0, l), s.length > 40)) {
        let e = s.pop();
        eu || e.timer.stop();
    }
    return eu || ((eo = s), l.timer.start()), i;
}

function eb(e) {
    var t;
    let n = x.A.getUserGame(e);
    if (null == n) return null;
    let i = null == (t = x.A.getNowPlaying(n.gameId)[e]) ? void 0 : t.activity;
    return null == i || i.type !== q.$pd.PLAYING ? null : i;
}

function eE() {
    if (L.A.isNotificationDisabled(Q.KS.NowPlayingNotification)) return !1;
    let e = x.A.usersPlaying,
        t = new Set(),
        n = (function () {
            let e = [];
            for (let t in ed) e.push(...Object.keys(ed[t]).map((e) => e));
            return e;
        })(),
        i = !1;
    for (let [n, r] of Object.entries(e))
        (i =
            i ||
            (function (e, t) {
                var n, i, r, l;
                let a, s, o;
                if (!I.A.isFriend(e)) return !1;
                let u = t.gameId;
                if (null == u) return !1;
                let c = eb(e);
                if (
                    null == c ||
                    !(
                        null !=
                            (a =
                                (null == (i = c.timestamps) ? void 0 : i.start) != null
                                    ? c.timestamps.start
                                    : c.created_at) && Date.now() - a < ef
                    )
                )
                    return !1;
                let d = j.A.getVoiceChannelId(),
                    h = null == (n = w.A.getDiscoverableVoiceStateForUser(e)) ? void 0 : n.channelId;
                if (null != d && null != h && d === h) return !1;
                let p = (0, V.qv)();
                return (
                    null != p &&
                    p.id === u &&
                    (null ==
                        (s =
                            null === (r = null == (l = ed[u]) ? void 0 : l[e]) || void 0 === r
                                ? void 0
                                : r.lastSentTimestamp) || Date.now() - s > ep
                        ? (null != (o = (0, K.A)(e, u, c)) &&
                              (eh(u, e, {
                                  userId: e,
                                  gameId: u,
                                  lastSentTimestamp: Date.now(),
                              }),
                              ev(o, {
                                  type: G.zb.GENERIC,
                                  priority: G.In.NORMAL,
                              })),
                          !0)
                        : (eh(u, e, {
                              userId: e,
                              gameId: u,
                              lastSentTimestamp: Date.now(),
                          }),
                          !1))
                );
            })(n, r)),
            t.add(n);
    let r = new Set();
    for (let e of n) t.has(e) || r.add(e);
    let l = U.A.isOverlayV3EnabledForPID(U.A.getTargetPID()) || null != U.A.getFocusedPID();
    for (let e of r)
        if (
            !(function (e) {
                let t = _.A.getActivities(e);
                if (0 === t.length) return !1;
                let n = (0, V.qv)();
                return null != n && null != t.find((e) => e.application_id === n.id);
            })(e) &&
            !l
        ) {
            for (let t in ed) {
                let n = ed[t][e];
                null != n && (n.lastSentTimestamp = null);
            }
            i = !0;
        }
    return i;
}

function eO(e) {
    let { channelId: t, ringing: n } = e,
        i = eA(t);
    if (!n.includes(v.default.getId())) return ey(i);
    if (null != i) return !1;
    let r = b.A.getChannel(t);
    if (
        null == r ||
        !r.isRingable() ||
        ("GUILD_RING_START" === e.type &&
            !y.A.getCurrentConfig({
                guildId: e.guildId,
                location: "OverlayV3StartRinging",
            }).enabled) ||
        T.A.getStatus() === q.clD.DND ||
        m.NO.getSetting()
    )
        return !1;
    let l = eo.find((e) => e.type === G.zb.TEXT && e.channelId === t && e.messageType === q.lAJ.CALL);
    null != l && ey(l.id),
        ev((0, W.A)(r), {
            priority: G.In.HIGH,
            expirationExternallyManaged: !0,
            type: G.zb.INCOMING_CALL,
            channelId: r.id,
        });
}
let ex = {};

function e_(e, t) {
    return "".concat(e, "-").concat(t);
}
class eS extends (i = s.Ay.Store) {
    initialize() {
        this.waitFor(
            c.A,
            A.A,
            v.default,
            d.A,
            b.A,
            h.A,
            E.A,
            O.A,
            x.A,
            M.default,
            L.A,
            U.A,
            _.A,
            S.A,
            I.A,
            j.A,
            T.A,
            C.A,
            N.default,
            w.A,
        ),
            this.syncWith([x.A], eE),
            (function () {
                let e = j.A.getVoiceChannelId(),
                    t = v.default.getId(),
                    n = S.A.getMediaSessionId();
                if (null != e && null != n)
                    for (let i of d.A.getStreamParticipants(e)) i.user.id !== t && (ex[e_(i.user.id, n)] = Date.now());
            })();
    }
    getNotifications() {
        return eo;
    }
}
ee(eS, "displayName", "OverlayNotificationsStore");
let eI = new eS(o.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        ey(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: n } = e;
        em(0);
        let i = null != (t = U.A.getFocusedPID()) ? t : R.UNSET_PID;
        if (M.default.hasChangedRenderMode(i)) return;
        let r = (0, J.A)((0, V.qv)(), n);
        null != r &&
            ev(r, {
                priority: G.In.URGENT,
                type: G.zb.NUDGE,
                duration: er,
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) {
            for (let e of eo) e.status === q.yFH.FOCUSED && ey(e.id, q.yFH.ACTIVE);
            return !0;
        }
        for (let e of (em(), eo))
            e.type === G.zb.NUDGE
                ? ey(e.id, q.yFH.DISMISSED)
                : e.status !== q.yFH.ACTIVE ||
                  e.expirationExternallyManaged ||
                  (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (eo.length > 0) {
            var n;
            return ey(
                null == (n = eo.filter((e) => e.type === G.zb.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0])
                    ? void 0
                    : n.id,
                q.yFH.FOCUSED,
            );
        }
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i;
        let { channelId: r, message: a } = e,
            s = b.A.getChannel(r),
            o = N.default.getUser(null == (n = a.author) ? void 0 : n.id);
        if (null == s || null == o) return !1;
        if ([q.xL.JOIN, q.xL.JOIN_REQUEST, q.xL.STREAM_REQUEST].includes(null == (i = a.activity) ? void 0 : i.type)) {
            if (!(0, f.lx)(a, r, !0, !0)) return !1;
            let e = (function (e, t, n) {
                let i, r, a, s, o, u;
                if ((l()(null != t.activity, "received null message activity"), n.id === v.default.getId())) return !1;
                let d = (0, V.qv)();
                if (null == d || null == d.id) return !1;
                let h = c.A.getApplication(d.id),
                    p = [d.id];
                null != d.altId && p.push(d.altId),
                    (null == h ? void 0 : h.linkedGames) != null && p.push(...h.linkedGames.map((e) => e.id));
                let f = t.activity.party_id;
                switch (t.activity.type) {
                    case q.xL.JOIN:
                        (i = (e) => _.A.getApplicationActivity(n.id, e)),
                            (r = (e) => null != e.party && e.party.id === f);
                        break;
                    case q.xL.JOIN_REQUEST:
                        (i = (e) => T.A.getApplicationActivity(e)), (r = (e) => null != e.party && e.party.id === f);
                        break;
                    case q.xL.STREAM_REQUEST:
                        let { enableRequestToStreamOverlayNotification: m } = g.m.getCurrentConfig(
                            {
                                guildId: e.guild_id,
                                location: "showActivityNotification",
                            },
                            {
                                autoTrackExposure: !1,
                            },
                        );
                        if (!m) return !1;
                        (i = (e) => T.A.getApplicationActivity(e)), (r = (e, t) => e.application_id === t);
                        break;
                    default:
                        return !1;
                }
                for (let e of p) {
                    if (null != (a = i(e)) && r(a, e)) {
                        s = e;
                        break;
                    }
                    a = void 0;
                }
                if (null == a || null == s) return !1;
                switch (t.activity.type) {
                    case q.xL.JOIN:
                        o = (0, z.A)(e, t, n, a, s);
                        break;
                    case q.xL.JOIN_REQUEST:
                        o = (0, B.A)(e, n, d, a);
                        break;
                    case q.xL.STREAM_REQUEST:
                        o = (0, Z.A)(e, n, d, a);
                }
                return (
                    null != o &&
                    (ev(o, {
                        priority: G.In.URGENT,
                        expirationExternallyManaged: !0,
                        channelId: e.id,
                        duration: ea,
                        uniqueKey: "activity-"
                            .concat(t.activity.type, "-")
                            .concat(n.id, "-")
                            .concat(e.id, "-")
                            .concat(s),
                    }),
                    (u = new Set()),
                    eo
                        .filter((e) => null != e.uniqueKey)
                        .sort((e, t) => t.timestamp - e.timestamp)
                        .forEach((e) => {
                            null != e.uniqueKey &&
                                (u.has(e.uniqueKey) ? ey(e.id, q.yFH.DISMISSED) : u.add(e.uniqueKey));
                        }),
                    !0)
                );
            })(s, a, o);
            if (!1 !== e) return e;
        }
        if (L.A.isNotificationDisabled(Q.KS.TextChat) || C.A.disableNotifications || !(0, f.lx)(a, r)) return !1;
        let u = !O.A.isSoundDisabled(P.cH),
            d = null != (t = E.A.getMessage(r, a.id)) ? t : (0, p.rh)(a),
            h = (0, X.A)(s, d, o, u);
        if (null == h) return !1;
        ev(h, {
            type: G.zb.TEXT,
            channelId: s.id,
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
            (n = (eo = eo.filter((e) => e.type !== G.zb.TEXT || e.channelId !== i)).length !== t) && eg(),
            n)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: eO,
    CALL_UPDATE: eO,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        ey(eA(t));
    },
    GUILD_RING_START: eO,
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (
            !y.A.getCurrentConfig({
                guildId: n,
                location: "OverlayV3StopRinging",
            }).enabled
        )
            return !1;
        i.includes(v.default.getId()) && ey(eA(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: r } = e,
            l = (0, V.qv)();
        return (
            null != l &&
            (null == l ? void 0 : l.id) != null &&
            (l.id === r || l.altId === r) &&
            (n === q.xL.JOIN && (t = (0, F.A)(i, l)),
            null != t &&
                void ev(t, {
                    priority: G.In.URGENT,
                    type: G.zb.GENERIC,
                }))
        );
    },
    CLIPS_SAVE_CLIP_START: function (e) {
        "manual" === e.clipMethod && ev((0, H.V)($.intl.string($.t.NBMK9m)));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        ev((0, H.V)($.intl.string($.t["1ZbZuh"])));
    },
    STREAM_START: function (e) {
        let t = (0, H.t)();
        null != t && ev(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        if (L.A.isNotificationDisabled(Q.KS.StreamWatchNudge)) return !1;
        let n = j.A.getVoiceChannelId(),
            i = v.default.getId(),
            r = S.A.getMediaSessionId();
        if (null != n && null != r)
            for (let e of t) {
                let { userId: t, channelId: a, guildId: s, selfStream: o } = e;
                if (t !== i && n === a && o && null != a && null != s) {
                    var l;
                    let { enabled: e } = (0, k.Fg)("OverlayV3StreamWatchNudge");
                    if (!e) return;
                    let n = e_(t, r);
                    if (null != ex[n]) continue;
                    ex[n] = Date.now();
                    let i = (0, Y.A)(t, a, null != (l = eb(t)) ? l : void 0);
                    if (null == i) continue;
                    ev(i, {
                        priority: G.In.NORMAL,
                        type: G.zb.NUDGE,
                        duration: er,
                    });
                    return;
                }
            }
    },
});
