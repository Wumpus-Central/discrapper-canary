n.d(t, { o: () => o, v: () => c });
var i = n(627968);
n(64700);
var l = n(192308),
    a = n(954571),
    s = n(687599),
    r = n(652215);
function o(e) {
    let { channelId: t, onConfirm: o, onCancel: c } = e;
    a.default.track(r.HAw.OPEN_MODAL, { type: s.PY, channel_id: t }),
        (0, l.openModalLazy)(async () => {
            let { default: e } = await n.e("61841").then(n.bind(n, 987176));
            return (t) => (0, i.jsx)(e, { onConfirm: o, onDismiss: c, ...t });
        });
}
function c(e) {
    let { onConfirm: t, onCancel: a } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await n.e("19729").then(n.bind(n, 693864));
        return (n) => (0, i.jsx)(e, { onConfirm: t, onDismiss: a, ...n });
    });
}
