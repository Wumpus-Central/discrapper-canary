n.d(t, { A: () => l }), n(896048), n(492834);
var r = n(64700),
    i = n(311907),
    a = n(654107),
    s = n(67480),
    o = n(871123);
function l(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.get(e)),
        [l, c] = r.useState(!1),
        [u, d] = r.useState(!1),
        f = r.useMemo(() => (0, o.xf)(n), [n]),
        p = r.useMemo(() => (0, o.fq)(n), [n]);
    return (
        r.useEffect(() => {
            if ((null == n ? void 0 : n.id) == null || l || !t) return;
            if (null == p) return void c(!0);
            let e = new Image();
            return (
                (e.src = p.toString()),
                (e.onload = () => {
                    c(!0);
                }),
                (e.onerror = () => {
                    c(!0);
                }),
                () => {
                    (e.onerror = null), (e.onload = null), (e.src = "");
                }
            );
        }, [p, t, l, null == n ? void 0 : n.id]),
        r.useEffect(() => {
            if ((null == n ? void 0 : n.id) == null || u || !t) return;
            if (null == f) return void d(!0);
            let e = !0;
            return (
                (0, a.l0)(f.toString()).finally(() => {
                    e && d(!0);
                }),
                () => {
                    e = !1;
                }
            );
        }, [u, f, t, null == n ? void 0 : n.id]),
        r.useMemo(() => l && u, [l, u])
    );
}
