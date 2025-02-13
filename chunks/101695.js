n.d(t, { Z: () => r });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(824805);
function r(e) {
    let { changePage: t, offset: n, totalResults: r, pageLength: s } = e,
        o = Math.floor(n / s) + 1;
    return (0, i.jsx)('div', {
        className: a.container,
        children: (0, i.jsx)(l.DsT, {
            currentPage: o,
            totalCount: r,
            pageSize: s,
            onPageChange: t,
            maxVisiblePages: 5
        })
    });
}
