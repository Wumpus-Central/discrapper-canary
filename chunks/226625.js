n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(642128),
    d = n(442837),
    u = n(481060),
    m = n(607070),
    g = n(536837);
let p = {
    mass: 10,
    tension: 550,
    friction: 140
};
function h(e) {
    let { className: t, pageMultiplier: n } = e,
        s = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
        [l, h] = i.useState({
            x: 0,
            y: 0
        }),
        f = i.useMemo(
            () =>
                o().throttle((e) => {
                    if (!s)
                        h({
                            x: (window.innerWidth - e.pageX * n) / 90,
                            y: (window.innerHeight - e.pageY * n) / 90
                        });
                }, 20),
            [n, s]
        );
    i.useEffect(() => (window.addEventListener('mousemove', f), () => window.removeEventListener('mousemove', f)), [f]);
    let [b, N] = (0, u.q_F)(() => ({
        x: 0,
        y: 0,
        config: p
    }));
    return (
        i.useEffect(() => {
            N({
                x: l.x,
                y: l.y
            });
        }, [l.x, l.y, N]),
        (0, r.jsx)(c.animated.div, {
            style: {
                transform: (0, c.to)([b.x, b.y], (e, t) => 'translate3d('.concat(e, 'px, ').concat(t, 'px, 0)'))
            },
            className: a()(g.background, t)
        })
    );
}
