n.d(t, { A: () => i });
var r = n(64700),
    a = n(27867);
function i(e) {
    let { delay: t, disable: n = !1 } = e,
        i = (0, a.A)();
    r.useEffect(() => {
        if (t <= 0 || n) return;
        let e = setTimeout(() => {
            i();
        }, t);
        return () => clearTimeout(e);
    }, [t, n, i]);
}
