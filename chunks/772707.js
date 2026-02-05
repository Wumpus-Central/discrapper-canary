"use strict";
n.d(t, { k: () => l });
var r = n(627968);
n(64700);
var i = n(224640),
    a = n(696208),
    s = n(430993),
    o = n(20742);
function l(e) {
    let {
        size: t = "md",
        gradientColor: n = "purple",
        graphic: l,
        badge: u,
        title: c,
        subtitle: d,
        actionBarInput: _,
        actions: f,
        children: p,
        ...h
    } = e;
    return (0, r.jsxs)(i.d, {
        ...h,
        size: t,
        paddingSize: "lg",
        children: [
            (0, r.jsx)(o.V6, { gradientColor: n, graphic: l, badge: u, title: c, subtitle: d }),
            (0, r.jsx)(s.c, { children: p }),
            (0, r.jsx)(a.H, { leading: _, actions: f, actionsFullWidth: null == _ }),
        ],
    });
}
