n.d(t, { A: () => o });
var i = n(64700),
    l = n(311907),
    a = n(654107),
    r = n(67480),
    s = n(871123);
function o(e, t) {
    let n = (0, l.bG)([r.A], () => r.A.get(e)),
        [o, d] = i.useState(!1),
        [c, u] = i.useState(!1),
        m = i.useMemo(() => (0, s.xf)(n), [n]),
        _ = i.useMemo(() => (0, s.fq)(n), [n]);
    return (
        i.useEffect(() => {
            if (n?.id == null || o || !t) return;
            if (null == _) return void d(!0);
            let e = new Image();
            return (
                (e.src = _.toString()),
                (e.onload = () => {
                    d(!0);
                }),
                (e.onerror = () => {
                    d(!0);
                }),
                () => {
                    (e.onerror = null), (e.onload = null), (e.src = "");
                }
            );
        }, [_, t, o, n?.id]),
        i.useEffect(() => {
            if (n?.id == null || c || !t) return;
            if (null == m) return void u(!0);
            let e = !0;
            return (
                (0, a.l0)(m.toString()).finally(() => {
                    e && u(!0);
                }),
                () => {
                    e = !1;
                }
            );
        }, [c, m, t, n?.id]),
        i.useMemo(() => o && c, [o, c])
    );
}
