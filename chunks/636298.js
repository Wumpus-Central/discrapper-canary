n.d(t, { Z: () => v });
var r = n(951288),
    l = n(647438),
    o = n(120356),
    i = n.n(o),
    a = n(873546),
    s = n(159691),
    c = n(481060),
    u = n(984802),
    d = n(59662),
    f = n(36361),
    m = n(388032),
    b = n(214779);
function p(e) {
    let { icon: t, label: n, onClick: l } = e;
    return (0, r.jsx)(s.hU, {
        onClick: l,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": n,
    });
}
function j(e) {
    let { title: t, badge: n, onClose: l } = e,
        { setShowNavigationMobile: o } = (0, d.t)(),
        s = (0, u.Ll)();
    return (0, r.jsx)(c.f6W, {
        theme: s,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: i()(b.contentHeader, e),
                children: [
                    (0, r.jsxs)("div", {
                        className: b.contentHeaderLeft,
                        children: [
                            a.tq &&
                                (0, r.jsx)(p, {
                                    icon: c.yFM,
                                    onClick: () => o(!0),
                                    label: m.intl.string(m.t["13/7kZ"]),
                                }),
                            (0, r.jsx)(c.Heading, {
                                variant: "heading-md/medium",
                                color: "header-secondary",
                                children: t,
                            }),
                            null != n && n,
                        ],
                    }),
                    (0, r.jsx)(p, {
                        icon: c.Uz9,
                        onClick: l,
                        label: m.intl.string(m.t.cpT0Cg),
                    }),
                ],
            }),
    });
}
let v = l.memo(function (e) {
    var t, n;
    let { onClose: l, setting: o } = e,
        s = null != (n = null == o ? void 0 : o.useTitle()) ? n : "",
        c = null == o || null == (t = o.useBadge) ? void 0 : t.call(o),
        { showNavigationMobile: u } = (0, d.t)();
    return (0, r.jsxs)("div", {
        className: i()(b.content, {
            [b.mobile]: a.tq,
            [b.mobileNavigationOpen]: u,
        }),
        children: [
            (0, r.jsx)(j, {
                title: s,
                badge: c,
                onClose: l,
            }),
            (0, r.jsx)("div", {
                className: b.contentBody,
                children: null != o && (0, r.jsx)(f.Z, { node: o }),
            }),
        ],
    });
});
