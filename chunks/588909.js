n.d(t, { Z: () => A }), n(539854), n(388685), n(290780);
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    a = n(793030),
    o = n(704215),
    s = n(952265),
    u = n(24124),
    c = n(13245),
    d = n(620662),
    h = n(835473),
    p = n(442550),
    f = n(266454),
    m = n(293273),
    g = n(32300),
    y = n(603618),
    O = n(371053),
    E = n(624864),
    v = n(610394),
    S = n(618373),
    b = n(620954),
    x = n(987650),
    j = n(981631),
    I = n(602091),
    C = n(701488),
    Z = n(388032),
    N = n(968803),
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
function _(e, t) {
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
              src: n.getIconURL(C.Si.LARGE),
              size: 40,
          });
}
function A(e, t) {
    if (E.Z.isNotificationDisabled(x.n0.WelcomeNudge)) return null;
    let { enabled: r } = (0, g.KK)("welcomeNotification"),
        { trackView: h, trackClick: p } = (0, b.Rg)(x.n0.WelcomeNudge, {
            notif_type: x.n0.WelcomeNudge,
            secondary_notif_types: t.map((e) => x.nc[e.type]),
        }),
        C = {},
        A = [],
        D = [];
    for (let o of t)
        switch (o.type) {
            case x.nc.WELCOME: {
                let t =
                    (null == e ? void 0 : e.altId) != null
                        ? m.Z.getApplicationActivity(e.altId)
                        : (null == e ? void 0 : e.id) != null
                          ? m.Z.getApplicationActivity(e.id)
                          : null;
                null != t &&
                    (0, d.Z)(t, j.xjy.JOIN) &&
                    ((C.cancelText = Z.intl.string(Z.t["6F9ivu"])),
                    (C.onCancelClick = (e, n) => {
                        p("unlock"),
                            c.Z.updateNotificationStatus(n),
                            c.Z.setInputLocked(!1, v.Z.getTargetPID()),
                            (0, u.h7)(t, !1, j.IlC.POPOUT);
                    })),
                    r &&
                        D.push(
                            (0, i.jsx)("div", {
                                className: w.keybindShortcutReminder,
                                children: (0, S.Ae)((0, b.wq)(), Z.t.mRbUco),
                            }),
                        );
                break;
            }
            case x.nc.GO_LIVE_VOICE:
            case x.nc.GO_LIVE_NON_VOICE: {
                let { oneClickGoLiveEnabled: e, useStreamCtaCopy: t } = (0, g.tU)("welcomeNotification"),
                    l = Z.intl.string(t ? Z.t.pEuzii : Z.t.U76Ft2),
                    u = e
                        ? (e) => {
                              let t = () => {
                                      p("go-live-modal"), c.Z.setInputLocked(!1, v.Z.getTargetPID());
                                  },
                                  n = () => {
                                      p("one-click-go-live");
                                  };
                              (0, O.N)({
                                  pid: v.Z.getTargetPID(),
                                  analyticsLocation: j.Sbl.OVERLAY_NUDGE,
                                  allowOneClickGoLive: !0,
                                  onBeforeShowModal: t,
                                  onOneClickGoLive: n,
                                  appContext: j.IlC.POPOUT,
                              });
                          }
                        : (e) => {
                              p("go-live-modal");
                              let t = v.Z.getTargetPID();
                              c.Z.setInputLocked(!1, t),
                                  (0, s.ZD)(
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
                                                  _(T({}, n), {
                                                      selectSource: !1,
                                                      sourcePID: t,
                                                      guildId: o.type === x.nc.GO_LIVE_VOICE ? o.voiceGuild.id : void 0,
                                                      selectGuild: o.type === x.nc.GO_LIVE_NON_VOICE,
                                                      analyticsLocation: j.Sbl.OVERLAY_NUDGE,
                                                  }),
                                              );
                                      },
                                      { contextKey: I.u1 },
                                  );
                          };
                r
                    ? D.push(
                          (0, i.jsx)(a.zxk, {
                              size: "sm",
                              variant: "active",
                              onClick: (e) => u(e),
                              text: l,
                          }),
                      )
                    : ((C.confirmText = l),
                      (C.onConfirmClick = (e, t) => {
                          c.Z.updateNotificationStatus(t), u(e);
                      }));
                break;
            }
            case x.nc.CONTENT_INVENTORY: {
                C.onNotificationShow = () => {
                    c.Z.track(j.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: o.entries.map((e) => e.author_id),
                        entry_ids: o.entries.map((e) => e.id),
                    });
                };
                let t = () =>
                    (0, i.jsx)(y.lX, {
                        gamingId: null == e ? void 0 : e.id,
                        maxUserShowCount: 5,
                        variant: r ? "subtle" : "default",
                        className: l()({
                            [w.container]: !0,
                            [w.containerFaint]: r,
                        }),
                    });
                r ? A.push(t) : (C.renderFooter = t);
            }
        }
    D.length > 0 &&
        A.unshift(() =>
            (0, i.jsx)("div", {
                className: l()(w.container, w.containerFaint, w.keybindStreamContainer),
                children: D,
            }),
        ),
        null == C.renderFooter &&
            A.length > 0 &&
            (C.renderFooter = (e, t, n) =>
                (0, i.jsx)("div", {
                    className: w.footerSection,
                    children: A.filter((e) => null != e).map((i) => i(e, t, n)),
                }));
    let R = (0, f.zu)(o.z.OVERLAY_OOP_WELCOME_NUX),
        k = r
            ? void 0
            : () =>
                  (0, S.QR)((0, b.Pb)(), Z.t["z8/sgJ"], Z.intl.string(Z.t.jZkzVJ), {
                      highlightAdminWarningIfElevated: !0,
                  }),
        L = r
            ? (0, i.jsx)(a.X6q, {
                  variant: "heading-md/semibold",
                  color: "text-primary",
                  children: Z.intl.string(Z.t.KWDIrh),
              })
            : Z.intl.string(Z.t.KWDIrh),
        M =
            null != e
                ? (0, i.jsx)(P, { game: e })
                : (0, i.jsx)("img", {
                      src: n(328756),
                      className: N.icon,
                      alt: "",
                  });
    return _(
        T(
            {
                className: r ? w.notificationContainer : void 0,
                icon: M,
                title: L,
                hint: k,
            },
            C,
        ),
        {
            onNotificationShow: (e) => {
                var t;
                h(), R || (0, f.Q3)(o.z.OVERLAY_OOP_WELCOME_NUX), null == (t = C.onNotificationShow) || t.call(C, e);
            },
            onNotificationClick: (e, t) => {
                var n;
                p("unlock"),
                    c.Z.setInputLocked(!1, v.Z.getTargetPID()),
                    R || (0, f.Q3)(o.z.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = C.onNotificationClick) || n.call(C, e, t);
            },
            onDismissClick: (e, t) => {
                var n;
                p("dismiss"),
                    R || (0, f.Q3)(o.z.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = C.onDismissClick) || n.call(C, e, t);
            },
        },
    );
}
