n.d(t, { D: () => d }), n(388685);
var r = n(73800),
    l = n(442837),
    a = n(597688),
    i = n(1870),
    o = n(212161),
    s = n(365943),
    c = n(25251);
let u = (e) =>
        (0, o.H)(e) && e.items.length > 0 && null != e.items[0].id && null == c.Z.getProfileEffectById(e.items[0].id),
    d = () => {
        let e = (0, l.e7)([a.Z], () => a.Z.products),
            t = (0, l.e7)([i.Z], () => i.Z.purchases);
        r.useEffect(() => {
            [...e.values(), ...t.values()].some(u) && (0, s.t)(!0);
        }, [e, t]);
    };
