"use strict";
n.d(t, { Be: () => l, aU: () => a, fO: () => o, vK: () => u });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(530912);
let a = "forward-modal";
function o(e) {
    let {
        message: t,
        source: o,
        initialSelectedDestinations: l = [],
        forwardOptions: u,
        onRequestSent: c,
        customSendHandler: d,
    } = e;
    (0, s.pp)(t.channel_id, t.id, o),
        (0, r.openModalLazy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([
                    n.e("22822"),
                    n.e("16012"),
                    n.e("67942"),
                    n.e("21530"),
                    n.e("68331"),
                    n.e("46776"),
                    n.e("76602"),
                    n.e("34530"),
                    n.e("28229"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("23354"),
                    n.e("77084"),
                    n.e("44780"),
                    n.e("18997"),
                    n.e("65617"),
                    n.e("36946"),
                    n.e("92639"),
                    n.e("44385"),
                    n.e("40963"),
                    n.e("90480"),
                    n.e("66031"),
                    n.e("94317"),
                    n.e("23601"),
                ]).then(n.bind(n, 953832));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        message: t,
                        initialSelectedDestinations: l,
                        forwardOptions: u,
                        onRequestSent: c,
                        customSendHandler: d,
                        source: o,
                    });
            },
            { modalKey: a },
        );
}
function l() {
    (0, r.closeModal)(a);
}
function u(e) {
    let { message: t, failedDestinations: s, forwardOptions: a } = e;
    (0, r.openModalLazy)(async () => {
        let { ForwardFailedAlertModal: e } = await Promise.all([
            n.e("68331"),
            n.e("46776"),
            n.e("40556"),
            n.e("77084"),
            n.e("65617"),
            n.e("92639"),
            n.e("44385"),
            n.e("66139"),
        ]).then(n.bind(n, 181622));
        return (n) => (0, i.jsx)(e, { ...n, message: t, failedDestinations: s, forwardOptions: a });
    });
}
