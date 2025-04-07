n.d(t, {
    U: () => u,
    Z: () => d
});
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    c = n(341402),
    u = (((r = {}).TOP = 'top'), (r.BOTTOM = 'bottom'), r);
let d = l.forwardRef(function (e, t) {
    let { body: n, header: r, artClassName: l, buttonText: o, onClose: u, art: d, align: p } = e;
    return (0, i.jsx)('div', {
        className: c.tooltip,
        ref: t,
        children: (0, i.jsxs)('div', {
            className: c.content,
            children: [
                (0, i.jsx)('div', {
                    className: l,
                    children: d
                }),
                (0, i.jsxs)('div', {
                    className: c.body,
                    children: [
                        (0, i.jsx)(s.X6q, {
                            className: c.header,
                            variant: 'heading-md/bold',
                            color: 'always-white',
                            children: r
                        }),
                        null == n
                            ? null
                            : 'string' == typeof n
                              ? (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'always-white',
                                    children: n
                                })
                              : n
                    ]
                }),
                (0, i.jsx)('div', {
                    className: c.buttonContainer,
                    children: (0, i.jsx)(s.zxk, {
                        className: c.button,
                        onClick: (e) => {
                            null == u || u(e);
                        },
                        color: s.zxk.Colors.BRAND,
                        children: o
                    })
                }),
                (0, i.jsx)('div', { className: a()(c.pointer, { [c.pointerBottom]: 'bottom' === p }) })
            ]
        })
    });
});
