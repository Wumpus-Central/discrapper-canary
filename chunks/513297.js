"use strict";
n.d(t, { A: () => _ });
var i,
    r = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(939249),
    u = n(909800),
    c = (((i = c || {})[(i.ACCEPT = 0)] = "ACCEPT"), (i[(i.DENY = 1)] = "DENY"), (i[(i.DEFAULT = 2)] = "DEFAULT"), i);
function d(e) {
    let {
        icon: t,
        tooltip: n,
        onClick: i,
        actionType: s = 2,
        shouldHighlight: c,
        loading: d = !1,
        tabIndex: _ = 0,
    } = e;
    return (0, r.jsx)(o.m, {
        text: n,
        children: (0, r.jsx)(l.D, {
            tag: "div",
            "aria-label": n,
            tabIndex: _,
            onClick: d ? void 0 : i,
            className: a()(u.hP, { [u.Jj]: 0 === s, [u.Bs]: 1 === s, [u.Zt]: c, [u.r9]: d }),
            children: (0, r.jsx)(t, { className: u.Kk, color: "currentColor" }),
        }),
    });
}
d.ActionTypes = c;
let _ = d;
