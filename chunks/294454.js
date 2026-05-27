a.d(n, { Be: () => o, aU: () => d, fO: () => _, vK: () => c });
var t = a(627968);
a(64700);
var s = a(192308),
    i = a(530912);
let d = "forward-modal";
function _(e) {
    let {
        message: n,
        source: _,
        initialSelectedDestinations: o = [],
        forwardOptions: c,
        onRequestSent: r,
        customSendHandler: u,
    } = e;
    (0, i.pp)(n.channel_id, n.id, _),
        (0, s.openModalLazy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([
                    a.e("28952"),
                    a.e("32757"),
                    a.e("14433"),
                    a.e("21530"),
                    a.e("96768"),
                    a.e("46776"),
                    a.e("76602"),
                    a.e("34530"),
                    a.e("28229"),
                    a.e("67861"),
                    a.e("1518"),
                    a.e("23354"),
                    a.e("77084"),
                    a.e("44780"),
                    a.e("18997"),
                    a.e("65617"),
                    a.e("36946"),
                    a.e("92639"),
                    a.e("44385"),
                    a.e("40963"),
                    a.e("90480"),
                    a.e("66031"),
                    a.e("94317"),
                    a.e("23601"),
                ]).then(a.bind(a, 953832));
                return (a) =>
                    (0, t.jsx)(e, {
                        ...a,
                        message: n,
                        initialSelectedDestinations: o,
                        forwardOptions: c,
                        onRequestSent: r,
                        customSendHandler: u,
                        source: _,
                    });
            },
            { modalKey: d },
        );
}
function o() {
    (0, s.closeModal)(d);
}
function c(e) {
    let { message: n, failedDestinations: i, forwardOptions: d } = e;
    (0, s.openModalLazy)(async () => {
        let { ForwardFailedAlertModal: e } = await Promise.all([
            a.e("96768"),
            a.e("46776"),
            a.e("40556"),
            a.e("77084"),
            a.e("65617"),
            a.e("92639"),
            a.e("44385"),
            a.e("66139"),
        ]).then(a.bind(a, 181622));
        return (a) => (0, t.jsx)(e, { ...a, message: n, failedDestinations: i, forwardOptions: d });
    });
}
