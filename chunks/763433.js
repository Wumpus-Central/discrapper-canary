n.d(t, {
    a: () => h,
    r: () => m,
});
var r,
    a = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    o = n(410030),
    c = n(984370),
    d = n(825102),
    u = n(744695),
    p = n(770593),
    m = (((r = {}).DEFAULT = "DEFAULT"), (r.SEARCH = "SEARCH"), r);
function h(e) {
    let {
            selectedTabId: t,
            handleTransition: n,
            tabs: r,
            state: i = "DEFAULT",
            onAvailableWidthChange: m,
            icon: h,
            children: g,
        } = e,
        f = (0, o.ZP)(),
        { enabled: _ } = (0, d.WX)({ location: "global_discovery_header_bar" });
    return (0, a.jsx)(s.f6W, {
        theme: f,
        children: (e) =>
            (0, a.jsxs)(c.Z, {
                className: l()(e, p.headerBar),
                innerClassname: _ ? p.headerBarInner : void 0,
                children: [
                    "DEFAULT" === i &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(h, {
                                    color: "currentColor",
                                    size: "md",
                                }),
                                (0, a.jsx)(u.Z, {
                                    tabs: r,
                                    selectedTab: t,
                                    onTabSelect: n,
                                    onAvailableWidthChange: m,
                                }),
                            ],
                        }),
                    (0, a.jsx)("div", {
                        className: l()(p.headerBarContent, { [p.headerBarSearchContent]: "SEARCH" === i }),
                        children: g,
                    }),
                ],
            }),
    });
}
