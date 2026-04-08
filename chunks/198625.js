a.d(t, { A: () => A });
var n = a(627968),
    i = a(64700),
    l = a(503698),
    s = a.n(l),
    r = a(791332),
    o = a.n(r),
    c = a(397927),
    d = a(558179),
    u = a(151890),
    m = a(985018),
    h = a(383586);
let p = o().parserFor(u.A),
    _ = o().reactFor(o().ruleOutput(u.A, "react"));
function g(e) {
    let { description: t, supportsMarkdown: a } = e,
        [l, r] = i.useState(!1),
        o = i.useRef(null);
    i.useEffect(() => {
        if (null == o.current) return;
        let e = new ResizeObserver(() => {
            r((o.current?.scrollHeight ?? 0) - (o.current?.clientHeight ?? 0) > 1);
        });
        return e.observe(o.current), () => e.disconnect();
    }, []);
    let [u, m] = i.useState(!1),
        g = i.useCallback(() => {
            m((e) => !e);
        }, []);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                ref: o,
                className: s()({ [h.mA]: !u, [h.ii]: !u && "Safari" === platform.name }),
                children: a
                    ? (0, n.jsx)(d.A, { className: h.R4, parser: p, output: _, state: { allowLinks: !0 }, children: t })
                    : (0, n.jsx)(c.Text, { variant: "text-md/normal", color: "text-default", children: t }),
            }),
            l || u ? (0, n.jsx)(x, { isShowingMore: u, onToggle: g }) : null,
        ],
    });
}
function x(e) {
    let { onToggle: t, isShowingMore: a } = e,
        l = i.useMemo(
            () =>
                (0, n.jsxs)("div", {
                    className: h.eR,
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: "text-md/semibold",
                            color: "interactive-text-default",
                            children: a ? m.intl.string(m.t["vtfc4+"]) : m.intl.string(m.t.ZDRyuq),
                        }),
                        a
                            ? (0, n.jsx)(c.tN5, { size: "md", color: "currentColor", className: h.ys })
                            : (0, n.jsx)(c.abt, { size: "md", color: "currentColor", className: h.ys }),
                    ],
                }),
            [a],
        );
    return (0, n.jsxs)(c.DUT, {
        className: h.dO,
        onClick: t,
        children: [(0, n.jsx)("div", { className: h.yF }), l, (0, n.jsx)("div", { className: h.yF })],
    });
}
let A = function (e) {
    let { application: t } = e,
        a = t.directory_entry?.detailed_description,
        l = t.directory_entry?.short_description,
        s = i.useMemo(
            () =>
                null != a && a.length > 0
                    ? (0, n.jsx)(g, { description: a, supportsMarkdown: !0 })
                    : null != l && l.length > 0
                      ? (0, n.jsx)(g, { description: l, supportsMarkdown: !1 })
                      : null,
            [a, l],
        );
    return null == s
        ? null
        : (0, n.jsxs)("div", {
              className: h.l4,
              children: [
                  (0, n.jsx)(c.Heading, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: m.intl.string(m.t.txraKS),
                  }),
                  s,
              ],
          });
};
