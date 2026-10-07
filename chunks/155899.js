l.d(t, { F: () => d });
var n = l(477900),
    a = l(582128),
    r = l(732159),
    i = l(192308),
    s = l(248675),
    u = l(660183);
function o(e) {
    let { matchingBackup: t, onConfirm: l, transitionState: i, onClose: o } = e,
        [d, c] = a.useState(!1);
    return (0, n.jsx)(r.u, {
        transitionState: i,
        onClose: o,
        title: u.intl.string(s.default.NDY6Zv),
        subtitle: u.intl.string(s.default.z2x5zj),
        confirmText: u.intl.string(s.default.K3Q49G),
        variant: "primary",
        checkboxProps:
            null != t
                ? {
                      label: u.intl.string(s.default["+/pFME"]),
                      description: u.intl.string(s.default["+I112y"]),
                      checked: d,
                      onChange: (e) => c(e),
                  }
                : void 0,
        onConfirm: () => l(d && null != t ? t : null),
    });
}
function d(e) {
    (0, i.openModalLazy)(() => Promise.resolve((t) => (0, n.jsx)(o, { ...t, ...e })));
}
