(r.d(t, { P: () => c }), r(388685));
var n = r(73800),
    l = r(979554),
    o = r(442837),
    i = r(597688),
    a = r(365943),
    s = r(25251);
let c = () => {
    let e = (0, o.e7)([i.Z], () => i.Z.products);
    n.useEffect(() => {
        let t = [...e.values()]
            .filter((e) => e.type === l.Z.PROFILE_EFFECT)
            .some((e) => {
                let t = e.items[0].id;
                return null != t && null == s.Z.getProfileEffectById(t);
            });
        (0, a.z)(t);
    }, [e]);
};
