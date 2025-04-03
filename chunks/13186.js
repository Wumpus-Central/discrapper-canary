n.d(t, { Z: () => a });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(341402);
let a = i.forwardRef(function (e, t) {
    let { body: n, header: i, contentClassName: a, artClassName: s, buttonText: c, onClose: u, className: d, art: p, pointerClassName: h } = e;
    return (0, r.jsx)('div', {
        className: d,
        ref: t,
        children: (0, r.jsxs)('div', {
            className: a,
            children: [
                (0, r.jsx)('div', {
                    className: s,
                    children: p
                }),
                (0, r.jsxs)('div', {
                    className: o.body,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            className: o.header,
                            variant: 'heading-md/bold',
                            color: 'always-white',
                            children: i
                        }),
                        null == n
                            ? null
                            : 'string' == typeof n
                              ? (0, r.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'always-white',
                                    children: n
                                })
                              : n
                    ]
                }),
                (0, r.jsx)('div', {
                    className: o.buttonContainer,
                    children: (0, r.jsx)(l.zxk, {
                        className: o.button,
                        onClick: (e) => {
                            null == u || u(e);
                        },
                        color: l.zxk.Colors.BRAND,
                        children: c
                    })
                }),
                (0, r.jsx)('div', { className: h })
            ]
        })
    });
});
