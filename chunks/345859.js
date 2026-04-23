s.d(t, { H: () => i });
var n = s(64700),
    a = s(311907),
    l = s(822382),
    r = s(65600);
function i(e) {
    let t = (0, a.bG)([r.A], () => {
        let t = (0, l.bS)(e);
        return r.A.getSearchResultsQueryString(t);
    });
    return n.useMemo(() => (0, l._o)(t ?? ""), [t]);
}
