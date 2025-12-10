n.d(t, { Z: () => A }), n(539854), n(388685), n(290780);
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    o = n(793030),
    a = n(704215),
    s = n(952265),
    c = n(24124),
    u = n(13245),
    d = n(620662),
    h = n(835473),
    p = n(442550),
    f = n(266454),
    m = n(293273),
    g = n(32300),
    y = n(603618),
    O = n(371053),
    v = n(624864),
    E = n(610394),
    b = n(618373),
    _ = n(620954),
    S = n(987650),
    x = n(981631),
    I = n(602091),
    j = n(701488),
    C = n(388032),
    Z = n(968803),
    N = n(336501);
function w(e) {
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
function T(e, t) {
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
function P(e) {
    let { game: t } = e,
        n = (0, h.q)(t.id);
    return null == n
        ? null
        : (0, i.jsx)(p.f, {
              src: n.getIconURL(j.Si.LARGE),
              size: 40,
          });
}
function A(e, t) {
    if (v.Z.isNotificationDisabled(S.n0.WelcomeNudge)) return null;
    let { enabled: r } = (0, g.KK)("welcomeNotification"),
        { trackView: h, trackClick: p } = (0, _.Rg)(S.n0.WelcomeNudge, {
            notif_type: S.n0.WelcomeNudge,
            secondary_notif_types: t.map((e) => S.nc[e.type]),
        }),
        j = {},
        A = [],
        k = [];
    for (let a of t)
        switch (a.type) {
            case S.nc.WELCOME: {
                let t =
                    (null == e ? void 0 : e.altId) != null
                        ? m.Z.getApplicationActivity(e.altId)
                        : (null == e ? void 0 : e.id) != null
                          ? m.Z.getApplicationActivity(e.id)
                          : null;
                null != t &&
                    (0, d.Z)(t, x.xjy.JOIN) &&
                    ((j.cancelText = C.intl.string(C.t["6F9ivu"])),
                    (j.onCancelClick = (e, n) => {
                        p("unlock"),
                            u.Z.updateNotificationStatus(n),
                            u.Z.setInputLocked(!1, E.Z.getTargetPID()),
                            (0, c.h7)(t, !1, x.IlC.POPOUT);
                    })),
                    r &&
                        k.push(
                            (0, i.jsx)("div", {
                                className: N.keybindShortcutReminder,
                                children: (0, b.Ae)((0, _.wq)(), C.t.mRbUco),
                            }),
                        );
                break;
            }
            case S.nc.GO_LIVE_VOICE:
            case S.nc.GO_LIVE_NON_VOICE: {
                let { oneClickGoLiveEnabled: e, useStreamCtaCopy: t } = (0, g.tU)("welcomeNotification"),
                    l = C.intl.string(t ? C.t.pEuzii : C.t.U76Ft2),
                    c = e
                        ? (e) => {
                              let t = () => {
                                      p("go-live-modal"), u.Z.setInputLocked(!1, E.Z.getTargetPID());
                                  },
                                  n = () => {
                                      p("one-click-go-live");
                                  };
                              (0, O.N)({
                                  pid: E.Z.getTargetPID(),
                                  analyticsLocation: x.Sbl.OVERLAY_NUDGE,
                                  allowOneClickGoLive: !0,
                                  onBeforeShowModal: t,
                                  onOneClickGoLive: n,
                                  appContext: x.IlC.POPOUT,
                              });
                          }
                        : (e) => {
                              p("go-live-modal");
                              let t = E.Z.getTargetPID();
                              u.Z.setInputLocked(!1, t),
                                  (0, s.openModalLazy)(
                                      async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("38697"),
                                              n.e("4093"),
                                              n.e("47863"),
                                              n.e("59416"),
                                          ]).then(n.bind(n, 60594));
                                          return (n) =>
                                              (0, i.jsx)(
                                                  e,
                                                  T(w({}, n), {
                                                      selectSource: !1,
                                                      sourcePID: t,
                                                      guildId: a.type === S.nc.GO_LIVE_VOICE ? a.voiceGuild.id : void 0,
                                                      selectGuild: a.type === S.nc.GO_LIVE_NON_VOICE,
                                                      analyticsLocation: x.Sbl.OVERLAY_NUDGE,
                                                  }),
                                              );
                                      },
                                      { contextKey: I.u1 },
                                  );
                          };
                r
                    ? k.push(
                          (0, i.jsx)(o.zxk, {
                              size: "sm",
                              variant: "active",
                              onClick: (e) => c(e),
                              text: l,
                          }),
                      )
                    : ((j.confirmText = l),
                      (j.onConfirmClick = (e, t) => {
                          u.Z.updateNotificationStatus(t), c(e);
                      }));
                break;
            }
            case S.nc.CONTENT_INVENTORY: {
                j.onNotificationShow = () => {
                    u.Z.track(x.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: a.entries.map((e) => e.author_id),
                        entry_ids: a.entries.map((e) => e.id),
                    });
                };
                let t = () =>
                    (0, i.jsx)(y.lX, {
                        gamingId: null == e ? void 0 : e.id,
                        maxUserShowCount: 5,
                        variant: r ? "subtle" : "default",
                        className: l()({
                            [N.container]: !0,
                            [N.containerFaint]: r,
                        }),
                    });
                r ? A.push(t) : (j.renderFooter = t);
            }
        }
    k.length > 0 &&
        A.unshift(() =>
            (0, i.jsx)("div", {
                className: l()(N.container, N.containerFaint, N.keybindStreamContainer),
                children: k,
            }),
        ),
        null == j.renderFooter &&
            A.length > 0 &&
            (j.renderFooter = (e, t, n) =>
                (0, i.jsx)("div", {
                    className: N.footerSection,
                    children: A.filter((e) => null != e).map((i) => i(e, t, n)),
                }));
    let D = (0, f.zu)(a.z.OVERLAY_OOP_WELCOME_NUX),
        R = r
            ? void 0
            : () =>
                  (0, b.QR)((0, _.Pb)(), C.t["z8/sgJ"], C.intl.string(C.t.jZkzVJ), {
                      highlightAdminWarningIfElevated: !0,
                  }),
        L = r
            ? (0, i.jsx)(o.X6q, {
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: C.intl.string(C.t.KWDIrh),
              })
            : C.intl.string(C.t.KWDIrh),
        M =
            null != e
                ? (0, i.jsx)(P, { game: e })
                : (0, i.jsx)("img", {
                      src: n(328756),
                      className: Z.icon,
                      alt: "",
                  });
    return T(
        w(
            {
                className: r ? N.notificationContainer : void 0,
                icon: M,
                title: L,
                hint: R,
            },
            j,
        ),
        {
            onNotificationShow: (e) => {
                var t;
                h(), D || (0, f.Q3)(a.z.OVERLAY_OOP_WELCOME_NUX), null == (t = j.onNotificationShow) || t.call(j, e);
            },
            onNotificationClick: (e, t) => {
                var n;
                p("unlock"),
                    u.Z.setInputLocked(!1, E.Z.getTargetPID()),
                    D || (0, f.Q3)(a.z.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = j.onNotificationClick) || n.call(j, e, t);
            },
            onDismissClick: (e, t) => {
                var n;
                p("dismiss"),
                    D || (0, f.Q3)(a.z.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = j.onDismissClick) || n.call(j, e, t);
            },
        },
    );
}
