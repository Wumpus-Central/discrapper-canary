n.d(t, { Z: () => o }), n(47120), n(724458);
var i = n(192379),
    r = n(442837),
    a = n(25251),
    s = n(731896);
let o = (e) => {
    let [t, n] = i.useState(e),
        [o, l] = i.useState(a.Z.getProfileEffectById(e));
    (0, s.V)(e);
    let u = (0, r.e7)([a.Z], () => a.Z.profileEffects),
        c = u.reduce((t, n, i) => (n.id === e && (t = i), t), 0),
        [, d] = i.useState(c),
        f = i.useRef(c);
    return (
        i.useEffect(() => {
            n(e), l(a.Z.getProfileEffectById(e));
        }, [e, u]),
        {
            increment: () => {
                let e = (f.current + 1) % u.length;
                (f.current = e), d(e), n(u[e].id), l(u[e]);
            },
            decrement: () => {
                let e = 0 === f.current ? u.length - 1 : f.current - 1;
                (f.current = e), d(e), n(u[e].id), l(u[e]);
            },
            id: t,
            preset: o
        }
    );
};
