n.d(t, { P: () => y }), n(361932), n(187205);
var r = n(951288),
    i = n(120356),
    l = n.n(i),
    o = n(873546),
    s = n(481060),
    a = n(243778),
    u = n(59662),
    c = n(28682),
    d = n(829210),
    g = n(854014),
    f = n(845435);
function y(e) {
    let { root: t, header: n, footer: i } = e,
        { showNavigationMobile: d } = (0, u.t)(),
        g = t.layout
            .flatMap((e) => e.layout)
            .flatMap((e) => {
                var t;
                return e.type === c.J.PANEL &&
                    (null == (t = e.trailing) ? void 0 : t.newIndicatorDismissibleContentTypes) != null
                    ? e.trailing.newIndicatorDismissibleContentTypes
                    : [];
            })
            .filter((e) => null != e),
        y = t.layout.filter((e) => e.hoisted),
        O = t.layout.filter((e) => !e.hoisted);
    return (0, r.jsx)(a.ZP, {
        contentTypes: g,
        children: (e) => {
            let { visibleContent: t } = e;
            return (0, r.jsxs)("div", {
                className: l()(f.sidebar, {
                    [f.mobile]: o.tq,
                    [f.mobileNavigationOpen]: d,
                }),
                children: [
                    (0, r.jsxs)("div", {
                        className: f.fixedContent,
                        children: [
                            y.map((e) =>
                                (0, r.jsx)(
                                    v,
                                    {
                                        section: e,
                                        visibleContent: t,
                                    },
                                    e.key,
                                ),
                            ),
                            null != n && (0, r.jsx)(n, {}),
                        ],
                    }),
                    (0, r.jsxs)(s.zJl, {
                        className: f.navScroller,
                        fade: !0,
                        children: [
                            (0, r.jsx)("nav", {
                                className: f.nav,
                                children: O.map((e) =>
                                    (0, r.jsx)(
                                        v,
                                        {
                                            section: e,
                                            visibleContent: t,
                                        },
                                        e.key,
                                    ),
                                ),
                            }),
                            null != i && (0, r.jsx)(i, {}),
                        ],
                    }),
                ],
            });
        },
    });
}
function v(e) {
    var t;
    let { section: n, visibleContent: i } = e,
        l = null == (t = n.useLabel) ? void 0 : t.call(n);
    return (0, r.jsxs)("ul", {
        className: f.section,
        children: [
            null != l &&
                (0, r.jsx)(s.X6q, {
                    className: f.label,
                    variant: "heading-sm/medium",
                    color: "text-tertiary",
                    children: l,
                }),
            n.layout.map((e) =>
                (0, r.jsx)(
                    "li",
                    {
                        children:
                            e.type === c.J.PANEL
                                ? (0, r.jsx)(d.Z, {
                                      node: e,
                                      visibleContent: i,
                                  })
                                : (0, r.jsx)(g.Z, {
                                      icon: e.icon,
                                      title: e.useTitle(),
                                      onClick: e.onClick,
                                  }),
                    },
                    e.key,
                ),
            ),
        ],
    });
}
