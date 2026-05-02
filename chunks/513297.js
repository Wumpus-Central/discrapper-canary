i.d(t, { A: () => d });
var s,
    n = i(627968);
i(64700);
var a = i(503698),
    r = i.n(a),
    l = i(990078),
    o = i(939249),
    u = i(909800),
    c = (((s = c || {})[(s.ACCEPT = 0)] = "ACCEPT"), (s[(s.DENY = 1)] = "DENY"), (s[(s.DEFAULT = 2)] = "DEFAULT"), s);
function h(e) {
    let { icon: t, tooltip: i, onClick: s, actionType: a = 2, shouldHighlight: c, loading: h = !1 } = e;
    return (0, n.jsx)(l.m, {
        text: i,
        children: (0, n.jsx)(o.D, {
            tag: "div",
            "aria-label": i,
            onClick: h ? void 0 : s,
            className: r()(u.hP, { [u.Jj]: 0 === a, [u.Bs]: 1 === a, [u.Zt]: c, [u.r9]: h }),
            children: (0, n.jsx)(t, { className: u.Kk, color: "currentColor" }),
        }),
    });
}
h.ActionTypes = c;
let d = h;
