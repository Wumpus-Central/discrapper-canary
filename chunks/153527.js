a.d(t, { S: () => u, n: () => d });
var n,
    l = a(627968);
a(64700);
var i = a(503698),
    s = a.n(i),
    r = a(742589),
    o = a(571338),
    c = a(670798),
    d = (((n = {}).DEFAULT = "DEFAULT"), (n.SEARCH = "SEARCH"), n);
function u(e) {
    let {
        selectedTabId: t,
        handleTransition: a,
        tabs: n,
        state: i = "DEFAULT",
        onAvailableWidthChange: d,
        icon: u,
        endContent: h,
        children: m,
    } = e;
    return (0, l.jsxs)(r.A, {
        className: c.jr,
        toolbar: h,
        hideSearch: !0,
        children: [
            "DEFAULT" === i &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(u, { color: "currentColor", size: "md" }),
                        (0, l.jsx)(o.A, { tabs: n, selectedTab: t, onTabSelect: a, onAvailableWidthChange: d }),
                    ],
                }),
            (0, l.jsx)("div", { className: s()(c.w4, { [c.cS]: "SEARCH" === i }), children: m }),
        ],
    });
}
