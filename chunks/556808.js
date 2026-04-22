"use strict";
n.d(t, { L: () => l, l: () => s });
var a = n(627968),
    i = n(192308);
let r = "slayer-eligibility-check-modal";
function l(e) {
    let { guildId: t, skuId: l, analyticsLocations: s, onContinue: d, onClose: o } = e;
    (0, i.openModalLazy)(
        async () => {
            let { default: e } = await n.e("62754").then(n.bind(n, 424185));
            return (n) => (0, a.jsx)(e, { ...n, guildId: t, skuId: l, analyticsLocations: s, onContinue: d });
        },
        { modalKey: r, onCloseCallback: o },
    );
}
function s() {
    (0, i.closeModal)(r);
}
