n.d(t, { Z: () => f });
var i = n(255367),
    a = n(73800),
    s = n(873546),
    o = n(755721),
    r = n(481060),
    l = n(36361),
    d = n(254204);
function c(e) {
    let { icon: t, onClick: n } = e;
    return (0, i.jsx)(o.zx, {
        look: o.zx.Looks.BLANK,
        size: o.zx.Sizes.ICON,
        className: d.contentHeaderButton,
        innerClassName: d.iconButtonInner,
        onClick: n,
        children: (0, i.jsx)(t, { size: 'sm' })
    });
}
function u(e) {
    let { title: t, onClose: n, setShowNavigationMobile: a } = e;
    return (0, i.jsxs)('div', {
        className: d.contentHeader,
        children: [
            (0, i.jsxs)('div', {
                className: d.contentHeaderLeft,
                children: [
                    s.tq &&
                        (0, i.jsx)(c, {
                            icon: r.yFM,
                            onClick: () => a(!0)
                        }),
                    (0, i.jsx)(r.X6q, {
                        variant: 'heading-md/normal',
                        color: 'header-secondary',
                        children: t
                    })
                ]
            }),
            !s.tq &&
                (0, i.jsx)(c, {
                    icon: r.Uz9,
                    onClick: n
                })
        ]
    });
}
let f = a.memo(function (e) {
    let { onClose: t, setShowNavigationMobile: n, setting: a } = e,
        s = a.data.useTitle();
    return (0, i.jsxs)('div', {
        className: d.content,
        children: [
            (0, i.jsx)(u, {
                title: s,
                onClose: t,
                setShowNavigationMobile: n
            }),
            (0, i.jsx)(l.Z, { node: a })
        ]
    });
});
