n.d(t, { N: () => u }), n(539854), n(388685);
var r = n(473749),
    i = n(442837),
    a = n(246946),
    o = n(607802),
    s = n(375123),
    l = n(981631);
function c(e) {
    let t = (0, s.C)({ location: "useEligibleFilterTokens" }),
        n = (0, i.e7)([a.Z], () => a.Z.hidePersonalInformation);
    return r.useMemo(() => {
        let r = (0, o.R6)(e),
            i = [];
        return (
            n || (i.push(l.dCx.FILTER_FROM), i.push(l.dCx.FILTER_MENTIONS)),
            i.push(l.dCx.FILTER_HAS),
            r && i.push(l.dCx.FILTER_IN),
            i.push(l.dCx.FILTER_ON),
            i.push(l.dCx.FILTER_BEFORE),
            i.push(l.dCx.FILTER_AFTER),
            i.push(l.dCx.FILTER_PINNED),
            t && i.push(l.dCx.FILTER_AUTHOR_TYPE),
            i
        );
    }, [n, t, e]);
}
function u(e) {
    let t = c(e);
    return r.useMemo(() => new Set(t), [t]);
}
