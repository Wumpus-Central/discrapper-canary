l.d(t, { l: () => f, L: () => j });
var n = l(477900),
    r = l(582128),
    s = l(945810),
    o = l(626551),
    a = l(503698),
    c = l.n(a),
    i = l(768947),
    h = l(389437);
function u(e) {
    let { code: t, lang: l, highlightedClassName: s, ...o } = e,
        a = r.useMemo(() => (0, i.py)(l), [l]);
    return null == a
        ? (0, n.jsx)(p, { code: t, ...o })
        : (0, n.jsx)(r.Suspense, {
              fallback: (0, n.jsx)(p, { code: t, ...o }),
              children:
                  "ansi" === a
                      ? (0, n.jsx)(d, { code: t, highlightedClassName: s, ...o })
                      : (0, n.jsx)(m, { code: t, lang: a, highlightedClassName: s, ...o }),
          });
}
function p(e) {
    let { code: t, ...l } = e;
    return (0, n.jsx)("code", { ...l, children: t });
}
function m(e) {
    let { code: t, lang: l, className: r, highlightedClassName: s, ...o } = e,
        a = (0, i.OY)(l, t);
    return null == a
        ? (0, n.jsx)(p, { code: t, className: r, ...o })
        : (0, n.jsx)(g, { html: a, className: c()(r, `language-${l}`, s), ...o });
}
function d(e) {
    let { code: t, className: l, highlightedClassName: s, ...a } = e,
        u = r.useMemo(() => (0, o.$M)(t), [t]);
    return (0, n.jsx)("code", {
        className: c()(l, h.ansi, s),
        ...a,
        children: u.map((e, t) => (0, n.jsx)("span", { style: (0, i.OT)(e), children: e.value }, t)),
    });
}
function g(e) {
    let { html: t, ...l } = e;
    return (0, n.jsx)("code", { ...l, dangerouslySetInnerHTML: { __html: t } });
}
let j = (0, s.mj)({
    name: "2026-03-arborium-highlight",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function f(e) {
    let { children: t, location: l, ...r } = e,
        { enabled: s } = j.useConfig({ location: l });
    return s ? (0, n.jsx)(u, { ...r }) : t;
}
