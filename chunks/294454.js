n.d(t, { Be: () => o, aU: () => r, fO: () => s, vK: () => d });
var a = n(627968);
n(64700);
var l = n(192308),
    i = n(530912);
let r = "forward-modal";
function s(e) {
    let {
        message: t,
        source: s,
        initialSelectedDestinations: o = [],
        forwardOptions: d,
        onRequestSent: c,
        customSendHandler: u,
    } = e;
    (0, i.pp)(t.channel_id, t.id, s),
        (0, l.openModalLazy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([n.e("96758"), n.e("23965"), n.e("64618")]).then(
                    n.bind(n, 911269),
                );
                return (n) =>
                    (0, a.jsx)(e, {
                        ...n,
                        message: t,
                        initialSelectedDestinations: o,
                        forwardOptions: d,
                        onRequestSent: c,
                        customSendHandler: u,
                        source: s,
                    });
            },
            { modalKey: r },
        );
}
function o() {
    (0, l.closeModal)(r);
}
function d(e) {
    let { message: t, failedDestinations: i, forwardOptions: r } = e;
    (0, l.openModalLazy)(async () => {
        let { ForwardFailedAlertModal: e } = await n.e("66139").then(n.bind(n, 181622));
        return (n) => (0, a.jsx)(e, { ...n, message: t, failedDestinations: i, forwardOptions: r });
    });
}
