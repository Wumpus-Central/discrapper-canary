t.d(n, { A: () => p });
var i = t(477900),
    l = t(582128),
    a = t(717421),
    o = t(503698),
    r = t.n(o),
    s = t(156150),
    d = t(939249),
    c = t(834730),
    u = t(91982);
t(500522);
var x = t(668327);
let h = { duration: 250 },
    v = function (e) {
        let {
                currentPx: n,
                trackBackground: t,
                indicator: o,
                isAnimated: v,
                isCompleted: m,
                icon: p,
                expansionSpring: f,
                onClick: g,
                onMouseEnter: P,
                onMouseLeave: j,
            } = e,
            { label: C, targetSec: k, leftPx: E, rightPx: N, index: b } = o,
            [_, S] = l.useState(!1),
            w = E - 4,
            y = n >= w ? Math.min(1, (n - w) / (N - w)) : 0,
            M = 0 === b && !m,
            B = !M,
            { fill: K } = (0, a.z)({
                fill: 100 * y,
                config: h,
                onRest: () => {
                    y <= 0 && S(!1);
                },
                onStart: () => {
                    S(!0);
                },
            });
        function A(e) {
            return e.stopPropagation();
        }
        let I =
            null != g
                ? (e) => {
                      (e.stopPropagation(), g());
                  }
                : void 0;
        return (0, i.jsxs)(s.animated.div, {
            className: r()(x.ck, { [x.a]: M, [x.C9]: B }),
            style: {
                left: v ? f.to((e) => E - e) : E,
                "--custom-indicator-size": v ? f.to((e) => `${26 + 2 * e}px`) : "26px",
                "--custom-indicator-fill": K.to((e) => e),
                backgroundColor: t,
            },
            onPointerDown: A,
            children: [
                _ && (0, i.jsx)("div", { className: x.y4, "aria-hidden": "true" }),
                _ &&
                    M &&
                    (0, i.jsxs)("div", {
                        className: x.qE,
                        "aria-hidden": "true",
                        children: [
                            (0, i.jsx)("div", { className: x.x_, children: (0, i.jsx)("div", { className: x.pI }) }),
                            (0, i.jsx)("div", { className: x.Nv, children: (0, i.jsx)("div", { className: x.pI }) }),
                        ],
                    }),
                (0, i.jsx)(d.D, {
                    className: x.E6,
                    "data-testid": "ad-video-reward-indicator",
                    onClick: I,
                    onPointerDown: A,
                    onMouseEnter: P,
                    onMouseLeave: j,
                    children: p,
                }),
                (0, i.jsxs)("div", {
                    className: x.Ru,
                    role: "tooltip",
                    "aria-label": null != C ? `${(0, u.rB)(k)} - ${C}` : (0, u.rB)(k),
                    children: [
                        (0, i.jsx)(c.E, {
                            variant: "body-xs/normal",
                            color: "text-overlay-light",
                            children: (0, u.rB)(k),
                        }),
                        null != C &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("span", { className: x.AE, "aria-hidden": "true" }),
                                    (0, i.jsx)(c.E, {
                                        variant: "body-xs/normal",
                                        color: "text-overlay-light",
                                        children: C,
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    },
    m = { tension: 500, friction: 30, clamp: !0 };
function p(e) {
    let { targetSec: n, label: t, isCompleted: o, icon: r, clickable: s = !1 } = e,
        [d, c] = l.useState(null),
        u = l.useRef(null),
        [{ expansion: x }, h] = (0, a.z)(() => ({
            expansion: 0,
            config: m,
            onRest: () => {
                null == u.current && c(null);
            },
        })),
        p = l.useCallback(
            (e) => {
                ((u.current = e), null != e ? (c(e), h({ expansion: 4 })) : h({ expansion: 0 }));
            },
            [h],
        ),
        f = l.useMemo(() => [{ index: 0, timeSec: n, widthPx: 32, gapPx: 4, align: "end", clickable: s }], [n, s]),
        g = l.useCallback(
            (e, l, a, s) => {
                let c = { leftPx: e.leftPx, rightPx: e.rightPx, targetSec: n, index: e.index, label: t };
                return (0, i.jsx)(
                    v,
                    {
                        currentPx: l,
                        trackBackground: s,
                        indicator: c,
                        isAnimated: d === e.index,
                        isCompleted: o,
                        icon: r,
                        expansionSpring: x,
                        onMouseEnter: () => p(e.index),
                        onMouseLeave: () => p(null),
                        onClick: a,
                    },
                    `indicator-${e.index}`,
                );
            },
            [n, t, d, o, r, x, p],
        );
    return { indicators: f, animatingIndex: d, expansionSpring: x, hoverExpansionPx: 4, renderIndicator: g };
}
