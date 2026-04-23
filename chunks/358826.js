t.d(n, { A: () => o });
var l = t(627968),
    i = t(503698),
    r = t.n(i),
    a = t(289873),
    s = t(778599);
function o(e) {
    let { isVisible: n, showLoadingSpinner: t, className: i } = e;
    return (0, l.jsx)("div", {
        className: r()(s.f, n && s.z, i),
        children: t && (0, l.jsx)(a.y, { type: a.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
    });
}
