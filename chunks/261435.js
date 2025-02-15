n.d(t, { Z: () => er }), n(47120), n(653041);
var i,
    s,
    l,
    a = n(512722),
    o = n.n(a),
    r = n(772848),
    d = n(442837),
    c = n(570140),
    u = n(13245),
    h = n(836932),
    p = n(175553),
    g = n(158979),
    m = n(181912),
    f = n(877183),
    v = n(791288),
    Z = n(194295),
    x = n(998033),
    S = n(181364),
    E = n(435064),
    C = n(668761),
    y = n(86071),
    N = n(358446),
    I = n(371651),
    _ = n(752048),
    O = n(695346),
    j = n(163612),
    T = n(314897),
    k = n(592125),
    M = n(292959),
    b = n(158776),
    P = n(944486),
    w = n(885110),
    R = n(246946),
    D = n(594174),
    A = n(974180),
    L = n(808506),
    z = n(237997),
    V = n(70956),
    W = n(150097),
    F = n(129724),
    U = n(145597),
    B = n(449224),
    G = n(981631),
    H = n(987650),
    Y = n(388032);
let K = 5 * V.Z.Millis.SECOND,
    X = 8 * V.Z.Millis.SECOND,
    Q = 30 * V.Z.Millis.SECOND,
    J = Object.freeze({
        priority: 0,
        duration: K,
        expirationExternallyManaged: !1,
        type: 0
    }),
    q = [],
    $ = [],
    ee = (e, t, n) => {
        let i = t ? G._1z.TIMED_OUT : G._1z.DISMISSED;
        return setTimeout(() => u.Z.updateNotificationStatus(e, i), null != n ? n : K);
    };
function et(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G._1z.DISMISSED;
    if (null == e) return !1;
    let n = q.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = q[n];
    clearTimeout(i.timerId),
        (q = [...q]),
        t === G._1z.DISMISSED
            ? q.splice(n, 1)
            : (q[n] = {
                  ...i,
                  status: t
              });
}
function en(e) {
    let t = q.length;
    return (q = q.filter((t) => 1 !== t.type || t.channelId !== e)).length !== t;
}
function ei(e) {
    let t = q.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function es(e, t) {
    let n = {
        ...J,
        ...t
    };
    if (2 !== n.priority && !z.Z.isInstanceFocused()) return null;
    let i = (0, r.Z)(),
        s = {
            id: i,
            status: G._1z.ACTIVE,
            timerId: ee(i, n.expirationExternallyManaged, n.duration),
            props: e,
            ...n
        },
        l = (q = [...q]).findIndex((e) => e.priority <= n.priority);
    return -1 === l ? q.push(s) : q.splice(l, 0, s), q.length > 10 && clearTimeout(q.pop().timerId), i;
}
function el(e) {
    let { contentInventoryEntries: t } = e;
    if (!z.Z.showInviteNotification) return !1;
    let n = B.Z.getGame();
    if (null == n || 0 === t.length) return;
    let { affinityThreshold: i } = y.Z.getCurrentConfig({ location: 'OverlayNotificationsStore' }),
        s = t;
    if (null != i) {
        var l;
        let e = _.Z.getUserAffinitiesMap();
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
        es((0, v.Z)(n, s), {
            priority: 2,
            type: 'content-inventory',
            expirationExternallyManaged: !0,
            duration: X
        });
}
function ea(e) {
    let { channelId: t, ringing: n } = e,
        i = ei(t);
    if (!n.includes(T.default.getId())) return et(i);
    if (null != i) return !1;
    let s = k.Z.getChannel(t);
    if (
        null == s ||
        !s.isRingable() ||
        ('GUILD_RING_START' === e.type &&
            !j.Z.getCurrentConfig({
                guildId: e.guildId,
                location: 'OverlayStartRinging'
            }).enabled) ||
        w.Z.getStatus() === G.Skl.DND ||
        O.QZ.getSetting()
    )
        return !1;
    let l = q.find((e) => 1 === e.type && e.channelId === t && e.messageType === G.uaV.CALL);
    null != l && et(l.id),
        es((0, m.Z)(s), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: s.id
        });
}
class eo extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(k.Z, D.default);
    }
    getNotifications() {
        return q;
    }
}
(l = 'OverlayNotificationsStore'),
    (s = 'displayName') in eo
        ? Object.defineProperty(eo, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (eo[s] = l);
let er = new eo(c.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        et(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        var t;
        let { nudges: n } = e;
        if (I.default.hasChangedRenderMode(null !== (t = L.Z.getFocusedPID()) && void 0 !== t ? t : (0, U.QF)())) return;
        let i = (function (e) {
            switch (e.type) {
                case H.nc.OOP_WELCOME:
                    return (0, f.Z)(e);
                case H.nc.GO_LIVE_VOICE:
                case H.nc.GO_LIVE_NON_VOICE:
                    return (0, g.Z)(e);
                case H.nc.KEYBIND_INDICATORS:
                    return (0, N.Z)(e);
                case H.nc.NEWS:
                default:
                    return (0, S.Z)(e);
            }
        })(n[0]);
        null != i &&
            es(i, {
                priority: 2,
                duration: X
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) return !1;
        q = q.map((e) =>
            e.status === G._1z.ACTIVE
                ? (clearTimeout(e.timerId),
                  {
                      ...e,
                      timerId: ee(e.id, e.expirationExternallyManaged)
                  })
                : e
        );
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i;
        let { channelId: s, message: l } = e,
            a = k.Z.getChannel(s),
            r = D.default.getUser(null === (t = l.author) || void 0 === t ? void 0 : t.id);
        if (null == a || null == r) return !1;
        if ((null === (n = l.activity) || void 0 === n ? void 0 : n.type) === G.mFx.JOIN || (null === (i = l.activity) || void 0 === i ? void 0 : i.type) === G.mFx.JOIN_REQUEST) {
            if (!(0, W.eF)(l, s, !0, !0)) return !1;
            let e = (function (e, t, n) {
                let i, s;
                if ((o()(null != t.activity, 'received null message activity'), n.id === T.default.getId())) return !1;
                let l = B.Z.getGame();
                if (null == l) return !1;
                switch (t.activity.type) {
                    case G.mFx.JOIN:
                        if (null == (i = b.Z.getApplicationActivity(n.id, l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                        s = (0, h.Z)(e, t, n, l, i);
                        break;
                    case G.mFx.JOIN_REQUEST:
                        if (null == (i = w.Z.getApplicationActivity(l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                        s = (0, Z.Z)(e, n, l, i);
                }
                if (null == s) return !1;
                let a = es(s, {
                    priority: 2,
                    expirationExternallyManaged: !0,
                    channelId: e.id
                });
                return null != a && ee(a, !1, Q), !0;
            })(a, l, r);
            if (!1 !== e) return e;
        }
        if (((!z.Z.isInstanceLocked() || z.Z.isPinned(G.Odu.TEXT)) && s === P.Z.getChannelId()) || z.Z.getTextChatNotificationMode() === G.Ypu.DISABLED || R.Z.disableNotifications || !(0, W.eF)(l, s)) return !1;
        let d = !M.Z.isSoundDisabled(A.Ay);
        es((0, x.Z)(a, l, r, d), {
            type: 1,
            channelId: a.id,
            messageType: l.type
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
    CALL_CREATE: ea,
    CALL_UPDATE: ea,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        et(ei(t));
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
        i.includes(T.default.getId()) && et(ei(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: s } = e,
            l = B.Z.getGame();
        return (
            null != l &&
            l.id === s &&
            (n === G.mFx.JOIN && (t = (0, p.Z)(i, l)),
            null != t &&
                void es(t, {
                    priority: 2,
                    type: 0
                }))
        );
    },
    CLIPS_SAVE_CLIP_START: function () {
        es((0, C.f)(Y.intl.string(Y.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        es((0, C.f)(Y.intl.formatToPlainString(Y.t.KLhk6u, { duration: (0, F.A)(E.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        es((0, C.f)(Y.intl.string(Y.t['1ZbZur'])));
    },
    STREAM_START: function (e) {
        let t = (0, C.y)();
        null != t && es(t);
    },
    OVERLAY_CONTENT_INVENTORY_READY: function (e) {
        var t;
        let { contentInventoryEntries: n } = e;
        if (0 === n.length || (($ = n), I.default.hasChangedRenderMode(null !== (t = L.Z.getFocusedPID()) && void 0 !== t ? t : (0, U.QF)()) || null == B.Z.getGame())) return;
        let { enabled: i, affinityThreshold: s } = y.Z.getCurrentConfig({ location: 'OverlayNotificationsStore' });
        i && (0 !== _.Z.getUserAffinities().length || null == s) && el({ contentInventoryEntries: n });
    },
    LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineUsers: t } = e;
        0 !== t.length && 0 !== $.length && el({ contentInventoryEntries: $ });
    }
});
