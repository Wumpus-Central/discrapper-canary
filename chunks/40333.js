n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(998304);
let o = 500,
    l = 100;

function c(e) {
    let [t, n] = (0, r.useState)(e),
        [i, c] = (0, r.useState)(e),
        [u, d] = (0, r.useState)(e),
        f = (0, r.useRef)(u),
        p = (0, r.useRef)(null);
    return (
        (0, r.useEffect)(() => {
            c(e), n(f.current);
        }, [e]),
        (0, r.useEffect)(() => {
            if ((null != p.current && cancelAnimationFrame(p.current), t === i)) {
                p.current = null;
                return;
            }
            let e = Date.now(),
                n = a().throttle(() => {
                    let r = Math.min((Date.now() - e) / o, 1),
                        a = (0, s.De)(t, i, r);
                    d(a), (f.current = a), r < 1 && (p.current = requestAnimationFrame(n));
                }, l);
            return (
                (p.current = requestAnimationFrame(n)),
                () => {
                    var e;
                    cancelAnimationFrame(null != (e = p.current) ? e : 0), n.cancel();
                }
            );
        }, [t, i]),
        u
    );
}
