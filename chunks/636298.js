n.d(t, { Z: () => v });
var i = n(255367),
    o = n(73800),
    l = n(120356),
    a = n.n(l),
    r = n(873546),
    s = n(755721),
    c = n(481060),
    u = n(59662),
    d = n(36361),
    f = n(134439);
function m(e) {
    let { icon: t, onClick: n } = e;
    return (0, i.jsx)(s.zx, {
        look: s.zx.Looks.BLANK,
        size: s.zx.Sizes.ICON,
        className: f.contentHeaderButton,
        innerClassName: f.iconButtonInner,
        onClick: n,
        children: (0, i.jsx)(t, { size: "sm" }),
    });
}
function b(e) {
    let { title: t, onClose: n, setShowNavigationMobile: o } = e;
    return (0, i.jsxs)("div", {
        className: f.contentHeader,
        children: [
            (0, i.jsxs)("div", {
                className: f.contentHeaderLeft,
                children: [
                    r.tq &&
                        (0, i.jsx)(m, {
                            icon: c.yFM,
                            onClick: () => o(!0),
                        }),
                    (0, i.jsx)(c.X6q, {
                        variant: "heading-md/normal",
                        color: "header-secondary",
                        children: t,
                    }),
                ],
            }),
            !r.tq &&
                (0, i.jsx)(m, {
                    icon: c.Uz9,
                    onClick: n,
                }),
        ],
    });
}
let v = o.memo(function (e) {
    let { onClose: t, setShowNavigationMobile: n, setting: o } = e,
        l = o.useTitle(),
        { showNavigationMobile: s } = (0, u.t)();
    return (0, i.jsxs)("div", {
        className: a()(f.content, {
            [f.mobile]: r.tq,
            [f.mobileNavigationOpen]: s,
        }),
        children: [
            (0, i.jsx)(b, {
                title: l,
                onClose: t,
                setShowNavigationMobile: n,
            }),
            (0, i.jsx)(c.w0Z, {
                className: f.contentScroller,
                children: (0, i.jsx)(d.Z, { node: o }),
            }),
        ],
    });
});
