n.d(t, { A: () => p });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(735438),
    o = n.n(r),
    d = n(92674),
    c = n(311907),
    u = n(397927),
    m = n(775602),
    h = n(314098);
let x = { mass: 10, tension: 550, friction: 140 };
function p(e) {
    let { className: t, pageMultiplier: n } = e,
        i = (0, c.bG)([m.A], () => m.A.useReducedMotion),
        [r, p] = s.useState({ x: 0, y: 0 }),
        g = s.useMemo(
            () =>
                o().throttle((e) => {
                    i || p({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, i],
        );
    s.useEffect(() => (window.addEventListener("mousemove", g), () => window.removeEventListener("mousemove", g)), [g]);
    let [_, f] = (0, u.zhh)(() => ({ x: 0, y: 0, config: x }));
    return (
        s.useEffect(() => {
            f({ x: r.x, y: r.y });
        }, [r.x, r.y, f]),
        (0, a.jsx)(d.animated.div, {
            style: { transform: (0, d.to)([_.x, _.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: l()(h.T, t),
        })
    );
}
