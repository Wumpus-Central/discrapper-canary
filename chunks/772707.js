n.d(t, { k: () => s });
var a = n(627968);
n(64700);
var i = n(224640),
    l = n(696208),
    r = n(430993),
    o = n(20742);
function s(e) {
    let {
        size: t = "md",
        gradientColor: n = "purple",
        graphic: s,
        badge: c,
        title: d,
        subtitle: u,
        actionBarInput: _,
        actions: p,
        children: f,
        ...h
    } = e;
    return (0, a.jsxs)(i.d, {
        ...h,
        size: t,
        paddingSize: "lg",
        children: [
            (0, a.jsx)(o.V6, { gradientColor: n, graphic: s, badge: c, title: d, subtitle: u }),
            (0, a.jsx)(r.c, { children: f }),
            (0, a.jsx)(l.H, { leading: _, actions: p, actionsFullWidth: null == _ }),
        ],
    });
}
