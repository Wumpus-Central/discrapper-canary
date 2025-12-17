t.d(n, { d: () => j }), t(388685);
var r = t(54381),
    l = t(473749),
    c = t(120356),
    a = t.n(c),
    i = t(481060),
    o = t(663993),
    s = t(572004),
    u = t(960324),
    d = t(164701);
function h(e) {
    let { text: n } = e,
        [t, c] = l.useState(!1);
    return (0, r.jsx)(i.P3F, {
        onClick: () => {
            (0, s.JG)(
                n,
                () => c(!0),
                () => c(!1),
            );
        },
        children: t
            ? (0, r.jsx)(i.dz2, {
                  size: "xs",
                  color: "currentColor",
              })
            : (0, r.jsx)(i.TIy, {
                  size: "xs",
                  color: "currentColor",
              }),
    });
}
function j(e) {
    let { language: n, content: l } = e,
        c = () =>
            (0, r.jsx)("code", {
                className: a()(d.scrollbarGhostHairline, "hljs"),
                children: l,
            });
    return (0, r.jsx)("pre", {
        children: (0, r.jsxs)("div", {
            className: u.codeContainer,
            children: [
                s.wS
                    ? (0, r.jsx)("div", {
                          className: u.codeActions,
                          children: (0, r.jsx)(h, { text: l }),
                      })
                    : null,
                (0, r.jsx)(o.GI, {
                    createPromise: () => Promise.resolve().then(t.bind(t, 364964)),
                    webpackId: 364964,
                    renderFallback: c,
                    render: (e) => {
                        if (!(null != n && e.hasLanguage(n))) return c();
                        {
                            let t = e.highlight(n, l, !0);
                            return null == t
                                ? c()
                                : (0, r.jsx)("code", {
                                      className: a()(d.scrollbarGhostHairline, "hljs", t.language),
                                      dangerouslySetInnerHTML: { __html: t.value },
                                  });
                        }
                    },
                }),
            ],
        }),
    });
}
