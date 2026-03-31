"use strict";
n.d(t, { L: () => o, Te: () => a });
var r = n(627968);
n(64700);
var i = n(397927);
n(515718);
var s = n(190460);
function a(e) {
    return "number" != typeof e ? (0, i.FT9)(e) * s.Xq : e * s.Xq;
}
let o = (e) => {
    let { analyticsLocations: t, initialSelectedDecoration: s, guild: a, onClose: o, stackingBehavior: l } = e;
    (0, i.mMO)(
        async () => {
            let { default: e } = await n.e("38912").then(n.bind(n, 302691));
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    onCloseModal: n.onClose,
                    onClose: o,
                    analyticsLocations: t,
                    initialSelectedDecoration: s,
                    guild: a,
                });
        },
        { stackingBehavior: l },
    );
};
