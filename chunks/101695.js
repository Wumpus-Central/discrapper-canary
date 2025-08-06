n.d(t, { Z: () => a });
var r = n(255367),
    l = n(73800),
    s = n(481060),
    i = n(930362);
function a(e) {
    let { onPageChange: t, offset: n, totalCount: a, pageSize: o, renderPageWrapper: u } = e,
        c = Math.floor(n / o) + 1,
        E = l.useCallback(
            (e) => {
                t(e - 1);
            },
            [t]
        );
    return (0, r.jsx)('div', {
        className: i.container,
        children: (0, r.jsx)(s.DsT, {
            currentPage: c,
            totalCount: a,
            pageSize: o,
            onPageChange: E,
            maxVisiblePages: 5,
            renderPageWrapper: u
        })
    });
}
