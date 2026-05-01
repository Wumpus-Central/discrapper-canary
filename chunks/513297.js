s.d(t, { A: () => d });
var i,
    n = s(627968);
s(64700);
var a = s(503698),
    l = s.n(a),
    o = s(990078),
    r = s(939249),
    c = s(909800),
    h = (((i = h || {})[(i.ACCEPT = 0)] = "ACCEPT"), (i[(i.DENY = 1)] = "DENY"), (i[(i.DEFAULT = 2)] = "DEFAULT"), i);
function u(e) {
    let { icon: t, tooltip: s, onClick: i, actionType: a = 2, shouldHighlight: h, loading: u = !1 } = e;
    return (0, n.jsx)(o.m, {
        text: s,
        children: (0, n.jsx)(r.D, {
            tag: "div",
            "aria-label": s,
            onClick: u ? void 0 : i,
            className: l()(c.hP, { [c.Jj]: 0 === a, [c.Bs]: 1 === a, [c.Zt]: h, [c.r9]: u }),
            children: (0, n.jsx)(t, { className: c.Kk, color: "currentColor" }),
        }),
    });
}
u.ActionTypes = h;
let d = u;
