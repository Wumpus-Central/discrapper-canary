n.d(t, {
    K: function () {
        return c;
    },
    V: function () {
        return d;
    }
});
var i = n(192379),
    r = n(442837),
    l = n(355298),
    a = n(333984),
    s = n(899740),
    o = n(355350);
function c() {
    let e = (0, s.q)(),
        t = i.useRef(e),
        n = (0, r.e7)([l.Z], () => l.Z.isReady()),
        a = i.useRef(n);
    return (
        i.useEffect(() => {
            n && !a.current && ((a.current = !0), (t.current = e));
        }, [n, e]),
        t.current <= 1 && 1 === e
    );
}
function d() {
    let e = (0, o.w)(),
        t = i.useRef(e),
        n = (0, r.e7)([a.Z], () => a.Z.isReady()),
        l = i.useRef(n);
    return (
        i.useEffect(() => {
            n && !l.current && ((l.current = !0), (t.current = e));
        }, [n, e]),
        t.current <= 1 && 1 === e
    );
}
