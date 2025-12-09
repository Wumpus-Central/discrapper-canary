n.d(t, { Z: () => x }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(392711),
    o = n.n(s),
    c = n(205120),
    d = n(442837),
    u = n(481060),
    m = n(607070),
    p = n(901976);
let h = {
    mass: 10,
    tension: 550,
    friction: 140,
};
function x(e) {
    let { className: t, pageMultiplier: n } = e,
        i = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
        [s, x] = r.useState({
            x: 0,
            y: 0,
        }),
        f = r.useMemo(
            () =>
                o().throttle((e) => {
                    if (!i)
                        x({
                            x: (window.innerWidth - e.pageX * n) / 90,
                            y: (window.innerHeight - e.pageY * n) / 90,
                        });
                }, 20),
            [n, i],
        );
    r.useEffect(() => (window.addEventListener("mousemove", f), () => window.removeEventListener("mousemove", f)), [f]);
    let [g, b] = (0, u.q_F)(() => ({
        x: 0,
        y: 0,
        config: h,
    }));
    return (
        r.useEffect(() => {
            b({
                x: s.x,
                y: s.y,
            });
        }, [s.x, s.y, b]),
        (0, a.jsx)(c.animated.div, {
            style: {
                transform: (0, c.to)([g.x, g.y], (e, t) => "translate3d(".concat(e, "px, ").concat(t, "px, 0)")),
            },
            className: l()(p.background, t),
        })
    );
}
