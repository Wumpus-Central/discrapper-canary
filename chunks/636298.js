n.d(t, { Z: () => f });
var a = n(255367),
    i = n(73800),
    r = n(873546),
    s = n(755721),
    o = n(481060),
    l = n(36361),
    c = n(254204);
function d(e) {
    let { icon: t, onClick: n } = e;
    return (0, a.jsx)(s.zx, {
        look: s.zx.Looks.BLANK,
        size: s.zx.Sizes.ICON,
        className: c.contentHeaderButton,
        innerClassName: c.iconButtonInner,
        onClick: n,
        children: (0, a.jsx)(t, { size: 'sm' })
    });
}
function u(e) {
    let { title: t, onClose: n, setShowNavigationMobile: i } = e;
    return (0, a.jsxs)('div', {
        className: c.contentHeader,
        children: [
            (0, a.jsxs)('div', {
                className: c.contentHeaderLeft,
                children: [
                    r.tq &&
                        (0, a.jsx)(d, {
                            icon: o.yFM,
                            onClick: () => i(!0)
                        }),
                    (0, a.jsx)(o.X6q, {
                        variant: 'heading-md/normal',
                        color: 'header-secondary',
                        children: t
                    })
                ]
            }),
            !r.tq &&
                (0, a.jsx)(d, {
                    icon: o.Uz9,
                    onClick: n
                })
        ]
    });
}
let f = i.memo(function (e) {
    let { onClose: t, setShowNavigationMobile: n, setting: i } = e,
        r = i.data.useTitle();
    return (0, a.jsxs)('div', {
        className: c.content,
        children: [
            (0, a.jsx)(u, {
                title: r,
                onClose: t,
                setShowNavigationMobile: n
            }),
            (0, a.jsx)('div', {
                className: c.contentInner,
                children: (0, a.jsx)(o.Ttm, {
                    className: c.contentScroller,
                    children: (0, a.jsx)(l.Z, { node: i })
                })
            })
        ]
    });
});
