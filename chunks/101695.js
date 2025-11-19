n.d(t, { Z: () => a });
var r = n(54381),
    l = n(473749),
    i = n(481060),
    s = n(254610);
function a(e) {
    let { onPageChange: t, offset: n, totalCount: a, pageSize: o, renderPageWrapper: u } = e,
        c = Math.floor(n / o) + 1,
        E = l.useCallback(
            (e) => {
                t(e - 1);
            },
            [t],
        );
    return (0, r.jsx)("div", {
        className: s.container,
        children: (0, r.jsx)(i.DsT, {
            currentPage: c,
            totalCount: a,
            pageSize: o,
            onPageChange: E,
            maxVisiblePages: 5,
            renderPageWrapper: u,
        }),
    });
}
