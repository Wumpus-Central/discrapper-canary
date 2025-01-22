n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(780384),
    s = n(481060),
    c = n(410030),
    d = n(358459);
function u(e) {
    let { title: t } = e;
    return (0, i.jsx)(s.Heading, {
        className: l()(d.title, d.uppercase),
        variant: 'display-lg',
        color: 'header-primary',
        children: t
    });
}
function m(e) {
    let { title: t, description: n, button: r, className: m, children: p } = e,
        h = (0, c.ZP)(),
        g = (0, o.wj)(h),
        C = a.useMemo(() => (Array.isArray(t) ? t.map((e, t) => (0, i.jsx)(u, { title: e }, t)) : (0, i.jsx)(u, { title: t })), [t]);
    return (0, i.jsxs)('div', {
        className: l()(d.container, m),
        children: [
            (0, i.jsx)('div', {
                className: d.content,
                children: (0, i.jsxs)('div', {
                    className: d.textContainer,
                    children: [
                        C,
                        null != n &&
                            (0, i.jsx)(s.Text, {
                                className: d.description,
                                variant: 'text-md/medium',
                                color: g ? 'text-muted' : 'header-primary',
                                children: n
                            }),
                        null != r &&
                            (0, i.jsx)('div', {
                                className: d.buttonContainer,
                                children: r
                            })
                    ]
                })
            }),
            p
        ]
    });
}
