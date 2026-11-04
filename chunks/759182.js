t.d(e, { A: () => m });
var o = t(477900),
    i = t(582128),
    l = t(717421),
    r = t(503698),
    a = t.n(r),
    s = t(736819),
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
            { label: k, targetSec: b, leftPx: E, rightPx: M, index: _ } = r,
            [j, w] = i.useState(!1),
            S = E - 4,
            y = e >= S ? Math.min(1, (e - S) / (M - S)) : 0,
            B = 0 === _ && !v,
            { fill: K } = (0, l.z)({
                fill: 100 * y,
                config: h,
                onRest: () => {
                    y <= 0 && w(!1);
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
        return (0, o.jsxs)(s.animated.div, {
            className: a()(x.ck, { [x.a]: B && j, [x.C9]: !B && j }),
            style: {
                left: p ? f.to((n) => E - n) : E,
                "--custom-indicator-size": p ? f.to((n) => `${26 + 2 * n}px`) : "26px",
                "--custom-indicator-fill": K.to((n) => n),
                backgroundColor: t,
            },
            onMouseDown: A,
            children: [
                (0, o.jsx)(u.D, {
                    className: x.E6,
                    "data-testid": "ad-video-reward-indicator",
                    onClick: R,
                    onMouseDown: A,
                    onMouseEnter: P,
                    onMouseLeave: C,
                    children: m,
                }),
                (0, o.jsxs)("div", {
                    className: x.Ru,
                    role: "tooltip",
                    "aria-label": null != k ? `${(0, c.rB)(b)} - ${k}` : (0, c.rB)(b),
                    children: [
                        (0, o.jsx)(d.E, {
                            variant: "body-xs/normal",
                            color: "text-overlay-light",
                            children: (0, c.rB)(b),
                        }),
                        null != k &&
                            (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, o.jsx)("span", { className: x.AE, "aria-hidden": "true" }),
                                    (0, o.jsx)(d.E, {
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
        [u, d] = i.useState(null),
        c = i.useRef(null),
        [{ expansion: x }, h] = (0, l.z)(() => ({
            expansion: 0,
            config: v,
            onRest: () => {
                null == c.current && d(null);
            },
        })),
        m = i.useCallback(
            (n) => {
                ((c.current = n), null != n ? (d(n), h({ expansion: 4 })) : h({ expansion: 0 }));
            },
            [h],
        ),
        f = i.useMemo(() => [{ index: 0, timeSec: e, widthPx: 32, gapPx: 4, align: "end", clickable: s }], [e, s]),
        g = i.useCallback(
            (n, i, l, s) => {
                let d = { leftPx: n.leftPx, rightPx: n.rightPx, targetSec: e, index: n.index, label: t };
                return (0, o.jsx)(
                    p,
                    {
                        currentPx: i,
                        trackBackground: s,
                        indicator: d,
                        isAnimated: u === n.index,
                        isCompleted: r,
                        icon: a,
                        expansionSpring: x,
                        onMouseEnter: () => m(n.index),
                        onMouseLeave: () => m(null),
                        onClick: l,
                    },
                    `indicator-${n.index}`,
                );
            },
            [e, t, u, r, a, x, m],
        );
    return { indicators: f, animatingIndex: u, expansionSpring: x, hoverExpansionPx: 4, renderIndicator: g };
}
