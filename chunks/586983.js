n.d(t, {
    A: () => a,
});
var r = n(64700),
    i = n(27867);

function a(e) {
    let { delay: t, disable: n = !1 } = e,
        a = (0, i.A)();
    r.useEffect(() => {
        if (t <= 0 || n) return;
        let e = setTimeout(() => {
            a();
        }, t);
        return () => clearTimeout(e);
    }, [t, n, a]);
}
