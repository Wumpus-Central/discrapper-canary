n.d(t, { N: () => c }), n(539854), n(388685);
var r = n(647438),
    i = n(442837),
    l = n(246946),
    a = n(607802),
    o = n(375123),
    s = n(981631);
function c(e) {
    let t = (function (e) {
        let t = (0, o.C)({ location: "useEligibleFilterTokens" }),
            n = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation);
        return r.useMemo(() => {
            let r = (0, a.R6)(e),
                i = [];
            return (
                n || (i.push(s.dCx.FILTER_FROM), i.push(s.dCx.FILTER_MENTIONS)),
                i.push(s.dCx.FILTER_HAS),
                r && i.push(s.dCx.FILTER_IN),
                i.push(s.dCx.FILTER_ON),
                i.push(s.dCx.FILTER_BEFORE),
                i.push(s.dCx.FILTER_AFTER),
                i.push(s.dCx.FILTER_PINNED),
                t && i.push(s.dCx.FILTER_AUTHOR_TYPE),
                i
            );
        }, [n, t, e]);
    })(e);
    return r.useMemo(() => new Set(t), [t]);
}
