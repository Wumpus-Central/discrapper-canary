n.d(i, { default: () => a });
var r = n(627968);
n(64700);
var s = n(158954),
    e = n(985018);
function a(t) {
    let { ruleName: i, ...n } = t,
        a = i ?? e.intl.string(e.t.ffR2cM);
    return (0, r.jsx)(s.ConfirmModal, {
        ...n,
        title: e.intl.string(e.t.Hy8XgL),
        subtitle: e.intl.format(e.t.hO7PgW, { ruleName: a }),
        confirmText: e.intl.string(e.t["cY+Oob"]),
    });
}
