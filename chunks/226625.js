n.d(t, { Z: () => h }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(392711),
    o = n.n(a),
    c = n(200100),
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
        [a, h] = r.useState({
            x: 0,
            y: 0
        }),
        f = r.useMemo(
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
    r.useEffect(() => (window.addEventListener('mousemove', f), () => window.removeEventListener('mousemove', f)), [f]);
    let [b, _] = (0, u.q_F)(() => ({
        x: 0,
        y: 0,
        config: p
    }));
    return (
        r.useEffect(() => {
            _({
                x: a.x,
                y: a.y
            });
        }, [a.x, a.y, _]),
        (0, i.jsx)(c.animated.div, {
            style: {
                transform: (0, c.to)([b.x, b.y], (e, t) => 'translate3d('.concat(e, 'px, ').concat(t, 'px, 0)'))
            },
            className: l()(g.background, t)
        })
    );
}
