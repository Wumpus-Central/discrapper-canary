n.d(t, {
    V: () => c,
    Z: () => l,
});
var r = n(951288);
n(647438);
var i = n(793030),
    a = n(692547),
    o = n(330711),
    s = n(922762);
function l(e) {
    let { type: t } = e;
    return (0, r.jsx)(c, {
        icon:
            "user" === t
                ? (0, r.jsx)(i.tBG, {
                      size: "xxs",
                      color: a.Z.colors.INTERACTIVE_NORMAL,
                  })
                : (0, r.jsx)(i.QTo, {
                      size: "xxs",
                      color: a.Z.colors.INTERACTIVE_NORMAL,
                  }),
        text: "user" === t ? o.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : o.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION,
    });
}
function c(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: s.container,
        children: [
            t,
            (0, r.jsx)(i.xvT, {
                color: "header-primary",
                variant: "text-sm/medium",
                children: n,
            }),
        ],
    });
}
