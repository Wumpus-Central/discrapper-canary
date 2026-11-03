l.d(t, { E: () => c });
var n = l(477900),
    r = l(582128),
    i = l(626551),
    s = l(503698),
    a = l.n(s),
    d = l(768947),
    o = l(389437);
function c(e) {
    let { code: t, lang: l, highlightedClassName: i, ...s } = e,
        a = r.useMemo(() => (0, d.py)(l), [l]);
    return null == a
        ? (0, n.jsx)(u, { code: t, ...s })
        : (0, n.jsx)(r.Suspense, {
              fallback: (0, n.jsx)(u, { code: t, ...s }),
              children:
                  "ansi" === a
                      ? (0, n.jsx)(h, { code: t, highlightedClassName: i, ...s })
                      : (0, n.jsx)(m, { code: t, lang: a, highlightedClassName: i, ...s }),
          });
}
function u(e) {
    let { code: t, ...l } = e;
    return (0, n.jsx)("code", { ...l, children: t });
}
function m(e) {
    let { code: t, lang: l, className: r, highlightedClassName: i, ...s } = e,
        o = (0, d.OY)(l, t);
    return null == o
        ? (0, n.jsx)(u, { code: t, className: r, ...s })
        : (0, n.jsx)(x, { html: o, className: a()(r, `language-${l}`, i), ...s });
}
function h(e) {
    let { code: t, className: l, highlightedClassName: s, ...c } = e,
        u = r.useMemo(() => (0, i.$M)(t), [t]);
    return (0, n.jsx)("code", {
        className: a()(l, o.ansi, s),
        ...c,
        children: u.map((e, t) => (0, n.jsx)("span", { style: (0, d.OT)(e), children: e.value }, t)),
    });
}
function x(e) {
    let { html: t, ...l } = e;
    return (0, n.jsx)("code", { ...l, dangerouslySetInnerHTML: { __html: t } });
}
