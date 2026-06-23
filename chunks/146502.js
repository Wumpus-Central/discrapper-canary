i.d(n, { default: () => f });
var r = i(627968);
i(64700);
var l = i(732159),
    s = i(268749),
    e = i(375708);
function f(t) {
    let { ruleName: n, onConfirm: i, ...f } = t,
        { setEditingRule: o } = (0, s.U)(),
        u = n ?? e.intl.string(e.t.ffR2cM);
    return (0, r.jsx)(l.ConfirmModal, {
        ...f,
        title: e.intl.string(e.t.kknTmH),
        subtitle: e.intl.format(e.t["ff/gx7"], { ruleName: u }),
        confirmText: e.intl.string(e.t["cY+Oob"]),
        onConfirm: function () {
            o(null), i?.();
        },
    });
}
