i.d(t, { G: () => o }), i(321073);
var r = i(64700),
    s = i(149995),
    n = i(398523),
    l = i(881373),
    a = i(852218);
function o(e, t) {
    let i = t?.isLockedCardView,
        { enabled: o } = n.Ay.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
        d = (0, l.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled,
        c = (0, s.Zk)({ location: "useRecurring3PModalEligiblePartnerIds" });
    return r.useMemo(() => {
        let t = [];
        return (
            o && (t.push(a.KS), (i && c) || t.push(a.Cs)),
            d && t.push(a.XY),
            null != e ? e.filter((e) => t.includes(e)) : t
        );
    }, [o, d, c, e, i]);
}
