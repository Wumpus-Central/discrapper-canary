"use strict";
n.d(t, { G: () => o }), n(321073);
var i = n(64700),
    r = n(149995),
    a = n(398523),
    s = n(881373),
    l = n(852218);
function o(e, t) {
    let n = t?.isLockedCardView,
        { enabled: o } = a.Ay.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
        d = (0, s.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled,
        c = (0, r.Zk)({ location: "useRecurring3PModalEligiblePartnerIds" });
    return i.useMemo(() => {
        let t = [];
        return (
            o && (t.push(l.KS), (n && c) || t.push(l.Cs)),
            d && t.push(l.XY),
            null != e ? e.filter((e) => t.includes(e)) : t
        );
    }, [o, d, c, e, n]);
}
