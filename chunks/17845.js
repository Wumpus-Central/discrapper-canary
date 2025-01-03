t.d(n, {
    Z: function () {
        return m;
    }
});
var a = t(200651),
    i = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(780384),
    s = t(481060),
    c = t(410030),
    d = t(358459);
function u(e) {
    let { title: n } = e;
    return (0, a.jsx)(s.Heading, {
        className: l()(d.title, d.uppercase),
        variant: 'display-lg',
        color: 'header-primary',
        children: n
    });
}
function m(e) {
    let { title: n, description: t, button: r, className: m, children: p } = e,
        _ = (0, c.ZP)(),
        g = (0, o.wj)(_),
        v = i.useMemo(() => (Array.isArray(n) ? n.map((e, n) => (0, a.jsx)(u, { title: e }, n)) : (0, a.jsx)(u, { title: n })), [n]);
    return (0, a.jsxs)('div', {
        className: l()(d.container, m),
        children: [
            (0, a.jsx)('div', {
                className: d.content,
                children: (0, a.jsxs)('div', {
                    className: d.textContainer,
                    children: [
                        v,
                        null != t &&
                            (0, a.jsx)(s.Text, {
                                className: d.description,
                                variant: 'text-md/medium',
                                color: g ? 'text-muted' : 'header-primary',
                                children: t
                            }),
                        null != r &&
                            (0, a.jsx)('div', {
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
