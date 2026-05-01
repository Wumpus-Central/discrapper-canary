"use strict";
n.d(t, { p: () => u });
var i = n(17928),
    r = n(166403),
    s = n(354670),
    a = n(694080),
    o = n(313246),
    l = n(788868);
function u() {
    let e = (0, i.bG)([r.A], () => r.A.getPremiumTypeSubscription()),
        t = s.A.isFetchingOffer(),
        n = s.A.hasFetchedOffer(),
        u = (0, o.A)(l.q),
        c = (0, o.A)(l.EG),
        d = u ?? c ?? null;
    return e?.canceledAt == null ? null : null != d ? d : (t || n || (0, a.Vn)(), null);
}
