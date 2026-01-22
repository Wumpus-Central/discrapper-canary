n.d(t, {
    A: () => f,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(735438),
    o = n.n(s),
    c = n(108531),
    d = n(311907),
    u = n(397927),
    m = n(775602),
    p = n(314098);
let h = {
    mass: 10,
    tension: 550,
    friction: 140,
};

function f(e) {
    let { className: t, pageMultiplier: n } = e,
        i = (0, d.bG)([m.A], () => m.A.useReducedMotion),
        [s, f] = l.useState({
            x: 0,
            y: 0,
        }),
        x = l.useMemo(
            () =>
                o().throttle((e) => {
                    i ||
                        f({
                            x: (window.innerWidth - e.pageX * n) / 90,
                            y: (window.innerHeight - e.pageY * n) / 90,
                        });
                }, 20),
            [n, i],
        );
    l.useEffect(() => (window.addEventListener("mousemove", x), () => window.removeEventListener("mousemove", x)), [x]);
    let [b, g] = (0, u.zhh)(() => ({
        x: 0,
        y: 0,
        config: h,
    }));
    return (
        l.useEffect(() => {
            g({
                x: s.x,
                y: s.y,
            });
        }, [s.x, s.y, g]),
        (0, a.jsx)(c.animated.div, {
            style: {
                transform: (0, c.to)([b.x, b.y], (e, t) => "translate3d(".concat(e, "px, ").concat(t, "px, 0)")),
            },
            className: r()(p.T, t),
        })
    );
}
