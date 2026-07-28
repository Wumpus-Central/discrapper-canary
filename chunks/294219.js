i.d(t, { G: () => o }), i(321073);
var s = i(582128),
    r = i(149995),
    n = i(398523),
    a = i(881373),
    l = i(852218);
function o(e, t) {
    let i = t?.isLockedCardView,
        { enabled: o } = n.Ay.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
        d = (0, a.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled,
        c = (0, r.Zk)({ location: "useRecurring3PModalEligiblePartnerIds" });
    return s.useMemo(() => {
        let t = [];
        return (
            o && (t.push(l.KS), (i && c) || t.push(l.Cs)),
            d && t.push(l.XY),
            null != e ? e.filter((e) => t.includes(e)) : t
        );
    }, [o, d, c, e, i]);
}
