n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(950035),
    l = n(481060),
    c = n(596687);
let u = 25,
    d = 2,
    f = 150;
function _(e) {
    let { children: t, shouldAnimate: n, className: o, pauseDuration: _ = d, scrollSpeed: p = u } = e,
        h = i.useRef(null),
        m = i.useRef(null),
        g = () => {
            let e = h.current,
                t = m.current;
            if (null == e || null == t)
                return {
                    distance: 0,
                    duration: 0
                };
            let n = e.offsetWidth,
                r = t.scrollWidth - n;
            if (r <= 0 || p <= 0)
                return {
                    distance: 0,
                    duration: 0
                };
            let i = (r / p) * 1000;
            return {
                distance: r,
                duration: i
            };
        },
        E = (0, l.q_F)(
            {
                from: { x: 0 },
                async to(e) {
                    if (
                        (await e({
                            x: 0,
                            config: { duration: 0 }
                        }),
                        !n)
                    )
                        return;
                    let { distance: t, duration: r } = g();
                    t <= 0 ||
                        (await e({
                            x: -t,
                            config: { duration: r },
                            delay: f
                        }),
                        await new Promise((e) => setTimeout(e, 1000 * _)),
                        await e({
                            x: 0,
                            config: { duration: r }
                        }));
                },
                reset: !n
            },
            'animate-always'
        );
    return (0, r.jsx)('div', {
        ref: h,
        className: a()(c.container, o),
        children: (0, r.jsx)(s.animated.div, {
            ref: m,
            className: c.marquee,
            style: E,
            children: t
        })
    });
}
