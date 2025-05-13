n.d(t, { Z: () => m }), n(953529);
var r = n(255367),
    a = n(73800),
    i = n(120356),
    l = n.n(i),
    s = n(780384),
    o = n(481060),
    c = n(410030),
    d = n(688465),
    u = n(750567);
function p(e) {
    let { title: t, betaTag: n } = e;
    return (0, r.jsxs)(o.X6q, {
        className: l()(u.title, u.uppercase),
        variant: 'display-lg',
        color: 'header-primary',
        children: [t, n && (0, r.jsx)(d.Z, { className: u.betaTag })]
    });
}
function m(e) {
    let { title: t, description: n, button: i, className: d, children: m, betaTag: h = !1 } = e,
        g = (0, c.ZP)(),
        _ = (0, s.wj)(g),
        f = a.useMemo(
            () =>
                Array.isArray(t)
                    ? t.map((e, t) =>
                          (0, r.jsx)(
                              p,
                              {
                                  title: e,
                                  betaTag: h
                              },
                              t
                          )
                      )
                    : (0, r.jsx)(p, {
                          title: t,
                          betaTag: h
                      }),
            [t, h]
        );
    return (0, r.jsxs)('div', {
        className: l()(u.container, d),
        children: [
            (0, r.jsx)('div', {
                className: u.content,
                children: (0, r.jsxs)('div', {
                    className: u.textContainer,
                    children: [
                        f,
                        null != n &&
                            (0, r.jsx)(o.Text, {
                                className: u.description,
                                variant: 'text-md/medium',
                                color: _ ? 'text-muted' : 'header-primary',
                                children: n
                            }),
                        null != i &&
                            (0, r.jsx)('div', {
                                className: u.buttonContainer,
                                children: i
                            })
                    ]
                })
            }),
            m
        ]
    });
}
