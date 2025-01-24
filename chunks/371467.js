i(47120), i(733860), i(653041);
var n,
    l,
    o,
    r,
    s,
    a,
    u,
    d,
    c = i(512722),
    h = i.n(c),
    E = i(772848),
    p = i(442837),
    f = i(570140),
    S = i(13245),
    _ = i(435064),
    g = i(786761),
    m = i(695346),
    v = i(314897),
    I = i(592125),
    Z = i(375954),
    O = i(292959),
    C = i(158776),
    N = i(885110),
    y = i(246946),
    T = i(594174),
    R = i(974180),
    x = i(237997),
    A = i(70956),
    M = i(150097),
    D = i(129724),
    L = i(145597),
    w = i(371651),
    z = i(610394),
    k = i(388627),
    b = i(996050),
    P = i(609626),
    U = i(421824),
    j = i(777036),
    H = i(333727),
    V = i(585708),
    W = i(588909),
    F = i(981631),
    Y = i(388032);
((r = n || (n = {}))[(r.GENERIC = 0)] = 'GENERIC'), (r[(r.TEXT = 1)] = 'TEXT'), (r[(r.INCOMING_CALL = 2)] = 'INCOMING_CALL'), (r[(r.NUDGE = 3)] = 'NUDGE'), ((s = l || (l = {}))[(s.NORMAL = 0)] = 'NORMAL'), (s[(s.HIGH = 1)] = 'HIGH'), (s[(s.URGENT = 2)] = 'URGENT');
let G = 5 * A.Z.Millis.SECOND,
    B = 8 * A.Z.Millis.SECOND,
    Q = 30 * A.Z.Millis.SECOND,
    K = 30 * A.Z.Millis.SECOND,
    J = Object.freeze({
        timestamp: 0,
        priority: 0,
        duration: G,
        expirationExternallyManaged: !1,
        type: 0
    }),
    X = [],
    q = !1,
    $ = [];
function tt() {
    if (q && null == X.find((t) => t.status === F._1z.FOCUSED)) for (let t of ((q = !1), (X = [...X, ...$]), ($ = []), X.length > 40 && (X.length = 40), X)) t.timer.start();
}
function te() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    X.filter((t) => 1 === t.type && t.status === F._1z.TIMED_OUT)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e, i) => {
            (i >= t || e.timestamp < Date.now() - Q) && ti(e.id, F._1z.DISMISSED);
        });
}
function ti(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F._1z.DISMISSED;
    if (null == t) return !1;
    let i = X.findIndex((e) => e.id === t);
    if (-1 === i) return !1;
    let n = X[i];
    if ((n.timer.stop(), (X = [...X]), e === F._1z.FOCUSED)) {
        let [t] = X.splice(i, 1);
        (t = {
            ...t,
            status: e
        }),
            X.unshift(t),
            (q = !0);
        return;
    }
    e === F._1z.DISMISSED
        ? X.splice(i, 1)
        : (X[i] = {
              ...n,
              status: e
          }),
        tt();
}
function tn(t) {
    let e = X.length,
        i = (X = X.filter((e) => 1 !== e.type || e.channelId !== t || !1)).length !== e;
    return i && tt(), i;
}
function tl(t) {
    let e = X.find((e) => 2 === e.type && e.channelId === t);
    return null != e ? e.id : null;
}
function to(t, e) {
    let i = {
            ...J,
            timestamp: Date.now(),
            ...e
        },
        n = (0, E.Z)(),
        l = !1,
        o = {
            id: n,
            status: F._1z.ACTIVE,
            timer: (function (t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    n = -1;
                return {
                    start() {
                        let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
                            o = l ? F._1z.TIMED_OUT : F._1z.DISMISSED;
                        -1 === n && (n = setTimeout(() => S.Z.updateNotificationStatus(t, o), null != i ? i : G));
                    },
                    stop() {
                        clearTimeout(n), (n = -1);
                    }
                };
            })(n, i.expirationExternallyManaged, i.duration),
            props: {
                ...t,
                onNotificationShow: () => {
                    var e;
                    !l && ((l = !0), null === (e = t.onNotificationShow) || void 0 === e || e.call(t, n));
                }
            },
            ...i
        },
        r = q ? $ : [...X],
        s = r.findIndex((t) => t.priority <= i.priority);
    if ((-1 === s ? r.push(o) : r.splice(s, 0, o), r.length > 40)) {
        let t = r.pop();
        !q && t.timer.stop();
    }
    return !q && ((X = r), o.timer.start()), n;
}
function tr(t) {
    let { channelId: e, ringing: i } = t,
        n = tl(e);
    if (!i.includes(v.default.getId())) return ti(n);
    if (null != n) return !1;
    let l = I.Z.getChannel(e);
    if (null == l || !l.isPrivate() || N.Z.getStatus() === F.Skl.DND || m.QZ.getSetting()) return !1;
    let o = X.find((t) => 1 === t.type && t.channelId === e && t.messageType === F.uaV.CALL);
    null != o && ti(o.id),
        to((0, j.Z)(l), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: l.id
        });
}
class ts extends (o = p.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, T.default);
    }
    getNotifications() {
        return X;
    }
}
(d = 'OverlayNotificationsStore'),
    (u = 'displayName') in (a = ts)
        ? Object.defineProperty(a, u, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[u] = d);
let ta = new ts(f.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (t) {
        let { notificationId: e, status: i } = t;
        ti(e, i);
    },
    OVERLAY_MOUNTED: function (t) {
        var e;
        let { nudges: i } = t;
        te(0);
        let n = null !== (e = z.ZP.getFocusedPID()) && void 0 !== e ? e : L.R2;
        if (w.Z.hasChangedRenderMode(n)) return;
        let l = (0, W.Z)((0, k.pL)(), i);
        null != l &&
            to(l, {
                priority: 2,
                type: 3,
                duration: B
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (t) {
        let { locked: e } = t;
        if (e) {
            for (let t of X) t.status === F._1z.FOCUSED && ti(t.id, F._1z.ACTIVE);
            return !0;
        }
        for (let t of (te(), X)) 3 === t.type ? ti(t.id, F._1z.DISMISSED) : t.status === F._1z.ACTIVE && !t.expirationExternallyManaged && (t.timer.stop(), t.timer.start(t.expirationExternallyManaged));
        if (X.length > 0) {
            var i;
            return ti(null === (i = X.filter((t) => 1 === t.type).sort((t, e) => e.timestamp - t.timestamp)[0]) || void 0 === i ? void 0 : i.id, F._1z.FOCUSED);
        }
    },
    MESSAGE_CREATE: function (t) {
        var e, i, n, l;
        let { channelId: o, message: r } = t,
            s = I.Z.getChannel(o),
            a = T.default.getUser(null === (e = r.author) || void 0 === e ? void 0 : e.id);
        if (null == s || null == a) return !1;
        if ((null === (i = r.activity) || void 0 === i ? void 0 : i.type) === F.mFx.JOIN || (null === (n = r.activity) || void 0 === n ? void 0 : n.type) === F.mFx.JOIN_REQUEST) {
            if (!(0, M.eF)(r, o, !0, !0)) return !1;
            let t = (function (t, e, i) {
                var n;
                let l, o;
                if ((h()(null != e.activity, 'received null message activity'), i.id === v.default.getId())) return !1;
                let r = (0, k.pL)(),
                    s = null !== (n = null == r ? void 0 : r.altId) && void 0 !== n ? n : null == r ? void 0 : r.id;
                if (null == r || null == s) return !1;
                switch (e.activity.type) {
                    case F.mFx.JOIN:
                        if (null == (l = C.Z.getApplicationActivity(i.id, s)) || null == l.party || l.party.id !== e.activity.party_id) return !1;
                        o = (0, b.Z)(t, e, i, r, l);
                        break;
                    case F.mFx.JOIN_REQUEST:
                        if (null == (l = N.Z.getApplicationActivity(s)) || null == l.party || l.party.id !== e.activity.party_id) return !1;
                        o = (0, H.Z)(t, i, r, l);
                }
                return (
                    null != o &&
                    (to(o, {
                        priority: 2,
                        expirationExternallyManaged: !0,
                        channelId: t.id,
                        duration: K
                    }),
                    !0)
                );
            })(s, r, a);
            if (!1 !== t) return t;
        }
        if (x.Z.getTextChatNotificationMode() === F.Ypu.DISABLED || y.Z.disableNotifications || !(0, M.eF)(r, o)) return !1;
        let u = !O.Z.isSoundDisabled(R.Ay),
            d = null !== (l = Z.Z.getMessage(o, r.id)) && void 0 !== l ? l : (0, g.e5)(r);
        to((0, V.Z)(s, d, a, u), {
            type: 1,
            channelId: s.id,
            expirationExternallyManaged: !0,
            messageType: r.type
        }),
            te();
    },
    CHANNEL_SELECT: function (t) {
        let { channelId: e } = t;
        return null != e && tn(e);
    },
    MESSAGE_ACK: function (t) {
        let { channelId: e } = t;
        return tn(e);
    },
    CALL_CREATE: tr,
    CALL_UPDATE: tr,
    CALL_DELETE: function (t) {
        let { channelId: e } = t;
        ti(tl(e));
    },
    ACTIVITY_USER_ACTION: function (t) {
        let e,
            { actionType: i, user: n, applicationId: l } = t,
            o = (0, k.pL)();
        if (null == o || (null == o ? void 0 : o.id) == null || (o.id !== l && o.altId !== l)) return !1;
        if (i === F.mFx.JOIN) e = (0, P.Z)(n, o);
        if (null == e) return !1;
        to(e, {
            priority: 2,
            type: 0
        });
    },
    CLIPS_SAVE_CLIP_START: function () {
        to((0, U.f)(Y.intl.string(Y.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        to((0, U.f)(Y.intl.format(Y.t.KLhk6u, { duration: (0, D.A)(_.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        to((0, U.f)(Y.intl.string(Y.t['1ZbZur'])));
    },
    STREAM_START: function (t) {
        let e = (0, U.y)();
        null != e && to(e);
    }
});
e.Z = ta;
