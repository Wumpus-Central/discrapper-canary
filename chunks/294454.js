"use strict";
n.d(t, { Be: () => c, aU: () => r, fO: () => s, vK: () => o });
var a = n(627968);
n(64700);
var i = n(192308),
    l = n(530912);
let r = "forward-modal";
function s(e) {
    let {
        message: t,
        source: s,
        initialSelectedDestinations: c = [],
        forwardOptions: o,
        onRequestSent: d,
        customSendHandler: u,
    } = e;
    (0, l.pp)(t.channel_id, t.id, s),
        (0, i.openModalLazy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([n.e("96758"), n.e("922"), n.e("28748")]).then(
                    n.bind(n, 953832),
                );
                return (n) =>
                    (0, a.jsx)(e, {
                        ...n,
                        message: t,
                        initialSelectedDestinations: c,
                        forwardOptions: o,
                        onRequestSent: d,
                        customSendHandler: u,
                        source: s,
                    });
            },
            { modalKey: r },
        );
}
function c() {
    (0, i.closeModal)(r);
}
function o(e) {
    let { message: t, failedDestinations: l, forwardOptions: r } = e;
    (0, i.openModalLazy)(async () => {
        let { ForwardFailedAlertModal: e } = await n.e("66139").then(n.bind(n, 181622));
        return (n) => (0, a.jsx)(e, { ...n, message: t, failedDestinations: l, forwardOptions: r });
    });
}
