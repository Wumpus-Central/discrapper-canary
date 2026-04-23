n.d(t, { A: () => r });
var i = n(64700),
    l = n(599941),
    s = n(386784);
function r(e) {
    let t = (0, l.uP)(e),
        n = (0, s.A)(e);
    return i.useMemo(() => {
        let e = 0;
        for (let i of t) {
            let t = i?.role_id;
            if (null != t) {
                let i = n?.[t];
                null != i && (e += i);
            }
        }
        return e;
    }, [t, n]);
}
