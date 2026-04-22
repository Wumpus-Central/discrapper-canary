i.d(n, { default: () => l });
var e = i(627968),
    s = i(64700),
    r = i(732159),
    o = i(817281),
    a = i(985018);
function l(t) {
    let { onSubmit: n, onClose: i, ...l } = t,
        [c, d] = s.useState(!1);
    return (0, e.jsx)(r.ConfirmModal, {
        title: a.intl.string(a.t.HlAPoq),
        subtitle: a.intl.string(a.t.Jz3oqA),
        variant: "active",
        confirmText: a.intl.string(a.t.rimG2R),
        cancelText: a.intl.string(a.t["ETE/oC"]),
        onConfirm: n,
        onClose: () => (c && o.Ay.updatedUnsyncedSettings({ disableCallUserConfirmationPrompt: !0 }), i()),
        checkboxProps: { checked: c, onChange: (t) => d(t), label: a.intl.string(a.t["JdIQ/Y"]) },
        ...l,
    });
}
