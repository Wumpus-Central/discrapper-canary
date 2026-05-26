i.d(t, { G: () => o }), i(321073);
var r = i(64700),
    l = i(149995),
    a = i(398523),
    s = i(881373),
    n = i(852218);
function o(e, t) {
    let i = t?.isLockedCardView,
        { enabled: o } = a.Ay.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
        d = (0, s.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled,
        c = (0, l.Zk)({ location: "useRecurring3PModalEligiblePartnerIds" });
    return r.useMemo(() => {
        let t = [];
        return (
            o && (t.push(n.KS), (i && c) || t.push(n.Cs)),
            d && t.push(n.XY),
            null != e ? e.filter((e) => t.includes(e)) : t
        );
    }, [o, d, c, e, i]);
}
