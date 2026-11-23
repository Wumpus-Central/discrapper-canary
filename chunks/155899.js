var l = n(477900),
    r = n(582128),
    i = n(732159),
    a = n(192308),
    s = n(191850),
    o = n(792996);
function u(e) {
    let { matchingBackup: t, onConfirm: n, transitionState: a, onClose: u } = e,
        [c, d] = r.useState(!1);
    return (0, l.jsx)(i.u, {
        transitionState: a,
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
n.d(
    t,
    {},
    {
        F: function (e) {
            (0, a.mM)(() => Promise.resolve((t) => (0, l.jsx)(u, { ...t, ...e })));
        },
    },
);
