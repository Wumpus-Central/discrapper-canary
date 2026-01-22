n.d(t, { A: () => R }), n(321073), n(896048), n(667532);
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(158954),
    o = n(554146),
    s = n(192308),
    c = n(298990),
    u = n(684013),
    d = n(833349),
    p = n(793574),
    h = n(429913),
    f = n(263577),
    m = n(826673),
    g = n(375492),
    y = n(589051),
    A = n(547463),
    O = n(823901),
    E = n(592598),
    v = n(395011),
    b = n(119191),
    S = n(581730),
    x = n(672396),
    j = n(652215),
    I = n(231723),
    N = n(360469),
    w = n(985018),
    T = n(879716),
    C = n(573823);
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
function D(e) {
    let { game: t } = e,
        n = (0, h.h)(t.id);
    return null == n
        ? null
        : (0, i.jsx)(f.V, {
              src: n.getIconURL(N.iu.LARGE),
              size: 40,
          });
}
function R(e, t) {
    if (E.A.isNotificationDisabled(x.KS.WelcomeNudge)) return null;
    let { enabled: r } = (0, y.o0)("welcomeNotification"),
        { trackView: h, trackClick: f } = (0, S.Y9)(x.KS.WelcomeNudge, {
            notif_type: x.KS.WelcomeNudge,
            secondary_notif_types: t.map((e) => x.Jr[e.type]),
        }),
        N = {},
        R = [],
        L = [];
    for (let o of t)
        switch (o.type) {
            case x.Jr.WELCOME: {
                let t =
                    (null == e ? void 0 : e.altId) != null
                        ? g.A.getApplicationActivity(e.altId)
                        : (null == e ? void 0 : e.id) != null
                          ? g.A.getApplicationActivity(e.id)
                          : null;
                null != t &&
                    (0, d.A)(t, j.jUm.JOIN) &&
                    ((N.cancelText = w.intl.string(w.t["6F9ivu"])),
                    (N.onCancelClick = (e, n) => {
                        f("unlock"),
                            u.A.updateNotificationStatus(n),
                            u.A.setInputLocked(!1, v.A.getTargetPID()),
                            (0, c.qf)(t, !1, j.BRT.POPOUT);
                    })),
                    r &&
                        L.push(
                            (0, i.jsx)("div", {
                                className: C.N7,
                                children: (0, b.bi)((0, S.hM)(), w.t.mRbUco),
                            }),
                        );
                break;
            }
            case x.Jr.GO_LIVE_VOICE:
            case x.Jr.GO_LIVE_NON_VOICE: {
                let { oneClickGoLiveEnabled: e, useStreamCtaCopy: t } = (0, y.m5)("welcomeNotification"),
                    l = w.intl.string(t ? w.t.pEuzii : w.t.U76Ft2),
                    o = e
                        ? (e) => {
                              let t = () => {
                                      f("go-live-modal"), u.A.setInputLocked(!1, v.A.getTargetPID());
                                  },
                                  n = () => {
                                      f("one-click-go-live");
                                  };
                              (0, O.H)({
                                  pid: v.A.getTargetPID(),
                                  analyticsLocation: j.ThZ.OVERLAY_NUDGE,
                                  allowOneClickGoLive: !0,
                                  onBeforeShowModal: t,
                                  onOneClickGoLive: n,
                                  appContext: j.BRT.POPOUT,
                              });
                          }
                        : (e) => {
                              f("go-live-modal");
                              let t = v.A.getTargetPID();
                              u.A.setInputLocked(!1, t),
                                  (0, s.openModalLazy)(
                                      async () => {
                                          let { default: e } = await Promise.all([n.e("96811"), n.e("14476")]).then(
                                              n.bind(n, 648230),
                                          );
                                          return (n) =>
                                              (0, i.jsx)(
                                                  e,
                                                  P(_({}, n), {
                                                      selectSource: !1,
                                                      sourcePID: t,
                                                      analyticsLocations: [p.A.OVERLAY_NUDGE],
                                                  }),
                                              );
                                      },
                                      { contextKey: I.KX },
                                  );
                          };
                r
                    ? L.push(
                          (0, i.jsx)(a.$nd, {
                              size: "sm",
                              variant: "active",
                              onClick: (e) => o(e),
                              text: l,
                          }),
                      )
                    : ((N.confirmText = l),
                      (N.onConfirmClick = (e, t) => {
                          u.A.updateNotificationStatus(t), o(e);
                      }));
                break;
            }
            case x.Jr.CONTENT_INVENTORY: {
                N.onNotificationShow = () => {
                    u.A.track(j.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: o.entries.map((e) => e.author_id),
                        entry_ids: o.entries.map((e) => e.id),
                    });
                };
                let t = () =>
                    (0, i.jsx)(A.ru, {
                        gamingId: null == e ? void 0 : e.id,
                        maxUserShowCount: 5,
                        variant: r ? "subtle" : "default",
                        className: l()({
                            [C.kL]: !0,
                            [C.Wz]: r,
                        }),
                    });
                r ? R.push(t) : (N.renderFooter = t);
            }
        }
    L.length > 0 &&
        R.unshift(() =>
            (0, i.jsx)("div", {
                className: l()(C.kL, C.Wz, C.SH),
                children: L,
            }),
        ),
        null == N.renderFooter &&
            R.length > 0 &&
            (N.renderFooter = (e, t, n) =>
                (0, i.jsx)("div", {
                    className: C.NG,
                    children: R.filter((e) => null != e).map((i) => i(e, t, n)),
                }));
    let k = (0, m.k8)(o.M.OVERLAY_OOP_WELCOME_NUX),
        M = r
            ? void 0
            : () =>
                  (0, b.sI)((0, S.Jn)(), w.t["z8/sgJ"], w.intl.string(w.t.jZkzVJ), {
                      highlightAdminWarningIfElevated: !0,
                  }),
        V = r
            ? (0, i.jsx)(a.DZT, {
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: w.intl.string(w.t.KWDIrh),
              })
            : w.intl.string(w.t.KWDIrh),
        U =
            null != e
                ? (0, i.jsx)(D, { game: e })
                : (0, i.jsx)("img", {
                      src: n(513653),
                      className: T.Kk,
                      alt: "",
                  });
    return P(
        _(
            {
                className: r ? C.fV : void 0,
                icon: U,
                title: V,
                hint: M,
            },
            N,
        ),
        {
            onNotificationShow: (e) => {
                var t;
                h(), k || (0, m.Dr)(o.M.OVERLAY_OOP_WELCOME_NUX), null == (t = N.onNotificationShow) || t.call(N, e);
            },
            onNotificationClick: (e, t) => {
                var n;
                f("unlock"),
                    u.A.setInputLocked(!1, v.A.getTargetPID()),
                    k || (0, m.Dr)(o.M.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = N.onNotificationClick) || n.call(N, e, t);
            },
            onDismissClick: (e, t) => {
                var n;
                f("dismiss"),
                    k || (0, m.Dr)(o.M.OVERLAY_OOP_WELCOME_NUX),
                    null == (n = N.onDismissClick) || n.call(N, e, t);
            },
        },
    );
}
