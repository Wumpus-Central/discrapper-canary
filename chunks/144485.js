"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(314116),
    a = n(192308),
    s = n(231723),
    l = n(652215),
    o = n(375708);
let d = {
    openSecureFramesStreamVerification: function (e, t) {
        (0, a.openModalLazy)(async () => {
            let r = (
                await Promise.all([n.e("95981"), n.e("47158"), n.e("63510"), n.e("30049"), n.e("46115")]).then(
                    n.bind(n, 773262),
                )
            ).default;
            return (n) => (0, i.jsx)(r, { streamKey: e, channelId: t, ...n });
        });
    },
    openSecureFramesUserVerificationModal: function (e, t, r, o) {
        r() &&
            (0, a.openModalLazy)(
                async () => {
                    let r = (
                        await Promise.all([
                            n.e("95981"),
                            n.e("47158"),
                            n.e("63510"),
                            n.e("44264"),
                            n.e("25592"),
                            n.e("30049"),
                            n.e("40623"),
                        ]).then(n.bind(n, 912018))
                    ).default;
                    return (n) => (0, i.jsx)(r, { userId: e, channelId: t, ...n });
                },
                { contextKey: o === l.BRT.POPOUT ? s.KX : s.SY },
            );
    },
    openSecureFramesUpdateConfirmation: function (e) {
        let { title: t, subtitle: n, confirmText: i = o.intl.string(o.t["cY+Oob"]), onConfirm: a } = e;
        (0, r.A)({ title: t, subtitle: n, confirmText: i, onConfirm: a });
    },
    handleSecureFramesUserVerificationLink: function (e) {
        throw Error("handleSecureFramesUserVerificationLink not implemented");
    },
};
