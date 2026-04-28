"use strict";
n.d(t, { A: () => C });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(17928),
    o = n(502572),
    c = n(990078),
    d = n(862482),
    u = n(194261),
    _ = n(821609),
    p = n(930861),
    f = n(104510),
    m = n(820739),
    h = n(688810),
    g = n(531260),
    b = n(267102),
    A = n(178368),
    E = n(166403),
    v = n(473145),
    I = n(987144),
    y = n(652215),
    x = n(788868),
    S = n(985018),
    T = n(703870);
let C = (e) => {
    let {
            analyticsLocation: t,
            analyticsSourceLocation: n,
            guild: i,
            buttonText: C,
            targetBoostedGuildTier: N,
            onClose: R = () => {},
            closeLayer: w = () => {},
            pauseAnimation: L = !1,
            applicationId: M,
            handleSubscribeModalClose: O,
            withHighlight: D = !1,
            icon: P,
            intent: j,
            useExpressiveButton: k = !1,
            ...U
        } = e,
        { analyticsLocations: F } = (0, h.Ay)(),
        B = (0, b.Us)() === y.BRT.POPOUT,
        [G, V] = a.useState(!1),
        { fractionalState: H } = (0, g.A)(),
        W = (0, s.bG)([A.A], () => A.A.hasFetched);
    a.useEffect(() => {
        W || (0, m.CD)();
    }, [W]);
    let Z = (0, v.D$)(A.A.boostSlots),
        z = null != N ? Math.max((0, v.Os)(i, N), 1) : 1,
        Y = (0, v.Nc)({ fractionalState: H }),
        X = async () => {
            V(!0),
                await (0, I.g)({
                    analyticsLocations: F,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: i,
                    numberOfBoostsToAdd: z,
                    onClose: R,
                    closeLayer: w,
                    inPopout: B,
                    applicationId: M,
                    handleSubscribeModalClose: O,
                    intent: j,
                }),
                V(!1);
        },
        q = E.A.getPremiumTypeSubscription(),
        J = (0, r.jsxs)("div", { className: T.x6, children: [P, C ?? S.intl.string(S.t.gKmQ1G)] }),
        $ = !1;
    return (($ = null !== q && !(Z.length > 0) && q?.isPausedOrPausePending && H === x.xc.NONE) &&
        ((J = (0, r.jsxs)("div", {
            className: T.x6,
            children: [(0, r.jsx)(u.X, { size: "xs", className: T.iA }), " ", J],
        })),
        (U.disabled = !0)),
    null != Y)
        ? k
            ? (0, r.jsx)(c.m, {
                  text: Y,
                  children: (0, r.jsx)(_.$, {
                      variant: "expressive",
                      icon: u.X,
                      iconPosition: "start",
                      disabled: !0,
                      fullWidth: U.fullWidth,
                      text: C ?? S.intl.string(S.t.gKmQ1G),
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
                          size: d.$n.Sizes.SMALL,
                          pauseAnimation: L,
                          ...U,
                          children: J,
                      }),
              })
        : k
          ? (0, r.jsx)(_.$, {
                variant: "expressive",
                icon: f._,
                disabled: $,
                loading: G,
                fullWidth: U.fullWidth,
                text: C ?? S.intl.string(S.t.gKmQ1G),
                onClick: X,
            })
          : (0, r.jsx)(p.wL, {
                "data-migration-pending": !0,
                size: d.$n.Sizes.SMALL,
                ...U,
                className: l()(U.className, { [T.yj]: D }),
                submitting: G,
                onClick: X,
                pauseAnimation: L,
                children: J,
            });
};
