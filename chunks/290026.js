r.d(t, { P: () => c }), r(47120);
var n = r(192379),
    l = r(979554),
    i = r(442837),
    a = r(597688),
    o = r(365943),
    s = r(25251);
let c = () => {
    let e = (0, i.e7)([a.Z], () => a.Z.products);
    n.useEffect(() => {
        let t = [...e.values()]
            .filter((e) => e.type === l.Z.PROFILE_EFFECT)
            .some((e) => {
                let t = e.items[0].id;
                return null != t && null == s.Z.getProfileEffectById(t);
            });
        (0, o.z)(t);
    }, [e]);
};
