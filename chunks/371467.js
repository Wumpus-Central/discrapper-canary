n.d(t, { Z: () => em }), n(653041), n(47120), n(230036), n(733860);
var i,
    r = n(512722),
    l = n.n(r),
    o = n(772848),
    a = n(442837),
    s = n(570140),
    u = n(13245),
    c = n(435064),
    d = n(786761),
    p = n(695346),
    h = n(163612),
    f = n(314897),
    m = n(592125),
    g = n(375954),
    O = n(292959),
    v = n(649974),
    y = n(158776),
    E = n(699516),
    b = n(944486),
    j = n(885110),
    x = n(246946),
    I = n(594174),
    S = n(979651),
    C = n(974180),
    N = n(237997),
    Z = n(70956),
    w = n(150097),
    P = n(129724),
    _ = n(145597),
    T = n(371651),
    D = n(610394),
    k = n(340101),
    A = n(388627),
    L = n(996050),
    R = n(609626),
    M = n(421824),
    W = n(777036),
    V = n(955978),
    z = n(333727),
    U = n(585708),
    F = n(588909),
    G = n(981631),
    Y = n(388032);
function H(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                H(e, t, n[t]);
            });
    }
    return e;
}
function K(e, t) {
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
let Q = 5 * Z.Z.Millis.SECOND,
    X = 8 * Z.Z.Millis.SECOND,
    J = 30 * Z.Z.Millis.SECOND,
    q = 30 * Z.Z.Millis.SECOND,
    $ = Object.freeze({
        timestamp: 0,
        priority: k.Tu.NORMAL,
        duration: Q,
        expirationExternallyManaged: !1,
        type: k.kL.GENERIC
    }),
    ee = [],
    et = !1,
    en = [],
    ei = {};
function er(e, t, n) {
    null == ei[e] && (ei[e] = {}), (ei[e][t] = n);
}
let el = 30 * Z.Z.Millis.MINUTE,
    eo = 2 * Z.Z.Millis.MINUTE;
function ea() {
    if (et && null == ee.find((e) => e.status === G._1z.FOCUSED)) for (let e of ((et = !1), (ee = [...ee, ...en]), (en = []), ee.length > 40 && (ee.length = 40), ee)) e.timer.start();
}
function es() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    ee.filter((e) => e.type === k.kL.TEXT && e.status === G._1z.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - J) && eu(t.id, G._1z.DISMISSED);
        });
}
function eu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G._1z.DISMISSED;
    if (null == e) return !1;
    let n = ee.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = ee[n];
    if ((i.timer.stop(), (ee = [...ee]), t === G._1z.FOCUSED)) {
        let [e] = ee.splice(n, 1);
        (e = K(B({}, e), { status: t })), ee.unshift(e), (et = !0);
        return;
    }
    t === G._1z.DISMISSED ? ee.splice(n, 1) : (ee[n] = K(B({}, i), { status: t })), ea();
}
function ec(e) {
    let t = ee.find((t) => t.type === k.kL.INCOMING_CALL && t.channelId === e);
    return null != t ? t.id : null;
}
function ed(e, t) {
    let n = B(K(B({}, $), { timestamp: Date.now() }), t),
        i = (0, o.Z)(),
        r = !1,
        l = B(
            {
                id: i,
                status: G._1z.ACTIVE,
                timer: (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = -1;
                    return {
                        start() {
                            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                                l = r ? G._1z.TIMED_OUT : G._1z.DISMISSED;
                            -1 === i && (i = setTimeout(() => u.Z.updateNotificationStatus(e, l), null != n ? n : Q));
                        },
                        stop() {
                            clearTimeout(i), (i = -1);
                        }
                    };
                })(i, n.expirationExternallyManaged, n.duration),
                props: K(B({}, e), {
                    onNotificationShow: () => {
                        var t;
                        r || ((r = !0), null === (t = e.onNotificationShow) || void 0 === t || t.call(e, i));
                    }
                })
            },
            n
        ),
        a = et ? en : [...ee],
        s = a.findIndex((e) => e.priority <= n.priority);
    if ((-1 === s ? a.push(l) : a.splice(s, 0, l), a.length > 40)) {
        let e = a.pop();
        et || e.timer.stop();
    }
    return et || ((ee = a), l.timer.start()), i;
}
function ep() {
    let e = v.Z.usersPlaying,
        t = new Set(),
        n = (function () {
            let e = [];
            for (let t in ei) e.push(...Object.keys(ei[t]).map((e) => e));
            return e;
        })(),
        i = !1;
    for (let [n, r] of Object.entries(e))
        (i =
            i ||
            (function (e, t) {
                var n, i;
                if (!E.Z.isFriend(e)) return !1;
                let r = t.gameId;
                if (null == r) return !1;
                let l = null === (n = v.Z.getNowPlaying(r)[e]) || void 0 === n ? void 0 : n.activity;
                if (null == l || l.type !== G.IIU.PLAYING || !(null != l.created_at && Date.now() - l.created_at < eo)) return !1;
                let o = b.Z.getVoiceChannelId(),
                    a = null === (i = S.Z.getDiscoverableVoiceStateForUser(e)) || void 0 === i ? void 0 : i.channelId;
                if (null != o && null != a && o === a) return !1;
                let s = (0, A.pL)();
                return (
                    null != s &&
                    s.id === r &&
                    (!(function (e, t) {
                        var n, i;
                        let r = null === (n = null === (i = ei[e]) || void 0 === i ? void 0 : i[t]) || void 0 === n ? void 0 : n.lastSentTimestamp;
                        return null == r || Date.now() - r > el;
                    })(r, e)
                        ? (er(r, e, {
                              userId: e,
                              gameId: r,
                              lastSentTimestamp: Date.now()
                          }),
                          !1)
                        : ((function (e, t, n) {
                              let i = (0, V.Z)(t, e, n);
                              null != i &&
                                  (er(e, t, {
                                      userId: t,
                                      gameId: e,
                                      lastSentTimestamp: Date.now()
                                  }),
                                  ed(i, {
                                      type: k.kL.GENERIC,
                                      priority: k.Tu.NORMAL
                                  }));
                          })(r, e, l),
                          !0))
                );
            })(n, r)),
            t.add(n);
    let r = new Set();
    for (let e of n) t.has(e) || r.add(e);
    let l = D.ZP.isOverlayV3EnabledForPID((0, _.getPID)()) || null != D.ZP.getFocusedPID();
    for (let e of r)
        (function (e) {
            let t = y.Z.getActivities(e);
            if (0 === t.length) return !1;
            let n = (0, A.pL)();
            return null != n && null != t.find((e) => e.application_id === n.id);
        })(e) ||
            l ||
            (!(function (e) {
                for (let t in ei) {
                    let n = ei[t][e];
                    null != n && (n.lastSentTimestamp = null);
                }
            })(e),
            (i = !0));
    return i;
}
function eh(e) {
    let { channelId: t, ringing: n } = e,
        i = ec(t);
    if (!n.includes(f.default.getId())) return eu(i);
    if (null != i) return !1;
    let r = m.Z.getChannel(t);
    if (
        null == r ||
        !r.isRingable() ||
        ('GUILD_RING_START' === e.type &&
            !h.Z.getCurrentConfig({
                guildId: e.guildId,
                location: 'OverlayV3StartRinging'
            }).enabled) ||
        j.Z.getStatus() === G.Skl.DND ||
        p.QZ.getSetting()
    )
        return !1;
    let l = ee.find((e) => e.type === k.kL.TEXT && e.channelId === t && e.messageType === G.uaV.CALL);
    null != l && eu(l.id),
        ed((0, W.Z)(r), {
            priority: k.Tu.HIGH,
            expirationExternallyManaged: !0,
            type: k.kL.INCOMING_CALL,
            channelId: r.id
        });
}
class ef extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, I.default, v.Z), this.syncWith([v.Z], ep);
    }
    getNotifications() {
        return ee;
    }
}
H(ef, 'displayName', 'OverlayNotificationsStore');
let em = new ef(s.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        eu(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: n } = e;
        es(0);
        let i = null !== (t = D.ZP.getFocusedPID()) && void 0 !== t ? t : _.UNSET_PID;
        if (T.default.hasChangedRenderMode(i)) return;
        let r = (0, F.Z)((0, A.pL)(), n);
        null != r &&
            ed(r, {
                priority: k.Tu.URGENT,
                type: k.kL.NUDGE,
                duration: X
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) {
            for (let e of ee) e.status === G._1z.FOCUSED && eu(e.id, G._1z.ACTIVE);
            return !0;
        }
        for (let e of (es(), ee)) e.type === k.kL.NUDGE ? eu(e.id, G._1z.DISMISSED) : e.status !== G._1z.ACTIVE || e.expirationExternallyManaged || (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (ee.length > 0) {
            var n;
            return eu(null === (n = ee.filter((e) => e.type === k.kL.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0]) || void 0 === n ? void 0 : n.id, G._1z.FOCUSED);
        }
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i, r;
        let { channelId: o, message: a } = e,
            s = m.Z.getChannel(o),
            u = I.default.getUser(null === (t = a.author) || void 0 === t ? void 0 : t.id);
        if (null == s || null == u) return !1;
        if ((null === (n = a.activity) || void 0 === n ? void 0 : n.type) === G.mFx.JOIN || (null === (i = a.activity) || void 0 === i ? void 0 : i.type) === G.mFx.JOIN_REQUEST) {
            if (!(0, w.eF)(a, o, !0, !0)) return !1;
            let e = (function (e, t, n) {
                var i;
                let r, o;
                if ((l()(null != t.activity, 'received null message activity'), n.id === f.default.getId())) return !1;
                let a = (0, A.pL)(),
                    s = null !== (i = null == a ? void 0 : a.altId) && void 0 !== i ? i : null == a ? void 0 : a.id;
                if (null == a || null == s) return !1;
                switch (t.activity.type) {
                    case G.mFx.JOIN:
                        if (null == (r = y.Z.getApplicationActivity(n.id, s)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
                        o = (0, L.Z)(e, t, n, a, r);
                        break;
                    case G.mFx.JOIN_REQUEST:
                        if (null == (r = j.Z.getApplicationActivity(s)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
                        o = (0, z.Z)(e, n, a, r);
                }
                return (
                    null != o &&
                    (ed(o, {
                        priority: k.Tu.URGENT,
                        expirationExternallyManaged: !0,
                        channelId: e.id,
                        duration: q
                    }),
                    !0)
                );
            })(s, a, u);
            if (!1 !== e) return e;
        }
        if (N.default.getTextChatNotificationMode() === G.Ypu.DISABLED || x.Z.disableNotifications || !(0, w.eF)(a, o)) return !1;
        let c = !O.Z.isSoundDisabled(C.Ay),
            p = null !== (r = g.Z.getMessage(o, a.id)) && void 0 !== r ? r : (0, d.e5)(a);
        ed((0, U.Z)(s, p, u, c), {
            type: k.kL.TEXT,
            channelId: s.id,
            expirationExternallyManaged: !0,
            messageType: a.type
        }),
            es();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (
            null != t &&
            (function (e) {
                let t = ee.length,
                    n = (ee = ee.filter((t) => t.type !== k.kL.TEXT || t.channelId !== e)).length !== t;
                return n && ea(), n;
            })(t)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: eh,
    CALL_UPDATE: eh,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        eu(ec(t));
    },
    GUILD_RING_START: eh,
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (
            !h.Z.getCurrentConfig({
                guildId: n,
                location: 'OverlayV3StopRinging'
            }).enabled
        )
            return !1;
        i.includes(f.default.getId()) && eu(ec(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: r } = e,
            l = (0, A.pL)();
        return (
            null != l &&
            (null == l ? void 0 : l.id) != null &&
            (l.id === r || l.altId === r) &&
            (n === G.mFx.JOIN && (t = (0, R.Z)(i, l)),
            null != t &&
                void ed(t, {
                    priority: k.Tu.URGENT,
                    type: k.kL.GENERIC
                }))
        );
    },
    CLIPS_SAVE_CLIP_START: function () {
        ed((0, M.f)(Y.NW.string(Y.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        ed((0, M.f)(Y.NW.format(Y.t.KLhk6u, { duration: (0, P.A)(c.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        ed((0, M.f)(Y.NW.string(Y.t['1ZbZur'])));
    },
    STREAM_START: function (e) {
        let t = (0, M.y)();
        null != t && ed(t);
    }
});
