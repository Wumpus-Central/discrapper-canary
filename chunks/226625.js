n.d(t, { Z: () => f }), n(388685);
var a = n(54381),
    r = n(473749),
    l = n(120356),
    i = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(236726),
    d = n(442837),
    u = n(481060),
    m = n(607070),
    p = n(779717);
let h = {
    mass: 10,
    tension: 550,
    friction: 140,
};
function f(e) {
    let { className: t, pageMultiplier: n } = e,
        l = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
        [s, f] = r.useState({
            x: 0,
            y: 0,
        }),
        x = r.useMemo(
            () =>
                o().throttle((e) => {
                    if (!l)
                        f({
                            x: (window.innerWidth - e.pageX * n) / 90,
                            y: (window.innerHeight - e.pageY * n) / 90,
                        });
                }, 20),
            [n, l],
        );
    r.useEffect(() => (window.addEventListener("mousemove", x), () => window.removeEventListener("mousemove", x)), [x]);
    let [b, g] = (0, u.q_F)(() => ({
        x: 0,
        y: 0,
        config: h,
    }));
    return (
        r.useEffect(() => {
            g({
                x: s.x,
                y: s.y,
            });
        }, [s.x, s.y, g]),
        (0, a.jsx)(c.animated.div, {
            style: {
                transform: (0, c.to)([b.x, b.y], (e, t) => "translate3d(".concat(e, "px, ").concat(t, "px, 0)")),
            },
            className: i()(p.background, t),
        })
    );
}
