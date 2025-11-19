n.d(t, {
    K: () => u,
    V: () => d,
});
var r = n(473749),
    i = n(442837),
    l = n(990169),
    a = n(355298),
    s = n(333984),
    o = n(899740),
    c = n(355350);
function u() {
    let e = (0, o.q)(),
        t = r.useRef(e),
        n = (0, i.e7)([a.Z], () => a.Z.isReady()),
        s = r.useRef(n);
    return (
        r.useEffect(() => {
            n && !s.current && ((s.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, l.Z)(t) && 1 === e
    );
}
function d() {
    let e = (0, c.w)(),
        t = r.useRef(e),
        n = (0, i.e7)([s.Z], () => s.Z.isReady()),
        a = r.useRef(n);
    return (
        r.useEffect(() => {
            n && !a.current && ((a.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, l.Z)(t) && 1 === e
    );
}
