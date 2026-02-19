"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    l = n(475539),
    r = n(397927),
    a = n(770178),
    o = n(180686);
let c = Math.ceil(Math.sqrt(115200)),
    d = (c - 240) / 2,
    u = s.forwardRef(function (e, t) {
        let { children: n } = e,
            [u, h] = s.useState(-1),
            A = s.useCallback((e) => {
                h(e.contentRect.width);
            }, []),
            p = (0, a.w)(A, [], { fireOnMount: !0 }),
            [{ shineSpring: g }, m] = (0, r.zhh)(() => ({
                from: { shineSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 170, friction: 38 },
            })),
            _ = s.useCallback(
                (e, t) => {
                    m({ shineSpring: 1, delay: t });
                },
                [m],
            ),
            f = s.useCallback(() => {
                m({ shineSpring: 0, immediate: !0 });
            }, [m]),
            x = s.useMemo(() => {
                let e = (0, i.jsx)(l.animated.div, {
                    className: o.q2,
                    style: {
                        transform: g.to(
                            (e) => `translateX(calc(${e * u}px + ${e * c}px)) translateY(-50%) rotate(45deg)`,
                        ),
                    },
                });
                return n(o.VU, o.Qq, o.Kk, e);
            }, [n, u, g]);
        return (
            s.useImperativeHandle(t, () => ({ onMouseEnter: _, onMouseLeave: f }), [_, f]),
            (0, i.jsx)("div", {
                className: o.iE,
                onMouseEnter: _,
                onMouseLeave: f,
                onFocus: _,
                onBlur: f,
                ref: p,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${d}px` },
                children: x,
            })
        );
    });
