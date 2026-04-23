"use strict";
n.d(t, { L: () => l, Te: () => o });
var i = n(627968);
n(64700);
var r = n(778712),
    s = n(192308);
n(515718);
var a = n(190460);
function o(e) {
    return "number" != typeof e ? (0, r.FT)(e) * a.Xq : e * a.Xq;
}
let l = (e) => {
    let { analyticsLocations: t, initialSelectedDecoration: r, guild: a, onClose: o, stackingBehavior: l } = e;
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await n.e("6721").then(n.bind(n, 40344));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    onCloseModal: n.onClose,
                    onClose: o,
                    analyticsLocations: t,
                    initialSelectedDecoration: r,
                    guild: a,
                });
        },
        { stackingBehavior: l },
    );
};
