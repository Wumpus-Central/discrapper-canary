l.d(e, {
    V: function () {
        return u;
    },
    Z: function () {
        return d;
    }
});
var t = l(200651);
l(192379);
var i = l(628028),
    o = l(220427),
    r = l(777207),
    s = l(692547),
    a = l(330711),
    c = l(103665);
function d(n) {
    let { type: e } = n;
    return (0, t.jsx)(u, {
        icon:
            'user' === e
                ? (0, t.jsx)(o.t, {
                      size: 'xxs',
                      color: s.Z.colors.INTERACTIVE_NORMAL
                  })
                : (0, t.jsx)(i.Q, {
                      size: 'xxs',
                      color: s.Z.colors.INTERACTIVE_NORMAL
                  }),
        text: 'user' === e ? a.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : a.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
    });
}
function u(n) {
    let { icon: e, text: l } = n;
    return (0, t.jsxs)('div', {
        className: c.container,
        children: [
            e,
            (0, t.jsx)(r.x, {
                color: 'header-primary',
                variant: 'text-sm/medium',
                children: l
            })
        ]
    });
}
