t.d(n, { A: () => p });
var i = t(477900),
    l = t(582128),
    a = t(717421),
    o = t(503698),
    r = t.n(o),
    s = t(120692),
    d = t(939249),
    u = t(834730),
    c = t(91982);
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
            [M, _] = l.useState(!1),
            S = E - 4,
            w = n >= S ? Math.min(1, (n - S) / (N - S)) : 0,
            y = 0 === b && !m,
            B = !y,
            { fill: K } = (0, a.z)({
                fill: 100 * w,
                config: h,
                onRest: () => {
                    w <= 0 && _(!1);
                },
                onStart: () => {
                    _(!0);
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
            className: r()(x.ck, { [x.a]: y, [x.C9]: B }),
            style: {
                left: v ? f.to((e) => E - e) : E,
                "--custom-indicator-size": v ? f.to((e) => `${26 + 2 * e}px`) : "26px",
                "--custom-indicator-fill": K.to((e) => e),
                backgroundColor: t,
            },
            onMouseDown: A,
            children: [
                M && (0, i.jsx)("div", { className: x.y4, "aria-hidden": "true" }),
                M &&
                    y &&
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
                    onMouseDown: A,
                    onMouseEnter: P,
                    onMouseLeave: j,
                    children: p,
                }),
                (0, i.jsxs)("div", {
                    className: x.Ru,
                    role: "tooltip",
                    "aria-label": null != C ? `${(0, c.rB)(k)} - ${C}` : (0, c.rB)(k),
                    children: [
                        (0, i.jsx)(u.E, {
                            variant: "body-xs/normal",
                            color: "text-overlay-light",
                            children: (0, c.rB)(k),
                        }),
                        null != C &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("span", { className: x.AE, "aria-hidden": "true" }),
                                    (0, i.jsx)(u.E, {
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
        [d, u] = l.useState(null),
        c = l.useRef(null),
        [{ expansion: x }, h] = (0, a.z)(() => ({
            expansion: 0,
            config: m,
            onRest: () => {
                null == c.current && u(null);
            },
        })),
        p = l.useCallback(
            (e) => {
                ((c.current = e), null != e ? (u(e), h({ expansion: 4 })) : h({ expansion: 0 }));
            },
            [h],
        ),
        f = l.useMemo(() => [{ index: 0, timeSec: n, widthPx: 32, gapPx: 4, align: "end", clickable: s }], [n, s]),
        g = l.useCallback(
            (e, l, a, s) => {
                let u = { leftPx: e.leftPx, rightPx: e.rightPx, targetSec: n, index: e.index, label: t };
                return (0, i.jsx)(
                    v,
                    {
                        currentPx: l,
                        trackBackground: s,
                        indicator: u,
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
