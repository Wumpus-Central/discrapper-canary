n.d(t, { Z: () => eO }), n(653041), n(47120), n(230036), n(733860);
var i,
    r = n(512722),
    l = n.n(r),
    o = n(772848),
    a = n(442837),
    s = n(570140),
    c = n(13245),
    u = n(435064),
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
    N = n(974180),
    C = n(70956),
    Z = n(150097),
    w = n(129724),
    P = n(145597),
    _ = n(486016),
    T = n(32300),
    D = n(371651),
    k = n(624864),
    A = n(610394),
    L = n(340101),
    R = n(388627),
    M = n(996050),
    W = n(609626),
    V = n(421824),
    z = n(777036),
    U = n(955978),
    G = n(333727),
    F = n(585708),
    Y = n(588909),
    H = n(981631),
    B = n(388032);
function Q(e, t, n) {
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
function K(e) {
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
                Q(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
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
let J = 5 * C.Z.Millis.SECOND,
    q = 8 * C.Z.Millis.SECOND,
    $ = 30 * C.Z.Millis.SECOND,
    ee = 30 * C.Z.Millis.SECOND,
    et = Object.freeze({
        timestamp: 0,
        priority: L.Tu.NORMAL,
        duration: J,
        expirationExternallyManaged: !1,
        type: L.kL.GENERIC
    }),
    en = [],
    ei = !1,
    er = [],
    el = {};
function eo(e, t, n) {
    null == el[e] && (el[e] = {}), (el[e][t] = n);
}
let ea = 30 * C.Z.Millis.MINUTE,
    es = 2 * C.Z.Millis.MINUTE;
function ec() {
    if (ei && null == en.find((e) => e.status === H._1z.FOCUSED)) for (let e of ((ei = !1), (en = [...en, ...er]), (er = []), en.length > 40 && (en.length = 40), en)) e.timer.start();
}
function eu() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    en.filter((e) => e.type === L.kL.TEXT && e.status === H._1z.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - $) && ed(t.id, H._1z.DISMISSED);
        });
}
function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H._1z.DISMISSED;
    if (null == e) return !1;
    let n = en.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = en[n];
    if ((i.timer.stop(), (en = [...en]), t === H._1z.FOCUSED)) {
        let [e] = en.splice(n, 1);
        (e = X(K({}, e), { status: t })), en.unshift(e), (ei = !0);
        return;
    }
    t === H._1z.DISMISSED ? en.splice(n, 1) : (en[n] = X(K({}, i), { status: t })), ec();
}
function ep(e) {
    let t = en.find((t) => t.type === L.kL.INCOMING_CALL && t.channelId === e);
    return null != t ? t.id : null;
}
function eh(e, t) {
    let n = K(X(K({}, et), { timestamp: Date.now() }), t),
        i = (0, o.Z)(),
        r = !1,
        l = K(
            {
                id: i,
                status: H._1z.ACTIVE,
                timer: (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = -1;
                    return {
                        start() {
                            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                                l = r ? H._1z.TIMED_OUT : H._1z.DISMISSED;
                            -1 === i && (i = setTimeout(() => c.Z.updateNotificationStatus(e, l), null != n ? n : J));
                        },
                        stop() {
                            clearTimeout(i), (i = -1);
                        }
                    };
                })(i, n.expirationExternallyManaged, n.duration),
                props: X(K({}, e), {
                    onNotificationShow: () => {
                        var t;
                        r || ((r = !0), null === (t = e.onNotificationShow) || void 0 === t || t.call(e, i));
                    }
                })
            },
            n
        ),
        a = ei ? er : [...en],
        s = a.findIndex((e) => e.priority <= n.priority);
    if ((-1 === s ? a.push(l) : a.splice(s, 0, l), a.length > 40)) {
        let e = a.pop();
        ei || e.timer.stop();
    }
    return ei || ((en = a), l.timer.start()), i;
}
function ef() {
    if (!(0, T.Yo)('OverlayNotificationStore') || k.Z.isNotificationDisabled(_.OverlayNotificationDisabledSetting.NOW_PLAYING)) return !1;
    let e = v.Z.usersPlaying,
        t = new Set(),
        n = (function () {
            let e = [];
            for (let t in el) e.push(...Object.keys(el[t]).map((e) => e));
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
                if (
                    null == l ||
                    l.type !== H.IIU.PLAYING ||
                    !(function (e) {
                        var t;
                        let n = (null === (t = e.timestamps) || void 0 === t ? void 0 : t.start) != null ? e.timestamps.start : e.created_at;
                        return null != n && Date.now() - n < es;
                    })(l)
                )
                    return !1;
                let o = b.Z.getVoiceChannelId(),
                    a = null === (i = S.Z.getDiscoverableVoiceStateForUser(e)) || void 0 === i ? void 0 : i.channelId;
                if (null != o && null != a && o === a) return !1;
                let s = (0, R.pL)();
                return (
                    null != s &&
                    s.id === r &&
                    (!(function (e, t) {
                        var n, i;
                        let r = null === (n = null === (i = el[e]) || void 0 === i ? void 0 : i[t]) || void 0 === n ? void 0 : n.lastSentTimestamp;
                        return null == r || Date.now() - r > ea;
                    })(r, e)
                        ? (eo(r, e, {
                              userId: e,
                              gameId: r,
                              lastSentTimestamp: Date.now()
                          }),
                          !1)
                        : ((function (e, t, n) {
                              let i = (0, U.Z)(t, e, n);
                              null != i &&
                                  (eo(e, t, {
                                      userId: t,
                                      gameId: e,
                                      lastSentTimestamp: Date.now()
                                  }),
                                  eh(i, {
                                      type: L.kL.GENERIC,
                                      priority: L.Tu.NORMAL
                                  }));
                          })(r, e, l),
                          !0))
                );
            })(n, r)),
            t.add(n);
    let r = new Set();
    for (let e of n) t.has(e) || r.add(e);
    let l = A.ZP.isOverlayV3EnabledForPID((0, P.getPID)()) || null != A.ZP.getFocusedPID();
    for (let e of r)
        (function (e) {
            let t = y.Z.getActivities(e);
            if (0 === t.length) return !1;
            let n = (0, R.pL)();
            return null != n && null != t.find((e) => e.application_id === n.id);
        })(e) ||
            l ||
            (!(function (e) {
                for (let t in el) {
                    let n = el[t][e];
                    null != n && (n.lastSentTimestamp = null);
                }
            })(e),
            (i = !0));
    return i;
}
function em(e) {
    let { channelId: t, ringing: n } = e,
        i = ep(t);
    if (!n.includes(f.default.getId())) return ed(i);
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
        j.Z.getStatus() === H.Skl.DND ||
        p.QZ.getSetting()
    )
        return !1;
    let l = en.find((e) => e.type === L.kL.TEXT && e.channelId === t && e.messageType === H.uaV.CALL);
    null != l && ed(l.id),
        eh((0, z.Z)(r), {
            priority: L.Tu.HIGH,
            expirationExternallyManaged: !0,
            type: L.kL.INCOMING_CALL,
            channelId: r.id
        });
}
class eg extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, I.default, v.Z, k.Z), this.syncWith([v.Z], ef);
    }
    getNotifications() {
        return en;
    }
}
Q(eg, 'displayName', 'OverlayNotificationsStore');
let eO = new eg(s.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        ed(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: n } = e;
        eu(0);
        let i = null !== (t = A.ZP.getFocusedPID()) && void 0 !== t ? t : P.UNSET_PID;
        if (D.default.hasChangedRenderMode(i)) return;
        let r = (0, Y.Z)((0, R.pL)(), n);
        null != r &&
            eh(r, {
                priority: L.Tu.URGENT,
                type: L.kL.NUDGE,
                duration: q
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) {
            for (let e of en) e.status === H._1z.FOCUSED && ed(e.id, H._1z.ACTIVE);
            return !0;
        }
        for (let e of (eu(), en)) e.type === L.kL.NUDGE ? ed(e.id, H._1z.DISMISSED) : e.status !== H._1z.ACTIVE || e.expirationExternallyManaged || (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (en.length > 0) {
            var n;
            return ed(null === (n = en.filter((e) => e.type === L.kL.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0]) || void 0 === n ? void 0 : n.id, H._1z.FOCUSED);
        }
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i, r;
        let { channelId: o, message: a } = e,
            s = m.Z.getChannel(o),
            c = I.default.getUser(null === (t = a.author) || void 0 === t ? void 0 : t.id);
        if (null == s || null == c) return !1;
        if ((null === (n = a.activity) || void 0 === n ? void 0 : n.type) === H.mFx.JOIN || (null === (i = a.activity) || void 0 === i ? void 0 : i.type) === H.mFx.JOIN_REQUEST) {
            if (!(0, Z.eF)(a, o, !0, !0)) return !1;
            let e = (function (e, t, n) {
                var i;
                let r, o;
                if ((l()(null != t.activity, 'received null message activity'), n.id === f.default.getId())) return !1;
                let a = (0, R.pL)(),
                    s = null !== (i = null == a ? void 0 : a.altId) && void 0 !== i ? i : null == a ? void 0 : a.id;
                if (null == a || null == s) return !1;
                switch (t.activity.type) {
                    case H.mFx.JOIN:
                        if (null == (r = y.Z.getApplicationActivity(n.id, s)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
                        o = (0, M.Z)(e, t, n, a, r);
                        break;
                    case H.mFx.JOIN_REQUEST:
                        if (null == (r = j.Z.getApplicationActivity(s)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
                        o = (0, G.Z)(e, n, a, r);
                }
                return (
                    null != o &&
                    (eh(o, {
                        priority: L.Tu.URGENT,
                        expirationExternallyManaged: !0,
                        channelId: e.id,
                        duration: ee
                    }),
                    !0)
                );
            })(s, a, c);
            if (!1 !== e) return e;
        }
        if (k.Z.isNotificationDisabled(_.OverlayNotificationDisabledSetting.TEXT_CHAT) || x.Z.disableNotifications || !(0, Z.eF)(a, o)) return !1;
        let u = !O.Z.isSoundDisabled(N.Ay),
            p = null !== (r = g.Z.getMessage(o, a.id)) && void 0 !== r ? r : (0, d.e5)(a);
        eh((0, F.Z)(s, p, c, u), {
            type: L.kL.TEXT,
            channelId: s.id,
            expirationExternallyManaged: !0,
            messageType: a.type
        }),
            eu();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (
            null != t &&
            (function (e) {
                let t = en.length,
                    n = (en = en.filter((t) => t.type !== L.kL.TEXT || t.channelId !== e)).length !== t;
                return n && ec(), n;
            })(t)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: em,
    CALL_UPDATE: em,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        ed(ep(t));
    },
    GUILD_RING_START: em,
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (
            !h.Z.getCurrentConfig({
                guildId: n,
                location: 'OverlayV3StopRinging'
            }).enabled
        )
            return !1;
        i.includes(f.default.getId()) && ed(ep(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: r } = e,
            l = (0, R.pL)();
        return (
            null != l &&
            (null == l ? void 0 : l.id) != null &&
            (l.id === r || l.altId === r) &&
            (n === H.mFx.JOIN && (t = (0, W.Z)(i, l)),
            null != t &&
                void eh(t, {
                    priority: L.Tu.URGENT,
                    type: L.kL.GENERIC
                }))
        );
    },
    CLIPS_SAVE_CLIP_START: function () {
        eh((0, V.f)(B.NW.string(B.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        eh((0, V.f)(B.NW.format(B.t.KLhk6u, { duration: (0, w.A)(u.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        eh((0, V.f)(B.NW.string(B.t['1ZbZur'])));
    },
    STREAM_START: function (e) {
        let t = (0, V.y)();
        null != t && eh(t);
    }
});
