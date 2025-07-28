n.d(t, { d: () => d });
var i = n(255367),
    a = n(873546),
    o = n(755721),
    s = n(481060),
    l = n(950796),
    r = n(59662),
    c = n(254204);
function u(e) {
    let { icon: t, onClick: n, disabled: a } = e;
    return (0, i.jsx)(o.zx, {
        look: o.zx.Looks.BLANK,
        size: o.zx.Sizes.NONE,
        className: c.topBarButton,
        innerClassName: c.iconButtonInner,
        onClick: n,
        disabled: a,
        children: (0, i.jsx)(t, { size: 'sm' })
    });
}
function d(e) {
    let { onClose: t } = e,
        { history: n, activeIndex: o, forward: d, back: f } = (0, r.t)();
    return (0, i.jsx)('div', {
        className: c.topBar,
        children: (0, i.jsx)(l.TF, {
            leading: (0, i.jsxs)('div', {
                className: c.arrowButtons,
                children: [
                    (0, i.jsx)(u, {
                        icon: s.whL,
                        disabled: 0 === o,
                        onClick: f
                    }),
                    (0, i.jsx)(u, {
                        icon: s.ZSh,
                        disabled: o === n.length - 1,
                        onClick: d
                    })
                ]
            }),
            trailing:
                a.tq &&
                (0, i.jsx)(u, {
                    icon: s.Dio,
                    onClick: t
                })
        })
    });
}
