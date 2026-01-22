n.d(t, {
    S: () => m,
    n: () => h,
});
var l,
    a = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(397927),
    c = n(736653),
    o = n(742589),
    d = n(151252),
    u = n(571338),
    p = n(403299),
    h = (((l = {}).DEFAULT = "DEFAULT"), (l.SEARCH = "SEARCH"), l);

function m(e) {
    let {
            selectedTabId: t,
            handleTransition: n,
            tabs: l,
            state: r = "DEFAULT",
            onAvailableWidthChange: h,
            icon: m,
            children: b,
        } = e,
        f = (0, c.Ay)(),
        { enabled: g } = (0, d.Z)({
            location: "global_discovery_header_bar",
        });
    return (0, a.jsx)(s.NPJ, {
        theme: f,
        children: (e) =>
            (0, a.jsxs)(o.A, {
                className: i()(e, p.jr),
                innerClassname: g ? p.vi : void 0,
                children: [
                    "DEFAULT" === r &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(m, {
                                    color: "currentColor",
                                    size: "md",
                                }),
                                (0, a.jsx)(u.A, {
                                    tabs: l,
                                    selectedTab: t,
                                    onTabSelect: n,
                                    onAvailableWidthChange: h,
                                }),
                            ],
                        }),
                    (0, a.jsx)("div", {
                        className: i()(p.w4, {
                            [p.cS]: "SEARCH" === r,
                        }),
                        children: b,
                    }),
                ],
            }),
    });
}
