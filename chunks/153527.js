a.d(t, { S: () => u, n: () => d });
var n,
    i = a(627968);
a(64700);
var s = a(503698),
    l = a.n(s),
    r = a(742589),
    o = a(571338),
    c = a(403299),
    d = (((n = {}).DEFAULT = "DEFAULT"), (n.SEARCH = "SEARCH"), n);
function u(e) {
    let {
        selectedTabId: t,
        handleTransition: a,
        tabs: n,
        state: s = "DEFAULT",
        onAvailableWidthChange: d,
        icon: u,
        endContent: h,
        children: m,
    } = e;
    return (0, i.jsxs)(r.A, {
        className: c.jr,
        toolbar: h,
        hideForLater: !0,
        hideSearch: !0,
        children: [
            "DEFAULT" === s &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(u, { color: "currentColor", size: "md" }),
                        (0, i.jsx)(o.A, { tabs: n, selectedTab: t, onTabSelect: a, onAvailableWidthChange: d }),
                    ],
                }),
            (0, i.jsx)("div", { className: l()(c.w4, { [c.cS]: "SEARCH" === s }), children: m }),
        ],
    });
}
