n.d(t, { Z: () => el }), n(388685), n(539854);
var i,
    r = n(512722),
    o = n.n(r),
    l = n(772848),
    s = n(442837),
    a = n(570140),
    c = n(13245),
    d = n(836932),
    u = n(175553),
    h = n(158979),
    p = n(181912),
    f = n(877183),
    g = n(194295),
    m = n(998033),
    y = n(181364),
    O = n(435064),
    v = n(668761),
    _ = n(864060),
    b = n(486016),
    E = n(358446),
    S = n(371651),
    x = n(624864),
    C = n(695346),
    Z = n(163612),
    j = n(314897),
    I = n(592125),
    P = n(292959),
    w = n(158776),
    N = n(944486),
    T = n(885110),
    k = n(246946),
    D = n(594174),
    R = n(974180),
    A = n(808506),
    L = n(237997),
    M = n(70956),
    z = n(129724),
    V = n(145597),
    W = n(449224),
    U = n(981631),
    B = n(987650),
    G = n(388032);
function F(e, t, n) {
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
function H(e) {
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
                F(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
let K = 5 * M.Z.Millis.SECOND,
    X = 8 * M.Z.Millis.SECOND,
    J = 30 * M.Z.Millis.SECOND,
    Q = Object.freeze({
        priority: 0,
        duration: K,
        expirationExternallyManaged: !1,
        type: 0
    }),
    q = [],
    $ = (e, t, n) => {
        let i = t ? U._1z.TIMED_OUT : U._1z.DISMISSED;
        return setTimeout(() => c.Z.updateNotificationStatus(e, i), null != n ? n : K);
    };
function ee(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U._1z.DISMISSED;
    if (null == e) return !1;
    let n = q.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = q[n];
    clearTimeout(i.timerId), (q = [...q]), t === U._1z.DISMISSED ? q.splice(n, 1) : (q[n] = Y(H({}, i), { status: t }));
}
function et(e) {
    let t = q.length;
    return (q = q.filter((t) => 1 !== t.type || t.channelId !== e)).length !== t;
}
function en(e) {
    let t = q.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function ei(e, t) {
    let n = H({}, Q, t);
    if (2 !== n.priority && !L.default.isInstanceFocused()) return null;
    let i = (0, l.Z)(),
        r = H(
            {
                id: i,
                status: U._1z.ACTIVE,
                timerId: $(i, n.expirationExternallyManaged, n.duration),
                props: e
            },
            n
        ),
        o = (q = [...q]).findIndex((e) => e.priority <= n.priority);
    return -1 === o ? q.push(r) : q.splice(o, 0, r), q.length > 10 && clearTimeout(q.pop().timerId), i;
}
function er(e) {
    let { channelId: t, ringing: n } = e,
        i = en(t);
    if (!n.includes(j.default.getId())) return ee(i);
    if (null != i) return !1;
    let r = I.Z.getChannel(t);
    if (
        null == r ||
        !r.isRingable() ||
        ('GUILD_RING_START' === e.type &&
            !Z.Z.getCurrentConfig({
                guildId: e.guildId,
                location: 'OverlayStartRinging'
            }).enabled) ||
        T.Z.getStatus() === U.Skl.DND ||
        C.QZ.getSetting()
    )
        return !1;
    let o = q.find((e) => 1 === e.type && e.channelId === t && e.messageType === U.uaV.CALL);
    null != o && ee(o.id),
        ei((0, p.Z)(r), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: r.id
        });
}
class eo extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, D.default, x.Z);
    }
    getNotifications() {
        return q;
    }
}
F(eo, 'displayName', 'OverlayNotificationsStore');
let el = new eo(a.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        ee(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: n } = e;
        if (S.default.hasChangedRenderMode(null != (t = A.default.getFocusedPID()) ? t : (0, V.getPID)())) return;
        let i = (function (e) {
            switch (e.type) {
                case B.nc.OOP_WELCOME:
                    return (0, f.Z)(e);
                case B.nc.GO_LIVE_VOICE:
                case B.nc.GO_LIVE_NON_VOICE:
                    return (0, h.Z)(e);
                case B.nc.KEYBIND_INDICATORS:
                    return (0, E.Z)(e);
                case B.nc.NEWS:
                default:
                    return (0, y.Z)(e);
            }
        })(n[0]);
        null != i &&
            ei(i, {
                priority: 2,
                duration: X
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) return !1;
        q = q.map((e) => (e.status === U._1z.ACTIVE ? (clearTimeout(e.timerId), Y(H({}, e), { timerId: $(e.id, e.expirationExternallyManaged) })) : e));
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i;
        let { channelId: r, message: l } = e,
            s = I.Z.getChannel(r),
            a = D.default.getUser(null == (t = l.author) ? void 0 : t.id);
        if (null == s || null == a) return !1;
        if ((null == (n = l.activity) ? void 0 : n.type) === U.mFx.JOIN || (null == (i = l.activity) ? void 0 : i.type) === U.mFx.JOIN_REQUEST) {
            if (!(0, _.eF)(l, r, !0, !0)) return !1;
            let e = (function (e, t, n) {
                let i, r;
                if ((o()(null != t.activity, 'received null message activity'), n.id === j.default.getId())) return !1;
                let l = W.Z.getGame();
                if (null == l) return !1;
                switch (t.activity.type) {
                    case U.mFx.JOIN:
                        if (null == (i = w.Z.getApplicationActivity(n.id, l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                        r = (0, d.Z)(e, t, n, l, i);
                        break;
                    case U.mFx.JOIN_REQUEST:
                        if (null == (i = T.Z.getApplicationActivity(l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                        r = (0, g.Z)(e, n, l, i);
                }
                if (null == r) return !1;
                let s = ei(r, {
                    priority: 2,
                    expirationExternallyManaged: !0,
                    channelId: e.id
                });
                return null != s && $(s, !1, J), !0;
            })(s, l, a);
            if (!1 !== e) return e;
        }
        if (((!L.default.isInstanceLocked() || L.default.isPinned(U.Odu.TEXT)) && r === N.Z.getChannelId()) || x.Z.isNotificationDisabled(b.OverlayNotificationDisabledSetting.TEXT_CHAT) || k.Z.disableNotifications || !(0, _.eF)(l, r)) return !1;
        let c = !P.Z.isSoundDisabled(R.Ay);
        ei((0, m.Z)(s, l, a, c), {
            type: 1,
            channelId: s.id,
            messageType: l.type
        });
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null != t && et(t);
    },
    MESSAGE_ACK: function (e) {
        let { channelId: t } = e;
        return et(t);
    },
    CALL_CREATE: er,
    CALL_UPDATE: er,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        ee(en(t));
    },
    GUILD_RING_START: er,
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (
            !Z.Z.getCurrentConfig({
                guildId: n,
                location: 'OverlayStopRinging'
            }).enabled
        )
            return !1;
        i.includes(j.default.getId()) && ee(en(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: r } = e,
            o = W.Z.getGame();
        return (
            null != o &&
            o.id === r &&
            (n === U.mFx.JOIN && (t = (0, u.Z)(i, o)),
            null != t &&
                void ei(t, {
                    priority: 2,
                    type: 0
                }))
        );
    },
    CLIPS_SAVE_CLIP_START: function () {
        ei((0, v.f)(G.intl.string(G.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        ei((0, v.f)(G.intl.formatToPlainString(G.t.KLhk6u, { duration: (0, z.A)(O.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        ei((0, v.f)(G.intl.string(G.t['1ZbZur'])));
    },
    STREAM_START: function (e) {
        let t = (0, v.y)();
        null != t && ei(t);
    }
});
