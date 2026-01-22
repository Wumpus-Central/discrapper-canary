t.d(n, { N: () => m }), t(896048);
var r = t(627968),
    l = t(64700),
    c = t(503698),
    a = t.n(c),
    i = t(397927),
    s = t(268218),
    o = t(957565),
    u = t(206314),
    d = t(829681);
function h(e) {
    let { text: n } = e,
        [t, c] = l.useState(!1);
    return (0, r.jsx)(i.DUT, {
        onClick: () => {
            (0, o.C)(
                n,
                () => c(!0),
                () => c(!1),
            );
        },
        children: t
            ? (0, r.jsx)(i.A9s, {
                  size: "xs",
                  color: "currentColor",
              })
            : (0, r.jsx)(i.TdU, {
                  size: "xs",
                  color: "currentColor",
              }),
    });
}
function m(e) {
    let { language: n, content: l } = e,
        c = () =>
            (0, r.jsx)("code", {
                className: a()(d.kw, "hljs"),
                children: l,
            });
    return (0, r.jsx)("pre", {
        children: (0, r.jsxs)("div", {
            className: u.Hy,
            children: [
                o.p5
                    ? (0, r.jsx)("div", {
                          className: u.lB,
                          children: (0, r.jsx)(h, { text: l }),
                      })
                    : null,
                (0, r.jsx)(s.c2, {
                    createPromise: () => Promise.resolve().then(t.bind(t, 752238)),
                    webpackId: 752238,
                    renderFallback: c,
                    render: (e) => {
                        if (!(null != n && e.hasLanguage(n))) return c();
                        {
                            let t = e.highlight(n, l, !0);
                            return null == t
                                ? c()
                                : (0, r.jsx)("code", {
                                      className: a()(d.kw, "hljs", t.language),
                                      dangerouslySetInnerHTML: { __html: t.value },
                                  });
                        }
                    },
                }),
            ],
        }),
    });
}
