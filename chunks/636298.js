n.d(t, { Z: () => x });
var i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(873546),
    r = n(755721),
    c = n(481060),
    u = n(59662),
    d = n(36361),
    f = n(134439);
function m(e) {
    let { icon: t, onClick: n } = e;
    return (0, i.jsx)(r.zx, {
        look: r.zx.Looks.BLANK,
        size: r.zx.Sizes.ICON,
        className: f.contentHeaderButton,
        innerClassName: f.iconButtonInner,
        onClick: n,
        children: (0, i.jsx)(t, { size: 'sm' })
    });
}
function v(e) {
    let { title: t, onClose: n, setShowNavigationMobile: a } = e;
    return (0, i.jsxs)('div', {
        className: f.contentHeader,
        children: [
            (0, i.jsxs)('div', {
                className: f.contentHeaderLeft,
                children: [
                    l.tq &&
                        (0, i.jsx)(m, {
                            icon: c.yFM,
                            onClick: () => a(!0)
                        }),
                    (0, i.jsx)(c.X6q, {
                        variant: 'heading-md/normal',
                        color: 'header-secondary',
                        children: t
                    })
                ]
            }),
            !l.tq &&
                (0, i.jsx)(m, {
                    icon: c.Uz9,
                    onClick: n
                })
        ]
    });
}
let x = a.memo(function (e) {
    let { onClose: t, setShowNavigationMobile: n, setting: a } = e,
        o = a.data.useTitle(),
        { showNavigationMobile: r } = (0, u.t)();
    return (0, i.jsxs)('div', {
        className: s()(f.content, {
            [f.mobile]: l.tq,
            [f.mobileNavigationOpen]: r
        }),
        children: [
            (0, i.jsx)(v, {
                title: o,
                onClose: t,
                setShowNavigationMobile: n
            }),
            (0, i.jsx)(c.w0Z, {
                className: f.contentScroller,
                children: (0, i.jsx)(d.Z, { node: a })
            })
        ]
    });
});
