n(47120), n(653041);
var i,
    s,
    r,
    o,
    a,
    l,
    c,
    d,
    u = n(512722),
    h = n.n(u),
    p = n(772848),
    f = n(442837),
    g = n(570140),
    m = n(13245),
    v = n(836932),
    x = n(175553),
    S = n(158979),
    Z = n(181912),
    _ = n(791288),
    E = n(194295),
    C = n(998033),
    I = n(181364),
    N = n(435064),
    y = n(668761),
    b = n(86071),
    T = n(358446),
    O = n(371651),
    j = n(428598),
    M = n(695346),
    k = n(314897),
    w = n(592125),
    P = n(292959),
    R = n(158776),
    A = n(944486),
    L = n(885110),
    D = n(246946),
    z = n(594174),
    B = n(974180),
    V = n(808506),
    W = n(237997),
    U = n(70956),
    F = n(150097),
    G = n(129724),
    H = n(145597),
    Y = n(449224),
    K = n(981631),
    X = n(987650),
    Q = n(388032);
((o = i || (i = {}))[(o.GENERIC = 0)] = 'GENERIC'), (o[(o.TEXT = 1)] = 'TEXT'), (o[(o.INCOMING_CALL = 2)] = 'INCOMING_CALL'), ((a = s || (s = {}))[(a.NORMAL = 0)] = 'NORMAL'), (a[(a.HIGH = 1)] = 'HIGH'), (a[(a.URGENT = 2)] = 'URGENT');
let J = 5 * U.Z.Millis.SECOND,
    q = 8 * U.Z.Millis.SECOND,
    $ = 30 * U.Z.Millis.SECOND,
    ee = Object.freeze({
        priority: 0,
        duration: J,
        expirationExternallyManaged: !1,
        type: 0
    }),
    et = [],
    en = [],
    ei = (e, t, n) => {
        let i = t ? K._1z.TIMED_OUT : K._1z.DISMISSED;
        return setTimeout(() => m.Z.updateNotificationStatus(e, i), null != n ? n : J);
    };
function es(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K._1z.DISMISSED;
    if (null == e) return !1;
    let n = et.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = et[n];
    clearTimeout(i.timerId),
        (et = [...et]),
        t === K._1z.DISMISSED
            ? et.splice(n, 1)
            : (et[n] = {
                  ...i,
                  status: t
              });
}
function er(e) {
    let t = et.length;
    return (et = et.filter((t) => 1 !== t.type || t.channelId !== e || !1)).length !== t;
}
function eo(e) {
    let t = et.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function ea(e, t) {
    let n = {
        ...ee,
        ...t
    };
    if (2 !== n.priority && !W.Z.isInstanceFocused()) return null;
    let i = (0, p.Z)(),
        s = {
            id: i,
            status: K._1z.ACTIVE,
            timerId: ei(i, n.expirationExternallyManaged, n.duration),
            props: e,
            ...n
        },
        r = (et = [...et]).findIndex((e) => e.priority <= n.priority);
    return -1 === r ? et.push(s) : et.splice(r, 0, s), et.length > 10 && clearTimeout(et.pop().timerId), i;
}
function el(e) {
    let { contentInventoryEntries: t } = e;
    if (!W.Z.showInviteNotification) return !1;
    let n = Y.Z.getGame();
    if (null == n || 0 === t.length) return;
    let { affinityThreshold: i } = b.Z.getCurrentConfig({ location: 'OverlayNotificationsStore' }, { autoTrackExposure: !0 }),
        s = t;
    if (null != i) {
        var r;
        let e = j.Z.getUserAffinitiesMap();
        s =
            null !==
                (r = t.filter((t) => {
                    var n;
                    let s = null === (n = e.get(t.author_id)) || void 0 === n ? void 0 : n.communicationProbability;
                    return null != s && s >= i;
                })) && void 0 !== r
                ? r
                : [];
    }
    if (0 !== s.length)
        ea((0, _.Z)(n, s), {
            priority: 2,
            type: 'content-inventory',
            expirationExternallyManaged: !0,
            duration: q
        });
}
function ec(e) {
    let { channelId: t, ringing: n } = e,
        i = eo(t);
    if (!n.includes(k.default.getId())) return es(i);
    if (null != i) return !1;
    let s = w.Z.getChannel(t);
    if (null == s || !s.isPrivate() || L.Z.getStatus() === K.Skl.DND || M.QZ.getSetting()) return !1;
    let r = et.find((e) => 1 === e.type && e.channelId === t && e.messageType === K.uaV.CALL);
    null != r && es(r.id),
        ea((0, Z.Z)(s), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: s.id
        });
}
class ed extends (r = f.ZP.Store) {
    initialize() {
        this.waitFor(w.Z, z.default);
    }
    getNotifications() {
        return et;
    }
}
(d = 'OverlayNotificationsStore'),
    (c = 'displayName') in (l = ed)
        ? Object.defineProperty(l, c, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[c] = d),
    (t.Z = new ed(g.Z, {
        OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
            let { notificationId: t, status: n } = e;
            es(t, n);
        },
        OVERLAY_MOUNTED: function (e) {
            var t;
            let { nudges: n } = e;
            if (O.Z.hasChangedRenderMode(null !== (t = V.Z.getFocusedPID()) && void 0 !== t ? t : (0, H.QF)())) return;
            let i = (function (e) {
                switch (e.type) {
                    case X.nc.GO_LIVE_VOICE:
                    case X.nc.GO_LIVE_NON_VOICE:
                        return (0, S.Z)(e);
                    case X.nc.KEYBIND_INDICATORS:
                        return (0, T.Z)(e);
                    case X.nc.NEWS:
                    default:
                        return (0, I.Z)(e);
                }
            })(n[0]);
            null != i &&
                ea(i, {
                    priority: 2,
                    duration: q
                });
        },
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            if (t) return !1;
            et = et.map((e) =>
                e.status === K._1z.ACTIVE
                    ? (clearTimeout(e.timerId),
                      {
                          ...e,
                          timerId: ei(e.id, e.expirationExternallyManaged)
                      })
                    : e
            );
        },
        MESSAGE_CREATE: function (e) {
            var t, n, i;
            let { channelId: s, message: r } = e,
                o = w.Z.getChannel(s),
                a = z.default.getUser(null === (t = r.author) || void 0 === t ? void 0 : t.id);
            if (null == o || null == a) return !1;
            if ((null === (n = r.activity) || void 0 === n ? void 0 : n.type) === K.mFx.JOIN || (null === (i = r.activity) || void 0 === i ? void 0 : i.type) === K.mFx.JOIN_REQUEST) {
                if (!(0, F.eF)(r, s, !0, !0)) return !1;
                let e = (function (e, t, n) {
                    let i, s;
                    if ((h()(null != t.activity, 'received null message activity'), n.id === k.default.getId())) return !1;
                    let r = Y.Z.getGame();
                    if (null == r) return !1;
                    switch (t.activity.type) {
                        case K.mFx.JOIN:
                            if (null == (i = R.Z.getApplicationActivity(n.id, r.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                            s = (0, v.Z)(e, t, n, r, i);
                            break;
                        case K.mFx.JOIN_REQUEST:
                            if (null == (i = L.Z.getApplicationActivity(r.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                            s = (0, E.Z)(e, n, r, i);
                    }
                    if (null == s) return !1;
                    let o = ea(s, {
                        priority: 2,
                        expirationExternallyManaged: !0,
                        channelId: e.id
                    });
                    return null != o && ei(o, !1, $), !0;
                })(o, r, a);
                if (!1 !== e) return e;
            }
            if (((!W.Z.isInstanceLocked() || W.Z.isPinned(K.Odu.TEXT)) && s === A.Z.getChannelId()) || W.Z.getTextChatNotificationMode() === K.Ypu.DISABLED || D.Z.disableNotifications || !(0, F.eF)(r, s)) return !1;
            let l = !P.Z.isSoundDisabled(B.Ay);
            ea((0, C.Z)(o, r, a, l), {
                type: 1,
                channelId: o.id,
                messageType: r.type
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
        CALL_CREATE: ec,
        CALL_UPDATE: ec,
        CALL_DELETE: function (e) {
            let { channelId: t } = e;
            es(eo(t));
        },
        ACTIVITY_USER_ACTION: function (e) {
            let t,
                { actionType: n, user: i, applicationId: s } = e,
                r = Y.Z.getGame();
            if (null == r || r.id !== s) return !1;
            if (n === K.mFx.JOIN) t = (0, x.Z)(i, r);
            if (null == t) return !1;
            ea(t, {
                priority: 2,
                type: 0
            });
        },
        CLIPS_SAVE_CLIP_START: function () {
            ea((0, y.f)(Q.intl.string(Q.t.NBMK9v)));
        },
        CLIPS_SAVE_CLIP: function () {
            ea((0, y.f)(Q.intl.formatToPlainString(Q.t.KLhk6u, { duration: (0, G.A)(N.Z.getSettings().clipsLength / 1000, !0) })));
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            ea((0, y.f)(Q.intl.string(Q.t['1ZbZur'])));
        },
        STREAM_START: function (e) {
            let t = (0, y.y)();
            null != t && ea(t);
        },
        OVERLAY_CONTENT_INVENTORY_READY: function (e) {
            var t;
            let { contentInventoryEntries: n } = e;
            if (0 === n.length) return;
            if (((en = n), O.Z.hasChangedRenderMode(null !== (t = V.Z.getFocusedPID()) && void 0 !== t ? t : (0, H.QF)()) || null == Y.Z.getGame())) return;
            let { enabled: i, affinityThreshold: s } = b.Z.getCurrentConfig({ location: 'OverlayNotificationsStore' }, { autoTrackExposure: !1 });
            if (!!i) (0 !== j.Z.getUserAffinities().length || null == s) && el({ contentInventoryEntries: n });
        },
        LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            0 !== t.length && 0 !== en.length && el({ contentInventoryEntries: en });
        }
    }));
