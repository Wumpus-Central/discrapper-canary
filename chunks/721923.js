a.d(t, { A: () => C });
var n = a(627968),
    r = a(64700),
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
    E = a(987144),
    y = a(652215),
    I = a(788868),
    S = a(985018),
    j = a(703870);
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
        V = (0, g.Us)() === y.BRT.POPOUT,
        [B, G] = r.useState(!1),
        { fractionalState: H } = (0, _.A)(),
        W = (0, s.bG)([x.A], () => x.A.hasFetched);
    r.useEffect(() => {
        W || (0, f.CD)();
    }, [W]);
    let z = (0, A.D$)(x.A.boostSlots),
        Z = null != T ? Math.max((0, A.Os)(l, T), 1) : 1,
        Y = (0, A.Nc)({ fractionalState: H }),
        K = async () => {
            G(!0),
                await (0, E.g)({
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
        $ = (0, n.jsxs)("div", { className: j.x6, children: [P, C ?? S.intl.string(S.t.gKmQ1G)] }),
        J = !1;
    return ((J = null !== X && !(z.length > 0) && X?.isPausedOrPausePending && H === I.xc.NONE) &&
        (($ = (0, n.jsxs)("div", {
            className: j.x6,
            children: [(0, n.jsx)(u.X, { size: "xs", className: j.iA }), " ", $],
        })),
        (U.disabled = !0)),
    null != Y)
        ? M
            ? (0, n.jsx)(c.m, {
                  text: Y,
                  children: (0, n.jsx)(h.$, {
                      variant: "expressive",
                      icon: u.X,
                      iconPosition: "start",
                      disabled: !0,
                      fullWidth: U.fullWidth,
                      text: C ?? S.intl.string(S.t.gKmQ1G),
                  }),
              })
            : (0, n.jsx)(o.A, {
                  text: Y,
                  "aria-label": !1,
                  children: (e) =>
                      (0, n.jsx)(p.wL, {
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
          ? (0, n.jsx)(h.$, {
                variant: "expressive",
                icon: m._,
                disabled: J,
                loading: B,
                fullWidth: U.fullWidth,
                text: C ?? S.intl.string(S.t.gKmQ1G),
                onClick: K,
            })
          : (0, n.jsx)(p.wL, {
                "data-migration-pending": !0,
                size: d.$n.Sizes.SMALL,
                ...U,
                className: i()(U.className, { [j.yj]: O }),
                submitting: B,
                onClick: K,
                pauseAnimation: k,
                children: $,
            });
};
