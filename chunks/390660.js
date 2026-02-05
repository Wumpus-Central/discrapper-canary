"use strict";
n.d(t, { k: () => l, u: () => o });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(80556);
let s = "RESTRICTED_HOURS_MODAL_KEY";
async function o() {
    await (0, i.mMO)(
        async () => {
            let { default: e } = await n.e("55764").then(n.bind(n, 295615));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        { modalKey: s, dismissable: !1, backdropStyle: i.F2Z.LIGHTBOX, Layer: a.Ay },
    );
}
function l() {
    (0, i.OoC)(s);
}
