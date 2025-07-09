t.d(e, { d: () => l });
var o = t(255367),
    a = t(873546),
    i = t(755721),
    s = t(481060),
    r = t(950796),
    c = t(254204);
function d(n) {
    let { icon: e, onClick: t } = n;
    return (0, o.jsx)(i.zx, {
        look: i.zx.Looks.BLANK,
        size: i.zx.Sizes.NONE,
        className: c.topBarButton,
        innerClassName: c.iconButtonInner,
        onClick: t,
        children: (0, o.jsx)(e, { size: 'sm' })
    });
}
function l(n) {
    let { onClose: e } = n;
    return (0, o.jsx)('div', {
        className: c.topBar,
        children: (0, o.jsx)(r.T, {
            leading: (0, o.jsxs)('div', {
                className: c.arrowButtons,
                children: [(0, o.jsx)(d, { icon: s.whL }), (0, o.jsx)(d, { icon: s.ZSh })]
            }),
            trailing:
                a.tq &&
                (0, o.jsx)(d, {
                    icon: s.Dio,
                    onClick: e
                })
        })
    });
}
