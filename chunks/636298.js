n.d(t, { Z: () => O });
var r = n(54381),
    o = n(473749),
    i = n(120356),
    l = n.n(i),
    a = n(873546),
    c = n(159691),
    s = n(481060),
    u = n(984802),
    d = n(996435),
    f = n(36361),
    b = n(388032),
    y = n(214779);
function p(e) {
    let { icon: t, label: n, onClick: o } = e;
    return (0, r.jsx)(c.hU, {
        onClick: o,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": n,
    });
}
function g(e) {
    let { title: t, badge: n, onClose: o } = e,
        i = (0, u.Ll)();
    return (0, r.jsx)(s.f6W, {
        theme: i,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: l()(y.contentHeader, e),
                children: [
                    (0, r.jsxs)("div", {
                        className: y.contentHeaderLeft,
                        children: [
                            a.tq &&
                                (0, r.jsx)(p, {
                                    icon: s.yFM,
                                    onClick: () => d.Z.setState({ showNavigationMobile: !0 }),
                                    label: b.intl.string(b.t["13/7kX"]),
                                }),
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-md/medium",
                                color: "header-secondary",
                                children: t,
                            }),
                            null != n && n,
                        ],
                    }),
                    (0, r.jsx)(p, {
                        icon: s.Uz9,
                        onClick: o,
                        label: b.intl.string(b.t.cpT0Cq),
                    }),
                ],
            }),
    });
}
let O = o.memo(function (e) {
    var t, n;
    let { onClose: o, setting: i } = e,
        c = null != (n = null == i ? void 0 : i.useTitle()) ? n : "",
        s = null == i || null == (t = i.useBadge) ? void 0 : t.call(i),
        u = d.Z.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: l()(y.content, {
            [y.mobile]: a.tq,
            [y.mobileNavigationOpen]: u,
        }),
        children: [
            (0, r.jsx)(g, {
                title: c,
                badge: s,
                onClose: o,
            }),
            (0, r.jsx)("div", {
                className: y.contentBody,
                children: null != i && (0, r.jsx)(f.Z, { node: i }),
            }),
        ],
    });
});
