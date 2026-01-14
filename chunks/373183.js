n.d(t, { Z: () => j });
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    i = n(793030),
    o = n(442837),
    c = n(622535),
    u = n(28664),
    d = n(481060),
    f = n(104505),
    g = n(527685),
    b = n(335131),
    p = n(597688),
    m = n(1870),
    h = n(297651),
    C = n(832149),
    E = n(911390),
    v = n(388032),
    S = n(595868),
    x = n(436755),
    O = n(339574),
    _ = n(446991),
    y = n(383898);
let j = l.memo(function (e) {
    let { category: t, rewardSkuId: n } = e,
        { handleCardVisibilityChange: a } = (0, h.E)(n),
        j = l.useRef(null),
        { isHoveringOrFocusing: k } = (0, f.Z)(j),
        { readyToClaim: T, collectibleProductSkuIds: I, collectedSkuIds: L } = (0, E.q)(t, n),
        A = (0, o.e7)([m.Z], () => m.Z.isClaiming === n);
    return (0, r.jsx)(c.$, {
        onChange: a,
        threshold: 0,
        innerRef: j,
        children: (0, r.jsx)("div", {
            ref: j,
            className: s()(S.productCardContainer, x.defaultCursor, { [S.hovered]: k }),
            "aria-label": v.intl.formatToPlainString(v.t.Ez6aHE, { category: t.name }),
            children: (0, r.jsxs)("div", {
                className: S.productCardContentContainer,
                children: [
                    (0, r.jsx)("img", {
                        alt: "Reward Bow",
                        src: y.Z,
                        className: x.rewardImage,
                    }),
                    (0, r.jsx)("div", {
                        className: S.headerContainer,
                        children: (0, r.jsx)(d.IGR, {
                            text: v.intl.string(v.t.rykAJ9),
                            disableColor: !0,
                            className: x.unlockRewardBadge,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: S.footerContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: x.footerInfoContainer,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: x.footerInfo,
                                        children: [
                                            (0, r.jsx)(d.Heading, {
                                                variant: "heading-md/medium",
                                                color: "text-strong",
                                                lineClamp: 1,
                                                className: S.productName,
                                                children: v.intl.string(v.t["0mDmg/"]),
                                            }),
                                            (0, r.jsx)(u.u, {
                                                text: T
                                                    ? v.intl.string(v.t.cKH3tk)
                                                    : v.intl.formatToPlainString(v.t["8aMDPc"], {
                                                          totalCount: I.length,
                                                      }),
                                                align: "right",
                                                caretConfig: {
                                                    position: "bottom",
                                                    align: "end",
                                                },
                                                position: "top",
                                                children: (0, r.jsx)("span", {
                                                    className: x.questionIconContainer,
                                                    children: (0, r.jsx)(i.idN, { size: "xs" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: S.footerInfoShrinkOnHover,
                                        "aria-hidden": !0,
                                        children: (0, r.jsxs)("div", {
                                            className: x.progressContainer,
                                            children: [
                                                (0, r.jsx)(g.ZP, {
                                                    variant: g.yB.BLUE,
                                                    progress: L.length,
                                                    maximum: I.length,
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: s()(x.progressTextContainer, {
                                                        [x.readyToClaimText]: T,
                                                    }),
                                                    children: [
                                                        T
                                                            ? (0, r.jsx)(i.kmB, {
                                                                  size: "xs",
                                                                  color: "currentColor",
                                                              })
                                                            : null,
                                                        (0, r.jsx)(i.xvT, {
                                                            variant: "text-xs/medium",
                                                            color: "currentColor",
                                                            children: v.intl.formatToPlainString(v.t["5TwASM"], {
                                                                collectedCount: L.length,
                                                                totalCount: I.length,
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
                                className: S.footerButtonContainer,
                                children: (0, r.jsx)(i.hE2, {
                                    wrap: !1,
                                    className: S.footerButtonGroup,
                                    fullWidth: !0,
                                    children: (0, r.jsx)(i.zxk, {
                                        variant: "primary",
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                T &&
                                                    (0, b.wW)(t.skuId, n)
                                                        .then(() => {
                                                            let e = p.Z.getProduct(n);
                                                            null != e &&
                                                                (0, C.Z)({
                                                                    product: e,
                                                                    analyticsLocations: [],
                                                                    overrideGraphic: {
                                                                        type: "video",
                                                                        src: _.Z,
                                                                        fallbackImageSrc: O.Z,
                                                                        loop: !0,
                                                                        loopAt: 6,
                                                                        aspectRatio: "16/9",
                                                                    },
                                                                });
                                                        })
                                                        .catch(() => {
                                                            (0, d.ZDy)(() =>
                                                                Promise.resolve((e) =>
                                                                    (0, r.jsx)(i.Modal, {
                                                                        transitionState: e.transitionState,
                                                                        onClose: e.onClose,
                                                                        size: "sm",
                                                                        title: v.intl.string(v.t.SRTlyA),
                                                                        actions: [
                                                                            {
                                                                                text: v.intl.string(v.t.TyCVIq),
                                                                                onClick: e.onClose,
                                                                                variant: "primary",
                                                                            },
                                                                        ],
                                                                        children: (0, r.jsx)("div", {
                                                                            children: v.intl.string(v.t["0YpIF/"]),
                                                                        }),
                                                                    }),
                                                                ),
                                                            );
                                                        });
                                        },
                                        text: v.intl.string(v.t.VnVTNc),
                                        fullWidth: !0,
                                        disabled: !T,
                                        loading: A,
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
