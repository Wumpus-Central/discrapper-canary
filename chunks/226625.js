n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(202841),
    u = n(442837),
    d = n(481060),
    f = n(607070),
    _ = n(901976);
let p = 90,
    h = 20,
    m = {
        mass: 10,
        tension: 550,
        friction: 140,
    };
function g(e) {
    let { className: t, pageMultiplier: n } = e,
        a = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        [s, g] = i.useState({
            x: 0,
            y: 0,
        }),
        E = i.useMemo(
            () =>
                l().throttle((e) => {
                    if (!a)
                        g({
                            x: (window.innerWidth - e.pageX * n) / p,
                            y: (window.innerHeight - e.pageY * n) / p,
                        });
                }, h),
            [n, a],
        );
    i.useEffect(() => (window.addEventListener("mousemove", E), () => window.removeEventListener("mousemove", E)), [E]);
    let [b, y] = (0, d.q_F)(() => ({
        x: 0,
        y: 0,
        config: m,
    }));
    return (
        i.useEffect(() => {
            y({
                x: s.x,
                y: s.y,
            });
        }, [s.x, s.y, y]),
        (0, r.jsx)(c.animated.div, {
            style: {
                transform: (0, c.to)([b.x, b.y], (e, t) => "translate3d(".concat(e, "px, ").concat(t, "px, 0)")),
            },
            className: o()(_.background, t),
        })
    );
}
