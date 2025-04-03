n.d(t, { P: () => c }), n(47120);
var r = n(192379),
    l = n(979554),
    a = n(442837),
    o = n(597688),
    i = n(365943),
    s = n(25251);
let c = () => {
    let e = (0, a.e7)([o.Z], () => o.Z.products);
    r.useEffect(() => {
        let t = [...e.values()]
            .filter((e) => e.type === l.Z.PROFILE_EFFECT)
            .some((e) => {
                let t = e.items[0].id;
                return null != t && null == s.Z.getProfileEffectById(t);
            });
        (0, i.z)(t);
    }, [e]);
};
