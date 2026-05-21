"use strict";
n.d(t, { G: () => o }), n(321073);
var i = n(64700),
    r = n(398523),
    s = n(881373),
    a = n(852218);
function o(e) {
    let { enabled: t } = r.Ay.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
        n = (0, s.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled;
    return i.useMemo(() => {
        let i = [];
        return t && i.push(a.KS, a.Cs), n && i.push(a.XY), null != e ? e.filter((e) => i.includes(e)) : i;
    }, [t, n, e]);
}
