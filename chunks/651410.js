l.d(s, { default: () => j });
var t = l(627968),
    a = l(64700),
    r = l(789645),
    i = l(732955),
    n = l(397927),
    d = l(688810),
    c = l(590180),
    o = l(379177),
    u = l(102666),
    x = l(751304),
    h = l(561769),
    b = l(758836),
    _ = l(985018),
    p = l(477920);
let j = (e) => {
    let { analyticsLocations: s, transitionState: l, onClose: j } = e,
        m = (0, o.eJ)("CollectiblesRentalsModal"),
        g = a.useMemo(() => b.Vk.map((e) => c.A.getProduct(e)).filter((e) => null != e), []),
        v = (0, u.m)(g);
    return (0, t.jsx)(d.f5, {
        value: s,
        children: (0, t.jsx)(i.dWK, {
            size: "xl",
            onClose: j,
            transitionState: l,
            children: (0, t.jsxs)("div", {
                className: p.yl,
                children: [
                    (0, t.jsxs)("div", {
                        className: p.wx,
                        children: [
                            (0, t.jsxs)("div", {
                                className: p.gn,
                                children: [
                                    (0, t.jsx)(n.Heading, {
                                        variant: "heading-xl/bold",
                                        children: _.intl.string(_.t.bfXHLB),
                                    }),
                                    (0, t.jsx)(n.LpS, { text: _.intl.string(_.t.oW0eUd), disableColor: !0 }),
                                ],
                            }),
                            (0, t.jsx)("button", {
                                className: p.b,
                                onClick: j,
                                "aria-label": _.intl.string(_.t.cpT0Cq),
                                children: (0, t.jsx)(r.P, {}),
                            }),
                        ],
                    }),
                    (0, t.jsx)(n.T7Y, {
                        className: p.XG,
                        children: (0, t.jsx)("div", {
                            className: p.Vg,
                            children: (0, t.jsx)(h.v3.Provider, {
                                value: { rentalDuration: m, flattenProductVariants: !0 },
                                children: v.map((e) =>
                                    (0, t.jsx)(
                                        x.A,
                                        { skuId: e?.skuId, prioritizedCurrency: h.Hi.ORBS },
                                        `rental_inner_${e.skuId}`,
                                    ),
                                ),
                            }),
                        }),
                    }),
                ],
            }),
        }),
    });
};
