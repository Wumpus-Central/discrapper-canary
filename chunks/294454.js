n.d(t, { Be: () => o, aU: () => l, fO: () => s, vK: () => d });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(530912);
let l = "forward-modal";
function s(e) {
    let {
        message: t,
        source: s,
        initialSelectedDestinations: o = [],
        forwardOptions: d,
        onRequestSent: u,
        customSendHandler: c,
    } = e;
    (0, a.pp)(t.channel_id, t.id, s),
        (0, r.openModalLazy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([
                    n.e("24199"),
                    n.e("57036"),
                    n.e("88394"),
                    n.e("80527"),
                    n.e("21909"),
                    n.e("31825"),
                    n.e("23353"),
                    n.e("96123"),
                    n.e("7175"),
                    n.e("37249"),
                    n.e("14138"),
                    n.e("8971"),
                    n.e("88017"),
                    n.e("77404"),
                    n.e("1040"),
                    n.e("64615"),
                    n.e("17239"),
                    n.e("67849"),
                    n.e("64492"),
                    n.e("20861"),
                    n.e("36682"),
                    n.e("45723"),
                    n.e("56871"),
                    n.e("69601"),
                    n.e("63191"),
                    n.e("51444"),
                    n.e("62290"),
                    n.e("80973"),
                    n.e("96758"),
                    n.e("922"),
                    n.e("82550"),
                ]).then(n.bind(n, 953832));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        message: t,
                        initialSelectedDestinations: o,
                        forwardOptions: d,
                        onRequestSent: u,
                        customSendHandler: c,
                        source: s,
                    });
            },
            { modalKey: l },
        );
}
function o() {
    (0, r.closeModal)(l);
}
function d(e) {
    let { message: t, failedDestinations: a, forwardOptions: l } = e;
    (0, r.openModalLazy)(async () => {
        let { ForwardFailedAlertModal: e } = await Promise.all([n.e("96123"), n.e("7548")]).then(n.bind(n, 181622));
        return (n) => (0, i.jsx)(e, { ...n, message: t, failedDestinations: a, forwardOptions: l });
    });
}
