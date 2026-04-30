n.d(t, { A: () => a });
var o = n(64700),
    r = n(27867);
function a(e) {
    let { delay: t, disable: n = !1 } = e,
        a = (0, r.A)();
    o.useEffect(() => {
        if (t <= 0 || n) return;
        let e = setTimeout(() => {
            a();
        }, t);
        return () => clearTimeout(e);
    }, [t, n, a]);
}
