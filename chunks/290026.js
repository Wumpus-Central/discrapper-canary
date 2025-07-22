(r.d(t, { P: () => c }), r(388685));
var n = r(73800),
    l = r(979554),
    i = r(442837),
    o = r(597688),
    a = r(365943),
    s = r(25251);
let c = () => {
    let e = (0, i.e7)([o.Z], () => o.Z.products);
    n.useEffect(() => {
        let t = [...e.values()]
            .filter((e) => e.type === l.Z.PROFILE_EFFECT)
            .some((e) => {
                let t = e.items[0].id;
                return null != t && null == s.Z.getProfileEffectById(t);
            });
        (0, a.r)(t);
    }, [e]);
};
