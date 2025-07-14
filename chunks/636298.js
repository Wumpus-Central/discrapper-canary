n.d(t, { Z: () => f });
var a = n(255367),
    i = n(73800),
    o = n(873546),
    r = n(755721),
    s = n(481060),
    l = n(36361),
    d = n(254204);
function c(e) {
    let { icon: t, onClick: n } = e;
    return (0, a.jsx)(r.zx, {
        look: r.zx.Looks.BLANK,
        size: r.zx.Sizes.ICON,
        className: d.contentHeaderButton,
        innerClassName: d.iconButtonInner,
        onClick: n,
        children: (0, a.jsx)(t, { size: 'sm' })
    });
}
function u(e) {
    let { title: t, onClose: n, setShowNavigationMobile: i } = e;
    return (0, a.jsxs)('div', {
        className: d.contentHeader,
        children: [
            (0, a.jsxs)('div', {
                className: d.contentHeaderLeft,
                children: [
                    o.tq &&
                        (0, a.jsx)(c, {
                            icon: s.yFM,
                            onClick: () => i(!0)
                        }),
                    (0, a.jsx)(s.X6q, {
                        variant: 'heading-md/normal',
                        color: 'header-secondary',
                        children: t
                    })
                ]
            }),
            !o.tq &&
                (0, a.jsx)(c, {
                    icon: s.Uz9,
                    onClick: n
                })
        ]
    });
}
let f = i.memo(function (e) {
    let { onClose: t, setShowNavigationMobile: n, setting: i } = e,
        o = i.data.useTitle();
    return (0, a.jsxs)('div', {
        className: d.content,
        children: [
            (0, a.jsx)(u, {
                title: o,
                onClose: t,
                setShowNavigationMobile: n
            }),
            (0, a.jsx)(l.Z, { node: i })
        ]
    });
});
