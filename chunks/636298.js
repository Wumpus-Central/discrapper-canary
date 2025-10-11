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
    b = n(388032),
    m = n(214779);
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
    let { title: t, onClose: n } = e,
        { setShowNavigationMobile: l } = (0, d.t)(),
        o = (0, u.Ll)();
    return (0, r.jsx)(c.f6W, {
        theme: o,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: i()(m.contentHeader, e),
                children: [
                    (0, r.jsxs)("div", {
                        className: m.contentHeaderLeft,
                        children: [
                            a.tq &&
                                (0, r.jsx)(p, {
                                    icon: c.yFM,
                                    onClick: () => l(!0),
                                    label: b.intl.string(b.t["13/7kZ"]),
                                }),
                            (0, r.jsx)(c.Heading, {
                                variant: "heading-md/medium",
                                color: "header-secondary",
                                children: t,
                            }),
                        ],
                    }),
                    (0, r.jsx)(p, {
                        icon: c.Uz9,
                        onClick: n,
                        label: b.intl.string(b.t.cpT0Cg),
                    }),
                ],
            }),
    });
}
let v = l.memo(function (e) {
    let { onClose: t, setting: n } = e,
        l = null == n ? void 0 : n.useTitle(),
        { showNavigationMobile: o } = (0, d.t)();
    return (0, r.jsxs)("div", {
        className: i()(m.content, {
            [m.mobile]: a.tq,
            [m.mobileNavigationOpen]: o,
        }),
        children: [
            (0, r.jsx)(j, {
                title: l,
                onClose: t,
            }),
            (0, r.jsx)("div", {
                className: m.contentBody,
                children: null != n && (0, r.jsx)(f.Z, { node: n }),
            }),
        ],
    });
});
