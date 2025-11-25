n.d(t, { Z: () => j });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(793030),
    s = n(442837),
    c = n(622535),
    u = n(28664),
    d = n(481060),
    f = n(104505),
    g = n(527685),
    p = n(335131),
    m = n(597688),
    h = n(1870),
    C = n(297651),
    _ = n(832149),
    b = n(911390),
    v = n(388032),
    x = n(213301),
    E = n(290181),
    O = n(250967),
    S = n(182975),
    y = n(655603);
let j = l.memo(function (e) {
    let { category: t, rewardSkuId: n } = e,
        { handleCardVisibilityChange: i } = (0, C.E)(n),
        j = l.useRef(null),
        { isHoveringOrFocusing: k } = (0, f.Z)(j),
        { readyToClaim: I, collectibleProductSkuIds: T, collectedSkuIds: L } = (0, b.q)(t, n),
        P = (0, s.e7)([h.Z], () => h.Z.isClaiming === n);
    return (0, r.jsx)(c.$, {
        onChange: i,
        threshold: 0,
        innerRef: j,
        children: (0, r.jsx)("div", {
            ref: j,
            className: a()(x.productCardContainer, E.defaultCursor, { [x.hovered]: k }),
            "aria-label": v.intl.formatToPlainString(v.t.Ez6aHE, { category: t.name }),
            children: (0, r.jsxs)("div", {
                className: x.productCardContentContainer,
                children: [
                    (0, r.jsx)("img", {
                        alt: "Reward Bow",
                        src: y.Z,
                        className: E.rewardImage,
                    }),
                    (0, r.jsx)("div", {
                        className: x.headerContainer,
                        children: (0, r.jsx)(d.IGR, {
                            text: v.intl.string(v.t.rykAJ9),
                            disableColor: !0,
                            className: E.unlockRewardBadge,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: x.footerContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: E.footerInfoContainer,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: E.footerInfo,
                                        children: [
                                            (0, r.jsx)(d.Heading, {
                                                variant: "heading-md/medium",
                                                color: "text-primary",
                                                lineClamp: 1,
                                                className: x.productName,
                                                children: v.intl.string(v.t["0mDmg/"]),
                                            }),
                                            (0, r.jsx)(u.u, {
                                                text: I
                                                    ? v.intl.string(v.t.cKH3tk)
                                                    : v.intl.formatToPlainString(v.t["8aMDPc"], {
                                                          totalCount: T.length,
                                                      }),
                                                align: "right",
                                                caretConfig: {
                                                    position: "bottom",
                                                    align: "end",
                                                },
                                                position: "top",
                                                children: (0, r.jsx)("span", {
                                                    className: E.questionIconContainer,
                                                    children: (0, r.jsx)(o.idN, { size: "xs" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: x.footerInfoShrinkOnHover,
                                        "aria-hidden": !0,
                                        children: (0, r.jsxs)("div", {
                                            className: E.progressContainer,
                                            children: [
                                                (0, r.jsx)(g.Z, {
                                                    variant: g.y.BLUE,
                                                    progress: L.length,
                                                    maximum: T.length,
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: a()(E.progressTextContainer, {
                                                        [E.readyToClaimText]: I,
                                                    }),
                                                    children: [
                                                        I
                                                            ? (0, r.jsx)(o.kmB, {
                                                                  size: "xs",
                                                                  color: "currentColor",
                                                              })
                                                            : null,
                                                        (0, r.jsx)(o.xvT, {
                                                            variant: "text-xs/medium",
                                                            color: "currentColor",
                                                            children: v.intl.formatToPlainString(v.t["5TwASM"], {
                                                                collectedCount: L.length,
                                                                totalCount: T.length,
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
                                className: x.footerButtonContainer,
                                children: (0, r.jsx)(o.hE2, {
                                    wrap: !1,
                                    className: x.footerButtonGroup,
                                    fullWidth: !0,
                                    children: (0, r.jsx)(o.zxk, {
                                        variant: "primary",
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                I &&
                                                    (0, p.wW)(t.skuId, n)
                                                        .then(() => {
                                                            let e = m.Z.getProduct(n);
                                                            null != e &&
                                                                (0, _.Z)({
                                                                    product: e,
                                                                    analyticsLocations: [],
                                                                    overrideGraphic: {
                                                                        type: "video",
                                                                        src: S.Z,
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
                                        disabled: !I,
                                        loading: P,
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
