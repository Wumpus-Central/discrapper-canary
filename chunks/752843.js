n.d(t, {
    V: () => d,
    Z: () => u
});
var r = n(255367);
n(73800);
var i = n(628028),
    a = n(220427),
    o = n(777207),
    s = n(692547),
    l = n(330711),
    c = n(914439);
function u(e) {
    let { type: t } = e;
    return (0, r.jsx)(d, {
        icon:
            'user' === t
                ? (0, r.jsx)(a.t, {
                      size: 'xxs',
                      color: s.Z.colors.INTERACTIVE_NORMAL
                  })
                : (0, r.jsx)(i.Q, {
                      size: 'xxs',
                      color: s.Z.colors.INTERACTIVE_NORMAL
                  }),
        text: 'user' === t ? l.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : l.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
    });
}
function d(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            t,
            (0, r.jsx)(o.x, {
                color: 'header-primary',
                variant: 'text-sm/medium',
                children: n
            })
        ]
    });
}
