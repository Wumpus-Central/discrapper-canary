n.d(t, { Z: () => N }), n(388685);
var i = n(951288);
n(647438);
var r = n(704215),
    l = n(952265),
    o = n(24124),
    a = n(13245),
    s = n(620662),
    u = n(835473),
    c = n(442550),
    d = n(266454),
    p = n(293273),
    h = n(145597),
    f = n(32300),
    m = n(603618),
    g = n(371053),
    y = n(618373),
    O = n(620954),
    E = n(987650),
    v = n(981631),
    S = n(602091),
    b = n(701488),
    x = n(388032),
    j = n(968803),
    I = n(336501);
function C(e) {
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
function Z(e, t) {
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
function w(e) {
    let { game: t } = e,
        n = (0, u.q)(t.id);
    return null == n
        ? null
        : (0, i.jsx)(c.f, {
              src: n.getIconURL(b.Si.LARGE),
              size: 40,
          });
}
function N(e, t) {
    let { trackView: u, trackClick: c } = (0, O.R)(E.n0.WelcomeNudge, {
            notif_type: E.n0.WelcomeNudge,
            secondary_notif_types: t.map((e) => E.nc[e.type]),
        }),
        b = {};
    for (let r of t)
        switch (r.type) {
            case E.nc.WELCOME: {
                let t =
                    (null == e ? void 0 : e.altId) != null
                        ? p.Z.getApplicationActivity(e.altId)
                        : (null == e ? void 0 : e.id) != null
                          ? p.Z.getApplicationActivity(e.id)
                          : null;
                null != t &&
                    (0, s.Z)(t, v.xjy.JOIN) &&
                    ((b.cancelText = x.intl.string(x.t["6F9ivr"])),
                    (b.onCancelClick = (e, n) => {
                        c("unlock"),
                            a.Z.updateNotificationStatus(n),
                            a.Z.setInputLocked(!1, (0, h.getPID)()),
                            (0, o.h7)(t, !1, v.IlC.POPOUT);
                    }));
                break;
            }
            case E.nc.GO_LIVE_VOICE:
            case E.nc.GO_LIVE_NON_VOICE: {
                let { oneClickGoLiveEnabled: e, useStreamCtaCopy: t } = (0, f.tU)("welcomeNotification");
                (b.confirmText = x.intl.string(t ? x.t.pEuzio : x.t.U76Ft7)),
                    (b.onConfirmClick = e
                        ? (e, t) => {
                              a.Z.updateNotificationStatus(t);
                              let n = () => {
                                      c("go-live-modal"), a.Z.setInputLocked(!1, (0, h.getPID)());
                                  },
                                  i = () => {
                                      c("one-click-go-live");
                                  };
                              (0, g.N)({
                                  pid: (0, h.getPID)(),
                                  analyticsLocation: v.Sbl.OVERLAY_NUDGE,
                                  allowOneClickGoLive: !0,
                                  onBeforeShowModal: n,
                                  onOneClickGoLive: i,
                                  appContext: v.IlC.POPOUT,
                              });
                          }
                        : (e, t) => {
                              c("go-live-modal"),
                                  a.Z.updateNotificationStatus(t),
                                  a.Z.setInputLocked(!1, (0, h.getPID)()),
                                  (0, l.ZD)(
                                      async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("38697"),
                                              n.e("46746"),
                                              n.e("39173"),
                                          ]).then(n.bind(n, 60594));
                                          return (t) =>
                                              (0, i.jsx)(
                                                  e,
                                                  Z(C({}, t), {
                                                      selectSource: !1,
                                                      sourcePID: (0, h.getPID)(),
                                                      guildId: r.type === E.nc.GO_LIVE_VOICE ? r.voiceGuild.id : void 0,
                                                      selectGuild: r.type === E.nc.GO_LIVE_NON_VOICE,
                                                      analyticsLocation: v.Sbl.OVERLAY_NUDGE,
                                                  }),
                                              );
                                      },
                                      { contextKey: S.u1 },
                                  );
                          });
                break;
            }
            case E.nc.CONTENT_INVENTORY:
                (0, f.Rb)("welcomeNotification").allowActivityWidget &&
                    ((b.renderFooter = () =>
                        (0, i.jsx)(m.lX, {
                            gamingId: null == e ? void 0 : e.id,
                            maxUserShowCount: 5,
                            className: I.container,
                        })),
                    (b.onNotificationShow = () => {
                        a.Z.track(v.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                            user_ids: r.entries.map((e) => e.author_id),
                            entry_ids: r.entries.map((e) => e.id),
                        });
                    }));
        }
    let N = (0, d.zu)(r.z.OVERLAY_OOP_WELCOME_NUX),
        T = N ? x.intl.string(x.t.KWDIrq) : x.intl.string(x.t["prl+ra"]),
        _ = N ? void 0 : x.intl.string(x.t.R3CpPT),
        P =
            null != e
                ? (0, i.jsx)(w, { game: e })
                : (0, i.jsx)("img", {
                      src: n(328756),
                      className: j.icon,
                      alt: "",
                  });
    return Z(
        C(
            {
                icon: P,
                title: T,
                body: _,
                hint: () =>
                    (0, y.Q)((0, O.P)(), x.t["z8/sgI"], x.intl.string(x.t.jZkzVF), {
                        highlightAdminWarningIfElevated: !0,
                    }),
                confirmText: N ? void 0 : x.intl.string(x.t.TxyTbm),
                onConfirmClick: N
                    ? void 0
                    : () => {
                          c("unlock"),
                              a.Z.setInputLocked(!1, (0, h.getPID)()),
                              N || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX);
                      },
            },
            b,
        ),
        {
            onNotificationShow: (e) => {
                var t;
                u(), N || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX), null == (t = b.onNotificationShow) || t.call(b, e);
            },
            onNotificationClick: (e, t) => {
                var n;
                c("unlock"),
                    a.Z.setInputLocked(!1, (0, h.getPID)()),
                    N || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = b.onNotificationClick) || n.call(b, e, t);
            },
            onDismissClick: (e, t) => {
                var n;
                c("dismiss"),
                    N || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = b.onDismissClick) || n.call(b, e, t);
            },
        },
    );
}
