n.d(t, { k: () => o, r: () => u });
var s = n(64700),
    l = n(311907),
    a = n(724442),
    i = n(380335),
    r = n(157550),
    c = n(411976),
    d = n(790499);
function o() {
    let e = (0, c.W)(),
        t = s.useRef(e),
        n = (0, l.bG)([i.A], () => i.A.isReady()),
        r = s.useRef(n);
    return (
        s.useEffect(() => {
            n && !r.current && ((r.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, a.A)(t) && 1 === e
    );
}
function u() {
    let e = (0, d.I)(),
        t = s.useRef(e),
        n = (0, l.bG)([r.A], () => r.A.isReady()),
        i = s.useRef(n);
    return (
        s.useEffect(() => {
            n && !i.current && ((i.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, a.A)(t) && 1 === e
    );
}
