l.d(n, {
    V: () => u,
    Z: () => d
});
var t = l(200651);
l(192379);
var r = l(628028),
    s = l(220427),
    i = l(777207),
    a = l(692547),
    o = l(330711),
    c = l(914439);
function d(e) {
    let { type: n } = e;
    return (0, t.jsx)(u, {
        icon:
            'user' === n
                ? (0, t.jsx)(s.t, {
                      size: 'xxs',
                      color: a.Z.colors.INTERACTIVE_NORMAL
                  })
                : (0, t.jsx)(r.Q, {
                      size: 'xxs',
                      color: a.Z.colors.INTERACTIVE_NORMAL
                  }),
        text: 'user' === n ? o.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : o.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
    });
}
function u(e) {
    let { icon: n, text: l } = e;
    return (0, t.jsxs)('div', {
        className: c.container,
        children: [
            n,
            (0, t.jsx)(i.x, {
                color: 'header-primary',
                variant: 'text-sm/medium',
                children: l
            })
        ]
    });
}
