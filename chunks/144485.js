var r = n(477900);
n(582128);
var i = n(314116),
    a = n(192308),
    o = n(231723),
    u = n(652215),
    l = n(792996);
n.d(
    t,
    {},
    {
        A: {
            openSecureFramesStreamVerification: function (e, t) {
                (0, a.mM)(async () => {
                    let i = (
                        await Promise.all([n.e(903072), n.e(545610), n.e(563510), n.e(930049), n.e(146115)]).then(
                            n.bind(n, 773262),
                        )
                    ).default;
                    return (n) => (0, r.jsx)(i, { streamKey: e, channelId: t, ...n });
                });
            },
            openSecureFramesUserVerificationModal: function (e, t, i, l) {
                i() &&
                    (0, a.mM)(
                        async () => {
                            let i = (
                                await Promise.all([
                                    n.e(903072),
                                    n.e(545610),
                                    n.e(44264),
                                    n.e(563510),
                                    n.e(425592),
                                    n.e(930049),
                                    n.e(798466),
                                ]).then(n.bind(n, 730713))
                            ).default;
                            return (n) => (0, r.jsx)(i, { userId: e, channelId: t, ...n });
                        },
                        { contextKey: l === u.BRT.POPOUT ? "popout" : o.SY },
                    );
            },
            openSecureFramesUpdateConfirmation: function (e) {
                let { title: t, subtitle: n, confirmText: r = l.intl.string(l.t["cY+Oob"]), onConfirm: a } = e;
                (0, i.A)({ title: t, subtitle: n, confirmText: r, onConfirm: a });
            },
            handleSecureFramesUserVerificationLink: function (e) {
                throw Error("handleSecureFramesUserVerificationLink not implemented");
            },
        },
    },
);
