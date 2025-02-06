n.d(t, { P: () => d }), n(47120);
var r = n(192379),
    l = n(979554),
    i = n(442837),
    a = n(597688),
    s = n(365943),
    o = n(25251);
let d = () => {
    let e = (0, i.e7)([a.Z], () => a.Z.products);
    r.useEffect(() => {
        let t = [...e.values()]
            .filter((e) => e.type === l.Z.PROFILE_EFFECT)
            .some((e) => {
                let t = e.items[0].id;
                return null != t && null == o.Z.getProfileEffectById(t);
            });
        (0, s.z)(t);
    }, [e]);
};
