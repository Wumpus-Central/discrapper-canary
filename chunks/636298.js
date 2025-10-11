n.d(t, { Z: () => x });
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
    let { title: t, onClose: n } = e,
        { setShowNavigationMobile: l } = (0, d.t)(),
        o = (0, u.Ll)();
    return (0, r.jsx)(c.f6W, {
        theme: o,
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
                                    onClick: () => l(!0),
                                    label: m.intl.string(m.t["13/7kZ"]),
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
                        label: m.intl.string(m.t.cpT0Cg),
                    }),
                ],
            }),
    });
}
let x = l.memo(function (e) {
    let { onClose: t, setting: n } = e,
        l = null == n ? void 0 : n.useTitle(),
        { showNavigationMobile: o } = (0, d.t)();
    return (0, r.jsxs)("div", {
        className: i()(b.content, {
            [b.mobile]: a.tq,
            [b.mobileNavigationOpen]: o,
        }),
        children: [
            (0, r.jsx)(j, {
                title: l,
                onClose: t,
            }),
            (0, r.jsx)("div", {
                className: b.contentBody,
                children: null != n && (0, r.jsx)(f.Z, { node: n }),
            }),
        ],
    });
});
