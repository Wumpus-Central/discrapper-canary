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
            let { default: e } = await Promise.all([
                n.e("18556"),
                n.e("17605"),
                n.e("54266"),
                n.e("64877"),
                n.e("18573"),
                n.e("21825"),
                n.e("98125"),
                n.e("18441"),
                n.e("76640"),
                n.e("14879"),
                n.e("31825"),
                n.e("51243"),
                n.e("78707"),
                n.e("27773"),
                n.e("77473"),
                n.e("20683"),
                n.e("27462"),
                n.e("28545"),
                n.e("6721"),
            ]).then(n.bind(n, 40344));
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
