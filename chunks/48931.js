n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(257465),
    a = n(82659),
    o = n(267097),
    s = n(752053),
    l = n(388032);
function c(e) {
    let { transitionState: t = i.D.ENTERED, onClose: n } = e,
        { refreshCategories: c } = (0, o.Z)(),
        u = async () => {
            await n();
        };
    return (0, r.jsx)(a.Modal, {
        transitionState: t,
        onClose: u,
        size: "sm",
        title: l.intl.string(l.t["p8+qtb"]),
        actions: [],
        children: (0, r.jsx)(s.Z, {
            onRetry: c,
            errorOrigin: s.i.GIFT_MODAL,
        }),
    });
}
