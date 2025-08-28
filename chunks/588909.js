n.d(t, { Z: () => Z }), n(388685);
var i = n(951288);
n(647438);
var r = n(704215),
    o = n(952265),
    l = n(24124),
    a = n(13245),
    s = n(620662),
    c = n(835473),
    u = n(442550),
    d = n(266454),
    p = n(293273),
    f = n(145597),
    h = n(32300),
    m = n(603618),
    g = n(371053),
    y = n(618373),
    O = n(620954),
    b = n(987650),
    v = n(981631),
    E = n(602091),
    _ = n(701488),
    S = n(388032),
    I = n(968803),
    x = n(336501);
function j(e) {
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
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function C(e, t) {
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
function N(e) {
    let { game: t } = e,
        n = (0, c.q)(t.id);
    return null == n
        ? null
        : (0, i.jsx)(u.f, {
              src: n.getIconURL(_.Si.LARGE),
              size: 40,
          });
}
function Z(e, t) {
    let { trackView: c, trackClick: u } = (0, O.R)(b.n0.WelcomeNudge, {
            notif_type: b.n0.WelcomeNudge,
            secondary_notif_types: t.map((e) => b.nc[e.type]),
        }),
        _ = {};
    for (let r of t)
        switch (r.type) {
            case b.nc.WELCOME: {
                let t =
                    (null == e ? void 0 : e.altId) != null
                        ? p.Z.getApplicationActivity(e.altId)
                        : (null == e ? void 0 : e.id) != null
                          ? p.Z.getApplicationActivity(e.id)
                          : null;
                null != t &&
                    (0, s.Z)(t, v.xjy.JOIN) &&
                    ((_.cancelText = S.intl.string(S.t["6F9ivr"])),
                    (_.onCancelClick = (e, n) => {
                        u("unlock"),
                            a.Z.updateNotificationStatus(n),
                            a.Z.setInputLocked(!1, (0, f.getPID)()),
                            (0, l.h7)(t, !1, v.IlC.POPOUT);
                    }));
                break;
            }
            case b.nc.GO_LIVE_VOICE:
            case b.nc.GO_LIVE_NON_VOICE: {
                let { oneClickGoLiveEnabled: e, useStreamCtaCopy: t } = (0, h.tU)("welcomeNotification");
                (_.confirmText = S.intl.string(t ? S.t.pEuzio : S.t.U76Ft7)),
                    (_.onConfirmClick = e
                        ? (e, t) => {
                              a.Z.updateNotificationStatus(t);
                              let n = () => {
                                      u("unlock"), a.Z.setInputLocked(!1, (0, f.getPID)());
                                  },
                                  i = () => {
                                      u("confirm");
                                  };
                              (0, g.N)({
                                  pid: (0, f.getPID)(),
                                  analyticsLocation: v.Sbl.OVERLAY_NUDGE,
                                  allowOneClickGoLive: !0,
                                  onBeforeShowModal: n,
                                  onOneClickGoLive: i,
                                  appContext: v.IlC.POPOUT,
                              });
                          }
                        : (e, t) => {
                              u("unlock"),
                                  a.Z.updateNotificationStatus(t),
                                  a.Z.setInputLocked(!1, (0, f.getPID)()),
                                  (0, o.ZD)(
                                      async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("38697"),
                                              n.e("46746"),
                                              n.e("79839"),
                                          ]).then(n.bind(n, 60594));
                                          return (t) =>
                                              (0, i.jsx)(
                                                  e,
                                                  C(j({}, t), {
                                                      selectSource: !1,
                                                      sourcePID: (0, f.getPID)(),
                                                      guildId: r.type === b.nc.GO_LIVE_VOICE ? r.voiceGuild.id : void 0,
                                                      selectGuild: r.type === b.nc.GO_LIVE_NON_VOICE,
                                                      analyticsLocation: v.Sbl.OVERLAY_NUDGE,
                                                  }),
                                              );
                                      },
                                      { contextKey: E.u1 },
                                  );
                          });
                break;
            }
            case b.nc.CONTENT_INVENTORY:
                (0, h.Rb)("welcomeNotification").allowActivityWidget &&
                    ((_.renderFooter = () =>
                        (0, i.jsx)(m.lX, {
                            gamingId: null == e ? void 0 : e.id,
                            maxUserShowCount: 5,
                            className: x.container,
                        })),
                    (_.onNotificationShow = () => {
                        a.Z.track(v.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                            user_ids: r.entries.map((e) => e.author_id),
                            entry_ids: r.entries.map((e) => e.id),
                        });
                    }));
        }
    let Z = (0, d.zu)(r.z.OVERLAY_OOP_WELCOME_NUX),
        w = Z ? S.intl.string(S.t.KWDIrq) : S.intl.string(S.t["prl+ra"]),
        P = Z ? void 0 : S.intl.string(S.t.R3CpPT),
        T =
            null != e
                ? (0, i.jsx)(N, { game: e })
                : (0, i.jsx)("img", {
                      src: n(328756),
                      className: I.icon,
                      alt: "",
                  });
    return C(
        j(
            {
                icon: T,
                title: w,
                body: P,
                hint: () => (0, y.Q)((0, O.P)(), S.t["z8/sgI"], S.intl.string(S.t.jZkzVF), !0),
                confirmText: Z ? void 0 : S.intl.string(S.t.TxyTbm),
                onConfirmClick: Z
                    ? void 0
                    : () => {
                          u("unlock"),
                              a.Z.setInputLocked(!1, (0, f.getPID)()),
                              Z || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX);
                      },
            },
            _,
        ),
        {
            onNotificationShow: (e) => {
                var t;
                c(), Z || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX), null == (t = _.onNotificationShow) || t.call(_, e);
            },
            onNotificationClick: (e, t) => {
                var n;
                u("unlock"),
                    a.Z.setInputLocked(!1, (0, f.getPID)()),
                    Z || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = _.onNotificationClick) || n.call(_, e, t);
            },
            onDismissClick: (e, t) => {
                var n;
                u("dismiss"),
                    Z || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = _.onDismissClick) || n.call(_, e, t);
            },
        },
    );
}
