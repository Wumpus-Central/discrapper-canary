var r = n(477900),
    l = n(582128);
n(309613);
var a = n(866665);
n(652215);
var s = n(792996);
n.d(
    t,
    {},
    {
        o: function (e) {
            let { totalResults: t, isSearching: n, offset: i, searchResultsPaginationKey: u } = e,
                [o, c] = l.useState({ searchResultsPaginationKey: u, totalResults: t });
            l.useEffect(() => {
                n || c({ searchResultsPaginationKey: u, totalResults: t });
            }, [t, n, u]);
            let d = n && o.searchResultsPaginationKey === u,
                f = t;
            n && (f = d ? o.totalResults : 0);
            let h = f > 1e4,
                m = Math.floor(i / 25),
                g = h && m >= 399,
                x = l.useCallback(
                    (e, t) => {
                        if (h && 400 === e.targetPage) {
                            let e = s.intl.formatToPlainString(s.t["E+2azY"], { maxPages: 400 });
                            return (0, r.jsx)(a.m, { asContainer: !0, text: e, children: t });
                        }
                        return t;
                    },
                    [h, 400],
                );
            return {
                isPaginationTotalCountLimited: h,
                paginationTotalCount: Math.min(f, 1e4),
                paginationMaxIndex: 399,
                paginationMaxVisiblePage: 400,
                isMaxVisiblePageWarningVisible: g,
                renderPageWrapper: x,
            };
        },
    },
);
