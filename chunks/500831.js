n.r(t),
    n.d(t, {
        default: () => H,
        useAppSidebarState: () => V,
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
    m = n(545167),
    f = n(420936),
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
    P = n(430363),
    w = n(113800),
    L = n(540999),
    R = n(147964),
    D = n(531685),
    M = n(837921),
    k = n(475815),
    U = n(71855);
n(801416);
var G = n(260175);
let V = (0, s.v)(() => ({
    isOpen: !0,
}));

function B(e) {
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
let H = i.memo(function () {
    i.useLayoutEffect(() => {
        M.Ay.setMinimumSize(800, 500);
    }, []);
    let { notificationCenterVariant: e, entrypoint: t } = (0, S.X8)({
            location: "AppTitleBar",
        }),
        { titlebarFastTravel: n, quickSwitcherInsteadOfTitle: l } = (0, f.t)({
            location: "AppTitleBar",
        }),
        { backForwardButtons: s, titlebarIconSize: _ } = (0, m.pz)({
            location: "AppTitleBar",
        }),
        { hasBugReporterAccess: v } = h.A.useConfig({
            location: "HeaderBar",
        }),
        V = (0, o.bG)([L.A], () => L.A.isDeveloper),
        H = (0, P.Uk)("VoiceDareTitleBarButton"),
        F = (0, o.bG)(
            [R.A, d.A],
            () =>
                x.Q_.getSetting() &&
                null != R.A.testModeApplicationId &&
                null != d.A.getApplication(R.A.testModeApplicationId) &&
                (0, p.A)(d.A.getApplication(R.A.testModeApplicationId)),
        ),
        Y = null !== e && t === S.RK.TITLE_BAR_LEFT,
        K = null === e;
    i.useLayoutEffect(() => {
        M.Ay.setMinimumSize(800, 500);
    }, []);
    let W = (0, j.NC)(),
        q = (0, o.bG)([D.A, N.A], () => (0, k._U)()),
        z = (function (e) {
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
            showNotificationsInbox: Y,
            titlebarFastTravel: n,
            showRecentsButton: K,
        });
    if (q) return null;
    let Q = a()(G.x, {
        [G.U]: "sm" === _,
    });
    return (0, r.jsx)(c.skg, {
        children: (e) =>
            (0, r.jsx)(c.NPJ, {
                theme: W,
                children: (t) => {
                    var i, a;
                    return (0, r.jsx)(U.cq, {
                        className: t,
                        leading: (0, r.jsxs)(r.Fragment, {
                            children: [
                                s &&
                                    (0, r.jsx)(A.A, {
                                        firstElementFocusJumpSectionProps: "BACK_FORWARD_NAVIGATION" === z ? e : void 0,
                                    }),
                                Y &&
                                    (0, r.jsx)(C.A, {
                                        focusSectionProps: "NOTIFICATIONS_INBOX" === z ? e : void 0,
                                    }),
                            ],
                        }),
                        title: (0, r.jsx)(B, {
                            withFastTravel: n,
                            quickSwitcherInsteadOfTitle: l,
                            focusSectionProps: "TITLEBAR_FAST_TRAVEL" === z ? e : void 0,
                        }),
                        trailing: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(b.A, {
                                    className: Q,
                                }),
                                H ? (0, r.jsx)(w.A, {}) : null,
                                (0, r.jsx)(g.A, {
                                    canShowReminder: !0,
                                    className: Q,
                                }),
                                K &&
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
                                        })({}, "RECENTS" === z ? e : {})),
                                        (a = a =
                                            {
                                                className: Q,
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
                                    ? (0, r.jsx)(y.w, {
                                          focusSectionProps: "HELP" === z ? e : void 0,
                                          className: Q,
                                      })
                                    : (0, r.jsx)(O.A, {
                                          focusSectionProps: "HELP" === z ? e : void 0,
                                          className: Q,
                                      }),
                                V
                                    ? (0, r.jsx)(E.R, {
                                          className: Q,
                                      })
                                    : null,
                                F &&
                                    (0, r.jsx)(u.A, {
                                        className: Q,
                                    }),
                                (0, r.jsx)(I.A, {
                                    className: Q,
                                }),
                            ],
                        }),
                    });
                },
            }),
    });
});
