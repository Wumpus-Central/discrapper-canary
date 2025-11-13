n.d(t, { Z: () => f });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(793030),
    s = n(442837),
    c = n(104505),
    u = n(1870),
    d = n(388032),
    g = n(290181),
    p = n(655603);
let f = l.memo(function (e) {
    let { category: t, rewardSkuId: n } = e,
        i = l.useRef(null),
        { isHoveringOrFocusing: f } = (0, c.Z)(i),
        h = l.useMemo(() => t.products.filter((e) => e.skuId !== n).map((e) => e.skuId), [t.products, n]),
        C = (0, s.e7)([u.Z], () => u.Z.getPurchases(h));
    return (0, r.jsx)(o.kL8, {
        ref: i,
        className: a()(g.productCardContainer, { [g.hovered]: f }),
        "aria-label": d.intl.formatToPlainString(d.t.Ez6aHE, { category: t.name }),
        onClick: () => {},
        children: (0, r.jsxs)("div", {
            className: g.productCardContentContainer,
            children: [
                (0, r.jsx)("div", {
                    className: g.productPreviewContainer,
                    children: (0, r.jsx)("img", {
                        alt: "Reward Bow",
                        src: p.Z,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: g.footerContainer,
                    children: (0, r.jsxs)("div", {
                        className: g.footerContent,
                        children: [
                            (0, r.jsxs)("div", {
                                className: g.footerInfoContainer,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: g.footerInfoLeft,
                                        children: (0, r.jsx)(o.xvT, {
                                            variant: "text-lg/bold",
                                            color: "text-primary",
                                            children: d.intl.string(d.t["0mDmg/"]),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: g.progressContainer,
                                        children: (0, r.jsx)(o.xvT, {
                                            variant: "text-sm/normal",
                                            color: "text-secondary",
                                            children: d.intl.formatToPlainString(d.t["5TwASM"], {
                                                collectedCount: null == C ? void 0 : C.length,
                                                totalCount: h.length,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: g.footerButtonContainer,
                                children: (0, r.jsx)(o.hE2, {
                                    wrap: !1,
                                    fullWidth: !0,
                                    children: (0, r.jsx)(o.zxk, {
                                        variant: "primary",
                                        onClick: (e) => {
                                            e.stopPropagation();
                                        },
                                        text: d.intl.string(d.t.VnVTNc),
                                        fullWidth: !0,
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
});
