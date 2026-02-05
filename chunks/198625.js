a.d(t, { A: () => A });
var n = a(627968),
    i = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(791332),
    o = a.n(r),
    c = a(397927),
    d = a(558179),
    u = a(151890),
    h = a(985018),
    m = a(191817);
let p = o().parserFor(u.A),
    _ = o().reactFor(o().ruleOutput(u.A, "react"));
function g(e) {
    let { description: t, supportsMarkdown: a } = e,
        [s, r] = i.useState(!1),
        o = i.useRef(null);
    i.useEffect(() => {
        if (null == o.current) return;
        let e = new ResizeObserver(() => {
            r((o.current?.scrollHeight ?? 0) - (o.current?.clientHeight ?? 0) > 1);
        });
        return e.observe(o.current), () => e.disconnect();
    }, []);
    let [u, h] = i.useState(!1),
        g = i.useCallback(() => {
            h((e) => !e);
        }, []);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                ref: o,
                className: l()({ [m.mA]: !u, [m.ii]: !u && "Safari" === platform.name }),
                children: a
                    ? (0, n.jsx)(d.A, { className: m.R4, parser: p, output: _, state: { allowLinks: !0 }, children: t })
                    : (0, n.jsx)(c.Text, { variant: "text-md/normal", color: "text-default", children: t }),
            }),
            s || u ? (0, n.jsx)(x, { isShowingMore: u, onToggle: g }) : null,
        ],
    });
}
function x(e) {
    let { onToggle: t, isShowingMore: a } = e,
        s = i.useMemo(
            () =>
                (0, n.jsxs)("div", {
                    className: m.eR,
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: "text-md/semibold",
                            color: "interactive-text-default",
                            children: a ? h.intl.string(h.t["vtfc4+"]) : h.intl.string(h.t.ZDRyuq),
                        }),
                        a
                            ? (0, n.jsx)(c.tN5, { size: "md", color: "currentColor", className: m.ys })
                            : (0, n.jsx)(c.abt, { size: "md", color: "currentColor", className: m.ys }),
                    ],
                }),
            [a],
        );
    return (0, n.jsxs)(c.DUT, {
        className: m.dO,
        onClick: t,
        children: [(0, n.jsx)("div", { className: m.yF }), s, (0, n.jsx)("div", { className: m.yF })],
    });
}
let A = function (e) {
    let { application: t } = e,
        a = t.directory_entry?.detailed_description,
        s = t.directory_entry?.short_description,
        l = i.useMemo(
            () =>
                null != a && a.length > 0
                    ? (0, n.jsx)(g, { description: a, supportsMarkdown: !0 })
                    : null != s && s.length > 0
                      ? (0, n.jsx)(g, { description: s, supportsMarkdown: !1 })
                      : null,
            [a, s],
        );
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: m.l4,
              children: [
                  (0, n.jsx)(c.Heading, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: h.intl.string(h.t.txraKS),
                  }),
                  l,
              ],
          });
};
