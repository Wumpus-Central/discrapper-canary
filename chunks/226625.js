n.d(t, { Z: () => x }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(392711),
    s = n.n(o),
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
        [o, x] = r.useState({
            x: 0,
            y: 0,
        }),
        f = r.useMemo(
            () =>
                s().throttle((e) => {
                    if (!l)
                        x({
                            x: (window.innerWidth - e.pageX * n) / 90,
                            y: (window.innerHeight - e.pageY * n) / 90,
                        });
                }, 20),
            [n, l],
        );
    r.useEffect(() => (window.addEventListener("mousemove", f), () => window.removeEventListener("mousemove", f)), [f]);
    let [b, g] = (0, u.q_F)(() => ({
        x: 0,
        y: 0,
        config: h,
    }));
    return (
        r.useEffect(() => {
            g({
                x: o.x,
                y: o.y,
            });
        }, [o.x, o.y, g]),
        (0, a.jsx)(c.animated.div, {
            style: {
                transform: (0, c.to)([b.x, b.y], (e, t) => "translate3d(".concat(e, "px, ").concat(t, "px, 0)")),
            },
            className: i()(p.background, t),
        })
    );
}
