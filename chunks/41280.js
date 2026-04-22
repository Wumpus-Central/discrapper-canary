n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n.n(r),
    d = n(517738),
    c = n(311907),
    u = n(717421),
    p = n(775602),
    h = n(993843);
let m = { mass: 10, tension: 550, friction: 140 };
function _(e) {
    let { className: t, pageMultiplier: n } = e,
        l = (0, c.bG)([p.A], () => p.A.useReducedMotion),
        [r, _] = s.useState({ x: 0, y: 0 }),
        A = s.useMemo(
            () =>
                o().throttle((e) => {
                    l || _({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, l],
        );
    s.useEffect(() => (window.addEventListener("mousemove", A), () => window.removeEventListener("mousemove", A)), [A]);
    let [f, g] = (0, u.z)(() => ({ x: 0, y: 0, config: m }));
    return (
        s.useEffect(() => {
            g({ x: r.x, y: r.y });
        }, [r.x, r.y, g]),
        (0, i.jsx)(d.animated.div, {
            style: { transform: (0, d.to)([f.x, f.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: a()(h.T, t),
        })
    );
}
