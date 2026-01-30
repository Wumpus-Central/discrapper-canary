n.r(t),
    n.d(t, {
        default: () => V,
        useAppSidebarState: () => U,
    });
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(353640),
    o = n(311907),
    c = n(397927),
    u = n(526900),
    d = n(587895),
    p = n(875444),
    h = n(770031),
    g = n(932340),
    f = n(545167),
    m = n(420936),
    A = n(733738),
    _ = n(27169),
    b = n(871432),
    E = n(540177),
    O = n(898642),
    y = n(558416),
    I = n(358832),
    v = n(663111),
    S = n(851109),
    C = n(667086),
    N = n(87001),
    T = n(52144),
    j = n(97469),
    x = n(253932),
    P = n(540999),
    w = n(147964),
    L = n(531685),
    R = n(837921),
    D = n(475815),
    M = n(71855);
n(801416);
var k = n(260175);
let U = (0, s.v)(() => ({
    isOpen: !0,
}));

function G(e) {
    let { withFastTravel: t, quickSwitcherInsteadOfTitle: n, focusSectionProps: i } = e;
    return n
        ? (0, r.jsx)(_.F, {
              focusSectionProps: i,
          })
        : (0, r.jsx)(v.M, {
              withFastTravel: t,
              focusSectionProps: i,
          });
}
let V = i.memo(function () {
    i.useLayoutEffect(() => {
        R.Ay.setMinimumSize(800, 500);
    }, []);
    let { notificationCenterVariant: e, entrypoint: t } = (0, S.X8)({
            location: "AppTitleBar",
        }),
        { titlebarFastTravel: n, quickSwitcherInsteadOfTitle: l } = (0, m.t)({
            location: "AppTitleBar",
        }),
        { backForwardButtons: s, titlebarIconSize: _ } = (0, f.p)({
            location: "AppTitleBar",
        }),
        { hasBugReporterAccess: v } = h.A.useExperiment(
            {
                location: "HeaderBar",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        U = (0, o.bG)([P.A], () => P.A.isDeveloper),
        V = (0, o.bG)(
            [w.A, d.A],
            () =>
                x.Q_.getSetting() &&
                null != w.A.testModeApplicationId &&
                null != d.A.getApplication(w.A.testModeApplicationId) &&
                (0, p.A)(d.A.getApplication(w.A.testModeApplicationId)),
        ),
        B = null !== e && t === S.RK.TITLE_BAR_LEFT,
        H = null === e;
    i.useLayoutEffect(() => {
        R.Ay.setMinimumSize(800, 500);
    }, []);
    let F = (0, j.NC)(),
        Y = (0, o.bG)([L.A, N.A], () => (0, D._U)()),
        K = (function (e) {
            let {
                showBackForwardButtons: t,
                showNotificationsInbox: n,
                titlebarFastTravel: r,
                showRecentsButton: l,
            } = e;
            return i.useMemo(
                () =>
                    t
                        ? "BACK_FORWARD_NAVIGATION"
                        : n
                          ? "NOTIFICATIONS_INBOX"
                          : r
                            ? "TITLEBAR_FAST_TRAVEL"
                            : l
                              ? "RECENTS"
                              : "HELP",
                [t, n, r, l],
            );
        })({
            showBackForwardButtons: s,
            showNotificationsInbox: B,
            titlebarFastTravel: n,
            showRecentsButton: H,
        });
    if (Y) return null;
    let W = a()(k.x, {
        [k.U]: "sm" === _,
    });
    return (0, r.jsx)(c.skg, {
        children: (e) =>
            (0, r.jsx)(c.NPJ, {
                theme: F,
                children: (t) => {
                    var i, a;
                    return (0, r.jsx)(M.cq, {
                        className: t,
                        leading: (0, r.jsxs)(r.Fragment, {
                            children: [
                                s &&
                                    (0, r.jsx)(A.A, {
                                        firstElementFocusJumpSectionProps: "BACK_FORWARD_NAVIGATION" === K ? e : void 0,
                                    }),
                                B &&
                                    (0, r.jsx)(C.A, {
                                        focusSectionProps: "NOTIFICATIONS_INBOX" === K ? e : void 0,
                                    }),
                            ],
                        }),
                        title: (0, r.jsx)(G, {
                            withFastTravel: n,
                            quickSwitcherInsteadOfTitle: l,
                            focusSectionProps: "TITLEBAR_FAST_TRAVEL" === K ? e : void 0,
                        }),
                        trailing: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(b.A, {
                                    className: W,
                                }),
                                (0, r.jsx)(g.A, {
                                    canShowReminder: !0,
                                    className: W,
                                }),
                                H &&
                                    (0, r.jsx)(
                                        T.A,
                                        ((i = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (r = r.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        }),
                                                    )),
                                                    r.forEach(function (t) {
                                                        var r;
                                                        (r = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: r,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0,
                                                                  })
                                                                : (e[t] = r);
                                                    });
                                            }
                                            return e;
                                        })({}, "RECENTS" === K ? e : {})),
                                        (a = a =
                                            {
                                                className: W,
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(a)).forEach(function (e) {
                                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                              }),
                                        i),
                                    ),
                                v
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(y.w, {
                                                  focusSectionProps: "HELP" === K ? e : void 0,
                                                  className: W,
                                              }),
                                              U
                                                  ? (0, r.jsx)(E.R, {
                                                        className: W,
                                                    })
                                                  : null,
                                          ],
                                      })
                                    : (0, r.jsx)(O.A, {
                                          focusSectionProps: "HELP" === K ? e : void 0,
                                          className: W,
                                      }),
                                V &&
                                    (0, r.jsx)(u.A, {
                                        className: W,
                                    }),
                                (0, r.jsx)(I.A, {
                                    className: W,
                                }),
                            ],
                        }),
                    });
                },
            }),
    });
});
