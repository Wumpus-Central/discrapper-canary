n.d(t, { M: () => c, v: () => u });
var a = n(627968);
n(64700);
var l = n(855522),
    r = n(950305),
    i = n(664121),
    s = n(834730),
    o = n(827734),
    d = n(323517);
function c(e) {
    let { type: t } = e;
    return (0, a.jsx)(u, {
        icon:
            "user" === t
                ? (0, a.jsx)(r.n, { size: "xxs", color: o.A.colors.INTERACTIVE_TEXT_DEFAULT })
                : (0, a.jsx)(i.R, { size: "xxs", color: o.A.colors.INTERACTIVE_TEXT_DEFAULT }),
        text: "user" === t ? l.A.Messages.STOREFRONT_USER_SUBSCRIPTION : l.A.Messages.STOREFRONT_SERVER_SUBSCRIPTION,
    });
}
function u(e) {
    let { icon: t, text: n } = e;
    return (0, a.jsxs)("div", {
        className: d.k,
        children: [t, (0, a.jsx)(s.E, { color: "text-strong", variant: "text-sm/medium", children: n })],
    });
}
