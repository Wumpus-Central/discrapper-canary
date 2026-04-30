n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var a = n(503698),
    s = n.n(a),
    i = n(854378),
    r = n(431870);
function o(e) {
    let { children: t, className: n, ...a } = e,
        o = t();
    return (0, l.jsx)(i.Ay, {
        ...a,
        className: s()(n, r.kL),
        contentClassName: r.Qs,
        children: o.map((e, t) =>
            (0, l.jsx)("div", { className: r.fi, style: { flexBasis: `${100 / o.length}%` }, children: e }, t),
        ),
    });
}
