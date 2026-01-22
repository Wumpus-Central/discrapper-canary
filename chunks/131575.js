n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    l = n(328913),
    o = n(407195),
    a = n(855790),
    c = n(594479);
function d(e) {
    let { dragStart: t, dragging: n, pinned: r, locked: d, className: u } = e;
    return (0, i.jsxs)(a.Ay, {
        className: s()(c.i, u),
        children: [
            (0, i.jsx)(l.A, {
                contained: !0,
                dragStart: t,
                locked: d,
            }),
            (0, i.jsx)(o.A, {
                dragStart: t,
                locked: d,
                pinned: r,
                dragging: n,
                contained: !0,
            }),
        ],
    });
}
