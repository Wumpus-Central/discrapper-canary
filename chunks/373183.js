n.d(t, { Z: () => k });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    s = n.n(i),
    o = n(793030),
    a = n(442837),
    c = n(622535),
    u = n(28664),
    d = n(481060),
    g = n(104505),
    f = n(527685),
    p = n(335131),
    m = n(597688),
    C = n(1870),
    h = n(297651),
    _ = n(832149),
    b = n(911390),
    E = n(388032),
    v = n(213301),
    S = n(290181),
    x = n(250967),
    O = n(182975),
    y = n(655603);
let k = l.memo(function (e) {
    let { category: t, rewardSkuId: n } = e,
        { handleCardVisibilityChange: i } = (0, h.E)(n),
        k = l.useRef(null),
        { isHoveringOrFocusing: T } = (0, g.Z)(k),
        { readyToClaim: j, collectibleProductSkuIds: I, collectedSkuIds: L } = (0, b.q)(t, n),
        B = (0, a.e7)([C.Z], () => C.Z.isClaiming === n);
    return (0, r.jsx)(c.$, {
        onChange: i,
        threshold: 0,
        innerRef: k,
        children: (0, r.jsx)("div", {
            ref: k,
            className: s()(v.productCardContainer, S.defaultCursor, { [v.hovered]: T }),
            "aria-label": E.intl.formatToPlainString(E.t.Ez6aHE, { category: t.name }),
            children: (0, r.jsxs)("div", {
                className: v.productCardContentContainer,
                children: [
                    (0, r.jsx)("img", {
                        alt: "Reward Bow",
                        src: y.Z,
                        className: S.rewardImage,
                    }),
                    (0, r.jsx)("div", {
                        className: v.headerContainer,
                        children: (0, r.jsx)(d.IGR, {
                            text: E.intl.string(E.t.rykAJ9),
                            disableColor: !0,
                            className: S.unlockRewardBadge,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: v.footerContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: S.footerInfoContainer,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: S.footerInfo,
                                        children: [
                                            (0, r.jsx)(d.Heading, {
                                                variant: "heading-md/medium",
                                                color: "text-strong",
                                                lineClamp: 1,
                                                className: v.productName,
                                                children: E.intl.string(E.t["0mDmg/"]),
                                            }),
                                            (0, r.jsx)(u.u, {
                                                text: j
                                                    ? E.intl.string(E.t.cKH3tk)
                                                    : E.intl.formatToPlainString(E.t["8aMDPc"], {
                                                          totalCount: I.length,
                                                      }),
                                                align: "right",
                                                caretConfig: {
                                                    position: "bottom",
                                                    align: "end",
                                                },
                                                position: "top",
                                                children: (0, r.jsx)("span", {
                                                    className: S.questionIconContainer,
                                                    children: (0, r.jsx)(o.idN, { size: "xs" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: v.footerInfoShrinkOnHover,
                                        "aria-hidden": !0,
                                        children: (0, r.jsxs)("div", {
                                            className: S.progressContainer,
                                            children: [
                                                (0, r.jsx)(f.Z, {
                                                    variant: f.y.BLUE,
                                                    progress: L.length,
                                                    maximum: I.length,
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: s()(S.progressTextContainer, {
                                                        [S.readyToClaimText]: j,
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
                                                            children: E.intl.formatToPlainString(E.t["5TwASM"], {
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
                                className: v.footerButtonContainer,
                                children: (0, r.jsx)(o.hE2, {
                                    wrap: !1,
                                    className: v.footerButtonGroup,
                                    fullWidth: !0,
                                    children: (0, r.jsx)(o.zxk, {
                                        variant: "primary",
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                j &&
                                                    (0, p.wW)(t.skuId, n)
                                                        .then(() => {
                                                            let e = m.Z.getProduct(n);
                                                            null != e &&
                                                                (0, _.Z)({
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
                                                                        title: E.intl.string(E.t.SRTlyA),
                                                                        actions: [
                                                                            {
                                                                                text: E.intl.string(E.t.TyCVIq),
                                                                                onClick: e.onClose,
                                                                                variant: "primary",
                                                                            },
                                                                        ],
                                                                        children: (0, r.jsx)("div", {
                                                                            children: E.intl.string(E.t["0YpIF/"]),
                                                                        }),
                                                                    }),
                                                                ),
                                                            );
                                                        });
                                        },
                                        text: E.intl.string(E.t.VnVTNc),
                                        fullWidth: !0,
                                        disabled: !j,
                                        loading: B,
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
