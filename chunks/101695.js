n.d(t, { Z: () => a });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    o = n(930362);
function a(e) {
    let { onPageChange: t, offset: n, totalCount: a, pageSize: s } = e,
        c = Math.floor(n / s) + 1,
        u = i.useCallback(
            (e) => {
                t(e - 1);
            },
            [t]
        );
    return (0, r.jsx)('div', {
        className: o.container,
        children: (0, r.jsx)(l.DsT, {
            currentPage: c,
            totalCount: a,
            pageSize: s,
            onPageChange: u,
            maxVisiblePages: 5
        })
    });
}
