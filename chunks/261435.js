n.d(t, { Z: () => el }), n(388685), n(539854);
var i,
    r = n(512722),
    s = n.n(r),
    o = n(772848),
    l = n(442837),
    a = n(579092),
    c = n(570140),
    d = n(13245),
    u = n(836932),
    p = n(175553),
    h = n(158979),
    f = n(181912),
    g = n(877183),
    m = n(194295),
    y = n(998033),
    _ = n(181364),
    O = n(435064),
    b = n(668761),
    v = n(864060),
    E = n(358446),
    x = n(371651),
    S = n(624864),
    Z = n(695346),
    C = n(163612),
    j = n(314897),
    I = n(592125),
    P = n(292959),
    w = n(158776),
    T = n(944486),
    N = n(885110),
    D = n(246946),
    k = n(594174),
    R = n(974180),
    A = n(808506),
    L = n(237997),
    M = n(70956),
    z = n(129724),
    V = n(145597),
    W = n(449224),
    U = n(981631),
    G = n(987650),
    B = n(388032);
function F(e, t, n) {
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
function H(e) {
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
let K = new a.Yd("LegacyOverlayNotificationsStore"),
    X = 5 * M.Z.Millis.SECOND,
    q = 8 * M.Z.Millis.SECOND,
    J = 30 * M.Z.Millis.SECOND,
    Q = Object.freeze({
        priority: 0,
        duration: X,
        expirationExternallyManaged: !1,
        type: 0,
    }),
    $ = [],
    ee = (e, t, n) => {
        let i = t ? U._1z.TIMED_OUT : U._1z.DISMISSED;
        return setTimeout(() => d.Z.updateNotificationStatus(e, i), null != n ? n : X);
    };
function et(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U._1z.DISMISSED;
    if (null == e) return !1;
    let n = $.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = $[n];
    clearTimeout(i.timerId), ($ = [...$]), t === U._1z.DISMISSED ? $.splice(n, 1) : ($[n] = Y(H({}, i), { status: t }));
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
    let n = H({}, Q, t);
    if (2 !== n.priority && !L.default.isInstanceFocused()) return null;
    let i = (0, o.Z)(),
        r = H(
            {
                id: i,
                status: U._1z.ACTIVE,
                timerId: ee(i, n.expirationExternallyManaged, n.duration),
                props: e,
            },
            n,
        ),
        s = ($ = [...$]).findIndex((e) => e.priority <= n.priority);
    return -1 === s ? $.push(r) : $.splice(s, 0, r), $.length > 10 && clearTimeout($.pop().timerId), i;
}
function es(e) {
    let { channelId: t, ringing: n } = e,
        i = ei(t);
    if (!n.includes(j.default.getId())) return et(i);
    if (null != i) return !1;
    let r = I.Z.getChannel(t);
    if (
        null == r ||
        !r.isRingable() ||
        ("GUILD_RING_START" === e.type &&
            !C.Z.getCurrentConfig({
                guildId: e.guildId,
                location: "OverlayStartRinging",
            }).enabled) ||
        N.Z.getStatus() === U.Skl.DND ||
        Z.QZ.getSetting()
    )
        return !1;
    let s = $.find((e) => 1 === e.type && e.channelId === t && e.messageType === U.uaV.CALL);
    null != s && et(s.id),
        er((0, f.Z)(r), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: r.id,
        });
}
class eo extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(
            j.default,
            I.Z,
            O.Z,
            P.Z,
            A.default,
            x.default,
            W.Z,
            S.Z,
            L.default,
            w.Z,
            T.Z,
            N.Z,
            D.Z,
            k.default,
        );
    }
    getNotifications() {
        return $;
    }
}
F(eo, "displayName", "OverlayNotificationsStore");
let el = new eo(
    c.Z,
    !__OVERLAY__
        ? {}
        : {
              OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
                  let { notificationId: t, status: n } = e;
                  et(t, n);
              },
              OVERLAY_MOUNTED: function (e) {
                  var t;
                  let { nudges: n } = e;
                  if (x.default.hasChangedRenderMode(null != (t = A.default.getFocusedPID()) ? t : (0, V.getPID)()))
                      return void K.info("Overlay mounted, but render modes have changed", { nudges: n });
                  let i = n[0];
                  if (
                      (K.info("Overlay mounted", {
                          nudges: n,
                          selectedNudge: i,
                      }),
                      null == i)
                  )
                      return;
                  let r = (function (e) {
                      switch (e.type) {
                          case G.nc.OOP_WELCOME:
                              return (0, g.Z)(e);
                          case G.nc.GO_LIVE_VOICE:
                          case G.nc.GO_LIVE_NON_VOICE:
                              return (0, h.Z)(e);
                          case G.nc.KEYBIND_INDICATORS:
                              return (0, E.Z)(e);
                          case G.nc.NEWS:
                          default:
                              return (0, _.Z)(e);
                      }
                  })(i);
                  null != r &&
                      er(r, {
                          priority: 2,
                          duration: q,
                      });
              },
              OVERLAY_SET_INPUT_LOCKED: function (e) {
                  let { locked: t } = e;
                  if (t) return !1;
                  $ = $.map((e) =>
                      e.status === U._1z.ACTIVE
                          ? (clearTimeout(e.timerId), Y(H({}, e), { timerId: ee(e.id, e.expirationExternallyManaged) }))
                          : e,
                  );
              },
              MESSAGE_CREATE: function (e) {
                  var t, n, i;
                  let { channelId: r, message: o } = e,
                      l = I.Z.getChannel(r),
                      a = k.default.getUser(null == (t = o.author) ? void 0 : t.id);
                  if (null == l || null == a) return !1;
                  if (
                      (null == (n = o.activity) ? void 0 : n.type) === U.mFx.JOIN ||
                      (null == (i = o.activity) ? void 0 : i.type) === U.mFx.JOIN_REQUEST
                  ) {
                      if (!(0, v.eF)(o, r, !0, !0)) return !1;
                      let e = (function (e, t, n) {
                          let i, r;
                          if ((s()(null != t.activity, "received null message activity"), n.id === j.default.getId()))
                              return !1;
                          let o = W.Z.getGame();
                          if (null == o) return !1;
                          switch (t.activity.type) {
                              case U.mFx.JOIN:
                                  if (
                                      null == (i = w.Z.getApplicationActivity(n.id, o.id)) ||
                                      null == i.party ||
                                      i.party.id !== t.activity.party_id
                                  )
                                      return !1;
                                  r = (0, u.Z)(e, t, n, o, i);
                                  break;
                              case U.mFx.JOIN_REQUEST:
                                  if (
                                      null == (i = N.Z.getApplicationActivity(o.id)) ||
                                      null == i.party ||
                                      i.party.id !== t.activity.party_id
                                  )
                                      return !1;
                                  r = (0, m.Z)(e, n, o, i);
                          }
                          if (null == r) return !1;
                          let l = er(r, {
                              priority: 2,
                              expirationExternallyManaged: !0,
                              channelId: e.id,
                          });
                          return null != l && ee(l, !1, J), !0;
                      })(l, o, a);
                      if (!1 !== e) return e;
                  }
                  if (
                      ((!L.default.isInstanceLocked() || L.default.isPinned(U.Odu.TEXT)) && r === T.Z.getChannelId()) ||
                      S.Z.isNotificationDisabled(G.n0.TextChat) ||
                      D.Z.disableNotifications ||
                      !(0, v.eF)(o, r)
                  )
                      return !1;
                  let c = !P.Z.isSoundDisabled(R.Ay);
                  er((0, y.Z)(l, o, a, c), {
                      type: 1,
                      channelId: l.id,
                      messageType: o.type,
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
              CALL_CREATE: es,
              CALL_UPDATE: es,
              CALL_DELETE: function (e) {
                  let { channelId: t } = e;
                  et(ei(t));
              },
              GUILD_RING_START: es,
              GUILD_RING_STOP: function (e) {
                  let { channelId: t, guildId: n, ringing: i } = e;
                  if (
                      !C.Z.getCurrentConfig({
                          guildId: n,
                          location: "OverlayStopRinging",
                      }).enabled
                  )
                      return !1;
                  i.includes(j.default.getId()) && et(ei(t));
              },
              ACTIVITY_USER_ACTION: function (e) {
                  let t,
                      { actionType: n, user: i, applicationId: r } = e,
                      s = W.Z.getGame();
                  return (
                      null != s &&
                      s.id === r &&
                      (n === U.mFx.JOIN && (t = (0, p.Z)(i, s)),
                      null != t &&
                          void er(t, {
                              priority: 2,
                              type: 0,
                          }))
                  );
              },
              CLIPS_SAVE_CLIP_START: function () {
                  er((0, b.f)(B.intl.string(B.t.NBMK9m)));
              },
              CLIPS_SAVE_CLIP: function () {
                  er(
                      (0, b.f)(
                          B.intl.formatToPlainString(B.t.KLhk6s, {
                              duration: (0, z.A)(O.Z.getSettings().clipsLength / 1000, !0),
                          }),
                      ),
                  );
              },
              CLIPS_SAVE_CLIP_ERROR: function () {
                  er((0, b.f)(B.intl.string(B.t["1ZbZuh"])));
              },
              STREAM_START: function (e) {
                  let t = (0, b.y)();
                  null != t && er(t);
              },
          },
);
