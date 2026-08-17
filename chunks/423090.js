l.d(t, { M: () => d, v: () => x });
var e = l(477900);
l(582128);
var i = l(855522),
    n = l(950305),
    r = l(664121),
    a = l(834730),
    o = l(661531),
    c = l(242197);
function d(s) {
    let { type: t } = s;
    return (0, e.jsx)(x, {
        icon:
            "user" === t
                ? (0, e.jsx)(n.UserIcon, { size: "xxs", color: o.A.colors.INTERACTIVE_TEXT_DEFAULT })
                : (0, e.jsx)(r.R, { size: "xxs", color: o.A.colors.INTERACTIVE_TEXT_DEFAULT }),
        text: "user" === t ? i.A.Messages.STOREFRONT_USER_SUBSCRIPTION : i.A.Messages.STOREFRONT_SERVER_SUBSCRIPTION,
    });
}
function x(s) {
    let { icon: t, text: l } = s;
    return (0, e.jsxs)("div", {
        className: c.k,
        children: [t, (0, e.jsx)(a.E, { color: "text-strong", variant: "text-sm/medium", children: l })],
    });
}
