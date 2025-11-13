n.d(t, { Z: () => _ });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(793030),
    s = n(442837),
    c = (n(481060), n(104505)),
    u = n(597688),
    d = n(1870),
    p = n(832149),
    g = n(388032),
    f = n(290181),
    h = n(250967),
    C = n(182975),
    m = n(655603);
let _ = l.memo(function (e) {
    var t;
    let { category: n, rewardSkuId: i } = e,
        _ = l.useRef(null),
        { isHoveringOrFocusing: b } = (0, c.Z)(_),
        v = l.useMemo(() => n.products.filter((e) => e.skuId !== i).map((e) => e.skuId), [n.products, i]),
        x = (0, s.e7)([d.Z], () => d.Z.getPurchases(v)),
        E = (e) => {
            e.stopPropagation();
            {
                let e = u.Z.getProduct(i);
                null != e &&
                    (0, p.Z)({
                        product: e,
                        analyticsLocations: [],
                        overrideGraphic: {
                            type: "video",
                            src: C.Z,
                            fallbackImageSrc: h.Z,
                            loop: !1,
                            aspectRatio: "16/9",
                        },
                    });
            }
        };
    return (0, r.jsx)(o.kL8, {
        ref: _,
        className: a()(f.productCardContainer, { [f.hovered]: b }),
        "aria-label": g.intl.formatToPlainString(g.t.Ez6aHE, { category: n.name }),
        onClick: (e) => {
            E(e);
        },
        children: (0, r.jsxs)("div", {
            className: f.productCardContentContainer,
            children: [
                (0, r.jsx)("div", {
                    className: f.productPreviewContainer,
                    children: (0, r.jsx)("img", {
                        alt: "Reward Bow",
                        src: m.Z,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: f.footerContainer,
                    children: (0, r.jsxs)("div", {
                        className: f.footerContent,
                        children: [
                            (0, r.jsxs)("div", {
                                className: f.footerInfoContainer,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: f.footerInfoLeft,
                                        children: (0, r.jsx)(o.xvT, {
                                            variant: "text-lg/bold",
                                            color: "text-primary",
                                            children: g.intl.string(g.t["0mDmg/"]),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: f.progressContainer,
                                        children: (0, r.jsx)(o.xvT, {
                                            variant: "text-sm/normal",
                                            color: "text-secondary",
                                            children: g.intl.formatToPlainString(g.t["5TwASM"], {
                                                collectedCount: null != (t = null == x ? void 0 : x.length) ? t : 0,
                                                totalCount: v.length,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: f.footerButtonContainer,
                                children: (0, r.jsx)(o.hE2, {
                                    wrap: !1,
                                    fullWidth: !0,
                                    children: (0, r.jsx)(o.zxk, {
                                        variant: "primary",
                                        onClick: E,
                                        text: g.intl.string(g.t.VnVTNc),
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
