n.d(t, { Z: () => s }), n(388685);
var r = n(192379),
    i = n(442837),
    o = n(25251),
    a = n(731896);
let s = (e) => {
    let [t, n] = r.useState(e),
        [s, l] = r.useState(o.Z.getProfileEffectById(e));
    (0, a.V)(e);
    let c = (0, i.e7)([o.Z], () => o.Z.profileEffects),
        u = c.reduce((t, n, r) => (n.id === e && (t = r), t), 0),
        [, d] = r.useState(u),
        f = r.useRef(u);
    return (
        r.useEffect(() => {
            n(e), l(o.Z.getProfileEffectById(e));
        }, [e, c]),
        {
            increment: () => {
                let e = (f.current + 1) % c.length;
                (f.current = e), d(e), n(c[e].id), l(c[e]);
            },
            decrement: () => {
                let e = 0 === f.current ? c.length - 1 : f.current - 1;
                (f.current = e), d(e), n(c[e].id), l(c[e]);
            },
            id: t,
            preset: s
        }
    );
};
