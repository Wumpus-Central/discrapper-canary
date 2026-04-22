a.d(t, { A: () => b });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(791332),
    o = a.n(r),
    c = a(534514),
    d = a(834730),
    u = a(900797),
    h = a(847374),
    m = a(939249),
    p = a(558179),
    _ = a(151890),
    g = a(985018),
    x = a(349202);
let A = o().parserFor(_.A),
    f = o().reactFor(o().ruleOutput(_.A, "react"));
function C(e) {
    let { description: t, supportsMarkdown: a } = e,
        [i, r] = l.useState(!1),
        o = l.useRef(null);
    l.useEffect(() => {
        if (null == o.current) return;
        let e = new ResizeObserver(() => {
            r((o.current?.scrollHeight ?? 0) - (o.current?.clientHeight ?? 0) > 1);
        });
        return e.observe(o.current), () => e.disconnect();
    }, []);
    let [c, u] = l.useState(!1),
        h = l.useCallback(() => {
            u((e) => !e);
        }, []);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                ref: o,
                className: s()({ [x.mA]: !c, [x.ii]: !c && "Safari" === platform.name }),
                children: a
                    ? (0, n.jsx)(p.A, { className: x.R4, parser: A, output: f, state: { allowLinks: !0 }, children: t })
                    : (0, n.jsx)(d.E, { variant: "text-md/normal", color: "text-default", children: t }),
            }),
            i || c ? (0, n.jsx)(v, { isShowingMore: c, onToggle: h }) : null,
        ],
    });
}
function v(e) {
    let { onToggle: t, isShowingMore: a } = e,
        i = l.useMemo(
            () =>
                (0, n.jsxs)("div", {
                    className: x.eR,
                    children: [
                        (0, n.jsx)(d.E, {
                            variant: "text-md/semibold",
                            color: "interactive-text-default",
                            children: a ? g.intl.string(g.t["vtfc4+"]) : g.intl.string(g.t.ZDRyuq),
                        }),
                        a
                            ? (0, n.jsx)(u.t, { size: "md", color: "currentColor", className: x.ys })
                            : (0, n.jsx)(h.a, { size: "md", color: "currentColor", className: x.ys }),
                    ],
                }),
            [a],
        );
    return (0, n.jsxs)(m.D, {
        className: x.dO,
        onClick: t,
        children: [(0, n.jsx)("div", { className: x.yF }), i, (0, n.jsx)("div", { className: x.yF })],
    });
}
let b = function (e) {
    let { application: t } = e,
        a = t.directory_entry?.detailed_description,
        i = t.directory_entry?.short_description,
        s = l.useMemo(
            () =>
                null != a && a.length > 0
                    ? (0, n.jsx)(C, { description: a, supportsMarkdown: !0 })
                    : null != i && i.length > 0
                      ? (0, n.jsx)(C, { description: i, supportsMarkdown: !1 })
                      : null,
            [a, i],
        );
    return null == s
        ? null
        : (0, n.jsxs)("div", {
              className: x.l4,
              children: [
                  (0, n.jsx)(c.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: g.intl.string(g.t.txraKS),
                  }),
                  s,
              ],
          });
};
