n.d(t, { Z: () => k });
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(793030),
    i = n(442837),
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
    _ = n(436755),
    x = n(339574),
    O = n(446991),
    y = n(383898);
let k = l.memo(function (e) {
    let { category: t, rewardSkuId: n } = e,
        { handleCardVisibilityChange: a } = (0, h.E)(n),
        k = l.useRef(null),
        { isHoveringOrFocusing: T } = (0, f.Z)(k),
        { readyToClaim: j, collectibleProductSkuIds: L, collectedSkuIds: I } = (0, E.q)(t, n),
        A = (0, i.e7)([m.Z], () => m.Z.isClaiming === n);
    return (0, r.jsx)(c.$, {
        onChange: a,
        threshold: 0,
        innerRef: k,
        children: (0, r.jsx)("div", {
            ref: k,
            className: s()(S.productCardContainer, _.defaultCursor, { [S.hovered]: T }),
            "aria-label": v.intl.formatToPlainString(v.t.Ez6aHE, { category: t.name }),
            children: (0, r.jsxs)("div", {
                className: S.productCardContentContainer,
                children: [
                    (0, r.jsx)("img", {
                        alt: "Reward Bow",
                        src: y.Z,
                        className: _.rewardImage,
                    }),
                    (0, r.jsx)("div", {
                        className: S.headerContainer,
                        children: (0, r.jsx)(d.IGR, {
                            text: v.intl.string(v.t.rykAJ9),
                            disableColor: !0,
                            className: _.unlockRewardBadge,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: S.footerContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: _.footerInfoContainer,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: _.footerInfo,
                                        children: [
                                            (0, r.jsx)(d.Heading, {
                                                variant: "heading-md/medium",
                                                color: "text-strong",
                                                lineClamp: 1,
                                                className: S.productName,
                                                children: v.intl.string(v.t["0mDmg/"]),
                                            }),
                                            (0, r.jsx)(u.u, {
                                                text: j
                                                    ? v.intl.string(v.t.cKH3tk)
                                                    : v.intl.formatToPlainString(v.t["8aMDPc"], {
                                                          totalCount: L.length,
                                                      }),
                                                align: "right",
                                                caretConfig: {
                                                    position: "bottom",
                                                    align: "end",
                                                },
                                                position: "top",
                                                children: (0, r.jsx)("span", {
                                                    className: _.questionIconContainer,
                                                    children: (0, r.jsx)(o.idN, { size: "xs" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: S.footerInfoShrinkOnHover,
                                        "aria-hidden": !0,
                                        children: (0, r.jsxs)("div", {
                                            className: _.progressContainer,
                                            children: [
                                                (0, r.jsx)(g.Z, {
                                                    variant: g.y.BLUE,
                                                    progress: I.length,
                                                    maximum: L.length,
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: s()(_.progressTextContainer, {
                                                        [_.readyToClaimText]: j,
                                                    }),
                                                    children: [
                                                        j
                                                            ? (0, r.jsx)(o.kmB, {
                                                                  size: "xs",
                                                                  color: "currentColor",
                                                              })
                                                            : null,
                                                        (0, r.jsx)(o.xvT, {
                                                            variant: "text-xs/medium",
                                                            color: "currentColor",
                                                            children: v.intl.formatToPlainString(v.t["5TwASM"], {
                                                                collectedCount: I.length,
                                                                totalCount: L.length,
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
                                children: (0, r.jsx)(o.hE2, {
                                    wrap: !1,
                                    className: S.footerButtonGroup,
                                    fullWidth: !0,
                                    children: (0, r.jsx)(o.zxk, {
                                        variant: "primary",
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                j &&
                                                    (0, b.wW)(t.skuId, n)
                                                        .then(() => {
                                                            let e = p.Z.getProduct(n);
                                                            null != e &&
                                                                (0, C.Z)({
                                                                    product: e,
                                                                    analyticsLocations: [],
                                                                    overrideGraphic: {
                                                                        type: "video",
                                                                        src: O.Z,
                                                                        fallbackImageSrc: x.Z,
                                                                        loop: !0,
                                                                        loopAt: 6,
                                                                        aspectRatio: "16/9",
                                                                    },
                                                                });
                                                        })
                                                        .catch(() => {
                                                            (0, d.ZDy)(() =>
                                                                Promise.resolve((e) =>
                                                                    (0, r.jsx)(o.Modal, {
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
                                        disabled: !j,
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
