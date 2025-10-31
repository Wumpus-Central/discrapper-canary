n.d(t, { Z: () => eo }), n(388685), n(539854);
var i,
    r = n(512722),
    l = n.n(r),
    o = n(772848),
    s = n(442837),
    a = n(579092),
    c = n(570140),
    d = n(13245),
    u = n(836932),
    h = n(175553),
    p = n(158979),
    f = n(181912),
    g = n(877183),
    m = n(194295),
    y = n(998033),
    O = n(181364),
    _ = n(435064),
    v = n(668761),
    b = n(864060),
    E = n(358446),
    S = n(371651),
    x = n(624864),
    Z = n(695346),
    j = n(163612),
    C = n(314897),
    I = n(592125),
    P = n(292959),
    w = n(158776),
    N = n(944486),
    T = n(885110),
    D = n(246946),
    k = n(594174),
    R = n(974180),
    A = n(808506),
    L = n(237997),
    M = n(70956),
    z = n(145597),
    V = n(449224),
    W = n(981631),
    U = n(987650),
    G = n(388032);
function B(e, t, n) {
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
function F(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}
function H(e, t) {
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
let Y = new a.Yd("LegacyOverlayNotificationsStore"),
    K = 5 * M.Z.Millis.SECOND,
    X = 8 * M.Z.Millis.SECOND,
    q = 30 * M.Z.Millis.SECOND,
    J = Object.freeze({
        priority: 0,
        duration: K,
        expirationExternallyManaged: !1,
        type: 0,
    }),
    Q = [],
    $ = (e, t, n) => {
        let i = t ? W._1z.TIMED_OUT : W._1z.DISMISSED;
        return setTimeout(() => d.Z.updateNotificationStatus(e, i), null != n ? n : K);
    };
function ee(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W._1z.DISMISSED;
    if (null == e) return !1;
    let n = Q.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = Q[n];
    clearTimeout(i.timerId), (Q = [...Q]), t === W._1z.DISMISSED ? Q.splice(n, 1) : (Q[n] = H(F({}, i), { status: t }));
}
function et(e) {
    let t = Q.length;
    return (Q = Q.filter((t) => 1 !== t.type || t.channelId !== e)).length !== t;
}
function en(e) {
    let t = Q.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function ei(e, t) {
    let n = F({}, J, t);
    if (2 !== n.priority && !L.default.isInstanceFocused()) return null;
    let i = (0, o.Z)(),
        r = F(
            {
                id: i,
                status: W._1z.ACTIVE,
                timerId: $(i, n.expirationExternallyManaged, n.duration),
                props: e,
            },
            n,
        ),
        l = (Q = [...Q]).findIndex((e) => e.priority <= n.priority);
    return -1 === l ? Q.push(r) : Q.splice(l, 0, r), Q.length > 10 && clearTimeout(Q.pop().timerId), i;
}
function er(e) {
    let { channelId: t, ringing: n } = e,
        i = en(t);
    if (!n.includes(C.default.getId())) return ee(i);
    if (null != i) return !1;
    let r = I.Z.getChannel(t);
    if (
        null == r ||
        !r.isRingable() ||
        ("GUILD_RING_START" === e.type &&
            !j.Z.getCurrentConfig({
                guildId: e.guildId,
                location: "OverlayStartRinging",
            }).enabled) ||
        T.Z.getStatus() === W.Skl.DND ||
        Z.QZ.getSetting()
    )
        return !1;
    let l = Q.find((e) => 1 === e.type && e.channelId === t && e.messageType === W.uaV.CALL);
    null != l && ee(l.id),
        ei((0, f.Z)(r), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: r.id,
        });
}
class el extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(
            C.default,
            I.Z,
            _.Z,
            P.Z,
            A.default,
            S.default,
            V.Z,
            x.Z,
            L.default,
            w.Z,
            N.Z,
            T.Z,
            D.Z,
            k.default,
        );
    }
    getNotifications() {
        return Q;
    }
}
B(el, "displayName", "OverlayNotificationsStore");
let eo = new el(
    c.Z,
    !__OVERLAY__
        ? {}
        : {
              OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
                  let { notificationId: t, status: n } = e;
                  ee(t, n);
              },
              OVERLAY_MOUNTED: function (e) {
                  var t;
                  let { nudges: n } = e;
                  if (S.default.hasChangedRenderMode(null != (t = A.default.getFocusedPID()) ? t : (0, z.getPID)()))
                      return void Y.info("Overlay mounted, but render modes have changed", { nudges: n });
                  let i = n[0];
                  if (
                      (Y.info("Overlay mounted", {
                          nudges: n,
                          selectedNudge: i,
                      }),
                      null == i)
                  )
                      return;
                  let r = (function (e) {
                      switch (e.type) {
                          case U.nc.OOP_WELCOME:
                              return (0, g.Z)(e);
                          case U.nc.GO_LIVE_VOICE:
                          case U.nc.GO_LIVE_NON_VOICE:
                              return (0, p.Z)(e);
                          case U.nc.KEYBIND_INDICATORS:
                              return (0, E.Z)(e);
                          case U.nc.NEWS:
                          default:
                              return (0, O.Z)(e);
                      }
                  })(i);
                  null != r &&
                      ei(r, {
                          priority: 2,
                          duration: X,
                      });
              },
              OVERLAY_SET_INPUT_LOCKED: function (e) {
                  let { locked: t } = e;
                  if (t) return !1;
                  Q = Q.map((e) =>
                      e.status === W._1z.ACTIVE
                          ? (clearTimeout(e.timerId), H(F({}, e), { timerId: $(e.id, e.expirationExternallyManaged) }))
                          : e,
                  );
              },
              MESSAGE_CREATE: function (e) {
                  var t, n, i;
                  let { channelId: r, message: o } = e,
                      s = I.Z.getChannel(r),
                      a = k.default.getUser(null == (t = o.author) ? void 0 : t.id);
                  if (null == s || null == a) return !1;
                  if (
                      (null == (n = o.activity) ? void 0 : n.type) === W.mFx.JOIN ||
                      (null == (i = o.activity) ? void 0 : i.type) === W.mFx.JOIN_REQUEST
                  ) {
                      if (!(0, b.eF)(o, r, !0, !0)) return !1;
                      let e = (function (e, t, n) {
                          let i, r;
                          if ((l()(null != t.activity, "received null message activity"), n.id === C.default.getId()))
                              return !1;
                          let o = V.Z.getGame();
                          if (null == o) return !1;
                          switch (t.activity.type) {
                              case W.mFx.JOIN:
                                  if (
                                      null == (i = w.Z.getApplicationActivity(n.id, o.id)) ||
                                      null == i.party ||
                                      i.party.id !== t.activity.party_id
                                  )
                                      return !1;
                                  r = (0, u.Z)(e, t, n, o, i);
                                  break;
                              case W.mFx.JOIN_REQUEST:
                                  if (
                                      null == (i = T.Z.getApplicationActivity(o.id)) ||
                                      null == i.party ||
                                      i.party.id !== t.activity.party_id
                                  )
                                      return !1;
                                  r = (0, m.Z)(e, n, o, i);
                          }
                          if (null == r) return !1;
                          let s = ei(r, {
                              priority: 2,
                              expirationExternallyManaged: !0,
                              channelId: e.id,
                          });
                          return null != s && $(s, !1, q), !0;
                      })(s, o, a);
                      if (!1 !== e) return e;
                  }
                  if (
                      ((!L.default.isInstanceLocked() || L.default.isPinned(W.Odu.TEXT)) && r === N.Z.getChannelId()) ||
                      x.Z.isNotificationDisabled(U.n0.TextChat) ||
                      D.Z.disableNotifications ||
                      !(0, b.eF)(o, r)
                  )
                      return !1;
                  let c = !P.Z.isSoundDisabled(R.Ay);
                  ei((0, y.Z)(s, o, a, c), {
                      type: 1,
                      channelId: s.id,
                      messageType: o.type,
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
                      !j.Z.getCurrentConfig({
                          guildId: n,
                          location: "OverlayStopRinging",
                      }).enabled
                  )
                      return !1;
                  i.includes(C.default.getId()) && ee(en(t));
              },
              ACTIVITY_USER_ACTION: function (e) {
                  let t,
                      { actionType: n, user: i, applicationId: r } = e,
                      l = V.Z.getGame();
                  return (
                      null != l &&
                      l.id === r &&
                      (n === W.mFx.JOIN && (t = (0, h.Z)(i, l)),
                      null != t &&
                          void ei(t, {
                              priority: 2,
                              type: 0,
                          }))
                  );
              },
              CLIPS_SAVE_CLIP_START: function (e) {
                  "manual" === e.clipMethod && ei((0, v.f)(G.intl.string(G.t.NBMK9m)));
              },
              CLIPS_SAVE_CLIP_ERROR: function () {
                  ei((0, v.f)(G.intl.string(G.t["1ZbZuh"])));
              },
              STREAM_START: function (e) {
                  let t = (0, v.y)();
                  null != t && ei(t);
              },
          },
);
