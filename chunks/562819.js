"use strict";
n.d(t, { L: () => l, Te: () => o });
var r = n(627968);
n(64700);
var i = n(778712),
    s = n(192308);
n(515718);
var a = n(190460);
function o(e) {
    return "number" != typeof e ? (0, i.FT)(e) * a.Xq : e * a.Xq;
}
let l = (e) => {
    let { analyticsLocations: t, initialSelectedDecoration: i, guild: a, onClose: o, stackingBehavior: l } = e;
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await n.e("38912").then(n.bind(n, 302691));
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    onCloseModal: n.onClose,
                    onClose: o,
                    analyticsLocations: t,
                    initialSelectedDecoration: i,
                    guild: a,
                });
        },
        { stackingBehavior: l },
    );
};
