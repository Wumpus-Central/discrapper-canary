"use strict";
n.d(t, { Be: () => o, aU: () => s, fO: () => i, vK: () => c });
var a = n(627968);
n(64700);
var l = n(397927),
    r = n(530912);
let s = "forward-modal";
function i(e) {
    let {
        message: t,
        source: i,
        initialSelectedDestinations: o = [],
        forwardOptions: c,
        onRequestSent: d,
        customSendHandler: u,
    } = e;
    (0, r.pp)(t.channel_id, t.id, i),
        (0, l.mMO)(
            async () => {
                let { ForwardModal: e } = await Promise.all([n.e("96758"), n.e("43622"), n.e("79996")]).then(
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
            { modalKey: s },
        );
}
function o() {
    (0, l.OoC)(s);
}
function c(e) {
    let { message: t, failedDestinations: r, forwardOptions: s } = e;
    (0, l.mMO)(async () => {
        let { ForwardFailedAlertModal: e } = await n.e("66139").then(n.bind(n, 181622));
        return (n) => (0, a.jsx)(e, { ...n, message: t, failedDestinations: r, forwardOptions: s });
    });
}
