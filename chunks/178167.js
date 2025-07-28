n.d(t, { d: () => u });
var a = n(255367),
    i = n(873546),
    o = n(755721),
    s = n(481060),
    r = n(950796),
    l = n(59662),
    c = n(254204);
function d(e) {
    let { icon: t, onClick: n, disabled: i } = e;
    return (0, a.jsx)(o.zx, {
        look: o.zx.Looks.BLANK,
        size: o.zx.Sizes.NONE,
        className: c.topBarButton,
        innerClassName: c.iconButtonInner,
        onClick: n,
        disabled: i,
        children: (0, a.jsx)(t, { size: 'sm' })
    });
}
function u(e) {
    let { onClose: t } = e,
        { history: n, activeIndex: o, forward: u, back: f } = (0, l.t)();
    return (0, a.jsx)('div', {
        className: c.topBar,
        children: (0, a.jsx)(r.TF, {
            leading: (0, a.jsxs)('div', {
                className: c.arrowButtons,
                children: [
                    (0, a.jsx)(d, {
                        icon: s.whL,
                        disabled: 0 === o,
                        onClick: f
                    }),
                    (0, a.jsx)(d, {
                        icon: s.ZSh,
                        disabled: o === n.length - 1,
                        onClick: u
                    })
                ]
            }),
            trailing:
                i.tq &&
                (0, a.jsx)(d, {
                    icon: s.Dio,
                    onClick: t
                })
        })
    });
}
