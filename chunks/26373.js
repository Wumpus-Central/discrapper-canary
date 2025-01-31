n.d(t, {
    K: () => d,
    V: () => u
});
var i = n(192379),
    l = n(442837),
    r = n(990169),
    a = n(355298),
    s = n(333984),
    o = n(899740),
    c = n(355350);
function d() {
    let e = (0, o.q)(),
        t = i.useRef(e),
        n = (0, l.e7)([a.Z], () => a.Z.isReady()),
        s = i.useRef(n);
    return (
        i.useEffect(() => {
            n && !s.current && ((s.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, r.Z)(t) && 1 === e
    );
}
function u() {
    let e = (0, c.w)(),
        t = i.useRef(e),
        n = (0, l.e7)([s.Z], () => s.Z.isReady()),
        a = i.useRef(n);
    return (
        i.useEffect(() => {
            n && !a.current && ((a.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, r.Z)(t) && 1 === e
    );
}
