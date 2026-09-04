t.d(n, { N: () => g });
var l = t(477900),
    r = t(582128),
    a = t(503698),
    s = t.n(a),
    i = t(939249),
    c = t(933832),
    d = t(624479),
    u = t(268218),
    o = t(157941),
    h = t(957565),
    m = t(165648),
    x = t(969490);
function j(e) {
    let { text: n } = e,
        [t, a] = r.useState(!1);
    return (0, l.jsx)(i.D, {
        onClick: function () {
            (0, h.C)(
                n,
                () => a(!0),
                () => a(!1),
            );
        },
        children: t
            ? (0, l.jsx)(c.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(d.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
function g(e) {
    let { language: n, content: r } = e;
    function a() {
        return (0, l.jsx)("code", { className: s()(x.kw, "hljs"), children: r });
    }
    return (0, l.jsx)("pre", {
        children: (0, l.jsxs)("div", {
            className: m.Hy,
            children: [
                h.p5 ? (0, l.jsx)("div", { className: m.lB, children: (0, l.jsx)(j, { text: r }) }) : null,
                (0, l.jsx)(o.l, {
                    location: "CodeBlock",
                    code: r,
                    lang: n,
                    className: s()(x.kw, "hljs"),
                    children: (0, l.jsx)(u.c2, {
                        createPromise: () => Promise.all([t.e("818449"), t.e("175134")]).then(t.bind(t, 981776)),
                        webpackId: 981776,
                        renderFallback: a,
                        render: (e) => {
                            if (!(null != n && e.hasLanguage(n))) return a();
                            {
                                let t = e.highlight(n, r, !0);
                                return null == t
                                    ? a()
                                    : (0, l.jsx)("code", {
                                          className: s()(x.kw, "hljs", t.language),
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
