s.d(t, { A: () => d });
var i,
    n = s(627968);
s(64700);
var a = s(503698),
    r = s.n(a),
    l = s(990078),
    o = s(939249),
    u = s(909800),
    c = (((i = c || {})[(i.ACCEPT = 0)] = "ACCEPT"), (i[(i.DENY = 1)] = "DENY"), (i[(i.DEFAULT = 2)] = "DEFAULT"), i);
function h(e) {
    let {
        icon: t,
        tooltip: s,
        onClick: i,
        actionType: a = 2,
        shouldHighlight: c,
        loading: h = !1,
        tabIndex: d = 0,
    } = e;
    return (0, n.jsx)(l.m, {
        text: s,
        children: (0, n.jsx)(o.D, {
            tag: "div",
            "aria-label": s,
            tabIndex: d,
            onClick: h ? void 0 : i,
            className: r()(u.hP, { [u.Jj]: 0 === a, [u.Bs]: 1 === a, [u.Zt]: c, [u.r9]: h }),
            children: (0, n.jsx)(t, { className: u.Kk, color: "currentColor" }),
        }),
    });
}
h.ActionTypes = c;
let d = h;
