n.d(t, { Z: () => D }), n(539854), n(388685), n(290780);
var i = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    o = n(793030),
    a = n(704215),
    s = n(952265),
    c = n(755721),
    u = n(24124),
    d = n(13245),
    h = n(620662),
    p = n(835473),
    f = n(442550),
    m = n(266454),
    g = n(293273),
    y = n(32300),
    O = n(603618),
    v = n(371053),
    E = n(624864),
    b = n(610394),
    _ = n(618373),
    S = n(620954),
    x = n(987650),
    I = n(981631),
    C = n(602091),
    j = n(701488),
    N = n(388032),
    Z = n(968803),
    w = n(336501);
function T(e) {
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
              src: n.getIconURL(j.Si.LARGE),
              size: 40,
          });
}
function D(e, t) {
    if (E.Z.isNotificationDisabled(x.n0.WelcomeNudge)) return null;
    let { enabled: r } = (0, y.KK)("welcomeNotification"),
        { trackView: p, trackClick: f } = (0, S.Rg)(x.n0.WelcomeNudge, {
            notif_type: x.n0.WelcomeNudge,
            secondary_notif_types: t.map((e) => x.nc[e.type]),
        }),
        j = {},
        D = [],
        k = [];
    for (let o of t)
        switch (o.type) {
            case x.nc.WELCOME: {
                let t =
                    (null == e ? void 0 : e.altId) != null
                        ? g.Z.getApplicationActivity(e.altId)
                        : (null == e ? void 0 : e.id) != null
                          ? g.Z.getApplicationActivity(e.id)
                          : null;
                null != t &&
                    (0, h.Z)(t, I.xjy.JOIN) &&
                    ((j.cancelText = N.intl.string(N.t["6F9ivu"])),
                    (j.onCancelClick = (e, n) => {
                        f("unlock"),
                            d.Z.updateNotificationStatus(n),
                            d.Z.setInputLocked(!1, b.Z.getTargetPID()),
                            (0, u.h7)(t, !1, I.IlC.POPOUT);
                    })),
                    r &&
                        k.push(
                            (0, i.jsx)("div", {
                                className: w.keybindShortcutReminder,
                                children: (0, _.Ae)((0, S.wq)(), N.t.mRbUco),
                            }),
                        );
                break;
            }
            case x.nc.GO_LIVE_VOICE:
            case x.nc.GO_LIVE_NON_VOICE: {
                let { oneClickGoLiveEnabled: e, useStreamCtaCopy: t } = (0, y.tU)("welcomeNotification"),
                    l = N.intl.string(t ? N.t.pEuzii : N.t.U76Ft2),
                    a = e
                        ? (e) => {
                              let t = () => {
                                      f("go-live-modal"), d.Z.setInputLocked(!1, b.Z.getTargetPID());
                                  },
                                  n = () => {
                                      f("one-click-go-live");
                                  };
                              (0, v.N)({
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
                              d.Z.setInputLocked(!1, t),
                                  (0, s.ZD)(
                                      async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("38697"),
                                              n.e("4093"),
                                              n.e("47863"),
                                              n.e("39173"),
                                          ]).then(n.bind(n, 60594));
                                          return (n) =>
                                              (0, i.jsx)(
                                                  e,
                                                  P(T({}, n), {
                                                      selectSource: !1,
                                                      sourcePID: t,
                                                      guildId: o.type === x.nc.GO_LIVE_VOICE ? o.voiceGuild.id : void 0,
                                                      selectGuild: o.type === x.nc.GO_LIVE_NON_VOICE,
                                                      analyticsLocation: I.Sbl.OVERLAY_NUDGE,
                                                  }),
                                              );
                                      },
                                      { contextKey: C.u1 },
                                  );
                          };
                r
                    ? k.push(
                          (0, i.jsx)(c.zx, {
                              className: w.button,
                              size: c.zx.Sizes.SMALL,
                              color: c.zx.Colors.GREEN,
                              onClick: (e) => a(e),
                              children: l,
                          }),
                      )
                    : ((j.confirmText = l),
                      (j.onConfirmClick = (e, t) => {
                          d.Z.updateNotificationStatus(t), a(e);
                      }));
                break;
            }
            case x.nc.CONTENT_INVENTORY:
                if ((0, y.Rb)("welcomeNotification").allowActivityWidget) {
                    j.onNotificationShow = () => {
                        d.Z.track(I.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                            user_ids: o.entries.map((e) => e.author_id),
                            entry_ids: o.entries.map((e) => e.id),
                        });
                    };
                    let t = () =>
                        (0, i.jsx)(O.lX, {
                            gamingId: null == e ? void 0 : e.id,
                            maxUserShowCount: 5,
                            variant: r ? "subtle" : "default",
                            className: l()({
                                [w.container]: !0,
                                [w.containerFaint]: r,
                            }),
                        });
                    r ? D.push(t) : (j.renderFooter = t);
                }
        }
    k.length > 0 &&
        D.unshift(() =>
            (0, i.jsx)("div", {
                className: l()(w.container, w.containerFaint, w.keybindStreamContainer),
                children: k,
            }),
        ),
        null == j.renderFooter &&
            D.length > 0 &&
            (j.renderFooter = (e, t, n) =>
                (0, i.jsx)("div", {
                    className: w.footerSection,
                    children: D.filter((e) => null != e).map((i) => i(e, t, n)),
                }));
    let R = (0, m.zu)(a.z.OVERLAY_OOP_WELCOME_NUX),
        L = r
            ? void 0
            : () =>
                  (0, _.QR)((0, S.Pb)(), N.t["z8/sgJ"], N.intl.string(N.t.jZkzVJ), {
                      highlightAdminWarningIfElevated: !0,
                  }),
        M = r
            ? (0, i.jsx)(o.X6q, {
                  variant: "heading-md/semibold",
                  color: "text-primary",
                  children: N.intl.string(N.t.KWDIrh),
              })
            : N.intl.string(N.t.KWDIrh),
        z =
            null != e
                ? (0, i.jsx)(A, { game: e })
                : (0, i.jsx)("img", {
                      src: n(328756),
                      className: Z.icon,
                      alt: "",
                  });
    return P(
        T(
            {
                className: r ? w.notificationContainer : void 0,
                icon: z,
                title: M,
                hint: L,
            },
            j,
        ),
        {
            onNotificationShow: (e) => {
                var t;
                p(), R || (0, m.Q3)(a.z.OVERLAY_OOP_WELCOME_NUX), null == (t = j.onNotificationShow) || t.call(j, e);
            },
            onNotificationClick: (e, t) => {
                var n;
                f("unlock"),
                    d.Z.setInputLocked(!1, b.Z.getTargetPID()),
                    R || (0, m.Q3)(a.z.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = j.onNotificationClick) || n.call(j, e, t);
            },
            onDismissClick: (e, t) => {
                var n;
                f("dismiss"),
                    R || (0, m.Q3)(a.z.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = j.onDismissClick) || n.call(j, e, t);
            },
        },
    );
}
