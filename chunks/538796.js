"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(854378),
    a = n(431870);
function o(e) {
    let { children: t, className: n, ...s } = e,
        o = t();
    return (0, i.jsx)(l.Ay, {
        ...s,
        className: r()(n, a.kL),
        contentClassName: a.Qs,
        children: o.map((e, t) =>
            (0, i.jsx)("div", { className: a.fi, style: { flexBasis: `${100 / o.length}%` }, children: e }, t),
        ),
    });
}
