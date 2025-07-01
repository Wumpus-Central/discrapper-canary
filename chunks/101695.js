n.d(t, { Z: () => a });
var r = n(255367),
    l = n(73800),
    i = n(481060),
    s = n(930362);
function a(e) {
    let { onPageChange: t, offset: n, totalCount: a, pageSize: o } = e,
        u = Math.floor(n / o) + 1,
        c = l.useCallback(
            (e) => {
                t(e - 1);
            },
            [t]
        );
    return (0, r.jsx)('div', {
        className: s.container,
        children: (0, r.jsx)(i.DsT, {
            currentPage: u,
            totalCount: a,
            pageSize: o,
            onPageChange: c,
            maxVisiblePages: 5
        })
    });
}
