n.d(r, { A: () => a });
var e = n(64700),
    i = n(17928),
    s = n(654107),
    l = n(67480),
    u = n(871123);
function a(t, r) {
    let n = (0, i.bG)([l.A], () => l.A.get(t)),
        [a, c] = e.useState(!1),
        [d, A] = e.useState(!1),
        _ = e.useMemo(() => (0, u.xf)(n), [n]),
        o = e.useMemo(() => (0, u.fq)(n), [n]);
    return (
        e.useEffect(() => {
            if (n?.id == null || a || !r) return;
            if (null == o) return void c(!0);
            let t = new Image();
            return (
                (t.src = o.toString()),
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
        }, [o, r, a, n?.id]),
        e.useEffect(() => {
            if (n?.id == null || d || !r) return;
            if (null == _) return void A(!0);
            let t = !0;
            return (
                (0, s.l0)(_.toString()).finally(() => {
                    t && A(!0);
                }),
                () => {
                    t = !1;
                }
            );
        }, [d, _, r, n?.id]),
        e.useMemo(() => a && d, [a, d])
    );
}
