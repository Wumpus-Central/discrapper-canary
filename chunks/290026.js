n.d(t, {
    P: function () {
        return c;
    }
}),
    n(47120);
var r = n(192379),
    i = n(979554),
    l = n(442837),
    s = n(597688),
    a = n(365943),
    o = n(25251);
let c = () => {
    let e = (0, l.e7)([s.Z], () => s.Z.products);
    r.useEffect(() => {
        let t = [...e.values()]
            .filter((e) => e.type === i.Z.PROFILE_EFFECT)
            .some((e) => {
                let t = e.items[0].id;
                return null != t && null == o.Z.getProfileEffectById(t);
            });
        (0, a.z)(t);
    }, [e]);
};
