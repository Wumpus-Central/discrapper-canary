n.d(t, {
    a: () => h,
    r: () => m,
});
var a,
    r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    o = n(410030),
    c = n(984370),
    d = n(825102),
    u = n(744695),
    p = n(766317),
    m = (((a = {}).DEFAULT = "DEFAULT"), (a.SEARCH = "SEARCH"), a);
function h(e) {
    let {
            selectedTabId: t,
            handleTransition: n,
            tabs: a,
            state: i = "DEFAULT",
            onAvailableWidthChange: m,
            icon: h,
            children: f,
        } = e,
        g = (0, o.ZP)(),
        { enabled: b } = (0, d.W)({ location: "global_discovery_header_bar" });
    return (0, r.jsx)(s.f6W, {
        theme: g,
        children: (e) =>
            (0, r.jsxs)(c.Z, {
                className: l()(e, p.headerBar),
                innerClassname: b ? p.headerBarInner : void 0,
                children: [
                    "DEFAULT" === i &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(h, {
                                    color: "currentColor",
                                    size: "md",
                                }),
                                (0, r.jsx)(u.Z, {
                                    tabs: a,
                                    selectedTab: t,
                                    onTabSelect: n,
                                    onAvailableWidthChange: m,
                                }),
                            ],
                        }),
                    (0, r.jsx)("div", {
                        className: l()(p.headerBarContent, { [p.headerBarSearchContent]: "SEARCH" === i }),
                        children: f,
                    }),
                ],
            }),
    });
}
