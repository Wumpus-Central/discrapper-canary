n.r(t),
    n.d(t, {
        default: () => V,
        useAppSidebarState: () => B,
    });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(663042),
    o = n(442837),
    c = n(481060),
    u = n(833484),
    d = n(812206),
    p = n(870822),
    f = n(174556),
    g = n(99977),
    h = n(919842),
    m = n(320007),
    b = n(719961),
    E = n(336219),
    _ = n(609174),
    O = n(257966),
    v = n(111666),
    y = n(413557),
    I = n(300986),
    C = n(314451),
    S = n(137899),
    T = n(273959),
    N = n(821020),
    j = n(340137),
    P = n(522474),
    x = n(141321),
    A = n(984802),
    Z = n(695346),
    w = n(906467),
    L = n(695103),
    R = n(451478),
    D = n(998502),
    M = n(228488),
    k = n(950796),
    U = n(741764),
    G = n(428754);
let B = (0, s.U)(() => ({ isOpen: !0 }));
function H(e) {
    let { withFastTravel: t, quickSwitcherInsteadOfTitle: n, focusSectionProps: i } = e;
    return n
        ? (0, r.jsx)(O.R, { focusSectionProps: i })
        : (0, r.jsx)(T.d, {
              withFastTravel: t,
              focusSectionProps: i,
          });
}
let V = i.memo(function () {
    i.useLayoutEffect(() => {
        D.ZP.setMinimumSize(U.J, U.N);
    }, []);
    let { notificationCenterVariant: e, entrypoint: t } = (0, N.pN)({ location: "AppTitleBar" }),
        { titlebarFastTravel: n, quickSwitcherInsteadOfTitle: l } = (0, E.t)({ location: "AppTitleBar" }),
        { backForwardButtons: s, titlebarIconSize: O } = (0, b.T)({ location: "AppTitleBar" }),
        { hasBugReporterAccess: T } = f.Z.useExperiment({ location: "HeaderBar" }, { autoTrackExposure: !1 }),
        { enabled: B } = g.c.useConfig({ location: "AppTitleBar" }),
        V = (0, o.e7)([w.Z], () => w.Z.isDeveloper),
        F = (0, o.e7)(
            [L.Z, d.Z],
            () =>
                Z.Sb.getSetting() &&
                null != L.Z.testModeApplicationId &&
                null != d.Z.getApplication(L.Z.testModeApplicationId) &&
                (0, p.Z)(d.Z.getApplication(L.Z.testModeApplicationId)),
        ),
        z = null !== e && t === N.u3.TITLE_BAR_LEFT,
        Y = null === e;
    i.useLayoutEffect(() => {
        D.ZP.setMinimumSize(U.J, U.N);
    }, []);
    let W = (0, A.Ll)(),
        q = (0, o.e7)([R.Z, P.Z], () => (0, M.rB)()),
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
            showNotificationsInbox: z,
            titlebarFastTravel: n,
            showRecentsButton: Y,
        });
    if (q) return null;
    let Q = a()(G.button, { [G.smallButton]: "sm" === O });
    return (0, r.jsx)(c.Wdt, {
        children: (e) =>
            (0, r.jsx)(c.f6W, {
                theme: W,
                children: (t) => {
                    var i, a;
                    return (0, r.jsx)(k.TF, {
                        className: t,
                        leading: (0, r.jsxs)(r.Fragment, {
                            children: [
                                s &&
                                    (0, r.jsx)(_.Z, {
                                        firstElementFocusJumpSectionProps: "BACK_FORWARD_NAVIGATION" === K ? e : void 0,
                                    }),
                                z && (0, r.jsx)(j.Z, { focusSectionProps: "NOTIFICATIONS_INBOX" === K ? e : void 0 }),
                            ],
                        }),
                        title: (0, r.jsx)(H, {
                            withFastTravel: n,
                            quickSwitcherInsteadOfTitle: l,
                            focusSectionProps: "TITLEBAR_FAST_TRAVEL" === K ? e : void 0,
                        }),
                        trailing: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(v.Z, { className: Q }),
                                B && (0, r.jsx)(h.Z, { className: Q }),
                                (0, r.jsx)(m.Z, {
                                    canShowReminder: !0,
                                    className: Q,
                                }),
                                Y &&
                                    (0, r.jsx)(
                                        x.Z,
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
                                T
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(C.H, {
                                                  focusSectionProps: "HELP" === K ? e : void 0,
                                                  className: Q,
                                              }),
                                              V ? (0, r.jsx)(y.M, { className: Q }) : null,
                                          ],
                                      })
                                    : (0, r.jsx)(I.Z, {
                                          focusSectionProps: "HELP" === K ? e : void 0,
                                          className: Q,
                                      }),
                                F && (0, r.jsx)(u.Z, { className: Q }),
                                (0, r.jsx)(S.Z, { className: Q }),
                            ],
                        }),
                    });
                },
            }),
    });
});
