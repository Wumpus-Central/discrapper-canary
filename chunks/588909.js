n.d(t, { Z: () => A }), n(539854), n(388685), n(290780);
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    a = n(793030),
    o = n(704215),
    s = n(952265),
    c = n(24124),
    u = n(13245),
    d = n(620662),
    f = n(835473),
    h = n(442550),
    p = n(266454),
    m = n(293273),
    g = n(32300),
    b = n(603618),
    y = n(371053),
    O = n(624864),
    v = n(610394),
    E = n(618373),
    S = n(620954),
    x = n(987650),
    I = n(981631),
    C = n(602091),
    j = n(701488),
    _ = n(388032),
    Z = n(199757),
    N = n(24303);
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
        n = (0, f.q)(t.id);
    return null == n
        ? null
        : (0, i.jsx)(h.f, {
              src: n.getIconURL(j.Si.LARGE),
              size: 40,
          });
}
function A(e, t) {
    if (O.Z.isNotificationDisabled(x.n0.WelcomeNudge)) return null;
    let { enabled: r } = (0, g.KK)("welcomeNotification"),
        { trackView: f, trackClick: h } = (0, S.Rg)(x.n0.WelcomeNudge, {
            notif_type: x.n0.WelcomeNudge,
            secondary_notif_types: t.map((e) => x.nc[e.type]),
        }),
        j = {},
        A = [],
        k = [];
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
                    (0, d.Z)(t, I.xjy.JOIN) &&
                    ((j.cancelText = _.intl.string(_.t["6F9ivu"])),
                    (j.onCancelClick = (e, n) => {
                        h("unlock"),
                            u.Z.updateNotificationStatus(n),
                            u.Z.setInputLocked(!1, v.Z.getTargetPID()),
                            (0, c.h7)(t, !1, I.IlC.POPOUT);
                    })),
                    r &&
                        k.push(
                            (0, i.jsx)("div", {
                                className: N.keybindShortcutReminder,
                                children: (0, E.Ae)((0, S.wq)(), _.t.mRbUco),
                            }),
                        );
                break;
            }
            case x.nc.GO_LIVE_VOICE:
            case x.nc.GO_LIVE_NON_VOICE: {
                let { oneClickGoLiveEnabled: e, useStreamCtaCopy: t } = (0, g.tU)("welcomeNotification"),
                    l = _.intl.string(t ? _.t.pEuzii : _.t.U76Ft2),
                    c = e
                        ? (e) => {
                              let t = () => {
                                      h("go-live-modal"), u.Z.setInputLocked(!1, v.Z.getTargetPID());
                                  },
                                  n = () => {
                                      h("one-click-go-live");
                                  };
                              (0, y.N)({
                                  pid: v.Z.getTargetPID(),
                                  analyticsLocation: I.Sbl.OVERLAY_NUDGE,
                                  allowOneClickGoLive: !0,
                                  onBeforeShowModal: t,
                                  onOneClickGoLive: n,
                                  appContext: I.IlC.POPOUT,
                              });
                          }
                        : (e) => {
                              h("go-live-modal");
                              let t = v.Z.getTargetPID();
                              u.Z.setInputLocked(!1, t),
                                  (0, s.openModalLazy)(
                                      async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("38697"),
                                              n.e("4093"),
                                              n.e("44183"),
                                              n.e("59416"),
                                          ]).then(n.bind(n, 60594));
                                          return (n) =>
                                              (0, i.jsx)(
                                                  e,
                                                  T(w({}, n), {
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
                          (0, i.jsx)(a.zxk, {
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
            case x.nc.CONTENT_INVENTORY: {
                j.onNotificationShow = () => {
                    u.Z.track(I.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: o.entries.map((e) => e.author_id),
                        entry_ids: o.entries.map((e) => e.id),
                    });
                };
                let t = () =>
                    (0, i.jsx)(b.lX, {
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
    let D = (0, p.zu)(o.z.OVERLAY_OOP_WELCOME_NUX),
        R = r
            ? void 0
            : () =>
                  (0, E.QR)((0, S.Pb)(), _.t["z8/sgJ"], _.intl.string(_.t.jZkzVJ), {
                      highlightAdminWarningIfElevated: !0,
                  }),
        L = r
            ? (0, i.jsx)(a.X6q, {
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: _.intl.string(_.t.KWDIrh),
              })
            : _.intl.string(_.t.KWDIrh),
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
                f(), D || (0, p.Q3)(o.z.OVERLAY_OOP_WELCOME_NUX), null == (t = j.onNotificationShow) || t.call(j, e);
            },
            onNotificationClick: (e, t) => {
                var n;
                h("unlock"),
                    u.Z.setInputLocked(!1, v.Z.getTargetPID()),
                    D || (0, p.Q3)(o.z.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = j.onNotificationClick) || n.call(j, e, t);
            },
            onDismissClick: (e, t) => {
                var n;
                h("dismiss"),
                    D || (0, p.Q3)(o.z.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = j.onDismissClick) || n.call(j, e, t);
            },
        },
    );
}
