r.d(i, { default: () => e });
var n = r(627968);
r(64700);
var s = r(158954),
    a = r(985018);
function e(t) {
    let { onConfirm: i, ...r } = t;
    return (0, n.jsx)(s.ConfirmModal, {
        title: a.intl.string(a.t["5yTUuc"]),
        subtitle: a.intl.string(a.t.dRhrXh),
        variant: "primary",
        confirmText: a.intl.string(a.t.TyCVIq),
        onConfirm: i,
        ...r,
    });
}
