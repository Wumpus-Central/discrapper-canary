n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(620792),
    a = n(481060),
    o = n(393903),
    s = n(595523);
let c = Math.ceil(Math.sqrt(115200)),
    u = (c - 240) / 2,
    d = i.forwardRef(function (e, t) {
        let { children: n } = e,
            [d, f] = i.useState(-1),
            h = i.useCallback((e) => {
                f(e.contentRect.width);
            }, []),
            p = (0, o.y)(h, [], { fireOnMount: !0 }),
            [{ shineSpring: g }, b] = (0, a.q_F)(() => ({
                from: { shineSpring: 0 },
                config: {
                    clamp: !0,
                    mass: 1,
                    tension: 170,
                    friction: 38,
                },
            })),
            m = i.useCallback(
                (e, t) => {
                    b({
                        shineSpring: 1,
                        delay: t,
                    });
                },
                [b],
            ),
            y = i.useCallback(() => {
                b({
                    shineSpring: 0,
                    immediate: !0,
                });
            }, [b]),
            O = i.useMemo(() => {
                let e = (0, r.jsx)(l.animated.div, {
                    className: s.shine,
                    style: {
                        transform: g.to((e) =>
                            "translateX(calc("
                                .concat(e * d, "px + ")
                                .concat(e * c, "px)) translateY(-50%) rotate(45deg)"),
                        ),
                    },
                });
                return n(s.withGradient, s.text, s.icon, e);
            }, [n, d, g]);
        return (
            i.useImperativeHandle(
                t,
                () => ({
                    onMouseEnter: m,
                    onMouseLeave: y,
                }),
                [m, y],
            ),
            (0, r.jsx)("div", {
                className: s.wrapper,
                onMouseEnter: m,
                onMouseLeave: y,
                onFocus: m,
                onBlur: y,
                ref: p,
                style: {
                    "--custom-shine-dimensions": "".concat(240, "px"),
                    "--custom-shine-rotated-dimensions-delta": "".concat(u, "px"),
                },
                children: O,
            })
        );
    });
