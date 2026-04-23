a.d(l, { k: () => s });
var t = a(627968);
a(64700);
var n = a(224640),
    o = a(696208),
    i = a(430993),
    r = a(20742);
function s(e) {
    let {
        size: l = "md",
        gradientColor: a = "purple",
        graphic: s,
        badge: d,
        title: u,
        subtitle: c,
        actionBarInput: b,
        actions: p,
        children: m,
        ...h
    } = e;
    return (0, t.jsxs)(n.d, {
        ...h,
        size: l,
        paddingSize: "lg",
        children: [
            (0, t.jsx)(r.V6, { gradientColor: a, graphic: s, badge: d, title: u, subtitle: c }),
            (0, t.jsx)(i.c, { children: m }),
            (0, t.jsx)(o.H, { leading: b, actions: p, actionsFullWidth: null == b }),
        ],
    });
}
