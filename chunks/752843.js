t.d(n, {
    V: () => u,
    Z: () => d
});
var r = t(200651);
t(192379);
var l = t(628028),
    a = t(220427),
    o = t(777207),
    s = t(692547),
    i = t(330711),
    c = t(914439);
function d(e) {
    let { type: n } = e;
    return (0, r.jsx)(u, {
        icon:
            'user' === n
                ? (0, r.jsx)(a.t, {
                      size: 'xxs',
                      color: s.Z.colors.INTERACTIVE_NORMAL
                  })
                : (0, r.jsx)(l.Q, {
                      size: 'xxs',
                      color: s.Z.colors.INTERACTIVE_NORMAL
                  }),
        text: 'user' === n ? i.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : i.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
    });
}
function u(e) {
    let { icon: n, text: t } = e;
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            n,
            (0, r.jsx)(o.x, {
                color: 'header-primary',
                variant: 'text-sm/medium',
                children: t
            })
        ]
    });
}
