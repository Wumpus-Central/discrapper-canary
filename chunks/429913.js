"use strict";
n.d(t, { A: () => u, h: () => c });
var i = n(64700),
    r = n(735438),
    s = n.n(r),
    a = n(17928),
    o = n(52133),
    l = n(403362),
    d = n(627363),
    _ = n(587895);
function u(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = i.useRef([]);
    return (
        i.useEffect(() => {
            t &&
                !(0, o.v)(e, n.current) &&
                (d.Ay.fetchApplications(s()(e).filter(l.Vq).uniq().value(), !1), (n.current = e));
        }, [e, t]),
        (0, a.yK)([_.A], () => e.map((e) => (null != e ? _.A.getApplication(e) : void 0)))
    );
}
function c(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return u(null != e ? [e] : [], t)[0];
}
