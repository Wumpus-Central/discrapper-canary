t.d(e, { P: () => l });
var o = t(255367),
    a = t(873546),
    i = t(755721),
    s = t(481060),
    r = t(254204);
function c(n) {
    let { icon: e, onClick: t } = n;
    return (0, o.jsx)(i.zx, {
        look: i.zx.Looks.BLANK,
        size: i.zx.Sizes.ICON,
        className: r.contentHeaderButton,
        innerClassName: r.iconButtonInner,
        onClick: t,
        children: (0, o.jsx)(e, { size: 'sm' })
    });
}
function d(n) {
    let { onClose: e, setShowNavigationMobile: t } = n;
    return (0, o.jsxs)('div', {
        className: r.contentHeader,
        children: [
            (0, o.jsxs)('div', {
                className: r.contentHeaderLeft,
                children: [
                    a.tq &&
                        (0, o.jsx)(c, {
                            icon: s.yFM,
                            onClick: () => t(!0)
                        }),
                    (0, o.jsx)(s.X6q, {
                        variant: 'heading-md/normal',
                        color: 'header-secondary',
                        children: 'Content Header'
                    })
                ]
            }),
            !a.tq &&
                (0, o.jsx)(c, {
                    icon: s.Uz9,
                    onClick: e
                })
        ]
    });
}
function l(n) {
    let { onClose: e, setShowNavigationMobile: t } = n;
    return (0, o.jsx)('div', {
        className: r.content,
        children: (0, o.jsx)(d, {
            onClose: e,
            setShowNavigationMobile: t
        })
    });
}
