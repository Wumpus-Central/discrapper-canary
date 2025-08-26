n.d(t, { Z: () => j });
var l = n(951288),
    i = n(647438),
    r = n(120356),
    s = n.n(r),
    u = n(873546),
    o = n(861066),
    a = n(481060),
    c = n(59662),
    d = n(36361),
    f = n(388032),
    g = n(214779);
function v(e) {
    let { icon: t, label: n, onClick: i } = e;
    return (0, l.jsx)(o.h, {
        onClick: i,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": n,
    });
}
function m(e) {
    let { title: t, onClose: n } = e,
        { setShowNavigationMobile: i } = (0, c.t)();
    return (0, l.jsxs)("div", {
        className: g.contentHeader,
        children: [
            (0, l.jsxs)("div", {
                className: g.contentHeaderLeft,
                children: [
                    u.tq &&
                        (0, l.jsx)(v, {
                            icon: a.yFM,
                            onClick: () => i(!0),
                            label: f.intl.string(f.t["13/7kZ"]),
                        }),
                    (0, l.jsx)(a.X6q, {
                        variant: "heading-md/normal",
                        color: "header-secondary",
                        children: t,
                    }),
                ],
            }),
            (0, l.jsx)(v, {
                icon: a.Uz9,
                onClick: n,
                label: f.intl.string(f.t.cpT0Cg),
            }),
        ],
    });
}
let j = i.memo(function (e) {
    let { onClose: t, setting: n } = e,
        i = null == n ? void 0 : n.useTitle(),
        { showNavigationMobile: r } = (0, c.t)();
    return (0, l.jsxs)("div", {
        className: s()(g.content, {
            [g.mobile]: u.tq,
            [g.mobileNavigationOpen]: r,
        }),
        children: [
            (0, l.jsx)(m, {
                title: i,
                onClose: t,
            }),
            (0, l.jsx)("div", {
                className: g.contentBody,
                children: null != n && (0, l.jsx)(d.Z, { node: n }),
            }),
        ],
    });
});
