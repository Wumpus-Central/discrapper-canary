n.d(t, {
    a: () => h,
    r: () => m,
});
var r,
    i = n(54381);
n(473749);
var a = n(120356),
    l = n.n(a),
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
            state: a = "DEFAULT",
            onAvailableWidthChange: m,
            icon: h,
            children: g,
        } = e,
        f = (0, o.ZP)(),
        { enabled: _ } = (0, d.WX)({ location: "global_discovery_header_bar" });
    return (0, i.jsx)(s.f6W, {
        theme: f,
        children: (e) =>
            (0, i.jsxs)(c.Z, {
                className: l()(e, p.headerBar),
                innerClassname: _ ? p.headerBarInner : void 0,
                children: [
                    "DEFAULT" === a &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(h, {
                                    color: "currentColor",
                                    size: "md",
                                }),
                                (0, i.jsx)(u.Z, {
                                    tabs: r,
                                    selectedTab: t,
                                    onTabSelect: n,
                                    onAvailableWidthChange: m,
                                }),
                            ],
                        }),
                    (0, i.jsx)("div", {
                        className: l()(p.headerBarContent, { [p.headerBarSearchContent]: "SEARCH" === a }),
                        children: g,
                    }),
                ],
            }),
    });
}
