n.d(t, { Z: () => E });
var r = n(951288),
    l = n(647438),
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
    C = n(911390),
    m = n(388032),
    _ = n(290181),
    b = n(250967),
    v = n(182975),
    x = n(655603);
let E = l.memo(function (e) {
    let { category: t, rewardSkuId: n } = e,
        i = l.useRef(null),
        { isHoveringOrFocusing: E } = (0, d.Z)(i),
        { readyToClaim: O, collectibleProductSkuIds: S, collectedSkuIds: y } = (0, C.q)(t, n),
        j = (0, s.e7)([f.Z], () => f.Z.isClaiming === n);
    return (0, r.jsx)("div", {
        ref: i,
        className: a()(_.productCardContainer, { [_.hovered]: E }),
        "aria-label": m.intl.formatToPlainString(m.t.Ez6aHE, { category: t.name }),
        children: (0, r.jsxs)("div", {
            className: _.productCardContentContainer,
            children: [
                (0, r.jsx)("div", {
                    className: _.productPreviewContainer,
                    children: (0, r.jsx)("img", {
                        alt: "Reward Bow",
                        src: x.Z,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: _.headerContainer,
                    children: (0, r.jsx)(u.IGR, {
                        text: m.intl.string(m.t.rykAJ9),
                        disableColor: !0,
                        className: _.unlockRewardBadge,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: _.footerContainer,
                    children: (0, r.jsxs)("div", {
                        className: _.footerContent,
                        children: [
                            (0, r.jsxs)("div", {
                                className: _.footerInfoContainer,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: _.footerInfo,
                                        children: [
                                            (0, r.jsx)(o.xvT, {
                                                variant: "text-lg/bold",
                                                color: "text-primary",
                                                children: m.intl.string(m.t["0mDmg/"]),
                                            }),
                                            (0, r.jsx)(c.u, {
                                                text: O
                                                    ? m.intl.string(m.t.cKH3tk)
                                                    : m.intl.formatToPlainString(m.t["8aMDPc"], {
                                                          totalCount: S.length,
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
                                        className: _.progressContainer,
                                        children: (0, r.jsx)(o.xvT, {
                                            variant: "text-sm/normal",
                                            color: "text-secondary",
                                            children: m.intl.formatToPlainString(m.t["5TwASM"], {
                                                collectedCount: y.length,
                                                totalCount: S.length,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: _.footerButtonContainer,
                                children: (0, r.jsx)(o.hE2, {
                                    wrap: !1,
                                    fullWidth: !0,
                                    children: (0, r.jsx)(o.zxk, {
                                        variant: "primary",
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                O &&
                                                    (0, p.wW)(t.skuId, n)
                                                        .then(() => {
                                                            let e = g.Z.getProduct(n);
                                                            null != e &&
                                                                (0, h.Z)({
                                                                    product: e,
                                                                    analyticsLocations: [],
                                                                    overrideGraphic: {
                                                                        type: "video",
                                                                        src: v.Z,
                                                                        fallbackImageSrc: b.Z,
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
                                                                        title: m.intl.string(m.t.SRTlyA),
                                                                        actions: [
                                                                            {
                                                                                text: m.intl.string(m.t.TyCVIq),
                                                                                onClick: e.onClose,
                                                                                variant: "primary",
                                                                            },
                                                                        ],
                                                                        children: (0, r.jsx)("div", {
                                                                            children: m.intl.string(m.t["0YpIF/"]),
                                                                        }),
                                                                    }),
                                                                ),
                                                            );
                                                        });
                                        },
                                        text: m.intl.string(m.t.VnVTNc),
                                        fullWidth: !0,
                                        disabled: !O,
                                        loading: j,
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
