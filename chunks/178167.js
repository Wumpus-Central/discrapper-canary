n.d(t, { d: () => d });
var i = n(255367),
    o = n(873546),
    l = n(755721),
    a = n(481060),
    r = n(950796),
    s = n(59662),
    c = n(254204);
function u(e) {
    let { icon: t, onClick: n, disabled: o } = e;
    return (0, i.jsx)(l.zx, {
        look: l.zx.Looks.BLANK,
        size: l.zx.Sizes.NONE,
        className: c.topBarButton,
        innerClassName: c.iconButtonInner,
        onClick: n,
        disabled: o,
        children: (0, i.jsx)(t, { size: "sm" }),
    });
}
function d(e) {
    let { onClose: t } = e,
        { history: n, activeIndex: l, forward: d, back: f } = (0, s.t)();
    return (0, i.jsx)("div", {
        className: c.topBar,
        children: (0, i.jsx)(r.TF, {
            leading: (0, i.jsxs)("div", {
                className: c.arrowButtons,
                children: [
                    (0, i.jsx)(u, {
                        icon: a.whL,
                        disabled: 0 === l,
                        onClick: f,
                    }),
                    (0, i.jsx)(u, {
                        icon: a.ZSh,
                        disabled: l === n.length - 1,
                        onClick: d,
                    }),
                ],
            }),
            trailing:
                o.tq &&
                (0, i.jsx)(u, {
                    icon: a.Dio,
                    onClick: t,
                }),
        }),
    });
}
