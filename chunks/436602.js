n.d(t, { F: () => d });
var l = n(477900),
    a = n(582128),
    i = n(732159),
    s = n(192308),
    r = n(50617),
    o = n(375708);
function u(e) {
    let { matchingBackup: t, onConfirm: n, transitionState: s, onClose: u } = e,
        [d, c] = a.useState(!1);
    return (0, l.jsx)(i.u, {
        transitionState: s,
        onClose: u,
        title: o.intl.string(r.default.jgRu87),
        subtitle: o.intl.string(r.default["3UbctB"]),
        confirmText: o.intl.string(r.default.HRwmHd),
        variant: "primary",
        checkboxProps:
            null != t
                ? {
                      label: o.intl.string(r.default["o0p/nQ"]),
                      description: o.intl.string(r.default.bfKm6w),
                      checked: d,
                      onChange: (e) => c(e),
                  }
                : void 0,
        onConfirm: () => n(d && null != t ? t : null),
    });
}
function d(e) {
    (0, s.openModalLazy)(() => Promise.resolve((t) => (0, l.jsx)(u, { ...t, ...e })));
}
