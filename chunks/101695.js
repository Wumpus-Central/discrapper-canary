n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(930362);
function a(e) {
    let { changePage: t, offset: n, totalResults: a, pageLength: o } = e,
        s = Math.floor(n / o) + 1;
    return (0, r.jsx)('div', {
        className: l.container,
        children: (0, r.jsx)(i.DsT, {
            currentPage: s,
            totalCount: a,
            pageSize: o,
            onPageChange: t,
            maxVisiblePages: 5
        })
    });
}
