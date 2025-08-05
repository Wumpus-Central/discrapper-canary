(n.d(t, { Z: () => eO }), n(539854), n(388685), n(642613), n(290780));
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
    f = n(695346),
    h = n(163612),
    m = n(314897),
    g = n(592125),
    y = n(375954),
    O = n(292959),
    b = n(649974),
    v = n(158776),
    E = n(699516),
    _ = n(944486),
    x = n(885110),
    S = n(246946),
    I = n(594174),
    j = n(979651),
    C = n(974180),
    N = n(70956),
    w = n(129724),
    Z = n(145597),
    P = n(486016),
    T = n(32300),
    A = n(371651),
    k = n(624864),
    D = n(610394),
    R = n(340101),
    L = n(388627),
    M = n(996050),
    z = n(609626),
    U = n(421824),
    V = n(777036),
    W = n(955978),
    F = n(333727),
    G = n(672199),
    B = n(585708),
    H = n(588909),
    Y = n(981631),
    Q = n(388032);
function K(e, t, n) {
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
function X(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                K(e, t, n[t]);
            }));
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
let q = 5 * N.Z.Millis.SECOND,
    $ = 8 * N.Z.Millis.SECOND,
    ee = 30 * N.Z.Millis.SECOND,
    et = 30 * N.Z.Millis.SECOND,
    en = Object.freeze({
        timestamp: 0,
        priority: R.Tu.NORMAL,
        duration: q,
        expirationExternallyManaged: !1,
        type: R.kL.GENERIC
    }),
    ei = [],
    er = !1,
    eo = [],
    el = {};
function ea(e, t, n) {
    (null == el[e] && (el[e] = {}), (el[e][t] = n));
}
let es = 30 * N.Z.Millis.MINUTE,
    ec = 2 * N.Z.Millis.MINUTE;
function eu() {
    if (er && null == ei.find((e) => e.status === Y._1z.FOCUSED)) for (let e of ((er = !1), (ei = [...ei, ...eo]), (eo = []), ei.length > 40 && (ei.length = 40), ei)) e.timer.start();
}
function ed() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    ei.filter((e) => e.type === R.kL.TEXT && e.status === Y._1z.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - ee) && ep(t.id, Y._1z.DISMISSED);
        });
}
function ep(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Y._1z.DISMISSED;
    if (null == e) return !1;
    let n = ei.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = ei[n];
    if ((i.timer.stop(), (ei = [...ei]), t === Y._1z.FOCUSED)) {
        let [e] = ei.splice(n, 1);
        ((e = J(X({}, e), { status: t })), ei.unshift(e), (er = !0));
        return;
    }
    (t === Y._1z.DISMISSED ? ei.splice(n, 1) : (ei[n] = J(X({}, i), { status: t })), eu());
}
function ef(e) {
    let t = ei.find((t) => t.type === R.kL.INCOMING_CALL && t.channelId === e);
    return null != t ? t.id : null;
}
function eh(e, t) {
    let n = X(J(X({}, en), { timestamp: Date.now() }), t),
        i = (0, l.Z)(),
        r = !1,
        o = X(
            {
                id: i,
                status: Y._1z.ACTIVE,
                timer: (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = -1;
                    return {
                        start() {
                            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                                o = r ? Y._1z.TIMED_OUT : Y._1z.DISMISSED;
                            -1 === i && (i = setTimeout(() => c.Z.updateNotificationStatus(e, o), null != n ? n : q));
                        },
                        stop() {
                            (clearTimeout(i), (i = -1));
                        }
                    };
                })(i, n.expirationExternallyManaged, n.duration),
                props: J(X({}, e), {
                    onNotificationShow: () => {
                        var t;
                        r || ((r = !0), null == (t = e.onNotificationShow) || t.call(e, i));
                    }
                })
            },
            n
        ),
        a = er ? eo : [...ei],
        s = a.findIndex((e) => e.priority <= n.priority);
    if ((-1 === s ? a.push(o) : a.splice(s, 0, o), a.length > 40)) {
        let e = a.pop();
        er || e.timer.stop();
    }
    return (er || ((ei = a), o.timer.start()), i);
}
function em() {
    if (!(0, T.Yo)('OverlayNotificationStore') || k.Z.isNotificationDisabled(P.OverlayNotificationDisabledSetting.NOW_PLAYING)) return !1;
    let e = b.Z.usersPlaying,
        t = new Set(),
        n = (function () {
            let e = [];
            for (let t in el) e.push(...Object.keys(el[t]).map((e) => e));
            return e;
        })(),
        i = !1;
    for (let [n, r] of Object.entries(e))
        ((i =
            i ||
            (function (e, t) {
                var n, i;
                if (!E.Z.isFriend(e)) return !1;
                let r = t.gameId;
                if (null == r) return !1;
                let o = null == (n = b.Z.getNowPlaying(r)[e]) ? void 0 : n.activity;
                if (
                    null == o ||
                    o.type !== Y.IIU.PLAYING ||
                    !(function (e) {
                        var t;
                        let n = (null == (t = e.timestamps) ? void 0 : t.start) != null ? e.timestamps.start : e.created_at;
                        return null != n && Date.now() - n < ec;
                    })(o)
                )
                    return !1;
                let l = _.Z.getVoiceChannelId(),
                    a = null == (i = j.Z.getDiscoverableVoiceStateForUser(e)) ? void 0 : i.channelId;
                if (null != l && null != a && l === a) return !1;
                let s = (0, L.pL)();
                if (null == s || s.id !== r) return !1;
                if (
                    !(function (e, t) {
                        var n, i;
                        let r = null === (n = null == (i = el[e]) ? void 0 : i[t]) || void 0 === n ? void 0 : n.lastSentTimestamp;
                        return null == r || Date.now() - r > es;
                    })(r, e)
                )
                    return (
                        ea(r, e, {
                            userId: e,
                            gameId: r,
                            lastSentTimestamp: Date.now()
                        }),
                        !1
                    );
                let c = (0, W.Z)(e, r, o);
                return (
                    null != c &&
                        (ea(r, e, {
                            userId: e,
                            gameId: r,
                            lastSentTimestamp: Date.now()
                        }),
                        eh(c, {
                            type: R.kL.GENERIC,
                            priority: R.Tu.NORMAL
                        })),
                    !0
                );
            })(n, r)),
            t.add(n));
    let r = new Set();
    for (let e of n) t.has(e) || r.add(e);
    let o = D.ZP.isOverlayV3EnabledForPID((0, Z.getPID)()) || null != D.ZP.getFocusedPID();
    for (let e of r)
        if (
            !(function (e) {
                let t = v.Z.getActivities(e);
                if (0 === t.length) return !1;
                let n = (0, L.pL)();
                return null != n && null != t.find((e) => e.application_id === n.id);
            })(e) &&
            !o
        ) {
            for (let t in el) {
                let n = el[t][e];
                null != n && (n.lastSentTimestamp = null);
            }
            i = !0;
        }
    return i;
}
function eg(e) {
    let { channelId: t, ringing: n } = e,
        i = ef(t);
    if (!n.includes(m.default.getId())) return ep(i);
    if (null != i) return !1;
    let r = g.Z.getChannel(t);
    if (
        null == r ||
        !r.isRingable() ||
        ('GUILD_RING_START' === e.type &&
            !h.Z.getCurrentConfig({
                guildId: e.guildId,
                location: 'OverlayV3StartRinging'
            }).enabled) ||
        x.Z.getStatus() === Y.Skl.DND ||
        f.QZ.getSetting()
    )
        return !1;
    let o = ei.find((e) => e.type === R.kL.TEXT && e.channelId === t && e.messageType === Y.uaV.CALL);
    (null != o && ep(o.id),
        eh((0, V.Z)(r), {
            priority: R.Tu.HIGH,
            expirationExternallyManaged: !0,
            type: R.kL.INCOMING_CALL,
            channelId: r.id
        }));
}
class ey extends (i = a.ZP.Store) {
    initialize() {
        (this.waitFor(g.Z, I.default, b.Z, k.Z), this.syncWith([b.Z], em));
    }
    getNotifications() {
        return ei;
    }
}
K(ey, 'displayName', 'OverlayNotificationsStore');
let eO = new ey(s.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        ep(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: n } = e;
        ed(0);
        let i = null != (t = D.ZP.getFocusedPID()) ? t : Z.UNSET_PID;
        if (A.default.hasChangedRenderMode(i)) return;
        let r = (0, H.Z)((0, L.pL)(), n);
        null != r &&
            eh(r, {
                priority: R.Tu.URGENT,
                type: R.kL.NUDGE,
                duration: $
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) {
            for (let e of ei) e.status === Y._1z.FOCUSED && ep(e.id, Y._1z.ACTIVE);
            return !0;
        }
        for (let e of (ed(), ei)) e.type === R.kL.NUDGE ? ep(e.id, Y._1z.DISMISSED) : e.status !== Y._1z.ACTIVE || e.expirationExternallyManaged || (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (ei.length > 0) {
            var n;
            return ep(null == (n = ei.filter((e) => e.type === R.kL.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0]) ? void 0 : n.id, Y._1z.FOCUSED);
        }
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i;
        let { channelId: r, message: l } = e,
            a = g.Z.getChannel(r),
            s = I.default.getUser(null == (t = l.author) ? void 0 : t.id);
        if (null == a || null == s) return !1;
        if ([Y.mFx.JOIN, Y.mFx.JOIN_REQUEST, Y.mFx.STREAM_REQUEST].includes(null == (n = l.activity) ? void 0 : n.type)) {
            if (!(0, p.eF)(l, r, !0, !0)) return !1;
            let e = (function (e, t, n) {
                var i;
                let r, l;
                if ((o()(null != t.activity, 'received null message activity'), n.id === m.default.getId())) return !1;
                let a = (0, L.pL)(),
                    s = null != (i = null == a ? void 0 : a.altId) ? i : null == a ? void 0 : a.id;
                if (null == a || null == s) return !1;
                switch (t.activity.type) {
                    case Y.mFx.JOIN:
                        if (null == (r = v.Z.getApplicationActivity(n.id, s)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
                        l = (0, M.Z)(e, t, n, a, r);
                        break;
                    case Y.mFx.JOIN_REQUEST:
                        if (null == (r = x.Z.getApplicationActivity(s)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
                        l = (0, F.Z)(e, n, a, r);
                        break;
                    case Y.mFx.STREAM_REQUEST:
                        if (null == (r = x.Z.getApplicationActivity(s)) || r.application_id !== s) return !1;
                        l = (0, G.Z)(e, n, a, r);
                }
                return (
                    null != l &&
                    (eh(l, {
                        priority: R.Tu.URGENT,
                        expirationExternallyManaged: !0,
                        channelId: e.id,
                        duration: et
                    }),
                    !0)
                );
            })(a, l, s);
            if (!1 !== e) return e;
        }
        if (k.Z.isNotificationDisabled(P.OverlayNotificationDisabledSetting.TEXT_CHAT) || S.Z.disableNotifications || !(0, p.eF)(l, r)) return !1;
        let c = !O.Z.isSoundDisabled(C.Ay),
            u = null != (i = y.Z.getMessage(r, l.id)) ? i : (0, d.e5)(l);
        (eh((0, B.Z)(a, u, s, c), {
            type: R.kL.TEXT,
            channelId: a.id,
            expirationExternallyManaged: !0,
            messageType: l.type
        }),
            ed());
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (
            null != t &&
            (function (e) {
                let t = ei.length,
                    n = (ei = ei.filter((t) => t.type !== R.kL.TEXT || t.channelId !== e)).length !== t;
                return (n && eu(), n);
            })(t)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: eg,
    CALL_UPDATE: eg,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        ep(ef(t));
    },
    GUILD_RING_START: eg,
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (
            !h.Z.getCurrentConfig({
                guildId: n,
                location: 'OverlayV3StopRinging'
            }).enabled
        )
            return !1;
        i.includes(m.default.getId()) && ep(ef(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: r } = e,
            o = (0, L.pL)();
        return (
            null != o &&
            (null == o ? void 0 : o.id) != null &&
            (o.id === r || o.altId === r) &&
            (n === Y.mFx.JOIN && (t = (0, z.Z)(i, o)),
            null != t &&
                void eh(t, {
                    priority: R.Tu.URGENT,
                    type: R.kL.GENERIC
                }))
        );
    },
    CLIPS_SAVE_CLIP_START: function () {
        eh((0, U.f)(Q.intl.string(Q.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        eh((0, U.f)(Q.intl.format(Q.t.KLhk6u, { duration: (0, w.A)(u.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        eh((0, U.f)(Q.intl.string(Q.t['1ZbZur'])));
    },
    STREAM_START: function (e) {
        let t = (0, U.y)();
        null != t && eh(t);
    }
});
