n.d(t, { Z: () => eb }), n(539854), n(388685), n(642613), n(290780);
var i,
    r = n(512722),
    o = n.n(r),
    l = n(772848),
    a = n(442837),
    s = n(570140),
    c = n(13245),
    u = n(435064),
    d = n(786761),
    p = n(864060),
    f = n(763624),
    h = n(695346),
    m = n(163612),
    g = n(314897),
    y = n(592125),
    O = n(375954),
    b = n(292959),
    v = n(649974),
    E = n(158776),
    _ = n(699516),
    S = n(944486),
    x = n(885110),
    I = n(246946),
    j = n(594174),
    C = n(979651),
    N = n(974180),
    w = n(70956),
    Z = n(129724),
    P = n(145597),
    T = n(486016),
    A = n(32300),
    k = n(371651),
    D = n(624864),
    R = n(610394),
    L = n(340101),
    M = n(388627),
    z = n(996050),
    U = n(609626),
    V = n(421824),
    W = n(303286),
    F = n(955978),
    G = n(333727),
    B = n(672199),
    H = n(585708),
    Y = n(588909),
    Q = n(981631),
    K = n(388032);
function X(e, t, n) {
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
function q(e) {
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
                X(e, t, n[t]);
            });
    }
    return e;
}
function J(e, t) {
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
let $ = 5 * w.Z.Millis.SECOND,
    ee = 8 * w.Z.Millis.SECOND,
    et = 30 * w.Z.Millis.SECOND,
    en = 30 * w.Z.Millis.SECOND,
    ei = Object.freeze({
        timestamp: 0,
        priority: L.Tu.NORMAL,
        duration: $,
        expirationExternallyManaged: !1,
        type: L.kL.GENERIC,
    }),
    er = [],
    eo = !1,
    el = [],
    ea = {};
function es(e, t, n) {
    null == ea[e] && (ea[e] = {}), (ea[e][t] = n);
}
let ec = 30 * w.Z.Millis.MINUTE,
    eu = 2 * w.Z.Millis.MINUTE;
function ed() {
    if (eo && null == er.find((e) => e.status === Q._1z.FOCUSED))
        for (let e of ((eo = !1), (er = [...er, ...el]), (el = []), er.length > 40 && (er.length = 40), er))
            e.timer.start();
}
function ep() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    er.filter((e) => e.type === L.kL.TEXT && e.status === Q._1z.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - et) && ef(t.id, Q._1z.DISMISSED);
        });
}
function ef(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Q._1z.DISMISSED;
    if (null == e) return !1;
    let n = er.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = er[n];
    if ((i.timer.stop(), (er = [...er]), t === Q._1z.FOCUSED)) {
        let [e] = er.splice(n, 1);
        (e = J(q({}, e), { status: t })), er.unshift(e), (eo = !0);
        return;
    }
    t === Q._1z.DISMISSED ? er.splice(n, 1) : (er[n] = J(q({}, i), { status: t })), ed();
}
function eh(e) {
    let t = er.find((t) => t.type === L.kL.INCOMING_CALL && t.channelId === e);
    return null != t ? t.id : null;
}
function em(e, t) {
    let n = q(J(q({}, ei), { timestamp: Date.now() }), t),
        i = (0, l.Z)(),
        r = !1,
        o = q(
            {
                id: i,
                status: Q._1z.ACTIVE,
                timer: (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = -1;
                    return {
                        start() {
                            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                                o = r ? Q._1z.TIMED_OUT : Q._1z.DISMISSED;
                            -1 === i && (i = setTimeout(() => c.Z.updateNotificationStatus(e, o), null != n ? n : $));
                        },
                        stop() {
                            clearTimeout(i), (i = -1);
                        },
                    };
                })(i, n.expirationExternallyManaged, n.duration),
                props: J(q({}, e), {
                    onNotificationShow: () => {
                        var t;
                        r || ((r = !0), null == (t = e.onNotificationShow) || t.call(e, i));
                    },
                }),
            },
            n,
        ),
        a = eo ? el : [...er],
        s = a.findIndex((e) => e.priority <= n.priority);
    if ((-1 === s ? a.push(o) : a.splice(s, 0, o), a.length > 40)) {
        let e = a.pop();
        eo || e.timer.stop();
    }
    return eo || ((er = a), o.timer.start()), i;
}
function eg() {
    if (
        !(0, A.Yo)("OverlayNotificationStore") ||
        D.Z.isNotificationDisabled(T.OverlayNotificationDisabledSetting.NOW_PLAYING)
    )
        return !1;
    let e = v.Z.usersPlaying,
        t = new Set(),
        n = (function () {
            let e = [];
            for (let t in ea) e.push(...Object.keys(ea[t]).map((e) => e));
            return e;
        })(),
        i = !1;
    for (let [n, r] of Object.entries(e))
        (i =
            i ||
            (function (e, t) {
                var n, i;
                if (!_.Z.isFriend(e)) return !1;
                let r = t.gameId;
                if (null == r) return !1;
                let o = null == (n = v.Z.getNowPlaying(r)[e]) ? void 0 : n.activity;
                if (
                    null == o ||
                    o.type !== Q.IIU.PLAYING ||
                    !(function (e) {
                        var t;
                        let n =
                            (null == (t = e.timestamps) ? void 0 : t.start) != null ? e.timestamps.start : e.created_at;
                        return null != n && Date.now() - n < eu;
                    })(o)
                )
                    return !1;
                let l = S.Z.getVoiceChannelId(),
                    a = null == (i = C.Z.getDiscoverableVoiceStateForUser(e)) ? void 0 : i.channelId;
                if (null != l && null != a && l === a) return !1;
                let s = (0, M.pL)();
                if (null == s || s.id !== r) return !1;
                if (
                    !(function (e, t) {
                        var n, i;
                        let r =
                            null === (n = null == (i = ea[e]) ? void 0 : i[t]) || void 0 === n
                                ? void 0
                                : n.lastSentTimestamp;
                        return null == r || Date.now() - r > ec;
                    })(r, e)
                )
                    return (
                        es(r, e, {
                            userId: e,
                            gameId: r,
                            lastSentTimestamp: Date.now(),
                        }),
                        !1
                    );
                let c = (0, F.Z)(e, r, o);
                return (
                    null != c &&
                        (es(r, e, {
                            userId: e,
                            gameId: r,
                            lastSentTimestamp: Date.now(),
                        }),
                        em(c, {
                            type: L.kL.GENERIC,
                            priority: L.Tu.NORMAL,
                        })),
                    !0
                );
            })(n, r)),
            t.add(n);
    let r = new Set();
    for (let e of n) t.has(e) || r.add(e);
    let o = R.ZP.isOverlayV3EnabledForPID((0, P.getPID)()) || null != R.ZP.getFocusedPID();
    for (let e of r)
        if (
            !(function (e) {
                let t = E.Z.getActivities(e);
                if (0 === t.length) return !1;
                let n = (0, M.pL)();
                return null != n && null != t.find((e) => e.application_id === n.id);
            })(e) &&
            !o
        ) {
            for (let t in ea) {
                let n = ea[t][e];
                null != n && (n.lastSentTimestamp = null);
            }
            i = !0;
        }
    return i;
}
function ey(e) {
    let { channelId: t, ringing: n } = e,
        i = eh(t);
    if (!n.includes(g.default.getId())) return ef(i);
    if (null != i) return !1;
    let r = y.Z.getChannel(t);
    if (
        null == r ||
        !r.isRingable() ||
        ("GUILD_RING_START" === e.type &&
            !m.Z.getCurrentConfig({
                guildId: e.guildId,
                location: "OverlayV3StartRinging",
            }).enabled) ||
        x.Z.getStatus() === Q.Skl.DND ||
        h.QZ.getSetting()
    )
        return !1;
    let o = er.find((e) => e.type === L.kL.TEXT && e.channelId === t && e.messageType === Q.uaV.CALL);
    null != o && ef(o.id),
        em((0, W.Z)(r), {
            priority: L.Tu.HIGH,
            expirationExternallyManaged: !0,
            type: L.kL.INCOMING_CALL,
            channelId: r.id,
        });
}
class eO extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(y.Z, j.default, v.Z, D.Z), this.syncWith([v.Z], eg);
    }
    getNotifications() {
        return er;
    }
}
X(eO, "displayName", "OverlayNotificationsStore");
let eb = new eO(s.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        ef(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: n } = e;
        ep(0);
        let i = null != (t = R.ZP.getFocusedPID()) ? t : P.UNSET_PID;
        if (k.default.hasChangedRenderMode(i)) return;
        let r = (0, Y.Z)((0, M.pL)(), n);
        null != r &&
            em(r, {
                priority: L.Tu.URGENT,
                type: L.kL.NUDGE,
                duration: ee,
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) {
            for (let e of er) e.status === Q._1z.FOCUSED && ef(e.id, Q._1z.ACTIVE);
            return !0;
        }
        for (let e of (ep(), er))
            e.type === L.kL.NUDGE
                ? ef(e.id, Q._1z.DISMISSED)
                : e.status !== Q._1z.ACTIVE ||
                  e.expirationExternallyManaged ||
                  (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (er.length > 0) {
            var n;
            return ef(
                null == (n = er.filter((e) => e.type === L.kL.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0])
                    ? void 0
                    : n.id,
                Q._1z.FOCUSED,
            );
        }
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i;
        let { channelId: r, message: l } = e,
            a = y.Z.getChannel(r),
            s = j.default.getUser(null == (t = l.author) ? void 0 : t.id);
        if (null == a || null == s) return !1;
        if (
            [Q.mFx.JOIN, Q.mFx.JOIN_REQUEST, Q.mFx.STREAM_REQUEST].includes(null == (n = l.activity) ? void 0 : n.type)
        ) {
            if (!(0, p.eF)(l, r, !0, !0)) return !1;
            let e = (function (e, t, n) {
                var i;
                let r, l;
                if ((o()(null != t.activity, "received null message activity"), n.id === g.default.getId())) return !1;
                let a = (0, M.pL)(),
                    s = null != (i = null == a ? void 0 : a.altId) ? i : null == a ? void 0 : a.id;
                if (null == a || null == s) return !1;
                switch (t.activity.type) {
                    case Q.mFx.JOIN:
                        if (
                            null == (r = E.Z.getApplicationActivity(n.id, s)) ||
                            null == r.party ||
                            r.party.id !== t.activity.party_id
                        )
                            return !1;
                        l = (0, z.Z)(e, t, n, a, r);
                        break;
                    case Q.mFx.JOIN_REQUEST:
                        if (
                            null == (r = x.Z.getApplicationActivity(s)) ||
                            null == r.party ||
                            r.party.id !== t.activity.party_id
                        )
                            return !1;
                        l = (0, G.Z)(e, n, a, r);
                        break;
                    case Q.mFx.STREAM_REQUEST:
                        let { enableRequestToStreamOverlayNotification: c } = f.A.getCurrentConfig({
                            guildId: e.guild_id,
                            location: "showActivityNotification",
                        });
                        if (!c || null == (r = x.Z.getApplicationActivity(s)) || r.application_id !== s) return !1;
                        l = (0, B.Z)(e, n, a, r);
                }
                if (null == l) return !1;
                em(l, {
                    priority: L.Tu.URGENT,
                    expirationExternallyManaged: !0,
                    channelId: e.id,
                    duration: en,
                    uniqueKey: "activity-".concat(t.activity.type, "-").concat(n.id, "-").concat(e.id, "-").concat(s),
                });
                let u = new Set();
                return (
                    er
                        .filter((e) => null != e.uniqueKey)
                        .sort((e, t) => t.timestamp - e.timestamp)
                        .forEach((e) => {
                            null != e.uniqueKey &&
                                (u.has(e.uniqueKey) ? ef(e.id, Q._1z.DISMISSED) : u.add(e.uniqueKey));
                        }),
                    !0
                );
            })(a, l, s);
            if (!1 !== e) return e;
        }
        if (
            D.Z.isNotificationDisabled(T.OverlayNotificationDisabledSetting.TEXT_CHAT) ||
            I.Z.disableNotifications ||
            !(0, p.eF)(l, r)
        )
            return !1;
        let c = !b.Z.isSoundDisabled(N.Ay),
            u = null != (i = O.Z.getMessage(r, l.id)) ? i : (0, d.e5)(l);
        em((0, H.Z)(a, u, s, c), {
            type: L.kL.TEXT,
            channelId: a.id,
            expirationExternallyManaged: !0,
            messageType: l.type,
        }),
            ep();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (
            null != t &&
            (function (e) {
                let t = er.length,
                    n = (er = er.filter((t) => t.type !== L.kL.TEXT || t.channelId !== e)).length !== t;
                return n && ed(), n;
            })(t)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: ey,
    CALL_UPDATE: ey,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        ef(eh(t));
    },
    GUILD_RING_START: ey,
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (
            !m.Z.getCurrentConfig({
                guildId: n,
                location: "OverlayV3StopRinging",
            }).enabled
        )
            return !1;
        i.includes(g.default.getId()) && ef(eh(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: r } = e,
            o = (0, M.pL)();
        return (
            null != o &&
            (null == o ? void 0 : o.id) != null &&
            (o.id === r || o.altId === r) &&
            (n === Q.mFx.JOIN && (t = (0, U.Z)(i, o)),
            null != t &&
                void em(t, {
                    priority: L.Tu.URGENT,
                    type: L.kL.GENERIC,
                }))
        );
    },
    CLIPS_SAVE_CLIP_START: function () {
        em((0, V.f)(K.intl.string(K.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        em((0, V.f)(K.intl.format(K.t.KLhk6u, { duration: (0, Z.A)(u.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        em((0, V.f)(K.intl.string(K.t["1ZbZur"])));
    },
    STREAM_START: function (e) {
        let t = (0, V.y)();
        null != t && em(t);
    },
});
