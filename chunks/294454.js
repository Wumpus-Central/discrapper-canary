n.d(t, { Be: () => o, aU: () => s, fO: () => r, vK: () => d });
var a = n(627968);
n(64700);
var l = n(397927),
    i = n(530912);
let s = "forward-modal";
function r(e) {
    let {
        message: t,
        source: r,
        initialSelectedDestinations: o = [],
        forwardOptions: d,
        onRequestSent: c,
        customSendHandler: u,
    } = e;
    (0, i.pp)(t.channel_id, t.id, r),
        (0, l.mMO)(
            async () => {
                let { ForwardModal: e } = await Promise.all([n.e("43808"), n.e("43622"), n.e("39773")]).then(
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
                        source: r,
                    });
            },
            { modalKey: s },
        );
}
function o() {
    (0, l.OoC)(s);
}
function d(e) {
    let { message: t, failedDestinations: i, forwardOptions: s } = e;
    (0, l.mMO)(async () => {
        let { ForwardFailedAlertModal: e } = await n.e("66139").then(n.bind(n, 181622));
        return (n) => (0, a.jsx)(e, { ...n, message: t, failedDestinations: i, forwardOptions: s });
    });
}
