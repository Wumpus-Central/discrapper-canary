n.d(t, { M: () => o, v: () => d });
var l = n(627968);
n(64700);
var a = n(855522),
    r = n(158954),
    s = n(827734),
    i = n(477540);
function o(e) {
    let { type: t } = e;
    return (0, l.jsx)(d, {
        icon:
            "user" === t
                ? (0, l.jsx)(r.nys, { size: "xxs", color: s.A.colors.INTERACTIVE_TEXT_DEFAULT })
                : (0, l.jsx)(r.RR9, { size: "xxs", color: s.A.colors.INTERACTIVE_TEXT_DEFAULT }),
        text: "user" === t ? a.A.Messages.STOREFRONT_USER_SUBSCRIPTION : a.A.Messages.STOREFRONT_SERVER_SUBSCRIPTION,
    });
}
function d(e) {
    let { icon: t, text: n } = e;
    return (0, l.jsxs)("div", {
        className: i.k,
        children: [t, (0, l.jsx)(r.EYj, { color: "text-strong", variant: "text-sm/medium", children: n })],
    });
}
