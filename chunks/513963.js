n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    s = n(732955),
    a = n(817281),
    r = n(951829),
    o = n(985018);
function c(e) {
    let { type: t, onConfirm: n, onClose: c, ...d } = e,
        [u, h] = l.useState(!1),
        A = l.useCallback(() => {
            u && a.Ay.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), n(), c();
        }, [n, u, c]),
        _ = t === r.f.STREAM ? o.intl.string(o.t["/lFMWr"]) : o.intl.string(o.t.xzxhZS),
        m = t === r.f.STREAM ? o.intl.string(o.t.xaOX7d) : o.intl.string(o.t.oU1p9O);
    return (0, i.jsx)(s.aFV, {
        size: "md",
        actionBarInput: (0, i.jsx)(s.Sc0, {
            checked: u,
            onChange: (e) => h(e),
            label: o.intl.string(o.t["JdIQ/Y"]),
            labelType: "secondary",
        }),
        actions: [
            { variant: "secondary", text: o.intl.string(o.t["ETE/oC"]), onClick: c },
            { variant: "primary", text: o.intl.string(o.t.BddRzS), onClick: A },
        ],
        title: _,
        subtitle: m,
        onClose: c,
        ...d,
    });
}
