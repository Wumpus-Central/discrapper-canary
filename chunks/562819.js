"use strict";
n.d(t, { L: () => o, Te: () => s });
var a = n(627968);
n(64700);
var r = n(778712),
    i = n(192308);
n(515718);
var l = n(190460);
function s(e) {
    return "number" != typeof e ? (0, r.FT)(e) * l.Xq : e * l.Xq;
}
let o = (e) => {
    let { analyticsLocations: t, initialSelectedDecoration: r, guild: l, onClose: s, stackingBehavior: o } = e;
    (0, i.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("80527"), n.e("31825"), n.e("35059")]).then(n.bind(n, 40344));
            return (n) =>
                (0, a.jsx)(e, {
                    ...n,
                    onCloseModal: n.onClose,
                    onClose: s,
                    analyticsLocations: t,
                    initialSelectedDecoration: r,
                    guild: l,
                });
        },
        { stackingBehavior: o },
    );
};
