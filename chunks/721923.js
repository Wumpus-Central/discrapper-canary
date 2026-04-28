a.d(t, { A: () => C });
var n = a(627968),
    l = a(64700),
    r = a(503698),
    i = a.n(r),
    s = a(17928),
    o = a(502572),
    c = a(990078),
    d = a(862482),
    u = a(194261),
    h = a(821609),
    p = a(930861),
    m = a(104510),
    f = a(820739),
    _ = a(688810),
    b = a(531260),
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
            guild: r,
            buttonText: C,
            targetBoostedGuildTier: T,
            onClose: w = () => {},
            closeLayer: R = () => {},
            pauseAnimation: N = !1,
            applicationId: k,
            handleSubscribeModalClose: L,
            withHighlight: O = !1,
            icon: M,
            intent: P,
            useExpressiveButton: D = !1,
            ...U
        } = e,
        { analyticsLocations: V } = (0, _.Ay)(),
        F = (0, g.Us)() === y.BRT.POPOUT,
        [B, G] = l.useState(!1),
        { fractionalState: H } = (0, b.A)(),
        W = (0, s.bG)([x.A], () => x.A.hasFetched);
    l.useEffect(() => {
        W || (0, f.CD)();
    }, [W]);
    let Z = (0, A.D$)(x.A.boostSlots),
        z = null != T ? Math.max((0, A.Os)(r, T), 1) : 1,
        K = (0, A.Nc)({ fractionalState: H }),
        Y = async () => {
            G(!0),
                await (0, E.g)({
                    analyticsLocations: V,
                    analyticsLocation: t,
                    analyticsSourceLocation: a,
                    guild: r,
                    numberOfBoostsToAdd: z,
                    onClose: w,
                    closeLayer: R,
                    inPopout: F,
                    applicationId: k,
                    handleSubscribeModalClose: L,
                    intent: P,
                }),
                G(!1);
        },
        X = v.A.getPremiumTypeSubscription(),
        J = (0, n.jsxs)("div", { className: j.x6, children: [M, C ?? S.intl.string(S.t.gKmQ1G)] }),
        $ = !1;
    return (($ = null !== X && !(Z.length > 0) && X?.isPausedOrPausePending && H === I.xc.NONE) &&
        ((J = (0, n.jsxs)("div", {
            className: j.x6,
            children: [(0, n.jsx)(u.X, { size: "xs", className: j.iA }), " ", J],
        })),
        (U.disabled = !0)),
    null != K)
        ? D
            ? (0, n.jsx)(c.m, {
                  text: K,
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
                  text: K,
                  "aria-label": !1,
                  children: (e) =>
                      (0, n.jsx)(p.wL, {
                          "data-migration-pending": !0,
                          ...e,
                          disabled: !0,
                          size: d.$n.Sizes.SMALL,
                          pauseAnimation: N,
                          ...U,
                          children: J,
                      }),
              })
        : D
          ? (0, n.jsx)(h.$, {
                variant: "expressive",
                icon: m._,
                disabled: $,
                loading: B,
                fullWidth: U.fullWidth,
                text: C ?? S.intl.string(S.t.gKmQ1G),
                onClick: Y,
            })
          : (0, n.jsx)(p.wL, {
                "data-migration-pending": !0,
                size: d.$n.Sizes.SMALL,
                ...U,
                className: i()(U.className, { [j.yj]: O }),
                submitting: B,
                onClick: Y,
                pauseAnimation: N,
                children: J,
            });
};
