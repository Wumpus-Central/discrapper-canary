n.d(t, { A: () => x });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(17928),
    s = n(502572),
    c = n(990078),
    d = n(862482),
    u = n(194261),
    _ = n(821609),
    p = n(930861),
    f = n(104510),
    h = n(820739),
    m = n(688810),
    g = n(531260),
    b = n(267102),
    A = n(178368),
    E = n(166403),
    v = n(473145),
    I = n(987144),
    y = n(652215),
    S = n(788868),
    C = n(985018),
    T = n(703870);
let x = (e) => {
    let {
            analyticsLocation: t,
            analyticsSourceLocation: n,
            guild: l,
            buttonText: x,
            targetBoostedGuildTier: R,
            onClose: L = () => {},
            closeLayer: N = () => {},
            pauseAnimation: w = !1,
            applicationId: O,
            handleSubscribeModalClose: D,
            withHighlight: P = !1,
            icon: j,
            intent: U,
            useExpressiveButton: M = !1,
            ...k
        } = e,
        { analyticsLocations: F } = (0, m.Ay)(),
        G = (0, b.Us)() === y.BRT.POPOUT,
        [H, B] = i.useState(!1),
        { fractionalState: V } = (0, g.A)(),
        W = (0, o.bG)([A.A], () => A.A.hasFetched);
    i.useEffect(() => {
        W || (0, h.CD)();
    }, [W]);
    let Z = (0, v.D$)(A.A.boostSlots),
        Y = null != R ? Math.max((0, v.Os)(l, R), 1) : 1,
        z = (0, v.Nc)({ fractionalState: V }),
        J = async () => {
            B(!0),
                await (0, I.g)({
                    analyticsLocations: F,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: l,
                    numberOfBoostsToAdd: Y,
                    onClose: L,
                    closeLayer: N,
                    inPopout: G,
                    applicationId: O,
                    handleSubscribeModalClose: D,
                    intent: U,
                }),
                B(!1);
        },
        K = E.A.getPremiumTypeSubscription(),
        Q = (0, a.jsxs)("div", { className: T.x6, children: [j, x ?? C.intl.string(C.t.gKmQ1G)] }),
        $ = !1;
    return (($ = null !== K && !(Z.length > 0) && K?.isPausedOrPausePending && V === S.xc.NONE) &&
        ((Q = (0, a.jsxs)("div", {
            className: T.x6,
            children: [(0, a.jsx)(u.X, { size: "xs", className: T.iA }), " ", Q],
        })),
        (k.disabled = !0)),
    null != z)
        ? M
            ? (0, a.jsx)(c.m, {
                  text: z,
                  children: (0, a.jsx)(_.$, {
                      variant: "expressive",
                      icon: u.X,
                      iconPosition: "start",
                      disabled: !0,
                      fullWidth: k.fullWidth,
                      text: x ?? C.intl.string(C.t.gKmQ1G),
                  }),
              })
            : (0, a.jsx)(s.A, {
                  text: z,
                  "aria-label": !1,
                  children: (e) =>
                      (0, a.jsx)(p.wL, {
                          "data-migration-pending": !0,
                          ...e,
                          disabled: !0,
                          size: d.$n.Sizes.SMALL,
                          pauseAnimation: w,
                          ...k,
                          children: Q,
                      }),
              })
        : M
          ? (0, a.jsx)(_.$, {
                variant: "expressive",
                icon: f._,
                disabled: $,
                loading: H,
                fullWidth: k.fullWidth,
                text: x ?? C.intl.string(C.t.gKmQ1G),
                onClick: J,
            })
          : (0, a.jsx)(p.wL, {
                "data-migration-pending": !0,
                size: d.$n.Sizes.SMALL,
                ...k,
                className: r()(k.className, { [T.yj]: P }),
                submitting: H,
                onClick: J,
                pauseAnimation: w,
                children: Q,
            });
};
