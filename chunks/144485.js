n.d(t, { A: () => c });
var r = n(477900);
n(582128);
var i = n(314116),
    a = n(192308),
    o = n(231723),
    l = n(652215),
    u = n(375708);
let c = {
    openSecureFramesStreamVerification: function (e, t) {
        (0, a.openModalLazy)(async () => {
            let i = (
                await Promise.all([n.e("907230"), n.e("545610"), n.e("563510"), n.e("930049"), n.e("146115")]).then(
                    n.bind(n, 773262),
                )
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
                            n.e("907230"),
                            n.e("545610"),
                            n.e("44264"),
                            n.e("563510"),
                            n.e("425592"),
                            n.e("930049"),
                            n.e("250046"),
                        ]).then(n.bind(n, 591757))
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
