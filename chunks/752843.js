t.d(n, {
    V: () => u,
    Z: () => d
});
var l = t(200651);
t(192379);
var r = t(628028),
    a = t(220427),
    o = t(777207),
    i = t(692547),
    s = t(330711),
    c = t(914439);
function d(e) {
    let { type: n } = e;
    return (0, l.jsx)(u, {
        icon:
            'user' === n
                ? (0, l.jsx)(a.t, {
                      size: 'xxs',
                      color: i.Z.colors.INTERACTIVE_NORMAL
                  })
                : (0, l.jsx)(r.Q, {
                      size: 'xxs',
                      color: i.Z.colors.INTERACTIVE_NORMAL
                  }),
        text: 'user' === n ? s.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : s.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
    });
}
function u(e) {
    let { icon: n, text: t } = e;
    return (0, l.jsxs)('div', {
        className: c.container,
        children: [
            n,
            (0, l.jsx)(o.x, {
                color: 'header-primary',
                variant: 'text-sm/medium',
                children: t
            })
        ]
    });
}
