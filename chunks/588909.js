n.d(t, { Z: () => D }), n(539854), n(388685), n(290780);
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    o = n(793030),
    a = n(704215),
    s = n(952265),
    u = n(24124),
    c = n(13245),
    d = n(620662),
    h = n(100527),
    p = n(835473),
    f = n(442550),
    m = n(266454),
    g = n(293273),
    O = n(32300),
    y = n(603618),
    E = n(371053),
    v = n(624864),
    b = n(610394),
    S = n(618373),
    x = n(620954),
    j = n(987650),
    I = n(981631),
    C = n(602091),
    Z = n(701488),
    N = n(388032),
    w = n(199757),
    T = n(24303);
function _(e) {
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
function P(e, t) {
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
function A(e) {
    let { game: t } = e,
        n = (0, p.q)(t.id);
    return null == n
        ? null
        : (0, i.jsx)(f.f, {
              src: n.getIconURL(Z.Si.LARGE),
              size: 40,
          });
}
function D(e, t) {
    if (v.Z.isNotificationDisabled(j.n0.WelcomeNudge)) return null;
    let { enabled: r } = (0, O.KK)("welcomeNotification"),
        { trackView: p, trackClick: f } = (0, x.Rg)(j.n0.WelcomeNudge, {
            notif_type: j.n0.WelcomeNudge,
            secondary_notif_types: t.map((e) => j.nc[e.type]),
        }),
        Z = {},
        D = [],
        R = [];
    for (let a of t)
        switch (a.type) {
            case j.nc.WELCOME: {
                let t =
                    (null == e ? void 0 : e.altId) != null
                        ? g.Z.getApplicationActivity(e.altId)
                        : (null == e ? void 0 : e.id) != null
                          ? g.Z.getApplicationActivity(e.id)
                          : null;
                null != t &&
                    (0, d.Z)(t, I.xjy.JOIN) &&
                    ((Z.cancelText = N.intl.string(N.t["6F9ivu"])),
                    (Z.onCancelClick = (e, n) => {
                        f("unlock"),
                            c.Z.updateNotificationStatus(n),
                            c.Z.setInputLocked(!1, b.Z.getTargetPID()),
                            (0, u.h7)(t, !1, I.IlC.POPOUT);
                    })),
                    r &&
                        R.push(
                            (0, i.jsx)("div", {
                                className: T.keybindShortcutReminder,
                                children: (0, S.Ae)((0, x.wq)(), N.t.mRbUco),
                            }),
                        );
                break;
            }
            case j.nc.GO_LIVE_VOICE:
            case j.nc.GO_LIVE_NON_VOICE: {
                let { oneClickGoLiveEnabled: e, useStreamCtaCopy: t } = (0, O.tU)("welcomeNotification"),
                    l = N.intl.string(t ? N.t.pEuzii : N.t.U76Ft2),
                    a = e
                        ? (e) => {
                              let t = () => {
                                      f("go-live-modal"), c.Z.setInputLocked(!1, b.Z.getTargetPID());
                                  },
                                  n = () => {
                                      f("one-click-go-live");
                                  };
                              (0, E.N)({
                                  pid: b.Z.getTargetPID(),
                                  analyticsLocation: I.Sbl.OVERLAY_NUDGE,
                                  allowOneClickGoLive: !0,
                                  onBeforeShowModal: t,
                                  onOneClickGoLive: n,
                                  appContext: I.IlC.POPOUT,
                              });
                          }
                        : (e) => {
                              f("go-live-modal");
                              let t = b.Z.getTargetPID();
                              c.Z.setInputLocked(!1, t),
                                  (0, s.openModalLazy)(
                                      async () => {
                                          let { default: e } = await Promise.all([n.e("46746"), n.e("84064")]).then(
                                              n.bind(n, 60594),
                                          );
                                          return (n) =>
                                              (0, i.jsx)(
                                                  e,
                                                  P(_({}, n), {
                                                      selectSource: !1,
                                                      sourcePID: t,
                                                      analyticsLocations: [h.Z.OVERLAY_NUDGE],
                                                  }),
                                              );
                                      },
                                      { contextKey: C.u1 },
                                  );
                          };
                r
                    ? R.push(
                          (0, i.jsx)(o.zxk, {
                              size: "sm",
                              variant: "active",
                              onClick: (e) => a(e),
                              text: l,
                          }),
                      )
                    : ((Z.confirmText = l),
                      (Z.onConfirmClick = (e, t) => {
                          c.Z.updateNotificationStatus(t), a(e);
                      }));
                break;
            }
            case j.nc.CONTENT_INVENTORY: {
                Z.onNotificationShow = () => {
                    c.Z.track(I.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
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
                            [T.container]: !0,
                            [T.containerFaint]: r,
                        }),
                    });
                r ? D.push(t) : (Z.renderFooter = t);
            }
        }
    R.length > 0 &&
        D.unshift(() =>
            (0, i.jsx)("div", {
                className: l()(T.container, T.containerFaint, T.keybindStreamContainer),
                children: R,
            }),
        ),
        null == Z.renderFooter &&
            D.length > 0 &&
            (Z.renderFooter = (e, t, n) =>
                (0, i.jsx)("div", {
                    className: T.footerSection,
                    children: D.filter((e) => null != e).map((i) => i(e, t, n)),
                }));
    let k = (0, m.zu)(a.z.OVERLAY_OOP_WELCOME_NUX),
        L = r
            ? void 0
            : () =>
                  (0, S.QR)((0, x.Pb)(), N.t["z8/sgJ"], N.intl.string(N.t.jZkzVJ), {
                      highlightAdminWarningIfElevated: !0,
                  }),
        M = r
            ? (0, i.jsx)(o.X6q, {
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: N.intl.string(N.t.KWDIrh),
              })
            : N.intl.string(N.t.KWDIrh),
        V =
            null != e
                ? (0, i.jsx)(A, { game: e })
                : (0, i.jsx)("img", {
                      src: n(328756),
                      className: w.icon,
                      alt: "",
                  });
    return P(
        _(
            {
                className: r ? T.notificationContainer : void 0,
                icon: V,
                title: M,
                hint: L,
            },
            Z,
        ),
        {
            onNotificationShow: (e) => {
                var t;
                p(), k || (0, m.Q3)(a.z.OVERLAY_OOP_WELCOME_NUX), null == (t = Z.onNotificationShow) || t.call(Z, e);
            },
            onNotificationClick: (e, t) => {
                var n;
                f("unlock"),
                    c.Z.setInputLocked(!1, b.Z.getTargetPID()),
                    k || (0, m.Q3)(a.z.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = Z.onNotificationClick) || n.call(Z, e, t);
            },
            onDismissClick: (e, t) => {
                var n;
                f("dismiss"),
                    k || (0, m.Q3)(a.z.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = Z.onDismissClick) || n.call(Z, e, t);
            },
        },
    );
}
