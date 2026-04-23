"use strict";
n.d(t, { k: () => d });
var a = n(627968);
n(64700);
var i = n(224640),
    r = n(696208),
    l = n(430993),
    s = n(20742);
function d(e) {
    let {
        size: t = "md",
        gradientColor: n = "purple",
        graphic: d,
        badge: o,
        title: c,
        subtitle: u,
        actionBarInput: _,
        actions: m,
        children: p,
        ...h
    } = e;
    return (0, a.jsxs)(i.d, {
        ...h,
        size: t,
        paddingSize: "lg",
        children: [
            (0, a.jsx)(s.V6, { gradientColor: n, graphic: d, badge: o, title: c, subtitle: u }),
            (0, a.jsx)(l.c, { children: p }),
            (0, a.jsx)(r.H, { leading: _, actions: m, actionsFullWidth: null == _ }),
        ],
    });
}
