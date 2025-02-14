n.d(t, { Z: () => er }), n(47120), n(653041);
var i,
    s,
    l,
    a = n(512722),
    r = n.n(a),
    o = n(772848),
    d = n(442837),
    c = n(570140),
    u = n(13245),
    h = n(836932),
    p = n(175553),
    g = n(158979),
    m = n(181912),
    f = n(791288),
    v = n(194295),
    Z = n(998033),
    x = n(181364),
    S = n(435064),
    E = n(668761),
    C = n(86071),
    y = n(358446),
    N = n(371651),
    I = n(428598),
    _ = n(695346),
    j = n(163612),
    T = n(314897),
    O = n(592125),
    k = n(292959),
    M = n(158776),
    b = n(944486),
    P = n(885110),
    w = n(246946),
    R = n(594174),
    D = n(974180),
    A = n(808506),
    L = n(237997),
    z = n(70956),
    V = n(150097),
    W = n(129724),
    B = n(145597),
    F = n(449224),
    U = n(981631),
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
        let i = t ? U._1z.TIMED_OUT : U._1z.DISMISSED;
        return setTimeout(() => u.Z.updateNotificationStatus(e, i), null != n ? n : Y);
    };
function ee(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U._1z.DISMISSED;
    if (null == e) return !1;
    let n = J.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = J[n];
    clearTimeout(i.timerId),
        (J = [...J]),
        t === U._1z.DISMISSED
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
    let i = (0, o.Z)(),
        s = {
            id: i,
            status: U._1z.ACTIVE,
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
    let n = F.Z.getGame();
    if (null == n || 0 === t.length) return;
    let { affinityThreshold: i } = C.Z.getCurrentConfig({ location: 'OverlayNotificationsStore' }),
        s = t;
    if (null != i) {
        var l;
        let e = I.Z.getUserAffinitiesMap();
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
        ei((0, f.Z)(n, s), {
            priority: 2,
            type: 'content-inventory',
            expirationExternallyManaged: !0,
            duration: K
        });
}
function el(e) {
    let { channelId: t, ringing: n } = e,
        i = en(t);
    if (!n.includes(T.default.getId())) return ee(i);
    if (null != i) return !1;
    let s = O.Z.getChannel(t);
    if (
        null == s ||
        !s.isRingable() ||
        ('GUILD_RING_START' === e.type &&
            !j.Z.getCurrentConfig({
                guildId: e.guildId,
                location: 'OverlayStartRinging'
            }).enabled) ||
        P.Z.getStatus() === U.Skl.DND ||
        _.QZ.getSetting()
    )
        return !1;
    let l = J.find((e) => 1 === e.type && e.channelId === t && e.messageType === U.uaV.CALL);
    null != l && ee(l.id),
        ei((0, m.Z)(s), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: s.id
        });
}
class ea extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(O.Z, R.default);
    }
    getNotifications() {
        return J;
    }
}
(l = 'OverlayNotificationsStore'),
    (s = 'displayName') in ea
        ? Object.defineProperty(ea, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (ea[s] = l);
let er = new ea(c.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        ee(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: n } = e;
        if (N.default.hasChangedRenderMode(null !== (t = A.Z.getFocusedPID()) && void 0 !== t ? t : (0, B.QF)())) return;
        let i = (function (e) {
            switch (e.type) {
                case G.nc.GO_LIVE_VOICE:
                case G.nc.GO_LIVE_NON_VOICE:
                    return (0, g.Z)(e);
                case G.nc.KEYBIND_INDICATORS:
                    return (0, y.Z)(e);
                case G.nc.NEWS:
                default:
                    return (0, x.Z)(e);
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
            e.status === U._1z.ACTIVE
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
            a = O.Z.getChannel(s),
            o = R.default.getUser(null === (t = l.author) || void 0 === t ? void 0 : t.id);
        if (null == a || null == o) return !1;
        if ((null === (n = l.activity) || void 0 === n ? void 0 : n.type) === U.mFx.JOIN || (null === (i = l.activity) || void 0 === i ? void 0 : i.type) === U.mFx.JOIN_REQUEST) {
            if (!(0, V.eF)(l, s, !0, !0)) return !1;
            let e = (function (e, t, n) {
                let i, s;
                if ((r()(null != t.activity, 'received null message activity'), n.id === T.default.getId())) return !1;
                let l = F.Z.getGame();
                if (null == l) return !1;
                switch (t.activity.type) {
                    case U.mFx.JOIN:
                        if (null == (i = M.Z.getApplicationActivity(n.id, l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                        s = (0, h.Z)(e, t, n, l, i);
                        break;
                    case U.mFx.JOIN_REQUEST:
                        if (null == (i = P.Z.getApplicationActivity(l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                        s = (0, v.Z)(e, n, l, i);
                }
                if (null == s) return !1;
                let a = ei(s, {
                    priority: 2,
                    expirationExternallyManaged: !0,
                    channelId: e.id
                });
                return null != a && $(a, !1, X), !0;
            })(a, l, o);
            if (!1 !== e) return e;
        }
        if (((!L.Z.isInstanceLocked() || L.Z.isPinned(U.Odu.TEXT)) && s === b.Z.getChannelId()) || L.Z.getTextChatNotificationMode() === U.Ypu.DISABLED || w.Z.disableNotifications || !(0, V.eF)(l, s)) return !1;
        let d = !k.Z.isSoundDisabled(D.Ay);
        ei((0, Z.Z)(a, l, o, d), {
            type: 1,
            channelId: a.id,
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
        i.includes(T.default.getId()) && ee(en(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: s } = e,
            l = F.Z.getGame();
        return (
            null != l &&
            l.id === s &&
            (n === U.mFx.JOIN && (t = (0, p.Z)(i, l)),
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
        ei((0, E.f)(H.intl.formatToPlainString(H.t.KLhk6u, { duration: (0, W.A)(S.Z.getSettings().clipsLength / 1000, !0) })));
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
        if (0 === n.length || ((q = n), N.default.hasChangedRenderMode(null !== (t = A.Z.getFocusedPID()) && void 0 !== t ? t : (0, B.QF)()) || null == F.Z.getGame())) return;
        let { enabled: i, affinityThreshold: s } = C.Z.getCurrentConfig({ location: 'OverlayNotificationsStore' });
        i && (0 !== I.Z.getUserAffinities().length || null == s) && es({ contentInventoryEntries: n });
    },
    LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineUsers: t } = e;
        0 !== t.length && 0 !== q.length && es({ contentInventoryEntries: q });
    }
});
