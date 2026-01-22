n.d(t, {
    A: () => d,
    h: () => f,
});
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(52133),
    l = n(403362),
    c = n(627363),
    u = n(587895);
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = r.useRef([]);
    return (
        r.useEffect(() => {
            t &&
                !(0, o.v)(e, n.current) &&
                (c.Ay.fetchApplications(a()(e).filter(l.Vq).uniq().value(), !1), (n.current = e));
        }, [e, t]),
        (0, s.yK)([u.A], () => e.map((e) => (null != e ? u.A.getApplication(e) : void 0)))
    );
}
function f(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return d(null != e ? [e] : [], t)[0];
}
