"use strict";
n.d(t, { A: () => c });
var a = n(64700),
    i = n(17928),
    l = n(654107),
    r = n(67480),
    s = n(871123);
function c(e, t) {
    let n = (0, i.bG)([r.A], () => r.A.get(e)),
        [c, o] = a.useState(!1),
        [d, u] = a.useState(!1),
        m = a.useMemo(() => (0, s.xf)(n), [n]),
        f = a.useMemo(() => (0, s.fq)(n), [n]);
    return (
        a.useEffect(() => {
            if (n?.id == null || c || !t) return;
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
        }, [f, t, c, n?.id]),
        a.useEffect(() => {
            if (n?.id == null || d || !t) return;
            if (null == m) return void u(!0);
            let e = !0;
            return (
                (0, l.l0)(m.toString()).finally(() => {
                    e && u(!0);
                }),
                () => {
                    e = !1;
                }
            );
        }, [d, m, t, n?.id]),
        a.useMemo(() => c && d, [c, d])
    );
}
