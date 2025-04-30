n.d(t, {
    K: () => u,
    V: () => d
});
var r = n(192379),
    i = n(442837),
    l = n(990169),
    a = n(355298),
    o = n(333984),
    s = n(899740),
    c = n(355350);
function u() {
    let e = (0, s.q)(),
        t = r.useRef(e),
        n = (0, i.e7)([a.Z], () => a.Z.isReady()),
        o = r.useRef(n);
    return (
        r.useEffect(() => {
            n && !o.current && ((o.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, l.Z)(t) && 1 === e
    );
}
function d() {
    let e = (0, c.w)(),
        t = r.useRef(e),
        n = (0, i.e7)([o.Z], () => o.Z.isReady()),
        a = r.useRef(n);
    return (
        r.useEffect(() => {
            n && !a.current && ((a.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, l.Z)(t) && 1 === e
    );
}
