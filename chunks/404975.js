n.d(t, { P: () => f }), n(361932), n(187205);
var l = n(951288),
    i = n(120356),
    r = n.n(i),
    s = n(873546),
    u = n(481060),
    o = n(243778),
    a = n(59662),
    c = n(829210),
    d = n(845435);
function f(e) {
    let { root: t, header: n, footer: i } = e,
        { showNavigationMobile: c } = (0, a.t)(),
        f = t.layout
            .flatMap((e) => e.layout)
            .flatMap((e) => {
                var t;
                return null == (t = e.trailing) ? void 0 : t.newIndicatorDismissibleContentTypes;
            })
            .filter((e) => null != e);
    return (0, l.jsx)(o.ZP, {
        contentTypes: f,
        children: (e) => {
            let { visibleContent: o } = e;
            return (0, l.jsxs)("div", {
                className: r()(d.sidebar, {
                    [d.mobile]: s.tq,
                    [d.mobileNavigationOpen]: c,
                }),
                children: [
                    null != n && (0, l.jsx)(n, {}),
                    (0, l.jsx)(u.zJl, {
                        className: d.navScroller,
                        fade: !0,
                        children: (0, l.jsx)("nav", {
                            className: d.nav,
                            children: t.layout.map((e) =>
                                (0, l.jsx)(
                                    g,
                                    {
                                        section: e,
                                        visibleContent: o,
                                    },
                                    e.key,
                                ),
                            ),
                        }),
                    }),
                    null != i &&
                        (0, l.jsx)("footer", {
                            className: d.footer,
                            children: (0, l.jsx)(i, {}),
                        }),
                ],
            });
        },
    });
}
function g(e) {
    var t;
    let { section: n, visibleContent: i } = e,
        r = null == (t = n.useLabel) ? void 0 : t.call(n);
    return (0, l.jsxs)("ul", {
        className: d.section,
        children: [
            null != r &&
                (0, l.jsx)(u.X6q, {
                    className: d.label,
                    variant: "heading-sm/medium",
                    color: "text-tertiary",
                    children: r,
                }),
            n.layout.map((e) =>
                (0, l.jsx)(
                    "li",
                    {
                        children: (0, l.jsx)(c.Z, {
                            node: e,
                            visibleContent: i,
                        }),
                    },
                    e.key,
                ),
            ),
        ],
    });
}
