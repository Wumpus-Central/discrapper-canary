i.d(n, { default: () => l });
var e = i(627968),
    r = i(64700),
    s = i(732159),
    o = i(817281),
    a = i(375708);
function l(t) {
    let { onSubmit: n, onClose: i, ...l } = t,
        [c, d] = r.useState(!1);
    return (0, e.jsx)(s.ConfirmModal, {
        title: a.intl.string(a.t.HlAPoq),
        subtitle: a.intl.string(a.t["cRW4D/"]),
        variant: "active",
        confirmText: a.intl.string(a.t.rimG2R),
        cancelText: a.intl.string(a.t["ETE/oC"]),
        onConfirm: n,
        onClose: function () {
            return c && o.Ay.updatedUnsyncedSettings({ disableCallUserConfirmationPrompt: !0 }), i();
        },
        checkboxProps: { checked: c, onChange: (t) => d(t), label: a.intl.string(a.t["JdIQ/Y"]) },
        ...l,
    });
}
