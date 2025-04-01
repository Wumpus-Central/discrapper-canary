n.d(t, { Z: () => a });
var r = n(200651),
    i = n(192379),
    o = n(481060),
    l = n(451387);
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
                    className: l.body,
                    children: [
                        (0, r.jsx)(o.X6q, {
                            className: l.header,
                            variant: 'heading-md/bold',
                            color: 'always-white',
                            children: i
                        }),
                        null == n
                            ? null
                            : 'string' == typeof n
                              ? (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'always-white',
                                    children: n
                                })
                              : n
                    ]
                }),
                (0, r.jsx)('div', {
                    className: l.buttonContainer,
                    children: (0, r.jsx)(o.zxk, {
                        className: l.button,
                        onClick: (e) => {
                            null == u || u(e);
                        },
                        color: o.zxk.Colors.BRAND,
                        children: c
                    })
                }),
                (0, r.jsx)('div', { className: h })
            ]
        })
    });
});
