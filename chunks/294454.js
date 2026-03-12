a.d(t, { Be: () => o, aU: () => s, fO: () => r, vK: () => c });
var n = a(627968);
a(64700);
var i = a(397927),
    l = a(530912);
let s = "forward-modal";
function r(e) {
    let {
        message: t,
        source: r,
        initialSelectedDestinations: o = [],
        forwardOptions: c,
        onRequestSent: d,
        customSendHandler: u,
    } = e;
    (0, l.pp)(t.channel_id, t.id, r),
        (0, i.mMO)(
            async () => {
                let { ForwardModal: e } = await Promise.all([a.e("96758"), a.e("43622"), a.e("8622")]).then(
                    a.bind(a, 911269),
                );
                return (a) =>
                    (0, n.jsx)(e, {
                        ...a,
                        message: t,
                        initialSelectedDestinations: o,
                        forwardOptions: c,
                        onRequestSent: d,
                        customSendHandler: u,
                        source: r,
                    });
            },
            { modalKey: s },
        );
}
function o() {
    (0, i.OoC)(s);
}
function c(e) {
    let { message: t, failedDestinations: l, forwardOptions: s } = e;
    (0, i.mMO)(async () => {
        let { ForwardFailedAlertModal: e } = await a.e("66139").then(a.bind(a, 181622));
        return (a) => (0, n.jsx)(e, { ...a, message: t, failedDestinations: l, forwardOptions: s });
    });
}
