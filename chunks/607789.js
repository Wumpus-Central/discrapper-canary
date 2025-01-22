var i = r(47120);
var a = r(724458);
var o = r(192379),
    s = r(442837),
    l = r(25251),
    u = r(731896);
let c = (e) => {
    let [n, r] = o.useState(e),
        [i, a] = o.useState(l.Z.getProfileEffectById(e));
    (0, u.V)(e);
    let c = (0, s.e7)([l.Z], () => l.Z.profileEffects),
        d = c.reduce((n, r, i) => (r.id === e && (n = i), n), 0),
        [, f] = o.useState(d),
        p = o.useRef(d);
    return (
        o.useEffect(() => {
            r(e), a(l.Z.getProfileEffectById(e));
        }, [e, c]),
        {
            increment: () => {
                let e = (p.current + 1) % c.length;
                (p.current = e), f(e), r(c[e].id), a(c[e]);
            },
            decrement: () => {
                let e = 0 === p.current ? c.length - 1 : p.current - 1;
                (p.current = e), f(e), r(c[e].id), a(c[e]);
            },
            id: n,
            preset: i
        }
    );
};
n.Z = c;
