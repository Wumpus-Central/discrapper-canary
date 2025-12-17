n.d(t, { Z: () => s });
var r = n(54381),
    l = n(473749),
    i = n(481060),
    a = n(648221);
function s(e) {
    let { onPageChange: t, offset: n, totalCount: s, pageSize: o, renderPageWrapper: u } = e,
        c = Math.floor(n / o) + 1,
        E = l.useCallback(
            (e) => {
                t(e - 1);
            },
            [t],
        );
    return (0, r.jsx)("div", {
        className: a.container,
        children: (0, r.jsx)(i.DsT, {
            currentPage: c,
            totalCount: s,
            pageSize: o,
            onPageChange: E,
            maxVisiblePages: 5,
            renderPageWrapper: u,
        }),
    });
}
