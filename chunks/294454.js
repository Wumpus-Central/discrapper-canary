"use strict";
n.d(t, { Be: () => o, aU: () => r, fO: () => i, vK: () => c });
var a = n(627968);
n(64700);
var l = n(397927),
    s = n(530912);
let r = "forward-modal";
function i(e) {
    let {
        message: t,
        source: i,
        initialSelectedDestinations: o = [],
        forwardOptions: c,
        onRequestSent: d,
        customSendHandler: u,
    } = e;
    (0, s.pp)(t.channel_id, t.id, i),
        (0, l.mMO)(
            async () => {
                let { ForwardModal: e } = await Promise.all([n.e("96758"), n.e("43622"), n.e("43899")]).then(
                    n.bind(n, 911269),
                );
                return (n) =>
                    (0, a.jsx)(e, {
                        ...n,
                        message: t,
                        initialSelectedDestinations: o,
                        forwardOptions: c,
                        onRequestSent: d,
                        customSendHandler: u,
                        source: i,
                    });
            },
            { modalKey: r },
        );
}
function o() {
    (0, l.OoC)(r);
}
function c(e) {
    let { message: t, failedDestinations: s, forwardOptions: r } = e;
    (0, l.mMO)(async () => {
        let { ForwardFailedAlertModal: e } = await n.e("66139").then(n.bind(n, 181622));
        return (n) => (0, a.jsx)(e, { ...n, message: t, failedDestinations: s, forwardOptions: r });
    });
}
