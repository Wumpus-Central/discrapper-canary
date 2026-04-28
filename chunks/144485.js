n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(314116),
    a = n(192308),
    o = n(231723),
    l = n(652215),
    u = n(985018);
let c = {
    openSecureFramesStreamVerification: function (e, t) {
        (0, a.openModalLazy)(async () => {
            let i = (
                await Promise.all([n.e("50971"), n.e("60142"), n.e("91589"), n.e("46115")]).then(n.bind(n, 773262))
            ).default;
            return (n) => (0, r.jsx)(i, { streamKey: e, channelId: t, ...n });
        });
    },
    openSecureFramesUserVerificationModal: function (e, t, i, u) {
        i() &&
            (0, a.openModalLazy)(
                async () => {
                    let i = (
                        await Promise.all([
                            n.e("50971"),
                            n.e("60142"),
                            n.e("17487"),
                            n.e("91589"),
                            n.e("44264"),
                            n.e("30936"),
                            n.e("40623"),
                        ]).then(n.bind(n, 912018))
                    ).default;
                    return (n) => (0, r.jsx)(i, { userId: e, channelId: t, ...n });
                },
                { contextKey: u === l.BRT.POPOUT ? o.KX : o.SY },
            );
    },
    openSecureFramesUpdateConfirmation: function (e) {
        let { title: t, subtitle: n, confirmText: r = u.intl.string(u.t["cY+Oob"]), onConfirm: a } = e;
        (0, i.A)({ title: t, subtitle: n, confirmText: r, onConfirm: a });
    },
    handleSecureFramesUserVerificationLink: function (e) {
        throw Error("handleSecureFramesUserVerificationLink not implemented");
    },
};
