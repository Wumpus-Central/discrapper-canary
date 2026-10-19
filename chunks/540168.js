n.d(t, { d: () => o });
var l = n(477900);
n(582128);
var s = n(503698),
    a = n.n(s),
    i = n(268218),
    r = n(586172),
    c = n(969490);
function o(e) {
    let { text: t, language: s, className: o } = e,
        u = a()(c.kw, "hljs", o);
    function d() {
        return (0, l.jsx)("code", { className: u, children: t });
    }
    return (0, l.jsx)("pre", {
        children: (0, l.jsx)(r.l, {
            location: "PlaintextFilePreview",
            code: t,
            lang: s,
            className: u,
            children: (0, l.jsx)(i.c2, {
                createPromise: () => Promise.all([n.e("818449"), n.e("175134")]).then(n.bind(n, 752238)),
                webpackId: 752238,
                renderFallback: d,
                render: (e) => {
                    if (null == s || !e.hasLanguage(s)) return d();
                    let n = e.highlight(s, t, !0);
                    return null == n
                        ? d()
                        : (0, l.jsx)("code", {
                              className: a()(u, n.language),
                              dangerouslySetInnerHTML: { __html: n.value },
                          });
                },
            }),
        }),
    });
}
