t.d(e, { d: () => d });
var o = t(255367),
    a = t(873546),
    i = t(481060),
    s = t(950796),
    r = t(254204);
function c(n) {
    let { icon: e, onClick: t } = n;
    return (0, o.jsx)(i.zxk, {
        look: i.zxk.Looks.BLANK,
        size: i.zxk.Sizes.NONE,
        className: r.topBarButton,
        innerClassName: r.iconButtonInner,
        onClick: t,
        children: (0, o.jsx)(e, { size: 'sm' })
    });
}
function d(n) {
    let { onClose: e } = n;
    return (0, o.jsx)('div', {
        className: r.topBar,
        children: (0, o.jsx)(s.T, {
            leading: (0, o.jsxs)('div', {
                className: r.arrowButtons,
                children: [(0, o.jsx)(c, { icon: i.whL }), (0, o.jsx)(c, { icon: i.ZSh })]
            }),
            trailing:
                a.tq &&
                (0, o.jsx)(c, {
                    icon: i.Dio,
                    onClick: e
                })
        })
    });
}
