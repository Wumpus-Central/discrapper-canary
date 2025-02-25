n.d(t, { Z: () => el }), n(47120), n(653041);
var i,
    r = n(512722),
    o = n.n(r),
    s = n(772848),
    l = n(442837),
    a = n(570140),
    c = n(13245),
    d = n(836932),
    u = n(175553),
    h = n(158979),
    p = n(181912),
    f = n(877183),
    g = n(791288),
    m = n(194295),
    y = n(998033),
    _ = n(181364),
    v = n(435064),
    O = n(668761),
    b = n(86071),
    S = n(358446),
    x = n(371651),
    Z = n(695346),
    E = n(163612),
    j = n(314897),
    N = n(592125),
    C = n(292959),
    I = n(158776),
    P = n(944486),
    w = n(885110),
    k = n(246946),
    T = n(594174),
    D = n(974180),
    M = n(808506),
    R = n(237997),
    A = n(70956),
    L = n(150097),
    W = n(129724),
    z = n(709054),
    B = n(145597),
    V = n(449224),
    F = n(981631),
    U = n(987650),
    G = n(388032);
function H(e, t, n) {
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
function Y(e) {
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
                H(e, t, n[t]);
            });
    }
    return e;
}
function K(e, t) {
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
let X = 5 * A.Z.Millis.SECOND,
    Q = 8 * A.Z.Millis.SECOND,
    J = 30 * A.Z.Millis.SECOND,
    q = Object.freeze({
        priority: 0,
        duration: X,
        expirationExternallyManaged: !1,
        type: 0
    }),
    $ = [],
    ee = (e, t, n) => {
        let i = t ? F._1z.TIMED_OUT : F._1z.DISMISSED;
        return setTimeout(() => c.Z.updateNotificationStatus(e, i), null != n ? n : X);
    };
function et(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F._1z.DISMISSED;
    if (null == e) return !1;
    let n = $.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = $[n];
    clearTimeout(i.timerId), ($ = [...$]), t === F._1z.DISMISSED ? $.splice(n, 1) : ($[n] = K(Y({}, i), { status: t }));
}
function en(e) {
    let t = $.length;
    return ($ = $.filter((t) => 1 !== t.type || t.channelId !== e)).length !== t;
}
function ei(e) {
    let t = $.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function er(e, t) {
    let n = Y({}, q, t);
    if (2 !== n.priority && !R.Z.isInstanceFocused()) return null;
    let i = (0, s.Z)(),
        r = Y(
            {
                id: i,
                status: F._1z.ACTIVE,
                timerId: ee(i, n.expirationExternallyManaged, n.duration),
                props: e
            },
            n
        ),
        o = ($ = [...$]).findIndex((e) => e.priority <= n.priority);
    return -1 === o ? $.push(r) : $.splice(o, 0, r), $.length > 10 && clearTimeout($.pop().timerId), i;
}
function eo(e) {
    let { channelId: t, ringing: n } = e,
        i = ei(t);
    if (!n.includes(j.default.getId())) return et(i);
    if (null != i) return !1;
    let r = N.Z.getChannel(t);
    if (
        null == r ||
        !r.isRingable() ||
        ('GUILD_RING_START' === e.type &&
            !E.Z.getCurrentConfig({
                guildId: e.guildId,
                location: 'OverlayStartRinging'
            }).enabled) ||
        w.Z.getStatus() === F.Skl.DND ||
        Z.QZ.getSetting()
    )
        return !1;
    let o = $.find((e) => 1 === e.type && e.channelId === t && e.messageType === F.uaV.CALL);
    null != o && et(o.id),
        er((0, p.Z)(r), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: r.id
        });
}
class es extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(N.Z, T.default);
    }
    getNotifications() {
        return $;
    }
}
H(es, 'displayName', 'OverlayNotificationsStore');
let el = new es(a.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        et(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: n } = e;
        if (x.default.hasChangedRenderMode(null !== (t = M.ZP.getFocusedPID()) && void 0 !== t ? t : (0, B.QF)())) return;
        let i = (function (e) {
            switch (e.type) {
                case U.nc.OOP_WELCOME:
                    return (0, f.Z)(e);
                case U.nc.GO_LIVE_VOICE:
                case U.nc.GO_LIVE_NON_VOICE:
                    return (0, h.Z)(e);
                case U.nc.KEYBIND_INDICATORS:
                    return (0, S.Z)(e);
                case U.nc.NEWS:
                default:
                    return (0, _.Z)(e);
            }
        })(n[0]);
        null != i &&
            er(i, {
                priority: 2,
                duration: Q
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) return !1;
        $ = $.map((e) => (e.status === F._1z.ACTIVE ? (clearTimeout(e.timerId), K(Y({}, e), { timerId: ee(e.id, e.expirationExternallyManaged) })) : e));
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i;
        let { channelId: r, message: s } = e,
            l = N.Z.getChannel(r),
            a = T.default.getUser(null === (t = s.author) || void 0 === t ? void 0 : t.id);
        if (null == l || null == a) return !1;
        if ((null === (n = s.activity) || void 0 === n ? void 0 : n.type) === F.mFx.JOIN || (null === (i = s.activity) || void 0 === i ? void 0 : i.type) === F.mFx.JOIN_REQUEST) {
            if (!(0, L.eF)(s, r, !0, !0)) return !1;
            let e = (function (e, t, n) {
                let i, r;
                if ((o()(null != t.activity, 'received null message activity'), n.id === j.default.getId())) return !1;
                let s = V.Z.getGame();
                if (null == s) return !1;
                switch (t.activity.type) {
                    case F.mFx.JOIN:
                        if (null == (i = I.Z.getApplicationActivity(n.id, s.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                        r = (0, d.Z)(e, t, n, s, i);
                        break;
                    case F.mFx.JOIN_REQUEST:
                        if (null == (i = w.Z.getApplicationActivity(s.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                        r = (0, m.Z)(e, n, s, i);
                }
                if (null == r) return !1;
                let l = er(r, {
                    priority: 2,
                    expirationExternallyManaged: !0,
                    channelId: e.id
                });
                return null != l && ee(l, !1, J), !0;
            })(l, s, a);
            if (!1 !== e) return e;
        }
        if (((!R.Z.isInstanceLocked() || R.Z.isPinned(F.Odu.TEXT)) && r === P.Z.getChannelId()) || R.Z.getTextChatNotificationMode() === F.Ypu.DISABLED || k.Z.disableNotifications || !(0, L.eF)(s, r)) return !1;
        let c = !C.Z.isSoundDisabled(D.Ay);
        er((0, y.Z)(l, s, a, c), {
            type: 1,
            channelId: l.id,
            messageType: s.type
        });
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null != t && en(t);
    },
    MESSAGE_ACK: function (e) {
        let { channelId: t } = e;
        return en(t);
    },
    CALL_CREATE: eo,
    CALL_UPDATE: eo,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        et(ei(t));
    },
    GUILD_RING_START: eo,
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (
            !E.Z.getCurrentConfig({
                guildId: n,
                location: 'OverlayStopRinging'
            }).enabled
        )
            return !1;
        i.includes(j.default.getId()) && et(ei(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: r } = e,
            o = V.Z.getGame();
        return (
            null != o &&
            o.id === r &&
            (n === F.mFx.JOIN && (t = (0, u.Z)(i, o)),
            null != t &&
                void er(t, {
                    priority: 2,
                    type: 0
                }))
        );
    },
    CLIPS_SAVE_CLIP_START: function () {
        er((0, O.f)(G.NW.string(G.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        er((0, O.f)(G.NW.formatToPlainString(G.t.KLhk6u, { duration: (0, W.A)(v.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        er((0, O.f)(G.NW.string(G.t['1ZbZur'])));
    },
    STREAM_START: function (e) {
        let t = (0, O.y)();
        null != t && er(t);
    },
    OVERLAY_CONTENT_INVENTORY_READY: function (e) {
        var t;
        let { contentInventoryEntries: n } = e;
        if (0 === n.length || x.default.hasChangedRenderMode(null !== (t = M.ZP.getFocusedPID()) && void 0 !== t ? t : (0, B.QF)())) return;
        let i = V.Z.getGame();
        if (null == i) return;
        let { enabled: r, dateLookbackMs: o } = b.Z.getCurrentConfig({ location: 'OverlayNotificationsStore' });
        if (!r) return;
        let s = n;
        null != o && (s = s.filter((e) => z.default.age(e.id) < o)),
            0 !== s.length &&
                er((0, g.Z)(i, s), {
                    priority: 2,
                    type: 'content-inventory',
                    expirationExternallyManaged: !0,
                    duration: Q
                });
    }
});
