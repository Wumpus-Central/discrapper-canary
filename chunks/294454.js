n.d(e, { Be: () => u, aU: () => i, fO: () => l, vK: () => c });
var r = n(627968);
n(64700);
var a = n(397927),
    s = n(530912);
let i = "forward-modal";
function l(t) {
    let {
        message: e,
        source: l,
        initialSelectedDestinations: u = [],
        forwardOptions: c,
        onRequestSent: o,
        customSendHandler: d,
    } = t;
    (0, s.pp)(e.channel_id, e.id, l),
        (0, a.mMO)(
            async () => {
                let { ForwardModal: t } = await Promise.all([n.e("96758"), n.e("43622"), n.e("79996")]).then(
                    n.bind(n, 911269),
                );
                return (n) =>
                    (0, r.jsx)(t, {
                        ...n,
                        message: e,
                        initialSelectedDestinations: u,
                        forwardOptions: c,
                        onRequestSent: o,
                        customSendHandler: d,
                        source: l,
                    });
            },
            { modalKey: i },
        );
}
function u() {
    (0, a.OoC)(i);
}
function c(t) {
    let { message: e, failedDestinations: s, forwardOptions: i } = t;
    (0, a.mMO)(async () => {
        let { ForwardFailedAlertModal: t } = await n.e("66139").then(n.bind(n, 181622));
        return (n) => (0, r.jsx)(t, { ...n, message: e, failedDestinations: s, forwardOptions: i });
    });
}
