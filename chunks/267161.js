n.r(t),
    n.d(t, {
        default: () => k,
        useAppSidebarState: () => D,
    });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(191336),
    o = n(442837),
    c = n(481060),
    u = n(174556),
    d = n(99977),
    p = n(919842),
    f = n(320007),
    h = n(719961),
    g = n(336219),
    m = n(609174),
    _ = n(257966),
    b = n(111666),
    E = n(413557),
    O = n(300986),
    y = n(314451),
    v = n(35583),
    I = n(273959),
    C = n(821020),
    S = n(340137),
    T = n(522474),
    N = n(141321),
    j = n(984802),
    P = n(906467),
    x = n(451478),
    A = n(998502),
    Z = n(228488),
    w = n(950796),
    L = n(741764),
    R = n(851352);
let D = (0, s.U)(() => ({ isOpen: !0 }));
function M(e) {
    let { withFastTravel: t, quickSwitcherInsteadOfTitle: n, focusSectionProps: i } = e;
    return n
        ? (0, r.jsx)(_.R, { focusSectionProps: i })
        : (0, r.jsx)(I.d, {
              withFastTravel: t,
              focusSectionProps: i,
          });
}
let k = i.memo(function () {
    i.useLayoutEffect(() => {
        A.ZP.setMinimumSize(L.J, L.N);
    }, []);
    let { notificationCenterVariant: e, entrypoint: t } = (0, C.pN)({ location: "AppTitleBar" }),
        { titlebarFastTravel: n, quickSwitcherInsteadOfTitle: l } = (0, g.t)({ location: "AppTitleBar" }),
        { backForwardButtons: s, titlebarIconSize: _ } = (0, h.T)({ location: "AppTitleBar" }),
        { hasBugReporterAccess: I } = u.Z.useExperiment({ location: "HeaderBar" }, { autoTrackExposure: !1 }),
        { enabled: D } = d.c.useConfig({ location: "AppTitleBar" }),
        k = (0, o.e7)([P.Z], () => P.Z.isDeveloper),
        U = null !== e && t === C.u3.TITLE_BAR_LEFT,
        G = null === e;
    i.useLayoutEffect(() => {
        A.ZP.setMinimumSize(L.J, L.N);
    }, []);
    let B = (0, j.Ll)(),
        H = (0, o.e7)([x.Z, T.Z], () => (0, Z.rB)()),
        V = (function (e) {
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
            showNotificationsInbox: U,
            titlebarFastTravel: n,
            showRecentsButton: G,
        });
    if (H) return null;
    let F = a()(R.button, { [R.smallButton]: "sm" === _ });
    return (0, r.jsx)(c.Wdt, {
        children: (e) =>
            (0, r.jsx)(c.f6W, {
                theme: B,
                children: (t) => {
                    var i, a;
                    return (0, r.jsx)(w.TF, {
                        className: t,
                        leading: (0, r.jsxs)(r.Fragment, {
                            children: [
                                s &&
                                    (0, r.jsx)(m.Z, {
                                        firstElementFocusJumpSectionProps: "BACK_FORWARD_NAVIGATION" === V ? e : void 0,
                                    }),
                                U && (0, r.jsx)(S.Z, { focusSectionProps: "NOTIFICATIONS_INBOX" === V ? e : void 0 }),
                            ],
                        }),
                        title: (0, r.jsx)(M, {
                            withFastTravel: n,
                            quickSwitcherInsteadOfTitle: l,
                            focusSectionProps: "TITLEBAR_FAST_TRAVEL" === V ? e : void 0,
                        }),
                        trailing: (0, r.jsxs)(r.Fragment, {
                            children: [
                                D && (0, r.jsx)(p.Z, { className: F }),
                                (0, r.jsx)(b.Z, { className: F }),
                                (0, r.jsx)(f.Z, {
                                    canShowReminder: !0,
                                    className: F,
                                }),
                                G &&
                                    (0, r.jsx)(
                                        N.Z,
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
                                        })({}, "RECENTS" === V ? e : {})),
                                        (a = a = { className: F }),
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
                                I
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(y.H, {
                                                  focusSectionProps: "HELP" === V ? e : void 0,
                                                  className: F,
                                              }),
                                              k ? (0, r.jsx)(E.M, { className: F }) : null,
                                          ],
                                      })
                                    : (0, r.jsx)(O.Z, {
                                          focusSectionProps: "HELP" === V ? e : void 0,
                                          className: F,
                                      }),
                                (0, r.jsx)(v.Z, { className: F }),
                            ],
                        }),
                    });
                },
            }),
    });
});
