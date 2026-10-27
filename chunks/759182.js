t.d(n, { A: () => h });
var i = t(477900),
    a = t(582128),
    o = t(717421),
    r = t(503698),
    l = t.n(r),
    s = t(399513),
    u = t(939249),
    d = t(834730),
    c = t(613373);
t(500522);
var x = t(668327);
let p = { duration: 250 },
    m = function (e) {
        let {
                currentPx: n,
                indicator: t,
                isAnimated: r,
                isCompleted: m,
                icon: v,
                expansionSpring: h,
                onClick: f,
                onMouseEnter: P,
                onMouseLeave: g,
            } = e,
            { label: C, targetSec: k, leftPx: E, rightPx: M, index: j } = t,
            [b, w] = a.useState(!1),
            K = E - 4,
            S = n >= K ? Math.min(1, (n - K) / (M - K)) : 0,
            A = 0 === j && !m,
            { fill: B } = (0, o.z)({
                fill: 100 * S,
                config: p,
                onRest: () => {
                    S <= 0 && w(!1);
                },
                onStart: () => {
                    w(!0);
                },
            });
        function R(e) {
            return e.stopPropagation();
        }
        let y =
            null != f
                ? (e) => {
                      (e.stopPropagation(), f());
                  }
                : void 0;
        return (0, i.jsxs)(s.animated.div, {
            className: l()(x.ck, { [x.a]: A && b, [x.C9]: !A && b }),
            style: {
                left: r ? h.to((e) => E - e) : E,
                "--custom-indicator-size": r ? h.to((e) => `${26 + 2 * e}px`) : "26px",
                "--custom-indicator-fill": B.to((e) => e),
            },
            onMouseDown: R,
            children: [
                (0, i.jsx)(u.D, {
                    className: x.E6,
                    "data-testid": "ad-video-reward-indicator",
                    onClick: y,
                    onMouseDown: R,
                    onMouseEnter: P,
                    onMouseLeave: g,
                    children: v,
                }),
                (0, i.jsxs)("div", {
                    className: x.Ru,
                    role: "tooltip",
                    "aria-label": null != C ? `${(0, c.rB)(k)} - ${C}` : (0, c.rB)(k),
                    children: [
                        (0, i.jsx)(d.E, {
                            variant: "text-xs/normal",
                            color: "text-overlay-light",
                            children: (0, c.rB)(k),
                        }),
                        null != C &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("span", { className: x.AE, "aria-hidden": "true" }),
                                    (0, i.jsx)(d.E, {
                                        variant: "text-xs/normal",
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
    v = { tension: 500, friction: 30, clamp: !0 };
function h(e) {
    let { targetSec: n, label: t, isCompleted: r, icon: l, clickable: s = !1 } = e,
        [u, d] = a.useState(null),
        c = a.useRef(null),
        [{ expansion: x }, p] = (0, o.z)(() => ({
            expansion: 0,
            config: v,
            onRest: () => {
                null == c.current && d(null);
            },
        })),
        h = a.useCallback(
            (e) => {
                ((c.current = e), null != e ? (d(e), p({ expansion: 4 })) : p({ expansion: 0 }));
            },
            [p],
        ),
        f = a.useMemo(() => [{ index: 0, timeSec: n, widthPx: 32, gapPx: 4, align: "end", clickable: s }], [n, s]),
        P = a.useCallback(
            (e, a, o) => {
                let s = { leftPx: e.leftPx, rightPx: e.rightPx, targetSec: n, index: e.index, label: t };
                return (0, i.jsx)(
                    m,
                    {
                        currentPx: a,
                        indicator: s,
                        isAnimated: u === e.index,
                        isCompleted: r,
                        icon: l,
                        expansionSpring: x,
                        onMouseEnter: () => h(e.index),
                        onMouseLeave: () => h(null),
                        onClick: o,
                    },
                    `indicator-${e.index}`,
                );
            },
            [n, t, u, r, l, x, h],
        );
    return { indicators: f, animatingIndex: u, expansionSpring: x, hoverExpansionPx: 4, renderIndicator: P };
}
