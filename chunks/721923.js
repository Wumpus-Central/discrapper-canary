"use strict";
n.d(t, { A: () => y });
var a = n(627968),
    r = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(17928),
    o = n(502572),
    c = n(990078),
    d = n(862482),
    u = n(194261),
    _ = n(821609),
    p = n(930861),
    m = n(104510),
    h = n(820739),
    f = n(688810),
    g = n(531260),
    b = n(267102),
    v = n(178368),
    A = n(166403),
    x = n(473145),
    E = n(987144),
    T = n(652215),
    S = n(788868),
    C = n(985018),
    I = n(703870);
let y = (e) => {
    let {
            analyticsLocation: t,
            analyticsSourceLocation: n,
            guild: i,
            buttonText: y,
            targetBoostedGuildTier: N,
            onClose: R = () => {},
            closeLayer: j = () => {},
            pauseAnimation: L = !1,
            applicationId: w,
            handleSubscribeModalClose: O,
            withHighlight: D = !1,
            icon: M,
            intent: P,
            useExpressiveButton: k = !1,
            ...U
        } = e,
        { analyticsLocations: G } = (0, f.Ay)(),
        H = (0, b.Us)() === T.BRT.POPOUT,
        [F, B] = r.useState(!1),
        { fractionalState: V } = (0, g.A)(),
        W = (0, s.bG)([v.A], () => v.A.hasFetched);
    r.useEffect(() => {
        W || (0, h.CD)();
    }, [W]);
    let z = (0, x.D$)(v.A.boostSlots),
        Z = null != N ? Math.max((0, x.Os)(i, N), 1) : 1,
        Y = (0, x.Nc)({ fractionalState: V }),
        $ = async () => {
            B(!0),
                await (0, E.g)({
                    analyticsLocations: G,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: i,
                    numberOfBoostsToAdd: Z,
                    onClose: R,
                    closeLayer: j,
                    inPopout: H,
                    applicationId: w,
                    handleSubscribeModalClose: O,
                    intent: P,
                }),
                B(!1);
        },
        K = A.A.getPremiumTypeSubscription(),
        q = (0, a.jsxs)("div", { className: I.x6, children: [M, y ?? C.intl.string(C.t.gKmQ1G)] }),
        J = !1;
    return ((J = null !== K && !(z.length > 0) && K?.isPausedOrPausePending && V === S.xc.NONE) &&
        ((q = (0, a.jsxs)("div", {
            className: I.x6,
            children: [(0, a.jsx)(u.X, { size: "xs", className: I.iA }), " ", q],
        })),
        (U.disabled = !0)),
    null != Y)
        ? k
            ? (0, a.jsx)(c.m, {
                  text: Y,
                  children: (0, a.jsx)(_.$, {
                      variant: "expressive",
                      icon: u.X,
                      iconPosition: "start",
                      disabled: !0,
                      fullWidth: U.fullWidth,
                      text: y ?? C.intl.string(C.t.gKmQ1G),
                  }),
              })
            : (0, a.jsx)(o.A, {
                  text: Y,
                  "aria-label": !1,
                  children: (e) =>
                      (0, a.jsx)(p.wL, {
                          "data-migration-pending": !0,
                          ...e,
                          disabled: !0,
                          size: d.$n.Sizes.SMALL,
                          pauseAnimation: L,
                          ...U,
                          children: q,
                      }),
              })
        : k
          ? (0, a.jsx)(_.$, {
                variant: "expressive",
                icon: m._,
                disabled: J,
                loading: F,
                fullWidth: U.fullWidth,
                text: y ?? C.intl.string(C.t.gKmQ1G),
                onClick: $,
            })
          : (0, a.jsx)(p.wL, {
                "data-migration-pending": !0,
                size: d.$n.Sizes.SMALL,
                ...U,
                className: l()(U.className, { [I.yj]: D }),
                submitting: F,
                onClick: $,
                pauseAnimation: L,
                children: q,
            });
};
