n.d(t, {
    M: () => l,
    v: () => c,
});
var r = n(627968);
n(64700);
var i = n(855522),
    a = n(158954),
    s = n(827734),
    o = n(477540);
function l(e) {
    let { type: t } = e;
    return (0, r.jsx)(c, {
        icon:
            "user" === t
                ? (0, r.jsx)(a.nys, {
                      size: "xxs",
                      color: s.A.colors.INTERACTIVE_TEXT_DEFAULT,
                  })
                : (0, r.jsx)(a.RR9, {
                      size: "xxs",
                      color: s.A.colors.INTERACTIVE_TEXT_DEFAULT,
                  }),
        text: "user" === t ? i.A.Messages.STOREFRONT_USER_SUBSCRIPTION : i.A.Messages.STOREFRONT_SERVER_SUBSCRIPTION,
    });
}
function c(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: o.k,
        children: [
            t,
            (0, r.jsx)(a.EYj, {
                color: "text-strong",
                variant: "text-sm/medium",
                children: n,
            }),
        ],
    });
}
