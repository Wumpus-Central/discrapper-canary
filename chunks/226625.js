n.d(t, { Z: () => x }), n(388685);
var a = n(951288),
    i = n(647438),
    l = n(120356),
    r = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(13941),
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
        l = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
        [s, x] = i.useState({
            x: 0,
            y: 0,
        }),
        g = i.useMemo(
            () =>
                o().throttle((e) => {
                    if (!l)
                        x({
                            x: (window.innerWidth - e.pageX * n) / 90,
                            y: (window.innerHeight - e.pageY * n) / 90,
                        });
                }, 20),
            [n, l],
        );
    i.useEffect(() => (window.addEventListener("mousemove", g), () => window.removeEventListener("mousemove", g)), [g]);
    let [f, b] = (0, u.q_F)(() => ({
        x: 0,
        y: 0,
        config: h,
    }));
    return (
        i.useEffect(() => {
            b({
                x: s.x,
                y: s.y,
            });
        }, [s.x, s.y, b]),
        (0, a.jsx)(c.animated.div, {
            style: {
                transform: (0, c.to)([f.x, f.y], (e, t) => "translate3d(".concat(e, "px, ").concat(t, "px, 0)")),
            },
            className: r()(p.background, t),
        })
    );
}
