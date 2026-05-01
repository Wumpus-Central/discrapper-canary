r.d(t, { A: () => s });
var n = r(64700),
    u = r(17928),
    l = r(654107),
    a = r(67480),
    i = r(871123);
function s(e, t) {
    let r = (0, u.bG)([a.A], () => a.A.get(e)),
        [s, o] = n.useState(!1),
        [c, d] = n.useState(!1),
        _ = n.useMemo(() => (0, i.xf)(r), [r]),
        f = n.useMemo(() => (0, i.fq)(r), [r]);
    return (
        n.useEffect(() => {
            if (r?.id == null || s || !t) return;
            if (null == f) return void o(!0);
            let e = new Image();
            return (
                (e.src = f.toString()),
                (e.onload = () => {
                    o(!0);
                }),
                (e.onerror = () => {
                    o(!0);
                }),
                () => {
                    (e.onerror = null), (e.onload = null), (e.src = "");
                }
            );
        }, [f, t, s, r?.id]),
        n.useEffect(() => {
            if (r?.id == null || c || !t) return;
            if (null == _) return void d(!0);
            let e = !0;
            return (
                (0, l.l0)(_.toString()).finally(() => {
                    e && d(!0);
                }),
                () => {
                    e = !1;
                }
            );
        }, [c, _, t, r?.id]),
        n.useMemo(() => s && c, [s, c])
    );
}
