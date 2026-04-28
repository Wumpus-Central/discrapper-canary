i.d(t, { A: () => R });
var s = i(627968),
    l = i(64700),
    a = i(503698),
    n = i.n(a),
    r = i(17928),
    c = i(502572),
    o = i(990078),
    d = i(862482),
    u = i(194261),
    m = i(821609),
    T = i(930861),
    g = i(104510),
    x = i(820739),
    f = i(688810),
    A = i(531260),
    h = i(267102),
    j = i(178368),
    p = i(166403),
    N = i(473145),
    E = i(987144),
    b = i(652215),
    I = i(788868),
    v = i(985018),
    _ = i(703870);
let R = (e) => {
    let {
            analyticsLocation: t,
            analyticsSourceLocation: i,
            guild: a,
            buttonText: R,
            targetBoostedGuildTier: V,
            onClose: S = () => {},
            closeLayer: P = () => {},
            pauseAnimation: y = !1,
            applicationId: C,
            handleSubscribeModalClose: U,
            withHighlight: L = !1,
            icon: k,
            intent: G,
            useExpressiveButton: M = !1,
            ...O
        } = e,
        { analyticsLocations: D } = (0, f.Ay)(),
        w = (0, h.Us)() === b.BRT.POPOUT,
        [z, Q] = l.useState(!1),
        { fractionalState: F } = (0, A.A)(),
        B = (0, r.bG)([j.A], () => j.A.hasFetched);
    l.useEffect(() => {
        B || (0, x.CD)();
    }, [B]);
    let J = (0, N.D$)(j.A.boostSlots),
        K = null != V ? Math.max((0, N.Os)(a, V), 1) : 1,
        Y = (0, N.Nc)({ fractionalState: F }),
        $ = async () => {
            Q(!0),
                await (0, E.g)({
                    analyticsLocations: D,
                    analyticsLocation: t,
                    analyticsSourceLocation: i,
                    guild: a,
                    numberOfBoostsToAdd: K,
                    onClose: S,
                    closeLayer: P,
                    inPopout: w,
                    applicationId: C,
                    handleSubscribeModalClose: U,
                    intent: G,
                }),
                Q(!1);
        },
        Z = p.A.getPremiumTypeSubscription(),
        W = (0, s.jsxs)("div", { className: _.x6, children: [k, R ?? v.intl.string(v.t.gKmQ1G)] }),
        H = !1;
    return ((H = null !== Z && !(J.length > 0) && Z?.isPausedOrPausePending && F === I.xc.NONE) &&
        ((W = (0, s.jsxs)("div", {
            className: _.x6,
            children: [(0, s.jsx)(u.X, { size: "xs", className: _.iA }), " ", W],
        })),
        (O.disabled = !0)),
    null != Y)
        ? M
            ? (0, s.jsx)(o.m, {
                  text: Y,
                  children: (0, s.jsx)(m.$, {
                      variant: "expressive",
                      icon: u.X,
                      iconPosition: "start",
                      disabled: !0,
                      fullWidth: O.fullWidth,
                      text: R ?? v.intl.string(v.t.gKmQ1G),
                  }),
              })
            : (0, s.jsx)(c.A, {
                  text: Y,
                  "aria-label": !1,
                  children: (e) =>
                      (0, s.jsx)(T.wL, {
                          "data-migration-pending": !0,
                          ...e,
                          disabled: !0,
                          size: d.$n.Sizes.SMALL,
                          pauseAnimation: y,
                          ...O,
                          children: W,
                      }),
              })
        : M
          ? (0, s.jsx)(m.$, {
                variant: "expressive",
                icon: g._,
                disabled: H,
                loading: z,
                fullWidth: O.fullWidth,
                text: R ?? v.intl.string(v.t.gKmQ1G),
                onClick: $,
            })
          : (0, s.jsx)(T.wL, {
                "data-migration-pending": !0,
                size: d.$n.Sizes.SMALL,
                ...O,
                className: n()(O.className, { [_.yj]: L }),
                submitting: z,
                onClick: $,
                pauseAnimation: y,
                children: W,
            });
};
