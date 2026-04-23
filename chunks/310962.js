n.d(e, { A: () => u });
var r = n(64700),
    s = n(311907),
    l = n(654107),
    i = n(67480),
    a = n(871123);
function u(t, e) {
    let n = (0, s.bG)([i.A], () => i.A.get(t)),
        [u, c] = r.useState(!1),
        [o, d] = r.useState(!1),
        A = r.useMemo(() => (0, a.xf)(n), [n]),
        _ = r.useMemo(() => (0, a.fq)(n), [n]);
    return (
        r.useEffect(() => {
            if (n?.id == null || u || !e) return;
            if (null == _) return void c(!0);
            let t = new Image();
            return (
                (t.src = _.toString()),
                (t.onload = () => {
                    c(!0);
                }),
                (t.onerror = () => {
                    c(!0);
                }),
                () => {
                    (t.onerror = null), (t.onload = null), (t.src = "");
                }
            );
        }, [_, e, u, n?.id]),
        r.useEffect(() => {
            if (n?.id == null || o || !e) return;
            if (null == A) return void d(!0);
            let t = !0;
            return (
                (0, l.l0)(A.toString()).finally(() => {
                    t && d(!0);
                }),
                () => {
                    t = !1;
                }
            );
        }, [o, A, e, n?.id]),
        r.useMemo(() => u && o, [u, o])
    );
}
