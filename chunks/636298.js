t.d(e, { P: () => d });
var o = t(255367),
    a = t(873546),
    i = t(481060),
    s = t(254204);
function r(n) {
    let { icon: e, onClick: t } = n;
    return (0, o.jsx)(i.zxk, {
        look: i.zxk.Looks.BLANK,
        size: i.zxk.Sizes.ICON,
        className: s.contentHeaderButton,
        innerClassName: s.iconButtonInner,
        onClick: t,
        children: (0, o.jsx)(e, { size: 'sm' })
    });
}
function c(n) {
    let { onClose: e, setShowNavigationMobile: t } = n;
    return (0, o.jsxs)('div', {
        className: s.contentHeader,
        children: [
            (0, o.jsxs)('div', {
                className: s.contentHeaderLeft,
                children: [
                    a.tq &&
                        (0, o.jsx)(r, {
                            icon: i.yFM,
                            onClick: () => t(!0)
                        }),
                    (0, o.jsx)(i.X6q, {
                        variant: 'heading-md/normal',
                        color: 'header-secondary',
                        children: 'Content Header'
                    })
                ]
            }),
            !a.tq &&
                (0, o.jsx)(r, {
                    icon: i.Uz9,
                    onClick: e
                })
        ]
    });
}
function d(n) {
    let { onClose: e, setShowNavigationMobile: t } = n;
    return (0, o.jsx)('div', {
        className: s.content,
        children: (0, o.jsx)(c, {
            onClose: e,
            setShowNavigationMobile: t
        })
    });
}
