n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(854378),
    s = n(431870);
function o(e) {
    let { children: t, className: n, ...l } = e,
        o = t();
    return (0, r.jsx)(a.Ay, {
        ...l,
        className: i()(n, s.kL),
        contentClassName: s.Qs,
        children: o.map((e, t) =>
            (0, r.jsx)("div", { className: s.fi, style: { flexBasis: `${100 / o.length}%` }, children: e }, t),
        ),
    });
}
