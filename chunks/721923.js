"use strict";
r.d(t, { A: () => C });
var n = r(627968),
    i = r(64700),
    a = r(503698),
    s = r.n(a),
    l = r(17928),
    o = r(502572),
    c = r(990078),
    d = r(862482),
    u = r(194261),
    _ = r(821609),
    p = r(930861),
    f = r(104510),
    m = r(820739),
    h = r(688810),
    g = r(531260),
    b = r(267102),
    A = r(178368),
    E = r(166403),
    v = r(473145),
    y = r(987144),
    I = r(652215),
    S = r(788868),
    x = r(985018),
    T = r(703870);
let C = (e) => {
    let {
            analyticsLocation: t,
            analyticsSourceLocation: r,
            guild: a,
            buttonText: C,
            targetBoostedGuildTier: R,
            onClose: N = () => {},
            closeLayer: L = () => {},
            pauseAnimation: w = !1,
            applicationId: P,
            handleSubscribeModalClose: O,
            withHighlight: D = !1,
            icon: M,
            intent: k,
            useExpressiveButton: j = !1,
            ...U
        } = e,
        { analyticsLocations: F } = (0, h.Ay)(),
        B = (0, b.Us)() === I.BRT.POPOUT,
        [G, H] = i.useState(!1),
        { fractionalState: V } = (0, g.A)(),
        W = (0, l.bG)([A.A], () => A.A.hasFetched);
    i.useEffect(() => {
        W || (0, m.CD)();
    }, [W]);
    let z = (0, v.D$)(A.A.boostSlots),
        Y = null != R ? Math.max((0, v.Os)(a, R), 1) : 1,
        Z = (0, v.Nc)({ fractionalState: V }),
        q = async () => {
            H(!0),
                await (0, y.g)({
                    analyticsLocations: F,
                    analyticsLocation: t,
                    analyticsSourceLocation: r,
                    guild: a,
                    numberOfBoostsToAdd: Y,
                    onClose: N,
                    closeLayer: L,
                    inPopout: B,
                    applicationId: P,
                    handleSubscribeModalClose: O,
                    intent: k,
                }),
                H(!1);
        },
        X = E.A.getPremiumTypeSubscription(),
        $ = (0, n.jsxs)("div", { className: T.x6, children: [M, C ?? x.intl.string(x.t.gKmQ1G)] }),
        K = !1;
    return ((K = null !== X && !(z.length > 0) && X?.isPausedOrPausePending && V === S.xc.NONE) &&
        (($ = (0, n.jsxs)("div", {
            className: T.x6,
            children: [(0, n.jsx)(u.X, { size: "xs", className: T.iA }), " ", $],
        })),
        (U.disabled = !0)),
    null != Z)
        ? j
            ? (0, n.jsx)(c.m, {
                  text: Z,
                  children: (0, n.jsx)(_.$, {
                      variant: "expressive",
                      icon: u.X,
                      iconPosition: "start",
                      disabled: !0,
                      fullWidth: U.fullWidth,
                      text: C ?? x.intl.string(x.t.gKmQ1G),
                  }),
              })
            : (0, n.jsx)(o.A, {
                  text: Z,
                  "aria-label": !1,
                  children: (e) =>
                      (0, n.jsx)(p.wL, {
                          "data-migration-pending": !0,
                          ...e,
                          disabled: !0,
                          size: d.$n.Sizes.SMALL,
                          pauseAnimation: w,
                          ...U,
                          children: $,
                      }),
              })
        : j
          ? (0, n.jsx)(_.$, {
                variant: "expressive",
                icon: f._,
                disabled: K,
                loading: G,
                fullWidth: U.fullWidth,
                text: C ?? x.intl.string(x.t.gKmQ1G),
                onClick: q,
            })
          : (0, n.jsx)(p.wL, {
                "data-migration-pending": !0,
                size: d.$n.Sizes.SMALL,
                ...U,
                className: s()(U.className, { [T.yj]: D }),
                submitting: G,
                onClick: q,
                pauseAnimation: w,
                children: $,
            });
};
