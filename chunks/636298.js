n.d(t, { Z: () => x });
var r = n(951288),
    o = n(647438),
    l = n(120356),
    i = n.n(l),
    a = n(873546),
    s = n(159691),
    c = n(481060),
    u = n(984802),
    d = n(59662),
    f = n(36361),
    b = n(388032),
    m = n(269537);
function p(e) {
    let { icon: t, label: n, onClick: o } = e;
    return (0, r.jsx)(s.hU, {
        onClick: o,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": n,
    });
}
function j(e) {
    let { title: t, onClose: n } = e,
        { setShowNavigationMobile: o } = (0, d.t)(),
        l = (0, u.Ll)();
    return (0, r.jsx)(c.f6W, {
        theme: l,
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
                                    onClick: () => o(!0),
                                    label: b.intl.string(b.t["13/7kZ"]),
                                }),
                            (0, r.jsx)(c.X6q, {
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
let x = o.memo(function (e) {
    let { onClose: t, setting: n } = e,
        o = null == n ? void 0 : n.useTitle(),
        { showNavigationMobile: l } = (0, d.t)();
    return (0, r.jsxs)("div", {
        className: i()(m.content, {
            [m.mobile]: a.tq,
            [m.mobileNavigationOpen]: l,
        }),
        children: [
            (0, r.jsx)(j, {
                title: o,
                onClose: t,
            }),
            (0, r.jsx)("div", {
                className: m.contentBody,
                children: null != n && (0, r.jsx)(f.Z, { node: n }),
            }),
        ],
    });
});
