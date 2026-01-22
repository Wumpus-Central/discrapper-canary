l.d(s, { default: () => f });
var t = l(627968),
    a = l(64700),
    i = l(789645),
    d = l(732955),
    r = l(397927),
    n = l(688810),
    c = l(590180),
    u = l(379177),
    o = l(102666),
    x = l(751304),
    h = l(561769),
    b = l(758836),
    p = l(985018),
    j = l(477920);
let f = (e) => {
    let { analyticsLocations: s, transitionState: l, onClose: f } = e,
        m = (0, u.eJ)("CollectiblesRentalsModal"),
        v = a.useMemo(() => b.Vk.map((e) => c.A.getProduct(e)).filter((e) => null != e), []),
        g = (0, o.m)(v);
    return (0, t.jsx)(n.f5, {
        value: s,
        children: (0, t.jsx)(d.dWK, {
            size: "xl",
            onClose: f,
            transitionState: l,
            children: (0, t.jsxs)("div", {
                className: j.yl,
                children: [
                    (0, t.jsxs)("div", {
                        className: j.wx,
                        children: [
                            (0, t.jsxs)("div", {
                                className: j.gn,
                                children: [
                                    (0, t.jsx)(r.Heading, {
                                        variant: "heading-xl/bold",
                                        children: p.intl.string(p.t.bfXHLB),
                                    }),
                                    (0, t.jsx)(r.LpS, {
                                        text: p.intl.string(p.t.oW0eUd),
                                        disableColor: !0,
                                    }),
                                ],
                            }),
                            (0, t.jsx)("button", {
                                className: j.b,
                                onClick: f,
                                "aria-label": p.intl.string(p.t.cpT0Cq),
                                children: (0, t.jsx)(i.P, {}),
                            }),
                        ],
                    }),
                    (0, t.jsx)(r.T7Y, {
                        className: j.XG,
                        children: (0, t.jsx)("div", {
                            className: j.Vg,
                            children: (0, t.jsx)(h.v3.Provider, {
                                value: {
                                    rentalDuration: m,
                                    flattenProductVariants: !0,
                                },
                                children: g.map((e) =>
                                    (0, t.jsx)(
                                        x.A,
                                        {
                                            skuId: null == e ? void 0 : e.skuId,
                                            prioritizedCurrency: h.Hi.ORBS,
                                        },
                                        "rental_inner_".concat(e.skuId),
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
