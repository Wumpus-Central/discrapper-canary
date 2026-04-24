"use strict";
n.d(t, { k: () => o });
var a = n(627968);
n(64700);
var r = n(224640),
    i = n(696208),
    l = n(430993),
    s = n(20742);
function o(e) {
    let {
        size: t = "md",
        gradientColor: n = "purple",
        graphic: o,
        badge: c,
        title: d,
        subtitle: u,
        actionBarInput: _,
        actions: p,
        children: m,
        ...h
    } = e;
    return (0, a.jsxs)(r.d, {
        ...h,
        size: t,
        paddingSize: "lg",
        children: [
            (0, a.jsx)(s.V6, { gradientColor: n, graphic: o, badge: c, title: d, subtitle: u }),
            (0, a.jsx)(l.c, { children: m }),
            (0, a.jsx)(i.H, { leading: _, actions: p, actionsFullWidth: null == _ }),
        ],
    });
}
