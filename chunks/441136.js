s.d(l, { SyntaxHighlight: () => c });
var t = s(627968),
    r = s(64700),
    n = s(768947);
function c(e) {
    let { code: l, lang: s, ...c } = e,
        a = r.useMemo(() => (0, n.py)(s), [s]);
    return null == a
        ? (0, t.jsx)(u, { code: l, ...c })
        : (0, t.jsx)(r.Suspense, {
              fallback: (0, t.jsx)(u, { code: l, ...c }),
              children: "ansi" === a ? (0, t.jsx)(i, { code: l, ...c }) : (0, t.jsx)(p, { code: l, lang: a, ...c }),
          });
}
function u(e) {
    let { code: l, ...s } = e;
    return (0, t.jsx)("code", { ...s, children: l });
}
function p(e) {
    let { code: l, lang: s, ...r } = e,
        c = (0, n.OY)(s, l);
    return null == c ? (0, t.jsx)(u, { code: l, ...r }) : (0, t.jsx)(a, { html: c, ...r });
}
function i(e) {
    let { code: l, ...s } = e,
        r = (0, n.ph)(l);
    return (0, t.jsx)(a, { html: r, ...s });
}
function a(e) {
    let { html: l, ...s } = e;
    return (0, t.jsx)("code", { ...s, dangerouslySetInnerHTML: { __html: l } });
}
