i.d(t, { G: () => o }), i(321073);
var r = i(64700),
    l = i(149995),
    a = i(398523),
    n = i(881373),
    s = i(852218);
function o(e, t) {
    let i = t?.isLockedCardView,
        { enabled: o } = a.Ay.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
        d = (0, n.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled,
        c = (0, l.Zk)({ location: "useRecurring3PModalEligiblePartnerIds" });
    return r.useMemo(() => {
        let t = [];
        return (
            o && (t.push(s.KS), (i && c) || t.push(s.Cs)),
            d && t.push(s.XY),
            null != e ? e.filter((e) => t.includes(e)) : t
        );
    }, [o, d, c, e, i]);
}
