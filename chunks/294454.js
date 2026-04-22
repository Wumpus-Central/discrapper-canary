"use strict";
n.d(t, { Be: () => o, aU: () => l, fO: () => s, vK: () => c });
var i = n(627968);
n(64700);
var a = n(192308),
    r = n(530912);
let l = "forward-modal";
function s(e) {
    let {
        message: t,
        source: s,
        initialSelectedDestinations: o = [],
        forwardOptions: c,
        onRequestSent: u,
        customSendHandler: d,
    } = e;
    (0, r.pp)(t.channel_id, t.id, s),
        (0, a.openModalLazy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([n.e("96758"), n.e("79133"), n.e("73148")]).then(
                    n.bind(n, 911269),
                );
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        message: t,
                        initialSelectedDestinations: o,
                        forwardOptions: c,
                        onRequestSent: u,
                        customSendHandler: d,
                        source: s,
                    });
            },
            { modalKey: l },
        );
}
function o() {
    (0, a.closeModal)(l);
}
function c(e) {
    let { message: t, failedDestinations: r, forwardOptions: l } = e;
    (0, a.openModalLazy)(async () => {
        let { ForwardFailedAlertModal: e } = await n.e("66139").then(n.bind(n, 181622));
        return (n) => (0, i.jsx)(e, { ...n, message: t, failedDestinations: r, forwardOptions: l });
    });
}
