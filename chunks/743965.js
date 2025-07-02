(t.d(n, { d: () => f }), t(388685));
var r = t(255367),
    l = t(73800),
    c = t(120356),
    i = t.n(c),
    o = t(481060),
    a = t(663993),
    s = t(572004),
    u = t(73433),
    d = t(283574);
function h(e) {
    let { text: n } = e,
        [t, c] = l.useState(!1);
    return (0, r.jsx)(o.P3F, {
        onClick: () => {
            (0, s.JG)(
                n,
                () => c(!0),
                () => c(!1)
            );
        },
        children: t
            ? (0, r.jsx)(o.dz2, {
                  size: 'xs',
                  color: 'currentColor'
              })
            : (0, r.jsx)(o.TIy, {
                  size: 'xs',
                  color: 'currentColor'
              })
    });
}
function f(e) {
    let { language: n, content: l } = e,
        c = () =>
            (0, r.jsx)('code', {
                className: i()(d.scrollbarGhostHairline, 'hljs'),
                children: l
            });
    return (0, r.jsx)('pre', {
        children: (0, r.jsxs)('div', {
            className: u.codeContainer,
            children: [
                s.wS
                    ? (0, r.jsx)('div', {
                          className: u.codeActions,
                          children: (0, r.jsx)(h, { text: l })
                      })
                    : null,
                (0, r.jsx)(a.GI, {
                    createPromise: () => Promise.resolve().then(t.bind(t, 364964)),
                    webpackId: 364964,
                    renderFallback: c,
                    render: (e) => {
                        if (!(null != n && e.hasLanguage(n))) return c();
                        {
                            let t = e.highlight(n, l, !0);
                            return null == t
                                ? c()
                                : (0, r.jsx)('code', {
                                      className: i()(d.scrollbarGhostHairline, 'hljs', t.language),
                                      dangerouslySetInnerHTML: { __html: t.value }
                                  });
                        }
                    }
                })
            ]
        })
    });
}
