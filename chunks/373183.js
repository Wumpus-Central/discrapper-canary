n.d(t, { Z: () => O });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(793030),
    s = n(442837),
    c = n(28664),
    u = n(481060),
    d = n(104505),
    p = n(335131),
    g = n(597688),
    f = n(1870),
    h = n(832149),
    m = n(911390),
    C = n(388032),
    _ = n(213301),
    b = n(290181),
    v = n(250967),
    x = n(182975),
    E = n(655603);
let O = l.memo(function (e) {
    let { category: t, rewardSkuId: n } = e,
        i = l.useRef(null),
        { isHoveringOrFocusing: O } = (0, d.Z)(i),
        { readyToClaim: S, collectibleProductSkuIds: y, collectedSkuIds: j } = (0, m.q)(t, n),
        k = (0, s.e7)([f.Z], () => f.Z.isClaiming === n);
    return (0, r.jsx)("div", {
        ref: i,
        className: a()(_.productCardContainer, b.defaultCursor, { [_.hovered]: O }),
        "aria-label": C.intl.formatToPlainString(C.t.Ez6aHE, { category: t.name }),
        children: (0, r.jsxs)("div", {
            className: _.productCardContentContainer,
            children: [
                (0, r.jsx)("img", {
                    alt: "Reward Bow",
                    src: E.Z,
                    className: b.rewardImage,
                }),
                (0, r.jsx)("div", {
                    className: _.headerContainer,
                    children: (0, r.jsx)(u.IGR, {
                        text: C.intl.string(C.t.rykAJ9),
                        disableColor: !0,
                        className: b.unlockRewardBadge,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: _.footerContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: b.footerInfoContainer,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: b.footerInfo,
                                    children: [
                                        (0, r.jsx)(u.Heading, {
                                            variant: "heading-md/medium",
                                            color: "text-primary",
                                            lineClamp: 1,
                                            className: _.productName,
                                            children: C.intl.string(C.t["0mDmg/"]),
                                        }),
                                        (0, r.jsx)(c.u, {
                                            text: S
                                                ? C.intl.string(C.t.cKH3tk)
                                                : C.intl.formatToPlainString(C.t["8aMDPc"], { totalCount: y.length }),
                                            align: "right",
                                            caretConfig: {
                                                position: "bottom",
                                                align: "end",
                                            },
                                            position: "top",
                                            children: (0, r.jsx)("span", {
                                                className: b.questionIconContainer,
                                                children: (0, r.jsx)(o.idN, { size: "xs" }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: _.footerInfoShrinkOnHover,
                                    children: (0, r.jsxs)("div", {
                                        className: a()(b.progressTextContainer, { [b.readyToClaimText]: S }),
                                        children: [
                                            S
                                                ? (0, r.jsx)(o.kmB, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                  })
                                                : null,
                                            (0, r.jsx)(o.xvT, {
                                                variant: "text-xs/medium",
                                                color: "currentColor",
                                                children: C.intl.formatToPlainString(C.t["5TwASM"], {
                                                    collectedCount: j.length,
                                                    totalCount: y.length,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: _.footerButtonContainer,
                            children: (0, r.jsx)(o.hE2, {
                                wrap: !1,
                                className: _.footerButtonGroup,
                                fullWidth: !0,
                                children: (0, r.jsx)(o.zxk, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(),
                                            S &&
                                                (0, p.wW)(t.skuId, n)
                                                    .then(() => {
                                                        let e = g.Z.getProduct(n);
                                                        null != e &&
                                                            (0, h.Z)({
                                                                product: e,
                                                                analyticsLocations: [],
                                                                overrideGraphic: {
                                                                    type: "video",
                                                                    src: x.Z,
                                                                    fallbackImageSrc: v.Z,
                                                                    loop: !1,
                                                                    aspectRatio: "16/9",
                                                                },
                                                            });
                                                    })
                                                    .catch(() => {
                                                        (0, u.ZDy)(() =>
                                                            Promise.resolve((e) =>
                                                                (0, r.jsx)(o.Modal, {
                                                                    transitionState: e.transitionState,
                                                                    onClose: e.onClose,
                                                                    size: "sm",
                                                                    title: C.intl.string(C.t.SRTlyA),
                                                                    actions: [
                                                                        {
                                                                            text: C.intl.string(C.t.TyCVIq),
                                                                            onClick: e.onClose,
                                                                            variant: "primary",
                                                                        },
                                                                    ],
                                                                    children: (0, r.jsx)("div", {
                                                                        children: C.intl.string(C.t["0YpIF/"]),
                                                                    }),
                                                                }),
                                                            ),
                                                        );
                                                    });
                                    },
                                    text: C.intl.string(C.t.VnVTNc),
                                    fullWidth: !0,
                                    disabled: !S,
                                    loading: k,
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
});
