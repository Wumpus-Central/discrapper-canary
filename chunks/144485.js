n.d(e, { A: () => s });
var r = n(627968);
n(64700);
var i = n(314116),
    a = n(192308),
    l = n(231723),
    o = n(652215),
    u = n(985018);
let s = {
    openSecureFramesStreamVerification: function (t, e) {
        (0, a.openModalLazy)(async () => {
            let i = (await n.e("46115").then(n.bind(n, 773262))).default;
            return (n) => (0, r.jsx)(i, { streamKey: t, channelId: e, ...n });
        });
    },
    openSecureFramesUserVerificationModal: function (t, e, i, u) {
        i() &&
            (0, a.openModalLazy)(
                async () => {
                    let i = (await n.e("40623").then(n.bind(n, 912018))).default;
                    return (n) => (0, r.jsx)(i, { userId: t, channelId: e, ...n });
                },
                { contextKey: u === o.BRT.POPOUT ? l.KX : l.SY },
            );
    },
    openSecureFramesUpdateConfirmation: function (t) {
        let { title: e, subtitle: n, confirmText: r = u.intl.string(u.t["cY+Oob"]), onConfirm: a } = t;
        (0, i.A)({ title: e, subtitle: n, confirmText: r, onConfirm: a });
    },
    handleSecureFramesUserVerificationLink: function (t) {
        throw Error("handleSecureFramesUserVerificationLink not implemented");
    },
};
