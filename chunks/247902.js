n.d(t, { N: () => c }), n(539854), n(388685);
var r = n(473749),
    i = n(442837),
    a = n(246946),
    o = n(607802),
    s = n(981631);
function l(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.hidePersonalInformation);
    return r.useMemo(() => {
        let n = (0, o.R6)(e),
            r = [];
        return (
            t || (r.push(s.dCx.FILTER_FROM), r.push(s.dCx.FILTER_MENTIONS)),
            r.push(s.dCx.FILTER_HAS),
            n && r.push(s.dCx.FILTER_IN),
            r.push(s.dCx.FILTER_ON),
            r.push(s.dCx.FILTER_BEFORE),
            r.push(s.dCx.FILTER_AFTER),
            r.push(s.dCx.FILTER_PINNED),
            r.push(s.dCx.FILTER_AUTHOR_TYPE),
            r
        );
    }, [t, e]);
}
function c(e) {
    let t = l(e);
    return r.useMemo(() => new Set(t), [t]);
}
