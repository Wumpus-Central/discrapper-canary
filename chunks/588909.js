n.d(t, { Z: () => T }), n(388685);
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
    h = n(32300),
    f = n(603618),
    m = n(371053),
    g = n(624864),
    y = n(610394),
    O = n(618373),
    E = n(620954),
    v = n(987650),
    S = n(981631),
    b = n(602091),
    x = n(701488),
    j = n(388032),
    I = n(968803),
    C = n(336501);
function Z(e) {
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
function N(e, t) {
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
              src: n.getIconURL(x.Si.LARGE),
              size: 40,
          });
}
function T(e, t) {
    if (g.Z.isNotificationDisabled(v.n0.WelcomeNudge)) return null;
    let { trackView: u, trackClick: c } = (0, E.R)(v.n0.WelcomeNudge, {
            notif_type: v.n0.WelcomeNudge,
            secondary_notif_types: t.map((e) => v.nc[e.type]),
        }),
        x = {};
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
                    (0, s.Z)(t, S.xjy.JOIN) &&
                    ((x.cancelText = j.intl.string(j.t["6F9ivu"])),
                    (x.onCancelClick = (e, n) => {
                        c("unlock"),
                            a.Z.updateNotificationStatus(n),
                            a.Z.setInputLocked(!1, y.Z.getTargetPID()),
                            (0, o.h7)(t, !1, S.IlC.POPOUT);
                    }));
                break;
            }
            case v.nc.GO_LIVE_VOICE:
            case v.nc.GO_LIVE_NON_VOICE: {
                let { oneClickGoLiveEnabled: e, useStreamCtaCopy: t } = (0, h.tU)("welcomeNotification");
                (x.confirmText = j.intl.string(t ? j.t.pEuzii : j.t.U76Ft2)),
                    (x.onConfirmClick = e
                        ? (e, t) => {
                              a.Z.updateNotificationStatus(t);
                              let n = () => {
                                      c("go-live-modal"), a.Z.setInputLocked(!1, y.Z.getTargetPID());
                                  },
                                  i = () => {
                                      c("one-click-go-live");
                                  };
                              (0, m.N)({
                                  pid: y.Z.getTargetPID(),
                                  analyticsLocation: S.Sbl.OVERLAY_NUDGE,
                                  allowOneClickGoLive: !0,
                                  onBeforeShowModal: n,
                                  onOneClickGoLive: i,
                                  appContext: S.IlC.POPOUT,
                              });
                          }
                        : (e, t) => {
                              c("go-live-modal");
                              let o = y.Z.getTargetPID();
                              a.Z.updateNotificationStatus(t),
                                  a.Z.setInputLocked(!1, o),
                                  (0, l.ZD)(
                                      async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("4093"),
                                              n.e("47863"),
                                              n.e("56784"),
                                          ]).then(n.bind(n, 60594));
                                          return (t) =>
                                              (0, i.jsx)(
                                                  e,
                                                  N(Z({}, t), {
                                                      selectSource: !1,
                                                      sourcePID: o,
                                                      guildId: r.type === v.nc.GO_LIVE_VOICE ? r.voiceGuild.id : void 0,
                                                      selectGuild: r.type === v.nc.GO_LIVE_NON_VOICE,
                                                      analyticsLocation: S.Sbl.OVERLAY_NUDGE,
                                                  }),
                                              );
                                      },
                                      { contextKey: b.u1 },
                                  );
                          });
                break;
            }
            case v.nc.CONTENT_INVENTORY:
                (0, h.Rb)("welcomeNotification").allowActivityWidget &&
                    ((x.renderFooter = () =>
                        (0, i.jsx)(f.lX, {
                            gamingId: null == e ? void 0 : e.id,
                            maxUserShowCount: 5,
                            className: C.container,
                        })),
                    (x.onNotificationShow = () => {
                        a.Z.track(S.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                            user_ids: r.entries.map((e) => e.author_id),
                            entry_ids: r.entries.map((e) => e.id),
                        });
                    }));
        }
    let T = (0, d.zu)(r.z.OVERLAY_OOP_WELCOME_NUX),
        _ = T ? j.intl.string(j.t.KWDIrh) : j.intl.string(j.t["prl+rY"]),
        P = T ? void 0 : j.intl.string(j.t.R3CpPU),
        A =
            null != e
                ? (0, i.jsx)(w, { game: e })
                : (0, i.jsx)("img", {
                      src: n(328756),
                      className: I.icon,
                      alt: "",
                  });
    return N(
        Z(
            {
                icon: A,
                title: _,
                body: P,
                hint: () =>
                    (0, O.Q)((0, E.P)(), j.t["z8/sgJ"], j.intl.string(j.t.jZkzVJ), {
                        highlightAdminWarningIfElevated: !0,
                    }),
                confirmText: T ? void 0 : j.intl.string(j.t.TxyTbk),
                onConfirmClick: T
                    ? void 0
                    : () => {
                          c("unlock"),
                              a.Z.setInputLocked(!1, y.Z.getTargetPID()),
                              T || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX);
                      },
            },
            x,
        ),
        {
            onNotificationShow: (e) => {
                var t;
                u(), T || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX), null == (t = x.onNotificationShow) || t.call(x, e);
            },
            onNotificationClick: (e, t) => {
                var n;
                c("unlock"),
                    a.Z.setInputLocked(!1, y.Z.getTargetPID()),
                    T || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = x.onNotificationClick) || n.call(x, e, t);
            },
            onDismissClick: (e, t) => {
                var n;
                c("dismiss"),
                    T || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = x.onDismissClick) || n.call(x, e, t);
            },
        },
    );
}
