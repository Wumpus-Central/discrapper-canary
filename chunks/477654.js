n.d(t, { o: () => o });
var r = n(477900),
    l = n(582128);
n(309613);
var a = n(866665),
    s = n(652215),
    i = n(105292);
let u = 9975 + s.T_y,
    c = 9975 / s.T_y;
function o(e) {
    let { totalResults: t, isSearching: n, offset: o, searchResultsPaginationKey: d } = e,
        [f, h] = l.useState({ searchResultsPaginationKey: d, totalResults: t });
    l.useEffect(() => {
        n || h({ searchResultsPaginationKey: d, totalResults: t });
    }, [t, n, d]);
    let m = n && f.searchResultsPaginationKey === d,
        g = t;
    n && (g = m ? f.totalResults : 0);
    let x = g > 9975 + s.T_y,
        E = c + 1,
        p = Math.floor(o / s.T_y),
        C = x && p >= c,
        T = l.useCallback(
            (e, t) => {
                if (x && e.targetPage === E) {
                    let e = i.intl.formatToPlainString(i.t["E+2azY"], { maxPages: E });
                    return (0, r.jsx)(a.m, { asContainer: !0, text: e, children: t });
                }
                return t;
            },
            [x, E],
        );
    return {
        isPaginationTotalCountLimited: x,
        paginationTotalCount: Math.min(g, u),
        paginationMaxIndex: c,
        paginationMaxVisiblePage: E,
        isMaxVisiblePageWarningVisible: C,
        renderPageWrapper: T,
    };
}
