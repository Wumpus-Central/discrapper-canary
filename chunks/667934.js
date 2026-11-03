a.d(n, { default: () => p });
var r = a(477900);
a(582128);
var e = a(772707),
    i = a(364522),
    s = a(834730),
    l = a(60888),
    o = a(969623);
function d(t) {
    let { url: n } = t,
        { protocol: a, hostname: e, theRestOfTheUrl: d } = (0, l.L)(n);
    return (0, r.jsxs)(i.Ip, {
        className: o.u,
        children: [
            (0, r.jsxs)(s.E, { tag: "span", variant: "body-md/normal", color: "text-muted", children: [a, "//"] }),
            (0, r.jsx)(s.E, { tag: "span", variant: "body-md/semibold", color: "text-default", children: e }),
            (0, r.jsx)(s.E, { tag: "span", variant: "body-md/normal", color: "text-muted", children: d }),
        ],
    });
}
var c = a(105292),
    u = a(117816);
function p(t) {
    let { url: n, onClose: a, transitionState: i } = t;
    return (0, r.jsx)(e.k, {
        transitionState: i,
        onClose: a,
        graphic: { src: u.A, type: "image" },
        gradientColor: "blue",
        title: c.intl.string(c.t["2B3wj8"]),
        subtitle: c.intl.format(c.t.jnHyYU, {}),
        actions: [{ text: c.intl.string(c.t["/g10LC"]), onClick: a }],
        children: (0, r.jsx)(d, { url: n }),
    });
}
