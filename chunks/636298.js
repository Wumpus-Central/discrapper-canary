n.d(t, { Z: () => b });
var i = n(951288),
    l = n(647438),
    r = n(120356),
    o = n.n(r),
    s = n(873546),
    a = n(861066),
    u = n(481060),
    c = n(59662),
    d = n(36361),
    f = n(388032),
    g = n(214779);
function v(e) {
    let { icon: t, label: n, onClick: l } = e;
    return (0, i.jsx)(a.h, {
        onClick: l,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": n,
    });
}
function m(e) {
    let { title: t, onClose: n } = e,
        { setShowNavigationMobile: l } = (0, c.t)();
    return (0, i.jsxs)("div", {
        className: g.contentHeader,
        children: [
            (0, i.jsxs)("div", {
                className: g.contentHeaderLeft,
                children: [
                    s.tq &&
                        (0, i.jsx)(v, {
                            icon: u.yFM,
                            onClick: () => l(!0),
                            label: f.intl.string(f.t["13/7kZ"]),
                        }),
                    (0, i.jsx)(u.X6q, {
                        variant: "heading-md/normal",
                        color: "header-secondary",
                        children: t,
                    }),
                ],
            }),
            !s.tq &&
                (0, i.jsx)(v, {
                    icon: u.Uz9,
                    onClick: n,
                    label: f.intl.string(f.t.cpT0Cg),
                }),
        ],
    });
}
let b = l.memo(function (e) {
    let { onClose: t, setting: n } = e,
        l = null == n ? void 0 : n.useTitle(),
        { showNavigationMobile: r } = (0, c.t)();
    return (0, i.jsxs)("div", {
        className: o()(g.content, {
            [g.mobile]: s.tq,
            [g.mobileNavigationOpen]: r,
        }),
        children: [
            (0, i.jsx)(m, {
                title: l,
                onClose: t,
            }),
            null != n && (0, i.jsx)(d.Z, { node: n }),
        ],
    });
});
