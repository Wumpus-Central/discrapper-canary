(n.d(t, { P: () => c }), n(388685));
var r = n(73800),
    l = n(979554),
    i = n(442837),
    o = n(597688),
    a = n(365943),
    s = n(25251);
let c = () => {
    let e = (0, i.e7)([o.Z], () => o.Z.products);
    r.useEffect(() => {
        let t = [...e.values()]
            .filter((e) => e.type === l.Z.PROFILE_EFFECT)
            .some((e) => {
                let t = e.items[0].id;
                return null != t && null == s.Z.getProfileEffectById(t);
            });
        (0, a.z)(t);
    }, [e]);
};
