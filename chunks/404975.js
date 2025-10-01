n.d(t, { P: () => x }), n(539854), n(388685);
var r = n(951288),
    o = n(647438),
    l = n(120356),
    i = n.n(l),
    a = n(873546),
    s = n(481060),
    c = n(243778),
    u = n(984802),
    d = n(59662),
    f = n(28682),
    b = n(829210),
    m = n(854014),
    p = n(388032),
    j = n(565184);
function x(e) {
    let { root: t, header: n, footer: l, onClose: b } = e,
        { showNavigationMobile: m } = (0, d.t)(),
        x = o.useMemo(() => {
            let e = [];
            return (
                t.layout.forEach((t) => {
                    let { layout: n } = t;
                    n.forEach((t) => {
                        if (t.type === f.Jq.PANEL && null != t.trailing)
                            switch (t.trailing.type) {
                                case f.PU.BADGE_NEW:
                                case f.PU.STRONGLY_DISCOURAGED_CUSTOM:
                                    var n;
                                    null == (n = t.trailing.dismissibleContentTypes) ||
                                        n.forEach((t) => {
                                            e.push(t);
                                        });
                            }
                    });
                }),
                e
            );
        }, [t.layout]),
        [y, g] = o.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]),
        h = (0, u.Ll)();
    return (0, r.jsx)(s.f6W, {
        theme: h,
        children: (e) =>
            (0, r.jsx)(c.ZP, {
                contentTypes: x,
                children: (t) => {
                    let { visibleContent: o } = t;
                    return (0, r.jsxs)("div", {
                        className: i()(j.sidebar, e, {
                            [j.mobile]: a.tq,
                            [j.mobileNavigationOpen]: m,
                        }),
                        children: [
                            (0, r.jsxs)("div", {
                                className: j.fixedContent,
                                children: [
                                    a.tq &&
                                        (0, r.jsx)("div", {
                                            className: j.mobileCloseButton,
                                            children: (0, r.jsx)(s.hU, {
                                                icon: s.Uz9,
                                                onClick: b,
                                                variant: "icon-only",
                                                size: "sm",
                                                "aria-label": p.intl.string(p.t.cpT0Cg),
                                            }),
                                        }),
                                    (0, r.jsx)("div", {
                                        children: y.map((e) =>
                                            (0, r.jsx)(
                                                v,
                                                {
                                                    section: e,
                                                    visibleContent: o,
                                                },
                                                e.key,
                                            ),
                                        ),
                                    }),
                                    null != n && (0, r.jsx)(n, {}),
                                ],
                            }),
                            (0, r.jsxs)(s.zJl, {
                                className: j.navScroller,
                                fade: !0,
                                children: [
                                    (0, r.jsx)("nav", {
                                        className: j.nav,
                                        children: g.map((e) =>
                                            (0, r.jsx)(
                                                v,
                                                {
                                                    section: e,
                                                    visibleContent: o,
                                                },
                                                e.key,
                                            ),
                                        ),
                                    }),
                                    null != l && (0, r.jsx)(l, {}),
                                ],
                            }),
                        ],
                    });
                },
            }),
    });
}
function v(e) {
    var t;
    let { section: n, visibleContent: o } = e,
        l = null == (t = n.useLabel) ? void 0 : t.call(n);
    return (0, r.jsxs)("ul", {
        className: j.section,
        children: [
            null != l &&
                (0, r.jsx)("div", {
                    className: j.sectionLabel,
                    children: (0, r.jsx)(s.X6q, {
                        className: j.label,
                        variant: "heading-sm/medium",
                        color: "text-tertiary",
                        children: l,
                    }),
                }),
            n.layout.map((e) =>
                (0, r.jsxs)(
                    "li",
                    {
                        children: [
                            e.type === f.Jq.PANEL &&
                                (0, r.jsx)(b.Z, {
                                    node: e,
                                    visibleContent: o,
                                }),
                            e.type === f.Jq.SIDEBAR_ITEM &&
                                ("render" in e
                                    ? (0, r.jsx)(m.Z, { render: e.render })
                                    : (0, r.jsx)(m.Z, {
                                          icon: e.icon,
                                          title: e.useTitle(),
                                          onClick: e.onClick,
                                      })),
                        ],
                    },
                    e.key,
                ),
            ),
        ],
    });
}
