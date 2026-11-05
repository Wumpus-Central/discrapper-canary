t.d(e, { A: () => m });
var l = t(477900),
    o = t(582128),
    i = t(717421),
    r = t(503698),
    a = t.n(r),
    s = t(120692),
    u = t(939249),
    d = t(834730),
    c = t(91982);
t(500522);
var x = t(668327);
let h = { duration: 250 },
    p = function (n) {
        let {
                currentPx: e,
                trackBackground: t,
                indicator: r,
                isAnimated: p,
                isCompleted: v,
                icon: m,
                expansionSpring: f,
                onClick: g,
                onMouseEnter: P,
                onMouseLeave: C,
            } = n,
            { label: k, targetSec: b, leftPx: E, rightPx: M, index: S } = r,
            [_, j] = o.useState(!1),
            w = E - 4,
            y = e >= w ? Math.min(1, (e - w) / (M - w)) : 0,
            B = 0 === S && !v,
            { fill: K } = (0, i.z)({
                fill: 100 * y,
                config: h,
                onRest: () => {
                    y <= 0 && j(!1);
                },
                onStart: () => {
                    j(!0);
                },
            });
        function A(n) {
            return n.stopPropagation();
        }
        let R =
            null != g
                ? (n) => {
                      (n.stopPropagation(), g());
                  }
                : void 0;
        return (0, l.jsxs)(s.animated.div, {
            className: a()(x.ck, { [x.a]: B && _, [x.C9]: !B && _ }),
            style: {
                left: p ? f.to((n) => E - n) : E,
                "--custom-indicator-size": p ? f.to((n) => `${26 + 2 * n}px`) : "26px",
                "--custom-indicator-fill": K.to((n) => n),
                backgroundColor: t,
            },
            onMouseDown: A,
            children: [
                (0, l.jsx)(u.D, {
                    className: x.E6,
                    "data-testid": "ad-video-reward-indicator",
                    onClick: R,
                    onMouseDown: A,
                    onMouseEnter: P,
                    onMouseLeave: C,
                    children: m,
                }),
                (0, l.jsxs)("div", {
                    className: x.Ru,
                    role: "tooltip",
                    "aria-label": null != k ? `${(0, c.rB)(b)} - ${k}` : (0, c.rB)(b),
                    children: [
                        (0, l.jsx)(d.E, {
                            variant: "body-xs/normal",
                            color: "text-overlay-light",
                            children: (0, c.rB)(b),
                        }),
                        null != k &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("span", { className: x.AE, "aria-hidden": "true" }),
                                    (0, l.jsx)(d.E, {
                                        variant: "body-xs/normal",
                                        color: "text-overlay-light",
                                        children: k,
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    },
    v = { tension: 500, friction: 30, clamp: !0 };
function m(n) {
    let { targetSec: e, label: t, isCompleted: r, icon: a, clickable: s = !1 } = n,
        [u, d] = o.useState(null),
        c = o.useRef(null),
        [{ expansion: x }, h] = (0, i.z)(() => ({
            expansion: 0,
            config: v,
            onRest: () => {
                null == c.current && d(null);
            },
        })),
        m = o.useCallback(
            (n) => {
                ((c.current = n), null != n ? (d(n), h({ expansion: 4 })) : h({ expansion: 0 }));
            },
            [h],
        ),
        f = o.useMemo(() => [{ index: 0, timeSec: e, widthPx: 32, gapPx: 4, align: "end", clickable: s }], [e, s]),
        g = o.useCallback(
            (n, o, i, s) => {
                let d = { leftPx: n.leftPx, rightPx: n.rightPx, targetSec: e, index: n.index, label: t };
                return (0, l.jsx)(
                    p,
                    {
                        currentPx: o,
                        trackBackground: s,
                        indicator: d,
                        isAnimated: u === n.index,
                        isCompleted: r,
                        icon: a,
                        expansionSpring: x,
                        onMouseEnter: () => m(n.index),
                        onMouseLeave: () => m(null),
                        onClick: i,
                    },
                    `indicator-${n.index}`,
                );
            },
            [e, t, u, r, a, x, m],
        );
    return { indicators: f, animatingIndex: u, expansionSpring: x, hoverExpansionPx: 4, renderIndicator: g };
}
