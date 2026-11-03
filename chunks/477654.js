n.d(t, { o: () => c });
var r = n(477900),
    l = n(582128);
n(309613);
var a = n(866665),
    s = n(652215),
    i = n(105292);
let u = 9975 + s.T_y,
    o = 9975 / s.T_y;
function c(e) {
    let { totalResults: t, isSearching: n, offset: c, searchResultsPaginationKey: d } = e,
        [f, h] = l.useState({ searchResultsPaginationKey: d, totalResults: t });
    l.useEffect(() => {
        n || h({ searchResultsPaginationKey: d, totalResults: t });
    }, [t, n, d]);
    let m = n && f.searchResultsPaginationKey === d,
        g = t;
    n && (g = m ? f.totalResults : 0);
    let x = g > 9975 + s.T_y,
        p = o + 1,
        E = Math.floor(c / s.T_y),
        C = x && E >= o,
        T = l.useCallback(
            (e, t) => {
                if (x && e.targetPage === p) {
                    let e = i.intl.formatToPlainString(i.t["E+2azY"], { maxPages: p });
                    return (0, r.jsx)(a.m, { asContainer: !0, text: e, children: t });
                }
                return t;
            },
            [x, p],
        );
    return {
        isPaginationTotalCountLimited: x,
        paginationTotalCount: Math.min(g, u),
        paginationMaxIndex: o,
        paginationMaxVisiblePage: p,
        isMaxVisiblePageWarningVisible: C,
        renderPageWrapper: T,
    };
}
