(r.d(t, { D: () => d }), r(388685));
var n = r(73800),
    l = r(442837),
    i = r(597688),
    a = r(1870),
    o = r(212161),
    s = r(365943),
    c = r(25251);
let u = (e) => (0, o.H)(e) && e.items.length > 0 && null != e.items[0].id && null == c.Z.getProfileEffectById(e.items[0].id),
    d = () => {
        let e = (0, l.e7)([i.Z], () => i.Z.products),
            t = (0, l.e7)([a.Z], () => a.Z.purchases);
        n.useEffect(() => {
            [...e.values(), ...t.values()].some(u) && (0, s.t)(!0);
        }, [e, t]);
    };
