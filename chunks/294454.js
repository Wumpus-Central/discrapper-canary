"use strict";
n.d(t, { Be: () => o, aU: () => s, fO: () => l, vK: () => d });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(530912);
let s = "forward-modal";
function l(e) {
    let {
        message: t,
        source: l,
        initialSelectedDestinations: o = [],
        forwardOptions: d,
        onRequestSent: c,
        customSendHandler: u,
    } = e;
    (0, a.pp)(t.channel_id, t.id, l),
        (0, r.openModalLazy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([
                    n.e("8073"),
                    n.e("37634"),
                    n.e("42157"),
                    n.e("16747"),
                    n.e("94635"),
                    n.e("43880"),
                    n.e("81647"),
                    n.e("76602"),
                    n.e("40402"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("23354"),
                    n.e("77084"),
                    n.e("18997"),
                    n.e("44780"),
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
                        initialSelectedDestinations: o,
                        forwardOptions: d,
                        onRequestSent: c,
                        customSendHandler: u,
                        source: l,
                    });
            },
            { modalKey: s },
        );
}
function o() {
    (0, r.closeModal)(s);
}
function d(e) {
    let { message: t, failedDestinations: a, forwardOptions: s } = e;
    (0, r.openModalLazy)(async () => {
        let { ForwardFailedAlertModal: e } = await Promise.all([
            n.e("16747"),
            n.e("94635"),
            n.e("40556"),
            n.e("77084"),
            n.e("65617"),
            n.e("92639"),
            n.e("44385"),
            n.e("66139"),
        ]).then(n.bind(n, 181622));
        return (n) => (0, i.jsx)(e, { ...n, message: t, failedDestinations: a, forwardOptions: s });
    });
}
