n.d(t, { Z: () => v });
var i = n(255367),
    l = n(73800),
    s = n(120356),
    o = n.n(s),
    a = n(873546),
    r = n(755721),
    u = n(481060),
    c = n(59662),
    d = n(36361),
    f = n(134439);
function g(e) {
    let { icon: t, onClick: n } = e;
    return (0, i.jsx)(r.zx, {
        look: r.zx.Looks.BLANK,
        size: r.zx.Sizes.ICON,
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
                    a.tq &&
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
            !a.tq &&
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
        { showNavigationMobile: r } = (0, c.t)();
    return (0, i.jsxs)("div", {
        className: o()(f.content, {
            [f.mobile]: a.tq,
            [f.mobileNavigationOpen]: r,
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
