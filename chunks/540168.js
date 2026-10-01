s.d(t, { d: () => u });
var n = s(477900);
s(582128);
var a = s(503698),
    l = s.n(a),
    i = s(268218),
    r = s(586172),
    o = s(969490);
function u(e) {
    let { text: t, language: a, className: u } = e,
        d = l()(o.kw, "hljs", u);
    function c() {
        return (0, n.jsx)("code", { className: d, children: t });
    }
    return (0, n.jsx)("pre", {
        children: (0, n.jsx)(r.l, {
            location: "PlaintextFilePreview",
            code: t,
            lang: a,
            className: d,
            children: (0, n.jsx)(i.c2, {
                createPromise: () => Promise.all([s.e("818449"), s.e("175134")]).then(s.bind(s, 981776)),
                webpackId: 981776,
                renderFallback: c,
                render: (e) => {
                    if (null == a || !e.hasLanguage(a)) return c();
                    let s = e.highlight(a, t, !0);
                    return null == s
                        ? c()
                        : (0, n.jsx)("code", {
                              className: l()(d, s.language),
                              dangerouslySetInnerHTML: { __html: s.value },
                          });
                },
            }),
        }),
    });
}
