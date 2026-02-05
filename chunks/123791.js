"use strict";
n.d(t, { C: () => f, F: () => p });
var r = n(64700),
    i = n(311907),
    a = n(996759),
    s = n(339048),
    o = n(800342),
    l = n(163437),
    u = n(961350),
    c = n(97352),
    d = n(31455),
    _ = n(67480);
function f(e) {
    r.useEffect(() => {
        p(e);
    }, [e]);
    let t = (0, i.yK)([d.A, _.A, c.A], () => {
            let t = d.A.getStoreLayout(e);
            return (0, l.oC)(t.subscriptions, _.A, c.A);
        }, [e]),
        n = (0, i.yK)([d.A], () => d.A.getStoreLayout(e).otps, [e]);
    return r.useMemo(() => ({ subscriptions: t, otps: n }), [t, n]);
}
function p(e) {
    (0, a.V)(e), (0, o.JI)(e), u.default.isAuthenticated() && (0, s.LM)(e, !1);
}
