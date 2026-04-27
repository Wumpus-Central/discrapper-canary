"use strict";
r.d(t, { k: () => o });
var n = r(627968);
r(64700);
var i = r(224640),
    a = r(696208),
    s = r(430993),
    l = r(20742);
function o(e) {
    let {
        size: t = "md",
        gradientColor: r = "purple",
        graphic: o,
        badge: c,
        title: d,
        subtitle: u,
        actionBarInput: _,
        actions: p,
        children: f,
        ...m
    } = e;
    return (0, n.jsxs)(i.d, {
        ...m,
        size: t,
        paddingSize: "lg",
        children: [
            (0, n.jsx)(l.V6, { gradientColor: r, graphic: o, badge: c, title: d, subtitle: u }),
            (0, n.jsx)(s.c, { children: f }),
            (0, n.jsx)(a.H, { leading: _, actions: p, actionsFullWidth: null == _ }),
        ],
    });
}
