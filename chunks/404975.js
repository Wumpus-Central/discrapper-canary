n.d(t, { P: () => j }), n(539854), n(388685);
var r = n(951288),
    o = n(647438),
    l = n(120356),
    i = n.n(l),
    a = n(873546),
    s = n(481060),
    c = n(243778),
    u = n(59662),
    d = n(28682),
    f = n(829210),
    b = n(854014),
    m = n(388032),
    p = n(845435);
function j(e) {
    let { root: t, header: n, footer: l, onClose: f } = e,
        { showNavigationMobile: b } = (0, u.t)(),
        j = o.useMemo(() => {
            let e = [];
            return (
                t.layout.forEach((t) => {
                    let { layout: n } = t;
                    n.forEach((t) => {
                        if (t.type === d.Jq.PANEL && null != t.trailing)
                            switch (t.trailing.type) {
                                case d.PU.BADGE_NEW:
                                case d.PU.STRONGLY_DISCOURAGED_CUSTOM:
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
        [v, y] = o.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]);
    return (0, r.jsx)(c.ZP, {
        contentTypes: j,
        children: (e) => {
            let { visibleContent: t } = e;
            return (0, r.jsxs)("div", {
                className: i()(p.sidebar, {
                    [p.mobile]: a.tq,
                    [p.mobileNavigationOpen]: b,
                }),
                children: [
                    (0, r.jsxs)("div", {
                        className: p.fixedContent,
                        children: [
                            a.tq &&
                                (0, r.jsx)("div", {
                                    className: p.mobileCloseButton,
                                    children: (0, r.jsx)(s.hU, {
                                        icon: s.Uz9,
                                        onClick: f,
                                        variant: "icon-only",
                                        size: "sm",
                                        "aria-label": m.intl.string(m.t.cpT0Cg),
                                    }),
                                }),
                            (0, r.jsx)("div", {
                                children: v.map((e) =>
                                    (0, r.jsx)(
                                        x,
                                        {
                                            section: e,
                                            visibleContent: t,
                                        },
                                        e.key,
                                    ),
                                ),
                            }),
                            null != n && (0, r.jsx)(n, {}),
                        ],
                    }),
                    (0, r.jsxs)(s.zJl, {
                        className: p.navScroller,
                        fade: !0,
                        children: [
                            (0, r.jsx)("nav", {
                                className: p.nav,
                                children: y.map((e) =>
                                    (0, r.jsx)(
                                        x,
                                        {
                                            section: e,
                                            visibleContent: t,
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
    });
}
function x(e) {
    var t;
    let { section: n, visibleContent: o } = e,
        l = null == (t = n.useLabel) ? void 0 : t.call(n);
    return (0, r.jsxs)("ul", {
        className: p.section,
        children: [
            null != l &&
                (0, r.jsx)("div", {
                    className: p.sectionLabel,
                    children: (0, r.jsx)(s.X6q, {
                        className: p.label,
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
                            e.type === d.Jq.PANEL &&
                                (0, r.jsx)(f.Z, {
                                    node: e,
                                    visibleContent: o,
                                }),
                            e.type === d.Jq.SIDEBAR_ITEM &&
                                ("render" in e
                                    ? (0, r.jsx)(b.Z, { render: e.render })
                                    : (0, r.jsx)(b.Z, {
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
