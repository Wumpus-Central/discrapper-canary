n.d(t, { P: () => c }), n(388685);
var r = n(192379),
    l = n(979554),
    a = n(442837),
    i = n(597688),
    o = n(365943),
    s = n(25251);
let c = () => {
    let e = (0, a.e7)([i.Z], () => i.Z.products);
    r.useEffect(() => {
        let t = [...e.values()]
            .filter((e) => e.type === l.Z.PROFILE_EFFECT)
            .some((e) => {
                let t = e.items[0].id;
                return null != t && null == s.Z.getProfileEffectById(t);
            });
        (0, o.z)(t);
    }, [e]);
};
