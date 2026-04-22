l.d(n, { A: () => o });
var t = l(627968),
    i = l(503698),
    r = l.n(i),
    s = l(289873),
    a = l(778599);
function o(e) {
    let { isVisible: n, showLoadingSpinner: l, className: i } = e;
    return (0, t.jsx)("div", {
        className: r()(a.f, n && a.z, i),
        children: l && (0, t.jsx)(s.y, { type: s.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
    });
}
