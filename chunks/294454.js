n.d(t, { Be: () => o, aU: () => r, fO: () => s, vK: () => c });
var l = n(627968);
n(64700);
var a = n(192308),
    i = n(530912);
let r = "forward-modal";
function s(e) {
    let {
        message: t,
        source: s,
        initialSelectedDestinations: o = [],
        forwardOptions: c,
        onRequestSent: d,
        customSendHandler: u,
    } = e;
    (0, i.pp)(t.channel_id, t.id, s),
        (0, a.openModalLazy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([n.e("96758"), n.e("922")]).then(n.bind(n, 953832));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        message: t,
                        initialSelectedDestinations: o,
                        forwardOptions: c,
                        onRequestSent: d,
                        customSendHandler: u,
                        source: s,
                    });
            },
            { modalKey: r },
        );
}
function o() {
    (0, a.closeModal)(r);
}
function c(e) {
    let { message: t, failedDestinations: i, forwardOptions: r } = e;
    (0, a.openModalLazy)(async () => {
        let { ForwardFailedAlertModal: e } = await n.e("66139").then(n.bind(n, 181622));
        return (n) => (0, l.jsx)(e, { ...n, message: t, failedDestinations: i, forwardOptions: r });
    });
}
