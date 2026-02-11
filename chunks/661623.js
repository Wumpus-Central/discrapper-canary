"use strict";
s.d(t, { A: () => I });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(158954),
    o = s(311907),
    c = s(230109),
    d = s(990078),
    u = s(397927),
    g = s(713517),
    _ = s(613566),
    m = s(979286),
    h = s(590180),
    p = s(4227),
    f = s(597783),
    x = s(61750),
    E = s(357704),
    C = s(985018),
    A = s(75388),
    b = s(294297),
    S = s(68465),
    v = s(165530),
    L = s(871237);
let I = l.memo(function (e) {
    let { category: t, rewardSkuId: s } = e,
        { handleCardVisibilityChange: r } = (0, f.Z)(s),
        I = l.useRef(null),
        { isHoveringOrFocusing: j } = (0, g.A)(I),
        { readyToClaim: k, collectibleProductSkuIds: O, collectedSkuIds: T } = (0, E.K)(t, s),
        N = (0, o.bG)([p.A], () => p.A.isClaiming === s);
    return (0, n.jsx)(c.L, {
        onChange: r,
        threshold: 0,
        innerRef: I,
        children: (0, n.jsx)("div", {
            ref: I,
            className: a()(A.ty, b.Q3, { [A.yo]: j }),
            "aria-label": C.intl.formatToPlainString(C.t.Ez6aHE, { category: t.name }),
            children: (0, n.jsxs)("div", {
                className: A.qt,
                children: [
                    (0, n.jsx)("img", { alt: "Reward Bow", src: L.A, className: b.L8 }),
                    (0, n.jsx)("div", {
                        className: A.N1,
                        children: (0, n.jsx)(u.LpS, {
                            text: C.intl.string(C.t.rykAJ9),
                            disableColor: !0,
                            className: b.HZ,
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: A.xQ,
                        children: [
                            (0, n.jsxs)("div", {
                                className: b.xE,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: b.cs,
                                        children: [
                                            (0, n.jsx)(u.Heading, {
                                                variant: "heading-md/medium",
                                                color: "text-strong",
                                                lineClamp: 1,
                                                className: A.tZ,
                                                children: C.intl.string(C.t["0mDmg/"]),
                                            }),
                                            (0, n.jsx)(d.m, {
                                                text: k
                                                    ? C.intl.string(C.t.cKH3tk)
                                                    : C.intl.formatToPlainString(C.t["8aMDPc"], {
                                                          totalCount: O.length,
                                                      }),
                                                align: "right",
                                                caretConfig: { position: "bottom", align: "end" },
                                                position: "top",
                                                children: (0, n.jsx)("span", {
                                                    className: b.ZB,
                                                    children: (0, n.jsx)(i.cBN, { size: "xs" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)("div", {
                                        className: A.oh,
                                        "aria-hidden": !0,
                                        children: (0, n.jsxs)("div", {
                                            className: b.L$,
                                            children: [
                                                (0, n.jsx)(_.Ay, {
                                                    variant: _.qP.BLUE,
                                                    progress: T.length,
                                                    maximum: O.length,
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: a()(b.__, { [b.gF]: k }),
                                                    children: [
                                                        k
                                                            ? (0, n.jsx)(i.Uzd, { size: "xs", color: "currentColor" })
                                                            : null,
                                                        (0, n.jsx)(i.EYj, {
                                                            variant: "text-xs/medium",
                                                            color: "currentColor",
                                                            children: C.intl.formatToPlainString(C.t["5TwASM"], {
                                                                collectedCount: T.length,
                                                                totalCount: O.length,
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
                                className: A.Vs,
                                children: (0, n.jsx)(i.e2v, {
                                    wrap: !1,
                                    className: A.Ld,
                                    fullWidth: !0,
                                    children: (0, n.jsx)(i.$nd, {
                                        variant: "primary",
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                k &&
                                                    (0, m.BX)(t.skuId, s)
                                                        .then(() => {
                                                            let e = h.A.getProduct(s);
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
                                                                    (0, n.jsx)(i.Modal, {
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
                                                                        children: (0, n.jsx)("div", {
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
