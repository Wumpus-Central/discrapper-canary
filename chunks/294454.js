n.d(t, { Be: () => o, aU: () => r, fO: () => s, vK: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(530912);
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
    (0, a.pp)(t.channel_id, t.id, s),
        (0, l.mMO)(
            async () => {
                let { ForwardModal: e } = await Promise.all([n.e("96758"), n.e("43622"), n.e("12539")]).then(
                    n.bind(n, 911269),
                );
                return (n) =>
                    (0, i.jsx)(e, {
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
    (0, l.OoC)(r);
}
function d(e) {
    let { message: t, failedDestinations: a, forwardOptions: r } = e;
    (0, l.mMO)(async () => {
        let { ForwardFailedAlertModal: e } = await n.e("66139").then(n.bind(n, 181622));
        return (n) => (0, i.jsx)(e, { ...n, message: t, failedDestinations: a, forwardOptions: r });
    });
}
