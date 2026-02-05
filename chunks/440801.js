t.d(n, { N: () => m });
var l = t(627968),
    r = t(64700),
    a = t(503698),
    s = t.n(a),
    i = t(397927),
    c = t(268218),
    d = t(957565),
    u = t(206314),
    o = t(829681);
function h(e) {
    let { text: n } = e,
        [t, a] = r.useState(!1);
    return (0, l.jsx)(i.DUT, {
        onClick: () => {
            (0, d.C)(
                n,
                () => a(!0),
                () => a(!1),
            );
        },
        children: t
            ? (0, l.jsx)(i.A9s, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(i.TdU, { size: "xs", color: "currentColor" }),
    });
}
function m(e) {
    let { language: n, content: r } = e,
        a = () => (0, l.jsx)("code", { className: s()(o.kw, "hljs"), children: r });
    return (0, l.jsx)("pre", {
        children: (0, l.jsxs)("div", {
            className: u.Hy,
            children: [
                d.p5 ? (0, l.jsx)("div", { className: u.lB, children: (0, l.jsx)(h, { text: r }) }) : null,
                (0, l.jsx)(c.c2, {
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
                                      className: s()(o.kw, "hljs", t.language),
                                      dangerouslySetInnerHTML: { __html: t.value },
                                  });
                        }
                    },
                }),
            ],
        }),
    });
}
