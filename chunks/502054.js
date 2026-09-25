i.d(n, { default: () => l });
var e = i(477900),
    r = i(582128),
    s = i(732159),
    a = i(817281),
    c = i(375708);
function l(t) {
    let { onSubmit: n, onClose: i, ...l } = t,
        [o, u] = r.useState(!1);
    return (0, e.jsx)(s.u, {
        title: c.intl.string(c.t.HlAPoq),
        subtitle: c.intl.string(c.t["cRW4D/"]),
        variant: "active",
        confirmText: c.intl.string(c.t.rimG2R),
        cancelText: c.intl.string(c.t["ETE/oC"]),
        onConfirm: n,
        onClose: function () {
            return (o && a.Ay.updatedUnsyncedSettings({ disableCallUserConfirmationPrompt: !0 }), i());
        },
        checkboxProps: { checked: o, onChange: (t) => u(t), label: c.intl.string(c.t["JdIQ/Y"]) },
        ...l,
    });
}
