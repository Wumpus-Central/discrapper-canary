n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var i = n(192379),
    r = n(584825),
    l = n(14263);
function s(e) {
    let t = (0, r.qi)(e),
        n = (0, l.Z)(e);
    return i.useMemo(() => {
        let e = 0;
        for (let i of t) {
            let t = null == i ? void 0 : i.role_id;
            if (null != t) {
                let i = null == n ? void 0 : n[t];
                null != i && (e += i);
            }
        }
        return e;
    }, [t, n]);
}
