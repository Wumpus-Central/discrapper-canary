s.d(t, { G: () => n }), s(321073);
var a = s(64700),
    r = s(398523),
    l = s(881373),
    i = s(852218);
function n(e) {
    let { enabled: t } = r.Ay.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
        s = (0, l.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled;
    return a.useMemo(() => {
        let a = [];
        return t && a.push(i.KS, i.Cs), s && a.push(i.XY), null != e ? e.filter((e) => a.includes(e)) : a;
    }, [t, s, e]);
}
