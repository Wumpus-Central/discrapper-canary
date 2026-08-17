a.d(n, { Be: () => o, aU: () => d, fO: () => _, vK: () => c });
var t = a(477900);
a(582128);
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
                    a.e("471053"),
                    a.e("965584"),
                    a.e("1248"),
                    a.e("594149"),
                    a.e("786798"),
                    a.e("773883"),
                    a.e("73216"),
                    a.e("481647"),
                    a.e("776602"),
                    a.e("140402"),
                    a.e("67861"),
                    a.e("401518"),
                    a.e("577084"),
                    a.e("323354"),
                    a.e("844780"),
                    a.e("979630"),
                    a.e("236946"),
                    a.e("692639"),
                    a.e("565617"),
                    a.e("890480"),
                    a.e("440963"),
                    a.e("766031"),
                    a.e("394317"),
                    a.e("744385"),
                    a.e("523601"),
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
            a.e("786798"),
            a.e("773883"),
            a.e("42500"),
            a.e("577084"),
            a.e("692639"),
            a.e("565617"),
            a.e("744385"),
            a.e("566139"),
        ]).then(a.bind(a, 181622));
        return (a) => (0, t.jsx)(e, { ...a, message: n, failedDestinations: i, forwardOptions: d });
    });
}
