n.d(t, { F: () => c });
var l = n(477900),
    r = n(582128),
    a = n(732159),
    i = n(192308),
    s = n(248675),
    u = n(105292);
function o(e) {
    let { matchingBackup: t, onConfirm: n, transitionState: i, onClose: o } = e,
        [c, d] = r.useState(!1);
    return (0, l.jsx)(a.u, {
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
                      checked: c,
                      onChange: (e) => d(e),
                  }
                : void 0,
        onConfirm: () => n(c && null != t ? t : null),
    });
}
function c(e) {
    (0, i.openModalLazy)(() => Promise.resolve((t) => (0, l.jsx)(o, { ...t, ...e })));
}
