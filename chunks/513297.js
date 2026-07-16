"use strict";
n.d(t, { A: () => _ });
var i,
    r = n(627968);
n(64700);
var a = n(503698),
    s = n.n(a),
    l = n(866665),
    o = n(939249),
    d = n(909800),
    c = (((i = c || {})[(i.ACCEPT = 0)] = "ACCEPT"), (i[(i.DENY = 1)] = "DENY"), (i[(i.DEFAULT = 2)] = "DEFAULT"), i);
function u(e) {
    let {
        icon: t,
        tooltip: n,
        onClick: i,
        actionType: a = 2,
        shouldHighlight: c,
        loading: u = !1,
        tabIndex: _ = 0,
    } = e;
    return (0, r.jsx)(l.m, {
        text: n,
        children: (0, r.jsx)(o.D, {
            tag: "div",
            "aria-label": n,
            tabIndex: _,
            onClick: u ? void 0 : i,
            className: s()(d.hP, { [d.Jj]: 0 === a, [d.Bs]: 1 === a, [d.Zt]: c, [d.r9]: u }),
            children: (0, r.jsx)(t, { className: d.Kk, color: "currentColor" }),
        }),
    });
}
u.ActionTypes = c;
let _ = u;
