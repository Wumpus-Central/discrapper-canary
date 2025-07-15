n.d(t, { d: () => c });
var i = n(255367),
    a = n(873546),
    s = n(755721),
    o = n(481060),
    r = n(950796),
    l = n(254204);
function d(e) {
    let { icon: t, onClick: n } = e;
    return (0, i.jsx)(s.zx, {
        look: s.zx.Looks.BLANK,
        size: s.zx.Sizes.NONE,
        className: l.topBarButton,
        innerClassName: l.iconButtonInner,
        onClick: n,
        children: (0, i.jsx)(t, { size: 'sm' })
    });
}
function c(e) {
    let { onClose: t } = e;
    return (0, i.jsx)('div', {
        className: l.topBar,
        children: (0, i.jsx)(r.T, {
            leading: (0, i.jsxs)('div', {
                className: l.arrowButtons,
                children: [(0, i.jsx)(d, { icon: o.whL }), (0, i.jsx)(d, { icon: o.ZSh })]
            }),
            trailing:
                a.tq &&
                (0, i.jsx)(d, {
                    icon: o.Dio,
                    onClick: t
                })
        })
    });
}
