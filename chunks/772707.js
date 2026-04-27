a.d(t, { k: () => o });
var r = a(627968);
a(64700);
var n = a(224640),
    l = a(696208),
    i = a(430993),
    s = a(20742);
function o(e) {
    let {
        size: t = "md",
        gradientColor: a = "purple",
        graphic: o,
        badge: c,
        title: d,
        subtitle: u,
        actionBarInput: h,
        actions: p,
        children: m,
        ...f
    } = e;
    return (0, r.jsxs)(n.d, {
        ...f,
        size: t,
        paddingSize: "lg",
        children: [
            (0, r.jsx)(s.V6, { gradientColor: a, graphic: o, badge: c, title: d, subtitle: u }),
            (0, r.jsx)(i.c, { children: m }),
            (0, r.jsx)(l.H, { leading: h, actions: p, actionsFullWidth: null == h }),
        ],
    });
}
