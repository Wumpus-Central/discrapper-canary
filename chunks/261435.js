n.d(t, { Z: () => ec }), n(388685), n(539854);
var i,
    r = n(512722),
    s = n.n(r),
    o = n(772848),
    a = n(442837),
    l = n(570140),
    c = n(13245),
    d = n(836932),
    u = n(175553),
    h = n(158979),
    p = n(181912),
    f = n(877183),
    g = n(791288),
    m = n(194295),
    y = n(998033),
    v = n(181364),
    _ = n(435064),
    O = n(668761),
    b = n(864060),
    x = n(86071),
    E = n(486016),
    S = n(358446),
    C = n(371651),
    N = n(624864),
    Z = n(695346),
    j = n(163612),
    I = n(314897),
    P = n(592125),
    w = n(292959),
    T = n(158776),
    k = n(944486),
    D = n(885110),
    A = n(246946),
    R = n(594174),
    L = n(974180),
    M = n(808506),
    W = n(237997),
    z = n(70956),
    V = n(129724),
    U = n(709054),
    B = n(145597),
    G = n(449224),
    F = n(981631),
    H = n(987650),
    Y = n(388032);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                K(e, t, n[t]);
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
let q = 5 * z.Z.Millis.SECOND,
    Q = 8 * z.Z.Millis.SECOND,
    $ = 30 * z.Z.Millis.SECOND,
    ee = Object.freeze({
        priority: 0,
        duration: q,
        expirationExternallyManaged: !1,
        type: 0
    }),
    et = [],
    en = (e, t, n) => {
        let i = t ? F._1z.TIMED_OUT : F._1z.DISMISSED;
        return setTimeout(() => c.Z.updateNotificationStatus(e, i), null != n ? n : q);
    };
function ei(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F._1z.DISMISSED;
    if (null == e) return !1;
    let n = et.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = et[n];
    clearTimeout(i.timerId), (et = [...et]), t === F._1z.DISMISSED ? et.splice(n, 1) : (et[n] = J(X({}, i), { status: t }));
}
function er(e) {
    let t = et.length;
    return (et = et.filter((t) => 1 !== t.type || t.channelId !== e)).length !== t;
}
function es(e) {
    let t = et.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function eo(e, t) {
    let n = X({}, ee, t);
    if (2 !== n.priority && !W.default.isInstanceFocused()) return null;
    let i = (0, o.Z)(),
        r = X(
            {
                id: i,
                status: F._1z.ACTIVE,
                timerId: en(i, n.expirationExternallyManaged, n.duration),
                props: e
            },
            n
        ),
        s = (et = [...et]).findIndex((e) => e.priority <= n.priority);
    return -1 === s ? et.push(r) : et.splice(s, 0, r), et.length > 10 && clearTimeout(et.pop().timerId), i;
}
function ea(e) {
    let { channelId: t, ringing: n } = e,
        i = es(t);
    if (!n.includes(I.default.getId())) return ei(i);
    if (null != i) return !1;
    let r = P.Z.getChannel(t);
    if (
        null == r ||
        !r.isRingable() ||
        ('GUILD_RING_START' === e.type &&
            !j.Z.getCurrentConfig({
                guildId: e.guildId,
                location: 'OverlayStartRinging'
            }).enabled) ||
        D.Z.getStatus() === F.Skl.DND ||
        Z.QZ.getSetting()
    )
        return !1;
    let s = et.find((e) => 1 === e.type && e.channelId === t && e.messageType === F.uaV.CALL);
    null != s && ei(s.id),
        eo((0, p.Z)(r), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: r.id
        });
}
class el extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(P.Z, R.default, N.Z);
    }
    getNotifications() {
        return et;
    }
}
K(el, 'displayName', 'OverlayNotificationsStore');
let ec = new el(l.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        ei(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: n } = e;
        if (C.default.hasChangedRenderMode(null != (t = M.default.getFocusedPID()) ? t : (0, B.getPID)())) return;
        let i = (function (e) {
            switch (e.type) {
                case H.nc.OOP_WELCOME:
                    return (0, f.Z)(e);
                case H.nc.GO_LIVE_VOICE:
                case H.nc.GO_LIVE_NON_VOICE:
                    return (0, h.Z)(e);
                case H.nc.KEYBIND_INDICATORS:
                    return (0, S.Z)(e);
                case H.nc.NEWS:
                default:
                    return (0, v.Z)(e);
            }
        })(n[0]);
        null != i &&
            eo(i, {
                priority: 2,
                duration: Q
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) return !1;
        et = et.map((e) => (e.status === F._1z.ACTIVE ? (clearTimeout(e.timerId), J(X({}, e), { timerId: en(e.id, e.expirationExternallyManaged) })) : e));
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i;
        let { channelId: r, message: o } = e,
            a = P.Z.getChannel(r),
            l = R.default.getUser(null == (t = o.author) ? void 0 : t.id);
        if (null == a || null == l) return !1;
        if ((null == (n = o.activity) ? void 0 : n.type) === F.mFx.JOIN || (null == (i = o.activity) ? void 0 : i.type) === F.mFx.JOIN_REQUEST) {
            if (!(0, b.eF)(o, r, !0, !0)) return !1;
            let e = (function (e, t, n) {
                let i, r;
                if ((s()(null != t.activity, 'received null message activity'), n.id === I.default.getId())) return !1;
                let o = G.Z.getGame();
                if (null == o) return !1;
                switch (t.activity.type) {
                    case F.mFx.JOIN:
                        if (null == (i = T.Z.getApplicationActivity(n.id, o.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                        r = (0, d.Z)(e, t, n, o, i);
                        break;
                    case F.mFx.JOIN_REQUEST:
                        if (null == (i = D.Z.getApplicationActivity(o.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                        r = (0, m.Z)(e, n, o, i);
                }
                if (null == r) return !1;
                let a = eo(r, {
                    priority: 2,
                    expirationExternallyManaged: !0,
                    channelId: e.id
                });
                return null != a && en(a, !1, $), !0;
            })(a, o, l);
            if (!1 !== e) return e;
        }
        if (((!W.default.isInstanceLocked() || W.default.isPinned(F.Odu.TEXT)) && r === k.Z.getChannelId()) || N.Z.isNotificationDisabled(E.OverlayNotificationDisabledSetting.TEXT_CHAT) || A.Z.disableNotifications || !(0, b.eF)(o, r)) return !1;
        let c = !w.Z.isSoundDisabled(L.Ay);
        eo((0, y.Z)(a, o, l, c), {
            type: 1,
            channelId: a.id,
            messageType: o.type
        });
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null != t && er(t);
    },
    MESSAGE_ACK: function (e) {
        let { channelId: t } = e;
        return er(t);
    },
    CALL_CREATE: ea,
    CALL_UPDATE: ea,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        ei(es(t));
    },
    GUILD_RING_START: ea,
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (
            !j.Z.getCurrentConfig({
                guildId: n,
                location: 'OverlayStopRinging'
            }).enabled
        )
            return !1;
        i.includes(I.default.getId()) && ei(es(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: r } = e,
            s = G.Z.getGame();
        return (
            null != s &&
            s.id === r &&
            (n === F.mFx.JOIN && (t = (0, u.Z)(i, s)),
            null != t &&
                void eo(t, {
                    priority: 2,
                    type: 0
                }))
        );
    },
    CLIPS_SAVE_CLIP_START: function () {
        eo((0, O.f)(Y.NW.string(Y.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        eo((0, O.f)(Y.NW.formatToPlainString(Y.t.KLhk6u, { duration: (0, V.A)(_.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        eo((0, O.f)(Y.NW.string(Y.t['1ZbZur'])));
    },
    STREAM_START: function (e) {
        let t = (0, O.y)();
        null != t && eo(t);
    },
    OVERLAY_CONTENT_INVENTORY_READY: function (e) {
        var t;
        let { contentInventoryEntries: n } = e;
        if (0 === n.length || N.Z.isNotificationDisabled(E.OverlayNotificationDisabledSetting.GAME_ACTIVITY) || C.default.hasChangedRenderMode(null != (t = M.default.getFocusedPID()) ? t : (0, B.getPID)())) return;
        let i = G.Z.getGame();
        if (null == i) return;
        let { enabled: r, dateLookbackMs: s } = x.Z.getCurrentConfig({ location: 'OverlayNotificationsStore' });
        if (!r) return;
        let o = n;
        null != s && (o = o.filter((e) => U.default.age(e.id) < s)),
            0 !== o.length &&
                eo((0, g.Z)(i, o), {
                    priority: 2,
                    type: 'content-inventory',
                    expirationExternallyManaged: !0,
                    duration: Q
                });
    }
});
