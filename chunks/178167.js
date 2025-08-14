n.d(t, { d: () => d });
var i = n(255367),
    l = n(873546),
    s = n(755721),
    o = n(481060),
    a = n(950796),
    r = n(59662),
    u = n(990757);
function c(e) {
    let { icon: t, onClick: n, disabled: l } = e;
    return (0, i.jsx)(s.zx, {
        look: s.zx.Looks.BLANK,
        size: s.zx.Sizes.NONE,
        className: u.topBarButton,
        innerClassName: u.iconButtonInner,
        onClick: n,
        disabled: l,
        children: (0, i.jsx)(t, { size: "sm" }),
    });
}
function d(e) {
    let { onClose: t } = e,
        { history: n, activeIndex: s, forward: d, back: f } = (0, r.t)();
    return (0, i.jsx)("div", {
        className: u.topBar,
        children: (0, i.jsx)(a.TF, {
            leading: (0, i.jsxs)("div", {
                className: u.arrowButtons,
                children: [
                    (0, i.jsx)(c, {
                        icon: o.whL,
                        disabled: 0 === s,
                        onClick: f,
                    }),
                    (0, i.jsx)(c, {
                        icon: o.ZSh,
                        disabled: s === n.length - 1,
                        onClick: d,
                    }),
                ],
            }),
            trailing:
                l.tq &&
                (0, i.jsx)(c, {
                    icon: o.Dio,
                    onClick: t,
                }),
        }),
    });
}
