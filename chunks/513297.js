s.d(t, { A: () => A });
var i,
    n = s(627968);
s(64700);
var a = s(503698),
    r = s.n(a),
    l = s(990078),
    o = s(397927),
    u = s(528975),
    h = (((i = h || {})[(i.ACCEPT = 0)] = "ACCEPT"), (i[(i.DENY = 1)] = "DENY"), (i[(i.DEFAULT = 2)] = "DEFAULT"), i);
function c(e) {
    let { icon: t, tooltip: s, onClick: i, actionType: a = 2, shouldHighlight: h, loading: c = !1 } = e;
    return (0, n.jsx)(l.m, {
        text: s,
        children: (0, n.jsx)(o.DUT, {
            tag: "div",
            "aria-label": s,
            onClick: c ? void 0 : i,
            className: r()(u.hP, { [u.Jj]: 0 === a, [u.Bs]: 1 === a, [u.Zt]: h, [u.r9]: c }),
            children: (0, n.jsx)(t, { className: u.Kk, color: "currentColor" }),
        }),
    });
}
c.ActionTypes = h;
let A = c;
