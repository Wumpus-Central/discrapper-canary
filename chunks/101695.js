t.d(e, { Z: () => a });
var n = t(951288),
    r = t(647438),
    l = t(481060),
    i = t(254610);
function a(A) {
    let { onPageChange: e, offset: t, totalCount: a, pageSize: s, renderPageWrapper: o } = A,
        g = Math.floor(t / s) + 1,
        c = r.useCallback(
            (A) => {
                e(A - 1);
            },
            [e],
        );
    return (0, n.jsx)("div", {
        className: i.container,
        children: (0, n.jsx)(l.DsT, {
            currentPage: g,
            totalCount: a,
            pageSize: s,
            onPageChange: c,
            maxVisiblePages: 5,
            renderPageWrapper: o,
        }),
    });
}
