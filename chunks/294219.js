r.d(t, { G: () => o }), r(321073);
var i = r(64700),
    s = r(149995),
    l = r(398523),
    a = r(881373),
    n = r(852218);
function o(e, t) {
    let r = t?.isLockedCardView,
        { enabled: o } = l.Ay.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
        d = (0, a.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled,
        c = (0, s.Zk)({ location: "useRecurring3PModalEligiblePartnerIds" });
    return i.useMemo(() => {
        let t = [];
        return (
            o && (t.push(n.KS), (r && c) || t.push(n.Cs)),
            d && t.push(n.XY),
            null != e ? e.filter((e) => t.includes(e)) : t
        );
    }, [o, d, c, e, r]);
}
