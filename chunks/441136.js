s.d(n, { SyntaxHighlight: () => i });
var t = s(627968),
    c = s(64700),
    l = s(503698),
    a = s.n(l),
    u = s(768947),
    r = s(618559);
function i(e) {
    let { code: n, lang: s, ...l } = e,
        a = c.useMemo(() => (0, u.py)(s), [s]);
    return null == a
        ? (0, t.jsx)(o, { code: n, ...l })
        : (0, t.jsx)(c.Suspense, {
              fallback: (0, t.jsx)(o, { code: n, ...l }),
              children: "ansi" === a ? (0, t.jsx)(h, { code: n, ...l }) : (0, t.jsx)(d, { code: n, lang: a, ...l }),
          });
}
function o(e) {
    let { code: n, ...s } = e;
    return (0, t.jsx)("code", { ...s, children: n });
}
function d(e) {
    let { code: n, lang: s, className: c, ...l } = e,
        r = (0, u.OY)(s, n);
    return null == r
        ? (0, t.jsx)(o, { code: n, className: c, ...l })
        : (0, t.jsx)(x, { html: r, className: a()(c, `language-${s}`), ...l });
}
function h(e) {
    let { code: n, className: s, ...c } = e,
        l = (0, u.ph)(n);
    return (0, t.jsx)(x, { className: a()(s, r.ansi), html: l, ...c });
}
function x(e) {
    let { html: n, ...s } = e;
    return (0, t.jsx)("code", { ...s, dangerouslySetInnerHTML: { __html: n } });
}
