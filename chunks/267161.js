n.r(t),
    n.d(t, {
        default: () => L,
        useAppSidebarState: () => Z,
    });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(191336),
    s = n(442837),
    c = n(481060),
    u = n(174556),
    d = n(320007),
    p = n(719961),
    f = n(336219),
    h = n(609174),
    g = n(257966),
    m = n(111666),
    b = n(300986),
    _ = n(314451),
    O = n(35583),
    E = n(821020),
    v = n(340137),
    y = n(522474),
    I = n(141321),
    C = n(984802),
    S = n(451478),
    T = n(998502),
    N = n(228488),
    j = n(403497),
    P = n(950796),
    x = n(741764),
    A = n(82504);
let Z = (0, o.U)(() => ({ isOpen: !0 }));
function w(e) {
    let { withFastTravel: t, quickSwitcherInsteadOfTitle: n, focusSectionProps: i } = e;
    return n
        ? (0, r.jsx)(g.R, { focusSectionProps: i })
        : (0, r.jsx)(j.d, {
              withFastTravel: t,
              focusSectionProps: i,
          });
}
let L = i.memo(function () {
    i.useLayoutEffect(() => {
        T.ZP.setMinimumSize(x.J, x.N);
    }, []);
    let { notificationCenterVariant: e, entrypoint: t } = (0, E.pN)({ location: "AppTitleBar" }),
        { titlebarFastTravel: n, quickSwitcherInsteadOfTitle: l } = (0, f.t)({ location: "AppTitleBar" }),
        { backForwardButtons: o, titlebarIconSize: g } = (0, p.T)({ location: "AppTitleBar" }),
        { hasBugReporterAccess: j } = u.Z.useExperiment({ location: "HeaderBar" }, { autoTrackExposure: !1 }),
        Z = null !== e && t === E.u3.TITLE_BAR_LEFT,
        L = null === e;
    i.useLayoutEffect(() => {
        T.ZP.setMinimumSize(x.J, x.N);
    }, []);
    let R = (0, C.Ll)(),
        D = (0, s.e7)([S.Z, y.Z], () => (0, N.rB)()),
        k = (function (e) {
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
            showNotificationsInbox: Z,
            titlebarFastTravel: n,
            showRecentsButton: L,
        });
    if (D) return null;
    let M = a()(A.button, { [A.smallButton]: "sm" === g });
    return (0, r.jsx)(c.Wdt, {
        children: (e) =>
            (0, r.jsx)(c.f6W, {
                theme: R,
                children: (t) => {
                    var i, a;
                    return (0, r.jsx)(P.TF, {
                        className: t,
                        leading: (0, r.jsxs)(r.Fragment, {
                            children: [
                                o &&
                                    (0, r.jsx)(h.Z, {
                                        firstElementFocusJumpSectionProps: "BACK_FORWARD_NAVIGATION" === k ? e : void 0,
                                    }),
                                Z && (0, r.jsx)(v.Z, { focusSectionProps: "NOTIFICATIONS_INBOX" === k ? e : void 0 }),
                            ],
                        }),
                        title: (0, r.jsx)(w, {
                            withFastTravel: n,
                            quickSwitcherInsteadOfTitle: l,
                            focusSectionProps: "TITLEBAR_FAST_TRAVEL" === k ? e : void 0,
                        }),
                        trailing: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.Z, { className: M }),
                                (0, r.jsx)(d.Z, {
                                    canShowReminder: !0,
                                    className: M,
                                }),
                                L &&
                                    (0, r.jsx)(
                                        I.Z,
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
                                        })({}, "RECENTS" === k ? e : {})),
                                        (a = a = { className: M }),
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
                                j
                                    ? (0, r.jsx)(_.Z, {
                                          focusSectionProps: "HELP" === k ? e : void 0,
                                          className: M,
                                      })
                                    : (0, r.jsx)(b.Z, {
                                          focusSectionProps: "HELP" === k ? e : void 0,
                                          className: M,
                                      }),
                                (0, r.jsx)(O.Z, { className: M }),
                            ],
                        }),
                    });
                },
            }),
    });
});
