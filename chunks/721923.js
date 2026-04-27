a.d(t, { A: () => C });
var r = a(627968),
    n = a(64700),
    l = a(503698),
    i = a.n(l),
    s = a(17928),
    o = a(502572),
    c = a(990078),
    d = a(862482),
    u = a(194261),
    h = a(821609),
    p = a(930861),
    m = a(104510),
    f = a(820739),
    b = a(688810),
    _ = a(531260),
    g = a(267102),
    x = a(178368),
    v = a(166403),
    A = a(473145),
    y = a(987144),
    E = a(652215),
    I = a(788868),
    j = a(985018),
    S = a(703870);
let C = (e) => {
    let {
            analyticsLocation: t,
            analyticsSourceLocation: a,
            guild: l,
            buttonText: C,
            targetBoostedGuildTier: T,
            onClose: R = () => {},
            closeLayer: w = () => {},
            pauseAnimation: k = !1,
            applicationId: L,
            handleSubscribeModalClose: N,
            withHighlight: O = !1,
            icon: P,
            intent: D,
            useExpressiveButton: M = !1,
            ...U
        } = e,
        { analyticsLocations: F } = (0, b.Ay)(),
        V = (0, g.Us)() === E.BRT.POPOUT,
        [B, G] = n.useState(!1),
        { fractionalState: H } = (0, _.A)(),
        W = (0, s.bG)([x.A], () => x.A.hasFetched);
    n.useEffect(() => {
        W || (0, f.CD)();
    }, [W]);
    let z = (0, A.D$)(x.A.boostSlots),
        Z = null != T ? Math.max((0, A.Os)(l, T), 1) : 1,
        Y = (0, A.Nc)({ fractionalState: H }),
        K = async () => {
            G(!0),
                await (0, y.g)({
                    analyticsLocations: F,
                    analyticsLocation: t,
                    analyticsSourceLocation: a,
                    guild: l,
                    numberOfBoostsToAdd: Z,
                    onClose: R,
                    closeLayer: w,
                    inPopout: V,
                    applicationId: L,
                    handleSubscribeModalClose: N,
                    intent: D,
                }),
                G(!1);
        },
        X = v.A.getPremiumTypeSubscription(),
        $ = (0, r.jsxs)("div", { className: S.x6, children: [P, C ?? j.intl.string(j.t.gKmQ1G)] }),
        J = !1;
    return ((J = null !== X && !(z.length > 0) && X?.isPausedOrPausePending && H === I.xc.NONE) &&
        (($ = (0, r.jsxs)("div", {
            className: S.x6,
            children: [(0, r.jsx)(u.X, { size: "xs", className: S.iA }), " ", $],
        })),
        (U.disabled = !0)),
    null != Y)
        ? M
            ? (0, r.jsx)(c.m, {
                  text: Y,
                  children: (0, r.jsx)(h.$, {
                      variant: "expressive",
                      icon: u.X,
                      iconPosition: "start",
                      disabled: !0,
                      fullWidth: U.fullWidth,
                      text: C ?? j.intl.string(j.t.gKmQ1G),
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
                          pauseAnimation: k,
                          ...U,
                          children: $,
                      }),
              })
        : M
          ? (0, r.jsx)(h.$, {
                variant: "expressive",
                icon: m._,
                disabled: J,
                loading: B,
                fullWidth: U.fullWidth,
                text: C ?? j.intl.string(j.t.gKmQ1G),
                onClick: K,
            })
          : (0, r.jsx)(p.wL, {
                "data-migration-pending": !0,
                size: d.$n.Sizes.SMALL,
                ...U,
                className: i()(U.className, { [S.yj]: O }),
                submitting: B,
                onClick: K,
                pauseAnimation: k,
                children: $,
            });
};
