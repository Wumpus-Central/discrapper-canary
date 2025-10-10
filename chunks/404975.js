n.d(t, { P: () => p }), n(539854), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(120356),
    i = n.n(o),
    a = n(873546),
    s = n(481060),
    c = n(243778),
    u = n(984802),
    d = n(59662),
    f = n(28682),
    m = n(854014),
    b = n(388032),
    j = n(845435);
function p(e) {
    let { root: t, header: n, footer: o, onClose: m, emptyState: p } = e,
        { showNavigationMobile: y } = (0, d.t)(),
        v = l.useMemo(() => {
            let e = [];
            return (
                t.layout.forEach((t) => {
                    let { layout: n } = t;
                    n.forEach((t) => {
                        if (null != t.trailing)
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
        [g, h] = l.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]),
        O = (0, u.Ll)();
    return (0, r.jsx)(s.f6W, {
        theme: O,
        children: (e) =>
            (0, r.jsx)(c.ZP, {
                contentTypes: v,
                children: (t) => {
                    let { visibleContent: l } = t;
                    return (0, r.jsxs)("div", {
                        className: i()(j.sidebar, e, {
                            [j.mobile]: a.tq,
                            [j.mobileNavigationOpen]: y,
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
                                                onClick: m,
                                                variant: "icon-only",
                                                size: "sm",
                                                "aria-label": b.intl.string(b.t.cpT0Cg),
                                            }),
                                        }),
                                    (0, r.jsx)("div", {
                                        children: g.map((e) =>
                                            (0, r.jsx)(
                                                x,
                                                {
                                                    section: e,
                                                    visibleContent: l,
                                                },
                                                e.key,
                                            ),
                                        ),
                                    }),
                                    null != n && (0, r.jsx)(n, {}),
                                    null != p && 0 === h.length && (0, r.jsx)(p, {}),
                                ],
                            }),
                            (0, r.jsxs)(s.zJl, {
                                className: j.navScroller,
                                fade: !0,
                                children: [
                                    (0, r.jsx)("nav", {
                                        className: j.nav,
                                        children: h.map((e) =>
                                            (0, r.jsx)(
                                                x,
                                                {
                                                    section: e,
                                                    visibleContent: l,
                                                },
                                                e.key,
                                            ),
                                        ),
                                    }),
                                    null != o && (0, r.jsx)(o, {}),
                                ],
                            }),
                        ],
                    });
                },
            }),
    });
}
function x(e) {
    var t;
    let { section: n, visibleContent: l } = e,
        o = null == (t = n.useLabel) ? void 0 : t.call(n);
    return (0, r.jsxs)("ul", {
        className: j.section,
        children: [
            null != o &&
                (0, r.jsx)("div", {
                    className: j.sectionLabel,
                    children: (0, r.jsx)(s.X6q, {
                        className: j.label,
                        variant: "heading-sm/medium",
                        color: "text-tertiary",
                        children: o,
                    }),
                }),
            n.layout.map((e) =>
                (0, r.jsx)(
                    "li",
                    {
                        children: (0, r.jsx)(m.y, {
                            node: e,
                            visibleContent: l,
                        }),
                    },
                    e.key,
                ),
            ),
        ],
    });
}
