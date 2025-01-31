n.d(t, { Z: () => m });
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(780384),
    o = n(481060),
    c = n(410030),
    d = n(358459);
function u(e) {
    let { title: t } = e;
    return (0, i.jsx)(o.X6q, {
        className: l()(d.title, d.uppercase),
        variant: 'display-lg',
        color: 'header-primary',
        children: t
    });
}
function m(e) {
    let { title: t, description: n, button: r, className: m, children: h } = e,
        p = (0, c.ZP)(),
        g = (0, s.wj)(p),
        _ = a.useMemo(() => (Array.isArray(t) ? t.map((e, t) => (0, i.jsx)(u, { title: e }, t)) : (0, i.jsx)(u, { title: t })), [t]);
    return (0, i.jsxs)('div', {
        className: l()(d.container, m),
        children: [
            (0, i.jsx)('div', {
                className: d.content,
                children: (0, i.jsxs)('div', {
                    className: d.textContainer,
                    children: [
                        _,
                        null != n &&
                            (0, i.jsx)(o.Text, {
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
            h
        ]
    });
}
