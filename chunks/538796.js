n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    i = n(854378),
    s = n(431870);
function o(e) {
    let { children: t, className: n, ...r } = e,
        o = t();
    return (0, l.jsx)(i.Ay, {
        ...r,
        className: a()(n, s.kL),
        contentClassName: s.Qs,
        children: o.map((e, t) =>
            (0, l.jsx)("div", { className: s.fi, style: { flexBasis: `${100 / o.length}%` }, children: e }, t),
        ),
    });
}
