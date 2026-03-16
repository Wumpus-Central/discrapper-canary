"use strict";
s.d(t, { A: () => L });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(158954),
    o = s(311907),
    c = s(230109),
    d = s(990078),
    u = s(397927),
    _ = s(713517),
    g = s(914410),
    m = s(979286),
    h = s(590180),
    p = s(4227),
    f = s(597783),
    x = s(61750),
    E = s(357704),
    C = s(985018),
    b = s(514294),
    A = s(620399),
    S = s(68465),
    v = s(165530),
    I = s(871237);
let L = r.memo(function (e) {
    let { category: t, rewardSkuId: s } = e,
        { handleCardVisibilityChange: l } = (0, f.Z)(s),
        L = r.useRef(null),
        { isHoveringOrFocusing: j } = (0, _.A)(L),
        { readyToClaim: k, collectibleProductSkuIds: T, collectedSkuIds: O } = (0, E.K)(t, s),
        y = (0, o.bG)([p.A], () => p.A.isClaiming === s);
    return (0, n.jsx)(c.L, {
        onChange: l,
        threshold: 0,
        innerRef: L,
        children: (0, n.jsx)("div", {
            ref: L,
            className: a()(b.ty, A.Q3, { [b.yo]: j }),
            "aria-label": C.intl.formatToPlainString(C.t.Ez6aHE, { category: t.name }),
            children: (0, n.jsxs)("div", {
                className: b.qt,
                children: [
                    (0, n.jsx)("img", { alt: "Reward Bow", src: I.A, className: A.L8 }),
                    (0, n.jsx)("div", {
                        className: b.N1,
                        children: (0, n.jsx)(u.LpS, {
                            text: C.intl.string(C.t.rykAJ9),
                            disableColor: !0,
                            className: A.HZ,
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: b.xQ,
                        children: [
                            (0, n.jsxs)("div", {
                                className: A.xE,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: A.cs,
                                        children: [
                                            (0, n.jsx)(u.Heading, {
                                                variant: "heading-md/medium",
                                                color: "text-strong",
                                                lineClamp: 1,
                                                className: b.tZ,
                                                children: C.intl.string(C.t["0mDmg/"]),
                                            }),
                                            (0, n.jsx)(d.m, {
                                                text: k
                                                    ? C.intl.string(C.t.cKH3tk)
                                                    : C.intl.formatToPlainString(C.t["8aMDPc"], {
                                                          totalCount: T.length,
                                                      }),
                                                align: "right",
                                                caretConfig: { position: "bottom", align: "end" },
                                                position: "top",
                                                children: (0, n.jsx)("span", {
                                                    className: A.ZB,
                                                    children: (0, n.jsx)(i.cBN, { size: "xs" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)("div", {
                                        className: b.oh,
                                        "aria-hidden": !0,
                                        children: (0, n.jsxs)("div", {
                                            className: A.L$,
                                            children: [
                                                (0, n.jsx)(g.Ay, {
                                                    variant: g.qP.BLUE,
                                                    progress: O.length,
                                                    maximum: T.length,
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: a()(A.__, { [A.gF]: k }),
                                                    children: [
                                                        k
                                                            ? (0, n.jsx)(i.Uzd, { size: "xs", color: "currentColor" })
                                                            : null,
                                                        (0, n.jsx)(i.EYj, {
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
                            (0, n.jsx)("div", {
                                className: b.Vs,
                                children: (0, n.jsx)(i.e2v, {
                                    wrap: !1,
                                    className: b.Ld,
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
                                        loading: y,
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
