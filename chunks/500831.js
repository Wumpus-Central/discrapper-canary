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
    f = n(770031),
    h = n(488556),
    A = n(994641),
    g = n(932340),
    m = n(545167),
    b = n(420936),
    _ = n(733738),
    E = n(27169),
    O = n(871432),
    y = n(540177),
    I = n(898642),
    v = n(558416),
    S = n(358832),
    C = n(663111),
    N = n(851109),
    T = n(667086),
    j = n(87001),
    x = n(52144),
    P = n(97469),
    w = n(253932),
    L = n(540999),
    R = n(147964),
    D = n(531685),
    M = n(837921),
    k = n(475815),
    U = n(71855);
n(801416);
var G = n(260175);
let V = (0, s.v)(() => ({ isOpen: !0 }));
function B(e) {
    let { withFastTravel: t, quickSwitcherInsteadOfTitle: n, focusSectionProps: i } = e;
    return n
        ? (0, r.jsx)(E.F, { focusSectionProps: i })
        : (0, r.jsx)(C.M, {
              withFastTravel: t,
              focusSectionProps: i,
          });
}
let H = i.memo(function () {
    i.useLayoutEffect(() => {
        M.Ay.setMinimumSize(800, 500);
    }, []);
    let { notificationCenterVariant: e, entrypoint: t } = (0, N.X8)({ location: "AppTitleBar" }),
        { titlebarFastTravel: n, quickSwitcherInsteadOfTitle: l } = (0, b.t)({ location: "AppTitleBar" }),
        { backForwardButtons: s, titlebarIconSize: E } = (0, m.p)({ location: "AppTitleBar" }),
        { hasBugReporterAccess: C } = f.A.useExperiment({ location: "HeaderBar" }, { autoTrackExposure: !1 }),
        { enabled: V } = h.w.useConfig({ location: "AppTitleBar" }),
        H = (0, o.bG)([L.A], () => L.A.isDeveloper),
        F = (0, o.bG)(
            [R.A, d.A],
            () =>
                w.Q_.getSetting() &&
                null != R.A.testModeApplicationId &&
                null != d.A.getApplication(R.A.testModeApplicationId) &&
                (0, p.A)(d.A.getApplication(R.A.testModeApplicationId)),
        ),
        Y = null !== e && t === N.RK.TITLE_BAR_LEFT,
        K = null === e;
    i.useLayoutEffect(() => {
        M.Ay.setMinimumSize(800, 500);
    }, []);
    let z = (0, P.NC)(),
        W = (0, o.bG)([D.A, j.A], () => (0, k._U)()),
        q = (function (e) {
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
    if (W) return null;
    let Q = a()(G.x, { [G.U]: "sm" === E });
    return (0, r.jsx)(c.skg, {
        children: (e) =>
            (0, r.jsx)(c.NPJ, {
                theme: z,
                children: (t) => {
                    var i, a;
                    return (0, r.jsx)(U.cq, {
                        className: t,
                        leading: (0, r.jsxs)(r.Fragment, {
                            children: [
                                s &&
                                    (0, r.jsx)(_.A, {
                                        firstElementFocusJumpSectionProps: "BACK_FORWARD_NAVIGATION" === q ? e : void 0,
                                    }),
                                Y && (0, r.jsx)(T.A, { focusSectionProps: "NOTIFICATIONS_INBOX" === q ? e : void 0 }),
                            ],
                        }),
                        title: (0, r.jsx)(B, {
                            withFastTravel: n,
                            quickSwitcherInsteadOfTitle: l,
                            focusSectionProps: "TITLEBAR_FAST_TRAVEL" === q ? e : void 0,
                        }),
                        trailing: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(O.A, { className: Q }),
                                V && (0, r.jsx)(A.A, { className: Q }),
                                (0, r.jsx)(g.A, {
                                    canShowReminder: !0,
                                    className: Q,
                                }),
                                K &&
                                    (0, r.jsx)(
                                        x.A,
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
                                        })({}, "RECENTS" === q ? e : {})),
                                        (a = a = { className: Q }),
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
                                C
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(v.w, {
                                                  focusSectionProps: "HELP" === q ? e : void 0,
                                                  className: Q,
                                              }),
                                              H ? (0, r.jsx)(y.R, { className: Q }) : null,
                                          ],
                                      })
                                    : (0, r.jsx)(I.A, {
                                          focusSectionProps: "HELP" === q ? e : void 0,
                                          className: Q,
                                      }),
                                F && (0, r.jsx)(u.A, { className: Q }),
                                (0, r.jsx)(S.A, { className: Q }),
                            ],
                        }),
                    });
                },
            }),
    });
});
