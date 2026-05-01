i.d(n, { A: () => c });
var e = i(627968),
    a = i(64700),
    s = i(189213),
    r = i(150934),
    l = i(817281),
    d = i(951829),
    o = i(375708);
function c(t) {
    let { type: n, onConfirm: i, onClose: c, ...p } = t,
        [u, S] = a.useState(!1),
        g = a.useCallback(() => {
            u && l.Ay.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), i(), c();
        }, [i, u, c]),
        C = n === d.f.STREAM ? o.intl.string(o.t["/lFMWr"]) : o.intl.string(o.t.xzxhZS),
        h = n === d.f.STREAM ? o.intl.string(o.t.xaOX7d) : o.intl.string(o.t.oU1p9O);
    return (0, e.jsx)(s.Modal, {
        size: "md",
        actionBarInput: (0, e.jsx)(r.S, {
            checked: u,
            onChange: (t) => S(t),
            label: o.intl.string(o.t["JdIQ/Y"]),
            labelType: "secondary",
        }),
        actions: [
            { variant: "secondary", text: o.intl.string(o.t["ETE/oC"]), onClick: c },
            { variant: "primary", text: o.intl.string(o.t.BddRzS), onClick: g },
        ],
        title: C,
        subtitle: h,
        onClose: c,
        ...p,
    });
}
