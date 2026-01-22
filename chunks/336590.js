n.d(t, {
    k: () => u,
    r: () => d,
});
var r = n(64700),
    i = n(311907),
    l = n(724442),
    a = n(380335),
    s = n(157550),
    o = n(411976),
    c = n(790499);
function u() {
    let e = (0, o.W)(),
        t = r.useRef(e),
        n = (0, i.bG)([a.A], () => a.A.isReady()),
        s = r.useRef(n);
    return (
        r.useEffect(() => {
            n && !s.current && ((s.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, l.A)(t) && 1 === e
    );
}
function d() {
    let e = (0, c.I)(),
        t = r.useRef(e),
        n = (0, i.bG)([s.A], () => s.A.isReady()),
        a = r.useRef(n);
    return (
        r.useEffect(() => {
            n && !a.current && ((a.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, l.A)(t) && 1 === e
    );
}
