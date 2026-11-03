t.d(e, { A: () => m });
var i = t(477900),
    l = t(582128),
    o = t(717421),
    r = t(503698),
    a = t.n(r),
    s = t(29477),
    u = t(939249),
    d = t(834730),
    c = t(613373);
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
            { label: k, targetSec: E, leftPx: M, rightPx: _, index: b } = r,
            [j, w] = l.useState(!1),
            S = M - 4,
            B = e >= S ? Math.min(1, (e - S) / (_ - S)) : 0,
            K = 0 === b && !v,
            { fill: y } = (0, o.z)({
                fill: 100 * B,
                config: h,
                onRest: () => {
                    B <= 0 && w(!1);
                },
                onStart: () => {
                    w(!0);
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
        return (0, i.jsxs)(s.animated.div, {
            className: a()(x.ck, { [x.a]: K && j, [x.C9]: !K && j }),
            style: {
                left: p ? f.to((n) => M - n) : M,
                "--custom-indicator-size": p ? f.to((n) => `${26 + 2 * n}px`) : "26px",
                "--custom-indicator-fill": y.to((n) => n),
                backgroundColor: t,
            },
            onMouseDown: A,
            children: [
                (0, i.jsx)(u.D, {
                    className: x.E6,
                    "data-testid": "ad-video-reward-indicator",
                    onClick: R,
                    onMouseDown: A,
                    onMouseEnter: P,
                    onMouseLeave: C,
                    children: m,
                }),
                (0, i.jsxs)("div", {
                    className: x.Ru,
                    role: "tooltip",
                    "aria-label": null != k ? `${(0, c.rB)(E)} - ${k}` : (0, c.rB)(E),
                    children: [
                        (0, i.jsx)(d.E, {
                            variant: "text-xs/normal",
                            color: "text-overlay-light",
                            children: (0, c.rB)(E),
                        }),
                        null != k &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("span", { className: x.AE, "aria-hidden": "true" }),
                                    (0, i.jsx)(d.E, {
                                        variant: "text-xs/normal",
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
        [u, d] = l.useState(null),
        c = l.useRef(null),
        [{ expansion: x }, h] = (0, o.z)(() => ({
            expansion: 0,
            config: v,
            onRest: () => {
                null == c.current && d(null);
            },
        })),
        m = l.useCallback(
            (n) => {
                ((c.current = n), null != n ? (d(n), h({ expansion: 4 })) : h({ expansion: 0 }));
            },
            [h],
        ),
        f = l.useMemo(() => [{ index: 0, timeSec: e, widthPx: 32, gapPx: 4, align: "end", clickable: s }], [e, s]),
        g = l.useCallback(
            (n, l, o, s) => {
                let d = { leftPx: n.leftPx, rightPx: n.rightPx, targetSec: e, index: n.index, label: t };
                return (0, i.jsx)(
                    p,
                    {
                        currentPx: l,
                        trackBackground: s,
                        indicator: d,
                        isAnimated: u === n.index,
                        isCompleted: r,
                        icon: a,
                        expansionSpring: x,
                        onMouseEnter: () => m(n.index),
                        onMouseLeave: () => m(null),
                        onClick: o,
                    },
                    `indicator-${n.index}`,
                );
            },
            [e, t, u, r, a, x, m],
        );
    return { indicators: f, animatingIndex: u, expansionSpring: x, hoverExpansionPx: 4, renderIndicator: g };
}
