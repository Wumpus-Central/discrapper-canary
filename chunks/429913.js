"use strict";
n.d(t, { A: () => d, h: () => _ });
var i = n(64700),
    r = n(735438),
    s = n.n(r),
    a = n(17928),
    o = n(52133),
    l = n(403362),
    u = n(627363),
    c = n(587895);
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = i.useRef([]);
    return (
        i.useEffect(() => {
            t &&
                !(0, o.v)(e, n.current) &&
                (u.Ay.fetchApplications(s()(e).filter(l.Vq).uniq().value(), !1), (n.current = e));
        }, [e, t]),
        (0, a.yK)([c.A], () => e.map((e) => (null != e ? c.A.getApplication(e) : void 0)))
    );
}
function _(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return d(null != e ? [e] : [], t)[0];
}
