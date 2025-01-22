r.d(n, {
    V: function () {
        return l;
    }
});
var i = r(192379),
    a = r(442837),
    o = r(365943),
    s = r(25251);
let l = (e) => {
    let n = (0, a.e7)([s.Z], () => s.Z.getProfileEffectById(e)),
        r = null != n;
    return (
        i.useEffect(() => {
            null != e && !r && (0, o.z)(!0);
        }, [e, r]),
        n
    );
};
