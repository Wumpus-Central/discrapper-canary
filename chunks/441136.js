s.d(l, { SyntaxHighlight: () => a });
var t = s(627968),
    r = s(64700),
    n = s(768947);
function a(e) {
    let { code: l, lang: s, ...a } = e,
        i = r.useMemo(() => (0, n.py)(s), [s]);
    return null == i
        ? (0, t.jsx)(c, { code: l, ...a })
        : (0, t.jsx)(r.Suspense, {
              fallback: (0, t.jsx)(c, { code: l, ...a }),
              children: "ansi" === i ? (0, t.jsx)(o, { code: l, ...a }) : (0, t.jsx)(p, { code: l, lang: i, ...a }),
          });
}
function c(e) {
    let { code: l, ...s } = e;
    return (0, t.jsx)("code", { ...s, children: l });
}
function p(e) {
    let { code: l, lang: s, ...r } = e,
        a = (0, n.OY)(s, l);
    return null == a ? (0, t.jsx)(c, { code: l, ...r }) : (0, t.jsx)(i, { html: a, ...r });
}
function o(e) {
    let { code: l, ...s } = e,
        r = (0, n.ph)(l);
    return (0, t.jsx)(i, { html: r, ...s });
}
function i(e) {
    let { html: l, ...s } = e;
    return (0, t.jsx)("code", { ...s, dangerouslySetInnerHTML: { __html: l } });
}
