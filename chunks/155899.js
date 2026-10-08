l.d(t, { F: () => c });
var n = l(477900),
    a = l(582128),
    r = l(732159),
    i = l(192308),
    s = l(261425),
    o = l(660183);
function u(e) {
    let { matchingBackup: t, onConfirm: l, transitionState: i, onClose: u } = e,
        [c, d] = a.useState(!1);
    return (0, n.jsx)(r.u, {
        transitionState: i,
        onClose: u,
        title: o.intl.string(s.default.NDY6Zv),
        subtitle: o.intl.string(s.default.z2x5zj),
        confirmText: o.intl.string(s.default.K3Q49G),
        variant: "primary",
        checkboxProps:
            null != t
                ? {
                      label: o.intl.string(s.default["+/pFME"]),
                      description: o.intl.string(s.default["+I112y"]),
                      checked: c,
                      onChange: (e) => d(e),
                  }
                : void 0,
        onConfirm: () => l(c && null != t ? t : null),
    });
}
function c(e) {
    (0, i.openModalLazy)(() => Promise.resolve((t) => (0, n.jsx)(u, { ...t, ...e })));
}
