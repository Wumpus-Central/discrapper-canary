n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(108531),
    a = n(397927),
    s = n(770178),
    o = n(180686);
let c = Math.ceil(Math.sqrt(115200)),
    u = (c - 240) / 2,
    d = l.forwardRef(function (e, t) {
        let { children: n } = e,
            [d, f] = l.useState(-1),
            p = l.useCallback((e) => {
                f(e.contentRect.width);
            }, []),
            h = (0, s.w)(p, [], {
                fireOnMount: !0,
            }),
            [{ shineSpring: b }, g] = (0, a.zhh)(() => ({
                from: {
                    shineSpring: 0,
                },
                config: {
                    clamp: !0,
                    mass: 1,
                    tension: 170,
                    friction: 38,
                },
            })),
            m = l.useCallback(
                (e, t) => {
                    g({
                        shineSpring: 1,
                        delay: t,
                    });
                },
                [g],
            ),
            A = l.useCallback(() => {
                g({
                    shineSpring: 0,
                    immediate: !0,
                });
            }, [g]),
            y = l.useMemo(() => {
                let e = (0, r.jsx)(i.animated.div, {
                    className: o.q2,
                    style: {
                        transform: b.to((e) =>
                            "translateX(calc("
                                .concat(e * d, "px + ")
                                .concat(e * c, "px)) translateY(-50%) rotate(45deg)"),
                        ),
                    },
                });
                return n(o.VU, o.Qq, o.Kk, e);
            }, [n, d, b]);
        return (
            l.useImperativeHandle(
                t,
                () => ({
                    onMouseEnter: m,
                    onMouseLeave: A,
                }),
                [m, A],
            ),
            (0, r.jsx)("div", {
                className: o.iE,
                onMouseEnter: m,
                onMouseLeave: A,
                onFocus: m,
                onBlur: A,
                ref: h,
                style: {
                    "--custom-shine-dimensions": "".concat(240, "px"),
                    "--custom-shine-rotated-dimensions-delta": "".concat(u, "px"),
                },
                children: y,
            })
        );
    });
