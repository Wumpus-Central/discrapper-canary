i.d(e, { Z: () => tl }), i(47120), i(733860), i(653041);
var n,
    l,
    s,
    o = i(512722),
    r = i.n(o),
    a = i(772848),
    d = i(442837),
    u = i(570140),
    c = i(13245),
    h = i(435064),
    E = i(786761),
    p = i(695346),
    S = i(163612),
    f = i(314897),
    g = i(592125),
    _ = i(375954),
    m = i(292959),
    v = i(158776),
    I = i(885110),
    Z = i(246946),
    O = i(594174),
    C = i(974180),
    N = i(237997),
    y = i(70956),
    T = i(150097),
    R = i(129724),
    x = i(145597),
    A = i(371651),
    D = i(610394),
    L = i(388627),
    M = i(996050),
    w = i(609626),
    z = i(421824),
    k = i(777036),
    b = i(333727),
    P = i(585708),
    U = i(588909),
    j = i(981631),
    V = i(388032);
let H = 5 * y.Z.Millis.SECOND,
    W = 8 * y.Z.Millis.SECOND,
    F = 30 * y.Z.Millis.SECOND,
    Y = 30 * y.Z.Millis.SECOND,
    G = Object.freeze({
        timestamp: 0,
        priority: 0,
        duration: H,
        expirationExternallyManaged: !1,
        type: 0
    }),
    B = [],
    Q = !1,
    K = [];
function J() {
    if (Q && null == B.find((t) => t.status === j._1z.FOCUSED)) for (let t of ((Q = !1), (B = [...B, ...K]), (K = []), B.length > 40 && (B.length = 40), B)) t.timer.start();
}
function X() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    B.filter((t) => 1 === t.type && t.status === j._1z.TIMED_OUT)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e, i) => {
            (i >= t || e.timestamp < Date.now() - F) && q(e.id, j._1z.DISMISSED);
        });
}
function q(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j._1z.DISMISSED;
    if (null == t) return !1;
    let i = B.findIndex((e) => e.id === t);
    if (-1 === i) return !1;
    let n = B[i];
    if ((n.timer.stop(), (B = [...B]), e === j._1z.FOCUSED)) {
        let [t] = B.splice(i, 1);
        (t = {
            ...t,
            status: e
        }),
            B.unshift(t),
            (Q = !0);
        return;
    }
    e === j._1z.DISMISSED
        ? B.splice(i, 1)
        : (B[i] = {
              ...n,
              status: e
          }),
        J();
}
function $(t) {
    let e = B.length,
        i = (B = B.filter((e) => 1 !== e.type || e.channelId !== t)).length !== e;
    return i && J(), i;
}
function tt(t) {
    let e = B.find((e) => 2 === e.type && e.channelId === t);
    return null != e ? e.id : null;
}
function te(t, e) {
    let i = {
            ...G,
            timestamp: Date.now(),
            ...e
        },
        n = (0, a.Z)(),
        l = !1,
        s = {
            id: n,
            status: j._1z.ACTIVE,
            timer: (function (t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    n = -1;
                return {
                    start() {
                        let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
                            s = l ? j._1z.TIMED_OUT : j._1z.DISMISSED;
                        -1 === n && (n = setTimeout(() => c.Z.updateNotificationStatus(t, s), null != i ? i : H));
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
                    l || ((l = !0), null === (e = t.onNotificationShow) || void 0 === e || e.call(t, n));
                }
            },
            ...i
        },
        o = Q ? K : [...B],
        r = o.findIndex((t) => t.priority <= i.priority);
    if ((-1 === r ? o.push(s) : o.splice(r, 0, s), o.length > 40)) {
        let t = o.pop();
        Q || t.timer.stop();
    }
    return Q || ((B = o), s.timer.start()), n;
}
function ti(t) {
    let { channelId: e, ringing: i } = t,
        n = tt(e);
    if (!i.includes(f.default.getId())) return q(n);
    if (null != n) return !1;
    let l = g.Z.getChannel(e);
    if (
        null == l ||
        !l.isRingable() ||
        ('GUILD_RING_START' === t.type &&
            !S.Z.getCurrentConfig({
                guildId: t.guildId,
                location: 'OverlayV3StartRinging'
            }).enabled) ||
        I.Z.getStatus() === j.Skl.DND ||
        p.QZ.getSetting()
    )
        return !1;
    let s = B.find((t) => 1 === t.type && t.channelId === e && t.messageType === j.uaV.CALL);
    null != s && q(s.id),
        te((0, k.Z)(l), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: l.id
        });
}
class tn extends (n = d.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, O.default);
    }
    getNotifications() {
        return B;
    }
}
(s = 'OverlayNotificationsStore'),
    (l = 'displayName') in tn
        ? Object.defineProperty(tn, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (tn[l] = s);
let tl = new tn(u.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (t) {
        let { notificationId: e, status: i } = t;
        q(e, i);
    },
    OVERLAY_MOUNTED: function (t) {
        var e;
        let { nudges: i } = t;
        X(0);
        let n = null !== (e = D.ZP.getFocusedPID()) && void 0 !== e ? e : x.R2;
        if (A.Z.hasChangedRenderMode(n)) return;
        let l = (0, U.Z)((0, L.pL)(), i);
        null != l &&
            te(l, {
                priority: 2,
                type: 3,
                duration: W
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (t) {
        let { locked: e } = t;
        if (e) {
            for (let t of B) t.status === j._1z.FOCUSED && q(t.id, j._1z.ACTIVE);
            return !0;
        }
        for (let t of (X(), B)) 3 === t.type ? q(t.id, j._1z.DISMISSED) : t.status !== j._1z.ACTIVE || t.expirationExternallyManaged || (t.timer.stop(), t.timer.start(t.expirationExternallyManaged));
        if (B.length > 0) {
            var i;
            return q(null === (i = B.filter((t) => 1 === t.type).sort((t, e) => e.timestamp - t.timestamp)[0]) || void 0 === i ? void 0 : i.id, j._1z.FOCUSED);
        }
    },
    MESSAGE_CREATE: function (t) {
        var e, i, n, l;
        let { channelId: s, message: o } = t,
            a = g.Z.getChannel(s),
            d = O.default.getUser(null === (e = o.author) || void 0 === e ? void 0 : e.id);
        if (null == a || null == d) return !1;
        if ((null === (i = o.activity) || void 0 === i ? void 0 : i.type) === j.mFx.JOIN || (null === (n = o.activity) || void 0 === n ? void 0 : n.type) === j.mFx.JOIN_REQUEST) {
            if (!(0, T.eF)(o, s, !0, !0)) return !1;
            let t = (function (t, e, i) {
                var n;
                let l, s;
                if ((r()(null != e.activity, 'received null message activity'), i.id === f.default.getId())) return !1;
                let o = (0, L.pL)(),
                    a = null !== (n = null == o ? void 0 : o.altId) && void 0 !== n ? n : null == o ? void 0 : o.id;
                if (null == o || null == a) return !1;
                switch (e.activity.type) {
                    case j.mFx.JOIN:
                        if (null == (l = v.Z.getApplicationActivity(i.id, a)) || null == l.party || l.party.id !== e.activity.party_id) return !1;
                        s = (0, M.Z)(t, e, i, o, l);
                        break;
                    case j.mFx.JOIN_REQUEST:
                        if (null == (l = I.Z.getApplicationActivity(a)) || null == l.party || l.party.id !== e.activity.party_id) return !1;
                        s = (0, b.Z)(t, i, o, l);
                }
                return (
                    null != s &&
                    (te(s, {
                        priority: 2,
                        expirationExternallyManaged: !0,
                        channelId: t.id,
                        duration: Y
                    }),
                    !0)
                );
            })(a, o, d);
            if (!1 !== t) return t;
        }
        if (N.Z.getTextChatNotificationMode() === j.Ypu.DISABLED || Z.Z.disableNotifications || !(0, T.eF)(o, s)) return !1;
        let u = !m.Z.isSoundDisabled(C.Ay),
            c = null !== (l = _.Z.getMessage(s, o.id)) && void 0 !== l ? l : (0, E.e5)(o);
        te((0, P.Z)(a, c, d, u), {
            type: 1,
            channelId: a.id,
            expirationExternallyManaged: !0,
            messageType: o.type
        }),
            X();
    },
    CHANNEL_SELECT: function (t) {
        let { channelId: e } = t;
        return null != e && $(e);
    },
    MESSAGE_ACK: function (t) {
        let { channelId: e } = t;
        return $(e);
    },
    CALL_CREATE: ti,
    CALL_UPDATE: ti,
    CALL_DELETE: function (t) {
        let { channelId: e } = t;
        q(tt(e));
    },
    GUILD_RING_START: ti,
    GUILD_RING_STOP: function (t) {
        let { channelId: e, guildId: i, ringing: n } = t;
        if (
            !S.Z.getCurrentConfig({
                guildId: i,
                location: 'OverlayV3StopRinging'
            }).enabled
        )
            return !1;
        n.includes(f.default.getId()) && q(tt(e));
    },
    ACTIVITY_USER_ACTION: function (t) {
        let e,
            { actionType: i, user: n, applicationId: l } = t,
            s = (0, L.pL)();
        return (
            null != s &&
            (null == s ? void 0 : s.id) != null &&
            (s.id === l || s.altId === l) &&
            (i === j.mFx.JOIN && (e = (0, w.Z)(n, s)),
            null != e &&
                void te(e, {
                    priority: 2,
                    type: 0
                }))
        );
    },
    CLIPS_SAVE_CLIP_START: function () {
        te((0, z.f)(V.intl.string(V.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        te((0, z.f)(V.intl.format(V.t.KLhk6u, { duration: (0, R.A)(h.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        te((0, z.f)(V.intl.string(V.t['1ZbZur'])));
    },
    STREAM_START: function (t) {
        let e = (0, z.y)();
        null != e && te(e);
    }
});
