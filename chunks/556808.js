"use strict";
n.d(t, { L: () => s, l: () => o });
var r = n(627968),
    i = n(397927);
let a = "slayer-eligibility-check-modal";
function s(e) {
    let { guildId: t, skuId: s, analyticsLocations: o, onContinue: l, onClose: u } = e;
    (0, i.mMO)(
        async () => {
            let { default: e } = await n.e("62754").then(n.bind(n, 424185));
            return (n) => (0, r.jsx)(e, { ...n, guildId: t, skuId: s, analyticsLocations: o, onContinue: l });
        },
        { modalKey: a, onCloseCallback: u },
    );
}
function o() {
    (0, i.OoC)(a);
}
