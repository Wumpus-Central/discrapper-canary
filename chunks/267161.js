n.r(t),
    n.d(t, {
        default: () => D,
        useAppSidebarState: () => L,
    });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(191336),
    s = n(442837),
    c = n(481060),
    u = n(174556),
    d = n(99977),
    p = n(919842),
    f = n(320007),
    h = n(719961),
    g = n(336219),
    m = n(609174),
    b = n(257966),
    _ = n(111666),
    E = n(300986),
    O = n(314451),
    v = n(35583),
    y = n(821020),
    I = n(340137),
    C = n(522474),
    S = n(141321),
    N = n(984802),
    T = n(451478),
    P = n(998502),
    j = n(228488),
    x = n(403497),
    Z = n(950796),
    A = n(741764),
    w = n(82504);
let L = (0, o.U)(() => ({ isOpen: !0 }));
function R(e) {
    let { withFastTravel: t, quickSwitcherInsteadOfTitle: n, focusSectionProps: i } = e;
    return n
        ? (0, r.jsx)(b.R, { focusSectionProps: i })
        : (0, r.jsx)(x.d, {
              withFastTravel: t,
              focusSectionProps: i,
          });
}
let D = i.memo(function () {
    i.useLayoutEffect(() => {
        P.ZP.setMinimumSize(A.J, A.N);
    }, []);
    let { notificationCenterVariant: e, entrypoint: t } = (0, y.pN)({ location: "AppTitleBar" }),
        { titlebarFastTravel: n, quickSwitcherInsteadOfTitle: l } = (0, g.t)({ location: "AppTitleBar" }),
        { backForwardButtons: o, titlebarIconSize: b } = (0, h.T)({ location: "AppTitleBar" }),
        { hasBugReporterAccess: x } = u.Z.useExperiment({ location: "HeaderBar" }, { autoTrackExposure: !1 }),
        { enabled: L } = d.c.useConfig({ location: "AppTitleBar" }),
        D = null !== e && t === y.u3.TITLE_BAR_LEFT,
        M = null === e;
    i.useLayoutEffect(() => {
        P.ZP.setMinimumSize(A.J, A.N);
    }, []);
    let k = (0, N.Ll)(),
        U = (0, s.e7)([T.Z, C.Z], () => (0, j.rB)()),
        G = (function (e) {
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
            showBackForwardButtons: o,
            showNotificationsInbox: D,
            titlebarFastTravel: n,
            showRecentsButton: M,
        });
    if (U) return null;
    let B = a()(w.button, { [w.smallButton]: "sm" === b });
    return (0, r.jsx)(c.Wdt, {
        children: (e) =>
            (0, r.jsx)(c.f6W, {
                theme: k,
                children: (t) => {
                    var i, a;
                    return (0, r.jsx)(Z.TF, {
                        className: t,
                        leading: (0, r.jsxs)(r.Fragment, {
                            children: [
                                o &&
                                    (0, r.jsx)(m.Z, {
                                        firstElementFocusJumpSectionProps: "BACK_FORWARD_NAVIGATION" === G ? e : void 0,
                                    }),
                                D && (0, r.jsx)(I.Z, { focusSectionProps: "NOTIFICATIONS_INBOX" === G ? e : void 0 }),
                            ],
                        }),
                        title: (0, r.jsx)(R, {
                            withFastTravel: n,
                            quickSwitcherInsteadOfTitle: l,
                            focusSectionProps: "TITLEBAR_FAST_TRAVEL" === G ? e : void 0,
                        }),
                        trailing: (0, r.jsxs)(r.Fragment, {
                            children: [
                                L && (0, r.jsx)(p.Z, { className: B }),
                                (0, r.jsx)(_.Z, { className: B }),
                                (0, r.jsx)(f.Z, {
                                    canShowReminder: !0,
                                    className: B,
                                }),
                                M &&
                                    (0, r.jsx)(
                                        S.Z,
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
                                        })({}, "RECENTS" === G ? e : {})),
                                        (a = a = { className: B }),
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
                                x
                                    ? (0, r.jsx)(O.Z, {
                                          focusSectionProps: "HELP" === G ? e : void 0,
                                          className: B,
                                      })
                                    : (0, r.jsx)(E.Z, {
                                          focusSectionProps: "HELP" === G ? e : void 0,
                                          className: B,
                                      }),
                                (0, r.jsx)(v.Z, { className: B }),
                            ],
                        }),
                    });
                },
            }),
    });
});
