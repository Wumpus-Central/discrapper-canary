l.d(t, {
    A: () => y,
});
var n = l(627968),
    r = l(64700),
    s = l(503698),
    a = l.n(s),
    i = l(158954),
    o = l(311907),
    c = l(230109),
    u = l(990078),
    d = l(397927),
    f = l(713517),
    b = l(613566),
    g = l(979286),
    p = l(590180),
    m = l(4227),
    h = l(597783),
    E = l(61750),
    v = l(357704),
    A = l(985018),
    x = l(514294),
    S = l(620399),
    C = l(68465),
    O = l(165530),
    _ = l(871237);
let y = r.memo(function (e) {
    let { category: t, rewardSkuId: l } = e,
        { handleCardVisibilityChange: s } = (0, h.Z)(l),
        y = r.useRef(null),
        { isHoveringOrFocusing: j } = (0, f.A)(y),
        { readyToClaim: L, collectibleProductSkuIds: T, collectedSkuIds: I } = (0, v.K)(t, l),
        N = (0, o.bG)([m.A], () => m.A.isClaiming === l);
    return (0, n.jsx)(c.L, {
        onChange: s,
        threshold: 0,
        innerRef: y,
        children: (0, n.jsx)("div", {
            ref: y,
            className: a()(x.ty, S.Q3, {
                [x.yo]: j,
            }),
            "aria-label": A.intl.formatToPlainString(A.t.Ez6aHE, {
                category: t.name,
            }),
            children: (0, n.jsxs)("div", {
                className: x.qt,
                children: [
                    (0, n.jsx)("img", {
                        alt: "Reward Bow",
                        src: _.A,
                        className: S.L8,
                    }),
                    (0, n.jsx)("div", {
                        className: x.N1,
                        children: (0, n.jsx)(d.LpS, {
                            text: A.intl.string(A.t.rykAJ9),
                            disableColor: !0,
                            className: S.HZ,
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: x.xQ,
                        children: [
                            (0, n.jsxs)("div", {
                                className: S.xE,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: S.cs,
                                        children: [
                                            (0, n.jsx)(d.Heading, {
                                                variant: "heading-md/medium",
                                                color: "text-strong",
                                                lineClamp: 1,
                                                className: x.tZ,
                                                children: A.intl.string(A.t["0mDmg/"]),
                                            }),
                                            (0, n.jsx)(u.m, {
                                                text: L
                                                    ? A.intl.string(A.t.cKH3tk)
                                                    : A.intl.formatToPlainString(A.t["8aMDPc"], {
                                                          totalCount: T.length,
                                                      }),
                                                align: "right",
                                                caretConfig: {
                                                    position: "bottom",
                                                    align: "end",
                                                },
                                                position: "top",
                                                children: (0, n.jsx)("span", {
                                                    className: S.ZB,
                                                    children: (0, n.jsx)(i.cBN, {
                                                        size: "xs",
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)("div", {
                                        className: x.oh,
                                        "aria-hidden": !0,
                                        children: (0, n.jsxs)("div", {
                                            className: S.L$,
                                            children: [
                                                (0, n.jsx)(b.Ay, {
                                                    variant: b.qP.BLUE,
                                                    progress: I.length,
                                                    maximum: T.length,
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: a()(S.__, {
                                                        [S.gF]: L,
                                                    }),
                                                    children: [
                                                        L
                                                            ? (0, n.jsx)(i.Uzd, {
                                                                  size: "xs",
                                                                  color: "currentColor",
                                                              })
                                                            : null,
                                                        (0, n.jsx)(i.EYj, {
                                                            variant: "text-xs/medium",
                                                            color: "currentColor",
                                                            children: A.intl.formatToPlainString(A.t["5TwASM"], {
                                                                collectedCount: I.length,
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
                            (0, n.jsx)("div", {
                                className: x.Vs,
                                children: (0, n.jsx)(i.e2v, {
                                    wrap: !1,
                                    className: x.Ld,
                                    fullWidth: !0,
                                    children: (0, n.jsx)(i.$nd, {
                                        variant: "primary",
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                L &&
                                                    (0, g.BX)(t.skuId, l)
                                                        .then(() => {
                                                            let e = p.A.getProduct(l);
                                                            null != e &&
                                                                (0, E.A)({
                                                                    product: e,
                                                                    analyticsLocations: [],
                                                                    overrideGraphic: {
                                                                        type: "video",
                                                                        src: O.A,
                                                                        fallbackImageSrc: C.A,
                                                                        loop: !0,
                                                                        loopAt: 6,
                                                                        aspectRatio: "16/9",
                                                                    },
                                                                });
                                                        })
                                                        .catch(() => {
                                                            (0, d.mMO)(() =>
                                                                Promise.resolve((e) =>
                                                                    (0, n.jsx)(i.Modal, {
                                                                        transitionState: e.transitionState,
                                                                        onClose: e.onClose,
                                                                        size: "sm",
                                                                        title: A.intl.string(A.t.SRTlyA),
                                                                        actions: [
                                                                            {
                                                                                text: A.intl.string(A.t.TyCVIq),
                                                                                onClick: e.onClose,
                                                                                variant: "primary",
                                                                            },
                                                                        ],
                                                                        children: (0, n.jsx)("div", {
                                                                            children: A.intl.string(A.t["0YpIF/"]),
                                                                        }),
                                                                    }),
                                                                ),
                                                            );
                                                        });
                                        },
                                        text: A.intl.string(A.t.VnVTNc),
                                        fullWidth: !0,
                                        disabled: !L,
                                        loading: N,
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
