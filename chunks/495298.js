n.d(t, { Z: () => l }), n(388685);
var r = n(192379),
    i = n(584825),
    s = n(14263);
function l(e) {
    let t = (0, i.qi)(e),
        n = (0, s.Z)(e);
    return r.useMemo(() => {
        let e = 0;
        for (let r of t) {
            let t = null == r ? void 0 : r.role_id;
            if (null != t) {
                let r = null == n ? void 0 : n[t];
                null != r && (e += r);
            }
        }
        return e;
    }, [t, n]);
}
