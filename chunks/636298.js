n.d(t, { Z: () => v });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(873546),
    s = n(159691),
    c = n(481060),
    u = n(984802),
    d = n(996435),
    f = n(36361),
    p = n(388032),
    b = n(214779);
function y(e) {
    let { icon: t, label: n, onClick: l } = e;
    return (0, r.jsx)(s.hU, {
        onClick: l,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": n,
    });
}
function g(e) {
    let { title: t, badge: n, onClose: l } = e,
        i = (0, u.Ll)();
    return (0, r.jsx)(c.f6W, {
        theme: i,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: o()(b.contentHeader, e),
                children: [
                    (0, r.jsxs)("div", {
                        className: b.contentHeaderLeft,
                        children: [
                            a.tq &&
                                (0, r.jsx)(y, {
                                    icon: c.yFM,
                                    onClick: () => d.Z.setState({ showNavigationMobile: !0 }),
                                    label: p.intl.string(p.t["13/7kX"]),
                                }),
                            (0, r.jsx)(c.Heading, {
                                variant: "heading-md/medium",
                                color: "header-secondary",
                                children: t,
                            }),
                            null != n && n,
                        ],
                    }),
                    (0, r.jsx)(y, {
                        icon: c.Uz9,
                        onClick: l,
                        label: p.intl.string(p.t.cpT0Cq),
                    }),
                ],
            }),
    });
}
let v = l.memo(function (e) {
    var t, n;
    let { onClose: l, setting: i } = e,
        s = null != (n = null == i ? void 0 : i.useTitle()) ? n : "",
        c = null == i || null == (t = i.useBadge) ? void 0 : t.call(i),
        u = d.Z.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: o()(b.content, {
            [b.mobile]: a.tq,
            [b.mobileNavigationOpen]: u,
        }),
        children: [
            (0, r.jsx)(g, {
                title: s,
                badge: c,
                onClose: l,
            }),
            (0, r.jsx)("div", {
                className: b.contentBody,
                children: null != i && (0, r.jsx)(f.Z, { node: i }),
            }),
        ],
    });
});
