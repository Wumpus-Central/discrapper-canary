n.d(t, { d: () => u });
var l = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    r = n(268218),
    a = n(586172),
    o = n(969490);
function u(e) {
    let { text: t, language: i, className: u } = e,
        c = s()(o.kw, "hljs", u);
    function d() {
        return (0, l.jsx)("code", { className: c, children: t });
    }
    return (0, l.jsx)("pre", {
        children: (0, l.jsx)(a.l, {
            location: "PlaintextFilePreview",
            code: t,
            lang: i,
            className: c,
            children: (0, l.jsx)(r.c2, {
                createPromise: () => Promise.all([n.e("818449"), n.e("175134")]).then(n.bind(n, 981776)),
                webpackId: 981776,
                renderFallback: d,
                render: (e) => {
                    if (null == i || !e.hasLanguage(i)) return d();
                    let n = e.highlight(i, t, !0);
                    return null == n
                        ? d()
                        : (0, l.jsx)("code", {
                              className: s()(c, n.language),
                              dangerouslySetInnerHTML: { __html: n.value },
                          });
                },
            }),
        }),
    });
}
