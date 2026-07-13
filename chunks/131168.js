"use strict";
n.d(t, { p: () => d });
var i = n(17928),
    r = n(166403),
    a = n(354670),
    s = n(945960),
    l = n(432779),
    o = n(202541);
function d() {
    let e = (0, i.bG)([r.A], () => r.A.getPremiumTypeSubscription()),
        t = a.A.isFetchingOffer(),
        n = a.A.hasFetchedOffer(),
        d = (0, l.A)(o.q),
        c = (0, l.A)(o.EG),
        u = d ?? c ?? null;
    return e?.canceledAt == null ? null : null != u ? u : (t || n || (0, s.Vn)(), null);
}
