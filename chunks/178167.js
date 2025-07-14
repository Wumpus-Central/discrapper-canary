n.d(t, { d: () => c });
var a = n(255367),
    i = n(873546),
    o = n(755721),
    r = n(481060),
    s = n(950796),
    l = n(254204);
function d(e) {
    let { icon: t, onClick: n } = e;
    return (0, a.jsx)(o.zx, {
        look: o.zx.Looks.BLANK,
        size: o.zx.Sizes.NONE,
        className: l.topBarButton,
        innerClassName: l.iconButtonInner,
        onClick: n,
        children: (0, a.jsx)(t, { size: 'sm' })
    });
}
function c(e) {
    let { onClose: t } = e;
    return (0, a.jsx)('div', {
        className: l.topBar,
        children: (0, a.jsx)(s.T, {
            leading: (0, a.jsxs)('div', {
                className: l.arrowButtons,
                children: [(0, a.jsx)(d, { icon: r.whL }), (0, a.jsx)(d, { icon: r.ZSh })]
            }),
            trailing:
                i.tq &&
                (0, a.jsx)(d, {
                    icon: r.Dio,
                    onClick: t
                })
        })
    });
}
