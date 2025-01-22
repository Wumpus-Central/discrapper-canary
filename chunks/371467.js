i(47120), i(733860), i(653041);
var n,
    l,
    o,
    s,
    r,
    a,
    u,
    d,
    c = i(512722),
    h = i.n(c),
    f = i(772848),
    p = i(442837),
    E = i(570140),
    m = i(13245),
    v = i(435064),
    g = i(786761),
    S = i(695346),
    _ = i(314897),
    C = i(592125),
    Z = i(375954),
    O = i(292959),
    I = i(158776),
    N = i(885110),
    y = i(246946),
    x = i(594174),
    b = i(974180),
    T = i(237997),
    R = i(70956),
    k = i(150097),
    A = i(129724),
    z = i(145597),
    M = i(371651),
    L = i(610394),
    w = i(388627),
    D = i(996050),
    j = i(609626),
    P = i(421824),
    U = i(777036),
    H = i(333727),
    V = i(585708),
    W = i(588909),
    F = i(981631),
    Y = i(388032);
((s = n || (n = {}))[(s.GENERIC = 0)] = 'GENERIC'), (s[(s.TEXT = 1)] = 'TEXT'), (s[(s.INCOMING_CALL = 2)] = 'INCOMING_CALL'), (s[(s.NUDGE = 3)] = 'NUDGE'), ((r = l || (l = {}))[(r.NORMAL = 0)] = 'NORMAL'), (r[(r.HIGH = 1)] = 'HIGH'), (r[(r.URGENT = 2)] = 'URGENT');
let B = 5 * R.Z.Millis.SECOND,
    G = 8 * R.Z.Millis.SECOND,
    K = 30 * R.Z.Millis.SECOND,
    Q = 30 * R.Z.Millis.SECOND,
    J = Object.freeze({
        timestamp: 0,
        priority: 0,
        duration: B,
        expirationExternallyManaged: !1,
        type: 0
    }),
    X = [],
    q = !1,
    $ = [];
function ee() {
    if (q && null == X.find((e) => e.status === F._1z.FOCUSED)) for (let e of ((q = !1), (X = [...X, ...$]), ($ = []), X.length > 40 && (X.length = 40), X)) e.timer.start();
}
function et() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    X.filter((e) => 1 === e.type && e.status === F._1z.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, i) => {
            (i >= e || t.timestamp < Date.now() - K) && ei(t.id, F._1z.DISMISSED);
        });
}
function ei(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F._1z.DISMISSED;
    if (null == e) return !1;
    let i = X.findIndex((t) => t.id === e);
    if (-1 === i) return !1;
    let n = X[i];
    if ((n.timer.stop(), (X = [...X]), t === F._1z.FOCUSED)) {
        let [e] = X.splice(i, 1);
        (e = {
            ...e,
            status: t
        }),
            X.unshift(e),
            (q = !0);
        return;
    }
    t === F._1z.DISMISSED
        ? X.splice(i, 1)
        : (X[i] = {
              ...n,
              status: t
          }),
        ee();
}
function en(e) {
    let t = X.length,
        i = (X = X.filter((t) => 1 !== t.type || t.channelId !== e || !1)).length !== t;
    return i && ee(), i;
}
function el(e) {
    let t = X.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function eo(e, t) {
    let i = {
            ...J,
            timestamp: Date.now(),
            ...t
        },
        n = (0, f.Z)(),
        l = !1,
        o = {
            id: n,
            status: F._1z.ACTIVE,
            timer: (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    n = -1;
                return {
                    start() {
                        let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                            o = l ? F._1z.TIMED_OUT : F._1z.DISMISSED;
                        -1 === n && (n = setTimeout(() => m.Z.updateNotificationStatus(e, o), null != i ? i : B));
                    },
                    stop() {
                        clearTimeout(n), (n = -1);
                    }
                };
            })(n, i.expirationExternallyManaged, i.duration),
            props: {
                ...e,
                onNotificationShow: () => {
                    var t;
                    !l && ((l = !0), null === (t = e.onNotificationShow) || void 0 === t || t.call(e, n));
                }
            },
            ...i
        },
        s = q ? $ : [...X],
        r = s.findIndex((e) => e.priority <= i.priority);
    if ((-1 === r ? s.push(o) : s.splice(r, 0, o), s.length > 40)) {
        let e = s.pop();
        !q && e.timer.stop();
    }
    return !q && ((X = s), o.timer.start()), n;
}
function es(e) {
    let { channelId: t, ringing: i } = e,
        n = el(t);
    if (!i.includes(_.default.getId())) return ei(n);
    if (null != n) return !1;
    let l = C.Z.getChannel(t);
    if (null == l || !l.isPrivate() || N.Z.getStatus() === F.Skl.DND || S.QZ.getSetting()) return !1;
    let o = X.find((e) => 1 === e.type && e.channelId === t && e.messageType === F.uaV.CALL);
    null != o && ei(o.id),
        eo((0, U.Z)(l), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: l.id
        });
}
class er extends (o = p.ZP.Store) {
    initialize() {
        this.waitFor(C.Z, x.default);
    }
    getNotifications() {
        return X;
    }
}
(d = 'OverlayNotificationsStore'),
    (u = 'displayName') in (a = er)
        ? Object.defineProperty(a, u, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[u] = d);
let ea = new er(E.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: i } = e;
        ei(t, i);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: i } = e;
        et(0);
        let n = null !== (t = L.ZP.getFocusedPID()) && void 0 !== t ? t : z.R2;
        if (M.Z.hasChangedRenderMode(n)) return;
        let l = (0, W.Z)((0, w.pL)(), i);
        null != l &&
            eo(l, {
                priority: 2,
                type: 3,
                duration: G
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) {
            for (let e of X) e.status === F._1z.FOCUSED && ei(e.id, F._1z.ACTIVE);
            return !0;
        }
        for (let e of (et(), X)) 3 === e.type ? ei(e.id, F._1z.DISMISSED) : e.status === F._1z.ACTIVE && !e.expirationExternallyManaged && (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (X.length > 0) {
            var i;
            return ei(null === (i = X.filter((e) => 1 === e.type).sort((e, t) => t.timestamp - e.timestamp)[0]) || void 0 === i ? void 0 : i.id, F._1z.FOCUSED);
        }
    },
    MESSAGE_CREATE: function (e) {
        var t, i, n, l;
        let { channelId: o, message: s } = e,
            r = C.Z.getChannel(o),
            a = x.default.getUser(null === (t = s.author) || void 0 === t ? void 0 : t.id);
        if (null == r || null == a) return !1;
        if ((null === (i = s.activity) || void 0 === i ? void 0 : i.type) === F.mFx.JOIN || (null === (n = s.activity) || void 0 === n ? void 0 : n.type) === F.mFx.JOIN_REQUEST) {
            if (!(0, k.eF)(s, o, !0, !0)) return !1;
            let e = (function (e, t, i) {
                var n;
                let l, o;
                if ((h()(null != t.activity, 'received null message activity'), i.id === _.default.getId())) return !1;
                let s = (0, w.pL)(),
                    r = null !== (n = null == s ? void 0 : s.altId) && void 0 !== n ? n : null == s ? void 0 : s.id;
                if (null == s || null == r) return !1;
                switch (t.activity.type) {
                    case F.mFx.JOIN:
                        if (null == (l = I.Z.getApplicationActivity(i.id, r)) || null == l.party || l.party.id !== t.activity.party_id) return !1;
                        o = (0, D.Z)(e, t, i, s, l);
                        break;
                    case F.mFx.JOIN_REQUEST:
                        if (null == (l = N.Z.getApplicationActivity(r)) || null == l.party || l.party.id !== t.activity.party_id) return !1;
                        o = (0, H.Z)(e, i, s, l);
                }
                return (
                    null != o &&
                    (eo(o, {
                        priority: 2,
                        expirationExternallyManaged: !0,
                        channelId: e.id,
                        duration: Q
                    }),
                    !0)
                );
            })(r, s, a);
            if (!1 !== e) return e;
        }
        if (T.Z.getTextChatNotificationMode() === F.Ypu.DISABLED || y.Z.disableNotifications || !(0, k.eF)(s, o)) return !1;
        let u = !O.Z.isSoundDisabled(b.Ay),
            d = null !== (l = Z.Z.getMessage(o, s.id)) && void 0 !== l ? l : (0, g.e5)(s);
        eo((0, V.Z)(r, d, a, u), {
            type: 1,
            channelId: r.id,
            expirationExternallyManaged: !0,
            messageType: s.type
        }),
            et();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null != t && en(t);
    },
    MESSAGE_ACK: function (e) {
        let { channelId: t } = e;
        return en(t);
    },
    CALL_CREATE: es,
    CALL_UPDATE: es,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        ei(el(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: i, user: n, applicationId: l } = e,
            o = (0, w.pL)();
        if (null == o || (null == o ? void 0 : o.id) == null || (o.id !== l && o.altId !== l)) return !1;
        if (i === F.mFx.JOIN) t = (0, j.Z)(n, o);
        if (null == t) return !1;
        eo(t, {
            priority: 2,
            type: 0
        });
    },
    CLIPS_SAVE_CLIP_START: function () {
        eo((0, P.f)(Y.intl.string(Y.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        eo((0, P.f)(Y.intl.format(Y.t.KLhk6u, { duration: (0, A.A)(v.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        eo((0, P.f)(Y.intl.string(Y.t['1ZbZur'])));
    },
    STREAM_START: function (e) {
        let t = (0, P.y)();
        null != t && eo(t);
    }
});
t.Z = ea;
