n(47120), n(653041);
var i,
    s,
    r,
    a,
    o,
    l,
    d,
    c,
    u = n(512722),
    h = n.n(u),
    p = n(772848),
    f = n(442837),
    g = n(570140),
    m = n(13245),
    v = n(836932),
    x = n(175553),
    Z = n(158979),
    S = n(181912),
    _ = n(791288),
    E = n(194295),
    C = n(998033),
    I = n(181364),
    y = n(435064),
    N = n(668761),
    b = n(86071),
    T = n(358446),
    O = n(371651),
    j = n(695346),
    M = n(314897),
    w = n(592125),
    P = n(292959),
    R = n(158776),
    k = n(944486),
    A = n(885110),
    D = n(246946),
    L = n(594174),
    z = n(974180),
    B = n(808506),
    V = n(237997),
    W = n(70956),
    U = n(150097),
    F = n(129724),
    G = n(145597),
    H = n(449224),
    Y = n(981631),
    K = n(987650),
    X = n(388032);
((a = i || (i = {}))[(a.GENERIC = 0)] = 'GENERIC'), (a[(a.TEXT = 1)] = 'TEXT'), (a[(a.INCOMING_CALL = 2)] = 'INCOMING_CALL'), ((o = s || (s = {}))[(o.NORMAL = 0)] = 'NORMAL'), (o[(o.HIGH = 1)] = 'HIGH'), (o[(o.URGENT = 2)] = 'URGENT');
let Q = 5 * W.Z.Millis.SECOND,
    J = 8 * W.Z.Millis.SECOND,
    q = 30 * W.Z.Millis.SECOND,
    $ = Object.freeze({
        priority: 0,
        duration: Q,
        expirationExternallyManaged: !1,
        type: 0
    }),
    ee = [],
    et = (e, t, n) => {
        let i = t ? Y._1z.TIMED_OUT : Y._1z.DISMISSED;
        return setTimeout(() => m.Z.updateNotificationStatus(e, i), null != n ? n : Q);
    };
function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Y._1z.DISMISSED;
    if (null == e) return !1;
    let n = ee.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = ee[n];
    clearTimeout(i.timerId),
        (ee = [...ee]),
        t === Y._1z.DISMISSED
            ? ee.splice(n, 1)
            : (ee[n] = {
                  ...i,
                  status: t
              });
}
function ei(e) {
    let t = ee.length;
    return (ee = ee.filter((t) => 1 !== t.type || t.channelId !== e || !1)).length !== t;
}
function es(e) {
    let t = ee.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function er(e, t) {
    let n = {
        ...$,
        ...t
    };
    if (2 !== n.priority && !V.Z.isInstanceFocused()) return null;
    let i = (0, p.Z)(),
        s = {
            id: i,
            status: Y._1z.ACTIVE,
            timerId: et(i, n.expirationExternallyManaged, n.duration),
            props: e,
            ...n
        },
        r = (ee = [...ee]).findIndex((e) => e.priority <= n.priority);
    return -1 === r ? ee.push(s) : ee.splice(r, 0, s), ee.length > 10 && clearTimeout(ee.pop().timerId), i;
}
function ea(e) {
    let { channelId: t, ringing: n } = e,
        i = es(t);
    if (!n.includes(M.default.getId())) return en(i);
    if (null != i) return !1;
    let s = w.Z.getChannel(t);
    if (null == s || !s.isPrivate() || A.Z.getStatus() === Y.Skl.DND || j.QZ.getSetting()) return !1;
    let r = ee.find((e) => 1 === e.type && e.channelId === t && e.messageType === Y.uaV.CALL);
    null != r && en(r.id),
        er((0, S.Z)(s), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: s.id
        });
}
class eo extends (r = f.ZP.Store) {
    initialize() {
        this.waitFor(w.Z, L.default);
    }
    getNotifications() {
        return ee;
    }
}
(c = 'OverlayNotificationsStore'),
    (d = 'displayName') in (l = eo)
        ? Object.defineProperty(l, d, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[d] = c),
    (t.Z = new eo(g.Z, {
        OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
            let { notificationId: t, status: n } = e;
            en(t, n);
        },
        OVERLAY_MOUNTED: function (e) {
            var t;
            let { nudges: n } = e;
            if (O.Z.hasChangedRenderMode(null !== (t = B.Z.getFocusedPID()) && void 0 !== t ? t : (0, G.QF)())) return;
            let i = (function (e) {
                switch (e.type) {
                    case K.nc.GO_LIVE_VOICE:
                    case K.nc.GO_LIVE_NON_VOICE:
                        return (0, Z.Z)(e);
                    case K.nc.KEYBIND_INDICATORS:
                        return (0, T.Z)(e);
                    case K.nc.NEWS:
                    default:
                        return (0, I.Z)(e);
                }
            })(n[0]);
            null != i &&
                er(i, {
                    priority: 2,
                    duration: J
                });
        },
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            if (t) return !1;
            ee = ee.map((e) =>
                e.status === Y._1z.ACTIVE
                    ? (clearTimeout(e.timerId),
                      {
                          ...e,
                          timerId: et(e.id, e.expirationExternallyManaged)
                      })
                    : e
            );
        },
        MESSAGE_CREATE: function (e) {
            var t, n, i;
            let { channelId: s, message: r } = e,
                a = w.Z.getChannel(s),
                o = L.default.getUser(null === (t = r.author) || void 0 === t ? void 0 : t.id);
            if (null == a || null == o) return !1;
            if ((null === (n = r.activity) || void 0 === n ? void 0 : n.type) === Y.mFx.JOIN || (null === (i = r.activity) || void 0 === i ? void 0 : i.type) === Y.mFx.JOIN_REQUEST) {
                if (!(0, U.eF)(r, s, !0, !0)) return !1;
                let e = (function (e, t, n) {
                    let i, s;
                    if ((h()(null != t.activity, 'received null message activity'), n.id === M.default.getId())) return !1;
                    let r = H.Z.getGame();
                    if (null == r) return !1;
                    switch (t.activity.type) {
                        case Y.mFx.JOIN:
                            if (null == (i = R.Z.getApplicationActivity(n.id, r.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                            s = (0, v.Z)(e, t, n, r, i);
                            break;
                        case Y.mFx.JOIN_REQUEST:
                            if (null == (i = A.Z.getApplicationActivity(r.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                            s = (0, E.Z)(e, n, r, i);
                    }
                    if (null == s) return !1;
                    let a = er(s, {
                        priority: 2,
                        expirationExternallyManaged: !0,
                        channelId: e.id
                    });
                    return null != a && et(a, !1, q), !0;
                })(a, r, o);
                if (!1 !== e) return e;
            }
            if (((!V.Z.isInstanceLocked() || V.Z.isPinned(Y.Odu.TEXT)) && s === k.Z.getChannelId()) || V.Z.getTextChatNotificationMode() === Y.Ypu.DISABLED || D.Z.disableNotifications || !(0, U.eF)(r, s)) return !1;
            let l = !P.Z.isSoundDisabled(z.Ay);
            er((0, C.Z)(a, r, o, l), {
                type: 1,
                channelId: a.id,
                messageType: r.type
            });
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return null != t && ei(t);
        },
        MESSAGE_ACK: function (e) {
            let { channelId: t } = e;
            return ei(t);
        },
        CALL_CREATE: ea,
        CALL_UPDATE: ea,
        CALL_DELETE: function (e) {
            let { channelId: t } = e;
            en(es(t));
        },
        ACTIVITY_USER_ACTION: function (e) {
            let t,
                { actionType: n, user: i, applicationId: s } = e,
                r = H.Z.getGame();
            if (null == r || r.id !== s) return !1;
            if (n === Y.mFx.JOIN) t = (0, x.Z)(i, r);
            if (null == t) return !1;
            er(t, {
                priority: 2,
                type: 0
            });
        },
        CLIPS_SAVE_CLIP_START: function () {
            er((0, N.f)(X.intl.string(X.t.NBMK9v)));
        },
        CLIPS_SAVE_CLIP: function () {
            er((0, N.f)(X.intl.formatToPlainString(X.t.KLhk6u, { duration: (0, F.A)(y.Z.getSettings().clipsLength / 1000, !0) })));
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            er((0, N.f)(X.intl.string(X.t['1ZbZur'])));
        },
        STREAM_START: function (e) {
            let t = (0, N.y)();
            null != t && er(t);
        },
        OVERLAY_CONTENT_INVENTORY_READY: function (e) {
            var t;
            let { contentInventoryEntries: n } = e;
            if (0 === n.length || O.Z.hasChangedRenderMode(null !== (t = B.Z.getFocusedPID()) && void 0 !== t ? t : (0, G.QF)())) return;
            let i = H.Z.getGame();
            if (null == i) return;
            let { enabled: s } = b.Z.getCurrentConfig({ location: 'OverlayNotificationsStore' }, { autoTrackExposure: !0 });
            s &&
                er((0, _.Z)(i, n), {
                    priority: 2,
                    type: 0,
                    expirationExternallyManaged: !0,
                    duration: 30 * W.Z.Millis.SECOND
                });
        }
    }));
