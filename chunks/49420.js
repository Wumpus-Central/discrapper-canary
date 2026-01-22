n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(315949),
    s = n(599062),
    o = n(985018);
function l(e) {
    let { transitionState: t = i.ip4.ENTERED, onClose: n } = e,
        { refreshCategories: l } = (0, a.A)(),
        c = async () => {
            await n();
        };
    return (0, r.jsx)(i.Modal, {
        transitionState: t,
        onClose: c,
        size: "sm",
        title: o.intl.string(o.t["p8+qtU"]),
        actions: [],
        children: (0, r.jsx)(s.h, {
            onRetry: l,
            errorOrigin: s.A.GIFT_MODAL,
        }),
    });
}
