n.d(t, { Z: () => l });
var r = n(54381);
n(473749);
var i = n(793030),
    a = n(267097),
    o = n(752053),
    s = n(388032);
function l(e) {
    let { transitionState: t = i.Dvm.ENTERED, onClose: n } = e,
        { refreshCategories: l } = (0, a.Z)(),
        c = async () => {
            await n();
        };
    return (0, r.jsx)(i.Modal, {
        transitionState: t,
        onClose: c,
        size: "sm",
        title: s.intl.string(s.t["p8+qtU"]),
        actions: [],
        children: (0, r.jsx)(o.Z, {
            onRetry: l,
            errorOrigin: o.i.GIFT_MODAL,
        }),
    });
}
