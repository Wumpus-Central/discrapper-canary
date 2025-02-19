n.d(t, { Z: () => eo }), n(47120), n(230036), n(733860), n(653041);
var i,
    r = n(512722),
    o = n.n(r),
    l = n(772848),
    a = n(442837),
    s = n(570140),
    c = n(13245),
    u = n(435064),
    d = n(786761),
    p = n(695346),
    f = n(163612),
    h = n(314897),
    g = n(592125),
    _ = n(375954),
    m = n(292959),
    v = n(158776),
    O = n(885110),
    b = n(246946),
    y = n(594174),
    E = n(974180),
    x = n(237997),
    S = n(70956),
    C = n(150097),
    I = n(129724),
    j = n(145597),
    w = n(371651),
    Z = n(610394),
    N = n(388627),
    P = n(996050),
    T = n(609626),
    k = n(421824),
    A = n(777036),
    D = n(333727),
    R = n(585708),
    L = n(588909),
    W = n(981631),
    M = n(388032);
function z(e, t, n) {
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
function V(e) {
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
                z(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
let F = 5 * S.Z.Millis.SECOND,
    B = 8 * S.Z.Millis.SECOND,
    G = 30 * S.Z.Millis.SECOND,
    H = 30 * S.Z.Millis.SECOND,
    Y = Object.freeze({
        timestamp: 0,
        priority: 0,
        duration: F,
        expirationExternallyManaged: !1,
        type: 0
    }),
    Q = [],
    K = !1,
    X = [];
function J() {
    if (K && null == Q.find((e) => e.status === W._1z.FOCUSED)) for (let e of ((K = !1), (Q = [...Q, ...X]), (X = []), Q.length > 40 && (Q.length = 40), Q)) e.timer.start();
}
function q() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    Q.filter((e) => 1 === e.type && e.status === W._1z.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - G) && $(t.id, W._1z.DISMISSED);
        });
}
function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W._1z.DISMISSED;
    if (null == e) return !1;
    let n = Q.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = Q[n];
    if ((i.timer.stop(), (Q = [...Q]), t === W._1z.FOCUSED)) {
        let [e] = Q.splice(n, 1);
        (e = U(V({}, e), { status: t })), Q.unshift(e), (K = !0);
        return;
    }
    t === W._1z.DISMISSED ? Q.splice(n, 1) : (Q[n] = U(V({}, i), { status: t })), J();
}
function ee(e) {
    let t = Q.length,
        n = (Q = Q.filter((t) => 1 !== t.type || t.channelId !== e)).length !== t;
    return n && J(), n;
}
function et(e) {
    let t = Q.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function en(e, t) {
    let n = V(U(V({}, Y), { timestamp: Date.now() }), t),
        i = (0, l.Z)(),
        r = !1,
        o = V(
            {
                id: i,
                status: W._1z.ACTIVE,
                timer: (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = -1;
                    return {
                        start() {
                            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                                o = r ? W._1z.TIMED_OUT : W._1z.DISMISSED;
                            -1 === i && (i = setTimeout(() => c.Z.updateNotificationStatus(e, o), null != n ? n : F));
                        },
                        stop() {
                            clearTimeout(i), (i = -1);
                        }
                    };
                })(i, n.expirationExternallyManaged, n.duration),
                props: U(V({}, e), {
                    onNotificationShow: () => {
                        var t;
                        r || ((r = !0), null === (t = e.onNotificationShow) || void 0 === t || t.call(e, i));
                    }
                })
            },
            n
        ),
        a = K ? X : [...Q],
        s = a.findIndex((e) => e.priority <= n.priority);
    if ((-1 === s ? a.push(o) : a.splice(s, 0, o), a.length > 40)) {
        let e = a.pop();
        K || e.timer.stop();
    }
    return K || ((Q = a), o.timer.start()), i;
}
function ei(e) {
    let { channelId: t, ringing: n } = e,
        i = et(t);
    if (!n.includes(h.default.getId())) return $(i);
    if (null != i) return !1;
    let r = g.Z.getChannel(t);
    if (
        null == r ||
        !r.isRingable() ||
        ('GUILD_RING_START' === e.type &&
            !f.Z.getCurrentConfig({
                guildId: e.guildId,
                location: 'OverlayV3StartRinging'
            }).enabled) ||
        O.Z.getStatus() === W.Skl.DND ||
        p.QZ.getSetting()
    )
        return !1;
    let o = Q.find((e) => 1 === e.type && e.channelId === t && e.messageType === W.uaV.CALL);
    null != o && $(o.id),
        en((0, A.Z)(r), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: r.id
        });
}
class er extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, y.default);
    }
    getNotifications() {
        return Q;
    }
}
z(er, 'displayName', 'OverlayNotificationsStore');
let eo = new er(s.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        $(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: n } = e;
        q(0);
        let i = null !== (t = Z.ZP.getFocusedPID()) && void 0 !== t ? t : j.R2;
        if (w.default.hasChangedRenderMode(i)) return;
        let r = (0, L.Z)((0, N.pL)(), n);
        null != r &&
            en(r, {
                priority: 2,
                type: 3,
                duration: B
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) {
            for (let e of Q) e.status === W._1z.FOCUSED && $(e.id, W._1z.ACTIVE);
            return !0;
        }
        for (let e of (q(), Q)) 3 === e.type ? $(e.id, W._1z.DISMISSED) : e.status !== W._1z.ACTIVE || e.expirationExternallyManaged || (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (Q.length > 0) {
            var n;
            return $(null === (n = Q.filter((e) => 1 === e.type).sort((e, t) => t.timestamp - e.timestamp)[0]) || void 0 === n ? void 0 : n.id, W._1z.FOCUSED);
        }
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i, r;
        let { channelId: l, message: a } = e,
            s = g.Z.getChannel(l),
            c = y.default.getUser(null === (t = a.author) || void 0 === t ? void 0 : t.id);
        if (null == s || null == c) return !1;
        if ((null === (n = a.activity) || void 0 === n ? void 0 : n.type) === W.mFx.JOIN || (null === (i = a.activity) || void 0 === i ? void 0 : i.type) === W.mFx.JOIN_REQUEST) {
            if (!(0, C.eF)(a, l, !0, !0)) return !1;
            let e = (function (e, t, n) {
                var i;
                let r, l;
                if ((o()(null != t.activity, 'received null message activity'), n.id === h.default.getId())) return !1;
                let a = (0, N.pL)(),
                    s = null !== (i = null == a ? void 0 : a.altId) && void 0 !== i ? i : null == a ? void 0 : a.id;
                if (null == a || null == s) return !1;
                switch (t.activity.type) {
                    case W.mFx.JOIN:
                        if (null == (r = v.Z.getApplicationActivity(n.id, s)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
                        l = (0, P.Z)(e, t, n, a, r);
                        break;
                    case W.mFx.JOIN_REQUEST:
                        if (null == (r = O.Z.getApplicationActivity(s)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
                        l = (0, D.Z)(e, n, a, r);
                }
                return (
                    null != l &&
                    (en(l, {
                        priority: 2,
                        expirationExternallyManaged: !0,
                        channelId: e.id,
                        duration: H
                    }),
                    !0)
                );
            })(s, a, c);
            if (!1 !== e) return e;
        }
        if (x.Z.getTextChatNotificationMode() === W.Ypu.DISABLED || b.Z.disableNotifications || !(0, C.eF)(a, l)) return !1;
        let u = !m.Z.isSoundDisabled(E.Ay),
            p = null !== (r = _.Z.getMessage(l, a.id)) && void 0 !== r ? r : (0, d.e5)(a);
        en((0, R.Z)(s, p, c, u), {
            type: 1,
            channelId: s.id,
            expirationExternallyManaged: !0,
            messageType: a.type
        }),
            q();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null != t && ee(t);
    },
    MESSAGE_ACK: function (e) {
        let { channelId: t } = e;
        return ee(t);
    },
    CALL_CREATE: ei,
    CALL_UPDATE: ei,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        $(et(t));
    },
    GUILD_RING_START: ei,
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (
            !f.Z.getCurrentConfig({
                guildId: n,
                location: 'OverlayV3StopRinging'
            }).enabled
        )
            return !1;
        i.includes(h.default.getId()) && $(et(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: r } = e,
            o = (0, N.pL)();
        return (
            null != o &&
            (null == o ? void 0 : o.id) != null &&
            (o.id === r || o.altId === r) &&
            (n === W.mFx.JOIN && (t = (0, T.Z)(i, o)),
            null != t &&
                void en(t, {
                    priority: 2,
                    type: 0
                }))
        );
    },
    CLIPS_SAVE_CLIP_START: function () {
        en((0, k.f)(M.NW.string(M.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        en((0, k.f)(M.NW.format(M.t.KLhk6u, { duration: (0, I.A)(u.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        en((0, k.f)(M.NW.string(M.t['1ZbZur'])));
    },
    STREAM_START: function (e) {
        let t = (0, k.y)();
        null != t && en(t);
    }
});
