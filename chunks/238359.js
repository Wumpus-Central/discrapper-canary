n.d(t, { D: () => d }), n(388685);
var r = n(647438),
    l = n(442837),
    a = n(597688),
    s = n(1870),
    i = n(212161),
    o = n(365943),
    c = n(25251);
let u = (e) =>
        (0, i.H)(e) && e.items.length > 0 && null != e.items[0].id && null == c.Z.getProfileEffectById(e.items[0].id),
    d = () => {
        let e = (0, l.e7)([a.Z], () => a.Z.products),
            t = (0, l.e7)([s.Z], () => s.Z.purchases);
        r.useEffect(() => {
            [...e.values(), ...t.values()].some(u) && (0, o.t)(!0);
        }, [e, t]);
    };
