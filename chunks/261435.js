n.d(t, { Z: () => ec }), n(47120), n(653041);
var i,
    r = n(512722),
    s = n.n(r),
    o = n(772848),
    l = n(442837),
    a = n(570140),
    c = n(13245),
    u = n(836932),
    d = n(175553),
    h = n(158979),
    p = n(181912),
    f = n(877183),
    g = n(791288),
    m = n(194295),
    y = n(998033),
    O = n(181364),
    v = n(435064),
    x = n(668761),
    b = n(864060),
    S = n(86071),
    E = n(486016),
    j = n(358446),
    N = n(371651),
    Z = n(624864),
    C = n(695346),
    I = n(163612),
    P = n(314897),
    _ = n(592125),
    w = n(292959),
    T = n(158776),
    D = n(944486),
    k = n(885110),
    M = n(246946),
    A = n(594174),
    R = n(974180),
    L = n(808506),
    z = n(237997),
    W = n(70956),
    V = n(129724),
    U = n(709054),
    B = n(145597),
    F = n(449224),
    G = n(981631),
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
let Q = 5 * W.Z.Millis.SECOND,
    q = 8 * W.Z.Millis.SECOND,
    $ = 30 * W.Z.Millis.SECOND,
    ee = Object.freeze({
        priority: 0,
        duration: Q,
        expirationExternallyManaged: !1,
        type: 0
    }),
    et = [],
    en = (e, t, n) => {
        let i = t ? G._1z.TIMED_OUT : G._1z.DISMISSED;
        return setTimeout(() => c.Z.updateNotificationStatus(e, i), null != n ? n : Q);
    };
function ei(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G._1z.DISMISSED;
    if (null == e) return !1;
    let n = et.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = et[n];
    clearTimeout(i.timerId), (et = [...et]), t === G._1z.DISMISSED ? et.splice(n, 1) : (et[n] = J(X({}, i), { status: t }));
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
    if (2 !== n.priority && !z.default.isInstanceFocused()) return null;
    let i = (0, o.Z)(),
        r = X(
            {
                id: i,
                status: G._1z.ACTIVE,
                timerId: en(i, n.expirationExternallyManaged, n.duration),
                props: e
            },
            n
        ),
        s = (et = [...et]).findIndex((e) => e.priority <= n.priority);
    return -1 === s ? et.push(r) : et.splice(s, 0, r), et.length > 10 && clearTimeout(et.pop().timerId), i;
}
function el(e) {
    let { channelId: t, ringing: n } = e,
        i = es(t);
    if (!n.includes(P.default.getId())) return ei(i);
    if (null != i) return !1;
    let r = _.Z.getChannel(t);
    if (
        null == r ||
        !r.isRingable() ||
        ('GUILD_RING_START' === e.type &&
            !I.Z.getCurrentConfig({
                guildId: e.guildId,
                location: 'OverlayStartRinging'
            }).enabled) ||
        k.Z.getStatus() === G.Skl.DND ||
        C.QZ.getSetting()
    )
        return !1;
    let s = et.find((e) => 1 === e.type && e.channelId === t && e.messageType === G.uaV.CALL);
    null != s && ei(s.id),
        eo((0, p.Z)(r), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: r.id
        });
}
class ea extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, A.default, Z.Z);
    }
    getNotifications() {
        return et;
    }
}
K(ea, 'displayName', 'OverlayNotificationsStore');
let ec = new ea(a.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        ei(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: n } = e;
        if (N.default.hasChangedRenderMode(null != (t = L.default.getFocusedPID()) ? t : (0, B.getPID)())) return;
        let i = (function (e) {
            switch (e.type) {
                case H.nc.OOP_WELCOME:
                    return (0, f.Z)(e);
                case H.nc.GO_LIVE_VOICE:
                case H.nc.GO_LIVE_NON_VOICE:
                    return (0, h.Z)(e);
                case H.nc.KEYBIND_INDICATORS:
                    return (0, j.Z)(e);
                case H.nc.NEWS:
                default:
                    return (0, O.Z)(e);
            }
        })(n[0]);
        null != i &&
            eo(i, {
                priority: 2,
                duration: q
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) return !1;
        et = et.map((e) => (e.status === G._1z.ACTIVE ? (clearTimeout(e.timerId), J(X({}, e), { timerId: en(e.id, e.expirationExternallyManaged) })) : e));
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i;
        let { channelId: r, message: o } = e,
            l = _.Z.getChannel(r),
            a = A.default.getUser(null == (t = o.author) ? void 0 : t.id);
        if (null == l || null == a) return !1;
        if ((null == (n = o.activity) ? void 0 : n.type) === G.mFx.JOIN || (null == (i = o.activity) ? void 0 : i.type) === G.mFx.JOIN_REQUEST) {
            if (!(0, b.eF)(o, r, !0, !0)) return !1;
            let e = (function (e, t, n) {
                let i, r;
                if ((s()(null != t.activity, 'received null message activity'), n.id === P.default.getId())) return !1;
                let o = F.Z.getGame();
                if (null == o) return !1;
                switch (t.activity.type) {
                    case G.mFx.JOIN:
                        if (null == (i = T.Z.getApplicationActivity(n.id, o.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                        r = (0, u.Z)(e, t, n, o, i);
                        break;
                    case G.mFx.JOIN_REQUEST:
                        if (null == (i = k.Z.getApplicationActivity(o.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                        r = (0, m.Z)(e, n, o, i);
                }
                if (null == r) return !1;
                let l = eo(r, {
                    priority: 2,
                    expirationExternallyManaged: !0,
                    channelId: e.id
                });
                return null != l && en(l, !1, $), !0;
            })(l, o, a);
            if (!1 !== e) return e;
        }
        if (((!z.default.isInstanceLocked() || z.default.isPinned(G.Odu.TEXT)) && r === D.Z.getChannelId()) || Z.Z.isNotificationDisabled(E.OverlayNotificationDisabledSetting.TEXT_CHAT) || M.Z.disableNotifications || !(0, b.eF)(o, r)) return !1;
        let c = !w.Z.isSoundDisabled(R.Ay);
        eo((0, y.Z)(l, o, a, c), {
            type: 1,
            channelId: l.id,
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
    CALL_CREATE: el,
    CALL_UPDATE: el,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        ei(es(t));
    },
    GUILD_RING_START: el,
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (
            !I.Z.getCurrentConfig({
                guildId: n,
                location: 'OverlayStopRinging'
            }).enabled
        )
            return !1;
        i.includes(P.default.getId()) && ei(es(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: r } = e,
            s = F.Z.getGame();
        return (
            null != s &&
            s.id === r &&
            (n === G.mFx.JOIN && (t = (0, d.Z)(i, s)),
            null != t &&
                void eo(t, {
                    priority: 2,
                    type: 0
                }))
        );
    },
    CLIPS_SAVE_CLIP_START: function () {
        eo((0, x.f)(Y.NW.string(Y.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        eo((0, x.f)(Y.NW.formatToPlainString(Y.t.KLhk6u, { duration: (0, V.A)(v.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        eo((0, x.f)(Y.NW.string(Y.t['1ZbZur'])));
    },
    STREAM_START: function (e) {
        let t = (0, x.y)();
        null != t && eo(t);
    },
    OVERLAY_CONTENT_INVENTORY_READY: function (e) {
        var t;
        let { contentInventoryEntries: n } = e;
        if (0 === n.length || Z.Z.isNotificationDisabled(E.OverlayNotificationDisabledSetting.GAME_ACTIVITY) || N.default.hasChangedRenderMode(null != (t = L.default.getFocusedPID()) ? t : (0, B.getPID)())) return;
        let i = F.Z.getGame();
        if (null == i) return;
        let { enabled: r, dateLookbackMs: s } = S.Z.getCurrentConfig({ location: 'OverlayNotificationsStore' });
        if (!r) return;
        let o = n;
        null != s && (o = o.filter((e) => U.default.age(e.id) < s)),
            0 !== o.length &&
                eo((0, g.Z)(i, o), {
                    priority: 2,
                    type: 'content-inventory',
                    expirationExternallyManaged: !0,
                    duration: q
                });
    }
});
