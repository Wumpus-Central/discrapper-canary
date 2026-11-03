t.d(l, { M: () => d, v: () => x });
var e = t(477900);
t(582128);
var i = t(855522),
    n = t(950305),
    r = t(664121),
    a = t(834730),
    o = t(661531),
    c = t(154862);
function d(s) {
    let { type: l } = s;
    return (0, e.jsx)(x, {
        icon:
            "user" === l
                ? (0, e.jsx)(n.UserIcon, { size: "xxs", color: o.A.colors.INTERACTIVE_TEXT_DEFAULT })
                : (0, e.jsx)(r.R, { size: "xxs", color: o.A.colors.INTERACTIVE_TEXT_DEFAULT }),
        text: "user" === l ? i.A.Messages.STOREFRONT_USER_SUBSCRIPTION : i.A.Messages.STOREFRONT_SERVER_SUBSCRIPTION,
    });
}
function x(s) {
    let { icon: l, text: t } = s;
    return (0, e.jsxs)("div", {
        className: c.k,
        children: [l, (0, e.jsx)(a.E, { color: "text-strong", variant: "body-sm/medium", children: t })],
    });
}
