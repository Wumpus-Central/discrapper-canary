n.d(e, { Z: () => l }), n(411104);
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(981631),
    o = n(388032);
let l = {
    openSecureFramesStreamVerification: function (t, e) {
        (0, i.ZDy)(async () => {
            let i = (await n.e('94904').then(n.bind(n, 660250))).default;
            return (n) =>
                (0, r.jsx)(i, {
                    streamKey: t,
                    channelId: e,
                    ...n
                });
        });
    },
    openSecureFramesUserVerificationModal: function (t, e, o, l) {
        o() &&
            (0, i.ZDy)(
                async () => {
                    let i = (await n.e('53793').then(n.bind(n, 963410))).default;
                    return (n) =>
                        (0, r.jsx)(i, {
                            userId: t,
                            channelId: e,
                            ...n
                        });
                },
                { contextKey: l === a.IlC.POPOUT ? i.u1M : i.z1l }
            );
    },
    openSecureFramesUpdateConfirmation: function (t) {
        let { title: e, subtitle: a, confirmText: l = o.intl.string(o.t['cY+Ooa']), onConfirm: c } = t;
        (0, i.ZDy)(async () => {
            let { ConfirmModal: t } = await Promise.resolve().then(n.bind(n, 481060));
            return (n) =>
                (0, r.jsx)(t, {
                    header: e,
                    confirmText: l,
                    cancelText: o.intl.string(o.t['ETE/oK']),
                    onConfirm: c,
                    ...n,
                    children: (0, r.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: a
                    })
                });
        });
    },
    handleSecureFramesUserVerificationLink: function (t) {
        throw Error('handleSecureFramesUserVerificationLink not implemented');
    }
};
