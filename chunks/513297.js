n.d(t, { A: () => m });
var i,
    s = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(990078),
    o = n(939249),
    c = n(909800),
    d = (((i = d || {})[(i.ACCEPT = 0)] = "ACCEPT"), (i[(i.DENY = 1)] = "DENY"), (i[(i.DEFAULT = 2)] = "DEFAULT"), i);
function u(e) {
    let { icon: t, tooltip: n, onClick: i, actionType: l = 2, shouldHighlight: d, loading: u = !1 } = e;
    return (0, s.jsx)(r.m, {
        text: n,
        children: (0, s.jsx)(o.D, {
            tag: "div",
            "aria-label": n,
            onClick: u ? void 0 : i,
            className: a()(c.hP, { [c.Jj]: 0 === l, [c.Bs]: 1 === l, [c.Zt]: d, [c.r9]: u }),
            children: (0, s.jsx)(t, { className: c.Kk, color: "currentColor" }),
        }),
    });
}
u.ActionTypes = d;
let m = u;
