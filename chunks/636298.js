n.d(t, { Z: () => v });
var i = n(951288),
    l = n(647438),
    s = n(120356),
    o = n.n(s),
    r = n(873546),
    a = n(755721),
    u = n(481060),
    c = n(59662),
    d = n(36361),
    f = n(214779);
function g(e) {
    let { icon: t, onClick: n } = e;
    return (0, i.jsx)(a.zx, {
        look: a.zx.Looks.BLANK,
        size: a.zx.Sizes.ICON,
        className: f.contentHeaderButton,
        innerClassName: f.iconButtonInner,
        onClick: n,
        children: (0, i.jsx)(t, { size: "sm" }),
    });
}
function m(e) {
    let { title: t, onClose: n, setShowNavigationMobile: l } = e;
    return (0, i.jsxs)("div", {
        className: f.contentHeader,
        children: [
            (0, i.jsxs)("div", {
                className: f.contentHeaderLeft,
                children: [
                    r.tq &&
                        (0, i.jsx)(g, {
                            icon: u.yFM,
                            onClick: () => l(!0),
                        }),
                    (0, i.jsx)(u.X6q, {
                        variant: "heading-md/normal",
                        color: "header-secondary",
                        children: t,
                    }),
                ],
            }),
            !r.tq &&
                (0, i.jsx)(g, {
                    icon: u.Uz9,
                    onClick: n,
                }),
        ],
    });
}
let v = l.memo(function (e) {
    let { onClose: t, setShowNavigationMobile: n, setting: l } = e,
        s = l.useTitle(),
        { showNavigationMobile: a } = (0, c.t)();
    return (0, i.jsxs)("div", {
        className: o()(f.content, {
            [f.mobile]: r.tq,
            [f.mobileNavigationOpen]: a,
        }),
        children: [
            (0, i.jsx)(m, {
                title: s,
                onClose: t,
                setShowNavigationMobile: n,
            }),
            (0, i.jsx)(u.w0Z, {
                className: f.contentScroller,
                children: (0, i.jsx)(d.Z, { node: l }),
            }),
        ],
    });
});
