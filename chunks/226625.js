n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    c = n(642128),
    d = n(442837),
    u = n(481060),
    h = n(607070),
    m = n(982717);
let p = {
    mass: 10,
    tension: 550,
    friction: 140
};
function g(e) {
    let { className: t, pageMultiplier: n } = e,
        r = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        [s, g] = l.useState({
            x: 0,
            y: 0
        }),
        _ = l.useMemo(
            () =>
                o().throttle((e) => {
                    if (!r)
                        g({
                            x: (window.innerWidth - e.pageX * n) / 90,
                            y: (window.innerHeight - e.pageY * n) / 90
                        });
                }, 20),
            [n, r]
        );
    l.useEffect(() => (window.addEventListener('mousemove', _), () => window.removeEventListener('mousemove', _)), [_]);
    let [f, E] = (0, u.q_F)(() => ({
        x: 0,
        y: 0,
        config: p
    }));
    return (
        l.useEffect(() => {
            E({
                x: s.x,
                y: s.y
            });
        }, [s.x, s.y, E]),
        (0, i.jsx)(c.animated.div, {
            style: {
                transform: (0, c.to)([f.x, f.y], (e, t) => 'translate3d('.concat(e, 'px, ').concat(t, 'px, 0)'))
            },
            className: a()(m.background, t)
        })
    );
}
