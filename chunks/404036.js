"use strict";
n.d(t, { A: () => a });
var r = n(627968),
    i = n(397927);
let s = (e) => `gift-option-select-modal-${e.id}`;
function a(e) {
    let {
        giftRecipient: t,
        onClose: a,
        analyticsLocations: o,
        analyticsLocation: l,
        analyticsObject: u,
        giftMessage: c,
    } = e;
    return (0, i.mMO)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("2292"),
                n.e("18731"),
                n.e("13696"),
                n.e("29716"),
                n.e("41586"),
                n.e("13955"),
            ]).then(n.bind(n, 653813));
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    giftRecipient: t,
                    analyticsLocations: o,
                    analyticsLocation: l,
                    analyticsObject: u,
                    giftMessage: c,
                });
        },
        { modalKey: s(t), onCloseCallback: a },
    );
}
