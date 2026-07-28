r.d(i, { default: () => e });
var n = r(477900);
r(582128);
var s = r(732159),
    a = r(375708);
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
