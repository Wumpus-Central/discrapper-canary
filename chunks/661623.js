"use strict";
s.d(t, { A: () => R });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(189213),
    o = s(290136),
    c = s(478016),
    d = s(834730),
    u = s(825484),
    g = s(821609),
    h = s(311907),
    _ = s(230109),
    m = s(990078),
    p = s(192308),
    f = s(777666),
    E = s(534514),
    x = s(713517),
    A = s(914410),
    C = s(979286),
    S = s(590180),
    b = s(4227),
    v = s(597783),
    L = s(61750),
    I = s(357704),
    j = s(985018),
    N = s(496569),
    T = s(498924),
    O = s(68465),
    y = s(165530),
    k = s(871237);
let R = l.memo(function (e) {
    let { category: t, rewardSkuId: s } = e,
        { handleCardVisibilityChange: r } = (0, v.Z)(s),
        R = l.useRef(null),
        { isHoveringOrFocusing: B } = (0, x.A)(R),
        { readyToClaim: P, collectibleProductSkuIds: M, collectedSkuIds: D } = (0, I.K)(t, s),
        w = (0, h.bG)([b.A], () => b.A.isClaiming === s);
    return (0, n.jsx)(_.L, {
        onChange: r,
        threshold: 0,
        innerRef: R,
        children: (0, n.jsx)("div", {
            ref: R,
            className: a()(N.ty, T.Q3, { [N.yo]: B }),
            "aria-label": j.intl.formatToPlainString(j.t.Ez6aHE, { category: t.name }),
            children: (0, n.jsxs)("div", {
                className: N.qt,
                children: [
                    (0, n.jsx)("img", { alt: "Reward Bow", src: k.A, className: T.L8 }),
                    (0, n.jsx)("div", {
                        className: N.N1,
                        children: (0, n.jsx)(f.Lp, {
                            text: j.intl.string(j.t.rykAJ9),
                            disableColor: !0,
                            className: T.HZ,
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: N.xQ,
                        children: [
                            (0, n.jsxs)("div", {
                                className: T.xE,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: T.cs,
                                        children: [
                                            (0, n.jsx)(E.D, {
                                                variant: "heading-md/medium",
                                                color: "text-strong",
                                                lineClamp: 1,
                                                className: N.tZ,
                                                children: j.intl.string(j.t["0mDmg/"]),
                                            }),
                                            (0, n.jsx)(m.m, {
                                                text: P
                                                    ? j.intl.string(j.t.cKH3tk)
                                                    : j.intl.formatToPlainString(j.t["8aMDPc"], {
                                                          totalCount: M.length,
                                                      }),
                                                align: "right",
                                                caretConfig: { position: "bottom", align: "end" },
                                                position: "top",
                                                children: (0, n.jsx)("span", {
                                                    className: T.ZB,
                                                    children: (0, n.jsx)(o.c, { size: "xs" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)("div", {
                                        className: N.oh,
                                        "aria-hidden": !0,
                                        children: (0, n.jsxs)("div", {
                                            className: T.L$,
                                            children: [
                                                (0, n.jsx)(A.Ay, {
                                                    variant: A.qP.BLUE,
                                                    progress: D.length,
                                                    maximum: M.length,
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: a()(T.__, { [T.gF]: P }),
                                                    children: [
                                                        P
                                                            ? (0, n.jsx)(c.U, { size: "xs", color: "currentColor" })
                                                            : null,
                                                        (0, n.jsx)(d.E, {
                                                            variant: "text-xs/medium",
                                                            color: "currentColor",
                                                            children: j.intl.formatToPlainString(j.t["5TwASM"], {
                                                                collectedCount: D.length,
                                                                totalCount: M.length,
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
                                className: N.Vs,
                                children: (0, n.jsx)(u.e, {
                                    wrap: !1,
                                    className: N.Ld,
                                    fullWidth: !0,
                                    children: (0, n.jsx)(g.$, {
                                        variant: "primary",
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                P &&
                                                    (0, C.BX)(t.skuId, s)
                                                        .then(() => {
                                                            let e = S.A.getProduct(s);
                                                            null != e &&
                                                                (0, L.A)({
                                                                    product: e,
                                                                    analyticsLocations: [],
                                                                    overrideGraphic: {
                                                                        type: "video",
                                                                        src: y.A,
                                                                        fallbackImageSrc: O.A,
                                                                        loop: !0,
                                                                        loopAt: 6,
                                                                        aspectRatio: "16/9",
                                                                    },
                                                                });
                                                        })
                                                        .catch(() => {
                                                            (0, p.openModalLazy)(() =>
                                                                Promise.resolve((e) =>
                                                                    (0, n.jsx)(i.Modal, {
                                                                        transitionState: e.transitionState,
                                                                        onClose: e.onClose,
                                                                        size: "sm",
                                                                        title: j.intl.string(j.t.SRTlyA),
                                                                        actions: [
                                                                            {
                                                                                text: j.intl.string(j.t.TyCVIq),
                                                                                onClick: e.onClose,
                                                                                variant: "primary",
                                                                            },
                                                                        ],
                                                                        children: (0, n.jsx)("div", {
                                                                            children: j.intl.string(j.t["0YpIF/"]),
                                                                        }),
                                                                    }),
                                                                ),
                                                            );
                                                        });
                                        },
                                        text: j.intl.string(j.t.VnVTNc),
                                        fullWidth: !0,
                                        disabled: !P,
                                        loading: w,
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
