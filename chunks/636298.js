n.d(t, { Z: () => E });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(873546),
    s = n(159691),
    u = n(481060),
    c = n(59662),
    d = n(36361),
    g = n(388032),
    f = n(214779);
function y(e) {
    let { icon: t, label: n, onClick: i } = e;
    return (0, r.jsx)(s.hU, {
        onClick: i,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": n,
    });
}
function O(e) {
    let { title: t, onClose: n } = e,
        { setShowNavigationMobile: i } = (0, c.t)();
    return (0, r.jsxs)("div", {
        className: f.contentHeader,
        children: [
            (0, r.jsxs)("div", {
                className: f.contentHeaderLeft,
                children: [
                    a.tq &&
                        (0, r.jsx)(y, {
                            icon: u.yFM,
                            onClick: () => i(!0),
                            label: g.intl.string(g.t["13/7kZ"]),
                        }),
                    (0, r.jsx)(u.X6q, {
                        variant: "heading-md/medium",
                        color: "header-secondary",
                        children: t,
                    }),
                ],
            }),
            (0, r.jsx)(y, {
                icon: u.Uz9,
                onClick: n,
                label: g.intl.string(g.t.cpT0Cg),
            }),
        ],
    });
}
let E = i.memo(function (e) {
    let { onClose: t, setting: n } = e,
        i = null == n ? void 0 : n.useTitle(),
        { showNavigationMobile: l } = (0, c.t)();
    return (0, r.jsxs)("div", {
        className: o()(f.content, {
            [f.mobile]: a.tq,
            [f.mobileNavigationOpen]: l,
        }),
        children: [
            (0, r.jsx)(O, {
                title: i,
                onClose: t,
            }),
            (0, r.jsx)("div", {
                className: f.contentBody,
                children: null != n && (0, r.jsx)(d.Z, { node: n }),
            }),
        ],
    });
});
