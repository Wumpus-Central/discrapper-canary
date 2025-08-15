r.d(t, { D: () => d }), r(388685);
var n = r(647438),
    l = r(442837),
    a = r(597688),
    i = r(1870),
    o = r(212161),
    s = r(365943),
    c = r(25251);
let u = (e) =>
        (0, o.H)(e) && e.items.length > 0 && null != e.items[0].id && null == c.Z.getProfileEffectById(e.items[0].id),
    d = () => {
        let e = (0, l.e7)([a.Z], () => a.Z.products),
            t = (0, l.e7)([i.Z], () => i.Z.purchases);
        n.useEffect(() => {
            [...e.values(), ...t.values()].some(u) && (0, s.t)(!0);
        }, [e, t]);
    };
