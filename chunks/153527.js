a.d(t, { S: () => p, n: () => m });
var n,
    i = a(627968);
a(64700);
var s = a(503698),
    l = a.n(s),
    r = a(397927),
    o = a(736653),
    c = a(742589),
    d = a(151252),
    u = a(571338),
    h = a(403299),
    m = (((n = {}).DEFAULT = "DEFAULT"), (n.SEARCH = "SEARCH"), n);
function p(e) {
    let {
            selectedTabId: t,
            handleTransition: a,
            tabs: n,
            state: s = "DEFAULT",
            onAvailableWidthChange: m,
            icon: p,
            children: _,
        } = e,
        g = (0, o.Ay)(),
        { enabled: x } = (0, d.Z)({ location: "global_discovery_header_bar" });
    return (0, i.jsx)(r.NPJ, {
        theme: g,
        children: (e) =>
            (0, i.jsxs)(c.A, {
                className: l()(e, h.jr),
                innerClassname: x ? h.vi : void 0,
                children: [
                    "DEFAULT" === s &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p, { color: "currentColor", size: "md" }),
                                (0, i.jsx)(u.A, { tabs: n, selectedTab: t, onTabSelect: a, onAvailableWidthChange: m }),
                            ],
                        }),
                    (0, i.jsx)("div", { className: l()(h.w4, { [h.cS]: "SEARCH" === s }), children: _ }),
                ],
            }),
    });
}
