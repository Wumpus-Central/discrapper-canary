t.d(r, {
    V: () => u,
    Z: () => d
});
var n = t(200651);
t(192379);
var l = t(628028),
    s = t(220427),
    o = t(777207),
    a = t(692547),
    i = t(330711),
    c = t(408717);
function d(e) {
    let { type: r } = e;
    return (0, n.jsx)(u, {
        icon:
            'user' === r
                ? (0, n.jsx)(s.t, {
                      size: 'xxs',
                      color: a.Z.colors.INTERACTIVE_NORMAL
                  })
                : (0, n.jsx)(l.Q, {
                      size: 'xxs',
                      color: a.Z.colors.INTERACTIVE_NORMAL
                  }),
        text: 'user' === r ? i.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : i.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
    });
}
function u(e) {
    let { icon: r, text: t } = e;
    return (0, n.jsxs)('div', {
        className: c.container,
        children: [
            r,
            (0, n.jsx)(o.x, {
                color: 'header-primary',
                variant: 'text-sm/medium',
                children: t
            })
        ]
    });
}
