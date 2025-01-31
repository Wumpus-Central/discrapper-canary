n.d(t, {
    H: () => o,
    V: () => c
});
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(626135),
    r = n(687683),
    s = n(981631);
function o(e) {
    let { channelId: t, onConfirm: o, onCancel: c } = e;
    a.default.track(s.rMx.OPEN_MODAL, {
        type: r.t9,
        channel_id: t
    }),
        (0, l.ZDy)(async () => {
            let { default: e } = await n.e('4117').then(n.bind(n, 217723));
            return (t) =>
                (0, i.jsx)(e, {
                    onConfirm: o,
                    onDismiss: c,
                    ...t
                });
        });
}
function c(e) {
    let { onConfirm: t, onCancel: a } = e;
    (0, l.ZDy)(async () => {
        let { default: e } = await n.e('7649').then(n.bind(n, 797464));
        return (n) =>
            (0, i.jsx)(e, {
                onConfirm: t,
                onDismiss: a,
                ...n
            });
    });
}
