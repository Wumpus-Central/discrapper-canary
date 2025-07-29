(r.d(t, { D: () => d }), r(388685));
var n = r(73800),
    i = r(442837),
    l = r(597688),
    o = r(1870),
    s = r(212161),
    c = r(365943),
    a = r(25251);
let u = (e) => (0, s.H)(e) && e.items.length > 0 && null != e.items[0].id && null == a.Z.getProfileEffectById(e.items[0].id),
    d = () => {
        let e = (0, i.e7)([l.Z], () => l.Z.products),
            t = (0, i.e7)([o.Z], () => o.Z.purchases);
        n.useEffect(() => {
            [...e.values(), ...t.values()].some(u) && (0, c.t)(!0);
        }, [e, t]);
    };
