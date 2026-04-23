n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(314116),
    a = n(192308),
    l = n(231723),
    o = n(652215),
    s = n(985018);
let c = {
    openSecureFramesStreamVerification: function (e, t) {
        (0, a.openModalLazy)(async () => {
            let i = (await n.e("46115").then(n.bind(n, 773262))).default;
            return (n) => (0, r.jsx)(i, { streamKey: e, channelId: t, ...n });
        });
    },
    openSecureFramesUserVerificationModal: function (e, t, i, s) {
        i() &&
            (0, a.openModalLazy)(
                async () => {
                    let i = (await n.e("16674").then(n.bind(n, 632441))).default;
                    return (n) => (0, r.jsx)(i, { userId: e, channelId: t, ...n });
                },
                { contextKey: s === o.BRT.POPOUT ? l.KX : l.SY },
            );
    },
    openSecureFramesUpdateConfirmation: function (e) {
        let { title: t, subtitle: n, confirmText: r = s.intl.string(s.t["cY+Oob"]), onConfirm: a } = e;
        (0, i.A)({ title: t, subtitle: n, confirmText: r, onConfirm: a });
    },
    handleSecureFramesUserVerificationLink: function (e) {
        throw Error("handleSecureFramesUserVerificationLink not implemented");
    },
};
