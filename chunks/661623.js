"use strict";
n.d(t, { A: () => I });
var s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(158954),
    o = n(311907),
    c = n(230109),
    d = n(990078),
    u = n(397927),
    g = n(713517),
    _ = n(914410),
    m = n(979286),
    h = n(590180),
    p = n(4227),
    f = n(597783),
    x = n(61750),
    E = n(357704),
    C = n(985018),
    A = n(514294),
    b = n(620399),
    S = n(68465),
    v = n(165530),
    L = n(871237);
let I = l.memo(function (e) {
    let { category: t, rewardSkuId: n } = e,
        { handleCardVisibilityChange: r } = (0, f.Z)(n),
        I = l.useRef(null),
        { isHoveringOrFocusing: j } = (0, g.A)(I),
        { readyToClaim: k, collectibleProductSkuIds: T, collectedSkuIds: O } = (0, E.K)(t, n),
        N = (0, o.bG)([p.A], () => p.A.isClaiming === n);
    return (0, s.jsx)(c.L, {
        onChange: r,
        threshold: 0,
        innerRef: I,
        children: (0, s.jsx)("div", {
            ref: I,
            className: a()(A.ty, b.Q3, { [A.yo]: j }),
            "aria-label": C.intl.formatToPlainString(C.t.Ez6aHE, { category: t.name }),
            children: (0, s.jsxs)("div", {
                className: A.qt,
                children: [
                    (0, s.jsx)("img", { alt: "Reward Bow", src: L.A, className: b.L8 }),
                    (0, s.jsx)("div", {
                        className: A.N1,
                        children: (0, s.jsx)(u.LpS, {
                            text: C.intl.string(C.t.rykAJ9),
                            disableColor: !0,
                            className: b.HZ,
                        }),
                    }),
                    (0, s.jsxs)("div", {
                        className: A.xQ,
                        children: [
                            (0, s.jsxs)("div", {
                                className: b.xE,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: b.cs,
                                        children: [
                                            (0, s.jsx)(u.Heading, {
                                                variant: "heading-md/medium",
                                                color: "text-strong",
                                                lineClamp: 1,
                                                className: A.tZ,
                                                children: C.intl.string(C.t["0mDmg/"]),
                                            }),
                                            (0, s.jsx)(d.m, {
                                                text: k
                                                    ? C.intl.string(C.t.cKH3tk)
                                                    : C.intl.formatToPlainString(C.t["8aMDPc"], {
                                                          totalCount: T.length,
                                                      }),
                                                align: "right",
                                                caretConfig: { position: "bottom", align: "end" },
                                                position: "top",
                                                children: (0, s.jsx)("span", {
                                                    className: b.ZB,
                                                    children: (0, s.jsx)(i.cBN, { size: "xs" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        className: A.oh,
                                        "aria-hidden": !0,
                                        children: (0, s.jsxs)("div", {
                                            className: b.L$,
                                            children: [
                                                (0, s.jsx)(_.Ay, {
                                                    variant: _.qP.BLUE,
                                                    progress: O.length,
                                                    maximum: T.length,
                                                }),
                                                (0, s.jsxs)("div", {
                                                    className: a()(b.__, { [b.gF]: k }),
                                                    children: [
                                                        k
                                                            ? (0, s.jsx)(i.Uzd, { size: "xs", color: "currentColor" })
                                                            : null,
                                                        (0, s.jsx)(i.EYj, {
                                                            variant: "text-xs/medium",
                                                            color: "currentColor",
                                                            children: C.intl.formatToPlainString(C.t["5TwASM"], {
                                                                collectedCount: O.length,
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
                            (0, s.jsx)("div", {
                                className: A.Vs,
                                children: (0, s.jsx)(i.e2v, {
                                    wrap: !1,
                                    className: A.Ld,
                                    fullWidth: !0,
                                    children: (0, s.jsx)(i.$nd, {
                                        variant: "primary",
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                k &&
                                                    (0, m.BX)(t.skuId, n)
                                                        .then(() => {
                                                            let e = h.A.getProduct(n);
                                                            null != e &&
                                                                (0, x.A)({
                                                                    product: e,
                                                                    analyticsLocations: [],
                                                                    overrideGraphic: {
                                                                        type: "video",
                                                                        src: v.A,
                                                                        fallbackImageSrc: S.A,
                                                                        loop: !0,
                                                                        loopAt: 6,
                                                                        aspectRatio: "16/9",
                                                                    },
                                                                });
                                                        })
                                                        .catch(() => {
                                                            (0, u.mMO)(() =>
                                                                Promise.resolve((e) =>
                                                                    (0, s.jsx)(i.Modal, {
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
                                                                        children: (0, s.jsx)("div", {
                                                                            children: C.intl.string(C.t["0YpIF/"]),
                                                                        }),
                                                                    }),
                                                                ),
                                                            );
                                                        });
                                        },
                                        text: C.intl.string(C.t.VnVTNc),
                                        fullWidth: !0,
                                        disabled: !k,
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
