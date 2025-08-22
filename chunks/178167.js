n.d(t, { d: () => d });
var i = n(951288),
    l = n(873546),
    r = n(861066),
    o = n(481060),
    s = n(950796),
    a = n(388032),
    u = n(990757);
function c(e) {
    let { icon: t, label: n, onClick: l, disabled: o } = e;
    return (0, i.jsx)(r.h, {
        onClick: l,
        disabled: o,
        "aria-label": n,
        icon: t,
        size: "sm",
        variant: "icon-only",
    });
}
function d(e) {
    let { onClose: t } = e;
    return (0, i.jsx)("div", {
        className: u.topBar,
        children: (0, i.jsx)(s.TF, {
            trailing:
                l.tq &&
                (0, i.jsx)(c, {
                    icon: o.Dio,
                    label: a.intl.string(a.t.cpT0Cg),
                    onClick: t,
                }),
        }),
    });
}
