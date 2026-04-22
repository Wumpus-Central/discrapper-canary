"use strict";
n.d(t, { A: () => s });
var i = n(627968),
    l = n(192308);
function s(e) {
    let {
        giftRecipient: t,
        onClose: s,
        analyticsLocations: r,
        analyticsLocation: a,
        analyticsObject: o,
        giftMessage: c,
    } = e;
    return (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("61943"),
                n.e("28367"),
                n.e("27411"),
                n.e("49318"),
                n.e("12721"),
                n.e("58283"),
                n.e("17601"),
                n.e("8087"),
                n.e("55057"),
                n.e("60471"),
                n.e("42257"),
                n.e("48563"),
                n.e("27355"),
                n.e("67876"),
                n.e("94212"),
                n.e("72589"),
                n.e("6453"),
                n.e("29716"),
                n.e("63431"),
                n.e("55926"),
            ]).then(n.bind(n, 653813));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    giftRecipient: t,
                    analyticsLocations: r,
                    analyticsLocation: a,
                    analyticsObject: o,
                    giftMessage: c,
                });
        },
        { modalKey: `gift-option-select-modal-${t.id}`, onCloseCallback: s },
    );
}
