s.d(n, { SyntaxHighlight: () => i });
var t = s(627968),
    c = s(64700),
    l = s(503698),
    a = s.n(l),
    r = s(768947),
    u = s(618559);
function i(e) {
    let { code: n, lang: s, preferNative: l = !1, ...a } = e,
        u = c.useMemo(() => (0, r.py)(s), [s]);
    return null == u
        ? (0, t.jsx)(o, { code: n, ...a })
        : (0, t.jsx)(c.Suspense, {
              fallback: (0, t.jsx)(o, { code: n, ...a }),
              children:
                  "ansi" === u
                      ? (0, t.jsx)(h, { code: n, ...a })
                      : (0, t.jsx)(d, { code: n, lang: u, preferNative: l, ...a }),
          });
}
function o(e) {
    let { code: n, ...s } = e;
    return (0, t.jsx)("code", { ...s, children: n });
}
function d(e) {
    let { code: n, lang: s, preferNative: c, className: l, ...u } = e,
        i = (0, r.OY)(s, n, c);
    return null == i
        ? (0, t.jsx)(o, { code: n, className: l, ...u })
        : (0, t.jsx)(p, { html: i, className: a()(l, `language-${s}`), ...u });
}
function h(e) {
    let { code: n, className: s, ...c } = e,
        l = (0, r.ph)(n);
    return (0, t.jsx)(p, { className: a()(s, u.ansi), html: l, ...c });
}
function p(e) {
    let { html: n, ...s } = e;
    return (0, t.jsx)("code", { ...s, dangerouslySetInnerHTML: { __html: n } });
}
