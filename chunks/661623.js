"use strict";
s.d(t, { A: () => T });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(158954),
    o = s(311907),
    c = s(230109),
    d = s(990078),
    u = s(397927),
    g = s(713517),
    m = s(613566),
    _ = s(979286),
    h = s(590180),
    p = s(4227),
    f = s(597783),
    E = s(61750),
    C = s(357704),
    b = s(985018),
    A = s(514294),
    x = s(620399),
    S = s(68465),
    v = s(165530),
    L = s(871237);
let T = r.memo(function (e) {
    let { category: t, rewardSkuId: s } = e,
        { handleCardVisibilityChange: l } = (0, f.Z)(s),
        T = r.useRef(null),
        { isHoveringOrFocusing: I } = (0, g.A)(T),
        { readyToClaim: O, collectibleProductSkuIds: y, collectedSkuIds: j } = (0, C.K)(t, s),
        N = (0, o.bG)([p.A], () => p.A.isClaiming === s);
    return (0, n.jsx)(c.L, {
        onChange: l,
        threshold: 0,
        innerRef: T,
        children: (0, n.jsx)("div", {
            ref: T,
            className: a()(A.ty, x.Q3, { [A.yo]: I }),
            "aria-label": b.intl.formatToPlainString(b.t.Ez6aHE, { category: t.name }),
            children: (0, n.jsxs)("div", {
                className: A.qt,
                children: [
                    (0, n.jsx)("img", { alt: "Reward Bow", src: L.A, className: x.L8 }),
                    (0, n.jsx)("div", {
                        className: A.N1,
                        children: (0, n.jsx)(u.LpS, {
                            text: b.intl.string(b.t.rykAJ9),
                            disableColor: !0,
                            className: x.HZ,
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: A.xQ,
                        children: [
                            (0, n.jsxs)("div", {
                                className: x.xE,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: x.cs,
                                        children: [
                                            (0, n.jsx)(u.Heading, {
                                                variant: "heading-md/medium",
                                                color: "text-strong",
                                                lineClamp: 1,
                                                className: A.tZ,
                                                children: b.intl.string(b.t["0mDmg/"]),
                                            }),
                                            (0, n.jsx)(d.m, {
                                                text: O
                                                    ? b.intl.string(b.t.cKH3tk)
                                                    : b.intl.formatToPlainString(b.t["8aMDPc"], {
                                                          totalCount: y.length,
                                                      }),
                                                align: "right",
                                                caretConfig: { position: "bottom", align: "end" },
                                                position: "top",
                                                children: (0, n.jsx)("span", {
                                                    className: x.ZB,
                                                    children: (0, n.jsx)(i.cBN, { size: "xs" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)("div", {
                                        className: A.oh,
                                        "aria-hidden": !0,
                                        children: (0, n.jsxs)("div", {
                                            className: x.L$,
                                            children: [
                                                (0, n.jsx)(m.Ay, {
                                                    variant: m.qP.BLUE,
                                                    progress: j.length,
                                                    maximum: y.length,
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: a()(x.__, { [x.gF]: O }),
                                                    children: [
                                                        O
                                                            ? (0, n.jsx)(i.Uzd, { size: "xs", color: "currentColor" })
                                                            : null,
                                                        (0, n.jsx)(i.EYj, {
                                                            variant: "text-xs/medium",
                                                            color: "currentColor",
                                                            children: b.intl.formatToPlainString(b.t["5TwASM"], {
                                                                collectedCount: j.length,
                                                                totalCount: y.length,
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
                                                O &&
                                                    (0, _.BX)(t.skuId, s)
                                                        .then(() => {
                                                            let e = h.A.getProduct(s);
                                                            null != e &&
                                                                (0, E.A)({
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
                                                                        title: b.intl.string(b.t.SRTlyA),
                                                                        actions: [
                                                                            {
                                                                                text: b.intl.string(b.t.TyCVIq),
                                                                                onClick: e.onClose,
                                                                                variant: "primary",
                                                                            },
                                                                        ],
                                                                        children: (0, n.jsx)("div", {
                                                                            children: b.intl.string(b.t["0YpIF/"]),
                                                                        }),
                                                                    }),
                                                                ),
                                                            );
                                                        });
                                        },
                                        text: b.intl.string(b.t.VnVTNc),
                                        fullWidth: !0,
                                        disabled: !O,
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
