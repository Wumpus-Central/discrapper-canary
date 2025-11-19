n.d(t, { Z: () => eo }), n(388685), n(539854);
var i,
    r = n(512722),
    o = n.n(r),
    l = n(772848),
    s = n(442837),
    a = n(579092),
    c = n(570140),
    d = n(13245),
    u = n(836932),
    h = n(175553),
    p = n(158979),
    f = n(181912),
    g = n(194295),
    m = n(998033),
    y = n(181364),
    b = n(435064),
    _ = n(668761),
    v = n(864060),
    O = n(358446),
    E = n(371651),
    S = n(624864),
    Z = n(695346),
    j = n(163612),
    x = n(314897),
    C = n(592125),
    I = n(292959),
    P = n(158776),
    w = n(944486),
    T = n(885110),
    N = n(246946),
    D = n(594174),
    k = n(974180),
    R = n(808506),
    A = n(237997),
    L = n(70956),
    M = n(145597),
    z = n(449224),
    V = n(981631),
    W = n(987650),
    U = n(388032);
function G(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                G(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
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
let H = new a.Yd("LegacyOverlayNotificationsStore"),
    Y = 5 * L.Z.Millis.SECOND,
    K = 8 * L.Z.Millis.SECOND,
    X = 30 * L.Z.Millis.SECOND,
    q = Object.freeze({
        priority: 0,
        duration: Y,
        expirationExternallyManaged: !1,
        type: 0,
    }),
    J = [],
    Q = (e, t, n) => {
        let i = t ? V._1z.TIMED_OUT : V._1z.DISMISSED;
        return setTimeout(() => d.Z.updateNotificationStatus(e, i), null != n ? n : Y);
    };
function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V._1z.DISMISSED;
    if (null == e) return !1;
    let n = J.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = J[n];
    clearTimeout(i.timerId), (J = [...J]), t === V._1z.DISMISSED ? J.splice(n, 1) : (J[n] = F(B({}, i), { status: t }));
}
function ee(e) {
    let t = J.length;
    return (J = J.filter((t) => 1 !== t.type || t.channelId !== e)).length !== t;
}
function et(e) {
    let t = J.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function en(e, t) {
    let n = B({}, q, t);
    if (2 !== n.priority && !A.default.isInstanceFocused()) return null;
    let i = (0, l.Z)(),
        r = B(
            {
                id: i,
                status: V._1z.ACTIVE,
                timerId: Q(i, n.expirationExternallyManaged, n.duration),
                props: e,
            },
            n,
        ),
        o = (J = [...J]).findIndex((e) => e.priority <= n.priority);
    return -1 === o ? J.push(r) : J.splice(o, 0, r), J.length > 10 && clearTimeout(J.pop().timerId), i;
}
function ei(e) {
    let { channelId: t, ringing: n } = e,
        i = et(t);
    if (!n.includes(x.default.getId())) return $(i);
    if (null != i) return !1;
    let r = C.Z.getChannel(t);
    if (
        null == r ||
        !r.isRingable() ||
        ("GUILD_RING_START" === e.type &&
            !j.Z.getCurrentConfig({
                guildId: e.guildId,
                location: "OverlayStartRinging",
            }).enabled) ||
        T.Z.getStatus() === V.Skl.DND ||
        Z.QZ.getSetting()
    )
        return !1;
    let o = J.find((e) => 1 === e.type && e.channelId === t && e.messageType === V.uaV.CALL);
    null != o && $(o.id),
        en((0, f.Z)(r), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: r.id,
        });
}
class er extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(
            x.default,
            C.Z,
            b.Z,
            I.Z,
            R.default,
            E.default,
            z.Z,
            S.Z,
            A.default,
            P.Z,
            w.Z,
            T.Z,
            N.Z,
            D.default,
        );
    }
    getNotifications() {
        return J;
    }
}
G(er, "displayName", "OverlayNotificationsStore");
let eo = new er(
    c.Z,
    !__OVERLAY__
        ? {}
        : {
              OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
                  let { notificationId: t, status: n } = e;
                  $(t, n);
              },
              OVERLAY_MOUNTED: function (e) {
                  var t;
                  let { nudges: n } = e;
                  if (E.default.hasChangedRenderMode(null != (t = R.default.getFocusedPID()) ? t : (0, M.getPID)()))
                      return void H.info("Overlay mounted, but render modes have changed", { nudges: n });
                  let i = n[0];
                  if (
                      (H.info("Overlay mounted", {
                          nudges: n,
                          selectedNudge: i,
                      }),
                      null == i)
                  )
                      return;
                  let r = (function (e) {
                      switch (e.type) {
                          case W.nc.GO_LIVE_VOICE:
                          case W.nc.GO_LIVE_NON_VOICE:
                              return (0, p.Z)(e);
                          case W.nc.KEYBIND_INDICATORS:
                              return (0, O.Z)(e);
                          case W.nc.NEWS:
                          default:
                              return (0, y.Z)(e);
                      }
                  })(i);
                  null != r &&
                      en(r, {
                          priority: 2,
                          duration: K,
                      });
              },
              OVERLAY_SET_INPUT_LOCKED: function (e) {
                  let { locked: t } = e;
                  if (t) return !1;
                  J = J.map((e) =>
                      e.status === V._1z.ACTIVE
                          ? (clearTimeout(e.timerId), F(B({}, e), { timerId: Q(e.id, e.expirationExternallyManaged) }))
                          : e,
                  );
              },
              MESSAGE_CREATE: function (e) {
                  var t, n, i;
                  let { channelId: r, message: l } = e,
                      s = C.Z.getChannel(r),
                      a = D.default.getUser(null == (t = l.author) ? void 0 : t.id);
                  if (null == s || null == a) return !1;
                  if (
                      (null == (n = l.activity) ? void 0 : n.type) === V.mFx.JOIN ||
                      (null == (i = l.activity) ? void 0 : i.type) === V.mFx.JOIN_REQUEST
                  ) {
                      if (!(0, v.eF)(l, r, !0, !0)) return !1;
                      let e = (function (e, t, n) {
                          let i, r;
                          if ((o()(null != t.activity, "received null message activity"), n.id === x.default.getId()))
                              return !1;
                          let l = z.Z.getGame();
                          if (null == l) return !1;
                          switch (t.activity.type) {
                              case V.mFx.JOIN:
                                  if (
                                      null == (i = P.Z.getApplicationActivity(n.id, l.id)) ||
                                      null == i.party ||
                                      i.party.id !== t.activity.party_id
                                  )
                                      return !1;
                                  r = (0, u.Z)(e, t, n, l, i);
                                  break;
                              case V.mFx.JOIN_REQUEST:
                                  if (
                                      null == (i = T.Z.getApplicationActivity(l.id)) ||
                                      null == i.party ||
                                      i.party.id !== t.activity.party_id
                                  )
                                      return !1;
                                  r = (0, g.Z)(e, n, l, i);
                          }
                          if (null == r) return !1;
                          let s = en(r, {
                              priority: 2,
                              expirationExternallyManaged: !0,
                              channelId: e.id,
                          });
                          return null != s && Q(s, !1, X), !0;
                      })(s, l, a);
                      if (!1 !== e) return e;
                  }
                  if (
                      ((!A.default.isInstanceLocked() || A.default.isPinned(V.Odu.TEXT)) && r === w.Z.getChannelId()) ||
                      S.Z.isNotificationDisabled(W.n0.TextChat) ||
                      N.Z.disableNotifications ||
                      !(0, v.eF)(l, r)
                  )
                      return !1;
                  let c = !I.Z.isSoundDisabled(k.Ay);
                  en((0, m.Z)(s, l, a, c), {
                      type: 1,
                      channelId: s.id,
                      messageType: l.type,
                  });
              },
              CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  return null != t && ee(t);
              },
              MESSAGE_ACK: function (e) {
                  let { channelId: t } = e;
                  return ee(t);
              },
              CALL_CREATE: ei,
              CALL_UPDATE: ei,
              CALL_DELETE: function (e) {
                  let { channelId: t } = e;
                  $(et(t));
              },
              GUILD_RING_START: ei,
              GUILD_RING_STOP: function (e) {
                  let { channelId: t, guildId: n, ringing: i } = e;
                  if (
                      !j.Z.getCurrentConfig({
                          guildId: n,
                          location: "OverlayStopRinging",
                      }).enabled
                  )
                      return !1;
                  i.includes(x.default.getId()) && $(et(t));
              },
              ACTIVITY_USER_ACTION: function (e) {
                  let t,
                      { actionType: n, user: i, applicationId: r } = e,
                      o = z.Z.getGame();
                  return (
                      null != o &&
                      o.id === r &&
                      (n === V.mFx.JOIN && (t = (0, h.Z)(i, o)),
                      null != t &&
                          void en(t, {
                              priority: 2,
                              type: 0,
                          }))
                  );
              },
              CLIPS_SAVE_CLIP_START: function (e) {
                  "manual" === e.clipMethod && en((0, _.f)(U.intl.string(U.t.NBMK9m)));
              },
              CLIPS_SAVE_CLIP_ERROR: function () {
                  en((0, _.f)(U.intl.string(U.t["1ZbZuh"])));
              },
              STREAM_START: function (e) {
                  let t = (0, _.y)();
                  null != t && en(t);
              },
          },
);
