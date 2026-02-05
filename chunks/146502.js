n.d(i, { default: () => a });
var r = n(627968);
n(64700);
var l = n(158954),
    s = n(268749),
    e = n(985018);
function a(t) {
    let { ruleName: i, onConfirm: n, ...a } = t,
        { setEditingRule: f } = (0, s.U)(),
        o = i ?? e.intl.string(e.t.ffR2cM);
    return (0, r.jsx)(l.ConfirmModal, {
        ...a,
        title: e.intl.string(e.t.kknTmH),
        subtitle: e.intl.format(e.t["ff/gx7"], { ruleName: o }),
        confirmText: e.intl.string(e.t["cY+Oob"]),
        onConfirm: () => {
            f(null), n?.();
        },
    });
}
