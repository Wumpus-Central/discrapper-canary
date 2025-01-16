n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(11886);
function a(e) {
    let { changePage: t, offset: n, totalResults: a, pageLength: s } = e,
        o = Math.floor(n / s) + 1;
    return (0, i.jsx)('div', {
        className: r.container,
        children: (0, i.jsx)(l.Paginator, {
            currentPage: o,
            totalCount: a,
            pageSize: s,
            onPageChange: t,
            maxVisiblePages: 5
        })
    });
}
