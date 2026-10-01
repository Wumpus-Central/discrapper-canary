l.d(t, { l: () => f, L: () => g });
var r = l(477900),
    n = l(582128),
    s = l(945810),
    i = l(503698),
    a = l.n(i),
    o = l(768947),
    c = l(389437);
function u(e) {
    let { code: t, lang: l, highlightedClassName: s, ...i } = e,
        a = n.useMemo(() => (0, o.py)(l), [l]);
    return null == a
        ? (0, r.jsx)(d, { code: t, ...i })
        : (0, r.jsx)(n.Suspense, {
              fallback: (0, r.jsx)(d, { code: t, ...i }),
              children:
                  "ansi" === a
                      ? (0, r.jsx)(m, { code: t, highlightedClassName: s, ...i })
                      : (0, r.jsx)(h, { code: t, lang: a, highlightedClassName: s, ...i }),
          });
}
function d(e) {
    let { code: t, ...l } = e;
    return (0, r.jsx)("code", { ...l, children: t });
}
function h(e) {
    let { code: t, lang: l, className: n, highlightedClassName: s, ...i } = e,
        c = (0, o.OY)(l, t);
    return null == c
        ? (0, r.jsx)(d, { code: t, className: n, ...i })
        : (0, r.jsx)(p, { html: c, className: a()(n, `language-${l}`, s), ...i });
}
function m(e) {
    let { code: t, className: l, highlightedClassName: n, ...s } = e,
        i = (0, o.ph)(t);
    return (0, r.jsx)(p, { className: a()(l, c.ansi, n), html: i, ...s });
}
function p(e) {
    let { html: t, ...l } = e;
    return (0, r.jsx)("code", { ...l, dangerouslySetInnerHTML: { __html: t } });
}
let g = (0, s.mj)({
    name: "2026-03-arborium-highlight",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function f(e) {
    let { children: t, location: l, ...n } = e,
        { enabled: s } = g.useConfig({ location: l });
    return s ? (0, r.jsx)(u, { ...n }) : t;
}
