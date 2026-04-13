l.d(t, { A: () => o });
var n = l(627968),
    i = l(503698),
    s = l.n(i),
    a = l(397927),
    r = l(372151);
function o(e) {
    let { isVisible: t, showLoadingSpinner: l, className: i } = e;
    return (0, n.jsx)("div", {
        className: s()(r.f, t && r.z, i),
        children: l && (0, n.jsx)(a.y$y, { type: a.tVU.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
    });
}
