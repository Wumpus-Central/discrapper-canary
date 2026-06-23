n.d(t, { k: () => d, r: () => u });
var l = n(64700),
    i = n(17928),
    s = n(724442),
    a = n(380335),
    r = n(157550),
    o = n(411976),
    c = n(790499);
function d() {
    let e = (0, o.W)(),
        t = l.useRef(e),
        n = (0, i.bG)([a.A], () => a.A.isReady()),
        r = l.useRef(n);
    return (
        l.useEffect(() => {
            n && !r.current && ((r.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, s.A)(t) && 1 === e
    );
}
function u() {
    let e = (0, c.I)(),
        t = l.useRef(e),
        n = (0, i.bG)([r.A], () => r.A.isReady()),
        a = l.useRef(n);
    return (
        l.useEffect(() => {
            n && !a.current && ((a.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, s.A)(t) && 1 === e
    );
}
