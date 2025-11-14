n.d(t, { Z: () => v });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(793030),
    s = n(442837),
    c = n(28664),
    u = n(481060),
    d = n(104505),
    g = n(597688),
    p = n(1870),
    f = n(832149),
    h = n(388032),
    C = n(290181),
    m = n(250967),
    _ = n(182975),
    b = n(655603);
let v = l.memo(function (e) {
    let { category: t, rewardSkuId: n } = e,
        i = l.useRef(null),
        { isHoveringOrFocusing: v } = (0, d.Z)(i),
        x = l.useMemo(() => t.products.filter((e) => e.skuId !== n).map((e) => e.skuId), [t.products, n]),
        E = (0, s.e7)([p.Z], () => p.Z.getPurchases(x)),
        S = (e) => {
            e.stopPropagation();
            {
                let e = g.Z.getProduct(n);
                null != e &&
                    (0, f.Z)({
                        product: e,
                        analyticsLocations: [],
                        overrideGraphic: {
                            type: "video",
                            src: _.Z,
                            fallbackImageSrc: m.Z,
                            loop: !1,
                            aspectRatio: "16/9",
                        },
                    });
            }
        },
        O = l.useMemo(() => E.length === x.length, [E, x]);
    return (0, r.jsx)(o.kL8, {
        ref: i,
        className: a()(C.productCardContainer, { [C.hovered]: v }),
        "aria-label": h.intl.formatToPlainString(h.t.Ez6aHE, { category: t.name }),
        onClick: (e) => {
            S(e);
        },
        children: (0, r.jsxs)("div", {
            className: C.productCardContentContainer,
            children: [
                (0, r.jsx)("div", {
                    className: C.productPreviewContainer,
                    children: (0, r.jsx)("img", {
                        alt: "Reward Bow",
                        src: b.Z,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: C.headerContainer,
                    children: (0, r.jsx)(u.IGR, {
                        text: h.intl.string(h.t.rykAJ9),
                        disableColor: !0,
                        className: C.unlockRewardBadge,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: C.footerContainer,
                    children: (0, r.jsxs)("div", {
                        className: C.footerContent,
                        children: [
                            (0, r.jsxs)("div", {
                                className: C.footerInfoContainer,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: C.footerInfo,
                                        children: [
                                            (0, r.jsx)(o.xvT, {
                                                variant: "text-lg/bold",
                                                color: "text-primary",
                                                children: h.intl.string(h.t["0mDmg/"]),
                                            }),
                                            (0, r.jsx)(c.u, {
                                                text: O
                                                    ? h.intl.string(h.t.cKH3tk)
                                                    : h.intl.formatToPlainString(h.t["8aMDPc"], {
                                                          totalCount: x.length,
                                                      }),
                                                align: "right",
                                                caretConfig: {
                                                    position: "bottom",
                                                    align: "end",
                                                },
                                                position: "top",
                                                children: (0, r.jsx)("span", {
                                                    className: C.questionIconContainer,
                                                    children: (0, r.jsx)(o.idN, { size: "xs" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: C.progressContainer,
                                        children: (0, r.jsx)(o.xvT, {
                                            variant: "text-sm/normal",
                                            color: "text-secondary",
                                            children: h.intl.formatToPlainString(h.t["5TwASM"], {
                                                collectedCount: E.length,
                                                totalCount: x.length,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: C.footerButtonContainer,
                                children: (0, r.jsx)(o.hE2, {
                                    wrap: !1,
                                    fullWidth: !0,
                                    children: (0, r.jsx)(o.zxk, {
                                        variant: "primary",
                                        onClick: S,
                                        text: h.intl.string(h.t.VnVTNc),
                                        fullWidth: !0,
                                        disabled: !O,
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
