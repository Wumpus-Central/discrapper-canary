i.d(n, { default: () => l });
var r = i(627968);
i(64700);
var e = i(158954),
    s = i(985018);
function l(t) {
    let { onConfirm: n, onBack: i, ...l } = t;
    return (0, r.jsx)(e.ConfirmModal, {
        title: s.intl.string(s.t.YrV3I9),
        subtitle: s.intl.string(s.t.MXSMtl),
        confirmText: s.intl.string(s.t.X7eUJq),
        cancelText: s.intl.string(s.t["13/7kX"]),
        onConfirm: n,
        onCancel: i,
        ...l,
    });
}
