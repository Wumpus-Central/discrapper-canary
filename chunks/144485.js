"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(314116),
    s = n(192308),
    a = n(231723),
    o = n(652215),
    l = n(375708);
let u = {
    openSecureFramesStreamVerification: function (e, t) {
        (0, s.openModalLazy)(async () => {
            let r = (await Promise.all([n.e("5980"), n.e("91589"), n.e("46115")]).then(n.bind(n, 773262))).default;
            return (n) => (0, i.jsx)(r, { streamKey: e, channelId: t, ...n });
        });
    },
    openSecureFramesUserVerificationModal: function (e, t, r, l) {
        r() &&
            (0, s.openModalLazy)(
                async () => {
                    let r = (
                        await Promise.all([n.e("5980"), n.e("91589"), n.e("44264"), n.e("25592"), n.e("40623")]).then(
                            n.bind(n, 912018),
                        )
                    ).default;
                    return (n) => (0, i.jsx)(r, { userId: e, channelId: t, ...n });
                },
                { contextKey: l === o.BRT.POPOUT ? a.KX : a.SY },
            );
    },
    openSecureFramesUpdateConfirmation: function (e) {
        let { title: t, subtitle: n, confirmText: i = l.intl.string(l.t["cY+Oob"]), onConfirm: s } = e;
        (0, r.A)({ title: t, subtitle: n, confirmText: i, onConfirm: s });
    },
    handleSecureFramesUserVerificationLink: function (e) {
        throw Error("handleSecureFramesUserVerificationLink not implemented");
    },
};
