n.d(t, { Z: () => eo }), n(47120), n(733860), n(653041);
var i,
    o,
    r,
    l = n(512722),
    a = n.n(l),
    s = n(772848),
    d = n(442837),
    c = n(570140),
    u = n(13245),
    h = n(435064),
    _ = n(786761),
    p = n(695346),
    f = n(163612),
    g = n(314897),
    m = n(592125),
    v = n(375954),
    x = n(292959),
    E = n(158776),
    C = n(885110),
    Z = n(246946),
    I = n(594174),
    S = n(974180),
    b = n(237997),
    y = n(70956),
    O = n(150097),
    w = n(129724),
    N = n(145597),
    T = n(371651),
    j = n(610394),
    k = n(388627),
    R = n(996050),
    A = n(609626),
    L = n(421824),
    P = n(777036),
    D = n(333727),
    M = n(585708),
    z = n(588909),
    V = n(981631),
    W = n(388032);
let F = 5 * y.Z.Millis.SECOND,
    U = 8 * y.Z.Millis.SECOND,
    H = 30 * y.Z.Millis.SECOND,
    B = 30 * y.Z.Millis.SECOND,
    G = Object.freeze({
        timestamp: 0,
        priority: 0,
        duration: F,
        expirationExternallyManaged: !1,
        type: 0
    }),
    Y = [],
    K = !1,
    X = [];
function Q() {
    if (K && null == Y.find((e) => e.status === V._1z.FOCUSED)) for (let e of ((K = !1), (Y = [...Y, ...X]), (X = []), Y.length > 40 && (Y.length = 40), Y)) e.timer.start();
}
function J() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    Y.filter((e) => 1 === e.type && e.status === V._1z.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - H) && q(t.id, V._1z.DISMISSED);
        });
}
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V._1z.DISMISSED;
    if (null == e) return !1;
    let n = Y.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = Y[n];
    if ((i.timer.stop(), (Y = [...Y]), t === V._1z.FOCUSED)) {
        let [e] = Y.splice(n, 1);
        (e = {
            ...e,
            status: t
        }),
            Y.unshift(e),
            (K = !0);
        return;
    }
    t === V._1z.DISMISSED
        ? Y.splice(n, 1)
        : (Y[n] = {
              ...i,
              status: t
          }),
        Q();
}
function $(e) {
    let t = Y.length,
        n = (Y = Y.filter((t) => 1 !== t.type || t.channelId !== e)).length !== t;
    return n && Q(), n;
}
function ee(e) {
    let t = Y.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function et(e, t) {
    let n = {
            ...G,
            timestamp: Date.now(),
            ...t
        },
        i = (0, s.Z)(),
        o = !1,
        r = {
            id: i,
            status: V._1z.ACTIVE,
            timer: (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = -1;
                return {
                    start() {
                        let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                            r = o ? V._1z.TIMED_OUT : V._1z.DISMISSED;
                        -1 === i && (i = setTimeout(() => u.Z.updateNotificationStatus(e, r), null != n ? n : F));
                    },
                    stop() {
                        clearTimeout(i), (i = -1);
                    }
                };
            })(i, n.expirationExternallyManaged, n.duration),
            props: {
                ...e,
                onNotificationShow: () => {
                    var t;
                    o || ((o = !0), null === (t = e.onNotificationShow) || void 0 === t || t.call(e, i));
                }
            },
            ...n
        },
        l = K ? X : [...Y],
        a = l.findIndex((e) => e.priority <= n.priority);
    if ((-1 === a ? l.push(r) : l.splice(a, 0, r), l.length > 40)) {
        let e = l.pop();
        K || e.timer.stop();
    }
    return K || ((Y = l), r.timer.start()), i;
}
function en(e) {
    let { channelId: t, ringing: n } = e,
        i = ee(t);
    if (!n.includes(g.default.getId())) return q(i);
    if (null != i) return !1;
    let o = m.Z.getChannel(t);
    if (
        null == o ||
        !o.isRingable() ||
        ('GUILD_RING_START' === e.type &&
            !f.Z.getCurrentConfig({
                guildId: e.guildId,
                location: 'OverlayV3StartRinging'
            }).enabled) ||
        C.Z.getStatus() === V.Skl.DND ||
        p.QZ.getSetting()
    )
        return !1;
    let r = Y.find((e) => 1 === e.type && e.channelId === t && e.messageType === V.uaV.CALL);
    null != r && q(r.id),
        et((0, P.Z)(o), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: o.id
        });
}
class ei extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, I.default);
    }
    getNotifications() {
        return Y;
    }
}
(r = 'OverlayNotificationsStore'),
    (o = 'displayName') in ei
        ? Object.defineProperty(ei, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (ei[o] = r);
let eo = new ei(c.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        q(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: n } = e;
        J(0);
        let i = null !== (t = j.ZP.getFocusedPID()) && void 0 !== t ? t : N.R2;
        if (T.Z.hasChangedRenderMode(i)) return;
        let o = (0, z.Z)((0, k.pL)(), n);
        null != o &&
            et(o, {
                priority: 2,
                type: 3,
                duration: U
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) {
            for (let e of Y) e.status === V._1z.FOCUSED && q(e.id, V._1z.ACTIVE);
            return !0;
        }
        for (let e of (J(), Y)) 3 === e.type ? q(e.id, V._1z.DISMISSED) : e.status !== V._1z.ACTIVE || e.expirationExternallyManaged || (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (Y.length > 0) {
            var n;
            return q(null === (n = Y.filter((e) => 1 === e.type).sort((e, t) => t.timestamp - e.timestamp)[0]) || void 0 === n ? void 0 : n.id, V._1z.FOCUSED);
        }
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i, o;
        let { channelId: r, message: l } = e,
            s = m.Z.getChannel(r),
            d = I.default.getUser(null === (t = l.author) || void 0 === t ? void 0 : t.id);
        if (null == s || null == d) return !1;
        if ((null === (n = l.activity) || void 0 === n ? void 0 : n.type) === V.mFx.JOIN || (null === (i = l.activity) || void 0 === i ? void 0 : i.type) === V.mFx.JOIN_REQUEST) {
            if (!(0, O.eF)(l, r, !0, !0)) return !1;
            let e = (function (e, t, n) {
                var i;
                let o, r;
                if ((a()(null != t.activity, 'received null message activity'), n.id === g.default.getId())) return !1;
                let l = (0, k.pL)(),
                    s = null !== (i = null == l ? void 0 : l.altId) && void 0 !== i ? i : null == l ? void 0 : l.id;
                if (null == l || null == s) return !1;
                switch (t.activity.type) {
                    case V.mFx.JOIN:
                        if (null == (o = E.Z.getApplicationActivity(n.id, s)) || null == o.party || o.party.id !== t.activity.party_id) return !1;
                        r = (0, R.Z)(e, t, n, l, o);
                        break;
                    case V.mFx.JOIN_REQUEST:
                        if (null == (o = C.Z.getApplicationActivity(s)) || null == o.party || o.party.id !== t.activity.party_id) return !1;
                        r = (0, D.Z)(e, n, l, o);
                }
                return (
                    null != r &&
                    (et(r, {
                        priority: 2,
                        expirationExternallyManaged: !0,
                        channelId: e.id,
                        duration: B
                    }),
                    !0)
                );
            })(s, l, d);
            if (!1 !== e) return e;
        }
        if (b.Z.getTextChatNotificationMode() === V.Ypu.DISABLED || Z.Z.disableNotifications || !(0, O.eF)(l, r)) return !1;
        let c = !x.Z.isSoundDisabled(S.Ay),
            u = null !== (o = v.Z.getMessage(r, l.id)) && void 0 !== o ? o : (0, _.e5)(l);
        et((0, M.Z)(s, u, d, c), {
            type: 1,
            channelId: s.id,
            expirationExternallyManaged: !0,
            messageType: l.type
        }),
            J();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null != t && $(t);
    },
    MESSAGE_ACK: function (e) {
        let { channelId: t } = e;
        return $(t);
    },
    CALL_CREATE: en,
    CALL_UPDATE: en,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        q(ee(t));
    },
    GUILD_RING_START: en,
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (
            !f.Z.getCurrentConfig({
                guildId: n,
                location: 'OverlayV3StopRinging'
            }).enabled
        )
            return !1;
        i.includes(g.default.getId()) && q(ee(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: o } = e,
            r = (0, k.pL)();
        return (
            null != r &&
            (null == r ? void 0 : r.id) != null &&
            (r.id === o || r.altId === o) &&
            (n === V.mFx.JOIN && (t = (0, A.Z)(i, r)),
            null != t &&
                void et(t, {
                    priority: 2,
                    type: 0
                }))
        );
    },
    CLIPS_SAVE_CLIP_START: function () {
        et((0, L.f)(W.intl.string(W.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        et((0, L.f)(W.intl.format(W.t.KLhk6u, { duration: (0, w.A)(h.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        et((0, L.f)(W.intl.string(W.t['1ZbZur'])));
    },
    STREAM_START: function (e) {
        let t = (0, L.y)();
        null != t && et(t);
    }
});
