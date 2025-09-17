n.r(t),
    n.d(t, {
        default: () => V,
        useAppSidebarState: () => U,
    });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(879690),
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
    y = n(340137),
    v = n(522474),
    I = n(141321),
    C = n(819439),
    S = n(296241),
    T = n(165017),
    N = n(984802),
    P = n(592125),
    j = n(944486),
    x = n(914010),
    A = n(451478),
    Z = n(998502),
    w = n(228488),
    L = n(403497),
    R = n(950796),
    D = n(176505),
    k = n(741764),
    M = n(851352);
let U = (0, o.U)(() => ({ isOpen: !0 }));
function G(e) {
    let { selectedChannelId: t, withFastTravel: n, focusSectionProps: i } = e,
        l = (0, s.e7)([x.Z, P.Z], () => {
            let e = x.Z.getGuildId(),
                n = P.Z.getChannel(t);
            return null != e ? e : null == n ? void 0 : n.guild_id;
        }),
        a = (0, T.H)({
            guildId: l,
            channelId: t,
        });
    return null == a
        ? (0, r.jsx)(L.d, {
              selectedChannelId: t,
              withFastTravel: n,
              focusSectionProps: i,
          })
        : (0, r.jsx)(S.Z, {
              searchContext: a,
              focusSectionProps: i,
          });
}
function B(e) {
    let { withFastTravel: t, quickSwitcherInsteadOfTitle: n, focusSectionProps: i } = e,
        l = (0, s.e7)([j.Z], () => j.Z.getChannelId()),
        a = (0, C.$)({ location: "TitleText" }),
        o = (0, s.e7)([P.Z], () => {
            let e = P.Z.getChannel(l);
            return null != e && !e.isDirectory() && !e.isGuildVocal();
        });
    return a && null != l && !(0, D.AB)(l) && o
        ? (0, r.jsx)(G, {
              selectedChannelId: l,
              withFastTravel: t,
              focusSectionProps: i,
          })
        : n
          ? (0, r.jsx)(g.R, { focusSectionProps: i })
          : (0, r.jsx)(L.d, {
                selectedChannelId: l,
                withFastTravel: t,
                focusSectionProps: i,
            });
}
let V = i.memo(function () {
    i.useLayoutEffect(() => {
        Z.ZP.setMinimumSize(k.J, k.N);
    }, []);
    let { notificationCenterVariant: e, entrypoint: t } = (0, E.pN)({ location: "AppTitleBar" }),
        { titlebarFastTravel: n, quickSwitcherInsteadOfTitle: l } = (0, f.t)({ location: "AppTitleBar" }),
        { backForwardButtons: o, titlebarIconSize: g } = (0, p.T)({ location: "AppTitleBar" }),
        { hasBugReporterAccess: C } = u.Z.useExperiment({ location: "HeaderBar" }, { autoTrackExposure: !1 }),
        S = null !== e && t === E.u3.TITLE_BAR_LEFT,
        T = null === e;
    i.useLayoutEffect(() => {
        Z.ZP.setMinimumSize(k.J, k.N);
    }, []);
    let P = (0, N.Ll)(),
        j = (0, s.e7)([A.Z, v.Z], () => (0, w.rB)()),
        x = (function (e) {
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
            showNotificationsInbox: S,
            titlebarFastTravel: n,
            showRecentsButton: T,
        });
    if (j) return null;
    let L = a()(M.button, { [M.smallButton]: "sm" === g });
    return (0, r.jsx)(c.Wdt, {
        children: (e) =>
            (0, r.jsx)(c.f6W, {
                theme: P,
                children: (t) => {
                    var i, a;
                    return (0, r.jsx)(R.TF, {
                        className: t,
                        leading: (0, r.jsxs)(r.Fragment, {
                            children: [
                                o &&
                                    (0, r.jsx)(h.Z, {
                                        firstElementFocusJumpSectionProps: "BACK_FORWARD_NAVIGATION" === x ? e : void 0,
                                    }),
                                S && (0, r.jsx)(y.Z, { focusSectionProps: "NOTIFICATIONS_INBOX" === x ? e : void 0 }),
                            ],
                        }),
                        title: (0, r.jsx)(B, {
                            withFastTravel: n,
                            quickSwitcherInsteadOfTitle: l,
                            focusSectionProps: "TITLEBAR_FAST_TRAVEL" === x ? e : void 0,
                        }),
                        trailing: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.Z, { className: L }),
                                (0, r.jsx)(d.Z, {
                                    canShowReminder: !0,
                                    className: L,
                                }),
                                T &&
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
                                        })({}, "RECENTS" === x ? e : {})),
                                        (a = a = { className: L }),
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
                                    ? (0, r.jsx)(_.Z, {
                                          focusSectionProps: "HELP" === x ? e : void 0,
                                          className: L,
                                      })
                                    : (0, r.jsx)(b.Z, {
                                          focusSectionProps: "HELP" === x ? e : void 0,
                                          className: L,
                                      }),
                                (0, r.jsx)(O.Z, { className: L }),
                            ],
                        }),
                    });
                },
            }),
    });
});
