n.d(t, { Z: () => o });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(930362);
function o(e) {
    let { changePage: t, offset: n, totalResults: o, pageLength: a } = e,
        s = Math.floor(n / a) + 1;
    return (0, r.jsx)('div', {
        className: l.container,
        children: (0, r.jsx)(i.DsT, {
            currentPage: s,
            totalCount: o,
            pageSize: a,
            onPageChange: t,
            maxVisiblePages: 5
        })
    });
}
