s.d(t, { G: () => i }), s(321073);
var n = s(64700),
    a = s(398523),
    r = s(881373),
    l = s(852218);
function i(e) {
    let { enabled: t } = a.Ay.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
        s = (0, r.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled;
    return n.useMemo(() => {
        let n = [];
        return t && n.push(l.KS, l.Cs), s && n.push(l.XY), null != e ? e.filter((e) => n.includes(e)) : n;
    }, [t, s, e]);
}
