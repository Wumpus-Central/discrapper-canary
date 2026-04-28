"use strict";
n.d(t, { k: () => l });
var i = n(627968);
n(64700);
var r = n(224640),
    s = n(696208),
    a = n(430993),
    o = n(20742);
function l(e) {
    let {
        size: t = "md",
        gradientColor: n = "purple",
        graphic: l,
        badge: _,
        title: d,
        subtitle: u,
        actionBarInput: c,
        actions: E,
        children: h,
        ...m
    } = e;
    return (0, i.jsxs)(r.d, {
        ...m,
        size: t,
        paddingSize: "lg",
        children: [
            (0, i.jsx)(o.V6, { gradientColor: n, graphic: l, badge: _, title: d, subtitle: u }),
            (0, i.jsx)(a.c, { children: h }),
            (0, i.jsx)(s.H, { leading: c, actions: E, actionsFullWidth: null == c }),
        ],
    });
}
