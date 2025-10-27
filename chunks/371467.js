n.d(t, { Z: () => eC }), n(539854), n(388685), n(642613), n(290780);
var i,
    r = n(512722),
    l = n.n(r),
    o = n(772848),
    a = n(442837),
    s = n(570140),
    u = n(13245),
    c = n(358221),
    d = n(435064),
    p = n(786761),
    h = n(864060),
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
    A = n(129724),
    D = n(145597),
    R = n(32300),
    k = n(371651),
    L = n(624864),
    M = n(610394),
    V = n(340101),
    z = n(388627),
    U = n(996050),
    W = n(609626),
    G = n(421824),
    F = n(430169),
    H = n(303286),
    B = n(955978),
    Y = n(333727),
    Q = n(672199),
    K = n(585708),
    X = n(588909),
    J = n(987650),
    q = n(981631),
    $ = n(388032);
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
let ei = 5 * P.Z.Millis.SECOND,
    er = 8 * P.Z.Millis.SECOND,
    el = 30 * P.Z.Millis.SECOND,
    eo = 30 * P.Z.Millis.SECOND,
    ea = Object.freeze({
        timestamp: 0,
        priority: V.Tu.NORMAL,
        duration: ei,
        expirationExternallyManaged: !1,
        type: V.kL.GENERIC,
    }),
    es = [],
    eu = !1,
    ec = [],
    ed = {};
function ep(e, t, n) {
    null == ed[e] && (ed[e] = {}), (ed[e][t] = n);
}
let eh = 30 * P.Z.Millis.MINUTE,
    ef = 2 * P.Z.Millis.MINUTE;
function em() {
    if (eu && null == es.find((e) => e.status === q._1z.FOCUSED))
        for (let e of ((eu = !1), (es = [...es, ...ec]), (ec = []), es.length > 40 && (es.length = 40), es))
            e.timer.start();
}
function eg() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    es.filter((e) => e.type === V.kL.TEXT && e.status === q._1z.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - el) && ey(t.id, q._1z.DISMISSED);
        });
}
function ey(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : q._1z.DISMISSED;
    if (null == e) return !1;
    let n = es.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = es[n];
    if ((i.timer.stop(), (es = [...es]), t === q._1z.FOCUSED)) {
        let [e] = es.splice(n, 1);
        (e = en(et({}, e), { status: t })), es.unshift(e), (eu = !0);
        return;
    }
    t === q._1z.DISMISSED ? es.splice(n, 1) : (es[n] = en(et({}, i), { status: t })), em();
}
function eO(e) {
    let t = es.find((t) => t.type === V.kL.INCOMING_CALL && t.channelId === e);
    return null != t ? t.id : null;
}
function eE(e, t) {
    let n = et(en(et({}, ea), { timestamp: Date.now() }), t),
        i = (0, o.Z)(),
        r = !1,
        l = et(
            {
                id: i,
                status: q._1z.ACTIVE,
                timer: (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = -1;
                    return {
                        start() {
                            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                                l = r ? q._1z.TIMED_OUT : q._1z.DISMISSED;
                            -1 === i && (i = setTimeout(() => u.Z.updateNotificationStatus(e, l), null != n ? n : ei));
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
        a = eu ? ec : [...es],
        s = a.findIndex((e) => e.priority <= n.priority);
    if ((-1 === s ? a.push(l) : a.splice(s, 0, l), a.length > 40)) {
        let e = a.pop();
        eu || e.timer.stop();
    }
    return eu || ((es = a), l.timer.start()), i;
}
function ev(e) {
    var t;
    let n = b.Z.getUserGame(e);
    if (null == n) return null;
    let i = null == (t = b.Z.getNowPlaying(n.gameId)[e]) ? void 0 : t.activity;
    return null == i || i.type !== q.IIU.PLAYING ? null : i;
}
function eS() {
    if (!(0, R.Yo)("OverlayNotificationStore") || L.Z.isNotificationDisabled(J.n0.NowPlayingNotification)) return !1;
    let e = b.Z.usersPlaying,
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
                        return null != n && Date.now() - n < ef;
                    })(r)
                )
                    return !1;
                let l = C.Z.getVoiceChannelId(),
                    o = null == (n = T.Z.getDiscoverableVoiceStateForUser(e)) ? void 0 : n.channelId;
                if (null != l && null != o && l === o) return !1;
                let a = (0, z.pL)();
                if (null == a || a.id !== i) return !1;
                if (
                    !(function (e, t) {
                        var n, i;
                        let r =
                            null === (n = null == (i = ed[e]) ? void 0 : i[t]) || void 0 === n
                                ? void 0
                                : n.lastSentTimestamp;
                        return null == r || Date.now() - r > eh;
                    })(i, e)
                )
                    return (
                        ep(i, e, {
                            userId: e,
                            gameId: i,
                            lastSentTimestamp: Date.now(),
                        }),
                        !1
                    );
                let s = (0, B.Z)(e, i, r);
                return (
                    null != s &&
                        (ep(i, e, {
                            userId: e,
                            gameId: i,
                            lastSentTimestamp: Date.now(),
                        }),
                        eE(s, {
                            type: V.kL.GENERIC,
                            priority: V.Tu.NORMAL,
                        })),
                    !0
                );
            })(n, r)),
            t.add(n);
    let r = new Set();
    for (let e of n) t.has(e) || r.add(e);
    let l = M.Z.isOverlayV3EnabledForPID((0, D.getPID)()) || null != M.Z.getFocusedPID();
    for (let e of r)
        if (
            !(function (e) {
                let t = x.Z.getActivities(e);
                if (0 === t.length) return !1;
                let n = (0, z.pL)();
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
function eb(e) {
    let { channelId: t, ringing: n } = e,
        i = eO(t);
    if (!n.includes(O.default.getId())) return ey(i);
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
        Z.Z.getStatus() === q.Skl.DND ||
        m.QZ.getSetting()
    )
        return !1;
    let l = es.find((e) => e.type === V.kL.TEXT && e.channelId === t && e.messageType === q.uaV.CALL);
    null != l && ey(l.id),
        eE((0, H.Z)(r), {
            priority: V.Tu.HIGH,
            expirationExternallyManaged: !0,
            type: V.kL.INCOMING_CALL,
            channelId: r.id,
        });
}
let ex = {};
function ej(e, t) {
    return "".concat(e, "-").concat(t);
}
class eI extends (i = a.ZP.Store) {
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
            k.default,
            L.Z,
            M.Z,
            x.Z,
            j.Z,
            I.Z,
            C.Z,
            Z.Z,
            N.Z,
            w.default,
            T.Z,
        ),
            this.syncWith([b.Z], eS),
            (function () {
                let e = C.Z.getVoiceChannelId(),
                    t = O.default.getId(),
                    n = j.Z.getMediaSessionId();
                if (null != e && null != n)
                    for (let i of c.Z.getStreamParticipants(e)) i.user.id !== t && (ex[ej(i.user.id, n)] = Date.now());
            })();
    }
    getNotifications() {
        return es;
    }
}
ee(eI, "displayName", "OverlayNotificationsStore");
let eC = new eI(s.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        ey(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: n } = e;
        eg(0);
        let i = null != (t = M.Z.getFocusedPID()) ? t : D.UNSET_PID;
        if (k.default.hasChangedRenderMode(i)) return;
        let r = (0, X.Z)((0, z.pL)(), n);
        null != r &&
            eE(r, {
                priority: V.Tu.URGENT,
                type: V.kL.NUDGE,
                duration: er,
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) {
            for (let e of es) e.status === q._1z.FOCUSED && ey(e.id, q._1z.ACTIVE);
            return !0;
        }
        for (let e of (eg(), es))
            e.type === V.kL.NUDGE
                ? ey(e.id, q._1z.DISMISSED)
                : e.status !== q._1z.ACTIVE ||
                  e.expirationExternallyManaged ||
                  (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (es.length > 0) {
            var n;
            return ey(
                null == (n = es.filter((e) => e.type === V.kL.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0])
                    ? void 0
                    : n.id,
                q._1z.FOCUSED,
            );
        }
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i;
        let { channelId: r, message: o } = e,
            a = E.Z.getChannel(r),
            s = w.default.getUser(null == (t = o.author) ? void 0 : t.id);
        if (null == a || null == s) return !1;
        if (
            [q.mFx.JOIN, q.mFx.JOIN_REQUEST, q.mFx.STREAM_REQUEST].includes(null == (n = o.activity) ? void 0 : n.type)
        ) {
            if (!(0, h.eF)(o, r, !0, !0)) return !1;
            let e = (function (e, t, n) {
                var i;
                let r, o;
                if ((l()(null != t.activity, "received null message activity"), n.id === O.default.getId())) return !1;
                let a = (0, z.pL)(),
                    s = null != (i = null == a ? void 0 : a.altId) ? i : null == a ? void 0 : a.id;
                if (null == a || null == s) return !1;
                switch (t.activity.type) {
                    case q.mFx.JOIN:
                        if (
                            null == (r = x.Z.getApplicationActivity(n.id, s)) ||
                            null == r.party ||
                            r.party.id !== t.activity.party_id
                        )
                            return !1;
                        o = (0, U.Z)(e, t, n, a, r);
                        break;
                    case q.mFx.JOIN_REQUEST:
                        if (
                            null == (r = Z.Z.getApplicationActivity(s)) ||
                            null == r.party ||
                            r.party.id !== t.activity.party_id
                        )
                            return !1;
                        o = (0, Y.Z)(e, n, a, r);
                        break;
                    case q.mFx.STREAM_REQUEST:
                        let { enableRequestToStreamOverlayNotification: u } = f.A.getCurrentConfig(
                            {
                                guildId: e.guild_id,
                                location: "showActivityNotification",
                            },
                            { autoTrackExposure: !1 },
                        );
                        if (!u || null == (r = Z.Z.getApplicationActivity(s)) || r.application_id !== s) return !1;
                        o = (0, Q.Z)(e, n, a, r);
                }
                if (null == o) return !1;
                eE(o, {
                    priority: V.Tu.URGENT,
                    expirationExternallyManaged: !0,
                    channelId: e.id,
                    duration: eo,
                    uniqueKey: "activity-".concat(t.activity.type, "-").concat(n.id, "-").concat(e.id, "-").concat(s),
                });
                let c = new Set();
                return (
                    es
                        .filter((e) => null != e.uniqueKey)
                        .sort((e, t) => t.timestamp - e.timestamp)
                        .forEach((e) => {
                            null != e.uniqueKey &&
                                (c.has(e.uniqueKey) ? ey(e.id, q._1z.DISMISSED) : c.add(e.uniqueKey));
                        }),
                    !0
                );
            })(a, o, s);
            if (!1 !== e) return e;
        }
        if (L.Z.isNotificationDisabled(J.n0.TextChat) || N.Z.disableNotifications || !(0, h.eF)(o, r)) return !1;
        let u = !S.Z.isSoundDisabled(_.Ay),
            c = null != (i = v.Z.getMessage(r, o.id)) ? i : (0, p.e5)(o),
            d = (0, K.Z)(a, c, s, u);
        if (null == d) return !1;
        eE(d, {
            type: V.kL.TEXT,
            channelId: a.id,
            expirationExternallyManaged: !0,
            messageType: o.type,
        }),
            eg();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (
            null != t &&
            (function (e) {
                let t = es.length,
                    n = (es = es.filter((t) => t.type !== V.kL.TEXT || t.channelId !== e)).length !== t;
                return n && em(), n;
            })(t)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: eb,
    CALL_UPDATE: eb,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        ey(eO(t));
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
        i.includes(O.default.getId()) && ey(eO(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: r } = e,
            l = (0, z.pL)();
        return (
            null != l &&
            (null == l ? void 0 : l.id) != null &&
            (l.id === r || l.altId === r) &&
            (n === q.mFx.JOIN && (t = (0, W.Z)(i, l)),
            null != t &&
                void eE(t, {
                    priority: V.Tu.URGENT,
                    type: V.kL.GENERIC,
                }))
        );
    },
    CLIPS_SAVE_CLIP_START: function () {
        eE((0, G.f)($.intl.string($.t.NBMK9m)));
    },
    CLIPS_SAVE_CLIP: function () {
        eE((0, G.f)($.intl.format($.t.KLhk6s, { duration: (0, A.A)(d.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        eE((0, G.f)($.intl.string($.t["1ZbZuh"])));
    },
    STREAM_START: function (e) {
        let t = (0, G.y)();
        null != t && eE(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        if (L.Z.isNotificationDisabled(J.n0.StreamWatchNudge)) return !1;
        let n = C.Z.getVoiceChannelId(),
            i = O.default.getId(),
            r = j.Z.getMediaSessionId();
        if (null != n && null != r)
            for (let e of t) {
                let { userId: t, channelId: o, guildId: a, selfStream: s } = e;
                if (t !== i && n === o && s && null != o && null != a) {
                    var l;
                    let { enabled: e } = (0, R.lj)("OverlayV3StreamWatchNudge");
                    if (!e) return;
                    let n = ej(t, r);
                    if (null != ex[n]) continue;
                    ex[n] = Date.now();
                    let i = (0, F.Z)(t, o, null != (l = ev(t)) ? l : void 0);
                    if (null == i) continue;
                    eE(i, {
                        priority: V.Tu.NORMAL,
                        type: V.kL.NUDGE,
                        duration: er,
                    });
                    return;
                }
            }
    },
});
