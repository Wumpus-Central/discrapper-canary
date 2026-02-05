"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(502572),
    u = n(435371),
    c = n(421380),
    d = n(397927),
    _ = n(923408),
    f = n(688810),
    p = n(531260),
    h = n(267102),
    m = n(178368),
    g = n(166403),
    E = n(473145),
    A = n(987144),
    I = n(652215),
    T = n(788868),
    y = n(985018),
    S = n(737211);
let v = (e) => {
    let {
            analyticsLocation: t,
            analyticsSourceLocation: n,
            guild: a,
            buttonText: v,
            targetBoostedGuildTier: C,
            onClose: b = () => {},
            closeLayer: N = () => {},
            pauseAnimation: R = !1,
            applicationId: O,
            handleSubscribeModalClose: D,
            withHighlight: L = !1,
            icon: w,
            intent: x,
            useExpressiveButton: P = !1,
            ...M
        } = e,
        { analyticsLocations: k } = (0, f.Ay)(),
        U = (0, h.Us)() === I.BRT.POPOUT,
        [G, V] = i.useState(!1),
        { fractionalState: F } = (0, p.A)(),
        B = (0, o.bG)([m.A], () => m.A.hasFetched);
    i.useEffect(() => {
        B || (0, _.CD)();
    }, [B]);
    let j = (0, E.D$)(m.A.boostSlots),
        H = null != C ? Math.max((0, E.Os)(a, C), 1) : 1,
        Y = (0, E.Nc)({ fractionalState: F }),
        W = async () => {
            V(!0),
                await (0, A.g)({
                    analyticsLocations: k,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: a,
                    numberOfBoostsToAdd: H,
                    onClose: b,
                    closeLayer: N,
                    inPopout: U,
                    applicationId: O,
                    handleSubscribeModalClose: D,
                    intent: x,
                }),
                V(!1);
        },
        K = g.A.getPremiumTypeSubscription(),
        z = (0, r.jsxs)("div", { className: S.x6, children: [w, v ?? y.intl.string(y.t.gKmQ1G)] }),
        $ = !1;
    return (($ = null !== K && !(j.length > 0) && K?.isPausedOrPausePending && F === T.xc.NONE) &&
        ((z = (0, r.jsxs)("div", {
            className: S.x6,
            children: [(0, r.jsx)(d.XAi, { size: "xs", className: S.iA }), " ", z],
        })),
        (M.disabled = !0)),
    null != Y)
        ? P
            ? (0, r.jsx)(u.m_, {
                  text: Y,
                  children: (0, r.jsx)(d.Button, {
                      variant: "expressive",
                      icon: d.XAi,
                      iconPosition: "start",
                      disabled: !0,
                      text: v ?? y.intl.string(y.t.gKmQ1G),
                  }),
              })
            : (0, r.jsx)(l.A, {
                  text: Y,
                  "aria-label": !1,
                  children: (e) =>
                      (0, r.jsx)(d.wLn, {
                          "data-migration-pending": !0,
                          ...e,
                          disabled: !0,
                          size: c.$n.Sizes.SMALL,
                          pauseAnimation: R,
                          ...M,
                          children: z,
                      }),
              })
        : P
          ? (0, r.jsx)(d.Button, {
                variant: "expressive",
                disabled: $,
                loading: G,
                text: v ?? y.intl.string(y.t.gKmQ1G),
                onClick: W,
            })
          : (0, r.jsx)(d.wLn, {
                "data-migration-pending": !0,
                size: c.$n.Sizes.SMALL,
                ...M,
                className: s()(M.className, { [S.yj]: L }),
                submitting: G,
                onClick: W,
                pauseAnimation: R,
                children: z,
            });
};
