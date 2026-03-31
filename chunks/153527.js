a.d(t, { S: () => u, n: () => d });
var n,
    i = a(627968);
a(64700);
var l = a(503698),
    s = a.n(l),
    r = a(742589),
    o = a(571338),
    c = a(405118),
    d = (((n = {}).DEFAULT = "DEFAULT"), (n.SEARCH = "SEARCH"), n);
function u(e) {
    let {
        selectedTabId: t,
        handleTransition: a,
        tabs: n,
        state: l = "DEFAULT",
        onAvailableWidthChange: d,
        icon: u,
        endContent: m,
        children: h,
    } = e;
    return (0, i.jsxs)(r.A, {
        className: c.jr,
        toolbar: m,
        hideSearch: !0,
        children: [
            "DEFAULT" === l &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(u, { color: "currentColor", size: "md" }),
                        (0, i.jsx)(o.A, { tabs: n, selectedTab: t, onTabSelect: a, onAvailableWidthChange: d }),
                    ],
                }),
            (0, i.jsx)("div", { className: s()(c.w4, { [c.cS]: "SEARCH" === l }), children: h }),
        ],
    });
}
