n.d(t, { Z: () => o });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(930362);
function o(e) {
    let { onPageChange: t, offset: n, totalCount: o, pageSize: s } = e,
        c = Math.floor(n / s) + 1,
        u = i.useCallback(
            (e) => {
                t(e - 1);
            },
            [t]
        );
    return (0, r.jsx)('div', {
        className: a.container,
        children: (0, r.jsx)(l.DsT, {
            currentPage: c,
            totalCount: o,
            pageSize: s,
            onPageChange: u,
            maxVisiblePages: 5
        })
    });
}
