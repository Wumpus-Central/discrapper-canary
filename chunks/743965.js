t.d(n, { d: () => _ }), t(388685);
var r = t(200651),
    l = t(192379),
    i = t(120356),
    u = t.n(i),
    c = t(481060),
    o = t(663993),
    a = t(572004),
    d = t(73433),
    s = t(283574);
function f(e) {
    let { text: n } = e,
        [t, i] = l.useState(!1);
    return (0, r.jsx)(c.P3F, {
        onClick: () => {
            (0, a.JG)(
                n,
                () => i(!0),
                () => i(!1)
            );
        },
        children: t
            ? (0, r.jsx)(c.dz2, {
                  size: 'xs',
                  color: 'currentColor'
              })
            : (0, r.jsx)(c.TIy, {
                  size: 'xs',
                  color: 'currentColor'
              })
    });
}
function _(e) {
    let { language: n, content: l } = e,
        i = () =>
            (0, r.jsx)('code', {
                className: u()(s.scrollbarGhostHairline, 'hljs'),
                children: l
            });
    return (0, r.jsx)('pre', {
        children: (0, r.jsxs)('div', {
            className: d.codeContainer,
            children: [
                a.wS
                    ? (0, r.jsx)('div', {
                          className: d.codeActions,
                          children: (0, r.jsx)(f, { text: l })
                      })
                    : null,
                (0, r.jsx)(o.GI, {
                    createPromise: () => Promise.resolve().then(t.bind(t, 364964)),
                    webpackId: 364964,
                    renderFallback: i,
                    render: (e) => {
                        if (!(null != n && e.hasLanguage(n))) return i();
                        {
                            let t = e.highlight(n, l, !0);
                            return null == t
                                ? i()
                                : (0, r.jsx)('code', {
                                      className: u()(s.scrollbarGhostHairline, 'hljs', t.language),
                                      dangerouslySetInnerHTML: { __html: t.value }
                                  });
                        }
                    }
                })
            ]
        })
    });
}
