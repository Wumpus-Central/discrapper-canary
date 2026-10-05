l.d(t, { F: () => d });
var n = l(477900),
    a = l(582128),
    i = l(732159),
    r = l(192308),
    s = l(248675),
    u = l(375708);
function o(e) {
    let { matchingBackup: t, onConfirm: l, transitionState: r, onClose: o } = e,
        [d, c] = a.useState(!1);
    return (0, n.jsx)(i.u, {
        transitionState: r,
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
    (0, r.openModalLazy)(() => Promise.resolve((t) => (0, n.jsx)(o, { ...t, ...e })));
}
