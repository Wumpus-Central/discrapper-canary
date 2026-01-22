n.d(t, { A: () => s }), n(896048);
var r = n(64700),
    i = n(599941),
    l = n(386784);
function s(e) {
    let t = (0, i.uP)(e),
        n = (0, l.A)(e);
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
