"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    l = n(4208),
    r = n(397927),
    a = n(770178),
    o = n(637707);
let c = Math.ceil(Math.sqrt(115200)),
    d = (c - 240) / 2,
    u = s.forwardRef(function (e, t) {
        let { children: n } = e,
            [u, h] = s.useState(-1),
            A = s.useCallback((e) => {
                h(e.contentRect.width);
            }, []),
            m = (0, a.w)(A, [], { fireOnMount: !0 }),
            [{ shineSpring: p }, g] = (0, r.zhh)(() => ({
                from: { shineSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 170, friction: 38 },
            })),
            _ = s.useCallback(
                (e, t) => {
                    g({ shineSpring: 1, delay: t });
                },
                [g],
            ),
            f = s.useCallback(() => {
                g({ shineSpring: 0, immediate: !0 });
            }, [g]),
            x = s.useMemo(() => {
                let e = (0, i.jsx)(l.animated.div, {
                    className: o.q2,
                    style: {
                        transform: p.to(
                            (e) => `translateX(calc(${e * u}px + ${e * c}px)) translateY(-50%) rotate(45deg)`,
                        ),
                    },
                });
                return n(o.VU, o.Qq, o.Kk, e);
            }, [n, u, p]);
        return (
            s.useImperativeHandle(t, () => ({ onMouseEnter: _, onMouseLeave: f }), [_, f]),
            (0, i.jsx)("div", {
                className: o.iE,
                onMouseEnter: _,
                onMouseLeave: f,
                onFocus: _,
                onBlur: f,
                ref: m,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${d}px` },
                children: x,
            })
        );
    });
