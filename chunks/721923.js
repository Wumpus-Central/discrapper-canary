"use strict";
n.d(t, { A: () => O });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(502572),
    u = n(990078),
    c = n(862482),
    d = n(194261),
    _ = n(821609),
    f = n(930861),
    p = n(104510),
    h = n(923408),
    E = n(688810),
    m = n(531260),
    g = n(267102),
    A = n(178368),
    I = n(166403),
    T = n(473145),
    S = n(987144),
    y = n(652215),
    N = n(788868),
    v = n(985018),
    C = n(703870);
let O = (e) => {
    let {
            analyticsLocation: t,
            analyticsSourceLocation: n,
            guild: s,
            buttonText: O,
            targetBoostedGuildTier: R,
            onClose: b = () => {},
            closeLayer: D = () => {},
            pauseAnimation: L = !1,
            applicationId: w,
            handleSubscribeModalClose: M,
            withHighlight: P = !1,
            icon: x,
            intent: k,
            useExpressiveButton: U = !1,
            ...G
        } = e,
        { analyticsLocations: F } = (0, E.Ay)(),
        V = (0, g.Us)() === y.BRT.POPOUT,
        [B, H] = i.useState(!1),
        { fractionalState: j } = (0, m.A)(),
        Y = (0, o.bG)([A.A], () => A.A.hasFetched);
    i.useEffect(() => {
        Y || (0, h.CD)();
    }, [Y]);
    let W = (0, T.D$)(A.A.boostSlots),
        K = null != R ? Math.max((0, T.Os)(s, R), 1) : 1,
        $ = (0, T.Nc)({ fractionalState: j }),
        z = async () => {
            H(!0),
                await (0, S.g)({
                    analyticsLocations: F,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: s,
                    numberOfBoostsToAdd: K,
                    onClose: b,
                    closeLayer: D,
                    inPopout: V,
                    applicationId: w,
                    handleSubscribeModalClose: M,
                    intent: k,
                }),
                H(!1);
        },
        q = I.A.getPremiumTypeSubscription(),
        X = (0, r.jsxs)("div", { className: C.x6, children: [x, O ?? v.intl.string(v.t.gKmQ1G)] }),
        Q = !1;
    return ((Q = null !== q && !(W.length > 0) && q?.isPausedOrPausePending && j === N.xc.NONE) &&
        ((X = (0, r.jsxs)("div", {
            className: C.x6,
            children: [(0, r.jsx)(d.X, { size: "xs", className: C.iA }), " ", X],
        })),
        (G.disabled = !0)),
    null != $)
        ? U
            ? (0, r.jsx)(u.m, {
                  text: $,
                  children: (0, r.jsx)(_.$, {
                      variant: "expressive",
                      icon: d.X,
                      iconPosition: "start",
                      disabled: !0,
                      fullWidth: G.fullWidth,
                      text: O ?? v.intl.string(v.t.gKmQ1G),
                  }),
              })
            : (0, r.jsx)(l.A, {
                  text: $,
                  "aria-label": !1,
                  children: (e) =>
                      (0, r.jsx)(f.wL, {
                          "data-migration-pending": !0,
                          ...e,
                          disabled: !0,
                          size: c.$n.Sizes.SMALL,
                          pauseAnimation: L,
                          ...G,
                          children: X,
                      }),
              })
        : U
          ? (0, r.jsx)(_.$, {
                variant: "expressive",
                icon: p._,
                disabled: Q,
                loading: B,
                fullWidth: G.fullWidth,
                text: O ?? v.intl.string(v.t.gKmQ1G),
                onClick: z,
            })
          : (0, r.jsx)(f.wL, {
                "data-migration-pending": !0,
                size: c.$n.Sizes.SMALL,
                ...G,
                className: a()(G.className, { [C.yj]: P }),
                submitting: B,
                onClick: z,
                pauseAnimation: L,
                children: X,
            });
};
