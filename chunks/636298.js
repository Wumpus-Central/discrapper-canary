n.d(t, { Z: () => x });
var a = n(255367),
    i = n(73800),
    o = n(120356),
    s = n.n(o),
    r = n(873546),
    l = n(755721),
    c = n(481060),
    d = n(59662),
    u = n(36361),
    f = n(134439);
function m(e) {
    let { icon: t, onClick: n } = e;
    return (0, a.jsx)(l.zx, {
        look: l.zx.Looks.BLANK,
        size: l.zx.Sizes.ICON,
        className: f.contentHeaderButton,
        innerClassName: f.iconButtonInner,
        onClick: n,
        children: (0, a.jsx)(t, { size: 'sm' })
    });
}
function h(e) {
    let { title: t, onClose: n, setShowNavigationMobile: i } = e;
    return (0, a.jsxs)('div', {
        className: f.contentHeader,
        children: [
            (0, a.jsxs)('div', {
                className: f.contentHeaderLeft,
                children: [
                    r.tq &&
                        (0, a.jsx)(m, {
                            icon: c.yFM,
                            onClick: () => i(!0)
                        }),
                    (0, a.jsx)(c.X6q, {
                        variant: 'heading-md/normal',
                        color: 'header-secondary',
                        children: t
                    })
                ]
            }),
            !r.tq &&
                (0, a.jsx)(m, {
                    icon: c.Uz9,
                    onClick: n
                })
        ]
    });
}
let x = i.memo(function (e) {
    let { onClose: t, setShowNavigationMobile: n, setting: i } = e,
        o = i.data.useTitle(),
        { showNavigationMobile: l } = (0, d.t)();
    return (0, a.jsxs)('div', {
        className: s()(f.content, {
            [f.mobile]: r.tq,
            [f.mobileNavigationOpen]: l
        }),
        children: [
            (0, a.jsx)(h, {
                title: o,
                onClose: t,
                setShowNavigationMobile: n
            }),
            (0, a.jsx)(c.w0Z, {
                className: f.contentScroller,
                children: (0, a.jsx)(u.Z, { node: i })
            })
        ]
    });
});
