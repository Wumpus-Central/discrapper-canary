n.d(t, { A: () => _, h: () => E });
var i = n(582128),
    r = n(435558),
    a = n.n(r),
    s = n(17928),
    l = n(52133),
    o = n(403362),
    d = n(627363),
    c = n(587895),
    u = n(652215);
function _(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = i.useRef([]);
    return (
        i.useEffect(() => {
            t &&
                !(0, l.v)(e, n.current) &&
                (d.Ay.fetchApplications(a()(e).filter(o.Vq).uniq().value(), !1).catch(u.tEg), (n.current = e));
        }, [e, t]),
        (0, s.yK)([c.A], () => e.map((e) => (null != e ? c.A.getApplication(e) : void 0)))
    );
}
function E(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return _(null != e ? [e] : [], t)[0];
}
