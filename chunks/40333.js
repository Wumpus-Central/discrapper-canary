n.d(t, {
    A: () => s,
}),
    n(896048);
var r = n(64700),
    l = n(735438),
    a = n.n(l),
    i = n(998304);

function s(e) {
    let [t, n] = (0, r.useState)(e),
        [l, s] = (0, r.useState)(e),
        [o, c] = (0, r.useState)(e),
        u = (0, r.useRef)(o),
        d = (0, r.useRef)(null);
    return (
        (0, r.useEffect)(() => {
            s(e), n(u.current);
        }, [e]),
        (0, r.useEffect)(() => {
            if ((null != d.current && cancelAnimationFrame(d.current), t === l)) {
                d.current = null;
                return;
            }
            let e = Date.now(),
                n = a().throttle(() => {
                    let r = Math.min((Date.now() - e) / 500, 1),
                        a = (0, i.De)(t, l, r);
                    c(a), (u.current = a), r < 1 && (d.current = requestAnimationFrame(n));
                }, 100);
            return (
                (d.current = requestAnimationFrame(n)),
                () => {
                    var e;
                    cancelAnimationFrame(null != (e = d.current) ? e : 0), n.cancel();
                }
            );
        }, [t, l]),
        o
    );
}
