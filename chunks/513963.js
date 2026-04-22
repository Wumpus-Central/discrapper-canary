t.d(n, { A: () => u });
var l = t(627968),
    i = t(64700),
    a = t(189213),
    s = t(150934),
    r = t(817281),
    o = t(951829),
    c = t(985018);
function u(e) {
    let { type: n, onConfirm: t, onClose: u, ...d } = e,
        [A, h] = i.useState(!1),
        p = i.useCallback(() => {
            A && r.Ay.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), t(), u();
        }, [t, A, u]),
        m = n === o.f.STREAM ? c.intl.string(c.t["/lFMWr"]) : c.intl.string(c.t.xzxhZS),
        g = n === o.f.STREAM ? c.intl.string(c.t.xaOX7d) : c.intl.string(c.t.oU1p9O);
    return (0, l.jsx)(a.Modal, {
        size: "md",
        actionBarInput: (0, l.jsx)(s.S, {
            checked: A,
            onChange: (e) => h(e),
            label: c.intl.string(c.t["JdIQ/Y"]),
            labelType: "secondary",
        }),
        actions: [
            { variant: "secondary", text: c.intl.string(c.t["ETE/oC"]), onClick: u },
            { variant: "primary", text: c.intl.string(c.t.BddRzS), onClick: p },
        ],
        title: m,
        subtitle: g,
        onClose: u,
        ...d,
    });
}
