"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    l = n(382222),
    a = n(397927),
    r = n(770178),
    o = n(637707);
let c = Math.ceil(Math.sqrt(115200)),
    d = (c - 240) / 2,
    u = s.forwardRef(function (e, t) {
        let { children: n } = e,
            [u, h] = s.useState(-1),
            A = s.useCallback((e) => {
                h(e.contentRect.width);
            }, []),
            m = (0, r.w)(A, [], { fireOnMount: !0 }),
            [{ shineSpring: _ }, p] = (0, a.zhh)(() => ({
                from: { shineSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 170, friction: 38 },
            })),
            g = s.useCallback(
                (e, t) => {
                    p({ shineSpring: 1, delay: t });
                },
                [p],
            ),
            f = s.useCallback(() => {
                p({ shineSpring: 0, immediate: !0 });
            }, [p]),
            x = s.useMemo(() => {
                let e = (0, i.jsx)(l.animated.div, {
                    className: o.q2,
                    style: {
                        transform: _.to(
                            (e) => `translateX(calc(${e * u}px + ${e * c}px)) translateY(-50%) rotate(45deg)`,
                        ),
                    },
                });
                return n(o.VU, o.Qq, o.Kk, e);
            }, [n, u, _]);
        return (
            s.useImperativeHandle(t, () => ({ onMouseEnter: g, onMouseLeave: f }), [g, f]),
            (0, i.jsx)("div", {
                className: o.iE,
                onMouseEnter: g,
                onMouseLeave: f,
                onFocus: g,
                onBlur: f,
                ref: m,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${d}px` },
                children: x,
            })
        );
    });
