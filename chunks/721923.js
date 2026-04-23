n.d(t, { A: () => L });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    o = n.n(i),
    l = n(17928),
    s = n(502572),
    d = n(990078),
    u = n(862482),
    c = n(194261),
    _ = n(821609),
    p = n(930861),
    C = n(104510),
    h = n(820739),
    E = n(688810),
    m = n(531260),
    A = n(267102),
    I = n(178368),
    T = n(166403),
    y = n(473145),
    g = n(987144),
    S = n(652215),
    N = n(788868),
    f = n(985018),
    R = n(703870);
let L = (e) => {
    let {
            analyticsLocation: t,
            analyticsSourceLocation: n,
            guild: i,
            buttonText: L,
            targetBoostedGuildTier: O,
            onClose: P = () => {},
            closeLayer: b = () => {},
            pauseAnimation: M = !1,
            applicationId: x,
            handleSubscribeModalClose: v,
            withHighlight: U = !1,
            icon: D,
            intent: G,
            useExpressiveButton: j = !1,
            ...w
        } = e,
        { analyticsLocations: B } = (0, E.Ay)(),
        F = (0, A.Us)() === S.BRT.POPOUT,
        [k, V] = a.useState(!1),
        { fractionalState: H } = (0, m.A)(),
        K = (0, l.bG)([I.A], () => I.A.hasFetched);
    a.useEffect(() => {
        K || (0, h.CD)();
    }, [K]);
    let W = (0, y.D$)(I.A.boostSlots),
        Y = null != O ? Math.max((0, y.Os)(i, O), 1) : 1,
        z = (0, y.Nc)({ fractionalState: H }),
        J = async () => {
            V(!0),
                await (0, g.g)({
                    analyticsLocations: B,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: i,
                    numberOfBoostsToAdd: Y,
                    onClose: P,
                    closeLayer: b,
                    inPopout: F,
                    applicationId: x,
                    handleSubscribeModalClose: v,
                    intent: G,
                }),
                V(!1);
        },
        Q = T.A.getPremiumTypeSubscription(),
        X = (0, r.jsxs)("div", { className: R.x6, children: [D, L ?? f.intl.string(f.t.gKmQ1G)] }),
        Z = !1;
    return ((Z = null !== Q && !(W.length > 0) && Q?.isPausedOrPausePending && H === N.xc.NONE) &&
        ((X = (0, r.jsxs)("div", {
            className: R.x6,
            children: [(0, r.jsx)(c.X, { size: "xs", className: R.iA }), " ", X],
        })),
        (w.disabled = !0)),
    null != z)
        ? j
            ? (0, r.jsx)(d.m, {
                  text: z,
                  children: (0, r.jsx)(_.$, {
                      variant: "expressive",
                      icon: c.X,
                      iconPosition: "start",
                      disabled: !0,
                      fullWidth: w.fullWidth,
                      text: L ?? f.intl.string(f.t.gKmQ1G),
                  }),
              })
            : (0, r.jsx)(s.A, {
                  text: z,
                  "aria-label": !1,
                  children: (e) =>
                      (0, r.jsx)(p.wL, {
                          "data-migration-pending": !0,
                          ...e,
                          disabled: !0,
                          size: u.$n.Sizes.SMALL,
                          pauseAnimation: M,
                          ...w,
                          children: X,
                      }),
              })
        : j
          ? (0, r.jsx)(_.$, {
                variant: "expressive",
                icon: C._,
                disabled: Z,
                loading: k,
                fullWidth: w.fullWidth,
                text: L ?? f.intl.string(f.t.gKmQ1G),
                onClick: J,
            })
          : (0, r.jsx)(p.wL, {
                "data-migration-pending": !0,
                size: u.$n.Sizes.SMALL,
                ...w,
                className: o()(w.className, { [R.yj]: U }),
                submitting: k,
                onClick: J,
                pauseAnimation: M,
                children: X,
            });
};
