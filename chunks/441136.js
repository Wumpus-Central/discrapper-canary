l.d(t, { E: () => c });
var n = l(477900),
    r = l(582128),
    i = l(626551),
    a = l(503698),
    s = l.n(a),
    d = l(768947),
    o = l(389437);
function c(e) {
    let { code: t, lang: l, highlightedClassName: i, ...a } = e,
        s = r.useMemo(() => (0, d.py)(l), [l]);
    return null == s
        ? (0, n.jsx)(u, { code: t, ...a })
        : (0, n.jsx)(r.Suspense, {
              fallback: (0, n.jsx)(u, { code: t, ...a }),
              children:
                  "ansi" === s
                      ? (0, n.jsx)(h, { code: t, highlightedClassName: i, ...a })
                      : (0, n.jsx)(v, { code: t, lang: s, highlightedClassName: i, ...a }),
          });
}
function u(e) {
    let { code: t, ...l } = e;
    return (0, n.jsx)("code", { ...l, children: t });
}
function v(e) {
    let { code: t, lang: l, className: r, highlightedClassName: i, ...a } = e,
        o = (0, d.OY)(l, t);
    return null == o
        ? (0, n.jsx)(u, { code: t, className: r, ...a })
        : (0, n.jsx)(C, { html: o, className: s()(r, `language-${l}`, i), ...a });
}
function h(e) {
    let { code: t, className: l, highlightedClassName: a, ...c } = e,
        u = r.useMemo(() => (0, i.$M)(t), [t]);
    return (0, n.jsx)("code", {
        className: s()(l, o.ansi, a),
        ...c,
        children: u.map((e, t) => (0, n.jsx)("span", { style: (0, d.OT)(e), children: e.value }, t)),
    });
}
function C(e) {
    let { html: t, ...l } = e;
    return (0, n.jsx)("code", { ...l, dangerouslySetInnerHTML: { __html: t } });
}
