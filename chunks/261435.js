n.d(t, { Z: () => eo }), n(47120), n(653041);
var i,
    s,
    l,
    r = n(512722),
    o = n.n(r),
    a = n(772848),
    d = n(442837),
    c = n(570140),
    u = n(13245),
    h = n(836932),
    p = n(175553),
    g = n(158979),
    f = n(181912),
    m = n(791288),
    x = n(194295),
    v = n(998033),
    Z = n(181364),
    S = n(435064),
    E = n(668761),
    C = n(86071),
    I = n(358446),
    N = n(371651),
    y = n(428598),
    _ = n(695346),
    j = n(163612),
    O = n(314897),
    T = n(592125),
    b = n(292959),
    k = n(158776),
    M = n(944486),
    w = n(885110),
    P = n(246946),
    R = n(594174),
    A = n(974180),
    D = n(808506),
    L = n(237997),
    z = n(70956),
    V = n(150097),
    U = n(129724),
    W = n(145597),
    B = n(449224),
    F = n(981631),
    G = n(987650),
    H = n(388032);
let Y = 5 * z.Z.Millis.SECOND,
    K = 8 * z.Z.Millis.SECOND,
    X = 30 * z.Z.Millis.SECOND,
    Q = Object.freeze({
        priority: 0,
        duration: Y,
        expirationExternallyManaged: !1,
        type: 0
    }),
    J = [],
    q = [],
    $ = (e, t, n) => {
        let i = t ? F._1z.TIMED_OUT : F._1z.DISMISSED;
        return setTimeout(() => u.Z.updateNotificationStatus(e, i), null != n ? n : Y);
    };
function ee(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F._1z.DISMISSED;
    if (null == e) return !1;
    let n = J.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = J[n];
    clearTimeout(i.timerId),
        (J = [...J]),
        t === F._1z.DISMISSED
            ? J.splice(n, 1)
            : (J[n] = {
                  ...i,
                  status: t
              });
}
function et(e) {
    let t = J.length;
    return (J = J.filter((t) => 1 !== t.type || t.channelId !== e)).length !== t;
}
function en(e) {
    let t = J.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function ei(e, t) {
    let n = {
        ...Q,
        ...t
    };
    if (2 !== n.priority && !L.Z.isInstanceFocused()) return null;
    let i = (0, a.Z)(),
        s = {
            id: i,
            status: F._1z.ACTIVE,
            timerId: $(i, n.expirationExternallyManaged, n.duration),
            props: e,
            ...n
        },
        l = (J = [...J]).findIndex((e) => e.priority <= n.priority);
    return -1 === l ? J.push(s) : J.splice(l, 0, s), J.length > 10 && clearTimeout(J.pop().timerId), i;
}
function es(e) {
    let { contentInventoryEntries: t } = e;
    if (!L.Z.showInviteNotification) return !1;
    let n = B.Z.getGame();
    if (null == n || 0 === t.length) return;
    let { affinityThreshold: i } = C.Z.getCurrentConfig({ location: 'OverlayNotificationsStore' }),
        s = t;
    if (null != i) {
        var l;
        let e = y.Z.getUserAffinitiesMap();
        s =
            null !==
                (l = t.filter((t) => {
                    var n;
                    let s = null === (n = e.get(t.author_id)) || void 0 === n ? void 0 : n.communicationProbability;
                    return null != s && s >= i;
                })) && void 0 !== l
                ? l
                : [];
    }
    0 !== s.length &&
        ei((0, m.Z)(n, s), {
            priority: 2,
            type: 'content-inventory',
            expirationExternallyManaged: !0,
            duration: K
        });
}
function el(e) {
    let { channelId: t, ringing: n } = e,
        i = en(t);
    if (!n.includes(O.default.getId())) return ee(i);
    if (null != i) return !1;
    let s = T.Z.getChannel(t);
    if (
        null == s ||
        !s.isRingable() ||
        ('GUILD_RING_START' === e.type &&
            !j.Z.getCurrentConfig({
                guildId: e.guildId,
                location: 'OverlayStartRinging'
            }).enabled) ||
        w.Z.getStatus() === F.Skl.DND ||
        _.QZ.getSetting()
    )
        return !1;
    let l = J.find((e) => 1 === e.type && e.channelId === t && e.messageType === F.uaV.CALL);
    null != l && ee(l.id),
        ei((0, f.Z)(s), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: s.id
        });
}
class er extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(T.Z, R.default);
    }
    getNotifications() {
        return J;
    }
}
(l = 'OverlayNotificationsStore'),
    (s = 'displayName') in er
        ? Object.defineProperty(er, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (er[s] = l);
let eo = new er(c.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        ee(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: n } = e;
        if (N.Z.hasChangedRenderMode(null !== (t = D.Z.getFocusedPID()) && void 0 !== t ? t : (0, W.QF)())) return;
        let i = (function (e) {
            switch (e.type) {
                case G.nc.GO_LIVE_VOICE:
                case G.nc.GO_LIVE_NON_VOICE:
                    return (0, g.Z)(e);
                case G.nc.KEYBIND_INDICATORS:
                    return (0, I.Z)(e);
                case G.nc.NEWS:
                default:
                    return (0, Z.Z)(e);
            }
        })(n[0]);
        null != i &&
            ei(i, {
                priority: 2,
                duration: K
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) return !1;
        J = J.map((e) =>
            e.status === F._1z.ACTIVE
                ? (clearTimeout(e.timerId),
                  {
                      ...e,
                      timerId: $(e.id, e.expirationExternallyManaged)
                  })
                : e
        );
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i;
        let { channelId: s, message: l } = e,
            r = T.Z.getChannel(s),
            a = R.default.getUser(null === (t = l.author) || void 0 === t ? void 0 : t.id);
        if (null == r || null == a) return !1;
        if ((null === (n = l.activity) || void 0 === n ? void 0 : n.type) === F.mFx.JOIN || (null === (i = l.activity) || void 0 === i ? void 0 : i.type) === F.mFx.JOIN_REQUEST) {
            if (!(0, V.eF)(l, s, !0, !0)) return !1;
            let e = (function (e, t, n) {
                let i, s;
                if ((o()(null != t.activity, 'received null message activity'), n.id === O.default.getId())) return !1;
                let l = B.Z.getGame();
                if (null == l) return !1;
                switch (t.activity.type) {
                    case F.mFx.JOIN:
                        if (null == (i = k.Z.getApplicationActivity(n.id, l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                        s = (0, h.Z)(e, t, n, l, i);
                        break;
                    case F.mFx.JOIN_REQUEST:
                        if (null == (i = w.Z.getApplicationActivity(l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                        s = (0, x.Z)(e, n, l, i);
                }
                if (null == s) return !1;
                let r = ei(s, {
                    priority: 2,
                    expirationExternallyManaged: !0,
                    channelId: e.id
                });
                return null != r && $(r, !1, X), !0;
            })(r, l, a);
            if (!1 !== e) return e;
        }
        if (((!L.Z.isInstanceLocked() || L.Z.isPinned(F.Odu.TEXT)) && s === M.Z.getChannelId()) || L.Z.getTextChatNotificationMode() === F.Ypu.DISABLED || P.Z.disableNotifications || !(0, V.eF)(l, s)) return !1;
        let d = !b.Z.isSoundDisabled(A.Ay);
        ei((0, v.Z)(r, l, a, d), {
            type: 1,
            channelId: r.id,
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
    CALL_CREATE: el,
    CALL_UPDATE: el,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        ee(en(t));
    },
    GUILD_RING_START: el,
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (
            !j.Z.getCurrentConfig({
                guildId: n,
                location: 'OverlayStopRinging'
            }).enabled
        )
            return !1;
        i.includes(O.default.getId()) && ee(en(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: s } = e,
            l = B.Z.getGame();
        return (
            null != l &&
            l.id === s &&
            (n === F.mFx.JOIN && (t = (0, p.Z)(i, l)),
            null != t &&
                void ei(t, {
                    priority: 2,
                    type: 0
                }))
        );
    },
    CLIPS_SAVE_CLIP_START: function () {
        ei((0, E.f)(H.intl.string(H.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        ei((0, E.f)(H.intl.formatToPlainString(H.t.KLhk6u, { duration: (0, U.A)(S.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        ei((0, E.f)(H.intl.string(H.t['1ZbZur'])));
    },
    STREAM_START: function (e) {
        let t = (0, E.y)();
        null != t && ei(t);
    },
    OVERLAY_CONTENT_INVENTORY_READY: function (e) {
        var t;
        let { contentInventoryEntries: n } = e;
        if (0 === n.length || ((q = n), N.Z.hasChangedRenderMode(null !== (t = D.Z.getFocusedPID()) && void 0 !== t ? t : (0, W.QF)()) || null == B.Z.getGame())) return;
        let { enabled: i, affinityThreshold: s } = C.Z.getCurrentConfig({ location: 'OverlayNotificationsStore' });
        i && (0 !== y.Z.getUserAffinities().length || null == s) && es({ contentInventoryEntries: n });
    },
    LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineUsers: t } = e;
        0 !== t.length && 0 !== q.length && es({ contentInventoryEntries: q });
    }
});
