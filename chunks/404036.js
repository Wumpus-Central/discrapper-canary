"use strict";
n.d(t, { A: () => s });
var r = n(627968),
    i = n(192308);
function s(e) {
    let {
        giftRecipient: t,
        onClose: s,
        analyticsLocations: a,
        analyticsLocation: o,
        analyticsObject: l,
        giftMessage: u,
    } = e;
    return (0, i.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("94212"),
                n.e("13066"),
                n.e("35843"),
                n.e("29716"),
                n.e("14299"),
                n.e("55926"),
            ]).then(n.bind(n, 653813));
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    giftRecipient: t,
                    analyticsLocations: a,
                    analyticsLocation: o,
                    analyticsObject: l,
                    giftMessage: u,
                });
        },
        { modalKey: `gift-option-select-modal-${t.id}`, onCloseCallback: s },
    );
}
