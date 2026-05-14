n.d(e, { default: () => p });
var a = n(627968);
n(64700);
var r = n(772707),
    i = n(364522),
    s = n(834730),
    l = n(60888),
    o = n(750662);
function c(t) {
    let { url: e } = t,
        { protocol: n, hostname: r, theRestOfTheUrl: c } = (0, l.L)(e);
    return (0, a.jsxs)(i.Ip, {
        className: o.u,
        children: [
            (0, a.jsxs)(s.E, { tag: "span", variant: "text-md/normal", color: "text-muted", children: [n, "//"] }),
            (0, a.jsx)(s.E, { tag: "span", variant: "text-md/semibold", color: "text-default", children: r }),
            (0, a.jsx)(s.E, { tag: "span", variant: "text-md/normal", color: "text-muted", children: c }),
        ],
    });
}
var d = n(375708),
    u = n(117816);
function p(t) {
    let { url: e, onClose: n, transitionState: i } = t;
    return (0, a.jsx)(r.k, {
        transitionState: i,
        onClose: n,
        graphic: { src: u.A, type: "image" },
        gradientColor: "blue",
        title: d.intl.string(d.t["2B3wj8"]),
        subtitle: d.intl.format(d.t.jnHyYU, {}),
        actions: [{ text: d.intl.string(d.t["/g10LC"]), onClick: n }],
        children: (0, a.jsx)(c, { url: e }),
    });
}
