n.d(t, { F: () => c });
var l = n(477900),
    r = n(582128),
    a = n(732159),
    i = n(192308),
    s = n(248675),
    o = n(660183);
function u(e) {
    let { matchingBackup: t, onConfirm: n, transitionState: i, onClose: u } = e,
        [c, d] = r.useState(!1);
    return (0, l.jsx)(a.u, {
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
        onConfirm: () => n(c && null != t ? t : null),
    });
}
function c(e) {
    (0, i.openModalLazy)(() => Promise.resolve((t) => (0, l.jsx)(u, { ...t, ...e })));
}
