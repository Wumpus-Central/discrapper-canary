n.d(t, { Z: () => l });
var r = n(255367),
    i = n(73800),
    a = n(481060),
    o = n(930362);
let s = 5;
function l(e) {
    let { onPageChange: t, offset: n, totalCount: l, pageSize: c, renderPageWrapper: u } = e,
        d = Math.floor(n / c) + 1,
        f = i.useCallback(
            (e) => {
                t(e - 1);
            },
            [t]
        );
    return (0, r.jsx)('div', {
        className: o.container,
        children: (0, r.jsx)(a.DsT, {
            currentPage: d,
            totalCount: l,
            pageSize: c,
            onPageChange: f,
            maxVisiblePages: s,
            renderPageWrapper: u
        })
    });
}
