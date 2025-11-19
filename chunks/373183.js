n.d(t, { Z: () => S });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(793030),
    o = n(442837),
    c = n(28664),
    u = n(481060),
    d = n(104505),
    f = n(527685),
    g = n(335131),
    p = n(597688),
    m = n(1870),
    h = n(832149),
    C = n(911390),
    _ = n(388032),
    b = n(213301),
    v = n(290181),
    x = n(250967),
    E = n(182975),
    O = n(655603);
let S = l.memo(function (e) {
    let { category: t, rewardSkuId: n } = e,
        i = l.useRef(null),
        { isHoveringOrFocusing: S } = (0, d.Z)(i),
        { readyToClaim: y, collectibleProductSkuIds: j, collectedSkuIds: k } = (0, C.q)(t, n),
        I = (0, o.e7)([m.Z], () => m.Z.isClaiming === n);
    return (0, r.jsx)("div", {
        ref: i,
        className: a()(b.productCardContainer, v.defaultCursor, { [b.hovered]: S }),
        "aria-label": _.intl.formatToPlainString(_.t.Ez6aHE, { category: t.name }),
        children: (0, r.jsxs)("div", {
            className: b.productCardContentContainer,
            children: [
                (0, r.jsx)("img", {
                    alt: "Reward Bow",
                    src: O.Z,
                    className: v.rewardImage,
                }),
                (0, r.jsx)("div", {
                    className: b.headerContainer,
                    children: (0, r.jsx)(u.IGR, {
                        text: _.intl.string(_.t.rykAJ9),
                        disableColor: !0,
                        className: v.unlockRewardBadge,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: b.footerContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: v.footerInfoContainer,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: v.footerInfo,
                                    children: [
                                        (0, r.jsx)(u.Heading, {
                                            variant: "heading-md/medium",
                                            color: "text-primary",
                                            lineClamp: 1,
                                            className: b.productName,
                                            children: _.intl.string(_.t["0mDmg/"]),
                                        }),
                                        (0, r.jsx)(c.u, {
                                            text: y
                                                ? _.intl.string(_.t.cKH3tk)
                                                : _.intl.formatToPlainString(_.t["8aMDPc"], { totalCount: j.length }),
                                            align: "right",
                                            caretConfig: {
                                                position: "bottom",
                                                align: "end",
                                            },
                                            position: "top",
                                            children: (0, r.jsx)("span", {
                                                className: v.questionIconContainer,
                                                children: (0, r.jsx)(s.idN, { size: "xs" }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: b.footerInfoShrinkOnHover,
                                    children: (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)(f.Z, {
                                                variant: f.y.BLUE,
                                                progress: k.length,
                                                maximum: j.length,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: a()(v.progressTextContainer, { [v.readyToClaimText]: y }),
                                                children: [
                                                    y
                                                        ? (0, r.jsx)(s.kmB, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                          })
                                                        : null,
                                                    (0, r.jsx)(s.xvT, {
                                                        variant: "text-xs/medium",
                                                        color: "currentColor",
                                                        children: _.intl.formatToPlainString(_.t["5TwASM"], {
                                                            collectedCount: k.length,
                                                            totalCount: j.length,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: b.footerButtonContainer,
                            children: (0, r.jsx)(s.hE2, {
                                wrap: !1,
                                className: b.footerButtonGroup,
                                fullWidth: !0,
                                children: (0, r.jsx)(s.zxk, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(),
                                            y &&
                                                (0, g.wW)(t.skuId, n)
                                                    .then(() => {
                                                        let e = p.Z.getProduct(n);
                                                        null != e &&
                                                            (0, h.Z)({
                                                                product: e,
                                                                analyticsLocations: [],
                                                                overrideGraphic: {
                                                                    type: "video",
                                                                    src: E.Z,
                                                                    fallbackImageSrc: x.Z,
                                                                    loop: !1,
                                                                    aspectRatio: "16/9",
                                                                },
                                                            });
                                                    })
                                                    .catch(() => {
                                                        (0, u.ZDy)(() =>
                                                            Promise.resolve((e) =>
                                                                (0, r.jsx)(s.Modal, {
                                                                    transitionState: e.transitionState,
                                                                    onClose: e.onClose,
                                                                    size: "sm",
                                                                    title: _.intl.string(_.t.SRTlyA),
                                                                    actions: [
                                                                        {
                                                                            text: _.intl.string(_.t.TyCVIq),
                                                                            onClick: e.onClose,
                                                                            variant: "primary",
                                                                        },
                                                                    ],
                                                                    children: (0, r.jsx)("div", {
                                                                        children: _.intl.string(_.t["0YpIF/"]),
                                                                    }),
                                                                }),
                                                            ),
                                                        );
                                                    });
                                    },
                                    text: _.intl.string(_.t.VnVTNc),
                                    fullWidth: !0,
                                    disabled: !y,
                                    loading: I,
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
});
