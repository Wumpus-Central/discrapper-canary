n.d(t, { Z: () => m });
var r = n(951288),
    l = n(647438),
    o = n(120356),
    i = n.n(o),
    a = n(873546),
    c = n(159691),
    s = n(481060),
    u = n(984802),
    d = n(996435),
    f = n(36361),
    b = n(388032),
    p = n(214779);
function y(e) {
    let { icon: t, label: n, onClick: l } = e;
    return (0, r.jsx)(c.hU, {
        onClick: l,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": n,
    });
}
function j(e) {
    let { title: t, badge: n, onClose: l } = e,
        o = (0, u.Ll)();
    return (0, r.jsx)(s.f6W, {
        theme: o,
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
                        onClick: l,
                        label: b.intl.string(b.t.cpT0Cq),
                    }),
                ],
            }),
    });
}
let m = l.memo(function (e) {
    var t, n;
    let { onClose: l, setting: o } = e,
        c = null != (n = null == o ? void 0 : o.useTitle()) ? n : "",
        s = null == o || null == (t = o.useBadge) ? void 0 : t.call(o),
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
                onClose: l,
            }),
            (0, r.jsx)("div", {
                className: p.contentBody,
                children: null != o && (0, r.jsx)(f.Z, { node: o }),
            }),
        ],
    });
});
