n.d(t, { Z: () => ec }), n(47120), n(653041);
var i,
    r = n(512722),
    s = n.n(r),
    o = n(772848),
    l = n(442837),
    a = n(570140),
    c = n(13245),
    d = n(836932),
    u = n(175553),
    h = n(158979),
    p = n(181912),
    g = n(877183),
    f = n(791288),
    m = n(194295),
    y = n(998033),
    O = n(181364),
    v = n(435064),
    S = n(668761),
    b = n(86071),
    x = n(358446),
    Z = n(371651),
    j = n(752048),
    E = n(695346),
    N = n(163612),
    C = n(314897),
    I = n(592125),
    P = n(292959),
    w = n(158776),
    _ = n(944486),
    T = n(885110),
    k = n(246946),
    D = n(594174),
    M = n(974180),
    R = n(808506),
    A = n(237997),
    L = n(70956),
    W = n(150097),
    z = n(129724),
    V = n(145597),
    F = n(449224),
    U = n(981631),
    B = n(987650),
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
let X = 5 * L.Z.Millis.SECOND,
    Q = 8 * L.Z.Millis.SECOND,
    J = 30 * L.Z.Millis.SECOND,
    q = Object.freeze({
        priority: 0,
        duration: X,
        expirationExternallyManaged: !1,
        type: 0
    }),
    $ = [],
    ee = [],
    et = (e, t, n) => {
        let i = t ? U._1z.TIMED_OUT : U._1z.DISMISSED;
        return setTimeout(() => c.Z.updateNotificationStatus(e, i), null != n ? n : X);
    };
function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U._1z.DISMISSED;
    if (null == e) return !1;
    let n = $.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = $[n];
    clearTimeout(i.timerId), ($ = [...$]), t === U._1z.DISMISSED ? $.splice(n, 1) : ($[n] = K(Y({}, i), { status: t }));
}
function ei(e) {
    let t = $.length;
    return ($ = $.filter((t) => 1 !== t.type || t.channelId !== e)).length !== t;
}
function er(e) {
    let t = $.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function es(e, t) {
    let n = Y({}, q, t);
    if (2 !== n.priority && !A.Z.isInstanceFocused()) return null;
    let i = (0, o.Z)(),
        r = Y(
            {
                id: i,
                status: U._1z.ACTIVE,
                timerId: et(i, n.expirationExternallyManaged, n.duration),
                props: e
            },
            n
        ),
        s = ($ = [...$]).findIndex((e) => e.priority <= n.priority);
    return -1 === s ? $.push(r) : $.splice(s, 0, r), $.length > 10 && clearTimeout($.pop().timerId), i;
}
function eo(e) {
    let { contentInventoryEntries: t } = e;
    if (!A.Z.showInviteNotification) return !1;
    let n = F.Z.getGame();
    if (null == n || 0 === t.length) return;
    let { affinityThreshold: i } = b.Z.getCurrentConfig({ location: 'OverlayNotificationsStore' }),
        r = t;
    if (null != i) {
        var s;
        let e = j.Z.getUserAffinitiesMap();
        r =
            null !==
                (s = t.filter((t) => {
                    var n;
                    let r = null === (n = e.get(t.author_id)) || void 0 === n ? void 0 : n.communicationProbability;
                    return null != r && r >= i;
                })) && void 0 !== s
                ? s
                : [];
    }
    0 !== r.length &&
        es((0, f.Z)(n, r), {
            priority: 2,
            type: 'content-inventory',
            expirationExternallyManaged: !0,
            duration: Q
        });
}
function el(e) {
    let { channelId: t, ringing: n } = e,
        i = er(t);
    if (!n.includes(C.default.getId())) return en(i);
    if (null != i) return !1;
    let r = I.Z.getChannel(t);
    if (
        null == r ||
        !r.isRingable() ||
        ('GUILD_RING_START' === e.type &&
            !N.Z.getCurrentConfig({
                guildId: e.guildId,
                location: 'OverlayStartRinging'
            }).enabled) ||
        T.Z.getStatus() === U.Skl.DND ||
        E.QZ.getSetting()
    )
        return !1;
    let s = $.find((e) => 1 === e.type && e.channelId === t && e.messageType === U.uaV.CALL);
    null != s && en(s.id),
        es((0, p.Z)(r), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: r.id
        });
}
class ea extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, D.default);
    }
    getNotifications() {
        return $;
    }
}
H(ea, 'displayName', 'OverlayNotificationsStore');
let ec = new ea(a.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        en(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: n } = e;
        if (Z.default.hasChangedRenderMode(null !== (t = R.Z.getFocusedPID()) && void 0 !== t ? t : (0, V.QF)())) return;
        let i = (function (e) {
            switch (e.type) {
                case B.nc.OOP_WELCOME:
                    return (0, g.Z)(e);
                case B.nc.GO_LIVE_VOICE:
                case B.nc.GO_LIVE_NON_VOICE:
                    return (0, h.Z)(e);
                case B.nc.KEYBIND_INDICATORS:
                    return (0, x.Z)(e);
                case B.nc.NEWS:
                default:
                    return (0, O.Z)(e);
            }
        })(n[0]);
        null != i &&
            es(i, {
                priority: 2,
                duration: Q
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) return !1;
        $ = $.map((e) => (e.status === U._1z.ACTIVE ? (clearTimeout(e.timerId), K(Y({}, e), { timerId: et(e.id, e.expirationExternallyManaged) })) : e));
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i;
        let { channelId: r, message: o } = e,
            l = I.Z.getChannel(r),
            a = D.default.getUser(null === (t = o.author) || void 0 === t ? void 0 : t.id);
        if (null == l || null == a) return !1;
        if ((null === (n = o.activity) || void 0 === n ? void 0 : n.type) === U.mFx.JOIN || (null === (i = o.activity) || void 0 === i ? void 0 : i.type) === U.mFx.JOIN_REQUEST) {
            if (!(0, W.eF)(o, r, !0, !0)) return !1;
            let e = (function (e, t, n) {
                let i, r;
                if ((s()(null != t.activity, 'received null message activity'), n.id === C.default.getId())) return !1;
                let o = F.Z.getGame();
                if (null == o) return !1;
                switch (t.activity.type) {
                    case U.mFx.JOIN:
                        if (null == (i = w.Z.getApplicationActivity(n.id, o.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                        r = (0, d.Z)(e, t, n, o, i);
                        break;
                    case U.mFx.JOIN_REQUEST:
                        if (null == (i = T.Z.getApplicationActivity(o.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                        r = (0, m.Z)(e, n, o, i);
                }
                if (null == r) return !1;
                let l = es(r, {
                    priority: 2,
                    expirationExternallyManaged: !0,
                    channelId: e.id
                });
                return null != l && et(l, !1, J), !0;
            })(l, o, a);
            if (!1 !== e) return e;
        }
        if (((!A.Z.isInstanceLocked() || A.Z.isPinned(U.Odu.TEXT)) && r === _.Z.getChannelId()) || A.Z.getTextChatNotificationMode() === U.Ypu.DISABLED || k.Z.disableNotifications || !(0, W.eF)(o, r)) return !1;
        let c = !P.Z.isSoundDisabled(M.Ay);
        es((0, y.Z)(l, o, a, c), {
            type: 1,
            channelId: l.id,
            messageType: o.type
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
    CALL_CREATE: el,
    CALL_UPDATE: el,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        en(er(t));
    },
    GUILD_RING_START: el,
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (
            !N.Z.getCurrentConfig({
                guildId: n,
                location: 'OverlayStopRinging'
            }).enabled
        )
            return !1;
        i.includes(C.default.getId()) && en(er(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: r } = e,
            s = F.Z.getGame();
        return (
            null != s &&
            s.id === r &&
            (n === U.mFx.JOIN && (t = (0, u.Z)(i, s)),
            null != t &&
                void es(t, {
                    priority: 2,
                    type: 0
                }))
        );
    },
    CLIPS_SAVE_CLIP_START: function () {
        es((0, S.f)(G.NW.string(G.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        es((0, S.f)(G.NW.formatToPlainString(G.t.KLhk6u, { duration: (0, z.A)(v.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        es((0, S.f)(G.NW.string(G.t['1ZbZur'])));
    },
    STREAM_START: function (e) {
        let t = (0, S.y)();
        null != t && es(t);
    },
    OVERLAY_CONTENT_INVENTORY_READY: function (e) {
        var t;
        let { contentInventoryEntries: n } = e;
        if (0 === n.length || ((ee = n), Z.default.hasChangedRenderMode(null !== (t = R.Z.getFocusedPID()) && void 0 !== t ? t : (0, V.QF)()) || null == F.Z.getGame())) return;
        let { enabled: i, affinityThreshold: r } = b.Z.getCurrentConfig({ location: 'OverlayNotificationsStore' });
        i && (0 !== j.Z.getUserAffinities().length || null == r) && eo({ contentInventoryEntries: n });
    },
    LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineUsers: t } = e;
        0 !== t.length && 0 !== ee.length && eo({ contentInventoryEntries: ee });
    }
});
