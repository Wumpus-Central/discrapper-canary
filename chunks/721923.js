"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(166403),
    g = n(473145),
    A = n(987144),
    I = n(652215),
    T = n(788868),
    S = n(985018),
    y = n(660349);
let v = (e) => {
    let {
            analyticsLocation: t,
            analyticsSourceLocation: n,
            guild: s,
            buttonText: v,
            targetBoostedGuildTier: N,
            onClose: C = () => {},
            closeLayer: b = () => {},
            pauseAnimation: R = !1,
            applicationId: O,
            handleSubscribeModalClose: D,
            withHighlight: L = !1,
            icon: w,
            intent: x,
            useExpressiveButton: M = !1,
            ...P
        } = e,
        { analyticsLocations: k } = (0, f.Ay)(),
        U = (0, h.Us)() === I.BRT.POPOUT,
        [G, F] = i.useState(!1),
        { fractionalState: V } = (0, p.A)(),
        B = (0, o.bG)([m.A], () => m.A.hasFetched);
    i.useEffect(() => {
        B || (0, _.CD)();
    }, [B]);
    let H = (0, g.D$)(m.A.boostSlots),
        j = null != N ? Math.max((0, g.Os)(s, N), 1) : 1,
        Y = (0, g.Nc)({ fractionalState: V }),
        W = async () => {
            F(!0),
                await (0, A.g)({
                    analyticsLocations: k,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: s,
                    numberOfBoostsToAdd: j,
                    onClose: C,
                    closeLayer: b,
                    inPopout: U,
                    applicationId: O,
                    handleSubscribeModalClose: D,
                    intent: x,
                }),
                F(!1);
        },
        K = E.A.getPremiumTypeSubscription(),
        z = (0, r.jsxs)("div", { className: y.x6, children: [w, v ?? S.intl.string(S.t.gKmQ1G)] }),
        $ = !1;
    return (($ = null !== K && !(H.length > 0) && K?.isPausedOrPausePending && V === T.xc.NONE) &&
        ((z = (0, r.jsxs)("div", {
            className: y.x6,
            children: [(0, r.jsx)(d.XAi, { size: "xs", className: y.iA }), " ", z],
        })),
        (P.disabled = !0)),
    null != Y)
        ? M
            ? (0, r.jsx)(u.m_, {
                  text: Y,
                  children: (0, r.jsx)(d.Button, {
                      variant: "expressive",
                      icon: d.XAi,
                      iconPosition: "start",
                      disabled: !0,
                      fullWidth: P.fullWidth,
                      text: v ?? S.intl.string(S.t.gKmQ1G),
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
                          ...P,
                          children: z,
                      }),
              })
        : M
          ? (0, r.jsx)(d.Button, {
                variant: "expressive",
                icon: d._Jp,
                disabled: $,
                loading: G,
                fullWidth: P.fullWidth,
                text: v ?? S.intl.string(S.t.gKmQ1G),
                onClick: W,
            })
          : (0, r.jsx)(d.wLn, {
                "data-migration-pending": !0,
                size: c.$n.Sizes.SMALL,
                ...P,
                className: a()(P.className, { [y.yj]: L }),
                submitting: G,
                onClick: W,
                pauseAnimation: R,
                children: z,
            });
};
