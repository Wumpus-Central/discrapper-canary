t.d(n, { N: () => x });
var l = t(627968),
    r = t(64700),
    a = t(503698),
    s = t.n(a),
    c = t(397927),
    i = t(268218),
    d = t(157941),
    u = t(957565),
    o = t(206314),
    h = t(829681);
function m(e) {
    let { text: n } = e,
        [t, a] = r.useState(!1);
    return (0, l.jsx)(c.DUT, {
        onClick: () => {
            (0, u.C)(
                n,
                () => a(!0),
                () => a(!1),
            );
        },
        children: t
            ? (0, l.jsx)(c.A9s, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(c.TdU, { size: "xs", color: "currentColor" }),
    });
}
function x(e) {
    let { language: n, content: r } = e,
        a = () => (0, l.jsx)("code", { className: s()(h.kw, "hljs"), children: r });
    return (0, l.jsx)("pre", {
        children: (0, l.jsxs)("div", {
            className: o.Hy,
            children: [
                u.p5 ? (0, l.jsx)("div", { className: o.lB, children: (0, l.jsx)(m, { text: r }) }) : null,
                (0, l.jsx)(d.l, {
                    location: "CodeBlock",
                    code: r,
                    lang: n,
                    className: s()(h.kw, "hljs"),
                    children: (0, l.jsx)(i.c2, {
                        createPromise: () => Promise.resolve().then(t.bind(t, 752238)),
                        webpackId: 752238,
                        renderFallback: a,
                        render: (e) => {
                            if (!(null != n && e.hasLanguage(n))) return a();
                            {
                                let t = e.highlight(n, r, !0);
                                return null == t
                                    ? a()
                                    : (0, l.jsx)("code", {
                                          className: s()(h.kw, "hljs", t.language),
                                          dangerouslySetInnerHTML: { __html: t.value },
                                      });
                            }
                        },
                    }),
                }),
            ],
        }),
    });
}
