n.d(e, {
    V: () => u,
    Z: () => d
});
var i = n(200651);
n(192379);
var s = n(628028),
    t = n(220427),
    r = n(777207),
    a = n(692547),
    o = n(330711),
    c = n(296760);
function d(l) {
    let { type: e } = l;
    return (0, i.jsx)(u, {
        icon:
            'user' === e
                ? (0, i.jsx)(t.t, {
                      size: 'xxs',
                      color: a.Z.colors.INTERACTIVE_NORMAL
                  })
                : (0, i.jsx)(s.Q, {
                      size: 'xxs',
                      color: a.Z.colors.INTERACTIVE_NORMAL
                  }),
        text: 'user' === e ? o.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : o.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
    });
}
function u(l) {
    let { icon: e, text: n } = l;
    return (0, i.jsxs)('div', {
        className: c.container,
        children: [
            e,
            (0, i.jsx)(r.x, {
                color: 'header-primary',
                variant: 'text-sm/medium',
                children: n
            })
        ]
    });
}
