"use strict";
a.d(t, { A: () => C });
var r = a(627968),
    l = a(64700),
    n = a(503698),
    i = a.n(n),
    s = a(311907),
    o = a(502572),
    d = a(990078),
    c = a(862482),
    u = a(194261),
    h = a(821609),
    p = a(930861),
    _ = a(104510),
    m = a(923408),
    b = a(688810),
    g = a(531260),
    f = a(267102),
    x = a(178368),
    v = a(166403),
    A = a(473145),
    E = a(987144),
    y = a(652215),
    j = a(788868),
    I = a(985018),
    S = a(703870);
let C = (e) => {
    let {
            analyticsLocation: t,
            analyticsSourceLocation: a,
            guild: n,
            buttonText: C,
            targetBoostedGuildTier: T,
            onClose: w = () => {},
            closeLayer: R = () => {},
            pauseAnimation: k = !1,
            applicationId: N,
            handleSubscribeModalClose: L,
            withHighlight: O = !1,
            icon: P,
            intent: M,
            useExpressiveButton: V = !1,
            ...U
        } = e,
        { analyticsLocations: D } = (0, b.Ay)(),
        B = (0, f.Us)() === y.BRT.POPOUT,
        [F, G] = l.useState(!1),
        { fractionalState: H } = (0, g.A)(),
        W = (0, s.bG)([x.A], () => x.A.hasFetched);
    l.useEffect(() => {
        W || (0, m.CD)();
    }, [W]);
    let z = (0, A.D$)(x.A.boostSlots),
        Z = null != T ? Math.max((0, A.Os)(n, T), 1) : 1,
        Y = (0, A.Nc)({ fractionalState: H }),
        K = async () => {
            G(!0),
                await (0, E.g)({
                    analyticsLocations: D,
                    analyticsLocation: t,
                    analyticsSourceLocation: a,
                    guild: n,
                    numberOfBoostsToAdd: Z,
                    onClose: w,
                    closeLayer: R,
                    inPopout: B,
                    applicationId: N,
                    handleSubscribeModalClose: L,
                    intent: M,
                }),
                G(!1);
        },
        J = v.A.getPremiumTypeSubscription(),
        $ = (0, r.jsxs)("div", { className: S.x6, children: [P, C ?? I.intl.string(I.t.gKmQ1G)] }),
        q = !1;
    return ((q = null !== J && !(z.length > 0) && J?.isPausedOrPausePending && H === j.xc.NONE) &&
        (($ = (0, r.jsxs)("div", {
            className: S.x6,
            children: [(0, r.jsx)(u.X, { size: "xs", className: S.iA }), " ", $],
        })),
        (U.disabled = !0)),
    null != Y)
        ? V
            ? (0, r.jsx)(d.m, {
                  text: Y,
                  children: (0, r.jsx)(h.$, {
                      variant: "expressive",
                      icon: u.X,
                      iconPosition: "start",
                      disabled: !0,
                      fullWidth: U.fullWidth,
                      text: C ?? I.intl.string(I.t.gKmQ1G),
                  }),
              })
            : (0, r.jsx)(o.A, {
                  text: Y,
                  "aria-label": !1,
                  children: (e) =>
                      (0, r.jsx)(p.wL, {
                          "data-migration-pending": !0,
                          ...e,
                          disabled: !0,
                          size: c.$n.Sizes.SMALL,
                          pauseAnimation: k,
                          ...U,
                          children: $,
                      }),
              })
        : V
          ? (0, r.jsx)(h.$, {
                variant: "expressive",
                icon: _._,
                disabled: q,
                loading: F,
                fullWidth: U.fullWidth,
                text: C ?? I.intl.string(I.t.gKmQ1G),
                onClick: K,
            })
          : (0, r.jsx)(p.wL, {
                "data-migration-pending": !0,
                size: c.$n.Sizes.SMALL,
                ...U,
                className: i()(U.className, { [S.yj]: O }),
                submitting: F,
                onClick: K,
                pauseAnimation: k,
                children: $,
            });
};
