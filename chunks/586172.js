l.d(t, { l: () => j, L: () => f });
var n = l(477900),
    s = l(582128),
    r = l(945810),
    a = l(503698),
    c = l.n(a),
    o = l(768947),
    i = l(389437);
function h(e) {
    let { code: t, lang: l, highlightedClassName: r, ...a } = e,
        c = s.useMemo(() => (0, o.py)(l), [l]);
    return null == c
        ? (0, n.jsx)(u, { code: t, ...a })
        : (0, n.jsx)(s.Suspense, {
              fallback: (0, n.jsx)(u, { code: t, ...a }),
              children:
                  "ansi" === c
                      ? (0, n.jsx)(m, { code: t, highlightedClassName: r, ...a })
                      : (0, n.jsx)(p, { code: t, lang: c, highlightedClassName: r, ...a }),
          });
}
function u(e) {
    let { code: t, ...l } = e;
    return (0, n.jsx)("code", { ...l, children: t });
}
function p(e) {
    let { code: t, lang: l, className: s, highlightedClassName: r, ...a } = e,
        i = (0, o.OY)(l, t);
    return null == i
        ? (0, n.jsx)(u, { code: t, className: s, ...a })
        : (0, n.jsx)(d, { html: i, className: c()(s, `language-${l}`, r), ...a });
}
function m(e) {
    let { code: t, className: l, highlightedClassName: s, ...r } = e,
        a = (0, o.ph)(t);
    return (0, n.jsx)(d, { className: c()(l, i.ansi, s), html: a, ...r });
}
function d(e) {
    let { html: t, ...l } = e;
    return (0, n.jsx)("code", { ...l, dangerouslySetInnerHTML: { __html: t } });
}
let f = (0, r.mj)({
    name: "2026-03-arborium-highlight",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function j(e) {
    let { children: t, location: l, ...s } = e,
        { enabled: r } = f.useConfig({ location: l });
    return r ? (0, n.jsx)(h, { ...s }) : t;
}
