n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(790519),
    o = n(481060),
    a = n(393903),
    s = n(661977);
let c = Math.ceil(Math.sqrt(115200)),
    u = (c - 240) / 2,
    d = i.forwardRef(function (e, t) {
        let { children: n } = e,
            [d, f] = i.useState(-1),
            p = i.useCallback((e) => {
                f(e.contentRect.width);
            }, []),
            h = (0, a.y)(p, [], { fireOnMount: !0 }),
            [{ shineSpring: g }, m] = (0, o.q_F)(() => ({
                from: { shineSpring: 0 },
                config: {
                    clamp: !0,
                    mass: 1,
                    tension: 170,
                    friction: 38,
                },
            })),
            b = i.useCallback(
                (e, t) => {
                    m({
                        shineSpring: 1,
                        delay: t,
                    });
                },
                [m],
            ),
            _ = i.useCallback(() => {
                m({
                    shineSpring: 0,
                    immediate: !0,
                });
            }, [m]),
            y = i.useMemo(() => {
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
                    onMouseEnter: b,
                    onMouseLeave: _,
                }),
                [b, _],
            ),
            (0, r.jsx)("div", {
                className: s.wrapper,
                onMouseEnter: b,
                onMouseLeave: _,
                onFocus: b,
                onBlur: _,
                ref: h,
                style: {
                    "--custom-shine-dimensions": "".concat(240, "px"),
                    "--custom-shine-rotated-dimensions-delta": "".concat(u, "px"),
                },
                children: y,
            })
        );
    });
