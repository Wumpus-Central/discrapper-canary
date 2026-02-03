n.d(t, {
    A: () => x,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(735438),
    o = n.n(s),
    c = n(92674),
    d = n(311907),
    u = n(397927),
    m = n(775602),
    p = n(314098);
let h = {
    mass: 10,
    tension: 550,
    friction: 140,
};

function x(e) {
    let { className: t, pageMultiplier: n } = e,
        r = (0, d.bG)([m.A], () => m.A.useReducedMotion),
        [s, x] = l.useState({
            x: 0,
            y: 0,
        }),
        g = l.useMemo(
            () =>
                o().throttle((e) => {
                    r ||
                        x({
                            x: (window.innerWidth - e.pageX * n) / 90,
                            y: (window.innerHeight - e.pageY * n) / 90,
                        });
                }, 20),
            [n, r],
        );
    l.useEffect(() => (window.addEventListener("mousemove", g), () => window.removeEventListener("mousemove", g)), [g]);
    let [f, b] = (0, u.zhh)(() => ({
        x: 0,
        y: 0,
        config: h,
    }));
    return (
        l.useEffect(() => {
            b({
                x: s.x,
                y: s.y,
            });
        }, [s.x, s.y, b]),
        (0, a.jsx)(c.animated.div, {
            style: {
                transform: (0, c.to)([f.x, f.y], (e, t) => "translate3d(".concat(e, "px, ").concat(t, "px, 0)")),
            },
            className: i()(p.T, t),
        })
    );
}
