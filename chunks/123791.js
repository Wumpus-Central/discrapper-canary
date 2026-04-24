"use strict";
n.d(t, { C: () => p, F: () => m });
var i = n(64700),
    a = n(17928),
    s = n(996759),
    l = n(339048),
    r = n(800342),
    o = n(163437),
    c = n(495544),
    d = n(97352),
    u = n(31455),
    h = n(67480);
function p(e) {
    i.useEffect(() => {
        m(e);
    }, [e]);
    let t = (0, a.yK)([u.A, h.A, d.A], () => {
            let t = u.A.getStoreLayout(e);
            return (0, o.oC)(t.subscriptions, h.A, d.A);
        }, [e]),
        n = (0, a.yK)([u.A], () => u.A.getStoreLayout(e).otps, [e]);
    return i.useMemo(() => ({ subscriptions: t, otps: n }), [t, n]);
}
function m(e) {
    (0, s.V)(e), (0, r.JI)(e), c.default.isAuthenticated() && (0, l.LM)(e, !1);
}
