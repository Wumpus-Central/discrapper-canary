n.d(t, { Z: () => m });
var r = n(951288),
    o = n(647438),
    l = n(120356),
    i = n.n(l),
    a = n(873546),
    c = n(159691),
    s = n(481060),
    u = n(984802),
    d = n(996435),
    f = n(36361),
    b = n(388032),
    p = n(214779);
function y(e) {
    let { icon: t, label: n, onClick: o } = e;
    return (0, r.jsx)(c.hU, {
        onClick: o,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": n,
    });
}
function j(e) {
    let { title: t, badge: n, onClose: o } = e,
        l = (0, u.Ll)();
    return (0, r.jsx)(s.f6W, {
        theme: l,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: i()(p.contentHeader, e),
                children: [
                    (0, r.jsxs)("div", {
                        className: p.contentHeaderLeft,
                        children: [
                            a.tq &&
                                (0, r.jsx)(y, {
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
                    (0, r.jsx)(y, {
                        icon: s.Uz9,
                        onClick: o,
                        label: b.intl.string(b.t.cpT0Cq),
                    }),
                ],
            }),
    });
}
let m = o.memo(function (e) {
    var t, n;
    let { onClose: o, setting: l } = e,
        c = null != (n = null == l ? void 0 : l.useTitle()) ? n : "",
        s = null == l || null == (t = l.useBadge) ? void 0 : t.call(l),
        u = d.Z.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: i()(p.content, {
            [p.mobile]: a.tq,
            [p.mobileNavigationOpen]: u,
        }),
        children: [
            (0, r.jsx)(j, {
                title: c,
                badge: s,
                onClose: o,
            }),
            (0, r.jsx)("div", {
                className: p.contentBody,
                children: null != l && (0, r.jsx)(f.Z, { node: l }),
            }),
        ],
    });
});
