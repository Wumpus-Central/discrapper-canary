"use strict";
n.d(t, { k: () => o });
var i = n(477900);
n(582128);
var r = n(224640),
    a = n(696208),
    s = n(430993),
    l = n(20742);
function o(e) {
    let {
        size: t = "md",
        gradientColor: n = "purple",
        graphic: o,
        badge: d,
        title: c,
        subtitle: u,
        actionBarInput: _,
        actions: E,
        children: A,
        "aria-label": h,
        ...I
    } = e;
    return (0, i.jsxs)(r.d, {
        ...I,
        "aria-label": h ?? c,
        size: t,
        paddingSize: "lg",
        children: [
            (0, i.jsx)(l.V6, { gradientColor: n, graphic: o, badge: d, title: c, subtitle: u }),
            (0, i.jsx)(s.c, { children: A }),
            (0, i.jsx)(a.H, { leading: _, actions: E, actionsFullWidth: null == _ }),
        ],
    });
}
