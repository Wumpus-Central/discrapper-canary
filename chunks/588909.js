n.d(t, { Z: () => w }), n(388685);
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
    v = n(987650),
    b = n(981631),
    E = n(602091),
    _ = n(701488),
    I = n(388032),
    S = n(968803),
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
function w(e, t) {
    let { trackView: c, trackClick: u } = (0, O.R)(v.n0.WelcomeNudge, {
            notif_type: v.n0.WelcomeNudge,
            secondary_notif_types: t.map((e) => v.nc[e.type]),
        }),
        _ = {};
    for (let r of t)
        switch (r.type) {
            case v.nc.WELCOME: {
                let t =
                    (null == e ? void 0 : e.altId) != null
                        ? p.Z.getApplicationActivity(e.altId)
                        : (null == e ? void 0 : e.id) != null
                          ? p.Z.getApplicationActivity(e.id)
                          : null;
                null != t &&
                    (0, s.Z)(t, b.xjy.JOIN) &&
                    ((_.cancelText = I.intl.string(I.t["6F9ivr"])),
                    (_.onCancelClick = (e, n) => {
                        u("unlock"),
                            a.Z.updateNotificationStatus(n),
                            a.Z.setInputLocked(!1, (0, f.getPID)()),
                            (0, l.h7)(t, !1, b.IlC.POPOUT);
                    }));
                break;
            }
            case v.nc.GO_LIVE_VOICE:
            case v.nc.GO_LIVE_NON_VOICE: {
                let { oneClickGoLiveEnabled: e, useStreamCtaCopy: t } = (0, h.tU)("welcomeNotification");
                (_.confirmText = I.intl.string(t ? I.t.pEuzio : I.t.U76Ft7)),
                    (_.onConfirmClick = e
                        ? (e, t) => {
                              a.Z.updateNotificationStatus(t);
                              let n = () => {
                                      u("go-live-modal"), a.Z.setInputLocked(!1, (0, f.getPID)());
                                  },
                                  i = () => {
                                      u("one-click-go-live");
                                  };
                              (0, g.N)({
                                  pid: (0, f.getPID)(),
                                  analyticsLocation: b.Sbl.OVERLAY_NUDGE,
                                  allowOneClickGoLive: !0,
                                  onBeforeShowModal: n,
                                  onOneClickGoLive: i,
                                  appContext: b.IlC.POPOUT,
                              });
                          }
                        : (e, t) => {
                              u("go-live-modal"),
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
                                                      guildId: r.type === v.nc.GO_LIVE_VOICE ? r.voiceGuild.id : void 0,
                                                      selectGuild: r.type === v.nc.GO_LIVE_NON_VOICE,
                                                      analyticsLocation: b.Sbl.OVERLAY_NUDGE,
                                                  }),
                                              );
                                      },
                                      { contextKey: E.u1 },
                                  );
                          });
                break;
            }
            case v.nc.CONTENT_INVENTORY:
                (0, h.Rb)("welcomeNotification").allowActivityWidget &&
                    ((_.renderFooter = () =>
                        (0, i.jsx)(m.lX, {
                            gamingId: null == e ? void 0 : e.id,
                            maxUserShowCount: 5,
                            className: x.container,
                        })),
                    (_.onNotificationShow = () => {
                        a.Z.track(b.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                            user_ids: r.entries.map((e) => e.author_id),
                            entry_ids: r.entries.map((e) => e.id),
                        });
                    }));
        }
    let w = (0, d.zu)(r.z.OVERLAY_OOP_WELCOME_NUX),
        Z = w ? I.intl.string(I.t.KWDIrq) : I.intl.string(I.t["prl+ra"]),
        P = w ? void 0 : I.intl.string(I.t.R3CpPT),
        T =
            null != e
                ? (0, i.jsx)(N, { game: e })
                : (0, i.jsx)("img", {
                      src: n(328756),
                      className: S.icon,
                      alt: "",
                  });
    return C(
        j(
            {
                icon: T,
                title: Z,
                body: P,
                hint: () => (0, y.Q)((0, O.P)(), I.t["z8/sgI"], I.intl.string(I.t.jZkzVF), !0),
                confirmText: w ? void 0 : I.intl.string(I.t.TxyTbm),
                onConfirmClick: w
                    ? void 0
                    : () => {
                          u("unlock"),
                              a.Z.setInputLocked(!1, (0, f.getPID)()),
                              w || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX);
                      },
            },
            _,
        ),
        {
            onNotificationShow: (e) => {
                var t;
                c(), w || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX), null == (t = _.onNotificationShow) || t.call(_, e);
            },
            onNotificationClick: (e, t) => {
                var n;
                u("unlock"),
                    a.Z.setInputLocked(!1, (0, f.getPID)()),
                    w || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = _.onNotificationClick) || n.call(_, e, t);
            },
            onDismissClick: (e, t) => {
                var n;
                u("dismiss"),
                    w || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = _.onDismissClick) || n.call(_, e, t);
            },
        },
    );
}
