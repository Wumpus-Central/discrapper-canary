l.d(t, { G: () => n }), l(321073);
var i = l(64700),
    r = l(398523),
    a = l(881373),
    s = l(852218);
function n(e) {
    let { enabled: t } = r.Ay.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
        l = (0, a.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled;
    return i.useMemo(() => {
        let i = [];
        return t && i.push(s.KS, s.Cs), l && i.push(s.XY), null != e ? e.filter((e) => i.includes(e)) : i;
    }, [t, l, e]);
}
