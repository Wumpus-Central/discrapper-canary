n.d(t, { d: () => c });
var i = n(951288),
    l = n(873546),
    o = n(755721),
    r = n(481060),
    s = n(950796),
    a = n(990757);
function u(e) {
    let { icon: t, onClick: n, disabled: l } = e;
    return (0, i.jsx)(o.zx, {
        look: o.zx.Looks.BLANK,
        size: o.zx.Sizes.NONE,
        className: a.topBarButton,
        innerClassName: a.iconButtonInner,
        onClick: n,
        disabled: l,
        children: (0, i.jsx)(t, { size: "sm" }),
    });
}
function c(e) {
    let { onClose: t } = e;
    return (0, i.jsx)("div", {
        className: a.topBar,
        children: (0, i.jsx)(s.TF, {
            leading: (0, i.jsxs)("div", {
                className: a.arrowButtons,
                children: [
                    (0, i.jsx)(u, {
                        icon: r.whL,
                        disabled: !0,
                    }),
                    (0, i.jsx)(u, {
                        icon: r.ZSh,
                        disabled: !0,
                    }),
                ],
            }),
            trailing:
                l.tq &&
                (0, i.jsx)(u, {
                    icon: r.Dio,
                    onClick: t,
                }),
        }),
    });
}
